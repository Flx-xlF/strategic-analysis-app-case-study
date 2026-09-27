import React, { useState } from 'react';
import { SCENARIOS, ScenarioMeta } from './fixtures/scenarios';
import { CommandHeader, ActiveTab } from './components/common/CommandHeader';
import { NarrativeCascadeView } from './components/cascade/NarrativeCascadeView';
import { MediaInquiryView } from './components/inquiry/MediaInquiryView';
import { TrendingFactoryView } from './components/trending/TrendingFactoryView';

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ActiveTab>('cascade');
  const [selectedScenario, setSelectedScenario] = useState<ScenarioMeta>(SCENARIOS[0]);
  const [isStreaming, setIsStreaming] = useState(false);
  const [streamProgress, setStreamProgress] = useState(100);

  const handleSimulate = () => {
    setIsStreaming(true);
    setStreamProgress(0);

    const interval = window.setInterval(() => {
      setStreamProgress((prev) => {
        if (prev >= 100) {
          window.clearInterval(interval);
          setIsStreaming(false);
          return 100;
        }
        return prev + 15;
      });
    }, 120);
  };

  const handleAbort = () => {
    setIsStreaming(false);
    setStreamProgress(100);
  };

  const handleSelectScenario = (sc: ScenarioMeta) => {
    setSelectedScenario(sc);
    // Auto-align optimal tab with scenario
    if (sc.id === 'gotthard_freight') setActiveTab('cascade');
    else if (sc.id === 'cloud_sovereignty') setActiveTab('inquiry');
    else if (sc.id === 'counter_closure') setActiveTab('trending');
  };

  return (
    <div className="min-h-screen bg-brand-cloud text-brand-black flex flex-col font-sans">
      <CommandHeader
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        selectedScenario={selectedScenario}
        onSelectScenario={handleSelectScenario}
        onSimulate={handleSimulate}
        isStreaming={isStreaming}
        onAbort={handleAbort}
      />

      {/* Main Content Stage */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8">
        {activeTab === 'cascade' && (
          <NarrativeCascadeView
            scenarioId={selectedScenario.id}
            isStreaming={isStreaming}
            streamProgress={streamProgress}
          />
        )}

        {activeTab === 'inquiry' && (
          <MediaInquiryView
            scenarioId={selectedScenario.id}
            isStreaming={isStreaming}
            streamProgress={streamProgress}
          />
        )}

        {activeTab === 'trending' && (
          <TrendingFactoryView
            scenarioId={selectedScenario.id}
            isStreaming={isStreaming}
            streamProgress={streamProgress}
          />
        )}
      </main>

      {/* Swiss Brutalist Footer */}
      <footer className="bg-brand-black text-white px-4 py-4 swiss-border-t mt-12 text-xs type-mono">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-brand-red inline-block"></span>
            <span className="font-bold text-white tracking-widest uppercase">
              TERRAIN ANALYTICS
            </span>
            <span>— SWISS STRATEGIC MEDIA INTELLIGENCE & ENTERPRISE RAG</span>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>100% CLIENT-SIDE DEMO</span>
            <span>•</span>
            <a
              href="https://github.com/Flx-xlF/strategic-analysis-app-case-study"
              target="_blank"
              rel="noreferrer"
              className="text-zinc-300 hover:text-white underline underline-offset-4"
            >
              ARCHITECTURE SPECIFICATION
            </a>
            <span>•</span>
            <span>SCHEMA/F</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
