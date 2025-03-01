"use client";
import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import VideoAnimator from "./VideoAnimator";
import { motion } from "framer-motion";

function Hero() {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.1,
        duration: 0.8,
        ease: [0.4, 0.0, 0.2, 1],
      },
    }),
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.1,
        duration: 0.5,
        type: "spring",
        stiffness: 100,
      },
    }),
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

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (custom: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: custom * 0.1 + 0.5,
        duration: 0.4,
        type: "spring",
        stiffness: 100,
      },
    }),
    hover: {
      y: -5,
      transition: {
        type: "spring",
        stiffness: 300,
      },
    },
  };

  // Background blurred orbs animation variants
  const orbVariants = {
    animate: (custom: { delay: number; duration: number }) => ({
      x: [0, custom.duration * 5, -custom.duration * 10, 0],
      y: [0, -custom.duration * 10, custom.duration * 5, 0],
      transition: {
        x: {
          repeat: Infinity,
          duration: custom.duration,
          ease: "easeInOut",
          delay: custom.delay,
          repeatType: "loop",
        },
        y: {
          repeat: Infinity,
          duration: custom.duration * 1.3,
          ease: "easeInOut",
          delay: custom.delay,
          repeatType: "loop",
        },
      },
    }),
  };

  // Additional orbit animation for variety
  const orbit2Variants = {
    animate: (custom: { delay: number; duration: number }) => ({
      x: [0, -custom.duration * 8, custom.duration * 4, 0],
      y: [0, custom.duration * 6, -custom.duration * 12, 0],
      scale: [1, 1.1, 0.9, 1],
      transition: {
        x: {
          repeat: Infinity,
          duration: custom.duration,
          ease: "easeInOut",
          delay: custom.delay,
          repeatType: "loop",
        },
        y: {
          repeat: Infinity,
          duration: custom.duration * 0.8,
          ease: "easeInOut",
          delay: custom.delay + 0.2,
          repeatType: "loop",
        },
        scale: {
          repeat: Infinity,
          duration: custom.duration * 1.5,
          ease: "easeInOut",
          delay: custom.delay,
          repeatType: "loop",
        },
      },
    }),
  };

  return (
    <div className="bg-gradient-to-br from-[#4b1d3f] via-[#30276e] to-[#1e3359] min-h-screen relative overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Original orbs with faster movement */}
        {/* Large purple orb */}
        <motion.div
          className="absolute w-[70vw] h-[70vw] rounded-full bg-gradient-to-r from-purple-700/30 to-indigo-600/20 blur-[130px] will-change-transform"
          custom={{ delay: 0, duration: 25 }}
          variants={orbVariants}
          animate="animate"
          style={{ top: "-10%", left: "5%" }}
        />

        {/* Large blue orb */}
        <motion.div
          className="absolute w-[60vw] h-[60vw] rounded-full bg-gradient-to-r from-blue-600/20 to-indigo-900/30 blur-[120px] will-change-transform"
          custom={{ delay: 0.5, duration: 30 }}
          variants={orbVariants}
          animate="animate"
          style={{ bottom: "-15%", right: "-5%" }}
        />

        {/* Mid-size pink/purple orb */}
        <motion.div
          className="absolute w-[40vw] h-[40vw] rounded-full bg-gradient-to-r from-pink-700/20 to-purple-500/25 blur-[100px] will-change-transform"
          custom={{ delay: 0.2, duration: 22 }}
          variants={orbVariants}
          animate="animate"
          style={{ top: "30%", right: "20%" }}
        />

        {/* Small accent orb */}
        <motion.div
          className="absolute w-[30vw] h-[30vw] rounded-full bg-gradient-to-r from-violet-700/30 to-indigo-500/20 blur-[90px] will-change-transform"
          custom={{ delay: 0.7, duration: 28 }}
          variants={orbVariants}
          animate="animate"
          style={{ bottom: "25%", left: "25%" }}
        />

        {/* Extra small accent orb */}
        <motion.div
          className="absolute w-[20vw] h-[20vw] rounded-full bg-gradient-to-r from-fuchsia-600/20 to-blue-600/30 blur-[80px] will-change-transform"
          custom={{ delay: 0.3, duration: 32 }}
          variants={orbVariants}
          animate="animate"
          style={{ top: "60%", left: "15%" }}
        />

        {/* New additional orbs with different colors and positions */}
        {/* Magenta/Cyan orb */}
        <motion.div
          className="absolute w-[50vw] h-[50vw] rounded-full bg-gradient-to-r from-pink-600/25 to-cyan-500/20 blur-[110px] will-change-transform"
          custom={{ delay: 0.1, duration: 27 }}
          variants={orbit2Variants}
          animate="animate"
          style={{ top: "15%", left: "35%" }}
        />

        {/* Purple/Teal orb */}
        <motion.div
          className="absolute w-[45vw] h-[45vw] rounded-full bg-gradient-to-r from-purple-800/25 to-teal-500/20 blur-[100px] will-change-transform"
          custom={{ delay: 0.4, duration: 24 }}
          variants={orbit2Variants}
          animate="animate"
          style={{ bottom: "40%", right: "30%" }}
        />

        {/* Blue/Pink orb */}
        <motion.div
          className="absolute w-[35vw] h-[35vw] rounded-full bg-gradient-to-br from-blue-700/30 to-pink-500/20 blur-[95px] will-change-transform"
          custom={{ delay: 0.6, duration: 20 }}
          variants={orbit2Variants}
          animate="animate"
          style={{ top: "45%", left: "5%" }}
        />

        {/* Cyan/Indigo orb */}
        <motion.div
          className="absolute w-[25vw] h-[25vw] rounded-full bg-gradient-to-tr from-cyan-600/25 to-indigo-700/30 blur-[85px] will-change-transform"
          custom={{ delay: 0.2, duration: 26 }}
          variants={orbit2Variants}
          animate="animate"
          style={{ top: "10%", right: "5%" }}
        />

        {/* Small Deep Purple/Hot Pink orb */}
        <motion.div
          className="absolute w-[18vw] h-[18vw] rounded-full bg-gradient-to-bl from-purple-900/25 to-pink-600/25 blur-[75px] will-change-transform"
          custom={{ delay: 0.8, duration: 18 }}
          variants={orbit2Variants}
          animate="animate"
          style={{ bottom: "15%", right: "15%" }}
        />

        {/* Vibrant Accent Orbs */}
        {/* Vibrant Magenta */}
        <motion.div
          className="absolute w-[15vw] h-[15vw] rounded-full bg-magenta-500/15 blur-[60px] will-change-transform"
          custom={{ delay: 0.9, duration: 16 }}
          variants={orbit2Variants}
          animate="animate"
          style={{ top: "70%", right: "10%" }}
        />

        {/* Vibrant Cyan */}
        <motion.div
          className="absolute w-[12vw] h-[12vw] rounded-full bg-cyan-500/15 blur-[50px] will-change-transform"
          custom={{ delay: 0.3, duration: 15 }}
          variants={orbVariants}
          animate="animate"
          style={{ top: "20%", left: "65%" }}
        />
      </div>

      {/* Radial overlay to enhance depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 pointer-events-none"></div>

      {/* Include NavBar */}
      <NavBar />

      <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
        <div className="flex flex-col items-center justify-center text-white">
          {/* Main heading */}
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-6"
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeIn}
          >
            The AI Data Analyst
          </motion.h1>

          {/* Tagline */}
          <motion.p
            className="text-xl md:text-2xl text-center max-w-3xl mx-auto mb-10"
            initial="hidden"
            animate="visible"
            custom={1}
            variants={fadeIn}
          >
            Ask questions, get instant charts and insights from your data.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mb-12"
            initial="hidden"
            animate="visible"
            custom={2}
            variants={fadeIn}
          >
            <motion.a
              href="https://app.camelai.com/"
              className="bg-white text-black font-semibold py-3 px-8 rounded-full flex items-center justify-center gap-2 hover:bg-gradient-to-r hover:from-blue-200 hover:to-pink-200 transition-all duration-300"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Try free
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                initial={{ x: 0 }}
                whileHover={{ x: 3 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </motion.svg>
            </motion.a>
            <motion.a
              href="https://cal.com/ipr-camelai/book-a-demo"
              className="border border-white/50 text-white font-semibold py-3 px-8 rounded-full flex items-center justify-center gap-2 hover:bg-white/10 transition-all duration-300"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Book demo
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                initial={{ x: 0 }}
                whileHover={{ x: 3 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </motion.svg>
            </motion.a>
          </motion.div>

          {/* Badges */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-16"
            initial="hidden"
            animate="visible"
            custom={3}
            variants={fadeIn}
          >
            {/* Y Combinator badge */}
            <motion.div
              className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full"
              variants={badgeVariants}
              custom={0}
              whileHover="hover"
            >
              <div className="flex items-center justify-center bg-[#f7642b] w-6 h-6 rounded">
                <span className="text-white font-bold text-xs">Y</span>
              </div>
              <span className="text-white/90 text-sm">Y Combinator backed</span>
            </motion.div>

            {/* Enterprise Security badge */}
            <motion.div
              className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full"
              variants={badgeVariants}
              custom={1}
              whileHover="hover"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white/90"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-white/90 text-sm">Enterprise Security</span>
            </motion.div>

            {/* Data Privacy badge */}
            <motion.div
              className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full"
              variants={badgeVariants}
              custom={2}
              whileHover="hover"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white/90"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-white/90 text-sm">100% Data Privacy</span>
            </motion.div>
          </motion.div>

          {/* Video section */}
          <motion.div
            className="w-full my-7"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.8, ease: [0.4, 0.0, 0.2, 1] }}
          >
            <div className="max-w-[980px] mx-auto w-[90%]">
              <div className="relative w-full pt-[56.25%] h-0 rounded-xl shadow-[0px_4px_30px_rgba(0,0,0,0.35)] overflow-hidden bg-black">
                <video
                  className="absolute top-0 left-0 w-full h-full rounded-xl object-cover"
                  autoPlay={true}
                  loop={true}
                  muted={true}
                  playsInline={true}
                  disableRemotePlayback={true}
                  poster="/camelai-gif-poster.jpg"
                >
                  <source src="/camelai-gif.mp4" type="video/mp4" />
                </video>
                <motion.a
                  href="https://camelai.com/demo"
                  className="video-play-button absolute top-0 left-0 w-full h-full flex justify-center items-center z-10 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] hover:scale-110 group"
                  whileHover={{
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  }}
                >
                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ rotate: 0 }}
                    animate={{
                      rotate: [0, 2, 0, -2, 0],
                      transition: {
                        repeat: Infinity,
                        repeatType: "mirror",
                        duration: 4,
                        ease: "easeInOut",
                      },
                    }}
                  >
                    <motion.img
                      className="w-[130px] h-[130px] pb-[5px] relative z-[2] transition-all duration-500 ease-in-out filter drop-shadow-lg group-hover:scale-110 group-hover:brightness-120 group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] group-active:scale-95 group-active:transition-all group-active:duration-100 group-active:ease-in"
                      src="/play-icon-2.webp"
                      alt="Play video"
                      initial={{ scale: 0.9, opacity: 0.8 }}
                      animate={{
                        scale: [0.9, 1, 0.9],
                        opacity: [0.8, 1, 0.8],
                        transition: {
                          repeat: Infinity,
                          duration: 2,
                          ease: "easeInOut",
                        },
                      }}
                    />
                  </motion.div>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <VideoAnimator />
    </div>
  );
}

export default Hero;
