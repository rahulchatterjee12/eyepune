"use client";

import { useEffect, useState } from "react";

export default function BookingsPage() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const authHeader = "Basic " + btoa("admin:secure123");

    fetch("/api/admin/bookings", {
      headers: {
        Authorization: authHeader,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-[#0f172a] text-white p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">
          📋 Admin Bookings Dashboard
        </h1>

        {loading ? (
          <div className="text-center text-gray-400 text-lg">
            Loading bookings...
          </div>
        ) : bookings.length === 0 ? (
          <div className="text-center text-gray-400 text-lg">
            No bookings yet.
          </div>
        ) : (
          <div className="overflow-x-auto bg-[#1e293b] rounded-xl shadow-lg">
            <table className="min-w-full text-sm text-left border-separate border-spacing-y-2">
              <thead className="bg-[#334155] text-gray-200">
                <tr>
                  <th className="py-3 px-4">Name</th>
                  <th className="py-3 px-4">Email</th>
                  <th className="py-3 px-4">Date</th>
                  <th className="py-3 px-4">Time</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((b, i) => (
                  <tr
                    key={i}
                    className="bg-[#0f172a] hover:bg-[#1e293b] transition"
                  >
                    <td className="py-3 px-4">{b.name}</td>
                    <td className="py-3 px-4 text-blue-300">{b.email}</td>
                    <td className="py-3 px-4">{b.date}</td>
                    <td className="py-3 px-4">{b.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <div className="mt-10 text-center">
          <a
            href="/"
            className="inline-block text-sm text-gray-400 hover:text-white transition underline"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
