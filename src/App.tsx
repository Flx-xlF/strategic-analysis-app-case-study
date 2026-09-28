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
      setStreamProgress((prev: number) => {
        if (prev >= 100) {
          window.clearInterval(interval);
          setIsStreaming(false);
          return 100;
        }
        return prev + 20;
      });
    }, 100);
  };

  const handleAbort = () => {
    setIsStreaming(false);
    setStreamProgress(100);
  };

  const handleSelectScenario = (sc: ScenarioMeta) => {
    setSelectedScenario(sc);
    if (sc.id === 'gotthard_freight') setActiveTab('cascade');
    else if (sc.id === 'cloud_sovereignty') setActiveTab('inquiry');
    else if (sc.id === 'counter_closure') setActiveTab('trending');
  };

  return (
    <div className="min-h-screen bg-sbb-cloud text-sbb-black flex flex-col font-sans">
      <CommandHeader
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        selectedScenario={selectedScenario}
        onSelectScenario={handleSelectScenario}
        onSimulate={handleSimulate}
        isStreaming={isStreaming}
        onAbort={handleAbort}
      />

      {/* Main Workspace Stage */}
      <main className="flex-1 max-w-[1600px] w-full mx-auto p-4 sm:p-6 lg:p-8">
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

      {/* Industrial Brutalist Footer */}
      <footer className="bg-white border-t border-sbb-aluminum px-6 py-3.5 mt-8 text-xs type-mono text-sbb-stone">
        <div className="max-w-[1600px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-sbb-red" />
            <span className="font-bold text-sbb-black">TERRAIN ANALYTICS</span>
            <span>// ARCHITEKTUR-FALLSTUDIE // 100% CLIENT-SIDE SANDBOX</span>
          </div>
          <div>
            <a
              href="https://github.com/Flx-xlF/strategic-analysis-app-case-study"
              target="_blank"
              rel="noreferrer"
              className="text-sbb-stone hover:text-sbb-black underline underline-offset-2"
            >
              DOKUMENTATION AUF GITHUB
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
