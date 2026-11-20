'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Send, Loader2, MessageSquare, CheckCircle2 } from 'lucide-react'
import { FaLinkedinIn, FaGithub, FaYoutube } from 'react-icons/fa'
import { SiGeeksforgeeks, SiLeetcode } from 'react-icons/si'
import toast from 'react-hot-toast'

const CONTACT_INFO = [
  {
    icon: Mail,
    title: 'Email Address',
    label: 'amitpatel07029@gmail.com',
    href: 'mailto:amitpatel07029@gmail.com',
  },
  {
    icon: Phone,
    title: 'Phone / WhatsApp',
    label: '+91 78742 48481',
    href: 'tel:+917874248481',
  },
  {
    icon: MapPin,
    title: 'Location & Availability',
    label: 'Gujarat, India &bull; Open to Remote &amp; Relocation',
    href: '#',
  },
]

const PROFILES = [
  { icon: FaLinkedinIn, name: 'LinkedIn', url: 'https://www.linkedin.com/in/amit-patel01/' },
  { icon: FaGithub, name: 'GitHub', url: 'https://github.com/amit-patel01' },
  { icon: SiLeetcode, name: 'LeetCode', url: 'https://leetcode.com/u/AmitPatel4084/' },
  { icon: SiGeeksforgeeks, name: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org/user/amitpatel07/' },
]

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [loading, setLoading] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      toast.error('Please fill in all required fields.')
      return
    }

    setLoading(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (res.ok && data.success) {
        toast.success(data.message || "Thank you! I'll get back to you promptly.")
        setForm({ name: '', email: '', subject: '', message: '' })
      } else {
        toast.error(data.error || "Couldn't send message — please try again.")
      }
    } catch (err) {
      console.error('Contact form error:', err)
      toast.error("Couldn't send message — please reach out directly via email.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="section-container">
      
      {/* Section Heading */}
      <div className="text-center mb-12 space-y-3">
        <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-sky-50 dark:bg-sky-500/10 text-sky-700 dark:text-sky-400 border border-sky-200 dark:border-sky-500/20 shadow-sm">
          Get In Touch
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
          Let&apos;s Connect &amp; <span className="gradient-text">Collaborate</span>
        </h2>
        <p className="max-w-xl mx-auto text-sm text-slate-600 dark:text-slate-400">
          Interested in discussing a software engineering role, internship opportunity, or technical project? Feel free to reach out.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 max-w-5xl mx-auto">

        {/* Left Column: Direct Contact & Profiles (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Direct Contact Card */}
          <div className="glass-card p-6 space-y-5">
            <h3 className="font-bold text-lg text-slate-900 dark:text-white flex items-center gap-2">
              <MessageSquare size={18} className="text-sky-600 dark:text-sky-400" />
              <span>Contact Information</span>
            </h3>

            <div className="space-y-3">
              {CONTACT_INFO.map(({ icon: Icon, title, label, href }) => {
                const isLink = href && href !== '#'
                return (
                  <div
                    key={title}
                    className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/90 dark:border-slate-700/60 flex items-start gap-3.5 shadow-sm"
                  >
                    <div className="p-2.5 rounded-lg bg-sky-50 dark:bg-sky-500/10 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5">
                      <Icon size={16} />
                    </div>
                    <div className="space-y-0.5 min-w-0">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        {title}
                      </p>
                      {isLink ? (
                        <a
                          href={href}
                          className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-sky-600 dark:hover:text-sky-400 transition-colors block truncate"
                        >
                          {label}
                        </a>
                      ) : (
                        <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200" dangerouslySetInnerHTML={{ __html: label }} />
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Developer Profiles Card */}
          <div className="glass-card p-6 space-y-4">
            <h3 className="font-bold text-base text-slate-900 dark:text-white">
              Professional &amp; Coding Profiles
            </h3>
            
            <div className="grid grid-cols-2 gap-2.5">
              {PROFILES.map(({ icon: Icon, name, url }) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 hover:bg-slate-100 dark:hover:bg-slate-700/80 border border-slate-200 dark:border-slate-700/60 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all text-xs font-semibold shadow-sm"
                >
                  <Icon size={16} className="text-sky-600 dark:text-sky-400" />
                  <span>{name}</span>
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column: Contact Form (7 cols) */}
        <div className="lg:col-span-7">
          <div className="glass-card p-6 sm:p-8">
            <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">
              Send a Direct Message
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
              Drop your details below and I will respond to your email as soon as possible.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Your Name <span className="text-sky-600 dark:text-sky-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                    className="input-field"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Email Address <span className="text-sky-600 dark:text-sky-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="name@example.com"
                    className="input-field"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Subject / Role Discussion
                </label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Job opportunity, project, or general inquiry"
                  className="input-field"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Message <span className="text-sky-600 dark:text-sky-400">*</span>
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  required
                  placeholder="Write your message here..."
                  className="input-field resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full py-3 text-sm font-bold flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

      </div>

    </section>
  )
}

export default Contact
