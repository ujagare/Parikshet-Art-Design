"use client"

import { useMemo, useState } from "react"
import Image from "next/image"
import { Facebook, Instagram } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { PremiumFooter } from "@/components/premium-footer"
import { toast } from "@/hooks/use-toast"

type FormValues = {
  name: string
  email: string
  service: string
  subject: string
  message: string
}

const initialValues: FormValues = {
  name: "",
  email: "",
  service: "",
  subject: "",
  message: "",
}

export default function ContactPage() {
  const [values, setValues] = useState<FormValues>(initialValues)
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState<string | null>(null)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const errors = useMemo(() => {
    const next: Partial<Record<keyof FormValues, string>> = {}
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (values.name.trim().length < 2) next.name = "Please enter your full name."
    if (!emailRegex.test(values.email.trim())) next.email = "Please enter a valid email."
    if (!values.service.trim()) next.service = "Please select a service."
    if (!values.subject.trim()) next.subject = "Please enter a subject."
    if (values.message.trim().length < 10) next.message = "Message should be at least 10 characters."

    return next
  }, [values])

  const hasErrors = Object.keys(errors).length > 0

  function handleChange(field: keyof FormValues, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }))
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
    setSubmitMessage(null)
    setSubmitError(null)
    if (hasErrors) return

    try {
      setIsSubmitting(true)
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      })
      const data = (await res.json()) as { ok?: boolean; error?: string }

      if (!res.ok || !data.ok) {
        const message = data.error || "Unable to send message. Please try again."
        setSubmitError(message)
        toast({
          title: "Message not sent",
          description: message,
          variant: "destructive",
        })
        return
      }

      setValues(initialValues)
      setSubmitted(false)
      const message = "Thank you! Your message has been sent successfully."
      setSubmitMessage(message)
      toast({
        title: "Message sent",
        description: message,
        className: "border-green-700 bg-green-50 text-green-900",
      })
    } catch {
      const message = "Unable to send message. Please try again."
      setSubmitError(message)
      toast({
        title: "Message not sent",
        description: message,
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-[#FCF5E2]">
      <Navigation />

      <section className="relative pt-28 md:pt-36 pb-14 md:pb-20 border-b border-[#2B1608]/35 overflow-hidden">
        <Image
          src="/about-hero.jpg"
          alt="Contact hero background"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#2B1608]/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <p className="text-xs tracking-[0.35em] uppercase text-background/75 mb-4">Contact</p>
          <h1 className="font-serif text-4xl md:text-6xl leading-[1.1] mb-5 text-background">Get in Touch</h1>
          <p className="max-w-3xl text-background/85 leading-relaxed mt-5">
            Interested in learning more about parishet Phand or exploring potential collaborations? Get in touch today
            to start a conversation about how art and creativity can transform your world.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14">
          <div>
            <h2 className="font-serif text-3xl mb-6">Send a Message</h2>
            <form className="space-y-5" noValidate onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={values.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  className={`w-full border bg-transparent px-4 py-3 outline-none transition-colors ${
                    submitted && errors.name
                      ? "border-red-500 focus:border-red-500"
                      : "border-[#2B1608]/35 focus:border-[#2B1608]"
                  }`}
                  placeholder="Your name"
                />
                {submitted && errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  value={values.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className={`w-full border bg-transparent px-4 py-3 outline-none transition-colors ${
                    submitted && errors.email
                      ? "border-red-500 focus:border-red-500"
                      : "border-[#2B1608]/35 focus:border-[#2B1608]"
                  }`}
                  placeholder="you@example.com"
                />
                {submitted && errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2"
                >
                  Services
                </label>
                <select
                  id="service"
                  value={values.service}
                  onChange={(e) => handleChange("service", e.target.value)}
                  className={`w-full border bg-transparent px-4 py-3 outline-none transition-colors ${
                    submitted && errors.service
                      ? "border-red-500 focus:border-red-500"
                      : "border-[#2B1608]/35 focus:border-[#2B1608]"
                  }`}
                >
                  <option value="">Select a service</option>
                  <option value="Graphic Design">Graphic Design</option>
                  <option value="Sculpture and Mural Art">Sculpture and Mural Art</option>
                  <option value="Paintings">Paintings</option>
                  <option value="Event Planning">Event Planning</option>
                  <option value="Music">Music</option>
                  <option value="Pune Mertro Work">Pune Mertro Work</option>
                </select>
                {submitted && errors.service && <p className="mt-1 text-xs text-red-600">{errors.service}</p>}
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  value={values.subject}
                  onChange={(e) => handleChange("subject", e.target.value)}
                  className={`w-full border bg-transparent px-4 py-3 outline-none transition-colors ${
                    submitted && errors.subject
                      ? "border-red-500 focus:border-red-500"
                      : "border-[#2B1608]/35 focus:border-[#2B1608]"
                  }`}
                  placeholder="How can we help?"
                />
                {submitted && errors.subject && <p className="mt-1 text-xs text-red-600">{errors.subject}</p>}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  value={values.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  className={`w-full border bg-transparent px-4 py-3 outline-none transition-colors resize-none ${
                    submitted && errors.message
                      ? "border-red-500 focus:border-red-500"
                      : "border-[#2B1608]/35 focus:border-[#2B1608]"
                  }`}
                  placeholder="Write your message here..."
                />
                {submitted && errors.message && <p className="mt-1 text-xs text-red-600">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto border border-[#8A7040] bg-[#8A7040] text-background px-8 py-3 text-sm tracking-[0.18em] uppercase hover:bg-transparent hover:text-[#8A7040] transition-colors"
              >
                {isSubmitting ? "Sending..." : "Submit"}
              </button>
              {submitMessage && <p className="text-sm text-green-700">{submitMessage}</p>}
              {submitError && <p className="text-sm text-red-700">{submitError}</p>}
            </form>
          </div>

          <div className="lg:pl-8">
            <h2 className="font-serif text-3xl mb-6">Parikshet ART Studio</h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                <span className="font-medium text-foreground/80">Office:</span>
                <br />
                A/24, "Shivshakti" Vidyut Nagar Society, Lane 5,
                <br />
                Koregaon Park, Pune 411001.
              </p>
              <p>
                <span className="font-medium text-foreground/80">Studio:</span>
                <br />
                Katraj - Kondhwa Rd, Balkawade Nagar Society, Mauli Nagar, Katraj,
                <br />
                Near Kapilamrut Dairy, Pune, Maharashtra 411046.
              </p>
              <p>
                Email: parikshetstudio@gmail.com
                <br />
                Phone: +91 7498 724 242
              </p>
              <p>
                Monday - Friday: 10:00 AM - 7:00 PM
                <br />
                Saturday: 11:00 AM - 6:00 PM
                <br />
                Sunday: By Appointment
              </p>

              <div className="pt-2">
                <p className="text-xs tracking-[0.2em] uppercase text-foreground/70 mb-3">Follow Us</p>
                <div className="flex items-center gap-4">
                  <a
                    href="https://www.instagram.com/parikshet.phand?igsh=OGpsdWRrdmhnZjA3"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                    className="inline-flex h-10 w-10 items-center justify-center border border-[#2B1608]/45 text-[#2B1608] hover:bg-[#2B1608] hover:text-background transition-colors"
                  >
                    <Instagram className="h-4 w-4" />
                  </a>
                  <a
                    href="https://www.facebook.com/share/16PAtjqvax/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Facebook"
                    className="inline-flex h-10 w-10 items-center justify-center border border-[#2B1608]/45 text-[#2B1608] hover:bg-[#2B1608] hover:text-background transition-colors"
                  >
                    <Facebook className="h-4 w-4" />
                  </a>
                  <a
                    href="https://wa.me/917498724242"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="WhatsApp"
                    className="inline-flex h-10 w-10 items-center justify-center border border-[#2B1608]/45 text-[#2B1608] hover:bg-[#2B1608] hover:text-background transition-colors"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                      <path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.47 1.34 4.98L2 22l5.2-1.37a9.95 9.95 0 0 0 4.84 1.24H12c5.5 0 9.96-4.46 9.96-9.96S17.5 2 12 2h.04zm0 18.2h-.03a8.2 8.2 0 0 1-4.17-1.13l-.3-.18-3.08.81.82-3.01-.2-.31a8.2 8.2 0 1 1 6.96 3.82zm4.5-6.15c-.24-.12-1.43-.7-1.65-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.44-1.34-1.68-.14-.24-.02-.37.1-.5.1-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.48-.4-.42-.54-.43h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.68 2.57 4.08 3.6.57.24 1.01.38 1.36.48.57.18 1.08.15 1.48.09.45-.07 1.43-.58 1.63-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PremiumFooter />
    </main>
  )
}

