import type { Metadata } from 'next'
import { getCurrentUser } from '@/lib/auth/session'

export const metadata: Metadata = { title: 'Settings' }

export default async function SettingsPage() {
  const user = await getCurrentUser()

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="font-display text-3xl font-bold text-slate-900">Settings</h1>
        <p className="mt-1 text-slate-500">Manage your account and preferences</p>
      </div>

      <div className="max-w-2xl space-y-6">
        {/* Profile */}
        <div className="card rounded-2xl bg-white p-6">
          <h2 className="mb-5 font-display text-lg font-semibold text-slate-900">Profile</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700">Full name</label>
              <input
                defaultValue={user?.name ?? ''}
                className="mt-1.5 block w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-100"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Email address</label>
              <input
                defaultValue={user?.email ?? ''}
                disabled
                className="mt-1.5 block w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-400 cursor-not-allowed"
              />
              <p className="mt-1 text-xs text-slate-400">Email cannot be changed</p>
            </div>
            <button className="rounded-xl bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-blue transition hover:bg-blue-700">
              Save Changes
            </button>
          </div>
        </div>

        {/* Current Plan */}
        <div className="card rounded-2xl bg-white p-6">
          <h2 className="mb-1 font-display text-lg font-semibold text-slate-900">Current Plan</h2>
          <p className="mb-5 text-sm text-slate-500">Manage your subscription</p>
          <div className="mb-5 flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
            <div>
              <div className="font-semibold text-slate-900">Free Plan</div>
              <div className="text-sm text-slate-500">3 resumes · 20 templates · PDF export</div>
            </div>
            <span className="rounded-full bg-slate-200 px-3 py-1 text-xs font-semibold text-slate-600">
              CURRENT
            </span>
          </div>
          <button className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 py-3 text-sm font-semibold text-white shadow-blue transition hover:opacity-90">
            Upgrade to Pro — $9/month · 7-day free trial
          </button>
        </div>

        {/* Danger Zone */}
        <div className="rounded-2xl border border-red-200 bg-red-50 p-6">
          <h2 className="mb-1 font-display text-lg font-semibold text-red-700">Danger Zone</h2>
          <p className="mb-4 text-sm text-red-500">
            Permanently delete your account and all data. This cannot be undone.
          </p>
          <button className="rounded-xl border border-red-300 bg-white px-5 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-50">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  )
}
