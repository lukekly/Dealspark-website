import type { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';

export const metadata: Metadata = {
  title: 'GTM Engineering USA',
  description:
    'GTM Engineering for US B2B companies. Clay-powered data enrichment, signal-based prospecting, and ICP mapping to produce better pipeline from outbound.',
  alternates: { canonical: 'https://dealspark.io/gtm-engineering-usa' },
};

const sections = [
  {
    heading: 'What GTM Engineering Is',
    body: [
      'GTM Engineering is the application of modern data tooling and commercial intelligence to the process of identifying and engaging your best-fit buyers. It replaces generic list-building with precision targeting: ICP modelling, data enrichment, and signal-based prospecting combined into a pre-outreach process that determines fit before the first contact is made.',
      'For US B2B companies operating at scale, GTM Engineering is what separates outbound that generates pipeline from outbound that generates activity reports.',
    ],
  },
  {
    heading: 'Clay-Powered Data Enrichment',
    body: [
      'DealSpark uses Clay to build, enrich, and validate prospect lists before any outreach begins. Clay aggregates data from dozens of sources: firmographic data, technology stack, hiring signals, funding events, growth indicators, and more.',
      'In the US market, where buyer profiles vary significantly by vertical, company size, and geography, Clay-powered enrichment ensures the targeting reflects the specific ICP criteria defined for your offer, not a broad demographic approximation.',
    ],
  },
  {
    heading: 'Signal-Based Prospecting for the US Market',
    body: [
      'US enterprise buyers are busy and inundated with outreach. Reaching them at the right moment, with context that is relevant to a live commercial situation, is what creates conversations rather than ignored emails.',
      'DealSpark uses buying signals to determine timing: recent hiring in relevant functions, technology migrations, leadership changes, funding rounds, and market expansion activity. When outreach is timed to a real commercial trigger, the conversation lands differently.',
    ],
  },
  {
    heading: 'ICP Mapping for US Buyer Precision',
    body: [
      'The US market requires precise ICP definition. Company segments, buyer titles, company maturity, and the specific commercial conditions that indicate your ideal buyer all need to be mapped before targeting can begin.',
      'DealSpark works with you to define that ICP in depth, then uses Clay to build a prospect list that reflects it. The result is a tightly defined pool of contacts selected for fit and intent.',
    ],
  },
  {
    heading: 'From GTM Engineering to Outbound Execution',
    body: [
      'Precise targeting without disciplined execution produces nothing. DealSpark combines GTM Engineering with commercially grounded outbound execution: cold calling, email, and LinkedIn run across the right contacts depending on what each channel does best.',
      'For US B2B companies, this combination produces qualified pipeline grounded in real commercial intelligence. The targeting ensures relevance. The outreach ensures the conversation is worth having.',
    ],
  },
];

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'GTM Engineering Services USA',
  provider: { '@type': 'Organization', name: 'DealSpark', url: 'https://dealspark.io' },
  serviceType: 'GTM Engineering',
  areaServed: { '@type': 'Country', name: 'United States' },
  description:
    'GTM Engineering for US B2B companies. Clay-powered data enrichment, signal-based prospecting, and ICP mapping for outbound.',
  url: 'https://dealspark.io/gtm-engineering-usa',
};

export default function GTMEngineeringUSAPage() {
  return (
    <ServicePage
      h1="GTM Engineering Services USA"
      badge="GTM Engineering"
      geo="USA"
      intro="Clay-powered data enrichment, signal-based prospecting, and ICP mapping for B2B companies across the USA. GTM Engineering is how DealSpark ensures every outbound touchpoint starts from a position of commercial relevance."
      sections={sections}
      schemaJson={schema}
    />
  );
}
