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
  const isEn = lang === 'en';

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
              <span>{isEn ? 'STEP 3: ALIGN SOURCES & REGIONAL DRAFTS // MODULE 03' : 'SCHRITT 3: QUELLEN & REGIONALE ENTWÜRFE // MODUL 03'}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-sbb-black tracking-tight">
              {isEn ? 'Approved Sources & Regional Draft Playbook' : 'Geprüfte Quellen & Regionales Entwurfs-Playbook'}
            </h1>
            <p className="text-sm text-sbb-stone mt-1 max-w-3xl leading-relaxed">
              {isEn
                ? `Filters ${data.corpus_gate.raw_enterprise_files.toLocaleString(locale)} internal repository files down to ${data.corpus_gate.canonical_golden_sources} approved Golden Sources, flags outdated PDFs, and applies four shared writing rules across regional drafts.`
                : `Filtert ${data.corpus_gate.raw_enterprise_files.toLocaleString(locale)} interne Dokumente auf ${data.corpus_gate.canonical_golden_sources} freigegebene Golden Sources, markiert veraltete PDFs und wendet vier gemeinsame Schreibregeln auf regionale Entwürfe an.`}
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
              <div className="text-[10px] text-zinc-600 mt-0.5">{isEn ? 'Across Global Silos' : 'In allen Silos'}</div>
            </div>

            <div className="p-3 bg-white border border-zinc-200">
              <div className="text-[10px] text-zinc-600 uppercase font-bold">{isEn ? 'CURRENT APPROVED FILES' : 'AKTUELL FREIGEGEBEN'}</div>
              <div className="text-xl font-black text-zinc-800">{data.corpus_gate.active_governed_records.toLocaleString(locale)}</div>
              <div className="text-[10px] text-zinc-600 mt-0.5">{isEn ? 'Active Approved Records' : 'Aktive Freigaben'}</div>
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
                  return 'REF: SBB-FDV-301 & SCADA-LOG-409';
                } else if (scenarioId === 'esg_investigation') {
                  return 'REF: ESG-CODE-2025-V2 & SMETA-881';
                } else if (scenarioId === 'health_data_breach') {
                  return 'REF: BYOK-SPEC-2026 & EPDG-321';
                } else if (scenarioId === 'pluvicto_access_debate') {
                  return 'REF: RLT-01-SAP & CSR-PROS-401';
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
                {isEn ? 'STRICT NON-NEGOTIABLE GUARDRAILS (RED FLAGS):' : 'STRIKTE VERBOTE & RED FLAGS:'}
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
        </div>
      </div>

      {/* ═══ STEP 02: REGIONAL CASCADE ADAPTATION SELECTOR ═══ */}
      <div className="space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="w-7 h-7 bg-sbb-black text-white font-mono text-xs font-bold flex items-center justify-center">
              02
            </span>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-sbb-stone">
              {isEn ? 'REGIONAL CASCADE: ADAPTING THE NARRATIVE BY GEOGRAPHY' : 'REGIONALE KASKADE: GEOGRAFISCHE ADAPTIERUNG'}
            </span>
          </div>

          {/* Single-Source Region Scope Indicator */}
          <div className="flex items-center gap-2 font-mono text-[10px] text-sbb-stone uppercase bg-white border border-sbb-aluminum px-3 py-1">
            <Globe2 className="w-3 h-3 text-sbb-red" />
            <span>{isEn ? 'Header Region Scope:' : 'Regionsfilter (Header):'}</span>
            <span className="font-bold text-sbb-black">{selectedRegion.toUpperCase()}</span>
          </div>
        </div>

        <div className="p-4 bg-white border border-sbb-aluminum flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-[10px] font-mono font-bold text-sbb-stone uppercase">
              <Globe2 className="w-3.5 h-3.5 text-sbb-red" />
              <span>{isEn ? 'ACTIVE REGIONAL PLAYBOOK: ' : 'AKTIVES REGIONALES PLAYBOOK: '}</span>
              <span className="text-sbb-black">{activeAdaptation.region_label}</span>
            </div>
            <p className="text-xs text-zinc-700">
              <span className="font-bold">{isEn ? 'Regulatory Anchor: ' : 'Regulatorischer Anker: '}</span>
              <span>{activeAdaptation.regulatory_anchor}</span>
            </p>
          </div>
          <div className="text-xs font-mono px-3 py-1.5 bg-sbb-cloud border border-sbb-aluminum text-sbb-stone">
            {activeAdaptation.regional_lead_frame}
          </div>
        </div>
      </div>

      {/* ═══ STEP 03: 4-FORMAT EXECUTION BLUEPRINTS (INCLUDING OWNED CORPORATE STORIES FOR GEO) ═══ */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <span className="w-7 h-7 bg-sbb-black text-white font-mono text-xs font-bold flex items-center justify-center">
            03
          </span>
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-sbb-stone">
            {isEn
              ? 'REGIONAL DRAFTS ACROSS 4 CHANNELS: WEBSITE STORY, SOCIAL, TALKING POINTS & Q&A'
              : 'REGIONALE ENTWÜRFE FÜR 4 KANÄLE: WEBSITE-STORY, SOCIAL, TALKING POINTS & Q&A'}
          </span>
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
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-zinc-100 gap-3">
              <div className="space-y-0.5">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-sbb-black block">
                  {isEn
                    ? 'REGIONAL WORKING DRAFT (FOR EDITORIAL & LEGAL REVIEW)'
                    : 'REGIONALER ARBEITSENTWURF (FÜR REDAKTION & LEGAL-FREIGABE)'}
                </span>
                <span className="text-[11px] text-sbb-stone block">
                  {isEn
                    ? 'Anchored in Golden Sources GS-01–GS-03 and structured using the 4 rules above; local teams adapt tone and secure sign-off.'
                    : 'Basiert auf den Golden Sources GS-01–GS-03 und den 4 Schreibregeln; Länderteams passen die Tonalität an und holen die Freigabe ein.'}
                </span>
              </div>

              <button
                onClick={handleCopy}
                className="px-4 py-2 bg-sbb-black hover:bg-zinc-800 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shrink-0 self-start sm:self-auto"
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
