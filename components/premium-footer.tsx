"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Instagram, Facebook } from "lucide-react"
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
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <Link href="/" aria-label="Parikshet ART Studio Home" className="inline-block mb-4">
              <Image src={logoImage} alt="Parikshet ART Studio Logo" loading="lazy" className="h-12 w-auto" />
            </Link>
            <h3 className="font-serif text-xl mb-4">Parikshet ART Studio</h3>
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
          </motion.div>
        </div>

        <div className="pt-6 border-t border-background/20 flex flex-col md:flex-row justify-between items-center gap-5">
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/parikshet.phand?igsh=OGpsdWRrdmhnZjA3"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="inline-flex h-10 w-10 items-center justify-center border border-background/45 text-background hover:bg-background hover:text-[#2B1608] transition-colors"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://www.facebook.com/share/16PAtjqvax/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="inline-flex h-10 w-10 items-center justify-center border border-background/45 text-background hover:bg-background hover:text-[#2B1608] transition-colors"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href="https://wa.me/917498724242"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="inline-flex h-10 w-10 items-center justify-center border border-background/45 text-background hover:bg-background hover:text-[#2B1608] transition-colors"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                <path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.47 1.34 4.98L2 22l5.2-1.37a9.95 9.95 0 0 0 4.84 1.24H12c5.5 0 9.96-4.46 9.96-9.96S17.5 2 12 2h.04zm0 18.2h-.03a8.2 8.2 0 0 1-4.17-1.13l-.3-.18-3.08.81.82-3.01-.2-.31a8.2 8.2 0 1 1 6.96 3.82zm4.5-6.15c-.24-.12-1.43-.7-1.65-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.44-1.34-1.68-.14-.24-.02-.37.1-.5.1-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.48-.4-.42-.54-.43h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.68 2.57 4.08 3.6.57.24 1.01.38 1.36.48.57.18 1.08.15 1.48.09.45-.07 1.43-.58 1.63-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28z" />
              </svg>
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-background/50">
            <Link href="#" className="hover:text-background/80 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-background/80 transition-colors">
              Terms of Service
            </Link>
            <a
              href="https://codesunny.in"
              target="_blank"
              rel="noreferrer"
              className="hover:text-background/80 transition-colors"
            >
              Design &amp; Developed by codesunny.in
            </a>
            <span>Copyright 2026 Parikshet ART Studio. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

