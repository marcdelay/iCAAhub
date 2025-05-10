'use client';

import { useEffect, useState } from 'react';
import { use } from 'react'; // Import React's `use` hook
import TeacherForm from '@/components/TeacherForm';
import StudentForm from '@/components/StudentForm';
import Header from '@/components/Header';

export default function ClassroomPage({ params }: { params: Promise<{ classroomId: string; userId: string }> }) {
  const { classroomId, userId: userIdString } = use(params); // Unwrap the `params` Promise
  const userId = Number(userIdString); // TODO: Replace with actual user ID from authentication

  const [userRole, setUserRole] = useState<string>('GUEST');
  const [loading, setLoading] = useState(true);
  const [classname, setClassname] = useState<string>('');

  useEffect(() => {

    const queryParams = new URLSearchParams(window.location.search);
    const classnameParam = queryParams.get('classname');
    if (classnameParam) {
      setClassname(classnameParam);
    }

    async function fetchUserRole() {
      console.log('Fetching user role for userId:', userId, 'and classroomId:', classroomId);
      try {
        const response = await fetch(`/api/user_classroom?userId=${userId}&classroomId=${classroomId}`);
        const data = await response.json();
        setUserRole(data.role);
      } catch (error) {
        console.error('Error fetching user role:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchUserRole();
  }, [classroomId, userId]); // Removed 'params' from dependency array since it's already unwrapped

  if (loading) {
    return <p>Loading...</p>;
  }
  const normalizedUserRole = userRole.toUpperCase();

  return (
    <main className="w-full">
      <Header title="Learning Hub" subtitle="Where everything is possible" />
    <div className="p-6 text-info">
      {normalizedUserRole === 'STUDENT' && <StudentForm classroomId={classroomId} userId={userId} name={classname} />}
      {(normalizedUserRole === 'TEACHER' || normalizedUserRole === 'TEACHING_ASSISTANT') && (
        <TeacherForm classroomId={classroomId} name={classname} userId={userId} />
      )}
      {normalizedUserRole === 'ADMIN' && (
        <>
          <TeacherForm classroomId={classroomId} name={classname} userId={userId} />
          <StudentForm classroomId={classroomId} userId={userId} name={classname} />
        </>
      )}
      {normalizedUserRole === 'GUEST' && <p>Welcome, Guest! Please select a role to continue.</p>}
    </div>
    </main>
  );
}