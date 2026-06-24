import type { Metadata } from 'next';
import AnimatedSection from '@/components/AnimatedSection';

export const metadata: Metadata = {
  title: { absolute: 'Services | DealSpark' },
  description:
    'B2B cold calling services for companies across Ireland and the UK. 30-day sprint, 90-day, and six-month outbound engagements.',
  alternates: { canonical: 'https://www.dealspark.io/services' },
};

const standaloneServices = [
  {
    title: 'Your Outbound Plan of Attack',
    description:
      'A focused two-hour session for companies who want to run their own outbound. ICP defined, messaging angles developed, call scripts written, and a clear market penetration strategy. Everything your team needs to know where to start and how to execute.',
  },
  {
    title: 'Prospect List Build',
    description:
      '500 fully validated contacts built to your exact ICP, with verified direct mobile numbers. Every record enriched and ready for your sales team to call.',
  },
  {
    title: 'Tech Stack Implementation',
    description:
      'Your full outbound tech stack set up and configured for your business. Built properly. Your team will have everything they need to hit the ground running from day one.',
  },
];

export default function ServicesPage() {
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
            <span className="section-label">Services</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight mb-5">
            Find the{' '}
            <span className="gradient-text">Right Starting Point.</span>
          </h1>
          <p className="text-white/55 text-lg leading-relaxed">
            Every engagement starts with a conversation. Choose the option that fits where you are right now.
          </p>
        </div>
      </header>

      {/* Main service cards */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Card 1 — 30-Day Sprint */}
          <AnimatedSection delay={0}>
            <div
              className="rounded-2xl flex flex-col h-full relative overflow-hidden"
              style={{
                background: 'rgba(124,58,237,0.06)',
                border: '1px solid rgba(124,58,237,0.35)',
              }}
            >
              <div className="h-1 w-full" style={{ background: 'linear-gradient(90deg, #7c3aed, #a78bfa)' }} />
              <div className="p-8 flex flex-col flex-1">
                <div className="absolute top-5 right-6">
                  <span
                    className="text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full"
                    style={{
                      background: 'rgba(124,58,237,0.2)',
                      border: '1px solid rgba(124,58,237,0.35)',
                      color: '#a78bfa',
                    }}
                  >
                    Start Here
                  </span>
                </div>
                <div className="mb-4">
                  <span className="text-xs font-semibold tracking-wider uppercase px-2.5 py-1 rounded-md" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.4)' }}>
                    30-Day Sprint
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-white mb-4 leading-tight">New to Outbound?</h2>
                <p className="text-white/55 text-sm leading-relaxed mb-6">
                  A focused 30-day campaign to put you in front of the right people. You walk away with qualified conversations started, a clear picture of how your market responds, and the intelligence to know exactly where to push next.
                </p>
                <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#a78bfa' }}>
                  Low commitment. Fast signal.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Card 2 — Cold Calling */}
          <AnimatedSection delay={100}>
            <div
              className="rounded-2xl flex flex-col h-full"
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              <div className="h-1 w-full rounded-t-2xl" style={{ background: 'rgba(255,255,255,0.06)' }} />
              <div className="p-8 flex flex-col flex-1">
                <div className="mb-4">
                  <span className="text-xs font-semibold tracking-wider uppercase px-2.5 py-1 rounded-md" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.4)' }}>
                    90 Days
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-white mb-4 leading-tight">Cold Calling</h2>
                <p className="text-white/55 text-sm leading-relaxed mb-6">
                  A full quarter of dedicated outbound into your target market. Qualified meetings land in your calendar. Every conversation is captured and reported on, so the market intelligence compounds alongside the pipeline.
                </p>
                <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.25)' }}>
                  Consistent activity. Consistent pipeline.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Card 3 — Multichannel Outbound */}
          <AnimatedSection delay={200}>
            <div
              className="rounded-2xl flex flex-col h-full"
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              <div className="h-1 w-full rounded-t-2xl" style={{ background: 'rgba(255,255,255,0.06)' }} />
              <div className="p-8 flex flex-col flex-1">
                <div className="mb-4">
                  <span className="text-xs font-semibold tracking-wider uppercase px-2.5 py-1 rounded-md" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.4)' }}>
                    6 Months
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-white mb-4 leading-tight">Multichannel Outbound</h2>
                <p className="text-white/55 text-sm leading-relaxed mb-6">
                  Cold calling and cold email working as a coordinated campaign across your total addressable market. Every angle worked, every conversation captured. Pipeline and intelligence compounding month on month.
                </p>
                <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.25)' }}>
                  Full market coverage. Full visibility.
                </p>
              </div>
            </div>
          </AnimatedSection>

        </div>
      </div>

      {/* Standalone services */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-16">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight tracking-tight mb-4">
            Need Something{' '}
            <span className="gradient-text">Specific?</span>
          </h2>
          <p className="text-white/55 text-lg leading-relaxed">
            Standalone services available without a full engagement.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {standaloneServices.map((item, index) => (
            <AnimatedSection key={item.title} delay={index * 100}>
              <div
                className="rounded-2xl flex flex-col h-full"
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
              >
                <div className="h-1 w-full rounded-t-2xl" style={{ background: 'rgba(255,255,255,0.06)' }} />
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-white mb-4 leading-snug">{item.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at 50% 50%, rgba(124,58,237,0.08) 0%, transparent 65%)',
          }}
          aria-hidden="true"
        />
        <AnimatedSection className="relative z-10 max-w-xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight tracking-tight mb-4">
            Not sure which is{' '}
            <span className="gradient-text">right for you?</span>
          </h2>
          <p className="text-white/55 leading-relaxed mb-8">
            Book a 15-minute call and we&apos;ll point you in the right direction. No pitch, no pressure.
          </p>
          <a
            href="https://calendly.com/dealspark/strategy-call"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-base py-3.5 px-8 inline-flex"
          >
            Book a Call
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
        </AnimatedSection>
      </div>

    </div>
  );
}
