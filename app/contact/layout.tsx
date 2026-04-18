import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact DealSpark | Book a Discovery Call',
  description:
    'Book a no-obligation discovery call with DealSpark. Tell us about your outbound goals and find out if we\'re the right fit for your business.',
  openGraph: {
    title: 'Contact DealSpark | Book a Discovery Call',
    description:
      'Book a no-obligation discovery call with DealSpark. Tell us about your outbound goals and find out if we\'re the right fit.',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
