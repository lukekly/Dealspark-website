'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('ds_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('ds_cookie_consent', 'accepted');
    setDismissed(true);
    setTimeout(() => setVisible(false), 400);
  };

  const decline = () => {
    localStorage.setItem('ds_cookie_consent', 'declined');
    setDismissed(true);
    setTimeout(() => setVisible(false), 400);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      aria-live="polite"
      className={`cookie-banner transition-all duration-500 ${
        visible && !dismissed ? 'visible' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-sm text-white/70 leading-relaxed">
            We use cookies to improve your experience on our site. By continuing
            to browse, you agree to our use of cookies.{' '}
            <Link
              href="/privacy"
              className="text-accent hover:text-purple-300 underline underline-offset-2 transition-colors"
            >
              Privacy Policy
            </Link>
          </p>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          <button
            onClick={decline}
            className="text-sm text-white/40 hover:text-white/70 transition-colors px-4 py-2 rounded-lg"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="btn-primary text-sm py-2 px-5"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
