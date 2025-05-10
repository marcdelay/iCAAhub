import {
  classroom,
  assignment,
  question,
  assignment_submission,
  // student,
  // user,
  question_submission,
} from '@prisma/client';

export type Classroom = classroom;
export type Assignment = assignment;
export type Question = question;

export type AssignmentSubmission = assignment_submission & {
  student_user_id: number;
  student: {
    user: {
      name: string | null;
    };
  };
  question_submission: question_submission[];
};

export type QuestionSubmission = question_submission;
