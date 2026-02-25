"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ProductCard } from "./product-card"

const products = [
  {
    href: "/services/sculpture-and-mural-art",
    name: "Sculpture and Mural Art",
    price: 1200,
    image: "/sculpture-mural-hero.jpg",
    hoverImage: "/sculpture-mural-hero.jpg",
    category: "Public Art",
  },
  {
    href: "/services/paintings",
    name: "Paintings",
    price: 800,
    image: "/painting-hero.jpg",
    hoverImage: "/painting-hero.jpg",
    category: "Fine Art",
  },
  {
    href: "/services/event-planning",
    name: "Event Planning",
    price: 1500,
    image: "/event-planning-hero.jpg",
    hoverImage: "/event-planning-hero.jpg",
    category: "Experience",
  },
  {
    href: "/services/music",
    name: "Music",
    price: 600,
    image: "/music-hero.jpg",
    hoverImage: "/music-hero.jpg",
    category: "Performance Art",
  },
  {
    href: "/services/pune-mertro",
    name: "pune Mertro",
    price: 700,
    image: "/metro-work.jpg",
    hoverImage: "/metro-work.jpg",
    category: "Featured Project",
  },
  {
    href: "/services/graphic-design",
    name: "Graphic Design",
    price: 500,
    image: "/0e5b410b-e633-4103-b79a-aac43733b4e5.jpg",
    hoverImage: "/0e5b410b-e633-4103-b79a-aac43733b4e5.jpg",
    category: "Creative Service",
  },
]

const artServices = ["Graphic Design", "Sculpture and Mural Art", "Paintings", "Event Planning", "Music", "pune Mertro"]

type CollectionGridProps = {
  showCta?: boolean
}

export function CollectionGrid({ showCta = true }: CollectionGridProps) {
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-24"
        >
          <h2 className="font-serif text-3xl lg:text-5xl mb-4 text-[#8A7040]">Featured Artworks</h2>
          <p className="text-muted-foreground tracking-wide max-w-md mx-auto">
            Every artwork reflects emotion, devotion, and handcrafted artistic expression
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-14 lg:mb-16"
        >
          {artServices.map((item) => (
            <span
              key={item}
              className="border border-[#2B1608]/60 px-4 py-2 text-[11px] sm:text-xs tracking-[0.15em] uppercase text-[#8A7040]/80"
            >
              {item}
            </span>
          ))}
        </motion.div>

        {/* Aligned grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {products.map((product, index) => (
            <div key={product.name}>
              <ProductCard {...product} index={index} />
            </div>
          ))}
        </div>

        {showCta && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-16 lg:mt-24"
          >
          <Link
            href="/services"
            className="inline-flex items-center justify-center border border-[#8A7040] bg-[#8A7040] text-background px-8 py-4 text-sm tracking-[0.2em] uppercase hover:bg-transparent hover:text-[#8A7040] transition-colors duration-300"
          >
            View Full Collection
          </Link>
          </motion.div>
        )}
      </div>
    </section>
  )
}


