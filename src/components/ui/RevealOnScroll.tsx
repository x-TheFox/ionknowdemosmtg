'use client';

import { motion, useReducedMotion } from 'motion/react';
import { type ReactNode } from 'react';

interface RevealOnScrollProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: 'up' | 'left' | 'right';
}

export function RevealOnScroll({ children, delay = 0, className = '', direction = 'up' }: RevealOnScrollProps) {
  const reduce = useReducedMotion();

  const directionMap = {
    up: { y: 32, x: 0 },
    left: { y: 0, x: -32 },
    right: { y: 0, x: 32 },
  };

  const offset = directionMap[direction];

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: offset.y, x: offset.x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
