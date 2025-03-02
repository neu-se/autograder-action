/**
 * Generated by @openapi-codegen
 *
 * @version 0.0.1
 */
import type * as Fetcher from './adminServiceFetcher';
import { adminServiceFetch } from './adminServiceFetcher';
import type * as Schemas from './adminServiceSchemas';

export type CreateGitHubReposForStudentError = Fetcher.ErrorWrapper<undefined>;

export type CreateGitHubReposForStudentResponse = {
  message: string;
  is_ok: boolean;
};

export const createGitHubReposForStudent = (signal?: AbortSignal) =>
  adminServiceFetch<
    CreateGitHubReposForStudentResponse,
    CreateGitHubReposForStudentError,
    undefined,
    {},
    {},
    {}
  >({ url: '/api/autograder/create-github-repos-for-student', method: 'post', signal });

export type RetrieveAutograderRegressionTestsHeaders = {
  Authorization: string;
};

export type RetrieveAutograderRegressionTestsError = Fetcher.ErrorWrapper<undefined>;

export type RetrieveAutograderRegressionTestsResponse = {
  configs: {
    /**
     * @format double
     */
    id: number;
  }[];
};

export type RetrieveAutograderRegressionTestsVariables = {
  headers: RetrieveAutograderRegressionTestsHeaders;
};

export const retrieveAutograderRegressionTests = (
  variables: RetrieveAutograderRegressionTestsVariables,
  signal?: AbortSignal,
) =>
  adminServiceFetch<
    RetrieveAutograderRegressionTestsResponse,
    RetrieveAutograderRegressionTestsError,
    undefined,
    RetrieveAutograderRegressionTestsHeaders,
    {},
    {}
  >({ url: '/api/autograder/regression-tests', method: 'get', ...variables, signal });

export type CreateSubmissionHeaders = {
  Authorization: string;
};

export type CreateSubmissionError = Fetcher.ErrorWrapper<undefined>;

export type CreateSubmissionVariables = {
  headers: CreateSubmissionHeaders;
};

export const createSubmission = (variables: CreateSubmissionVariables, signal?: AbortSignal) =>
  adminServiceFetch<
    Schemas.SubmissionResponse,
    CreateSubmissionError,
    undefined,
    CreateSubmissionHeaders,
    {},
    {}
  >({ url: '/api/autograder/submission', method: 'post', ...variables, signal });

export type CreateRegressionTestRunPathParams = {
  /**
   * @format double
   */
  regressionTestId: number;
};

export type CreateRegressionTestRunHeaders = {
  Authorization: string;
};

export type CreateRegressionTestRunError = Fetcher.ErrorWrapper<undefined>;

export type CreateRegressionTestRunVariables = {
  headers: CreateRegressionTestRunHeaders;
  pathParams: CreateRegressionTestRunPathParams;
};

export const createRegressionTestRun = (
  variables: CreateRegressionTestRunVariables,
  signal?: AbortSignal,
) =>
  adminServiceFetch<
    Schemas.RegressionTestRunResponse,
    CreateRegressionTestRunError,
    undefined,
    CreateRegressionTestRunHeaders,
    {},
    CreateRegressionTestRunPathParams
  >({
    url: '/api/autograder/regression-test-run/{regressionTestId}',
    method: 'post',
    ...variables,
    signal,
  });

export type SubmitFeedbackQueryParams = {
  /**
   * @format double
   */
  autograder_regression_test_id?: number;
};

export type SubmitFeedbackHeaders = {
  Authorization: string;
};

export type SubmitFeedbackError = Fetcher.ErrorWrapper<undefined>;

export type SubmitFeedbackVariables = {
  body: Schemas.GradingScriptResult;
  headers: SubmitFeedbackHeaders;
  queryParams?: SubmitFeedbackQueryParams;
};

export const submitFeedback = (variables: SubmitFeedbackVariables, signal?: AbortSignal) =>
  adminServiceFetch<
    Schemas.GradeResponse,
    SubmitFeedbackError,
    Schemas.GradingScriptResult,
    SubmitFeedbackHeaders,
    SubmitFeedbackQueryParams,
    {}
  >({ url: '/api/autograder/submission/feedback', method: 'post', ...variables, signal });

