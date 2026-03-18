import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Build Resumes That Get You Hired | TechIntel Resume Builder',
}

const features = [
  {
    icon: '📄',
    title: '100+ ATS Templates',
    desc: 'Every template is validated to pass Workday, Greenhouse, Lever, and all major ATS systems.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: '🤖',
    title: 'AI-Guided Q&A',
    desc: 'Answer simple questions and our GPT-4o engine writes your bullet points for you.',
    color: 'bg-violet-50 text-violet-600',
  },
  {
    icon: '✏️',
    title: 'Powerful Editor',
    desc: 'Drag, drop, and customize every section with real-time A4 preview.',
    color: 'bg-emerald-50 text-emerald-600',
  },
  {
    icon: '🎨',
    title: 'Full Customization',
    desc: 'Colors, fonts, layouts, spacing — match your personal brand perfectly.',
    color: 'bg-amber-50 text-amber-600',
  },
  {
    icon: '📊',
    title: 'ATS Score',
    desc: 'Real-time keyword match score against any job description you paste.',
    color: 'bg-rose-50 text-rose-600',
  },
  {
    icon: '📥',
    title: 'Instant Export',
    desc: 'Pixel-perfect PDF and DOCX with one click. Every time.',
    color: 'bg-cyan-50 text-cyan-600',
  },
]

const steps = [
  {
    step: '01',
    title: 'Choose a Template',
    desc: 'Browse 100+ ATS-optimized designs filtered by industry, experience level, and style.',
  },
  {
    step: '02',
    title: 'Answer Simple Questions',
    desc: 'Our AI-guided Q&A takes ~10 minutes and writes professional bullet points for you.',
  },
  {
    step: '03',
    title: 'Edit & Export',
    desc: 'Tweak every detail in the real-time editor, then download a perfect PDF instantly.',
  },
]

