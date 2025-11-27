import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongoose";
import courseModel from "@/lib/courseModel";

export async function GET(req) {
  await connectDB();

  const { searchParams } = new URL(req.url);
  const email = searchParams.get("email");

  const data = await courseModel.find({ userEmail: email });

  return NextResponse.json(data);
}
