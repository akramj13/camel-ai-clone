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
  const [isVisible, setIsVisible] = useState(false);
  const controls1 = useAnimationControls();
  const controls2 = useAnimationControls();
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
  const startAnimations = useCallback(() => {
    // First row - continuous left movement
    controls1.start({
      x: [-2000, 0],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 60,
          ease: "linear",
        },
      },
    });

    // Second row - continuous right movement
    controls2.start({
      x: [0, -2000],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 60,
          ease: "linear",
        },
      },
    });
  }, [controls1, controls2]);

  // Initialize animations and visibility observer
  useEffect(() => {
    const currentRef = containerRef.current;
    startAnimations();

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
  }, [startAnimations]);

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
                duration: 2 + Math.random() * 2,
                ease: "easeInOut",
                delay: Math.random() * 2,
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
          <div className="logo-track flex">
            <motion.div
              className="logos-slide flex items-center"
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
          <div className="logo-track flex">
            <motion.div
              className="logos-slide flex items-center"
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
