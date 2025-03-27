import React from "react";
import DeleteAnnouncement from "./DeleteAnnouncement";

type PostProps = {
  id: number;
  title: string;
  content: string;
  authorName: string;
};

export function Post({ id, title, content, authorName }: PostProps) {
  return (
    <div>
      <div className="card bg-base-100 image-full p-10 w-96 shadow-sm">
        <figure>{/* add image here */}</figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <div className="card-actions justify-end">
            <DeleteAnnouncement postID={id} />
          </div>
          <p>{content}</p>
          <div className="card-actions justify-end">
            <p>{authorName}</p> {/* Display authorName directly */}
            {/* <button className="btn btn-primary">Buy Now</button> */}
          </div>
        </div>
      </div>
    </div>
  );
}