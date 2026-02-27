export interface Experience {
  id: string
  year: string
  role: string
  company: string
  location: string
  type: string
  description: string
  highlights: string[]
  color: string
  logo: string
}

export const experiences: Experience[] = [
  {
    id: 'exp-1',
    year: 'Feb 2021 – Jun 2023',
    role: 'Associate Software Engineer',
    company: 'Accenture',
    location: 'Pune, India',
    type: 'Full-time',
    description:
      'Worked on enterprise-scale billing and financial processing systems. Focused on backend services, API integrations, and performance optimization.',
    highlights: [
      'Developed and enhanced billing microservices using Java & Spring Boot',
      'Optimized SQL queries improving processing performance by 30%',
      'Built reusable internal utilities reducing repetitive development effort',
    ],
    color: '#00f5ff',
    logo: '◆',
  },
  {
    id: 'exp-2',
    year: 'Jul 2023 – Sept 2024',
    role: 'Software Engineer',
    company: 'IDrive',
    location: 'Bangalore, India',
    type: 'Full-time',
    description:
      'Contributed to cloud-based backup and storage solutions. Worked across full-stack features, focusing on scalability and reliability.',
    highlights: [
      'Built scalable REST APIs using Node.js & Express',
      'Improved cloud data synchronization efficiency',
      'Implemented performance monitoring and logging improvements',
    ],
    color: '#7c3aed',
    logo: '⬢',
  },
  {
    id: 'exp-3',
    year: 'Sept 2024 – Present',
    role: 'Software Engineer II',
    company: 'HashedIn by Deloitte',
    location: 'Bangalore, India',
    type: 'Full-time',
    description:
      'Building large-scale digital platforms including IOC (MICO Games 2026) systems and enterprise health insurance products.',
    highlights: [
      'Developing high-performance web applications using React & TypeScript',
      'Worked on IOC (Olympics) MICO 2026 digital platform modules',
      'Designed modular architecture improving maintainability & deployment speed',
      'Currently contributing to enterprise-grade health insurance platform',
    ],
    color: '#00d4ff',
    logo: '◉',
  },
]