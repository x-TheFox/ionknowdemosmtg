'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, List, X } from '@phosphor-icons/react';
import Link from 'next/link';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 100);
          ticking = false;
        });
        ticking = true;
      }
    };
    
    // Initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Work', id: 'work' },
    { name: 'Process', id: 'process' },
    { name: 'Services', id: 'services' },
    { name: 'About', id: 'about' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 mx-auto mt-6 w-[95%] md:w-max h-16 flex items-center justify-between px-6 md:px-8 transition-colors duration-300 ${
          isScrolled ? 'bg-black/60 backdrop-blur-3xl' : 'bg-black/40 backdrop-blur-2xl'
        } border border-white/5`}
      >
        <Link 
          href="/" 
          className="font-mono uppercase tracking-[0.2em] text-sm text-[#F5F0EB]"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Meridian
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8 ml-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleScrollTo(e, link.id)}
              className="text-sm text-[#8B7D6B] hover:text-[#F5F0EB] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block ml-8">
          <Link
            href="#contact"
            onClick={(e) => handleScrollTo(e, 'contact')}
            className="text-sm text-[#0A0A0A] bg-[#C9A96E] hover:bg-[#D4B77A] px-5 py-2 transition-colors flex items-center gap-2"
          >
            Start a Project
            <ArrowUpRight weight="bold" />
          </Link>
        </div>

        {/* Mobile Toggle (hamburger icon using List but visually minimal) */}
        <button
          className="md:hidden text-[#F5F0EB] p-2 -mr-2 flex flex-col gap-[6px] justify-center items-center w-8 h-8"
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
        >
          <span className="w-6 h-[1px] bg-current block"></span>
          <span className="w-6 h-[1px] bg-current block"></span>
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-3xl flex flex-col p-6"
          >
            <div className="flex justify-between items-center mt-6">
              <span className="font-mono uppercase tracking-[0.2em] text-sm text-[#F5F0EB]">
                Meridian
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="text-[#F5F0EB] p-2 -mr-2"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            <nav className="flex-1 flex flex-col justify-center gap-8 mt-12">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleScrollTo(e, link.id)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i, duration: 0.4 }}
                  className="text-3xl font-light text-[#F5F0EB] tracking-tight hover:text-[#C9A96E] transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="mt-auto mb-8"
            >
              <Link
                href="#contact"
                onClick={(e) => handleScrollTo(e, 'contact')}
                className="w-full text-center text-sm text-[#0A0A0A] bg-[#C9A96E] hover:bg-[#D4B77A] px-5 py-4 transition-colors flex items-center justify-center gap-2 uppercase font-mono tracking-widest"
              >
                Start a Project
                <ArrowUpRight weight="bold" />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
