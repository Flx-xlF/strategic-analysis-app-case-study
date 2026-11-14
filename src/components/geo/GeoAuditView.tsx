import React, { useState } from 'react';
import { Language } from '../../fixtures/scenarios';
import { WorldRegionId } from '../../fixtures/cockpitFixtures';
import { getGeoData, HallucinationSpan, CentroidArticle } from '../../fixtures/geoFixtures';
import {
  Bot,
  Search,
  AlertTriangle,
  CheckCircle2,
  BrainCircuit,
  Check,
  Copy,
  ShieldCheck,
  ArrowRight,
  Filter
} from 'lucide-react';

interface Props {
  scenarioId: string;
  lang: Language;
  selectedRegion: WorldRegionId;
  onSelectRegion: (reg: WorldRegionId) => void;
  onNavigateTab?: (tab: 'cockpit' | 'geo' | 'trending' | 'cascade') => void;
}

export const GeoAuditView: React.FC<Props> = ({
  scenarioId,
  lang,
  selectedRegion,
  onSelectRegion,
  onNavigateTab
}) => {
  const data = getGeoData(lang, scenarioId);
  const [copied, setCopied] = useState(false);
  const [sourceMode, setSourceMode] = useState<'before' | 'after'>('before');
  const [activeSpanIndex, setActiveSpanIndex] = useState<number | null>(1);
  const isEn = lang === 'en';
  const isBefore = sourceMode === 'before';

  const handleCopyFactBlock = () => {
    navigator.clipboard.writeText(data.geo_optimization_fix.structured_fact_block);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const filteredCentroids =
    selectedRegion === 'all'
      ? data.active_cluster.centroid_articles
      : data.active_cluster.centroid_articles.filter((a) => a.region === selectedRegion);

  const displayedCentroids =
    filteredCentroids.length > 0 ? filteredCentroids : data.active_cluster.centroid_articles;

  return (
    <div className="space-y-8">
      {/* ═══ WAYFINDING HEADER ═══ */}
      <div className="bg-white border border-sbb-aluminum p-6 sm:p-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-5 mb-5 border-b border-zinc-100 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-sbb-red uppercase mb-1.5">
              <BrainCircuit className="w-4 h-4" />
              <span>
                {isEn
                  ? 'STEP 2: INSPECT SOURCES & AI ANSWERS // MODULE 02'
                  : 'SCHRITT 2: QUELLEN & KI-ANTWORTEN PRÜFEN // MODUL 02'}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-sbb-black tracking-tight">
              {isEn ? 'Topic Cluster & AI Search Answer Check' : 'Themen-Cluster & KI-Suchantwort-Check'}
            </h1>
            <p className="text-sm text-sbb-stone mt-1 max-w-3xl leading-relaxed">
              {isEn
                ? 'Shows the representative articles driving this topic and lets you test how replacing vague PR prose with clear opening facts changes AI summaries—without silencing external media.'
                : 'Zeigt die prägenden Artikel dieses Themas und macht testbar, wie klare Fakten am Textanfang KI-Antworten stabilisieren – ohne externe Kritik auszublenden.'}
            </p>
          </div>
        </div>

        {/* Cluster Profile Strip */}
        <div className="p-4 bg-sbb-cloud/60 border border-sbb-aluminum space-y-2">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 bg-sbb-black text-white font-mono text-xs font-bold">
                {data.active_cluster.cluster_id}
              </span>
              <h2 className="text-base font-bold text-sbb-black">{data.active_cluster.name}</h2>
            </div>
            <span className="text-xs font-mono text-sbb-stone">
              {isEn ? 'Dominant Region: ' : 'Schwerpunkt: '}
              <strong className="text-sbb-black">{data.active_cluster.dominant_region}</strong>
            </span>
          </div>
          <div className="text-xs">
            <span className="font-mono text-sbb-red uppercase tracking-wider font-bold">
              {isEn ? 'Core Distortion Risk: ' : 'Zentrale Abweichung: '}
            </span>
            <span className="text-zinc-800">{data.active_cluster.target_pillar_gap}</span>
          </div>
        </div>
      </div>

      {/* ═══ STEP 01: REPRESENTATIVE ARTICLES IN THIS CLUSTER ═══ */}
      <div className="space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="w-7 h-7 bg-sbb-black text-white font-mono text-xs font-bold flex items-center justify-center">
              01
            </span>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-sbb-stone">
              {isEn
                ? 'EXTERNAL ARTICLES ENTERING AI RETRIEVAL (UNCHANGED BY COMPANY EDITS)'
                : 'EXTERNE ARTIKEL IN DER KI-SUCHE (NICHT VOM UNTERNEHMEN STEUERBAR)'}
            </span>
          </div>

          <div className="flex items-center gap-2 font-mono text-[10px] text-zinc-700 uppercase bg-white border border-sbb-aluminum px-3 py-1">
            <Filter className="w-3 h-3 text-red-700" />
            <span>{isEn ? 'Region Scope:' : 'Regionsfilter:'}</span>
            <span className="font-bold text-sbb-black">
              {selectedRegion.toUpperCase()} ({filteredCentroids.length}/{data.active_cluster.centroid_articles.length}{' '}
              {isEn ? 'Local' : 'Lokal'})
            </span>
            {selectedRegion !== 'all' && (
              <button
                type="button"
                onClick={() => onSelectRegion('all')}
                className="ml-1 px-1.5 py-0.5 bg-sbb-cloud hover:bg-zinc-200 border border-zinc-300 text-sbb-black font-bold cursor-pointer transition-colors"
              >
                {isEn ? 'Reset to ALL' : 'Alle zeigen'}
              </button>
            )}
          </div>
        </div>

        {/* Cross-border retrieval insight when local articles are sparse */}
        {selectedRegion !== 'all' && filteredCentroids.length === 0 && (
          <div className="p-3 bg-amber-50 border border-amber-300 text-xs text-amber-950 font-mono flex items-center gap-2">
            <span className="w-2 h-2 bg-amber-600 shrink-0" />
            <span>
              {isEn
                ? `Local coverage in ${selectedRegion.toUpperCase()} is sparse—AI search in this market pulls dominant international (EU/US) sources directly into local answers.`
                : `Lokale Berichte in ${selectedRegion.toUpperCase()} sind rar – KI-Suchmaschinen ziehen in diesem Markt dominante internationale (EU/US) Quellen direkt in lokale Antworten.`}
            </span>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCentroids.map((art: CentroidArticle) => {
            const isAligned = art.cosine_to_target >= 0.65;

            return (
              <div
                key={art.id}
                className="bg-white border border-sbb-aluminum p-5 flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between pb-2 mb-3 border-b border-zinc-100">
                    <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase">{art.outlet}</span>
                    <span className="text-[9px] font-mono px-2 py-0.5 bg-zinc-100 text-zinc-700 border border-zinc-200">
                      {art.tier}
                    </span>
                  </div>
                  <h3 className="font-bold text-sm text-sbb-black leading-snug mb-2">«{art.headline}»</h3>
                  <p className="text-xs text-zinc-600 leading-relaxed italic mb-4 border-l-2 border-zinc-300 pl-3">
                    {art.excerpt}
                  </p>
                </div>

                <div className="pt-3 border-t border-zinc-100 space-y-1 font-mono text-[10px]">
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-500">{isEn ? 'Alignment:' : 'Passung:'}</span>
                    <span
                      className={`px-1.5 py-0.5 font-bold border ${
                        isAligned
                          ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                          : 'bg-red-50 text-sbb-red border-red-200'
                      }`}
                    >
                      {isAligned
                        ? isEn
                          ? 'Supports Core Fact'
                          : 'Stützt Kernfakt'
                        : isEn
                        ? 'Introduces Distortion'
                        : 'Führt Verzerrung ein'}
                    </span>
                  </div>
                  <div className={`truncate ${isAligned ? 'text-emerald-800' : 'text-sbb-red'}`}>
                    {art.violated_pillar}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ═══ STEP 02: INTERACTIVE BEFORE / AFTER OWNED SOURCE & AI OUTPUT ═══ */}
      <div className="space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="w-7 h-7 bg-sbb-black text-white font-mono text-xs font-bold flex items-center justify-center">
              02
            </span>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-sbb-stone">
              {isEn
                ? 'TEST WHAT HAPPENS WHEN OWNED WEB COPY IS CLEANED UP'
                : 'TESTEN, WAS PASSIERT, WENN EIGENE WEBSEITEN KLAR STRUKTURIERT SIND'}
            </span>
          </div>

          <div className="flex items-center gap-1 bg-sbb-cloud p-1 border border-sbb-aluminum self-start sm:self-auto">
            <button
              type="button"
              aria-pressed={isBefore}
              onClick={() => setSourceMode('before')}
              className={`px-3 py-1.5 font-mono text-xs font-bold transition-colors cursor-pointer ${
                isBefore ? 'bg-sbb-red text-white' : 'text-zinc-700 hover:text-sbb-black hover:bg-white'
              }`}
            >
              {isEn ? 'Before: Vague PR Intro' : 'Vorher: Vage PR-Einleitung'}
            </button>
            <button
              type="button"
              aria-pressed={!isBefore}
              onClick={() => setSourceMode('after')}
              className={`px-3 py-1.5 font-mono text-xs font-bold transition-colors cursor-pointer ${
                !isBefore ? 'bg-emerald-700 text-white' : 'text-zinc-700 hover:text-sbb-black hover:bg-white'
              }`}
            >
              {isEn ? 'After: Clear Opening Facts' : 'Nachher: Klare Fakten zuerst'}
            </button>
          </div>
        </div>

        <div className="bg-white border border-sbb-aluminum p-6 sm:p-8 shadow-sm space-y-6">
          {/* Stakeholder Query */}
          <div className="bg-sbb-cloud/80 p-4 border border-sbb-aluminum flex items-center gap-3">
            <Search className="w-5 h-5 text-sbb-red shrink-0" />
            <div className="flex-1">
              <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider font-bold">
                {isEn ? 'STAKEHOLDER QUERY:' : 'STAKEHOLDER-SUCHANFRAGE:'}
              </div>
              <div className="text-base sm:text-lg font-bold text-sbb-black">«{data.stakeholder_query}»</div>
            </div>
          </div>

          {/* Owned Company Page Input (Before vs After) */}
          <div
            className={`p-5 border ${
              isBefore ? 'bg-red-50/30 border-red-200' : 'bg-emerald-50/30 border-emerald-300'
            }`}
          >
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <span
                className={`text-[10px] font-mono uppercase font-bold flex items-center gap-1.5 ${
                  isBefore ? 'text-sbb-red' : 'text-emerald-800'
                }`}
              >
                {isBefore ? (
                  <>
                    <span className="w-2 h-2 bg-sbb-red" />
                    <span>
                      {isEn
                        ? 'COMPANY PAGE INPUT: VAGUE PR PROSE (SKIPPED BY SEARCH)'
                        : 'EIGENE SEITE: VAGE PR-PROSA (VON DER SUCHE ÜBERSPRUNGEN)'}
                    </span>
                  </>
                ) : (
                  <>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                    <span>
                      {isEn
                        ? 'COMPANY PAGE INPUT: FRONT-LOADED CORE FACTS (CLEAN HTML)'
                        : 'EIGENE SEITE: KLARE FAKTEN AM ANFANG (SAUBERES HTML)'}
                    </span>
                  </>
                )}
              </span>

              {!isBefore && (
                <button
                  type="button"
                  onClick={handleCopyFactBlock}
                  className="px-3 py-1 bg-sbb-black hover:bg-zinc-800 text-white font-mono text-[10px] font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span>{isEn ? 'Copied' : 'Kopiert'}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3 text-zinc-400" />
                      <span>{isEn ? 'Copy Opening Facts' : 'Fakten kopieren'}</span>
                    </>
                  )}
                </button>
              )}
            </div>

            {isBefore ? (
              <div className="text-xs sm:text-sm text-zinc-800 italic leading-relaxed font-serif p-4 bg-white border border-red-100">
                {data.geo_optimization_fix.unstructured_pr_fluff}
              </div>
            ) : (
              <pre className="text-xs sm:text-sm text-emerald-950 font-sans leading-relaxed p-4 bg-white border border-emerald-200 overflow-x-auto whitespace-pre-wrap">
                {data.geo_optimization_fix.structured_fact_block}
              </pre>
            )}
          </div>

          {/* Resulting AI Search Answer */}
          {isBefore ? (
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-zinc-100">
                <div className="flex items-center gap-2">
                  <Bot className="w-4 h-4 text-sbb-black" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-sbb-black">
                    {isEn ? 'RESULTING AI ANSWER (WITH VAGUE OWNED COPY)' : 'KI-ANTWORT (MIT VAGER EIGENER SEITE)'}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-sbb-red bg-red-50 border border-red-200 px-2 py-0.5 font-bold">
                  {isEn ? 'CLICK RED PASSAGE [1] OR [2]' : 'ROTE PASSAGE [1] ODER [2] ANKLICKEN'}
                </span>
              </div>

              <div className="bg-zinc-50 border border-zinc-200 p-6 font-serif text-base sm:text-lg leading-relaxed text-zinc-900">
                {(() => {
                  let distortedCount = 0;
                  return data.ai_synthesis_spans.map((span: HallucinationSpan, i: number) => {
                    if (!span.isDistorted) {
                      return <span key={i}>{span.text}</span>;
                    }

                    distortedCount++;
                    const badgeIndex = distortedCount;
                    const isSelected = activeSpanIndex === i;

                    return (
                      <button
                        type="button"
                        key={i}
                        onClick={() => setActiveSpanIndex(i)}
                        aria-pressed={isSelected}
                        className={`cursor-pointer px-1.5 py-0.5 mx-0.5 transition-all inline text-left font-serif text-base sm:text-lg border ${
                          isSelected
                            ? 'bg-red-200 text-red-950 border-sbb-red ring-2 ring-sbb-red/40 underline font-medium shadow-xs'
                            : 'bg-red-100 hover:bg-red-200 text-red-950 border-red-300'
                        }`}
                      >
                        <span className="font-mono text-[10px] font-bold bg-sbb-red text-white px-1 py-0.2 mr-1 align-middle">
                          [{badgeIndex}]
                        </span>{' '}
                        {span.text}
                      </button>
                    );
                  });
                })()}
              </div>

              {activeSpanIndex !== null && data.ai_synthesis_spans[activeSpanIndex]?.correction && (
                <div className="p-4 bg-red-50/80 border-l-4 border-sbb-red flex items-start gap-3">
                  <AlertTriangle className="w-4 h-4 text-sbb-red shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-sbb-red">
                      {isEn ? 'WHAT THE AI GOT WRONG:' : 'WAS IN DIESER PASSAGE FALSCH IST:'}
                    </div>
                    <p className="text-xs text-red-950 font-sans leading-relaxed">
                      {data.ai_synthesis_spans[activeSpanIndex].correction}
                    </p>
                  </div>
                </div>
              )}

              <div className="pt-3 border-t border-zinc-100 grid grid-cols-1 md:grid-cols-2 gap-4">
                {data.distortion_root_causes.map((rc, idx) => {
                  const distortedIndices = data.ai_synthesis_spans
                    .map((s, sIdx) => (s.isDistorted ? sIdx : -1))
                    .filter((sIdx) => sIdx !== -1);
                  const targetSpanIndex = distortedIndices[idx] ?? null;
                  const isHighlighted = targetSpanIndex !== null && activeSpanIndex === targetSpanIndex;

                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => {
                        if (targetSpanIndex !== null) setActiveSpanIndex(targetSpanIndex);
                      }}
                      className={`p-4 text-left border transition-all cursor-pointer ${
                        isHighlighted
                          ? 'bg-red-50/70 border-sbb-red ring-1 ring-sbb-red/30'
                          : 'bg-sbb-cloud/50 border-sbb-aluminum hover:border-sbb-black'
                      }`}
                    >
                      <div className="text-xs font-mono font-bold text-sbb-black mb-1 flex items-center gap-1.5">
                        <span className="px-1.5 py-0.5 bg-sbb-red text-white text-[10px] font-bold">
                          [{idx + 1}]
                        </span>
                        <span>{rc.issue}</span>
                      </div>
                      <p className="text-xs text-zinc-700 leading-relaxed mb-2">{rc.description}</p>
                      <div className="text-[10px] font-mono text-sbb-stone pt-2 border-t border-zinc-200">
                        <span className="font-bold">{isEn ? 'Scraped source: ' : 'Gescrapte Quelle: '}</span>
                        <span>{rc.source_scraped}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-zinc-100">
                <div className="flex items-center gap-2">
                  <Bot className="w-4 h-4 text-emerald-700" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-950">
                    {isEn
                      ? 'TYPICAL AI ANSWER (WITH FRONT-LOADED COMPANY FACTS)'
                      : 'TYPISCHE KI-ANTWORT (MIT KLAREN FAKTEN AM ANFANG)'}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 font-bold">
                  {isEn ? 'EXTERNAL DEBATE STILL INCLUDED' : 'EXTERNE DEBATTE BLEIBT SICHTBAR'}
                </span>
              </div>

              <div className="bg-emerald-50/40 border border-emerald-300 p-6 font-serif text-base sm:text-lg leading-relaxed text-emerald-950">
                {data.ai_synthesis_spans
                  .filter((s) => !s.isDistorted)
                  .map((s) => s.text)
                  .join(' ')}{' '}
                <span className="font-sans text-sm text-zinc-700 italic">
                  {isEn
                    ? '(External media and commentators continue to debate policy and pricing trade-offs, while verified company facts are cited accurately.)'
                    : '(Externe Medien und Kommentatoren diskutieren weiter über Preis- und Politikfragen, während die geprüften Unternehmensfakten korrekt zitiert werden.)'}
                </span>
              </div>

              <div className="p-4 bg-emerald-700 text-white flex items-start gap-2.5 text-xs font-mono">
                <ShieldCheck className="w-4 h-4 text-emerald-200 shrink-0 mt-0.5" />
                <span>{data.geo_optimization_fix.verification_outcome}</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ═══ NEXT-STEP WORKFLOW BRIDGE (02 → 03) ═══ */}
      {onNavigateTab && (
        <div className="bg-sbb-black text-white border-l-4 border-sbb-red px-5 py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="space-y-0.5">
            <div className="text-[10px] font-mono text-[#FFCC00] uppercase tracking-widest font-bold">
              {isEn ? 'NEXT STEP // MODULE 02 → MODULE 03' : 'NÄCHSTER SCHRITT // MODUL 02 → MODUL 03'}
            </div>
            <p className="text-xs sm:text-sm text-zinc-200">
              {isEn
                ? 'AI search gaps diagnosed. Apply approved Golden Sources and writing rules directly inside daily drafts.'
                : 'KI-Lücken erkannt. Geprüfte Golden Sources und Schreibregeln jetzt direkt im Entwurf anwenden.'}
            </p>
          </div>
          <button
            onClick={() => {
              onNavigateTab('trending');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-4 py-2 bg-sbb-red hover:bg-red-700 text-white font-mono text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-2 cursor-pointer shrink-0 self-start sm:self-auto"
          >
            <span>{isEn ? 'Proceed to 03: Sources & Recipes' : 'Weiter zu 03: Quellen & Rezepte'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};

export default GeoAuditView;
