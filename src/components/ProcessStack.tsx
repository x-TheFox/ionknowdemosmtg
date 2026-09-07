'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useReducedMotion } from 'motion/react'
import { processSteps } from '@/data/process'

const bgColors = [
  'bg-[#0A0A0A]',
  'bg-[#0C0C0C]',
  'bg-[#0E0E0E]',
  'bg-[#101010]',
]

export default function ProcessStack() {
  const containerRef = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    if (prefersReducedMotion) return

    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>('.process-card')
      const lastCardIndex = cards.length - 1

      cards.forEach((card, index) => {
        if (index === lastCardIndex) return

        ScrollTrigger.create({
          trigger: card,
          start: 'top top',
          endTrigger: cards[lastCardIndex],
          end: 'top top',
          pin: true,
          pinSpacing: false,
        })

        const nextCard = cards[index + 1]

        gsap.to(card, {
          scale: 0.92,
          opacity: 0.5,
          ease: 'none',
          scrollTrigger: {
            trigger: nextCard,
            start: 'top bottom',
            end: 'top top',
            scrub: true,
          },
        })
      })
    }, containerRef)

    return () => ctx.revert()
  }, [prefersReducedMotion])

  return (
    <section id="process" className="py-0">
      <div className="py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-light tracking-tight text-[#F5F0EB]">
          Our Process
        </h2>
        <p className="text-[#8B7D6B] mt-4 mx-auto max-w-md">
          A methodical and deliberate approach to building spaces that endure.
        </p>
      </div>

      <div ref={containerRef} className="relative">
        {processSteps.map((step, i) => (
          <div
            key={step.id}
            className={`process-card sticky top-0 min-h-[100dvh] flex items-center justify-center ${
              bgColors[i % bgColors.length]
            }`}
          >
            <div className="max-w-7xl mx-auto w-full px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
              <div>
                <div className="text-8xl md:text-[10rem] font-light text-[#C9A96E]/20">
                  {step.number}
                </div>
                <h3 className="text-3xl md:text-4xl font-light text-[#F5F0EB] tracking-tight mt-2">
                  {step.title}
                </h3>
                <p className="text-base text-[#8B7D6B] mt-4 max-w-md leading-relaxed">
                  {step.description}
                </p>
              </div>
              <div className="relative aspect-[16/10] overflow-hidden w-full">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
