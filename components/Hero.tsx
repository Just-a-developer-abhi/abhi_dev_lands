'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { motion } from 'framer-motion'
import MagneticButton from './ui/MagneticButton'

const STATS = [
  { value: '8+', label: 'Years Experience' },
  { value: '50+', label: 'Projects Shipped' },
  { value: '12K+', label: 'GitHub Stars' },
]

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const orb1Ref = useRef<HTMLDivElement>(null)
  const orb2Ref = useRef<HTMLDivElement>(null)
  const scanlineRef = useRef<HTMLDivElement>(null)
  const counterRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial states
      gsap.set([headingRef.current, subtitleRef.current, ctaRef.current, statsRef.current], {
        opacity: 0,
        y: 60,
      })
      gsap.set(gridRef.current, { opacity: 0 })
      gsap.set([orb1Ref.current, orb2Ref.current], { scale: 0, opacity: 0 })

      // Main timeline
      const tl = gsap.timeline({ delay: 0.3 })

      // Grid appears first
      tl.to(gridRef.current, { opacity: 1, duration: 1.2, ease: 'power2.out' })

      // Orbs emerge
      tl.to(
        orb1Ref.current,
        { scale: 1, opacity: 1, duration: 1.5, ease: 'back.out(1.7)' },
        '-=0.8'
      )
      tl.to(
        orb2Ref.current,
        { scale: 1, opacity: 1, duration: 1.5, ease: 'back.out(1.7)' },
        '-=1.2'
      )

      // Heading reveals
      tl.to(headingRef.current, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }, '-=0.8')

      // Subtitle
      tl.to(subtitleRef.current, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.5')

      // Stats
      tl.to(statsRef.current, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.3')

      // CTA
      tl.to(ctaRef.current, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.5')

      // Floating animation for orbs
      gsap.to(orb1Ref.current, {
        y: -30,
        x: 15,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
      gsap.to(orb2Ref.current, {
        y: 20,
        x: -20,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 1,
      })

      // Scanline animation
      if (scanlineRef.current) {
        gsap.fromTo(
          scanlineRef.current,
          { top: '-2px' },
          { top: '100%', duration: 4, repeat: -1, ease: 'none', delay: 2 }
        )
      }
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 md:px-12 lg:px-24"
    >
      {/* Background grid */}
      <div
        ref={gridRef}
        className="absolute inset-0 bg-grid-pattern bg-grid opacity-0"
        style={{ maskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, black, transparent)' }}
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-radial-glow" />
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-void to-transparent" />

      {/* Orbs */}
      <div
        ref={orb1Ref}
        className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full opacity-0"
        style={{
          background: 'radial-gradient(circle, rgba(0,102,255,0.15) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      <div
        ref={orb2Ref}
        className="absolute bottom-1/3 left-1/4 w-96 h-96 rounded-full opacity-0"
        style={{
          background: 'radial-gradient(circle, rgba(0,245,255,0.08) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Scanline */}
      <div
        ref={scanlineRef}
        className="absolute left-0 right-0 h-px pointer-events-none z-10"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(0,245,255,0.3), transparent)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse-glow" />
          <span className="font-mono text-xs tracking-[0.4em] text-accent-cyan uppercase">
            Available for Work
          </span>
        </motion.div>

        {/* Heading */}
        <h1
          ref={headingRef}
          className="font-heading font-bold leading-[0.95] text-text-primary mb-6"
          style={{ fontSize: 'clamp(3.5rem, 10vw, 9rem)' }}
        >
          <span className="block">Crafting</span>
          <span className="block gradient-text glow-text">Digital</span>
          <span className="block">Realities.</span>
        </h1>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="text-text-secondary text-lg md:text-xl max-w-2xl mb-12 leading-relaxed"
        >
          Principal Engineer & Creative Developer. I build cinematic web experiences that live at the
          bleeding edge of design, performance, and emerging technology.
        </p>

        {/* CTA */}
        <div ref={ctaRef} className="flex flex-wrap gap-5 mb-20">
          <MagneticButton
            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="group px-8 py-4 bg-accent-cyan text-void font-heading font-bold tracking-wider text-sm hover:bg-white transition-colors duration-300"
          >
            <span>VIEW WORK</span>
            <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </MagneticButton>

          <MagneticButton
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 border border-border hover:border-accent-cyan/60 text-text-primary font-heading font-bold tracking-wider text-sm transition-all duration-300 hover:text-accent-cyan"
          >
            GET IN TOUCH
          </MagneticButton>
        </div>

        {/* Stats */}
        <div ref={statsRef} className="flex flex-wrap gap-12 border-t border-border pt-10">
          {STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <span className="font-heading font-bold text-3xl text-text-primary">{stat.value}</span>
              <span className="font-mono text-xs text-text-muted tracking-wider">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-8 right-8 opacity-20">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <path d="M60 0L60 60L0 60" stroke="#00f5ff" strokeWidth="1" />
          <circle cx="60" cy="0" r="3" fill="#00f5ff" />
        </svg>
      </div>
      <div className="absolute bottom-8 left-8 opacity-20">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <path d="M0 60L0 0L60 0" stroke="#00f5ff" strokeWidth="1" />
          <circle cx="0" cy="60" r="3" fill="#00f5ff" />
        </svg>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-xs text-text-muted tracking-widest">SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-accent-cyan to-transparent"
        />
      </motion.div>
    </section>
  )
}
