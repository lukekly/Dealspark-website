'use client';

import { useState } from 'react';

type Disposition =
  | 'no-answer'
  | 'meeting-set'
  | 'not-interested'
  | 'referral'
  | 'future-opp'
  | 'callback'
  | 'send-email'
  | 'unknown';

interface CallEntry {
  id: number;
  date?: string;
  contact: string;
  phone: string;
  company: string;
  title: string;
  disposition: Disposition;
  duration: string;
  notes?: {
    outcome: string;
    spokeWith: string;
    keyIntel: string;
    objections?: string;
    nextSteps: string;
    competitorMentions?: string;
  };
}

const BADGE: Record<Disposition, { label: string; className: string }> = {
  'no-answer':      { label: 'No Answer',                    className: 'bg-white/10 text-white/50' },
  'meeting-set':    { label: 'Answered · Meeting Set',       className: 'bg-emerald-500/20 text-emerald-400' },
  'not-interested': { label: 'Answered · Not Interested',    className: 'bg-red-500/20 text-red-400' },
  'referral':       { label: 'Answered · Referral',          className: 'bg-blue-500/20 text-blue-400' },
  'future-opp':     { label: 'Answered · Future Opp',        className: 'bg-sky-500/20 text-sky-400' },
  'callback':       { label: 'Answered · Call Back Later',   className: 'bg-amber-500/20 text-amber-400' },
  'send-email':     { label: 'Answered · Send an Email',     className: 'bg-indigo-500/20 text-indigo-400' },
  'unknown':        { label: 'Unknown',                      className: 'bg-white/10 text-white/40' },
};

const CIRCLE: Record<string, string> = {
  'Meetings Booked': 'bg-emerald-500',
  'Referrals':       'bg-blue-500',
  'Future Opp':      'bg-sky-600',
  'Call Backs':      'bg-amber-500',
  'Closed Out':      'bg-red-500',
};

const overviewLog: CallEntry[] = [
  { id: 208, contact: 'Sarah Mitchell',   phone: '+353 555 012 301', company: 'Stackline',         title: 'Head of Sales',                 disposition: 'meeting-set',    duration: '4m 32s',
    notes: { outcome: 'Sarah was receptive from the first few seconds. Qualified immediately — they have a new sales hire and no structured outbound in place.', spokeWith: 'Sarah Mitchell, Head of Sales', keyIntel: 'Expanding into UK market in Q3. Currently relying entirely on inbound and referrals. No current SDR function.', nextSteps: 'Discovery call booked for 3 July at 10am.', competitorMentions: 'None.' } },
  { id: 207, contact: 'Conor Walsh',       phone: '+353 555 087 214', company: 'Brightfield AI',    title: 'VP Sales',                      disposition: 'no-answer',      duration: '6s' },
  { id: 206, contact: 'Mark Fitzpatrick',  phone: '+353 555 043 788', company: 'Ironside Capital',  title: 'Head of Sales',                 disposition: 'future-opp',     duration: '3m 05s',
    notes: { outcome: 'Good conversation. Mark acknowledged the pipeline gap but said they are mid-way through a board review that will determine headcount direction.', spokeWith: 'Mark Fitzpatrick, Head of Sales', keyIntel: 'Board reviewing GTM strategy. Currently 2 AEs splitting inbound and outbound. No dedicated SDR.', objections: 'Timing — wants to wait until board review concludes in 6 weeks.', nextSteps: 'Follow up end of July. Connect on LinkedIn.', competitorMentions: 'None mentioned.' } },
  { id: 205, contact: 'Emma Gallagher',    phone: '+353 555 099 456', company: 'Vertex AI',         title: 'Chief Revenue Officer',         disposition: 'not-interested', duration: '1m 42s' },
  { id: 204, contact: 'Claire Doyle',      phone: '+353 555 031 620', company: 'Novex Systems',     title: 'VP Sales & Partnerships',       disposition: 'future-opp',     duration: '1m 52s' },
  { id: 203, contact: 'Patrick Dunne',     phone: '+353 555 071 983', company: 'Harbour Analytics', title: 'Head of Sales',                 disposition: 'no-answer',      duration: '9s' },
  { id: 202, contact: 'Tom Reilly',        phone: '+353 555 058 147', company: 'Clearpath Software', title: 'Chief Revenue Officer',        disposition: 'referral',       duration: '2m 19s' },
  { id: 201, contact: 'Rachel Byrne',      phone: '+353 555 024 509', company: 'Meridian Group',    title: 'Head of Business Development',  disposition: 'meeting-set',    duration: '3m 48s' },
];

