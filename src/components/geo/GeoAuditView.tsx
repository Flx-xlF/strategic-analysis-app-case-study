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
  Flame, 
  Check, 
  Copy, 
  ShieldCheck, 
  Newspaper,
  Layers,
  ArrowRight,
  Filter
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

export const GeoAuditView: React.FC<Props> = ({
  scenarioId,
  lang,
  selectedRegion,
  onSelectRegion,
  onNavigateTab,
  isStreaming,
  streamProgress
}) => {
  const data = getGeoData(lang, scenarioId);
  const [copied, setCopied] = useState(false);
  const [activeSpanIndex, setActiveSpanIndex] = useState<number | null>(1); // default select first distortion
  const isEn = lang === 'en';
  const locale = isEn ? 'en-US' : 'de-CH';

  const handleCopySchema = () => {
    navigator.clipboard.writeText(data.geo_optimization_fix.structured_fact_block);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const filteredCentroids = selectedRegion === 'all'
    ? data.active_cluster.centroid_articles
    : data.active_cluster.centroid_articles.filter(a => a.region === selectedRegion);

  return (
    <div className="space-y-8">
      {/* ═══ WAYFINDING HEADER & EXECUTIVE TELEMETRY RIBBON ═══ */}
      <div className="bg-white border border-sbb-aluminum p-6 sm:p-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-6 border-b border-zinc-100 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-sbb-red uppercase mb-1.5">
              <BrainCircuit className="w-4 h-4" />
              <span>{isEn ? 'STEP 2: INSPECT SOURCES & AI ANSWERS // MODULE 02' : 'SCHRITT 2: QUELLEN & KI-ANTWORTEN PRÜFEN // MODUL 02'}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-sbb-black tracking-tight">
              {isEn ? 'Topic Cluster & AI Search Answer Check' : 'Themen-Cluster & KI-Suchantwort-Check'}
            </h1>
            <p className="text-sm text-sbb-stone mt-1 max-w-3xl leading-relaxed">
              {isEn
                ? 'Inspects the representative articles driving this cluster, where AI search engines mix up or omit facts across n=20 test runs, and how clear opening facts fix the summary.'
                : 'Zeigt die repräsentativen Artikel dieses Clusters, wo KI-Suchmaschinen Fakten über n=20 Testläufe verzerren und wie klare Fakten am Textanfang die Zusammenfassung korrigieren.'}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-red-50 border border-red-200 font-mono text-xs text-red-700 font-bold">
              <Flame className="w-3.5 h-3.5" />
              <span>{isEn ? `CLUSTER VELOCITY: +${data.active_cluster.z_score}σ` : `CLUSTER-DYNAMIK: +${data.active_cluster.z_score}σ`}</span>
            </span>
          </div>
        </div>

        {/* Statistical Cluster Profile Card */}
        <div className="p-5 bg-sbb-cloud/60 border border-sbb-aluminum space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-200 pb-2">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 bg-sbb-black text-white font-mono text-xs font-bold">
                {data.active_cluster.cluster_id}
              </span>
              <h2 className="text-base font-bold text-sbb-black">
                {data.active_cluster.name}
              </h2>
            </div>
            <div className="text-xs font-mono text-sbb-stone">
              <span className="font-bold text-sbb-black">{data.active_cluster.deduped_volume.toLocaleString(locale)}</span> {isEn ? 'Deduplicated Items' : 'Deduplizierte Artikel'}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div>
              <span className="font-mono text-sbb-stone uppercase tracking-wider font-bold">{isEn ? 'Dominant Region: ' : 'Dominante Region: '}</span>
              <span className="text-sbb-black font-medium">{data.active_cluster.dominant_region}</span>
            </div>
            <div>
              <span className="font-mono text-sbb-red uppercase tracking-wider font-bold">{isEn ? 'Divergence from Target: ' : 'Abweichung von Ziel-Narrativ: '}</span>
              <span className="text-zinc-800">{data.active_cluster.target_pillar_gap}</span>
            </div>
          </div>
        </div>
      </div>

      {/* ═══ STEP 01: CENTROID ARTICLES IN THIS CLUSTER ═══ */}
      <div className="space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="w-7 h-7 bg-sbb-black text-white font-mono text-xs font-bold flex items-center justify-center">
              01
            </span>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-sbb-stone">
              {isEn ? 'REPRESENTATIVE ARTICLES IN THIS CLUSTER (MEDIA & FORUMS)' : 'REPRÄSENTATIVE ARTIKEL IN DIESEM CLUSTER (MEDIEN & FOREN)'}
            </span>
          </div>

          {/* Single-Source Region Scope Indicator */}
          <div className="flex items-center gap-2 font-mono text-[10px] text-zinc-700 uppercase bg-white border border-sbb-aluminum px-3 py-1">
            <Filter className="w-3 h-3 text-red-700" />
            <span>{isEn ? 'Region Scope:' : 'Regionsfilter:'}</span>
            <span className="font-bold text-sbb-black">
              {selectedRegion.toUpperCase()} ({filteredCentroids.length}/{data.active_cluster.centroid_articles.length} {isEn ? 'Local' : 'Lokal'})
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

        {/* Empty state banner when specific region has no local centroids */}
        {selectedRegion !== 'all' && filteredCentroids.length === 0 && (
          <div className="p-3 bg-amber-50 border border-amber-300 text-xs text-amber-900 font-mono flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0" />
            <span>
              {isEn 
                ? `No local sample articles originated directly in ${selectedRegion.toUpperCase()}. Displaying dominant cross-regional cluster sources synthesized globally by AI search engines.`
                : `Keine lokalen Beispiel-Artikel stammen direkt aus ${selectedRegion.toUpperCase()}. Anzeige der dominanten überregionalen Cluster-Quellen, die KI-Suchmaschinen global synthetisieren.`}
            </span>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(filteredCentroids.length > 0 ? filteredCentroids : data.active_cluster.centroid_articles).map((art: CentroidArticle) => {
            const isAligned = art.cosine_to_target >= 0.65;

            return (
              <div key={art.id} className="bg-white border border-sbb-aluminum p-6 flex flex-col justify-between shadow-sm">
                <div>
                  <div className="flex items-center justify-between pb-2 mb-3 border-b border-zinc-100">
                    <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase">
                      {art.outlet}
                    </span>
                    <span className="text-[9px] font-mono px-2 py-0.5 bg-zinc-100 text-zinc-700 border border-zinc-200">
                      {art.tier}
                    </span>
                  </div>
                  <h3 className="font-bold text-sm text-sbb-black leading-snug mb-3">
                    «{art.headline}»
                  </h3>
                  <p className="text-xs text-zinc-600 leading-relaxed italic mb-4 border-l-2 border-zinc-300 pl-3">
                    {art.excerpt}
                  </p>
                </div>

                <div className="pt-3 border-t border-zinc-100 space-y-1.5 font-mono text-[10px]">
                  <div className="flex justify-between">
                    <span className="text-zinc-500">{isEn ? 'Match with Company Position:' : 'Passung zur Grundposition:'}</span>
                    <span className={`font-bold ${isAligned ? 'text-emerald-700' : art.cosine_to_target < 0.35 ? 'text-sbb-red' : 'text-amber-800'}`}>
                      {Math.round(art.cosine_to_target * 100)}% ({art.cosine_to_target.toFixed(2)})
                    </span>
                  </div>
                  <div className={`truncate ${isAligned ? 'text-emerald-800' : 'text-sbb-red'}`}>
                    <span className="font-bold">{isAligned ? (isEn ? 'Aligns with: ' : 'Stützt: ') : (isEn ? 'Contradicts: ' : 'Widerspricht: ')}</span>
                    {art.violated_pillar}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ═══ STEP 02: STAKEHOLDER QUERY, VISUAL NARRATIVE GAP & AI SYNTHESIS ═══ */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <span className="w-7 h-7 bg-sbb-black text-white font-mono text-xs font-bold flex items-center justify-center">
            02
          </span>
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-sbb-stone">
            {isEn ? 'VISUALIZING THE GAP: CORPORATE NARRATIVE VS. AI SEARCH OUTPUT' : 'VISUELLER ABGLEICH: UNTERNEHMENS-NARRATIV VS. KI-SUCHAUSGABE'}
          </span>
        </div>

        <div className="bg-white border border-sbb-aluminum p-6 sm:p-8 shadow-sm space-y-6">
          {/* Visual Comparison Strip: Corporate Benchmark vs. Current LLM Output vs. Post-GEO Output */}
          <div className="p-5 bg-sbb-cloud/60 border border-sbb-aluminum space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-zinc-200">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-sbb-black">
                {isEn
                  ? 'SOURCE ALIGNMENT & AI ANSWER CHECK'
                  : 'QUELLEN-ABGLEICH & KI-ANTWORT-CHECK'}
              </span>
              <span className="text-[10px] font-mono text-sbb-stone">
                {isEn ? `Engine Audited: ${data.queried_engine}` : `Geprüfte Engine: ${data.queried_engine}`}
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 font-mono text-xs">
              {/* Bar 1: Source Cluster Alignment with Corporate Pillars */}
              <div className="p-3.5 bg-white border border-zinc-200 space-y-2">
                <div className="flex items-center justify-between text-[10px] text-sbb-stone uppercase font-bold">
                  <span>{isEn ? '1. SCRAPED MEDIA ALIGNMENT' : '1. MEDIEN-ÜBEREINSTIMMUNG'}</span>
                  <span className="text-sbb-red font-bold">
                    {Math.round(
                      (data.active_cluster.centroid_articles.reduce((acc, a) => acc + a.cosine_to_target, 0) /
                        Math.max(1, data.active_cluster.centroid_articles.length)) *
                        100
                    )}
                    % {isEn ? 'Fit' : 'Fit'}
                  </span>
                </div>
                <div className="w-full h-2.5 bg-zinc-200 flex overflow-hidden">
                  <div
                    className="h-full bg-amber-500"
                    style={{
                      width: `${Math.round(
                        (data.active_cluster.centroid_articles.reduce((acc, a) => acc + a.cosine_to_target, 0) /
                          Math.max(1, data.active_cluster.centroid_articles.length)) *
                          100
                      )}%`
                    }}
                  />
                </div>
                <p className="text-[11px] font-sans text-zinc-600 leading-snug">
                  {isEn
                    ? 'External trade articles omit corporate context, creating an incomplete retrieval base for LLMs.'
                    : 'Externe Fachartikel lassen Unternehmenskontext weg und erzeugen eine verzerrte Datenbasis für LLMs.'}
                </p>
              </div>

              {/* Bar 2: Unsupervised LLM Search Output (Before GEO) */}
              <div className="p-3.5 bg-red-50/40 border border-red-200 space-y-2">
                <div className="flex items-center justify-between text-[10px] uppercase font-bold">
                  <span className="text-sbb-black">{isEn ? '2. CURRENT AI ANSWER (BEFORE FIX)' : '2. AKTUELLE KI-ANTWORT (VOR KORREKTUR)'}</span>
                  <span className="text-sbb-red">{data.hallucination_rate}% {isEn ? 'Distorted' : 'Verzerrt'}</span>
                </div>
                <div className="w-full h-2.5 bg-zinc-200 flex overflow-hidden">
                  <div
                    className="h-full bg-zinc-600"
                    style={{ width: `${Math.max(0, 100 - data.hallucination_rate)}%` }}
                    title={isEn ? 'Accurate Context' : 'Korrekter Kontext'}
                  />
                  <div
                    className="h-full bg-sbb-red"
                    style={{ width: `${Math.min(100, data.hallucination_rate)}%` }}
                    title={isEn ? 'Hallucinated / Conflated Claims' : 'Halluzinierte / vermischte Aussagen'}
                  />
                </div>
                <div className="flex justify-between text-[10px] text-zinc-600">
                  <span>{100 - data.hallucination_rate}% {isEn ? 'Corporate Facts' : 'Faktentreu'}</span>
                  <span className="text-red-700 font-bold">{data.hallucination_rate}% {isEn ? 'Narrative Drift' : 'Narrativ-Drift'}</span>
                </div>
              </div>

              {/* Bar 3: Search-Grounded LLM Output (After Answer-First GEO Passage Block) */}
              <div className="p-3.5 bg-emerald-50/40 border border-emerald-300 space-y-2">
                <div className="flex items-center justify-between text-[10px] uppercase font-bold">
                  <span className="text-emerald-950">{isEn ? '3. AFTER CLEAR FACT BLOCK (n=20)' : '3. MIT KLAREM FAKTENBLOCK (n=20)'}</span>
                  <span className="text-emerald-700">~95% {isEn ? 'Accurate' : 'Korrekt'}</span>
                </div>
                <div className="w-full h-2.5 bg-zinc-200 flex overflow-hidden">
                  <div className="h-full bg-emerald-600" style={{ width: '95%' }} />
                  <div className="h-full bg-amber-400" style={{ width: '5%' }} />
                </div>
                <div className="flex justify-between text-[10px] text-emerald-900">
                  <span className="font-bold">95% {isEn ? 'Accurate in Test Runs (n=20)' : 'Korrekt in Testläufen (n=20)'}</span>
                  <span>~5% {isEn ? 'Remaining Variance' : 'Restabweichung'}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Simulated Query Bar */}
          <div className="bg-sbb-cloud/80 p-4 border border-sbb-aluminum flex items-center gap-3">
            <Search className="w-5 h-5 text-sbb-red shrink-0" />
            <div className="flex-1">
              <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider font-bold">
                {(() => {
                  if (scenarioId === 'alpine_transit_crisis') {
                    return isEn ? 'STAKEHOLDER QUERY (PASSENGER, COMMUTER, JOURNALIST):' : 'STAKEHOLDER-SUCHANFRAGE (FAHRGAST, PENDLER, MEDIEN):';
                  } else if (scenarioId === 'esg_investigation') {
                    return isEn ? 'STAKEHOLDER QUERY (INVESTIGATIVE DESK, ESG ANALYST, INVESTOR):' : 'STAKEHOLDER-SUCHANFRAGE (RECHERCHEDESK, ESG-ANALYST, ANLEGER):';
                  } else if (scenarioId === 'health_data_breach') {
                    return isEn ? 'STAKEHOLDER QUERY (PATIENT, PHYSICIAN, PRIVACY ADVOCATE):' : 'STAKEHOLDER-SUCHANFRAGE (PATIENT, ARZT, DATENSCHÜTZER):';
                  }
                  return isEn ? 'STAKEHOLDER QUERY (PHYSICIAN, JOURNALIST, INVESTOR):' : 'STAKEHOLDER-SUCHANFRAGE (ARZT, JOURNALIST, INVESTOR):';
                })()}
              </div>
              <div className="text-base sm:text-lg font-bold text-sbb-black">
                «{data.stakeholder_query}»
              </div>
            </div>
          </div>

          {/* AI Output with Interactive Highlighting */}
          <div>
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-zinc-100">
              <div className="flex items-center gap-2">
                <Bot className="w-4 h-4 text-sbb-black" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-sbb-black">
                  {isEn ? 'CURRENT AI SEARCH ANSWER (BEFORE FIX)' : 'AKTUELLE KI-SUCHANTWORT (VOR KORREKTUR)'}
                </span>
              </div>
              <span className="text-[10px] font-mono text-sbb-red bg-red-50 border border-red-200 px-2 py-0.5 font-bold">
                {isEn ? 'CLICK RED PASSAGE [1] OR [2] TO SEE WHAT IS WRONG' : 'ROTE PASSAGE [1] ODER [2] ANKLICKEN'}
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
                      <span className="font-mono text-[10px] font-bold bg-sbb-red text-white px-1 py-0.2 mr-1 rounded-xs align-middle">
                        [{badgeIndex}]
                      </span>{' '}
                      {span.text}
                    </button>
                  );
                });
              })()}
            </div>
          </div>

          {/* Active Distortion Callout */}
          {activeSpanIndex !== null && data.ai_synthesis_spans[activeSpanIndex]?.correction && (
            <div className="p-4 bg-red-50/80 border-l-4 border-sbb-red flex items-start gap-3 animate-fadeIn">
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

          {/* Root Causes Grid */}
          <div className="pt-4 border-t border-zinc-100">
            <div className="text-[10px] font-mono text-sbb-stone uppercase tracking-wider mb-3">
              {isEn ? 'WHY THE AI ENGINE DISTORTED THE FACTS:' : 'WARUM DIE KI DIE BOTSCHAFT VERZERRT HAT:'}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {data.distortion_root_causes.map((rc, idx) => (
                <div key={idx} className="p-4 bg-sbb-cloud/50 border border-sbb-aluminum">
                  <div className="text-xs font-mono font-bold text-sbb-black mb-1 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-sbb-red" />
                    <span>{rc.issue}</span>
                  </div>
                  <p className="text-xs text-zinc-700 leading-relaxed mb-3">
                    {rc.description}
                  </p>
                  <div className="text-[10px] font-mono text-sbb-stone pt-2 border-t border-zinc-200">
                    <span className="font-bold">{isEn ? 'Scraped source: ' : 'Gescrapte Quelle: '}</span>
                    <span>{rc.source_scraped}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Diagnostic Comparison: Automated NLP Tool vs Strategic Human Judgment */}
          {data.llm_limitation_test && (
            <div className="pt-5 border-t border-zinc-200 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-sbb-stone">
                  {isEn ? 'WHY AUTOMATED SENTIMENT SCORES MISSED THIS RISK' : 'WARUM AUTOMATISCHES SENTIMENT DIESES RISIKO ÜBERSAH'}
                </span>
                <span className="text-[10px] font-mono text-sbb-red font-bold">
                  {isEn ? 'Why naive automation fails' : 'Warum reine Automatisierung versagt'}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                {/* Left: Automated NLP Tool */}
                <div className="p-4 bg-zinc-50 border border-zinc-200 space-y-2">
                  <div className="flex items-center justify-between pb-1.5 border-b border-zinc-200">
                    <span className="font-mono text-[10px] text-zinc-500 uppercase font-bold">
                      {isEn ? 'Commercial Tool Assessment' : 'Kommerzielles NLP-Tool'}
                    </span>
                    <span className="font-mono text-[9px] px-1.5 py-0.5 bg-zinc-200 text-zinc-700">
                      {data.llm_limitation_test.automated_tool_verdict.confidence}
                    </span>
                  </div>
                  <div className="font-bold text-zinc-800 text-sm">
                    {data.llm_limitation_test.automated_tool_verdict.sentiment}
                  </div>
                  <p className="text-zinc-600 leading-relaxed">
                    {data.llm_limitation_test.automated_tool_verdict.flawed_assessment}
                  </p>
                  <div className="text-[10px] font-mono text-zinc-500 pt-1.5">
                    Keywords: {data.llm_limitation_test.automated_tool_verdict.keywords_detected.join(', ')}
                  </div>
                </div>

                {/* Right: Strategic Human Analysis */}
                <div className="p-4 bg-red-50/50 border border-red-200 space-y-2">
                  <div className="flex items-center justify-between pb-1.5 border-b border-red-200">
                    <span className="font-mono text-[10px] text-sbb-red uppercase font-bold">
                      {isEn ? 'Human Strategic Diagnosis' : 'Menschliche Strategie-Einordnung'}
                    </span>
                    <span className="font-mono text-[9px] px-1.5 py-0.5 bg-red-100 text-sbb-red font-bold">
                      {data.llm_limitation_test.strategic_human_analysis.risk_rating}
                    </span>
                  </div>
                  <div className="font-bold text-sbb-red text-sm">
                    {data.llm_limitation_test.strategic_human_analysis.subtext_decoded}
                  </div>
                  <p className="text-zinc-800 leading-relaxed">
                    <span className="font-bold">{isEn ? 'Regulatory / Business Implication: ' : 'Regulatorische Folge: '}</span>
                    {data.llm_limitation_test.strategic_human_analysis.regulatory_implication}
                  </p>
                  <div className="text-[11px] font-mono text-sbb-black pt-1.5 border-t border-red-100">
                    <span className="font-bold text-sbb-red">{isEn ? 'Action: ' : 'Handlungsempfehlung: '}</span>
                    {data.llm_limitation_test.strategic_human_analysis.recommended_action}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ═══ STEP 03: THE GEO FIX (ANSWER-FIRST PASSAGE & EVIDENCE BLOCK) ═══ */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <span className="w-7 h-7 bg-sbb-black text-white font-mono text-xs font-bold flex items-center justify-center">
            03
          </span>
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-sbb-stone">
            {isEn ? 'BEFORE & AFTER: REWRITING VAGUE PR COPY INTO CLEAR FACTS' : 'VORHER & NACHHER: VAGE PR-PROSA VS. KLARE FAKTEN'}
          </span>
        </div>

        <div className="bg-white border border-sbb-aluminum p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-zinc-100 gap-3">
            <div>
              <h3 className="text-lg font-bold text-sbb-black">
                {isEn
                  ? 'Front-Loading Core Facts for Newsrooms, Owned Pages & AI Search'
                  : 'Kernaussagen und Fakten an den Anfang stellen'}
              </h3>
              <p className="text-xs text-sbb-stone mt-0.5 max-w-3xl leading-relaxed">
                {isEn 
                  ? 'Vague PR intros get cut off when search engines retrieve passages. Putting the core conclusion and key numbers in the opening paragraph gives AI search engines and journalists clear facts to cite.' 
                  : 'Vage PR-Einleitungen fallen beim Such-Retrieval oft weg. Wer Kernaussage und Zahlen direkt in den ersten Absatz stellt, gibt KI-Suchmaschinen und Medien klare Fakten zum Zitieren.'}
              </p>
            </div>

            <button
              onClick={handleCopySchema}
              className="px-4 py-2 bg-sbb-black hover:bg-zinc-800 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer self-start sm:self-auto shrink-0"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{isEn ? 'Fact Block Copied' : 'Faktenblock kopiert'}</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-zinc-400" />
                  <span>{isEn ? 'Copy Fact Block' : 'Faktenblock kopieren'}</span>
                </>
              )}
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Before: Unstructured Fluff */}
            <div className="p-5 bg-red-50/40 border border-red-200 flex flex-col justify-between">
              <div>
                <div className="text-[10px] font-mono text-sbb-red uppercase font-bold mb-2 flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-sbb-red" />
                  <span>{isEn ? 'BEFORE: VAGUE PR INTRO (SKIPPED BY SEARCH)' : 'VORHER: VAGE PR-FLOSKELN (VON DER SUCHE ÜBERSPRUNGEN)'}</span>
                </div>
                <div className="text-xs text-zinc-800 italic leading-relaxed font-serif p-4 bg-white border border-red-100">
                  {data.geo_optimization_fix.unstructured_pr_fluff}
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-red-100 text-[10px] font-mono text-sbb-red">
                {isEn ? 'Result: Search systems skip vague intros and pull quotes from critical press coverage instead.' : 'Ergebnis: Suchsysteme überspringen vage Einleitungen und zitieren stattdessen kritische Medienberichte.'}
              </div>
            </div>

            {/* After: Answer-First Self-Contained GEO Passage Block */}
            <div className="p-5 bg-emerald-50/40 border border-emerald-300 flex flex-col justify-between">
              <div>
                <div className="text-[10px] font-mono text-emerald-800 uppercase font-bold mb-2 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{isEn ? 'AFTER: CLEAR OPENING FACTS & KEY NUMBERS (WEBSITE HTML)' : 'NACHHER: KLARE FAKTEN & ZAHLEN AM ANFANG (WEBSITE-HTML)'}</span>
                </div>
                <pre className="text-xs text-emerald-950 font-mono leading-relaxed p-4 bg-white border border-emerald-200 overflow-x-auto whitespace-pre-wrap">
                  {data.geo_optimization_fix.structured_fact_block}
                </pre>
              </div>

              {/* Verified Result Banner */}
              <div className="mt-4 p-3 bg-emerald-700 text-white flex items-center gap-2 text-xs font-mono">
                <ShieldCheck className="w-4 h-4 text-emerald-200 shrink-0" />
                <span>{data.geo_optimization_fix.verification_outcome}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══ NEXT-STEP WORKFLOW BRIDGE (02 → 03) ═══ */}
      {onNavigateTab && (
        <div className="bg-sbb-black text-white border-l-4 border-sbb-red p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="text-[10px] font-mono text-[#FFCC00] uppercase tracking-widest font-bold">
              {isEn ? 'NEXT STEP // MODULE 02 → MODULE 03' : 'NÄCHSTER SCHRITT // MODUL 02 → MODUL 03'}
            </div>
            <p className="text-xs sm:text-sm text-zinc-200">
              {isEn
                ? 'AI search distortion diagnosed. Now lock onto approved Golden Sources and apply the 4 shared writing rules across regional drafts.'
                : 'KI-Verzerrung erkannt. Nutzen Sie nun geprüfte Golden Sources und die 4 Schreibregeln für regionale Entwürfe.'}
            </p>
          </div>
          <button
            onClick={() => {
              onNavigateTab('trending');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-4 py-2.5 bg-sbb-red hover:bg-red-700 text-white font-mono text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-2 cursor-pointer shrink-0 self-start sm:self-auto"
          >
            <span>{isEn ? 'Proceed to 03: Regional Playbook' : 'Weiter zu 03: Regionales Playbook'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};

export default GeoAuditView;
