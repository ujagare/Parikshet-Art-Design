import { Navigation } from "@/components/navigation"
import { PremiumFooter } from "@/components/premium-footer"

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-[#FCF5E2]">
      <Navigation />
      <section className="pt-28 md:pt-36 pb-12 md:pb-16 border-b border-[#2B1608]/20">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs tracking-[0.28em] uppercase text-[#8A7040]/70 mb-4">Legal</p>
          <h1 className="font-serif text-4xl md:text-6xl text-[#8A7040] leading-[1.05]">Terms of Service</h1>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-6 text-foreground/90 space-y-6 leading-relaxed">
          <p>
            By using this website, you agree to use the content and services lawfully and respectfully.
          </p>
          <p>
            Project timelines, fees, deliverables, and revisions are finalized through direct communication before
            service execution.
          </p>
          <p>
            For any questions regarding terms, contact
            {" "}
            <a href="mailto:parikshetstudio@gmail.com" className="underline">
              parikshetstudio@gmail.com
            </a>
            .
          </p>
        </div>
      </section>
      <PremiumFooter />
    </main>
  )
}
