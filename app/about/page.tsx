import type { Metadata } from 'next';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';

export const metadata: Metadata = {
  title: { absolute: 'About DealSpark | B2B Outbound Partner' },
  description:
    'DealSpark is a senior B2B outbound partner working with a select group of clients across Ireland, the UK, and the USA. Senior-led execution, precision targeting, and commercially grounded outreach.',
  alternates: { canonical: 'https://dealspark.io/about' },
};

const CALENDLY = 'https://calendly.com/dealspark/strategy-call';

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <header className="relative py-20 lg:py-28 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at 50% 0%, rgba(124,58,237,0.12) 0%, transparent 60%)',
          }}
          aria-hidden="true"
        />
        <div className="grid-texture absolute inset-0 opacity-30" aria-hidden="true" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-6">
            <span className="section-label">About</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
            A senior B2B outbound partner.{' '}
            <span className="gradient-text">Not an agency.</span>
          </h1>
          <p className="text-xl text-white/55 leading-relaxed max-w-2xl">
            DealSpark works with a select group of B2B clients across Ireland,
            the UK, and the USA. The focus is precision targeting, senior
            execution, and commercially grounded outreach across cold calling,
            email, and LinkedIn.
          </p>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 lg:px-8 pb-24">
        <div className="space-y-5">

          <AnimatedSection delay={0}>
            <div className="card p-8 lg:p-10">
              <h2 className="text-2xl font-bold text-white mb-4">What DealSpark Does</h2>
              <div className="space-y-3">
                <p className="text-white/60 leading-relaxed">
                  DealSpark operates the outbound function for B2B companies that want consistent qualified pipeline without building and managing an internal SDR team. The service covers the full outbound motion: ICP definition, Clay-powered targeting, and cold calling, email, and LinkedIn run across the right contacts depending on what each channel does best.
                </p>
                <p className="text-white/60 leading-relaxed">
                  Cold calling leads every engagement. It is the highest-signal channel in B2B outbound, and the one most junior-led agencies do poorly. DealSpark brings senior commercial judgment to every call, every follow-up, and every decision in the cycle.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={70}>
            <div className="card p-8 lg:p-10">
              <h2 className="text-2xl font-bold text-white mb-4">How DealSpark Works</h2>
              <div className="space-y-3">
                <p className="text-white/60 leading-relaxed">
                  DealSpark works with a select number of clients at any one time. That is a deliberate choice. It ensures every engagement receives full senior attention, is built around the specific commercial context of the client, and operates to a standard that reflects the client&apos;s brand.
                </p>
                <p className="text-white/60 leading-relaxed">
                  Every engagement starts with ICP definition. Before any outreach begins, we agree on the right companies, the right buyer titles, and the commercial triggers that indicate a high-probability buyer. Clay-powered data enrichment then validates and enriches the prospect list to reflect that ICP with precision.
                </p>
                <p className="text-white/60 leading-relaxed">
                  Cold calling, email, and LinkedIn run across the right contacts depending on what each channel does best for each audience. Communication is proactive and transparent. Clients have full visibility into what is happening and why.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={140}>
            <div className="card p-8 lg:p-10">
              <h2 className="text-2xl font-bold text-white mb-4">Who DealSpark Works With</h2>
              <div className="space-y-4">
                <p className="text-white/60 leading-relaxed">
                  DealSpark works best with established B2B companies that have a defined market, a clear offer, and a team ready to close when qualified conversations are created. The typical client is:
                </p>
                <ul className="space-y-3">
                  {[
                    'A founder or revenue leader who owns the pipeline and wants to extend their commercial capacity without adding internal headcount',
                    'Protective of their brand and unwilling to accept generic outreach that damages reputation',
                    'Selling a complex or high-value solution where the quality of the first conversation matters',
                    'Looking for consistent pipeline, not one-off campaigns or volume-based activity',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg
                        className="flex-shrink-0 mt-0.5"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#7c3aed"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span className="text-white/60 text-sm leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={210}>
            <div className="card p-8 lg:p-10">
              <h2 className="text-2xl font-bold text-white mb-4">Sectors and Geographies</h2>
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-white/35 uppercase tracking-wider font-semibold mb-3">Sectors</p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'B2B SaaS and Technology',
                      'IT Services',
                      'Professional Services',
                      'Consultancy and Advisory',
                      'Recruitment and Staffing',
                      'Training and Coaching',
                    ].map((s) => (
                      <span
                        key={s}
                        className="px-3 py-1.5 rounded-lg text-sm text-white/55"
                        style={{
                          background: 'rgba(255,255,255,0.04)',
                          border: '1px solid rgba(255,255,255,0.08)',
                        }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="pt-2">
                  <p className="text-xs text-white/35 uppercase tracking-wider font-semibold mb-3">Geographies</p>
                  <div className="flex flex-wrap gap-2">
                    {['Ireland', 'United Kingdom', 'USA'].map((g) => (
                      <span
                        key={g}
                        className="px-3 py-1.5 rounded-lg text-sm text-white/55"
                        style={{
                          background: 'rgba(124,58,237,0.08)',
                          border: '1px solid rgba(124,58,237,0.18)',
                        }}
                      >
                        {g}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={280}>
            <div className="card p-8 lg:p-10">
              <h2 className="text-2xl font-bold text-white mb-4">GTM Engineering</h2>
              <div className="space-y-3">
                <p className="text-white/60 leading-relaxed">
                  DealSpark applies GTM Engineering principles to every engagement. Before outreach begins, Clay-powered data enrichment builds and validates the prospect list against your ICP. Signal-based prospecting identifies the right moment to reach each buyer. ICP mapping ensures every contact is selected with commercial intent, not scraped and sent.
                </p>
                <p className="text-white/60 leading-relaxed">
                  GTM Engineering is the methodology behind the targeting. Senior outbound execution is what converts that targeting into qualified pipeline.
                </p>
              </div>
            </div>
          </AnimatedSection>

        </div>

        {/* CTA */}
        <AnimatedSection className="mt-5">
          <div
            className="rounded-2xl p-10 text-center"
            style={{
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.07)',
            }}
          >
            <h2 className="text-2xl font-bold text-white mb-4">
              Find out if there is a fit
            </h2>
            <p className="text-white/50 mb-8 max-w-md mx-auto leading-relaxed">
              DealSpark works with a select number of clients at any one time. Book a
              strategy call and we will give you an honest view of whether this is
              the right move.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-base py-3.5 px-8"
              >
                Book a Strategy Call
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <Link href="/contact" className="btn-outline text-base py-3.5 px-8">
                Send a Message
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
