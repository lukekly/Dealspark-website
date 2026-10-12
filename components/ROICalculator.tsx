'use client';

import { useState, useCallback } from 'react';

const TIER_COSTS: Record<number, number> = { 4: 3000, 5: 3600, 6: 4250 };
const TIER_NAMES: Record<number, string> = { 4: 'Starter', 5: 'Growth', 6: 'Partner' };

function fmt(n: number): string {
  if (n >= 1_000_000) return `€${(n / 1_000_000).toFixed(n % 1_000_000 === 0 ? 0 : 1)}M`;
  if (n >= 1_000) return `€${Math.round(n / 1_000)}k`;
  return `€${n}`;
}

function sliderBg(value: number, min: number, max: number) {
  const pct = ((value - min) / (max - min)) * 100;
  return {
    background: `linear-gradient(to right, #7c3aed ${pct}%, rgba(255,255,255,0.08) ${pct}%)`,
  };
}

interface SliderProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  display: string;
  minLabel: string;
  maxLabel: string;
  onChange: (v: number) => void;
}

function Slider({ label, value, min, max, step, display, minLabel, maxLabel, onChange }: SliderProps) {
  return (
    <div>
      <div className="flex justify-between items-baseline mb-3">
        <label className="text-white/60 text-sm">{label}</label>
        <span className="text-white font-bold text-lg tabular-nums">{display}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        style={sliderBg(value, min, max)}
        className="roi-slider w-full"
      />
      <div className="flex justify-between mt-1.5">
        <span className="text-white/20 text-xs">{minLabel}</span>
        <span className="text-white/20 text-xs">{maxLabel}</span>
      </div>
    </div>
  );
}

