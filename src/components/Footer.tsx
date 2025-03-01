"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

function Footer() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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

  const socialIconVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 200 },
    },
    hover: {
      scale: 1.2,
      transition: { type: "spring", stiffness: 400 },
    },
  };

  return (
    <motion.footer
      className="bg-black px-4 py-12 md:py-16 flex flex-col items-center overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <div className="w-full max-w-7xl">
        <div className="flex flex-col md:flex-row md:justify-between md:gap-10 mb-12 md:mb-16">
          {/* Left Column */}
          <motion.div
            className="md:max-w-sm mb-12 md:mb-0"
            variants={itemVariants}
          >
            <Link href="/" className="inline-block">
              <motion.div
                className="flex items-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src="/main-camelai.webp"
                  alt="camelAI logo"
                  width={180}
                  height={60}
                  className="h-10 md:h-12 w-auto"
                />
              </motion.div>
            </Link>

            <motion.div className="mt-6 md:mt-8" variants={itemVariants}>
              <p className="text-white text-sm md:text-base mb-4">
                Subscribe to our newsletter for product updates
              </p>
              <form
                className="flex flex-col sm:flex-row gap-3"
                onSubmit={(e) => {
                  e.preventDefault();
                  console.log("submitted");
                }}
              >
                <motion.input
                  type="email"
                  placeholder="email"
                  className="bg-transparent text-white border border-gray-700 rounded-full py-2 md:py-3 px-4 md:px-5 w-full sm:w-64 focus:outline-none focus:border-gray-500 text-sm md:text-base"
                  required
                  whileFocus={{
                    borderColor: "rgba(255,255,255,0.5)",
                    scale: 1.01,
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
                <motion.button
                  type="submit"
                  className="flex items-center justify-center bg-white hover:bg-gradient-to-r hover:from-blue-300 hover:to-purple-300 text-black font-semibold py-2 md:py-3 px-5 md:px-6 rounded-full transition-all duration-300 w-fit cursor-pointer text-sm md:text-base"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  Subscribe
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 md:h-5 md:w-5 ml-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    initial={{ x: -2 }}
                    animate={{ x: 0 }}
                    whileHover={{ x: 3 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </motion.svg>
                </motion.button>
              </form>
            </motion.div>

            <motion.div
              className="flex space-x-6 mt-8 md:mt-10"
              variants={itemVariants}
            >
              <Link
                href="https://x.com/usecamelai"
                className="hover:opacity-80 transition-opacity"
              >
                <motion.div variants={socialIconVariants} whileHover="hover">
                  <Image
                    src="/x.webp"
                    alt="X logo"
                    width={20}
                    height={20}
                    className="w-5 h-5 md:w-6 md:h-6"
                  />
                </motion.div>
              </Link>
              <Link
                href="https://discord.gg/juNYATfJTZ"
                className="hover:opacity-80 transition-opacity"
              >
                <motion.div variants={socialIconVariants} whileHover="hover">
                  <Image
                    src="/discord.webp"
                    alt="Discord logo"
                    width={20}
                    height={20}
                    className="w-5 h-5 md:w-6 md:h-6"
                  />
                </motion.div>
              </Link>
              <Link
                href="https://www.linkedin.com/company/usecamelai"
                className="hover:opacity-80 transition-opacity"
              >
                <motion.div variants={socialIconVariants} whileHover="hover">
                  <Image
                    src="/linkedin.webp"
                    alt="LinkedIn logo"
                    width={20}
                    height={20}
                    className="w-5 h-5 md:w-6 md:h-6"
                  />
                </motion.div>
              </Link>
              <Link
                href="https://www.youtube.com/channel/UCDwycyxNe0_FFgL6TeFrLaw"
                className="hover:opacity-80 transition-opacity"
              >
                <motion.div variants={socialIconVariants} whileHover="hover">
                  <Image
                    src="/youtube.webp"
                    alt="YouTube logo"
                    width={20}
                    height={20}
                    className="w-5 h-5 md:w-6 md:h-6"
                  />
                </motion.div>
              </Link>
              <Link
                href="https://github.com/qaml-ai"
                className="hover:opacity-80 transition-opacity"
              >
                <motion.div variants={socialIconVariants} whileHover="hover">
                  <Image
                    src="/github.webp"
                    alt="GitHub logo"
                    width={20}
                    height={20}
                    className="w-5 h-5 md:w-6 md:h-6"
                  />
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column - Links */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-10 md:gap-16"
            variants={itemVariants}
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-gray-500 font-medium text-sm md:text-base mb-3 md:mb-4">
                Company
              </h3>
              <ul className="space-y-2 md:space-y-3">
                <motion.li variants={itemVariants}>
                  <Link
                    href="https://camelai.com/about-us"
                    className="text-white hover:text-gray-300 transition-colors text-sm md:text-base"
                  >
                    <motion.span
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                      className="inline-block"
                    >
                      About Us
                    </motion.span>
                  </Link>
                </motion.li>
                <motion.li variants={itemVariants}>
                  <Link
                    href="https://cal.com/ipr-camelai/book-a-demo"
                    className="text-white hover:text-gray-300 transition-colors text-sm md:text-base"
                  >
                    <motion.span
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                      className="inline-block"
                    >
                      Schedule a call
                    </motion.span>
                  </Link>
                </motion.li>
                <motion.li variants={itemVariants}>
                  <Link
                    href="mailto:support@camelai.com"
                    className="text-white hover:text-gray-300 transition-colors text-sm md:text-base"
                  >
                    <motion.span
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                      className="inline-block"
                    >
                      Email Us
                    </motion.span>
                  </Link>
                </motion.li>
              </ul>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-gray-500 font-medium text-sm md:text-base mb-3 md:mb-4">
                Links
              </h3>
              <ul className="space-y-2 md:space-y-3">
                <motion.li variants={itemVariants}>
                  <Link
                    href="https://camelai.com/data-sources"
                    className="text-white hover:text-gray-300 transition-colors text-sm md:text-base"
                  >
                    <motion.span
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                      className="inline-block"
                    >
                      Data Sources
                    </motion.span>
                  </Link>
                </motion.li>
                <motion.li variants={itemVariants}>
                  <Link
                    href="https://www.youtube.com/channel/UCDwycyxNe0_FFgL6TeFrLaw"
                    className="text-white hover:text-gray-300 transition-colors text-sm md:text-base"
                  >
                    <motion.span
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                      className="inline-block"
                    >
                      Demo Videos
                    </motion.span>
                  </Link>
                </motion.li>
                <motion.li variants={itemVariants}>
                  <Link
                    href="https://camelai.com/blog"
                    className="text-white hover:text-gray-300 transition-colors text-sm md:text-base"
                  >
                    <motion.span
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                      className="inline-block"
                    >
                      Blog
                    </motion.span>
                  </Link>
                </motion.li>
                <motion.li variants={itemVariants}>
                  <Link
                    href="https://www.producthunt.com/products/camelai"
                    className="text-white hover:text-gray-300 transition-colors text-sm md:text-base"
                  >
                    <motion.span
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                      className="inline-block"
                    >
                      Product Hunt
                    </motion.span>
                  </Link>
                </motion.li>
              </ul>
            </motion.div>

            <motion.div
              className="col-span-2 sm:col-span-1 mt-2 sm:mt-0"
              variants={itemVariants}
            >
              <h3 className="text-gray-500 font-medium text-sm md:text-base mb-3 md:mb-4">
                Legal
              </h3>
              <ul className="space-y-2 md:space-y-3">
                <motion.li variants={itemVariants}>
                  <Link
                    href="https://camelai.com/terms"
                    className="text-white hover:text-gray-300 transition-colors text-sm md:text-base"
                  >
                    <motion.span
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                      className="inline-block"
                    >
                      Terms
                    </motion.span>
                  </Link>
                </motion.li>
                <motion.li variants={itemVariants}>
                  <Link
                    href="https://camelai.com/privacy-policy"
                    className="text-white hover:text-gray-300 transition-colors text-sm md:text-base"
                  >
                    <motion.span
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                      className="inline-block"
                    >
                      Privacy Policy
                    </motion.span>
                  </Link>
                </motion.li>
                <motion.li variants={itemVariants}>
                  <Link
                    href="https://camelai.com/security"
                    className="text-white hover:text-gray-300 transition-colors text-sm md:text-base"
                  >
                    <motion.span
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                      className="inline-block"
                    >
                      Security
                    </motion.span>
                  </Link>
                </motion.li>
                <motion.li variants={itemVariants}>
                  <Link
                    href="https://camelai.com/acceptable-use"
                    className="text-white hover:text-gray-300 transition-colors text-sm md:text-base"
                  >
                    <motion.span
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                      className="inline-block"
                    >
                      Acceptable Use
                    </motion.span>
                  </Link>
                </motion.li>
              </ul>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="pt-4 border-t border-gray-800"
          variants={itemVariants}
        >
          <p className="text-gray-500 text-xs md:text-sm">
            © 2024 camelQA (DBA camelAI) | All rights reserved |{" "}
            <span className="text-purple-400">
              <span className="text-white">designed by </span>
              <a
                href="https://akramj.work"
                target="_blank"
                rel="noopener noreferrer"
              >
                akram jamil
              </a>
            </span>
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}

export default Footer;
