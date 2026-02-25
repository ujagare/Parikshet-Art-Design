import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { PremiumFooter } from "@/components/premium-footer"
import { CountUp } from "@/components/ui/count-up"

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

      <section className="py-16 md:py-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 md:mb-12">
            <div className="mx-auto max-w-sm shadow-[0_12px_24px_rgba(43,22,8,0.18)]">
              <div className="relative aspect-[3/4]">
                <Image
                  src="/artist-profile.jpg"
                  alt="Artist portrait"
                  fill
                  sizes="(max-width: 768px) 100vw, 360px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-8 md:gap-10">
          <div className="border border-[#2B1608]/20 bg-white/70 backdrop-blur-sm p-7 md:p-10">
            <p className="text-xs tracking-[0.3em] uppercase text-[#2B1608]/70 mb-5">Artist Statement</p>
            <p className="text-base md:text-lg leading-relaxed text-foreground/85">
              parishet Phand is a multifaceted artist with a passion for creating stunning, thought-provoking pieces
              that captivate and inspire. The work spans graphic design, sculpture, mural art, oil and acrylic
              painting, architectural thinking, interior design, music, and event planning.
            </p>
          </div>
          <div className="border border-[#2B1608]/20 bg-[#FFF8E8] p-7 md:p-10">
            <p className="text-xs tracking-[0.3em] uppercase text-[#2B1608]/70 mb-5">Creative Impact</p>
            <p className="text-base md:text-lg leading-relaxed text-foreground/85">
              As an entrepreneur, parishet Phand channels artistic talent into innovative concepts that connect art
              with business and culture, transforming ideas into engaging experiences.
            </p>
          </div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-18 border-y border-[#2B1608]/15 bg-[#FFF9ED]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <p className="font-serif text-3xl md:text-4xl text-[#2B1608]">
              <CountUp end={7} suffix="+" />
            </p>
            <p className="text-xs tracking-[0.22em] uppercase text-[#2B1608]/65 mt-1">Art Disciplines</p>
          </div>
          <div>
            <p className="font-serif text-3xl md:text-4xl text-[#2B1608]">
              <CountUp end={500} suffix="+" />
            </p>
            <p className="text-xs tracking-[0.22em] uppercase text-[#2B1608]/65 mt-1">Artworks</p>
          </div>
          <div>
            <p className="font-serif text-3xl md:text-4xl text-[#2B1608]">
              <CountUp end={100} suffix="+" />
            </p>
            <p className="text-xs tracking-[0.22em] uppercase text-[#2B1608]/65 mt-1">Creative Projects</p>
          </div>
          <div>
            <p className="font-serif text-3xl md:text-4xl text-[#2B1608]">
              <CountUp end={2018} />
            </p>
            <p className="text-xs tracking-[0.22em] uppercase text-[#2B1608]/65 mt-1">Studio Founded</p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 border-y border-border">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {values.map((item) => (
            <article key={item.title} className="border border-[#2B1608]/15 bg-white/60 p-6 md:p-7">
              <h2 className="font-serif text-2xl mb-3 text-[#2B1608]">{item.title}</h2>
              <p className="text-foreground/80 leading-relaxed">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="py-20 md:py-24 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center border border-[#2B1608]/20 bg-[linear-gradient(135deg,#FFF8E8_0%,#F9E7C7_100%)] p-8 md:p-12">
          <h2 className="font-serif text-3xl md:text-5xl mb-5 text-[#2B1608]">Let&apos;s Build Something Meaningful</h2>
          <p className="text-foreground/80 mb-8 leading-relaxed">
            For commissions, collaborations, event direction, or custom creative projects, connect with Parikshet ART
            Studio.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center border border-[#2B1608] bg-[#2B1608] text-background px-8 py-4 text-sm tracking-[0.2em] uppercase hover:bg-transparent hover:text-[#2B1608] transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>

      <PremiumFooter />
    </main>
  )
}
