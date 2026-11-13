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
  isStreaming: boolean;
  streamProgress: number;
}

export const TrendingFactoryView: React.FC<Props> = ({
  scenarioId,
  lang,
  selectedRegion,
  onSelectRegion,
  isStreaming,
  streamProgress
}) => {
  const data: TrendingScenarioData = getTrendingData(lang, scenarioId);
  const [selectedFormat, setSelectedFormat] = useState<ContentFormatId>('hintergrund');
  const [copied, setCopied] = useState(false);
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
      label: isEn ? 'Background Dossier' : 'Hintergrund-Dossier', 
      subtitle: isEn ? 'Science & Business Press' : 'Wirtschafts- & Fachpresse',
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
              {isEn ? 'Global Narrative Definition & Regional Enablement Playbook' : 'Globale Narrativ-Definition & Regionales Playbook'}
            </h1>
            <p className="text-sm text-sbb-stone mt-1 max-w-3xl leading-relaxed">
              {isEn
                ? 'Governs millions of internal enterprise documents into canonical golden sources, sets non-negotiable global guardrails, and cascades tailored playbooks to regional communications affiliates.'
                : 'Filtert Millionen interner Unternehmensdokumente auf verbindliche Golden Sources, definiert globale Leitplanken und kaskadiert passgenaue Playbooks an regionale Kommunikationsstellen.'}
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
              <span>{isEn ? 'INTERNAL CORPUS GOVERNANCE GATE (NAVIGATING 1,400,000+ ENTERPRISE FILES)' : 'INTERNER DOKUMENTEN-FILTER (BEWÄLTIGUNG VON ÜBER 1,4 MIO. UNTERNEHMENSDOKUMENTEN)'}</span>
            </div>
            <span className="text-[10px] font-mono text-zinc-500">
              {isEn ? 'Veeva Vault + SharePoint + Regulatory Repositories' : 'Veeva Vault + SharePoint + Rechtsarchive'}
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 font-mono text-xs">
            <div className="p-3 bg-white border border-zinc-200">
              <div className="text-[10px] text-sbb-stone uppercase">{isEn ? 'RAW ENTERPRISE CORPUS' : 'GESAMTE DOKUMENTE'}</div>
              <div className="text-xl font-black text-sbb-black">{data.corpus_gate.raw_enterprise_files.toLocaleString()}</div>
              <div className="text-[9px] text-zinc-400 mt-0.5">{isEn ? 'Across Global Silos' : 'In allen Silos'}</div>
            </div>

            <div className="p-3 bg-white border border-zinc-200">
              <div className="text-[10px] text-sbb-stone uppercase">{isEn ? 'TEMPORAL & STATUS FILTER' : 'STATUS- & ZEITFILTER'}</div>
              <div className="text-xl font-black text-zinc-800">{data.corpus_gate.active_governed_records.toLocaleString()}</div>
              <div className="text-[9px] text-zinc-400 mt-0.5">{isEn ? 'Active Approved Records' : 'Aktive Freigaben'}</div>
            </div>

            <div className="p-3 bg-white border border-emerald-300">
              <div className="text-[10px] text-emerald-800 uppercase font-bold">{isEn ? 'CANONICAL GOLDEN SOURCES' : 'CANONICAL GOLDEN SOURCES'}</div>
              <div className="text-xl font-black text-emerald-700">{data.corpus_gate.canonical_golden_sources}</div>
              <div className="text-[9px] text-emerald-600 mt-0.5">{isEn ? 'Locked Wording Packs' : 'Verbindliche Sprachregelungen'}</div>
            </div>

            <div className="p-3 bg-red-50 border border-red-200">
              <div className="text-[10px] text-sbb-red uppercase font-bold">{isEn ? 'LEGACY CONFLICTS FLAGGED' : 'ALT-DOKUMENT-KONFLIKTE'}</div>
              <div className="text-xl font-black text-sbb-red">{data.corpus_gate.legacy_conflicts_flagged}</div>
              <div className="text-[9px] text-sbb-red mt-0.5">{isEn ? 'Contradicting New Findings' : 'Widersprechen Phase III'}</div>
            </div>
          </div>

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
                    <div className="font-mono font-bold text-sbb-black">{c.document_title} <span className="text-[10px] text-zinc-400 font-normal">({c.vault_location})</span></div>
                    <div className="text-zinc-700">{c.conflict_reason}</div>
                    <div className="font-mono text-sbb-red font-bold">{isEn ? 'Action: ' : 'Massnahme: '}{c.action_required}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Enterprise IT Integration Outlook Strip */}
          <div className="pt-3 border-t border-zinc-200">
            <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-sbb-black mb-2 flex items-center justify-between">
              <span>
                {isEn
                  ? 'REALISTIC IT INTEGRATION OUTLOOK (HOW THIS PLUGS INTO EXISTING CORPORATE INFRASTRUCTURE)'
                  : 'REALISTISCHER IT-INTEGRATIONSAUSBLICK (EINBETTUNG IN BESTEHENDE KONZERN-SYSTEME)'}
              </span>
              <span className="text-zinc-500 font-normal">
                {isEn ? 'Zero Shadow IT // Standard APIs' : 'Keine Schatten-IT // Standard-APIs'}
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-2 text-[11px] font-sans">
              <div className="p-2.5 bg-white border border-zinc-200">
                <div className="font-mono text-[10px] font-bold text-sbb-black uppercase mb-0.5">
                  {isEn ? '1. Document Systems' : '1. Dokumentensysteme'}
                </div>
                <p className="text-zinc-600 leading-snug">
                  {isEn
                    ? 'Read-only connectors to Veeva Vault (PromoMats/MedComms) & SharePoint via Graph API. Enforces existing RBAC & approval status.'
                    : 'Lese-Schnittstellen zu Veeva Vault (PromoMats/MedComms) & SharePoint via Graph API. Übernimmt bestehende Rechte (RBAC) & Freigabestatus.'}
                </p>
              </div>
              <div className="p-2.5 bg-white border border-zinc-200">
                <div className="font-mono text-[10px] font-bold text-sbb-black uppercase mb-0.5">
                  {isEn ? '2. External Feeds' : '2. Externe Datenfeeds'}
                </div>
                <p className="text-zinc-600 leading-snug">
                  {isEn
                    ? 'Ingests existing licensed media/social streams (Factiva, Meltwater, Talkwalker) + scheduled regional API probes for LLM search engines.'
                    : 'Nutzt bestehende Medien-/Social-Abos (Factiva, Meltwater, Talkwalker) + geplante regionale API-Abfragen für KI-Suchmaschinen.'}
                </p>
              </div>
              <div className="p-2.5 bg-white border border-zinc-200">
                <div className="font-mono text-[10px] font-bold text-sbb-black uppercase mb-0.5">
                  {isEn ? '3. Cloud & AI Gateway' : '3. Cloud & AI Gateway'}
                </div>
                <p className="text-zinc-600 leading-snug">
                  {isEn
                    ? 'Statistical clustering runs in corporate cloud (Azure/AWS/Databricks). LLMs route via internal Enterprise AI Gateway (zero data retention).'
                    : 'Statistik-Pipeline läuft in der Firmen-Cloud (Azure/AWS/Databricks). LLMs laufen über das interne AI Gateway (Zero Data Retention).'}
                </p>
              </div>
              <div className="p-2.5 bg-white border border-zinc-200">
                <div className="font-mono text-[10px] font-bold text-sbb-black uppercase mb-0.5">
                  {isEn ? '4. SSO & Audit Trail' : '4. SSO & Audit-Trail'}
                </div>
                <p className="text-zinc-600 leading-snug">
                  {isEn
                    ? 'Entra ID / Okta authentication. Logs exact source document IDs and timestamps for every playbook to support compliance review.'
                    : 'Entra ID / Okta Login. Protokolliert Quell-Dokument-IDs und Zeitstempel für jedes Playbook zur Unterstützung der Compliance-Prüfung.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══ STEP 01: GLOBAL CORE THESIS & GUARDRAILS (HQ) ═══ */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <span className="w-7 h-7 bg-sbb-black text-white font-mono text-xs font-bold flex items-center justify-center">
            01
          </span>
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-sbb-stone">
            {isEn ? 'GLOBAL CORE NARRATIVE & NON-NEGOTIABLE GUARDRAILS' : 'GLOBALES KERN-NARRATIV & VERBINDLICHE LEITPLANKEN (HQ)'}
          </span>
        </div>

        <div className="bg-white border-2 border-sbb-black p-6 sm:p-8 space-y-5">
          <div className="pb-3 border-b border-zinc-200 flex items-center justify-between">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-sbb-red">
              {isEn ? 'CANONICAL GLOBAL THESIS (APPROVED BY C-SUITE & LEGAL)' : 'AUTORISIERTE GLOBALE KERNTHESE (FREIGEGEBEN DURCH KONZERNLEITUNG)'}
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 bg-zinc-100 border border-zinc-200 text-zinc-700">
              REF: SOP-MED-402 & CSR-701
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

          {/* Region Switcher */}
          <div className="flex items-center gap-1 bg-sbb-cloud p-1 border border-sbb-aluminum">
            <button
              onClick={() => onSelectRegion('all')}
              className={`px-3 py-1 font-mono text-xs font-bold transition-all cursor-pointer ${
                selectedRegion === 'all' ? 'bg-sbb-black text-white' : 'text-sbb-stone hover:text-sbb-black'
              }`}
            >
              {isEn ? 'GLOBAL' : 'GLOBAL'}
            </button>
            <button
              onClick={() => onSelectRegion('us')}
              className={`px-3 py-1 font-mono text-xs font-bold transition-all cursor-pointer ${
                selectedRegion === 'us' ? 'bg-sbb-black text-white' : 'text-sbb-stone hover:text-sbb-black'
              }`}
            >
              US
            </button>
            <button
              onClick={() => onSelectRegion('eu')}
              className={`px-3 py-1 font-mono text-xs font-bold transition-all cursor-pointer ${
                selectedRegion === 'eu' ? 'bg-sbb-black text-white' : 'text-sbb-stone hover:text-sbb-black'
              }`}
            >
              EU
            </button>
            <button
              onClick={() => onSelectRegion('ch')}
              className={`px-3 py-1 font-mono text-xs font-bold transition-all cursor-pointer ${
                selectedRegion === 'ch' ? 'bg-sbb-black text-white' : 'text-sbb-stone hover:text-sbb-black'
              }`}
            >
              CH (HQ)
            </button>
            <button
              onClick={() => onSelectRegion('apac')}
              className={`px-3 py-1 font-mono text-xs font-bold transition-all cursor-pointer ${
                selectedRegion === 'apac' ? 'bg-sbb-black text-white' : 'text-sbb-stone hover:text-sbb-black'
              }`}
            >
              APAC
            </button>
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

      {/* ═══ STEP 03: 3-CHANNEL EXECUTION BLUEPRINTS ═══ */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <span className="w-7 h-7 bg-sbb-black text-white font-mono text-xs font-bold flex items-center justify-center">
            03
          </span>
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-sbb-stone">
            {isEn ? 'THREE-CHANNEL ENABLEMENT BLUEPRINTS' : 'DREI-KANAL-VORLAGEN (MEDIEN, SOCIAL, LLM)'}
          </span>
        </div>

        <div className="bg-white border border-sbb-aluminum">
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
                  <div className="text-[10px] font-mono text-zinc-400 pl-6">
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
          <div className="p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-zinc-100">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-sbb-stone">
                {isEn ? 'GENERATED ALIGNED ASSET (CANONICAL WORDING LOCKED)' : 'GENERIERTE VORLAGE (FREIGABEFÄHIG)'}
              </span>

              <button
                onClick={handleCopy}
                className="px-4 py-2 bg-sbb-black hover:bg-zinc-800 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{isEn ? 'Copied' : 'Kopiert'}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-zinc-400" />
                    <span>{isEn ? 'Copy Blueprint' : 'Vorlage kopieren'}</span>
                  </>
                )}
              </button>
            </div>

            <div className="bg-sbb-cloud/40 p-6 sm:p-8 border-l-4 border-sbb-black text-sm text-sbb-black leading-relaxed whitespace-pre-line font-mono max-w-4xl">
              {blueprint.blueprint_content}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingFactoryView;
