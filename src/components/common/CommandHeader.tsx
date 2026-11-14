import React from 'react';
import { ScenarioMeta, Language } from '../../fixtures/scenarios';
import { WorldRegionId } from '../../fixtures/cockpitFixtures';
import { 
  ChevronDown, 
  Globe,
  BarChart3,
  BrainCircuit,
  Sparkles,
  ShieldCheck,
  HelpCircle,
  Compass,
  PlayCircle
} from 'lucide-react';

export type ActiveTab = 'overview' | 'cockpit' | 'geo' | 'trending' | 'cascade';

interface Props {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  selectedScenario: ScenarioMeta;
  scenariosList: ScenarioMeta[];
  onSelectScenario: (scenario: ScenarioMeta) => void;
  selectedRegion: WorldRegionId;
  onSelectRegion: (reg: WorldRegionId) => void;
  showConceptGuide: boolean;
  onToggleConceptGuide: () => void;
  showQuickTour?: boolean;
  onToggleQuickTour?: () => void;
  currentTourStep?: number;
  lang: Language;
  setLang: (lang: Language) => void;
  // Optional legacy props for backwards compatibility
  onSimulate?: () => void;
  isStreaming?: boolean;
  onAbort?: () => void;
}

export const CommandHeader: React.FC<Props> = ({
  activeTab,
  setActiveTab,
  selectedScenario,
  scenariosList,
  onSelectScenario,
  selectedRegion,
  onSelectRegion,
  showConceptGuide,
  onToggleConceptGuide,
  showQuickTour = false,
  onToggleQuickTour,
  currentTourStep = 0,
  lang,
  setLang
}) => {
  const isEn = lang === 'en';

  return (
    <>
      <header className="bg-white border-b border-sbb-aluminum lg:sticky lg:top-0 z-40">
        {/* Level 1: System Telemetry Bar */}
        <div className="bg-sbb-black text-white px-4 sm:px-8 py-2 flex flex-wrap items-center justify-between border-b border-zinc-800 gap-2 min-w-0">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-2.5 h-2.5 bg-sbb-red shrink-0" />
            <span className="type-ui font-black text-white tracking-[0.16em] sm:tracking-[0.2em] text-[10px] sm:text-[11px] truncate">
              TERRAIN // COMMS & AI SEARCH PROTOTYPE
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[10px] font-mono">
            {/* Honest methodology badge */}
            <div className="hidden lg:flex items-center gap-2 text-zinc-300">
              <span className="w-1.5 h-1.5 bg-zinc-400" />
              <span className="tracking-widest whitespace-nowrap">
                {isEn ? 'STATISTICAL FILTERING + AI AUDIT' : 'STATISTISCHE FILTERUNG + KI-PRÜFUNG'}
              </span>
            </div>

            <div className="hidden lg:block h-3 w-px bg-zinc-700" />

            {/* Signal Yellow Interactive Product Tour Toggle */}
            {onToggleQuickTour && (
              <button
                onClick={onToggleQuickTour}
                className={`px-2.5 py-1 font-mono text-[10px] font-black tracking-wider uppercase transition-all cursor-pointer border flex items-center gap-1.5 whitespace-nowrap ${
                  showQuickTour
                    ? 'bg-[#FFCC00] text-sbb-black border-[#FFCC00] shadow-[0_0_12px_rgba(255,204,0,0.45)]'
                    : 'bg-zinc-900 text-[#FFCC00] border-[#FFCC00]/80 hover:bg-[#FFCC00] hover:text-sbb-black'
                }`}
                title={isEn ? 'Toggle Interactive 5-Step Product Tour' : 'Interaktive 5-Schritte Product Tour ein-/ausblenden'}
              >
                <Compass className="w-3.5 h-3.5" />
                <span>{isEn ? 'Product Tour (5 Steps)' : 'Product Tour (5 Schritte)'}</span>
                {showQuickTour && (
                  <span className="w-1.5 h-1.5 rounded-full bg-sbb-red animate-pulse" />
                )}
              </button>
            )}

            {/* Concept, Method & IT Integration Toggle */}
            <button
              onClick={onToggleConceptGuide}
              className={`px-2.5 py-1 font-mono text-[10px] font-bold tracking-wider uppercase transition-colors cursor-pointer border flex items-center gap-1.5 whitespace-nowrap ${
                showConceptGuide
                  ? 'bg-sbb-red text-white border-sbb-red'
                  : showQuickTour && currentTourStep === 4
                  ? 'bg-zinc-900 text-white border-[#FFCC00] ring-2 ring-[#FFCC00] shadow-[0_0_8px_rgba(255,204,0,0.5)]'
                  : 'bg-zinc-900 text-zinc-300 border-zinc-700 hover:text-white hover:border-zinc-500'
              }`}
            >
              <HelpCircle className="w-3 h-3" />
              <span>{isEn ? 'IT & Method' : 'IT & Methodik'}</span>
            </button>

            <div className="hidden sm:block h-3 w-px bg-zinc-700" />

            {/* Language Switcher */}
            <div className="flex items-center gap-1 bg-zinc-900 border border-zinc-700 px-1.5 py-0.5">
              <Globe className="w-3 h-3 text-zinc-400" />
              <button
                onClick={() => setLang('en')}
                className={`px-1 py-0.5 transition-colors cursor-pointer text-[10px] ${
                  lang === 'en' ? 'text-white font-bold bg-zinc-800' : 'text-zinc-400 hover:text-white'
                }`}
              >
                EN
              </button>
              <span className="text-zinc-600">|</span>
              <button
                onClick={() => setLang('de')}
                className={`px-1 py-0.5 transition-colors cursor-pointer text-[10px] ${
                  lang === 'de' ? 'text-white font-bold bg-zinc-800' : 'text-zinc-400 hover:text-white'
                }`}
              >
                DE
              </button>
            </div>

            <div className="hidden sm:block h-3 w-px bg-zinc-700" />

            <a
              href="https://github.com/Flx-xlF/strategic-analysis-app-case-study"
              target="_blank"
              rel="noreferrer"
              className="text-zinc-400 hover:text-white transition-colors underline underline-offset-2 whitespace-nowrap hidden sm:inline"
            >
              GITHUB REPO
            </a>
          </div>
        </div>

        {/* Level 2: Primary Control Deck (Scenario Switcher + Shared Regional Filter) */}
        {activeTab !== 'overview' && (
        <div className={`px-4 sm:px-8 py-2.5 bg-white border-b border-sbb-aluminum flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 transition-all min-w-0 ${
          showQuickTour && currentTourStep === 0 ? 'ring-2 ring-[#FFCC00] bg-amber-50/20' : ''
        }`}>
          {/* Scenario Selection Control */}
          <div className="flex flex-1 flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 min-w-0">
            <div className="flex flex-1 items-center gap-2 sm:gap-3 min-w-0">
              <label htmlFor="scenario-select" className="type-ui text-zinc-600 shrink-0 flex items-center gap-1.5 whitespace-nowrap">
                <span className={`w-1.5 h-1.5 ${showQuickTour && currentTourStep === 0 ? 'bg-[#FFCC00]' : 'bg-sbb-red'}`} />
                <span className={showQuickTour && currentTourStep === 0 ? 'text-sbb-black font-bold' : ''}>
                  {isEn ? 'Scenario:' : 'Szenario:'}
                </span>
              </label>
              <div className="relative flex-1 max-w-xl min-w-0">
              <select
                id="scenario-select"
                value={selectedScenario.id}
                onChange={(e) => {
                  const found = scenariosList.find(s => s.id === e.target.value);
                  if (found) onSelectScenario(found);
                }}
                className={`w-full appearance-none bg-sbb-cloud hover:bg-zinc-100 transition-colors border px-3 py-1.5 pr-8 text-xs sm:text-sm font-bold text-sbb-black cursor-pointer focus:outline-none ${
                  showQuickTour && currentTourStep === 0
                    ? 'border-[#FFCC00] ring-1 ring-[#FFCC00]'
                    : 'border-sbb-aluminum focus:border-sbb-black'
                }`}
              >
                <optgroup label={isEn ? 'Biopharma & Healthcare Cases' : 'Biopharma- & Gesundheits-Szenarien'}>
                  {scenariosList.filter(s => s.group !== 'cross_industry').map(s => (
                    <option key={s.id} value={s.id}>
                      {s.title}
                    </option>
                  ))}
                </optgroup>
                <optgroup label={isEn ? 'Cross-Industry Crisis & ESG Cases' : 'Branchenübergreifende Krisen- & ESG-Fälle'}>
                  {scenariosList.filter(s => s.group === 'cross_industry').map(s => (
                    <option key={s.id} value={s.id}>
                      {s.title}
                    </option>
                  ))}
                </optgroup>
              </select>
              <ChevronDown className="w-4 h-4 text-zinc-500 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Shared World Region Filter */}
            <div className="flex items-center gap-1.5 sm:ml-2 shrink-0 flex-wrap">
              <span className="type-ui text-zinc-500 shrink-0 flex items-center gap-1">
                <Globe className="w-3 h-3 text-zinc-500" />
                <span className="whitespace-nowrap hidden sm:inline">{isEn ? 'Filter Region:' : 'Region filtern:'}</span>
              </span>
              <div className={`flex items-center gap-0.5 bg-sbb-cloud p-0.5 border text-xs font-mono ${
                showQuickTour && currentTourStep === 1
                  ? 'border-[#FFCC00] ring-2 ring-[#FFCC00]'
                  : 'border-sbb-aluminum'
              }`}>
                {(['all', 'us', 'eu', 'ch', 'apac'] as WorldRegionId[]).map((rId) => (
                  <button
                    key={rId}
                    onClick={() => onSelectRegion(rId)}
                    className={`px-2 py-0.5 font-bold transition-all cursor-pointer ${
                      selectedRegion === rId ? 'bg-sbb-black text-white' : 'text-zinc-500 hover:text-sbb-black'
                    }`}
                  >
                    {rId.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        )}

        {/* Level 3: Two-Way Strategic Operating Model Navigation (Responsive Grid) */}
        <div className="px-4 sm:px-8 bg-[#F8F8F9] border-b border-sbb-aluminum py-1">
          <div className="grid grid-cols-1 xl:grid-cols-[auto_1fr_1fr] gap-2 max-w-[1600px] mx-auto">
            {/* 00: 90-Sec Visual Concept Flow Entry */}
            <div className="flex items-stretch border border-zinc-200 bg-white p-1 min-w-0">
              <button
                onClick={() => setActiveTab('overview')}
                className={`w-full px-3 py-1.5 font-mono text-xs font-bold tracking-wider uppercase transition-all flex items-center justify-center gap-1.5 cursor-pointer border whitespace-nowrap ${
                  activeTab === 'overview'
                    ? 'border-sbb-black bg-sbb-black text-[#FFCC00]'
                    : 'border-transparent bg-amber-50/70 text-sbb-black hover:bg-[#FFCC00]'
                }`}
                title={isEn ? 'Watch the 90-second animated concept overview' : '90-Sekunden animierte Konzept-Übersicht ansehen'}
              >
                <span className={`text-[10px] font-black shrink-0 ${activeTab === 'overview' ? 'text-[#FFCC00]' : 'text-sbb-red'}`}>00</span>
                <PlayCircle className={`w-3.5 h-3.5 shrink-0 ${activeTab === 'overview' ? 'text-[#FFCC00]' : 'text-sbb-red'}`} />
                <span>{isEn ? 'Overview' : 'Überblick'}</span>
              </button>
            </div>
            {/* Column 1: Direction 1 - Outside-In (Analyze & Measure) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-1 border border-zinc-200 bg-white p-1 min-w-0">
              <span className="text-[10px] font-mono font-black text-sbb-black uppercase tracking-wider px-2 py-1 bg-zinc-100 border-b sm:border-b-0 sm:border-r border-zinc-200 shrink-0 whitespace-nowrap text-center sm:text-left">
                {isEn ? '◄ 1. MONITOR: MEDIA & AI SEARCH' : '◄ 1. ANALYSE: MEDIEN & KI-SUCHE'}
              </span>

              <div className="flex items-center gap-1 flex-1 min-w-0">
                <button
                  onClick={() => setActiveTab('cockpit')}
                  className={`flex-1 min-w-0 px-2.5 py-1.5 font-mono text-xs font-bold tracking-wider uppercase transition-all flex items-center justify-center gap-1.5 cursor-pointer border ${
                    activeTab === 'cockpit'
                      ? 'border-sbb-red bg-sbb-red text-white'
                      : 'border-transparent text-zinc-600 hover:text-sbb-black hover:bg-zinc-50'
                  } ${
                    showQuickTour && (currentTourStep === 0 || currentTourStep === 1)
                      ? 'ring-2 ring-[#FFCC00] ring-offset-1'
                      : ''
                  }`}
                >
                  <span className={`text-[10px] font-black shrink-0 ${activeTab === 'cockpit' ? 'text-white/90' : 'text-zinc-600'}`}>01</span>
                  <BarChart3 className={`w-3.5 h-3.5 shrink-0 ${activeTab === 'cockpit' ? 'text-white' : 'text-sbb-red'}`} />
                  <span className="truncate">{isEn ? 'Regional Cockpit' : 'Regionales Cockpit'}</span>
                  {showQuickTour && (currentTourStep === 0 || currentTourStep === 1) && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFCC00] animate-pulse shrink-0" />
                  )}
                </button>

                <button
                  onClick={() => setActiveTab('geo')}
                  className={`flex-1 min-w-0 px-2.5 py-1.5 font-mono text-xs font-bold tracking-wider uppercase transition-all flex items-center justify-center gap-1.5 cursor-pointer border ${
                    activeTab === 'geo'
                      ? 'border-sbb-red bg-sbb-red text-white'
                      : 'border-transparent text-zinc-600 hover:text-sbb-black hover:bg-zinc-50'
                  } ${
                    showQuickTour && currentTourStep === 2
                      ? 'ring-2 ring-[#FFCC00] ring-offset-1'
                      : ''
                  }`}
                >
                  <span className={`text-[10px] font-black shrink-0 ${activeTab === 'geo' ? 'text-white/90' : 'text-zinc-600'}`}>02</span>
                  <BrainCircuit className={`w-3.5 h-3.5 shrink-0 ${activeTab === 'geo' ? 'text-white' : 'text-sbb-red'}`} />
                  <span className="truncate">{isEn ? 'Cluster & AI Audit' : 'Cluster & KI-Audit'}</span>
                  {showQuickTour && currentTourStep === 2 && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFCC00] animate-pulse shrink-0" />
                  )}
                </button>
              </div>
            </div>

            {/* Column 2: Direction 2 - Top-Down (Define & Enable) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-1 border border-zinc-200 bg-white p-1 min-w-0">
              <span className="text-[10px] font-mono font-black text-sbb-black uppercase tracking-wider px-2 py-1 bg-zinc-100 border-b sm:border-b-0 sm:border-r border-zinc-200 shrink-0 whitespace-nowrap text-center sm:text-left">
                {isEn ? '2. RESPOND: DRAFTS & STRESS-TEST ►' : '2. ANTWORT: ENTWÜRFE & TEST ►'}
              </span>

              <div className="flex items-center gap-1 flex-1 min-w-0">
                <button
                  onClick={() => setActiveTab('trending')}
                  className={`flex-1 min-w-0 px-2.5 py-1.5 font-mono text-xs font-bold tracking-wider uppercase transition-all flex items-center justify-center gap-1.5 cursor-pointer border ${
                    activeTab === 'trending'
                      ? 'border-sbb-red bg-sbb-red text-white'
                      : 'border-transparent text-zinc-600 hover:text-sbb-black hover:bg-zinc-50'
                  } ${
                    showQuickTour && currentTourStep === 3
                      ? 'ring-2 ring-[#FFCC00] ring-offset-1'
                      : ''
                  }`}
                >
                  <span className={`text-[10px] font-black shrink-0 ${activeTab === 'trending' ? 'text-white/90' : 'text-zinc-600'}`}>03</span>
                  <Sparkles className={`w-3.5 h-3.5 shrink-0 ${activeTab === 'trending' ? 'text-white' : 'text-sbb-red'}`} />
                  <span className="truncate">{isEn ? 'Sources & Recipes' : 'Quellen & Rezepte'}</span>
                  {showQuickTour && currentTourStep === 3 && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFCC00] animate-pulse shrink-0" />
                  )}
                </button>

                <button
                  onClick={() => setActiveTab('cascade')}
                  className={`flex-1 min-w-0 px-2.5 py-1.5 font-mono text-xs font-bold tracking-wider uppercase transition-all flex items-center justify-center gap-1.5 cursor-pointer border ${
                    activeTab === 'cascade'
                      ? 'border-sbb-red bg-sbb-red text-white'
                      : 'border-transparent text-zinc-600 hover:text-sbb-black hover:bg-zinc-50'
                  } ${
                    showQuickTour && currentTourStep === 4
                      ? 'ring-2 ring-[#FFCC00] ring-offset-1'
                      : ''
                  }`}
                >
                  <span className={`text-[10px] font-black shrink-0 ${activeTab === 'cascade' ? 'text-white/90' : 'text-zinc-600'}`}>04</span>
                  <ShieldCheck className={`w-3.5 h-3.5 shrink-0 ${activeTab === 'cascade' ? 'text-white' : 'text-sbb-red'}`} />
                  <span className="truncate">{isEn ? 'Stress-Test & Inquiry' : 'Stresstest & Anfrage'}</span>
                  {showQuickTour && currentTourStep === 4 && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFCC00] animate-pulse shrink-0" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Level 4: Compact Non-Sticky Executive Scenario Brief Strip */}
      {activeTab !== 'overview' && (
      <div className="px-4 sm:px-8 py-2 bg-white border-b border-sbb-aluminum">
        <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row lg:items-center justify-between gap-2 text-xs">
          <div className="flex flex-wrap items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-zinc-600 shrink-0">
            <span className="font-bold text-sbb-black">{selectedScenario.organization}</span>
            <span>//</span>
            <span>{selectedScenario.category}</span>
            <span>//</span>
            <span className="whitespace-nowrap">{isEn ? 'AS OF: ' : 'STAND: '}{selectedScenario.date}</span>
          </div>

          <div className="text-xs text-zinc-700 max-w-3xl leading-relaxed">
            {selectedScenario.summary}
          </div>
        </div>
      </div>
      )}
    </>
  );
};

export default CommandHeader;
