import type { Metadata } from 'next'
import { getCurrentUser } from '@/lib/auth/session'
import Link from 'next/link'
import { FileText, Download, ChartBar as BarChart2, Plus, ArrowRight, TrendingUp, Clock } from 'lucide-react'

export const metadata: Metadata = { title: 'Dashboard' }

const stats = [
  { label: 'Resumes Created', value: '0', Icon: FileText, iconColor: 'text-blue-600', iconBg: 'bg-blue-50' },
  { label: 'Total Downloads', value: '0', Icon: Download, iconColor: 'text-emerald-600', iconBg: 'bg-emerald-50' },
  { label: 'Avg. ATS Score', value: '—', Icon: BarChart2, iconColor: 'text-amber-600', iconBg: 'bg-amber-50' },
]

const tips = [
  { Icon: TrendingUp, text: 'ATS systems reject 75% of resumes before a human sees them.', color: 'text-blue-600 bg-blue-50' },
  { Icon: Clock, text: 'Recruiters spend an average of 7 seconds scanning a resume.', color: 'text-amber-600 bg-amber-50' },
]

export default async function DashboardPage() {
  const user = await getCurrentUser()
  const firstName = user?.name?.split(' ')[0] ?? 'there'

  return (
    <div className="p-8 max-w-5xl">
      {/* Header */}
      <div className="mb-8">
        <h1 className="font-display text-2xl font-bold text-slate-900">
          Welcome back, {firstName}
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          Here&apos;s an overview of your resume activity
        </p>
      </div>

      {/* Stats row */}
      <div className="mb-8 grid grid-cols-3 gap-4">
        {stats.map(({ label, value, Icon, iconColor, iconBg }) => (
          <div key={label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className={`mb-4 inline-flex h-9 w-9 items-center justify-center rounded-xl ${iconBg}`}>
              <Icon size={17} className={iconColor} strokeWidth={2} />
            </div>
            <div className="font-display text-3xl font-bold text-slate-900">{value}</div>
            <div className="mt-1 text-sm text-slate-500">{label}</div>
          </div>
        ))}
      </div>

      {/* Content grid */}
      <div className="grid grid-cols-3 gap-6">
        {/* Empty state — 2 cols */}
        <div className="col-span-2 flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white px-8 py-12 text-center">
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50">
            <FileText size={22} className="text-slate-400" strokeWidth={1.5} />
          </div>
          <h2 className="font-display text-lg font-semibold text-slate-900">No resumes yet</h2>
          <p className="mt-1.5 max-w-xs text-sm text-slate-500">
            Create your first resume in minutes with our AI-guided builder
          </p>
          <div className="mt-6 flex gap-3">
            <Link
              href="/templates"
              id="create-resume-btn"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
            >
              <Plus size={15} strokeWidth={2.5} />
              New Resume
            </Link>
            <Link
              href="/templates"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
            >
              Browse Templates
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Tips — 1 col */}
        <div className="space-y-4">
          <h3 className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">
            Did you know?
          </h3>
          {tips.map(({ Icon, text, color }, i) => (
            <div key={i} className="rounded-2xl border border-slate-200 bg-white p-4">
              <div className={`mb-3 inline-flex h-8 w-8 items-center justify-center rounded-xl ${color}`}>
                <Icon size={14} strokeWidth={2} />
              </div>
              <p className="text-xs leading-relaxed text-slate-600">{text}</p>
            </div>
          ))}
          <div className="rounded-2xl bg-blue-600 p-5 text-white">
            <p className="mb-1 text-[10px] font-semibold uppercase tracking-widest text-blue-200">
              Pro Tip
            </p>
            <p className="text-xs leading-relaxed">
              Use our ATS score tool to match your resume against any job description.
            </p>
            <Link
              href="/templates"
              className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-white/80 hover:text-white"
            >
              Get started <ArrowRight size={12} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
