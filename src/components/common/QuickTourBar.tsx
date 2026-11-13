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
}

export const getTourSteps = (lang: Language): TourStepConfig[] => {
  const isEn = lang === 'en';

  if (isEn) {
    return [
      {
        stepNumber: '01',
        shortLabel: 'Core Premise',
        headline: 'Gaining Traction in the AI Shift: Why Coherence Across Global Comms Matters Now',
        whatYouSee:
          'Classic PR was built around press releases aimed at media outlets. In the age of AI search, answer engines synthesize global press coverage, forums, and regional pages all at once. Even slight incoherence across regional adaptations and internal files dilutes the power of corporate communications.',
        whyItMatters:
          'Shows how global comms can operate differently during this shift: auditing where narratives lose traction in media and AI search (Outside-In) while building tight coherence around verified Golden Sources and shared GEO standards (Top-Down).',
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
        headline: '02 Cluster & AI Audit: Generative Engine Optimization (GEO) in Practice',
        whatYouSee:
          'While press releases target journalists, stakeholders increasingly query ChatGPT, Perplexity, and Gemini directly. When AI engines scrape varied regional coverage and unstructured PR prose—such as around a $23B US manufacturing expansion—incoherence across sources causes LLMs to conflate facts.',
        whyItMatters:
          'Directly operationalizes Generative Engine Optimization (GEO). By auditing where AI engines misinterpret corporate context and publishing machine-readable GEO Fact Blocks (side-by-side on this screen), comms teams can cut LLM distortion rates from ~48% down to ~5%.',
        tryThisLabel: 'Inspect Oncology RLT GEO Audit',
        targetTab: 'geo',
        targetRegion: 'all',
        openConceptGuide: false
      },
      {
        stepNumber: '04',
        shortLabel: 'GEO Playbook & Stories',
        headline: '03 Regional Playbook: Golden Sources, 4-Rule GEO Framework & Owned Corporate Stories',
        whatYouSee:
          'Filters 1.42M internal files down to 42 approved "Golden Sources" (GS-01 to GS-03) and equips US, EU, CH, and APAC teams with a 4-Rule Corporate GEO Framework across owned Corporate Stories, social posts, talking points, and Q&As.',
        whyItMatters:
          'While press releases depend on what journalists quote, GEO-structured Corporate Stories on the company’s own domain are crawled directly by AI search engines—giving global teams a coherent way to deliver the company’s full narrative.',
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
          'An LLM never delivers a ready-to-send answer in one pass. Instead, it tests drafts across 5 stakeholder angles simultaneously and enforces GEO hygiene: stripping negative accusations (which otherwise get indexed against the company’s own domain by AI search engines) and bridging to our own narrative.',
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
      headline: 'Traktion im KI-Wandel gewinnen: Warum Kohärenz in der globalen Kommunikation jetzt entscheidend ist',
      whatYouSee:
        'Klassische PR setzte auf Medienmitteilungen für Journalisten. Im Zeitalter der KI-Suche bündeln Antwortmaschinen weltweit Medienberichte, Foren und Länderseiten simultan. Selbst kleine Inkohärenzen zwischen regionalen Adaptionen und internen Dokumenten schwächen dabei die Durchschlagskraft der Kommunikation.',
      whyItMatters:
        'Zeigt, wie globale Kommunikation in diesem Wandel wieder Traktion aufbaut: durch Audits von Medien und KI-Suche (Outside-In) sowie hohe Kohärenz über verbindliche Golden Sources und gemeinsame GEO-Standards (Top-Down).',
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
      headline: '02 Cluster & KI-Audit: Generative Engine Optimization (GEO) in der Praxis',
      whatYouSee:
        'Während Medienmitteilungen an Journalisten adressiert sind, befragen Stakeholder zunehmend direkt ChatGPT, Perplexity und Gemini. Treffen KI-Modelle auf uneinheitliche regionale Berichte und unstrukturierte PR-Prosa – etwa zur 23-Mrd.-USD-Investition –, führen diese Inkohärenzen zu Kontextfehlern.',
      whyItMatters:
        'Setzt Generative Engine Optimization (GEO) konkret um: Durch das Auditieren von KI-Antworten und strukturierte GEO-Faktenblöcke lassen sich Halluzinationsraten in KI-Suchmaschinen von ~48% auf ~5% senken.',
      tryThisLabel: 'Onkologie-RLT GEO-Audit ansehen',
      targetTab: 'geo',
      targetRegion: 'all',
      openConceptGuide: false
    },
    {
      stepNumber: '04',
      shortLabel: 'GEO-Playbook & Stories',
      headline: '03 Regionales Playbook: Golden Sources, 4-Regel GEO-Framework & Corporate Stories',
      whatYouSee:
        'Filtert 1,42 Mio. interne Dateien auf 42 freigegebene "Golden Sources" (GS-01 bis GS-03) und gibt Teams in US, EU, CH und APAC ein 4-Regel GEO-Framework für eigene Corporate Stories, Social-Posts, Talking Points und Q&As.',
      whyItMatters:
        'Während Medienmitteilungen durch Journalisten gefiltert werden, crawlen KI-Suchmaschinen GEO-strukturierte Corporate Stories direkt auf der Unternehmens-Domain – und übernehmen so das vollständige eigene Narrativ.',
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
        'Ein LLM liefert nie im ersten Durchlauf die fertige Antwort. Es prüft Entwürfe simultan aus fünf Stakeholder-Perspektiven und sichert GEO-Hygiene: Es streicht Negativ-Vorwürfe (die KI-Suchmaschinen sonst auf der eigenen Domain indexieren) und baut Brücken zum eigenen Narrativ.',
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
  onToggleConceptGuide
}) => {
  React.useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const isEn = lang === 'en';
  const steps = getTourSteps(lang);
  const activeStep = steps[currentStep] || steps[0];

  const handleQuickAction = () => {
    if (currentStep === 0) {
      const nextId =
        selectedScenarioId === 'pluvicto_access_debate'
          ? 'oncology_trial_update'
          : 'pluvicto_access_debate';
      onSelectScenarioById(nextId);
    } else if (currentStep === 1) {
      onSelectStep(1);
    } else if (currentStep === 2) {
      const nextId =
        selectedScenarioId === 'pluvicto_access_debate'
          ? 'oncology_trial_update'
          : 'pluvicto_access_debate';
      onSelectScenarioById(nextId);
    } else if (currentStep === 3) {
      onSelectScenarioById('oncology_trial_update');
    } else if (currentStep === 4) {
      onToggleConceptGuide();
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={isEn ? '90-Second Executive Quick Tour' : '90-Sekunden Kurz-Tour'}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/55 backdrop-blur-sm"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-3xl bg-sbb-black text-white border border-zinc-700 border-t-4 border-t-sbb-red shadow-none flex flex-col max-h-[90vh] overflow-y-auto"
      >
        {/* Modal Header: Tour Badge + Close/Skip */}
        <div className="px-6 py-4 border-b border-zinc-800 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="bg-sbb-red text-white font-mono text-[10px] font-black uppercase tracking-widest px-2.5 py-1 flex items-center gap-1.5 shrink-0">
              <Compass className="w-3.5 h-3.5" />
              <span>{isEn ? '90s RECRUITING & EXECUTIVE TOUR' : '90s RECRUITING- & EXECUTIVE-TOUR'}</span>
            </span>
            <span className="text-[11px] font-mono text-zinc-400 hidden sm:inline">
              {isEn ? 'Introduction & Mandate Fit' : 'Einführung & Mandats-Abgleich'}
            </span>
          </div>

          <button
            onClick={onClose}
            className="px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-600 transition-colors flex items-center gap-1.5 cursor-pointer"
            title={isEn ? 'Skip Intro (Esc)' : 'Intro überspringen (Esc)'}
          >
            <X className="w-3.5 h-3.5" />
            <span>{isEn ? 'Skip Intro' : 'Intro überspringen'}</span>
          </button>
        </div>

        {/* Step Progress Rail */}
        <div className="px-6 py-3 bg-zinc-950 border-b border-zinc-800 flex flex-wrap items-center gap-1.5">
          {steps.map((step, idx) => {
            const isCurrent = idx === currentStep;
            const isCompleted = idx < currentStep;
            return (
              <button
                key={step.stepNumber}
                onClick={() => onSelectStep(idx)}
                className={`px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer border flex items-center gap-1.5 ${
                  isCurrent
                    ? 'bg-sbb-red text-white border-sbb-red'
                    : isCompleted
                    ? 'bg-zinc-900 text-zinc-200 border-zinc-700 hover:border-zinc-500'
                    : 'bg-zinc-950 text-zinc-400 border-zinc-800 hover:text-white hover:border-zinc-600'
                }`}
              >
                {isCompleted && <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />}
                <span>{step.stepNumber}</span>
                <span className="hidden md:inline">{step.shortLabel}</span>
              </button>
            );
          })}
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5">
          {/* Headline */}
          <div className="space-y-1.5 border-l-2 border-sbb-red pl-4">
            <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-zinc-400">
              <span className="text-sbb-red font-black">
                {isEn ? `STEP ${activeStep.stepNumber} OF 05` : `SCHRITT ${activeStep.stepNumber} VON 05`}
              </span>
              <span>//</span>
              <span className="text-white font-bold">{activeStep.shortLabel}</span>
            </div>
            <h3 className="text-lg font-bold text-white leading-snug">
              {activeStep.headline}
            </h3>
          </div>

          {/* Two-Column Briefing */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2 bg-zinc-900/90 border border-zinc-800 p-4">
              <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-sbb-red" />
                <span>{isEn ? 'WHAT THIS VIEW SHOWS' : 'WAS DIESE ANSICHT ZEIGT'}</span>
              </div>
              <p className="text-xs text-zinc-200 leading-relaxed">{activeStep.whatYouSee}</p>
            </div>

            <div className="space-y-2 bg-zinc-900/90 border border-zinc-800 p-4 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-sbb-red" />
                  <span>
                    {isEn
                      ? 'WHY IT MATTERS FOR GLOBAL ENABLEMENT'
                      : 'RELEVANZ FÜR GLOBAL ENABLEMENT'}
                  </span>
                </div>
                <p className="text-xs text-zinc-200 leading-relaxed">{activeStep.whyItMatters}</p>
              </div>

              {currentStep !== 1 && (
                <div className="pt-3 mt-3 border-t border-zinc-800 flex items-center justify-between gap-2">
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
                            ? 'Switch to Global Pharma MFN Pricing Case'
                            : 'Zum Pharma-MFN-Preisszenario wechseln'
                          : isEn
                          ? 'Compare with Oncology Radioligand Case'
                          : 'Mit Onkologie-Radioliganden-Fall vergleichen'
                        : currentStep === 4
                        ? showConceptGuide
                          ? isEn
                            ? 'Hide IT & Method Panel Behind'
                            : 'IT- & Methodik-Panel ausblenden'
                          : isEn
                          ? 'Open IT & Method Panel Behind'
                          : 'IT- & Methodik-Panel öffnen'
                        : activeStep.tryThisLabel}
                    </span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Modal Footer: Navigation */}
        <div className="px-6 py-4 bg-zinc-950 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={() => onSelectStep(Math.max(0, currentStep - 1))}
            disabled={currentStep === 0}
            className={`px-3 py-1.5 font-mono text-[11px] font-bold uppercase border transition-colors flex items-center gap-1.5 ${
              currentStep === 0
                ? 'border-zinc-800 text-zinc-600 cursor-not-allowed'
                : 'border-zinc-700 bg-zinc-900 text-white hover:bg-zinc-800 cursor-pointer'
            }`}
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{isEn ? 'Prev' : 'Zurück'}</span>
          </button>

          <div className="flex items-center gap-2.5">
            <button
              onClick={onClose}
              className="px-3 py-1.5 font-mono text-[11px] font-bold uppercase border border-zinc-700 bg-zinc-900 text-zinc-200 hover:text-white hover:border-zinc-500 transition-colors cursor-pointer"
            >
              {isEn ? 'Explore This View' : 'Diese Ansicht öffnen'}
            </button>

            <button
              onClick={() => {
                if (currentStep < steps.length - 1) {
                  onSelectStep(currentStep + 1);
                } else {
                  onClose();
                }
              }}
              className="px-4 py-1.5 font-mono text-[11px] font-black uppercase border border-sbb-red bg-sbb-red text-white hover:bg-red-700 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <span>
                {currentStep < steps.length - 1
                  ? isEn
                    ? 'Next Step'
                    : 'Nächster Schritt'
                  : isEn
                  ? 'Enter Live Workspace'
                  : 'Zur Live-Ansicht'}
              </span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickTourBar;
