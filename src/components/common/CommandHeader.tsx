import React from 'react';
import { SCENARIOS, ScenarioMeta } from '../../fixtures/scenarios';
import { Play, RotateCcw, ShieldAlert, FileText, TrendingUp, Compass, ExternalLink } from 'lucide-react';

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
    <header className="bg-white swiss-border-b sticky top-0 z-40">
      {/* Top Telemetry Strip */}
      <div className="bg-brand-black text-white px-4 py-1.5 flex items-center justify-between text-xs type-mono border-b border-brand-anthracite">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 font-bold tracking-wider">
            <span className="w-2 h-2 bg-brand-red inline-block"></span>
            TERRAIN ANALYTICS
          </span>
          <span className="text-zinc-500">|</span>
          <span className="text-zinc-400 text-[11px] hidden sm:inline">SWISS STRATEGIC MEDIA INTELLIGENCE ENGINE</span>
        </div>
        <div className="flex items-center gap-4 text-[11px]">
          <span className="text-zinc-400 hidden md:inline">
            ENV: <span className="text-emerald-400">CLIENT-SIDE SIMULATION</span>
          </span>
          <span className="text-zinc-400 hidden md:inline">
            ZONE: <span className="text-zinc-200">EUROPE-WEST4 (AIR-GAPPED)</span>
          </span>
          <a
            href="https://github.com/Flx-xlF/strategic-analysis-app-case-study"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 text-zinc-300 hover:text-white transition-colors bg-brand-anthracite px-2 py-0.5"
          >
            <span>GITHUB CASE STUDY</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Main Command Bar */}
      <div className="px-4 py-3 flex flex-wrap items-center justify-between gap-3 bg-white">
        {/* Navigation Tabs */}
        <div className="flex items-center gap-1">
          <button
            onClick={() => setActiveTab('cascade')}
            className={`px-3 py-2 text-xs type-signage flex items-center gap-2 transition-all ${
              activeTab === 'cascade'
                ? 'bg-brand-black text-white'
                : 'bg-brand-cloud text-brand-stone hover:bg-brand-aluminum hover:text-brand-black'
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            <span>[1] COMPASS & CASCADE</span>
          </button>

          <button
            onClick={() => setActiveTab('inquiry')}
            className={`px-3 py-2 text-xs type-signage flex items-center gap-2 transition-all ${
              activeTab === 'inquiry'
                ? 'bg-brand-black text-white'
                : 'bg-brand-cloud text-brand-stone hover:bg-brand-aluminum hover:text-brand-black'
            }`}
          >
            <ShieldAlert className="w-3.5 h-3.5 text-brand-red" />
            <span>[2] MEDIA INQUIRY AUDIT</span>
          </button>

          <button
            onClick={() => setActiveTab('trending')}
            className={`px-3 py-2 text-xs type-signage flex items-center gap-2 transition-all ${
              activeTab === 'trending'
                ? 'bg-brand-black text-white'
                : 'bg-brand-cloud text-brand-stone hover:bg-brand-aluminum hover:text-brand-black'
            }`}
          >
            <TrendingUp className="w-3.5 h-3.5" />
            <span>[3] TRENDING & FACTORY</span>
          </button>
        </div>

        {/* Right Controls: Scenario Switcher & Simulation Trigger */}
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <div className="flex items-center gap-2 flex-1 sm:flex-initial">
            <span className="type-signage text-zinc-500 text-[10px] hidden lg:inline">SCENARIO:</span>
            <select
              value={selectedScenario.id}
              onChange={(e) => {
                const found = SCENARIOS.find(s => s.id === e.target.value);
                if (found) onSelectScenario(found);
              }}
              className="px-2.5 py-1.5 text-xs bg-brand-cloud text-brand-black border border-brand-aluminum font-mono font-medium focus:outline-none focus:border-brand-black cursor-pointer"
            >
              {SCENARIOS.map(s => (
                <option key={s.id} value={s.id}>
                  [{s.urgency}] {s.title.slice(0, 42)}...
                </option>
              ))}
            </select>
          </div>

          {isStreaming ? (
            <button
              onClick={onAbort}
              className="px-3 py-1.5 text-xs bg-brand-red text-white type-signage flex items-center gap-1.5 hover:bg-brand-red-dark transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5 animate-spin" />
              <span>ABORT STREAM</span>
            </button>
          ) : (
            <button
              onClick={onSimulate}
              className="px-3.5 py-1.5 text-xs bg-brand-black text-white type-signage flex items-center gap-1.5 hover:bg-zinc-800 transition-colors shadow-sm"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>RUN INFERENCE</span>
            </button>
          )}
        </div>
      </div>

      {/* Scenario Briefing Banner */}
      <div className="bg-brand-cloud/60 px-4 py-2 border-t border-brand-aluminum flex items-center justify-between text-xs">
        <div className="flex items-center gap-2 truncate">
          <span className="bg-brand-red text-white text-[9px] font-black px-1.5 py-0.5 type-mono uppercase">
            {selectedScenario.urgency}
          </span>
          <span className="type-mono font-bold text-zinc-800 text-[11px]">
            {selectedScenario.title}
          </span>
          <span className="text-zinc-400 hidden md:inline">—</span>
          <span className="text-zinc-600 text-[11px] truncate hidden md:inline">
            {selectedScenario.summary}
          </span>
        </div>
        <span className="type-mono text-zinc-400 text-[10px] shrink-0 pl-3">
          STAND: {selectedScenario.date}
        </span>
      </div>
    </header>
  );
};
