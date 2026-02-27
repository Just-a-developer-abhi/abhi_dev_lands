import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['var(--font-heading)', 'monospace'],
        body: ['var(--font-body)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      colors: {
        void: '#030508',
        abyss: '#070b12',
        surface: '#0d1420',
        border: '#1a2540',
        accent: {
          cyan: '#00f5ff',
          blue: '#0066ff',
          purple: '#7c3aed',
          glow: '#00d4ff',
        },
        text: {
          primary: '#e8edf5',
          secondary: '#8899bb',
          muted: '#445577',
        },
      },
      backgroundImage: {
        'grid-pattern': `linear-gradient(rgba(0,245,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,245,255,0.03) 1px, transparent 1px)`,
        'radial-glow': 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(0,102,255,0.15), transparent)',
        'hero-gradient': 'radial-gradient(ellipse 60% 80% at 50% 100%, rgba(0,212,255,0.08) 0%, transparent 70%)',
      },
      backgroundSize: {
        'grid': '60px 60px',
      },
      animation: {
        'flicker': 'flicker 8s infinite',
        'scan': 'scan 4s linear infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'glitch': 'glitch 5s infinite',
      },
      keyframes: {
        flicker: {
          '0%, 95%, 100%': { opacity: '1' },
          '96%': { opacity: '0.8' },
          '97%': { opacity: '1' },
          '98%': { opacity: '0.6' },
          '99%': { opacity: '1' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0,245,255,0.3), 0 0 60px rgba(0,102,255,0.1)' },
          '50%': { boxShadow: '0 0 40px rgba(0,245,255,0.6), 0 0 100px rgba(0,102,255,0.2)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glitch: {
          '0%, 90%, 100%': { transform: 'translate(0)' },
          '91%': { transform: 'translate(-2px, 1px)', filter: 'hue-rotate(90deg)' },
          '92%': { transform: 'translate(2px, -1px)' },
          '93%': { transform: 'translate(-1px, 2px)', filter: 'hue-rotate(0deg)' },
          '94%': { transform: 'translate(0)' },
        },
      },
      boxShadow: {
        'glow-sm': '0 0 10px rgba(0,245,255,0.3)',
        'glow': '0 0 20px rgba(0,245,255,0.4), 0 0 60px rgba(0,102,255,0.2)',
        'glow-lg': '0 0 40px rgba(0,245,255,0.5), 0 0 100px rgba(0,102,255,0.3)',
        'card': '0 4px 40px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.05)',
      },
    },
  },
  plugins: [],
}
export default config
