'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { services } from '@/data/services';
import { useReducedMotion } from 'motion/react';

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="services" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl text-[#F5F0EB] tracking-tight mb-16">
          The Offering
        </h2>

        <div className="flex flex-col md:flex-row h-[800px] md:h-[600px] gap-2">
          {services.map((service, index) => {
            const isActive = hoveredIndex === index;
            
            return (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredIndex(index)}
                className={`relative overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isActive ? 'flex-[3]' : 'flex-[1]'
                }`}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className={`object-cover w-full h-full transition-all duration-700 ${
                    isActive ? 'opacity-100 grayscale-0' : 'opacity-50 grayscale'
                  }`}
                />
                <div className="absolute inset-0 bg-black/40" />

                {/* Inactive State Content */}
                <div 
                  className={`absolute inset-0 flex items-center justify-center md:justify-start md:items-end p-8 transition-opacity duration-500 ${
                    isActive ? 'opacity-0' : 'opacity-100'
                  }`}
                >
                  <span className="md:-rotate-90 md:origin-bottom-left font-mono uppercase tracking-widest text-[#8B7D6B] whitespace-nowrap">
                    {service.title}
                  </span>
                </div>

                {/* Active State Content */}
                <div 
                  className={`absolute bottom-0 left-0 p-8 transition-all duration-700 delay-100 flex flex-col justify-end h-full bg-gradient-to-t from-black/80 via-black/20 to-transparent w-full ${
                    isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                >
                  <h3 className="text-3xl text-[#F5F0EB] font-light mb-4">{service.title}</h3>
                  <p className="text-[#F5F0EB]/80 mb-6 max-w-lg hidden md:block">
                    {service.description}
                  </p>
                  <Link 
                    href={`/services#${service.id}`}
                    className="text-[#C9A96E] font-mono tracking-widest uppercase text-sm hover:text-[#D4B77A] transition-colors w-fit pb-1 border-b border-[#C9A96E]/30 hover:border-[#D4B77A]"
                  >
                    Learn More &rarr;
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
