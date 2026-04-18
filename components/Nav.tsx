'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 nav-blur transition-all duration-300 ${
        scrolled
          ? 'bg-background/90 border-b border-white/[0.06]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center transition-all duration-200 group-hover:bg-accent-hover group-hover:scale-105">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="white"
                aria-hidden="true"
              >
                <path d="M13 2L4.09 12.97H11L10 22L20.91 11H14L13 2Z" />
              </svg>
            </div>
            <span className="text-white font-bold text-lg tracking-tight">
              DealSpark
            </span>
          </Link>

          {/* Desktop nav links */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            <Link
              href="/#how-it-works"
              className="text-sm text-white/60 hover:text-white transition-colors duration-200 font-medium"
            >
              How It Works
            </Link>
            <Link
              href="/case-study/lennox-academy"
              className="text-sm text-white/60 hover:text-white transition-colors duration-200 font-medium"
            >
              Case Studies
            </Link>
            <Link
              href="/about"
              className="text-sm text-white/60 hover:text-white transition-colors duration-200 font-medium"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-sm text-white/60 hover:text-white transition-colors duration-200 font-medium"
            >
              Contact
            </Link>
          </nav>

          {/* CTA + mobile menu */}
          <div className="flex items-center gap-4">
            <a
              href="https://calendly.com/dealspark/strategy-call"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary hidden md:inline-flex text-sm py-2.5 px-5"
            >
              Book a Call
            </a>

            {/* Hamburger */}
            <button
              className="md:hidden flex flex-col gap-1.5 p-1"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <span
                className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
              />
              <span
                className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}
              />
              <span
                className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-72 border-b border-white/[0.06]' : 'max-h-0'
        }`}
      >
        <nav className="bg-background/95 nav-blur px-6 py-4 flex flex-col gap-4">
          <Link
            href="/#how-it-works"
            className="text-sm text-white/60 hover:text-white transition-colors py-2 font-medium"
            onClick={() => setMenuOpen(false)}
          >
            How It Works
          </Link>
          <Link
            href="/case-study/lennox-academy"
            className="text-sm text-white/60 hover:text-white transition-colors py-2 font-medium"
            onClick={() => setMenuOpen(false)}
          >
            Case Studies
          </Link>
          <Link
            href="/about"
            className="text-sm text-white/60 hover:text-white transition-colors py-2 font-medium"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-sm text-white/60 hover:text-white transition-colors py-2 font-medium"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
          <a
            href="https://calendly.com/dealspark/strategy-call"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm w-full justify-center mt-2"
            onClick={() => setMenuOpen(false)}
          >
            Book a Call
          </a>
        </nav>
      </div>
    </header>
  );
}
