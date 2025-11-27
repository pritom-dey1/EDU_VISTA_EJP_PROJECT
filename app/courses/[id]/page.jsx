import { connectDB } from "@/lib/mongoose";
import courseModel from "@/lib/courseModel";
import CourseClient from "./CourseClient";

export default async function CourseDetails({ params }) {
  const { id } = await params;

  await connectDB();
  const courseData = await courseModel.findById(id);

  if (!courseData) return <p className="text-white">Course not found.</p>;

  const course = JSON.parse(JSON.stringify(courseData));

  return <CourseClient course={course} />;
}
