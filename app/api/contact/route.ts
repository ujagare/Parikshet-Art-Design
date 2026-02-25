import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

type ContactPayload = {
  name: string
  email: string
  service: string
  subject: string
  message: string
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function escapeHtml(input: string) {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}

function validate(payload: ContactPayload) {
  if (payload.name.trim().length < 2) return "Invalid name."
  if (!isValidEmail(payload.email.trim())) return "Invalid email."
  if (!payload.service.trim()) return "Service is required."
  if (!payload.subject.trim()) return "Subject is required."
  if (payload.message.trim().length < 10) return "Message should be at least 10 characters."
  return null
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Partial<ContactPayload>
    const payload: ContactPayload = {
      name: body.name ?? "",
      email: body.email ?? "",
      service: body.service ?? "",
      subject: body.subject ?? "",
      message: body.message ?? "",
    }

    const validationError = validate(payload)
    if (validationError) {
      return NextResponse.json({ ok: false, error: validationError }, { status: 400 })
    }

    const smtpHost = process.env.SMTP_HOST
    const smtpPort = Number(process.env.SMTP_PORT ?? 587)
    const smtpUser = process.env.SMTP_USER
    const smtpPass = process.env.SMTP_PASS
    const mailFrom = process.env.MAIL_FROM ?? smtpUser
    const mailTo = process.env.MAIL_TO ?? "parikshetstudio@gmail.com"

    if (!smtpHost || !smtpUser || !smtpPass || !mailFrom) {
      return NextResponse.json(
        {
          ok: false,
          error: "Mail server is not configured. Set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, MAIL_FROM.",
        },
        { status: 500 },
      )
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: { user: smtpUser, pass: smtpPass },
    })

    await transporter.sendMail({
      from: mailFrom,
      to: mailTo,
      replyTo: payload.email.trim(),
      subject: `Contact Form: ${payload.subject.trim()}`,
      text: `Name: ${payload.name}\nEmail: ${payload.email}\nService: ${payload.service}\nSubject: ${payload.subject}\n\nMessage:\n${payload.message}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(payload.name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
        <p><strong>Service:</strong> ${escapeHtml(payload.service)}</p>
        <p><strong>Subject:</strong> ${escapeHtml(payload.subject)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(payload.message).replace(/\n/g, "<br/>")}</p>
      `,
    })

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ ok: false, error: "Failed to send email." }, { status: 500 })
  }
}
