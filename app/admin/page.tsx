"use client";

import React, { useEffect, useState } from "react";

interface User {
  id: string;
  name: string;
  role: string;
  classCount: number; // Updated to represent the count of classes
}

export default function AdminDashboard() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterRole, setFilterRole] = useState<string>(""); // State for filtering



  
  useEffect(() => {
    async function fetchUsers() {
      try {
        console.log("Fetching users...");
        const response = await fetch("/api/users");
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        const fetchedUsers = await response.json();
        console.log("Fetched users:", fetchedUsers);
        setUsers(
          fetchedUsers.map(
            (user: {
              id?: number; // Adjusted to match the API response
              name?: string;
              role: string;
              classroomCount: number;
            }) => ({
              id: user.id ? user.id.toString() : "N/A", // Handle missing id
              name: user.name || "Unknown",
              role: user.role,
              classCount: user.classroomCount, // Map classroomCount property
            })
          )
        );
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
        console.log("Loading complete");
      }
    }

    fetchUsers();
  }, []);

  const filteredUsers = users
  .filter((user) => user.role.toLowerCase() !== "admin") // Exclude admins
  .filter((user) =>
    filterRole ? user.role.toLowerCase() === filterRole.toLowerCase() : true
  );

if (loading) {
  return <div>Loading...</div>;
}
  return (
    <div className="container mx-auto min-h-screen flex flex-col justify-start items-center space-y-4">
       <div className="w-full flex justify-end mb-4">
      <button className="btn btn-primary">Add User</button>
    </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>
                <div className="flex items-center justify-between">
                  <span>Role</span>
                  {/* Popover Button */}
                  <button
                    className="btn btn-circle btn-ghost btn-xs text-info"
                    popoverTarget="popover-role-filter"
                    style={
                      {
                        anchorName: "--anchor-role-filter",
                      } as React.CSSProperties
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="h-4 w-4 stroke-current"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  </button>

                  {/* Popover Dropdown */}
                  <ul
                    className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
                    popover="auto"
                    id="popover-role-filter"
                    style={
                      {
                        positionAnchor: "--anchor-role-filter",
                      } as React.CSSProperties
                    }
                  >
                    <li>
                      <select
                        className="select select-bordered w-full"
                        value={filterRole}
                        onChange={(e) => setFilterRole(e.target.value)}
                      >
                        <option value="">All Roles</option>
                        <option value="student">Students</option>
                        <option value="teacher">Teachers</option>
                      </select>
                    </li>
                  </ul>
                </div>
              </th>
              <th>Class Count</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user, index) => (
              <tr key={user.id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.role}</td>
                <td>{user.classCount}</td> {/* Display class count */}
                <td>
                {/* Delete Button
                <button
                  className="btn btn-error btn-xs"
                  onClick={() => handleDeleteUser(user.id)}
                >
                  Delete
                </button> */}
              </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
