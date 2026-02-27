'use client'

import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

const CHARS = '!<>-_\\/[]{}—=+*^?#@$%&'

interface GlitchTextProps {
  text: string
  className?: string
  as?: keyof JSX.IntrinsicElements
  scramble?: boolean
}

export default function GlitchText({ text, className, as: Tag = 'span', scramble = true }: GlitchTextProps) {
  const [displayed, setDisplayed] = useState(text)
  const iterationRef = useRef(0)
  const frameRef = useRef<NodeJS.Timeout>()

  const scrambleText = () => {
    let iteration = 0
    clearInterval(frameRef.current)

    frameRef.current = setInterval(() => {
      setDisplayed(
        text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' '
            if (index < iteration) return text[index]
            return CHARS[Math.floor(Math.random() * CHARS.length)]
          })
          .join('')
      )

      if (iteration >= text.length) {
        clearInterval(frameRef.current)
      }
      iteration += 1 / 3
    }, 30)
  }

  useEffect(() => {
    if (scramble) {
      const timeout = setTimeout(() => scrambleText(), 300)
      return () => clearTimeout(timeout)
    }
  }, [text])

  return (
    // @ts-ignore dynamic tag
    <Tag
      className={cn('font-mono', className)}
      onMouseEnter={scrambleText}
    >
      {displayed}
    </Tag>
  )
}
