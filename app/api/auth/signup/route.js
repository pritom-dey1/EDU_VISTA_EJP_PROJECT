import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import bcrypt from "bcryptjs";


const USERS_FILE = path.join(process.cwd(), "users.json");

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ message: "Email & Password required" }, { status: 400 });
    }

    // Read existing users
    let users = [];
    if (fs.existsSync(USERS_FILE)) {
      const raw = fs.readFileSync(USERS_FILE, "utf-8");
      users = raw ? JSON.parse(raw) : [];
    }

    // Check if user already exists
    if (users.find((u) => u.email === email)) {
      return NextResponse.json({ message: "User already exists" }, { status: 400 });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = { id: Date.now(), email, password: hashedPassword };
    users.push(newUser);

    // Save back to file
    fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));

    // Return success (never send password!)
    return NextResponse.json({
      message: "User registered successfully",
      user: { id: newUser.id, email: newUser.email },
    }, { status: 201 });
  } catch (err) {
    console.error("Register Error:", err);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
