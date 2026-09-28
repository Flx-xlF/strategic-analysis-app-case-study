import React, { useState } from 'react';
import { TRENDING_FIXTURES, ContentFormatId, FormatBlueprint } from '../../fixtures/trendingFixtures';
import { 
  ArrowRight, 
  BarChart2, 
  Check, 
  Copy, 
  FileText, 
  HelpCircle, 
  Layers, 
  MessageSquare, 
  Mic, 
  Radio, 
  Share2, 
  Sparkles, 
  TrendingUp, 
  Users 
} from 'lucide-react';

interface Props {
  scenarioId: string;
  isStreaming: boolean;
  streamProgress: number;
}

const FORMAT_TABS: Array<{ 
  id: ContentFormatId; 
  label: string; 
  subtitle: string;
  icon: React.ElementType;
}> = [
  { 
    id: 'hintergrund', 
    label: 'Hintergrundartikel', 
    subtitle: 'Wirtschafts- & Fachpresse',
    icon: FileText 
  },
  { 
    id: 'social', 
    label: 'Social Media Response', 
    subtitle: 'Öffentliche Kanäle',
    icon: Share2 
  },
  { 
    id: 'talking_points', 
    label: 'Talking Points', 
    subtitle: 'Direktion & Mediensprecher',
    icon: Mic 
  },
  { 
    id: 'qa_brief', 
    label: 'Q&A Leitfaden', 
    subtitle: 'Medienstelle & Hotline',
    icon: HelpCircle 
  },
];

