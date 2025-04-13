import { connectDB } from "@/lib/mongodb";
import { Blog } from "@/models/Blog";
import { NextResponse } from "next/server";

export async function GET() {
  await connectDB();
  const posts = await Blog.find().sort({ createdAt: -1 });
  return NextResponse.json(posts);
}

export async function POST(req) {
  const auth = req.headers.get("authorization");
  if (!auth || !auth.startsWith("Basic ")) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const [user, pass] = atob(auth.split(" ")[1]).split(":");
  if (user !== "admin" || pass !== "secure123") {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  await connectDB();
  const body = await req.json();
  const {
    title,
    short_description,
    content,
    img,
    tabTitle,
    metaDesc,
    keywords,
  } = body;

  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

  const readingTime = Math.ceil(content.trim().split(/\s+/).length / 200);

  const post = await Blog.create({
    title,
    short_description,
    content,
    img,
    tabTitle,
    metaDesc,
    keywords,
    slug,
    readingTime,
  });

  return NextResponse.json(post);
}
