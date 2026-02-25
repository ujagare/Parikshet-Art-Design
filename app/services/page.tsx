import { Navigation } from "@/components/navigation"
import { PremiumFooter } from "@/components/premium-footer"

const services = [
  {
    title: "Custom Portrait Commissions",
    description:
      "Personalized portrait artworks crafted from your references, with focus on emotion, likeness, and storytelling.",
  },
  {
    title: "Spiritual & Devotional Art",
    description:
      "Original compositions inspired by Indian spiritual themes, created for homes, studios, and sacred spaces.",
  },
  {
    title: "Art Direction & Design",
    description:
      "Creative direction for visual projects, including concept development, style exploration, and final artwork support.",
  },
  {
    title: "Production Support",
    description:
      "End-to-end assistance for prints and display-ready outputs, including sizing, material guidance, and finish recommendations.",
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-28 md:pt-36 pb-14 md:pb-20 border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs tracking-[0.35em] uppercase text-muted-foreground mb-4">Services</p>
          <h1 className="font-serif text-4xl md:text-6xl leading-[1.1] mb-5">Parikshet ART Studio</h1>
          <p className="max-w-2xl text-muted-foreground leading-relaxed">
            Art - Designs - Productions. We provide artist-led visual services tailored for individuals, brands, and
            cultural projects.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {services.map((service) => (
            <article key={service.title} className="border border-border p-7 md:p-8 bg-background">
              <h2 className="font-serif text-2xl mb-3">{service.title}</h2>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-24 border-t border-border">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-5xl mb-5">Start Your Project</h2>
          <p className="text-muted-foreground leading-relaxed">
            Share your idea and we will help shape it into a meaningful visual outcome.
          </p>
        </div>
      </section>

      <PremiumFooter />
    </main>
  )
}
