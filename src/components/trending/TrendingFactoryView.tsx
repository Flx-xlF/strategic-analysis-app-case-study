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
      label: isEn ? 'Corporate Story (Owned GEO)' : 'Corporate Story (Owned GEO)', 
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
              <span>{isEn ? 'DIRECTION 2: TOP-DOWN (DEFINE & ENABLE) // MODULE 03' : 'RICHTUNG 2: TOP-DOWN (DEFINIEREN & BEFÄHIGEN) // MODUL 03'}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-sbb-black tracking-tight">
              {isEn ? 'Core Narrative Definition & Multi-Region GEO Playbook' : 'Kern-Narrativ-Definition & Multi-Regionen GEO-Playbook'}
            </h1>
            <p className="text-sm text-sbb-stone mt-1 max-w-3xl leading-relaxed">
              {isEn
                ? `Prevents cross-regional incoherence from diluting corporate communications: filters ${data.corpus_gate.raw_enterprise_files.toLocaleString()} internal vault files down to ${data.corpus_gate.canonical_golden_sources} verified, topic-specific Golden Sources and enforces shared, channel-adapted GEO standards so central and regional teams gain consistent traction across media and AI search.`
                : `Verhindert, dass regionale Inkohärenz die Unternehmenskommunikation schwächt: filtert ${data.corpus_gate.raw_enterprise_files.toLocaleString()} interne Vault-Dateien auf ${data.corpus_gate.canonical_golden_sources} geprüfte, themenspezifische Golden Sources und setzt verbindliche, kanal-adaptierte GEO-Standards durch, damit zentrale und regionale Teams in Medien und KI-Suche konsistent Traktion aufbauen.`}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-sbb-cloud border border-sbb-aluminum font-mono text-xs text-sbb-black font-bold">
              <Lock className="w-3.5 h-3.5 text-sbb-red" />
              <span>{isEn ? 'TOP-DOWN GOVERNANCE ACTIVE' : 'TOP-DOWN GOVERNANCE AKTIV'}</span>
            </span>
          </div>
        </div>

        {/* ═══ STEP 00: INTERNAL CORPUS GOVERNANCE GATE (SCALING TO MILLIONS OF FILES) ═══ */}
        <div className="p-5 bg-sbb-cloud/60 border border-sbb-aluminum space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-200 pb-2">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-sbb-black">
              <Database className="w-4 h-4 text-sbb-red" />
              <span>
                {isEn
                  ? `INTERNAL CORPUS GOVERNANCE GATE (FILTERING ${data.corpus_gate.raw_enterprise_files.toLocaleString()} ENTERPRISE FILES TO ${data.corpus_gate.canonical_golden_sources} GOLDEN SOURCES)`
                  : `INTERNER DOKUMENTEN-FILTER (${data.corpus_gate.raw_enterprise_files.toLocaleString()} UNTERNEHMENSDOKUMENTE → ${data.corpus_gate.canonical_golden_sources} GOLDEN SOURCES)`}
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
              <div className="text-[10px] text-zinc-500 uppercase font-bold">{isEn ? 'RAW ENTERPRISE CORPUS' : 'GESAMTE DOKUMENTE'}</div>
              <div className="text-xl font-black text-sbb-black">{data.corpus_gate.raw_enterprise_files.toLocaleString()}</div>
              <div className="text-[9px] text-zinc-500 mt-0.5">{isEn ? 'Across Global Silos' : 'In allen Silos'}</div>
            </div>

            <div className="p-3 bg-white border border-zinc-200">
              <div className="text-[10px] text-zinc-500 uppercase font-bold">{isEn ? 'TEMPORAL & STATUS FILTER' : 'STATUS- & ZEITFILTER'}</div>
              <div className="text-xl font-black text-zinc-800">{data.corpus_gate.active_governed_records.toLocaleString()}</div>
              <div className="text-[9px] text-zinc-500 mt-0.5">{isEn ? 'Active Approved Records' : 'Aktive Freigaben'}</div>
            </div>

            <div className="p-3 bg-white border border-emerald-300">
              <div className="text-[10px] text-emerald-800 uppercase font-bold">{isEn ? 'CANONICAL GOLDEN SOURCES' : 'CANONICAL GOLDEN SOURCES'}</div>
              <div className="text-xl font-black text-emerald-700">{data.corpus_gate.canonical_golden_sources}</div>
              <div className="text-[9px] text-emerald-700 mt-0.5">{isEn ? 'Locked Wording Packs' : 'Verbindliche Sprachregelungen'}</div>
            </div>

            <div className="p-3 bg-red-50 border border-red-200">
              <div className="text-[10px] text-sbb-red uppercase font-bold">{isEn ? 'LEGACY CONFLICTS FLAGGED' : 'ALT-DOKUMENT-KONFLIKTE'}</div>
              <div className="text-xl font-black text-sbb-red">{data.corpus_gate.legacy_conflicts_flagged}</div>
              <div className="text-[9px] text-sbb-red mt-0.5">
                {(() => {
                  if (scenarioId === 'alpine_transit_crisis') {
                    return isEn ? 'Outdated Maintenance Manuals' : 'Veraltete Wartungshandbücher';
                  } else if (scenarioId === 'esg_investigation') {
                    return isEn ? 'Pre-2025 Audit Baseline' : 'Vorherige Audit-Stände';
                  } else if (scenarioId === 'health_data_breach') {
                    return isEn ? 'Deprecated Cloud Drafts' : 'Überholte Migrationskonzepte';
                  }
                  return isEn ? 'Contradicting Canonical Policy' : 'Widersprechen Canonical Policy';
                })()}
              </div>
            </div>
          </div>

          {/* Collapsible Toggle for Vault Conflicts & Process Value Cards */}
          <div className="pt-2 flex justify-end">
            <button
              onClick={() => setShowGovernanceDetails(prev => !prev)}
              className="text-[10px] font-mono font-bold text-sbb-black hover:text-sbb-red transition-colors flex items-center gap-1 cursor-pointer"
            >
              <span>
                {showGovernanceDetails
                  ? (isEn ? '▲ Hide Flagged Conflicts & Process Value' : '▲ Konflikte & Prozessnutzen ausblenden')
                  : (isEn ? '▼ Inspect Flagged Vault Conflicts & Process Value' : '▼ Geflaggte Konflikte & Prozessnutzen einblenden')}
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
                    <span>{isEn ? 'AUTOMATED INTERNAL CONFLICT DETECTED IN REGIONAL VAULTS:' : 'AUTOMATISCHER KONFLIKT IN REGIONALEN ABLAGEN ERKANNT:'}</span>
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

              {/* Process Integration: Concrete Value for Management vs. Operational Teams */}
              <div className="pt-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2.5">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-sbb-black">
                    {isEn
                      ? 'PROCESS INTEGRATION: HOW THIS WORKFLOW IMPROVES MANAGEMENT STEERING & TEAM EXECUTION'
                      : 'PROZESS-INTEGRATION: KONKRETER MEHRWERT FÜR MANAGEMENT-STEUERUNG & TEAM-UMSETZUNG'}
                  </span>
                  <span className="text-[10px] font-mono text-sbb-red font-bold">
                    {isEn ? 'Embedded in Daily/Weekly Routines // Human-in-the-Loop' : 'Eingebettet in Regelprozesse // Human-in-the-Loop'}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-[11px] font-sans">
                  {/* Management Value */}
                  <div className="p-3 bg-white border border-zinc-200 space-y-1">
                    <div className="font-mono text-[10px] font-bold text-sbb-black uppercase flex items-center justify-between">
                      <span>{isEn ? '1. For Leadership (Decision Support)' : '1. Für Führungskräfte (Entscheidungskontext)'}</span>
                      <span className="text-emerald-700">{isEn ? 'On-Demand Context' : 'Kontext auf Knopfdruck'}</span>
                    </div>
                    <p className="text-zinc-600 leading-snug">
                      {isEn
                        ? 'Assists leadership in taking fast, informed decisions by providing cross-regional reception, regulatory trade-offs, and Golden Source alignment at the push of a button.'
                        : 'Unterstützt Führungskräfte bei Entscheidungen, indem regionaler Rezeptionskontext, regulatorische Zielkonflikte und Golden-Source-Abgleiche auf Knopfdruck bereitstehen.'}
                    </p>
                  </div>

                  {/* Team Value */}
                  <div className="p-3 bg-white border border-zinc-200 space-y-1">
                    <div className="font-mono text-[10px] font-bold text-sbb-black uppercase flex items-center justify-between">
                      <span>{isEn ? '2. For Comms Teams (Speed)' : '2. Für Kommunikations-Teams (Tempo)'}</span>
                      <span className="text-emerald-700">{isEn ? 'Days → Hours' : 'Tage → Stunden'}</span>
                    </div>
                    <p className="text-zinc-600 leading-snug">
                      {isEn
                        ? 'Eliminates repository hunting and prompt guesswork. Regional teams adapt pre-cleared Golden Sources (GS-01–GS-03), cutting Legal/Governance alignment cycles from days to hours.'
                        : 'Kein Suchen in Dateiablagen oder Raten bei Prompts: Länderteams nutzen vorab geprüfte Golden Sources (GS-01–GS-03) und verkürzen Freigaben von Tagen auf Stunden.'}
                    </p>
                  </div>

                  {/* Human Governance Gate */}
                  <div className="p-3 bg-white border border-zinc-200 space-y-1">
                    <div className="font-mono text-[10px] font-bold text-sbb-black uppercase flex items-center justify-between">
                      <span>{isEn ? '3. Governance Gate (Control)' : '3. Governance-Gate (Kontrolle)'}</span>
                      <span className="text-sbb-red">{isEn ? 'Mandatory Sign-Off' : 'Pflicht-Freigabe'}</span>
                    </div>
                    <p className="text-zinc-600 leading-snug">
                      {isEn
                        ? 'AI never auto-publishes. Every regional playbook and stress-tested draft logs its Golden Source ID and requires human Comms + Legal/Regulatory sign-off before release.'
                        : 'Keine automatische Publikation durch KI: Jedes Playbook referenziert seine Golden-Source-ID und durchläuft vor Veröffentlichung die reguläre Kommunikations- und Rechtsfreigabe.'}
                    </p>
                  </div>
                </div>
              </div>
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
            {isEn ? 'CENTRAL CORE NARRATIVE, MANDATORY GEO FRAMEWORK & GUARDRAILS' : 'ZENTRALES KERN-NARRATIV, VERBINDLICHES GEO-FRAMEWORK & LEITPLANKEN'}
          </span>
        </div>

        <div className="bg-white border-2 border-sbb-black p-6 sm:p-8 space-y-5">
          <div className="pb-3 border-b border-zinc-200 flex items-center justify-between">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-sbb-red">
              {isEn ? 'CANONICAL GLOBAL THESIS (APPROVED BY C-SUITE & LEGAL)' : 'AUTORISIERTE GLOBALE KERNTHESE (FREIGEGEBEN DURCH KONZERNLEITUNG)'}
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

          {/* 4-Rule Corporate GEO Framework Delivered to All Teams */}
          <div className="pt-4 border-t border-zinc-200 space-y-2.5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-sbb-black">
                {isEn
                  ? 'MANDATORY 4-RULE CORPORATE GEO FRAMEWORK (ENFORCED ACROSS ALL CHANNELS):'
                  : 'VERBINDLICHES 4-REGEL CORPORATE GEO-FRAMEWORK (KANALÜBERGREIFEND VERBINDLICH):'}
              </span>
              <span className="text-[10px] font-mono text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 font-bold">
                {isEn ? 'Enforced Across All Regional & Cantonal Hubs' : 'Verbindlich für alle Regional- & Kantons-Hubs'}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
              <div className="p-3 bg-sbb-cloud/50 border border-sbb-aluminum space-y-1">
                <div className="font-mono text-[10px] font-bold text-sbb-black uppercase">
                  {isEn ? 'GEO-01 // Answer-First & Stat Pairing' : 'GEO-01 // Answer-First & Zahlen-Kopplung'}
                </div>
                <p className="text-[11px] text-zinc-700 leading-snug">
                  {isEn
                    ? 'Place the main conclusion in the opening 30% of text and pair every claim with quantitative stats (+61.5% absorption lift) in a self-contained 300–600 token passage to survive reranking.'
                    : 'Kernaussage in den ersten 30% platzieren und im selben 300–600-Token-Absatz mit Zahlenbelegen (+61,5% Absorptions-Lift) koppeln, um den Reranker-Cutoff zu überstehen.'}
                </p>
              </div>

              <div className="p-3 bg-sbb-cloud/50 border border-sbb-aluminum space-y-1">
                <div className="font-mono text-[10px] font-bold text-sbb-black uppercase">
                  {isEn ? 'GEO-02 // Terminology Lock' : 'GEO-02 // Terminologie-Kohärenz'}
                </div>
                <p className="text-[11px] text-zinc-700 leading-snug">
                  {isEn
                    ? 'Use identical canonical terms across all regions and cantons so AI search engines do not misread local phrasing variations as contradictions.'
                    : 'Identische Schlüsselbegriffe über alle Regionen und Kantone nutzen, damit KI-Suchmaschinen lokale Nuancen nicht als Widerspruch werten.'}
                </p>
              </div>

              <div className="p-3 bg-red-50/40 border border-red-200 space-y-1">
                <div className="font-mono text-[10px] font-bold text-sbb-red uppercase">
                  {isEn ? 'GEO-03 // Zero Accusation Echo' : 'GEO-03 // Kein Vorwurfs-Echo'}
                </div>
                <p className="text-[11px] text-zinc-700 leading-snug">
                  {isEn
                    ? 'Never repeat an accusation to deny it—repeating hostile keyword frames on corporate channels anchors those terms directly to our entity in AI search indices.'
                    : 'Vorwürfe nie zur Verneinung wiederholen – sonst verknüpfen KI-Suchindizes die eigene Domain direkt mit dem Negativ-Frame.'}
                </p>
              </div>

              <div className="p-3 bg-emerald-50/40 border border-emerald-300 space-y-1">
                <div className="font-mono text-[10px] font-bold text-emerald-900 uppercase">
                  {isEn ? 'GEO-04 // Narrative Delivery' : 'GEO-04 // Eigenes Narrativ liefern'}
                </div>
                <p className="text-[11px] text-zinc-700 leading-snug">
                  {isEn
                    ? 'Bridge immediately from the stakeholder question into our affirmative core narrative (GS-01–GS-03) so AI engines synthesize our position, not the critic’s.'
                    : 'Sofort vom Thema über eine Brücke in das eigene affirmative Kern-Narrativ (GS-01–GS-03) führen, damit KI-Antworten unsere Position synthetisieren.'}
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
              ? 'FOUR-FORMAT REGIONAL ENABLEMENT: CORPORATE STORIES (OWNED GEO), SOCIAL, TALKING POINTS & Q&A'
              : 'VIER-FORMAT-BEFÄHIGUNG: CORPORATE STORIES (OWNED GEO), SOCIAL, TALKING POINTS & Q&A'}
          </span>
        </div>

        <div className="bg-white border border-sbb-aluminum">
          {/* Strategic GEO Role of Dual-Path (Earned + Owned) Banner */}
          <div className="px-6 py-3.5 bg-sbb-cloud/70 border-b border-sbb-aluminum flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
            <div className="text-sbb-black leading-snug">
              {isEn ? (
                <>
                  <strong className="font-mono uppercase text-sbb-red">Dual-Path GEO (~84% Earned + Owned HTML):</strong> Empirical audits show AI engines draw ~84% of citations from earned/third-party media and ~16% from owned domains. <strong>Owned Corporate Stories</strong> provide answer-first SSR HTML primary sources, while <strong>press releases</strong> and <strong>media answers</strong> supply quote-safe, stat-backed earned media corroboration.
                </>
              ) : (
                <>
                  <strong className="font-mono uppercase text-sbb-red">Dual-Path GEO (~84% Earned + Owned HTML):</strong> KI-Suchmaschinen beziehen ~84% ihrer Zitate aus Dritt-/Fachmedien und ~16% von Unternehmens-Domains. <strong>Owned Corporate Stories</strong> liefern direkte Answer-First HTML-Primärquellen, während <strong>Medienmitteilungen</strong> und <strong>Medienantworten</strong> zitierfähige Earned-Media-Belege sichern.
                </>
              )}
            </div>
            <span className="font-mono text-[10px] font-bold uppercase px-2 py-0.5 bg-white border border-zinc-300 text-sbb-black shrink-0">
              {isEn ? 'Earned (~84%) + Owned Dual-Path GEO' : 'Earned (~84%) + Owned Dual-Path GEO'}
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
                    ? 'SHARED GEO FRAMEWORK & REGIONAL WORKING SCAFFOLD (REQUIRES HUMAN ITERATION)'
                    : 'GEMEINSAMES GEO-FRAMEWORK & REGIONALES ARBEITSGERÜST (MENSCHLICHE ITERATION ERFORDERLICH)'}
                </span>
                <span className="text-[11px] text-sbb-stone block">
                  {isEn
                    ? 'Gives every team a consistent GEO structure anchored in Golden Sources GS-01–GS-03 so AI search engines and journalists receive the same verified facts; human specialists iterate the final 20%.'
                    : 'Gibt jedem Team eine konsistente GEO-Struktur auf Basis der Golden Sources GS-01–GS-03, damit KI-Suchmaschinen und Medien dieselben geprüften Fakten erhalten; das Team iteriert die letzten 20%.'}
                </span>
              </div>

              <button
                onClick={handleCopy}
                className="px-4 py-2 bg-sbb-black hover:bg-zinc-800 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shrink-0 self-start sm:self-auto"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{isEn ? 'Scaffold Copied' : 'Gerüst kopiert'}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-zinc-400" />
                    <span>{isEn ? 'Copy Working Scaffold' : 'Arbeitsgerüst kopieren'}</span>
                  </>
                )}
              </button>
            </div>

            {/* 3-Pillar Practitioner Strip: Negative-Frame Hygiene + Bridging to Core Narrative + Human Iteration */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
              <div className="p-3 bg-red-50/40 border border-red-200">
                <div className="font-mono text-[10px] font-bold uppercase text-sbb-red mb-1">
                  {isEn
                    ? '1. GEO NEGATIVE-FRAME HYGIENE (RULE GEO-03):'
                    : '1. GEO NEGATIV-FRAME-HYGIENE (REGEL GEO-03):'}
                </div>
                <p className="text-zinc-700 leading-snug">
                  {isEn
                    ? 'Repeating an accusation to deny it causes AI search engines to index our own authoritative domain with the critic’s keyword attached to our brand. The scaffold strips all negative frames.'
                    : 'Wer Vorwürfe zur Verneinung wiederholt, sorgt dafür, dass KI-Suchmaschinen unsere eigene Domain mit dem Negativbegriff indexieren. Das Gerüst eliminiert alle Negativ-Frames.'}
                </p>
              </div>

              <div className="p-3 bg-emerald-50/40 border border-emerald-300">
                <div className="font-mono text-[10px] font-bold uppercase text-emerald-900 mb-1">
                  {isEn
                    ? '2. DELIVERING OUR NARRATIVE FOR GEO (RULE GEO-04):'
                    : '2. EIGENES NARRATIV FÜR GEO LIEFERN (REGEL GEO-04):'}
                </div>
                <p className="text-zinc-700 leading-snug">
                  {isEn
                    ? 'Uses disciplined bridging (Acknowledge → Bridge → Core Pillar GS-01–GS-03) so AI retrieval pipelines and journalists extract and synthesize the company’s own narrative.'
                    : 'Nutzt gezieltes Bridging (Anliegen → Brücke → Kernsäule GS-01–GS-03), damit KI-Retrieval-Pipelines und Medien das eigene Unternehmens-Narrativ übernehmen.'}
                </p>
              </div>

              <div className="p-3 bg-amber-50/60 border border-amber-300">
                <div className="font-mono text-[10px] font-bold uppercase text-amber-900 mb-1">
                  {isEn
                    ? '3. HUMAN ITERATION (THE FINAL 20%):'
                    : '3. MENSCHLICHE ITERATION (LETZTE 20%):'}
                </div>
                <p className="text-zinc-800 leading-snug">
                  {isEn
                    ? 'Comms specialists calibrate local stakeholder nuance, executive voice, timing, and final Legal/MLR sign-off before publication.'
                    : 'Kommunikationsprofis justieren lokale Tonalität, politische Sensibilität, Timing und holen die finale Legal/MLR-Freigabe ein.'}
                </p>
              </div>
            </div>

            <div className="bg-sbb-cloud/40 p-6 sm:p-8 border-l-4 border-sbb-black text-sm text-sbb-black leading-relaxed font-sans max-w-4xl space-y-3">
              {blueprint.blueprint_content.split('\n\n').map((paragraph, pIdx) => {
                if (paragraph.startsWith('### ')) {
                  return (
                    <h5 key={pIdx} className="font-mono text-xs font-black uppercase tracking-wider text-sbb-black pt-2 border-b border-zinc-200 pb-1">
                      {paragraph.replace('### ', '')}
                    </h5>
                  );
                }
                return (
                  <p key={pIdx} className="whitespace-pre-line text-xs sm:text-sm text-zinc-900 leading-relaxed font-sans">
                    {paragraph.split('**').map((chunk, cIdx) => 
                      cIdx % 2 === 1 ? <strong key={cIdx} className="font-bold text-sbb-black">{chunk}</strong> : chunk
                    )}
                  </p>
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
                ? 'Regional working scaffold locked. Now stress-test the draft against critical stakeholder reactions and verify tough media questions before distribution.'
                : 'Regionales Arbeitsgerüst steht. Führen Sie nun den Stresstest gegen Stakeholder-Reaktionen und den Medienanfragen-Check vor Freigabe durch.'}
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
