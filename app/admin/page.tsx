"use client";

import React, { useEffect, useState } from "react";

interface Classroom {
  id: number;
  name: string;
}

interface User {
  id: string;
  name: string;
  role: string;
  classrooms: Classroom[]; // Updated to include classrooms
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
          fetchedUsers.map((user: User) => ({
            id: user.id.toString(),
            name: user.name || "Unknown",
            role: user.role,
            classrooms: user.classrooms || [], // Map classrooms
          }))
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
    .filter((user) =>
      filterRole ? user.role.toLowerCase() === filterRole.toLowerCase() : true
    );

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <main>
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
                    <ul
                      className="dropdown menu w-auto rounded-box"
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
                          className="select w-full"
                          value={filterRole}
                          onChange={(e) => setFilterRole(e.target.value)}
                        >
                          <option value="">All Roles</option>
                          <option value="student">Students</option>
                          <option value="teacher">Teachers</option>
                          <option value="admin">Admins</option>
                        </select>
                      </li>
                    </ul>
                  </div>
                </th>
                <th>Classrooms</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user, index) => (
                <tr key={user.id}>
                  <th>{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.role}</td>
                  <td>
                    {user.classrooms.length > 0
                      ? user.classrooms.map((classroom) => classroom.name).join(", ")
                      : "None"}
                  </td>
                  <td>
                    {/* Add actions like edit or delete here */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}