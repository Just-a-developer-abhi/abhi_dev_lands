'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import SectionHeader from './ui/SectionHeader'
import { projects } from '@/data/projects'

export default function Projects() {
  const [filter, setFilter] = useState<'all' | 'featured'>('all')
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  const filtered = filter === 'all' ? projects : projects.filter(p => p.featured)

  return (
    <section id="projects" className="section relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <SectionHeader
            label="Projects"
            title="Selected Work"
            subtitle="Production projects spanning AI, crypto, and creative tooling."
          />

          {/* Filter */}
          <div className="flex items-center gap-3 flex-shrink-0 mb-4">
            {(['all', 'featured'] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`font-mono text-xs tracking-widest px-4 py-2 border transition-all duration-200 ${
                  filter === f
                    ? 'border-accent-cyan text-accent-cyan bg-accent-cyan/5'
                    : 'border-border text-text-muted hover:text-text-secondary'
                }`}
              >
                {f.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Projects grid */}
        <AnimatePresence mode="popLayout">
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((project, i) => (
              <ProjectCard
                key={project.slug}
                project={project}
                index={i}
                isHovered={hoveredId === project.slug}
                onHover={setHoveredId}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View all */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex justify-center mt-16"
        >
          <Link
            href="#"
            className="group flex items-center gap-3 font-mono text-sm text-text-muted hover:text-accent-cyan transition-colors"
          >
            <span className="w-12 h-px bg-current group-hover:w-20 transition-all duration-300" />
            VIEW ALL ON GITHUB
            <span className="w-12 h-px bg-current group-hover:w-20 transition-all duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

function ProjectCard({
  project,
  index,
  isHovered,
  onHover,
}: {
  project: any
  index: number
  isHovered: boolean
  onHover: (id: string | null) => void
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      onHoverStart={() => onHover(project.slug)}
      onHoverEnd={() => onHover(null)}
    >
      <Link href={`/projects/${project.slug}`} className="block group">
        <div className="relative border border-border hover:border-accent-cyan/40 bg-surface/40 hover:bg-surface/80 transition-all duration-500 overflow-hidden h-full">
          {/* Color header */}
          <div
            className="h-1 w-full transition-all duration-500"
            style={{
              background: isHovered
                ? `linear-gradient(90deg, ${project.color}, transparent)`
                : 'transparent',
              borderBottom: `1px solid ${project.color}30`,
            }}
          />

          {/* Content */}
          <div className="p-7">
            {/* Tags row */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex flex-wrap gap-1.5">
                {project.tags.slice(0, 3).map((tag: string) => (
                  <span
                    key={tag}
                    className="font-mono text-xs px-2 py-0.5 border border-border/60 text-text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span className="font-mono text-xs text-text-muted">{project.year}</span>
            </div>

            {/* Title */}
            <h3 className="font-heading font-bold text-text-primary text-xl mb-1 group-hover:text-accent-cyan transition-colors">
              {project.title}
            </h3>
            <p className="font-mono text-xs text-text-muted mb-4" style={{ color: project.color }}>
              {project.subtitle}
            </p>

            {/* Description */}
            <p className="text-text-secondary text-sm leading-relaxed mb-6 line-clamp-2">
              {project.description}
            </p>

            {/* Metrics */}
            {project.metrics && (
              <div className="flex gap-6 pt-4 border-t border-border/60">
                {project.metrics.map((m: any) => (
                  <div key={m.label}>
                    <div className="font-heading font-bold text-lg text-text-primary">{m.value}</div>
                    <div className="font-mono text-xs text-text-muted">{m.label}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Arrow */}
            <div className="flex items-center justify-end mt-4">
              <motion.div
                animate={{ x: isHovered ? 4 : 0, opacity: isHovered ? 1 : 0.4 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-1 font-mono text-xs text-accent-cyan"
              >
                EXPLORE
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.div>
            </div>
          </div>

          {/* Featured badge */}
          {project.featured && (
            <div
              className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: project.color, boxShadow: `0 0 6px ${project.color}` }}
            />
          )}

          {/* Bottom glow on hover */}
          <motion.div
            animate={{ opacity: isHovered ? 1 : 0 }}
            className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
            style={{
              background: `linear-gradient(to top, ${project.accentColor}, transparent)`,
            }}
          />
        </div>
      </Link>
    </motion.div>
  )
}
