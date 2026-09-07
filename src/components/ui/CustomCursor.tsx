'use client';
import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export function CustomCursor() {
  const [cursorText, setCursorText] = useState('');
  const [cursorVariant, setCursorVariant] = useState('default');
  const [isVisible, setIsVisible] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Only run on desktop devices that have a real pointer
    if (window.matchMedia('(pointer: coarse)').matches) return;
    
    setIsVisible(true);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const viewElement = target.closest('[data-cursor="view"]');
      
      if (viewElement) {
        setCursorVariant('view');
        setCursorText('VIEW');
        return;
      }
      
      if (
        window.getComputedStyle(target).cursor === 'pointer' || 
        target.tagName.toLowerCase() === 'a' || 
        target.tagName.toLowerCase() === 'button'
      ) {
        setCursorVariant('pointer');
        setCursorText('');
        return;
      }
      
      setCursorVariant('default');
      setCursorText('');
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  const variants = {
    default: { 
      width: 12, height: 12, 
      x: '-50%', y: '-50%', 
      backgroundColor: '#F5F0EB', 
      mixBlendMode: 'difference' as const,
      border: '0px solid transparent'
    },
    pointer: { 
      width: 40, height: 40, 
      x: '-50%', y: '-50%', 
      backgroundColor: 'rgba(245, 240, 235, 0.05)', 
      border: '1px solid rgba(245, 240, 235, 0.3)',
      mixBlendMode: 'normal' as const
    },
    view: { 
      width: 80, height: 80, 
      x: '-50%', y: '-50%', 
      backgroundColor: '#C9A96E', 
      color: '#0A0A0A', 
      mixBlendMode: 'normal' as const,
      border: '0px solid transparent'
    }
  };

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full flex items-center justify-center pointer-events-none z-[9999] text-[10px] font-mono tracking-widest hidden md:flex"
      variants={variants}
      animate={cursorVariant}
      style={{ left: x, top: y }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
    >
      <motion.span 
        initial={{ opacity: 0 }}
        animate={{ opacity: cursorVariant === 'view' ? 1 : 0 }}
      >
        {cursorText}
      </motion.span>
    </motion.div>
  );
}
