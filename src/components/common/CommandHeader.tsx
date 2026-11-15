import React from 'react';
import { Language } from '../../fixtures/scenarios';
import {
  Search,
  GitBranch,
  FileText,
  HelpCircle,
  BookOpen,
  Globe
} from 'lucide-react';

export type ActiveTab = 'overview' | 'cockpit' | 'geo' | 'trending';

interface Props {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  showConceptGuide: boolean;
  onToggleConceptGuide: () => void;
  lang: Language;
  setLang: (lang: Language) => void;
}

export const CommandHeader: React.FC<Props> = ({
  activeTab,
  setActiveTab,
  showConceptGuide,
  onToggleConceptGuide,
  lang,
  setLang
}) => {
  const isEn = lang === 'en';

  return (
    <header className="bg-white border-b border-sbb-aluminum lg:sticky lg:top-0 z-40">
      {/* Level 1: Top Utility Bar */}
      <div className="bg-sbb-black text-white px-4 sm:px-8 py-2 flex flex-wrap items-center justify-between border-b border-zinc-800 gap-2 min-w-0">
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-2.5 h-2.5 bg-sbb-red shrink-0" />
          <span className="type-ui font-black text-white tracking-[0.14em] sm:tracking-[0.18em] text-[10px] sm:text-[11px] truncate">
            {isEn
              ? 'TERRAIN // CORPORATE COMMS: OUTSIDE-IN INSIGHTS & TOP-DOWN ENABLEMENT'
              : 'TERRAIN // UNTERNEHMENSKOMMUNIKATION: OUTSIDE-IN & TOP-DOWN ENABLEMENT'}
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[10px] font-mono">
          {/* IT & Method Modal Toggle */}
          <button
            type="button"
            onClick={onToggleConceptGuide}
            className={`px-2.5 py-1 font-mono text-[10px] font-bold tracking-wider uppercase transition-colors cursor-pointer border flex items-center gap-1.5 whitespace-nowrap ${
              showConceptGuide
                ? 'bg-sbb-red text-white border-sbb-red'
                : 'bg-zinc-900 text-zinc-300 border-zinc-700 hover:text-white hover:border-zinc-500'
            }`}
          >
            <HelpCircle className="w-3 h-3" />
            <span>{isEn ? 'IT & Method' : 'IT & Methodik'}</span>
          </button>

          <div className="hidden sm:block h-3 w-px bg-zinc-700" />

          {/* Language Switcher */}
          <div className="flex items-center gap-1 bg-zinc-900 border border-zinc-700 px-1.5 py-0.5">
            <Globe className="w-3 h-3 text-zinc-400" />
            <button
              type="button"
              onClick={() => setLang('en')}
              className={`px-1 py-0.5 transition-colors cursor-pointer text-[10px] ${
                lang === 'en' ? 'text-white font-bold bg-zinc-800' : 'text-zinc-400 hover:text-white'
              }`}
            >
              EN
            </button>
            <span className="text-zinc-600">|</span>
            <button
              type="button"
              onClick={() => setLang('de')}
              className={`px-1 py-0.5 transition-colors cursor-pointer text-[10px] ${
                lang === 'de' ? 'text-white font-bold bg-zinc-800' : 'text-zinc-400 hover:text-white'
              }`}
            >
              DE
            </button>
          </div>

          <div className="hidden sm:block h-3 w-px bg-zinc-700" />

          <a
            href="https://github.com/Flx-xlF/strategic-analysis-app-case-study"
            target="_blank"
            rel="noreferrer"
            className="text-zinc-400 hover:text-white transition-colors underline underline-offset-2 whitespace-nowrap hidden sm:inline"
          >
            GITHUB REPO
          </a>
        </div>
      </div>

      {/* Level 2: Clean 4-Tab Navigation */}
      <div className="px-4 sm:px-8 bg-[#F8F8F9] py-1.5">
        <div className="grid grid-cols-1 xl:grid-cols-[auto_1fr_1.4fr] gap-2 max-w-[1600px] mx-auto">
          {/* 00: Overview */}
          <div className="flex items-stretch border border-zinc-200 bg-white p-1 min-w-0">
            <button
              type="button"
              onClick={() => setActiveTab('overview')}
              className={`w-full px-3 py-1.5 font-mono text-xs font-bold tracking-wider uppercase transition-all flex items-center justify-center gap-1.5 cursor-pointer border whitespace-nowrap ${
                activeTab === 'overview'
                  ? 'border-sbb-black bg-sbb-black text-[#FFCC00]'
                  : 'border-transparent bg-amber-50/70 text-sbb-black hover:bg-[#FFCC00]'
              }`}
              title={isEn ? 'Open 4-step concept overview' : '4-Schritte-Konzeptüberblick öffnen'}
            >
              <span className={`text-[10px] font-black shrink-0 ${activeTab === 'overview' ? 'text-[#FFCC00]' : 'text-sbb-red'}`}>00</span>
              <BookOpen className={`w-3.5 h-3.5 shrink-0 ${activeTab === 'overview' ? 'text-[#FFCC00]' : 'text-sbb-red'}`} />
              <span>{isEn ? 'Overview' : 'Überblick'}</span>
            </button>
          </div>

          {/* Group 1: OUTSIDE-IN (01) */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-1 border border-zinc-200 bg-white p-1 min-w-0">
            <span className="text-[10px] font-mono font-black text-sbb-black uppercase tracking-wider px-2.5 py-1 bg-zinc-100 border-b sm:border-b-0 sm:border-r border-zinc-200 shrink-0 whitespace-nowrap text-center sm:text-left">
              {isEn ? '◄ 1. OUTSIDE-IN (AUDIT & INSIGHTS)' : '◄ 1. OUTSIDE-IN (ANALYSE & INSIGHTS)'}
            </span>

            <button
              type="button"
              onClick={() => setActiveTab('cockpit')}
              className={`flex-1 min-w-0 px-3 py-1.5 font-mono text-xs font-bold tracking-wider uppercase transition-all flex items-center justify-center gap-1.5 cursor-pointer border ${
                activeTab === 'cockpit'
                  ? 'border-sbb-red bg-sbb-red text-white'
                  : 'border-transparent text-zinc-700 hover:text-sbb-black hover:bg-zinc-50'
              }`}
            >
              <span className={`text-[10px] font-black shrink-0 ${activeTab === 'cockpit' ? 'text-white/90' : 'text-zinc-600'}`}>01</span>
              <Search className={`w-3.5 h-3.5 shrink-0 ${activeTab === 'cockpit' ? 'text-white' : 'text-sbb-red'}`} />
              <span className="leading-tight text-center">{isEn ? 'AI Search & Feed Pipeline' : 'KI-Suche & Feed-Pipeline'}</span>
            </button>
          </div>

          {/* Group 2: TOP-DOWN & ENABLEMENT (02 & 03) */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-1 border border-zinc-200 bg-white p-1 min-w-0">
            <span className="text-[10px] font-mono font-black text-sbb-black uppercase tracking-wider px-2.5 py-1 bg-zinc-100 border-b sm:border-b-0 sm:border-r border-zinc-200 shrink-0 whitespace-nowrap text-center sm:text-left">
              {isEn ? '2. TOP-DOWN (GEO & ENABLEMENT) ►' : '2. TOP-DOWN (GEO & ENABLEMENT) ►'}
            </span>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-1 flex-1 min-w-0">
              <button
                type="button"
                onClick={() => setActiveTab('geo')}
                className={`flex-1 min-w-0 px-2.5 py-1.5 font-mono text-xs font-bold tracking-wider uppercase transition-all flex items-center justify-center gap-1.5 cursor-pointer border ${
                  activeTab === 'geo'
                    ? 'border-sbb-red bg-sbb-red text-white'
                    : 'border-transparent text-zinc-700 hover:text-sbb-black hover:bg-zinc-50'
                }`}
              >
                <span className={`text-[10px] font-black shrink-0 ${activeTab === 'geo' ? 'text-white/90' : 'text-zinc-600'}`}>02</span>
                <GitBranch className={`w-3.5 h-3.5 shrink-0 ${activeTab === 'geo' ? 'text-white' : 'text-sbb-red'}`} />
                <span className="leading-tight text-center">{isEn ? 'GEO & Context Tailoring' : 'GEO & Kontext-Anpassung'}</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('trending')}
                className={`flex-1 min-w-0 px-2.5 py-1.5 font-mono text-xs font-bold tracking-wider uppercase transition-all flex items-center justify-center gap-1.5 cursor-pointer border ${
                  activeTab === 'trending'
                    ? 'border-sbb-red bg-sbb-red text-white'
                    : 'border-transparent text-zinc-700 hover:text-sbb-black hover:bg-zinc-50'
                }`}
              >
                <span className={`text-[10px] font-black shrink-0 ${activeTab === 'trending' ? 'text-white/90' : 'text-zinc-600'}`}>03</span>
                <FileText className={`w-3.5 h-3.5 shrink-0 ${activeTab === 'trending' ? 'text-white' : 'text-sbb-red'}`} />
                <span className="leading-tight text-center">{isEn ? 'Office Recipes & Human Role' : 'Office-Rezepte & Mensch'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default CommandHeader;
