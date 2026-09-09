'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import toast from 'react-hot-toast'
import {
  LayoutDashboard, Plus, Pencil, Trash2, X, Save, Loader2,
  Code2, Award, Palette, Film, ExternalLink, ArrowLeft, Search, LayoutGrid,
  ImageIcon, Link2, Tag, Star, Lock, Eye, EyeOff, LogOut, ShieldCheck,
} from 'lucide-react'
import { usePortfolio } from '../hooks/usePortfolio'

const ADMIN_PASSWORD = 'amit@admin2024'
const SESSION_KEY    = 'ap_admin_auth'

const INP = `w-full px-3.5 py-2.5 rounded-xl text-sm
  bg-slate-950 text-white border border-slate-700
  placeholder:text-slate-500
  focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-400
  transition-all duration-200`

const EMPTY = {
  type: 'project', title: '', description: '', image: '',
  link: '', github: '', issuer: '', date: '', tags: '', featured: false,
}

const LINK_FIELD = {
  project: {
    label: 'Live demo link',
    placeholder: 'https://your-project.com',
    helper: 'Add the live project URL here.',
  },
  uiux: {
    label: 'Prototype link',
    placeholder: 'https://figma.com/...',
    helper: 'Add the Figma, Behance, or prototype URL here.',
  },
  certificate: {
    label: 'Certificate file or verification link',
    placeholder: '/uploads/certificates/certificate.pdf',
    helper: 'Upload the PDF to public/uploads/certificates, then paste its path here. External verification links also work.',
  },
  video: {
    label: 'Video file or watch link',
    placeholder: '/uploads/videos/video.mp4',
    helper: 'Upload the video to public/uploads/videos, then paste its path here. YouTube, Drive, and other watch links also work.',
  },
}

