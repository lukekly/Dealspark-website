import type { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';

export const metadata: Metadata = {
  title: 'GTM Engineering UK',
  description:
    'GTM Engineering for UK B2B companies. Clay-powered data enrichment, signal-based prospecting, and ICP mapping to produce better pipeline from outbound.',
  alternates: { canonical: 'https://www.dealspark.io/gtm-engineering-uk' },
};

const sections = [
  {
    heading: 'What GTM Engineering Is',
    body: [
      'GTM Engineering applies modern data tooling and commercial intelligence to identify, target, and engage your best-fit buyers. It combines ICP modelling, data enrichment, and buying signal analysis to ensure every outbound contact is selected with intent rather than scraped from a generic list.',
      'For UK B2B companies, GTM Engineering is the difference between outbound that generates noise and outbound that generates qualified pipeline.',
    ],
  },
  {
    heading: 'Clay-Powered Data Enrichment',
    body: [
      'DealSpark uses Clay to build and enrich prospect lists before any outreach begins. Clay pulls from dozens of data sources to validate firmographic fit, surface technology stack data, identify hiring signals, and flag growth indicators relevant to your offer.',
      'Every prospect in the outreach cycle has been enriched and validated. The result is a list that reflects current commercial reality, not a snapshot of who was available when the list was pulled.',
    ],
  },
  {
    heading: 'Signal-Based Prospecting for the UK Market',
    body: [
      'Timing matters in outbound. Signal-based prospecting means reaching out when a commercial trigger makes the conversation relevant. For UK buyers, common signals include recent hiring in relevant functions, technology migrations, funding rounds, market expansion, and leadership changes.',
      'Reaching a buyer when they have a live context for your offer changes the quality of the conversation entirely. The message resonates. The timing feels right. Conversion rates improve.',
    ],
  },
  {
    heading: 'ICP Mapping at Depth',
    body: [
      'GTM Engineering starts with a precise ICP. Not just industry and company size, but the specific company characteristics, buyer profiles, and commercial conditions that indicate a high-probability buyer for your specific offer in the UK market.',
      'That ICP drives every targeting decision throughout the campaign. Clay enrichment is applied against the ICP criteria to build a prospect list grounded in fit and intent from the outset.',
    ],
  },
  {
    heading: 'From GTM Engineering to Outbound Execution',
    body: [
      'Precise targeting without disciplined execution is wasted. DealSpark combines GTM Engineering with commercially grounded outbound execution: cold calling, email, and LinkedIn run across the right contacts depending on what each channel does best.',
      'The data identifies who to reach. The outreach ensures the conversation is worth having. For UK B2B companies, this combination produces qualified pipeline that reflects both the precision of the targeting and the quality of the outreach.',
    ],
  },
];

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'GTM Engineering Services UK',
  provider: { '@type': 'Organization', name: 'DealSpark', url: 'https://www.dealspark.io' },
  serviceType: 'GTM Engineering',
  areaServed: { '@type': 'Country', name: 'United Kingdom' },
  description:
    'GTM Engineering for UK B2B companies. Clay-powered data enrichment, signal-based prospecting, and ICP mapping for outbound.',
  url: 'https://www.dealspark.io/gtm-engineering-uk',
};

export default function GTMEngineeringUKPage() {
  return (
    <ServicePage
      h1="GTM Engineering Services UK"
      badge="GTM Engineering"
      geo="United Kingdom"
      intro="Clay-powered data enrichment, signal-based prospecting, and ICP mapping for UK B2B companies. GTM Engineering is how DealSpark ensures every outbound touchpoint starts from a position of commercial relevance."
      sections={sections}
      schemaJson={schema}
    />
  );
}
