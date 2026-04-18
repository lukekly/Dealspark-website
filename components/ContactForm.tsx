'use client';

import { useState } from 'react';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

const inputClass =
  'w-full bg-white/[0.04] border border-white/[0.09] rounded-xl px-4 py-3.5 text-white placeholder-white/30 text-sm focus:outline-none focus:border-accent/50 focus:bg-white/[0.06] transition-all duration-200';
const labelClass =
  'block text-xs font-semibold text-white/50 uppercase tracking-wider mb-2';

export default function ContactForm() {
  const [state, setState] = useState<FormState>('idle');
  const [fields, setFields] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState('submitting');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fields),
      });

      if (res.ok) {
        setState('success');
      } else {
        setState('error');
      }
    } catch {
      setState('error');
    }
  };

  if (state === 'success') {
    return (
      <div className="flex flex-col items-center justify-center min-h-[420px] text-center px-4">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
          style={{
            background: 'rgba(124,58,237,0.15)',
            border: '1px solid rgba(124,58,237,0.3)',
          }}
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#a78bfa"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">
          Message received
        </h3>
        <p className="text-white/50 max-w-sm leading-relaxed">
          Thanks for getting in touch. We&apos;ll review your details and be in
          touch within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className={labelClass}>
            Full Name <span className="text-accent">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={fields.name}
            onChange={handleChange}
            placeholder="Jane Smith"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="company" className={labelClass}>
            Company <span className="text-accent">*</span>
          </label>
          <input
            id="company"
            name="company"
            type="text"
            required
            value={fields.company}
            onChange={handleChange}
            placeholder="Acme Corp"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>
          Work Email <span className="text-accent">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={fields.email}
          onChange={handleChange}
          placeholder="jane@company.com"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="phone" className={labelClass}>
          Phone Number
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={fields.phone}
          onChange={handleChange}
          placeholder="+353 1 234 5678"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          What are you trying to achieve?{' '}
          <span className="text-accent">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          value={fields.message}
          onChange={handleChange}
          placeholder="Tell us about your outbound goals, current challenges, or what you're looking to build..."
          className={`${inputClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={state === 'submitting'}
        className="btn-primary w-full justify-center py-4 text-base disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {state === 'submitting' ? (
          <>
            <svg
              className="animate-spin"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M21 12a9 9 0 1 1-6.219-8.56" />
            </svg>
            Sending...
          </>
        ) : (
          <>
            Send Message
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
          </>
        )}
      </button>

      {state === 'error' && (
        <p className="text-sm text-red-400/80 text-center">
          Something went wrong. Please try again or email us at{' '}
          <a
            href="mailto:support@dealspark.io"
            className="underline hover:text-red-300 transition-colors"
          >
            support@dealspark.io
          </a>
        </p>
      )}
    </form>
  );
}
