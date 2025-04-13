import { connectDB } from "@/lib/mongodb";
import { Booking } from "@/models/Booking";
import { NextResponse } from "next/server";

// 🛡️ Basic Auth Credentials (can be from env too)
const username = "admin";
const password = "secure123";

export async function GET(req) {
  const auth = req.headers.get("authorization");

  if (!auth || !auth.startsWith("Basic ")) {
    return new NextResponse("Unauthorized", {
      status: 401,
      headers: { "WWW-Authenticate": 'Basic realm="Bookings"' },
    });
  }

  const base64Credentials = auth.split(" ")[1];
  const [user, pass] = atob(base64Credentials).split(":");

  if (user !== username || pass !== password) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  await connectDB();
  const bookings = await Booking.find().sort({ createdAt: -1 });
  return NextResponse.json(bookings);
}
