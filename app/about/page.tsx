import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { PremiumFooter } from "@/components/premium-footer"
import { CountUp } from "@/components/ui/count-up"
import { SpinningText } from "@/components/ui/spinning-text"

const values = [
  {
    title: "Creative Depth",
    text: "Every project is shaped through emotion, symbolism, and visual storytelling.",
  },
  {
    title: "Multi-Disciplinary Vision",
    text: "From painting to event design, each discipline informs and elevates the next.",
  },
  {
    title: "Cultural Resonance",
    text: "Traditional roots and contemporary expression come together in every body of work.",
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FCF5E2]">
      <Navigation />

      <section className="relative min-h-[78vh] flex items-end overflow-hidden">
        <Image
          src="/about-hero.jpg"
          alt="Parikshet ART Studio hero"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(43,22,8,0.85),rgba(43,22,8,0.25))]" />
        <div className="relative z-10 w-full px-6 lg:px-8 pb-12 md:pb-16">
          <div className="max-w-6xl mx-auto">
            <p className="text-xs tracking-[0.35em] uppercase text-background/75 mb-4">About The Artist</p>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-background max-w-4xl">
              parishet Phand
            </h1>
            <p className="mt-5 max-w-3xl text-background/85 text-base md:text-lg leading-relaxed">
              Multi-disciplinary artist, designer, and entrepreneur creating meaningful work across painting,
              sculpture, mural art, design, music, and event experiences.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 px-6 lg:px-8 bg-[#F7EEDB] border-y border-[#2B1608]/15">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-16 items-center">
          <div>
            <p className="font-serif text-5xl md:text-7xl text-[#8A7040] mb-8 md:mb-10">HELLO!</p>
            <p className="font-serif text-3xl md:text-5xl leading-[1.18] text-[#8A7040] max-w-3xl">
              I&apos;M PARISHET PHAND, A MULTI-DISCIPLINARY ARTIST, DESIGNER, AND ENTREPRENEUR BASED IN PUNE, INDIA.
              MY PRIMARY FOCUS IS ON PAINTINGS, SCULPTURE, MURAL ART, BRANDING, EVENT DESIGN, AND CREATIVE IDENTITY
              PROJECTS.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border border-[#8A7040] text-[#8A7040] px-10 py-4 text-sm tracking-[0.15em] uppercase mt-10 hover:bg-[#8A7040] hover:text-[#F7EEDB] transition-colors"
            >
              More Details
            </Link>
          </div>

          <div className="relative mx-auto w-full max-w-[560px]">
            <div className="hidden md:block absolute -top-14 -right-14 z-20 text-[#8A7040]/75">
              <SpinningText reverse className="text-xl" duration={4} radius={5.7}>
                Artist . Creator . Vision • Parikshet ART Studio •
              </SpinningText>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-t-[220px] border border-[#8A7040]/25 bg-[#848316]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,255,255,0.18),rgba(0,0,0,0.08))]" />
              <Image
                src="/artist-profile.jpg"
                alt="Parikshet Phand portrait"
                fill
                sizes="(max-width: 1024px) 90vw, 560px"
                loading="lazy"
                className="object-cover mix-blend-multiply opacity-90"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 border-y border-[#8A7040]/20 bg-[#FFF8E8]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-12">
            <p className="text-xs tracking-[0.26em] uppercase text-[#8A7040]/70 mb-3">At A Glance</p>
            <h2 className="font-serif text-3xl md:text-5xl text-[#8A7040]">Studio Milestones</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 border border-[#8A7040]/25 bg-[linear-gradient(135deg,#FFFDF6_0%,#F7EAD2_100%)]">
            <div className="p-6 md:p-8 text-center border-b md:border-b-0 border-r border-[#8A7040]/18">
              <p className="font-serif text-4xl md:text-5xl text-[#8A7040]">
                <CountUp end={7} suffix="+" />
              </p>
              <p className="text-[11px] md:text-xs tracking-[0.2em] uppercase text-[#8A7040]/72 mt-3">Art Disciplines</p>
            </div>
            <div className="p-6 md:p-8 text-center border-b md:border-b-0 border-[#8A7040]/18">
              <p className="font-serif text-4xl md:text-5xl text-[#8A7040]">
                <CountUp end={500} suffix="+" />
              </p>
              <p className="text-[11px] md:text-xs tracking-[0.2em] uppercase text-[#8A7040]/72 mt-3">Artworks</p>
            </div>
            <div className="p-6 md:p-8 text-center border-r border-[#8A7040]/18">
              <p className="font-serif text-4xl md:text-5xl text-[#8A7040]">
                <CountUp end={100} suffix="+" />
              </p>
              <p className="text-[11px] md:text-xs tracking-[0.2em] uppercase text-[#8A7040]/72 mt-3">Creative Projects</p>
            </div>
            <div className="p-6 md:p-8 text-center">
              <p className="font-serif text-4xl md:text-5xl text-[#8A7040]">
                <CountUp end={2018} />
              </p>
              <p className="text-[11px] md:text-xs tracking-[0.2em] uppercase text-[#8A7040]/72 mt-3">Studio Founded</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 border-y border-[#8A7040]/20 bg-[#F7EEDB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10 md:mb-12">
            <p className="text-xs tracking-[0.28em] uppercase text-[#8A7040]/70 mb-3">Core Philosophy</p>
            <h2 className="font-serif text-3xl md:text-5xl text-[#8A7040]">The Artistic Foundation</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {values.map((item, index) => (
              <article
                key={item.title}
                className="relative border border-[#8A7040]/25 bg-[linear-gradient(145deg,#FFF9EC_0%,#F3E5C9_100%)] p-7 md:p-8"
              >
                <span className="inline-flex items-center justify-center w-9 h-9 border border-[#8A7040]/45 text-xs tracking-[0.15em] text-[#8A7040] mb-5">
                  0{index + 1}
                </span>
                <h3 className="font-serif text-2xl md:text-3xl leading-[1.15] text-[#8A7040] mb-4">{item.title}</h3>
                <p className="text-[#8A7040]/88 leading-relaxed text-base md:text-lg">{item.text}</p>
                <div className="mt-6 h-px w-full bg-[#8A7040]/30" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center border border-[#2B1608]/20 bg-[linear-gradient(135deg,#FFF8E8_0%,#F9E7C7_100%)] p-8 md:p-12">
          <h2 className="font-serif text-3xl md:text-5xl mb-5 text-[#8A7040]">Let&apos;s Build Something Meaningful</h2>
          <p className="text-foreground/80 mb-8 leading-relaxed">
            For commissions, collaborations, event direction, or custom creative projects, connect with Parikshet ART
            Studio.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center border border-[#8A7040] bg-[#8A7040] text-background px-8 py-4 text-sm tracking-[0.2em] uppercase hover:bg-transparent hover:text-[#8A7040] transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>

      <PremiumFooter />
    </main>
  )
}


