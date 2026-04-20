import Link from 'next/link';
import AnimatedSection from './AnimatedSection';

const stats = [
  { value: '€390k', label: 'Pipeline Generated' },
  { value: '20', label: 'Qualified Opportunities' },
  { value: '4 Months', label: 'Time to Results' },
];

const comingSoon = [
  {
    id: 'sr',
    initials: 'SR',
    sector: 'Digital Marketing Agency',
    headline: 'Qualified Pipeline for a Growing Agency',
    description:
      'A digital marketing agency had strong creative output but no structured outbound. DealSpark built and ran their outbound from scratch, targeting B2B decision-makers in need of agency services.',
  },
  {
    id: 'tr',
    initials: 'TR',
    sector: 'Technical Recruitment',
    headline: 'Consistent Client Pipeline',
    description:
      'A technical recruitment firm were expanding the business in a new market. DealSpark built separate outbound tracks for each persona, running independent multichannel campaigns to each audience.',
  },
];

export default function CaseStudyPreview() {
  return (
    <section
      className="py-24 lg:py-32"
      aria-labelledby="case-study-preview-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-14">
          <div className="flex justify-center mb-5">
            <span className="section-label">Case Studies</span>
          </div>
          <h2
            id="case-study-preview-heading"
            className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight"
          >
            Results you can{' '}
            <span className="gradient-text">point to.</span>
          </h2>
        </AnimatedSection>

        {/* Lennox Academy card */}
        <AnimatedSection delay={100}>
          <div
            className="rounded-3xl overflow-hidden relative mb-6"
            style={{
              background: 'linear-gradient(135deg, #111118 0%, #16161f 100%)',
              border: '1px solid rgba(255,255,255,0.07)',
            }}
          >
            {/* Top accent bar */}
            <div
              className="h-1 w-full"
              style={{
                background: 'linear-gradient(90deg, #7c3aed, #a78bfa, #7c3aed)',
              }}
              aria-hidden="true"
            />

            <div className="p-8 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Left column */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold"
                      style={{
                        background: 'rgba(124,58,237,0.15)',
                        border: '1px solid rgba(124,58,237,0.25)',
                        color: '#a78bfa',
                      }}
                    >
                      LA
                    </div>
                    <div>
                      <p className="text-xs text-white/40 uppercase tracking-wider font-medium">
                        Client
                      </p>
                      <p className="text-sm font-semibold text-white">
                        The Lennox Academy
                      </p>
                    </div>
                  </div>

                  <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                    €390k Pipeline in{' '}
                    <span className="gradient-text">4 Months</span>
                  </h3>

                  <p className="text-white/55 leading-relaxed mb-8">
                    The Lennox Academy provides revenue enablement and GTM
                    training for high-growth SaaS companies, including
                    Salesforce, Gong, and LinkedIn. Their own outbound was
                    converting well, but execution capacity and top-of-funnel
                    predictability were the constraint. Two previous outsourced
                    outbound providers had failed to meet their standards before
                    DealSpark stepped in as a trusted GTM partner.
                  </p>

                  {/* Quote */}
                  <blockquote className="quote-block mb-8">
                    <p className="text-white/80 text-sm leading-relaxed italic mb-4">
                      &ldquo;The biggest thing I can say about the relationship
                      is trust. We have 100% trust in Luke. It feels like
                      working with an employee of Lennox Academy, an extension
                      of what we do.&rdquo;
                    </p>
                    <footer>
                      <p className="text-white font-semibold text-sm">
                        Stuart Taylor
                      </p>
                      <p className="text-white/40 text-xs">
                        Chief Revenue Officer, The Lennox Academy
                      </p>
                    </footer>
                  </blockquote>

                  <Link
                    href="/case-study/lennox-academy"
                    className="btn-primary"
                  >
                    Read the Full Case Study
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>

                {/* Right column: stats */}
                <div className="flex flex-col gap-4">
                  {stats.map((stat, index) => (
                    <div
                      key={stat.label}
                      className="p-6 rounded-2xl"
                      style={{
                        background:
                          index === 0
                            ? 'linear-gradient(135deg, rgba(124,58,237,0.2) 0%, rgba(124,58,237,0.08) 100%)'
                            : 'rgba(255,255,255,0.03)',
                        border:
                          index === 0
                            ? '1px solid rgba(124,58,237,0.3)'
                            : '1px solid rgba(255,255,255,0.06)',
                      }}
                    >
                      <p
                        className={`text-4xl font-bold mb-1 ${
                          index === 0 ? 'gradient-text' : 'text-white'
                        }`}
                      >
                        {stat.value}
                      </p>
                      <p className="text-sm text-white/50 font-medium">
                        {stat.label}
                      </p>
                    </div>
                  ))}

                  <div
                    className="p-6 rounded-2xl"
                    style={{
                      background: 'rgba(255,255,255,0.02)',
                      border: '1px solid rgba(255,255,255,0.06)',
                    }}
                  >
                    <p className="text-xs text-white/30 uppercase tracking-wider font-semibold mb-2">
                      Sector
                    </p>
                    <p className="text-white font-medium">
                      B2B SaaS · Technology
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Coming Soon cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
          {comingSoon.map((cs, index) => (
            <AnimatedSection key={cs.id} delay={150 + index * 100}>
              <div
                className="rounded-3xl overflow-hidden relative"
                style={{
                  background: 'linear-gradient(135deg, #111118 0%, #16161f 100%)',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                {/* Top accent bar — muted */}
                <div
                  className="h-1 w-full"
                  style={{
                    background:
                      'linear-gradient(90deg, rgba(124,58,237,0.3), rgba(124,58,237,0.15), rgba(124,58,237,0.3))',
                  }}
                  aria-hidden="true"
                />

                <div className="p-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-start">
                    {/* Left: content */}
                    <div>
                      <div className="flex items-center justify-between mb-5">
                        <div className="flex items-center gap-3">
                          <div
                            className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold"
                            style={{
                              background: 'rgba(255,255,255,0.04)',
                              border: '1px solid rgba(255,255,255,0.08)',
                              color: 'rgba(255,255,255,0.25)',
                            }}
                          >
                            {cs.initials}
                          </div>
                          <div>
                            <p className="text-xs text-white/25 uppercase tracking-wider font-medium">
                              Client hidden
                            </p>
                            <p className="text-sm font-semibold text-white/35">
                              {cs.sector}
                            </p>
                          </div>
                        </div>
                        <span
                          className="text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full flex-shrink-0"
                          style={{
                            background: 'rgba(124,58,237,0.1)',
                            border: '1px solid rgba(124,58,237,0.2)',
                            color: 'rgba(167,139,250,0.7)',
                          }}
                        >
                          Coming Soon
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-white/50 mb-3 leading-snug">
                        {cs.headline}
                      </h3>

                      <p className="text-sm text-white/30 leading-relaxed">
                        {cs.description}
                      </p>
                    </div>

                    {/* Right: blurred stats placeholder */}
                    <div
                      className="flex flex-col gap-3 pointer-events-none select-none"
                      style={{ filter: 'blur(4px)', opacity: 0.35 }}
                      aria-hidden="true"
                    >
                      {[
                        { value: '—', label: 'Pipeline Generated' },
                        { value: '—', label: 'Qualified Opportunities' },
                        { value: '—', label: 'Time to Results' },
                      ].map((stat, i) => (
                        <div
                          key={stat.label}
                          className="p-5 rounded-2xl"
                          style={{
                            background:
                              i === 0
                                ? 'linear-gradient(135deg, rgba(124,58,237,0.15) 0%, rgba(124,58,237,0.06) 100%)'
                                : 'rgba(255,255,255,0.03)',
                            border:
                              i === 0
                                ? '1px solid rgba(124,58,237,0.2)'
                                : '1px solid rgba(255,255,255,0.05)',
                          }}
                        >
                          <p className="text-3xl font-bold mb-1 text-white">
                            {stat.value}
                          </p>
                          <p className="text-xs text-white/40 font-medium">
                            {stat.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
