import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { sendEmail, buildContactEmail } from "@/lib/email"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, company, subject, message } = body

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Name, email, subject, and message are required" },
        { status: 400 }
      )
    }

    const submission = await prisma.contactSubmission.create({
      data: {
        name,
        email,
        phone: phone || null,
        company: company || null,
        subject,
        message,
      },
    })

    const notificationEmail = process.env.NOTIFICATION_EMAIL || "info@eposassociates.co.uk"
    const notification = buildContactEmail({ name, email, phone, company, subject, message })
    await sendEmail({
      to: notificationEmail,
      subject: notification.subject,
      html: notification.html,
    })

    return NextResponse.json({
      success: true,
      id: submission.id,
      message: "Your enquiry has been submitted successfully.",
    })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { error: "Failed to submit enquiry. Please try again." },
      { status: 500 }
    )
  }
}
