import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.hostinger.com",
  port: Number(process.env.SMTP_PORT) || 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

interface EmailParams {
  to: string
  subject: string
  html: string
}

export async function sendEmail({ to, subject, html }: EmailParams) {
  if (!process.env.SMTP_USER) {
    console.log("SMTP not configured — email not sent. Subject:", subject)
    return { success: false, message: "SMTP not configured" }
  }

  try {
    const info = await transporter.sendMail({
      from: `"EPOS Associates" <${process.env.SMTP_USER}>`,
      to,
      subject,
      html,
    })
    return { success: true, messageId: info.messageId }
  } catch (error) {
    console.error("Email send failed:", error)
    return { success: false, message: "Failed to send email" }
  }
}

export function buildContactEmail(data: {
  name: string
  email: string
  phone?: string
  company?: string
  subject: string
  message: string
}) {
  const subject = `New Contact Enquiry: ${data.subject}`

  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; color: #333; line-height: 1.6; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #2563eb; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
        .header h1 { margin: 0; font-size: 20px; }
        .body { background: #f9fafb; padding: 20px; border: 1px solid #e5e7eb; }
        .field { margin-bottom: 12px; }
        .label { font-weight: bold; color: #4b5563; font-size: 12px; text-transform: uppercase; }
        .value { color: #111827; font-size: 14px; margin-top: 4px; }
        .message-box { background: white; padding: 15px; border-radius: 6px; border: 1px solid #e5e7eb; margin-top: 8px; }
        .footer { padding: 15px 20px; font-size: 12px; color: #9ca3af; text-align: center; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New Contact Enquiry</h1>
        </div>
        <div class="body">
          <div class="field">
            <div class="label">Name</div>
            <div class="value">${data.name}</div>
          </div>
          <div class="field">
            <div class="label">Email</div>
            <div class="value"><a href="mailto:${data.email}">${data.email}</a></div>
          </div>
          ${data.phone ? `
          <div class="field">
            <div class="label">Phone</div>
            <div class="value"><a href="tel:${data.phone}">${data.phone}</a></div>
          </div>` : ""}
          ${data.company ? `
          <div class="field">
            <div class="label">Company</div>
            <div class="value">${data.company}</div>
          </div>` : ""}
          <div class="field">
            <div class="label">Subject</div>
            <div class="value">${data.subject}</div>
          </div>
          <div class="field">
            <div class="label">Message</div>
            <div class="message-box">${data.message.replace(/\n/g, "<br>")}</div>
          </div>
        </div>
        <div class="footer">
          This enquiry was submitted via the EPOS Associates contact form.
        </div>
      </div>
    </body>
    </html>
  `

  return { subject, html }
}

export function buildAutoReplyEmail(data: { name: string; email: string; subject: string }) {
  const subject = `We've received your enquiry — ${data.subject}`

  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; color: #333; line-height: 1.6; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #2563eb; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
        .header h1 { margin: 0; font-size: 20px; }
        .body { padding: 20px; }
        .footer { padding: 15px 20px; font-size: 12px; color: #9ca3af; text-align: center; border-top: 1px solid #e5e7eb; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Thank You, ${data.name}!</h1>
        </div>
        <div class="body">
          <p>We've received your enquiry regarding <strong>${data.subject}</strong>.</p>
          <p>Our team will review your message and get back to you within 24 hours during business hours.</p>
          <p>If your matter is urgent, please call us on <strong>+44 1234 567890</strong>.</p>
          <p>Kind regards,<br><strong>EPOS Associates Team</strong></p>
        </div>
        <div class="footer">
          EPOS Associates | 123 Business Street, Suite 100, London EC1A 1BB
        </div>
      </div>
    </body>
    </html>
  `

  return { subject, html }
}
