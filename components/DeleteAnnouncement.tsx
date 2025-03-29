'use client';  

export default function DeleteAnnouncement({
  postID,
  onDelete,
}: {
  postID: number;
  onDelete: (id: number) => void;
}) {
  const handleDelete = async () => {
    try {
      const response = await fetch(`/api/post/${postID}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete announcement");
      }

      console.log("Announcement deleted successfully");

      // Update the parent state
      onDelete(postID);
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