import React, { useState } from 'react';
import { getScenarios, ScenarioMeta, Language } from './fixtures/scenarios';
import { WorldRegionId } from './fixtures/cockpitFixtures';
import { CommandHeader, ActiveTab } from './components/common/CommandHeader';
import { QuickTourBar, getTourSteps } from './components/common/QuickTourBar';
import { ConceptMethodModal } from './components/common/ConceptMethodModal';
import { NarrativeCockpitView } from './components/cockpit/NarrativeCockpitView';
import { GeoAuditView } from './components/geo/GeoAuditView';
import { TrendingFactoryView } from './components/trending/TrendingFactoryView';
import { StressTestAndInquiryView } from './components/cascade/StressTestAndInquiryView';

export const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');
  const [activeTab, setActiveTab] = useState<ActiveTab>('cockpit');
  const [selectedRegion, setSelectedRegion] = useState<WorldRegionId>('all');
  const [showConceptGuide, setShowConceptGuide] = useState<boolean>(false);
  const [showQuickTour, setShowQuickTour] = useState<boolean>(true);
  const [tourStep, setTourStep] = useState<number>(0);
  
  // Keep scenarios in sync with current language
  const scenariosList = getScenarios(lang);
  const [selectedScenarioId, setSelectedScenarioId] = useState<string>(scenariosList[0].id);

  const selectedScenario = scenariosList.find(s => s.id === selectedScenarioId) || scenariosList[0];

  const handleSelectScenario = (sc: ScenarioMeta) => {
    setSelectedScenarioId(sc.id);
  };

  const handleSelectTourStep = (stepIndex: number) => {
    const steps = getTourSteps(lang);
    const target = steps[stepIndex];
    if (!target) return;

    setTourStep(stepIndex);
    setActiveTab(target.targetTab);
    if (target.targetRegion) {
      setSelectedRegion(target.targetRegion);
    }
    if (typeof target.openConceptGuide === 'boolean') {
      setShowConceptGuide(target.openConceptGuide);
    }
  };

  const handleToggleQuickTour = () => {
    setShowQuickTour(prev => {
      const nextState = !prev;
      if (nextState) {
        handleSelectTourStep(0);
      }
      return nextState;
    });
  };

  const isEn = lang === 'en';

  return (
    <div className="min-h-screen bg-[#F4F4F6] text-sbb-black flex flex-col font-sans selection:bg-sbb-red selection:text-white overflow-x-hidden">
      <CommandHeader
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        selectedScenario={selectedScenario}
        scenariosList={scenariosList}
        onSelectScenario={handleSelectScenario}
        selectedRegion={selectedRegion}
        onSelectRegion={setSelectedRegion}
        showConceptGuide={showConceptGuide}
        onToggleConceptGuide={() => setShowConceptGuide(prev => !prev)}
        showQuickTour={showQuickTour}
        onToggleQuickTour={handleToggleQuickTour}
        currentTourStep={tourStep}
        lang={lang}
        setLang={setLang}
      />

      <QuickTourBar
        isOpen={showQuickTour}
        currentStep={tourStep}
        onSelectStep={handleSelectTourStep}
        onClose={() => setShowQuickTour(false)}
        lang={lang}
        onSelectScenarioById={setSelectedScenarioId}
        selectedScenarioId={selectedScenario.id}
        showConceptGuide={showConceptGuide}
        onToggleConceptGuide={() => setShowConceptGuide(prev => !prev)}
        onSelectRegion={setSelectedRegion}
      />

      <ConceptMethodModal
        isOpen={showConceptGuide}
        onClose={() => setShowConceptGuide(false)}
        lang={lang}
      />

      {/* Main Workspace Stage (with bottom padding for docked product tour) */}
      <main className={`flex-1 max-w-[1600px] w-full mx-auto px-4 sm:px-8 py-6 lg:py-8 transition-all ${
        showQuickTour ? 'pb-36 lg:pb-32' : 'pb-12'
      }`}>
        {activeTab === 'cockpit' && (
          <NarrativeCockpitView
            scenarioId={selectedScenario.id}
            lang={lang}
            selectedRegion={selectedRegion}
            onSelectRegion={setSelectedRegion}
            onNavigateTab={setActiveTab}
            isStreaming={false}
            streamProgress={100}
          />
        )}

        {activeTab === 'geo' && (
          <GeoAuditView
            scenarioId={selectedScenario.id}
            lang={lang}
            selectedRegion={selectedRegion}
            onSelectRegion={setSelectedRegion}
            onNavigateTab={setActiveTab}
            isStreaming={false}
            streamProgress={100}
          />
        )}

        {activeTab === 'trending' && (
          <TrendingFactoryView
            scenarioId={selectedScenario.id}
            lang={lang}
            selectedRegion={selectedRegion}
            onSelectRegion={setSelectedRegion}
            onNavigateTab={setActiveTab}
            isStreaming={false}
            streamProgress={100}
          />
        )}

        {activeTab === 'cascade' && (
          <StressTestAndInquiryView
            scenarioId={selectedScenario.id}
            lang={lang}
            isStreaming={false}
            streamProgress={100}
          />
        )}
      </main>

      {/* Industrial Brutalist Footer */}
      <footer className="bg-white border-t border-sbb-aluminum px-4 sm:px-8 py-5 mt-12 text-xs type-mono text-zinc-700">
        <div className="max-w-[1600px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <div className="w-2.5 h-2.5 bg-sbb-red shrink-0" />
            <span className="font-bold text-sbb-black">TERRAIN STRATEGIC COMMS COCKPIT & ENABLEMENT ARCHITECTURE</span>
            <span className="text-zinc-600">//</span>
            <span>{isEn ? 'Two-Way Statistical & LLM Sandbox' : 'Zwei-Wege-System für statistische & LLM-Reputationssteuerung'}</span>
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <span className="text-zinc-600">
              {isEn ? 'Outside-In Measurement ↔ Top-Down Regional Enablement' : 'Outside-In Messung ↔ Top-Down Regionale Befähigung'}
            </span>
            <a
              href="https://github.com/Flx-xlF/strategic-analysis-app-case-study"
              target="_blank"
              rel="noreferrer"
              className="text-sbb-black font-bold hover:text-sbb-red transition-colors underline underline-offset-4"
            >
              {isEn ? 'SOURCE CODE & ARCHITECTURE' : 'QUELLCODE & DOKUMENTATION'}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
