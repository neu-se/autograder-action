/**
 * Generated by @openapi-codegen
 *
 * @version 0.0.1
 */
import type * as Fetcher from './adminServiceFetcher.js';
import type * as Schemas from './adminServiceSchemas.js';
export type GetCanvasCoursesError = Fetcher.ErrorWrapper<undefined>;
export type GetCanvasCoursesResponse = Schemas.Course[];
export declare const getCanvasCourses: (signal?: AbortSignal) => Promise<GetCanvasCoursesResponse>;
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
export declare const getCanvasCourse: (variables: GetCanvasCourseVariables, signal?: AbortSignal) => Promise<Schemas.Course>;
export type CreateSubmissionHeaders = {
    Authorization: string;
};
export type CreateSubmissionError = Fetcher.ErrorWrapper<undefined>;
export type CreateSubmissionVariables = {
    headers: CreateSubmissionHeaders;
};
export declare const createSubmission: (variables: CreateSubmissionVariables, signal?: AbortSignal) => Promise<Schemas.SubmissionResponse>;
export type SubmitFeedbackHeaders = {
    Authorization: string;
};
export type SubmitFeedbackError = Fetcher.ErrorWrapper<undefined>;
export type SubmitFeedbackVariables = {
    body: Schemas.GradingScriptResult;
    headers: SubmitFeedbackHeaders;
};
export declare const submitFeedback: (variables: SubmitFeedbackVariables, signal?: AbortSignal) => Promise<Schemas.GradeResponse>;
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
export declare const createAssignmentRepositories: (variables: CreateAssignmentRepositoriesVariables, signal?: AbortSignal) => Promise<undefined>;
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
export declare const syncEnrollments: (variables: SyncEnrollmentsVariables, signal?: AbortSignal) => Promise<undefined>;
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
export declare const getTemplateRepos: (variables: GetTemplateReposVariables, signal?: AbortSignal) => Promise<GetTemplateReposResponse>;
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
export declare const createCourseForCanvasCourse: (variables: CreateCourseForCanvasCourseVariables, signal?: AbortSignal) => Promise<undefined>;
