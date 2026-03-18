import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = { title: 'Forgot Password' }

export default function ForgotPasswordPage() {
  return (
    <div className="w-full max-w-md">
      <div className="card rounded-2xl bg-white p-8 shadow-card-hover">
        <div className="mb-8 flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-violet-600">
            <span className="text-xs font-bold text-white">TI</span>
          </div>
          <span className="font-display text-xl font-bold text-slate-900">TechIntel</span>
        </div>

        <h1 className="font-display text-2xl font-bold text-slate-900">Reset your password</h1>
        <p className="mt-2 text-sm text-slate-500">
          Enter your email and we&apos;ll send you a reset link
        </p>

        <form className="mt-8 space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-1.5 block w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
              placeholder="you@example.com"
            />
          </div>

          <button
            id="forgot-password-submit"
            type="submit"
            className="w-full rounded-xl bg-blue-600 py-3 text-sm font-semibold text-white shadow-blue transition hover:bg-blue-700"
          >
            Send Reset Link
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-500">
          Remember your password?{' '}
          <Link href="/login" className="font-semibold text-blue-600 hover:text-blue-700">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )
}
