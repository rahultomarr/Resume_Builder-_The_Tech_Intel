import { requireAuth } from '@/lib/auth/session'
import Link from 'next/link'

export default async function AppLayout({ children }: { children: React.ReactNode }) {
  await requireAuth()

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 z-40 flex h-full w-64 flex-col border-r border-slate-200 bg-white">
        <div className="flex h-16 items-center gap-2 border-b border-slate-200 px-6">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-violet-600">
            <span className="text-xs font-bold text-white">TI</span>
          </div>
          <span className="font-display font-bold text-slate-900">TechIntel</span>
        </div>

        <nav className="flex-1 space-y-1 p-4">
          {[
            { href: '/dashboard', label: 'Dashboard', icon: '📊', id: 'nav-dashboard' },
            { href: '/templates', label: 'Templates', icon: '🎨', id: 'nav-templates' },
            { href: '/settings', label: 'Settings', icon: '⚙️', id: 'nav-settings' },
          ].map((item) => (
            <Link
              key={item.href}
              id={item.id}
              href={item.href}
              className="flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
            >
              <span>{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="border-t border-slate-200 p-4">
          <Link
            href="/api/auth/signout"
            className="flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium text-slate-500 transition hover:bg-slate-100 hover:text-slate-700"
          >
            <span>🚪</span> Sign Out
          </Link>
        </div>
      </aside>

      {/* Main content */}
      <main className="ml-64 flex-1">{children}</main>
    </div>
  )
}
