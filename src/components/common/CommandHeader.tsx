import React from 'react';
import { SCENARIOS, ScenarioMeta } from '../../fixtures/scenarios';

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
    <header className="bg-sbb-aluminum p-[1px] gap-[1px] flex flex-col sticky top-0 z-40">
      {/* Top Telemetry Bar */}
      <div className="bg-sbb-black text-white px-6 py-2.5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 bg-sbb-red shrink-0" />
          <span className="type-ui font-bold text-white tracking-widest">
            TERRAIN ANALYTICS
          </span>
          <span className="text-sbb-stone text-xs">/</span>
          <span className="type-mono text-[10px] text-zinc-400">
            STRATEGISCHE MEDIENINTELLIGENZ
          </span>
        </div>

        <div className="flex items-center gap-4 type-mono text-[10px] text-zinc-400">
          <a
            href="https://github.com/Flx-xlF/strategic-analysis-app-case-study"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
          >
            DOKUMENTATION
          </a>
        </div>
      </div>

      {/* Primary Navigation & Controls (Seam Grid) */}
      <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr_auto] gap-[1px] bg-sbb-aluminum">
        {/* Module Tabs */}
        <div className="flex gap-[1px] bg-sbb-aluminum">
          <button
            onClick={() => setActiveTab('cascade')}
            className={`px-5 py-2.5 type-ui font-black text-[10px] transition-all cursor-pointer ${
              activeTab === 'cascade'
                ? 'bg-sbb-black text-white'
                : 'bg-white text-sbb-stone hover:bg-sbb-cloud'
            }`}
          >
            NARRATIVE CASCADE
          </button>

          <button
            onClick={() => setActiveTab('inquiry')}
            className={`px-5 py-2.5 type-ui font-black text-[10px] transition-all cursor-pointer ${
              activeTab === 'inquiry'
                ? 'bg-sbb-black text-white'
                : 'bg-white text-sbb-stone hover:bg-sbb-cloud'
            }`}
          >
            MEDIENANFRAGE
          </button>

          <button
            onClick={() => setActiveTab('trending')}
            className={`px-5 py-2.5 type-ui font-black text-[10px] transition-all cursor-pointer ${
              activeTab === 'trending'
                ? 'bg-sbb-black text-white'
                : 'bg-white text-sbb-stone hover:bg-sbb-cloud'
            }`}
          >
            CONTENT FACTORY
          </button>
        </div>

        {/* Scenario Selector Cell */}
        <div className="bg-white px-4 py-2 flex items-center gap-3">
          <span className="type-ui text-sbb-stone shrink-0">Szenario:</span>
          <select
            value={selectedScenario.id}
            onChange={(e) => {
              const found = SCENARIOS.find(s => s.id === e.target.value);
              if (found) onSelectScenario(found);
            }}
            className="w-full bg-transparent type-body text-sbb-black font-medium outline-none cursor-pointer"
          >
            {SCENARIOS.map(s => (
              <option key={s.id} value={s.id}>
                {s.title}
              </option>
            ))}
          </select>
        </div>

        {/* Action Trigger Cell */}
        <div className="bg-white px-4 py-2 flex items-center justify-end">
          {isStreaming ? (
            <button
              onClick={onAbort}
              className="px-4 py-1.5 bg-sbb-red hover:bg-sbb-red-dark text-white type-ui font-black text-[10px] transition-all cursor-pointer"
            >
              STOPPEN
            </button>
          ) : (
            <button
              onClick={onSimulate}
              className="px-4 py-1.5 bg-sbb-black hover:bg-zinc-800 text-white type-ui font-black text-[10px] transition-all cursor-pointer"
            >
              SIMULATION STARTEN
            </button>
          )}
        </div>
      </div>

      {/* Scenario Briefing Strip */}
      <div className="bg-sbb-cloud px-6 py-2 flex items-center justify-between text-xs">
        <div className="text-sbb-stone truncate pr-4">
          <span className="type-ui text-sbb-black mr-2 font-bold">{selectedScenario.category}:</span>
          <span className="type-body">{selectedScenario.summary}</span>
        </div>
        <span className="type-mono text-sbb-stone text-[10px] shrink-0">
          STAND: {selectedScenario.date}
        </span>
      </div>
    </header>
  );
};

export default CommandHeader;
