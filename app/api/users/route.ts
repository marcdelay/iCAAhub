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
    return NextResponse.json({ error: "Failed to fetch users" }, { status: 500 });
  }
}