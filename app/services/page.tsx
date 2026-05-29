import type { Metadata } from 'next';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';

export const metadata: Metadata = {
  title: { absolute: 'Services | DealSpark' },
  description:
    'B2B cold calling services for companies across Ireland, the UK and USA. 30-day sprint, 90-day, and six-month outbound engagements.',
  alternates: { canonical: 'https://www.dealspark.io/services' },
};

const CheckIcon = () => (
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
);

const standaloneServices = [
  {
    title: 'Your Outbound Plan of Attack',
    description:
      'A focused two-hour session where we build everything you need to start outbound. ICP defined, messaging angles developed, problem-based scripts written, and a clear market penetration strategy. Everything ready to execute from day one.',
  },
  {
    title: 'Prospect List Build',
    description:
      '500 fully validated contacts built to your exact ICP, with verified direct mobile numbers. Every record enriched and ready for your sales team to call.',
  },
  {
    title: 'Tech Stack Implementation',
    description:
      'Your full outbound tech stack set up and configured for your business. Built once and built properly for your sales team to crack on with from day one.',
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
                {/* Start Here badge */}
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
                <p className="text-white/55 text-sm leading-relaxed mb-7">
                  A focused 30-day campaign to test your market and start real conversations with the right people. Low commitment, fast results. If it works, we keep going. If not, you walk away having learned exactly how your market responds.
                </p>
                <div className="flex-1">
                  <p className="text-xs font-semibold text-white/30 uppercase tracking-wider mb-4">What&apos;s included</p>
                  <ul className="space-y-3">
                    {[
                      'ICP consultation',
                      'List build and data enrichment',
                      'Problem-based scripts created',
                      '30–50 conversations with your ideal customers expected',
                      'Market insights and validation',
                      'Competitive intel gathered',
                      'Onboarding and wrap-up review call included',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckIcon />
                        <span className="text-sm text-white/60 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
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
                <p className="text-white/55 text-sm leading-relaxed mb-7">
                  A full quarter of dedicated cold calling into your target market. Consistent activity, consistent pipeline. Full visibility on every conversation, every outcome, and every piece of market intelligence gathered along the way.
                </p>
                <div className="flex-1">
                  <p className="text-xs font-semibold text-white/30 uppercase tracking-wider mb-4">Everything in the 30-Day Sprint, plus:</p>
                  <ul className="space-y-3">
                    {[
                      '80–100 conversations per month with your ideal customers',
                      'Meetings booked directly to your calendar',
                      'Live reporting document',
                      'Monthly review calls',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckIcon />
                        <span className="text-sm text-white/60 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
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
                <p className="text-white/55 text-sm leading-relaxed mb-7">
                  Cold calling and cold email running together as a coordinated campaign. Your total addressable market worked from every angle, reported on in full.
                </p>
                <div className="flex-1">
                  <p className="text-xs font-semibold text-white/30 uppercase tracking-wider mb-4">Everything in the 90-Day, plus:</p>
                  <ul className="space-y-3">
                    {[
                      'Cold email campaigns',
                      'Email infrastructure build out — inboxes, domains and automations',
                      'Total addressable market mapped',
                      'LinkedIn network growth included',
                      'Live Slack notifications',
                      'Monthly reporting',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckIcon />
                        <span className="text-sm text-white/60 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
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
