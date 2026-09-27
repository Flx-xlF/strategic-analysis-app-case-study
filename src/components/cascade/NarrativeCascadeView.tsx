import React from 'react';
import { CASCADE_FIXTURES } from '../../fixtures/cascadeFixtures';
import { RiskGauge } from './RiskGauge';
import { ShieldAlert, AlertTriangle, ArrowRight, UserCheck, Flame, Layers } from 'lucide-react';

interface Props {
  scenarioId: string;
  isStreaming: boolean;
  streamProgress: number;
}

export const NarrativeCascadeView: React.FC<Props> = ({
  scenarioId,
  isStreaming,
  streamProgress
}) => {
  const data = CASCADE_FIXTURES[scenarioId] || CASCADE_FIXTURES.gotthard_freight;

  return (
    <div className="space-y-6">
      {/* Simulation Input / Strategy Under Test */}
      <div className="bg-white p-5 swiss-border shadow-sm">
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-brand-aluminum">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-brand-black inline-block"></span>
            <span className="type-signage text-zinc-600">INPUT-BOTSCHAFT (COMMUNICATION UNDER TEST)</span>
          </div>
          <span className="type-mono text-[10px] text-zinc-500 font-semibold">
            STATUS: <span className="text-brand-red font-bold">RED TEAM VALIDATION</span>
          </span>
        </div>
        <p className="text-sm font-serif italic text-zinc-900 leading-relaxed bg-brand-cloud/70 p-3.5 border-l-4 border-brand-black">
          "{data.communication}"
        </p>
      </div>

      {/* Adversarial Output: Headline from Hell */}
      <div className="bg-brand-black text-white p-5 border-l-4 border-brand-red shadow-brutalist">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Flame className="w-4 h-4 text-brand-red" />
            <span className="type-signage text-brand-red tracking-widest font-black">
              ADVERSARIAL STRESS-TEST: "HEADLINE FROM HELL"
            </span>
          </div>
          <span className="type-mono text-[10px] bg-brand-red text-white px-2 py-0.5 font-bold uppercase">
            TABLOID WORST-CASE PROJECTION
          </span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black tracking-tight leading-tight text-white uppercase font-sans mt-2">
          {data.headline_from_hell}
        </h2>
        <p className="text-xs text-zinc-400 mt-2.5 type-mono">
          PROJEKTION: Aggressive mediale Zuspitzung binnen 90 Minuten nach Sperrfrist-Ende.
        </p>
      </div>

      {/* Grid: Stakeholders + Risk Gauge */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Stakeholder Reaction Flow (2 cols) */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-brand-black" />
              <h3 className="type-signage text-zinc-700">
                STAKEHOLDER REACTION CASCADE ({data.stakeholder_reactions.length} AKTEURE)
              </h3>
            </div>
            <span className="type-mono text-[10px] text-zinc-400 font-semibold">
              SORTIERUNG: SYSTEM-RELEVANZ
            </span>
          </div>

          <div className="space-y-3">
            {data.stakeholder_reactions.map((stk, idx) => {
              const isNeg = stk.sentiment === 'negative';
              const isPos = stk.sentiment === 'positive';

              return (
                <div
                  key={idx}
                  className={`bg-white p-4 swiss-border transition-all hover:border-brand-black ${
                    isNeg
                      ? 'border-l-4 border-l-brand-red'
                      : isPos
                      ? 'border-l-4 border-l-brand-black'
                      : 'border-l-4 border-l-zinc-400'
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="font-bold text-xs uppercase tracking-wide text-zinc-900 font-sans">
                      {stk.stakeholder}
                    </span>
                    <span
                      className={`type-mono text-[9px] px-2 py-0.5 font-bold uppercase ${
                        isNeg
                          ? 'bg-brand-red text-white'
                          : isPos
                          ? 'bg-brand-black text-white'
                          : 'bg-zinc-200 text-zinc-800'
                      }`}
                    >
                      {stk.likely_reaction}
                    </span>
                  </div>

                  <p className="text-xs text-zinc-700 leading-relaxed font-sans mb-3">
                    {stk.reasoning}
                  </p>

                  <div className="bg-brand-cloud p-2 border-l-2 border-brand-aluminum type-mono text-[11px] text-zinc-600 flex items-start gap-1.5">
                    <span className="text-brand-red font-bold">DOSSIER:</span>
                    <span className="italic">{stk.dossier_citation}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Second Order Effects */}
          <div className="bg-white p-4 swiss-border mt-4">
            <h4 className="type-signage text-zinc-700 mb-3 flex items-center gap-2">
              <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
              FOLGEWIRKUNGEN ZWEITER ORDNUNG (SECOND-ORDER EFFECTS)
            </h4>
            <div className="space-y-2">
              {data.second_order_effects.map((eff, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs py-1.5 border-b border-zinc-100 last:border-none">
                  <ArrowRight className="w-3.5 h-3.5 text-brand-red shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <span className="text-zinc-800 font-medium">{eff.effect}</span>
                  </div>
                  <div className="type-mono text-[10px] text-zinc-400 shrink-0 uppercase">
                    [{eff.timeframe}]
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Risk Gauge & Management Summary */}
        <div className="space-y-4">
          <RiskGauge
            score={data.risk_score}
            verdict={data.management_summary.verdict}
          />

          {/* Strategic Vulnerabilities */}
          <div className="bg-white p-4 swiss-border">
            <h4 className="type-signage text-zinc-600 mb-3 flex items-center gap-1.5">
              <ShieldAlert className="w-3.5 h-3.5 text-brand-red" />
              IDENTIFIZIERTE SCHWACHSTELLEN
            </h4>
            <div className="space-y-3">
              {data.vulnerabilities.map((v, i) => (
                <div key={i} className="bg-brand-cloud/80 p-2.5 border-l-2 border-brand-red">
                  <div className="font-bold text-[11px] text-zinc-900 type-mono mb-1">
                    {v.topic}
                  </div>
                  <p className="text-[11px] text-zinc-600 leading-snug">
                    {v.explanation}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Management Diagnostic Brief */}
          <div className="bg-brand-cloud p-4 border border-brand-aluminum">
            <h4 className="type-signage text-zinc-500 mb-2">MANAGEMENT DIAGNOSE</h4>
            <p className="text-xs text-zinc-800 leading-relaxed mb-3">
              {data.management_summary.diagnosis}
            </p>
            <div className="pt-2 border-t border-brand-aluminum">
              <span className="type-signage text-zinc-500 block mb-1">STRATEGISCHER IMPACT:</span>
              <p className="text-xs text-zinc-700 leading-relaxed font-semibold">
                {data.management_summary.impact}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
