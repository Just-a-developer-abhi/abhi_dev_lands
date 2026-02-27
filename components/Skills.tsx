'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import SectionHeader from './ui/SectionHeader'
import { skillCategories } from '@/data/skills'

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const currentSkills = skillCategories[activeCategory].skills

  return (
    <section id="skills" ref={ref} className="section relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(0,245,255,0.03) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="Skills"
          title="Technical Arsenal"
          subtitle="A curated set of technologies I've used to ship production systems at scale."
        />

        {/* Category tabs */}
        <div className="flex flex-wrap gap-3 mb-12">
          {skillCategories.map((cat, i) => (
            <motion.button
              key={cat.label}
              onClick={() => setActiveCategory(i)}
              className={`relative px-6 py-2.5 font-mono text-xs tracking-widest transition-all duration-200 border ${
                activeCategory === i
                  ? 'border-accent-cyan text-accent-cyan bg-accent-cyan/5'
                  : 'border-border text-text-muted hover:text-text-secondary hover:border-border/80'
              }`}
            >
              {activeCategory === i && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-accent-cyan/5"
                />
              )}
              {cat.label.toUpperCase()}
            </motion.button>
          ))}
        </div>

        {/* Skills grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {currentSkills.map((skill, i) => (
              <SkillCard key={skill.name} skill={skill} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* All tech logos strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-20 pt-10 border-t border-border"
        >
          <p className="font-mono text-xs text-text-muted tracking-widest mb-6 text-center">ALSO EXPERIENCED WITH</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Prisma', 'tRPC', 'Zustand', 'TanStack Query', 'Zod', 'Drizzle', 'Turbo', 'Nx', 'Playwright', 'Vitest', 'OpenAI SDK', 'LangChain', 'Pinecone', 'Supabase', 'PlanetScale'].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 border border-border/50 font-mono text-xs text-text-muted hover:text-text-secondary hover:border-accent-cyan/20 transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function SkillCard({ skill, index }: { skill: any; index: number }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.07, duration: 0.4 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative group p-6 border border-border hover:border-accent-cyan/30 bg-surface/40 hover:bg-surface/80 transition-all duration-300 overflow-hidden"
    >
      {/* Background glow on hover */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at 50% 100%, ${skill.color}10 0%, transparent 70%)`,
        }}
      />

      {/* Icon */}
      <div
        className="w-10 h-10 flex items-center justify-center text-xl mb-4 border border-border/60 rounded"
        style={{ color: skill.color }}
      >
        {skill.icon}
      </div>

      {/* Name */}
      <div className="font-heading font-semibold text-text-primary text-base mb-3 relative z-10">
        {skill.name}
      </div>

      {/* Progress bar */}
      <div className="relative h-1 bg-border/50 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${skill.level}%` }}
          transition={{ duration: 1.2, delay: index * 0.07 + 0.3, ease: 'easeOut' }}
          className="absolute inset-y-0 left-0 rounded-full"
          style={{ backgroundColor: skill.color }}
        />
        {/* Shimmer */}
        <motion.div
          animate={hovered ? { x: ['0%', '400%'] } : {}}
          transition={{ duration: 0.8, ease: 'easeIn' }}
          className="absolute inset-0 w-1/4 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
        />
      </div>

      {/* Level */}
      <div className="flex justify-between items-center mt-2">
        <span className="font-mono text-xs text-text-muted">Proficiency</span>
        <span className="font-mono text-xs" style={{ color: skill.color }}>
          {skill.level}%
        </span>
      </div>

      {/* Corner accent */}
      <div
        className="absolute top-0 right-0 w-12 h-12 opacity-10"
        style={{
          background: `linear-gradient(225deg, ${skill.color}, transparent)`,
        }}
      />
    </motion.div>
  )
}