export type GetCanvasCoursesError = Fetcher.ErrorWrapper<undefined>;

export type GetCanvasCoursesResponse = Schemas.Course[];

export const getCanvasCourses = (signal?: AbortSignal) =>
  adminServiceFetch<GetCanvasCoursesResponse, GetCanvasCoursesError, undefined, {}, {}, {}>({
    url: '/api/admin/canvas/courses',
    method: 'get',
    signal,
  });

export type GetCanvasCoursePathParams = {
  /**
   * @format double
   */
  courseId: number;
};

export type GetCanvasCourseError = Fetcher.ErrorWrapper<undefined>;

export type GetCanvasCourseVariables = {
  pathParams: GetCanvasCoursePathParams;
};

export const getCanvasCourse = (variables: GetCanvasCourseVariables, signal?: AbortSignal) =>
  adminServiceFetch<
    Schemas.Course,
    GetCanvasCourseError,
    undefined,
    {},
    {},
    GetCanvasCoursePathParams
  >({ url: '/api/admin/canvas/courses/{courseId}', method: 'get', ...variables, signal });

export type CreateAssignmentRepositoriesPathParams = {
  /**
   * @format double
   */
  courseId: number;
  /**
   * @format double
   */
  assignmentId: number;
};

export type CreateAssignmentRepositoriesError = Fetcher.ErrorWrapper<undefined>;

export type CreateAssignmentRepositoriesVariables = {
  pathParams: CreateAssignmentRepositoriesPathParams;
};

export const createAssignmentRepositories = (
  variables: CreateAssignmentRepositoriesVariables,
  signal?: AbortSignal,
) =>
  adminServiceFetch<
    undefined,
    CreateAssignmentRepositoriesError,
    undefined,
    {},
    {},
    CreateAssignmentRepositoriesPathParams
  >({
    url: '/api/instructor/{courseId}/assignment/{assignmentId}/repositories',
    method: 'post',
    ...variables,
    signal,
  });

export type SyncEnrollmentsPathParams = {
  /**
   * @format double
   */
  courseId: number;
};

export type SyncEnrollmentsError = Fetcher.ErrorWrapper<undefined>;

export type SyncEnrollmentsVariables = {
  pathParams: SyncEnrollmentsPathParams;
};

export const syncEnrollments = (variables: SyncEnrollmentsVariables, signal?: AbortSignal) =>
  adminServiceFetch<undefined, SyncEnrollmentsError, undefined, {}, {}, SyncEnrollmentsPathParams>({
    url: '/api/instructor/{courseId}/enrollments',
    method: 'post',
    ...variables,
    signal,
  });

export type GetTemplateReposPathParams = {
  /**
   * @format double
   */
  courseId: number;
};

export type GetTemplateReposError = Fetcher.ErrorWrapper<undefined>;

