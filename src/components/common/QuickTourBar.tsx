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
        headline: 'One Topic Across Press, Forums, and AI Search',
        whatYouSee:
          'Choose from 5 scenarios (Biopharma & Healthcare or Crisis & ESG) and filter by region (ALL, US, EU, CH, APAC). Search and AI assistants pull press articles, forums, company pages, and old PDFs into a single answer.',
        whyItMatters:
          'When core facts, figures, or old PDFs contradict each other (not because local phrasing varies), AI answers mix them up. The bar above connects external monitoring (01–02) with approved facts and tailored writing recipes (03–04).',
        tryThisLabel: 'Switch to Cancer Therapy Case',
        targetTab: 'cockpit',
        targetRegion: 'all',
        openConceptGuide: false
      },
      {
        stepNumber: '02',
        shortLabel: '01 Regional Cockpit',
        targetAnchorLabel: 'Tab 01 // Regional Cockpit & Filter [EU]',
        headline: '01 Regional Cockpit: Why Sentiment Scores Miss Real Risks',
        whatYouSee:
          'Filtered to EU: standard sentiment tools rate coverage as "76% Neutral" because trade articles use formal language—while critical coverage on patient access is spiking.',
        whyItMatters:
          'Removing duplicate wire reprints and spotting unusual volume spikes shows where a debate is heating up before the tone turns openly hostile.',
        tryThisLabel: 'Reset Filter to ALL Regions',
        targetTab: 'cockpit',
        targetRegion: 'eu',
        openConceptGuide: false
      },
      {
        stepNumber: '03',
        shortLabel: '02 Cluster & AI Audit',
        targetAnchorLabel: 'Tab 02 // Cluster & AI Answer Check',
        headline: '02 Cluster & AI Audit: Checking Sources and AI Answers',
        whatYouSee:
          'Shows the key articles driving the topic and the resulting AI search answer below. Click the red passages [1] and [2] to see what the AI got wrong.',
        whyItMatters:
          'Search systems skip vague PR intros. Section 03 below shows how putting clear facts and numbers in the first paragraph fixes the AI answer across repeated test runs.',
        tryThisLabel: 'Switch to Cancer Therapy Case',
        targetTab: 'geo',
        targetRegion: 'all',
        openConceptGuide: false
      },
      {
        stepNumber: '04',
        shortLabel: '03 Sources & Recipes',
        targetAnchorLabel: 'Tab 03 // Approved Sources & Recipes',
        headline: '03 Sources & Recipes: Applying Rules Without PDF Manuals',
        whatYouSee:
          'Anchors approved facts (GS-01–GS-03) and the 4 writing rules into 1-click Outlook/Word recipes. Test the 3 edit-depth modes (Plain Language, Study Rigor, Legal Boundary) and Before/After Diff.',
        whyItMatters:
          'Nobody reads 40-page PDF manuals on deadline—and markets don’t want copy-paste boilerplate. Recipes lock only the core facts while AI adapts tone naturally to each audience and channel without hurting AI search.',
        tryThisLabel: 'Filter Recipes to Switzerland (CH)',
        targetTab: 'trending',
        targetRegion: 'all',
        openConceptGuide: false
      },
      {
        stepNumber: '05',
        shortLabel: '04 Stress-Test & Inquiry',
        targetAnchorLabel: 'Tab 04 // Stress-Test & Inquiry Check',
        headline: '04 Stress-Test & Inquiry Check: Testing Drafts Before Release',
        whatYouSee:
          'Switch between Iteration 1 and Iteration 2 (or click 04B Journalist Inquiry Check) to see how repeating an accusation triggers hostile headlines—and how leading with our own facts calms coverage.',
        whyItMatters:
          'AI is useful for testing a draft from different stakeholder angles beforehand—final editing, tone, and sign-off always stay with comms and legal teams.',
        tryThisLabel: 'Open Concept, Method & IT Guide',
        targetTab: 'cascade',
        targetRegion: 'all',
        openConceptGuide: false
      }
    ];
  }

  return [
    {
      stepNumber: '01',
      shortLabel: 'Überblick',
      targetAnchorLabel: 'Szenario-Wahl & Zwei-Wege-Leiste',
      headline: 'Ein Thema über Presse, Foren und KI-Suche hinweg',
      whatYouSee:
        'Wählen Sie aus 5 Szenarien (Biopharma & Gesundheit oder Krise & ESG) und filtern Sie nach Regionen (ALL, US, EU, CH, APAC). Such- und KI-Systeme ziehen Presseberichte, Foren, eigene Seiten und alte PDFs in einer Antwort zusammen.',
      whyItMatters:
        'Widersprechen sich Kernfakten, Zahlen oder veraltete Dateien (nicht wegen natürlicher lokaler Sprache), vermischen KI-Antworten sie. Oben verbinden Sie Monitoring (01–02) mit geprüften Fakten und Schreib-Rezepten (03–04).',
      tryThisLabel: 'Zum Krebstherapie-Fall wechseln',
      targetTab: 'cockpit',
      targetRegion: 'all',
      openConceptGuide: false
    },
    {
      stepNumber: '02',
      shortLabel: '01 Regional-Cockpit',
      targetAnchorLabel: 'Tab 01 // Regionales Cockpit & Filter [EU]',
      headline: '01 Regionales Cockpit: Warum Sentiment-Werte Risiken übersehen',
      whatYouSee:
        'Auf EU gefiltert: Standard-Sentiment meldet "76% Neutral", da Fachmedien sachlich formulieren – während kritische Berichte zum Patientenzugang stark ansteigen.',
      whyItMatters:
        'Das Herausfiltern von Agentur-Dubletten und das Erkennen ungewöhnlicher Volumen-Anstiege zeigen frühzeitig, wo eine Debatte eskaliert.',
      tryThisLabel: 'Filter auf ALLE Regionen setzen',
      targetTab: 'cockpit',
      targetRegion: 'eu',
      openConceptGuide: false
    },
    {
      stepNumber: '03',
      shortLabel: '02 Cluster & KI-Audit',
      targetAnchorLabel: 'Tab 02 // Cluster & KI-Antwort-Check',
      headline: '02 Cluster & KI-Audit: Quellen und KI-Antworten prüfen',
      whatYouSee:
        'Zeigt die wichtigsten Artikel zum Thema und darunter die erzeugte KI-Suchantwort. Klicken Sie auf die roten Passagen [1] und [2], um die konkreten Faktenfehler zu sehen.',
      whyItMatters:
        'Suchsysteme überspringen vage PR-Einleitungen. Abschnitt 03 zeigt, wie klare Fakten und Zahlen im ersten Absatz die KI-Antwort in wiederholten Tests korrigieren.',
      tryThisLabel: 'Zum Krebstherapie-Fall wechseln',
      targetTab: 'geo',
      targetRegion: 'all',
      openConceptGuide: false
    },
    {
      stepNumber: '04',
      shortLabel: '03 Quellen & Rezepte',
      targetAnchorLabel: 'Tab 03 // Geprüfte Quellen & Rezepte',
      headline: '03 Quellen & Rezepte: Regeln anwenden ohne PDF-Handbücher',
      whatYouSee:
        'Bündelt geprüfte Golden Sources (GS-01–GS-03) und lädt die 4 Schreibregeln in 1-Klick-Rezepte. Testen Sie die 3 Eingriffstiefen (Alltagssprache, Studien-Präzision, Rechtsgrenze) und den Vorher/Nachher-Vergleich.',
      whyItMatters:
        'Unter Zeitdruck liest niemand 40-seitige PDF-Leitfäden – und Märkte wollen keine starren Einheits-Texte. Rezepte sichern nur die Kernfakten; Tonalität und Länge passen sich organisch an Kanal und Zielgruppe an, ohne dass KI-Suche darunter leidet.',
      tryThisLabel: 'Rezepte auf Schweiz (CH) filtern',
      targetTab: 'trending',
      targetRegion: 'all',
      openConceptGuide: false
    },
    {
      stepNumber: '05',
      shortLabel: '04 Stresstest & Anfrage',
      targetAnchorLabel: 'Tab 04 // Stresstest & Anfrage-Check',
      headline: '04 Stresstest & Anfrage-Check: Entwürfe vor Freigabe testen',
      whatYouSee:
        'Wechseln Sie zwischen Iteration 1 und Iteration 2 (oder zu 04B Medienanfrage-Check), um zu sehen, wie wiederholte Vorwürfe kritische Schlagzeilen auslösen – und wie eigene Fakten die Berichterstattung versachlichen.',
      whyItMatters:
        'KI hilft, Entwürfe vorab aus verschiedenen Blickwinkeln auf Schwachstellen zu testen – Feinschliff, Tonfall und Freigabe bleiben immer bei Kommunikation und Recht.',
      tryThisLabel: 'Konzept-, Methodik- & IT-Guide öffnen',
      targetTab: 'cascade',
      targetRegion: 'all',
      openConceptGuide: false
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
        selectedScenarioId === 'rlt_access_debate'
          ? 'oncology_trial_update'
          : 'rlt_access_debate';
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
              {isEn ? 'Why It Matters:' : 'Warum das wichtig ist:'}
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
                  ? selectedScenarioId === 'rlt_access_debate'
                    ? isEn
                      ? 'Try: Biopharma Pricing Case'
                      : 'Ausprobieren: Biopharma-Preisfall'
                    : isEn
                    ? 'Try: Cancer Therapy Case'
                    : 'Ausprobieren: Krebstherapie-Fall'
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
