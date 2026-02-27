'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { gsap } from 'gsap'
import SectionHeader from './ui/SectionHeader'
import MagneticButton from './ui/MagneticButton'

const SOCIAL_LINKS = [
  { label: 'GitHub', handle: '@just-a-dev-abhi', icon: '◈', href: '#' },
  { label: 'Twitter', handle: '@abhishek_dev', icon: '◉', href: '#' },
  { label: 'LinkedIn', handle: 'Abhishek Singh', icon: '⬡', href: '#' },
  { label: 'Email', handle: 'abhi3447141@gmail.com', icon: '✉', href: 'mailto:abhi3447141@gmail.com' },
]

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const formRef = useRef<HTMLFormElement>(null)
  const orbRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  useEffect(() => {
    if (!orbRef.current) return
    const ctx = gsap.context(() => {
      gsap.to(orbRef.current, {
        scale: 1.3,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
    })
    return () => ctx.revert()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    setStatus('sent')
    setFormState({ name: '', email: '', message: '' })
  }

  return (
    <section ref={sectionRef} id="contact" className="section relative overflow-hidden">
      {/* Background orb */}
      <div
        ref={orbRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0,245,255,0.04) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="Contact"
          title="Let's build something"
          subtitle="Open for contracts, collaborations, and full-time opportunities."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — Form */}
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
            className="space-y-5"
          >
            {[
              { name: 'name', label: 'YOUR NAME', type: 'text', placeholder: 'Jane Smith' },
              { name: 'email', label: 'EMAIL ADDRESS', type: 'email', placeholder: 'jane@company.com' },
            ].map((field) => (
              <div key={field.name} className="group">
                <label className="block font-mono text-xs tracking-widest text-text-muted mb-2">
                  {field.label}
                </label>
                <input
                  name={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                  value={formState[field.name as keyof typeof formState]}
                  onChange={handleChange}
                  required
                  className="w-full bg-surface/40 border border-border hover:border-accent-cyan/30 focus:border-accent-cyan/60 focus:outline-none px-4 py-3.5 text-text-primary text-sm font-body placeholder:text-text-muted transition-colors duration-200"
                />
              </div>
            ))}

            <div className="group">
              <label className="block font-mono text-xs tracking-widest text-text-muted mb-2">
                MESSAGE
              </label>
              <textarea
                name="message"
                placeholder="Tell me about your project..."
                value={formState.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full bg-surface/40 border border-border hover:border-accent-cyan/30 focus:border-accent-cyan/60 focus:outline-none px-4 py-3.5 text-text-primary text-sm font-body placeholder:text-text-muted transition-colors duration-200 resize-none"
              />
            </div>

            <div className="pt-2">
              <MagneticButton
                className={`w-full py-4 font-heading font-bold tracking-widest text-sm transition-all duration-300 ${
                  status === 'sent'
                    ? 'bg-green-500/20 border border-green-500/40 text-green-400'
                    : 'bg-accent-cyan text-void hover:bg-white'
                }`}
              >
                {status === 'idle' && 'SEND MESSAGE'}
                {status === 'sending' && (
                  <span className="flex items-center gap-2 justify-center">
                    <span className="animate-spin w-4 h-4 border border-void border-t-transparent rounded-full" />
                    SENDING...
                  </span>
                )}
                {status === 'sent' && '✓ MESSAGE SENT'}
              </MagneticButton>
            </div>
          </motion.form>

          {/* Right — Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.77, 0, 0.175, 1] }}
            className="space-y-8"
          >
            {/* Availability */}
            <div className="p-6 border border-border bg-surface/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="font-mono text-xs tracking-wider text-green-400">AVAILABLE NOW</span>
              </div>
              <p className="text-text-secondary text-sm leading-relaxed">
                Currently taking on select freelance projects and open to full-time opportunities. 
                I typically respond within 24 hours.
              </p>
            </div>

            {/* Response time */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Response Time', value: '< 24h' },
                { label: 'Timezone', value: 'PST (UTC-8)' },
                { label: 'Project Types', value: 'Any' },
                { label: 'Availability', value: '20h/week' },
              ].map((item) => (
                <div key={item.label} className="p-4 border border-border/60 bg-surface/20">
                  <div className="font-mono text-xs text-text-muted mb-1">{item.label}</div>
                  <div className="font-heading font-semibold text-text-primary">{item.value}</div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div>
              <p className="font-mono text-xs tracking-widest text-text-muted mb-4">FIND ME ONLINE</p>
              <div className="space-y-3">
                {SOCIAL_LINKS.map((social, i) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.08 }}
                    whileHover={{ x: 6 }}
                    className="flex items-center gap-4 p-3 border border-border/40 hover:border-accent-cyan/30 hover:bg-surface/50 transition-all duration-200 group"
                  >
                    <span className="text-accent-cyan">{social.icon}</span>
                    <div className="flex-1">
                      <span className="font-mono text-xs text-text-muted">{social.label}</span>
                      <div className="text-text-primary text-sm group-hover:text-accent-cyan transition-colors">{social.handle}</div>
                    </div>
                    <svg className="w-3 h-3 text-text-muted group-hover:text-accent-cyan transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
