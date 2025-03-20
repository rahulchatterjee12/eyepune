import React from "react";
import { Meteors } from "./meteors";
import { motion } from "framer-motion";
import Link from "next/link";

const ProjectCard = ({ data }) => {
  return (
    <motion.div
      initial={{ x: "-50vh" }}
      animate={{ x: "0%" }}
      transition={{ duration: 1 }}
      className="flex justify-center gap-4 md:justify-between flex-col md:flex-row"
    >
      <motion.div className="w-full relative md:max-h-xs flex justify-between">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <h1 className="font-bold text-xl text-white mb-4 relative z-50">
            {data.title}
          </h1>

          <div className="flex justify-around flex-col md:flex-row">
            <img
              className="aspect-auto object-contain rounded my-4 md:w-[85%]"
              fill
              src={data.img}
            />
          </div>
          <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
            {data.desc}
          </p>

          <Link
            href={data.link}
            target="_blank"
            className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300"
          >
            Visit
          </Link>

          <Meteors number={20} />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
