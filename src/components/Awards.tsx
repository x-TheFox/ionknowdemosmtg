'use client';

import { motion, useReducedMotion } from 'motion/react';

const awards = [
  "Architectural Digest 2024",
  "AIA Excellence",
  "Houzz Best of Design",
  "Master Builders Assoc.",
  "LEED Platinum Certified",
  "Luxe Gold List"
];

export default function Awards() {
  const shouldReduceMotion = useReducedMotion();

  // Duplicate the list to ensure a seamless loop
  const duplicatedAwards = [...awards, ...awards];

  return (
    <section className="py-16 border-y border-[#2A2A2A] overflow-hidden bg-[#141414]">
      <div className="flex w-max">
        {shouldReduceMotion ? (
          <div className="flex">
            {awards.map((award, index) => (
              <div key={index} className="flex items-center">
                <span className="text-[#8B7D6B] uppercase font-mono tracking-widest text-sm px-12">
                  {award}
                </span>
                {index < awards.length - 1 && (
                  <span className="text-[#2A2A2A]">•</span>
                )}
              </div>
            ))}
          </div>
        ) : (
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 20, ease: "linear", repeat: Infinity }}
            className="flex"
          >
            {duplicatedAwards.map((award, index) => (
              <div key={index} className="flex items-center">
                <span className="text-[#8B7D6B] uppercase font-mono tracking-widest text-sm px-12 whitespace-nowrap">
                  {award}
                </span>
                <span className="text-[#2A2A2A]">•</span>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
