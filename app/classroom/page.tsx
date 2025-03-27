"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect, useCallback } from "react";
import { Classroom } from "@/types/classroom";
import Link from "next/link";

interface User {
  id: string;
  name: string;
  role: string;
}

export default function ClassroomsPage() {
  const [classrooms, setClassrooms] = useState<Classroom[]>([]);
  const [userId, setUserId] = useState(""); // TODO: Replace with actual user ID from authentication
  const [userRole, setUserRole] = useState(""); // New state variable for user role
  const [users, setUsers] = useState<User[]>([]); // State for users
  const [error, setError] = useState("");
  const [isFetched, setIsFetched] = useState(false); // New state variable
  const [loading, setLoading] = useState(false); // Loading state
  const router = useRouter();

  const fetchClassrooms = useCallback(async () => {
    console.log("fetchClassrooms called");
    if (!userId) {
      setError("Please enter a valid User ID");
      console.log("No userId provided");
      return;
    }

    try {
      setError("");
      setLoading(true); // Start loading
      console.log(`Fetching classrooms for userId: ${userId}`);
      const response = await fetch(`/api/user_classroom?userId=${userId}`);

      if (!response.ok) {
        throw new Error("Failed to fetch classrooms");
      }

      const data: Classroom[] = await response.json();
      console.log("Fetched data:", JSON.stringify(data, null, 2)); // Print the fetched data
      setClassrooms(data || []);
      setIsFetched(true); // Set isFetched to true upon successful fetch
    } catch (err) {
      setError("Error fetching classrooms");
      console.error("Error fetching classrooms:", err);
    } finally {
      setLoading(false); // End loading
    }
  }, [userId]);

  const fetchUsers = async (role: string) => {
    try {
      setLoading(true); // Start loading
      const response = await fetch(`/api/users?role=${role}`);

      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }

      const data: User[] = await response.json();
      setUsers(data.filter(user => user.role.toLowerCase() === role.toLowerCase()));
    } catch (err) {
      setError("Error fetching users");
      console.error("Error fetching users:", err);
    } finally {
      setLoading(false); // End loading
    }
  };

  useEffect(() => {
    if (userId) {
      fetchClassrooms();
    }
  }, [userId, fetchClassrooms]);

  useEffect(() => {
    if (userRole) {
      fetchUsers(userRole);
    }
  }, [userRole]);

  return (
    <div className="container mx-auto min-h-screen flex flex-col justify-center items-center">
      {!isFetched && ( // Conditionally render the input form
        <div>
          <label>
            Choose your Role:
            <select
              value={userRole}
              onChange={(e) => {
                const selectedRole = e.target.value;
                setUserRole(selectedRole);
              }}
              className="select select-accent"
            >
              <option value="" disabled>
                Select Role
              </option>
              <option value="teacher">Teacher</option>
              <option value="student">Student</option>
              <option value="admin">Admin</option>
            </select>
          </label>
        </div>
      )}

      {userRole && !isFetched && (
        <div>
          <label>
            Choose your User:
            <select
              value={userId}
              onChange={async (e) => {
                const selectedValue = e.target.value;
                setUserId(selectedValue);

                if (selectedValue === "4") {
                  // Redirect to admin dashboard
                  router.push("/admin");
                } else {
                  // Fetch classrooms for other roles
                  await fetchClassrooms();
                }
              }}
              className="select select-accent"
            >
              <option value="" disabled>
                Select User
              </option>
              {users.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.name}
                </option>
              ))}
            </select>
          </label>
        </div>
      )}

      {/* Error Handling */}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {/* Rendering Logic */}
      {loading ? (
        <span className="loading loading-infinity loading-xl"></span>
      ) : isFetched ? (
        classrooms.length > 0 ? (
          <div className="p-6">
            <h1 className="text-3xl font-bold">Courses</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {classrooms.map((classroom) => (
                <Link
                  key={classroom.classroom_id}
                  href={`/classroom/${classroom.classroom_id}/${userId}?classname=${classroom.name}`}
                  className="no-underline"
                >
                  <div className="card card-side bg-base-300 shadow-2xl w-96 border-gray-100">
                    <div className="card-body">
                      <div className="card-actions justify-end">
                        <button>
                          {classroom.teacher_user_id === Number(userId)
                            ? "Instructor"
                            : "Student"}
                        </button>
                      </div>
                      <h1 className="card-title text-blue-500">
                        {classroom.name}
                      </h1>
                      <p className="font-light">{classroom.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <p>No classrooms found.</p>
        )
      ) : (
        <p>
          <span className="loading loading-infinity loading-xl"></span>
        </p>
      )}
    </div>
  );
}