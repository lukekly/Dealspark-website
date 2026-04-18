import Link from 'next/link';
import AnimatedSection from './AnimatedSection';

const CALENDLY = 'https://calendly.com/dealspark/strategy-call';

const INDUSTRIES = [
  {
    label: 'B2B SaaS and Technology',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    label: 'IT Services and Managed Services',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" />
        <line x1="6" y1="18" x2="6.01" y2="18" />
      </svg>
    ),
  },
  {
    label: 'Professional Services',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
      </svg>
    ),
  },
  {
    label: 'Consultancy and Advisory',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    label: 'Recruitment and Staffing',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    label: 'Training and Coaching',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
];

export interface ServiceSection {
  heading: string;
  body: string[];
}

interface ServicePageProps {
  h1: string;
  badge: string;
  geo: string;
  intro: string;
  sections: ServiceSection[];
  schemaJson: Record<string, unknown>;
}

export default function ServicePage({
  h1,
  badge,
  geo,
  intro,
  sections,
  schemaJson,
}: ServicePageProps) {
  return (
    <div className="min-h-screen pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
      />

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
        <div
          className="grid-texture absolute inset-0 opacity-30"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-6">
            <Link
              href="/"
              className="section-label hover:border-accent/50 transition-colors"
            >
              &larr; DealSpark
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className="section-label">{badge}</span>
            <span className="section-label">{geo}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
            {h1}
          </h1>

          <p className="text-xl text-white/55 leading-relaxed mb-8 max-w-2xl">
            {intro}
          </p>

          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-base py-3.5 px-7"
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
        </div>
      </header>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 lg:px-8 pb-8">
        <div className="space-y-5">
          {sections.map((section, i) => (
            <AnimatedSection key={i} delay={i * 70}>
              <div className="card p-8 lg:p-10">
                <h2 className="text-2xl font-bold text-white mb-4">
                  {section.heading}
                </h2>
                <div className="space-y-3">
                  {section.body.map((para, j) => (
                    <p key={j} className="text-white/60 leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Sectors */}
        <AnimatedSection className="mt-5">
          <div
            className="rounded-2xl p-8"
            style={{
              background: 'rgba(124,58,237,0.05)',
              border: '1px solid rgba(124,58,237,0.15)',
            }}
          >
            <h2 className="text-base font-semibold text-white mb-5">
              Sectors we work with
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {INDUSTRIES.map((ind) => (
                <div
                  key={ind.label}
                  className="flex items-center gap-3"
                >
                  <div
                    className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent flex-shrink-0"
                    aria-hidden="true"
                  >
                    {ind.icon}
                  </div>
                  <span className="text-sm text-white/60 font-medium">
                    {ind.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection className="mt-5 mb-16">
          <div
            className="rounded-2xl p-10 text-center"
            style={{
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.07)',
            }}
          >
            <h2 className="text-2xl font-bold text-white mb-4">
              Ready to build qualified pipeline?
            </h2>
            <p className="text-white/50 mb-8 max-w-md mx-auto leading-relaxed">
              Book a no-obligation strategy call. If there is a fit, we will
              tell you. If there is not, we will tell you that too.
            </p>
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
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
