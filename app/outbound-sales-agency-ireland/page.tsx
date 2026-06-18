import type { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';

export const metadata: Metadata = {
  title: 'Outbound Sales Agency Ireland',
  description:
    'B2B outbound sales agency based in Ireland. Cold calling, email, and LinkedIn to generate qualified pipeline and market intelligence for Irish B2B companies.',
  alternates: { canonical: 'https://www.dealspark.io/outbound-sales-agency-ireland' },
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
    heading: 'Your Market Has the Information. We Uncover It.',
    body: [
      'The outbound motion is not just a pipeline engine. It is the most direct route to understanding how your market thinks, what problems they are actively trying to solve, and what stands between you and a commercial relationship with them.',
      'Every conversation your market has with a skilled outbound practitioner surfaces something valuable. Objections, timing signals, competitor mentions, internal dynamics, budget cycles. Most agencies discard this. DealSpark captures and reports on it, so the commercial intelligence compounds alongside the pipeline.',
      'Clients come to DealSpark for meetings. They stay because the intelligence they gather changes how they position, how they sell, and how they think about their market.',
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
    heading: 'Proven Results: €390k Pipeline in 4 Months',
    body: [
      'For The Lennox Academy, a revenue enablement firm working with Salesforce, Gong, and LinkedIn, DealSpark generated €390k in qualified pipeline across 20 opportunities in four months. Two previous outbound providers had failed to meet their standards before DealSpark stepped in.',
      'Every targeting decision, message, and call is handled by the same people who run your strategy. Precision over volume, commercial outcomes over activity metrics.',
    ],
  },
];

const faqs = [
  {
    q: 'What does an outbound sales agency actually do?',
    a: 'An outbound sales agency runs the top-of-funnel commercial activity your internal team does not have the capacity or expertise to execute consistently. At DealSpark, that means ICP definition, prospect list build, cold calling, email, and LinkedIn outreach, with structured reporting on both pipeline activity and market intelligence gathered along the way.',
  },
  {
    q: 'How is DealSpark different from other outbound agencies in Ireland?',
    a: 'Most outbound agencies run campaigns through junior SDR teams with high turnover and inconsistent quality. DealSpark operates without a junior layer. Every call, every follow-up, and every strategic decision is handled by a practitioner who understands your buyer and your market. We also work with a small number of clients at any one time, which means your engagement gets full attention rather than being managed as one of fifty accounts.',
  },
  {
    q: 'How long does it take to see pipeline?',
    a: 'Most clients start seeing qualified conversations and booked meetings within the first four to six weeks of an engagement. The first two weeks are typically spent on ICP definition, targeting, list build, and script development. Calling and outreach begin in week three.',
  },
  {
    q: 'Do you offer shorter engagements for companies new to outbound?',
    a: 'Yes. DealSpark offers a 30-day sprint for companies that want to test outbound before committing to a longer engagement. It is a focused campaign designed to generate real conversations with your ideal customers and give you a clear picture of how your market responds.',
  },
  {
    q: 'What happens at the end of an engagement?',
    a: 'Every engagement includes a review call where DealSpark shares what worked, what the market responded to, and what the data suggests about the next move. You leave with a clear picture of your market, a refined outbound playbook, and pipeline to work. If there is a fit for a continued partnership, we will discuss it. If not, we will tell you that too.',
  },
];

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Outbound Sales Agency Ireland',
  provider: { '@type': 'Organization', name: 'DealSpark', url: 'https://www.dealspark.io' },
  serviceType: 'Outbound Sales',
  areaServed: { '@type': 'Country', name: 'Ireland' },
  description:
    'Outbound sales agency for Irish B2B companies. Cold calling, email, and LinkedIn to generate qualified pipeline and market intelligence.',
  url: 'https://www.dealspark.io/outbound-sales-agency-ireland',
};

export default function OutboundSalesAgencyIrelandPage() {
  return (
    <ServicePage
      h1="Outbound Sales Agency Ireland"
      badge="Outbound Sales"
      geo="Ireland"
      intro="Outbound sales for Irish B2B companies. DealSpark operates your full outbound motion across cold calling, email, and LinkedIn, delivering qualified pipeline and the market intelligence your competitors are not capturing."
      sections={sections}
      faqs={faqs}
      schemaJson={schema}
    />
  );
}
