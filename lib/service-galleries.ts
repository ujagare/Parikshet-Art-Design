import fs from "node:fs"
import path from "node:path"

export type ServiceGallery = {
  slug: string
  title: string
  shortLabel: string
  category: string
  heroImage: string
  description: string
  folder?: string
}

export const serviceGalleries: ServiceGallery[] = [
  {
    slug: "sculpture-and-mural-art",
    title: "Sculpture and Mural Art",
    shortLabel: "Sculpture and Mural Art",
    category: "Public Art",
    heroImage: "/service-galleries/sculpture-and-mural-art/164297427_10225360379453469_7441568806068820631_n.jpg",
    folder: "sculpture-and-mural-art",
    description:
      "Large-format works crafted for public and private spaces, blending material depth, scale, and narrative impact.",
  },
  {
    slug: "paintings",
    title: "Paintings",
    shortLabel: "Paintings",
    category: "Fine Art",
    heroImage: "/painting-hero.jpg",
    folder: "paintings",
    description:
      "Original paintings rooted in emotion, symbolism, and color language, designed to create timeless visual presence.",
  },
  {
    slug: "event-planning",
    title: "Event Planning",
    shortLabel: "Event Planning",
    category: "Experience",
    heroImage: "/event-planning-hero.jpg",
    folder: "event-planning",
    description:
      "Concept-led event experiences where art direction, atmosphere, and storytelling come together with precision.",
  },
  {
    slug: "music",
    title: "Music",
    shortLabel: "Music",
    category: "Performance Art",
    heroImage: "/service-galleries/music/75398082_10220622584171548_4544843502529282048_n.jpg",
    folder: "music",
    description:
      "Curated musical expression that complements visual art practices and creates immersive cultural experiences.",
  },
  {
    slug: "pune-mertro",
    title: "pune Mertro",
    shortLabel: "pune Mertro",
    category: "Featured Project",
    heroImage: "/service-galleries/pune-mertro/275df44e-6cc5-4732-acfc-4b681cbfda07.jpg",
    folder: "pune-mertro",
    description:
      "A highlighted project series focused on strong urban character, contemporary design language, and local narrative.",
  },
  {
    slug: "graphic-design",
    title: "Graphic Design",
    shortLabel: "Graphic Design",
    category: "Creative Service",
    heroImage: "/artisan-hands-crafting-leather-luxury-goods.jpg",
    description:
      "Visual identities, campaign systems, and communication design developed with artistic sensitivity and strategic clarity.",
  },
]

export function getServiceBySlug(slug: string) {
  return serviceGalleries.find((service) => service.slug === slug)
}

const imageExt = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"])
const heightPattern = [400, 250, 600, 320, 520, 360]

export function getServiceGalleryItems(slug: string) {
  const service = getServiceBySlug(slug)
  if (!service) return []

  if (!service.folder) {
    // Fallback set for sections without a dedicated folder.
    return [
      { id: `${slug}-1`, img: "/artisan-hands-crafting-leather-luxury-goods.jpg", url: "#", height: 420 },
      { id: `${slug}-2`, img: "/premium-leather-material-sustainable-luxury.jpg", url: "#", height: 320 },
      { id: `${slug}-3`, img: "/italian-atelier-workshop-artisan-crafting-luxury-l.jpg", url: "#", height: 540 },
      { id: `${slug}-4`, img: "/minimalist-luxury-handbag-timeless-design.jpg", url: "#", height: 360 },
    ]
  }

  const dirPath = path.join(process.cwd(), "public", "service-galleries", service.folder)
  if (!fs.existsSync(dirPath)) return []

  const files = fs
    .readdirSync(dirPath)
    .filter((file) => imageExt.has(path.extname(file).toLowerCase()))
    .sort((a, b) => a.localeCompare(b))

  return files.map((file, idx) => ({
    id: `${slug}-${idx + 1}`,
    img: `/service-galleries/${service.folder}/${encodeURIComponent(file)}`,
    url: `/service-galleries/${service.folder}/${encodeURIComponent(file)}`,
    height: heightPattern[idx % heightPattern.length],
  }))
}
