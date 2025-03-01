"use client";
import React, { useEffect, useRef } from "react";
import APIJoin from "./APIJoin";
import DemoDash from "./DemoDash";
import {
  motion,
  useInView,
  useAnimation,
  AnimatePresence,
} from "framer-motion";

function Demo() {
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const isInView1 = useInView(ref1, { once: true, amount: 0.2 });
  const isInView2 = useInView(ref2, { once: true, amount: 0.2 });
  const joinRef = useRef(null);
  const isJoinInView = useInView(joinRef, { once: true, amount: 0.3 });

  // Use a single container ref to avoid conflicting scroll measurements
  const containerRef = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: containerRef,
  //   offset: ["start end", "end start"],
  // });

  useEffect(() => {
    if (isInView1) {
      controls1.start("visible");
    }

    if (isInView2) {
      controls2.start("visible");
    }
  }, [isInView1, isInView2, controls1, controls2]);

  // Define animation variants
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.1,
      },
    },
  };

  const textVariants = {
    hidden: {
      opacity: 0,
      y: 15,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.97,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.2,
      },
    },
  };

  // Creative floating animation for background elements
  const floatingOrbs = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const orbVariants = (delay = 0) => ({
    initial: {
      opacity: 0,
      scale: 0.8,
    },
    animate: {
      opacity: 0.5,
      scale: 1,
      transition: {
        duration: 1.5,
        delay,
      },
    },
  });

  return (
    <motion.div
      ref={containerRef}
      className="relative overflow-hidden py-16 will-change-transform"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background effects - GPU accelerated with reduced complexity */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        variants={floatingOrbs}
        initial="initial"
        animate="animate"
      >
        {/* Primary floating orb - reduce opacity and add will-change for performance */}
        <motion.div
          className="absolute top-1/4 left-1/5 w-[40vw] h-[40vw] rounded-full bg-gradient-to-tr from-purple-500/10 to-blue-400/10 blur-[80px] will-change-transform"
          variants={orbVariants(0)}
          animate={{
            y: [0, -15, 0],
            x: [0, 10, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />

        {/* Secondary floating orb */}
        <motion.div
          className="absolute bottom-1/4 right-1/5 w-[30vw] h-[30vw] rounded-full bg-gradient-to-bl from-teal-400/10 to-indigo-500/10 blur-[70px] will-change-transform"
          variants={orbVariants(0.3)}
          animate={{
            y: [0, 15, 0],
            x: [0, -10, 0],
            scale: [1, 1.07, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />

        {/* Small accent orb */}
        <motion.div
          className="absolute top-2/3 left-1/3 w-[15vw] h-[15vw] rounded-full bg-gradient-to-r from-pink-500/10 to-orange-400/10 blur-[50px] will-change-transform"
          variants={orbVariants(0.6)}
          animate={{
            y: [0, 20, 0],
            x: [0, 15, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* First demo dashboard - with staggered children animations */}
      <AnimatePresence>
        <motion.div
          ref={ref1}
          className="relative mb-32 max-w-7xl mx-auto"
          initial="hidden"
          animate={controls1}
          variants={cardVariants}
          style={{ willChange: "transform, opacity" }}
        >
          <DemoDash
            header={
              <motion.span
                className="inline-block bg-gradient-to-r from-[#9cc0c3] via-[#767e95] to-[#816f80] bg-clip-text text-transparent"
                variants={textVariants}
              >
                Ask any question
              </motion.span>
            }
            subheader={
              <motion.span variants={textVariants}>
                Camel uses your live data. Get tables and charts instantly.
              </motion.span>
            }
            image="/dashboard-demo-ss.webp"
            imageAnimation={imageVariants}
          />

          {/* Creative accents - floating elements */}
          <motion.div
            className="absolute -bottom-8 -right-12 w-24 h-24 opacity-20"
            initial={{ opacity: 0, rotate: -45 }}
            animate={{ opacity: 0.2, rotate: 0 }}
            transition={{ delay: 0.5, duration: 1.5 }}
          >
            <svg
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="url(#grad1)"
                strokeWidth="2"
              />
              <path d="M30,50 L70,50" stroke="url(#grad1)" strokeWidth="2" />
              <path d="M50,30 L50,70" stroke="url(#grad1)" strokeWidth="2" />
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#9cc0c3" />
                  <stop offset="100%" stopColor="#816f80" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Second demo dashboard */}
      <AnimatePresence>
        <motion.div
          ref={ref2}
          className="relative mb-32 max-w-7xl mx-auto"
          initial="hidden"
          animate={controls2}
          variants={cardVariants}
          style={{ willChange: "transform, opacity" }}
        >
          <DemoDash
            header={
              <motion.span
                className="inline-block bg-gradient-to-r from-[#816f80] via-[#767e95] to-[#9cc0c3] bg-clip-text text-transparent"
                variants={textVariants}
              >
                Powerful Dashboards
              </motion.span>
            }
            subheader={
              <motion.span variants={textVariants}>
                Save any graph to a live dashboard. Start a chat to answer ad
                hoc questions.
              </motion.span>
            }
            image="/dashboard-demo-ss.webp"
            imageAnimation={imageVariants}
          />

          {/* Creative accents - geometric shapes */}
          <motion.div
            className="absolute -bottom-4 -left-16 w-32 h-32 opacity-20"
            initial={{ opacity: 0, rotate: 45 }}
            animate={{ opacity: 0.2, rotate: 0 }}
            transition={{ delay: 0.5, duration: 1.5 }}
          >
            <svg
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="20"
                y="20"
                width="60"
                height="60"
                stroke="url(#grad2)"
                strokeWidth="2"
              />
              <circle
                cx="50"
                cy="50"
                r="25"
                stroke="url(#grad2)"
                strokeWidth="2"
              />
              <defs>
                <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#816f80" />
                  <stop offset="100%" stopColor="#9cc0c3" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* API Join section with subtle fade in */}
      <motion.div
        ref={joinRef}
        initial={{ opacity: 0, y: 15 }}
        animate={isJoinInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto"
      >
        <APIJoin />
      </motion.div>

      {/* Interactive cursor accent - subtle and performant */}
      <motion.div
        className="fixed h-12 w-12 rounded-full pointer-events-none opacity-0 mix-blend-screen z-10"
        style={{
          background:
            "radial-gradient(circle, rgba(156,192,195,0.4) 0%, rgba(129,111,128,0) 70%)",
          willChange: "transform",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0, 0.2, 0],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "loop",
        }}
      />
    </motion.div>
  );
}

export default Demo;
