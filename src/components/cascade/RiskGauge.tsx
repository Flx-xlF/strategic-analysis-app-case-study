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
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <span className="type-ui text-sbb-stone font-black">
          RISIKO-INDEX
        </span>
        <span
          className={`type-mono font-black text-base ${
            isHigh ? 'text-sbb-red' : isMedium ? 'text-amber-600' : 'text-sbb-black'
          }`}
        >
          {score.toFixed(1)}/10
        </span>
      </div>

      {/* Progress Bar */}
      <div className="h-2 bg-sbb-cloud w-full relative overflow-hidden">
        <div
          className={`absolute top-0 left-0 h-full transition-all duration-700 ${
            isHigh ? 'bg-sbb-red' : isMedium ? 'bg-amber-600' : 'bg-sbb-black'
          }`}
          style={{ width: `${pct}%` }}
        />
      </div>

      {verdict && (
        <p className="type-body text-sbb-stone italic text-[11px] mt-1">
          {verdict}
        </p>
      )}
    </div>
  );
};

export default RiskGauge;
