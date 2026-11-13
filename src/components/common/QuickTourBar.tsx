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
        headline: 'In the Age of AI Search: How Do We Align Corporate Comms Again—and Shape Public Reception Again?',
        whatYouSee:
          'As AI search engines synthesize global coverage in real time and teams use LLMs across silos, traditional PR tools have lost their grip. This prototype explores how to align corporate communications again (Direction 2: Top-Down) and actively shape public & AI reception again (Direction 1: Outside-In).',
        whyItMatters:
          'Built as a practical strategy & enablement case study: it shows how statistical filtering, Generative Engine Optimization (GEO), Golden Source governance, and disciplined bridging tactics restore narrative consistency across US, EU, CH, and APAC.',
        tryThisLabel: 'Switch to Pluvicto Scenario',
        targetTab: 'cockpit',
        targetRegion: 'all',
        openConceptGuide: false
      },
      {
        stepNumber: '02',
        shortLabel: 'Outside-In Measurement',
        headline: '01 Regional Cockpit: Why Standard "AI Sentiment" Fails in Regulated Industries',
        whatYouSee:
          'We filtered the view to EU (Europe). Out of 48,420 raw articles and posts, standard NLP scores coverage as "76% Neutral" because journalists use formal financial and clinical language. Yet our statistical velocity funnel flags a +3.9σ escalation in EU/Swiss patient-access criticism.',
        whyItMatters:
          'Moves reputation measurement beyond clipping books and vanity sentiment scores. Combining deterministic filtering (MinHash + HDBSCAN + z-score velocity) with targeted LLM reads gives leadership an early warning radar tied to real market-access stakes.',
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
          'Stakeholders increasingly ask ChatGPT, Perplexity, and Gemini complex questions before reading press releases—such as whether Novartis’s $23B US expansion means leaving Basel or delaying EU launches. Unstructured PR prose causes LLMs to conflate facts and hallucinate.',
        whyItMatters:
          'Directly operationalizes Generative Engine Optimization (GEO). By auditing where AI engines misinterpret corporate context and publishing machine-readable GEO Fact Blocks (side-by-side on this screen), comms teams can cut LLM distortion rates from ~48% down to ~5%.',
        tryThisLabel: 'Inspect Pluvicto GEO Audit',
        targetTab: 'geo',
        targetRegion: 'all',
        openConceptGuide: false
      },
      {
        stepNumber: '04',
        shortLabel: 'Regional Enablement',
        headline: '03 Regional Playbook: Enabling Global & Country Teams via "Golden Sources"',
        whatYouSee:
          'Before generating any guidance, the system filters 1.42M internal SharePoint and Veeva Vault files down to 42 approved "Golden Sources" (GS-01 to GS-03) and quarantines outdated affiliate decks. It then cascades tailored messaging for US, EU, CH, and APAC.',
        whyItMatters:
          'Solves the hardest part of AI adoption—process integration: Management gets a 5-minute steering radar on narrative pull-through, while regional teams start from pre-cleared Golden Sources that cut Legal/MLR review cycles from days to hours.',
        tryThisLabel: 'Filter Playbook to Switzerland (CH)',
        targetTab: 'trending',
        targetRegion: 'all',
        openConceptGuide: false
      },
      {
        stepNumber: '05',
        shortLabel: 'Bridging, Iteration & IT',
        headline: '04 Multi-Angle Challenge, Bridging Tactics, Human Iteration & IT Fit',
        whatYouSee:
          'An LLM never delivers a ready-to-send answer in one shot. Instead, it acts as a multi-angle challenger—stripping negative framings/accusations (vital for GEO), proposing bridging tactics back to the main corporate narrative, and exposing blind spots for human iteration.',
        whyItMatters:
          'Under time pressure, humans risk repeating hostile frames. The LLM provides the multi-angle challenge, negative-frame hygiene, and GEO scaffold; humans provide judgment, iteration, and Legal/IT alignment (Veeva Vault, SharePoint, Enterprise AI Gateway).',
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
      headline: 'Im Zeitalter von KI-Suche: Wie richten wir Kommunikation wieder konsistent aus – und prägen Rezeption wieder wirksam?',
      whatYouSee:
        'Weil KI-Antwortmaschinen weltweite Quellen in Echtzeit zusammenfassen und Teams LLMs oft isoliert nutzen, greifen klassische PR-Instrumente zu kurz. Dieser Prototyp zeigt, wie wir Unternehmenskommunikation wieder ausrichten (Top-Down) und öffentliche/KI-Rezeption wieder aktiv prägen (Outside-In).',
      whyItMatters:
        'Verbindet statistische Rezeptionsanalyse und Generative Engine Optimization (GEO) mit verbindlichen Golden Sources, Negativ-Frame-Hygiene, Bridging-Taktiken und menschlicher Iteration über US, EU, CH und APAC hinweg.',
      tryThisLabel: 'Zum Pluvicto-Szenario wechseln',
      targetTab: 'cockpit',
      targetRegion: 'all',
      openConceptGuide: false
    },
    {
      stepNumber: '02',
      shortLabel: 'Outside-In Messung',
      headline: '01 Regionales Cockpit: Warum klassisches "KI-Sentiment" in regulierten Branchen versagt',
      whatYouSee:
        'Die Ansicht ist auf EU gefiltert. Aus 48.420 Rohartikeln meldet Standard-NLP "76% Neutral", da Fachmedien sachlich formulieren. Unser statistischer Trichter erkennt jedoch frühzeitig eine +3.9σ Eskalation in der europäischen Zugangsdebatte.',
      whyItMatters:
        'Ersetzt reine Pressespiegel und oberflächliche Sentiment-Werte durch belastbare Frühwarn-Indikatoren (MinHash + HDBSCAN + z-Score Dynamik + gezielter LLM-Pass), direkt verknüpft mit Market-Access-Risiken.',
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
        'Stakeholder befragen zunehmend ChatGPT, Perplexity und Gemini vor klassischen Kanälen – etwa ob die 23-Mrd.-USD-Investition in den USA einen Rückzug aus Basel bedeutet. Reine PR-Prosa führt bei LLMs zu Kontextfehlern.',
      whyItMatters:
        'Setzt Generative Engine Optimization (GEO) konkret um: Durch das Auditieren von KI-Antworten und strukturierte GEO-Faktenblöcke lassen sich Halluzinationsraten in KI-Suchmaschinen von ~48% auf ~5% senken.',
      tryThisLabel: 'Pluvicto GEO-Audit ansehen',
      targetTab: 'geo',
      targetRegion: 'all',
      openConceptGuide: false
    },
    {
      stepNumber: '04',
      shortLabel: 'Regionale Befähigung',
      headline: '03 Regionales Playbook: Globale Leitplanken & "Golden Sources" für Länderteams',
      whatYouSee:
        'Vor jeder Textausgabe filtert das System 1,42 Mio. interne SharePoint- und Veeva-Dateien auf 42 freigegebene "Golden Sources" (GS-01 bis GS-03) und sperrt veraltete Länder-Decks. Darauf basierend entstehen Playbooks für US, EU, CH und APAC.',
      whyItMatters:
        'Löst die Kernhürde bei KI-Integration – die Prozess-Einbettung: Das Management erhält ein 5-Minuten-Radar zur Narrativ-Durchdringung, während Länderteams mit geprüften Golden Sources arbeiten und MLR-Freigaben von Tagen auf Stunden verkürzen.',
      tryThisLabel: 'Playbook auf Schweiz (CH) filtern',
      targetTab: 'trending',
      targetRegion: 'all',
      openConceptGuide: false
    },
    {
      stepNumber: '05',
      shortLabel: 'Bridging, Iteration & IT',
      headline: '04 Multi-Winkel-Challenge, Bridging-Taktiken, Iteration & IT-Integration',
      whatYouSee:
        'Ein LLM liefert nie auf Knopfdruck die perfekte, versandfertige Antwort. Es dient als Multi-Winkel-Challenger: Es eliminiert Negativ-Framings (zentral für GEO), schlägt Bridging-Taktiken zum Haupt-Narrativ vor und deckt Flanken für die menschliche Iteration auf.',
      whyItMatters:
        'Unter Zeitdruck wiederholen Menschen oft ungewollt den Vorwurf. Die KI liefert Negativ-Frame-Hygiene, Bridging-Vorschläge und Multi-Winkel-Challenge; der Mensch übernimmt Urteilskraft, Iteration und Legal/IT-Integration.',
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
                            ? 'Switch to Novartis MFN Pricing Case'
                            : 'Zum Novartis MFN-Preisszenario wechseln'
                          : isEn
                          ? 'Compare with Novartis Pluvicto Case'
                          : 'Mit Novartis Pluvicto-Fall vergleichen'
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
