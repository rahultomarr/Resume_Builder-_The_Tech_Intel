import type { Metadata } from 'next'
import { getCurrentUser } from '@/lib/auth/session'
import Link from 'next/link'

export const metadata: Metadata = { title: 'Dashboard' }

export default async function DashboardPage() {
  const user = await getCurrentUser()

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="font-display text-3xl font-bold text-slate-900">
          Welcome back, {user?.name?.split(' ')[0] ?? 'there'}! 👋
        </h1>
        <p className="mt-1 text-slate-500">Here&apos;s what&apos;s happening with your resumes</p>
      </div>

      {/* Stats */}
      <div className="mb-8 grid grid-cols-3 gap-6">
        {[
          { label: 'Resumes Created', value: '0', icon: '📄', color: 'bg-blue-50 text-blue-600' },
          { label: 'Downloads', value: '0', icon: '📥', color: 'bg-violet-50 text-violet-600' },
          { label: 'Avg ATS Score', value: '—', icon: '📊', color: 'bg-emerald-50 text-emerald-600' },
        ].map((stat) => (
          <div key={stat.label} className="card rounded-2xl bg-white p-6">
            <div
              className={`mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl text-xl ${stat.color}`}
            >
              {stat.icon}
            </div>
            <div className="font-display text-4xl font-bold text-slate-900">{stat.value}</div>
            <div className="mt-1 text-sm text-slate-500">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Empty state */}
      <div className="card rounded-2xl bg-white p-12 text-center">
        <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-50 text-4xl">
          📝
        </div>
        <h2 className="font-display text-2xl font-bold text-slate-900">No resumes yet</h2>
        <p className="mt-2 text-slate-500">
          Create your first resume in minutes with our AI-guided builder
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <Link
            href="/templates"
            id="create-resume-btn"
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-blue transition hover:bg-blue-700"
          >
            Browse Templates →
          </Link>
        </div>
      </div>
    </div>
  )
}
