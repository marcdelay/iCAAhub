
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime,
  createParam,
} = require('./runtime/wasm.js')


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

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

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
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/home/marcdelay/iCAAhub/app/generated/prisma/client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "debian-openssl-3.0.x",
        "native": true
      }
    ],
    "previewFeatures": [
      "driverAdapters",
      "prismaSchemaFolder"
    ],
    "sourceFilePath": "/home/marcdelay/iCAAhub/prisma/schema/schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null
  },
  "relativePath": "../../../../prisma/schema",
  "clientVersion": "6.6.0",
  "engineVersion": "f676762280b54cd07c770017ed3711ddde35f37a",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "model assignment {\n  assignment_id         Int                     @id @default(autoincrement())\n  classroom_id          Int\n  name                  String\n  description           String?\n  assignment_number     Int?\n  due_date              DateTime                @db.Date\n  created_at            DateTime?               @default(now()) @db.Timestamp(6)\n  classroom             classroom               @relation(fields: [classroom_id], references: [classroom_id], onDelete: Cascade)\n  assignment_submission assignment_submission[]\n  question              question[]\n}\n\nmodel assignment_submission {\n  assignment_submission_id Int                   @id @default(autoincrement())\n  assignment_id            Int\n  student_id               Int\n  s3_path                  String\n  submitted_at             DateTime?             @default(now()) @db.Timestamp(6)\n  assignment               assignment            @relation(fields: [assignment_id], references: [assignment_id], onDelete: NoAction, onUpdate: NoAction)\n  student                  student               @relation(fields: [student_id], references: [student_id], onDelete: NoAction, onUpdate: NoAction)\n  question_submission      question_submission[]\n}\n\nmodel question {\n  question_id              Int                   @id @default(autoincrement())\n  assignment_id            Int\n  question_number          Int?\n  name                     String?\n  prompt                   String?\n  example_solution_s3_path String?\n  accepted_file_types      String?\n  created_at               DateTime?             @default(now()) @db.Timestamp(6)\n  assignment               assignment            @relation(fields: [assignment_id], references: [assignment_id], onDelete: Cascade)\n  question_submission      question_submission[]\n}\n\nmodel question_submission {\n  question_submission_id   Int                   @id @default(autoincrement())\n  assignment_submission_id Int\n  question_id              Int\n  student_id               Int\n  s3_path                  String\n  created_at               DateTime?             @default(now()) @db.Timestamp(6)\n  assignment_submission    assignment_submission @relation(fields: [assignment_submission_id], references: [assignment_submission_id], onDelete: NoAction, onUpdate: NoAction)\n  question                 question              @relation(fields: [question_id], references: [question_id], onDelete: NoAction, onUpdate: NoAction)\n  student                  student               @relation(fields: [student_id], references: [student_id], onDelete: NoAction, onUpdate: NoAction)\n}\n\n/// This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.\nmodel classroom {\n  classroom_id      Int                 @id @default(autoincrement())\n  name              String\n  description       String?\n  created_at        DateTime            @default(now())\n  updated_at        DateTime            @updatedAt\n  student_classroom student_classroom[]\n  teacher_classroom teacher_classroom[]\n  assignment        assignment[]\n}\n\nmodel student {\n  student_id            Int                     @id @default(autoincrement())\n  user_id               Int                     @unique\n  created_at            DateTime                @default(now())\n  updated_at            DateTime                @updatedAt\n  assignment_submission assignment_submission[]\n  student_classroom     student_classroom[]\n  question_submission   question_submission[]\n  student_scholarship   student_scholarship[]\n  user                  user                    @relation(fields: [user_id], references: [user_id], onDelete: Cascade)\n}\n\nmodel student_classroom {\n  student_classroom_id Int       @id @default(autoincrement())\n  student_id           Int\n  classroom_id         Int\n  student              student   @relation(fields: [student_id], references: [student_id])\n  classroom            classroom @relation(fields: [classroom_id], references: [classroom_id])\n  created_at           DateTime  @default(now())\n  updated_at           DateTime  @updatedAt\n\n  @@unique([student_id, classroom_id])\n}\n\nmodel teacher {\n  teacher_id        Int                 @id @default(autoincrement())\n  user_id           Int                 @unique\n  created_at        DateTime            @default(now())\n  updated_at        DateTime            @updatedAt\n  user              user                @relation(fields: [user_id], references: [user_id], onDelete: Cascade)\n  teacher_classroom teacher_classroom[]\n}\n\n/// This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.\nmodel teacher_classroom {\n  teacher_classrood_id Int       @id @default(autoincrement())\n  teacher_id           Int\n  classroom_id         Int\n  teacher              teacher   @relation(fields: [teacher_id], references: [teacher_id])\n  classroom            classroom @relation(fields: [classroom_id], references: [classroom_id])\n  created_at           DateTime  @default(now())\n  updated_at           DateTime  @updatedAt\n\n  @@unique([teacher_id, classroom_id])\n}\n\ngenerator client {\n  provider        = \"prisma-client-js\"\n  previewFeatures = [\"driverAdapters\", \"prismaSchemaFolder\"]\n  output          = \"../../app/generated/prisma/client\"\n}\n\ndatasource db {\n  provider = \"postgresql\"\n  url      = env(\"DATABASE_URL\")\n}\n\nmodel scholarship {\n  scholarship_id      Int                   @id @default(autoincrement())\n  name                String\n  organization_id     Int\n  award               String?\n  description         String?\n  category            String?\n  eligibility         String?\n  region              String?\n  deadline            DateTime?             @db.Date\n  fafsa               Boolean?              @default(false)\n  gpa                 Decimal?              @db.Decimal(3, 2)\n  created_at          DateTime?             @default(now()) @db.Timestamp(6)\n  organization        organization          @relation(fields: [organization_id], references: [organization_id], onDelete: Cascade, onUpdate: NoAction)\n  student_scholarship student_scholarship[]\n}\n\nmodel student_scholarship {\n  student_scholarship_id Int         @id @default(autoincrement())\n  student_id             Int\n  scholarship_id         Int\n  is_bookmarked          Boolean?    @default(false)\n  scholarship            scholarship @relation(fields: [scholarship_id], references: [scholarship_id], onDelete: Cascade, onUpdate: NoAction)\n  student                student     @relation(fields: [student_id], references: [student_id], onDelete: Cascade, onUpdate: NoAction)\n}\n\nmodel post {\n  post_id   Int     @id @default(autoincrement())\n  title     String\n  content   String?\n  published Boolean @default(false)\n  author_id Int?\n  author    user?   @relation(fields: [author_id], references: [user_id])\n}\n\nmodel user {\n  user_id           Int                 @id @default(autoincrement())\n  name              String?\n  email             String              @unique\n  role              UserRole            @default(GUEST)\n  payment_info      String?\n  invite_code       String?             @db.Uuid\n  signup_complete   Boolean?\n  created_at        DateTime?           @default(now()) @db.Timestamp(6)\n  updated_at        DateTime?           @default(now()) @db.Timestamp(6)\n  city              String?\n  state             String?\n  country           String?\n  timezone          String?\n  admin             admin?\n  user_organization user_organization[]\n  student           student?\n  teacher           teacher?\n  post              post[]\n}\n\nmodel admin {\n  admin_id  Int      @id\n  is_active Boolean?\n  user_id   Int      @unique\n  user      user     @relation(fields: [user_id], references: [user_id], onDelete: Cascade)\n}\n\nmodel organization {\n  organization_id   Int                 @id @default(autoincrement())\n  name              String?\n  description       String?\n  website           String?\n  old_id            String?             @db.Uuid\n  scholarship       scholarship[]\n  user_organization user_organization[]\n}\n\nmodel user_organization {\n  user_organization_id Int          @id @default(autoincrement())\n  user_id              Int\n  organization_id      Int\n  organization         organization @relation(fields: [organization_id], references: [organization_id], onDelete: NoAction, onUpdate: NoAction)\n  user                 user         @relation(fields: [user_id], references: [user_id], onDelete: NoAction, onUpdate: NoAction)\n}\n\nenum UserRole {\n  ADMIN\n  TEACHER\n  STUDENT\n  GUEST\n}\n",
  "inlineSchemaHash": "16a1ee1c900fa03f246c1bb33253431b29816a002dc3a4aeda7e84909ca6ab86",
  "copyEngine": true
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"assignment\":{\"fields\":[{\"name\":\"assignment_id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"classroom_id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"description\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"assignment_number\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"due_date\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"created_at\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"classroom\",\"kind\":\"object\",\"type\":\"classroom\",\"relationName\":\"assignmentToclassroom\"},{\"name\":\"assignment_submission\",\"kind\":\"object\",\"type\":\"assignment_submission\",\"relationName\":\"assignmentToassignment_submission\"},{\"name\":\"question\",\"kind\":\"object\",\"type\":\"question\",\"relationName\":\"assignmentToquestion\"}],\"dbName\":null},\"assignment_submission\":{\"fields\":[{\"name\":\"assignment_submission_id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"assignment_id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"student_id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"s3_path\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"submitted_at\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"assignment\",\"kind\":\"object\",\"type\":\"assignment\",\"relationName\":\"assignmentToassignment_submission\"},{\"name\":\"student\",\"kind\":\"object\",\"type\":\"student\",\"relationName\":\"assignment_submissionTostudent\"},{\"name\":\"question_submission\",\"kind\":\"object\",\"type\":\"question_submission\",\"relationName\":\"assignment_submissionToquestion_submission\"}],\"dbName\":null},\"question\":{\"fields\":[{\"name\":\"question_id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"assignment_id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"question_number\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"prompt\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"example_solution_s3_path\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"accepted_file_types\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"created_at\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"assignment\",\"kind\":\"object\",\"type\":\"assignment\",\"relationName\":\"assignmentToquestion\"},{\"name\":\"question_submission\",\"kind\":\"object\",\"type\":\"question_submission\",\"relationName\":\"questionToquestion_submission\"}],\"dbName\":null},\"question_submission\":{\"fields\":[{\"name\":\"question_submission_id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"assignment_submission_id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"question_id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"student_id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"s3_path\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"created_at\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"assignment_submission\",\"kind\":\"object\",\"type\":\"assignment_submission\",\"relationName\":\"assignment_submissionToquestion_submission\"},{\"name\":\"question\",\"kind\":\"object\",\"type\":\"question\",\"relationName\":\"questionToquestion_submission\"},{\"name\":\"student\",\"kind\":\"object\",\"type\":\"student\",\"relationName\":\"question_submissionTostudent\"}],\"dbName\":null},\"classroom\":{\"fields\":[{\"name\":\"classroom_id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"description\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"created_at\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"student_classroom\",\"kind\":\"object\",\"type\":\"student_classroom\",\"relationName\":\"classroomTostudent_classroom\"},{\"name\":\"teacher_classroom\",\"kind\":\"object\",\"type\":\"teacher_classroom\",\"relationName\":\"classroomToteacher_classroom\"},{\"name\":\"assignment\",\"kind\":\"object\",\"type\":\"assignment\",\"relationName\":\"assignmentToclassroom\"}],\"dbName\":null},\"student\":{\"fields\":[{\"name\":\"student_id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"user_id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"created_at\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"assignment_submission\",\"kind\":\"object\",\"type\":\"assignment_submission\",\"relationName\":\"assignment_submissionTostudent\"},{\"name\":\"student_classroom\",\"kind\":\"object\",\"type\":\"student_classroom\",\"relationName\":\"studentTostudent_classroom\"},{\"name\":\"question_submission\",\"kind\":\"object\",\"type\":\"question_submission\",\"relationName\":\"question_submissionTostudent\"},{\"name\":\"student_scholarship\",\"kind\":\"object\",\"type\":\"student_scholarship\",\"relationName\":\"studentTostudent_scholarship\"},{\"name\":\"user\",\"kind\":\"object\",\"type\":\"user\",\"relationName\":\"studentTouser\"}],\"dbName\":null},\"student_classroom\":{\"fields\":[{\"name\":\"student_classroom_id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"student_id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"classroom_id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"student\",\"kind\":\"object\",\"type\":\"student\",\"relationName\":\"studentTostudent_classroom\"},{\"name\":\"classroom\",\"kind\":\"object\",\"type\":\"classroom\",\"relationName\":\"classroomTostudent_classroom\"},{\"name\":\"created_at\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null},\"teacher\":{\"fields\":[{\"name\":\"teacher_id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"user_id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"created_at\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"user\",\"kind\":\"object\",\"type\":\"user\",\"relationName\":\"teacherTouser\"},{\"name\":\"teacher_classroom\",\"kind\":\"object\",\"type\":\"teacher_classroom\",\"relationName\":\"teacherToteacher_classroom\"}],\"dbName\":null},\"teacher_classroom\":{\"fields\":[{\"name\":\"teacher_classrood_id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"teacher_id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"classroom_id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"teacher\",\"kind\":\"object\",\"type\":\"teacher\",\"relationName\":\"teacherToteacher_classroom\"},{\"name\":\"classroom\",\"kind\":\"object\",\"type\":\"classroom\",\"relationName\":\"classroomToteacher_classroom\"},{\"name\":\"created_at\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null},\"scholarship\":{\"fields\":[{\"name\":\"scholarship_id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"organization_id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"award\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"description\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"category\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"eligibility\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"region\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"deadline\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"fafsa\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"gpa\",\"kind\":\"scalar\",\"type\":\"Decimal\"},{\"name\":\"created_at\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"organization\",\"kind\":\"object\",\"type\":\"organization\",\"relationName\":\"organizationToscholarship\"},{\"name\":\"student_scholarship\",\"kind\":\"object\",\"type\":\"student_scholarship\",\"relationName\":\"scholarshipTostudent_scholarship\"}],\"dbName\":null},\"student_scholarship\":{\"fields\":[{\"name\":\"student_scholarship_id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"student_id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"scholarship_id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"is_bookmarked\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"scholarship\",\"kind\":\"object\",\"type\":\"scholarship\",\"relationName\":\"scholarshipTostudent_scholarship\"},{\"name\":\"student\",\"kind\":\"object\",\"type\":\"student\",\"relationName\":\"studentTostudent_scholarship\"}],\"dbName\":null},\"post\":{\"fields\":[{\"name\":\"post_id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"title\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"content\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"published\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"author_id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"author\",\"kind\":\"object\",\"type\":\"user\",\"relationName\":\"postTouser\"}],\"dbName\":null},\"user\":{\"fields\":[{\"name\":\"user_id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"email\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"role\",\"kind\":\"enum\",\"type\":\"UserRole\"},{\"name\":\"payment_info\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"invite_code\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"signup_complete\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"created_at\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"city\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"state\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"country\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"timezone\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"admin\",\"kind\":\"object\",\"type\":\"admin\",\"relationName\":\"adminTouser\"},{\"name\":\"user_organization\",\"kind\":\"object\",\"type\":\"user_organization\",\"relationName\":\"userTouser_organization\"},{\"name\":\"student\",\"kind\":\"object\",\"type\":\"student\",\"relationName\":\"studentTouser\"},{\"name\":\"teacher\",\"kind\":\"object\",\"type\":\"teacher\",\"relationName\":\"teacherTouser\"},{\"name\":\"post\",\"kind\":\"object\",\"type\":\"post\",\"relationName\":\"postTouser\"}],\"dbName\":null},\"admin\":{\"fields\":[{\"name\":\"admin_id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"is_active\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"user_id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"user\",\"kind\":\"object\",\"type\":\"user\",\"relationName\":\"adminTouser\"}],\"dbName\":null},\"organization\":{\"fields\":[{\"name\":\"organization_id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"description\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"website\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"old_id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"scholarship\",\"kind\":\"object\",\"type\":\"scholarship\",\"relationName\":\"organizationToscholarship\"},{\"name\":\"user_organization\",\"kind\":\"object\",\"type\":\"user_organization\",\"relationName\":\"organizationTouser_organization\"}],\"dbName\":null},\"user_organization\":{\"fields\":[{\"name\":\"user_organization_id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"user_id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"organization_id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"organization\",\"kind\":\"object\",\"type\":\"organization\",\"relationName\":\"organizationTouser_organization\"},{\"name\":\"user\",\"kind\":\"object\",\"type\":\"user\",\"relationName\":\"userTouser_organization\"}],\"dbName\":null}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = {
  getRuntime: async () => require('./query_engine_bg.js'),
  getQueryEngineWasmModule: async () => {
    const loader = (await import('#wasm-engine-loader')).default
    const engine = (await loader).default
    return engine
  }
}
config.compilerWasm = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

