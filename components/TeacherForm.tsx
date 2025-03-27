import React, { useState, useEffect } from "react";
import ClassroomNavBar from "./ClassroomNavBar";
import AssignmentCreateForm from "./AssignmentCreateForm";
import AssignmentViewEditForm from "./AssignmentViewEditForm";
import InstructorSubmissionsView from "./Construction";

const TeacherForm = ({
  classroomId,
  name,
  userId,
}: {
  classroomId: string;
  name: string;
  userId: number;
}) => {
  const [selectedOption, setSelectedOption] = useState("Create Assignment"); // Default selected option

  useEffect(() => {
    console.log("TeacherForm rendered with:", { classroomId, name, userId });
    console.log("Selected option:", selectedOption);
  }, [classroomId, name, userId, selectedOption]);

  const teacherMenu = [
    {
      label: "Create Assignment",
      onClick: () => setSelectedOption("Create Assignment"),
    },
    {
      label: "View/Edit Assignments",
      onClick: () => setSelectedOption("View/Edit Assignments"),
    },
    {
      label: "Assignment Submissions",
      onClick: () => setSelectedOption("Assignment Submissions"),
    },
  ];

  return (
    <div>
      <ClassroomNavBar name={name} menuItems={teacherMenu} />
      <div className="p-4">
        {selectedOption === "Create Assignment" && (
          <AssignmentCreateForm classroomId={classroomId} />
        )}
        {selectedOption === "View/Edit Assignments" && (
          <AssignmentViewEditForm classroomId={classroomId} />
        )}
        {selectedOption === "Assignment Submissions" && (
          <InstructorSubmissionsView />
        )}
      </div>
    </div>
  );
};

export default TeacherForm;
