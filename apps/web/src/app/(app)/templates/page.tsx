'use client'

import { useState, useMemo } from 'react'
import { Search, CircleCheck as CheckCircle, Lock } from 'lucide-react'

const categories = ['All', 'Modern', 'Classic', 'Creative', 'Minimal', 'Executive', 'Academic']

const templates = [
  { id: 1, name: 'Clean Pro', category: 'Modern', industry: 'Tech', level: 'Mid–Senior', bg: '#EFF6FF', bar: '#2563EB', isPremium: false },
  { id: 2, name: 'Executive Suite', category: 'Executive', industry: 'Finance', level: 'Senior', bg: '#F0FDF4', bar: '#059669', isPremium: false },
  { id: 3, name: 'Creative Edge', category: 'Creative', industry: 'Design', level: 'Entry–Mid', bg: '#FFF7ED', bar: '#EA580C', isPremium: false },
  { id: 4, name: 'Classic Scholar', category: 'Classic', industry: 'Academic', level: 'All levels', bg: '#F0F9FF', bar: '#0284C7', isPremium: false },
  { id: 5, name: 'Minimal Focus', category: 'Minimal', industry: 'General', level: 'Entry–Mid', bg: '#FAFAFA', bar: '#18181B', isPremium: false },
  { id: 6, name: 'Bold Impact', category: 'Modern', industry: 'Marketing', level: 'Mid–Senior', bg: '#FFF1F2', bar: '#E11D48', isPremium: false },
  { id: 7, name: 'Corporate Plus', category: 'Executive', industry: 'Finance', level: 'Senior', bg: '#FFFBEB', bar: '#D97706', isPremium: true },
  { id: 8, name: 'Academic Pro', category: 'Academic', industry: 'Research', level: 'PhD+', bg: '#F0FDF4', bar: '#16A34A', isPremium: true },
  { id: 9, name: 'Tech Minimal', category: 'Minimal', industry: 'Engineering', level: 'Mid–Senior', bg: '#EFF6FF', bar: '#1D4ED8', isPremium: true },
  { id: 10, name: 'Artisan', category: 'Creative', industry: 'Design', level: 'All levels', bg: '#FDF4FF', bar: '#A21CAF', isPremium: false },
  { id: 11, name: 'Foundation', category: 'Classic', industry: 'General', level: 'Entry', bg: '#F8FAFC', bar: '#475569', isPremium: false },
  { id: 12, name: 'Momentum', category: 'Modern', industry: 'Tech', level: 'Mid–Senior', bg: '#F0FDF4', bar: '#0D9488', isPremium: true },
]

function MiniResumePreview({ bg, bar, layout = 'single' }: { bg: string; bar: string; layout?: string }) {
  return (
    <div className="h-full w-full rounded-xl bg-white p-3 shadow-sm">
      {/* Header bar */}
      <div className="mb-2.5 h-5 w-full rounded-md" style={{ backgroundColor: bar }} />
      {/* Name lines */}
      <div className="mb-1 h-2 w-3/5 rounded bg-slate-200" />
      <div className="mb-3 h-1.5 w-2/5 rounded bg-slate-100" />
      {/* Divider */}
      <div className="mb-3 h-px w-full bg-slate-100" />
      {/* Content lines */}
      <div className="mb-1.5 h-1.5 w-2/5 rounded" style={{ backgroundColor: bar, opacity: 0.4 }} />
      <div className="space-y-1 mb-3">
        {[90, 75, 60].map((w, i) => (
          <div key={i} className="h-1.5 rounded bg-slate-100" style={{ width: `${w}%` }} />
        ))}
      </div>
      <div className="mb-1.5 h-1.5 w-2/5 rounded" style={{ backgroundColor: bar, opacity: 0.4 }} />
      <div className="space-y-1">
        {[85, 70].map((w, i) => (
          <div key={i} className="h-1.5 rounded bg-slate-100" style={{ width: `${w}%` }} />
        ))}
      </div>
    </div>
  )
}

export default function TemplatesPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [search, setSearch] = useState('')

  const filtered = useMemo(() => {
    return templates.filter((t) => {
      const matchesCategory = activeCategory === 'All' || t.category === activeCategory
      const q = search.toLowerCase()
      const matchesSearch =
        !q ||
        t.name.toLowerCase().includes(q) ||
        t.category.toLowerCase().includes(q) ||
        t.industry.toLowerCase().includes(q)
      return matchesCategory && matchesSearch
    })
  }, [activeCategory, search])

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-6 flex items-start justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold text-slate-900">Resume Templates</h1>
          <p className="mt-1 text-sm text-slate-500">
            {filtered.length} ATS-optimized template{filtered.length !== 1 ? 's' : ''}
            {activeCategory !== 'All' ? ` in ${activeCategory}` : ''}
          </p>
        </div>
      </div>

      {/* Filters row */}
      <div className="mb-6 flex flex-wrap items-center gap-3">
        {/* Category pills */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition-all duration-150 ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'border border-slate-200 bg-white text-slate-600 hover:border-blue-200 hover:text-blue-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative ml-auto">
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search templates..."
            className="w-56 rounded-xl border border-slate-200 bg-white py-2 pl-9 pr-4 text-sm text-slate-900 placeholder-slate-400 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-100"
          />
        </div>
      </div>

      {/* Template grid */}
      {filtered.length === 0 ? (
        <div className="py-20 text-center">
          <p className="text-sm text-slate-500">No templates match your search.</p>
          <button
            onClick={() => { setActiveCategory('All'); setSearch('') }}
            className="mt-3 text-sm font-medium text-blue-600 hover:text-blue-700"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-5">
          {filtered.map((t) => (
            <div
              key={t.id}
              className="group cursor-pointer overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
            >
              {/* Thumbnail */}
              <div className="relative h-48 w-full p-4" style={{ backgroundColor: t.bg }}>
                <MiniResumePreview bg={t.bg} bar={t.bar} />

                {/* Premium badge */}
                {t.isPremium && (
                  <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-amber-500 px-2 py-0.5">
                    <Lock size={10} className="text-white" />
                    <span className="text-[10px] font-bold text-white">PRO</span>
                  </div>
                )}

                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center gap-2 bg-slate-900/40 opacity-0 transition-all duration-200 group-hover:opacity-100">
                  <button className="rounded-lg bg-white px-3 py-2 text-xs font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50">
                    Preview
                  </button>
                  <button
                    className="rounded-lg bg-blue-600 px-3 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-blue-700"
                  >
                    Use This
                  </button>
                </div>
              </div>

              {/* Card footer */}
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-slate-800">{t.name}</span>
                  <span className="flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-medium text-emerald-600">
                    <CheckCircle size={10} strokeWidth={2.5} />
                    ATS
                  </span>
                </div>
                <p className="mt-0.5 text-xs text-slate-400">
                  {t.category} · {t.industry} · {t.level}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
