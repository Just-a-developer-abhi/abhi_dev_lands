import type { Metadata } from 'next'
import './globals.css'
import CustomCursor from '@/components/ui/CustomCursor'

export const metadata: Metadata = {
  title: 'Abhishek Singh Rajawat — Portfolio',
  description: 'Full-stack developer crafting cinematic digital experiences at the intersection of design and code.',
  keywords: ['developer', 'portfolio', 'fullstack', 'design', 'creative'],
  openGraph: {
    title: 'Abhishek Singh Rajawat — Portfolio',
    description: 'Full-stack developer crafting cinematic digital experiences.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="noise bg-void antialiased">
        <CustomCursor />
        {children}
      </body>
    </html>
  )
}
