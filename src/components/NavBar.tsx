"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

function NavBar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const dropdownMenuRef = useRef<HTMLDivElement>(null);
  const hamburgerMenuRef = useRef<HTMLButtonElement>(null);
  const navbarRef = useRef<HTMLElement>(null);

  // Track scroll position and direction
  const lastScrollY = useRef(0);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Toggle dropdown menu
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    // Handle click outside to close dropdown
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownMenuRef.current &&
        hamburgerMenuRef.current &&
        !dropdownMenuRef.current.contains(event.target as Node) &&
        !hamburgerMenuRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    // Handle scroll for changing navbar background and visibility
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine if we've scrolled enough to change the background
      if (currentScrollY > 70) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Determine if we should hide or show the navbar based on scroll direction
      if (currentScrollY > lastScrollY.current && currentScrollY > 150) {
        // Scrolling down & past threshold - hide the navbar
        setIsHidden(true);
      } else if (currentScrollY < lastScrollY.current) {
        // Scrolling up - show the navbar
        setIsHidden(false);
      }

      // Update last scroll position
      lastScrollY.current = currentScrollY;

      // Clear the previous timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      // Set a timeout to detect when scrolling stops
      scrollTimeoutRef.current = setTimeout(() => {
        // When scrolling stops, show the navbar
        setIsHidden(false);
      }, 1000); // Show navbar after 1 second of no scrolling
    };

    // Add event listeners
    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    // Clean up event listeners
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);

      // Clear any remaining timeouts
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  // Animation variants
  const navbarVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 15,
        mass: 0.5,
      },
    },
  };

  const linkVariants = {
    initial: { y: 0 },
    hover: {
      y: -1,
      transition: { duration: 0.2 },
    },
  };

  const underlineVariants = {
    initial: { scaleX: 0, originX: 0 },
    hover: {
      scaleX: 1,
      originX: 0,
      transition: { duration: 0.3 },
    },
  };

  const dropdownVariants = {
    hidden: {
      opacity: 0,
      y: -5,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 30,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 30,
      },
    },
  };

  const logoVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 500,
      },
    },
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 m-5`}
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
    >
      <motion.nav
        ref={navbarRef}
        id="navbar"
        className={`
          bg-black/10 backdrop-filter backdrop-blur-[10px] text-white font-semibold 
          flex justify-center py-2.5 w-full rounded-lg transition-all duration-700 
          ${isScrolled ? "bg-black/30" : ""}
        `}
        animate={{
          y: isHidden ? -100 : 0,
          transition: {
            type: "spring",
            stiffness: 100,
            damping: 20,
          },
        }}
      >
        <div className="max-w-[1340px] w-full flex flex-row px-2.5">
          {/* Left side - Logo */}
          <div className="flex items-center cursor-pointer">
            <Link href="/#home" className="mr-5">
              <motion.div
                className="h-[25px]"
                variants={logoVariants}
                initial="initial"
                whileHover="hover"
              >
                <Image
                  src="/main-camelai.webp"
                  width={110}
                  height={25}
                  alt="camelAI logo"
                />
              </motion.div>
            </Link>
          </div>

          {/* Right side - Navigation */}
          <div className="flex flex-row justify-end items-center w-full">
            {/* Desktop Navigation */}
            <ul className="hidden md:flex flex-row items-center">
              <motion.li
                className="px-5 flex items-center"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <motion.div
                  className="relative px-1 py-1"
                  whileHover="hover"
                  initial="initial"
                >
                  <Link href="https://camelai.com/blog/" className="group">
                    <motion.span
                      variants={linkVariants}
                      className="inline-block text-white transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#9cc0c3] group-hover:via-[#767e95] group-hover:to-[#816f80] group-hover:bg-clip-text group-hover:text-transparent"
                    >
                      Blog
                    </motion.span>
                    <motion.span
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#9cc0c3] via-[#767e95] to-[#816f80] rounded-sm"
                      variants={underlineVariants}
                    ></motion.span>
                  </Link>
                </motion.div>
              </motion.li>
              <motion.li
                className="px-5 flex items-center"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <motion.div
                  className="relative px-1 py-1"
                  whileHover="hover"
                  initial="initial"
                >
                  <Link href="https://camelai.com/pricing" className="group">
                    <motion.span
                      variants={linkVariants}
                      className="inline-block text-white transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#9cc0c3] group-hover:via-[#767e95] group-hover:to-[#816f80] group-hover:bg-clip-text group-hover:text-transparent"
                    >
                      Pricing
                    </motion.span>
                    <motion.span
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#9cc0c3] via-[#767e95] to-[#816f80] rounded-sm"
                      variants={underlineVariants}
                    ></motion.span>
                  </Link>
                </motion.div>
              </motion.li>
              <motion.li
                className="px-5 flex items-center"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <motion.div
                  className="relative px-1 py-1"
                  whileHover="hover"
                  initial="initial"
                >
                  <Link href="https://app.camelai.com/" className="group">
                    <motion.span
                      variants={linkVariants}
                      className="inline-block text-white transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#9cc0c3] group-hover:via-[#767e95] group-hover:to-[#816f80] group-hover:bg-clip-text group-hover:text-transparent"
                    >
                      Log in
                    </motion.span>
                    <motion.span
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#9cc0c3] via-[#767e95] to-[#816f80] rounded-sm"
                      variants={underlineVariants}
                    ></motion.span>
                  </Link>
                </motion.div>
              </motion.li>
            </ul>

            {/* Mobile Navigation */}
            <motion.li
              className="md:hidden list-none relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <motion.button
                ref={hamburgerMenuRef}
                className="focus:outline-none"
                onClick={toggleDropdown}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="w-6 h-6"
                  whileHover={{ rotate: 10 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Image
                    src="/menu-button.webp"
                    width={24}
                    height={24}
                    alt="menu button"
                  />
                </motion.div>
              </motion.button>

              {/* Dropdown Menu */}
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    ref={dropdownMenuRef}
                    className="absolute top-[42px] right-[3px] z-10 bg-black shadow-lg rounded-md w-[240px]"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={dropdownVariants}
                  >
                    <ul className="p-0 m-0 list-none">
                      <motion.li
                        className="p-2.5"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                      >
                        <Link
                          href="/blog"
                          className="block p-2 hover:bg-white/10 rounded group transition-all duration-200 relative"
                        >
                          <span className="text-white transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#9cc0c3] group-hover:via-[#767e95] group-hover:to-[#816f80] group-hover:bg-clip-text group-hover:text-transparent">
                            Blog
                          </span>
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#9cc0c3] via-[#767e95] to-[#816f80] rounded-sm group-hover:w-full transition-all duration-300"></span>
                        </Link>
                      </motion.li>
                      <motion.li
                        className="p-2.5"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <Link
                          href="/pricing"
                          className="block p-2 hover:bg-white/10 rounded group transition-all duration-200 relative"
                        >
                          <span className="text-white transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#9cc0c3] group-hover:via-[#767e95] group-hover:to-[#816f80] group-hover:bg-clip-text group-hover:text-transparent">
                            Pricing
                          </span>
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#9cc0c3] via-[#767e95] to-[#816f80] rounded-sm group-hover:w-full transition-all duration-300"></span>
                        </Link>
                      </motion.li>
                      <motion.li
                        className="p-2.5"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <Link
                          href="https://app.camelai.com/"
                          className="block p-2 hover:bg-white/10 rounded group transition-all duration-200 relative"
                        >
                          <span className="text-white transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#9cc0c3] group-hover:via-[#767e95] group-hover:to-[#816f80] group-hover:bg-clip-text group-hover:text-transparent">
                            Log in
                          </span>
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#9cc0c3] via-[#767e95] to-[#816f80] rounded-sm group-hover:w-full transition-all duration-300"></span>
                        </Link>
                      </motion.li>
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.li>
          </div>
        </div>
      </motion.nav>
    </motion.header>
  );
}

export default NavBar;
