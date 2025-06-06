import { NextResponse } from "next/server";
import prisma from "@/lib/postgres/db";

export async function GET() {
  try {
    const posts = await prisma.post.findMany({
      where: { published: true },
      orderBy: { id: "desc" }, // Sort by creation date in descending order
      include: {
        author: {
          select: { name: true },
        },
      },
    });
    const formattedPosts = posts.map((post) => ({
      id: post.id,
      title: post.title,
      content: post.content ?? "",
      author: {
        name: post.author?.name ?? "Unknown",
      },
      createdAt: post.created_at,
    }));
    return NextResponse.json(formattedPosts, { status: 200 });
  } catch (error) {
    console.error("Error fetching posts:", error);
    return NextResponse.json({ error: "Failed to fetch posts" }, { status: 500 });
  }
}