import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Resume Builder' }

export default function BuilderPage({ params }: { params: { resumeId: string } }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="text-center">
        <div className="text-6xl mb-4">🤖</div>
        <h1 className="font-display text-3xl font-bold text-white">AI Resume Builder</h1>
        <p className="mt-2 text-white/60">Resume ID: {params.resumeId}</p>
        <p className="mt-4 text-white/40 text-sm">
          Sprint 3 will implement the full Q&A guided builder experience
        </p>
      </div>
    </div>
  )
}
