import React from 'react';
import { SCENARIOS, ScenarioMeta } from '../../fixtures/scenarios';
import { Play, RotateCcw, ShieldCheck, FileText, TrendingUp, GitFork, ExternalLink } from 'lucide-react';

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
      {/* Top Header */}
      <div className="bg-brand-black text-white px-4 py-2 flex items-center justify-between text-xs type-mono border-b border-brand-anthracite">
        <div className="flex items-center gap-2.5">
          <span className="w-2 h-2 bg-brand-red inline-block"></span>
          <span className="font-bold tracking-wider">TERRAIN ANALYTICS</span>
          <span className="text-zinc-600">/</span>
          <span className="text-zinc-400">Demo</span>
        </div>
        <div className="flex items-center gap-4 text-[11px]">
          <a
            href="https://github.com/Flx-xlF/strategic-analysis-app-case-study"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 text-zinc-300 hover:text-white transition-colors"
          >
            <span>GitHub Repository</span>
            <ExternalLink className="w-3 h-3 text-zinc-400" />
          </a>
        </div>
      </div>

      {/* Navigation & Controls */}
      <div className="px-4 py-2.5 flex flex-wrap items-center justify-between gap-3 bg-white">
        {/* Navigation Tabs */}
        <div className="flex items-center gap-1">
          <button
            onClick={() => setActiveTab('cascade')}
            className={`px-3 py-1.5 text-xs type-signage transition-all ${
              activeTab === 'cascade'
                ? 'bg-brand-black text-white'
                : 'bg-brand-cloud text-brand-stone hover:bg-brand-aluminum hover:text-brand-black'
            }`}
          >
            Narrative Cascade
          </button>

          <button
            onClick={() => setActiveTab('inquiry')}
            className={`px-3 py-1.5 text-xs type-signage transition-all ${
              activeTab === 'inquiry'
                ? 'bg-brand-black text-white'
                : 'bg-brand-cloud text-brand-stone hover:bg-brand-aluminum hover:text-brand-black'
            }`}
          >
            Medienanfrage
          </button>

          <button
            onClick={() => setActiveTab('trending')}
            className={`px-3 py-1.5 text-xs type-signage transition-all ${
              activeTab === 'trending'
                ? 'bg-brand-black text-white'
                : 'bg-brand-cloud text-brand-stone hover:bg-brand-aluminum hover:text-brand-black'
            }`}
          >
            Content Factory
          </button>
        </div>

        {/* Scenario Switcher & Simulation */}
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <div className="flex items-center gap-2 flex-1 sm:flex-initial">
            <label htmlFor="scenario-select" className="type-signage text-zinc-500 text-[10px] hidden sm:inline">
              Szenario:
            </label>
            <select
              id="scenario-select"
              value={selectedScenario.id}
              onChange={(e) => {
                const found = SCENARIOS.find(s => s.id === e.target.value);
                if (found) onSelectScenario(found);
              }}
              className="px-2.5 py-1 text-xs bg-brand-cloud text-brand-black border border-brand-aluminum font-mono focus:outline-none cursor-pointer"
            >
              {SCENARIOS.map(s => (
                <option key={s.id} value={s.id}>
                  {s.title}
                </option>
              ))}
            </select>
          </div>

          {isStreaming ? (
            <button
              onClick={onAbort}
              className="px-3 py-1 text-xs bg-brand-red text-white type-signage flex items-center gap-1.5 hover:bg-brand-red-dark transition-colors"
            >
              <RotateCcw className="w-3 h-3 animate-spin" />
              <span>Stoppen</span>
            </button>
          ) : (
            <button
              onClick={onSimulate}
              className="px-3 py-1 text-xs bg-brand-black text-white type-signage flex items-center gap-1.5 hover:bg-zinc-800 transition-colors"
            >
              <Play className="w-3 h-3 fill-current" />
              <span>Simulation</span>
            </button>
          )}
        </div>
      </div>

      {/* Scenario Context */}
      <div className="bg-brand-cloud/60 px-4 py-2 border-t border-brand-aluminum text-xs flex items-center justify-between">
        <div className="text-zinc-700 truncate pr-4">
          <span className="font-semibold text-zinc-900 mr-2">{selectedScenario.title}:</span>
          <span>{selectedScenario.summary}</span>
        </div>
        <span className="type-mono text-zinc-400 text-[11px] shrink-0">
          {selectedScenario.category}
        </span>
      </div>
    </header>
  );
};
