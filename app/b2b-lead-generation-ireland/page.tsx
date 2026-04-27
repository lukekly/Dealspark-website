import type { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';

export const metadata: Metadata = {
  title: 'B2B Lead Generation Ireland',
  description:
    'B2B lead generation for Irish companies. Qualified pipeline through cold calling, email, and LinkedIn with Clay-powered targeting behind every campaign.',
  alternates: { canonical: 'https://www.dealspark.io/b2b-lead-generation-ireland' },
};

const sections = [
  {
    heading: 'B2B Lead Generation in Ireland',
    body: [
      'Generating qualified B2B pipeline in Ireland requires more than bought contact lists and templated outreach. It requires commercial judgment, precise targeting, and messaging that is relevant to the specific context of each buyer.',
      'DealSpark works with B2B companies in Ireland to build a consistent pipeline of qualified conversations through calls, email, and LinkedIn.',
    ],
  },
  {
    heading: 'Multichannel Outreach Across Calls, Email, and LinkedIn',
    body: [
      'DealSpark runs calls, email, and LinkedIn across the right contacts depending on what each channel does best for each audience. Cold calling creates direct commercial conversations. Email reaches prospects who respond better in writing. LinkedIn builds context and maintains visibility across the buying cycle.',
      'Each channel reinforces the others. The combination creates multiple points of contact with each prospect without forcing a rigid outreach order.',
    ],
  },
  {
    heading: 'Clay-Powered Targeting and ICP Precision',
    body: [
      'Lead generation is only as good as the targeting behind it. Before any outreach begins, DealSpark defines your Ideal Customer Profile at a granular level: the right company types, the right titles, and the commercial triggers that indicate a buyer is ready to engage.',
      'Clay-powered data enrichment builds a prospect list that reflects current market reality. Firmographic data, technology signals, hiring patterns, and growth indicators are all used to validate fit before the first touchpoint is made.',
    ],
  },
  {
    heading: 'Precision Over Volume',
    body: [
      'Volume-led lead generation relies on scale to compensate for low conversion. More contacts, more touchpoints, more noise. DealSpark takes the opposite approach: fewer, better-targeted prospects, reached with commercially intelligent outreach.',
      'DealSpark has delivered consistent qualified pipeline for B2B clients across SaaS, professional services, and training sectors in Ireland and internationally. The output is real commercial conversations with buyers who fit your profile and have the authority and budget to move forward.',
    ],
  },
];

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'B2B Lead Generation Ireland',
  provider: { '@type': 'Organization', name: 'DealSpark', url: 'https://www.dealspark.io' },
  serviceType: 'B2B Lead Generation',
  areaServed: { '@type': 'Country', name: 'Ireland' },
  description:
    'B2B lead generation for Irish companies. Cold calling, email, and LinkedIn outbound to build qualified pipeline.',
  url: 'https://www.dealspark.io/b2b-lead-generation-ireland',
};

export default function B2BLeadGenerationIrelandPage() {
  return (
    <ServicePage
      h1="B2B Lead Generation Ireland"
      badge="Lead Generation"
      geo="Ireland"
      intro="B2B lead generation for companies in Ireland. DealSpark builds qualified pipeline through calls, email, and LinkedIn, with Clay-powered targeting behind every campaign."
      sections={sections}
      schemaJson={schema}
    />
  );
}
