import { NextResponse } from "next/server";
import prisma from "@/lib/postgres/db";

export async function GET() {
  try {
    const users = await prisma.user.findMany({
      select: {
        user_id: true, // Include user_id
        name: true,
        role: true,
        user_classroom: {
          select: {
            classroom: {
              select: {
                classroom_id: true,
                name: true, // Include classroom name
              },
            },
          },
        },
      },
    });

    // Map the result to include classroom details
    const usersWithDetails = users.map((user) => ({
      id: user.user_id, // Map user_id to id
      name: user.name,
      role: user.role,
      classrooms: user.user_classroom.map((uc) => ({
        id: uc.classroom.classroom_id,
        name: uc.classroom.name,
      })),
    }));

    return NextResponse.json(usersWithDetails, { status: 200 });
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json(
      { error: "Failed to fetch users" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const data = await req.json();
    console.log("Incoming data:", data); // Debugging line

    // Validate required fields
    if (!data.name || !data.email || !data.role) {
      return NextResponse.json(
        { error: "Name, email, and role are required" },
        { status: 400 }
      );
    }

    // Validate classroom_id only for TEACHER and STUDENT roles
    if (
      (data.role === "TEACHER" || data.role === "STUDENT") &&
      !data.classroom_id
    ) {
      return NextResponse.json(
        { error: "classroom_id is required for TEACHER and STUDENT roles" },
        { status: 400 }
      );
    }

    // Check if the email already exists
    const existingUser = await prisma.user.findUnique({
      where: { email: data.email },
    });
    if (existingUser) {
      return NextResponse.json(
        { error: "A user with this email already exists." },
        { status: 409 } // Conflict
      );
    }

    // Validate UUID format for invite_code (if provided)
    if (data.invite_code && !/^[0-9a-fA-F-]{36}$/.test(data.invite_code)) {
      return NextResponse.json(
        { error: "Invalid invite code format" },
        { status: 400 }
      );
    }

    const inviteCode =
      data.invite_code && /^[0-9a-fA-F-]{36}$/.test(data.invite_code)
        ? data.invite_code
        : null;

    // Parse classroom_id as an integer (only if provided)
    const classroomId =
      data.classroom_id !== undefined ? parseInt(data.classroom_id, 10) : null;
    if (data.classroom_id && (classroomId === null || isNaN(classroomId))) {
      return NextResponse.json(
        { error: "Invalid classroom_id. Must be an integer." },
        { status: 400 }
      );
    }

    // Create the user
    const newUser = await prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        role: data.role,
        payment_info: data.payment_info,
        invite_code: inviteCode,
        signup_complete: data.signup_complete,
      },
    });

    // Handle role-specific logic
    if (data.role === "STUDENT") {
      // Create a record in the student table
      await prisma.student.create({
        data: {
          student_user_id: newUser.user_id,
        },
      });

      // Assign the student to a classroom
      if (classroomId) {
        await prisma.student_classroom.create({
          data: {
            student_user_id: newUser.user_id,
            classroom_id: classroomId,
          },
        });

        // Update user_classroom for the student
        await prisma.user_classroom.create({
          data: {
            user_id: newUser.user_id,
            classroom_id: classroomId,
            role: "STUDENT",
          },
        });
      }
    } else if (data.role === "TEACHER") {
      // Create a record in the teacher table
      await prisma.teacher.create({
        data: {
          teacher_user_id: newUser.user_id,
        },
      });

      // Assign the teacher to a classroom
      if (classroomId) {
        await prisma.user_classroom.create({
          data: {
            user_id: newUser.user_id,
            classroom_id: classroomId,
            role: "TEACHER",
          },
        });
      }
    }

    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    console.error("Error creating user:", error);

    // Handle unique constraint error
    if ((error as { code?: string }).code === "P2002") {
      return NextResponse.json(
        { error: "A user with this email already exists." },
        { status: 409 } // Conflict
      );
    }

    return NextResponse.json(
      { error: "Failed to create user" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: Request) {
  try {
    const { user_id } = await req.json();

    // Validate the user_id
    if (!user_id) {
      return NextResponse.json(
        { error: "user_id is required" },
        { status: 400 }
      );
    }

    // Parse user_id as an integer
    const parsedUserId = parseInt(user_id, 10);
    if (isNaN(parsedUserId)) {
      return NextResponse.json(
        { error: "Invalid user_id. Must be an integer." },
        { status: 400 }
      );
    }

    // Check if the user exists
    const user = await prisma.user.findUnique({
      where: { user_id: parsedUserId },
    });

    if (!user) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    // Delete the user (cascading deletions will handle related records)
    await prisma.user.delete({
      where: { user_id: parsedUserId },
    });

    return NextResponse.json(
      { message: "User and related records deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting user:", error);
    return NextResponse.json(
      { error: "Failed to delete user" },
      { status: 500 }
    );
  }
}