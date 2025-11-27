import courseModel from "@/lib/courseModel";
import { connectDB } from "@/lib/mongoose";

export async function GET(req, { params }) {
  await connectDB();
  try {
    const course = await courseModel.findById(params.id);
    if (!course) {
      return new Response(JSON.stringify({ error: "Course not found" }), {
        status: 404,
      });
    }
    return new Response(JSON.stringify(course), { status: 200 });
  } catch (err) {
    console.error("GET error:", err);
    return new Response(JSON.stringify({ error: "Failed to fetch course" }), {
      status: 500,
    });
  }
}

