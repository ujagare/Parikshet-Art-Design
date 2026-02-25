import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { CollectionGrid } from "@/components/collection-grid"
import { HeritageSection } from "@/components/heritage-section"
import { PremiumFooter } from "@/components/premium-footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FCF5E2]">
      <Navigation />
      <HeroSection />
      <section className="px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-6xl mx-auto bg-[#2B1608] p-3 border-4 border-[#2B1608] shadow-[0_8px_18px_rgba(43,22,8,0.22)]">
          <div className="relative overflow-hidden border border-[#2B1608]/35 bg-[linear-gradient(135deg,#FFF8E8_0%,#FDF1D6_100%)]">
            <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-[#2B1608]/8 blur-2xl" />
            <div className="absolute -bottom-16 -left-16 w-44 h-44 rounded-full bg-[#C08A3E]/15 blur-2xl" />

            <div className="relative grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-14 p-8 md:p-12 lg:p-14">
              <div>
                <p className="text-xs tracking-[0.28em] uppercase text-[#2B1608]/70 mb-6">Artist Introduction</p>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#2B1608] leading-[1.05]">
                  Welcome to the World of
                  <span className="block mt-2">parishet Phand</span>
                </h2>
              </div>

              <div className="lg:pl-8 lg:border-l lg:border-[#2B1608]/20">
                <p className="text-base lg:text-lg leading-relaxed text-[#2B1608]/85">
                  A multi-disciplinary artist, designer, and entrepreneur, parishet Phand is celebrated for a bold
                  creative vision across graphic design, sculpture, interior concepts, event planning, music, and more.
                  Explore an artistic universe where tradition, experimentation, and innovation come together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CollectionGrid />
      <HeritageSection />
      <PremiumFooter />
    </main>
  )
}
