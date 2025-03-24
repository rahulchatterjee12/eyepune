"use client";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const buttonVariants = {
  hover: { scale: 1.05, transition: { duration: 0.2 } },
  tap: { scale: 0.95 },
};

export default function WebDevelopment() {
  return (
    <div className="relative overflow-hidden text-white py-16">
      <motion.div
        className="relative z-10 max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Title & Subtitle */}
        <div className="max-w-2xl text-center mx-auto">
          <motion.p
            className="inline-block text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-l from-[#9c3034] to-[#e6171e]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            EyePune - Web Development
          </motion.p>

          <motion.h1
            className="mt-5 text-4xl md:text-5xl lg:text-6xl font-semibold text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Custom Websites & Scalable Web Applications
          </motion.h1>

          <motion.p
            className="mt-5 text-lg text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We build high-performance websites & applications using modern
            frameworks like Next.js, React, and Django. From e-commerce to
            corporate sites, we ensure your online presence is seamless and
            impactful.
          </motion.p>
        </div>

        {/* Button */}
        <motion.div className="mt-8 text-center">
          <motion.a
            className="py-3 px-6 inline-block rounded-lg bg-blue-600 text-white hover:bg-blue-700"
            href="#"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Get Started
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
}
