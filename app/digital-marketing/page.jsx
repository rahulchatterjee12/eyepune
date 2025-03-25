"use client";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.2 },
  },
};

const buttonVariants = {
  hover: { scale: 1.05, transition: { duration: 0.2 } },
  tap: { scale: 0.95 },
};

const Page = () => {
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
            EyePune - Digital Marketing
          </motion.p>

          <motion.h1
            className="mt-5 text-4xl md:text-5xl lg:text-6xl font-semibold text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Data-Driven Digital Marketing for Growth
          </motion.h1>

          <motion.p
            className="mt-5 text-lg text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            At <span className="font-semibold text-white">EyePune</span>, we
            specialize in SEO, PPC, social media marketing, and email campaigns
            to drive real engagement and sales. Our team crafts data-driven
            strategies to elevate your brand’s digital presence.
          </motion.p>
        </div>

        {/* Button */}
        <motion.div className="mt-8 text-center">
          <motion.a
            className="py-3 px-6 inline-block rounded-lg bg-blue-600 text-white hover:bg-blue-700"
            href="/contact"
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
};

export default Page;
