"use client";
import { useState, useEffect } from "react";
import { Post } from "@/components/Post";
import Link from "next/link";
import Button from "@/components/Button";
import Header from "@/components/Header";

type PostType = {
  id: number;
  title: string;
  content: string;
  author: {
    name: string;
  };
};

async function getPost(): Promise<PostType[]> {
  const response = await fetch("/api/posts");
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  return response.json();
}

export default function AnnouncementsPage() {
  const [posts, setPosts] = useState<PostType[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const initialPosts = await getPost(); // Fetch posts initially
      setPosts(initialPosts);
    };
    fetchPosts();
  }, []);

  const handleDelete = (id: number) => {
    // Update the state to remove the deleted post
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
  };

  return (
    <div>
      <Header title="What's New" subtitle="Announcements!" />
      <div className="container mx-auto min-h-screen flex flex-col items-center">
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
        <Link href={"/announcements/make-announcement"}>
          <Button>Make Announcement</Button>
        </Link>
      </div>
    </div>
  );
}
