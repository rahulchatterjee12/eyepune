"use client";
import React from "react";
import { motion } from "framer-motion";
import { Meteors } from "@/components/ui/projects/meteors";
import { PiCheckCircleDuotone } from "react-icons/pi";

const story = [
  {
    date: "2023 - Present",
    title: "Web Designer & Web Developer",
    description:
      "The company has high expectations and using OKRs there is a mutual understanding of expectations and performance.",
    details: [
      "Designed template UIs and design systems in Figma.",
      "Converted UIs into responsive HTML and CSS with a mobile-first approach.",
      "Created custom illustrations and item description banners.",
      "Provided detailed documentation and customer support on GitHub.",
      "Engaged with users to address setup inquiries, bug issues, and feedback.",
    ],
  },
  {
    date: "2021 - 2023",
    title: "Frontend Developer",
    description:
      "Worked on developing interactive and dynamic web applications using React and Next.js.",
    details: [
      "Developed reusable React components.",
      "Implemented performance optimizations and SEO improvements.",
      "Integrated third-party APIs and services.",
      "Collaborated with designers to ensure UI/UX consistency.",
      "Wrote unit tests to maintain code reliability.",
    ],
  },
];

const items = [
  {
    name: "David Forren",
    role: "Founder / CEO",
    image:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80",
    description:
      "I am an ambitious workaholic, but apart from that, a pretty simple person.",
  },
  {
    name: "Jane Doe",
    role: "CTO",
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61",
    description: "Tech enthusiast and problem solver.",
  },
  {
    name: "Michael Smith",
    role: "Lead Designer",
    image:
      "https://images.unsplash.com/photo-1546967191-fdfb13ed6b1e?crop=faces&fit=crop&w=320&h=320",
    description: "Passionate about creating stunning user experiences.",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
};

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5, ease: "easeOut" },
  }),
};

const page = () => {
  return (
    <motion.div
      className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      {/* Hero Section */}
      <motion.div
        className="relative overflow-hidden text-white py-16"
        variants={fadeIn}
      >
        <div className="relative z-10 text-center mx-auto max-w-2xl">
          <p className="inline-block text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-l from-[#9c3034] to-[#e6171e]">
            About EyePune - Digital Excellence Redefined
          </p>
          <p className="mt-5 text-lg text-gray-300">
            At <span className="font-semibold text-white">EyePune</span>, we
            transform ideas into reality with innovative web development, lead
            generation, and UI/UX solutions. Our expertise in digital marketing
            and application development ensures businesses scale to new heights.
          </p>
        </div>
      </motion.div>

      {/* Stats Section */}
      <motion.div
        className="bg-gray-900 border border-gray-800 mb-10 lg:mb-14 rounded-xl p-6 lg:p-8"
        variants={fadeIn}
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-10 gap-x-12 text-center">
          {[
            { title: "2,000+", subtitle: "Preline partners" },
            { title: "85%", subtitle: "Happy customers" },
            { title: "$55M+", subtitle: "Ads managed yearly" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="relative"
              whileHover={{ scale: 1.1 }}
              variants={fadeIn}
            >
              <h3 className="text-3xl font-semibold text-white">
                {stat.title}
              </h3>
              <p className="mt-1 text-sm sm:text-base text-neutral-400">
                {stat.subtitle}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Timeline Section */}
      <motion.div className="space-y-10" variants={staggerContainer}>
        {story.map((item, index) => (
          <motion.div
            key={index}
            className="group relative flex gap-x-5"
            variants={fadeIn}
          >
            <div className="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:bg-gray-200">
              <motion.div
                className="relative z-10 size-6 flex justify-center items-center"
                whileHover={{ scale: 1.2 }}
              >
                <PiCheckCircleDuotone color="#691215" size={30} />
              </motion.div>
            </div>

            <div className="grow pb-8 group-last:pb-0">
              <h3 className="mb-1 text-xs text-white">{item.date}</h3>
              <p className="font-semibold text-sm text-gray-500">
                {item.title}
              </p>
              <p className="mt-1 text-sm text-gray-300">{item.description}</p>

              {item.details && (
                <ul className="list-disc ms-6 mt-3 space-y-1.5">
                  {item.details.map((detail, i) => (
                    <motion.li
                      key={i}
                      className="ps-1 text-sm text-gray-400"
                      variants={fadeIn}
                    >
                      {detail}
                    </motion.li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <section className="py-16">
        <motion.div
          className="max-w-2xl mx-auto text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Meet Our Team
          </h2>
          <p className="mt-2 text-gray-400">
            Creative minds behind our success
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {items.map((item, i) => (
            <motion.div
              key={i}
              className="relative overflow-hidden flex flex-col items-center text-center bg-gray-800 border border-gray-700 rounded-lg p-6 shadow-lg"
              custom={i}
              variants={itemVariants}
            >
              <motion.img
                className="rounded-full w-24 h-24 border-4 border-gray-600"
                src={item.image}
                alt={item.name}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, delay: i * 0.2 }}
              />
              <h3 className="mt-4 text-lg font-semibold text-white">
                {item.name}
              </h3>
              <p className="text-xs text-gray-400 uppercase">{item.role}</p>
              <p className="mt-3 text-sm text-gray-300">{item.description}</p>
              <Meteors number={20} />
            </motion.div>
          ))}
        </motion.div>
      </section>
    </motion.div>
  );
};

export default page;
