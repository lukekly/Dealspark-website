import type { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';

export const metadata: Metadata = {
  title: 'Appointment Setting Ireland',
  description:
    'B2B appointment setting for Irish companies. Cold calling, email, and LinkedIn outreach that creates qualified sales conversations across Ireland.',
  alternates: { canonical: 'https://dealspark.io/appointment-setting-ireland' },
};

const sections = [
  {
    heading: 'Appointment Setting for B2B Companies in Ireland',
    body: [
      'Appointment setting in B2B is not about filling a calendar. It is about creating qualified commercial conversations with buyers who fit your profile, have the authority to make a decision, and are at the right stage to engage.',
      'DealSpark works with B2B companies across Ireland to create consistent, high-quality buyer conversations through cold calling, email, and LinkedIn. Every conversation that reaches your team has been pre-qualified on authority, fit, and commercial relevance.',
    ],
  },
  {
    heading: 'Quality Over Volume',
    body: [
      'Volume-based appointment setting fills your diary with low-quality meetings. Contacts who are not decision-makers, companies outside your ICP, and buyers who said yes to get off the phone. None of that moves revenue forward.',
      'DealSpark measures success by the quality and commercial relevance of each conversation created, not by how many calls were made. For Irish B2B companies selling complex or high-value solutions, the quality of each conversation matters as much as the quantity.',
    ],
  },
  {
    heading: 'Multichannel Outreach Across Calls, Email, and LinkedIn',
    body: [
      'DealSpark runs calls, email, and LinkedIn across the right contacts depending on what each channel does best for each audience. Cold calling creates direct commercial openings. Email reaches prospects who engage better in writing. LinkedIn builds context and maintains presence across the buying cycle.',
      'Every touchpoint is written and delivered with commercial context specific to the prospect. The goal is to create a conversation worth having, not to generate a volume metric.',
    ],
  },
  {
    heading: 'ICP-First Targeting with Clay-Powered Data',
    body: [
      'Before outreach begins, DealSpark agrees your Ideal Customer Profile in detail. The right company types, the right buyer titles, and the commercial triggers that indicate a buyer ready to engage now.',
      'Clay-powered data enrichment validates every contact before they enter the outreach cycle. The result is a prospect pool built on fit and intent, not availability.',
    ],
  },
];

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Appointment Setting Ireland',
  provider: { '@type': 'Organization', name: 'DealSpark', url: 'https://dealspark.io' },
  serviceType: 'B2B Appointment Setting',
  areaServed: { '@type': 'Country', name: 'Ireland' },
  description:
    'B2B appointment setting for Irish companies. Cold calling and multichannel outreach to create qualified sales conversations.',
  url: 'https://dealspark.io/appointment-setting-ireland',
};

export default function AppointmentSettingIrelandPage() {
  return (
    <ServicePage
      h1="Appointment Setting Ireland"
      badge="Appointment Setting"
      geo="Ireland"
      intro="B2B appointment setting for Irish companies. DealSpark creates qualified commercial conversations through cold calling, email, and LinkedIn."
      sections={sections}
      schemaJson={schema}
    />
  );
}