const testimonials = [
  {
    quote: 'Got hired at Google within 2 weeks of using TechIntel. The ATS optimization is real.',
    name: 'Priya S.',
    role: 'Software Engineer, Google',
    initials: 'PS',
    color: 'bg-blue-500',
  },
  {
    quote: "My response rate tripled. I went from 0 callbacks to 5 interviews in the first week.",
    name: 'Marcus J.',
    role: 'Product Manager, Stripe',
    initials: 'MJ',
    color: 'bg-violet-500',
  },
  {
    quote: 'Our entire bootcamp uses TechIntel for student placement. Results speak for themselves.',
    name: 'Sarah L.',
    role: 'Career Coach, TechBootcamp',
    initials: 'SL',
    color: 'bg-emerald-500',
  },
]

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: '/month',
    desc: 'Get started with no commitment',
    features: ['3 resumes', '20 free templates', 'PDF export', 'Basic editor'],
    cta: 'Get Started Free',
    href: '/register',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '$9',
    period: '/month',
    desc: 'Everything you need to land the job',
    features: [
      'Unlimited resumes',
      '100+ premium templates',
      'AI suggestions & Q&A',
      'PDF & DOCX export',
      'Real-time ATS score',
      'Share link',
    ],
    cta: 'Start 7-Day Free Trial',
    href: '/register?plan=pro',
    highlighted: true,
  },
  {
    name: 'Team',
    price: '$299',
    period: '/month',
    desc: 'For institutions and bootcamps',
    features: [
      'Everything in Pro',
      '50 seats included',
      'Institution dashboard',
      'Analytics & reporting',
      'CSV bulk invite',
      'White-label option',
    ],
    cta: 'Book a Demo',
    href: 'mailto:team@techintel.ai',
    highlighted: false,
  },
]

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* ── NAVBAR ─────────────────────────────────────────────── */}
      <nav className="fixed top-0 z-50 w-full border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 shadow-blue">
              <span className="text-xs font-bold text-white">TI</span>
            </div>
            <span className="font-display text-xl font-bold text-slate-900">TechIntel</span>
          </div>

          <div className="hidden items-center gap-8 md:flex">
            {['Features', 'Templates', 'Pricing', 'For Institutions'].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
              >
                {item}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="rounded-lg px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
            >
              Log In
            </Link>
            <Link
              href="/register"
              className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-blue transition hover:bg-blue-700"
            >
              Get Started Free
            </Link>
          </div>
        </div>
      </nav>

      {/* ── HERO ────────────────────────────────────────────────── */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-16">
        {/* Soft gradient blobs */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/4 top-1/4 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-100/70 blur-3xl" />
          <div className="absolute right-1/4 bottom-1/4 h-[400px] w-[400px] translate-x-1/2 translate-y-1/2 rounded-full bg-violet-100/70 blur-3xl" />
        </div>

        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            ATS-Optimized Resume Builder
          </div>

          <h1 className="font-display text-5xl font-bold leading-tight text-slate-900 md:text-7xl">
            Build Resumes That{' '}
            <span className="gradient-text">Get You Hired</span>
          </h1>

          <p className="mt-6 text-xl text-slate-500 md:text-2xl">
            100+ professional templates. AI-guided builder.
            <br className="hidden md:block" />
            Powerful editor. Get your dream job.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              id="hero-cta-primary"
              href="/register"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-blue transition hover:bg-blue-700 hover:shadow-blue-lg"
            >
              Start Building Free →
            </Link>
            <Link
              id="hero-cta-secondary"
              href="/templates"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-8 py-4 text-base font-semibold text-slate-700 shadow-card transition hover:border-slate-300 hover:shadow-card-hover"
            >
              See All Templates
            </Link>
          </div>

          <p className="mt-6 text-sm text-slate-400">
            Trusted by 50,000+ professionals · No credit card required · Free forever
          </p>

          {/* Social proof avatars */}
          <div className="mt-8 flex items-center justify-center gap-3">
            <div className="flex -space-x-2">
              {['bg-blue-500', 'bg-violet-500', 'bg-emerald-500', 'bg-amber-500', 'bg-rose-500'].map(
                (color, i) => (
                  <div
                    key={i}
                    className={`h-8 w-8 rounded-full ${color} flex items-center justify-center border-2 border-white text-xs font-bold text-white`}
                  >
                    {String.fromCharCode(65 + i)}
                  </div>
                )
              )}
            </div>
            <span className="text-sm text-slate-500">
              <span className="font-semibold text-slate-700">4.9/5</span> from 2,400+ reviews
            </span>
          </div>
        </div>

        {/* Hero preview card */}
        <div className="mt-16 w-full max-w-2xl animate-float">
          <div className="card rounded-2xl p-6 shadow-card-hover">
            <div className="mb-4 flex items-center gap-3">
              <div className="h-3 w-3 rounded-full bg-rose-400" />
              <div className="h-3 w-3 rounded-full bg-amber-400" />
              <div className="h-3 w-3 rounded-full bg-emerald-400" />
              <div className="ml-2 h-5 w-40 rounded-full bg-slate-100" />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {/* Mini resume preview */}
              <div className="col-span-1 space-y-2">
                <div className="h-4 w-full rounded bg-blue-600" />
                <div className="h-2.5 w-4/5 rounded bg-slate-200" />
                <div className="h-2 w-3/5 rounded bg-slate-100" />
                <div className="mt-3 space-y-1.5">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-2 rounded bg-slate-100" />
                  ))}
                </div>
              </div>
              <div className="col-span-2 space-y-3">
                <div className="h-3 w-2/3 rounded bg-slate-800" />
                <div className="h-2 w-full rounded bg-slate-200" />
                <div className="h-2 w-5/6 rounded bg-slate-200" />
                <div className="mt-3 h-3 w-1/2 rounded bg-slate-800" />
                <div className="space-y-1.5">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-2 rounded bg-slate-200" style={{ width: `${85 - i * 10}%` }} />
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between rounded-xl bg-emerald-50 px-4 py-2.5">
              <span className="text-sm font-medium text-emerald-700">📊 ATS Score</span>
              <div className="flex items-center gap-2">
                <div className="h-2 w-24 overflow-hidden rounded-full bg-emerald-100">
                  <div className="h-full w-4/5 rounded-full bg-emerald-500" />
                </div>
                <span className="text-sm font-bold text-emerald-700">87/100</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ─────────────────────────────────────────────── */}
      <section id="features" className="py-24 px-6 bg-slate-50">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-blue-600">
              Why TechIntel?
            </span>
            <h2 className="font-display text-4xl font-bold text-slate-900">
              Everything You Need to Land the Job
            </h2>
            <p className="mt-4 text-lg text-slate-500">
              Professional tools that give you a genuine competitive edge
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="card group rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
              >
                <div
                  className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl text-2xl ${f.color}`}
                >
                  {f.icon}
                </div>
                <h3 className="font-display text-lg font-semibold text-slate-900">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ──────────────────────────────────────────── */}
      <section id="how-it-works" className="py-24 px-6">
        <div className="mx-auto max-w-5xl">
          <div className="mb-16 text-center">
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-blue-600">
              How It Works
            </span>
            <h2 className="font-display text-4xl font-bold text-slate-900">
              From Zero to Hired in 3 Steps
            </h2>
          </div>

          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-1/2 top-8 hidden h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-blue-200 via-violet-200 to-transparent lg:block" />

            <div className="space-y-12">
              {steps.map((s, i) => (
                <div
                  key={s.step}
                  className={`relative flex items-center gap-12 ${i % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} flex-col`}
                >
                  {/* Text */}
                  <div className="flex-1 text-center lg:text-left">
                    <div className="mb-2 font-display text-5xl font-bold text-blue-100">{s.step}</div>
                    <h3 className="font-display text-2xl font-bold text-slate-900">{s.title}</h3>
                    <p className="mt-3 text-slate-500">{s.desc}</p>
                  </div>
                  {/* Visual placeholder */}
                  <div className="card flex h-48 w-full flex-1 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-violet-50">
                    <span className="text-6xl">{['🖼️', '💬', '⬇️'][i]}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ──────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-blue-600">
              Success Stories
            </span>
            <h2 className="font-display text-4xl font-bold text-slate-900">Loved by Professionals</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="card rounded-2xl p-6">
                <div className="mb-4 flex text-amber-400">
                  {'★★★★★'.split('').map((s, i) => (
                    <span key={i}>{s}</span>
                  ))}
                </div>
                <p className="text-slate-700 italic leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-6 flex items-center gap-3">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full ${t.color} text-sm font-bold text-white`}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">{t.name}</div>
                    <div className="text-xs text-slate-500">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ───────────────────────────────────────────────── */}
      <section id="pricing" className="py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-blue-600">
              Pricing
            </span>
            <h2 className="font-display text-4xl font-bold text-slate-900">
              Simple, Transparent Pricing
            </h2>
            <p className="mt-4 text-slate-500">7-day free trial on Pro · Cancel anytime</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl p-8 ${
                  plan.highlighted
                    ? 'bg-blue-600 text-white shadow-blue-lg ring-4 ring-blue-200'
                    : 'card text-slate-900'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-amber-400 px-4 py-1 text-xs font-bold text-amber-900">
                    MOST POPULAR
                  </div>
                )}
                <div className={`mb-1 text-sm font-semibold ${plan.highlighted ? 'text-blue-200' : 'text-slate-500'}`}>
                  {plan.name}
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="font-display text-5xl font-bold">{plan.price}</span>
                  <span className={`text-sm ${plan.highlighted ? 'text-blue-200' : 'text-slate-400'}`}>
                    {plan.period}
                  </span>
                </div>
                <p className={`mt-1 text-sm ${plan.highlighted ? 'text-blue-200' : 'text-slate-500'}`}>
                  {plan.desc}
                </p>

                <ul className="mt-6 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <span className={plan.highlighted ? 'text-blue-200' : 'text-blue-600'}>✓</span>
                      <span className={plan.highlighted ? 'text-blue-50' : 'text-slate-700'}>{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={plan.href}
                  className={`mt-8 block w-full rounded-xl py-3 text-center text-sm font-semibold transition ${
                    plan.highlighted
                      ? 'bg-white text-blue-600 hover:bg-blue-50'
                      : 'border border-slate-200 bg-white text-slate-900 hover:border-blue-200 hover:text-blue-600'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-3xl overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 to-violet-600 p-12 text-center shadow-blue-lg">
          <h2 className="font-display text-4xl font-bold text-white">
            Ready to Land Your Dream Job?
          </h2>
          <p className="mt-4 text-blue-100">
            Join 50,000+ professionals who built their career with TechIntel
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/register"
              className="rounded-xl bg-white px-8 py-4 font-semibold text-blue-600 transition hover:bg-blue-50"
            >
              Start for Free
            </Link>
            <Link
              href="mailto:team@techintel.ai"
              className="rounded-xl border border-white/30 px-8 py-4 font-semibold text-white transition hover:border-white/60 hover:bg-white/10"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────────────────── */}
      <footer className="border-t border-slate-200 bg-slate-50 py-12 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 grid gap-8 md:grid-cols-5">
            <div className="md:col-span-2">
              <div className="mb-3 flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-violet-600">
                  <span className="text-xs font-bold text-white">TI</span>
                </div>
                <span className="font-display font-bold text-slate-900">TechIntel</span>
              </div>
              <p className="text-sm text-slate-500">
                Build resumes that get you hired. ATS-optimized, AI-powered, professionally designed.
              </p>
            </div>
            {[
              { title: 'Product', links: ['Templates', 'Builder', 'Editor', 'ATS Score'] },
              { title: 'Company', links: ['About', 'Blog', 'Careers', 'Press'] },
              { title: 'Legal', links: ['Privacy', 'Terms', 'Security', 'Cookies'] },
            ].map((col) => (
              <div key={col.title}>
                <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-400">
                  {col.title}
                </div>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link}>
                      <Link href="#" className="text-sm text-slate-600 hover:text-slate-900">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-6 md:flex-row">
            <p className="text-sm text-slate-400">
              © {new Date().getFullYear()} TechIntel Inc. All rights reserved.
            </p>
            <div className="flex gap-4">
              {['Twitter', 'LinkedIn', 'GitHub'].map((social) => (
                <Link key={social} href="#" className="text-sm text-slate-500 hover:text-slate-900">
                  {social}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
