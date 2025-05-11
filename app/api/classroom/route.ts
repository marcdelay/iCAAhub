import { NextResponse } from 'next/server';
import { getAllClassrooms } from '@/lib/query/classroom';

export async function GET() {
  try {
    // Use the getAllClassrooms function from the query file
    const classrooms = await getAllClassrooms();

    // Format the classrooms if needed (e.g., map to include `id` and `name`)
    const formattedClassrooms = classrooms.map((classroom) => ({
      id: classroom.classroom_id,
      name: classroom.name,
    }));

    return NextResponse.json(formattedClassrooms, { status: 200 });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Failed to fetch classrooms' }, { status: 500 });
  }
}