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
            classroom_id: true,
          },
        },
      },
    });

    // Map the result to include the count of classrooms
    const usersWithClassroomCount = users.map((user: typeof users) => ({
      id: user.user_id, // Map user_id to id
      name: user.name,
      role: user.role,
      classroomCount: user.user_classroom.length,
    }));

    return NextResponse.json(usersWithClassroomCount, { status: 200 });
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json({ error: "Failed to fetch users" }, { status: 500 });
  }
}