import type { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';

export const metadata: Metadata = {
  title: 'GTM Engineering Ireland',
  description:
    'GTM Engineering for Irish B2B companies. Clay-powered data enrichment, signal-based prospecting, and ICP mapping to produce better pipeline from outbound.',
  alternates: { canonical: 'https://dealspark.io/gtm-engineering-ireland' },
};

const sections = [
  {
    heading: 'What GTM Engineering Is',
    body: [
      'GTM Engineering applies modern data tooling and commercial intelligence to the process of identifying, targeting, and engaging your ideal buyers. It sits between traditional sales operations and outbound execution, using enrichment tools, buying signals, and ICP modelling to ensure every outbound touchpoint starts from a position of relevance.',
      'For Irish B2B companies, GTM Engineering means reaching the right companies at the right time with the right message, instead of working through a static contact list and hoping for conversions.',
    ],
  },
  {
    heading: 'Clay-Powered Data Enrichment',
    body: [
      'DealSpark uses Clay to enrich and validate prospect data before any outreach begins. Clay aggregates data from dozens of sources, allowing us to build precise, up-to-date prospect lists enriched with firmographic data, technology signals, hiring indicators, and growth activity.',
      'Every contact that enters the outreach cycle has been validated against your ICP. Not just a job title and a company name, but a full commercial picture that confirms fit before the first call is made.',
    ],
  },
  {
    heading: 'Signal-Based Prospecting',
    body: [
      'Signal-based prospecting means reaching out to buyers when the timing is commercially relevant, not just when they appear on a list. Common signals DealSpark uses include recent hiring activity in relevant functions, technology stack changes, company growth indicators, new funding events, and market expansion activity.',
      'When outreach is timed to a real commercial trigger, the conversation is more likely to land. The prospect already has context. The message resonates more naturally. The result is better conversion from the same level of outreach effort.',
    ],
  },
  {
    heading: 'ICP Mapping at Depth',
    body: [
      'ICP mapping is the foundation of GTM Engineering. Before any outreach begins, DealSpark works with you to define your ideal customer profile at granular depth. Not just industry and company size, but the specific conditions that indicate a high-probability buyer for your offer.',
      'That ICP is used to filter and enrich a prospect list using Clay and additional data sources. The result is a tightly defined, data-rich prospect pool that reflects genuine commercial fit, not broad demographic targeting.',
    ],
  },
  {
    heading: 'From GTM Engineering to Outbound Execution',
    body: [
      'GTM Engineering alone does not generate pipeline. The data and targeting work is valuable precisely because it feeds into a disciplined outbound execution process: cold calling, email, and LinkedIn run across the right contacts depending on what each channel does best.',
      'DealSpark combines GTM Engineering with commercially grounded outbound execution for Irish B2B companies. The targeting is precise. The outreach is relevant. And the output is qualified pipeline that reflects both the quality of the data and the quality of the conversations.',
    ],
  },
];

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'GTM Engineering Services Ireland',
  provider: { '@type': 'Organization', name: 'DealSpark', url: 'https://dealspark.io' },
  serviceType: 'GTM Engineering',
  areaServed: { '@type': 'Country', name: 'Ireland' },
  description:
    'GTM Engineering for Irish B2B companies. Clay-powered data enrichment, signal-based prospecting, and ICP mapping for outbound.',
  url: 'https://dealspark.io/gtm-engineering-ireland',
};

export default function GTMEngineeringIrelandPage() {
  return (
    <ServicePage
      h1="GTM Engineering Services Ireland"
      badge="GTM Engineering"
      geo="Ireland"
      intro="Clay-powered data enrichment, signal-based prospecting, and ICP mapping for Irish B2B companies. GTM Engineering is how DealSpark ensures every outbound touchpoint starts from a position of commercial relevance."
      sections={sections}
      schemaJson={schema}
    />
  );
}
