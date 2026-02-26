import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider"
import { GlobalTextReveal } from "@/components/global-text-reveal"
import { Toaster as RadixToaster } from "@/components/ui/toaster"
import { Toaster as SonnerToaster } from "@/components/ui/sonner"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "Parikshet ART Studio",
  description: "Parikshet ART Studio - Multi-disciplinary art, design, murals, music, and creative experiences.",
  generator: "v0.app",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body suppressHydrationWarning className={`font-sans antialiased`}>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
        <GlobalTextReveal />
        <RadixToaster />
        <SonnerToaster position="top-right" richColors />
        <Analytics />
      </body>
    </html>
  )
}
