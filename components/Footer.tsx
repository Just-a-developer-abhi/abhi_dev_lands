'use client'

import { motion } from 'framer-motion'
import GlitchText from './ui/GlitchText'

export default function Footer() {
  return (
    <footer className="px-6 md:px-12 lg:px-24 py-12 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 border border-accent-cyan/40 flex items-center justify-center">
            <span className="text-accent-cyan font-mono text-xs font-bold">AN</span>
          </div>
          <GlitchText
            text="ABHISHEK SINGH RAJAWAT"
            className="text-text-muted text-sm tracking-wider"
            scramble={false}
          />
        </div>

        {/* Copyright */}
        <div className="font-mono text-xs text-text-muted text-center">
          <p>© 2024 Abhishek Singh. Designed & built with obsessive care.</p>
        </div>

        {/* Back to top */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          whileHover={{ y: -3 }}
          className="flex items-center gap-2 font-mono text-xs text-text-muted hover:text-accent-cyan transition-colors group"
        >
          BACK TO TOP
          <svg className="w-3 h-3 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </motion.button>
      </div>
    </footer>
  )
}
