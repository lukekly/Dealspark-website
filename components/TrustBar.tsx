import AnimatedSection from './AnimatedSection';

const placeholderLogos = [
  { id: 1, label: 'Client A', width: 110 },
  { id: 2, label: 'Client B', width: 90 },
  { id: 3, label: 'Client C', width: 120 },
  { id: 4, label: 'Client D', width: 100 },
  { id: 5, label: 'Client E', width: 95 },
];

export default function TrustBar() {
  return (
    <section className="py-16 border-y border-white/[0.05]" aria-label="Trusted by">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <p className="text-center text-xs font-semibold tracking-[0.15em] uppercase text-white/30 mb-10">
            Trusted by high-growth B2B companies
          </p>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {placeholderLogos.map((logo) => (
              <div
                key={logo.id}
                className="flex items-center justify-center opacity-30 hover:opacity-50 transition-opacity duration-300"
                aria-label={logo.label}
                style={{ width: logo.width }}
              >
                {/* Placeholder logo bar — replace with <Image> tags when logos are available */}
                <div
                  className="h-6 rounded-sm"
                  style={{
                    width: '100%',
                    background: 'linear-gradient(90deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.1) 100%)',
                  }}
                />
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
