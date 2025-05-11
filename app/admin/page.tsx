"use client";

import React, { useEffect, useState } from "react";
import AddUserForm from "@/components/AddUserForm";
import Header from "@/components/Header";

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

  const filteredUsers = users.filter((user) =>
    filterRole ? user.role.toLowerCase() === filterRole.toLowerCase() : true
  );

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <main>
      <Header title="Dashboard for" subtitle="Admin" />
      <div className="flex w-full min-h-screen space-x-4">
        {" "}
        {/* Flex container for drawer and table */}
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col mt-5">
            <div className="flex justify-center w-full">
              {" "}
              {/* Center the table */}
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
                            ? user.classrooms
                                .map((classroom) => classroom.name)
                                .join(", ")
                            : "None"}
                        </td>
                        <td>
                          <button
                            className="btn btn-error btn-xs"
                            onClick={async () => {
                              try {
                                const response = await fetch(`/api/users`, {
                                  method: "DELETE",
                                  headers: {
                                    "Content-Type": "application/json",
                                  },
                                  body: JSON.stringify({ user_id: user.id }),
                                });
                                if (!response.ok) {
                                  throw new Error("Failed to delete user");
                                }
                                setUsers((prevUsers) =>
                                  prevUsers.filter((u) => u.id !== user.id)
                                );
                                alert("User deleted successfully");
                              } catch (error) {
                                console.error("Error deleting user:", error);
                                alert("Failed to delete user");
                              }
                            }}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <label
              htmlFor="my-drawer-2"
              className="btn btn-ghost drawer-button lg:hidden mt-8"
            >
              Add User
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <div className="m-4">
              <AddUserForm />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
