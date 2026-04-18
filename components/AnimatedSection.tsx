'use client';

import { useEffect, useRef, ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  type?: 'fade-up' | 'fade-in';
}

export default function AnimatedSection({
  children,
  className = '',
  delay = 0,
  type = 'fade-up',
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const timeout = setTimeout(() => {
            el.classList.add('in-view');
          }, delay);
          observer.unobserve(el);
          return () => clearTimeout(timeout);
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`${type} ${className}`}>
      {children}
    </div>
  );
}
