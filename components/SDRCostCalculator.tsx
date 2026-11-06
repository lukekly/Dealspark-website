'use client';

import { useState } from 'react';

type Market = 'ie' | 'uk';
type Currency = 'EUR' | 'GBP';

interface Level {
  k: string;
  n: string;
  base: number;
  v: number;
  ramp: number;
  note: string;
}

interface Preset {
  cur: Currency;
  fee: number;
  stack: number;
  rate: number;
  equip: number;
  levels: Level[];
}

const PRESETS: Record<Market, Preset> = {
  ie: {
    cur: 'EUR', fee: 18, stack: 750, rate: 75, equip: 2000,
    levels: [
      { k: 'junior', n: 'Junior', base: 35000, v: 10000, ramp: 5, note: '0–2 years. Needs a script, a list and close coaching.' },
      { k: 'mid', n: '2+ years', base: 45000, v: 15000, ramp: 4, note: 'The hire most founders picture. Can run calls well, but rarely builds the system.' },
      { k: 'senior', n: 'Senior', base: 52000, v: 18000, ramp: 3, note: '3–5 years. Fewer of them, and the multinationals want them too.' },
      { k: 'bigtech', n: 'Big-tech rate', base: 55000, v: 25000, ramp: 3, note: 'What big tech companies in Dublin pay experienced and multilingual SDRs.' },
    ],
  },
  uk: {
    cur: 'GBP', fee: 20, stack: 650, rate: 65, equip: 1700,
    levels: [
      { k: 'junior', n: 'Junior', base: 30000, v: 8000, ramp: 5, note: '0–1 year. Needs a script, a list and close coaching.' },
      { k: 'mid', n: '2+ years', base: 37500, v: 12500, ramp: 4, note: 'The hire most founders picture. Can run calls well, but rarely builds the system.' },
      { k: 'senior', n: 'Senior', base: 46000, v: 18000, ramp: 3, note: '3+ years. UK average; London runs higher.' },
      { k: 'london', n: 'London senior', base: 53000, v: 22000, ramp: 3, note: 'Senior SDR rates in London.' },
    ],
  },
};

// DealSpark Growth plan, per month, in euro.
const DS_EUR = 6000;

type FieldKey = 'base' | 'variable' | 'fee' | 'stack' | 'mgr' | 'rate' | 'ramp' | 'fx';
type Values = Record<FieldKey, string>;

function presetValues(market: Market, levelKey: string, prev?: Values): Values {
  const p = PRESETS[market];
  const l = p.levels.find((x) => x.k === levelKey) ?? p.levels[1];
  return {
    base: String(l.base),
    variable: String(l.v),
    fee: String(p.fee),
    stack: String(p.stack),
    rate: String(p.rate),
    ramp: String(l.ramp),
    // Keep the user's own management hours and FX rate across preset changes.
    mgr: prev?.mgr || '4',
    fx: prev?.fx || '0.87',
  };
}

function num(s: string): number {
  const x = parseFloat(s);
  return Number.isFinite(x) ? x : 0;
}

function fmt(n: number, cur: Currency): string {
  return new Intl.NumberFormat(cur === 'EUR' ? 'en-IE' : 'en-GB', {
    style: 'currency',
    currency: cur,
    maximumFractionDigits: 0,
  }).format(Math.round(n));
}

const FIELDS: { key: FieldKey; label: string; step: number; min?: number; max?: number }[] = [
  { key: 'base', label: 'Base salary', step: 1000 },
  { key: 'variable', label: 'Commission at target', step: 1000 },
  { key: 'fee', label: 'Recruiter fee (% of base)', step: 1 },
  { key: 'stack', label: 'Tools per month', step: 50 },
  { key: 'mgr', label: 'Your hours a week managing them', step: 1 },
  { key: 'rate', label: 'Value of your hour', step: 5 },
  { key: 'ramp', label: 'Months to full productivity', step: 1, min: 0, max: 11 },
];

