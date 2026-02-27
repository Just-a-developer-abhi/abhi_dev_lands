'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'
import SectionHeader from './ui/SectionHeader'
import { experiences } from '@/data/experience'

gsap.registerPlugin(ScrollTrigger)

export default function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const track = trackRef.current
    if (!section || !track) return

    const ctx = gsap.context(() => {
      const cards = track.querySelectorAll('.exp-card')
      const totalScroll = track.scrollWidth - window.innerWidth + 200

      // Create horizontal scroll timeline and pin the section
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          pin: true,
          scrub: 1.2,
          start: 'top top',
          end: `+=${totalScroll + 400}`,
          onUpdate: (self) => {
            if (progressRef.current) {
              progressRef.current.style.width = `${self.progress * 100}%`
            }
          },
        },
      })

      // move the track horizontally across the pinned section
      tl.to(track, {
        x: -(totalScroll),
        ease: 'none',
      })

      // Animate each card in sync with the horizontal timeline using containerAnimation.
      // This ensures each card's reveal is tied to the progress of `tl` (the horizontal scroll),
      // so cards won't pop in all at the end nor disappear too early.
      cards.forEach((card) => {
        // ensure initial state
        gsap.set(card, { opacity: 0, y: 30 })

        gsap.to(card, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: 'power2.out',
          scrollTrigger: {
            // link this trigger to the container animation (tl)
            containerAnimation: tl,
            trigger: card,
            // For horizontal container animations, use left/right positions.
            // Start when the left edge of the card reaches the center of the viewport
            // and end when the right edge leaves the center. Adjust if you want earlier/later reveals.
            start: 'left center',
            end: 'right center',
            // let the animation play when entering; reverse when scrolling back
            toggleActions: 'play none none reverse',
          },
        })
      })
    }, sectionRef)

    return () => {
      ctx.revert()
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <section ref={sectionRef} id="experience" className="relative overflow-hidden min-h-screen">
      <div className="pt-32 pb-16 px-6 md:px-12 lg:px-24">
        <SectionHeader
          label="Experience"
          title="Where I've built"
          subtitle="A journey through the companies that shaped how I think about software."
        />

        {/* Progress bar */}
        <div className="mb-6 h-px bg-border relative overflow-hidden">
          <div
            ref={progressRef}
            className="absolute inset-y-0 left-0 bg-accent-cyan transition-none"
            style={{ width: '0%' }}
          />
        </div>

        {/* Scrolling track */}
        <div ref={trackRef} className="flex gap-8 w-max pl-0 pr-32">
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.id} exp={exp} index={i} />
          ))}

          {/* End CTA card */}
          <div className="exp-card flex-shrink-0 w-[360px] md:w-[420px] flex flex-col items-center justify-center border border-dashed border-border p-8 text-center">
            <div className="text-4xl mb-4">✦</div>
            <h3 className="font-heading font-bold text-text-primary text-lg mb-2">What's Next?</h3>
            <p className="text-text-muted text-sm">Ready to build something extraordinary together.</p>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="flex items-center gap-3 mt-8 opacity-50">
          <motion.div
            animate={{ x: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <span className="font-mono text-xs text-text-muted tracking-wider">DRAG OR SCROLL →</span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ExperienceCard({ exp, index }: { exp: any; index: number }) {
  return (
    <div
      className="exp-card flex-shrink-0 w-[360px] md:w-[420px] border border-border hover:border-accent-cyan/30 bg-surface/50 p-6 relative group transition-all duration-300"
    >
      {/* Year badge */}
      <div className="flex items-center justify-between mb-8">
        <span
          className="font-mono text-xs tracking-widest px-3 py-1 border"
          style={{ borderColor: `${exp.color}40`, color: exp.color, backgroundColor: `${exp.color}08` }}
        >
          {exp.year}
        </span>
        <span className="font-mono text-xl" style={{ color: exp.color }}>{exp.logo}</span>
      </div>

      {/* Role & Company */}
      <h3 className="font-heading font-bold text-text-primary text-lg mb-1">{exp.role}</h3>
      <div className="flex items-center gap-2 mb-1">
        <span className="font-heading font-semibold text-base" style={{ color: exp.color }}>
          {exp.company}
        </span>
      </div>
      <div className="flex items-center gap-3 mb-6">
        <span className="font-mono text-xs text-text-muted">{exp.location}</span>
        <span className="w-1 h-1 rounded-full bg-text-muted" />
        <span className="font-mono text-xs text-text-muted">{exp.type}</span>
      </div>

      {/* Description */}
      <p className="text-text-secondary text-sm leading-relaxed mb-6">{exp.description}</p>

      {/* Highlights */}
      <ul className="space-y-2">
        {exp.highlights.map((h: string, i: number) => (
          <li key={i} className="flex items-start gap-2 text-sm text-text-muted">
            <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: exp.color }} />
            {h}
          </li>
        ))}
      </ul>

      {/* Bottom accent */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ backgroundColor: exp.color }}
      />

      {/* Corner number */}
      <span className="absolute top-6 right-6 font-mono text-xs text-text-muted">
        0{index + 1}
      </span>
    </div>
  )
}
