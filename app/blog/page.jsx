"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function BlogPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/api/blog")
      .then((res) => res.json())
      .then(setPosts);
  }, []);

  return (
    <div className="min-h-screen text-white p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">📚 Blog</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link key={post._id} href={`/blog/${post.slug}`}>
              <div className="bg-[#1e293b] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                {/* Blog Image */}
                {post.img && (
                  <img
                    src={post.img}
                    alt={post.title}
                    className="h-48 w-full object-cover"
                  />
                )}

                <div className="p-4">
                  {/* Title */}
                  <h2 className="text-xl font-semibold mb-1">{post.title}</h2>

                  {/* Date */}
                  <p className="text-xs text-gray-400 mb-2">
                    {new Date(post.createdAt).toLocaleDateString()}
                  </p>

                  {/* Short Description */}
                  <p className="text-sm text-gray-300 line-clamp-3">
                    {post.short_description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
