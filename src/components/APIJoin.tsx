"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

function APIJoin() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const featureVariants = {
    hidden: { x: 20, opacity: 0 },
    visible: (custom: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: custom * 0.2,
      },
    }),
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 15,
        delay: 0.4,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  // Intersection observer to trigger animations when in view
  useEffect(() => {
    const currentRef = sectionRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <motion.section
      className="bg-black py-16 md:py-24"
      ref={sectionRef}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between gap-16 md:gap-24">
          {/* Left side */}
          <motion.div
            className="flex flex-col items-start gap-8"
            variants={containerVariants}
          >
            <motion.h2
              className="font-mono font-light text-2xl md:text-3xl text-white"
              variants={itemVariants}
            >
              Want to build with camelAI?
            </motion.h2>
            <motion.h3
              className="text-white/80 text-xl md:text-2xl font-light max-w-xl"
              variants={itemVariants}
            >
              Embed AI-powered analytics directly in your application with our
              API
            </motion.h3>
            <motion.a
              className="bg-white text-black py-4 px-8 rounded-full font-medium flex items-center gap-2 hover:bg-gradient-to-r hover:from-blue-200 hover:to-pink-200 transition-all duration-300 cursor-pointer"
              data-tally-open="mV49Ba"
              data-tally-emoji-text="👋"
              data-tally-emoji-animation="wave"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Join API Waitlist
              <motion.svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                initial={{ x: 0 }}
                animate={{ x: [0, 3, 0] }}
                transition={{
                  repeat: Infinity,
                  repeatType: "mirror",
                  duration: 1.5,
                  ease: "easeInOut",
                }}
              >
                <path
                  d="M9 6L15 12L9 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>
            </motion.a>
          </motion.div>

          {/* Right side */}
          <motion.div
            className="flex flex-col gap-10"
            variants={containerVariants}
          >
            <motion.div
              variants={featureVariants}
              custom={0}
              whileHover={{
                x: 5,
                transition: { type: "spring", stiffness: 300 },
              }}
            >
              <h3 className="text-white text-xl md:text-2xl font-semibold mb-2">
                Natural Language → SQL
              </h3>
              <p className="text-white/60">
                Same powerful query engine that powers camelAI
              </p>
            </motion.div>
            <motion.div
              variants={featureVariants}
              custom={1}
              whileHover={{
                x: 5,
                transition: { type: "spring", stiffness: 300 },
              }}
            >
              <h3 className="text-white text-xl md:text-2xl font-semibold mb-2">
                Secure Integration
              </h3>
              <p className="text-white/60">
                Enterprise-grade security and permissions
              </p>
            </motion.div>
            <motion.div
              variants={featureVariants}
              custom={2}
              whileHover={{
                x: 5,
                transition: { type: "spring", stiffness: 300 },
              }}
            >
              <h3 className="text-white text-xl md:text-2xl font-semibold mb-2">
                Flexible Integration
              </h3>
              <p className="text-white/60">
                Full control over the user experience
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default APIJoin;
