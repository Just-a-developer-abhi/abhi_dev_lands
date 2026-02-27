export interface Project {
  slug: string
  title: string
  subtitle: string
  description: string
  longDescription: string
  tags: string[]
  year: string
  role: string
  link?: string
  github?: string
  color: string
  accentColor: string
  featured: boolean
  metrics?: { label: string; value: string }[]
}

export const projects: Project[] = [
  {
    slug: 'neural-canvas',
    title: 'Neural Canvas',
    subtitle: 'AI-Powered Creative Studio',
    description: 'A real-time generative art platform using diffusion models with live parameter manipulation.',
    longDescription: 'Neural Canvas redefines the boundary between human creativity and machine intelligence. Built on a custom WebGL pipeline with real-time diffusion model inference, it enables artists to sculpt AI-generated visuals through intuitive gesture controls. The platform processes over 50,000 generations daily.',
    tags: ['Next.js', 'WebGL', 'Python', 'PyTorch', 'WebSockets'],
    year: '2024',
    role: 'Lead Engineer',
    color: '#00f5ff',
    accentColor: 'rgba(0,245,255,0.1)',
    featured: true,
    metrics: [
      { label: 'Daily Generations', value: '50K+' },
      { label: 'Active Artists', value: '12K' },
      { label: 'Latency', value: '< 200ms' },
    ],
  },
  {
    slug: 'void-protocol',
    title: 'Void Protocol',
    subtitle: 'Decentralized Identity Layer',
    description: 'Zero-knowledge proof identity system enabling private authentication across Web3 applications.',
    longDescription: 'Void Protocol eliminates the tradeoff between privacy and usability in decentralized systems. Using ZK-SNARKs and a novel credential aggregation scheme, users authenticate across any dApp without exposing personal data. Audited by leading security firms with zero vulnerabilities found.',
    tags: ['Rust', 'Solidity', 'ZK-SNARKs', 'React', 'Node.js'],
    year: '2024',
    role: 'Architect & Lead Dev',
    color: '#7c3aed',
    accentColor: 'rgba(124,58,237,0.1)',
    featured: true,
    metrics: [
      { label: 'Transactions', value: '2M+' },
      { label: 'Gas Savings', value: '78%' },
      { label: 'Audit Score', value: '100%' },
    ],
  },
  {
    slug: 'phantom-os',
    title: 'Phantom OS',
    subtitle: 'Browser-Native Operating System',
    description: 'A fully-featured OS simulation running entirely in the browser with persistent state.',
    longDescription: 'Phantom OS pushes the browser to its absolute limits, implementing a complete operating system metaphor with windowing, file system, terminal, and app ecosystem — all within a single browser tab. Uses OPFS for persistence and WebWorkers for process isolation.',
    tags: ['TypeScript', 'WebAssembly', 'OPFS', 'React', 'Rust'],
    year: '2023',
    role: 'Solo Creator',
    color: '#0066ff',
    accentColor: 'rgba(0,102,255,0.1)',
    featured: true,
    metrics: [
      { label: 'GitHub Stars', value: '8.2K' },
      { label: 'Bundle Size', value: '< 500kb' },
      { label: 'Apps', value: '24' },
    ],
  },
  {
    slug: 'echo-sync',
    title: 'Echo Sync',
    subtitle: 'Real-Time Collaboration Engine',
    description: 'CRDTs-based collaborative editing engine supporting 10,000+ concurrent users per document.',
    longDescription: 'Echo Sync solves the hardest problems in distributed systems for collaborative editing. Built on a novel CRDT variant that handles rich text, nested structures, and binary data without merge conflicts. Powers several enterprise products serving millions of users.',
    tags: ['Go', 'CRDT', 'WebSockets', 'React', 'PostgreSQL'],
    year: '2023',
    role: 'Core Contributor',
    color: '#00d4ff',
    accentColor: 'rgba(0,212,255,0.1)',
    featured: false,
    metrics: [
      { label: 'Concurrent Users', value: '10K+' },
      { label: 'Sync Latency', value: '< 50ms' },
      { label: 'Uptime', value: '99.99%' },
    ],
  },
  {
    slug: 'spectra-ui',
    title: 'Spectra UI',
    subtitle: 'Design System & Component Library',
    description: 'Production-grade component library with 80+ components, dark mode, and full accessibility.',
    longDescription: 'Spectra UI emerged from the frustration with existing design systems that sacrifice flexibility for consistency. Every component is headless at its core, with a beautiful default theme, full WCAG 2.1 AA compliance, and TypeScript-first API. Used by 500+ teams in production.',
    tags: ['TypeScript', 'React', 'Radix UI', 'Storybook', 'Playwright'],
    year: '2023',
    role: 'Creator & Maintainer',
    color: '#f59e0b',
    accentColor: 'rgba(245,158,11,0.1)',
    featured: false,
  },
  {
    slug: 'dark-matter',
    title: 'Dark Matter',
    subtitle: 'Vector Database & Search Engine',
    description: 'High-performance vector similarity search engine with sub-millisecond query times at scale.',
    longDescription: 'Dark Matter implements a novel HNSW variant with adaptive quantization that achieves 10x better memory efficiency than existing solutions while maintaining 99.8% recall accuracy. Battle-tested at billion-vector scale.',
    tags: ['C++', 'Python', 'CUDA', 'FastAPI', 'Docker'],
    year: '2022',
    role: 'Performance Engineer',
    color: '#ec4899',
    accentColor: 'rgba(236,72,153,0.1)',
    featured: false,
  },
]
