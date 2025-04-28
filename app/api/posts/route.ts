import { NextResponse } from "next/server";
import prisma from "@/lib/postgres/db";

export async function GET() {
  try {
    const posts = await prisma.post.findMany({
      where: { published: true },
      include: {
        author: {
          select: { name: true },
        },
      },
    });
    if (posts) {
      const formattedPosts = posts.map((post: typeof posts) => ({
        id: post.post_id,
        title: post.title,
        content: post.content ?? "",
        author: {
          name: post.author?.name ?? "Unknown",
        },
      }));
      return NextResponse.json(formattedPosts, { status: 200 });
    }
  } catch (error: unknown) {
    // Handle the error appropriately
    console.error("Error fetching posts:", error);
    return NextResponse.json({ error: "Failed to fetch posts" }, { status: 500 });
  }
}