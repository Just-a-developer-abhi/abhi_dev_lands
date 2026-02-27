export interface Skill {
  name: string
  level: number
  category: string
  icon: string
  color: string
}

export interface SkillCategory {
  label: string
  skills: Skill[]
}

export const skillCategories: SkillCategory[] = [
  {
    label: 'Frontend',
    skills: [
      { name: 'React.js / Next.js', level: 95, category: 'Frontend', icon: '⚛', color: '#61dafb' },
      { name: 'TypeScript', level: 92, category: 'Frontend', icon: '𝙏𝙎', color: '#3178c6' },
      { name: 'JavaScript (ES6+)', level: 95, category: 'Frontend', icon: 'JS', color: '#f7df1e' },
      { name: 'Angular', level: 70, category: 'Frontend', icon: '🅰', color: '#dd0031' },
      { name: 'Redux / Zustand', level: 85, category: 'Frontend', icon: '◎', color: '#764abc' },
      { name: 'GSAP / Framer Motion', level: 90, category: 'Frontend', icon: '◈', color: '#88ce02' },
      { name: 'HTML5 / CSS3', level: 97, category: 'Frontend', icon: '◉', color: '#38bdf8' },
      { name: 'Tailwind / SCSS', level: 90, category: 'Frontend', icon: '▣', color: '#06b6d4' },
    ],
  },
  {
    label: 'Backend',
    skills: [
      { name: 'Node.js', level: 92, category: 'Backend', icon: '⬡', color: '#68a063' },
      { name: 'Express.js', level: 88, category: 'Backend', icon: '⟐', color: '#444444' },
      { name: 'Java', level: 90, category: 'Backend', icon: '☕', color: '#f89820' },
      { name: 'Spring Boot', level: 85, category: 'Backend', icon: '🌱', color: '#6db33f' },
      { name: 'REST API Design', level: 90, category: 'Backend', icon: '⇄', color: '#00f5ff' },
      { name: 'Prisma ORM', level: 88, category: 'Backend', icon: '◆', color: '#2d3748' },
      { name: 'PostgreSQL', level: 85, category: 'Backend', icon: '◫', color: '#336791' },
    ],
  },
  {
    label: 'Systems & Architecture',
    skills: [
      { name: 'Kafka', level: 90, category: 'Systems', icon: '⟳', color: '#231f20' },
      { name: 'Server-Sent Events (SSE)', level: 88, category: 'Systems', icon: '⇢', color: '#00d4ff' },
      { name: 'Microservices Architecture', level: 85, category: 'Systems', icon: '◧', color: '#7c3aed' },
      { name: 'Docker', level: 80, category: 'Systems', icon: '🐳', color: '#2496ed' },
      { name: 'CI/CD', level: 78, category: 'Systems', icon: '⚙', color: '#f59e0b' },
      { name: 'System Design Fundamentals', level: 85, category: 'Systems', icon: '⬢', color: '#00f5ff' },
    ],
  },
]