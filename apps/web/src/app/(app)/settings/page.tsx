import type { Metadata } from 'next'
import { getCurrentUser } from '@/lib/auth/session'
import { User, Mail, CreditCard, Trash2, Check } from 'lucide-react'

export const metadata: Metadata = { title: 'Settings' }

export default async function SettingsPage() {
  const user = await getCurrentUser()

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="font-display text-2xl font-bold text-slate-900">Settings</h1>
        <p className="mt-1 text-sm text-slate-500">Manage your account and preferences</p>
      </div>

      <div className="max-w-xl space-y-5">
        {/* Profile */}
        <section className="rounded-2xl border border-slate-200 bg-white p-6">
          <div className="mb-5 flex items-center gap-2">
            <User size={16} className="text-slate-400" />
            <h2 className="font-display text-base font-semibold text-slate-900">Profile</h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">Full name</label>
              <input
                defaultValue={user?.name ?? ''}
                className="block w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 transition focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-100"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">
                <span className="flex items-center gap-1.5">
                  <Mail size={13} className="text-slate-400" />
                  Email address
                </span>
              </label>
              <input
                defaultValue={user?.email ?? ''}
                disabled
                className="block w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-400 cursor-not-allowed"
              />
              <p className="mt-1.5 text-xs text-slate-400">Email cannot be changed</p>
            </div>
            <div className="pt-1">
              <button className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700">
                <Check size={14} strokeWidth={2.5} />
                Save Changes
              </button>
            </div>
          </div>
        </section>

        {/* Plan */}
        <section className="rounded-2xl border border-slate-200 bg-white p-6">
          <div className="mb-4 flex items-center gap-2">
            <CreditCard size={16} className="text-slate-400" />
            <h2 className="font-display text-base font-semibold text-slate-900">Plan</h2>
          </div>
          <div className="mb-4 flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5">
            <div>
              <div className="text-sm font-semibold text-slate-900">Free</div>
              <div className="mt-0.5 text-xs text-slate-500">3 resumes · 20 templates · PDF export</div>
            </div>
            <span className="rounded-full bg-slate-200 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-slate-600">
              Current
            </span>
          </div>
          <button className="w-full rounded-xl bg-blue-600 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700">
            Upgrade to Pro &mdash; $9/month · 7-day free trial
          </button>
        </section>

        {/* Danger Zone */}
        <section className="rounded-2xl border border-red-200 bg-white p-6">
          <div className="mb-3 flex items-center gap-2">
            <Trash2 size={16} className="text-red-400" />
            <h2 className="font-display text-base font-semibold text-red-700">Danger Zone</h2>
          </div>
          <p className="mb-4 text-sm text-slate-500">
            Permanently delete your account and all resume data. This action cannot be undone.
          </p>
          <button className="inline-flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 px-5 py-2.5 text-sm font-semibold text-red-600 transition hover:bg-red-100">
            <Trash2 size={14} />
            Delete Account
          </button>
        </section>
      </div>
    </div>
  )
}
