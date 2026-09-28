import React from 'react';
import { StakeholderNode } from '../../fixtures/cascadeFixtures';
import { AlertCircle, CheckCircle2, HelpCircle, Quote } from 'lucide-react';

interface Props {
  node: StakeholderNode;
  index: number;
}

export const CascadeNode: React.FC<Props> = ({ node, index }) => {
  const sentimentConfig = {
    positive: {
      border: 'border-emerald-500',
      badge: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      icon: CheckCircle2,
      accent: 'var(--sbb-black)',
      label: 'POSITIV / ZUSTIMMEND'
    },
    negative: {
      border: 'border-sbb-red',
      badge: 'bg-red-50 text-sbb-red border-red-200',
      icon: AlertCircle,
      accent: 'var(--sbb-red)',
      label: 'KRITISCH / ABLEHNEND'
    },
    mixed: {
      border: 'border-amber-500',
      badge: 'bg-amber-50 text-amber-800 border-amber-200',
      icon: HelpCircle,
      accent: 'var(--sbb-stone)',
      label: 'ABWARTEND / GEMISCHT'
    },
  }[node.sentiment || 'mixed'];

  const Icon = sentimentConfig.icon;

  return (
    <div className="bg-white border border-sbb-aluminum p-6 flex flex-col justify-between hover:border-sbb-black transition-all shadow-sm group">
      <div>
        {/* Header with Stakeholder Index & Sentiment Tag */}
        <div className="flex items-start justify-between gap-3 mb-4 pb-3 border-b border-zinc-100">
          <div>
            <div className="text-[10px] font-mono text-sbb-stone uppercase tracking-wider mb-1">
              STAKEHOLDER 0{index + 1}
            </div>
            <h4 className="font-bold text-base text-sbb-black tracking-tight group-hover:text-sbb-red transition-colors">
              {node.stakeholder}
            </h4>
          </div>

          <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-mono font-bold uppercase border ${sentimentConfig.badge} shrink-0`}>
            <Icon className="w-3 h-3" />
            <span>{node.likely_reaction}</span>
          </span>
        </div>

        {/* Tactical Reasoning */}
        <div className="mb-4">
          <div className="text-[10px] font-mono text-sbb-stone uppercase tracking-wider mb-1.5">
            ERWARTETE REAKTION & BEGRÜNDUNG
          </div>
          <p className="text-sm text-zinc-700 leading-relaxed">
            {node.reasoning}
          </p>
        </div>
      </div>

      {/* Dossier Quote / Precedent */}
      {node.dossier_citation && (
        <div className="mt-4 pt-3 border-t border-zinc-100 bg-sbb-cloud/60 p-3.5 border-l-2 border-sbb-black/40">
          <div className="flex items-center gap-1.5 text-[9px] font-mono uppercase text-sbb-stone mb-1 font-bold">
            <Quote className="w-3 h-3 text-sbb-red" />
            <span>BELEG AUS DOSSIER-ARCHIV</span>
          </div>
          <p className="text-xs italic text-sbb-black leading-snug">
            «{node.dossier_citation}»
          </p>
        </div>
      )}
    </div>
  );
};

export default CascadeNode;
