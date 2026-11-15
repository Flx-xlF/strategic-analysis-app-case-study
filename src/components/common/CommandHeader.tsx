import React from 'react';
import { Language } from '../../fixtures/scenarios';
import {
  Search,
  GitBranch,
  FileText,
  BookOpen,
  Globe
} from 'lucide-react';

export type ActiveTab = 'overview' | 'cockpit' | 'geo' | 'trending';

interface Props {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  showConceptGuide?: boolean;
  onToggleConceptGuide?: () => void;
  lang: Language;
  setLang: (lang: Language) => void;
}

export const CommandHeader: React.FC<Props> = ({
  activeTab,
  setActiveTab,
  lang,
  setLang
}) => {
  const isEn = lang === 'en';

  return (
    <header className="bg-white border-b border-sbb-aluminum lg:sticky lg:top-0 z-40">
      {/* Level 1: Top Utility Bar */}
      <div className="bg-sbb-black text-white px-4 sm:px-8 py-2 flex items-center justify-between border-b border-zinc-800 gap-3 min-w-0">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="w-2.5 h-2.5 bg-sbb-red shrink-0" />
          <span className="type-ui font-black text-white tracking-[0.14em] text-[10px] sm:text-[11px] truncate">
            {isEn
              ? 'TERRAIN · CORPORATE COMMS IN ZERO-CLICK AI SEARCH'
              : 'TERRAIN · UNTERNEHMENSKOMMUNIKATION IN DER KI-SUCHE'}
          </span>
        </div>

        {/* Language Switcher */}
        <div className="flex items-center gap-1 bg-zinc-900 border border-zinc-700 px-1.5 py-0.5 text-[10px] font-mono shrink-0">
          <Globe className="w-3 h-3 text-zinc-400" />
          <button
            type="button"
            onClick={() => setLang('en')}
            className={`px-1.5 py-0.5 transition-colors cursor-pointer text-[10px] ${
              lang === 'en' ? 'text-white font-bold bg-zinc-800' : 'text-zinc-400 hover:text-white'
            }`}
          >
            EN
          </button>
          <span className="text-zinc-600">|</span>
          <button
            type="button"
            onClick={() => setLang('de')}
            className={`px-1.5 py-0.5 transition-colors cursor-pointer text-[10px] ${
              lang === 'de' ? 'text-white font-bold bg-zinc-800' : 'text-zinc-400 hover:text-white'
            }`}
          >
            DE
          </button>
        </div>
      </div>

      {/* Level 2: Clean 4-Tab Single-Row Navigation */}
      <div className="px-4 sm:px-8 bg-[#F8F8F9] py-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-2 max-w-[1600px] mx-auto">
          {/* 00: Overview */}
          <button
            type="button"
            onClick={() => setActiveTab('overview')}
            className={`px-3.5 py-2 font-mono text-xs font-bold tracking-wider uppercase transition-all flex items-center justify-center gap-2 cursor-pointer border whitespace-nowrap ${
              activeTab === 'overview'
                ? 'border-sbb-black bg-sbb-black text-[#FFCC00]'
                : 'border-zinc-200 bg-white text-sbb-black hover:border-sbb-black hover:bg-amber-50/50'
            }`}
          >
            <span className={`text-[10px] font-black shrink-0 ${activeTab === 'overview' ? 'text-[#FFCC00]' : 'text-sbb-red'}`}>00</span>
            <BookOpen className={`w-3.5 h-3.5 shrink-0 ${activeTab === 'overview' ? 'text-[#FFCC00]' : 'text-sbb-red'}`} />
            <span className="truncate">{isEn ? 'Overview (4 Steps)' : 'Überblick (4 Schritte)'}</span>
          </button>

          {/* 01: Outside-In */}
          <button
            type="button"
            onClick={() => setActiveTab('cockpit')}
            className={`px-3.5 py-2 font-mono text-xs font-bold tracking-wider uppercase transition-all flex items-center justify-center gap-2 cursor-pointer border whitespace-nowrap ${
              activeTab === 'cockpit'
                ? 'border-sbb-red bg-sbb-red text-white'
                : 'border-zinc-200 bg-white text-zinc-700 hover:text-sbb-black hover:border-sbb-black'
            }`}
          >
            <span className={`text-[10px] font-black shrink-0 ${activeTab === 'cockpit' ? 'text-white/90' : 'text-zinc-500'}`}>01</span>
            <Search className={`w-3.5 h-3.5 shrink-0 ${activeTab === 'cockpit' ? 'text-white' : 'text-sbb-red'}`} />
            <span className="truncate">{isEn ? 'Outside-In: AI Search & Feeds' : 'Outside-In: KI-Suche & Feeds'}</span>
          </button>

          {/* 02: Top-Down GEO & Tailoring */}
          <button
            type="button"
            onClick={() => setActiveTab('geo')}
            className={`px-3.5 py-2 font-mono text-xs font-bold tracking-wider uppercase transition-all flex items-center justify-center gap-2 cursor-pointer border whitespace-nowrap ${
              activeTab === 'geo'
                ? 'border-sbb-red bg-sbb-red text-white'
                : 'border-zinc-200 bg-white text-zinc-700 hover:text-sbb-black hover:border-sbb-black'
            }`}
          >
            <span className={`text-[10px] font-black shrink-0 ${activeTab === 'geo' ? 'text-white/90' : 'text-zinc-500'}`}>02</span>
            <GitBranch className={`w-3.5 h-3.5 shrink-0 ${activeTab === 'geo' ? 'text-white' : 'text-sbb-red'}`} />
            <span className="truncate">{isEn ? 'Top-Down: GEO & Tailoring' : 'Top-Down: GEO & Anpassung'}</span>
          </button>

          {/* 03: Enablement & Office Recipes */}
          <button
            type="button"
            onClick={() => setActiveTab('trending')}
            className={`px-3.5 py-2 font-mono text-xs font-bold tracking-wider uppercase transition-all flex items-center justify-center gap-2 cursor-pointer border whitespace-nowrap ${
              activeTab === 'trending'
                ? 'border-sbb-red bg-sbb-red text-white'
                : 'border-zinc-200 bg-white text-zinc-700 hover:text-sbb-black hover:border-sbb-black'
            }`}
          >
            <span className={`text-[10px] font-black shrink-0 ${activeTab === 'trending' ? 'text-white/90' : 'text-zinc-500'}`}>03</span>
            <FileText className={`w-3.5 h-3.5 shrink-0 ${activeTab === 'trending' ? 'text-white' : 'text-sbb-red'}`} />
            <span className="truncate">{isEn ? 'Enablement: Office Recipes' : 'Enablement: Office-Rezepte'}</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default CommandHeader;
