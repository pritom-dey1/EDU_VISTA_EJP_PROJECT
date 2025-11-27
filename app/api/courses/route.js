import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongoose";
import courseModel from "@/lib/courseModel";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function GET() {
  await connectDB();
  const data = await courseModel.find({});
  return NextResponse.json(data);
}

export async function POST(req) {
  await connectDB();
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();

  console.log("Session email:", session.user.email);

  // Explicitly fields select koro
  const newCourse = await courseModel.create({
    image: body.image,
    title: body.title,
    description: body.description,
    price: body.price,
    level: body.level,
    tags: body.tags || [],
    userEmail: session.user.email 
  });

  return NextResponse.json(newCourse);
}

export async function DELETE(req) {
  await connectDB();

  // URL theke id ber koro
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (!id) {
    return new Response(JSON.stringify({ error: "Course ID is required" }), { status: 400 });
  }

  try {
    const deleted = await courseModel.findByIdAndDelete(id);
    if (!deleted) {
      return new Response(JSON.stringify({ error: "Course not found" }), { status: 404 });
    }
    return new Response(JSON.stringify({ message: "Course deleted" }), { status: 200 });
  } catch (err) {
    console.error("DELETE error:", err);
    return new Response(JSON.stringify({ error: "Failed to delete course" }), { status: 500 });
  }
}