import { connectDB } from "@/lib/mongodb";
import { Booking } from "@/models/Booking";
import { NextResponse } from "next/server";

export async function POST(req) {
  await connectDB();

  const body = await req.json();
  const { name, email, date, time, phone_no } = body;

  const exists = await Booking.findOne({ date, time });
  if (exists) {
    return NextResponse.json({ error: "Slot already booked" }, { status: 400 });
  }

  const booking = await Booking.create({ name, email, date, time, phone_no });
  return NextResponse.json(booking);
}
