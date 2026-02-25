import { Navigation } from "@/components/navigation"
import dynamic from "next/dynamic"
import { HeroSection } from "@/components/hero-section"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const CollectionGrid = dynamic(() => import("@/components/collection-grid").then((m) => m.CollectionGrid))
const HeritageSection = dynamic(() => import("@/components/heritage-section").then((m) => m.HeritageSection))
const PremiumFooter = dynamic(() => import("@/components/premium-footer").then((m) => m.PremiumFooter))

const faqs = [
  {
    question: "What services do you offer at Parikshet ART Studio?",
    answer:
      "We offer Graphic Design, Sculpture and Mural Art, Paintings, Event Planning, Music, and custom public art projects.",
  },
  {
    question: "Can I request custom artwork for home or office spaces?",
    answer:
      "Yes. We take custom commissions for personal and commercial spaces based on your concept, size, color palette, and timeline.",
  },
  {
    question: "How does the project process work?",
    answer:
      "After initial discussion, we share concept direction, finalize scope and timeline, then move to creation and delivery.",
  },
  {
    question: "Do you take collaboration projects with brands and events?",
    answer:
      "Yes, we actively collaborate with brands, institutions, and event teams for visual storytelling and artistic experiences.",
  },
  {
    question: "How can I contact the studio quickly?",
    answer:
      "Use the contact form on the Contact page or connect directly through WhatsApp for faster coordination.",
  },
]

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
                <p className="text-xs tracking-[0.28em] uppercase text-[#8A7040]/70 mb-6">Artist Introduction</p>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#8A7040] leading-[1.05]">
                  Welcome to the World of
                  <span className="block mt-2">parishet Phand</span>
                </h2>
              </div>

              <div className="lg:pl-8 lg:border-l lg:border-[#2B1608]/20">
                <p className="text-base lg:text-lg leading-relaxed text-[#8A7040]/85">
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
      <section className="py-16 md:py-24 border-y border-[#2B1608]/20 bg-[#FCF5E2] px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 md:mb-12">
            <p className="text-xs tracking-[0.25em] uppercase text-[#8A7040]/65 mb-3">FAQ</p>
            <h2 className="font-serif text-3xl md:text-5xl text-[#8A7040]">Frequently Asked Questions</h2>
          </div>

          <div className="border border-[#2B1608]/30 bg-[#FFF9EC] px-5 md:px-8">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((item, index) => (
                <AccordionItem key={item.question} value={`item-${index}`} className="border-[#2B1608]/20">
                  <AccordionTrigger className="text-base md:text-lg text-[#8A7040] hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm md:text-base text-[#8A7040]/75 leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
      <PremiumFooter />
    </main>
  )
}


