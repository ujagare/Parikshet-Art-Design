"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Instagram, Facebook, Linkedin } from "lucide-react"
import logoImage from "@/images/Logo_Pari.png"

export function PremiumFooter() {
  const footerLinks = {
    studio: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Contact", href: "/contact" },
      { label: "Our Journey", href: "/heritage" },
    ],
    offerings: [
      { label: "Graphic Design", href: "/services" },
      { label: "Sculpture and Mural Art", href: "/services" },
      { label: "Paintings", href: "/services" },
      { label: "Event Planning", href: "/services" },
      { label: "Music", href: "/services" },
    ],
    support: [
      { label: "Contact Us", href: "/contact" },
      { label: "Commission Inquiry", href: "/contact" },
      { label: "Collaboration Request", href: "/contact" },
      { label: "Event Booking", href: "/contact" },
    ],
  }

  return (
    <footer className="relative overflow-hidden text-background">
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
      <div className="absolute inset-0 bg-[#2B1608]/80" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <Link href="/" aria-label="Parikshet ART Studio Home" className="inline-block mb-4">
              <Image src={logoImage} alt="Parikshet ART Studio Logo" className="h-12 w-auto" />
            </Link>
            <h3 className="font-serif text-xl mb-4">Parikshet ART Studio</h3>
            <p className="text-background/60 text-sm mb-6 leading-relaxed">
              Art - Designs - Productions. Crafting meaningful visual experiences through creativity, culture, and
              artistic expression.
            </p>
            <p className="text-sm text-background/70">Email: parikshetstudio@gmail.com</p>
            <p className="text-sm text-background/70">Phone: +91 7498 724 242</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-xs tracking-[0.2em] uppercase mb-6 text-background/60">Studio</h4>
            <ul className="space-y-3">
              {footerLinks.studio.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-background/80 hover:text-background transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-xs tracking-[0.2em] uppercase mb-6 text-background/60">Offerings</h4>
            <ul className="space-y-3">
              {footerLinks.offerings.map((link) => (
                <li key={`${link.label}-${link.href}`}>
                  <Link href={link.href} className="text-sm text-background/80 hover:text-background transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-xs tracking-[0.2em] uppercase mb-6 text-background/60">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={`${link.label}-${link.href}`}>
                  <Link href={link.href} className="text-sm text-background/80 hover:text-background transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="relative mt-8">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent border-0 border-b border-background/30 py-3 text-sm placeholder:text-background/40 focus:outline-none focus:border-background transition-colors"
              />
              <button className="absolute right-0 top-1/2 -translate-y-1/2 text-xs tracking-[0.15em] uppercase hover:opacity-60 transition-opacity">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>

        <div className="pt-8 border-t border-background/20 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <a href="https://instagram.com" className="hover:opacity-60 transition-opacity" aria-label="Instagram">
              <Instagram className="h-4 w-4 stroke-[1.5]" />
            </a>
            <a href="https://facebook.com" className="hover:opacity-60 transition-opacity" aria-label="Facebook">
              <Facebook className="h-4 w-4 stroke-[1.5]" />
            </a>
            <a href="https://linkedin.com" className="hover:opacity-60 transition-opacity" aria-label="LinkedIn">
              <Linkedin className="h-4 w-4 stroke-[1.5]" />
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-background/50">
            <Link href="#" className="hover:text-background/80 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-background/80 transition-colors">
              Terms of Service
            </Link>
            <span>Copyright 2026 Parikshet ART Studio. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
