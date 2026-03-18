export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50/30 to-violet-50/30 px-4">
      {/* Blobs */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-100/60 blur-3xl" />
        <div className="absolute right-1/4 bottom-1/4 h-80 w-80 translate-x-1/2 translate-y-1/2 rounded-full bg-violet-100/60 blur-3xl" />
      </div>
      {children}
    </div>
  )
}
