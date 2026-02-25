"use client"

import { useId } from "react"

type SpinningTextProps = {
  children: string
  className?: string
  duration?: number
  radius?: number
  reverse?: boolean
}

export function SpinningText({ children, className = "", duration = 8, radius = 6, reverse = false }: SpinningTextProps) {
  const pathId = useId()
  const circleSize = radius * 2
  const direction = reverse ? "reverse" : "normal"

  return (
    <div
      className={className}
      style={{
        width: `${circleSize}rem`,
        height: `${circleSize}rem`,
        animation: `spin ${duration}s linear infinite`,
        animationDirection: direction,
      }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 100 100" className="h-full w-full overflow-visible">
        <defs>
          <path id={pathId} d="M50,50 m-36,0 a36,36 0 1,1 72,0 a36,36 0 1,1 -72,0" />
        </defs>
        <text fill="currentColor" fontSize="9.2" letterSpacing="2.2">
          <textPath href={`#${pathId}`} startOffset="0%">
            {children}
          </textPath>
        </text>
      </svg>
    </div>
  )
}