export type GetTemplateReposResponse = {
  security_and_analysis?: {
    secret_scanning_ai_detection?: {
      status?: 'enabled' | 'disabled';
    };
    secret_scanning_non_provider_patterns?: {
      status?: 'enabled' | 'disabled';
    };
    secret_scanning_push_protection?: {
      status?: 'enabled' | 'disabled';
    };
    secret_scanning?: {
      status?: 'enabled' | 'disabled';
    };
    dependabot_security_updates?: {
      status?: 'enabled' | 'disabled';
    };
    advanced_security?: {
      status?: 'enabled' | 'disabled';
    };
  };
  web_commit_signoff_required?: boolean;
  allow_forking?: boolean;
  /**
   * @format double
   */
  watchers?: number;
  /**
   * @format double
   */
  open_issues?: number;
  /**
   * @format double
   */
  forks?: number;
  license?: {
    node_id?: string;
    url?: string;
    spdx_id?: string;
    name?: string;
    key?: string;
  };
  code_of_conduct?: {
    html_url: string;
    body?: string;
    url: string;
    name: string;
    key: string;
  };
  /**
   * @format double
   */
  network_count?: number;
  /**
   * @format double
   */
  subscribers_count?: number;
  delete_branch_on_merge?: boolean;
  temp_clone_token?: string;
  role_name?: string;
  permissions?: {
    pull?: boolean;
    triage?: boolean;
    push?: boolean;
    maintain?: boolean;
    admin?: boolean;
  };
  updated_at?: string;
  created_at?: string;
  pushed_at?: string;
  visibility?: string;
  disabled?: boolean;
  archived?: boolean;
  has_discussions?: boolean;
  has_downloads?: boolean;
  has_pages?: boolean;
  has_wiki?: boolean;
  has_projects?: boolean;
  has_issues?: boolean;
  topics?: string[];
  is_template?: boolean;
  /**
   * @format double
   */
  open_issues_count?: number;
  default_branch?: string;
  /**
   * @format double
   */
  size?: number;
  /**
   * @format double
   */
  watchers_count?: number;
  /**
   * @format double
   */
  stargazers_count?: number;
  /**
   * @format double
   */
  forks_count?: number;
  language?: string;
  homepage?: string;
  svn_url?: string;
  hooks_url: string;
  mirror_url?: string;
  clone_url?: string;
  trees_url: string;
  teams_url: string;
  tags_url: string;
  subscription_url: string;
  subscribers_url: string;
  statuses_url: string;
  stargazers_url: string;
  ssh_url?: string;
  releases_url: string;
  pulls_url: string;
  notifications_url: string;
  milestones_url: string;
  merges_url: string;
  languages_url: string;
  labels_url: string;
  keys_url: string;
  issues_url: string;
  issue_events_url: string;
  issue_comment_url: string;
  git_url?: string;
  git_tags_url: string;
  git_refs_url: string;
  git_commits_url: string;
  forks_url: string;
  events_url: string;
  downloads_url: string;
  deployments_url: string;
  contributors_url: string;
  contents_url: string;
  compare_url: string;
  commits_url: string;
  comments_url: string;
  collaborators_url: string;
  branches_url: string;
  blobs_url: string;
  assignees_url: string;
  archive_url: string;
  url: string;
  fork: boolean;
  description: string;
  html_url: string;
  private: boolean;
  owner: {
    user_view_type?: string;
    starred_at?: string;
    site_admin: boolean;
    type: string;
    received_events_url: string;
    events_url: string;
    repos_url: string;
    organizations_url: string;
    subscriptions_url: string;
    starred_url: string;
    gists_url: string;
    following_url: string;
    followers_url: string;
    html_url: string;
    url: string;
    gravatar_id: string;
    avatar_url: string;
    node_id: string;
    /**
     * @format double
     */
    id: number;
    login: string;
    email?: string;
    name?: string;
  };
  full_name: string;
  name: string;
  node_id: string;
  /**
   * @format double
   */
  id: number;
}[];

export type GetTemplateReposVariables = {
  pathParams: GetTemplateReposPathParams;
};

export const getTemplateRepos = (variables: GetTemplateReposVariables, signal?: AbortSignal) =>
  adminServiceFetch<
    GetTemplateReposResponse,
    GetTemplateReposError,
    undefined,
    {},
    {},
    GetTemplateReposPathParams
  >({ url: '/api/instructor/{courseId}/template-repos', method: 'get', ...variables, signal });

export type GetReposPathParams = {
  /**
   * @format double
   */
  courseId: number;
};

export type GetReposError = Fetcher.ErrorWrapper<undefined>;

