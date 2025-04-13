import { connectDB } from "@/lib/mongodb";
import { Blog } from "@/models/Blog";
import { NextResponse } from "next/server";

const BASIC_AUTH_USER = process.env.ADMIN_USER || "admin";
const BASIC_AUTH_PASS = process.env.ADMIN_PASS || "password";

// Utility: auth check
function isAuthorized(req) {
  const authHeader = req.headers.get("authorization");
  if (!authHeader || !authHeader.startsWith("Basic ")) return false;

  const base64 = authHeader.split(" ")[1];
  const [user, pass] = atob(base64).split(":");
  return user === BASIC_AUTH_USER && pass === BASIC_AUTH_PASS;
}

// GET single blog by ID
export async function GET(req, { params }) {
  await connectDB();
  try {
    const blog = await Blog.findById(params.id);
    if (!blog)
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json(blog);
  } catch (error) {
    return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  }
}

// UPDATE blog
export async function PUT(req, { params }) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  await connectDB();
  const data = await req.json();
  data.updatedAt = new Date();

  try {
    const updated = await Blog.findByIdAndUpdate(params.id, data, {
      new: true,
    });
    return NextResponse.json(updated);
  } catch (error) {
    return NextResponse.json({ error: "Update failed" }, { status: 500 });
  }
}

// DELETE blog
export async function DELETE(req, { params }) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  await connectDB();
  try {
    await Blog.findByIdAndDelete(params.id);
    return NextResponse.json({ message: "Deleted successfully" });
  } catch (error) {
    return NextResponse.json({ error: "Delete failed" }, { status: 500 });
  }
}
