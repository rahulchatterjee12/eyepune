"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function BookingPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    phone_no: "",
  });
  const [error, setError] = useState("");
  const [bookedTimes, setBookedTimes] = useState([]);

  useEffect(() => {
    if (form.date) {
      fetch(`/api/booked-times?date=${form.date}`)
        .then((res) => res.json())
        .then((data) => setBookedTimes(data.bookedTimes || []));
    }
  }, [form.date]);

  const allTimes = [
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
  ];

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    const res = await fetch("/api/book", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (!res.ok) {
      setError(data.error);
    } else {
      router.push("/thank-you");
    }
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Book a Call</h1>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="input"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          className="input"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          type="date"
          className="input"
          required
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
        />
        <input
          type="text"
          pattern="[789][0-9]{9}"
          className="input"
          required
          value={form.phone_no}
          onChange={(e) => setForm({ ...form, phone_no: e.target.value })}
          placeholder="Phone Number"
        />
        <select
          className="input"
          required
          value={form.time}
          onChange={(e) => setForm({ ...form, time: e.target.value })}
        >
          <option value="">Select Time</option>
          {allTimes.map((time) => (
            <option
              key={time}
              value={time}
              disabled={bookedTimes.includes(time)}
            >
              {time} {bookedTimes.includes(time) ? " (Booked)" : ""}
            </option>
          ))}
        </select>
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 w-full rounded-lg hover:bg-blue-700 transition"
        >
          Book Slot
        </button>
      </form>
    </div>
  );
}
