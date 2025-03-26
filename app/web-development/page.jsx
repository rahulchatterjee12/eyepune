"use client";

import { motion } from "framer-motion";
import ProjectCard from "@/components/ui/projects/Card";

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
            href="/contact"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Get Started
          </motion.a>
        </motion.div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-10">
        <ProjectCard
          data={{
            id: 1,
            color: "from-[#6C0400] to-[#944C00]",
            title: "Beyond Borders E-commerce",
            desc: "We created this e-commerce plarfom for our client, Beyond Borders. We designed and developed the website.",
            img: "https://i.ibb.co/Y7XgrDc3/image.png",
            link: "https://www.beyondborders.shop/",
          }}
        />
        <ProjectCard
          data={{
            id: 1,
            color: "from-[#6C0400] to-[#944C00]",
            title: "Lalithya E-commerce",
            desc: "We created this e-commerce plarfom for our client, Lalithya. We designed and developed the website. This is a brand for women&apos;s clothing.",
            img: "https://i.ibb.co/0jm3qtvk/image.png",
            link: "https://www.lalithya.com",
          }}
        />{" "}
        <ProjectCard
          data={{
            id: 1,
            color: "from-[#6C0400] to-[#944C00]",
            title: "Aecus Legal",
            desc: "We created this website for our client, Aecus Legal. We designed and developed the website. This is a brand for legal services.",
            img: "https://i.ibb.co/Y7YWrFCp/image.png",
            link: "http://aecuslegal.com",
          }}
        />
        <ProjectCard
          data={{
            id: 1,
            color: "from-[#6C0400] to-[#944C00]",
            title: "Shree Om Ji Saraf",
            desc: "We created this website for our client, Shree Om Ji Saraf. We designed and developed the website. This is a brand for gold and silver.",
            img: "https://i.ibb.co/PGKpVBBB/image.png",
            link: "http://shreeomjisaraf.com",
          }}
        />
      </div>
    </div>
  );
}