export type GetReposResponse = {
  security_and_analysis?: {
    secret_scanning_ai_detection?: {
      status?: 'enabled' | 'disabled';
    };
    secret_scanning_non_provider_patterns?: {
      status?: 'enabled' | 'disabled';
    };
    secret_scanning_push_protection?: {
      status?: 'enabled' | 'disabled';
    };
    secret_scanning?: {
      status?: 'enabled' | 'disabled';
    };
    dependabot_security_updates?: {
      status?: 'enabled' | 'disabled';
    };
    advanced_security?: {
      status?: 'enabled' | 'disabled';
    };
  };
  web_commit_signoff_required?: boolean;
  allow_forking?: boolean;
  /**
   * @format double
   */
  watchers?: number;
  /**
   * @format double
   */
  open_issues?: number;
  /**
   * @format double
   */
  forks?: number;
  license?: {
    node_id?: string;
    url?: string;
    spdx_id?: string;
    name?: string;
    key?: string;
  };
  code_of_conduct?: {
    html_url: string;
    body?: string;
    url: string;
    name: string;
    key: string;
  };
  /**
   * @format double
   */
  network_count?: number;
  /**
   * @format double
   */
  subscribers_count?: number;
  delete_branch_on_merge?: boolean;
  temp_clone_token?: string;
  role_name?: string;
  permissions?: {
    pull?: boolean;
    triage?: boolean;
    push?: boolean;
    maintain?: boolean;
    admin?: boolean;
  };
  updated_at?: string;
  created_at?: string;
  pushed_at?: string;
  visibility?: string;
  disabled?: boolean;
  archived?: boolean;
  has_discussions?: boolean;
  has_downloads?: boolean;
  has_pages?: boolean;
  has_wiki?: boolean;
  has_projects?: boolean;
  has_issues?: boolean;
  topics?: string[];
  is_template?: boolean;
  /**
   * @format double
   */
  open_issues_count?: number;
  default_branch?: string;
  /**
   * @format double
   */
  size?: number;
  /**
   * @format double
   */
  watchers_count?: number;
  /**
   * @format double
   */
  stargazers_count?: number;
  /**
   * @format double
   */
  forks_count?: number;
  language?: string;
  homepage?: string;
  svn_url?: string;
  hooks_url: string;
  mirror_url?: string;
  clone_url?: string;
  trees_url: string;
  teams_url: string;
  tags_url: string;
  subscription_url: string;
  subscribers_url: string;
  statuses_url: string;
  stargazers_url: string;
  ssh_url?: string;
  releases_url: string;
  pulls_url: string;
  notifications_url: string;
  milestones_url: string;
  merges_url: string;
  languages_url: string;
  labels_url: string;
  keys_url: string;
  issues_url: string;
  issue_events_url: string;
  issue_comment_url: string;
  git_url?: string;
  git_tags_url: string;
  git_refs_url: string;
  git_commits_url: string;
  forks_url: string;
  events_url: string;
  downloads_url: string;
  deployments_url: string;
  contributors_url: string;
  contents_url: string;
  compare_url: string;
  commits_url: string;
  comments_url: string;
  collaborators_url: string;
  branches_url: string;
  blobs_url: string;
  assignees_url: string;
  archive_url: string;
  url: string;
  fork: boolean;
  description: string;
  html_url: string;
  private: boolean;
  owner: {
    user_view_type?: string;
    starred_at?: string;
    site_admin: boolean;
    type: string;
    received_events_url: string;
    events_url: string;
    repos_url: string;
    organizations_url: string;
    subscriptions_url: string;
    starred_url: string;
    gists_url: string;
    following_url: string;
    followers_url: string;
    html_url: string;
    url: string;
    gravatar_id: string;
    avatar_url: string;
    node_id: string;
    /**
     * @format double
     */
    id: number;
    login: string;
    email?: string;
    name?: string;
  };
  full_name: string;
  name: string;
  node_id: string;
  /**
   * @format double
   */
  id: number;
}[];

export type GetReposVariables = {
  pathParams: GetReposPathParams;
};

export const getRepos = (variables: GetReposVariables, signal?: AbortSignal) =>
  adminServiceFetch<GetReposResponse, GetReposError, undefined, {}, {}, GetReposPathParams>({
    url: '/api/instructor/{courseId}/repos',
    method: 'get',
    ...variables,
    signal,
  });

export type ListFilesInRepoPathParams = {
  /**
   * @format double
   */
  courseId: number;
  orgName: string;
  repoName: string;
};

export type ListFilesInRepoError = Fetcher.ErrorWrapper<undefined>;

export type ListFilesInRepoResponse = Schemas.FileListing[];

export type ListFilesInRepoVariables = {
  pathParams: ListFilesInRepoPathParams;
};

export const listFilesInRepo = (variables: ListFilesInRepoVariables, signal?: AbortSignal) =>
  adminServiceFetch<
    ListFilesInRepoResponse,
    ListFilesInRepoError,
    undefined,
    {},
    {},
    ListFilesInRepoPathParams
  >({
    url: '/api/instructor/{courseId}/repos/{orgName}/{repoName}/files',
    method: 'get',
    ...variables,
    signal,
  });

