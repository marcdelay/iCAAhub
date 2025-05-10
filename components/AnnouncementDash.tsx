"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

type PostType = {
  id: number;
  title: string;
  content: string;
};

const AnnouncementDash = () => {
  const [latestPost, setLatestPost] = useState<PostType | null>(null);

  useEffect(() => {
    const fetchLatestPost = async () => {
      try {
        const response = await fetch("/api/posts");
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        const posts: PostType[] = await response.json();
        if (posts.length > 0) {
          setLatestPost(posts[0]); // Assuming the latest post is the first one
        }
      } catch (error) {
        console.error("Error fetching latest post:", error);
      }
    };

    fetchLatestPost();
  }, []);

  return (
    <div>
      <div className="card card-border items-center bg-info m-4">
        <div className="card-title text-info-content border-b-2 border-info-content w-full mt-2 mb-4 items-center justify-center">
          <h1 className="font-bold">ANNOUNCEMENTS</h1>
        </div>

        <div className="grid md:grid-cols-3 h-full card-body text-info-content">
          <div className="md:border-r-1 border-b-1 md:border-b-0 text-start p-3 col-span-1">
            <p>Dear Alumni,</p>
            <br />
            <p>
              As we step into the month of May, I invite each of us to reflect
              on the light we carry...
            </p>
            <br />
            <p>
              <Link className="text-blue-400 underline" href="/newsletter">
                Read more
              </Link>
            </p>
          </div>
          <div className="text-center col-span-1">
            <h2 className="font-bold">Latest Announcement</h2>
            {latestPost ? (
              <div>
                <h3 className="text-lg font-semibold">{latestPost.title}</h3>
                <p className="text-sm">{latestPost.content}</p>
                <Link
                  className="text-blue-400 underline"
                  href="/announcements"
                >
                  View All Announcements
                </Link>
              </div>
            ) : (
              <p>Loading latest announcement...</p>
            )}
          </div>
          <div className="container text-center text-info-content col-span-1 h-full border-t-1 md:border-t-0 md:border-l-1">
            Spotlight here
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementDash;