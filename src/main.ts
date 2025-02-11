import * as core from '@actions/core'
import { exec } from '@actions/exec'
import { createHash } from 'crypto'
import { createWriteStream } from 'fs'
import { mkdir, readFile } from 'fs/promises'
import { Readable } from 'stream'
import { finished } from 'stream/promises'
import {
  createSubmission,
  submitFeedback
} from './api/adminServiceComponents.js'
import grade from './grader/Grader.js'
/**
 * The main function for the action.
 *
 * @returns Resolves when the action is complete.
 */
export async function run(): Promise<void> {
  try {
    //Get an OIDC token
    const token = await core.getIDToken()
    if (!token) {
      throw new Error(
        'Unable to get OIDC token. Is workflow permission configured correctly?'
      )
    }
    //Double check: is this the handout? If so, ignore the rest of the action and just log a warning
    const handout = await core.getInput('handout_repo')
    if (handout && handout === process.env.GITHUB_REPOSITORY) {
      core.warning(
        'This action appears to have been triggered by running in the handout repo. No submission has been created, and it will not be graded.'
      )
      return
    }
    const graderConfig = await createSubmission({
      headers: {
        Authorization: token
      }
    })
    // Download the autograder
    const file = await fetch(graderConfig.grader_url)
    //Save to disk
    if (!file.body) {
      throw new Error('No body in response')
    }
    const fileStream = createWriteStream('grader.tgz')
    await finished(Readable.fromWeb(file.body).pipe(fileStream))
    //Calculate the sha256 hash of the file
    const hash = createHash('sha256')
    const fileContents = await readFile('grader.tgz')
    hash.update(fileContents)
    const graderSha = hash.digest('hex')
    //Unzip the file to the directory "grader"
    await mkdir('grader')
    await exec('tar', [
      'xzf',
      'grader.tgz',
      '-C',
      'grader',
      '--strip-components',
      '1'
    ])
    const workDir = process.env.GITHUB_WORKSPACE

    //Run the autograder
    const assignmentDir = `${workDir}/submission`
    const graderDir = `${workDir}/grader`
    const start = Date.now()
    try {
      const results = await grade(assignmentDir, graderDir)
      await submitFeedback({
        body: {
          ret_code: 0,
          output: '',
          execution_time: Date.now() - start,
          feedback: results,
          grader_sha: graderSha
        },
        headers: {
          Authorization: token
        }
      })
    } catch (error) {
      if (error instanceof Error) {
        await submitFeedback({
          body: {
            ret_code: 1,
            output: `${error.message}`,
            execution_time: Date.now() - start,
            grader_sha: graderSha,
            feedback: {
              output: {},
              tests: [],
              lint: {
                output: 'Unknown error',
                status: 'fail'
              }
            }
          },
          headers: {
            Authorization: token
          }
        })
        core.setFailed(error.message)
        console.error(error)
      }
    }
  } catch (error) {
    // Fail the workflow run if an error occurs
    console.trace(error)
    core.setFailed(`An error occurred: ${error}`)
  }
}
