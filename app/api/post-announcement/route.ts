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
    let adminUser = await prisma.user.findFirst({
      where: { name: "Jonathan" },
    });

    if (!adminUser) {
      // Check if a user with the email already exists
      const existingUser = await prisma.user.findUnique({
        where: { email: "Guest@example.com" },
      });

      if (!existingUser) {
        // If no user exists with the email, create a new one
        adminUser = await prisma.user.create({
          data: {
            name: "Guest",
            email: "Guest@example.com", // Ensure this email is unique
            role: "GUEST",
          },
        });
      } else {
        adminUser = existingUser; // Use the existing user
      }
    }

    // Create the post with the admin user as the author
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