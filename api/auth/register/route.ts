import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectDB }from "../../../libs/mongoConnect"; // your MongoDB connection
import User from "../../../models/User";

export async function POST(req: NextRequest) {
  try {
    await connectDB(); // ensure DB is connected

    const body = await req.json();
    const { name, email, password, company } = body;

    // Validate required fields
    if (!name || !email || !password) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ message: "User already exists" }, { status: 400 });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      company,
    });

    return NextResponse.json({ message: "User registered successfully", user: { id: newUser._id, name: newUser.name, email: newUser.email } }, { status: 201 });
  } catch (error: any) {
    console.error("Register Error:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
