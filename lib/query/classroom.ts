import {
  // question_submission,
  classroom,
  user_classroom,
  assignment_submission,
} from "@prisma/client";

export async function getAllClassrooms(): Promise<classroom[]> {
  try {
    return await prisma.classroom.findMany();
  } catch (error) {
    console.error("Error fetching classrooms:", error);
    throw new Error("Failed to fetch classrooms");
  }
}

export async function getUserClassrooms(
  user_id: number
): Promise<user_classroom[]> {
  try {
    return await prisma.user_classroom.findMany({
      where: { user_id },
    });
  } catch (error) {
    console.error("Error fetching classrooms:", error);
    throw new Error("Failed to fetch classrooms");
  }
}

export async function getClassroomsUsingUserId(
  user_id: number
): Promise<classroom[]> {
  try {
    const userClassroomRelations = await prisma.user_classroom.findMany({
      where: { user_id },
      select: { classroom_id: true },
    });

    const classroomIds = userClassroomRelations.map(
      (relation) => relation.classroom_id
    );

    const classrooms = await prisma.classroom.findMany({
      where: { classroom_id: { in: classroomIds } },
    });

    return classrooms;
  } catch (error) {
    console.error("Error fetching classrooms:", error);
    throw new Error("Failed to fetch classrooms");
  }
}

export async function getUserRoleInClassroom(
  user_id: number,
  classroom_id: number
) {
  try {
    const userClassroom = await prisma.user_classroom.findUnique({
      where: {
        user_id_classroom_id: {
          user_id,
          classroom_id,
        },
      },
      select: { role: true },
    });
    return userClassroom?.role || null;
  } catch (error) {
    console.error("Error fetching user role:", error);
    throw new Error("Failed to fetch user role in classroom");
  }
}

export async function getAssignmentsUsingClassroomId(classroomId: number) {
  return await prisma.assignment.findMany({
    where: { classroom_id: classroomId },
  });
}

export async function getActiveAssignmentsUsingClassroomId(
  classroomId: number
) {
  return await prisma.assignment.findMany({
    where: {
      classroom_id: classroomId,
      due_date: {
        gt: new Date(), // Fetch only future due dates
      },
    },
  });
}

export async function getQuestionsUsingAssignmentId(assignmentId: number) {
  return await prisma.question.findMany({
    where: { assignment_id: assignmentId },
  });
}

export async function createAssignment(
  classroomId: string,
  name: string,
  description: string,
  dueDate: string,
  questions: {
    question_number: number;
    name: string;
    prompt: string;
    example_solution_s3_path: string;
    accepted_file_types: string;
  }[]
) {
  try {
    const assignment = await prisma.assignment.create({
      data: {
        name,
        description,
        due_date: new Date(dueDate),
        classroom: { connect: { classroom_id: Number(classroomId) } },
        question: {
          create: questions.map((q) => ({
            question_number: q.question_number,
            name: q.name,
            prompt: q.prompt, // Prompt for the question
            example_solution_s3_path: q.example_solution_s3_path, // S3 path for solutions
            accepted_file_types: q.accepted_file_types, // Accepted file formats
          })),
        },
      },
      include: {
        question: true, // Return the created questions along with the assignment
      },
    });

    return assignment;
  } catch (error) {
    console.error("Error creating assignment:", error);
    throw error;
  }
}

export async function createAssignmentSubmission(data: {
  assignment_id: number;
  student_user_id: number;
  s3_path: string;
}): Promise<assignment_submission> {
  await prisma.assignment_submission.create({
    data,
  });
  return (
    (await prisma.assignment_submission.findFirst({
      where: data,
    })) || ({} as assignment_submission)
  );
}

export async function createQuestionSubmission(data: {
  assignment_submission_id: number;
  question_id: number;
  student_user_id: number;
  s3_path: string;
}) {
  return prisma.question_submission.create({
    data,
  });
}

export async function updateQuestion(updatedData: {
  question_id: number;
  name?: string;
  prompt?: string;
  accepted_file_types?: string;
  example_solution_s3_path?: string;
}) {
  try {
    const updatedQuestion = await prisma.question.update({
      where: {
        question_id: updatedData.question_id,
      },
      data: {
        ...updatedData,
      },
    });
    return updatedQuestion;
  } catch (error) {
    console.error("Error updating question:", error);
    throw new Error("Failed to update question");
  }
}

export async function getQuestionSubmissions(
  assignmentId: number
): Promise<question_submission[]> {
  try {
    return await prisma.question_submission.findMany({
      where: { assignment_submission_id: assignmentId },
    });
  } catch (error) {
    console.error("Error fetching question submissions:", error);
    throw new Error("Failed to fetch question submissions");
  }
}


export async function hasUserSubmittedAssignment(
  assignment_id: number,
  student_user_id: number
): Promise<boolean> {
  try {
    const submission = await prisma.assignment_submission.findFirst({
      where: {
        assignment_id,
        student_user_id,
      },
    });

    return submission !== null;
  } catch (error) {
    console.error("Error checking assignment submission:", error);
    throw new Error("Failed to check assignment submission");
  }
}

export async function deleteAssignmentSubmissions(
  assignmentId: number,
  userId: number
) {
  try {
    // Step 1: Delete question submissions first
    await prisma.question_submission.deleteMany({
      where: {
        assignment_submission: {
          assignment_id: assignmentId,
          student_user_id: userId,
        },
      },
    });

    // Step 2: Delete assignment submission after all references are removed
    await prisma.assignment_submission.deleteMany({
      where: {
        assignment_id: assignmentId,
        student_user_id: userId,
      },
    });

    console.log(
      `Deleted previous submissions for assignment ${assignmentId}, user ${userId}`
    );
  } catch (error) {
    console.error("Error deleting previous submissions:", error);
    throw error;
  }
}

export async function getUserAssignmentSubmission(
  assignment_id: number,
  student_user_id: number
): Promise<assignment_submission | null> {
  try {
    return await prisma.assignment_submission.findFirst({
      where: {
        assignment_id,
        student_user_id,
      },
      include: {
        question_submission: {
          include: {
            question: true, // Include question details if needed
          },
        },
      },
    });
  } catch (error) {
    console.error("Error fetching user assignment submission:", error);
    throw new Error("Failed to fetch user assignment submission");
  }
}


import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getStudentSubmissions(classroomId: number) {
  const submissions = await prisma.assignment_submission.findMany({
    where: {
      assignment: {
        classroom_id: classroomId,
      },
    },
    include: {
      student: {
        select: {
          user: {
            select: {
              name: true,
            },
          },
        },
      },
      assignment: {
        select: {
          name: true,
        },
      },
      question_submission: {
        select: {
          question: {
            select: {
              name: true,
            },
          },
          s3_path: true,
        },
      },
    },
  });

  return submissions.map(submission => ({
    studentName: submission.student.user.name,
    assignmentName: submission.assignment.name,
    submittedAt: submission.submitted_at,
    questionSubmissions: submission.question_submission.map(qs => ({
      questionName: qs.question.name,
      documentPath: qs.s3_path,
    })),
    documentPath: submission.s3_path,
  }));
}