"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function AdminBlogManagePage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState("");

  const fetchBlogs = async () => {
    const res = await fetch("/api/blog");
    const data = await res.json();
    setPosts(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleDelete = async (id) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this blog?"
    );
    if (!confirm) return;

    const auth = JSON.parse(localStorage.getItem("auth"));
    const res = await fetch(`/api/blog/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: "Basic " + btoa(`${auth.user}:${auth.pass}`),
      },
    });

    if (res.ok) {
      setStatus("✅ Deleted!");
      fetchBlogs();
    } else {
      setStatus("❌ Failed to delete.");
    }
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-white p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">📂 Manage Blogs</h1>

        {status && <p className="text-sm text-gray-400 mb-4">{status}</p>}

        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="space-y-4">
            {posts.map((post) => (
              <div
                key={post._id}
                className="bg-[#1e293b] rounded-lg p-4 flex justify-between items-center"
              >
                <div>
                  <h2 className="text-lg font-semibold">{post.title}</h2>
                  <p className="text-gray-400 text-sm">
                    {new Date(post.createdAt).toLocaleDateString()}
                  </p>
                </div>

                <div className="flex gap-3">
                  <Link href={`/admin/blog/edit/${post._id}`}>
                    <button className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-sm">
                      Edit
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDelete(post._id)}
                    className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-sm"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
