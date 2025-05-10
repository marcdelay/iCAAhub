"use client";
import React, { useState } from "react";
import Link from "next/link";
import  { useRouter } from "next/navigation";
import Header from "@/components/Header";

interface FormProps {
  onSubmit: (title: string, content: string) => void;
}

const FormComponent: React.FC<FormProps> = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(title, content);
    setTitle("");
    setContent("");
  };

  return (
    <div>
      <Header title="Make Announcement" subtitle="Post your announcement!" />
    <div className="container mx-auto text-info-content min-h-screen flex flex-col m-5 items-center space-y-4">
      
      <Link href={'/announcements'} className="btn text-info-content">Back to Posts</Link>
      
      <form
        onSubmit={handleSubmit}
        className="p-4 max-w-md mx-auto bg-base-300 rounded-lg shadow-md"
      >
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="input bg-base-200 input-bordered w-full"
            placeholder="Enter title"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="content"
            className="block text-gray-700 font-bold mb-2"
          >
            Content
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="textarea bg-base-200 textarea-bordered w-full"
            placeholder="Enter content"
          />
        </div>
        <button type="submit" className="btn btn-primary w-full">
          Submit
        </button>
      </form>
   </div>
    </div>
  );
};

const Page = () => {
  const router = useRouter();
  
  const handleFormSubmit = async (title: string, content: string) => {
    try {
      const response = await fetch("/api/post-announcement", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, content }),
      });
  
      if (!response.ok) {
        throw new Error("Failed to post announcement");
      }
  
      console.log("Announcement posted successfully");
  
      // Refresh the router after a successful post
      router.refresh();
    } catch (error) {
      console.error("Error posting announcement:", error);
    }
  };
  return <FormComponent onSubmit={handleFormSubmit} />;
};

export default Page;
