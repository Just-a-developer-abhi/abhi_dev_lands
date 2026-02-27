import { notFound } from 'next/navigation'
import { projects } from '@/data/projects'
import ProjectDetail from '@/components/ProjectDetail'

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug)
  if (!project) return { title: 'Not Found' }
  return {
    title: `${project.title} — Abhishek Singh Rajawat`,
    description: project.description,
  }
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug)
  if (!project) notFound()

  return <ProjectDetail project={project} />
}
