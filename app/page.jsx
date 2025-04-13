"use client";
import SliderOne from "@/components/ui/slider";
import { motion } from "framer-motion";
import Link from "next/link";
import WebsiteDesign from "../components/website-design";
import GraphicDesign from "../components/graphic-design";
import Brands from "../components/brands";
import Services from "../components/services";
import FAQS from "../components/faq";
import { InfiniteMovingCardsDemo } from "../components/snippets/infinite-moving-card-snippet";

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

export default function Home() {
  return (
    <>
      <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
        <motion.div
          className="text-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Animated Title */}
          <motion.div
            className="text-4xl pb-5 md:text-7xl px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Welcome to EyE PunE
          </motion.div>

          {/* Animated Subtitle */}
          <motion.p
            className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Crafting Exceptional Digital Experiences
          </motion.p>

          {/* Animated Button */}
          <motion.div className="mt-6">
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Link
                href="/booking"
                className="cursor-pointer flex items-center justify-center border rounded-full w-48 p-2 mx-auto my-6 text-white hover:bg-neutral-700 transition"
              >
                Book a call
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        <div className="w-full pt-20">
          <SliderOne />
        </div>
        <div>
          <WebsiteDesign />
        </div>
        <div>
          <GraphicDesign />
        </div>
        <div>
          <Brands />
        </div>
        <div id="services">
          <Services />
        </div>
        <InfiniteMovingCardsDemo />
        <FAQS />
      </div>
    </>
  );
}