export type GetFileFromRepoPathParams = {
  /**
   * @format double
   */
  courseId: number;
  orgName: string;
  repoName: string;
  path: string;
};

export type GetFileFromRepoError = Fetcher.ErrorWrapper<undefined>;

export type GetFileFromRepoVariables = {
  pathParams: GetFileFromRepoPathParams;
};

export const getFileFromRepo = (variables: GetFileFromRepoVariables, signal?: AbortSignal) =>
  adminServiceFetch<
    | {
        _links: {
          self: string;
          html: string;
          git: string;
        };
        download_url: string;
        html_url: string;
        git_url: string;
        url: string;
        sha: string;
        content?: string;
        path: string;
        name: string;
        /**
         * @format double
         */
        size: number;
        type: 'dir' | 'file' | 'submodule' | 'symlink';
      }[]
    | {
        submodule_git_url?: string;
        target?: string;
        _links: {
          self: string;
          html: string;
          git: string;
        };
        download_url: string;
        html_url: string;
        git_url: string;
        url: string;
        sha: string;
        content: string;
        path: string;
        name: string;
        /**
         * @format double
         */
        size: number;
        encoding: string;
        type: 'file';
      }
    | {
        _links: {
          self: string;
          html: string;
          git: string;
        };
        download_url: string;
        html_url: string;
        git_url: string;
        url: string;
        sha: string;
        path: string;
        name: string;
        /**
         * @format double
         */
        size: number;
        target: string;
        type: 'symlink';
      }
    | {
        _links: {
          self: string;
          html: string;
          git: string;
        };
        download_url: string;
        html_url: string;
        git_url: string;
        url: string;
        sha: string;
        path: string;
        name: string;
        /**
         * @format double
         */
        size: number;
        submodule_git_url: string;
        type: 'submodule';
      },
    GetFileFromRepoError,
    undefined,
    {},
    {},
    GetFileFromRepoPathParams
  >({
    url: '/api/instructor/{courseId}/repos/{orgName}/{repoName}/files/{path}',
    method: 'get',
    ...variables,
    signal,
  });

export type TestSolutionWorkflowPathParams = {
  /**
   * @format double
   */
  courseId: number;
  /**
   * @format double
   */
  assignmentId: number;
  studentId: string;
};

export type TestSolutionWorkflowError = Fetcher.ErrorWrapper<undefined>;

export type TestSolutionWorkflowVariables = {
  pathParams: TestSolutionWorkflowPathParams;
};

export const testSolutionWorkflow = (
  variables: TestSolutionWorkflowVariables,
  signal?: AbortSignal,
) =>
  adminServiceFetch<
    undefined,
    TestSolutionWorkflowError,
    undefined,
    {},
    {},
    TestSolutionWorkflowPathParams
  >({
    url: '/api/instructor/{courseId}/autograder/{assignmentId}/{studentId}',
    method: 'post',
    ...variables,
    signal,
  });

export type CreateCourseForCanvasCoursePathParams = {
  /**
   * @format double
   */
  courseId: number;
};

export type CreateCourseForCanvasCourseError = Fetcher.ErrorWrapper<undefined>;

export type CreateCourseForCanvasCourseVariables = {
  pathParams: CreateCourseForCanvasCoursePathParams;
};

export const createCourseForCanvasCourse = (
  variables: CreateCourseForCanvasCourseVariables,
  signal?: AbortSignal,
) =>
  adminServiceFetch<
    undefined,
    CreateCourseForCanvasCourseError,
    undefined,
    {},
    {},
    CreateCourseForCanvasCoursePathParams
  >({ url: '/api/admin/course/{courseId}', method: 'post', ...variables, signal });

export type GetMeetingPathParams = {
  /**
   * @format double
   */
  requestId: number;
};

export type GetMeetingError = Fetcher.ErrorWrapper<undefined>;

export type GetMeetingVariables = {
  pathParams: GetMeetingPathParams;
};

export const getMeeting = (variables: GetMeetingVariables, signal?: AbortSignal) =>
  adminServiceFetch<
    Schemas.JoinMeetingResponse,
    GetMeetingError,
    undefined,
    {},
    {},
    GetMeetingPathParams
  >({ url: '/api/help-queue/help-request/{requestId}', method: 'get', ...variables, signal });
