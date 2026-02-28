"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import SplitText from "@/components/SplitText"

export function HeroSection() {
  const [isDesktop, setIsDesktop] = useState(false)
  const [reduceMotion, setReduceMotion] = useState(false)
  const [supportsWebm, setSupportsWebm] = useState(true)
  const [leftVideoFailed, setLeftVideoFailed] = useState(false)
  const { scrollYProgress } = useScroll()
  const heroImageScaleRaw = useTransform(scrollYProgress, [0, 0.45], [1.02, 1.2])
  const heroImageYRaw = useTransform(scrollYProgress, [0, 0.45], ["0%", "18%"])
  const heroImageRotateRaw = useTransform(scrollYProgress, [0, 0.45], [0, -1.2])
  const heroImageOpacityRaw = useTransform(scrollYProgress, [0, 0.45], [1, 0.78])
  const heroImageScale = useSpring(heroImageScaleRaw, { stiffness: 85, damping: 20, mass: 0.25 })
  const heroImageY = useSpring(heroImageYRaw, { stiffness: 85, damping: 20, mass: 0.25 })
  const heroImageRotate = useSpring(heroImageRotateRaw, { stiffness: 85, damping: 20, mass: 0.25 })
  const heroImageOpacity = useSpring(heroImageOpacityRaw, { stiffness: 85, damping: 20, mass: 0.25 })
  const textY = useTransform(scrollYProgress, [0, 0.35], ["0%", "24%"])
  const textOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0.15])
  const leftPanelY = useTransform(scrollYProgress, [0, 0.35], ["0%", "18%"])
  const leftPanelOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0.25])

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 1024px)")
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    const testVideo = document.createElement("video")
    const webmSupport =
      testVideo.canPlayType('video/webm; codecs="vp8, vorbis"') || testVideo.canPlayType("video/webm")

    const handleDesktop = () => setIsDesktop(desktopQuery.matches)
    const handleMotion = () => setReduceMotion(motionQuery.matches)

    handleDesktop()
    handleMotion()
    setSupportsWebm(Boolean(webmSupport))

    desktopQuery.addEventListener("change", handleDesktop)
    motionQuery.addEventListener("change", handleMotion)

    return () => {
      desktopQuery.removeEventListener("change", handleDesktop)
      motionQuery.removeEventListener("change", handleMotion)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex">
      {/* Left content - 20% */}
      <div className="hidden lg:flex relative items-center justify-center w-[22%] px-8 overflow-hidden">
        {isDesktop && supportsWebm && !leftVideoFailed && (
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster="/about-hero.jpg"
            onError={() => setLeftVideoFailed(true)}
            aria-hidden
          >
            <source src="/silk-bg.webm" type="video/webm" />
          </video>
        )}
        {isDesktop && (!supportsWebm || leftVideoFailed) && (
          <Image src="/about-hero.jpg" alt="" fill sizes="22vw" className="object-cover" aria-hidden />
        )}
        <div className="absolute inset-0 bg-[#2B1608]/70" />
        <motion.div
          style={{ y: leftPanelY, opacity: leftPanelOpacity }}
          className="relative z-10 text-background max-w-[240px]"
        >
          <p className="text-[11px] tracking-[0.28em] uppercase text-white mb-5">Parikshet ART Studio</p>
          <h2 className="font-serif text-3xl leading-tight mb-4 text-white">Canvas. Color. Emotion.</h2>
          <p className="text-sm text-background/75 leading-relaxed mb-8">
            Original works inspired by devotion, culture, and timeless Indian visual storytelling.
          </p>
          <p className="text-xs tracking-[0.22em] uppercase text-background/85 mb-6">Art - Designs - Productions</p>
          <div className="space-y-2 text-xs tracking-[0.2em] uppercase text-background/70">
            <p>Graphic Design</p>
            <p>Sculpture and Mural Art</p>
            <p>Paintings</p>
            <p>Event Planning</p>
            <p>Music</p>
          </div>
        </motion.div>
      </div>

      {/* Right content - 80% */}
      <div className="flex-1 relative">
        {/* Background image - converted to Next.js Image with priority for LCP */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            initial={{ scale: 1.02 }}
            style={{ scale: heroImageScale, y: heroImageY, rotate: heroImageRotate, opacity: heroImageOpacity }}
            className="absolute inset-0"
          >
            <Image
              src="/datta-maharaj-mobile.jpg"
              alt="Datta Maharaj"
              fill
              priority
              sizes="100vw"
              className="object-cover md:hidden"
            />
            <Image
              src="/datta-maharaj.jpg"
              alt="Datta Maharaj"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 78vw"
              className="object-cover hidden md:block"
            />
          </motion.div>
          <div className="absolute inset-0 bg-foreground/20" />
        </div>

        {/* Content overlay */}
        <div className="relative z-10 h-full flex flex-col justify-end p-8 lg:p-16 pb-24 lg:pb-32">
          <motion.div
            style={{ y: textY, opacity: textOpacity }}
            className="max-w-2xl"
          >
            <SplitText
              text="The Art of Quiet Luxury"
              className="font-serif text-4xl md:text-5xl lg:text-7xl text-background leading-[1.1] mb-6 text-balance"
              delay={35}
              duration={0.9}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 42 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.08}
              rootMargin="-60px"
              textAlign="left"
              tag="h1"
              onLetterAnimationComplete={() => {}}
            />
            <SplitText
              text="Timeless pieces crafted with intention. Where heritage meets modern refinement."
              className="text-background/80 text-base lg:text-lg tracking-wide mb-10 max-w-md leading-relaxed"
              delay={16}
              duration={0.75}
              ease="power2.out"
              splitType="words"
              from={{ opacity: 0, y: 22 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.08}
              rootMargin="-50px"
              textAlign="left"
              tag="p"
              onLetterAnimationComplete={() => {}}
            />
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link href="/services">
                <Button
                  size="lg"
                  className="bg-background text-foreground hover:bg-background/90 px-10 py-6 text-sm tracking-[0.2em] uppercase group"
                >
                  Discover Collection
                  <ArrowRight className="ml-3 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        {!reduceMotion && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="w-[1px] h-12 bg-background/50"
            />
          </motion.div>
        )}
      </div>
    </section>
  )
}
