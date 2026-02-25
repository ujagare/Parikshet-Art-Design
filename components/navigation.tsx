"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import logoImage from "@/images/Logo_Pari.png"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/services", label: "Services" },
  ]

  const navItemColor = isScrolled ? "text-foreground" : "text-white"
  const navItemHoverColor = isScrolled ? "text-foreground/60 hover:text-foreground" : "text-white/70 hover:text-white"
  const iconColor = isScrolled ? "text-foreground" : "text-white"

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "bg-[#FCF5E2] backdrop-blur-md border-b border-border" : "bg-transparent"
        }`}
      >
        <nav className="w-full px-3 sm:px-5 lg:px-8">
          <div className="flex h-16 lg:h-20 items-center justify-between">
            <Link href="/" aria-label="Parikshet Art Home" className="block">
              <Image src={logoImage} alt="Parikshet Art Logo" priority className="h-10 w-auto lg:h-12" />
            </Link>

            <div className="flex items-center">
              {/* Desktop navigation (right side) */}
              <div className="hidden lg:flex items-center gap-10">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-sm tracking-[0.2em] uppercase transition-colors duration-500 ${
                      pathname === link.href ? navItemColor : navItemHoverColor
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="flex items-center ml-4 lg:ml-8">
                <a
                  href="https://wa.me/917498724242"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                  className="text-[#2B1608] hover:opacity-70 transition-opacity duration-300"
                >
                  <svg viewBox="0 0 24 24" className="h-8 w-8 fill-current" aria-hidden="true">
                    <path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.47 1.34 4.98L2 22l5.2-1.37a9.95 9.95 0 0 0 4.84 1.24H12c5.5 0 9.96-4.46 9.96-9.96S17.5 2 12 2h.04zm0 18.2h-.03a8.2 8.2 0 0 1-4.17-1.13l-.3-.18-3.08.81.82-3.01-.2-.31a8.2 8.2 0 1 1 6.96 3.82zm4.5-6.15c-.24-.12-1.43-.7-1.65-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.44-1.34-1.68-.14-.24-.02-.37.1-.5.1-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.48-.4-.42-.54-.43h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.68 2.57 4.08 3.6.57.24 1.01.38 1.36.48.57.18 1.08.15 1.48.09.45-.07 1.43-.58 1.63-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28z" />
                  </svg>
                </a>
              </div>

              {/* Mobile menu button (right side) */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`lg:hidden p-2 -mr-2 transition-colors duration-500 ${iconColor}`}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="h-5 w-5 stroke-[1.5]" /> : <Menu className="h-5 w-5 stroke-[1.5]" />}
              </button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-foreground/20 z-40 lg:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
            {/* Menu panel */}
            <motion.div
              initial={{ opacity: 0, x: "-100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "-100%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed inset-y-0 left-0 w-[280px] z-50 bg-background border-r border-border lg:hidden"
            >
              <div className="flex items-center justify-between h-16 px-6 border-b border-border">
                <span className="font-serif text-lg tracking-[0.2em] uppercase">Menu</span>
                <button onClick={() => setIsMenuOpen(false)} className="p-2 -mr-2" aria-label="Close menu">
                  <X className="h-5 w-5 stroke-[1.5]" />
                </button>
              </div>
              <nav className="px-6 py-8 flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-lg tracking-[0.15em] uppercase transition-colors ${
                      pathname === link.href ? "text-foreground" : "text-foreground/60 hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
