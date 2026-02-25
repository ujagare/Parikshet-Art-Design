"use client"

import { useEffect, useRef } from "react"

interface SilkProps {
  speed?: number
  scale?: number
  color?: string
  noiseIntensity?: number
  rotation?: number
}

function hexToRgb(hex: string) {
  const normalized = hex.replace("#", "")
  const safe = normalized.length === 3 ? normalized.split("").map((c) => c + c).join("") : normalized
  const value = Number.parseInt(safe, 16)
  return {
    r: (value >> 16) & 255,
    g: (value >> 8) & 255,
    b: value & 255,
  }
}

export function Silk({
  speed = 5,
  scale = 1,
  color = "#331400",
  noiseIntensity = 1.5,
  rotation = 0,
}: SilkProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const rgb = hexToRgb(color)
    let width = 0
    let height = 0
    let dpr = 1

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = Math.max(1, Math.floor(rect.width))
      height = Math.max(1, Math.floor(rect.height))
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    resize()
    window.addEventListener("resize", resize)

    const draw = (time: number) => {
      ctx.clearRect(0, 0, width, height)

      ctx.save()
      ctx.translate(width / 2, height / 2)
      ctx.rotate((rotation * Math.PI) / 180)
      ctx.translate(-width / 2, -height / 2)

      const lines = 42
      const lineGap = height / lines
      const ampBase = 22 * scale * noiseIntensity
      const t = (time / 1000) * speed

      for (let i = 0; i < lines; i++) {
        const yBase = i * lineGap
        const alpha = 0.04 + (i / lines) * 0.08
        ctx.beginPath()
        ctx.lineWidth = 1.2 + (i % 3) * 0.35
        ctx.strokeStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha.toFixed(3)})`

        for (let x = 0; x <= width; x += 6) {
          const wave1 = Math.sin(x * 0.008 * scale + t * 0.9 + i * 0.23) * ampBase
          const wave2 = Math.cos(x * 0.014 * scale - t * 0.65 + i * 0.35) * (ampBase * 0.5)
          const noise = Math.sin((x + i * 17) * 0.04 + t * 1.1) * (noiseIntensity * 2)
          const y = yBase + wave1 + wave2 + noise

          if (x === 0) ctx.moveTo(x, y)
          else ctx.lineTo(x, y)
        }

        ctx.stroke()
      }

      ctx.restore()
      rafRef.current = window.requestAnimationFrame(draw)
    }

    rafRef.current = window.requestAnimationFrame(draw)

    return () => {
      window.removeEventListener("resize", resize)
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current)
    }
  }, [color, noiseIntensity, rotation, scale, speed])

  return <canvas ref={canvasRef} className="h-full w-full block" aria-hidden />
}
