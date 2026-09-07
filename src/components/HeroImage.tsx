'use client';

import { motion, useReducedMotion } from 'motion/react';
import Image from 'next/image';

export function HeroImage() {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className="absolute inset-0 z-0"
      initial={reduce ? false : { scale: 1.1 }}
      animate={{ scale: 1 }}
      transition={{ duration: 12, ease: 'linear' }}
    >
      <Image
        src="/images/hero.jpg"
        alt="Modern luxury residence at twilight"
        fill
        priority
        className="object-cover"
        sizes="100vw"
        quality={90}
      />
    </motion.div>
  );
}
