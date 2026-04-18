import type { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';

export const metadata: Metadata = {
  title: 'Outbound Sales Agency Ireland',
  description:
    'B2B outbound sales agency based in Ireland. Cold calling, email, and LinkedIn to generate qualified pipeline for Irish B2B companies.',
  alternates: { canonical: 'https://dealspark.io/outbound-sales-agency-ireland' },
};

const sections = [
  {
    heading: 'What an Outbound Sales Agency Should Do',
    body: [
      'An outbound sales agency should extend your commercial capacity without lowering your standards. It should operate as a partner who understands your market, your buyers, and your brand, and executes outbound to the same quality you would expect of your best internal hire.',
      'Most outbound agencies do not deliver that. They deliver volume: high activity, generic outreach, and reporting dashboards that measure effort rather than commercial outcomes.',
    ],
  },
  {
    heading: 'DealSpark as Your Outbound Partner in Ireland',
    body: [
      'DealSpark works with B2B companies in Ireland as a commercial outbound partner. Not a vendor, not a managed service. A commercial operator who leads your outbound motion end-to-end, from ICP definition and targeting to cold calling, email, and LinkedIn execution.',
      'Engagements are built around your business, your market, and your close cycle. DealSpark works with a select number of clients at any one time to ensure every engagement receives full attention.',
    ],
  },
  {
    heading: 'Commercially Grounded Execution, Not Junior Headcount',
    body: [
      'The outbound agency model is typically built on junior SDRs managed by a campaign team. High turnover, inconsistent quality, and performance that declines over time as early momentum fades.',
      'DealSpark operates without a junior team. Every call, every follow-up, and every strategic decision in the outbound cycle is handled by a practitioner who understands your buyer, your market, and what a productive outbound motion looks like. For Irish B2B companies where brand reputation matters, this distinction is significant.',
    ],
  },
  {
    heading: 'GTM Engineering Behind Every Campaign',
    body: [
      'Before any outreach begins, DealSpark applies GTM Engineering principles to the targeting. Clay-powered data enrichment builds a prospect list grounded in real firmographic fit, technology signals, and commercial intent.',
      'The result is outbound that is precise from the start. The right companies, the right buyers, the right timing. Every touchpoint is commercially relevant because the targeting work was done before the first call was made.',
    ],
  },
];

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Outbound Sales Agency Ireland',
  provider: { '@type': 'Organization', name: 'DealSpark', url: 'https://dealspark.io' },
  serviceType: 'Outbound Sales',
  areaServed: { '@type': 'Country', name: 'Ireland' },
  description:
    'Outbound sales agency for Irish B2B companies. Cold calling, email, and LinkedIn to generate qualified pipeline.',
  url: 'https://dealspark.io/outbound-sales-agency-ireland',
};

export default function OutboundSalesAgencyIrelandPage() {
  return (
    <ServicePage
      h1="Outbound Sales Agency Ireland"
      badge="Outbound Sales"
      geo="Ireland"
      intro="Outbound sales for Irish B2B companies. DealSpark operates your full outbound motion across cold calling, email, and LinkedIn as a trusted commercial partner."
      sections={sections}
      schemaJson={schema}
    />
  );
}
