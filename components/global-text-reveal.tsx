"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText as GSAPSplitText } from "gsap/SplitText"

gsap.registerPlugin(ScrollTrigger, GSAPSplitText)

const SELECTOR =
  "main h1, main h2, main h3, main h4, main h5, main h6, main p, main li, header nav a, header nav p, header nav span"

export function GlobalTextReveal() {
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window === "undefined") return

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduceMotion) return

    const elements = Array.from(document.querySelectorAll<HTMLElement>(SELECTOR)).filter((el) => {
      if (el.classList.contains("split-parent")) return false
      if (el.closest("[data-no-global-reveal='true']")) return false
      if (el.closest("[data-slot='accordion']")) return false
      if (el.closest("[data-slot='accordion-content']")) return false
      if (el.closest("footer")) return false
      if (el.querySelector("[data-countup='true']")) return false
      if (!el.textContent?.trim()) return false
      return true
    })

    const splitInstances: GSAPSplitText[] = []
    const triggers: ScrollTrigger[] = []

    elements.forEach((el) => {
      const splitType = "words"
      const split = new GSAPSplitText(el, {
        type: splitType,
        wordsClass: "split-word",
        charsClass: "split-char",
      })

      const targets = split.words
      if (!targets?.length) {
        split.revert()
        return
      }

      const tween = gsap.fromTo(
        targets,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.03,
          force3D: true,
          willChange: "transform, opacity",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            once: true,
            fastScrollEnd: true,
          },
        },
      )

      if (tween.scrollTrigger) triggers.push(tween.scrollTrigger)
      splitInstances.push(split)
    })

    return () => {
      triggers.forEach((trigger) => trigger.kill())
      splitInstances.forEach((split) => {
        try {
          split.revert()
        } catch {
          // no-op
        }
      })
    }
  }, [pathname])

  return null
}
