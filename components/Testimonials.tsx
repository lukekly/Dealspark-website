import AnimatedSection from './AnimatedSection';

const testimonials = [
  {
    initials: 'ST',
    quote: "The biggest thing I can say about the relationship is trust. We have 100% trust in Luke. It feels like working with an employee of Lennox Academy, an extension of what we do.",
    name: 'Stuart Taylor',
    title: 'Chief Revenue Officer, The Lennox Academy',
  },
  {
    initials: 'CO',
    quote: "Luke has helped us reach companies that simply weren’t on our radar before. Complete transparency throughout, we can see exactly what’s working, what isn’t, and what we should change.",
    name: "Colm O’Mara",
    title: 'Director, RealTime Recruitment',
  },
];

export default function Testimonials() {
  return (
    <section className="py-12 lg:py-16" aria-label="Client testimonials">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {testimonials.map((t, i) => (
            <AnimatedSection key={t.initials} delay={i * 100}>
              <div
                className="rounded-2xl p-8 flex flex-col h-full relative overflow-hidden"
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
              >
                {/* Decorative quote mark */}
                <div
                  className="absolute top-5 right-7 text-6xl leading-none font-serif select-none"
                  style={{ color: 'rgba(124,58,237,0.15)' }}
                  aria-hidden="true"
                >
                  &ldquo;
                </div>

                <blockquote className="flex-1 mb-6">
                  <p className="text-white/75 leading-relaxed italic text-sm">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </blockquote>

                <footer className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center text-xs font-bold flex-shrink-0"
                    style={{
                      background: 'rgba(124,58,237,0.15)',
                      border: '1px solid rgba(124,58,237,0.25)',
                      color: '#a78bfa',
                    }}
                    aria-hidden="true"
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white leading-tight">{t.name}</p>
                    <p className="text-xs text-white/40 leading-tight mt-0.5">{t.title}</p>
                  </div>
                </footer>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
