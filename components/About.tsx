'use client'

import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import SectionHeader from './ui/SectionHeader'

const FACTS = [
  { icon: '◈', label: 'Location', value: 'San Francisco, CA' },
  { icon: '◉', label: 'Status', value: 'Open to opportunities' },
  { icon: '⬡', label: 'Focus', value: 'Full-stack + AI Systems' },
  { icon: '◎', label: 'Education', value: 'CS, MIT \'16' },
]

const PHILOSOPHY = [
  {
    n: '01',
    title: 'Performance is UX',
    text: 'Every millisecond matters. I obsess over bundle sizes, render cycles, and network waterfalls because fast software feels respectful.',
  },
  {
    n: '02',
    title: 'Design in Code',
    text: 'The gap between design and engineering is where great products die. I live in that gap—fluent in both languages.',
  },
  {
    n: '03',
    title: 'Systems Thinking',
    text: 'Good solutions are obvious in hindsight. I step back to understand the whole before optimizing any part.',
  },
]

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [-40, 40])

  return (
    <section ref={sectionRef} id="about" className="section relative overflow-hidden">
      {/* Parallax background element */}
      <motion.div
        // style={{ y }}
        className="absolute right-0 top-1/2 w-64 h-64 rounded-full pointer-events-none"
        style={{
          y,
          background: 'radial-gradient(circle, rgba(0,102,255,0.08) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="About"
          title="Engineering at the frontier"
          subtitle="8 years building products used by millions — from zero-knowledge cryptography to generative AI."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — Bio */}
          <div className="space-y-6">
            {[
              "I started coding at 14, building janky Flash games that nobody played. Two decades later, I'm a Principal Engineer at Anthropic, working on problems that seemed like science fiction when I started.",
              "My superpower is the ability to operate at every layer of the stack — from CUDA kernels and distributed systems to pixel-perfect animations and design systems. I've shipped products used by 50M+ users and open-source tools with 20K+ GitHub stars.",
              "When I'm not coding, I'm usually surfing terrible waves in the Bay, reading dense ML papers with a strong espresso, or losing at chess to engines I've built myself.",
            ].map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className="text-text-secondary text-base leading-relaxed"
              >
                {para}
              </motion.p>
            ))}

            {/* Facts grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-border"
            >
              {FACTS.map((fact) => (
                <div key={fact.label} className="flex items-start gap-3">
                  <span className="text-accent-cyan mt-0.5">{fact.icon}</span>
                  <div>
                    <div className="font-mono text-xs text-text-muted tracking-wider mb-0.5">{fact.label}</div>
                    <div className="text-text-primary text-sm font-medium">{fact.value}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Philosophy cards */}
          <div className="space-y-4">
            {PHILOSOPHY.map((item, i) => (
              <motion.div
                key={item.n}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, delay: i * 0.15, ease: [0.77, 0, 0.175, 1] }}
                whileHover={{ x: 8, transition: { duration: 0.2 } }}
                className="group relative p-6 border border-border hover:border-accent-cyan/30 transition-colors duration-300 bg-surface/50"
              >
                {/* Number */}
                <span className="absolute top-4 right-5 font-mono text-xs text-text-muted">{item.n}</span>

                {/* Glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-accent-cyan/0 to-accent-cyan/0 group-hover:from-accent-cyan/3 group-hover:to-transparent transition-all duration-500" />

                {/* Top accent line */}
                <div className="w-8 h-px bg-accent-cyan mb-4 group-hover:w-16 transition-all duration-300" />

                <h3 className="font-heading font-bold text-text-primary text-lg mb-2">{item.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{item.text}</p>
              </motion.div>
            ))}

            {/* Terminal easter egg */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="p-4 border border-border bg-surface/30 font-mono text-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-red-500/60" />
                <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
                <div className="w-2 h-2 rounded-full bg-green-500/60" />
                <span className="text-text-muted ml-2">terminal</span>
              </div>
              <div className="space-y-1">
                <p className="text-text-muted">$ whoami</p>
                <p className="text-accent-cyan">abhishek_dev</p>
                <p className="text-text-muted">$ cat interests.txt</p>
                <p className="text-text-secondary">distributed_systems, generative_ai,</p>
                <p className="text-text-secondary">creative_coding, surfing, chess</p>
                <p className="text-text-muted">$ <span className="animate-pulse">█</span></p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
