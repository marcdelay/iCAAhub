import { Post } from "@/components/Post";
import prisma from "@/lib/postgres/db";
import Link from "next/link";
import Button from "@/components/Button";

// Define the TypeScript type for a Post
type PostType = {
  id: number;
  title: string;
  content: string;
  author: {
    name: string;
  };
};

// Update the getPost function to return a typed array of posts
async function getPost(): Promise<PostType[]> {
  const posts = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true },
      },
    },
  });
  return posts.map((post) => ({
    id: post.id,
    title: post.title,
    content: post.content ?? "",
    author: {
      name: post.author?.name ?? "Unknown",
    },
  }));
}

export default async function AnnouncementsPage() {
  const posts = await getPost();
  console.log("Fetched posts:", JSON.stringify(posts, null, 2));
  return (
    <div className="container mx-auto min-h-screen flex flex-col items-center">
      <Link href={"/admin/make-announcement"}> <Button>Make Announcement</Button> </Link>
     
      <h1>Announcements</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-4">
        {posts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            title={post.title}
            content={post.content}
            authorName={post.author.name} // Pass as string
          />
        ))}
      </div>
    </div>
  );
}