export const TrendingFactoryView: React.FC<Props> = ({
  scenarioId,
  isStreaming,
  streamProgress
}) => {
  const data = TRENDING_FIXTURES[scenarioId] || TRENDING_FIXTURES.health_data_breach;
  const [selectedFormat, setSelectedFormat] = useState<ContentFormatId>('hintergrund');
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  const activeCard = data.cards[activeStoryIndex] || data.cards[0];
  const blueprint: FormatBlueprint = data.blueprints[selectedFormat];

  const handleCopy = () => {
    navigator.clipboard.writeText(blueprint.blueprint_content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-8">
      {/* ═══ WAYFINDING HEADER & EXECUTIVE TELEMETRY RIBBON ═══ */}
      <div className="bg-white border border-sbb-aluminum p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-6 border-b border-zinc-100 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-sbb-red uppercase mb-1.5">
              <Sparkles className="w-4 h-4" />
              <span>MODUL 03 // CONTENT-FACTORY</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-sbb-black tracking-tight">
              Themen-Narrative & Kanal-Briefings
            </h1>
            <p className="text-sm text-sbb-stone mt-1 max-w-3xl leading-relaxed">
              Erkennt virale Kipppunkte in der öffentlichen Diskussion und generiert zielgruppengenaue Kommunikationsvorlagen für alle relevanten Kanäle.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-sbb-cloud border border-sbb-aluminum font-mono text-xs text-sbb-black font-bold">
              <TrendingUp className="w-4 h-4 text-sbb-red" />
              <span>{data.cards.length} THEMEN IM MONITORING</span>
            </span>
          </div>
        </div>

        {/* Telemetry Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-2">
          <div className="p-4 bg-sbb-cloud/50 border-l-2 border-sbb-red">
            <div className="text-[10px] font-mono text-sbb-stone uppercase tracking-wider mb-1">
              FOKUS-THEMA
            </div>
            <div className="text-base font-bold text-sbb-black truncate">
              {activeCard.topic}
            </div>
            <div className="text-[10px] font-mono text-sbb-stone mt-1">
              Aktuell ausgewählt
            </div>
          </div>

          <div className="p-4 bg-sbb-cloud/50 border-l-2 border-zinc-800">
            <div className="text-[10px] font-mono text-sbb-stone uppercase tracking-wider mb-1">
              VIRALITÄTS-INDEX
            </div>
            <div className="text-2xl font-black text-sbb-red tracking-tight">
              {activeCard.tipping_point_score} <span className="text-xs font-normal text-sbb-stone font-mono">/ 100</span>
            </div>
            <div className="text-[10px] font-mono text-sbb-stone mt-1">Kipppunkt-Gefahr</div>
          </div>

          <div className="p-4 bg-sbb-cloud/50 border-l-2 border-zinc-800">
            <div className="text-[10px] font-mono text-sbb-stone uppercase tracking-wider mb-1">
              VERBREITUNGSTEMPO
            </div>
            <div className="text-2xl font-black text-sbb-black tracking-tight">
              {activeCard.velocity_change}
            </div>
            <div className="text-[10px] font-mono text-sbb-stone mt-1">Eskalationsdynamik</div>
          </div>

          <div className="p-4 bg-sbb-cloud/50 border-l-2 border-emerald-600">
            <div className="text-[10px] font-mono text-sbb-stone uppercase tracking-wider mb-1">
              VERFÜGBARE FORMATE
            </div>
            <div className="text-2xl font-black text-emerald-700 tracking-tight">
              4 / 4
            </div>
            <div className="text-[10px] font-mono text-sbb-stone mt-1">Sofort einsatzbereit</div>
          </div>
        </div>
      </div>

      {/* ═══ STEP 01: NARRATIVE STREAM SELECTOR ═══ */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-7 h-7 bg-sbb-black text-white font-mono text-xs font-bold flex items-center justify-center">
              01
            </span>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-sbb-stone">
              DETEKTIERTE NARRATIVE // THEMA WÄHLEN
            </span>
          </div>
          <span className="text-xs font-mono text-sbb-stone">
            Klicken Sie auf ein Thema, um die passenden Vorlagen zu laden
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.cards.map((card, idx) => {
            const isSelected = idx === activeStoryIndex;

            return (
              <div
                key={card.id}
                onClick={() => setActiveStoryIndex(idx)}
                className={`p-6 sm:p-7 flex flex-col justify-between cursor-pointer transition-all border shadow-sm ${
                  isSelected 
                    ? 'bg-white border-2 border-sbb-red shadow-md ring-2 ring-red-100' 
                    : 'bg-white border-sbb-aluminum hover:border-zinc-400'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3 pb-2 border-b border-zinc-100">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-sbb-stone">
                      {card.topic}
                    </span>
                    <span className="text-[10px] font-mono font-bold text-sbb-red px-2 py-0.5 bg-red-50 border border-red-200">
                      {card.velocity_change}
                    </span>
                  </div>

                  <h3 className="font-bold text-base text-sbb-black leading-snug mb-3">
                    {card.headline}
                  </h3>

                  <p className="text-xs text-zinc-600 leading-relaxed mb-6">
                    {card.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-zinc-100 space-y-3">
                  <div>
                    <div className="flex items-center justify-between text-[10px] font-mono text-sbb-stone mb-1">
                      <span>KIPPPUNKT-INDEX:</span>
                      <span className="font-bold text-sbb-black">{card.tipping_point_score} / 100</span>
                    </div>
                    <div className="h-1.5 bg-zinc-100 w-full overflow-hidden">
                      <div 
                        className="h-full bg-sbb-red transition-all" 
                        style={{ width: `${card.tipping_point_score}%` }} 
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <span className="text-[10px] font-mono text-zinc-400">
                      MEDIEN: {card.outlets_involved.join(', ')}
                    </span>
                    {isSelected && (
                      <span className="text-[10px] font-mono font-bold text-sbb-red flex items-center gap-1">
                        <span>AKTIV</span>
                        <ArrowRight className="w-3 h-3" />
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ═══ STEP 02: MULTI-CHANNEL CONTENT STUDIO ═══ */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <span className="w-7 h-7 bg-sbb-black text-white font-mono text-xs font-bold flex items-center justify-center">
            02
          </span>
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-sbb-stone">
            CONTENT-STUDIO // KANAL-SPEZIFISCHE SYNTHESE
          </span>
        </div>

        <div className="bg-white border border-sbb-aluminum shadow-sm">
          {/* Format Selector Tabs */}
          <div className="grid grid-cols-2 md:grid-cols-4 border-b border-sbb-aluminum bg-sbb-cloud/40">
            {FORMAT_TABS.map(fmt => {
              const Icon = fmt.icon;
              const isSelected = selectedFormat === fmt.id;

              return (
                <button
                  key={fmt.id}
                  onClick={() => setSelectedFormat(fmt.id)}
                  className={`p-4 sm:p-5 text-left border-r border-sbb-aluminum last:border-r-0 transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-white border-b-2 border-b-sbb-red shadow-xs'
                      : 'hover:bg-white/60 text-sbb-stone'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <Icon className={`w-4 h-4 ${isSelected ? 'text-sbb-red' : 'text-zinc-400'}`} />
                    <span className={`font-mono text-xs font-bold uppercase tracking-wider ${
                      isSelected ? 'text-sbb-black' : 'text-sbb-stone'
                    }`}>
                      {fmt.label}
                    </span>
                  </div>
                  <div className="text-[10px] font-mono text-zinc-400 pl-6">
                    {fmt.subtitle}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Strategy & Audience Chips */}
          <div className="p-6 sm:p-8 bg-zinc-50 border-b border-zinc-200 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-sbb-stone mb-1 flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-sbb-red" />
                <span>PRIMÄRE ZIELGRUPPE</span>
              </div>
              <p className="text-sm font-bold text-sbb-black">
                {blueprint.target_audience}
              </p>
            </div>

            <div>
              <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-sbb-stone mb-1 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-sbb-red" />
                <span>STRATEGISCHES WIRKUNGSZIEL</span>
              </div>
              <p className="text-sm text-zinc-800">
                {blueprint.psychological_objective}
              </p>
            </div>
          </div>

          {/* Blueprint Editor Preview */}
          <div className="p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-zinc-100">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-sbb-stone">
                GENERIERTE VORLAGE (FREIGABEFÄHIG)
              </span>

              <button
                onClick={handleCopy}
                className="px-4 py-2 bg-sbb-black hover:bg-zinc-800 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-sm"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Kopiert</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-zinc-400" />
                    <span>Vorlage kopieren</span>
                  </>
                )}
              </button>
            </div>

            <div className="bg-sbb-cloud/40 p-6 sm:p-8 border-l-4 border-sbb-black text-sm text-sbb-black leading-relaxed whitespace-pre-line font-mono max-w-4xl">
              {blueprint.blueprint_content}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingFactoryView;
