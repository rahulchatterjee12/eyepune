"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function EditBlogPage() {
  const { id } = useParams();
  const router = useRouter();
  const [form, setForm] = useState(null);
  const [status, setStatus] = useState("");

  useEffect(() => {
    fetch(`/api/blog/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setForm({ ...data, keywords: data.keywords?.join(", ") });
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const auth = JSON.parse(localStorage.getItem("auth"));

    const keywordsArray = form.keywords
      .split(",")
      .map((kw) => kw.trim())
      .filter(Boolean);

    const res = await fetch(`/api/blog/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + btoa(`${auth.user}:${auth.pass}`),
      },
      body: JSON.stringify({ ...form, keywords: keywordsArray }),
    });

    if (res.ok) {
      setStatus("✅ Blog updated!");
      router.push("/admin/blog/manage");
    } else {
      setStatus("❌ Failed to update blog.");
    }
  };

  if (!form) return <div className="p-6 text-white">Loading...</div>;

  return (
    <div className="min-h-screen bg-[#0f172a] text-white p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">✏️ Edit Blog</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {[
            "title",
            "short_description",
            "content",
            "img",
            "tabTitle",
            "metaDesc",
            "keywords",
          ].map((field) => (
            <div key={field}>
              <label className="block mb-1 capitalize">
                {field.replace(/_/g, " ")}
              </label>
              <input
                name={field}
                type="text"
                value={form[field]}
                onChange={handleChange}
                className="w-full p-2 rounded bg-[#1e293b] text-white"
              />
            </div>
          ))}
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
          >
            Update Blog
          </button>
          {status && <p className="text-sm text-gray-400">{status}</p>}
        </form>
      </div>
    </div>
  );
}
