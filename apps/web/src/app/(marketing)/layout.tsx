import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Build Resumes That Get You Hired',
  description:
    'TechIntel Resume Builder — 100+ ATS-optimized templates, AI-guided builder, and powerful editor.',
}

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
