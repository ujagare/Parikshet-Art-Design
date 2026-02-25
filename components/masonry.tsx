"use client"

import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react"
import { gsap } from "gsap"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import styles from "./masonry.module.css"

type MasonryItem = {
  id: string
  img: string
  url: string
  height: number
}

type MasonryProps = {
  items: MasonryItem[]
  ease?: string
  duration?: number
  stagger?: number
  animateFrom?: "top" | "bottom" | "left" | "right" | "center" | "random"
  scaleOnHover?: boolean
  hoverScale?: number
  blurToFocus?: boolean
  colorShiftOnHover?: boolean
}

function useMedia(queries: string[], values: number[], defaultValue: number) {
  const getValue = () => {
    const idx = queries.findIndex((query) => window.matchMedia(query).matches)
    return values[idx] ?? defaultValue
  }

  const [value, setValue] = useState(defaultValue)

  useEffect(() => {
    setValue(getValue())
    const handler = () => setValue(getValue())
    const mqls = queries.map((q) => window.matchMedia(q))
    mqls.forEach((mql) => mql.addEventListener("change", handler))
    return () => mqls.forEach((mql) => mql.removeEventListener("change", handler))
  }, [queries, values, defaultValue])

  return value
}

function useMeasure<T extends HTMLElement>() {
  const ref = useRef<T | null>(null)
  const [size, setSize] = useState({ width: 0, height: 0 })

  useLayoutEffect(() => {
    if (!ref.current) return
    const ro = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect
      setSize({ width, height })
    })
    ro.observe(ref.current)
    return () => ro.disconnect()
  }, [])

  return [ref, size] as const
}

