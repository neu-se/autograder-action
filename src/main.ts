import * as core from '@actions/core'
import { submitAssignment } from './api/adminServiceComponents.js'

/**
 * The main function for the action.
 *
 * @returns Resolves when the action is complete.
 */
export async function run(): Promise<void> {
  try {
    //Get an OIDC token
    const token = await core.getIDToken()
    console.log('Token:', token)
    submitAssignment({
      body: { score: 4, execution_time: 5 },
      headers: {
        Authorization: token
      }
    })
  } catch (error) {
    // Fail the workflow run if an error occurs
    if (error instanceof Error) core.setFailed(error.message)
  }
}
