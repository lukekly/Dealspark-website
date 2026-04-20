import type { Metadata } from 'next';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';

export const metadata: Metadata = {
  title: { absolute: 'Case Studies | DealSpark' },
  description: 'Real results from DealSpark outbound engagements. See how we generate qualified pipeline for B2B companies across Ireland, UK and USA.',
  alternates: { canonical: 'https://dealspark.io/case-studies' },
};

const cases = [
  {
    initials: 'LA',
    client: 'The Lennox Academy',
    sector: 'Executive Education',
    headline: 'How The Lennox Academy Extended Their GTM With a Trusted Outbound Partner',
    description: '€390k pipeline and 20 qualified opportunities in the first 4 months, with minimal oversight once live.',
    stats: [
      { value: '€390k', label: 'Pipeline Generated' },
      { value: '20', label: 'Qualified Opportunities' },
      { value: '4', label: 'Months to Pipeline' },
    ],
    href: '/case-study/lennox-academy',
    live: true,
  },
  {
    initials: 'SR',
    client: 'Client Hidden',
    sector: 'Digital Marketing Agency',
    headline: 'Qualified Pipeline for a Growing Agency',
    description: 'How DealSpark built a consistent flow of qualified new business conversations for a fast-growing digital agency.',
    stats: [
      { value: '—', label: 'Pipeline Generated' },
      { value: '—', label: 'Qualified Opportunities' },
      { value: '—', label: 'Time to Results' },
    ],
    href: null,
    live: false,
  },
  {
    initials: 'TR',
    client: 'Client Hidden',
    sector: 'Technical Recruitment',
    headline: 'Consistent Client Pipeline for a Recruitment Firm',
    description: 'A technical recruitment firm were expanding the business in a new market. DealSpark built separate outbound tracks for each persona, running independent multichannel campaigns to each audience.',
    stats: [
      { value: '—', label: 'Pipeline Generated' },
      { value: '—', label: 'Qualified Opportunities' },
      { value: '—', label: 'Time to Results' },
    ],
    href: null,
    live: false,
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen pt-20">

      {/* Header */}
      <header className="relative py-16 lg:py-20 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at 50% 0%, rgba(124,58,237,0.1) 0%, transparent 60%)',
          }}
          aria-hidden="true"
        />
        <div className="grid-texture absolute inset-0 opacity-30" aria-hidden="true" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-5">
            <span className="section-label">Case Studies</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight mb-5">
            Real results.{' '}
            <span className="gradient-text">Real Companies.</span>
          </h1>
          <p className="text-white/55 text-lg leading-relaxed">
            See how B2B companies are generating consistent pipeline with DealSpark.
          </p>
        </div>
      </header>

      {/* Cards */}
      <div className="max-w-5xl mx-auto px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((c, index) => (
            <AnimatedSection key={c.initials} delay={index * 100}>
              <div
                className="rounded-2xl overflow-hidden flex flex-col h-full"
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: `1px solid ${c.live ? 'rgba(124,58,237,0.2)' : 'rgba(255,255,255,0.06)'}`,
                }}
              >
                {/* Top accent bar */}
                <div
                  className="h-1 w-full"
                  style={{
                    background: c.live
                      ? 'linear-gradient(90deg, #7c3aed, #a78bfa)'
                      : 'rgba(255,255,255,0.06)',
                  }}
                />

                <div className="p-7 flex flex-col flex-1">
                  {/* Sector */}
                  <p className="text-xs text-white/30 uppercase tracking-wider font-semibold mb-4">
                    {c.sector}
                  </p>

                  {/* Client avatar + name */}
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold flex-shrink-0"
                      style={{
                        background: c.live ? 'rgba(124,58,237,0.15)' : 'rgba(255,255,255,0.05)',
                        border: c.live ? '1px solid rgba(124,58,237,0.25)' : '1px solid rgba(255,255,255,0.08)',
                        color: c.live ? '#a78bfa' : 'rgba(255,255,255,0.3)',
                      }}
                    >
                      {c.initials}
                    </div>
                    <p className={`text-sm font-semibold ${c.live ? 'text-white' : 'text-white/30'}`}>
                      {c.client}
                    </p>
                  </div>

                  {/* Headline */}
                  <h2 className={`text-base font-bold leading-snug mb-3 ${c.live ? 'text-white' : 'text-white/35'}`}>
                    {c.headline}
                  </h2>

                  {/* Description */}
                  <p className={`text-sm leading-relaxed mb-6 flex-1 ${c.live ? 'text-white/55' : 'text-white/25'}`}>
                    {c.description}
                  </p>

                  {/* Stats */}
                  <div
                    className="grid grid-cols-3 gap-2 mb-6 rounded-xl p-4"
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.05)',
                      ...(c.live ? {} : { filter: 'blur(3px)', opacity: 0.3, pointerEvents: 'none' }),
                    }}
                    aria-hidden={!c.live}
                  >
                    {c.stats.map((stat) => (
                      <div key={stat.label} className="text-center">
                        <p className="text-lg font-bold gradient-text leading-none mb-1">{stat.value}</p>
                        <p className="text-[10px] text-white/35 leading-tight">{stat.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  {c.live ? (
                    <Link
                      href={c.href!}
                      className="btn-primary text-sm py-3 px-5 justify-center"
                    >
                      Read Case Study
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </Link>
                  ) : (
                    <div
                      className="text-center py-2.5 px-5 rounded-xl text-xs font-semibold tracking-widest uppercase"
                      style={{
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.07)',
                        color: 'rgba(255,255,255,0.2)',
                      }}
                    >
                      Coming Soon
                    </div>
                  )}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}
