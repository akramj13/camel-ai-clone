import React, { ReactNode } from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

interface DemoDashProps {
  header: ReactNode;
  subheader: ReactNode;
  image: string;
  imageAnimation?: Variants;
}

function DemoDash({ header, subheader, image, imageAnimation }: DemoDashProps) {
  return (
    <section className="bg-black py-16 md:py-24">
      <div className="flex flex-col items-center justify-center gap-y-8 px-4 max-w-7xl mx-auto">
        {/* Header with dashed border to match image */}
        <div className="flex items-center justify-center gap-x-3 py-3 px-6 rounded-md border border-dashed border-white/20 relative">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-white"
          >
            <path
              d="M9.66347 17H14.3364M11.9999 3V4M18.3639 5.63604L17.6568 6.34315M21 11.9999H20M4 11.9999H3M6.34309 6.34315L5.63599 5.63604M8.46441 15.5356C6.51179 13.5829 6.51179 10.4171 8.46441 8.46449C10.417 6.51187 13.5829 6.51187 15.5355 8.46449C17.4881 10.4171 17.4881 13.5829 15.5355 15.5356L14.9884 16.0827C14.3555 16.7155 13.9999 17.5739 13.9999 18.469V19C13.9999 20.1046 13.1045 21 11.9999 21C10.8954 21 9.99989 20.1046 9.99989 19V18.469C9.99989 17.5739 9.6443 16.7155 9.01141 16.0827L8.46441 15.5356Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <h2 className="font-mono font-light text-xl md:text-2xl text-white">
            {header}
          </h2>
        </div>

        {/* Subheader */}
        <div className="max-w-2xl mb-6">
          <h3 className="text-lg md:text-xl text-white/80 text-center font-normal">
            {subheader}
          </h3>
        </div>

        {/* Image container with gradient border effect */}
        <div className="w-full max-w-5xl relative p-[1px] rounded-lg overflow-hidden bg-gradient-to-r from-red-500/30 via-purple-500/30 to-blue-500/30">
          <div className="w-full bg-[#111] rounded-lg overflow-hidden">
            <motion.div
              variants={imageAnimation}
              initial={imageAnimation ? "hidden" : undefined}
              animate={imageAnimation ? "visible" : undefined}
            >
              <Image
                src={image}
                alt="Dashboard preview"
                width={1200}
                height={800}
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DemoDash;