function Segmented<T extends string>({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: { v: T; n: string }[];
  value: T;
  onChange: (v: T) => void;
}) {
  return (
    <div
      role="group"
      aria-label={label}
      className="inline-flex flex-wrap gap-1 p-1 rounded-xl bg-background border border-white/[0.07] max-w-full"
    >
      {options.map((o) => {
        const active = o.v === value;
        return (
          <button
            key={o.v}
            type="button"
            aria-pressed={active}
            onClick={() => onChange(o.v)}
            className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors ${
              active ? 'bg-accent text-white' : 'text-white/50 hover:text-white'
            }`}
          >
            {o.n}
          </button>
        );
      })}
    </div>
  );
}

const STRIPES =
  'repeating-linear-gradient(45deg, rgba(255,255,255,0.14), rgba(255,255,255,0.14) 4px, transparent 4px, transparent 8px)';
const RAMP_COLOUR = '#e7a68c';

export default function SDRCostCalculator() {
  const [market, setMarket] = useState<Market>('ie');
  const [level, setLevel] = useState('mid');
  const [values, setValues] = useState<Values>(() => presetValues('ie', 'mid'));

  const p = PRESETS[market];
  const cur = p.cur;
  const currentLevel = p.levels.find((l) => l.k === level) ?? p.levels[1];

  function chooseMarket(m: Market) {
    const nextLevel = PRESETS[m].levels.some((l) => l.k === level) ? level : 'mid';
    setMarket(m);
    setLevel(nextLevel);
    setValues((prev) => presetValues(m, nextLevel, prev));
  }

  function chooseLevel(k: string) {
    setLevel(k);
    setValues((prev) => presetValues(market, k, prev));
  }

  function setField(key: FieldKey, v: string) {
    setValues((prev) => ({ ...prev, [key]: v }));
  }

  // ── Calculation (mirrors the reference worksheet) ──
  const base = num(values.base);
  const gross = base + num(values.variable);
  let social: number, socialLbl: string, pension: number, pensionLbl: string;
  if (market === 'ie') {
    social = gross * 0.114;
    socialLbl = 'Employer PRSI (11.4%)';
    pension = Math.min(gross, 80000) * 0.015;
    pensionLbl = 'Pension auto-enrolment (1.5%)';
  } else {
    social = Math.max(0, gross - 5000) * 0.15;
    socialLbl = 'Employer NI (15% above £5,000)';
    pension = Math.max(0, Math.min(gross, 50270) - 6240) * 0.03;
    pensionLbl = 'Workplace pension (3% minimum)';
  }
  const fee = (base * num(values.fee)) / 100;
  const tools = num(values.stack) * 12;
  const mgmt = num(values.mgr) * num(values.rate) * 46;
  const equip = p.equip;
  const total = gross + social + pension + fee + tools + mgmt + equip;
  const ramp = Math.min(11, Math.max(0, Math.round(num(values.ramp))));
  const prodMonths = 12 - ramp;
  const dsMonthly = market === 'ie' ? DS_EUR : DS_EUR * num(values.fx);

  const rows: [string, number, string?][] = [
    ['Base salary + commission at target', gross],
    [socialLbl, social],
    [pensionLbl, pension],
    ['Recruiter fee', fee],
    ['Tools and data', tools, 'Data sourcing, dialler, enrichment, email sequencing, CRM'],
    ['Your management time', mgmt, `${num(values.mgr)} hrs a week, coaching, call reviews, one-to-ones`],
    ['Laptop, headset, onboarding', equip],
  ];

  // Recruiting + notice period, in months.
  const hireMonths = 3;
  const months = Array.from({ length: 12 }, (_, i) => i);

  return (
    <>
      {/* ── Calculator ── */}
      <section aria-labelledby="calc-h" className="relative py-16 sm:py-20 bg-surface border-y border-white/[0.06]">
        <div className="absolute inset-0 bg-purple-glow pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <span className="section-label">First-year cost calculator</span>
            <h2 id="calc-h" className="text-3xl sm:text-4xl font-bold tracking-tight text-white mt-5">
              What one SDR costs you in year one
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] gap-8 lg:gap-10 items-start">
            {/* Controls */}
            <div className="flex flex-col gap-7 min-w-0">
              <div className="flex flex-col gap-2.5">
                <span className="text-white/35 text-xs font-semibold uppercase tracking-widest">Where you&apos;re hiring</span>
                <Segmented
                  label="Market"
                  value={market}
                  onChange={chooseMarket}
                  options={[
                    { v: 'ie', n: 'Ireland' },
                    { v: 'uk', n: 'United Kingdom' },
                  ]}
                />
              </div>

              <div className="flex flex-col gap-2.5">
                <span className="text-white/35 text-xs font-semibold uppercase tracking-widest">Experience level</span>
                <Segmented
                  label="Experience level"
                  value={level}
                  onChange={chooseLevel}
                  options={p.levels.map((l) => ({ v: l.k, n: l.n }))}
                />
                <p className="text-white/45 text-sm">{currentLevel.note}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {FIELDS.map((f) => (
                  <div key={f.key} className="flex flex-col gap-1.5 min-w-0">
                    <label htmlFor={`sdr-${f.key}`} className="text-white/60 text-sm">
                      {f.label}
                    </label>
                    <input
                      id={`sdr-${f.key}`}
                      type="number"
                      inputMode="numeric"
                      step={f.step}
                      min={f.min}
                      max={f.max}
                      value={values[f.key]}
                      onChange={(e) => setField(f.key, e.target.value)}
                      className="form-input tabular-nums !py-2.5"
                    />
                  </div>
                ))}
                {market === 'uk' && (
                  <div className="flex flex-col gap-1.5 min-w-0">
                    <label htmlFor="sdr-fx" className="text-white/60 text-sm">€1 in £</label>
                    <input
                      id="sdr-fx"
                      type="number"
                      inputMode="decimal"
                      step={0.01}
                      value={values.fx}
                      onChange={(e) => setField('fx', e.target.value)}
                      className="form-input tabular-nums !py-2.5"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Result */}
            <div aria-live="polite" className="card-static !bg-background p-6 sm:p-8 flex flex-col gap-6 min-w-0">
              <div className="flex flex-col">
                {rows.map(([label, value, sub]) => (
                  <div
                    key={label}
                    className="flex justify-between items-start gap-4 py-2.5 border-b border-white/[0.06] text-[0.95rem]"
                  >
                    <span className="text-white/55 min-w-0">
                      {label}
                      {sub && <small className="block text-xs text-white/35 mt-0.5">{sub}</small>}
                    </span>
                    <span className="text-white tabular-nums whitespace-nowrap">{fmt(value, cur)}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap justify-between items-end gap-4">
                <div>
                  <p className="text-white/35 text-xs font-semibold uppercase tracking-widest">Estimated first-year cost</p>
                  <p className="text-white/45 text-sm mt-1">About {fmt(total / 12, cur)} a month</p>
                </div>
                <p className="text-4xl sm:text-5xl font-bold tracking-tight text-white tabular-nums leading-none">
                  {fmt(total, cur)}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="rounded-xl p-4 bg-surface border border-white/[0.06]">
                  <p className="text-white/45 text-xs mb-2">Cost per fully productive month</p>
                  <p className="text-white text-xl font-bold tabular-nums">
                    {prodMonths > 0 ? fmt(total / prodMonths, cur) : '–'}
                  </p>
                </div>
                <div className="rounded-xl p-4 border border-accent/30 bg-accent/[0.12]">
                  <p className="text-[#c4b5fd] text-xs mb-2">DealSpark Growth, 8–10 meetings a month</p>
                  <p className="text-xl font-bold gradient-text tabular-nums">{fmt(dsMonthly, cur)}/mo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section aria-labelledby="tl-h" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-3xl mb-10">
          <span className="section-label">Time to first real meetings</span>
          <h2 id="tl-h" className="text-3xl sm:text-4xl font-bold tracking-tight text-white mt-5 mb-4">
            The bigger cost is time.
          </h2>
          <p className="text-lg text-white/60 leading-relaxed">
            Recruiting typically takes 6 to 10 weeks, followed by a notice period of around one month, and longer for senior hires. Then the ramp begins. From the day you start recruiting, a new SDR usually takes six to nine months to reach full productivity.
          </p>
        </div>

        <div className="flex flex-col gap-5">
          {[
            { name: 'In-house SDR', kind: 'house' as const },
            { name: 'DealSpark', kind: 'ds' as const },
          ].map((row) => (
            <div key={row.name} className="grid grid-cols-1 sm:grid-cols-[140px_minmax(0,1fr)] gap-2 sm:gap-4 items-center">
              <span className="text-white font-semibold text-sm sm:text-base">{row.name}</span>
              <div className="grid grid-cols-12 gap-[3px]">
                {months.map((i) => {
                  const phase =
                    row.kind === 'ds' ? 'prod' : i < hireMonths ? 'hire' : i < hireMonths + ramp ? 'ramp' : 'prod';
                  return (
                    <div
                      key={i}
                      className={`h-8 sm:h-9 rounded ${
                        phase === 'prod' ? 'bg-accent' : phase === 'hire' ? 'border border-white/[0.12]' : ''
                      }`}
                      style={
                        phase === 'hire'
                          ? { background: STRIPES }
                          : phase === 'ramp'
                          ? { background: RAMP_COLOUR }
                          : undefined
                      }
                    />
                  );
                })}
              </div>
            </div>
          ))}
          <div className="grid grid-cols-1 sm:grid-cols-[140px_minmax(0,1fr)] gap-2 sm:gap-4">
            <span className="hidden sm:block" />
            <div className="grid grid-cols-12 gap-[3px] text-center text-[0.7rem] text-white/35 tabular-nums">
              {months.map((i) => (
                <span key={i}>{i + 1}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-2 mt-6 text-sm text-white/50">
          <span className="inline-flex items-center gap-2">
            <i className="inline-block w-3 h-3 rounded-sm border border-white/[0.15]" style={{ background: STRIPES }} />
            Recruiting and notice period
          </span>
          <span className="inline-flex items-center gap-2">
            <i className="inline-block w-3 h-3 rounded-sm" style={{ background: RAMP_COLOUR }} />
            Ramping
          </span>
          <span className="inline-flex items-center gap-2">
            <i className="inline-block w-3 h-3 rounded-sm bg-accent" />
            Booking meetings
          </span>
        </div>
      </section>
    </>
  );
}
