"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const blogPosts = [
  {
    title: "How Digital Marketing Boosts Your Business",
    slug: "digital-marketing-benefits",
    date: "March 24, 2025",
    author: "John Doe",
    description:
      "Learn how digital marketing strategies like SEO, PPC, and social media can skyrocket your business growth.",
    image:
      "https://hetic.in/wp-content/uploads/2019/10/Digital-Marketing-1.jpg",
  },
  {
    title: "Web Development Trends in 2025",
    slug: "web-development-trends",
    date: "March 22, 2025",
    author: "Jane Smith",
    description:
      "Explore cutting-edge technologies like AI-driven web development, Web3, and interactive UI/UX.",
    image:
      "https://hetic.in/wp-content/uploads/2019/10/Digital-Marketing-1.jpg",
  },
  {
    title: "The Power of Branding & Graphic Design",
    slug: "branding-graphic-design",
    date: "March 18, 2025",
    author: "Alice Brown",
    description:
      "Discover how professional branding and design impact customer perception and business identity.",
    image:
      "https://hetic.in/wp-content/uploads/2019/10/Digital-Marketing-1.jpg",
  },
  {
    title: "Lead Generation Strategies for High ROI",
    slug: "lead-generation-strategies",
    date: "March 15, 2025",
    author: "Michael Lee",
    description:
      "Maximize your ROI with smart lead generation techniques, automation tools, and data-driven marketing.",
    image:
      "https://hetic.in/wp-content/uploads/2019/10/Digital-Marketing-1.jpg",
  },
];

export default function Blogs() {
  return (
    <div className="relative overflow-hidden bg-gray-900 text-white min-h-screen py-16">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.p
          className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-l from-blue-400 to-violet-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          EyePune - Blogs
        </motion.p>

        <motion.h1
          className="mt-5 text-4xl md:text-5xl font-bold text-white"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Explore Our Latest Insights
        </motion.h1>

        <motion.p
          className="mt-5 text-lg text-gray-300"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Stay updated with the latest trends in **digital marketing, web
          development, UI/UX, and lead generation**.
        </motion.p>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {blogPosts.map((blog, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden bg-gray-800 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Link href={`/blogs/${blog.slug}`}>
                <div className="cursor-pointer">
                  <div className="relative h-48 overflow-hidden rounded-t-xl">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover opacity-80 hover:opacity-100 transition"
                    />
                  </div>

                  <div className="p-6">
                    <h2 className="text-2xl font-semibold text-white">
                      {blog.title}
                    </h2>
                    <p className="mt-2 text-sm text-gray-400">
                      By {blog.author} • {blog.date}
                    </p>
                    <p className="mt-3 text-gray-300">{blog.description}</p>

                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      className="mt-5 inline-block"
                    >
                      <Link href={`/blogs/${blog.slug}`}>
                        <div className="px-4 py-2 bg-blue-500 text-white rounded-lg cursor-pointer hover:bg-blue-400 transition">
                          Read More →
                        </div>
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
