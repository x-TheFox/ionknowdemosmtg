'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let start = performance.now();
    const duration = 1800; // 1.8 seconds for the cinematic count

    const animate = (time: number) => {
      let elapsed = time - start;
      let current = Math.min((elapsed / duration) * 100, 100);
      
      // Custom ease-out logic
      let ease = 1 - Math.pow(1 - current / 100, 5);
      setProgress(Math.floor(ease * 100));

      if (current < 100) {
        requestAnimationFrame(animate);
      } else {
        setTimeout(() => setIsVisible(false), 300);
      }
    };
    
    requestAnimationFrame(animate);
    
    // Fallback if browser throttles RAF
    return () => setIsVisible(false);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#0A0A0A] text-[#F5F0EB]"
        >
          <div className="overflow-hidden mb-6">
            <motion.div 
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-mono tracking-[0.3em] uppercase text-xs text-[#8B7D6B]"
            >
              Meridian Estates
            </motion.div>
          </div>
          <div className="text-[#C9A96E] font-mono text-6xl md:text-8xl font-light tabular-nums">
            {progress.toString().padStart(3, '0')}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