const conversationGroups: { label: string; count: number; entries: CallEntry[] }[] = [
  {
    label: 'Meetings Booked', count: 3,
    entries: [
      { id: 208, date: '29 Jun 2026', contact: 'Sarah Mitchell',  phone: '+353 555 012 301', company: 'Stackline',      title: 'Head of Sales',                disposition: 'meeting-set', duration: '4m 32s',
        notes: { outcome: 'Sarah was receptive from the first few seconds. Qualified immediately — they have a new sales hire and no structured outbound in place.', spokeWith: 'Sarah Mitchell, Head of Sales', keyIntel: 'Expanding into UK market in Q3. Currently relying entirely on inbound and referrals. No current SDR function.', nextSteps: 'Discovery call booked for 3 July at 10am.', competitorMentions: 'None.' } },
      { id: 201, date: '24 Jun 2026', contact: 'Rachel Byrne',    phone: '+353 555 024 509', company: 'Meridian Group', title: 'Head of Business Development', disposition: 'meeting-set', duration: '3m 48s',
        notes: { outcome: 'Warm call. Rachel is the decision maker and confirmed budget is in place for Q3. She wants to see how the process works before committing.', spokeWith: 'Rachel Byrne, Head of BD', keyIntel: 'Currently using a LinkedIn-only approach for outbound. Team of 3 AEs. Looking to build a repeatable pipeline motion.', nextSteps: 'Call booked 1 July at 2pm.', competitorMentions: 'Mentioned they had previously spoken to a LinkedIn automation tool.' } },
      { id: 194, date: '2 Jun 2026',  contact: 'David Kavanagh',  phone: '+353 555 067 832', company: 'Prism Software', title: 'VP Sales',                     disposition: 'meeting-set', duration: '6m 11s' },
    ],
  },
  {
    label: 'Referrals', count: 1,
    entries: [
      { id: 202, date: '18 Jun 2026', contact: 'Tom Reilly', phone: '+353 555 058 147', company: 'Clearpath Software', title: 'Chief Revenue Officer', disposition: 'referral', duration: '2m 19s',
        notes: { outcome: 'Tom is not the right fit right now but immediately suggested we speak to his former colleague who runs sales at a Series A SaaS company in Dublin.', spokeWith: 'Tom Reilly, CRO', keyIntel: 'They are fully inbound and not looking to add outbound. Referral to Liam Connors at Fieldstack — warm intro offered.', nextSteps: 'Tom to intro via LinkedIn. Follow up with Liam Connors next week.', competitorMentions: 'None.' } },
    ],
  },
  {
    label: 'Future Opp', count: 3,
    entries: [
      { id: 206, date: '24 Jun 2026', contact: 'Mark Fitzpatrick', phone: '+353 555 043 788', company: 'Ironside Capital', title: 'Head of Sales',           disposition: 'future-opp', duration: '3m 05s',
        notes: { outcome: 'Good conversation. Mark acknowledged the pipeline gap but said they are mid-way through a board review that will determine headcount direction.', spokeWith: 'Mark Fitzpatrick, Head of Sales', keyIntel: 'Board reviewing GTM strategy. Currently 2 AEs splitting inbound and outbound. No dedicated SDR.', objections: 'Timing — wants to wait until board review concludes in 6 weeks.', nextSteps: 'Follow up end of July. Connect on LinkedIn.', competitorMentions: 'None mentioned.' } },
      { id: 204, date: '10 Jun 2026', contact: 'Claire Doyle',     phone: '+353 555 031 620', company: 'Novex Systems',   title: 'VP Sales & Partnerships', disposition: 'future-opp', duration: '1m 52s' },
      { id: 188, date: '3 Jun 2026',  contact: 'James O\'Brien',   phone: '+353 555 089 274', company: 'Foundry Labs',    title: 'Co-Founder & Head of Sales', disposition: 'send-email', duration: '2m 44s' },
    ],
  },
  {
    label: 'Call Backs', count: 1,
    entries: [
      { id: 196, date: '12 Jun 2026', contact: 'David Hughes', phone: '+353 555 055 391', company: 'Crestline Solutions', title: 'Head of Enterprise Sales', disposition: 'callback', duration: '1m 38s',
        notes: { outcome: 'Caught David between meetings. He asked us to call back Thursday at 11am — said pipeline is something they are actively trying to solve.', spokeWith: 'David Hughes, Head of Enterprise Sales', keyIntel: 'Currently 4-person sales team. Mix of inbound and some outbound but no structured process.', nextSteps: 'Call back Thursday 19 Jun at 11am.', competitorMentions: 'None.' } },
    ],
  },
  {
    label: 'Closed Out', count: 3,
    entries: [
      { id: 205, date: '29 Jun 2026', contact: 'Emma Gallagher', phone: '+353 555 099 456', company: 'Vertex AI',         title: 'Chief Revenue Officer', disposition: 'not-interested', duration: '1m 42s' },
      { id: 199, date: '15 Jun 2026', contact: 'Patrick Dunne',  phone: '+353 555 071 983', company: 'Harbour Analytics', title: 'Head of Sales',         disposition: 'not-interested', duration: '58s' },
      { id: 183, date: '1 Jun 2026',  contact: 'Amy Chen',       phone: '+353 555 034 610', company: 'Cloudbridge',       title: 'VP Sales',              disposition: 'not-interested', duration: '1m 17s' },
    ],
  },
];