export default function ROICalculator() {
  const [tab, setTab] = useState<'roi' | 'forecast'>('roi');
  const [acv, setAcv] = useState(25_000);
  const [winRate, setWinRate] = useState(20);
  const [meetings, setMeetings] = useState(5);

  const tierCost = TIER_COSTS[meetings] ?? 3_600;
  const tierName = TIER_NAMES[meetings] ?? 'Growth';

  const monthlyPipeline = acv * meetings;
  const expectedMonthlyRevenue = monthlyPipeline * (winRate / 100);
  const annualRevenue = expectedMonthlyRevenue * 12;
  const roiMultiple = tierCost > 0 ? expectedMonthlyRevenue / tierCost : 0;

  const dials = meetings === 4 ? 450 : meetings === 5 ? 560 : 680;
  const conversations = Math.round(dials * 0.1);
  const followUps = Math.round(dials * 0.45);
  const targets = meetings * 28;

  return (
    <div className="rounded-2xl overflow-hidden border border-white/[0.07] bg-surface">

      {/* Tab bar */}
      <div className="flex gap-1 p-1.5 bg-background border-b border-white/[0.06]">
        {(['roi', 'forecast'] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`flex-1 py-2.5 px-4 rounded-xl text-sm font-semibold transition-all duration-200 ${
              tab === t
                ? 'bg-accent text-white shadow-[0_4px_20px_rgba(124,58,237,0.4)]'
                : 'text-white/40 hover:text-white/70'
            }`}
          >
            {t === 'roi' ? 'ROI Calculator' : 'Activity Forecast'}
          </button>
        ))}
      </div>

      <div className="p-7 sm:p-9">

        {tab === 'roi' ? (
          <>
            {/* Header */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-white mb-1">Outbound ROI Calculator</h3>
              <p className="text-white/45 text-sm">Estimate the return on a structured outbound programme.</p>
            </div>

            {/* Sliders */}
            <div className="space-y-8 mb-10">
              <p className="text-white/35 text-xs font-semibold uppercase tracking-widest -mb-2">Your Numbers</p>

              <Slider
                label="Average contract value (ACV)"
                value={acv}
                min={5_000}
                max={200_000}
                step={5_000}
                display={fmt(acv)}
                minLabel="€5k"
                maxLabel="€200k"
                onChange={setAcv}
              />
              <Slider
                label="Win rate — close rate"
                value={winRate}
                min={5}
                max={60}
                step={5}
                display={`${winRate}%`}
                minLabel="5%"
                maxLabel="60%"
                onChange={setWinRate}
              />
              <Slider
                label="Meetings delivered per month"
                value={meetings}
                min={4}
                max={6}
                step={1}
                display={`${meetings}`}
                minLabel="4 / Starter"
                maxLabel="6 / Partner"
                onChange={setMeetings}
              />
            </div>

            {/* Results */}
            <div className="space-y-3">
              <p className="text-white/35 text-xs font-semibold uppercase tracking-widest">Projected Return</p>

              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl p-5 bg-background border border-white/[0.06]">
                  <p className="text-white/35 text-xs uppercase tracking-wider mb-3">Monthly Pipeline</p>
                  <p className="text-white text-2xl font-bold tabular-nums">{fmt(monthlyPipeline)}</p>
                </div>
                <div className="rounded-xl p-5 bg-background border border-white/[0.06]">
                  <p className="text-white/35 text-xs uppercase tracking-wider mb-3">Expected Revenue / Mo</p>
                  <p className="text-2xl font-bold gradient-text tabular-nums">{fmt(expectedMonthlyRevenue)}</p>
                </div>
              </div>

              <div className="rounded-xl p-5 bg-background border border-white/[0.06] flex items-center justify-between">
                <p className="text-white/50 text-sm">Annual revenue</p>
                <p className="text-2xl font-bold gradient-text tabular-nums">{fmt(annualRevenue)}</p>
              </div>

              <div className="rounded-xl p-5 border border-accent/25 bg-accent/[0.07] flex items-center justify-between">
                <div>
                  <p className="text-white/60 text-sm font-medium">Return on investment</p>
                  <p className="text-white/30 text-xs mt-0.5">{tierName} plan · €{(tierCost / 1_000).toFixed(tierCost % 1_000 === 0 ? 0 : 2)}k/mo</p>
                </div>
                <p className="text-3xl font-bold gradient-text tabular-nums">{roiMultiple.toFixed(1)}×</p>
              </div>
            </div>

            <p className="text-white/20 text-xs text-center mt-7 leading-relaxed">
              Projections based on inputs provided. Results will vary by market, sector, and sales process.
            </p>
          </>
        ) : (
          <>
            {/* Header */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-white mb-1">Activity Forecast</h3>
              <p className="text-white/45 text-sm">What DealSpark delivers on your behalf each month.</p>
            </div>

            {/* Tier selector */}
            <div className="mb-8">
              <p className="text-white/35 text-xs font-semibold uppercase tracking-widest mb-4">Appointments per month</p>
              <div className="grid grid-cols-3 gap-2">
                {([4, 5, 6] as const).map((n) => (
                  <button
                    key={n}
                    onClick={() => setMeetings(n)}
                    className={`py-3 rounded-xl text-sm font-semibold border transition-all duration-200 ${
                      meetings === n
                        ? 'border-accent/50 bg-accent/15 text-white'
                        : 'border-white/[0.07] bg-background text-white/35 hover:text-white/60 hover:border-white/20'
                    }`}
                  >
                    <span className="block text-lg font-bold leading-none mb-1">{n}</span>
                    <span className="text-xs font-normal opacity-70">{TIER_NAMES[n]}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Activity stats */}
            <div className="space-y-3">
              <p className="text-white/35 text-xs font-semibold uppercase tracking-widest">Monthly Activity</p>

              {[
                { label: 'Target companies researched', value: targets },
                { label: 'Dials made', value: dials },
                { label: 'Live conversations', value: conversations },
                { label: 'LinkedIn & email follow-ups', value: followUps },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="rounded-xl p-4 bg-background border border-white/[0.06] flex items-center justify-between"
                >
                  <p className="text-white/55 text-sm">{label}</p>
                  <p className="text-white font-bold text-lg tabular-nums">{value}</p>
                </div>
              ))}

              <div className="rounded-xl p-5 border border-accent/25 bg-accent/[0.07] flex items-center justify-between">
                <div>
                  <p className="text-white/70 text-sm font-semibold">Qualified appointments delivered</p>
                  <p className="text-white/30 text-xs mt-0.5">Confirmed, calendar-ready meetings</p>
                </div>
                <p className="text-3xl font-bold gradient-text tabular-nums">{meetings}</p>
              </div>
            </div>

            <p className="text-white/20 text-xs text-center mt-7 leading-relaxed">
              Activity volumes are estimates based on typical campaign performance. Actual dials vary by sector and list quality.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
