import AnimatedSection from './AnimatedSection';

const oldApproach = [
  'Volume metrics over quality outcomes',
  'Spray and pray messaging',
  'Off-brand, templated scripts',
  'Chasing activity, not pipeline',
  'Junior reps reading from a list',
  'Disconnected tools and no strategy',
];

const dealsparkStandard = [
  'ICP-first targeting with intent signals',
  'Commercially grounded execution, every campaign',
  'Brand-safe, personalised messaging',
  'Pipeline value, not vanity meetings',
  'Full visibility into every touchpoint',
  'Strategy, systems, and accountability',
];

const CrossIcon = () => (
  <svg
    className="cross-icon mt-0.5"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    aria-hidden="true"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const CheckIcon = () => (
  <svg
    className="check-icon mt-0.5"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default function OldVsNew() {
  return (
    <section
      className="py-24 lg:py-32 relative overflow-hidden"
      aria-labelledby="comparison-heading"
    >
      {/* Gradient backdrop */}
      <div
        className="absolute inset-0 grid-texture opacity-50"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-14">
          <div className="flex justify-center mb-5">
            <span className="section-label">Why DealSpark</span>
          </div>
          <h2
            id="comparison-heading"
            className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight"
          >
            The standard has changed.{' '}
            <span className="gradient-text">Have you?</span>
          </h2>
        </AnimatedSection>

        {/* Comparison cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Old approach */}
          <AnimatedSection delay={0}>
            <div className="card-static p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <CrossIcon />
                </div>
                <h3 className="text-lg font-semibold text-white/60">
                  The Old Approach
                </h3>
              </div>
              <ul className="space-y-4" aria-label="Old approach drawbacks">
                {oldApproach.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CrossIcon />
                    <span className="text-sm text-white/40 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          {/* DealSpark standard */}
          <AnimatedSection delay={120}>
            <div
              className="p-8 h-full rounded-2xl relative overflow-hidden"
              style={{
                background:
                  'linear-gradient(135deg, rgba(124,58,237,0.12) 0%, rgba(124,58,237,0.04) 100%)',
                border: '1px solid rgba(124,58,237,0.25)',
              }}
            >
              {/* Glow */}
              <div
                className="absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl opacity-30"
                style={{ background: 'radial-gradient(circle, #7c3aed, transparent)' }}
                aria-hidden="true"
              />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center">
                    <CheckIcon />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    The DealSpark Standard
                  </h3>
                </div>
                <ul className="space-y-4" aria-label="DealSpark advantages">
                  {dealsparkStandard.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckIcon />
                      <span className="text-sm text-white/80 leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
