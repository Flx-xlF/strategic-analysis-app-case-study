import React, { useState } from 'react';
import { Language } from '../../fixtures/scenarios';
import { WorldRegionId } from '../../fixtures/cockpitFixtures';
import {
  getTrendingData,
  TrendingScenarioData,
  ContentFormatId,
  FormatBlueprint,
  RegionalAdaptation,
  SteeringMode,
  getScenarioSourceRef,
  getScenarioDiff,
  getSteeredDraftContent
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
  Globe2,
  Lock,
  ArrowRight
} from 'lucide-react';

interface Props {
  scenarioId: string;
  lang: Language;
  selectedRegion: WorldRegionId;
  onSelectRegion: (reg: WorldRegionId) => void;
  onNavigateTab?: (tab: 'cockpit' | 'geo' | 'trending' | 'cascade') => void;
}

export const TrendingFactoryView: React.FC<Props> = ({
  scenarioId,
  lang,
  selectedRegion,
  onNavigateTab
}) => {
  const data: TrendingScenarioData = getTrendingData(lang, scenarioId);
  const [selectedFormat, setSelectedFormat] = useState<ContentFormatId>('hintergrund');
  const [copied, setCopied] = useState(false);
  const [showGovernanceDetails, setShowGovernanceDetails] = useState(false);
  const [activeSteering, setActiveSteering] = useState<SteeringMode>(
    scenarioId === 'rlt_access_debate' ? 'study_rigor' : 'plain'
  );
  const [showWordDiff, setShowWordDiff] = useState<boolean>(true);
  const isEn = lang === 'en';

  React.useEffect(() => {
    setActiveSteering(scenarioId === 'rlt_access_debate' ? 'study_rigor' : 'plain');
  }, [scenarioId]);

  const handleSelectFormat = (fmtId: ContentFormatId) => {
    setSelectedFormat(fmtId);
    if (fmtId === 'qa_brief') {
      setActiveSteering('legal_boundary');
    } else if (fmtId === 'social') {
      setActiveSteering('plain');
    } else if (fmtId === 'hintergrund' && scenarioId === 'rlt_access_debate') {
      setActiveSteering('study_rigor');
    }
  };

  const activeAdaptation: RegionalAdaptation =
    data.regional_adaptations[selectedRegion] ||
    data.regional_adaptations.all ||
    Object.values(data.regional_adaptations)[0];

  const blueprint: FormatBlueprint =
    activeAdaptation.blueprints[selectedFormat] || activeAdaptation.blueprints.hintergrund;

  const sourceRef = getScenarioSourceRef(scenarioId);
  const activeDiff = getScenarioDiff(lang, scenarioId, activeSteering);
  const steeredDraft = getSteeredDraftContent(lang, scenarioId, activeSteering, blueprint.blueprint_content);

  const formatTabs: Array<{
    id: ContentFormatId;
    label: string;
    subtitle: string;
    icon: React.ElementType;
  }> = [
    {
      id: 'hintergrund',
      label: isEn ? 'Website & Study Briefing' : 'Website & Studien-Briefing',
      subtitle: isEn ? 'Owned Media & AI Search' : 'Owned Media & KI-Suche',
      icon: FileText
    },
    {
      id: 'social',
      label: isEn ? 'Social & Community' : 'Social & Community',
      subtitle: isEn ? 'Plain-Language Channels' : 'Klare Alltagssprache',
      icon: Share2
    },
    {
      id: 'talking_points',
      label: isEn ? 'Executive Talking Points' : 'Talking Points Führung',
      subtitle: isEn ? 'Leadership & Interviews' : 'Führung & Interviews',
      icon: Mic
    },
    {
      id: 'qa_brief',
      label: isEn ? 'Press Q&A & Legal Check' : 'Medien-Q&A & Rechtscheck',
      subtitle: isEn ? 'Media Desk & [Open / Verify]' : 'Medienstelle & [Offen / Prüfen]',
      icon: HelpCircle
    }
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText(steeredDraft);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* ═══ WAYFINDING HEADER & INTERNAL SOURCE GOVERNANCE BAR ═══ */}
      <div className="bg-white border border-sbb-aluminum p-6 sm:p-8 space-y-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-sbb-red uppercase mb-1.5">
              <Sparkles className="w-4 h-4" />
              <span>
                {isEn
                  ? 'STEP 3: APPROVED SOURCES & WORKFLOW RECIPES // MODULE 03'
                  : 'SCHRITT 3: GEPRÜFTE QUELLEN & WORKFLOW-REZEPTE // MODUL 03'}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-sbb-black tracking-tight">
              {isEn ? 'Approved Sources & In-Workflow Recipes' : 'Geprüfte Quellen & In-Workflow-Rezepte'}
            </h1>
            <p className="text-sm text-sbb-stone mt-1 max-w-3xl leading-relaxed">
              {isEn
                ? 'Anchors verified core facts and shared writing rules directly inside daily drafting tools—adapting tone per channel while protecting technical precision and flagging legal gaps.'
                : 'Verankert geprüfte Kernfakten und Schreibregeln direkt im Entwurfs-Werkzeug – passt den Ton je Kanal an, schützt Fachpräzision und markiert offene Rechtsfragen.'}
            </p>
          </div>

          <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-sbb-cloud border border-sbb-aluminum font-mono text-xs text-sbb-black font-bold shrink-0 self-start md:self-auto">
            <Lock className="w-3.5 h-3.5 text-sbb-red" />
            <span>{sourceRef}</span>
          </span>
        </div>

        {/* Slim Internal Source Filter Bar (Zero fabricated file counts) */}
        <div className="p-3.5 bg-sbb-cloud/60 border border-sbb-aluminum space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
              <Database className="w-4 h-4 text-sbb-red shrink-0" />
              <span className="font-bold uppercase text-sbb-black">
                {isEn ? 'Source Governance:' : 'Quellen-Filter:'}
              </span>
              <span className="text-zinc-700">
                <strong className="text-emerald-800">
                  {isEn ? 'Active Approved Sources Indexed' : 'Aktive freigegebene Quellen geladen'}
                </strong>
                {' • '}
                <strong className="text-sbb-red">
                  {data.corpus_gate.legacy_conflicts_flagged}{' '}
                  {isEn ? 'outdated regional files quarantined' : 'veraltete Länderdateien gesperrt'}
                </strong>
              </span>
            </div>
            <button
              type="button"
              onClick={() => setShowGovernanceDetails((prev) => !prev)}
              className="text-[10px] font-mono font-bold text-sbb-black hover:text-sbb-red transition-colors cursor-pointer self-start sm:self-auto shrink-0"
            >
              {showGovernanceDetails
                ? isEn
                  ? '▲ Hide Quarantined Files'
                  : '▲ Gesperrte Dateien ausblenden'
                : isEn
                ? '▼ Inspect Quarantined Files'
                : '▼ Gesperrte Dateien prüfen'}
            </button>
          </div>

          {showGovernanceDetails && data.corpus_gate.conflict_details?.length > 0 && (
            <div className="pt-3 border-t border-zinc-200 space-y-2">
              <div className="flex items-center gap-2 font-mono text-[10px] font-bold text-sbb-red uppercase">
                <AlertOctagon className="w-3.5 h-3.5" />
                <span>
                  {isEn
                    ? 'EXCLUDED FROM RECIPES (OUTDATED OR CONFLICTING FILES):'
                    : 'FÜR REZEPTE GESPERRT (VERALTETE ODER WIDERSPRÜCHLICHE DATEIEN):'}
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {data.corpus_gate.conflict_details.map((c, idx) => (
                  <div key={idx} className="p-2.5 bg-white border border-red-200 text-[11px] space-y-0.5">
                    <div className="font-mono font-bold text-sbb-black">
                      {c.document_title}{' '}
                      <span className="text-[10px] text-zinc-500 font-normal">({c.vault_location})</span>
                    </div>
                    <div className="text-zinc-700">{c.conflict_reason}</div>
                    <div className="font-mono text-sbb-red font-bold">
                      {isEn ? 'Action: ' : 'Massnahme: '}
                      {c.action_required}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ═══ 2-COLUMN M365-STYLE WORKSPACE: GUARDRAILS (LEFT) + LIVE DRAFT (RIGHT) ═══ */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
        {/* Left Rail: Central Guardrails & Rules */}
        <div className="xl:col-span-4 bg-white border-2 border-sbb-black p-5 space-y-5">
          <div className="pb-2.5 border-b border-zinc-200 flex items-center justify-between">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-sbb-red">
              {isEn ? 'CENTRAL GUARDRAILS' : 'ZENTRALE LEITPLANKEN'}
            </span>
            <span className="text-[10px] font-mono text-zinc-500">{sourceRef}</span>
          </div>

          <p className="text-xs sm:text-sm font-medium text-sbb-black leading-relaxed italic border-l-4 border-sbb-black pl-3.5 py-0.5">
            «{data.global_core_thesis}»
          </p>

          <div className="space-y-2">
            <div className="text-[10px] font-mono text-sbb-stone uppercase font-bold">
              {isEn ? 'MANDATORY PROOF POINTS:' : 'VERBINDLICHE BELEGE:'}
            </div>
            <ul className="space-y-1.5 text-xs text-zinc-700">
              {data.global_proof_points.map((pt, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-emerald-700 font-bold">✓</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-2">
            <div className="text-[10px] font-mono text-sbb-red uppercase font-bold">
              {isEn ? 'DO-NOT-SAY LIST:' : 'NO-GOS:'}
            </div>
            <ul className="space-y-1.5 text-xs text-red-950 bg-red-50/60 p-3 border border-red-200">
              {data.global_guardrails.map((gr, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-sbb-red font-bold">✗</span>
                  <span>{gr}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-3 border-t border-zinc-200 space-y-2">
            <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-sbb-black">
              {isEn ? '4 SHARED WRITING RULES:' : '4 SCHREIBREGELN:'}
            </div>
            <ol className="space-y-1 text-[11px] text-zinc-700 list-decimal list-inside">
              <li>{isEn ? 'Lead with the main fact & numbers' : 'Kernaussage & Zahlen zuerst'}</li>
              <li>{isEn ? 'Keep core facts aligned; adapt local voice' : 'Kernfakten gleich, Tonalität lokal'}</li>
              <li>{isEn ? 'Never repeat an accusation to deny it' : 'Vorwürfe nicht zur Verneinung wiederholen'}</li>
              <li>{isEn ? 'Answer directly, then cite approved facts' : 'Direkt antworten, dann Fakten nennen'}</li>
            </ol>
          </div>
        </div>

        {/* Right Workspace: Daily In-Workflow Draft Preview */}
        <div className="xl:col-span-8 bg-white border border-sbb-aluminum">
          {/* Format Selector Tabs */}
          <div className="grid grid-cols-2 md:grid-cols-4 border-b border-sbb-aluminum bg-sbb-cloud/40">
            {formatTabs.map((fmt) => {
              const Icon = fmt.icon;
              const isSelected = selectedFormat === fmt.id;

              return (
                <button
                  key={fmt.id}
                  onClick={() => handleSelectFormat(fmt.id)}
                  className={`p-3.5 text-left border-r border-sbb-aluminum last:border-r-0 transition-all cursor-pointer ${
                    isSelected ? 'bg-white border-b-2 border-b-sbb-red' : 'hover:bg-white/60 text-sbb-stone'
                  }`}
                >
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <Icon className={`w-3.5 h-3.5 shrink-0 ${isSelected ? 'text-sbb-red' : 'text-zinc-400'}`} />
                    <span
                      className={`font-mono text-[11px] font-bold uppercase tracking-wider truncate ${
                        isSelected ? 'text-sbb-black' : 'text-sbb-stone'
                      }`}
                    >
                      {fmt.label}
                    </span>
                  </div>
                  <div className="text-[10px] font-mono text-zinc-500 pl-5 truncate">{fmt.subtitle}</div>
                </button>
              );
            })}
          </div>

          {/* Active Region & Audience Strip */}
          <div className="px-5 py-3 bg-zinc-50 border-b border-zinc-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <div>
              <span className="font-mono text-[10px] uppercase text-sbb-stone font-bold mr-1.5">
                {isEn ? 'Audience:' : 'Zielgruppe:'}
              </span>
              <span className="font-bold text-sbb-black">{blueprint.target_audience}</span>
            </div>
            <div className="flex items-center gap-1.5 font-mono text-[10px] text-sbb-stone">
              <Globe2 className="w-3 h-3 text-sbb-red" />
              <span className="font-bold text-sbb-black">
                {selectedRegion.toUpperCase()} — {activeAdaptation.region_label}
              </span>
            </div>
          </div>

          {/* Live Steering Mode Selector + Draft Body */}
          <div className="p-5 sm:p-6 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="space-y-1">
                <div className="text-[10px] font-mono font-bold uppercase text-sbb-stone">
                  {isEn
                    ? 'EDIT DEPTH MODE (TRANSFORMS DRAFT & DIFF BELOW):'
                    : 'EINGRIFFSTIEFE (PASST ENTWURF & DIFF AN):'}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    {
                      id: 'plain' as const,
                      label: isEn ? '💬 Plain Language' : '💬 Alltagssprache'
                    },
                    {
                      id: 'study_rigor' as const,
                      label: isEn ? '🔬 Study & Technical Rigor' : '🔬 Studien- & Fachpräzision'
                    },
                    {
                      id: 'legal_boundary' as const,
                      label: isEn ? '⚖️ Legal & Q&A Boundary' : '⚖️ Rechtsgrenze & Q&A'
                    }
                  ].map((chip) => (
                    <button
                      key={chip.id}
                      type="button"
                      onClick={() => setActiveSteering(chip.id)}
                      className={`px-3 py-1.5 font-mono text-[10px] font-bold border transition-colors cursor-pointer ${
                        activeSteering === chip.id
                          ? 'bg-sbb-black text-white border-sbb-black'
                          : 'bg-white text-zinc-700 border-zinc-300 hover:border-sbb-black'
                      }`}
                    >
                      {chip.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0 self-start sm:self-end">
                <button
                  type="button"
                  onClick={() => setShowWordDiff((prev) => !prev)}
                  className={`px-3 py-1.5 font-mono text-[10px] font-bold uppercase border transition-colors cursor-pointer ${
                    showWordDiff
                      ? 'bg-emerald-50 text-emerald-900 border-emerald-400'
                      : 'bg-white text-zinc-700 border-zinc-300 hover:border-sbb-black'
                  }`}
                >
                  {showWordDiff ? (isEn ? 'Hide Diff' : 'Diff aus') : isEn ? 'Show Diff' : 'Diff zeigen'}
                </button>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="px-3.5 py-1.5 bg-sbb-black hover:bg-zinc-800 text-white font-mono text-[10px] font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{isEn ? 'Copied' : 'Kopiert'}</span>
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

            {showWordDiff && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-3 bg-zinc-50 border border-zinc-200 text-xs">
                <div className="p-2.5 bg-red-50/60 border border-red-200 space-y-1">
                  <div className="font-mono text-[10px] font-bold text-red-800 uppercase">
                    {isEn ? 'REMOVED (RUSHED DRAFT TRAP):' : 'ENTFERNT (TYPISCHE FALLE):'}
                  </div>
                  <p className="text-red-900 line-through leading-snug">{activeDiff.removed}</p>
                </div>

                <div className="p-2.5 bg-emerald-50/70 border border-emerald-300 space-y-1">
                  <div className="font-mono text-[10px] font-bold text-emerald-900 uppercase">
                    {isEn ? `ANCHORED (${sourceRef}):` : `VERANKERT (${sourceRef}):`}
                  </div>
                  <p className="text-emerald-950 font-medium leading-snug">{activeDiff.added}</p>
                </div>
              </div>
            )}

            {/* Live Steered Draft Output */}
            <div className="bg-sbb-cloud/40 p-5 sm:p-6 border-l-4 border-sbb-black text-sm text-sbb-black leading-relaxed space-y-3">
              {steeredDraft.split('\n\n').map((block, bIdx) => {
                const lines = block.split('\n');
                const renderBold = (text: string) =>
                  text.split('**').map((chunk, cIdx) =>
                    cIdx % 2 === 1 ? (
                      <strong key={cIdx} className="font-bold text-sbb-black">
                        {chunk}
                      </strong>
                    ) : (
                      chunk
                    )
                  );

                return (
                  <div key={bIdx} className="space-y-1.5">
                    {lines.map((line, lIdx) => {
                      const trimmed = line.trim();
                      if (trimmed.startsWith('### ')) {
                        return (
                          <h5
                            key={lIdx}
                            className="font-mono text-xs font-black uppercase tracking-wider text-sbb-black pt-2 border-b border-zinc-200 pb-1"
                          >
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

            <div className="text-[11px] font-mono text-zinc-600">
              {isEn
                ? 'Human Gate: Comms, Medical & Legal review wording and resolve any [Open / To verify] items before release.'
                : 'Menschliche Freigabe: Kommunikation, Medizin & Recht prüfen den Text und klären offene Punkte vor Versand.'}
            </div>
          </div>
        </div>
      </div>

      {/* ═══ NEXT-STEP WORKFLOW BRIDGE (03 → 04) ═══ */}
      {onNavigateTab && (
        <div className="bg-sbb-black text-white border-l-4 border-sbb-red px-5 py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="space-y-0.5">
            <div className="text-[10px] font-mono text-[#FFCC00] uppercase tracking-widest font-bold">
              {isEn ? 'NEXT STEP // MODULE 03 → MODULE 04' : 'NÄCHSTER SCHRITT // MODUL 03 → MODUL 04'}
            </div>
            <p className="text-xs sm:text-sm text-zinc-200">
              {isEn
                ? 'Draft grounded in approved facts. Now stress-test it against critical reactions and press inquiry traps.'
                : 'Entwurf mit geprüften Fakten erstellt. Jetzt gegen kritische Reaktionen und Medienanfrage-Fallen testen.'}
            </p>
          </div>
          <button
            onClick={() => {
              onNavigateTab('cascade');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-4 py-2 bg-sbb-red hover:bg-red-700 text-white font-mono text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-2 cursor-pointer shrink-0 self-start sm:self-auto"
          >
            <span>{isEn ? 'Proceed to 04: Stress-Test & Inquiry' : 'Weiter zu 04: Stresstest & Anfrage'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};

export default TrendingFactoryView;
