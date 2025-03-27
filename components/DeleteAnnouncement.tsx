'use client';
import { useRouter } from "next/navigation";
  


export default function DeleteAnnouncement({postID}: {postID: number}) {
    const router = useRouter();

  const handleDelete = async () => {
    try {
      const response = await fetch(`/api/post/${postID}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete announcement");
      }

      console.log("Announcement deleted successfully");

      // Refresh the router after a successful delete
      router.refresh();
    } catch (error) {
      console.error("Error deleting announcement:", error);
    }
  };

  return (
    <button onClick={handleDelete} className="btn btn-primary">
      Delete
    </button>
  );
  
} 