"use client";

import React from "react";
import { motion } from "framer-motion";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-white"
    >
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="md:flex md:justify-between"
        >
          <div className="mb-6 md:mb-0">
            <a href="/" className="flex items-center">
              <img
                src="/logo/logo.svg"
                className="h-8 me-3"
                alt="FlowBite Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap">
                EyePune
              </span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            {[
              {
                title: "Resources",
                links: [{ title: "Blogs", link: "/blogs" }],
              },
              {
                title: "Legal",
                links: [
                  { title: "Privacy Policy", link: "/privacy-policy" },
                  { title: "Terms & Conditions", link: "/terms-conditions" },
                ],
              },
            ].map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 * index }}
              >
                <h2 className="mb-6 text-sm font-semibold uppercase">
                  {section.title}
                </h2>
                <ul className="text-gray-400 font-medium">
                  {section.links.map((link, i) => (
                    <li key={i} className="mb-4">
                      <a href={link.link} className="hover:underline">
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <hr className="my-6 border-gray-700" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="sm:flex sm:items-center sm:justify-between"
        >
          <span className="text-sm text-gray-400">
            © {new Date().getFullYear()}{" "}
            <a href="/" className="hover:underline">
              EyePune
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <motion.a
              href="#"
              className="text-gray-400 hover:text-white ms-5"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <SocialLinks />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
