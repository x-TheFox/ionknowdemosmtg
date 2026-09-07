import { MagneticButton } from '@/components/ui/MagneticButton';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="py-32 md:py-48 relative bg-gradient-to-b from-[#0A0A0A] to-[#141414]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-[#F5F0EB] mb-12">
          Ready to Build Something Extraordinary?
        </h2>
        
        <div className="flex flex-col items-center">
          <MagneticButton>
            <Link 
              href="/contact" 
              className="inline-block bg-[#C9A96E] text-[#0A0A0A] px-8 py-4 uppercase font-mono tracking-widest text-sm hover:bg-[#D4B77A] transition-colors"
            >
              Start the Conversation
            </Link>
          </MagneticButton>
          
          <a href="tel:+18005550199" className="mt-8 text-[#8B7D6B] font-mono tracking-widest block hover:text-[#C9A96E] transition-colors">
            1.800.555.0199
          </a>
        </div>
      </div>
    </section>
  );
}
