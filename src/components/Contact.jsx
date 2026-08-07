'use client'

import { useState } from 'react'
import { Mail, Phone, Send, Loader2, MessageCircle } from 'lucide-react'
import { FaLinkedinIn, FaYoutube, FaFacebook, FaInstagram } from 'react-icons/fa'
import { SiGeeksforgeeks, SiLeetcode } from 'react-icons/si'
import toast from 'react-hot-toast'

const CONTACT_INFO = [
  {
    icon: Mail,
    label: 'amitpatel07029@gmail.com',
    href: 'mailto:amitpatel07029@gmail.com',
  },
  {
    icon: Phone,
    label: '+91 78742 48481',
    href: 'tel:+917874248481',
  },
]

const SOCIALS = [
  { icon: FaLinkedinIn, name: 'LinkedIn', url: 'https://www.linkedin.com/in/amit-patel-89736b287/' },
  { icon: FaYoutube, name: 'YouTube', url: 'https://youtube.com/@amitpatel-uc7up' },
  { icon: FaFacebook, name: 'Facebook', url: 'https://www.facebook.com/people/Amit-Patel/' },
  { icon: FaInstagram, name: 'Instagram', url: 'https://www.instagram.com/amiitt_4084' },
  { icon: SiGeeksforgeeks, name: 'GFG', url: 'https://www.geeksforgeeks.org/user/amitpatel07/' },
  { icon: SiLeetcode, name: 'LeetCode', url: 'https://leetcode.com/u/AmitPatel4084/' },
]

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (res.ok && data.success) {
        toast.success(data.message || "Message sent! I'll get back to you soon.")
        setForm({ name: '', email: '', message: '' })
      } else {
        toast.error(data.error || "Couldn't send message — please try again.")
      }
    } catch (err) {
      console.error('Contact form error:', err)
      toast.error("Couldn't send message — please check connection.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="section-container">
      {/* Heading */}
      <div className="text-center mb-12 space-y-3">
        <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
          Contact
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          Let&apos;s <span className="text-cyan-400">Work Together</span>
        </h2>
        <p className="max-w-xl mx-auto text-sm text-slate-400">
          Have a project in mind or need technical support? Drop me a message and I&apos;ll respond promptly.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">

        {/* Left: Info & Socials */}
        <div className="space-y-6">
          <div className="glass-card p-6 space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <MessageCircle size={20} className="text-cyan-400" />
              <h3 className="font-bold text-lg text-white">Get In Touch</h3>
            </div>
            {CONTACT_INFO.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 text-slate-200 hover:text-cyan-400 transition-colors"
              >
                <div className="p-2 rounded-lg bg-slate-900 text-cyan-400 shrink-0">
                  <Icon size={16} />
                </div>
                <span className="text-sm font-medium">{label}</span>
              </a>
            ))}
          </div>

          <div className="glass-card p-6">
            <h3 className="font-bold text-lg text-white mb-4">Find Me Online</h3>
            <div className="grid grid-cols-3 gap-3">
              {SOCIALS.map(({ icon: Icon, name, url }) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-1.5 p-3 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-all text-center"
                >
                  <Icon size={20} />
                  <span className="text-xs font-medium">{name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="glass-card p-6 sm:p-8">
          <h3 className="font-bold text-lg text-white mb-6">Send a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">
                Your Name
              </label>
              <input
                name="name"
                type="text"
                placeholder="Amit Patel"
                value={form.name}
                onChange={handleChange}
                className="input-field w-full px-4 py-3 rounded-xl text-sm"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">
                Email Address
              </label>
              <input
                name="email"
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
                className="input-field w-full px-4 py-3 rounded-xl text-sm"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">
                Message
              </label>
              <textarea
                name="message"
                placeholder="Tell me about your project or question…"
                value={form.message}
                onChange={handleChange}
                rows={4}
                className="input-field w-full px-4 py-3 rounded-xl text-sm resize-none"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-xl font-semibold text-white bg-cyan-600 hover:bg-cyan-500 transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {loading ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  <span>Sending…</span>
                </>
              ) : (
                <>
                  <Send size={15} />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </form>
        </div>

      </div>
    </section>
  )
}

export default Contact
