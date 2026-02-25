"use client"

import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export function HeritageSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"])

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Parallax background - converted to Next.js Image with lazy loading */}
      <motion.div style={{ y }} className="absolute inset-0 -top-20 -bottom-20">
        <Image
          src="/heritage-created-with-passion.jpg"
          alt="Parikshet ART Studio heritage background"
          fill
          sizes="100vw"
          className="object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[#2B1608]/75" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs tracking-[0.4em] uppercase text-background/70 mb-6 block">Our Journey</span>
            <h2 className="font-serif text-4xl lg:text-6xl text-background mb-8 leading-[1.15] text-balance">
              Created with Passion,
              <br />
              Rooted in Art
            </h2>
            <p className="text-background/80 text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto mb-12">
              Through paintings, murals, sculptures, music, and design, Parikshet ART Studio brings stories to life.
              Every project is shaped by cultural depth, spiritual expression, and contemporary artistic vision.
            </p>

            <div className="flex flex-wrap justify-center gap-12 lg:gap-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="font-serif text-4xl lg:text-5xl text-background block mb-2">2018</span>
                <span className="text-xs tracking-[0.2em] uppercase text-background/60">Established</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <span className="font-serif text-4xl lg:text-5xl text-background block mb-2">500+</span>
                <span className="text-xs tracking-[0.2em] uppercase text-background/60">Artworks</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <span className="font-serif text-4xl lg:text-5xl text-background block mb-2">7+</span>
                <span className="text-xs tracking-[0.2em] uppercase text-background/60">Art Disciplines</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
