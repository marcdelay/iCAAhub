"use client";

export default function DeleteAnnouncement({
  postID,
  onDelete,
}: {
  postID: number;
  onDelete: (id: number) => void;
}) {
  const handleDelete = async () => {
    try {
      console.log("Sending DELETE request to:", `/api/post/${postID}`);
      const response = await fetch(`/api/post/${postID}`, {
        method: "DELETE",
      });
      const data = await response.json();
      console.log("API response:", data);

      if (!response.ok) {
        throw new Error(data.error || "Failed to delete announcement");
      }

      // Only update the parent state if the deletion was successful
      onDelete(postID);
    } catch (error) {
      console.error("Error deleting announcement:", error);
    }
  };

  return (
    <button onClick={handleDelete} className="hover:underline text-warning">
      Delete
    </button>
  );
}