export default function Masonry({
  items,
  ease = "power3.out",
  duration = 0.6,
  stagger = 0.05,
  animateFrom = "bottom",
  scaleOnHover = true,
  hoverScale = 0.95,
  blurToFocus = true,
  colorShiftOnHover = false,
}: MasonryProps) {
  const columns = useMedia(
    ["(min-width:1500px)", "(min-width:1100px)", "(min-width:820px)", "(min-width:640px)", "(min-width:0px)"],
    [5, 4, 3, 2, 2],
    2,
  )

  const [containerRef, { width }] = useMeasure<HTMLDivElement>()
  const [imageMeta, setImageMeta] = useState<Record<string, { width: number; height: number }>>({})
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const hasMounted = useRef(false)

  useEffect(() => {
    setImageMeta({})
  }, [items])

  useEffect(() => {
    if (activeIndex === null) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveIndex(null)
      if (e.key === "ArrowRight") setActiveIndex((prev) => (prev === null ? 0 : (prev + 1) % items.length))
      if (e.key === "ArrowLeft") setActiveIndex((prev) => (prev === null ? 0 : (prev - 1 + items.length) % items.length))
    }

    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [activeIndex, items.length])

  const grid = useMemo(() => {
    if (!width) return []
    const colHeights = new Array(columns).fill(0)
    const columnWidth = width / columns

    return items.map((item) => {
      const col = colHeights.indexOf(Math.min(...colHeights))
      const x = columnWidth * col
      const meta = imageMeta[item.id]
      const ratio = meta ? meta.height / meta.width : item.height / 300
      const h = Math.max(120, columnWidth * ratio)
      const y = colHeights[col]
      colHeights[col] += h

      return { ...item, x, y, w: columnWidth, h }
    })
  }, [columns, items, width, imageMeta])

  const containerHeight = useMemo(() => {
    if (!grid.length) return 600
    return Math.max(...grid.map((item) => item.y + item.h)) + 8
  }, [grid])

  useLayoutEffect(() => {
    if (!grid.length) return

    const getInitialPosition = (item: (typeof grid)[number]) => {
      const containerRect = containerRef.current?.getBoundingClientRect()
      if (!containerRect) return { x: item.x, y: item.y + 100 }

      let direction = animateFrom
      if (animateFrom === "random") {
        const options = ["top", "bottom", "left", "right"] as const
        direction = options[Math.floor(Math.random() * options.length)]
      }

      switch (direction) {
        case "top":
          return { x: item.x, y: -200 }
        case "bottom":
          return { x: item.x, y: window.innerHeight + 200 }
        case "left":
          return { x: -200, y: item.y }
        case "right":
          return { x: window.innerWidth + 200, y: item.y }
        case "center":
          return { x: containerRect.width / 2 - item.w / 2, y: containerRect.height / 2 - item.h / 2 }
        default:
          return { x: item.x, y: item.y + 100 }
      }
    }

    grid.forEach((item, index) => {
      const selector = `[data-key="${item.id}"]`
      const targetState = { x: item.x, y: item.y, width: item.w, height: item.h }

      if (!hasMounted.current) {
        const initialPos = getInitialPosition(item)
        gsap.fromTo(
          selector,
          {
            opacity: 0,
            x: initialPos.x,
            y: initialPos.y,
            width: item.w,
            height: item.h,
            ...(blurToFocus ? { filter: "blur(10px)" } : {}),
          },
          {
            opacity: 1,
            ...targetState,
            ...(blurToFocus ? { filter: "blur(0px)" } : {}),
            duration: 0.8,
            ease: "power3.out",
            delay: index * stagger,
          },
        )
      } else {
        gsap.to(selector, { ...targetState, duration, ease, overwrite: "auto" })
      }
    })

    hasMounted.current = true
  }, [grid, animateFrom, blurToFocus, duration, ease, stagger, containerRef])

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>, item: MasonryItem) => {
    const selector = `[data-key="${item.id}"]`
    if (scaleOnHover) {
      gsap.to(selector, { scale: hoverScale, duration: 0.3, ease: "power2.out" })
    }
    if (colorShiftOnHover) {
      const overlay = e.currentTarget.querySelector(".color-overlay")
      if (overlay) gsap.to(overlay, { opacity: 0.3, duration: 0.3 })
    }
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>, item: MasonryItem) => {
    const selector = `[data-key="${item.id}"]`
    if (scaleOnHover) {
      gsap.to(selector, { scale: 1, duration: 0.3, ease: "power2.out" })
    }
    if (colorShiftOnHover) {
      const overlay = e.currentTarget.querySelector(".color-overlay")
      if (overlay) gsap.to(overlay, { opacity: 0, duration: 0.3 })
    }
  }

  const activeItem = activeIndex !== null ? items[activeIndex] : null
  const goPrev = () => setActiveIndex((prev) => (prev === null ? 0 : (prev - 1 + items.length) % items.length))
  const goNext = () => setActiveIndex((prev) => (prev === null ? 0 : (prev + 1) % items.length))

  return (
    <>
      <div ref={containerRef} className={styles.list} style={{ height: `${containerHeight}px` }}>
        {grid.map((item, index) => (
          <div
            key={item.id}
            data-key={item.id}
            className={styles.itemWrapper}
            onClick={() => setActiveIndex(index)}
            onMouseEnter={(e) => handleMouseEnter(e, item)}
            onMouseLeave={(e) => handleMouseLeave(e, item)}
          >
            <div className={styles.itemImg}>
              <img
                src={item.img}
                alt=""
                loading="lazy"
                decoding="async"
                className={styles.itemImageEl}
                onLoad={(e) => {
                  const img = e.currentTarget
                  const width = Math.max(1, img.naturalWidth || 1)
                  const height = Math.max(1, img.naturalHeight || 1)
                  setImageMeta((prev) => {
                    const prevMeta = prev[item.id]
                    if (prevMeta && prevMeta.width === width && prevMeta.height === height) return prev
                    return { ...prev, [item.id]: { width, height } }
                  })
                }}
              />
              {colorShiftOnHover && (
                <div
                  className="color-overlay"
                  style={{
                    position: "absolute",
                    inset: 0,
                    opacity: 0,
                    pointerEvents: "none",
                    background: "linear-gradient(45deg, rgba(255,0,150,0.4), rgba(0,150,255,0.4))",
                  }}
                />
              )}
            </div>
          </div>
        ))}
      </div>

      {activeItem && (
        <div className="fixed inset-0 z-[70] bg-black/90 flex items-center justify-center p-4">
          <button
            onClick={() => setActiveIndex(null)}
            className="absolute top-4 right-4 inline-flex h-10 w-10 items-center justify-center text-white/90 hover:text-white transition-colors"
            aria-label="Close gallery"
          >
            <X className="h-7 w-7" />
          </button>

          <button
            onClick={goPrev}
            className="absolute left-3 md:left-6 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white hover:bg-white/25 transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-7 w-7" />
          </button>

          <img src={activeItem.img} alt="" className="max-h-[88vh] max-w-[90vw] object-contain" decoding="async" />

          <button
            onClick={goNext}
            className="absolute right-3 md:right-6 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white hover:bg-white/25 transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="h-7 w-7" />
          </button>
        </div>
      )}
    </>
  )
}
