import type { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';

export const metadata: Metadata = {
  title: 'Cold Calling Agency Ireland',
  description:
    'B2B cold calling for Irish companies. DealSpark generates qualified pipeline through cold calling, email, and LinkedIn across Ireland.',
  alternates: { canonical: 'https://dealspark.io/cold-calling-ireland' },
};

const sections = [
  {
    heading: 'Cold Calling for B2B Companies in Ireland',
    body: [
      'Cold calling is the most direct form of B2B outbound. A real conversation with a real decision-maker, in real time, with the ability to qualify, handle objections, and open a commercial relationship in a single interaction.',
      'DealSpark works with B2B companies across Ireland, including Dublin-based firms, regionally headquartered businesses, and companies trading internationally from the Irish market. Every call is made by a practitioner who understands the buyer, the context, and what a productive conversation looks like.',
    ],
  },
  {
    heading: 'Multichannel Outreach Across Calls, Email, and LinkedIn',
    body: [
      'DealSpark runs calls, email, and LinkedIn across the right contacts depending on what each channel does best for each audience. Cold calling creates direct commercial openings. Email reaches prospects who engage better in writing. LinkedIn builds context and maintains visibility across the buying cycle.',
      'Each channel reinforces the others. The combination creates multiple points of contact without forcing a rigid outreach order.',
    ],
  },
  {
    heading: 'Quality Over Volume',
    body: [
      'Most cold calling services are built on volume. High dial counts, templated scripts, and dashboards that measure activity rather than commercial outcomes. DealSpark measures the quality and relevance of each conversation.',
      'Every call is handled by a practitioner who understands your buyer, your market, and what a productive conversation looks like. In the Irish B2B market, where trust and reputation carry weight, the quality of the first conversation matters.',
    ],
  },
  {
    heading: 'ICP-First Targeting with Clay-Powered Data',
    body: [
      'Before a single call is made, DealSpark defines your Ideal Customer Profile with precision. The right company type, the right decision-maker titles, and the commercial triggers that indicate a buyer is ready for your offer.',
      'Clay-powered data enrichment means every prospect on the list is there for a reason. Not just a name and a number, but an enriched contact with firmographic data, technology signals, and growth indicators that confirm fit before outreach begins.',
    ],
  },
  {
    heading: 'Consistent Qualified Pipeline',
    body: [
      'DealSpark has delivered consistent qualified pipeline for B2B clients across SaaS, professional services, and training sectors. Cold calling, email, and LinkedIn run across the right contacts to maximise the conversion opportunity.',
      'Engagements are built around your ICP, your market, and your close cycle. DealSpark works with a select number of clients at any one time to ensure every engagement receives full attention.',
    ],
  },
];

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Cold Calling Agency Ireland',
  provider: { '@type': 'Organization', name: 'DealSpark', url: 'https://dealspark.io' },
  serviceType: 'B2B Cold Calling',
  areaServed: { '@type': 'Country', name: 'Ireland' },
  description:
    'B2B cold calling for Irish companies. DealSpark generates qualified pipeline through cold calling, email, and LinkedIn.',
  url: 'https://dealspark.io/cold-calling-ireland',
};

export default function ColdCallingIrelandPage() {
  return (
    <ServicePage
      h1="Cold Calling Agency Ireland"
      badge="Cold Calling"
      geo="Ireland"
      intro="B2B cold calling for Irish companies. DealSpark runs calls, email, and LinkedIn across the right contacts to generate consistent qualified pipeline."
      sections={sections}
      schemaJson={schema}
    />
  );
}
