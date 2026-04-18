import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-12 pb-6">

        {/* Top row: brand, nav, social */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 mb-10">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center transition-all duration-200 group-hover:bg-accent-hover">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                <path d="M13 2L4.09 12.97H11L10 22L20.91 11H14L13 2Z" />
              </svg>
            </div>
            <span className="text-white font-bold text-lg tracking-tight">DealSpark</span>
          </Link>

          {/* Nav links */}
          <nav
            className="flex flex-wrap justify-center gap-x-6 gap-y-3"
            aria-label="Footer navigation"
          >
            <Link href="/#how-it-works" className="text-sm text-white/50 hover:text-white transition-colors">
              How It Works
            </Link>
            <Link href="/case-study/lennox-academy" className="text-sm text-white/50 hover:text-white transition-colors">
              Case Studies
            </Link>
            <Link href="/about" className="text-sm text-white/50 hover:text-white transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-sm text-white/50 hover:text-white transition-colors">
              Contact
            </Link>
            <Link href="/privacy" className="text-sm text-white/50 hover:text-white transition-colors">
              Privacy and Cookie Policy
            </Link>
          </nav>

          {/* Social */}
          <div className="flex items-center gap-4 flex-shrink-0">
            <a
              href="https://www.linkedin.com/company/deal-spark/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="DealSpark on LinkedIn"
              className="w-9 h-9 flex items-center justify-center rounded-lg border border-white/[0.08] text-white/50 hover:text-white hover:border-accent hover:bg-accent/10 transition-all duration-200"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
        </div>

        {/* Services — Ireland row */}
        <div className="border-t border-white/[0.04] pt-6 mb-2">
          <nav
            className="flex flex-wrap gap-x-5 gap-y-2"
            aria-label="Services Ireland"
          >
            <span className="text-xs text-white/30">Ireland</span>
            {[
              { label: 'Cold Calling', href: '/cold-calling-ireland' },
              { label: 'B2B Lead Generation', href: '/b2b-lead-generation-ireland' },
              { label: 'Appointment Setting', href: '/appointment-setting-ireland' },
              { label: 'Outbound Sales Agency', href: '/outbound-sales-agency-ireland' },
              { label: 'GTM Engineering', href: '/gtm-engineering-ireland' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs text-white/30 hover:text-white/55 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Services — UK row */}
        <div className="mb-6">
          <nav
            className="flex flex-wrap gap-x-5 gap-y-2"
            aria-label="Services United Kingdom"
          >
            <span className="text-xs text-white/30">United Kingdom</span>
            {[
              { label: 'Cold Calling', href: '/cold-calling-uk' },
              { label: 'B2B Lead Generation', href: '/b2b-lead-generation-uk' },
              { label: 'Appointment Setting', href: '/appointment-setting-uk' },
              { label: 'Outbound Sales Agency', href: '/outbound-sales-agency-uk' },
              { label: 'GTM Engineering', href: '/gtm-engineering-uk' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs text-white/30 hover:text-white/55 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="divider mb-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            &copy; 2026 DealSpark Ltd. All rights reserved.
          </p>
          <p className="text-xs text-white/30">
            dealspark.io
          </p>
        </div>
      </div>
    </footer>
  );
}
