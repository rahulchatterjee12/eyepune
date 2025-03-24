"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";

const blogData = {
  "digital-marketing-benefits": {
    title: "How Digital Marketing Boosts Your Business",
    content:
      "Digital marketing helps businesses reach a larger audience, improve engagement, and increase conversions. From SEO to paid advertising, we discuss strategies to enhance your online presence.",
  },
  "web-development-trends": {
    title: "Web Development Trends in 2025",
    content:
      "With the rise of AI, low-code platforms, and Web3, web development is evolving rapidly. Learn about the latest frameworks and technologies shaping the future of websites and applications.",
  },
  "branding-graphic-design": {
    title: "The Power of Branding & Graphic Design",
    content:
      "Effective branding and graphic design make your business stand out. We explore the importance of logo design, UI/UX, and how visuals impact customer perception.",
  },
  "lead-generation-strategies": {
    title: "Lead Generation Strategies for High ROI",
    content:
      "Generating high-quality leads is crucial for business growth. Discover lead generation strategies, tools, and best practices to convert prospects into loyal customers.",
  },
};

export default function BlogView() {
  const { slug } = useParams();

  const blog = blogData[slug];

  if (!blog) {
    return (
      <div className="relative overflow-hidden bg-gray-900 text-white min-h-screen flex items-center justify-center">
        <motion.h1
          className="text-3xl font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Blog Not Found
        </motion.h1>
      </div>
    );
  }

  return (
    <motion.div
      className="relative overflow-hidden  text-white min-h-screen py-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-3xl mx-auto px-6">
        <motion.div whileHover={{ scale: 1.05 }} className="inline-block mb-4">
          <Link href="/blogs">
            <div className="text-blue-400 hover:text-blue-300 cursor-pointer flex items-center gap-2">
              <svg
                className="size-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Blogs
            </div>
          </Link>
        </motion.div>

        <motion.h1
          className="text-4xl md:text-5xl font-bold text-white relative"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {blog.title}
        </motion.h1>

        <motion.div
          className="mt-5 w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        />

        <motion.p
          className="mt-5 text-lg text-gray-300"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {blog.content}
        </motion.p>
      </div>
    </motion.div>
  );
}
