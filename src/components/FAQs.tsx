"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

function FAQs() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null); // All closed by default
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Toggle question expansion
  const toggleQuestion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  // Intersection observer to trigger animations when in view
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const faqs = [
    {
      question: "How is my data stored?",
      answer: (
        <>
          camelAI's infrastructure is hosted on AWS. Data from applications is
          pulled only when necessary and limited to what you request in your
          prompt. It is stored in an EC2 cache for 5 minutes and then deleted.
          For more information, please see our{" "}
          <Link
            href="https://camelai.com/security"
            className="text-blue-400 hover:text-blue-300"
          >
            Security Policy
          </Link>{" "}
          and our{" "}
          <Link
            href="https://camelai.com/blog/FAQ-security/"
            className="text-blue-400 hover:text-blue-300"
          >
            security blog post
          </Link>
          .
        </>
      ),
    },
    {
      question: "Do you train on my data?",
      answer: (
        <>
          No, we do not train on your data. CamelAI is powered by OpenAI's API.
          We have opted out of data sharing for training. You can read more
          about OpenAI's API policies{" "}
          <Link
            href="https://openai.com/enterprise-privacy/"
            className="text-blue-400 hover:text-blue-300"
          >
            here
          </Link>
          .
        </>
      ),
    },
    {
      question: "Are my app connections secure?",
      answer: (
        <>
          Yes, your app connections are secure. We use OAuth 2.0 when available
          or secure key authentication to authenticate and authorize access to
          your applications. Your data is encrypted in transit and at rest. If
          you revoke access to an app, the connection is immediately destroyed
          and we will no longer have access to that application.
        </>
      ),
    },
    {
      question: "How do you pull my data?",
      answer: (
        <>
          camelAI only communicates with your connected apps when you request
          data in the chat. We do not train on your data, nor do we access or
          store any data without your request and supervision.
        </>
      ),
    },
  ];

  return (
    <motion.div
      className="flex flex-col items-center justify-center bg-black py-16"
      ref={containerRef}
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      <div className="w-full max-w-6xl px-6">
        <motion.h2
          className="text-4xl font-bold text-white text-center mb-16"
          variants={titleVariants}
        >
          FAQs
        </motion.h2>

        <div className="space-y-4 max-w-6xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="border-b border-gray-800 last:border-b-0"
              custom={index}
              variants={itemVariants}
              whileHover={{
                backgroundColor: "rgba(255,255,255,0.03)",
                transition: { duration: 0.2 },
              }}
            >
              <motion.button
                className="w-full flex items-center justify-between py-6 text-left focus:outline-none group cursor-pointer"
                onClick={() => toggleQuestion(index)}
                whileTap={{ scale: 0.99 }}
              >
                <motion.h3
                  className="text-xl text-white font-medium"
                  animate={{
                    color:
                      activeIndex === index
                        ? "rgb(219, 234, 254)"
                        : "rgb(255, 255, 255)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {faq.question}
                </motion.h3>
                <motion.span
                  animate={{
                    rotate: activeIndex === index ? 180 : 0,
                  }}
                  transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 9L12 15L18 9"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.span>
              </motion.button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      duration: 0.3,
                      opacity: { duration: 0.2 },
                    }}
                  >
                    <motion.div
                      className="bg-gray-900 rounded-md p-6 mb-6"
                      initial={{ y: -10 }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.3, type: "spring" }}
                    >
                      <motion.p
                        className="font-mono text-gray-200 text-base leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                      >
                        {faq.answer}
                      </motion.p>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default FAQs;
