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
    }, 120);
  };

  const handleAbort = () => {
    setIsStreaming(false);
    setStreamProgress(100);
  };

  const handleSelectScenario = (sc: ScenarioMeta) => {
    setSelectedScenario(sc);
    if (sc.id === 'alpine_transit_crisis') setActiveTab('cascade');
    else if (sc.id === 'esg_investigation') setActiveTab('inquiry');
    else if (sc.id === 'health_data_breach') setActiveTab('trending');
  };

  return (
    <div className="min-h-screen bg-[#F4F4F6] text-sbb-black flex flex-col font-sans selection:bg-sbb-red selection:text-white">
      <CommandHeader
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        selectedScenario={selectedScenario}
        onSelectScenario={handleSelectScenario}
        onSimulate={handleSimulate}
        isStreaming={isStreaming}
        onAbort={handleAbort}
      />

      {/* Main Workspace Stage with generous whitespace and clear structural focus */}
      <main className="flex-1 max-w-[1600px] w-full mx-auto px-6 sm:px-10 py-8 lg:py-10">
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
      <footer className="bg-white border-t border-sbb-aluminum px-8 py-5 mt-12 text-xs type-mono text-sbb-stone">
        <div className="max-w-[1600px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 bg-sbb-red" />
            <span className="font-bold text-sbb-black">TERRAIN STRATEGIC MEDIA INTELLIGENCE</span>
            
          </div>
          <div className="flex items-center gap-6">
            
            <a
              href="https://github.com/Flx-xlF/strategic-analysis-app-case-study"
              target="_blank"
              rel="noreferrer"
              className="text-sbb-black font-bold hover:text-sbb-red transition-colors underline underline-offset-4"
            >
              QUELLCODE & DOKUMENTATION
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
