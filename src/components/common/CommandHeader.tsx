import React from 'react';
import { SCENARIOS, ScenarioMeta } from '../../fixtures/scenarios';
import { 
  Activity, 
  Play, 
  Square, 
  ChevronDown, 
  ShieldAlert, 
  Layers, 
  FileText, 
  Radio, 
  CheckCircle2 
} from 'lucide-react';

export type ActiveTab = 'cascade' | 'inquiry' | 'trending';

interface Props {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  selectedScenario: ScenarioMeta;
  onSelectScenario: (scenario: ScenarioMeta) => void;
  onSimulate: () => void;
  isStreaming: boolean;
  onAbort: () => void;
}

export const CommandHeader: React.FC<Props> = ({
  activeTab,
  setActiveTab,
  selectedScenario,
  onSelectScenario,
  onSimulate,
  isStreaming,
  onAbort
}) => {
  return (
    <header className="bg-white border-b border-sbb-aluminum sticky top-0 z-40 shadow-sm">
      {/* Level 1: System Telemetry Bar */}
      <div className="bg-sbb-black text-white px-6 sm:px-8 py-2.5 flex items-center justify-between border-b border-zinc-800">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 bg-sbb-red shrink-0" />
          <span className="type-ui font-black text-white tracking-[0.2em] text-[11px]">
            TERRAIN ANALYTICS
          </span>

        </div>

        <div className="flex items-center gap-5 text-[10px] font-mono">
          <div className="flex items-center gap-2 text-zinc-300">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="tracking-widest">LIVE-MODELL AKTIV</span>
          </div>
          <div className="h-3 w-px bg-zinc-700" />
          <a
            href="https://github.com/Flx-xlF/strategic-analysis-app-case-study"
            target="_blank"
            rel="noreferrer"
            className="text-zinc-400 hover:text-white transition-colors underline underline-offset-2"
          >
            GITHUB DOCS
          </a>
        </div>
      </div>

      {/* Level 2: Primary Control Deck (Scenario Switcher + Simulation Trigger) */}
      <div className="px-6 sm:px-8 py-3.5 bg-white border-b border-sbb-aluminum flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        {/* Scenario Selection Control */}
        <div className="flex flex-1 items-center gap-3">
          <label htmlFor="scenario-select" className="type-ui text-sbb-stone shrink-0 flex items-center gap-1.5">
            <Radio className="w-3.5 h-3.5 text-sbb-red" />
            <span>Szenario:</span>
          </label>
          <div className="relative flex-1 max-w-xl">
            <select
              id="scenario-select"
              value={selectedScenario.id}
              onChange={(e) => {
                const found = SCENARIOS.find(s => s.id === e.target.value);
                if (found) onSelectScenario(found);
              }}
              className="w-full appearance-none bg-sbb-cloud hover:bg-zinc-100 transition-colors border border-sbb-aluminum px-4 py-2 pr-10 text-sm font-bold text-sbb-black cursor-pointer focus:outline-none focus:border-sbb-black"
            >
              {SCENARIOS.map(s => (
                <option key={s.id} value={s.id}>
                  {s.title}
                </option>
              ))}
            </select>
            <ChevronDown className="w-4 h-4 text-sbb-stone absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>

          <div className="hidden lg:flex items-center gap-2 ml-2">
            <span className="type-caption px-2.5 py-1 bg-sbb-cloud border border-sbb-aluminum text-sbb-stone font-mono uppercase text-[10px]">
              {selectedScenario.category}
            </span>
            <span className={`type-caption px-2.5 py-1 font-mono uppercase text-[10px] font-bold ${
              selectedScenario.urgency === 'Hoch'
                ? 'bg-red-50 text-sbb-red border border-red-200'
                : 'bg-zinc-100 text-zinc-700 border border-zinc-300'
            }`}>
              {selectedScenario.urgency === 'Hoch' ? 'DRINGLICHKEIT: HOCH' : 'DRINGLICHKEIT: MITTEL'}
            </span>
          </div>
        </div>

        {/* Action Trigger */}
        <div className="flex items-center gap-3 shrink-0">
          {isStreaming ? (
            <button
              onClick={onAbort}
              className="px-5 py-2 bg-sbb-red hover:bg-sbb-red-dark text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer shadow-sm"
            >
              <Square className="w-3.5 h-3.5 fill-current" />
              <span>Simulation stoppen</span>
            </button>
          ) : (
            <button
              onClick={onSimulate}
              className="px-5 py-2 bg-sbb-black hover:bg-zinc-800 text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer shadow-sm group"
            >
              <Play className="w-3.5 h-3.5 fill-current text-sbb-red group-hover:text-white transition-colors" />
              <span>Stresstest starten</span>
            </button>
          )}
        </div>
      </div>

      {/* Level 3: Strategic Module Navigation (Wayfinding Tabs) */}
      <div className="px-6 sm:px-8 bg-sbb-cloud/60 border-b border-sbb-aluminum flex flex-wrap gap-2">
        <button
          onClick={() => setActiveTab('cascade')}
          className={`px-5 py-3 border-b-2 font-mono text-xs font-bold tracking-wider uppercase transition-all flex items-center gap-2.5 cursor-pointer ${
            activeTab === 'cascade'
              ? 'border-sbb-red text-sbb-black bg-white shadow-sm'
              : 'border-transparent text-sbb-stone hover:text-sbb-black hover:bg-white/50'
          }`}
        >
          <span className="text-[10px] font-black opacity-60">01</span>
          <Layers className="w-4 h-4 text-sbb-red" />
          <span>Botschafts-Stresstest</span>
        </button>

        <button
          onClick={() => setActiveTab('inquiry')}
          className={`px-5 py-3 border-b-2 font-mono text-xs font-bold tracking-wider uppercase transition-all flex items-center gap-2.5 cursor-pointer ${
            activeTab === 'inquiry'
              ? 'border-sbb-red text-sbb-black bg-white shadow-sm'
              : 'border-transparent text-sbb-stone hover:text-sbb-black hover:bg-white/50'
          }`}
        >
          <span className="text-[10px] font-black opacity-60">02</span>
          <ShieldAlert className="w-4 h-4 text-sbb-red" />
          <span>Widerspruchs-Audit</span>
        </button>

        <button
          onClick={() => setActiveTab('trending')}
          className={`px-5 py-3 border-b-2 font-mono text-xs font-bold tracking-wider uppercase transition-all flex items-center gap-2.5 cursor-pointer ${
            activeTab === 'trending'
              ? 'border-sbb-red text-sbb-black bg-white shadow-sm'
              : 'border-transparent text-sbb-stone hover:text-sbb-black hover:bg-white/50'
          }`}
        >
          <span className="text-[10px] font-black opacity-60">03</span>
          <FileText className="w-4 h-4 text-sbb-red" />
          <span>Briefings & Vorlagen</span>
        </button>
      </div>

      {/* Level 4: Executive Scenario Context & Wayfinding Guidance Banner */}
      <div className="px-6 sm:px-8 py-4 bg-white border-b border-sbb-aluminum/80">
        <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-sbb-stone">
              <span className="font-bold text-sbb-black">{selectedScenario.organization}</span>
              <span>//</span>
              <span>{selectedScenario.category}</span>
              <span>//</span>
              <span>STAND: {selectedScenario.date}</span>
            </div>
            <h2 className="text-lg font-bold text-sbb-black tracking-tight">
              {selectedScenario.title}
            </h2>
            <p className="text-xs text-sbb-stone leading-relaxed max-w-4xl">
              {selectedScenario.summary}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default CommandHeader;
