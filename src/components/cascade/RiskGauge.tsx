import React from 'react';
import { AlertTriangle, ShieldAlert, CheckCircle } from 'lucide-react';

interface Props {
  score: number; // 0-10
  verdict?: string;
}

export const RiskGauge: React.FC<Props> = ({ score, verdict }) => {
  const pct = Math.min(Math.max((score / 10) * 100, 0), 100);
  const isHigh = score >= 7.0;
  const isMedium = score >= 4.0 && score < 7.0;

  return (
    <div className="flex flex-col justify-between h-full space-y-4">
      <div>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            {isHigh ? (
              <ShieldAlert className="w-4 h-4 text-sbb-red" />
            ) : isMedium ? (
              <AlertTriangle className="w-4 h-4 text-amber-600" />
            ) : (
              <CheckCircle className="w-4 h-4 text-emerald-600" />
            )}
            <span className="type-ui font-black text-sbb-black text-[11px]">
              REPUTATIONS-RISIKO
            </span>
          </div>

          <span
            className={`font-mono font-black text-2xl tracking-tight ${
              isHigh ? 'text-sbb-red' : isMedium ? 'text-amber-600' : 'text-sbb-black'
            }`}
          >
            {score.toFixed(1)} <span className="text-xs font-normal text-sbb-stone">/ 10</span>
          </span>
        </div>

        {/* Progress Bar with Ticks */}
        <div className="relative h-3 bg-zinc-200 w-full overflow-hidden mb-2">
          <div
            className={`absolute top-0 left-0 h-full transition-all duration-700 ${
              isHigh ? 'bg-sbb-red' : isMedium ? 'bg-amber-600' : 'bg-sbb-black'
            }`}
            style={{ width: `${pct}%` }}
          />
          {/* Subtle Segment Grid Lines */}
          <div className="absolute inset-0 grid grid-cols-10 pointer-events-none divide-x divide-white/40" />
        </div>

        <div className="flex justify-between text-[9px] font-mono text-sbb-stone">
          <span>0.0 GERING</span>
          <span>5.0 MITTEL</span>
          <span className="font-bold text-sbb-red">10.0 KRITISCH</span>
        </div>
      </div>

      <div className={`p-3 border text-xs font-mono ${
        isHigh 
          ? 'bg-red-50 border-red-200 text-sbb-red font-bold' 
          : isMedium 
          ? 'bg-amber-50 border-amber-200 text-amber-800' 
          : 'bg-zinc-50 border-zinc-200 text-zinc-700'
      }`}>
        {isHigh ? 'STATUS: AKUTE ESKALATIONSGEFAHR' : isMedium ? 'STATUS: ERHÖHTE WACHSAMKEIT' : 'STATUS: KONTROLLIERT'}
      </div>

      {verdict && (
        <p className="text-xs text-sbb-stone italic border-t border-sbb-aluminum pt-2">
          {verdict}
        </p>
      )}
    </div>
  );
};

export default RiskGauge;