function Badge({ d }: { d: Disposition }) {
  const b = BADGE[d];
  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium whitespace-nowrap ${b.className}`}>
      {b.label}
    </span>
  );
}

function NotesPanel({ notes }: { notes: NonNullable<CallEntry['notes']> }) {
  const items: { label: string; text: string }[] = [
    { label: 'OUTCOME',              text: notes.outcome },
    { label: 'SPOKE WITH',           text: notes.spokeWith },
    { label: 'KEY INTEL',            text: notes.keyIntel },
    ...(notes.objections           ? [{ label: 'OBJECTIONS',           text: notes.objections }]           : []),
    { label: 'NEXT STEPS',           text: notes.nextSteps },
    ...(notes.competitorMentions   ? [{ label: 'COMPETITOR MENTIONS',  text: notes.competitorMentions }]   : []),
  ];
  return (
    <div className="px-4 pb-4 pt-1">
      <div className="rounded-xl p-4 space-y-3 text-xs leading-relaxed" style={{ background: 'rgba(255,255,255,0.03)' }}>
        {items.map(({ label, text }) => (
          <p key={label}>
            <span className="text-white/30 font-semibold mr-2">{label}:</span>
            <span className="text-white/60">{text}</span>
          </p>
        ))}
      </div>
    </div>
  );
}

const reportData = {
  period: '2026-05-01 — 2026-05-31',
  stats: [
    { label: 'Total Dials',    value: '738' },
    { label: 'Connects',       value: '149' },
    { label: 'Conversations',  value: '74' },
    { label: 'Meetings Set',   value: '10' },
  ],
  status: { label: 'On Track', text: 'Meeting rate of 9.2% exceeds 5% benchmark with strong engagement from operational sales leaders despite widespread timing objections.' },
  winnableRate: '88%',
  meetingRate:  '9.2%',
  summary: 'Decision-makers in this ICP are responding positively to the core value proposition around top-of-funnel pipeline generation, with several acknowledging the problem resonates with their situation. Primary resistance in the market is timing-related — many prospects are either managing internal capacity constraints or locked into current approaches until year-end.',
  successes: [
    { title: 'Problem Recognition Without Immediate Need', body: 'Multiple prospects explicitly validated the pipeline inconsistency problem even when declining, creating strong callback opportunities.' },
    { title: 'Outbound-First Teams Show Highest Engagement', body: 'Companies with existing outbound motions but capacity constraints showed genuine interest and booked follow-ups.' },
    { title: 'LinkedIn Connection as Warm Pipeline', body: 'Prospects consistently agreed to LinkedIn connections as a softer commitment, creating a follow-up channel for future conversion.' },
  ],
  blockers: [
    { title: 'Internal Build Phase Takes Priority', body: 'Several revenue leaders are actively building internal SDR teams, making outsourcing feel premature.' },
    { title: 'Locked Budgets and Current Commitments', body: 'Prospects report being committed to existing vendors through year-end with no flexibility to evaluate alternatives.' },
    { title: 'Inbound / Partner-Led Models', body: 'A segment of the market generates business primarily through inbound or channel partners, making cold outbound a poor fit.' },
  ],
  titleAnalysis: [
    { title: 'Head of Sales',              calls: 18, positive: 7,  insight: 'Highest conversion rate. Direct pipeline ownership makes the value prop immediately relevant.' },
    { title: 'Head of Business Development', calls: 12, positive: 4, insight: 'Mixed responses — BD titles vary significantly. Consultancy BD leaders with capacity gaps are ideal.' },
    { title: 'Chief Revenue Officer',      calls: 10, positive: 1,  insight: 'CROs consistently declined — too strategic for tactical outbound, or too early in role to evaluate.' },
    { title: 'VP Sales',                   calls: 6,  positive: 2,  insight: 'VP-level contacts in partner-heavy orgs do not control direct pipeline generation budget.' },
  ],
  objections: [
    { text: '"We have quite a lot going on / not looking to change anything at the moment"', count: 12 },
    { text: '"We\'re all covered / doing this internally / have internal systems"',           count: 8 },
    { text: '"Our business is predominantly inbound / partner-led / event-driven"',          count: 5 },
    { text: '"We\'ve already put money into our current approach / locked in for the year"', count: 4 },
    { text: '"Too early / just started in role / building the team first"',                  count: 3 },
  ],
};

export default function PortalPreview() {
  const [tab, setTab] = useState<'overview' | 'conversations' | 'report'>('overview');
  const [expanded, setExpanded] = useState<number | null>(null);
  const [visited, setVisited] = useState<Set<string>>(new Set<string>(['overview']));

  const selectTab = (t: 'overview' | 'conversations' | 'report') => {
    setTab(t);
    setExpanded(null);
    setVisited(prev => { const next = new Set<string>(prev); next.add(t); return next; });
  };

  const toggle = (id: number) => setExpanded(prev => prev === id ? null : id);

  return (
    <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl" style={{ background: '#0d1018' }}>

      {/* Browser chrome */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06]" style={{ background: '#080a10' }}>
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-white/10" />
          <div className="w-3 h-3 rounded-full bg-white/10" />
          <div className="w-3 h-3 rounded-full bg-white/10" />
        </div>
        <div className="flex-1 mx-3">
          <div className="rounded-md px-3 py-1 text-xs text-white/25 border border-white/[0.06] text-center" style={{ background: '#111320' }}>
            portal.dealspark.io
          </div>
        </div>
      </div>

      {/* Portal header */}
      <div className="px-6 pt-5 pb-3 flex items-start justify-between border-b border-white/[0.06]">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center shrink-0">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M13 2L4.09 12.97H11L10 22L20.91 11H14L13 2Z"/></svg>
          </div>
          <div>
            <p className="text-white font-bold text-sm leading-none">DealSpark</p>
            <p className="text-white/35 text-xs mt-0.5">June 2026</p>
          </div>
        </div>
        <div className="text-xs text-white/30 border border-white/[0.08] rounded-lg px-3 py-1.5" style={{ background: '#111320' }}>
          June 2026 ▾
        </div>
      </div>

      {/* Tab bar */}
      <div className="flex gap-1 px-4 py-3 border-b border-white/[0.06] overflow-x-auto">
        {[
          { id: 'overview',      label: 'Overview' },
          { id: 'conversations', label: 'Conversations (8)' },
          { id: 'report',        label: 'Reports' },
        ].map(t => (
          <button
            key={t.id}
            onClick={() => selectTab(t.id as 'overview' | 'conversations' | 'report')}
            className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-150 whitespace-nowrap ${
              tab === t.id
                ? 'bg-white/10 text-white'
                : 'text-white/40 hover:text-white/70'
            }`}
          >
            {t.label}
            {!visited.has(t.id) && (
              <span className="absolute top-1.5 right-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
                </span>
              </span>
            )}
          </button>
        ))}
      </div>

      {/* ── OVERVIEW TAB ── */}
      {tab === 'overview' && (
        <div>
          {/* Stats row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px border-b border-white/[0.06]" style={{ background: 'rgba(255,255,255,0.06)' }}>
            {[
              { label: 'Conversations', value: '74', sub: '>60 sec', color: 'text-emerald-400' },
              { label: 'Connects',       value: '149', sub: '20.2% connect rate' },
              { label: 'Total Dials',   value: '738', sub: '' },
              { label: 'Meetings Set',  value: '10', sub: '' },
            ].map(s => (
              <div key={s.label} className="p-5" style={{ background: '#0d1018' }}>
                <p className="text-white/40 text-xs mb-2">{s.label}</p>
                <p className={`text-2xl font-bold ${s.color ?? 'text-white'}`}>{s.value}</p>
                {s.sub && <p className="text-white/30 text-xs mt-1">{s.sub}</p>}
              </div>
            ))}
          </div>

          {/* Call log */}
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-white/[0.06]">
                  {['#', 'Contact', 'Company', 'Title', 'Disposition', 'Duration'].map(h => (
                    <th key={h} className="text-left text-white/25 font-semibold uppercase tracking-wider px-4 py-3">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {overviewLog.map((row, i) => (
                  <tr key={row.id} className={`border-b border-white/[0.04] ${i % 2 === 0 ? '' : 'bg-white/[0.01]'}`}>
                    <td className="px-4 py-3 text-white/30 font-mono">{row.id}</td>
                    <td className="px-4 py-3">
                      <p className="text-white/80 font-medium">{row.contact}</p>
                      <p className="text-white/25 mt-0.5">{row.phone}</p>
                    </td>
                    <td className="px-4 py-3 text-white/60 whitespace-nowrap">{row.company}</td>
                    <td className="px-4 py-3 text-white/45 whitespace-nowrap">{row.title}</td>
                    <td className="px-4 py-3"><Badge d={row.disposition} /></td>
                    <td className="px-4 py-3 text-white/45 whitespace-nowrap font-mono">{row.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ── CONVERSATIONS TAB ── */}
      {tab === 'conversations' && (
        <div className="divide-y divide-white/[0.05]">
          {conversationGroups.map(group => (
            <div key={group.label}>
              {/* Group header */}
              <div className="px-5 py-3 flex items-center gap-2">
                <div className={`w-2 h-full self-stretch rounded-full ${CIRCLE[group.label] ?? 'bg-white/20'}`} style={{ minHeight: '18px' }} />
                <span className="text-white/70 text-xs font-bold uppercase tracking-widest">{group.label}</span>
                <span className="text-white/30 text-xs ml-1">{group.count}</span>
              </div>

              {/* Rows */}
              {group.entries.map(row => (
                <div key={row.id} className="border-t border-white/[0.04]">
                  <div
                    className={`flex items-center gap-3 px-5 py-3 cursor-pointer transition-colors duration-150 ${row.notes ? 'hover:bg-white/[0.02]' : ''}`}
                    onClick={() => row.notes && toggle(row.id)}
                  >
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0 ${CIRCLE[group.label] ?? 'bg-white/20'}`}>
                      {row.id % 100 < 10 ? row.id % 10 : String(row.id).slice(-2)}
                    </div>
                    <div className="flex-1 min-w-0 grid grid-cols-1 sm:grid-cols-[1fr_1fr_1fr_auto_auto_auto] gap-x-4 items-center">
                      <div className="hidden sm:block text-white/30 text-xs">{row.date}</div>
                      <div>
                        <p className="text-white/80 text-xs font-medium truncate">{row.contact}</p>
                        <p className="text-white/25 text-xs">{row.phone}</p>
                      </div>
                      <p className="hidden sm:block text-white/50 text-xs truncate">{row.company}</p>
                      <p className="hidden sm:block text-white/35 text-xs truncate">{row.title}</p>
                      <Badge d={row.disposition} />
                      <div className="hidden sm:flex items-center gap-2">
                        <span className="text-white/30 text-xs font-mono">{row.duration}</span>
                        {row.notes && (
                          <svg
                            className={`w-3.5 h-3.5 text-white/30 transition-transform duration-200 ${expanded === row.id ? 'rotate-180' : ''}`}
                            viewBox="0 0 16 16" fill="currentColor"
                          >
                            <path d="M8 10L3 5h10l-5 5z"/>
                          </svg>
                        )}
                      </div>
                    </div>
                  </div>
                  {row.notes && expanded === row.id && <NotesPanel notes={row.notes} />}
                </div>
              ))}
            </div>
          ))}
        </div>
      )}

      {/* ── REPORT TAB ── */}
      {tab === 'report' && (
        <div className="divide-y divide-white/[0.05]">

          {/* Report header */}
          <div className="px-6 py-5">
            <p className="text-white/30 text-xs font-semibold uppercase tracking-widest mb-1">DealSpark · Monthly Intelligence Report</p>
            <p className="text-white font-bold text-lg">DealSpark</p>
            <p className="text-white/35 text-xs">{reportData.period}</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px" style={{ background: 'rgba(255,255,255,0.06)' }}>
            {reportData.stats.map(s => (
              <div key={s.label} className="p-5" style={{ background: '#0d1018' }}>
                <p className="text-white/35 text-xs mb-2">{s.label}</p>
                <p className="text-2xl font-bold text-white">{s.value}</p>
              </div>
            ))}
          </div>

          {/* Status + rates */}
          <div className="px-6 py-5 space-y-5">
            <div className="rounded-xl p-4 border border-emerald-500/20 bg-emerald-500/[0.06]">
              <p className="text-emerald-400 text-sm font-semibold mb-1">{reportData.status.label}</p>
              <p className="text-white/55 text-xs leading-relaxed">{reportData.status.text}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-white/30 text-xs uppercase tracking-widest mb-1">Winnable Rate</p>
                <p className="text-3xl font-bold text-white">{reportData.winnableRate}</p>
                <p className="text-white/25 text-xs mt-0.5">excl. wrong contact / bad data</p>
              </div>
              <div>
                <p className="text-white/30 text-xs uppercase tracking-widest mb-1">Meeting Rate</p>
                <p className="text-3xl font-bold gradient-text">{reportData.meetingRate}</p>
                <p className="text-white/25 text-xs mt-0.5">benchmark 5%</p>
              </div>
            </div>
            <p className="text-white/45 text-xs leading-relaxed italic border-l-2 border-accent/40 pl-4">{reportData.summary}</p>
          </div>

          {/* Keys to success / Blockers */}
          <div className="px-6 py-5 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <p className="text-emerald-400 text-xs font-semibold uppercase tracking-widest mb-3">Keys to Success</p>
              <div className="space-y-3">
                {reportData.successes.map(s => (
                  <div key={s.title} className="border-l-2 border-emerald-500/40 pl-3">
                    <p className="text-white/70 text-xs font-semibold mb-0.5">&#10003; {s.title}</p>
                    <p className="text-white/35 text-xs leading-relaxed">{s.body}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-red-400 text-xs font-semibold uppercase tracking-widest mb-3">Blockers</p>
              <div className="space-y-3">
                {reportData.blockers.map(b => (
                  <div key={b.title} className="border-l-2 border-red-500/40 pl-3">
                    <p className="text-white/70 text-xs font-semibold mb-0.5">&#10007; {b.title}</p>
                    <p className="text-white/35 text-xs leading-relaxed">{b.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Title analysis */}
          <div className="px-6 py-5">
            <p className="text-white/30 text-xs font-semibold uppercase tracking-widest mb-4">Title Analysis</p>
            <div className="space-y-3">
              {reportData.titleAnalysis.map(t => (
                <div key={t.title} className="border-l-2 border-white/10 pl-4">
                  <div className="flex items-baseline gap-3 mb-1">
                    <p className="text-white/70 text-xs font-semibold">{t.title}</p>
                    <p className="text-white/30 text-xs">
                      {t.calls} calls{t.positive > 0 ? ' · ' : ''}
                      {t.positive > 0 && <span className="text-emerald-400/70">{t.positive} positive</span>}
                    </p>
                  </div>
                  <p className="text-white/35 text-xs leading-relaxed italic">{t.insight}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Top objections */}
          <div className="px-6 py-5">
            <p className="text-white/30 text-xs font-semibold uppercase tracking-widest mb-4">Top Objections</p>
            <div className="space-y-2">
              {reportData.objections.map(o => (
                <div key={o.text} className="flex items-start gap-3 border-l-2 border-amber-500/30 pl-3">
                  <p className="text-white/45 text-xs leading-relaxed italic flex-1">{o.text}</p>
                  <span className="text-amber-400/60 text-xs font-mono whitespace-nowrap">×{o.count}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      )}

      {/* Footer */}
      <div className="px-5 py-3 border-t border-white/[0.06] flex items-center justify-between">
        <p className="text-white/20 text-xs">Live data · Updated in real time</p>
        <button className="text-white/30 text-xs border border-white/[0.08] rounded-lg px-3 py-1.5 hover:text-white/60 transition-colors">
          {tab === 'report' ? 'Download PDF' : 'Download CSV'}
        </button>
      </div>
    </div>
  );
}
