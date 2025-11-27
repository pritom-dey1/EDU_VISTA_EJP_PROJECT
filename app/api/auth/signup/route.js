import { connectDB } from "@/lib/mongoose";
import User from "@/lib/userModel";
import bcrypt from "bcryptjs";

export async function POST(req) {
  await connectDB();
  const {  email, password } = await req.json();

  if ( !email || !password)
    return new Response(JSON.stringify({ error: "All fields required" }), { status: 400 });

  const existingUser = await User.findOne({ email });
  if (existingUser)
    return new Response(JSON.stringify({ error: "Email already registered" }), { status: 400 });

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = await User.create({email, password: hashedPassword });

  return new Response(
    JSON.stringify({ message: "User created", user: { id: newUser._id, email: newUser.email } }),
    { status: 201 }
  );
}
