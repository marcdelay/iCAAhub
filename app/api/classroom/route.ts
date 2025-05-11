import { NextResponse } from 'next/server';
import { getAllClassrooms } from '@/lib/query/classroom';
import prisma from "@/lib/postgres/db"; // Ensure this path points to your Prisma client instance


export async function GET() {
  try {
    // Use the getAllClassrooms function from the query file
    const classrooms = await getAllClassrooms();

    // Format the classrooms if needed (e.g., map to include `id` and `name`)
    const formattedClassrooms = classrooms.map((classroom) => ({
      id: classroom.classroom_id,
      name: classroom.name,
    }));

    return NextResponse.json(formattedClassrooms, { status: 200 });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Failed to fetch classrooms' }, { status: 500 });
  }
}


export async function POST(req: Request) {
  try {
    const { name, description, teacher_id } = await req.json();

    // Validate required fields
    if (!name || !teacher_id) {
      return NextResponse.json(
        { error: "Classroom name and teacher_id are required" },
        { status: 400 }
      );
    }

    // Create the new classroom and connect it to the teacher
    const newClassroom = await prisma.classroom.create({
      data: {
        name,
        description,
        teacher: {
          connect: { teacher_user_id: teacher_id }, // Use the teacher_id from the request
        },
      },
    });

    return NextResponse.json(newClassroom, { status: 201 });
  } catch (error) {
    console.error("Error creating classroom:", error);
    return NextResponse.json(
      { error: "Failed to create classroom" },
      { status: 500 }
    );
  }
}