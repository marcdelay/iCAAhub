import React from "react";
import Image from "next/image";

function ProfileCard() {
  const user = {
    name: "Jonathan Ramirez",
    role: "Admin",
    cycle: 53,
    avatarUrl:
      "https://res.cloudinary.com/dlyycwdgp/image/upload/v1744773737/Jonathon_Headshots_qnqbda.jpg",
  }; // example until i can get back end functionality

  return (
    <div className="col-span-3 xl:col-span-1 card bg-info border-4 m-4 p-4 rounded-lg shadow-lg">
      <div className="flex flex-col items-center flex-shrink-0">
        {/* Avatar */}
        <div className="avatar avatar-online">
          <div className="ring-info-content ring-offset-info w-24 rounded-full ring-2 ring-offset-2">
            <Image
              src={user.avatarUrl}
              alt={`${user.name}'s avatar`}
              width={96}
              height={96}
              className="rounded-full"
            />
          </div>
        </div>

        {/* User Info */}
        <div className="text-center">
          <h2 className="text-lg font-bold">{user.name}</h2>
          <p className="text-sm text-info-content">{`Cycle #${user.cycle} - ${user.role}`}</p>
        </div>

        {/* Action Buttons */}
        <div className="mt-4 flex space-x-2">
          <a href="/admin" className="btn btn-secondary btn-sm">Admin Dashboard</a>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
