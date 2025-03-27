"use client"; // Convert to a client component
import { useEffect, useState } from "react";
import { Post } from "@/components/Post";
import Link from "next/link";
import Button from "@/components/Button";

type PostType = {
  id: number;
  title: string;
  content: string;
  author: {
    name: string;
  };
};

export default function AnnouncementsPage() {
  const [posts, setPosts] = useState<PostType[]>([]);

  // Fetch posts from the server
  const fetchPosts = async () => {
    try {
      const response = await fetch("/api/posts"); // Replace with your API endpoint
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  // Fetch posts on component mount
  useEffect(() => {
    fetchPosts();
  }, []);

  // Handle post deletion
  const handleDelete = async (id: number) => {
    try {
      const response = await fetch(`/api/post/${id}`, { method: "DELETE" });
      if (!response.ok) {
        throw new Error("Failed to delete post");
      }
      // Update the state to remove the deleted post
      setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return (
    <div className="container mx-auto min-h-screen flex flex-col items-center">
      <Link href={"/admin/make-announcement"}>
        <Button>Make Announcement</Button>
      </Link>

      <h1>Announcements</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-4">
        {posts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            title={post.title}
            content={post.content}
            authorName={post.author.name}
            onDelete={handleDelete} // Pass the delete handler
          />
        ))}
      </div>
    </div>
  );
}