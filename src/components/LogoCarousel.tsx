"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion, useAnimationControls } from "framer-motion";

interface Logo {
  src: string;
  alt: string;
  href: string | null;
}

function LogoCarousel() {
  // Store current positions to resume animation from
  const [position1, setPosition1] = useState(0);
  const [position2, setPosition2] = useState(-2000);
  const [hovering1, setHovering1] = useState(false);
  const [hovering2, setHovering2] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const controls1 = useAnimationControls();
  const controls2 = useAnimationControls();

  // Track animation with refs
  const track1Ref = useRef<HTMLDivElement>(null);
  const track2Ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Logo data for better organization
  const firstRowLogos = [
    {
      src: "/postgres-square.webp",
      alt: "Postgres Logo",
      href: "https://camelai.com/postgres",
    },
    { src: "/duckdb-square.webp", alt: "DuckDB Logo", href: null },
    {
      src: "/peliqan-square.webp",
      alt: "Peliqan Logo",
      href: "https://camelai.com/blog/peliqan_data_warehouse/",
    },
    { src: "/linkedin-square.webp", alt: "LinkedIn Logo", href: null },
    { src: "/airtable-square.webp", alt: "Airtable Logo", href: null },
    { src: "/snowflake-square.webp", alt: "Snowflake Logo", href: null },
    { src: "/dynmodb-square.webp", alt: "DynamoDB Logo", href: null },
    {
      src: "/csv-square.webp",
      alt: "CSV Logo",
      href: "https://camelai.com/csv",
    },
    {
      src: "/sqlite-square.webp",
      alt: "SQLite Logo",
      href: "https://camelai.com/sqlite",
    },
    {
      src: "/bigquery-square.webp",
      alt: "BigQuery Logo",
      href: "https://camelai.com/bigquery",
    },
    {
      src: "/mongodb-square.webp",
      alt: "MongoDB Logo",
      href: "https://camelai.com/mongodb",
    },
    {
      src: "/motherduck-square.webp",
      alt: "Motherduck Logo",
      href: "https://camelai.com/motherduck",
    },
    {
      src: "/clickhouse-square.webp",
      alt: "ClickHouse Logo",
      href: "https://camelai.com/clickhouse",
    },
    {
      src: "/excel-square.webp",
      alt: "Excel Logo",
      href: "https://camelai.com/excel",
    },
    {
      src: "/mysql-square.webp",
      alt: "MySQL Logo",
      href: "https://camelai.com/mysql",
    },
    {
      src: "/supabase-square.webp",
      alt: "Supabase Logo",
      href: "https://camelai.com/supabase",
    },
    { src: "/sheets-square.webp", alt: "Sheets Logo", href: null },
    { src: "/salesforce-square.webp", alt: "Salesforce Logo", href: null },
  ];

  const secondRowLogos = [
    {
      src: "/bigquery-square.webp",
      alt: "BigQuery Logo",
      href: "https://camelai.com/bigquery",
    },
    {
      src: "/mongodb-square.webp",
      alt: "MongoDB Logo",
      href: "https://camelai.com/mongodb",
    },
    {
      src: "/motherduck-square.webp",
      alt: "Motherduck Logo",
      href: "https://camelai.com/motherduck",
    },
    {
      src: "/excel-square.webp",
      alt: "Excel Logo",
      href: "https://camelai.com/excel",
    },
    {
      src: "/mysql-square.webp",
      alt: "MySQL Logo",
      href: "https://camelai.com/mysql",
    },
    {
      src: "/supabase-square.webp",
      alt: "Supabase Logo",
      href: "https://camelai.com/supabase",
    },
    { src: "/sheets-square.webp", alt: "Sheets Logo", href: null },
    {
      src: "/clickhouse-square.webp",
      alt: "ClickHouse Logo",
      href: "https://camelai.com/clickhouse",
    },
    { src: "/salesforce-square.webp", alt: "Salesforce Logo", href: null },
    {
      src: "/postgres-square.webp",
      alt: "Postgres Logo",
      href: "https://camelai.com/postgres",
    },
    { src: "/duckdb-square.webp", alt: "DuckDB Logo", href: null },
    {
      src: "/peliqan-square.webp",
      alt: "Peliqan Logo",
      href: "https://camelai.com/blog/peliqan_data_warehouse/",
    },
    { src: "/linkedin-square.webp", alt: "LinkedIn Logo", href: null },
    { src: "/airtable-square.webp", alt: "Airtable Logo", href: null },
    { src: "/snowflake-square.webp", alt: "Snowflake Logo", href: null },
    {
      src: "/csv-square.webp",
      alt: "CSV Logo",
      href: "https://camelai.com/csv",
    },
    {
      src: "/sqlite-square.webp",
      alt: "SQLite Logo",
      href: "https://camelai.com/sqlite",
    },
    { src: "/dynmodb-square.webp", alt: "DynamoDB Logo", href: null },
  ];

  // Logo animation variants
  const logoVariants = {
    initial: {
      scale: 0.9,
      filter: "grayscale(10%) brightness(80%)",
      opacity: 0.7,
    },
    hover: {
      scale: 1.1,
      filter: "grayscale(0%) brightness(100%)",
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
      },
    },
  };

  const carouselVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1.0],
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  // Animation functions
  const startAnimation1 = useCallback(() => {
    const endpoint = position1 <= -1000 ? 0 : -2000;
    controls1.start({
      x: [position1, endpoint],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 60 * (Math.abs(endpoint - position1) / 2000),
          ease: "linear",
        },
      },
    });
  }, [position1, controls1]);

  const startAnimation2 = useCallback(() => {
    const endpoint = position2 >= -1000 ? -2000 : 0;
    controls2.start({
      x: [position2, endpoint],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 60 * (Math.abs(endpoint - position2) / 2000),
          ease: "linear",
        },
      },
    });
  }, [position2, controls2]);

  // Initialize animations and visibility observer
  useEffect(() => {
    const currentRef = containerRef.current;
    startAnimation1();
    startAnimation2();

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
  }, [startAnimation1, startAnimation2]);

  const renderLogo = (logo: Logo, index: number) => {
    const logoElement = (
      <motion.div
        className="mx-3 flex-shrink-0"
        key={`${logo.alt}-${index}`}
        variants={logoVariants}
        initial="initial"
        whileHover="hover"
        whileTap={{ scale: 0.95 }}
      >
        <motion.img
          src={logo.src}
          alt={logo.alt}
          className="h-20 w-20 object-contain"
          initial={{ y: 0 }}
          animate={{
            y: [0, -5, 0],
            transition: {
              y: {
                repeat: Infinity,
                repeatType: "mirror",
                duration: 2 + Math.random() * 2, // Randomize duration for organic feel
                ease: "easeInOut",
                delay: Math.random() * 2, // Randomize delay for varied movement
              },
            },
          }}
        />
      </motion.div>
    );

    if (logo.href) {
      return (
        <Link
          href={logo.href}
          className="block flex-shrink-0"
          key={`${logo.alt}-link-${index}`}
        >
          {logoElement}
        </Link>
      );
    }
    return logoElement;
  };

  // Handle hover effects
  const handleMouseEnter1 = () => {
    // Stop animation and capture position from DOM
    controls1.stop();
    if (track1Ref.current) {
      const transform = window.getComputedStyle(track1Ref.current).transform;
      const matrix = new DOMMatrix(transform);
      setPosition1(matrix.m41); // Get the x translation from the transform matrix
    }
    setHovering1(true);
  };

  const handleMouseLeave1 = () => {
    if (hovering1) {
      // Continue from current position
      startAnimation1();
      setHovering1(false);
    }
  };

  const handleMouseEnter2 = () => {
    // Stop animation and capture position from DOM
    controls2.stop();
    if (track2Ref.current) {
      const transform = window.getComputedStyle(track2Ref.current).transform;
      const matrix = new DOMMatrix(transform);
      setPosition2(matrix.m41); // Get the x translation from the transform matrix
    }
    setHovering2(true);
  };

  const handleMouseLeave2 = () => {
    if (hovering2) {
      // Continue from current position
      startAnimation2();
      setHovering2(false);
    }
  };

  return (
    <motion.div
      className="py-16 overflow-hidden"
      ref={containerRef}
      variants={carouselVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.h2
          className="text-3xl font-bold mb-2"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={
            isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }
          }
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Connect to all your data sources
        </motion.h2>
        <motion.p
          className="text-gray-500 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          camelAI works with all popular databases and spreadsheet formats
        </motion.p>
      </motion.div>

      <div className="relative w-full mb-8">
        <div className="mask-fade-edges">
          <div
            className="logo-track flex"
            onMouseEnter={handleMouseEnter1}
            onMouseLeave={handleMouseLeave1}
          >
            <motion.div
              className="logos-slide flex items-center"
              ref={track1Ref}
              animate={controls1}
            >
              {firstRowLogos.map(renderLogo)}
              {firstRowLogos.map(renderLogo)}
            </motion.div>
          </div>
        </div>
      </div>

      <div className="relative w-full">
        <div className="mask-fade-edges">
          <div
            className="logo-track flex"
            onMouseEnter={handleMouseEnter2}
            onMouseLeave={handleMouseLeave2}
          >
            <motion.div
              className="logos-slide flex items-center"
              ref={track2Ref}
              animate={controls2}
            >
              {secondRowLogos.map(renderLogo)}
              {secondRowLogos.map(renderLogo)}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default LogoCarousel;
