"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

function MiniFooter() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const buttonVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 200, delay: 0.1 },
    },
    hover: {
      scale: 1.05,
      transition: { type: "spring", stiffness: 400 },
    },
    tap: {
      scale: 0.95,
      transition: { type: "spring", stiffness: 300 },
    },
  };

  return (
    <motion.div
      className="bg-black w-full flex flex-col items-center justify-center px-4 py-10 sm:py-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="w-full max-w-7xl flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-10">
        <motion.div
          className="text-center sm:text-left"
          variants={itemVariants}
        >
          <motion.p
            className="text-white text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Ready to try camelAI for free?
          </motion.p>
          <motion.p
            className="text-sm sm:text-base text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Our customer support team is here to help
          </motion.p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          variants={itemVariants}
        >
          <motion.div
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Link
              href="https://app.camelai.com/signup"
              className="flex items-center justify-center bg-white hover:bg-gradient-to-r hover:from-blue-200 hover:to-pink-200 transition-all duration-300 text-black font-semibold py-2.5 sm:py-3 px-6 sm:px-8 rounded-full w-full sm:w-auto"
            >
              <span>Try free</span>
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-2 h-4 w-4 sm:h-5 sm:w-5"
                initial={{ x: 0 }}
                whileHover={{ x: 3 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </motion.svg>
            </Link>
          </motion.div>

          <motion.div
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Link
              href="mailto:support@camelai.com"
              className="flex items-center justify-center border border-gray-700 hover:border-gray-500 transition-all duration-300 text-white py-2.5 sm:py-3 px-6 sm:px-8 rounded-full w-full sm:w-auto"
            >
              <span>Contact us</span>
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-2 h-4 w-4 sm:h-5 sm:w-5"
                initial={{ y: 0 }}
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </motion.svg>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="w-full max-w-7xl mt-10 sm:mt-12 pt-4 border-t border-gray-800"
        variants={itemVariants}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <p className="text-gray-500 text-xs sm:text-sm text-center sm:text-left">
          © 2024 camelQA (DBA camelAI) | All rights reserved
        </p>
      </motion.div>
    </motion.div>
  );
}

export default MiniFooter;
