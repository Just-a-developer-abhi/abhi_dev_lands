'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  label: string
  title: string
  subtitle?: string
  className?: string
  align?: 'left' | 'center'
}

export default function SectionHeader({ label, title, subtitle, className, align = 'left' }: SectionHeaderProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start'

  return (
    <div ref={ref} className={cn('flex flex-col gap-4 mb-20', alignClass, className)}>
      <motion.div
        initial={{ opacity: 0, x: align === 'center' ? 0 : -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-3"
      >
        <span className="inline-block w-8 h-px bg-accent-cyan" />
        <span className="font-mono text-xs tracking-[0.3em] text-accent-cyan uppercase">{label}</span>
        <span className="inline-block w-8 h-px bg-accent-cyan" />
      </motion.div>

      <div className="overflow-hidden">
        <motion.h2
          initial={{ y: '100%' }}
          animate={isInView ? { y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1], delay: 0.1 }}
          className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary leading-[1.1]"
        >
          {title}
        </motion.h2>
      </div>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-text-secondary text-lg max-w-xl"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
