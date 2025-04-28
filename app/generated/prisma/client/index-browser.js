
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.AssignmentScalarFieldEnum = {
  assignment_id: 'assignment_id',
  classroom_id: 'classroom_id',
  name: 'name',
  description: 'description',
  assignment_number: 'assignment_number',
  due_date: 'due_date',
  created_at: 'created_at'
};

exports.Prisma.Assignment_submissionScalarFieldEnum = {
  assignment_submission_id: 'assignment_submission_id',
  assignment_id: 'assignment_id',
  student_id: 'student_id',
  s3_path: 's3_path',
  submitted_at: 'submitted_at'
};

exports.Prisma.QuestionScalarFieldEnum = {
  question_id: 'question_id',
  assignment_id: 'assignment_id',
  question_number: 'question_number',
  name: 'name',
  prompt: 'prompt',
  example_solution_s3_path: 'example_solution_s3_path',
  accepted_file_types: 'accepted_file_types',
  created_at: 'created_at'
};

exports.Prisma.Question_submissionScalarFieldEnum = {
  question_submission_id: 'question_submission_id',
  assignment_submission_id: 'assignment_submission_id',
  question_id: 'question_id',
  student_id: 'student_id',
  s3_path: 's3_path',
  created_at: 'created_at'
};

exports.Prisma.ClassroomScalarFieldEnum = {
  classroom_id: 'classroom_id',
  name: 'name',
  description: 'description',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.StudentScalarFieldEnum = {
  student_id: 'student_id',
  user_id: 'user_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Student_classroomScalarFieldEnum = {
  student_classroom_id: 'student_classroom_id',
  student_id: 'student_id',
  classroom_id: 'classroom_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.TeacherScalarFieldEnum = {
  teacher_id: 'teacher_id',
  user_id: 'user_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Teacher_classroomScalarFieldEnum = {
  teacher_classrood_id: 'teacher_classrood_id',
  teacher_id: 'teacher_id',
  classroom_id: 'classroom_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.ScholarshipScalarFieldEnum = {
  scholarship_id: 'scholarship_id',
  name: 'name',
  organization_id: 'organization_id',
  award: 'award',
  description: 'description',
  category: 'category',
  eligibility: 'eligibility',
  region: 'region',
  deadline: 'deadline',
  fafsa: 'fafsa',
  gpa: 'gpa',
  created_at: 'created_at'
};

exports.Prisma.Student_scholarshipScalarFieldEnum = {
  student_scholarship_id: 'student_scholarship_id',
  student_id: 'student_id',
  scholarship_id: 'scholarship_id',
  is_bookmarked: 'is_bookmarked'
};

exports.Prisma.PostScalarFieldEnum = {
  post_id: 'post_id',
  title: 'title',
  content: 'content',
  published: 'published',
  author_id: 'author_id'
};

exports.Prisma.UserScalarFieldEnum = {
  user_id: 'user_id',
  name: 'name',
  email: 'email',
  role: 'role',
  payment_info: 'payment_info',
  invite_code: 'invite_code',
  signup_complete: 'signup_complete',
  created_at: 'created_at',
  updated_at: 'updated_at',
  city: 'city',
  state: 'state',
  country: 'country',
  timezone: 'timezone'
};

exports.Prisma.AdminScalarFieldEnum = {
  admin_id: 'admin_id',
  is_active: 'is_active',
  user_id: 'user_id'
};

exports.Prisma.OrganizationScalarFieldEnum = {
  organization_id: 'organization_id',
  name: 'name',
  description: 'description',
  website: 'website',
  old_id: 'old_id'
};

exports.Prisma.User_organizationScalarFieldEnum = {
  user_organization_id: 'user_organization_id',
  user_id: 'user_id',
  organization_id: 'organization_id'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.UserRole = exports.$Enums.UserRole = {
  ADMIN: 'ADMIN',
  TEACHER: 'TEACHER',
  STUDENT: 'STUDENT',
  GUEST: 'GUEST'
};

exports.Prisma.ModelName = {
  assignment: 'assignment',
  assignment_submission: 'assignment_submission',
  question: 'question',
  question_submission: 'question_submission',
  classroom: 'classroom',
  student: 'student',
  student_classroom: 'student_classroom',
  teacher: 'teacher',
  teacher_classroom: 'teacher_classroom',
  scholarship: 'scholarship',
  student_scholarship: 'student_scholarship',
  post: 'post',
  user: 'user',
  admin: 'admin',
  organization: 'organization',
  user_organization: 'user_organization'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