/* Login Screen */
const LoginScreen = ({ onLogin }) => {
  const [password, setPassword] = useState('')
  const [show, setShow] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (password === ADMIN_PASSWORD) {
      if (typeof window !== 'undefined') {
        sessionStorage.setItem(SESSION_KEY, '1')
      }
      onLogin()
    } else {
      setError(true)
      setTimeout(() => setError(false), 2500)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0b0f19] px-4">
      <div className="w-full max-w-sm glass-card p-8 space-y-6">
        <div className="text-center space-y-2">
          <div className="w-12 h-12 mx-auto rounded-xl bg-cyan-600 text-white flex items-center justify-center shadow-lg shadow-cyan-900/30">
            <Lock size={20} />
          </div>
          <h1 className="font-extrabold text-2xl text-white">Admin Access</h1>
          <p className="text-xs text-slate-400">Enter password to manage portfolio</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <input
              type={show ? 'text' : 'password'}
              value={password}
              onChange={e => { setPassword(e.target.value); setError(false) }}
              placeholder="Enter admin password"
              autoFocus
              className={`${INP} pr-10 ${error ? 'border-red-500' : ''}`}
            />
            <button
              type="button"
              onClick={() => setShow(s => !s)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
            >
              {show ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>

          {error && (
            <p className="text-xs text-red-400 font-medium flex items-center gap-1">
              <X size={12} /> Incorrect password. Try again.
            </p>
          )}

          <button
            type="submit"
            className="w-full py-3 rounded-xl text-sm font-semibold text-white bg-cyan-600 hover:bg-cyan-500 transition-colors flex items-center justify-center gap-2"
          >
            <ShieldCheck size={16} />
            <span>Unlock Dashboard</span>
          </button>
        </form>

        <div className="text-center pt-2">
          <Link
            href="/"
            className="text-xs text-slate-400 hover:text-cyan-400 transition-colors inline-flex items-center gap-1"
          >
            <ArrowLeft size={12} /> Back to Portfolio
          </Link>
        </div>
      </div>
    </div>
  )
}

/* Stat Card */
const Stat = ({ label, value, icon: Icon, color }) => (
  <div className="flex items-center gap-4 p-4 rounded-2xl glass-card">
    <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-white ${color}`}>
      <Icon size={18} />
    </div>
    <div>
      <p className="text-xl font-bold text-white">{value}</p>
      <p className="text-xs text-slate-400">{label}</p>
    </div>
  </div>
)

/* Item Form Modal */
const ItemForm = ({ initial, onSave, onClose, saving }) => {
  const [form, setForm] = useState(
    initial
      ? { ...initial, tags: Array.isArray(initial.tags) ? initial.tags.join(', ') : initial.tags }
      : EMPTY
  )
  const isEdit = !!initial
  const linkField = LINK_FIELD[form.type] || LINK_FIELD.project

  const set = e => {
    const { name, value, type, checked } = e.target
    setForm(f => ({ ...f, [name]: type === 'checkbox' ? checked : value }))
  }

  const submit = e => {
    e.preventDefault()
    if (!form.title || !form.description) { toast.error('Title & description required.'); return }
    onSave({
      ...form,
      tags: typeof form.tags === 'string'
        ? form.tags.split(',').map(t => t.trim()).filter(Boolean)
        : form.tags,
    })
  }

  const TYPE_OPTIONS = [
    { key: 'project', label: 'Project', icon: Code2 },
    { key: 'certificate', label: 'Certificate', icon: Award },
    { key: 'uiux', label: 'UI/UX Design', icon: Palette },
    { key: 'video', label: 'Video Edit', icon: Film },
  ]

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="w-full max-w-lg glass-card p-6 space-y-4 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <h3 className="font-bold text-lg text-white">
            {isEdit ? 'Edit Item (MongoDB)' : 'Add New Item (MongoDB)'}
          </h3>
          <button onClick={onClose} className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white">
            <X size={18} />
          </button>
        </div>

        <form onSubmit={submit} className="space-y-4">
          <div className="grid grid-cols-2 gap-2">
            {TYPE_OPTIONS.map(t => {
              const Icon = t.icon
              return (
                <button
                  key={t.key}
                  type="button"
                  onClick={() => setForm(f => ({ ...f, type: t.key }))}
                  className={`py-2 px-3 rounded-xl text-xs font-semibold border flex items-center justify-center gap-1.5 transition-all ${
                    form.type === t.key
                      ? 'bg-cyan-600 text-white border-cyan-500 shadow-md shadow-cyan-900/40'
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  <Icon size={14} />
                  <span>{t.label}</span>
                </button>
              )
            })}
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Title *</label>
            <input name="title" value={form.title} onChange={set} placeholder="Title" className={INP} required />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Description *</label>
            <textarea name="description" value={form.description} onChange={set} placeholder="Short description…" rows={3} className={`${INP} resize-none`} required />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Thumbnail / cover image</label>
            <input name="image" value={form.image} onChange={set} placeholder="/uploads/thumbnails/cover.jpg or https://..." className={INP} />
            <p className="mt-1 text-[11px] leading-relaxed text-slate-500">For local cover images, upload to public/uploads/thumbnails and use the path starting with /uploads/.</p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">{linkField.label}</label>
              <input name="link" value={form.link} onChange={set} placeholder={linkField.placeholder} className={INP} />
              <p className="mt-1 text-[11px] leading-relaxed text-slate-500">{linkField.helper}</p>
            </div>
            {form.type === 'project' ? (
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">GitHub URL</label>
                <input name="github" value={form.github} onChange={set} placeholder="https://github.com/..." className={INP} />
              </div>
            ) : form.type === 'certificate' ? (
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Issuer</label>
                <input name="issuer" value={form.issuer} onChange={set} placeholder="Udemy, Coursera..." className={INP} />
              </div>
            ) : (
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Tool / Platform</label>
                <input name="issuer" value={form.issuer} onChange={set} placeholder="Figma, Premiere Pro..." className={INP} />
              </div>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Tags (comma-separated)</label>
            <input name="tags" value={form.tags} onChange={set} placeholder="React, Figma, Premiere Pro..." className={INP} />
          </div>

          <button
            type="submit"
            disabled={saving}
            className="w-full py-3 rounded-xl text-sm font-semibold text-white bg-cyan-600 hover:bg-cyan-500 transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {saving ? <Loader2 size={16} className="animate-spin" /> : <Save size={16} />}
            <span>{isEdit ? 'Save links & details to MongoDB' : 'Add links & details to MongoDB'}</span>
          </button>
        </form>
      </div>
    </div>
  )
}

