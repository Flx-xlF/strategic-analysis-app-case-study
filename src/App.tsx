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
import { ConceptFlowView } from './components/overview/ConceptFlowView';

const getInitialTab = (): ActiveTab => {
  if (typeof window !== 'undefined') {
    const params = new URLSearchParams(window.location.search);
    if (params.get('view') === 'demo' || window.location.hash === '#demo') {
      return 'cockpit';
    }
  }
  return 'overview';
};

export const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');
  const [activeTab, setActiveTab] = useState<ActiveTab>(getInitialTab);
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

  const handleTabChange = (tab: ActiveTab) => {
    setActiveTab(tab);
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      if (tab === 'overview') {
        url.searchParams.delete('view');
        if (url.hash === '#demo') url.hash = '';
      } else {
        url.searchParams.set('view', 'demo');
      }
      window.history.replaceState({}, '', url.toString());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSelectTourStep = (stepIndex: number) => {
    const steps = getTourSteps(lang);
    const target = steps[stepIndex];
    if (!target) return;

    setTourStep(stepIndex);
    handleTabChange(target.targetTab);
    if (target.targetRegion) {
      setSelectedRegion(target.targetRegion);
    }
    if (typeof target.openConceptGuide === 'boolean') {
      setShowConceptGuide(target.openConceptGuide);
    }
  };

  const handleToggleQuickTour = () => {
    if (activeTab === 'overview') {
      setShowQuickTour(true);
      handleSelectTourStep(0);
      return;
    }
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
        setActiveTab={handleTabChange}
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
        isOpen={activeTab !== 'overview' && showQuickTour}
        currentStep={tourStep}
        onSelectStep={handleSelectTourStep}
        onClose={() => {
          setShowQuickTour(false);
          setShowConceptGuide(false);
        }}
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
        onOpenFlowView={() => {
          setShowConceptGuide(false);
          handleTabChange('overview');
        }}
        lang={lang}
      />

      {/* Main Workspace Stage (with bottom padding for docked product tour) */}
      <main className={`flex-1 max-w-[1600px] w-full mx-auto px-4 sm:px-8 py-6 lg:py-8 transition-all ${
        activeTab !== 'overview' && showQuickTour ? 'pb-36 lg:pb-32' : 'pb-12'
      }`}>
        {activeTab === 'overview' && (
          <ConceptFlowView
            lang={lang}
            onEnterWorkspace={(tab) => handleTabChange(tab || 'cockpit')}
            onOpenConceptModal={() => setShowConceptGuide(true)}
          />
        )}

        {activeTab === 'cockpit' && (
          <NarrativeCockpitView
            scenarioId={selectedScenario.id}
            lang={lang}
            selectedRegion={selectedRegion}
            onSelectRegion={setSelectedRegion}
            onNavigateTab={handleTabChange}
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
            onNavigateTab={handleTabChange}
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
            onNavigateTab={handleTabChange}
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
            <span className="font-bold text-sbb-black">TERRAIN // COMMS & AI SEARCH PROTOTYPE</span>
            <span className="text-zinc-600">//</span>
            <span>{isEn ? 'Client-Side Prototype' : 'Interaktiver Prototyp'}</span>
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <span className="text-zinc-600">
              {isEn ? 'Outside-In Monitoring ↔ Top-Down Playbooks' : 'Outside-In Monitoring ↔ Top-Down Playbooks'}
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
