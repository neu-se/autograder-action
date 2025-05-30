import { AutograderFeedback } from '../api/adminServiceSchemas.js'

// Build configuration types
export interface BuildConfig {
  preset: 'java-gradle'
  cmd: string
  artifacts: string[]
  linter: {
    preset: 'checkstyle'
    policy: 'fail' | 'warn' | 'ignore'
  }
  student_tests: {
    grading: 'none' | 'mutation'
  }
}

// Mutation testing types
export interface BreakPoint {
  minimumMutantsDetected: number
  pointsToAward: number
}

export interface MutationTestUnit {
  name: string
  locations: string[] // format: "file:line-line"
  breakPoints: BreakPoint[]
}

// Regular test unit types
export interface RegularTestUnit {
  name: string
  tests: string | string[] // format: "[T#.#]"
  points: number
  testCount: number
  allow_partial_credit?: boolean
}

// Combined graded unit type
export type GradedUnit = MutationTestUnit | RegularTestUnit

// Graded part type
export interface GradedPart {
  name: string
  gradedUnits: GradedUnit[]
  hide_until_released?: boolean
}

// Main configuration type
export interface PawtograderConfig {
  build: BuildConfig
  gradedParts: GradedPart[]
  submissionFiles: {
    files: string[]
    testFiles: string[]
  }
}

// Type guard to check if a unit is a mutation test unit
export function isMutationTestUnit(unit: GradedUnit): unit is MutationTestUnit {
  return 'locations' in unit && 'breakPoints' in unit
}

// Type guard to check if a unit is a regular test unit
export function isRegularTestUnit(unit: GradedUnit): unit is RegularTestUnit {
  return 'tests' in unit && 'testCount' in unit
}
export type OutputFormat = 'text' | 'ansi' | 'markdown'
export type OutputVisibility =
  | 'hidden' // Never shown to students
  | 'visible' // Always shown to students
  | 'after_due_date' // Shown to students after the due date
  | 'after_published' // Shown to students after grades are published

export type AutograderTestFeedback = AutograderFeedback['tests'][0]
