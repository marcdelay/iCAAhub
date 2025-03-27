import { NextResponse } from "next/server";
import prisma from "@/lib/postgres/db";

export async function DELETE(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params; // Await the params if it's a Promise

  if (!id) {
    return NextResponse.json({ error: "ID is required" }, { status: 400 });
  }

  try {
    const post = await prisma.post.delete({
      where: { id: Number(id) },
    });

    return NextResponse.json(post);
  } catch (error) {
    console.error("Error deleting post:", error);
    return NextResponse.json({ error: "Failed to delete post" }, { status: 500 });
  }
}