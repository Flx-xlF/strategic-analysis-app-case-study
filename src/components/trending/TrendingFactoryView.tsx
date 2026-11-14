import React, { useState } from 'react';
import { Language } from '../../fixtures/scenarios';
import { WorldRegionId } from '../../fixtures/cockpitFixtures';
import { 
  getTrendingData, 
  TrendingScenarioData, 
  ContentFormatId, 
  FormatBlueprint,
  RegionalAdaptation
} from '../../fixtures/trendingFixtures';
import { 
  Check, 
  Copy, 
  FileText, 
  HelpCircle, 
  Mic, 
  Share2, 
  Sparkles, 
  Database,
  AlertOctagon,
  ShieldAlert,
  Globe2,
  FileCheck2,
  Lock,
  Layers,
  ArrowRight
} from 'lucide-react';

interface Props {
  scenarioId: string;
  lang: Language;
  selectedRegion: WorldRegionId;
  onSelectRegion: (reg: WorldRegionId) => void;
  onNavigateTab?: (tab: 'cockpit' | 'geo' | 'trending' | 'cascade') => void;
  isStreaming: boolean;
  streamProgress: number;
}

export const TrendingFactoryView: React.FC<Props> = ({
  scenarioId,
  lang,
  selectedRegion,
  onSelectRegion,
  onNavigateTab,
  isStreaming,
  streamProgress
}) => {
  const data: TrendingScenarioData = getTrendingData(lang, scenarioId);
  const [selectedFormat, setSelectedFormat] = useState<ContentFormatId>('hintergrund');
  const [copied, setCopied] = useState(false);
  const [showGovernanceDetails, setShowGovernanceDetails] = useState(false);
  const [activeSteering, setActiveSteering] = useState<'study_rigor' | 'layperson' | 'local_proof' | 'legal_boundary' | 'express'>(
    scenarioId === 'rlt_access_debate' ? 'study_rigor' : 'layperson'
  );
  const [showWordDiff, setShowWordDiff] = useState<boolean>(true);
  const isEn = lang === 'en';

  React.useEffect(() => {
    setActiveSteering(scenarioId === 'rlt_access_debate' ? 'study_rigor' : 'layperson');
  }, [scenarioId]);

  const activeAdaptation: RegionalAdaptation = 
    data.regional_adaptations[selectedRegion] || 
    data.regional_adaptations.all || 
    Object.values(data.regional_adaptations)[0];

  const blueprint: FormatBlueprint = 
    activeAdaptation.blueprints[selectedFormat] || 
    activeAdaptation.blueprints.hintergrund;

  const formatTabs: Array<{ 
    id: ContentFormatId; 
    label: string; 
    subtitle: string;
    icon: React.ElementType;
  }> = [
    { 
      id: 'hintergrund', 
      label: isEn ? 'Corporate Story (Website & AI Search)' : 'Corporate Story (Website & KI-Suche)', 
      subtitle: isEn ? 'Corporate Newsroom & AI Search' : 'Newsroom & KI-Such-Quelle',
      icon: FileText 
    },
    { 
      id: 'social', 
      label: isEn ? 'Social & Community' : 'Social & Patientenkanäle', 
      subtitle: isEn ? 'Plain-Language Channels' : 'Laientaugliche Kanäle',
      icon: Share2 
    },
    { 
      id: 'talking_points', 
      label: isEn ? 'Executive Talking Points' : 'Talking Points Führung', 
      subtitle: isEn ? 'Leadership & Spokespersons' : 'Direktion & Mediensprecher',
      icon: Mic 
    },
    { 
      id: 'qa_brief', 
      label: isEn ? 'Q&A Field Manual' : 'Q&A Leitfaden', 
      subtitle: isEn ? 'Affiliate Comms & Desk' : 'Medienstelle & Affiliates',
      icon: HelpCircle 
    },
  ];

  const locale = isEn ? 'en-US' : 'de-CH';

  const handleCopy = () => {
    navigator.clipboard.writeText(blueprint.blueprint_content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-8">
      {/* ═══ WAYFINDING HEADER & EXECUTIVE TELEMETRY RIBBON ═══ */}
      <div className="bg-white border border-sbb-aluminum p-6 sm:p-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-6 border-b border-zinc-100 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-sbb-red uppercase mb-1.5">
              <Sparkles className="w-4 h-4" />
              <span>{isEn ? 'STEP 3: APPROVED SOURCES & WORKFLOW RECIPES // MODULE 03' : 'SCHRITT 3: GEPRÜFTE QUELLEN & WORKFLOW-REZEPTE // MODUL 03'}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-sbb-black tracking-tight">
              {isEn ? 'Approved Sources & In-Workflow Recipes' : 'Geprüfte Quellen & In-Workflow-Rezepte'}
            </h1>
            <p className="text-sm text-sbb-stone mt-1 max-w-3xl leading-relaxed">
              {isEn
                ? `Defining approved facts centrally is only half the job—teams also need to apply them without friction. Instead of 40-page PDF guidelines, central Golden Sources (GS-01–GS-03) and four writing rules load directly into 1-click recipes for Outlook, Word, and M365 Copilot across owned media, clinical studies, social posts, and press Q&As.`
                : `Geprüfte Fakten zentral festzulegen ist nur die halbe Miete – Teams müssen sie im Alltag auch reibungslos nutzen können. Statt 40-seitiger PDF-Leitfäden werden die Golden Sources (GS-01–GS-03) und vier Schreibregeln direkt in 1-Klick-Rezepte für Outlook, Word und M365 Copilot geladen.`}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-sbb-cloud border border-sbb-aluminum font-mono text-xs text-sbb-black font-bold">
              <Lock className="w-3.5 h-3.5 text-sbb-red" />
              <span>{isEn ? 'GOLDEN SOURCES LOCKED' : 'GOLDEN SOURCES FIXIERT'}</span>
            </span>
          </div>
        </div>

        {/* ═══ STEP 00: INTERNAL DOCUMENT FILTER ═══ */}
        <div className="p-5 bg-sbb-cloud/60 border border-sbb-aluminum space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-200 pb-2">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-sbb-black">
              <Database className="w-4 h-4 text-sbb-red" />
              <span>
                {isEn
                  ? `INTERNAL DOCUMENT FILTER (${data.corpus_gate.raw_enterprise_files.toLocaleString(locale)} FILES → ${data.corpus_gate.canonical_golden_sources} APPROVED GOLDEN SOURCES)`
                  : `INTERNER DOKUMENTEN-FILTER (${data.corpus_gate.raw_enterprise_files.toLocaleString(locale)} DATEIEN → ${data.corpus_gate.canonical_golden_sources} GOLDEN SOURCES)`}
              </span>
            </div>
            <span className="text-[10px] font-mono text-zinc-500">
              {(() => {
                if (scenarioId === 'alpine_transit_crisis') {
                  return isEn ? 'Technical Archives + SCADA Telemetry + Operating Rules' : 'Betriebsarchive + Leittechnik-Logs + Fahrdienstvorschriften';
                } else if (scenarioId === 'esg_investigation') {
                  return isEn ? 'Group Procurement + Supplier Audits + Legal Repositories' : 'Konzerneinkauf + Lieferanten-Audits + Rechtsdossiers';
                } else if (scenarioId === 'health_data_breach') {
                  return isEn ? 'Enterprise Cloud KMS + FDPIC Rulings + Security Specs' : 'Kryptosysteme + EDÖB-Gutachten + Sicherheitsdossiers';
                }
                return isEn ? 'Veeva Vault + SharePoint + Regulatory Repositories' : 'Veeva Vault + SharePoint + Rechtsarchive';
              })()}
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 font-mono text-xs">
            <div className="p-3 bg-white border border-zinc-200">
              <div className="text-[10px] text-zinc-600 uppercase font-bold">{isEn ? 'ALL INTERNAL FILES' : 'ALLE INTERNEN DATEIEN'}</div>
              <div className="text-xl font-black text-sbb-black">{data.corpus_gate.raw_enterprise_files.toLocaleString(locale)}</div>
              <div className="text-[10px] text-zinc-600 mt-0.5">{isEn ? 'Global HQ & Country Affiliates' : 'Zentrale & Ländergesellschaften'}</div>
            </div>

            <div className="p-3 bg-white border border-zinc-200">
              <div className="text-[10px] text-zinc-600 uppercase font-bold">{isEn ? 'CURRENT APPROVED FILES' : 'AKTUELL FREIGEGEBEN'}</div>
              <div className="text-xl font-black text-zinc-800">{data.corpus_gate.active_governed_records.toLocaleString(locale)}</div>
              <div className="text-[10px] text-zinc-600 mt-0.5">{isEn ? 'MLR / Legal Approved' : 'MLR- / Legal-freigegeben'}</div>
            </div>

            <div className="p-3 bg-white border border-emerald-300">
              <div className="text-[10px] text-emerald-800 uppercase font-bold">{isEn ? 'APPROVED GOLDEN SOURCES' : 'GEPRÜFTE GOLDEN SOURCES'}</div>
              <div className="text-xl font-black text-emerald-700">{data.corpus_gate.canonical_golden_sources}</div>
              <div className="text-[10px] text-emerald-800 mt-0.5">{isEn ? 'Locked Wording Packs' : 'Verbindliche Sprachregelungen'}</div>
            </div>

            <div className="p-3 bg-red-50 border border-red-200">
              <div className="text-[10px] text-red-700 uppercase font-bold">{isEn ? 'OUTDATED FILES & OLD PDFS' : 'VERALTETE DATEIEN & ALT-PDFS'}</div>
              <div className="text-xl font-black text-red-700">{data.corpus_gate.legacy_conflicts_flagged}</div>
              <div className="text-[10px] text-red-700 mt-0.5">
                {(() => {
                  if (scenarioId === 'alpine_transit_crisis') {
                    return isEn ? 'Decommission Stale Manuals & PDFs' : 'Veraltete Handbücher & Alt-PDFs abschalten';
                  } else if (scenarioId === 'esg_investigation') {
                    return isEn ? 'Decommission Pre-2025 Audit PDFs' : 'Alte Audit-PDFs ausser Betrieb nehmen';
                  } else if (scenarioId === 'health_data_breach') {
                    return isEn ? 'Decommission Deprecated Draft PDFs' : 'Überholte Konzept-PDFs abschalten';
                  }
                  return isEn ? 'Flagged for Public PDF Decommissioning' : 'Zur Abschaltung veralteter PDFs markiert';
                })()}
              </div>
            </div>
          </div>

          {/* Collapsible Toggle for Flagged Outdated Files */}
          <div className="pt-2 flex justify-end">
            <button
              onClick={() => setShowGovernanceDetails(prev => !prev)}
              className="text-[10px] font-mono font-bold text-sbb-black hover:text-sbb-red transition-colors flex items-center gap-1 cursor-pointer"
            >
              <span>
                {showGovernanceDetails
                  ? (isEn ? '▲ Hide Flagged Outdated Files' : '▲ Markierte Alt-Dateien ausblenden')
                  : (isEn ? '▼ Inspect Flagged Outdated Files' : '▼ Markierte Alt-Dateien prüfen')}
              </span>
            </button>
          </div>

          {showGovernanceDetails && (
            <div className="space-y-4 pt-2 border-t border-zinc-200 animate-fadeIn">
              {/* Legacy Conflict Alert Drawer */}
              {data.corpus_gate.conflict_details && data.corpus_gate.conflict_details.length > 0 && (
                <div className="p-3 bg-red-50/80 border border-red-200 text-xs">
                  <div className="flex items-center gap-2 font-mono font-bold text-sbb-red mb-1">
                    <AlertOctagon className="w-3.5 h-3.5" />
                    <span>{isEn ? 'FLAGGED OUTDATED OR CONFLICTING FILES IN REGIONAL FOLDERS:' : 'MARKIERTE VERALTETE ODER WIDERSPRÜCHLICHE DATEIEN IN LÄNDERORDNERN:'}</span>
                  </div>
                  <div className="space-y-1.5 font-sans">
                    {data.corpus_gate.conflict_details.map((c, idx) => (
                      <div key={idx} className="p-2 bg-white border border-red-200 text-[11px] space-y-0.5">
                        <div className="font-mono font-bold text-sbb-black">{c.document_title} <span className="text-[10px] text-zinc-500 font-normal">({c.vault_location})</span></div>
                        <div className="text-zinc-700">{c.conflict_reason}</div>
                        <div className="font-mono text-sbb-red font-bold">{isEn ? 'Action: ' : 'Massnahme: '}{c.action_required}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* ═══ STEP 01: GLOBAL CORE THESIS, CORPORATE GEO FRAMEWORK & GUARDRAILS (HQ) ═══ */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <span className="w-7 h-7 bg-sbb-black text-white font-mono text-xs font-bold flex items-center justify-center">
            01
          </span>
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-zinc-500">
            {isEn ? '01 // CORE POSITION, SHARED WRITING RULES & DO-NOT-SAY LIST' : '01 // KERNPOSITION, SCHREIBREGELN & NO-GOS'}
          </span>
        </div>

        <div className="bg-white border-2 border-sbb-black p-6 sm:p-8 space-y-5">
          <div className="pb-3 border-b border-zinc-200 flex items-center justify-between">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-sbb-red">
              {isEn ? 'CORE POSITION (FROM APPROVED GOLDEN SOURCES)' : 'KERNPOSITION (AUS GEPRÜFTEN GOLDEN SOURCES)'}
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 bg-zinc-100 border border-zinc-200 text-zinc-700">
              {(() => {
                if (scenarioId === 'alpine_transit_crisis') {
                  return 'REF: RAIL-FDV-301 & SCADA-LOG-409';
                } else if (scenarioId === 'esg_investigation') {
                  return 'REF: ESG-CODE-2025-V2 & SMETA-881';
                } else if (scenarioId === 'health_data_breach') {
                  return 'REF: BYOK-SPEC-2026 & EPDG-321';
                } else if (scenarioId === 'rlt_access_debate') {
                  return 'REF: ONCO-01-SAP & CSR-PROS-401';
                }
                return 'REF: GS-01-MFN & US-CAPEX-2026';
              })()}
            </span>
          </div>

          <p className="text-base sm:text-lg font-medium text-sbb-black leading-relaxed italic border-l-4 border-sbb-black pl-5 py-1">
            «{data.global_core_thesis}»
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {/* Proof Points */}
            <div className="space-y-2">
              <div className="text-[10px] font-mono text-sbb-stone uppercase font-bold">
                {isEn ? 'MANDATORY PROOF POINTS:' : 'VERBINDLICHE BELEGE:'}
              </div>
              <ul className="space-y-1.5 text-xs text-zinc-700 font-sans">
                {data.global_proof_points.map((pt, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-emerald-700 font-bold">✓</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Red Flag Guardrails */}
            <div className="space-y-2">
              <div className="text-[10px] font-mono text-sbb-red uppercase font-bold">
                {isEn ? 'WHAT TO AVOID (DO-NOT-SAY LIST):' : 'WAS VERMIEDEN WERDEN MUSS (NO-GOS):'}
              </div>
              <ul className="space-y-1.5 text-xs text-red-950 font-sans bg-red-50/60 p-3 border border-red-200">
                {data.global_guardrails.map((gr, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-sbb-red font-bold">✗</span>
                    <span>{gr}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 4 Shared Writing Rules */}
          <div className="pt-4 border-t border-zinc-200 space-y-2.5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-sbb-black">
                {isEn
                  ? '4 SHARED WRITING RULES ACROSS CHANNELS:'
                  : '4 GEMEINSAME SCHREIBREGELN ÜBER ALLE KANÄLE:'}
              </span>
              <span className="text-[10px] font-mono text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 font-bold">
                {isEn ? 'Shared Across All Regional Hubs' : 'Gilt für alle Regional- & Kantons-Hubs'}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
              <div className="p-3 bg-sbb-cloud/50 border border-sbb-aluminum space-y-1">
                <div className="font-mono text-[10px] font-bold text-sbb-black uppercase">
                  {isEn ? 'RULE 01 // Lead with the key fact & numbers' : 'REGEL 01 // Kernaussage und Zahlen zuerst'}
                </div>
                <p className="text-[11px] text-zinc-700 leading-snug">
                  {isEn
                    ? 'Put the main conclusion and verified figures in the opening paragraph so neither journalists nor AI search retrieval cut them off.'
                    : 'Kernaussage und belegte Zahlen direkt in den ersten Absatz stellen, damit Medien und KI-Suche sie nicht abschneiden.'}
                </p>
              </div>

              <div className="p-3 bg-sbb-cloud/50 border border-sbb-aluminum space-y-1">
                <div className="font-mono text-[10px] font-bold text-sbb-black uppercase">
                  {isEn ? 'RULE 02 // Use consistent terms across regions' : 'REGEL 02 // Einheitliche Begriffe über Regionen'}
                </div>
                <p className="text-[11px] text-zinc-700 leading-snug">
                  {isEn
                    ? 'Keep key terms identical across countries and cantons so AI search does not read local wording differences as contradictions.'
                    : 'Schlüsselbegriffe in allen Ländern und Kantonen gleich halten, damit KI-Antworten lokale Abweichungen nicht als Widerspruch werten.'}
                </p>
              </div>

              <div className="p-3 bg-red-50/40 border border-red-200 space-y-1">
                <div className="font-mono text-[10px] font-bold text-red-700 uppercase">
                  {isEn ? 'RULE 03 // Don’t repeat an accusation to deny it' : 'REGEL 03 // Vorwürfe nicht zur Verneinung wiederholen'}
                </div>
                <p className="text-[11px] text-zinc-700 leading-snug">
                  {isEn
                    ? 'Repeating a critic’s phrasing in an official quote gets indexed alongside the company name in search retrieval.'
                    : 'Wer Vorwürfe im eigenen Zitat wiederholt, verknüpft den Negativbegriff direkt mit dem Unternehmensnamen in der Suche.'}
                </p>
              </div>

              <div className="p-3 bg-emerald-50/40 border border-emerald-300 space-y-1">
                <div className="font-mono text-[10px] font-bold text-emerald-900 uppercase">
                  {isEn ? 'RULE 04 // Answer the question, then state our facts' : 'REGEL 04 // Frage beantworten, dann eigene Fakten nennen'}
                </div>
                <p className="text-[11px] text-zinc-700 leading-snug">
                  {isEn
                    ? 'Address the question directly and lead directly into verified Golden Source facts (GS-01–GS-03).'
                    : 'Frage direkt aufnehmen und sofort die geprüften Golden-Source-Fakten (GS-01–GS-03) nennen.'}
                </p>
              </div>
            </div>
          </div>

          {/* Why PDF Guidelines Fail vs. In-Workflow Recipes */}
          <div className="pt-4 border-t border-zinc-200 grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
            <div className="p-3.5 bg-zinc-50 border border-zinc-200 space-y-1">
              <div className="font-mono text-[10px] font-bold text-zinc-600 uppercase">
                {isEn ? 'THE ADOPTION PROBLEM // WHY STATIC PDF GUIDELINES FAIL' : 'DAS UMSETZUNGSPROBLEM // WARUM PDF-LEITFÄDEN SCHEITERN'}
              </div>
              <p className="text-[11px] text-zinc-700 leading-snug">
                {isEn
                  ? 'Under deadline pressure, nobody opens a 40-page PDF manual on SharePoint before answering an email or editing a draft. High friction leads to improvisation and regional contradictions.'
                  : 'Unter Zeitdruck öffnet niemand ein 40-seitiges PDF-Handbuch auf SharePoint, bevor eine E-Mail beantwortet oder ein Text geprüft wird. Hohe Hürden führen zu Improvisation und Widersprüchen.'}
              </p>
            </div>

            <div className="p-3.5 bg-emerald-50/50 border border-emerald-300 space-y-1">
              <div className="font-mono text-[10px] font-bold text-emerald-900 uppercase">
                {isEn ? 'THE FIX // 1-CLICK RECIPES INSIDE OUTLOOK, WORD & M365 COPILOT' : 'DIE LÖSUNG // 1-KLICK-REZEPTE DIREKT IN OUTLOOK, WORD & M365'}
              </div>
              <p className="text-[11px] text-zinc-800 leading-snug">
                {isEn
                  ? 'A lightweight sidebar helper injects these Golden Sources and writing rules automatically into the open email or document. Users click it because it saves 30 minutes of work—and the rules enforce themselves.'
                  : 'Eine schlanke Seitenleiste lädt diese Golden Sources und Schreibregeln automatisch in die offene E-Mail oder Datei. Teams nutzen sie, weil sie 30 Minuten Arbeit spart – und die Regeln greifen automatisch.'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ═══ STEP 02: HOW TEAMS APPLY IT IN DAILY WORK (1-CLICK RECIPES) ═══ */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="w-7 h-7 bg-sbb-black text-white font-mono text-xs font-bold flex items-center justify-center">
              02
            </span>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-sbb-stone">
              {isEn ? 'HOW TEAMS APPLY IT IN DAILY WORK: 1-CLICK RECIPES ACROSS USE CASES' : 'UMSETZUNG IM ALLTAG: 1-KLICK-REZEPTE FÜR ALLE KANÄLE'}
            </span>
          </div>

          <div className="flex items-center gap-2 font-mono text-[10px] text-sbb-stone uppercase bg-white border border-sbb-aluminum px-3 py-1">
            <Globe2 className="w-3 h-3 text-sbb-red" />
            <span>{isEn ? 'Active Region:' : 'Aktive Region:'}</span>
            <span className="font-bold text-sbb-black">{selectedRegion.toUpperCase()} — {activeAdaptation.region_label}</span>
          </div>
        </div>

        {/* Use-Case Scope Strip: How Much the Recipe Edits */}
        <div className="bg-white border border-sbb-aluminum p-4 space-y-2.5">
          <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-sbb-stone">
            {isEn ? 'HOW MUCH THE RECIPE EDITS BY USE CASE (NO ONE-SIZE-FITS-ALL REWRITE):' : 'WIE STARK DAS REZEPT JE NACH AUFGABE EINGREIFT (KEIN EINHEITSBREI):'}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 text-[11px]">
            <div className="p-2.5 bg-sbb-cloud/50 border border-sbb-aluminum">
              <div className="font-mono text-[10px] font-bold text-sbb-black uppercase mb-0.5">
                {isEn ? 'Owned Media & Website' : 'Owned Media & Website'}
              </div>
              <p className="text-zinc-700 leading-snug">
                {isEn ? 'Full answer-first structure & plain language so readers and AI search get the key facts right.' : 'Klare Kernaussage am Anfang & Alltagssprache für Lesende und KI-Suche.'}
              </p>
            </div>
            <div className="p-2.5 bg-emerald-50/50 border border-emerald-300">
              <div className="font-mono text-[10px] font-bold text-emerald-900 uppercase mb-0.5">
                {isEn ? 'Clinical Studies & Data' : 'Klinische Studien & Daten'}
              </div>
              <p className="text-zinc-700 leading-snug">
                {isEn ? 'Light touch (scientific accuracy protected): endpoints (HR 0.41, p<0.001) stay untouched; adds a clear context header.' : 'Schonender Eingriff: Studien-Endpunkte bleiben exakt erhalten; ergänzt nur klaren Kontext.'}
              </p>
            </div>
            <div className="p-2.5 bg-sbb-cloud/50 border border-sbb-aluminum">
              <div className="font-mono text-[10px] font-bold text-sbb-black uppercase mb-0.5">
                {isEn ? 'Social & Leadership' : 'Social & Führung'}
              </div>
              <p className="text-zinc-700 leading-snug">
                {isEn ? 'Removes hollow LinkedIn clichés; focuses on tangible everyday human value.' : 'Streicht hohle LinkedIn-Floskeln; stellt den greifbaren Alltagsnutzen voran.'}
              </p>
            </div>
            <div className="p-2.5 bg-sbb-cloud/50 border border-sbb-aluminum">
              <div className="font-mono text-[10px] font-bold text-sbb-black uppercase mb-0.5">
                {isEn ? 'Press Q&A & Draft Review' : 'Medien-Q&A & Textprüfung'}
              </div>
              <p className="text-zinc-700 leading-snug">
                {isEn ? 'Spots loaded questions without repeating accusations; marks gaps as [Open / To verify].' : 'Erkennt Fangfragen ohne Vorwürfe zu wiederholen; markiert Lücken als [Offen / Zu prüfen].'}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-sbb-aluminum">
          {/* Role of Owned HTML + Press Formats */}
          <div className="px-6 py-3 bg-sbb-cloud/70 border-b border-sbb-aluminum flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
            <div className="text-sbb-black leading-snug">
              {isEn ? (
                <>
                  <strong className="font-mono uppercase text-red-700">Owned + Press Formats:</strong> AI search pulls heavily from independent press coverage while checking corporate pages (server-rendered HTML) for primary figures.
                </>
              ) : (
                <>
                  <strong className="font-mono uppercase text-red-700">Owned- + Presse-Formate:</strong> KI-Suchmaschinen zitieren stark aus unabhängigen Medienberichten und prüfen Unternehmensseiten (SSR HTML) für Primärzahlen.
                </>
              )}
            </div>
            <span className="font-mono text-[10px] font-bold uppercase px-2 py-0.5 bg-white border border-zinc-300 text-sbb-black shrink-0">
              {isEn ? 'Owned HTML + Press Formats' : 'Owned HTML + Presse-Formate'}
            </span>
          </div>
          {/* Format Selector Tabs */}
          <div className="grid grid-cols-2 md:grid-cols-4 border-b border-sbb-aluminum bg-sbb-cloud/40">
            {formatTabs.map(fmt => {
              const Icon = fmt.icon;
              const isSelected = selectedFormat === fmt.id;

              return (
                <button
                  key={fmt.id}
                  onClick={() => setSelectedFormat(fmt.id)}
                  className={`p-4 sm:p-5 text-left border-r border-sbb-aluminum last:border-r-0 transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-white border-b-2 border-b-sbb-red'
                      : 'hover:bg-white/60 text-sbb-stone'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <Icon className={`w-4 h-4 ${isSelected ? 'text-sbb-red' : 'text-zinc-400'}`} />
                    <span className={`font-mono text-xs font-bold uppercase tracking-wider ${
                      isSelected ? 'text-sbb-black' : 'text-sbb-stone'
                    }`}>
                      {fmt.label}
                    </span>
                  </div>
                  <div className="text-[10px] font-mono text-zinc-500 pl-6">
                    {fmt.subtitle}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Strategy & Audience Chips */}
          <div className="p-6 sm:p-8 bg-zinc-50 border-b border-zinc-200 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-sbb-stone mb-1 flex items-center gap-1.5">
                <FileCheck2 className="w-3.5 h-3.5 text-sbb-red" />
                <span>{isEn ? 'TARGET AUDIENCE' : 'ZIELGRUPPE'}</span>
              </div>
              <p className="text-sm font-bold text-sbb-black">
                {blueprint.target_audience}
              </p>
            </div>

            <div>
              <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-sbb-stone mb-1 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-sbb-red" />
                <span>{isEn ? 'STRATEGIC & COMMUNICATION GOAL' : 'STRATEGISCHES KOMMUNIKATIONSZIEL'}</span>
              </div>
              <p className="text-sm text-zinc-800">
                {blueprint.psychological_objective}
              </p>
            </div>
          </div>

          {/* Blueprint Editor Preview */}
          <div className="p-6 sm:p-8 space-y-5">
            {/* 4 Building Blocks + 2-Turn Steering Bar */}
            <div className="p-4 bg-sbb-cloud/50 border border-sbb-aluminum space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-sbb-black">
                  {isEn ? '4 BUILDING BLOCKS LOADED AUTOMATICALLY (NO MANUAL PROMPTING):' : '4 BAUSTEINE AUTOMATISCH GELADEN (KEIN MANUELLES PROMPTING):'}
                </span>
                <span className="text-[10px] font-mono font-bold text-emerald-800 bg-emerald-50 border border-emerald-300 px-2 py-0.5">
                  {isEn ? '✓ Turn 1 Complete: Sources & Gaps Checked' : '✓ Schritt 1 erledigt: Quellen & Lücken geprüft'}
                </span>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 text-[10px] font-mono">
                <div className="p-2 bg-white border border-zinc-200 text-zinc-800">
                  <strong className="block text-sbb-black">1. {isEn ? 'Task Check' : 'Aufgaben-Check'}</strong>
                  {isEn ? 'Spot loaded questions & roles' : 'Fangfragen & Rollen klären'}
                </div>
                <div className="p-2 bg-white border border-zinc-200 text-zinc-800">
                  <strong className="block text-sbb-black">2. {isEn ? 'Approved Facts' : 'Geprüfte Fakten'}</strong>
                  {isEn ? 'GS-01–GS-03 + [Open / To verify]' : 'GS-01–GS-03 + [Offen / Zu prüfen]'}
                </div>
                <div className="p-2 bg-white border border-zinc-200 text-zinc-800">
                  <strong className="block text-sbb-black">3. {isEn ? '360° Check' : '360°-Blick'}</strong>
                  {isEn ? 'Patients • Media • Regulators' : 'Patienten • Medien • Behörden'}
                </div>
                <div className="p-2 bg-white border border-zinc-200 text-zinc-800">
                  <strong className="block text-sbb-black">4. {isEn ? 'Edit Depth' : 'Eingriffstiefe'}</strong>
                  {activeSteering === 'study_rigor'
                    ? (isEn ? 'Light Touch (Study Accuracy)' : 'Schonend (Studien-Präzision)')
                    : (isEn ? 'Full Plain-Language' : 'Volle Alltagssprache')}
                </div>
              </div>

              {/* Interactive Turn 2 Steering Buttons */}
              <div className="pt-2 border-t border-zinc-200 space-y-2">
                <div className="text-[10px] font-mono font-bold uppercase text-sbb-stone">
                  {isEn ? 'STEER TURN 2 BEFORE DRAFTING (CLICK TO ADJUST):' : 'SCHRITT 2 VOR DEM ENTWURF STEUERN (KLICKEN):'}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    { id: 'study_rigor' as const, label: isEn ? '🔬 Study / Scientific Mode' : '🔬 Studien- / Wissenschafts-Modus' },
                    { id: 'layperson' as const, label: isEn ? '+ Plain everyday language' : '+ Klare Alltagssprache' },
                    { id: 'local_proof' as const, label: isEn ? '+ Highlight local market facts' : '+ Lokale Fakten betonen' },
                    { id: 'legal_boundary' as const, label: isEn ? '+ Strict legal boundary' : '+ Strikte Rechtsgrenze' },
                    { id: 'express' as const, label: isEn ? '⚡ Express 1-Click Mode' : '⚡ Express 1-Klick-Modus' },
                  ].map((chip) => (
                    <button
                      key={chip.id}
                      type="button"
                      onClick={() => setActiveSteering(chip.id)}
                      className={`px-2.5 py-1 font-mono text-[10px] font-bold border transition-colors cursor-pointer ${
                        activeSteering === chip.id
                          ? 'bg-sbb-black text-white border-sbb-black'
                          : 'bg-white text-zinc-700 border-zinc-300 hover:border-sbb-black'
                      }`}
                    >
                      {chip.label}
                    </button>
                  ))}
                </div>
                <div className="text-[11px] text-zinc-700 bg-white border-l-2 border-sbb-red px-3 py-1.5">
                  {activeSteering === 'study_rigor' &&
                    (isEn
                      ? 'Light-touch mode active: Clinical endpoints, statistical precision, and medical terminology stay untouched so scientific credibility is protected. Edits add only a clear context header separating trial results from reimbursement debates.'
                      : 'Schonender Studien-Modus aktiv: Klinische Endpunkte, Statistik und Fachbegriffe bleiben unverändert, um die wissenschaftliche Glaubwürdigkeit zu schützen. Ergänzt wird nur ein klarer Kontext-Kopf zur Trennung von Studiendaten und Preisdebatte.')}
                  {activeSteering === 'layperson' &&
                    (isEn
                      ? 'Plain-language mode active: Replaces internal jargon and defensive phrasing with clear, everyday language that readers without background knowledge understand immediately.'
                      : 'Alltagssprachen-Modus aktiv: Ersetzt internen Fachjargon und defensive Formulierungen durch klare Sprache, die auch Laien sofort verstehen.')}
                  {activeSteering === 'local_proof' &&
                    (isEn
                      ? 'Local-facts mode active: Prioritizes country-specific regulatory anchors and local patient access details from GS-01–GS-03.'
                      : 'Lokal-Modus aktiv: Hebt länderspezifische Behörden-Anker und konkrete Zugangsdaten aus GS-01–GS-03 hervor.')}
                  {activeSteering === 'legal_boundary' &&
                    (isEn
                      ? 'Legal-boundary mode active: Locks unverified figures as [Open / To verify] and avoids any forward-looking commitments.'
                      : 'Rechtsgrenzen-Modus aktiv: Markiert ungeprüfte Angaben als [Offen / Zu prüfen] und vermeidet vorzeitige Zusagen.')}
                  {activeSteering === 'express' &&
                    (isEn
                      ? 'Express 80/20 mode active: Runs the Turn 1 fact check as a compact gate and outputs the draft in a single pass for urgent deadlines.'
                      : 'Express-Modus aktiv: Führt den Faktencheck kompakt im Hintergrund aus und liefert den Entwurf in einem Schritt.')}
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-zinc-100 gap-3">
              <div className="space-y-0.5">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-sbb-black block">
                  {isEn
                    ? 'TURN 2 DRAFT (FOR EDITORIAL & LEGAL REVIEW)'
                    : 'SCHRITT-2-ENTWURF (FÜR REDAKTION & LEGAL-FREIGABE)'}
                </span>
                <span className="text-[11px] text-sbb-stone block">
                  {isEn
                    ? 'Anchored in Golden Sources GS-01–GS-03 and structured using the 4 rules above; local teams adapt tone and secure sign-off.'
                    : 'Basiert auf den Golden Sources GS-01–GS-03 und den 4 Schreibregeln; Länderteams passen die Tonalität an und holen die Freigabe ein.'}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-2 shrink-0 self-start sm:self-auto">
                <button
                  type="button"
                  onClick={() => setShowWordDiff(prev => !prev)}
                  className={`px-3 py-2 font-mono text-[10px] font-bold uppercase tracking-wider border transition-colors cursor-pointer ${
                    showWordDiff
                      ? 'bg-emerald-50 text-emerald-900 border-emerald-400'
                      : 'bg-white text-zinc-700 border-zinc-300 hover:border-sbb-black'
                  }`}
                >
                  {showWordDiff
                    ? (isEn ? 'Hide Before / After Diff' : 'Vorher / Nachher ausblenden')
                    : (isEn ? 'Show What Recipe Fixed' : 'Vorher / Nachher zeigen')}
                </button>

                <button
                  onClick={handleCopy}
                  className="px-4 py-2 bg-sbb-black hover:bg-zinc-800 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{isEn ? 'Draft Copied' : 'Entwurf kopiert'}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-zinc-400" />
                      <span>{isEn ? 'Copy Draft' : 'Entwurf kopieren'}</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Interactive Before / After Word Diff Box */}
            {showWordDiff && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-3.5 bg-zinc-50 border border-zinc-200 text-xs">
                <div className="p-2.5 bg-red-50/60 border border-red-200 space-y-1">
                  <div className="font-mono text-[10px] font-bold text-red-800 uppercase">
                    {isEn ? 'REMOVED BY RECIPE (RUSHED DRAFT TRAP):' : 'VOM REZEPT ENTFERNT (TYPISCHE FALLE):'}
                  </div>
                  <p className="text-red-900 line-through leading-snug">
                    {scenarioId === 'rlt_access_debate'
                      ? (isEn
                          ? '«Despite claims that ONCO-104 failed in European patients, we remain committed to navigating complex payer ecosystems.»'
                          : '«Entgegen Behauptungen, ONCO-104 sei bei europäischen Patienten gescheitert, engagieren wir uns weiter in komplexen Systemen.»')
                      : (isEn
                          ? '«We are not boycotting European patients or abandoning our Swiss headquarters—we are driving transformative healthcare agility.»'
                          : '«Wir boykottieren keine europäischen Patienten und verlassen den Schweizer Hauptsitz nicht – wir treiben agile Transformation voran.»')}
                  </p>
                </div>

                <div className="p-2.5 bg-emerald-50/70 border border-emerald-300 space-y-1">
                  <div className="font-mono text-[10px] font-bold text-emerald-900 uppercase">
                    {isEn ? 'ADDED BY RECIPE (GOLDEN SOURCES GS-01–GS-03):' : 'VOM REZEPT VERANKERT (GOLDEN SOURCES GS-01–GS-03):'}
                  </div>
                  <p className="text-emerald-950 font-medium leading-snug">
                    {scenarioId === 'rlt_access_debate'
                      ? (isEn
                          ? '«Phase III ONCO-01 doubled progression-free survival (HR 0.41, p<0.001). UK NICE’s decision reflects cost-per-QALY thresholds, not clinical efficacy.»'
                          : '«Phase-III-Studie ONCO-01 verdoppelte das progressionsfreie Überleben (HR 0.41, p<0.001). Die NICE-Entscheidung betrifft nur Kosten-Schwellenwerte, nicht die Wirksamkeit.»')
                      : (isEn
                          ? '«Switzerland remains our global headquarters and primary research hub. Our $15B U.S. investment expands local manufacturing while patient access programs continue on schedule.»'
                          : '«Die Schweiz bleibt unser weltweiter Hauptsitz und Forschungsstandort. Die 15-Mrd.-$-Investition baut die US-Produktion aus; Zugangsprogramme laufen planmässig weiter.»')}
                  </p>
                </div>
              </div>
            )}

            <div className="bg-sbb-cloud/40 p-6 sm:p-8 border-l-4 border-sbb-black text-sm text-sbb-black leading-relaxed font-sans max-w-4xl space-y-3">
              {blueprint.blueprint_content.split('\n\n').map((block, bIdx) => {
                const lines = block.split('\n');
                const renderBold = (text: string) =>
                  text.split('**').map((chunk, cIdx) =>
                    cIdx % 2 === 1 ? <strong key={cIdx} className="font-bold text-sbb-black">{chunk}</strong> : chunk
                  );

                return (
                  <div key={bIdx} className="space-y-1.5">
                    {lines.map((line, lIdx) => {
                      const trimmed = line.trim();
                      if (trimmed.startsWith('### ')) {
                        return (
                          <h5 key={lIdx} className="font-mono text-xs font-black uppercase tracking-wider text-sbb-black pt-2 border-b border-zinc-200 pb-1">
                            {trimmed.replace(/^###\s+/, '').replace(/\*\*/g, '')}
                          </h5>
                        );
                      }
                      if (!trimmed) return null;
                      return (
                        <p key={lIdx} className="text-xs sm:text-sm text-zinc-900 leading-relaxed font-sans">
                          {renderBold(line)}
                        </p>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* ═══ NEXT-STEP WORKFLOW BRIDGE (03 → 04) ═══ */}
      {onNavigateTab && (
        <div className="bg-sbb-black text-white border-l-4 border-sbb-red p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="text-[10px] font-mono text-[#FFCC00] uppercase tracking-widest font-bold">
              {isEn ? 'NEXT STEP IN WORKFLOW // MODULE 03 → MODULE 04 (STRESS-TEST & INQUIRY)' : 'NÄCHSTER PROZESSSCHRITT // MODUL 03 → MODUL 04 (STRESSTEST & ANFRAGE)'}
            </div>
            <p className="text-xs sm:text-sm text-zinc-200">
              {isEn
                ? 'Regional drafts ready. Now stress-test the draft against critical stakeholder reactions and check tough media questions before release.'
                : 'Regionale Entwürfe bereit. Testen Sie den Entwurf nun gegen kritische Reaktionen und prüfen Sie schwierige Medienfragen vor der Freigabe.'}
            </p>
          </div>
          <button
            onClick={() => {
              onNavigateTab('cascade');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-4 py-2.5 bg-sbb-red hover:bg-red-700 text-white font-mono text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-2 cursor-pointer shrink-0 self-start sm:self-auto"
          >
            <span>{isEn ? 'Proceed to 04: Stress-Test & Inquiry Check' : 'Weiter zu 04: Stresstest & Medienanfrage'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};

export default TrendingFactoryView;
