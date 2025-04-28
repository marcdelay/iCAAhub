
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
} = require('./runtime/library.js')


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




  const path = require('path')

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

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "app/generated/prisma/client",
    "generated/prisma/client",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"assignment\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"assignment_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"classroom_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"assignment_number\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"due_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"6\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"classroom\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"classroom\",\"nativeType\":null,\"relationName\":\"assignmentToclassroom\",\"relationFromFields\":[\"classroom_id\"],\"relationToFields\":[\"classroom_id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"assignment_submission\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"assignment_submission\",\"nativeType\":null,\"relationName\":\"assignmentToassignment_submission\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"question\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"question\",\"nativeType\":null,\"relationName\":\"assignmentToquestion\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"assignment_submission\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"assignment_submission_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"assignment_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"student_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"s3_path\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"submitted_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"6\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"assignment\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"assignment\",\"nativeType\":null,\"relationName\":\"assignmentToassignment_submission\",\"relationFromFields\":[\"assignment_id\"],\"relationToFields\":[\"assignment_id\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"student\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"student\",\"nativeType\":null,\"relationName\":\"assignment_submissionTostudent\",\"relationFromFields\":[\"student_id\"],\"relationToFields\":[\"student_id\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"question_submission\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"question_submission\",\"nativeType\":null,\"relationName\":\"assignment_submissionToquestion_submission\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"question\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"question_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"assignment_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"question_number\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"prompt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"example_solution_s3_path\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"accepted_file_types\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"6\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"assignment\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"assignment\",\"nativeType\":null,\"relationName\":\"assignmentToquestion\",\"relationFromFields\":[\"assignment_id\"],\"relationToFields\":[\"assignment_id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"question_submission\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"question_submission\",\"nativeType\":null,\"relationName\":\"questionToquestion_submission\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"question_submission\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"question_submission_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"assignment_submission_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"question_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"student_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"s3_path\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"6\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"assignment_submission\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"assignment_submission\",\"nativeType\":null,\"relationName\":\"assignment_submissionToquestion_submission\",\"relationFromFields\":[\"assignment_submission_id\"],\"relationToFields\":[\"assignment_submission_id\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"question\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"question\",\"nativeType\":null,\"relationName\":\"questionToquestion_submission\",\"relationFromFields\":[\"question_id\"],\"relationToFields\":[\"question_id\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"student\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"student\",\"nativeType\":null,\"relationName\":\"question_submissionTostudent\",\"relationFromFields\":[\"student_id\"],\"relationToFields\":[\"student_id\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"classroom\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"classroom_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"student_classroom\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"student_classroom\",\"nativeType\":null,\"relationName\":\"classroomTostudent_classroom\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"teacher_classroom\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"teacher_classroom\",\"nativeType\":null,\"relationName\":\"classroomToteacher_classroom\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"assignment\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"assignment\",\"nativeType\":null,\"relationName\":\"assignmentToclassroom\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.\"},\"student\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"student_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"assignment_submission\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"assignment_submission\",\"nativeType\":null,\"relationName\":\"assignment_submissionTostudent\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"student_classroom\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"student_classroom\",\"nativeType\":null,\"relationName\":\"studentTostudent_classroom\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"question_submission\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"question_submission\",\"nativeType\":null,\"relationName\":\"question_submissionTostudent\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"student_scholarship\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"student_scholarship\",\"nativeType\":null,\"relationName\":\"studentTostudent_scholarship\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"user\",\"nativeType\":null,\"relationName\":\"studentTouser\",\"relationFromFields\":[\"user_id\"],\"relationToFields\":[\"user_id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"student_classroom\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"student_classroom_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"student_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"classroom_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"student\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"student\",\"nativeType\":null,\"relationName\":\"studentTostudent_classroom\",\"relationFromFields\":[\"student_id\"],\"relationToFields\":[\"student_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"classroom\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"classroom\",\"nativeType\":null,\"relationName\":\"classroomTostudent_classroom\",\"relationFromFields\":[\"classroom_id\"],\"relationToFields\":[\"classroom_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[[\"student_id\",\"classroom_id\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"student_id\",\"classroom_id\"]}],\"isGenerated\":false},\"teacher\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"teacher_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"user\",\"nativeType\":null,\"relationName\":\"teacherTouser\",\"relationFromFields\":[\"user_id\"],\"relationToFields\":[\"user_id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"teacher_classroom\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"teacher_classroom\",\"nativeType\":null,\"relationName\":\"teacherToteacher_classroom\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"teacher_classroom\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"teacher_classrood_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"teacher_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"classroom_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"teacher\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"teacher\",\"nativeType\":null,\"relationName\":\"teacherToteacher_classroom\",\"relationFromFields\":[\"teacher_id\"],\"relationToFields\":[\"teacher_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"classroom\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"classroom\",\"nativeType\":null,\"relationName\":\"classroomToteacher_classroom\",\"relationFromFields\":[\"classroom_id\"],\"relationToFields\":[\"classroom_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[[\"teacher_id\",\"classroom_id\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"teacher_id\",\"classroom_id\"]}],\"isGenerated\":false,\"documentation\":\"This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.\"},\"scholarship\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"scholarship_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"organization_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"award\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"category\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"eligibility\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"region\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deadline\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fafsa\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gpa\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"3\",\"2\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"6\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"organization\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"organization\",\"nativeType\":null,\"relationName\":\"organizationToscholarship\",\"relationFromFields\":[\"organization_id\"],\"relationToFields\":[\"organization_id\"],\"relationOnDelete\":\"Cascade\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"student_scholarship\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"student_scholarship\",\"nativeType\":null,\"relationName\":\"scholarshipTostudent_scholarship\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"student_scholarship\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"student_scholarship_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"student_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"scholarship_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_bookmarked\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"scholarship\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"scholarship\",\"nativeType\":null,\"relationName\":\"scholarshipTostudent_scholarship\",\"relationFromFields\":[\"scholarship_id\"],\"relationToFields\":[\"scholarship_id\"],\"relationOnDelete\":\"Cascade\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"student\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"student\",\"nativeType\":null,\"relationName\":\"studentTostudent_scholarship\",\"relationFromFields\":[\"student_id\"],\"relationToFields\":[\"student_id\"],\"relationOnDelete\":\"Cascade\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"post\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"post_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"content\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"published\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"author_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"author\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"user\",\"nativeType\":null,\"relationName\":\"postTouser\",\"relationFromFields\":[\"author_id\"],\"relationToFields\":[\"user_id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"user\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"UserRole\",\"nativeType\":null,\"default\":\"GUEST\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"payment_info\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"invite_code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"signup_complete\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"6\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"6\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"city\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"state\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"country\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"timezone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"admin\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"admin\",\"nativeType\":null,\"relationName\":\"adminTouser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_organization\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"user_organization\",\"nativeType\":null,\"relationName\":\"userTouser_organization\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"student\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"student\",\"nativeType\":null,\"relationName\":\"studentTouser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"teacher\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"teacher\",\"nativeType\":null,\"relationName\":\"teacherTouser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"post\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"post\",\"nativeType\":null,\"relationName\":\"postTouser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"admin\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"admin_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_active\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"user\",\"nativeType\":null,\"relationName\":\"adminTouser\",\"relationFromFields\":[\"user_id\"],\"relationToFields\":[\"user_id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"organization\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"organization_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"website\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"old_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"scholarship\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"scholarship\",\"nativeType\":null,\"relationName\":\"organizationToscholarship\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_organization\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"user_organization\",\"nativeType\":null,\"relationName\":\"organizationTouser_organization\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"user_organization\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"user_organization_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"organization_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"organization\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"organization\",\"nativeType\":null,\"relationName\":\"organizationTouser_organization\",\"relationFromFields\":[\"organization_id\"],\"relationToFields\":[\"organization_id\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"user\",\"nativeType\":null,\"relationName\":\"userTouser_organization\",\"relationFromFields\":[\"user_id\"],\"relationToFields\":[\"user_id\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"UserRole\":{\"values\":[{\"name\":\"ADMIN\",\"dbName\":null},{\"name\":\"TEACHER\",\"dbName\":null},{\"name\":\"STUDENT\",\"dbName\":null},{\"name\":\"GUEST\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined
config.compilerWasm = undefined


const { warnEnvConflicts } = require('./runtime/library.js')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "libquery_engine-debian-openssl-3.0.x.so.node");
path.join(process.cwd(), "app/generated/prisma/client/libquery_engine-debian-openssl-3.0.x.so.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "app/generated/prisma/client/schema.prisma")
