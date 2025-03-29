import { NextResponse } from "next/server";
import prisma from "@/lib/postgres/db";
import { revalidatePath } from "next/cache"; // Import revalidatePath

export async function DELETE(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  if (!id) {
    return NextResponse.json({ error: "ID is required" }, { status: 400 });
  }

  const numericId = Number(id);
  if (isNaN(numericId)) {
    return NextResponse.json({ error: "Invalid ID format" }, { status: 400 });
  }

  try {
    const post = await prisma.post
      .delete({
        where: { id: numericId },
      })
      .catch((error) => {
        if (error.code === "P2025") {
          // Record not found
          return NextResponse.json({ error: "Post not found" }, { status: 404 });
        }
        throw error;
      });

    // Trigger revalidation for the announcements page
    revalidatePath("/announcements");

    return NextResponse.json(post);
  } catch (error) {
    console.error("Error deleting post:", error);
    return NextResponse.json({ error: "Failed to delete post" }, { status: 500 });
  }
}