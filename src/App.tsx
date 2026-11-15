import React, { useState } from 'react';
import { Language } from './fixtures/scenarios';
import { CommandHeader, ActiveTab } from './components/common/CommandHeader';
import { ConceptMethodModal } from './components/common/ConceptMethodModal';
import { NarrativeCockpitView } from './components/cockpit/NarrativeCockpitView';
import { GeoAuditView } from './components/geo/GeoAuditView';
import { TrendingFactoryView } from './components/trending/TrendingFactoryView';
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
  const [showConceptGuide, setShowConceptGuide] = useState<boolean>(false);

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

  const isEn = lang === 'en';

  return (
    <div className="min-h-screen bg-[#F4F4F6] text-sbb-black flex flex-col font-sans selection:bg-sbb-red selection:text-white overflow-x-hidden">
      <CommandHeader
        activeTab={activeTab}
        setActiveTab={handleTabChange}
        showConceptGuide={showConceptGuide}
        onToggleConceptGuide={() => setShowConceptGuide(prev => !prev)}
        lang={lang}
        setLang={setLang}
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

      <main className="flex-1 max-w-[1600px] w-full mx-auto px-4 sm:px-8 py-6 lg:py-8 pb-12">
        {activeTab === 'overview' && (
          <ConceptFlowView
            lang={lang}
            onEnterWorkspace={(tab) => handleTabChange(tab || 'cockpit')}
            onOpenConceptModal={() => setShowConceptGuide(true)}
          />
        )}

        {activeTab === 'cockpit' && (
          <NarrativeCockpitView
            lang={lang}
            onNavigateTab={handleTabChange}
          />
        )}

        {activeTab === 'geo' && (
          <GeoAuditView
            lang={lang}
            onNavigateTab={handleTabChange}
          />
        )}

        {activeTab === 'trending' && (
          <TrendingFactoryView
            lang={lang}
            onNavigateTab={handleTabChange}
          />
        )}
      </main>

      <footer className="bg-white border-t border-sbb-aluminum px-4 sm:px-8 py-5 mt-12 text-xs type-mono text-zinc-700">
        <div className="max-w-[1600px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <div className="w-2.5 h-2.5 bg-sbb-red shrink-0" />
            <span className="font-bold text-sbb-black">TERRAIN // COMMS & AI SEARCH CONCEPT</span>
            <span className="text-zinc-600">//</span>
            <span>{isEn ? 'Interactive Concept Walkthrough' : 'Interaktive Konzept-Darstellung'}</span>
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <span className="text-zinc-600">
              {isEn ? 'Outside-In Audit ↔ Top-Down GEO & Recipes' : 'Outside-In Analyse ↔ Top-Down GEO & Rezepte'}
            </span>
            <a
              href="https://github.com/Flx-xlF/strategic-analysis-app-case-study"
              target="_blank"
              rel="noreferrer"
              className="text-sbb-black font-bold hover:text-sbb-red transition-colors underline underline-offset-4"
            >
              {isEn ? 'SOURCE CODE & DOCUMENTATION' : 'QUELLCODE & DOKUMENTATION'}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
