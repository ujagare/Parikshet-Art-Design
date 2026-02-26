import Image from "next/image"
import Link from "next/link"
import { Brush, CalendarDays, Music2, Palette, PenTool, Shapes } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { PremiumFooter } from "@/components/premium-footer"
import { CollectionGrid } from "@/components/collection-grid"
import aboutHeroImage from "@/images/6be932f7-4444-41dd-9752-6138d7da69ec.jpg"

const services = [
  {
    title: "Graphic Design",
    description: "Brand visuals, posters, digital assets, and concept-driven communication designs.",
    icon: PenTool,
  },
  {
    title: "Sculpture and Mural Art",
    description: "Large-scale artistic installations and mural storytelling for walls, facades, and interiors.",
    icon: Shapes,
  },
  {
    title: "Paintings",
    description: "Original canvas works in devotional, abstract, and contemporary styles tailored to your space.",
    icon: Brush,
  },
  {
    title: "Event Planning",
    description: "Artist-led experiential event concepts blending decor, storytelling, and performance.",
    icon: CalendarDays,
  },
  {
    title: "Music",
    description: "Creative music direction and live artistic performances for cultural and private events.",
    icon: Music2,
  },
  {
    title: "Pune Metro Work",
    description: "Public art projects and curated visual interventions created for city-scale impact.",
    icon: Palette,
  },
]

const processSteps = [
  {
    title: "Discovery",
    description: "We understand your goals, audience, space, and artistic direction before production starts.",
  },
  {
    title: "Concept & Creation",
    description: "Moodboards, sketches, references, and iterative design rounds lead to final artwork execution.",
  },
  {
    title: "Delivery & Display",
    description: "From production to final installation guidance, we ensure your artwork is display-ready.",
  },
]

