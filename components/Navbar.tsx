'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import GlitchText from './ui/GlitchText'
import MagneticButton from './ui/MagneticButton'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-24 py-5 flex items-center justify-between transition-all duration-500 ${
          scrolled ? 'bg-glass border-b border-border' : ''
        }`}
      >
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="group flex items-center gap-2"
        >
          <div className="w-8 h-8 rounded-sm border border-accent-cyan/40 flex items-center justify-center group-hover:border-accent-cyan/80 transition-colors">
            <span className="text-accent-cyan font-mono text-sm font-bold">AR</span>
          </div>
          <GlitchText
            text="ABHISHEK SINGH RAJAWAT"
            className="text-text-primary font-heading font-bold tracking-wider text-sm hidden md:block"
            scramble={false}
          />
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.button
              key={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i + 0.3 }}
              onClick={() => handleNavClick(link.href)}
              className="relative group font-mono text-xs tracking-widest text-text-secondary hover:text-accent-cyan transition-colors duration-200"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent-cyan group-hover:w-full transition-all duration-300" />
            </motion.button>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <MagneticButton
            href="#contact"
            className="px-5 py-2 border border-accent-cyan/40 hover:border-accent-cyan text-accent-cyan font-mono text-xs tracking-widest hover:bg-accent-cyan/10 transition-all duration-300"
          >
            HIRE ME
          </MagneticButton>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            className="block w-6 h-px bg-accent-cyan"
          />
          <motion.span
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-6 h-px bg-accent-cyan"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            className="block w-6 h-px bg-accent-cyan"
          />
        </button>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
            exit={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.5, ease: [0.77, 0, 0.175, 1] }}
            className="fixed inset-0 z-40 bg-abyss flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * i }}
                onClick={() => handleNavClick(link.href)}
                className="font-heading text-4xl font-bold text-text-primary hover:text-accent-cyan transition-colors"
              >
                {link.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
