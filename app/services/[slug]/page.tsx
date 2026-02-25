import Image from "next/image"
import { notFound } from "next/navigation"
import Masonry from "@/components/masonry"
import { Navigation } from "@/components/navigation"
import { PremiumFooter } from "@/components/premium-footer"
import { getServiceBySlug, getServiceGalleryItems, serviceGalleries } from "@/lib/service-galleries"

export function generateStaticParams() {
  return serviceGalleries.map((service) => ({ slug: service.slug }))
}

export default async function ServiceGalleryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) notFound()

  const galleryItems = getServiceGalleryItems(service.slug)
  const heroImage = service.heroImage ?? galleryItems[0]?.img

  return (
    <main className="min-h-screen bg-[#FCF5E2]">
      <Navigation />

      <section className="pt-28 md:pt-32 pb-8 md:pb-10 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-[#8A7040]/70 mb-4">Featured Service</p>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-[#8A7040] leading-[1.05] mb-7 md:mb-9">
            {service.title}
          </h1>
          <Image
            src={heroImage}
            alt={`${service.title} hero`}
            width={1920}
            height={1200}
            priority
            sizes="100vw"
            className="w-full h-auto object-contain"
          />
        </div>
      </section>

      <section className="py-12 md:py-16 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xl md:text-3xl text-foreground/85 leading-relaxed">{service.description}</p>
        </div>
      </section>

      <section className="pb-20 md:pb-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Masonry
            items={galleryItems}
            ease="power3.out"
            duration={0.6}
            stagger={0.05}
            animateFrom="bottom"
            scaleOnHover
            hoverScale={0.95}
            blurToFocus
            colorShiftOnHover={false}
          />
        </div>
      </section>

      <PremiumFooter />
    </main>
  )
}


