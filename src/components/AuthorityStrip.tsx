import { Counter } from "@/components/ui/Counter";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export default function AuthorityStrip() {
  return (
    <section className="py-12 border-y border-[#2A2A2A]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-[#2A2A2A]/0 md:divide-[#2A2A2A]">
        <RevealOnScroll className="flex flex-col items-center text-center">
          <div className="text-4xl md:text-5xl font-light text-[#F5F0EB]">
            <Counter end={32} />
          </div>
          <div className="text-xs font-mono uppercase tracking-[0.1em] text-[#8B7D6B] mt-2">
            Years of Excellence
          </div>
        </RevealOnScroll>
        <RevealOnScroll className="flex flex-col items-center text-center" delay={0.1}>
          <div className="text-4xl md:text-5xl font-light text-[#F5F0EB]">
            <Counter end={180} suffix="+" />
          </div>
          <div className="text-xs font-mono uppercase tracking-[0.1em] text-[#8B7D6B] mt-2">
            Custom Residences
          </div>
        </RevealOnScroll>
        <RevealOnScroll className="flex flex-col items-center text-center" delay={0.2}>
          <div className="text-4xl md:text-5xl font-light text-[#F5F0EB]">
            <Counter prefix="$" end={2.4} decimals={1} suffix="B" />
          </div>
          <div className="text-xs font-mono uppercase tracking-[0.1em] text-[#8B7D6B] mt-2">
            Portfolio Value
          </div>
        </RevealOnScroll>
        <RevealOnScroll className="flex flex-col items-center text-center" delay={0.3}>
          <div className="text-4xl md:text-5xl font-light text-[#F5F0EB]">
            AD
          </div>
          <div className="text-xs font-mono uppercase tracking-[0.1em] text-[#8B7D6B] mt-2">
            Architectural Digest Featured
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