const deliverables = [
  "Custom Original Artwork",
  "Concept Boards & Direction",
  "Installation Guidance",
  "Print-Ready / Digital Files",
  "Creative Production Support",
  "Brand or Space Styling Inputs",
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#FCF5E2]">
      <Navigation />

      <section className="relative min-h-[78vh] lg:min-h-[92vh] flex items-center pt-24 md:pt-28 overflow-hidden border-b border-[#2B1608]/20">
        <Image src={aboutHeroImage} alt="Services hero background" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-[6%] top-[22%] hidden md:block w-[240px] lg:w-[310px] h-[340px] lg:h-[430px] bg-[#8A7040] p-2 border-4 border-[#8A7040] shadow-[0_18px_42px_rgba(0,0,0,0.42),0_6px_16px_rgba(0,0,0,0.24)]">
            <div className="relative h-full w-full overflow-hidden border border-[#8A7040]/35">
              <Image src="/painting-hero.jpg" alt="Decorative art image" fill sizes="(max-width: 1024px) 240px, 310px" loading="lazy" className="object-cover" />
            </div>
          </div>
          <div className="absolute left-[2.5%] bottom-[8%] hidden lg:block w-[200px] h-[280px] bg-[#8A7040] p-2 border-4 border-[#8A7040] shadow-[0_18px_42px_rgba(0,0,0,0.42),0_6px_16px_rgba(0,0,0,0.24)]">
            <div className="relative h-full w-full overflow-hidden border border-[#8A7040]/35">
              <Image src="/service-galleries/sculpture-and-mural-art/238d7518-ffac-4ed7-a7ee-882772c394ff.jpg" alt="Decorative artist image" fill sizes="200px" loading="lazy" className="object-cover" />
            </div>
          </div>
          <div className="absolute right-[6%] top-[16%] hidden md:block w-[230px] lg:w-[290px] h-[320px] lg:h-[400px] z-10 bg-[#8A7040] p-2 border-4 border-[#8A7040] shadow-[0_18px_42px_rgba(0,0,0,0.42),0_6px_16px_rgba(0,0,0,0.24)]">
            <div className="relative h-full w-full overflow-hidden border border-[#8A7040]/35">
              <Image src="/service-galleries/sculpture-and-mural-art/164297427_10225360379453469_7441568806068820631_n.jpg" alt="Decorative sculpture image" fill sizes="(max-width: 1024px) 230px, 290px" loading="lazy" className="object-cover" />
            </div>
          </div>
          <div className="absolute right-[3%] top-[46%] hidden lg:block w-[220px] h-[250px] z-20 bg-[#8A7040] p-2 border-4 border-[#8A7040] shadow-[0_18px_42px_rgba(0,0,0,0.42),0_6px_16px_rgba(0,0,0,0.24)]">
            <div className="relative h-full w-full overflow-hidden border border-[#8A7040]/35">
              <Image src="/service-galleries/music/75398082_10220622584171548_4544843502529282048_n.jpg" alt="Decorative studio image" fill sizes="220px" loading="lazy" className="object-cover" />
            </div>
          </div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <p className="inline-flex rounded-full border border-[#8A7040]/45 bg-[#FCF5E2]/70 px-5 py-2 text-[11px] tracking-[0.22em] uppercase text-[#8A7040] mb-6">
            Services Overview
          </p>
          <h1 className="font-serif text-[2.15rem] sm:text-[2.6rem] md:text-[4.2rem] lg:text-[5.1rem] leading-[1.02] md:leading-[0.98] text-[#8A7040] text-balance">
            One Creative Platform Powering Your Studio
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-[1.75rem] text-[#8A7040]/90 mt-7">
            Everything you need to shape impactful artistic experiences.
          </p>
        </div>
      </section>

      <section className="py-14 md:py-20 border-b border-[#2B1608]/20 bg-[#F7EEDB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10 md:mb-14">
            <h2 className="font-serif text-5xl md:text-7xl text-[#8A7040]">SERVICES</h2>
            <div className="mt-7 flex items-center gap-3">
              <div className="h-px flex-1 bg-[#8A7040]/40" />
              <span className="h-3 w-3 rotate-45 border border-[#8A7040]/65" />
              <div className="h-px flex-1 bg-[#8A7040]/40" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12 md:gap-y-16">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <article key={service.title} className="relative">
                  <div className="flex items-start gap-6 md:gap-7">
                    <div className="shrink-0 text-[#8A7040]/80 mt-1">
                      <Icon className="h-10 w-10 md:h-12 md:w-12 stroke-[1.4]" />
                    </div>
                    <div>
                      <h3
                        data-no-global-reveal="true"
                        className="font-serif text-3xl md:text-5xl leading-[1.08] text-[#8A7040] mb-4 md:mb-5"
                      >
                        {service.title}
                      </h3>
                      <p className="text-[#8A7040]/90 text-xl md:text-[2rem] leading-[1.45]">{service.description}</p>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>

          <div className="mt-12 md:mt-16 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border border-[#8A7040]/70 text-[#8A7040] px-10 md:px-14 py-3 md:py-4 text-sm md:text-base tracking-[0.12em] uppercase hover:bg-[#8A7040] hover:text-[#F7EEDB] transition-colors"
            >
              More Details
            </Link>
          </div>

          <div className="mt-12 md:mt-16 flex items-center gap-3">
            <div className="h-px flex-1 bg-[#8A7040]/40" />
            <span className="h-3 w-3 rotate-45 border border-[#8A7040]/65" />
            <div className="h-px flex-1 bg-[#8A7040]/40" />
          </div>
        </div>
      </section>

      <CollectionGrid showCta={false} />

      <section className="py-16 md:py-24 border-y border-[#8A7040]/20 bg-[#F6EACF]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-[#8A7040]/70 mb-3">Creative Workflow</p>
            <h3 className="font-serif text-3xl md:text-5xl text-[#8A7040]">How We Collaborate</h3>
            <div className="mt-6 flex items-center justify-center gap-3">
              <div className="h-px w-20 md:w-28 bg-[#8A7040]/35" />
              <span className="h-2.5 w-2.5 rotate-45 border border-[#8A7040]/60" />
              <div className="h-px w-20 md:w-28 bg-[#8A7040]/35" />
            </div>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="hidden md:block absolute left-[16.5%] right-[16.5%] top-[34px] h-px bg-[#8A7040]/25" />
            {processSteps.map((step, index) => (
              <article
                key={step.title}
                className="relative border border-[#8A7040]/28 bg-[linear-gradient(145deg,#FFF9EC_0%,#F4E4C4_100%)] p-7 md:p-8"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center border border-[#8A7040]/40 bg-[#FCF5E2] font-serif text-lg text-[#8A7040] mb-5">
                  0{index + 1}
                </span>
                <p className="text-[11px] tracking-[0.22em] uppercase text-[#8A7040]/70 mb-3">Step 0{index + 1}</p>
                <h4 className="font-serif text-2xl md:text-[2rem] text-[#8A7040] leading-[1.15] mb-4">{step.title}</h4>
                <p className="text-[#8A7040]/82 leading-relaxed text-base md:text-lg">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#FFF8E8] border-y border-[#8A7040]/18">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10 md:mb-12">
            <p className="text-xs tracking-[0.28em] uppercase text-[#8A7040]/70 mb-3">Project Value</p>
            <h3 className="font-serif text-3xl md:text-5xl text-[#8A7040]">What You Receive</h3>
            <p className="text-[#8A7040]/80 leading-relaxed max-w-3xl mx-auto mt-6 text-base md:text-lg">
              Every collaboration is structured for clarity and artistic excellence, so you receive both a powerful
              visual output and a smooth creative process from start to finish.
            </p>
          </div>

          <div className="border border-[#8A7040]/25 bg-[linear-gradient(145deg,#FFFDF6_0%,#F4E5C6_100%)] p-6 md:p-8 lg:p-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
              {deliverables.map((item) => (
                <div
                  key={item}
                  className="border border-[#8A7040]/30 bg-[#FFF9EC] px-4 md:px-5 py-3 md:py-3.5 text-[11px] md:text-xs tracking-[0.14em] uppercase text-[#8A7040]/90 text-center"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PremiumFooter />
    </main>
  )
}


