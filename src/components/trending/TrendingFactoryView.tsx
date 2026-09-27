import React, { useState } from 'react';
import { TRENDING_FIXTURES, ContentFormatId, FormatBlueprint } from '../../fixtures/trendingFixtures';
import { TrendingUp, Sparkles, Target, Users, BookOpen, Send, Radio, HelpCircle } from 'lucide-react';

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
    <div className="space-y-6">
      {/* Top Banner: Emergent Trends */}
      <div className="flex items-center justify-between pb-2 border-b border-brand-aluminum">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-brand-red" />
          <h2 className="type-signage text-zinc-900">
            EMERGENT NARRATIVES & VIRAL TIPPING POINTS
          </h2>
        </div>
        <span className="type-mono text-[10px] text-zinc-500 font-bold">
          3 RELEVANTE NARRATIVE AKTIV
        </span>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {data.cards.map((card, idx) => {
          const isSelected = idx === activeStoryIndex;

          return (
            <div
              key={card.id}
              onClick={() => setActiveStoryIndex(idx)}
              className={`bg-white p-4 swiss-border cursor-pointer transition-all ${
                isSelected
                  ? 'border-brand-black shadow-brutalist bg-zinc-50/50'
                  : 'hover:border-zinc-400 hover:bg-brand-cloud/40'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="type-mono text-[9px] bg-brand-black text-white px-1.5 py-0.5 font-bold uppercase">
                  {card.topic}
                </span>
                <span className="type-mono text-[10px] font-black text-brand-red">
                  {card.velocity_change}
                </span>
              </div>

              <h3 className="font-bold text-xs text-zinc-900 leading-snug mb-2 font-sans line-clamp-2">
                {card.headline}
              </h3>

              <p className="text-[11px] text-zinc-600 line-clamp-2 mb-3">
                {card.summary}
              </p>

              {/* Tipping Point Score & Sentiment */}
              <div className="space-y-1.5 pt-2 border-t border-brand-aluminum">
                <div className="flex justify-between text-[10px] type-mono">
                  <span className="text-zinc-500">TIPPING-POINT RISIKO:</span>
                  <span className="font-bold text-brand-red">{card.tipping_point_score} / 100</span>
                </div>
                <div className="h-1.5 bg-brand-cloud w-full flex overflow-hidden border border-brand-aluminum">
                  <div style={{ width: `${card.sentiment_split.negative}%` }} className="bg-brand-red" title="Negativ" />
                  <div style={{ width: `${card.sentiment_split.neutral}%` }} className="bg-zinc-400" title="Neutral" />
                  <div style={{ width: `${card.sentiment_split.positive}%` }} className="bg-brand-black" title="Positiv" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Content Factory: Strategic Blueprint Generator */}
      <div className="bg-white swiss-border p-5 shadow-sm mt-6">
        <div className="flex flex-wrap items-center justify-between gap-3 pb-3 mb-4 border-b border-brand-aluminum">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-brand-red" />
            <div>
              <span className="type-signage text-zinc-500 block">STRATEGIC CONTENT FACTORY</span>
              <h3 className="font-bold text-sm text-zinc-900 font-mono">
                META-COMMUNICATION BLUEPRINT: {activeCard.topic}
              </h3>
            </div>
          </div>
          <span className="type-mono text-[10px] bg-brand-cloud border border-brand-aluminum px-2.5 py-1 text-zinc-600 font-bold">
            ADVISORY FOCUS: STRATEGISCHE RAHMUNG
          </span>
        </div>

        {/* Format Selector Tabs */}
        <div className="flex flex-wrap gap-1 bg-brand-aluminum p-1 mb-4">
          <button
            onClick={() => setSelectedFormat('hintergrund')}
            className={`flex-1 min-w-[130px] px-3 py-2 text-xs type-signage flex items-center justify-center gap-1.5 transition-all ${
              selectedFormat === 'hintergrund'
                ? 'bg-brand-black text-white'
                : 'bg-white text-zinc-700 hover:bg-brand-cloud'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>HINTERGRUND</span>
          </button>

          <button
            onClick={() => setSelectedFormat('social')}
            className={`flex-1 min-w-[130px] px-3 py-2 text-xs type-signage flex items-center justify-center gap-1.5 transition-all ${
              selectedFormat === 'social'
                ? 'bg-brand-black text-white'
                : 'bg-white text-zinc-700 hover:bg-brand-cloud'
            }`}
          >
            <Send className="w-3.5 h-3.5" />
            <span>SOCIAL MEDIA</span>
          </button>

          <button
            onClick={() => setSelectedFormat('talking_points')}
            className={`flex-1 min-w-[130px] px-3 py-2 text-xs type-signage flex items-center justify-center gap-1.5 transition-all ${
              selectedFormat === 'talking_points'
                ? 'bg-brand-black text-white'
                : 'bg-white text-zinc-700 hover:bg-brand-cloud'
            }`}
          >
            <Radio className="w-3.5 h-3.5" />
            <span>TALKING POINTS</span>
          </button>

          <button
            onClick={() => setSelectedFormat('qa_brief')}
            className={`flex-1 min-w-[130px] px-3 py-2 text-xs type-signage flex items-center justify-center gap-1.5 transition-all ${
              selectedFormat === 'qa_brief'
                ? 'bg-brand-black text-white'
                : 'bg-white text-zinc-700 hover:bg-brand-cloud'
            }`}
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Q&A BRIEF</span>
          </button>
        </div>

        {/* Blueprint Context Badges */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4 bg-brand-cloud/60 p-3 border border-brand-aluminum">
          <div className="flex items-start gap-2">
            <Users className="w-3.5 h-3.5 text-zinc-500 mt-0.5 shrink-0" />
            <div className="text-[11px]">
              <span className="type-mono font-bold text-zinc-600 block uppercase">Zielgruppe:</span>
              <span className="text-zinc-800">{blueprint.target_audience}</span>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Target className="w-3.5 h-3.5 text-brand-red mt-0.5 shrink-0" />
            <div className="text-[11px]">
              <span className="type-mono font-bold text-zinc-600 block uppercase">Psychologisches Ziel:</span>
              <span className="text-zinc-800">{blueprint.psychological_objective}</span>
            </div>
          </div>
        </div>

        {/* Blueprint Markdown Content */}
        <div className="bg-white p-5 border border-brand-aluminum font-sans text-xs sm:text-sm text-zinc-800 leading-relaxed whitespace-pre-line border-l-4 border-l-brand-black">
          {blueprint.blueprint_content}
        </div>
      </div>
    </div>
  );
};
