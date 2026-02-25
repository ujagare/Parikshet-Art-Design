"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex">
      {/* Left content - 20% */}
      <div className="hidden lg:flex relative items-center justify-center w-[22%] px-8 overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          aria-hidden
        >
          <source src="/silk-bg.webm" type="video/webm" />
        </video>
        <div className="absolute inset-0 bg-[#2B1608]/70" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
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
            initial={{ scale: 1.05 }}
            animate={{ scale: 1.15 }}
            transition={{ duration: 10, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
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
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl text-background leading-[1.1] mb-6 text-balance">
              The Art of
              <br />
              Quiet Luxury
            </h1>
            <p className="text-background/80 text-base lg:text-lg tracking-wide mb-10 max-w-md leading-relaxed">
              Timeless pieces crafted with intention. Where heritage meets modern refinement.
            </p>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link href="/shop">
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
      </div>
    </section>
  )
}
