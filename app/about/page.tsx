import type { Metadata } from 'next';
import AnimatedSection from '@/components/AnimatedSection';

export const metadata: Metadata = {
  title: { absolute: 'About DealSpark | B2B Outbound Partner' },
  description:
    'DealSpark combines commercially grounded outbound with Clay-powered targeting and modern GTM tooling. Founded by Luke Kelly, enterprise AE and second-time founder.',
  alternates: { canonical: 'https://dealspark.io/about' },
};

const CALENDLY = 'https://calendly.com/dealspark/strategy-call';

const credentials = [
  '10 years in B2B sales',
  'Former BDR, Enterprise AE, and LinkedIn Account Executive',
  'Closed six-figure enterprise deals with some of the world\'s biggest brands',
  'Sourced millions in pipeline across SaaS, tech, and professional services',
  'Second-time founder — previous exit in FMCG',
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">

      {/* Header */}
      <header className="relative py-16 lg:py-20 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at 50% 0%, rgba(124,58,237,0.1) 0%, transparent 60%)',
          }}
          aria-hidden="true"
        />
        <div className="grid-texture absolute inset-0 opacity-30" aria-hidden="true" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8">
          <span className="section-label">About</span>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-6 lg:px-8 pb-24 space-y-10">

        {/* Origin story */}
        <AnimatedSection delay={0}>
          <div className="space-y-4">
            <p className="text-white/80 text-lg leading-relaxed font-medium">
              DealSpark was built on a simple observation.
            </p>
            <p className="text-white/55 leading-relaxed">
              B2B sales outreach is getting more complex. The tech stack is growing. AI
              is reshaping how buyers are identified, reached, and nurtured. Most
              businesses don&apos;t have the time, expertise, or headcount to figure it out.
            </p>
            <p className="text-white/55 leading-relaxed">
              DealSpark combines the one thing AI can&apos;t replace — a commercially
              grounded human conversation — with the precision that modern tooling makes
              possible. Clay-powered data enrichment, signal-based targeting, and
              automated workflows run underneath every engagement alongside multichannel
              outbound. The calls, the judgment, and the commercial instinct sit on top.
            </p>
          </div>
        </AnimatedSection>

        {/* Divider */}
        <div className="border-t border-white/[0.06]" />

        {/* Founder section */}
        <AnimatedSection delay={80}>
          <div
            className="rounded-2xl p-8 lg:p-10"
            style={{
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.07)',
            }}
          >
            {/* Name and title */}
            <div className="flex items-center gap-4 mb-8">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-sm font-bold flex-shrink-0"
                style={{
                  background: 'rgba(124,58,237,0.15)',
                  border: '1px solid rgba(124,58,237,0.25)',
                  color: '#a78bfa',
                }}
              >
                LK
              </div>
              <div>
                <p className="text-lg font-bold text-white leading-tight">Luke Kelly</p>
                <p className="text-sm text-white/40">Founder, DealSpark</p>
              </div>
            </div>

            {/* Credentials */}
            <ul className="space-y-3 mb-8">
              {credentials.map((item) => (
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
                  <span className="text-sm text-white/60 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <a
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm py-3 px-6"
            >
              Book a Call
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
            </a>
          </div>
        </AnimatedSection>

      </div>
    </div>
  );
}
