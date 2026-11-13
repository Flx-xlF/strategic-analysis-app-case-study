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
        shortLabel: 'Mandate & Scope',
        headline: 'Why This Prototype Exists: Connecting Outside-In Analytics with Top-Down Enablement',
        whatYouSee:
          'A functional prototype built to test how Global Corporate Communications Strategy & Enablement can link quantitative reputation measurement (Direction 1: Outside-In) directly to regional playbook execution (Direction 2: Top-Down).',
        whyItMatters:
          'Demonstrates practical AI/GEO literacy and process design without claiming to replace enterprise IT. It pairs 2 real-life Novartis cases (US MFN Reference Pricing & Pluvicto HTA access) with 3 cross-sector scenarios to show how the methodology scales across complex, regulated matrices.',
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
          'Focuses on Enablement over single-product execution. Global Comms sets the non-negotiable legal and strategic guardrails once, empowering regional Corporate Affairs, Market Access, and country comms teams to act fast without drifting off-message.',
        tryThisLabel: 'Filter Playbook to Switzerland (CH)',
        targetTab: 'trending',
        targetRegion: 'all',
        openConceptGuide: false
      },
      {
        stepNumber: '05',
        shortLabel: 'Stress-Test, Legal & IT',
        headline: '04 Pre-Release Stress-Test, Media Inquiry Check & Enterprise IT Fit',
        whatYouSee:
          'Simulates how US, EU, and Swiss stakeholders will react over 48 hours to two competing executive drafts (Draft A vs. Draft B), checks live FT / NZZ journalist questions against Legal/MLR guardrails, and outlines how this layer plugs into existing corporate IT.',
        whyItMatters:
          'Enablement only succeeds when Comms, Legal/Compliance, and IT speak the same language. Click the button on the right to inspect how this workflow connects read-only to Veeva Vault, SharePoint (Graph API), and an internal Enterprise AI Gateway.',
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
      shortLabel: 'Mandat & Fokus',
      headline: 'Warum dieser Prototyp existiert: Outside-In Analyse trifft Top-Down Befähigung',
      whatYouSee:
        'Ein funktionaler Prototyp, der zeigt, wie Global Corporate Communications Strategy & Enablement quantitative Reputationsmessung (Richtung 1: Outside-In) direkt mit regionalen Playbooks (Richtung 2: Top-Down) verbindet.',
      whyItMatters:
        'Belegt praktische KI-/GEO-Kompetenz und Prozessdesign, ohne den Anspruch einer eigenen Konzern-IT zu erheben. Kombiniert 2 reale Novartis-Fälle (US-MFN-Referenzpreise & Pluvicto HTA-Zugang) mit 3 branchenübergreifenden Szenarien.',
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
        'Fokus auf Befähigung (Enablement) statt Einzel-PR: Globale Kommunikation definiert rechtssichere Leitplanken einmalig und befähigt Länderorganisationen zu konsistenter, schneller Umsetzung.',
      tryThisLabel: 'Playbook auf Schweiz (CH) filtern',
      targetTab: 'trending',
      targetRegion: 'all',
      openConceptGuide: false
    },
    {
      stepNumber: '05',
      shortLabel: 'Stresstest, Recht & IT',
      headline: '04 Entwurf-Stresstest, Medienanfragen-Check & Enterprise-IT-Integration',
      whatYouSee:
        'Simuliert die 48h-Reaktion von US-, EU- und Schweizer Stakeholdern auf zwei Statement-Varianten (Entwurf A vs. B), prüft FT/NZZ-Journalistenfragen gegen Compliance-Vorgaben und zeigt die Einbettung in bestehende IT.',
      whyItMatters:
        'Enablement gelingt nur, wenn Kommunikation, Recht/Compliance und IT dieselbe Sprache sprechen. Per Klick rechts öffnen Sie die Architektur-Übersicht (Veeva Vault, SharePoint Graph API, Enterprise AI Gateway).',
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
    <section
      aria-label={isEn ? '90-Second Executive Quick Tour' : '90-Sekunden Kurz-Tour'}
      className="bg-sbb-black text-white border-b-2 border-sbb-red px-6 sm:px-8 py-5 transition-all"
    >
      <div className="max-w-[1600px] mx-auto space-y-4">
        {/* Top Row: Tour Title, Step Selector Pills, and Prev/Next/Close Controls */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-3.5 border-b border-zinc-800">
          <div className="flex items-center gap-3">
            <span className="bg-sbb-red text-white font-mono text-[10px] font-black uppercase tracking-widest px-2.5 py-1 flex items-center gap-1.5 shrink-0">
              <Compass className="w-3.5 h-3.5" />
              <span>{isEn ? '90s RECRUITING & EXECUTIVE TOUR' : '90s RECRUITING- & EXECUTIVE-TOUR'}</span>
            </span>
            <span className="text-xs font-mono text-zinc-400 hidden sm:inline">
              {isEn
                ? 'Interactive guide — clicking any step automatically switches the view below'
                : 'Interaktiver Guide — Klick auf einen Schritt steuert automatisch die Ansicht unten'}
            </span>
          </div>

          {/* 5 Step Navigation Pills */}
          <div className="flex flex-wrap items-center gap-1.5">
            {steps.map((step, idx) => {
              const isCurrent = idx === currentStep;
              const isCompleted = idx < currentStep;
              return (
                <button
                  key={step.stepNumber}
                  onClick={() => onSelectStep(idx)}
                  className={`px-2.5 py-1 font-mono text-[11px] font-bold uppercase tracking-wider transition-all cursor-pointer border flex items-center gap-1.5 ${
                    isCurrent
                      ? 'bg-sbb-red text-white border-sbb-red'
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

            <div className="h-4 w-px bg-zinc-800 mx-1 hidden sm:block" />

            {/* Prev / Next Buttons */}
            <button
              onClick={() => onSelectStep(Math.max(0, currentStep - 1))}
              disabled={currentStep === 0}
              className={`px-2.5 py-1 font-mono text-[11px] font-bold uppercase border transition-colors flex items-center gap-1 ${
                currentStep === 0
                  ? 'border-zinc-800 text-zinc-600 cursor-not-allowed'
                  : 'border-zinc-700 bg-zinc-900 text-white hover:bg-zinc-800 cursor-pointer'
              }`}
              title={isEn ? 'Previous Step' : 'Vorheriger Schritt'}
            >
              <ArrowLeft className="w-3 h-3" />
              <span className="hidden sm:inline">{isEn ? 'Prev' : 'Zurück'}</span>
            </button>

            <button
              onClick={() => {
                if (currentStep < steps.length - 1) {
                  onSelectStep(currentStep + 1);
                } else {
                  onClose();
                }
              }}
              className="px-3 py-1 font-mono text-[11px] font-black uppercase border border-sbb-red bg-sbb-red text-white hover:bg-red-700 transition-colors flex items-center gap-1.5 cursor-pointer"
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
              className="ml-1 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-zinc-400 hover:text-white border border-transparent hover:border-zinc-700 transition-colors flex items-center gap-1 cursor-pointer"
              title={isEn ? 'Close Quick Tour' : 'Kurz-Tour schliessen'}
            >
              <X className="w-3.5 h-3.5" />
              <span className="hidden md:inline">{isEn ? 'Close' : 'Schliessen'}</span>
            </button>
          </div>
        </div>

        {/* Bottom Row: 12-Column Swiss Briefing Grid for Current Step */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start pt-1">
          {/* Headline & Step Indicator (4 Cols) */}
          <div className="lg:col-span-4 space-y-2 border-l-2 border-sbb-red pl-4">
            <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-zinc-400">
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

          {/* What You See on Screen (4 Cols) */}
          <div className="lg:col-span-4 space-y-1.5 bg-zinc-900/90 border border-zinc-800 p-3.5">
            <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
              <Globe className="w-3 h-3 text-sbb-red" />
              <span>{isEn ? 'WHAT YOU ARE LOOKING AT BELOW:' : 'WAS SIE UNTEN SEHEN:'}</span>
            </div>
            <p className="text-xs text-zinc-200 leading-relaxed">{activeStep.whatYouSee}</p>
          </div>

          {/* Mandate Fit & Quick Action (4 Cols) */}
          <div className="lg:col-span-4 space-y-2.5 bg-zinc-900/90 border border-zinc-800 p-3.5 flex flex-col justify-between">
            <div className="space-y-1.5">
              <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-sbb-red" />
                <span>
                  {isEn
                    ? 'WHY IT MATTERS FOR GLOBAL COMMS ENABLEMENT:'
                    : 'RELEVANZ FÜR GLOBAL COMMS ENABLEMENT:'}
                </span>
              </div>
              <p className="text-xs text-zinc-200 leading-relaxed">{activeStep.whyItMatters}</p>
            </div>

            {currentStep !== 1 && (
              <div className="pt-2 border-t border-zinc-800 flex items-center justify-between gap-2">
                <span className="text-[10px] font-mono text-zinc-400 uppercase">
                  {isEn ? 'Interactive Action:' : 'Interaktive Aktion:'}
                </span>
                <button
                  onClick={handleQuickAction}
                  className="px-2.5 py-1 bg-zinc-800 hover:bg-sbb-red text-white font-mono text-[10px] font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5 cursor-pointer border border-zinc-700"
                >
                  {currentStep === 4 ? (
                    <Server className="w-3 h-3" />
                  ) : (
                    <ArrowRight className="w-3 h-3" />
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
                          ? 'Hide IT & Method Panel Above'
                          : 'IT- & Methodik-Panel oben ausblenden'
                        : isEn
                        ? 'Open IT & Method Panel Above'
                        : 'IT- & Methodik-Panel oben öffnen'
                      : activeStep.tryThisLabel}
                  </span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickTourBar;
