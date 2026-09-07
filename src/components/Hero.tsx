import { HeroImage } from './HeroImage';
import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr';

export function Hero() {
  return (
    <section id="hero" className="relative min-h-[100dvh] overflow-hidden bg-[#0A0A0A]">
      <HeroImage />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent pointer-events-none" />
      
      {/* Content */}
      <div className="absolute bottom-0 left-0 z-20 w-full p-8 md:p-16 lg:p-24 max-w-3xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter leading-[1.1] text-[#F5F0EB]">
          Building Lasting Legacies
        </h1>
        <p className="text-lg text-[#8B7D6B] mt-6 max-w-xl">
          Luxury custom homes conceived with vision, constructed with craft, delivered without compromise.
        </p>
        <a 
          href="#contact" 
          className="mt-8 inline-flex items-center gap-2 text-[#C9A96E] hover:text-[#D4B77A] text-sm uppercase tracking-[0.15em] font-mono transition-colors border-b border-[#C9A96E]/30 hover:border-[#D4B77A] pb-1"
        >
          Start Your Project
          <ArrowUpRight weight="bold" />
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 md:bottom-16 md:right-16 z-20 flex flex-col items-center gap-12 pointer-events-none">
        <div className="text-[10px] uppercase tracking-[0.2em] text-[#8B7D6B] rotate-90 origin-center whitespace-nowrap -mb-6">
          Scroll
        </div>
        <div className="w-px h-12 bg-[#8B7D6B]/50" />
      </div>
    </section>
  );
}
