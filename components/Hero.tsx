import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden grid-texture pt-16">
      {/* Background orbs */}
      <div
        className="orb w-[700px] h-[700px] top-[-200px] left-1/2 -translate-x-1/2"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 70%)' }}
        aria-hidden="true"
      />
      <div
        className="orb w-[400px] h-[400px] bottom-[10%] right-[-100px]"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center pb-24">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <span className="section-label animate-fade-in flex items-center gap-1.5">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="none" aria-hidden="true" className="text-accent">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
            Outbound That Actually Works
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] tracking-tight mb-8">
          <span className="gradient-text-white">We Run Your Outbound.</span>
          <br />
          <span className="gradient-text">You Focus on Closing.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed mb-10">
          From ICP strategy and Clay-powered targeting to multichannel
          execution across calls, email, and LinkedIn, DealSpark operates
          your outbound so pipeline becomes predictable.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/contact" className="btn-primary text-base py-3.5 px-7">
            See If We&apos;re A Fit
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
          <Link href="/case-study/lennox-academy" className="btn-outline text-base py-3.5 px-7">
            View Case Study
          </Link>
        </div>


      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/25" aria-hidden="true">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/25 to-transparent" />
      </div>
    </section>
  );
}
