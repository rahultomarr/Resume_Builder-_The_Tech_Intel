import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Templates' }

const categories = ['All', 'Modern', 'Classic', 'Creative', 'Minimal', 'Executive', 'Academic']

const colorSchemes = [
  { bg: '#EFF6FF', bar: '#2563EB' },
  { bg: '#F5F3FF', bar: '#7C3AED' },
  { bg: '#F0FDF4', bar: '#059669' },
  { bg: '#FFF7ED', bar: '#EA580C' },
  { bg: '#FFF1F2', bar: '#E11D48' },
  { bg: '#F0F9FF', bar: '#0284C7' },
  { bg: '#FAFAFA', bar: '#18181B' },
  { bg: '#FFFBEB', bar: '#D97706' },
  { bg: '#FDF4FF', bar: '#A21CAF' },
]

export default function TemplatesPage() {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-6">
        <h1 className="font-display text-3xl font-bold text-slate-900">Resume Templates</h1>
        <p className="mt-1 text-slate-500">100+ ATS-optimized templates for every career</p>
      </div>

      {/* Filter pills */}
      <div className="mb-6 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
              cat === 'All'
                ? 'bg-blue-600 text-white shadow-blue'
                : 'border border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:text-blue-600'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Search */}
      <div className="mb-6">
        <input
          type="search"
          placeholder="Search templates..."
          className="w-72 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-100"
        />
      </div>

      {/* Template grid */}
      <div className="grid grid-cols-3 gap-6">
        {colorSchemes.map((scheme, i) => (
          <div
            key={i}
            className="group card cursor-pointer overflow-hidden rounded-2xl bg-white transition-all duration-200 hover:-translate-y-1 hover:shadow-card-hover"
          >
            {/* Thumbnail */}
            <div
              className="relative h-52 w-full p-5"
              style={{ backgroundColor: scheme.bg }}
            >
              {/* Mini resume layout */}
              <div className="h-full rounded-lg bg-white p-3 shadow-sm">
                <div className="mb-3 h-4 w-full rounded" style={{ backgroundColor: scheme.bar }} />
                <div className="mb-1 h-2 w-2/3 rounded bg-slate-200" />
                <div className="mb-3 h-1.5 w-1/2 rounded bg-slate-100" />
                <div className="space-y-1">
                  {[1, 2, 3].map((line) => (
                    <div key={line} className="h-1.5 rounded bg-slate-100" style={{ width: `${90 - line * 10}%` }} />
                  ))}
                </div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 flex items-center justify-center gap-2 rounded-t-2xl bg-slate-900/50 opacity-0 transition-opacity group-hover:opacity-100">
                <button className="rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-slate-900 hover:bg-slate-100">
                  Preview
                </button>
                <button className="rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-blue-700">
                  Use This
                </button>
              </div>
            </div>

            {/* Card footer */}
            <div className="p-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-slate-800">Template {i + 1}</span>
                <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-600">
                  ATS Ready
                </span>
              </div>
              <p className="mt-0.5 text-xs text-slate-400">Modern · Tech · Entry–Senior</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
