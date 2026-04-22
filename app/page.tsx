import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import PainSection from '@/components/PainSection';
import HowItWorks from '@/components/HowItWorks';
import OldVsNew from '@/components/OldVsNew';
import CaseStudyPreview from '@/components/CaseStudyPreview';
import Industries from '@/components/Industries';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';

export const metadata: Metadata = {
  title: {
    absolute:
      'DealSpark | B2B Lead Generation and Cold Calling Agency | Ireland, UK and USA',
  },
  description:
    'DealSpark is a senior B2B outbound partner delivering qualified pipeline through cold calling, email, and LinkedIn. Serving clients across Ireland, UK, and USA.',
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'DealSpark',
  url: 'https://dealspark.io',
  email: 'support@dealspark.io',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Unit 2, 12A Lower Main Street',
    addressLocality: 'Lucan',
    addressRegion: 'Dublin',
    postalCode: 'K78 X5P8',
    addressCountry: 'IE',
  },
  serviceType: [
    'B2B Lead Generation',
    'Cold Calling',
    'Appointment Setting',
    'Outbound Sales',
    'GTM Engineering',
  ],
  areaServed: ['Ireland', 'United Kingdom', 'United States'],
  sameAs: ['https://www.linkedin.com/company/deal-spark/'],
};

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'DealSpark',
  url: 'https://dealspark.io',
  logo: 'https://dealspark.io/logo.png',
  email: 'support@dealspark.io',
  sameAs: ['https://www.linkedin.com/company/deal-spark/'],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <Hero />
      <PainSection />
      <CaseStudyPreview />
      <Industries />
      <OldVsNew />
      <HowItWorks />
      <FAQ />
      <FinalCTA />
    </>
  );
}
