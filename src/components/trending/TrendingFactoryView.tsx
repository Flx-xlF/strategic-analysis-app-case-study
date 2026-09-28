import React, { useState } from 'react';
import { TRENDING_FIXTURES, ContentFormatId, FormatBlueprint } from '../../fixtures/trendingFixtures';
import { DataPlateGrid, DataPlateCell, DataPlateSignage } from '../ui/DataPlate';

interface Props {
  scenarioId: string;
  isStreaming: boolean;
  streamProgress: number;
}

const FORMAT_TABS: Array<{ id: ContentFormatId; label: string }> = [
  { id: 'hintergrund', label: 'Hintergrundartikel' },
  { id: 'social', label: 'Social Media' },
  { id: 'talking_points', label: 'Talking Points' },
  { id: 'qa_brief', label: 'Q&A Brief' },
];

export const TrendingFactoryView: React.FC<Props> = ({
  scenarioId,
  isStreaming,
  streamProgress
}) => {
  const data = TRENDING_FIXTURES[scenarioId] || TRENDING_FIXTURES.counter_closure;
  const [selectedFormat, setSelectedFormat] = useState<ContentFormatId>('hintergrund');
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);

  const activeCard = data.cards[activeStoryIndex] || data.cards[0];
  const blueprint: FormatBlueprint = data.blueprints[selectedFormat];

  return (
    <div className="space-y-4">
      <DataPlateSignage
        label="BRIEFINGS & VORLAGEN // THEMEN-NARRATIVE"
        metadata={`AKTIVES NARRATIV: ${activeCard.topic}`}
      />

      {/* Narrative Cards Seam Grid */}
      <DataPlateGrid className="grid-cols-1 md:grid-cols-3">
        {data.cards.map((card, idx) => {
          const isSelected = idx === activeStoryIndex;

          return (
            <div
              key={card.id}
              onClick={() => setActiveStoryIndex(idx)}
              className={`p-5 flex flex-col justify-between cursor-pointer transition-all ${
                isSelected 
                  ? 'bg-white shadow-[inset_0_-3px_0_0_var(--sbb-red)]' 
                  : 'bg-white/80 hover:bg-white'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="type-ui text-sbb-stone font-bold">
                    {card.topic}
                  </span>
                  <span className="type-mono text-[10px] text-sbb-red font-black">
                    {card.velocity_change}
                  </span>
                </div>

                <h3 className="type-card-title mb-2">
                  {card.headline}
                </h3>

                <p className="type-body text-sbb-stone leading-relaxed mb-4">
                  {card.summary}
                </p>
              </div>

              <div className="pt-2 border-t border-sbb-aluminum flex items-center justify-between type-mono text-[10px] text-sbb-stone">
                <span>DYNAMIK:</span>
                <span className="font-bold text-sbb-black">{card.tipping_point_score} / 100</span>
              </div>
            </div>
          );
        })}
      </DataPlateGrid>

      {/* Content Factory Chassis */}
      <div className="flex flex-col bg-sbb-aluminum gap-[1px]">
        {/* Format Selector Bar (Direct Port from actual app FormatSelector) */}
        <div className="flex gap-[1px] bg-sbb-aluminum">
          {FORMAT_TABS.map(fmt => (
            <button
              key={fmt.id}
              onClick={() => setSelectedFormat(fmt.id)}
              className={`flex-1 px-4 py-2.5 type-ui font-black uppercase tracking-widest text-[10px] transition-all cursor-pointer ${
                selectedFormat === fmt.id
                  ? 'bg-sbb-black text-white'
                  : 'bg-white text-sbb-stone hover:bg-sbb-cloud'
              }`}
            >
              {fmt.label}
            </button>
          ))}
        </div>

        {/* Blueprint Metadata Row */}
        <div className="bg-sbb-cloud/40 p-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div>
            <span className="type-ui text-sbb-stone block mb-1">Zielgruppe</span>
            <span className="type-body text-sbb-black">{blueprint.target_audience}</span>
          </div>
          <div>
            <span className="type-ui text-sbb-stone block mb-1">Strategischer Fokus</span>
            <span className="type-body text-sbb-black">{blueprint.psychological_objective}</span>
          </div>
        </div>

        {/* Blueprint Content Cell */}
        <DataPlateCell className="bg-white">
          <div className="type-body text-sbb-black max-w-[65ch] leading-relaxed whitespace-pre-line p-4 bg-sbb-cloud/20 border-l-2 border-sbb-black">
            {blueprint.blueprint_content}
          </div>
        </DataPlateCell>
      </div>
    </div>
  );
};

export default TrendingFactoryView;
