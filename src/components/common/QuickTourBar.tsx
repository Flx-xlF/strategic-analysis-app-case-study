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
        shortLabel: 'Core Premise',
        targetAnchorLabel: 'Scenario Switcher & Direction 1 Cockpit',
        headline: 'Gaining Traction in the AI Shift: Query Fan-Out Collapses Separate Channels Into One Answer',
        whatYouSee:
          'Comms teams operate across earned media, owned stories, and regional briefings—historically consumed separately. In AI search, query fan-out (5–11 parallel sub-queries) pulls press coverage, forums, owned pages, and legacy files into one context window at once, exposing framing incoherence.',
        whyItMatters:
          'Audits where corporate narratives lose pull-through in media and AI search (Outside-In) while enforcing verified Golden Sources and channel-adapted GEO standards across earned and owned channels (Top-Down).',
        tryThisLabel: 'Switch to Oncology RLT Scenario',
        targetTab: 'cockpit',
        targetRegion: 'all',
        openConceptGuide: false
      },
      {
        stepNumber: '02',
        shortLabel: 'Outside-In Measurement',
        targetAnchorLabel: 'Tab 01 // Regional Cockpit & Region Filter [EU]',
        headline: '01 Regional Cockpit: Decision-Ready Context at the Push of a Button',
        whatYouSee:
          'Filtered to EU: out of 48,420 raw articles and posts, standard NLP scores coverage as "76% Neutral" because journalists use formal clinical wording. Yet our statistical velocity funnel flags a +3.9σ escalation in EU/Swiss access criticism.',
        whyItMatters:
          'Assists leadership in making fast, informed decisions by synthesizing cross-regional reception, narrative pull-through, and market-access risks at the push of a button—while final judgment remains human.',
        tryThisLabel: 'Reset Filter to ALL Regions',
        targetTab: 'cockpit',
        targetRegion: 'eu',
        openConceptGuide: false
      },
      {
        stepNumber: '03',
        shortLabel: 'GEO & AI Search Audit',
        targetAnchorLabel: 'Tab 02 // Cluster & AI Answer Audit',
        headline: '02 Cluster & AI Audit: Query Fan-Out, Absorption & Answer-First GEO',
        whatYouSee:
          'When stakeholders query ChatGPT, Perplexity, or Google AI, the engine runs 5–11 parallel sub-queries. When it hits buried PR preambles and incoherent regional coverage, it drops corporate context at the reranker cutoff and conflates facts.',
        whyItMatters:
          'Replaces debunked Schema.org/llms.txt shortcuts with empirical GEO: placing self-contained claims and quantitative stats (+61.5% absorption lift) in answer-first SSR HTML passages cuts LLM distortion from ~48% to ~5% across n=20 runs.',
        tryThisLabel: 'Inspect Oncology RLT GEO Audit',
        targetTab: 'geo',
        targetRegion: 'all',
        openConceptGuide: false
      },
      {
        stepNumber: '04',
        shortLabel: 'GEO Playbook & Stories',
        targetAnchorLabel: 'Tab 03 // Multi-Region GEO Playbook',
        headline: '03 Multi-Region Playbook: Golden Sources, 4-Rule GEO Framework & Channel Adaptation',
        whatYouSee:
          'Filters hundreds of thousands of internal vault files down to a small set of approved "Golden Sources" (GS-01 to GS-03) and equips central and regional teams with a mandatory 4-Rule Corporate GEO Framework across Corporate Stories, press releases, media answers, and Q&As.',
        whyItMatters:
          'While Owned Corporate Stories act as high-authority direct-to-AI primary sources, press releases and media inquiry answers follow the exact same GEO rules—ensuring third-party journalist quotes reinforce the company’s narrative in AI search.',
        tryThisLabel: 'Filter Playbook to Switzerland (CH)',
        targetTab: 'trending',
        targetRegion: 'all',
        openConceptGuide: false
      },
      {
        stepNumber: '05',
        shortLabel: 'Stress-Test, GEO & IT',
        targetAnchorLabel: 'Tab 04 // Stress-Test & Concept, Method & IT Fit',
        headline: '04 Multi-Angle Stress-Test, GEO Accusation Hygiene, Human Iteration & IT Fit',
        whatYouSee:
          'An LLM never delivers a ready-to-send answer in one pass. It tests drafts across regional stakeholder angles simultaneously and enforces GEO hygiene: stripping negative accusations (which otherwise get indexed against the company’s own domain) and bridging to our narrative.',
        whyItMatters:
          'Provides decision-ready context and a GEO-safe scaffold at the push of a button—leaving final nuance and sign-off to human leadership within existing IT governance (Veeva Vault, SharePoint, AI Gateway).',
        tryThisLabel: 'Toggle Enterprise IT & Method Guide',
        targetTab: 'cascade',
        targetRegion: 'all',
        openConceptGuide: true
      }
    ];
  }

  return [
    {
      stepNumber: '01',
      shortLabel: 'Grundthese',
      targetAnchorLabel: 'Szenario-Wahl & Richtung 1 Cockpit',
      headline: 'Traktion im KI-Wandel: Wenn Query Fan-Out getrennte Kanäle in einer Antwort zusammenzieht',
      whatYouSee:
        'Kommunikation bespielt Earned Media, Owned Stories und regionale Briefings – früher getrennt nach Zielgruppen. In der KI-Suche zieht Query Fan-Out (5–11 parallele Sub-Anfragen) Presseberichte, Foren, eigene Seiten und Alt-Dateien simultan in ein Kontextfenster und legt jede Inkohärenz offen.',
      whyItMatters:
        'Zeigt, wie Kommunikation Traktion sichert: durch Audits von Medien und KI-Antworten (Outside-In) sowie verbindliche Golden Sources und kanal-adaptierte GEO-Standards über Earned und Owned Media hinweg (Top-Down).',
      tryThisLabel: 'Zum Onkologie-RLT-Szenario wechseln',
      targetTab: 'cockpit',
      targetRegion: 'all',
      openConceptGuide: false
    },
    {
      stepNumber: '02',
      shortLabel: 'Outside-In Messung',
      targetAnchorLabel: 'Tab 01 // Regionales Cockpit & Region-Filter [EU]',
      headline: '01 Regionales Cockpit: Entscheidungsrelevanter Kontext auf Knopfdruck',
      whatYouSee:
        'Auf EU gefiltert: Aus 48.420 Rohartikeln meldet Standard-NLP "76% Neutral", da Fachmedien sachlich formulieren. Unser statistischer Trichter erkennt jedoch frühzeitig eine +3.9σ Eskalation in der europäischen Zugangsdebatte.',
      whyItMatters:
        'Unterstützt Führungskräfte bei fundierten Entscheidungen, indem regionaler Rezeptionskontext und Market-Access-Risiken auf Knopfdruck bereitstehen – während die finale Abwägung beim Menschen bleibt.',
      tryThisLabel: 'Filter auf ALLE Regionen setzen',
      targetTab: 'cockpit',
      targetRegion: 'eu',
      openConceptGuide: false
    },
    {
      stepNumber: '03',
      shortLabel: 'GEO & KI-Such-Audit',
      targetAnchorLabel: 'Tab 02 // Cluster & KI-Audit',
      headline: '02 Cluster & KI-Audit: Query Fan-Out, Absorption & Answer-First GEO',
      whatYouSee:
        'Befragen Stakeholder ChatGPT, Perplexity oder Google AI, zerlegt die Engine die Frage in 5–11 parallele Suchanfragen (Query Fan-Out). Trifft sie auf langatmige PR-Einleitungen und uneinheitliche regionale Berichte, fällt der Unternehmenskontext durch das Reranking-Raster.',
      whyItMatters:
        'Ersetzt widerlegte Schema.org/llms.txt-Mythen durch empirisches GEO: Answer-First HTML-Passagen mit direkten Zahlenbelegen (+61,5% Absorptions-Lift) senken KI-Verzerrungen über n=20 Prüfläufe von ~48% auf ~5%.',
      tryThisLabel: 'Onkologie-RLT GEO-Audit ansehen',
      targetTab: 'geo',
      targetRegion: 'all',
      openConceptGuide: false
    },
    {
      stepNumber: '04',
      shortLabel: 'GEO-Playbook & Stories',
      targetAnchorLabel: 'Tab 03 // Multi-Regionen Playbook',
      headline: '03 Multi-Regionen-Playbook: Golden Sources, 4-Regel GEO-Framework & Kanal-Adaptierung',
      whatYouSee:
        'Filtert Hunderttausende interne Vault-Dateien auf wenige freigegebene "Golden Sources" (GS-01 bis GS-03) und gibt zentralen sowie regionalen Teams ein verbindliches 4-Regel GEO-Framework für Corporate Stories, Medienmitteilungen, Statements und Q&As.',
      whyItMatters:
        'Während Owned Corporate Stories als primäre KI-Quellen fungieren, folgen Medienmitteilungen und Statements denselben GEO-Regeln – damit Zitate in Drittmedien das eigene Narrativ in der KI-Suche stärken.',
      tryThisLabel: 'Playbook auf Schweiz (CH) filtern',
      targetTab: 'trending',
      targetRegion: 'all',
      openConceptGuide: false
    },
    {
      stepNumber: '05',
      shortLabel: 'Stresstest, GEO & IT',
      targetAnchorLabel: 'Tab 04 // Stresstest & Konzept, Methodik & IT-Fit',
      headline: '04 Multi-Winkel-Stresstest, GEO-Vorwurfshygiene, Menschliche Iteration & IT-Integration',
      whatYouSee:
        'Ein LLM liefert nie im ersten Durchlauf die fertige Antwort. Es prüft Entwürfe simultan aus regionalen Stakeholder-Perspektiven und sichert GEO-Hygiene: Es streicht Negativ-Vorwürfe (die KI-Suchmaschinen sonst auf der eigenen Domain indexieren) und baut Brücken zum eigenen Narrativ.',
      whyItMatters:
        'Liefert Entscheidungskontext und ein GEO-sicheres Arbeitsgerüst auf Knopfdruck – während Feinschliff und Freigabe beim Menschen innerhalb bestehender IT-Governance (Veeva Vault, SharePoint, AI Gateway) bleiben.',
      tryThisLabel: 'IT- & Methodik-Guide ein-/ausblenden',
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
      className="fixed bottom-0 inset-x-0 z-40 bg-sbb-black text-white border-t-2 border-[#FFCC00] shadow-[0_-4px_20px_rgba(0,0,0,0.5)] transition-all"
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
            <p className="text-[11px] text-zinc-300 leading-relaxed line-clamp-2">
              {activeStep.whatYouSee}
            </p>
          </div>

          {/* Col 2: Strategic Value Tag */}
          <div className="lg:col-span-4 bg-zinc-900 border-l-2 border-[#FFCC00] border border-zinc-800 p-2 text-[10px] text-zinc-300 leading-snug">
            <strong className="text-white block font-mono uppercase mb-0.5">
              {isEn ? 'Why It Matters:' : 'Strategischer Mehrwert:'}
            </strong>
            <p className="line-clamp-2">{activeStep.whyItMatters}</p>
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
