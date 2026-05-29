import type { Metadata } from 'next';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';

export const metadata: Metadata = {
  title: { absolute: 'Services | DealSpark' },
  description:
    'B2B cold calling services for companies across Ireland, the UK and USA. 30-day sprint, 90-day, and six-month outbound engagements.',
  alternates: { canonical: 'https://www.dealspark.io/services' },
};

const services = [
  {
    id: 'sprint',
    highlight: true,
    badge: 'Start Here',
    title: 'New to Outbound?',
    duration: '30-Day Sprint',
    description:
      'A focused 30-day campaign to test your market and start real conversations with the right people. Low commitment, fast results. If it works, we keep going. If not, you walk away having learned exactly how your market responds.',
    includes: [
      'ICP consultation',
      'List build and data enrichment',
      'Script writing',
      '30–50 conversations with your ideal customers expected',
      'Market insights and validation',
      'Competitive intel gathered',
      'Onboarding call and full results breakdown',
    ],
  },
  {
    id: 'calling',
    highlight: false,
    badge: null,
    title: 'Cold Calling',
    duration: '90 Days',
    description:
      'A full quarter of dedicated cold calling into your target market. Consistent activity, consistent pipeline. You get full visibility on every conversation, every outcome, and every piece of market intelligence gathered along the way.',
    includes: [
      'ICP consultation',
      'List build and data enrichment',
      'Meetings booked directly to your calendar',
      'Market insights and validation',
      'Competitive intel gathered',
      'Monthly review calls',
      'Market intel reporting',
    ],
  },
  {
    id: 'full',
    highlight: false,
    badge: null,
    title: 'Full Outbound',
    duration: '6 Months',
    description:
      'A complete outbound function built around your business. Cold calling and cold email running as a coordinated campaign, your total addressable market worked systematically and reported on in full.',
    includes: [
      'Cold calling and cold email',
      'Total addressable market mapped',
      'List build and data enrichment',
      'LinkedIn network growth included',
      'Meetings booked directly to your calendar',
      'Market insights and validation',
      'Competitive intel gathered',
      'Monthly review calls',
      'Full reporting suite',
    ],
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

      {/* Service cards */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <AnimatedSection key={service.id} delay={index * 100}>
              <div
                className="rounded-2xl flex flex-col h-full relative overflow-hidden"
                style={{
                  background: service.highlight
                    ? 'rgba(124,58,237,0.06)'
                    : 'rgba(255,255,255,0.02)',
                  border: service.highlight
                    ? '1px solid rgba(124,58,237,0.35)'
                    : '1px solid rgba(255,255,255,0.07)',
                }}
              >
                {/* Top accent bar */}
                <div
                  className="h-1 w-full"
                  style={{
                    background: service.highlight
                      ? 'linear-gradient(90deg, #7c3aed, #a78bfa)'
                      : 'rgba(255,255,255,0.06)',
                  }}
                />

                <div className="p-8 flex flex-col flex-1">
                  {/* Badge */}
                  {service.badge && (
                    <div className="absolute top-5 right-6">
                      <span
                        className="text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full"
                        style={{
                          background: 'rgba(124,58,237,0.2)',
                          border: '1px solid rgba(124,58,237,0.35)',
                          color: '#a78bfa',
                        }}
                      >
                        {service.badge}
                      </span>
                    </div>
                  )}

                  {/* Duration pill */}
                  <div className="mb-4">
                    <span
                      className="text-xs font-semibold tracking-wider uppercase px-2.5 py-1 rounded-md"
                      style={{
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        color: 'rgba(255,255,255,0.4)',
                      }}
                    >
                      {service.duration}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl font-bold text-white mb-4 leading-tight">
                    {service.title}
                  </h2>

                  {/* Description */}
                  <p className="text-white/55 text-sm leading-relaxed mb-7">
                    {service.description}
                  </p>

                  {/* Includes */}
                  <div className="mb-8 flex-1">
                    <p className="text-xs font-semibold text-white/30 uppercase tracking-wider mb-4">
                      What&apos;s included
                    </p>
                    <ul className="space-y-3">
                      {service.includes.map((item) => (
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
                          <span className="text-sm text-white/60 leading-relaxed">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <Link
                    href="/contact"
                    className={service.highlight ? 'btn-primary text-sm py-3 px-5 justify-center' : 'btn-outline text-sm py-3 px-5 justify-center'}
                  >
                    Get in Touch
                    <svg
                      width="14"
                      height="14"
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
                  </Link>
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
            Book a 15-minute call and we'll point you in the right direction. No pitch, no pressure.
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
