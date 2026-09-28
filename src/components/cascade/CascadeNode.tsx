import React from 'react';
import { StakeholderNode } from '../../fixtures/cascadeFixtures';

interface Props {
  node: StakeholderNode;
  index: number;
}

export const CascadeNode: React.FC<Props> = ({ node, index }) => {
  const sentimentColor = {
    positive: 'shadow-[inset_0_-3px_0_0_var(--sbb-black)]',
    negative: 'shadow-[inset_0_-3px_0_0_var(--sbb-red)]',
    mixed: 'shadow-[inset_0_-3px_0_0_var(--sbb-stone)]',
  }[node.sentiment || 'mixed'];

  const isNeg = node.likely_reaction.toLowerCase().includes('kritik') || 
                node.likely_reaction.toLowerCase().includes('protest') ||
                node.likely_reaction.toLowerCase().includes('ablehnung');

  return (
    <div
      className={`bg-white p-4 flex flex-col gap-2 hover:bg-sbb-cloud transition-all ${sentimentColor}`}
    >
      <div className="flex items-center justify-between gap-2">
        <span className="type-ui font-black text-sbb-black truncate">
          {node.stakeholder}
        </span>
        <span className={`type-mono text-[9px] px-2 py-0.5 font-bold uppercase shrink-0 ${
          isNeg
            ? 'bg-sbb-red text-white'
            : node.sentiment === 'positive'
            ? 'bg-sbb-black text-white'
            : 'bg-sbb-cloud text-sbb-stone'
        }`}>
          {node.likely_reaction}
        </span>
      </div>
      <p className="type-body text-sbb-stone text-[11px] leading-snug">
        {node.reasoning}
      </p>
      {node.dossier_citation && (
        <div className="p-2 bg-sbb-cloud/50 border-l-2 border-sbb-aluminum italic type-body text-[10px] text-sbb-stone">
          «{node.dossier_citation}»
        </div>
      )}
    </div>
  );
};

export default CascadeNode;
