'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);
  const style = shouldReduceMotion ? {} : { y };

  return (
    <section id="about" className="py-24 md:py-32 max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <div className="col-span-1 md:col-span-5">
          <h2 className="text-3xl md:text-4xl text-[#F5F0EB] font-light mb-8">
            Built on Craft
          </h2>
          <p className="text-lg text-[#8B7D6B] leading-relaxed">
            For over three decades, Meridian Estates has pursued a singular vision: to bridge bold architectural ambition with uncompromising structural reality. We are <span className="text-[#F5F0EB]">master builders</span>. We believe that true luxury isn't just seen—it is felt in the weight of a door, the precision of a joint, and the silence of a well-engineered room.
          </p>
        </div>
        <div className="col-span-1 md:col-span-7">
          <div ref={containerRef} className="relative aspect-[3/2] overflow-hidden">
            <motion.div style={style} className="absolute inset-0 scale-110">
              <Image
                src="/images/team.jpg"
                alt="Meridian Estates team on site"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 60vw"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
