import React from 'react';
import { CASCADE_FIXTURES } from '../../fixtures/cascadeFixtures';
import { CascadeNode } from './CascadeNode';
import { RiskGauge } from './RiskGauge';
import { DataPlateAccentCell, DataPlateSignage } from '../ui/DataPlate';

interface Props {
  scenarioId: string;
  isStreaming: boolean;
  streamProgress: number;
}

const Connector: React.FC = () => (
  <div className="h-4 bg-white flex items-center justify-center">
    <div className="w-px h-full bg-sbb-aluminum" />
  </div>
);

export const NarrativeCascadeView: React.FC<Props> = ({
  scenarioId,
  isStreaming,
  streamProgress
}) => {
  const data = CASCADE_FIXTURES[scenarioId] || CASCADE_FIXTURES.gotthard_freight;

  return (
    <div className="space-y-4">
      <DataPlateSignage
        label="BOTSCHAFTS-STRESSTEST // REAKTIONSSIMULATION"
        metadata="STAKEHOLDER-ABGLEICH & RISIKOBEWERTUNG"
      />

      <div className="flex flex-col bg-sbb-aluminum gap-[1px]">
        {/* Row 1: Input Strategy */}
        <DataPlateAccentCell accent="INPUT" className="bg-white">
          <h4 className="type-caption text-sbb-stone mb-2">Botschaftsentwurf</h4>
          <p className="type-h2 italic text-sbb-black">«{data.communication}»</p>
        </DataPlateAccentCell>

        <Connector />

        {/* Row 2: Headline from Hell */}
        {data.headline_from_hell && (
          <div className="bg-sbb-red/5 p-6">
            <h4 className="type-caption text-sbb-red mb-2">Mediale Zuspitzung</h4>
            <p className="type-h1 font-black text-sbb-red uppercase leading-none">
              {data.headline_from_hell}
            </p>
          </div>
        )}

        <Connector />

        {/* Row 3: Stakeholder Reactions */}
        <div className="bg-sbb-aluminum grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px]">
          {data.stakeholder_reactions.map((node, i) => (
            <CascadeNode key={i} node={node} index={i} />
          ))}
        </div>

        {/* Row 4: Second Order Effects */}
        {data.second_order_effects && data.second_order_effects.length > 0 && (
          <>
            <Connector />
            <div className="bg-white p-6">
              <h4 className="type-caption text-sbb-stone mb-4">Folgewirkungen zweiter Ordnung</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {data.second_order_effects.map((effect, i) => (
                  <div key={i} className="border-l-2 border-sbb-stone pl-3">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="type-ui font-black text-sbb-black">{effect.effect}</span>
                      <span className="type-mono text-[9px] px-1.5 py-0.5 bg-sbb-cloud text-sbb-stone uppercase">
                        {effect.probability}
                      </span>
                    </div>
                    {effect.timeframe && (
                      <p className="type-mono text-[10px] text-sbb-stone">{effect.timeframe}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        <Connector />

        {/* Row 5: Risk & Outcome */}
        <div className="bg-white p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-3">
            <h4 className="type-caption text-sbb-stone mb-2">Management Summary</h4>
            {data.management_summary?.diagnosis && (
              <p className="type-body text-sbb-black">
                <strong className="text-sbb-stone mr-2">Diagnose:</strong>
                {data.management_summary.diagnosis}
              </p>
            )}
            {data.management_summary?.impact && (
              <p className="type-body text-sbb-black">
                <strong className="text-sbb-stone mr-2">Auswirkung:</strong>
                {data.management_summary.impact}
              </p>
            )}
            {data.management_summary?.verdict && (
              <p className="type-body text-sbb-black">
                <strong className="text-sbb-stone mr-2">Empfehlung:</strong>
                {data.management_summary.verdict}
              </p>
            )}
          </div>
          <div className="bg-sbb-cloud/40 p-4 border border-sbb-aluminum flex flex-col justify-center">
            <RiskGauge score={data.risk_score} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NarrativeCascadeView;
