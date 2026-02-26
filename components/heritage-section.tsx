"use client"

import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { CountUp } from "@/components/ui/count-up"

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
      </motion.div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="border border-[#F7EEDB]/35 bg-[linear-gradient(135deg,rgba(18,18,18,0.42)_0%,rgba(18,18,18,0.6)_100%)] backdrop-blur-sm px-6 py-10 md:px-10 md:py-12 lg:px-14 lg:py-14"
          >
            <div className="text-center">
              <span className="text-xs tracking-[0.4em] uppercase text-[#F7EEDB]/70 mb-6 block">Our Journey</span>
              <h2 className="font-serif text-4xl lg:text-6xl text-[#F7EEDB] mb-7 leading-[1.12] text-balance">
                Created with Passion,
                <br />
                Rooted in Art
              </h2>
              <p className="text-[#F7EEDB]/85 text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto mb-12">
                Through paintings, murals, sculptures, music, and design, Parikshet ART Studio brings stories to
                life. Every project is shaped by cultural depth, spiritual expression, and contemporary artistic
                vision.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-5">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="border border-[#F7EEDB]/35 bg-black/25 px-5 py-6 text-center"
              >
                <span className="font-serif text-4xl lg:text-5xl text-[#F7EEDB] block mb-2">
                  <CountUp end={2018} />
                </span>
                <span className="text-xs tracking-[0.2em] uppercase text-[#F7EEDB]/70">Established</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="border border-[#F7EEDB]/35 bg-black/25 px-5 py-6 text-center"
              >
                <span className="font-serif text-4xl lg:text-5xl text-[#F7EEDB] block mb-2">
                  <CountUp end={500} suffix="+" />
                </span>
                <span className="text-xs tracking-[0.2em] uppercase text-[#F7EEDB]/70">Artworks</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="border border-[#F7EEDB]/35 bg-black/25 px-5 py-6 text-center"
              >
                <span className="font-serif text-4xl lg:text-5xl text-[#F7EEDB] block mb-2">
                  <CountUp end={7} suffix="+" />
                </span>
                <span className="text-xs tracking-[0.2em] uppercase text-[#F7EEDB]/70">Art Disciplines</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
