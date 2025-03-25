"use client";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen k text-white p-6"
    >
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Privacy & Policies</h1>
        <p className="mb-4">
          Welcome to EyePune. Your privacy is important to us. This policy
          explains how we collect, use, and safeguard your personal data.
        </p>

        <h2 className="text-2xl font-semibold mt-6">1. Data Collection</h2>
        <p className="mb-4">
          We collect personal information such as name, email, and browsing
          behavior to improve our services.
        </p>

        <h2 className="text-2xl font-semibold mt-6">2. Use of Information</h2>
        <p className="mb-4">
          Your data is used for analytics, personalized marketing, and better
          user experience.
        </p>

        <h2 className="text-2xl font-semibold mt-6">3. Security Measures</h2>
        <p className="mb-4">
          We employ encryption and secure storage to protect your information.
        </p>

        <h2 className="text-2xl font-semibold mt-6">4. Contact</h2>
        <p>
          For any privacy-related concerns, contact us at{" "}
          <span className="text-blue-500">support@eyepune.com</span>.
        </p>
      </div>
    </motion.div>
  );
}
