import { NextResponse,NextRequest } from "next/server";
import bcrypt from "bcryptjs";
import { connectDB } from "../../../libs/mongoConnect";
import User from "../../../models/User";

export async function POST(req: NextRequest) {
  try {
    // Ensure DB is connected
    await connectDB();

    // Parse request body
    const { email, password } = await req.json();
    console.log("🔍 Incoming:", { email });

    if (!email || !password) {
      return NextResponse.json(
        { success: false, message: "Email and password required" },
        { status: 400 }
      );
    }

    // Find user
    const user = await User.findOne({ email });
    if (!user) {
      console.log("❌ User not found");
      return NextResponse.json(
        { success: false, message: "Invalid credentials" },
        { status: 401 }
      );
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    console.log("🔐 Password valid:", isMatch);

    if (!isMatch) {
      return NextResponse.json(
        { success: false, message: "Invalid credentials" },
        { status: 401 }
      );
    }

    // Remove sensitive data before sending response
    const userData = {
      id: user._id,
      email: user.email,
      name: user.name || "",
    };

    return NextResponse.json(
      { success: true, message: "Login successful", user: userData },
      { status: 200 }
    );
  } catch (error) {
    console.error("⚠️ Login API Error:", error);
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