/* Item Row */
const ItemRow = ({ item, onEdit, onDelete }) => {
  const id = item.id || item._id
  return (
    <div className="flex items-center gap-4 p-4 rounded-xl glass-card">
      <div className="w-14 h-14 rounded-lg overflow-hidden shrink-0 bg-slate-900">
        <img
          src={item.image || 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=200'}
          alt={item.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded-md bg-slate-800 text-cyan-400 border border-slate-700">
            {item.type}
          </span>
        </div>
        <p className="font-bold text-sm text-white truncate mt-1">{item.title}</p>
        <p className="text-xs text-slate-400 truncate">{item.description}</p>
      </div>

      <div className="flex items-center gap-2 shrink-0">
        <button
          onClick={() => onEdit(item)}
          className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white transition-colors"
        >
          <Pencil size={15} />
        </button>
        <button
          onClick={() => onDelete(id)}
          className="p-2 rounded-lg bg-red-950/60 border border-red-800/40 text-red-400 hover:text-red-300 transition-colors"
        >
          <Trash2 size={15} />
        </button>
      </div>
    </div>
  )
}

/* Main Admin Dashboard */
const AdminPanel = () => {
  const [authed, setAuthed] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setAuthed(sessionStorage.getItem(SESSION_KEY) === '1')
    }
  }, [])

  const { items, loading, error, addItem, updateItem, deleteItem } = usePortfolio()
  const [filter, setFilter] = useState('all')
  const [search, setSearch] = useState('')
  const [formOpen, setFormOpen] = useState(false)
  const [editItem, setEditItem] = useState(null)
  const [saving, setSaving] = useState(false)

  if (!authed) return <LoginScreen onLogin={() => setAuthed(true)} />

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      sessionStorage.removeItem(SESSION_KEY)
    }
    setAuthed(false)
    toast('Logged out.', { icon: '🔒' })
  }

  const filtered = items
    .filter(i => filter === 'all' || i.type === filter)
    .filter(i =>
      i.title.toLowerCase().includes(search.toLowerCase()) ||
      i.description.toLowerCase().includes(search.toLowerCase())
    )

  const getItemId = (item) => item?.id || item?._id

  const openAdd = () => { setEditItem(null); setFormOpen(true) }
  const openEdit = (item) => { setEditItem({ ...item, id: getItemId(item) }); setFormOpen(true) }
  const close = () => { setFormOpen(false); setEditItem(null) }

  const handleSave = async (data) => {
    setSaving(true)
    try {
      const targetId = editItem ? getItemId(editItem) : null
      if (targetId) { await updateItem(targetId, data); toast.success('Saved to MongoDB!') }
      else { await addItem(data); toast.success('Added to MongoDB!') }
      close()
    } catch { toast.error('Something went wrong with MongoDB.') }
    finally { setSaving(false) }
  }

  const handleDelete = async (id) => {
    if (!id) {
      toast.error('Item ID missing.')
      return
    }
    if (!window.confirm('Delete this item from MongoDB?')) return
    try { await deleteItem(id); toast.success('Deleted from MongoDB.') }
    catch { toast.error('Could not delete.') }
  }

  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-slate-800 bg-[#0b0f19]/90 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="text-slate-400 hover:text-white text-xs font-semibold flex items-center gap-1">
              <ArrowLeft size={14} /> Back
            </Link>
            <span className="text-slate-700">|</span>
            <div className="flex items-center gap-2">
              <LayoutDashboard size={18} className="text-cyan-400" />
              <span className="font-bold text-white text-base">Admin Panel (MongoDB Connected)</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={openAdd}
              className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-cyan-600 hover:bg-cyan-500 text-white flex items-center gap-1.5"
            >
              <Plus size={15} /> Add New Item
            </button>
            <button
              onClick={handleLogout}
              className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white"
            >
              <LogOut size={16} />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 py-8 space-y-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <Stat label="Projects" value={items.filter(i => i.type === 'project').length} icon={Code2} color="bg-cyan-600" />
          <Stat label="UI/UX Designs" value={items.filter(i => i.type === 'uiux').length} icon={Palette} color="bg-purple-600" />
          <Stat label="Video Edits" value={items.filter(i => i.type === 'video').length} icon={Film} color="bg-rose-600" />
          <Stat label="Certificates" value={items.filter(i => i.type === 'certificate').length} icon={Award} color="bg-amber-600" />
        </div>

        <div className="rounded-xl border border-cyan-900/60 bg-cyan-950/20 px-4 py-3 text-xs leading-relaxed text-slate-300">
          <span className="font-semibold text-cyan-300">Local uploads:</span>{' '}
          certificates → <code className="text-cyan-200">public/uploads/certificates</code>, videos → <code className="text-cyan-200">public/uploads/videos</code>, covers → <code className="text-cyan-200">public/uploads/thumbnails</code>.
          {' '}After uploading, add each file path or external URL from the item form below.
        </div>

        {error && (
          <div className="flex items-center justify-between gap-4 rounded-xl border border-red-800/60 bg-red-950/40 px-4 py-3 text-sm text-red-200">
            <span>MongoDB unavailable: {error}</span>
            <button onClick={() => window.location.reload()} className="shrink-0 font-semibold text-red-100 underline hover:text-white">
              Retry
            </button>
          </div>
        )}

        {/* Filter and Search */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-xl border border-slate-800 flex-wrap">
            {[
              { key: 'all', label: 'All' },
              { key: 'project', label: 'Projects' },
              { key: 'uiux', label: 'UI/UX' },
              { key: 'video', label: 'Videos' },
              { key: 'certificate', label: 'Certificates' },
            ].map(k => (
              <button
                key={k.key}
                onClick={() => setFilter(k.key)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  filter === k.key ? 'bg-cyan-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                {k.label}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search items…"
              className="w-full pl-9 pr-3 py-2 rounded-xl text-xs bg-slate-900 border border-slate-800 text-white placeholder:text-slate-500"
            />
          </div>
        </div>

        {/* Items List */}
        <div className="space-y-3">
          {loading && (
            <div className="py-12 text-center text-slate-400">
              <Loader2 size={24} className="animate-spin mx-auto mb-2 text-cyan-400" />
              Loading MongoDB portfolio items…
            </div>
          )}

          {!loading && filtered.length === 0 && (
            <div className="py-12 text-center text-slate-500 text-sm">
              No items found in this section.
            </div>
          )}

          {!loading && filtered.map(item => (
            <ItemRow key={item.id || item._id} item={item} onEdit={openEdit} onDelete={handleDelete} />
          ))}
        </div>
      </main>

      {formOpen && (
        <ItemForm initial={editItem} onSave={handleSave} onClose={close} saving={saving} />
      )}
    </div>
  )
}

export default AdminPanel
