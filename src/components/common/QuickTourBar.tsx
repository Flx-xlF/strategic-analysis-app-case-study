import React from 'react';
import { Language } from '../../fixtures/scenarios';
import { WorldRegionId } from '../../fixtures/cockpitFixtures';
import { ActiveTab } from './CommandHeader';
import {
  Compass,
  ArrowRight,
  ArrowLeft,
  X,
  CheckCircle2,
  Sparkles,
  Server,
  Globe
} from 'lucide-react';

export interface TourStepConfig {
  stepNumber: string;
  shortLabel: string;
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
        headline: 'Gaining Traction in the AI Shift: Why Coherence Across Corporate Comms Matters Now',
        whatYouSee:
          'Classic PR was built around press releases aimed at media outlets. In the age of AI search, answer engines synthesize press coverage, forums, and regional pages all at once. Even slight incoherence across central and regional teams, cantons, and internal files dilutes the power of corporate communications.',
        whyItMatters:
          'Shows how corporate comms can operate differently during this shift: auditing where narratives lose traction in media and AI search (Outside-In) while building tight coherence around verified Golden Sources and shared, channel-adapted GEO standards (Top-Down).',
        tryThisLabel: 'Switch to Oncology RLT Scenario',
        targetTab: 'cockpit',
        targetRegion: 'all',
        openConceptGuide: false
      },
      {
        stepNumber: '02',
        shortLabel: 'Outside-In Measurement',
        headline: '01 Regional Cockpit: Decision-Ready Context at the Push of a Button',
        whatYouSee:
          'We filtered the view to EU (Europe). Out of 48,420 raw articles and posts, standard NLP scores coverage as "76% Neutral" because journalists use formal financial and clinical language. Yet our statistical velocity funnel flags a +3.9σ escalation in EU/Swiss patient-access criticism.',
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
        headline: '02 Cluster & AI Audit: Query Fan-Out, Absorption & Answer-First GEO',
        whatYouSee:
          'When stakeholders query ChatGPT, Perplexity, or Google AI, the engine runs 5–11 parallel sub-queries (query fan-out) across regional press and corporate pages. When it hits buried PR preambles and incoherent regional coverage, it drops corporate context at the reranker cutoff and conflates facts.',
        whyItMatters:
          'Replaces debunked Schema.org/llms.txt shortcuts with empirical GEO: placing self-contained claims and quantitative stats (+61.5% absorption lift) in answer-first SSR HTML passages cuts LLM distortion from ~48% to ~5% across n=20 evaluation runs.',
        tryThisLabel: 'Inspect Oncology RLT GEO Audit',
        targetTab: 'geo',
        targetRegion: 'all',
        openConceptGuide: false
      },
      {
        stepNumber: '04',
        shortLabel: 'GEO Playbook & Stories',
        headline: '03 Multi-Region Playbook: Golden Sources, 4-Rule GEO Framework & Channel Adaptation',
        whatYouSee:
          'Filters hundreds of thousands of internal vault files down to a small set of approved, topic-specific "Golden Sources" (GS-01 to GS-03) and equips central and regional teams with a mandatory 4-Rule Corporate GEO Framework across owned Corporate Stories, press releases, media answers, talking points, and Q&As.',
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
        headline: '04 Multi-Angle Stress-Test, GEO Accusation Hygiene, Human Iteration & IT Fit',
        whatYouSee:
          'An LLM never delivers a ready-to-send answer in one pass. Instead, it tests drafts across regional stakeholder angles simultaneously and enforces GEO hygiene: stripping negative accusations (which otherwise get indexed against the company’s own domain by AI search engines) and bridging to our own narrative.',
        whyItMatters:
          'Provides decision-ready context and a GEO-safe scaffold at the push of a button—leaving final nuance, trade-offs, and sign-off to human leadership within existing IT governance (Veeva Vault, SharePoint, AI Gateway).',
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
      headline: 'Traktion im KI-Wandel gewinnen: Warum Kohärenz in der Unternehmenskommunikation jetzt entscheidend ist',
      whatYouSee:
        'Klassische PR setzte auf Medienmitteilungen für Journalisten. Im Zeitalter der KI-Suche bündeln Antwortmaschinen Medienberichte, Foren und regionale Seiten simultan. Selbst kleine Inkohärenzen zwischen zentralen und regionalen Teams oder Kantonen schwächen dabei die Durchschlagskraft der Kommunikation.',
      whyItMatters:
        'Zeigt, wie Unternehmenskommunikation in diesem Wandel wieder Traktion aufbaut: durch Audits von Medien und KI-Suche (Outside-In) sowie hohe Kohärenz über verbindliche Golden Sources und kanal-adaptierte GEO-Standards (Top-Down).',
      tryThisLabel: 'Zum Onkologie-RLT-Szenario wechseln',
      targetTab: 'cockpit',
      targetRegion: 'all',
      openConceptGuide: false
    },
    {
      stepNumber: '02',
      shortLabel: 'Outside-In Messung',
      headline: '01 Regionales Cockpit: Entscheidungsrelevanter Kontext auf Knopfdruck',
      whatYouSee:
        'Die Ansicht ist auf EU gefiltert. Aus 48.420 Rohartikeln meldet Standard-NLP "76% Neutral", da Fachmedien sachlich formulieren. Unser statistischer Trichter erkennt jedoch frühzeitig eine +3.9σ Eskalation in der europäischen Zugangsdebatte.',
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
      headline: '02 Cluster & KI-Audit: Query Fan-Out, Absorption & Answer-First GEO',
      whatYouSee:
        'Befragen Stakeholder ChatGPT, Perplexity oder Google AI, zerlegt die Engine die Frage in 5–11 parallele Suchanfragen (Query Fan-Out). Trifft sie auf langatmige PR-Einleitungen und uneinheitliche regionale Berichte, fällt der Unternehmenskontext durch das Reranking-Raster.',
      whyItMatters:
        'Ersetzt widerlegte Schema.org/llms.txt-mythen durch empirisches GEO: Answer-First HTML-Passagen mit direkten Zahlenbelegen (+61,5% Absorptions-Lift) senken KI-Verzerrungen über n=20 Prüfläufe von ~48% auf ~5%.',
      tryThisLabel: 'Onkologie-RLT GEO-Audit ansehen',
      targetTab: 'geo',
      targetRegion: 'all',
      openConceptGuide: false
    },
    {
      stepNumber: '04',
      shortLabel: 'GEO-Playbook & Stories',
      headline: '03 Multi-Regionen-Playbook: Golden Sources, 4-Regel GEO-Framework & Kanal-Adaptierung',
      whatYouSee:
        'Filtert Hunderttausende interne Vault-Dateien auf wenige freigegebene, themenspezifische "Golden Sources" (GS-01 bis GS-03) und gibt zentralen sowie regionalen Teams ein verbindliches 4-Regel GEO-Framework für Corporate Stories, Medienmitteilungen, Medienantworten und Q&As.',
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
    <section
      aria-label={isEn ? '90-Second Executive Quick Tour' : '90-Sekunden Kurz-Tour'}
      className="bg-sbb-black text-white border-b-2 border-sbb-red px-6 sm:px-8 py-4 transition-all"
    >
      <div className="max-w-[1600px] mx-auto space-y-3.5">
        {/* Top Row: Tour Badge + Step Progress Rail + Prev/Next/Close Controls */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 pb-3 border-b border-zinc-800">
          <div className="flex flex-wrap items-center gap-2">
            <span className="bg-sbb-red text-white font-mono text-[10px] font-black uppercase tracking-widest px-2.5 py-1 flex items-center gap-1.5 shrink-0">
              <Compass className="w-3.5 h-3.5" />
              <span>{isEn ? '90s GUIDED TOUR (LIVE WORKSPACE SYNC)' : '90s GUIDED TOUR (LIVE-SYNC)'}</span>
            </span>

            {/* Step Progress Rail */}
            <div className="flex flex-wrap items-center gap-1">
              {steps.map((step, idx) => {
                const isCurrent = idx === currentStep;
                const isCompleted = idx < currentStep;
                return (
                  <button
                    key={step.stepNumber}
                    onClick={() => onSelectStep(idx)}
                    className={`px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer border flex items-center gap-1.5 ${
                      isCurrent
                        ? 'bg-white text-sbb-black border-white'
                        : isCompleted
                        ? 'bg-zinc-900 text-zinc-200 border-zinc-700 hover:border-zinc-500'
                        : 'bg-zinc-950 text-zinc-400 border-zinc-800 hover:text-white hover:border-zinc-600'
                    }`}
                  >
                    {isCompleted && <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />}
                    <span>{step.stepNumber}</span>
                    <span className="hidden xl:inline">{step.shortLabel}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-2 self-end lg:self-auto shrink-0">
            <button
              onClick={() => onSelectStep(Math.max(0, currentStep - 1))}
              disabled={currentStep === 0}
              className={`px-2.5 py-1 font-mono text-[10px] font-bold uppercase border transition-colors flex items-center gap-1 ${
                currentStep === 0
                  ? 'border-zinc-800 text-zinc-600 cursor-not-allowed'
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
              className="px-3.5 py-1 font-mono text-[10px] font-black uppercase border border-sbb-red bg-sbb-red text-white hover:bg-red-700 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <span>
                {currentStep < steps.length - 1
                  ? isEn
                    ? 'Next Step'
                    : 'Nächster Schritt'
                  : isEn
                  ? 'Finish Tour'
                  : 'Tour beenden'}
              </span>
              <ArrowRight className="w-3 h-3" />
            </button>

            <button
              onClick={onClose}
              className="px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-600 transition-colors flex items-center gap-1 cursor-pointer"
              title={isEn ? 'Hide Tour Bar' : 'Tour-Leiste ausblenden'}
            >
              <X className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{isEn ? 'Dismiss' : 'Ausblenden'}</span>
            </button>
          </div>
        </div>

        {/* Compact Content Row: Headline + What You See + Strategic Value & Interactive Trigger */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
          <div className="lg:col-span-4 flex flex-col justify-center border-l-2 border-sbb-red pl-3.5">
            <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-zinc-400 mb-1">
              <span className="text-sbb-red font-black">
                {isEn ? `STEP ${activeStep.stepNumber} OF 05` : `SCHRITT ${activeStep.stepNumber} VON 05`}
              </span>
              <span>//</span>
              <span className="text-white font-bold">{activeStep.shortLabel}</span>
            </div>
            <h3 className="text-sm sm:text-base font-bold text-white leading-snug">
              {activeStep.headline}
            </h3>
          </div>

          <div className="lg:col-span-4 bg-zinc-900/90 border border-zinc-800 p-3.5 space-y-1">
            <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
              <Globe className="w-3 h-3 text-sbb-red" />
              <span>{isEn ? 'WHAT YOU SEE BELOW' : 'WAS SIE UNTEN SEHEN'}</span>
            </div>
            <p className="text-xs text-zinc-200 leading-relaxed">{activeStep.whatYouSee}</p>
          </div>

          <div className="lg:col-span-4 bg-zinc-900/90 border border-zinc-800 p-3.5 flex flex-col justify-between gap-2">
            <div className="space-y-1">
              <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-sbb-red" />
                <span>{isEn ? 'WHY IT MATTERS FOR STRATEGIC ENABLEMENT' : 'STRATEGISCHER MEHRWERT'}</span>
              </div>
              <p className="text-xs text-zinc-200 leading-relaxed">{activeStep.whyItMatters}</p>
            </div>

            <button
              onClick={handleQuickAction}
              className="w-full px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-white font-mono text-[10px] font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 cursor-pointer border border-zinc-700"
            >
              {currentStep === 4 ? (
                <Server className="w-3 h-3 text-sbb-red" />
              ) : (
                <ArrowRight className="w-3 h-3 text-sbb-red" />
              )}
              <span>
                {currentStep === 0 || currentStep === 2
                  ? selectedScenarioId === 'pluvicto_access_debate'
                    ? isEn
                      ? 'Switch to Biopharma MFN Pricing Case'
                      : 'Zum Biopharma-MFN-Preisszenario wechseln'
                    : isEn
                    ? 'Compare with Oncology Radioligand Case'
                    : 'Mit Onkologie-Radioliganden-Fall vergleichen'
                  : currentStep === 4
                  ? showConceptGuide
                    ? isEn
                      ? 'Hide IT & Method Panel Above'
                      : 'IT- & Methodik-Panel ausblenden'
                    : isEn
                    ? 'Open IT & Method Panel Above'
                    : 'IT- & Methodik-Panel öffnen'
                  : activeStep.tryThisLabel}
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickTourBar;
