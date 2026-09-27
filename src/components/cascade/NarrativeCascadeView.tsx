import React from 'react';
import { CASCADE_FIXTURES } from '../../fixtures/cascadeFixtures';
import { RiskGauge } from './RiskGauge';
import { ArrowRight } from 'lucide-react';

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
    <div className="space-y-5">
      {/* Simulation Input */}
      <div className="bg-white p-4 swiss-border">
        <div className="pb-2 mb-2 border-b border-brand-aluminum flex items-center justify-between">
          <span className="type-signage text-zinc-500">Geprüfter Botschaftsentwurf</span>
        </div>
        <p className="text-sm text-zinc-900 leading-relaxed bg-brand-cloud/60 p-3 border-l-2 border-brand-black font-sans">
          «{data.communication}»
        </p>
      </div>

      {/* Adversarial Projection */}
      <div className="bg-brand-black text-white p-4 border-l-4 border-brand-red">
        <span className="type-signage text-zinc-400 block mb-1">
          Mögliche mediale Zuspitzung
        </span>
        <h2 className="text-lg sm:text-xl font-bold tracking-tight leading-snug text-white font-sans">
          {data.headline_from_hell}
        </h2>
      </div>

      {/* Grid: Stakeholders + Risk & Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Left Column: Stakeholder Reactions */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="type-signage text-zinc-600">
              Erwartete Reaktionen nach Stakeholder
            </h3>
          </div>

          <div className="space-y-3">
            {data.stakeholder_reactions.map((stk, idx) => {
              const isNeg = stk.sentiment === 'negative';
              const isPos = stk.sentiment === 'positive';

              return (
                <div
                  key={idx}
                  className={`bg-white p-3.5 swiss-border transition-all ${
                    isNeg
                      ? 'border-l-4 border-l-brand-red'
                      : isPos
                      ? 'border-l-4 border-l-brand-black'
                      : 'border-l-4 border-l-zinc-400'
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                    <span className="font-semibold text-xs text-zinc-900 font-sans">
                      {stk.stakeholder}
                    </span>
                    <span
                      className={`type-mono text-[9px] px-1.5 py-0.5 font-medium ${
                        isNeg
                          ? 'bg-brand-red/10 text-brand-red border border-brand-red/30'
                          : isPos
                          ? 'bg-zinc-100 text-zinc-900 border border-zinc-300'
                          : 'bg-zinc-100 text-zinc-700'
                      }`}
                    >
                      {stk.likely_reaction}
                    </span>
                  </div>

                  <p className="text-xs text-zinc-700 leading-relaxed font-sans mb-2">
                    {stk.reasoning}
                  </p>

                  <div className="bg-brand-cloud/70 px-2.5 py-1.5 border-l-2 border-brand-aluminum type-mono text-[11px] text-zinc-600">
                    <span className="text-zinc-500 font-semibold mr-1">Referenz:</span>
                    <span className="italic">{stk.dossier_citation}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Second Order Effects */}
          <div className="bg-white p-4 swiss-border">
            <h4 className="type-signage text-zinc-600 mb-2">
              Mögliche Folgewirkungen
            </h4>
            <div className="space-y-2">
              {data.second_order_effects.map((eff, i) => (
                <div key={i} className="flex items-start gap-2 text-xs py-1 border-b border-zinc-100 last:border-none">
                  <ArrowRight className="w-3.5 h-3.5 text-zinc-400 shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <span className="text-zinc-800">{eff.effect}</span>
                  </div>
                  <div className="type-mono text-[10px] text-zinc-400 shrink-0">
                    {eff.timeframe}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Risk & Summary */}
        <div className="space-y-4">
          <RiskGauge
            score={data.risk_score}
            verdict={data.management_summary.verdict}
          />

          {/* Critical Vulnerabilities */}
          <div className="bg-white p-4 swiss-border">
            <h4 className="type-signage text-zinc-500 mb-2">
              Schwachstellen im Entwurf
            </h4>
            <div className="space-y-2.5">
              {data.vulnerabilities.map((v, i) => (
                <div key={i} className="bg-brand-cloud/70 p-2.5 border-l-2 border-brand-red">
                  <div className="font-semibold text-xs text-zinc-900 mb-0.5">
                    {v.topic}
                  </div>
                  <p className="text-[11px] text-zinc-600 leading-snug">
                    {v.explanation}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Diagnosis */}
          <div className="bg-white p-4 swiss-border">
            <h4 className="type-signage text-zinc-500 mb-2">Gesamtbeurteilung</h4>
            <p className="text-xs text-zinc-700 leading-relaxed mb-2">
              {data.management_summary.diagnosis}
            </p>
            <p className="text-xs text-zinc-800 leading-relaxed font-medium">
              {data.management_summary.impact}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
