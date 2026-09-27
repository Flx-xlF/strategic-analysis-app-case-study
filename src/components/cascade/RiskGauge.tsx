import React from 'react';

interface Props {
  score: number; // 0-10
  verdict?: string;
}

export const RiskGauge: React.FC<Props> = ({ score, verdict }) => {
  const pct = Math.min(Math.max((score / 10) * 100, 0), 100);
  const isHigh = score >= 7.0;
  const isMedium = score >= 4.0 && score < 7.0;

  return (
    <div className="bg-white p-4 swiss-border flex flex-col gap-2.5">
      <div className="flex items-center justify-between">
        <span className="type-signage text-zinc-500">
          STRATEGIC RISK INDEX
        </span>
        <span
          className={`type-mono font-black text-xl ${
            isHigh ? 'text-brand-red' : isMedium ? 'text-amber-600' : 'text-emerald-700'
          }`}
        >
          {score.toFixed(1)} / 10
        </span>
      </div>

      {/* Bar Gauge */}
      <div className="h-3 bg-brand-cloud w-full relative overflow-hidden border border-brand-aluminum">
        <div
          className={`h-full transition-all duration-700 ${
            isHigh ? 'bg-brand-red' : isMedium ? 'bg-amber-600' : 'bg-emerald-600'
          }`}
          style={{ width: `${pct}%` }}
        />
      </div>

      <div className="flex justify-between type-mono text-[9px] text-zinc-400 font-bold uppercase">
        <span>0.0 UNKRITISCH</span>
        <span>5.0 ERHÖHT</span>
        <span className="text-brand-red font-black">10.0 ESKALATION</span>
      </div>

      {verdict && (
        <div className="mt-1 pt-2 border-t border-brand-aluminum/60">
          <p className="type-mono text-[11px] font-semibold text-zinc-700 leading-snug">
            {verdict}
          </p>
        </div>
      )}
    </div>
  );
};
