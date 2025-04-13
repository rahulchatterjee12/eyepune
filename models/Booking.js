import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// Prevent model overwrite error in dev
export const Booking =
  mongoose.models.Booking || mongoose.model("Booking", BookingSchema);
