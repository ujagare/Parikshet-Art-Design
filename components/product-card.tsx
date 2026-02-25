"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"

interface ProductCardProps {
  id?: string
  href?: string
  name: string
  price: number
  image: string
  hoverImage: string
  category: string
  index: number
}

export function ProductCard({ id, href, name, price, image, hoverImage, category, index }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const targetHref = href ?? `/product/${id}`

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
    >
      <Link
        href={targetHref}
        className="group block"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="mb-4 bg-[#2B1608] p-3 border-4 border-[#2B1608] shadow-[0_8px_18px_rgba(43,22,8,0.22)]">
          <div className="relative aspect-[3/4] overflow-hidden bg-[#FCF5E2] border border-[#2B1608]/35">
            {/* Primary image */}
            <Image
              src={image || "/placeholder.svg"}
              alt={name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              loading="lazy"
              className={`object-cover transition-opacity duration-700 ease-in-out ${
                isHovered ? "opacity-0" : "opacity-100"
              }`}
            />
            {/* Secondary hover image */}
            <Image
              src={hoverImage || "/placeholder.svg"}
              alt={`${name} alternate view`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              loading="lazy"
              className={`object-cover transition-opacity duration-700 ease-in-out ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
            />
            {/* Hover shadow overlay */}
            <motion.div
              initial={false}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.1)]"
            />
          </div>
        </div>

        <div className="space-y-1">
          <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground">{category}</p>
          <h3 className="font-serif text-lg">{name}</h3>
        </div>
      </Link>
    </motion.div>
  )
}
