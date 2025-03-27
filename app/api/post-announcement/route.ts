import prisma from "@/lib/postgres/db";
import { NextResponse } from "next/server";

interface Announcement {
  title: string;
  content: string;
}

export async function POST(request: Request): Promise<Response> {
  try {
    const res: Announcement = await request.json();

    // Validate request body
    if (!res.title || !res.content) {
      return NextResponse.json(
        { error: "Title and content are required." },
        { status: 400 }
      );
    }

    const { title, content } = res;

    // Find an existing user to set as the author (e.g., Admin)
    const adminUser = await prisma.user.findFirst({
      where: { name: "Jonathan" },
    });

    if (!adminUser) {
      // If no admin user exists, create one
      const newAdmin = await prisma.user.create({
        data: {
          name: "Guest",
          email: "Guest@example.com", // Ensure this email is unique
          role: "GUEST",
        },
      });

      // Create the post with the new admin as the author
      const result = await prisma.post.create({
        data: {
          title,
          content,
          published: true,
          authorId: newAdmin.user_id,
        },
      });

      return NextResponse.json({ result }, { status: 201 });
    }

    // Create the post with the existing admin as the author
    const result = await prisma.post.create({
      data: {
        title,
        content,
        published: true,
        authorId: adminUser.user_id,
      },
    });

    return NextResponse.json({ result }, { status: 201 });
  } catch (error) {
    console.error("Error creating announcement:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
