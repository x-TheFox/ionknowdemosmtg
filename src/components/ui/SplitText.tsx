'use client';
import { motion } from 'motion/react';

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export function SplitText({ text, className = '', delay = 0 }: SplitTextProps) {
  const words = text.split(' ');

  return (
    <span className={`inline-block ${className}`}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.25em] pb-2 align-bottom">
          <motion.span
            className="inline-block origin-bottom"
            initial={{ y: '120%', rotate: 2 }}
            whileInView={{ y: 0, rotate: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              delay: delay + (i * 0.05),
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
