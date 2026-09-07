import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function FeaturedProjects() {
  const p1 = projects.find(p => p.id === 1) || projects[0];
  const p2 = projects.find(p => p.id === 2) || projects[1];
  const p3 = projects.find(p => p.id === 3) || projects[2];

  return (
    <section id="work" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl text-[#F5F0EB] tracking-tight mb-16">
          Selected Work
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Large Project */}
          {p1 && (
            <Link 
              href={`#`}
              data-cursor="view"
              className="col-span-1 md:col-span-8 aspect-[4/3] md:aspect-[16/9] relative overflow-hidden group bg-[#141414] block"
            >
              <Image 
                src={p1.image} 
                alt={p1.name} 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              <div className="absolute bottom-0 left-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-2xl text-[#F5F0EB] font-light">{p1.name}</h3>
                <p className="text-sm text-[#C9A96E] font-mono tracking-widest uppercase mt-2">
                  {p1.location} • {p1.year}
                </p>
              </div>
            </Link>
          )}

          {/* Small Projects */}
          <div className="col-span-1 md:col-span-4 flex flex-col gap-6">
            {p2 && (
              <Link 
                href={`#`}
                data-cursor="view"
                className="relative overflow-hidden group bg-[#141414] aspect-[4/3] md:h-1/2 block"
              >
                <Image 
                  src={p2.image} 
                  alt={p2.name} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                <div className="absolute bottom-0 left-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl text-[#F5F0EB] font-light">{p2.name}</h3>
                  <p className="text-sm text-[#C9A96E] font-mono tracking-widest uppercase mt-2">
                    {p2.location} • {p2.year}
                  </p>
                </div>
              </Link>
            )}
            
            {p3 && (
              <Link 
                href={`#`}
                data-cursor="view"
                className="relative overflow-hidden group bg-[#141414] aspect-[4/3] md:h-1/2 block"
              >
                <Image 
                  src={p3.image} 
                  alt={p3.name} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                <div className="absolute bottom-0 left-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl text-[#F5F0EB] font-light">{p3.name}</h3>
                  <p className="text-sm text-[#C9A96E] font-mono tracking-widest uppercase mt-2">
                    {p3.location} • {p3.year}
                  </p>
                </div>
              </Link>
            )}
          </div>
        </div>

        <Link 
          href="#" 
          className="mt-16 text-center block text-[#F5F0EB] hover:text-[#C9A96E] transition-colors"
        >
          <span className="border-b border-[#2A2A2A] hover:border-[#C9A96E] pb-1">
            View All Projects &rarr;
          </span>
        </Link>
      </div>
    </section>
  );
}
