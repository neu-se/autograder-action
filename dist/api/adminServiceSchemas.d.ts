/**
 * Generated by @openapi-codegen
 *
 * @version 0.0.1
 */
export type Calendar = {
    ics: string;
};
export type Grades = {
    html_url: string;
    current_grade: any | null;
    /**
     * @format double
     */
    current_score: number;
    final_grade: any | null;
    /**
     * @format double
     */
    final_score: number;
    /**
     * @format double
     */
    unposted_current_score: number;
    unposted_current_grade: any | null;
    /**
     * @format double
     */
    unposted_final_score: number;
    unposted_final_grade: any | null;
};
export type User = {
    /**
     * @format double
     */
    id: number;
    name: string;
    /**
     * @format date-time
     */
    created_at: string;
    sortable_name: string;
    short_name: string;
    sis_user_id: string;
    integration_id: any | null;
    login_id: string;
};
export type Enrollment = {
    /**
     * @format double
     */
    id: number;
    /**
     * @format double
     */
    user_id: number;
    /**
     * @format double
     */
    course_id: number;
    type: string;
    /**
     * @format date-time
     */
    created_at: string;
    /**
     * @format date-time
     */
    updated_at: string;
    associated_user_id: any | null;
    start_at: any | null;
    end_at: any | null;
    /**
     * @format double
     */
    course_section_id: number;
    /**
     * @format double
     */
    root_account_id: number;
    limit_privileges_to_course_section: boolean;
    enrollment_state: string;
    role: string;
    /**
     * @format double
     */
    role_id: number;
    /**
     * @format date-time
     */
    last_activity_at: string;
    last_attended_at: any | null;
    /**
     * @format double
     */
    total_activity_time: number;
    grades: Grades;
    sis_account_id: string;
    sis_course_id: string;
    course_integration_id: any | null;
    sis_section_id: string;
    section_integration_id: any | null;
    sis_user_id: string;
    html_url: string;
    user: User;
};
export type Course = {
    /**
     * @format double
     */
    id: number;
    name: string;
    /**
     * @format double
     */
    account_id: number;
    uuid: string;
    start_at: any | null;
    grading_standard_id: any | null;
    is_public: boolean;
    /**
     * @format date-time
     */
    created_at: string;
    course_code: string;
    default_view: string;
    /**
     * @format double
     */
    root_account_id: number;
    /**
     * @format double
     */
    enrollment_term_id: number;
    license: string;
    grade_passback_setting: any | null;
    /**
     * @format date-time
     */
    end_at: string;
    public_syllabus: boolean;
    public_syllabus_to_auth: boolean;
    /**
     * @format double
     */
    storage_quota_mb: number;
    is_public_to_auth_users: boolean;
    homeroom_course: boolean;
    course_color: any | null;
    friendly_name: any | null;
    apply_assignment_group_weights: boolean;
    calendar: Calendar;
    time_zone: string;
    blueprint: boolean;
    template: boolean;
    sis_course_id: any | null;
    integration_id: any | null;
    enrollments: Enrollment[];
    hide_final_grades: boolean;
    workflow_state: string;
    restrict_enrollments_to_course_dates: boolean;
};
export type SubmissionResponse = {
    grader_url: string;
};
export type GradeResponse = {
    message: string;
    is_ok: boolean;
};
export type OutputFormat = 'text';
export type AutograderFeedback = {
    tests: {
        extra_data?: {
            [key: string]: string;
        };
        tags?: string[];
        output_format?: OutputFormat;
        output: string;
        name_format?: OutputFormat;
        name: string;
        /**
         * @format double
         */
        max_score?: number;
        /**
         * @format double
         */
        score?: number;
    }[];
    lint: {
        output_format?: OutputFormat;
        output: string;
        status: 'pass' | 'fail';
    };
    output: {
        hidden?: {
            output_format?: 'text';
            output: string;
        };
        visible?: {
            output_format?: 'text';
            output: string;
        };
        after_due_date?: {
            output_format?: 'text';
            output: string;
        };
        after_published?: {
            output_format?: 'text';
            output: string;
        };
    };
    /**
     * @format double
     */
    score?: number;
};
export type GradingScriptResult = {
    grader_sha: string;
    feedback: AutograderFeedback;
    /**
     * @format double
     */
    execution_time: number;
    output: string;
    /**
     * @format double
     */
    ret_code: number;
};
