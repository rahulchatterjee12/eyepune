"use client";
import { motion } from "framer-motion";

export default function TermsConditions() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen text-white p-6"
    >
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Terms & Conditions</h1>
        <p className="mb-4">
          By accessing and using EyePune's services, you agree to the following
          terms and conditions.
        </p>

        <h2 className="text-2xl font-semibold mt-6">1. Service Usage</h2>
        <p className="mb-4">
          Users must comply with all applicable laws while using our digital
          marketing, UI/UX design, and web development services.
        </p>

        <h2 className="text-2xl font-semibold mt-6">2. Payments & Refunds</h2>
        <p className="mb-4">
          Payments are processed securely. Refunds are only applicable under
          specific conditions as outlined in our policy.
        </p>

        <h2 className="text-2xl font-semibold mt-6">
          3. Intellectual Property
        </h2>
        <p className="mb-4">
          All designs, content, and software created by EyePune remain our
          intellectual property unless agreed otherwise.
        </p>

        <h2 className="text-2xl font-semibold mt-6">4. Termination</h2>
        <p className="mb-4">
          We reserve the right to terminate services if terms are violated.
        </p>

        <h2 className="text-2xl font-semibold mt-6">5. Contact</h2>
        <p>
          For any concerns, reach out at{" "}
          <span className="text-blue-500">legal@eyepune.com</span>.
        </p>
      </div>
    </motion.div>
  );
}
