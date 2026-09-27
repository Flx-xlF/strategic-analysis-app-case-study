import React, { useState } from 'react';
import { TRENDING_FIXTURES, ContentFormatId, FormatBlueprint } from '../../fixtures/trendingFixtures';

interface Props {
  scenarioId: string;
  isStreaming: boolean;
  streamProgress: number;
}

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
    <div className="space-y-5">
      {/* Top Header */}
      <div className="flex items-center justify-between pb-2 border-b border-brand-aluminum">
        <h2 className="type-signage text-zinc-900">
          Aktuelle Themen & Narrative
        </h2>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
        {data.cards.map((card, idx) => {
          const isSelected = idx === activeStoryIndex;

          return (
            <div
              key={card.id}
              onClick={() => setActiveStoryIndex(idx)}
              className={`bg-white p-3.5 swiss-border cursor-pointer transition-all ${
                isSelected
                  ? 'border-brand-black bg-zinc-50'
                  : 'hover:border-zinc-400'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="type-mono text-[9px] bg-zinc-100 text-zinc-800 px-1 py-0.2 font-medium">
                  {card.topic}
                </span>
                <span className="type-mono text-[10px] text-zinc-600 font-medium">
                  {card.velocity_change}
                </span>
              </div>

              <h3 className="font-semibold text-xs text-zinc-900 leading-snug mb-1.5 font-sans">
                {card.headline}
              </h3>

              <p className="text-[11px] text-zinc-600 line-clamp-2 mb-2">
                {card.summary}
              </p>

              <div className="space-y-1 pt-1.5 border-t border-brand-aluminum">
                <div className="flex justify-between text-[10px] type-mono text-zinc-500">
                  <span>Dynamik:</span>
                  <span className="font-medium text-zinc-800">{card.tipping_point_score} / 100</span>
                </div>
                <div className="h-1 bg-brand-cloud w-full flex overflow-hidden border border-brand-aluminum">
                  <div style={{ width: `${card.sentiment_split.negative}%` }} className="bg-brand-red" />
                  <div style={{ width: `${card.sentiment_split.neutral}%` }} className="bg-zinc-400" />
                  <div style={{ width: `${card.sentiment_split.positive}%` }} className="bg-zinc-800" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Content Factory */}
      <div className="bg-white swiss-border p-4 mt-5">
        <div className="pb-2 mb-3 border-b border-brand-aluminum flex items-center justify-between">
          <span className="type-signage text-zinc-800">
            Briefing-Erstellung: {activeCard.topic}
          </span>
        </div>

        {/* Format Selector Tabs */}
        <div className="flex flex-wrap gap-1 bg-brand-aluminum p-1 mb-3">
          <button
            onClick={() => setSelectedFormat('hintergrund')}
            className={`flex-1 min-w-[120px] px-3 py-1.5 text-xs type-signage transition-all ${
              selectedFormat === 'hintergrund'
                ? 'bg-brand-black text-white'
                : 'bg-white text-zinc-700 hover:bg-brand-cloud'
            }`}
          >
            Hintergrundartikel
          </button>

          <button
            onClick={() => setSelectedFormat('social')}
            className={`flex-1 min-w-[120px] px-3 py-1.5 text-xs type-signage transition-all ${
              selectedFormat === 'social'
                ? 'bg-brand-black text-white'
                : 'bg-white text-zinc-700 hover:bg-brand-cloud'
            }`}
          >
            Social Media
          </button>

          <button
            onClick={() => setSelectedFormat('talking_points')}
            className={`flex-1 min-w-[120px] px-3 py-1.5 text-xs type-signage transition-all ${
              selectedFormat === 'talking_points'
                ? 'bg-brand-black text-white'
                : 'bg-white text-zinc-700 hover:bg-brand-cloud'
            }`}
          >
            Talking Points
          </button>

          <button
            onClick={() => setSelectedFormat('qa_brief')}
            className={`flex-1 min-w-[120px] px-3 py-1.5 text-xs type-signage transition-all ${
              selectedFormat === 'qa_brief'
                ? 'bg-brand-black text-white'
                : 'bg-white text-zinc-700 hover:bg-brand-cloud'
            }`}
          >
            Q&A Leitfaden
          </button>
        </div>

        {/* Context Badges */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-3 bg-brand-cloud/60 p-2.5 border border-brand-aluminum text-[11px]">
          <div>
            <span className="text-zinc-500 font-medium mr-1.5">Zielgruppe:</span>
            <span className="text-zinc-800">{blueprint.target_audience}</span>
          </div>
          <div>
            <span className="text-zinc-500 font-medium mr-1.5">Fokus:</span>
            <span className="text-zinc-800">{blueprint.psychological_objective}</span>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white p-4 border border-brand-aluminum text-xs text-zinc-800 leading-relaxed whitespace-pre-line border-l-2 border-l-brand-black font-sans">
          {blueprint.blueprint_content}
        </div>
      </div>
    </div>
  );
};
