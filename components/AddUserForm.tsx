import React, { useState, useEffect } from "react";

interface Classroom {
  id: number;
  name: string;
}

const AddUserForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "GUEST", // Default role
    payment_info: "",
    invite_code: "",
    signup_complete: false,
    classroom_id: null, // New field for classroom assignment
  });

  const [classrooms, setClassrooms] = useState<Classroom[]>([]);

  useEffect(() => {
    // Fetch available classrooms
    async function fetchClassrooms() {
      try {
        const response = await fetch("/api/classroom");
        if (!response.ok) {
          throw new Error("Failed to fetch classrooms");
        }
        const data = await response.json();
        setClassrooms(data);
      } catch (error) {
        console.error("Error fetching classrooms:", error);
      }
    }

    fetchClassrooms();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Create the payload, excluding classroom_id if not applicable
    const payload = {
      ...formData,
      invite_code:
        formData.invite_code.trim() === "" || formData.invite_code === "none"
          ? null
          : formData.invite_code,
      classroom_id:
        formData.role === "TEACHER" || formData.role === "STUDENT"
          ? formData.classroom_id
          : undefined, // Set to undefined if not applicable
    };

    console.log("Submitting form data:", payload); // Debugging line

    try {
      const response = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to add user");
      }

      alert("User added successfully!");
      setFormData({
        name: "",
        email: "",
        role: "GUEST",
        payment_info: "",
        invite_code: "",
        signup_complete: false,
        classroom_id: null,
      });
    } catch (error) {
      console.error("Error adding user:", error);
      alert("Error adding user");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="input input-bordered w-full"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="input input-bordered w-full"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Role</label>
        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          className="select select-bordered w-full"
        >
          <option value="ADMIN">Admin</option>
          <option value="TEACHER">Teacher</option>
          <option value="STUDENT">Student</option>
          <option value="GUEST">Guest</option>
        </select>
      </div>
      {(formData.role === "TEACHER" || formData.role === "STUDENT") && (
        <div>
          <label className="block text-sm font-medium">
            Assign to Classroom
          </label>
          <select
            name="classroom_id"
            value={formData.classroom_id || ""}
            onChange={handleChange}
            className="select select-bordered w-full"
            required
          >
            <option value="">Select a classroom</option>
            {classrooms.map((classroom) => (
              <option key={classroom.id} value={classroom.id}>
                {classroom.name}
              </option>
            ))}
          </select>
        </div>
      )}
      <div>
        <label className="block text-sm font-medium">Signup Complete</label>
        <input
          type="checkbox"
          name="signup_complete"
          checked={formData.signup_complete}
          onChange={handleChange}
          className="checkbox"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Add User
      </button>
    </form>
  );
};

export default AddUserForm;
