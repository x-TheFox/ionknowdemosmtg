export default function Testimonial() {
  return (
    <section className="py-32 md:py-40 relative">
      <div className="absolute text-[20rem] md:text-[30rem] leading-none text-[#C9A96E]/5 top-0 left-1/2 -translate-x-1/2 -translate-y-1/4 font-serif pointer-events-none select-none">
        &#8220;
      </div>
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <blockquote className="text-2xl md:text-3xl lg:text-4xl font-light text-[#F5F0EB] leading-relaxed tracking-tight italic">
          &#8220;They didn&#8217;t just build our home &#8212; they understood the way we wanted to live in it. Every corner reveals a decision made with care.&#8221;
        </blockquote>
        
        <div className="mt-10">
          <div className="text-sm font-mono uppercase tracking-[0.2em] text-[#C9A96E]">
            Catherine & James Aldridge
          </div>
          <div className="text-sm text-[#8B7D6B] mt-1">
            Homeowners, The Carmel Overlook
          </div>
        </div>
      </div>
    </section>
  )
}
