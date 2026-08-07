import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export const dynamic = 'force-dynamic'

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json()

    // 1. Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Name, email, and message are required fields.' },
        { status: 400 }
      )
    }

    const recipientEmail = process.env.CONTACT_EMAIL || 'amitpatel07029@gmail.com'

    // 2. Check if SMTP configuration exists in environment variables
    const hasSmtpConfig = process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS

    if (hasSmtpConfig) {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT) || 587,
        secure: Number(process.env.SMTP_PORT) === 465,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      })

      const mailOptions = {
        from: `"${name}" <${process.env.SMTP_USER}>`,
        replyTo: email,
        to: recipientEmail,
        subject: subject ? `[Portfolio Contact] ${subject}` : `New message from ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; padding: 20px; color: #333; max-width: 600px; border: 1px solid #e0e0e0; border-radius: 12px;">
            <h2 style="color: #4f46e5; border-bottom: 2px solid #eef2ff; padding-bottom: 10px;">📬 New Contact Form Message</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Subject:</strong> ${subject || 'N/A'}</p>
            <div style="margin-top: 20px; padding: 15px; background: #f8fafc; border-left: 4px solid #6366f1; border-radius: 4px;">
              <p style="margin: 0; white-space: pre-wrap;">${message}</p>
            </div>
            <hr style="margin-top: 30px; border: none; border-top: 1px solid #eee;" />
            <p style="font-size: 12px; color: #888;">Sent from Amit Patel Portfolio Contact Form</p>
          </div>
        `,
      }

      await transporter.sendMail(mailOptions)
    } else {
      // In development or when SMTP env vars are not set, log message to server console gracefully
      console.log('--- 📬 Contact Form Submission (SMTP not configured) ---')
      console.log(`From: ${name} <${email}>`)
      console.log(`Subject: ${subject}`)
      console.log(`Message: ${message}`)
      console.log('---------------------------------------------------------')
    }

    return NextResponse.json({
      success: true,
      message: 'Thank you! Your message has been sent successfully.',
    })
  } catch (error) {
    console.error('Nodemailer Error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to send email message. Please try again later.' },
      { status: 500 }
    )
  }
}
