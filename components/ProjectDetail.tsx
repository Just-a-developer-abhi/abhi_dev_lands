'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import Link from 'next/link'
import { Project } from '@/data/projects'
import { projects } from '@/data/projects'

export default function ProjectDetail({ project }: { project: Project }) {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.project-hero-bg',
        { scale: 1.1, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.5, ease: 'power3.out' }
      )
    }, heroRef)
    return () => ctx.revert()
  }, [])

  const otherProjects = projects.filter((p) => p.slug !== project.slug).slice(0, 3)

  return (
    <main className="min-h-screen">
      {/* Back navigation */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="fixed top-6 left-6 z-50"
      >
        <Link
          href="/"
          className="flex items-center gap-2 font-mono text-xs text-text-muted hover:text-accent-cyan transition-colors group bg-glass px-4 py-2 border border-border"
        >
          <svg className="w-3 h-3 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          BACK
        </Link>
      </motion.div>

      {/* Hero */}
      <div ref={heroRef} className="relative h-[70vh] flex items-end overflow-hidden">
        {/* Background */}
        <div
          className="project-hero-bg absolute inset-0"
          style={{
            background: `radial-gradient(ellipse 80% 60% at 50% 100%, ${project.accentColor} 0%, transparent 70%), linear-gradient(180deg, #030508 0%, #0d1420 100%)`,
          }}
        />

        {/* Grid */}
        <div
          className="absolute inset-0 bg-grid-pattern bg-grid opacity-20"
          style={{ maskImage: 'radial-gradient(ellipse 70% 70% at 50% 80%, black, transparent)' }}
        />

        {/* Content */}
        <div className="relative z-10 px-6 md:px-16 lg:px-24 pb-16 max-w-6xl mx-auto w-full">
          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-2 mb-6"
          >
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-xs px-3 py-1 border"
                style={{ borderColor: `${project.color}40`, color: project.color }}
              >
                {tag}
              </span>
            ))}
          </motion.div>

          {/* Title */}
          <div className="overflow-hidden mb-2">
            <motion.h1
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, ease: [0.77, 0, 0.175, 1], delay: 0.1 }}
              className="font-heading font-bold text-text-primary leading-none"
              style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}
            >
              {project.title}
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="font-heading text-xl"
            style={{ color: project.color }}
          >
            {project.subtitle}
          </motion.p>
        </div>

        {/* Scanline */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: `linear-gradient(90deg, transparent, ${project.color}60, transparent)` }}
        />
      </div>

      {/* Details */}
      <div className="px-6 md:px-16 lg:px-24 py-20 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="font-heading font-bold text-2xl text-text-primary mb-4">Overview</h2>
              <p className="text-text-secondary leading-relaxed text-lg">{project.longDescription}</p>
            </motion.div>

            {/* Metrics */}
            {project.metrics && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <h2 className="font-heading font-bold text-2xl text-text-primary mb-6">Impact</h2>
                <div className="grid grid-cols-3 gap-4">
                  {project.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="p-6 border border-border bg-surface/40 text-center"
                      style={{ borderTopColor: project.color }}
                    >
                      <div
                        className="font-heading font-bold text-3xl mb-1"
                        style={{ color: project.color }}
                      >
                        {metric.value}
                      </div>
                      <div className="font-mono text-xs text-text-muted">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Placeholder sections */}
            {['Technical Architecture', 'Key Challenges', 'Results & Learnings'].map((section, i) => (
              <motion.div
                key={section}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <h2 className="font-heading font-bold text-2xl text-text-primary mb-4">{section}</h2>
                <div className="space-y-3">
                  {[1, 2, 3].map((line) => (
                    <div key={line} className={`h-px bg-border ${line === 3 ? 'w-2/3' : 'w-full'}`} />
                  ))}
                  <p className="text-text-muted text-sm italic">Details available upon request or in the linked repository.</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="space-y-6"
          >
            {/* Meta */}
            <div className="p-6 border border-border bg-surface/30 space-y-4">
              {[
                { label: 'Year', value: project.year },
                { label: 'Role', value: project.role },
              ].map((item) => (
                <div key={item.label}>
                  <div className="font-mono text-xs text-text-muted mb-1">{item.label}</div>
                  <div className="text-text-primary font-medium">{item.value}</div>
                </div>
              ))}
            </div>

            {/* Links */}
            <div className="space-y-3">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between w-full p-4 border border-border hover:border-accent-cyan/40 transition-colors group"
                >
                  <span className="font-mono text-sm text-text-secondary group-hover:text-accent-cyan transition-colors">Live Demo</span>
                  <svg className="w-4 h-4 text-text-muted group-hover:text-accent-cyan transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between w-full p-4 border border-border hover:border-accent-cyan/40 transition-colors group"
                >
                  <span className="font-mono text-sm text-text-secondary group-hover:text-accent-cyan transition-colors">GitHub</span>
                  <svg className="w-4 h-4 text-text-muted" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </a>
              )}
            </div>
          </motion.aside>
        </div>

        {/* Other projects */}
        <div className="mt-24 pt-16 border-t border-border">
          <h2 className="font-heading font-bold text-2xl text-text-primary mb-8">Other Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {otherProjects.map((p) => (
              <Link
                key={p.slug}
                href={`/projects/${p.slug}`}
                className="group p-5 border border-border hover:border-accent-cyan/30 bg-surface/20 hover:bg-surface/50 transition-all duration-300"
              >
                <h3 className="font-heading font-bold text-text-primary group-hover:text-accent-cyan transition-colors mb-1">
                  {p.title}
                </h3>
                <p className="font-mono text-xs mb-3" style={{ color: p.color }}>
                  {p.subtitle}
                </p>
                <p className="text-text-muted text-xs leading-relaxed line-clamp-2">{p.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
