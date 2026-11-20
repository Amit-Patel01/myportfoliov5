import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export const dynamic = 'force-dynamic'

export async function POST(request) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // 1. Validation
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { success: false, error: 'Name, email, and message are required fields.' },
        { status: 400 }
      )
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: 'Please enter a valid email address.' },
        { status: 400 }
      )
    }

    // 2. Read SMTP credentials from environment
    const user = (process.env.EMAIL_USER || process.env.SMTP_USER || '').trim()
    const pass = (process.env.EMAIL_PASS || process.env.SMTP_PASS || '').trim().replace(/\s+/g, '')
    const recipientEmail = (process.env.CONTACT_EMAIL || user || 'amitpatel07029@gmail.com').trim()
    const host = process.env.SMTP_HOST
    const port = process.env.SMTP_PORT

    if (!user || !pass) {
      console.warn('⚠️ [Nodemailer] EMAIL_USER / EMAIL_PASS missing in .env.local')
      return NextResponse.json(
        {
          success: false,
          error:
            'Email credentials not configured in .env.local (EMAIL_USER & EMAIL_PASS). Please add your Google App Password.',
        },
        { status: 503 }
      )
    }

    // 3. Create Transporter
    const transporter = host
      ? nodemailer.createTransport({
          host,
          port: Number(port) || 465,
          secure: Number(port) === 465 || !port,
          auth: { user, pass },
          tls: { rejectUnauthorized: false },
        })
      : nodemailer.createTransport({
          service: 'gmail',
          auth: { user, pass },
        })

    const cleanSubject = subject?.trim() || 'General Inquiry'
    const cleanName = name.trim()
    const cleanEmail = email.trim()
    const cleanMessage = message.trim()

    // 4. Mail Options
    const mailOptions = {
      from: `"Portfolio Contact - ${cleanName}" <${user}>`,
      replyTo: cleanEmail,
      to: recipientEmail,
      subject: `[Portfolio] ${cleanSubject} — from ${cleanName}`,
      text: `New message from Portfolio Contact Form:\n\nName: ${cleanName}\nEmail: ${cleanEmail}\nSubject: ${cleanSubject}\n\nMessage:\n${cleanMessage}\n`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 14px rgba(0,0,0,0.06);">
          <div style="background: linear-gradient(135deg, #0284c7 0%, #6366f1 100%); padding: 24px 28px; color: #ffffff;">
            <h2 style="margin: 0; font-size: 20px; font-weight: 700; letter-spacing: -0.02em;">New Message from Portfolio</h2>
            <p style="margin: 6px 0 0; font-size: 13px; opacity: 0.9;">Sent via amitpatel.dev contact form</p>
          </div>

          <div style="padding: 24px 28px;">
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr>
                <td style="padding: 8px 0; font-size: 13px; color: #64748b; width: 90px; font-weight: 600;">Sender:</td>
                <td style="padding: 8px 0; font-size: 14px; color: #0f172a; font-weight: 600;">${cleanName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-size: 13px; color: #64748b; font-weight: 600;">Email:</td>
                <td style="padding: 8px 0; font-size: 14px;">
                  <a href="mailto:${cleanEmail}" style="color: #0284c7; text-decoration: none; font-weight: 600;">${cleanEmail}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-size: 13px; color: #64748b; font-weight: 600;">Subject:</td>
                <td style="padding: 8px 0; font-size: 14px; color: #0f172a; font-weight: 600;">${cleanSubject}</td>
              </tr>
            </table>

            <div style="background: #f8fafc; border-left: 4px solid #0284c7; border-radius: 6px; padding: 16px 20px; margin-top: 10px;">
              <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #334155; white-space: pre-wrap;">${cleanMessage}</p>
            </div>

            <div style="margin-top: 24px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
              <a href="mailto:${cleanEmail}?subject=${encodeURIComponent('Re: ' + cleanSubject)}" style="display: inline-block; background: #0284c7; color: #ffffff; text-decoration: none; font-size: 13px; font-weight: 600; padding: 10px 20px; border-radius: 8px;">
                Reply directly to ${cleanName}
              </a>
            </div>
          </div>
        </div>
      `,
    }

    // 5. Send Email
    await transporter.sendMail(mailOptions)

    return NextResponse.json({
      success: true,
      message: 'Thank you! Your message has been sent successfully.',
    })
  } catch (error) {
    console.error('Nodemailer Error:', error)
    return NextResponse.json(
      {
        success: false,
        error: error.message || 'Failed to send message via email. Please try again.',
      },
      { status: 500 }
    )
  }
}
