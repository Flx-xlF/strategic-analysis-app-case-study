import React, { useState } from 'react';
import { Language } from '../../fixtures/scenarios';
import { WorldRegionId } from '../../fixtures/cockpitFixtures';
import { ActiveTab } from './CommandHeader';
import {
  ArrowRight,
  ArrowLeft,
  X,
  Sparkles,
  Server,
  Target,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

export interface TourStepConfig {
  stepNumber: string;
  shortLabel: string;
  targetAnchorLabel: string;
  headline: string;
  whatYouSee: string;
  whyItMatters: string;
  tryThisLabel: string;
  targetTab: ActiveTab;
  targetRegion?: WorldRegionId;
  openConceptGuide?: boolean;
}

interface Props {
  isOpen: boolean;
  currentStep: number;
  onSelectStep: (stepIndex: number) => void;
  onClose: () => void;
  lang: Language;
  onSelectScenarioById: (id: string) => void;
  selectedScenarioId: string;
  showConceptGuide: boolean;
  onToggleConceptGuide: () => void;
  onSelectRegion?: (reg: WorldRegionId) => void;
}

export const getTourSteps = (lang: Language): TourStepConfig[] => {
  const isEn = lang === 'en';

  if (isEn) {
    return [
      {
        stepNumber: '01',
        shortLabel: 'Overview',
        targetAnchorLabel: 'Scenario Switcher & Two-Way Tabs',
        headline: 'One Topic Across Media, Forums, and AI Search',
        whatYouSee:
          'Switch between 5 scenarios and filter by region (ALL, US, EU, CH, APAC). Search and AI engines pull press articles, forums, company pages, and old PDFs into one answer.',
        whyItMatters:
          'When regional messages or old files contradict each other, AI summaries mix them up. The two-way bar above lets you inspect external coverage (01–02) and align regional drafts (03–04).',
        tryThisLabel: 'Switch to Oncology RLT Scenario',
        targetTab: 'cockpit',
        targetRegion: 'all',
        openConceptGuide: false
      },
      {
        stepNumber: '02',
        shortLabel: '01 Regional Overview',
        targetAnchorLabel: 'Tab 01 // Regional Cockpit & Filter [EU]',
        headline: '01 Regional Cockpit: Why Tone Alone Misses Topic Risk',
        whatYouSee:
          'Filtered to EU: automated sentiment scores coverage as "76% Neutral" because trade articles use formal wording. Meanwhile, the statistical funnel flags a +3.9σ spike in access criticism.',
        whyItMatters:
          'Deduplicating wire reprints and measuring topic velocity shows where a debate is escalating before the tone turns openly hostile.',
        tryThisLabel: 'Reset Filter to ALL Regions',
        targetTab: 'cockpit',
        targetRegion: 'eu',
        openConceptGuide: false
      },
      {
        stepNumber: '03',
        shortLabel: '02 Cluster & AI Audit',
        targetAnchorLabel: 'Tab 02 // Cluster & AI Answer Audit',
        headline: '02 Cluster & AI Audit: Inspecting Sources and AI Distortions',
        whatYouSee:
          'Shows the representative articles driving the cluster and the resulting AI answer below. Click the red passages [1] and [2] to inspect the exact factual errors.',
        whyItMatters:
          'Vague PR intros get cut off by search retrieval. Section 03 below shows how rewriting vague copy into clear, front-loaded facts fixes the AI summary across n=20 test runs.',
        tryThisLabel: 'Inspect Oncology RLT GEO Audit',
        targetTab: 'geo',
        targetRegion: 'all',
        openConceptGuide: false
      },
      {
        stepNumber: '04',
        shortLabel: '03 Regional Playbook',
        targetAnchorLabel: 'Tab 03 // Regional Playbook',
        headline: '03 Regional Playbook: Approved Sources & Local Drafts',
        whatYouSee:
          'Filters internal records to approved Golden Sources (GS-01 to GS-03), flags outdated files in regional folders, and provides working drafts across 4 formats (Corporate Story, Social, Talking Points, Q&A).',
        whyItMatters:
          'Gives central and regional teams one shared set of facts and four practical writing rules so local adaptations stay consistent across owned pages and press coverage.',
        tryThisLabel: 'Filter Playbook to Switzerland (CH)',
        targetTab: 'trending',
        targetRegion: 'all',
        openConceptGuide: false
      },
      {
        stepNumber: '05',
        shortLabel: '04 Stress-Test & Inquiry',
        targetAnchorLabel: 'Tab 04 // Stress-Test & Concept Modal',
        headline: '04 Stress-Test & Inquiry Check: Challenging Drafts Before Release',
        whatYouSee:
          'Toggle between Iteration 1 and Iteration 2 (or switch to 04B Inquiry Check) to see how repeating a critic’s accusation triggers hostile headlines and how bridging to core facts lowers risk (9.1 → 2.6).',
        whyItMatters:
          'LLMs are useful for pressure-testing a draft from multiple stakeholder angles—final editing, tone, and sign-off stay with comms and legal teams.',
        tryThisLabel: 'Toggle Concept, Method & IT Modal',
        targetTab: 'cascade',
        targetRegion: 'all',
        openConceptGuide: true
      }
    ];
  }

  return [
    {
      stepNumber: '01',
      shortLabel: 'Überblick',
      targetAnchorLabel: 'Szenario-Wahl & Zwei-Wege-Leiste',
      headline: 'Ein Thema über Medien, Foren und KI-Suche hinweg',
      whatYouSee:
        'Wechseln Sie zwischen 5 Szenarien und filtern Sie nach Regionen (ALL, US, EU, CH, APAC). Such- und KI-Systeme ziehen Presseberichte, Foren, eigene Seiten und alte PDFs in einer Antwort zusammen.',
      whyItMatters:
        'Widersprechen sich regionale Aussagen oder veraltete Dateien, vermischen KI-Antworten die Fakten. Oben prüfen Sie zuerst das Umfeld (01–02) und richten danach Entwürfe aus (03–04).',
      tryThisLabel: 'Zum Onkologie-RLT-Szenario wechseln',
      targetTab: 'cockpit',
      targetRegion: 'all',
      openConceptGuide: false
    },
    {
      stepNumber: '02',
      shortLabel: '01 Regional-Übersicht',
      targetAnchorLabel: 'Tab 01 // Regionales Cockpit & Filter [EU]',
      headline: '01 Regionales Cockpit: Warum reines Sentiment Risiken übersieht',
      whatYouSee:
        'Auf EU gefiltert: Standard-Sentiment meldet "76% Neutral", da Fachmedien sachlich formulieren. Der statistische Trichter zeigt jedoch einen +3.9σ-Anstieg bei der Zugangs- und Preisdebatte.',
      whyItMatters:
        'Das Zusammenfassen von Agentur-Dubletten und die Messung der Themen-Dynamik zeigen Eskalationen, bevor der Tonfall offen feindselig wird.',
      tryThisLabel: 'Filter auf ALLE Regionen setzen',
      targetTab: 'cockpit',
      targetRegion: 'eu',
      openConceptGuide: false
    },
    {
      stepNumber: '03',
      shortLabel: '02 Cluster & KI-Audit',
      targetAnchorLabel: 'Tab 02 // Cluster & KI-Audit',
      headline: '02 Cluster & KI-Audit: Quellen und KI-Fehler prüfen',
      whatYouSee:
        'Zeigt die repräsentativen Artikel im Cluster und die daraus erzeugte KI-Antwort. Klicken Sie auf die roten Passagen [1] und [2], um die konkreten Faktenfehler zu prüfen.',
      whyItMatters:
        'Vage PR-Einleitungen fallen beim Such-Retrieval oft weg. Abschnitt 03 zeigt, wie klare, vorangestellte Fakten die KI-Antwort über n=20 Testläufe korrigieren.',
      tryThisLabel: 'Onkologie-RLT KI-Audit ansehen',
      targetTab: 'geo',
      targetRegion: 'all',
      openConceptGuide: false
    },
    {
      stepNumber: '04',
      shortLabel: '03 Regional-Playbook',
      targetAnchorLabel: 'Tab 03 // Regionales Playbook',
      headline: '03 Regionales Playbook: Geprüfte Quellen & lokale Entwürfe',
      whatYouSee:
        'Filtert interne Bestände auf geprüfte Golden Sources (GS-01 bis GS-03), markiert veraltete Dateien in Länderordnern und liefert Arbeitsentwürfe für 4 Formate (Corporate Story, Social, Talking Points, Q&A).',
      whyItMatters:
        'Gibt zentralen und regionalen Teams dieselbe Faktenbasis und vier klare Schreibregeln, damit lokale Anpassungen auf eigenen Seiten und in Medien konsistent bleiben.',
      tryThisLabel: 'Playbook auf Schweiz (CH) filtern',
      targetTab: 'trending',
      targetRegion: 'all',
      openConceptGuide: false
    },
    {
      stepNumber: '05',
      shortLabel: '04 Stresstest & Anfrage',
      targetAnchorLabel: 'Tab 04 // Stresstest & Konzept-Modal',
      headline: '04 Stresstest & Anfrage-Check: Entwürfe vor Freigabe prüfen',
      whatYouSee:
        'Wechseln Sie zwischen Iteration 1 und Iteration 2 (oder zu 04B Medienanfrage), um zu sehen, wie wiederholte Vorwürfe Schlagzeilen auslösen und wie Bridging das Risiko senkt (9.1 → 2.6).',
      whyItMatters:
        'LLMs eignen sich für den Stresstest aus verschiedenen Stakeholder-Perspektiven – Feinschliff, Tonalität und Freigabe bleiben bei Kommunikation und Recht.',
      tryThisLabel: 'Konzept-, Methodik- & IT-Modal öffnen',
      targetTab: 'cascade',
      targetRegion: 'all',
      openConceptGuide: true
    }
  ];
};

export const QuickTourBar: React.FC<Props> = ({
  isOpen,
  currentStep,
  onSelectStep,
  onClose,
  lang,
  onSelectScenarioById,
  selectedScenarioId,
  showConceptGuide,
  onToggleConceptGuide,
  onSelectRegion
}) => {
  const [isMinimized, setIsMinimized] = useState<boolean>(false);

  if (!isOpen) return null;

  const isEn = lang === 'en';
  const steps = getTourSteps(lang);
  const activeStep = steps[currentStep] || steps[0];

  const handleQuickAction = () => {
    if (currentStep === 0 || currentStep === 2) {
      const nextId =
        selectedScenarioId === 'pluvicto_access_debate'
          ? 'oncology_trial_update'
          : 'pluvicto_access_debate';
      onSelectScenarioById(nextId);
    } else if (currentStep === 1) {
      if (onSelectRegion) onSelectRegion('all');
    } else if (currentStep === 3) {
      if (onSelectRegion) onSelectRegion('ch');
    } else if (currentStep === 4) {
      onToggleConceptGuide();
    }
  };

  return (
    <aside
      aria-label={isEn ? 'Interactive Product Tour' : 'Interaktive Product-Tour'}
      className="fixed bottom-0 inset-x-0 z-50 bg-sbb-black text-white border-t-2 border-[#FFCC00] shadow-[0_-4px_20px_rgba(0,0,0,0.5)] transition-all"
    >
      {/* Top Banner Control Rail */}
      <div className="bg-[#FFCC00] text-sbb-black px-4 sm:px-8 py-1.5 flex items-center justify-between border-b border-black text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-sbb-red animate-pulse shrink-0" />
          <span className="font-black uppercase tracking-wider text-[11px]">
            {isEn ? `PRODUCT TOUR // STEP ${activeStep.stepNumber} OF 05:` : `PRODUCT TOUR // SCHRITT ${activeStep.stepNumber} VON 05:`}
          </span>
          <span className="font-bold text-black hidden sm:inline">{activeStep.shortLabel}</span>
          <span className="text-zinc-700 hidden md:inline">|</span>
          <div className="hidden md:inline-flex items-center gap-1 text-[10px] text-black/80 font-bold">
            <Target className="w-3 h-3 text-black shrink-0" />
            <span>{isEn ? 'Target:' : 'Fokus:'}</span>
            <span className="underline">{activeStep.targetAnchorLabel}</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsMinimized(prev => !prev)}
            className="text-black hover:text-sbb-red font-bold text-[10px] uppercase flex items-center gap-1 px-1.5 py-0.5 border border-black/40 bg-amber-400/30 cursor-pointer"
          >
            {isMinimized ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            <span>{isMinimized ? (isEn ? 'Expand Tour' : 'Aufklappen') : (isEn ? 'Minimize' : 'Minimieren')}</span>
          </button>
          <button
            onClick={onClose}
            className="text-black hover:text-sbb-red p-0.5 transition-colors cursor-pointer"
            title={isEn ? 'Dismiss Product Tour' : 'Tour beenden'}
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {!isMinimized && (
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8 py-3 grid grid-cols-1 lg:grid-cols-12 gap-3 items-center">
          {/* Col 1: Step Overview & Headline */}
          <div className="lg:col-span-5 space-y-1">
            <h4 className="text-xs sm:text-sm font-bold text-white leading-snug">
              {activeStep.headline}
            </h4>
            <p className="text-[11px] text-zinc-300 leading-relaxed">
              {activeStep.whatYouSee}
            </p>
          </div>

          {/* Col 2: Strategic Value Tag */}
          <div className="lg:col-span-4 bg-zinc-900 border-l-2 border-[#FFCC00] border border-zinc-800 p-2 text-[10px] text-zinc-300 leading-snug">
            <strong className="text-white block font-mono uppercase mb-0.5">
              {isEn ? 'Why It Matters:' : 'Strategischer Mehrwert:'}
            </strong>
            <p>{activeStep.whyItMatters}</p>
          </div>

          {/* Col 3: Controls, Quick Action & Step Rail */}
          <div className="lg:col-span-3 flex flex-col justify-between gap-2">
            <button
              onClick={handleQuickAction}
              className="w-full px-2.5 py-1 bg-zinc-900 hover:bg-zinc-800 text-[#FFCC00] border border-[#FFCC00]/60 hover:border-[#FFCC00] font-mono text-[10px] font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 cursor-pointer truncate"
            >
              {currentStep === 4 ? (
                <Server className="w-3 h-3 text-[#FFCC00] shrink-0" />
              ) : (
                <Sparkles className="w-3 h-3 text-[#FFCC00] shrink-0" />
              )}
              <span className="truncate">
                {currentStep === 0 || currentStep === 2
                  ? selectedScenarioId === 'pluvicto_access_debate'
                    ? isEn
                      ? 'Try: Biopharma MFN Case'
                      : 'Ausprobieren: Biopharma MFN'
                    : isEn
                    ? 'Try: Oncology RLT Case'
                    : 'Ausprobieren: Onkologie RLT'
                  : currentStep === 4
                  ? showConceptGuide
                    ? isEn
                      ? 'Toggle: Hide IT Guide'
                      : 'Umschalten: IT-Guide schliessen'
                    : isEn
                    ? 'Toggle: Open IT Guide'
                    : 'Umschalten: IT-Guide öffnen'
                  : `${isEn ? 'Try' : 'Ausprobieren'}: ${activeStep.tryThisLabel}`}
              </span>
            </button>

            <div className="flex items-center justify-between gap-1.5">
              <div className="flex items-center gap-0.5">
                {steps.map((s, idx) => (
                  <button
                    key={s.stepNumber}
                    onClick={() => onSelectStep(idx)}
                    className={`w-5 h-5 font-mono text-[9px] font-bold border transition-colors cursor-pointer flex items-center justify-center ${
                      idx === currentStep
                        ? 'bg-[#FFCC00] text-sbb-black border-[#FFCC00]'
                        : idx < currentStep
                        ? 'bg-zinc-900 text-zinc-300 border-zinc-700 hover:border-zinc-500'
                        : 'bg-zinc-950 text-zinc-600 border-zinc-800'
                    }`}
                    title={s.shortLabel}
                  >
                    {s.stepNumber}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-1 shrink-0">
                <button
                  onClick={() => onSelectStep(Math.max(0, currentStep - 1))}
                  disabled={currentStep === 0}
                  className={`px-2 py-0.5 font-mono text-[10px] font-bold uppercase border transition-colors flex items-center gap-1 ${
                    currentStep === 0
                      ? 'border-zinc-800 text-zinc-700 cursor-not-allowed'
                      : 'border-zinc-700 bg-zinc-900 text-white hover:bg-zinc-800 cursor-pointer'
                  }`}
                >
                  <ArrowLeft className="w-3 h-3" />
                  <span>{isEn ? 'Prev' : 'Zurück'}</span>
                </button>

                <button
                  onClick={() => {
                    if (currentStep < steps.length - 1) {
                      onSelectStep(currentStep + 1);
                    } else {
                      onClose();
                    }
                  }}
                  className="px-2.5 py-0.5 font-mono text-[10px] font-black uppercase border border-[#FFCC00] bg-[#FFCC00] text-sbb-black hover:bg-amber-300 transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <span>
                    {currentStep < steps.length - 1
                      ? isEn
                        ? 'Next'
                        : 'Weiter'
                      : isEn
                      ? 'Finish'
                      : 'Fertig'}
                  </span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
};

export default QuickTourBar;
