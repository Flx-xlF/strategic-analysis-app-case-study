import React from 'react';
import { Language } from '../../fixtures/scenarios';
import { getCockpitData, CockpitData, WorldRegionId, RegionalSynthesisRow } from '../../fixtures/cockpitFixtures';
import { ActiveTab } from '../common/CommandHeader';
import { 
  BarChart3, 
  Layers, 
  Filter, 
  ArrowRight, 
  AlertTriangle, 
  CheckCircle2, 
  TrendingUp, 
  Globe2, 
  Bot, 
  Newspaper, 
  MessageSquare, 
  ShieldAlert,
  Flame,
  BrainCircuit,
  Search,
  ExternalLink
} from 'lucide-react';

interface Props {
  scenarioId: string;
  lang: Language;
  selectedRegion: WorldRegionId;
  onSelectRegion: (reg: WorldRegionId) => void;
  onNavigateTab: (tab: ActiveTab) => void;
  isStreaming: boolean;
  streamProgress: number;
}

export const NarrativeCockpitView: React.FC<Props> = ({
  scenarioId,
  lang,
  selectedRegion,
  onSelectRegion,
  onNavigateTab,
  isStreaming,
  streamProgress
}) => {
  const data: CockpitData = getCockpitData(lang, scenarioId);
  const isEn = lang === 'en';

  const displayedRows = selectedRegion === 'all' 
    ? data.regional_synthesis 
    : data.regional_synthesis.filter(r => r.region_id === selectedRegion);

  const getStatusBadge = (status: RegionalSynthesisRow['pull_through_status']) => {
    switch (status) {
      case 'ALIGNED':
        return 'bg-emerald-50 text-emerald-800 border-emerald-300';
      case 'MIXED':
        return 'bg-amber-50 text-amber-800 border-amber-300';
      case 'AT_RISK':
        return 'bg-red-50 text-sbb-red border-red-300 font-bold';
      case 'CRITICAL':
        return 'bg-sbb-red text-white border-sbb-red font-bold';
    }
  };

  return (
    <div className="space-y-8">
      {/* ═══ WAYFINDING HEADER ═══ */}
      <div className="bg-white border border-sbb-aluminum p-6 sm:p-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-sbb-red uppercase mb-1.5">
              <BarChart3 className="w-4 h-4" />
              <span>{isEn ? 'DIRECTION 1: OUTSIDE-IN (ANALYZE & MEASURE) // MODULE 01' : 'RICHTUNG 1: OUTSIDE-IN (ANALYSIEREN & MESSEN) // MODUL 01'}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-sbb-black tracking-tight">
              {isEn ? 'Regional Narrative Synthesis & LLM Intelligence Cockpit' : 'Regionales Reputations- & KI-Synthese-Cockpit'}
            </h1>
            <p className="text-sm text-sbb-stone mt-1 max-w-3xl leading-relaxed">
              {isEn
                ? 'Synthesizes massive external streams (legacy media, social, and LLM answer engines) by world region, filtering syndicated noise through statistical models before applying forensic LLM reading.'
                : 'Aggregiert externe Medien, Social Media und KI-Antwortmaschinen nach Weltregionen. Statistische Modelle filtern Dubletten und Rauschen, bevor Sprachmodelle die Cluster forensisch bewerten.'}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-sbb-cloud border border-sbb-aluminum font-mono text-xs text-sbb-black font-bold">
              <Globe2 className="w-4 h-4 text-sbb-red" />
              <span>{isEn ? 'REGIONAL GRANULARITY: 4 HUBS' : 'REGIONALE GRANULARITÄT: 4 HUBS'}</span>
            </span>
          </div>
        </div>
      </div>

      {/* ═══ BLOCK 01 (EXECUTIVE DIAGNOSIS FIRST): WHY SURFACE SENTIMENT FAILS ═══ */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-7 h-7 bg-sbb-red text-white font-mono text-xs font-bold flex items-center justify-center">
              01
            </span>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-sbb-red">
              {isEn ? 'EXECUTIVE DIAGNOSIS: WHY SURFACE METRICS OVERLOOK CRISES' : 'EXECUTIVE-DIAGNOSE: WARUM STANDARD-SCORES KRISEN ÜBERSEHEN'}
            </span>
          </div>
          <span className="text-[10px] font-mono text-sbb-stone hidden sm:inline">
            {data.timeframe}
          </span>
        </div>

        <div className="bg-white border-2 border-sbb-black p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left: What commercial NLP tools report */}
            <div className="p-5 bg-zinc-50 border border-zinc-200 space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-zinc-200">
                <span className="text-[10px] font-mono text-zinc-500 uppercase font-bold">
                  {isEn ? 'STANDARD COMMERCIAL NLP SENTIMENT' : 'STANDARD-NLP-SENTIMENT (AUTOMATISIERT)'}
                </span>
                <span className="text-[9px] font-mono px-2 py-0.5 bg-zinc-200 text-zinc-700">
                  {data.surface_nlp_vs_forensic_reality.commercial_nlp_confidence}
                </span>
              </div>
              <div className="text-xl font-black text-zinc-700">
                {data.surface_nlp_vs_forensic_reality.commercial_nlp_sentiment}
              </div>
              <p className="text-xs text-zinc-600 leading-relaxed">
                {data.surface_nlp_vs_forensic_reality.commercial_nlp_blindspot}
              </p>
            </div>

            {/* Right: The statistical anomaly + strategic reality */}
            <div className="p-5 bg-red-50/60 border border-red-200 space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-red-200">
                <span className="text-[10px] font-mono text-sbb-red uppercase font-bold flex items-center gap-1.5">
                  <Flame className="w-3.5 h-3.5 text-sbb-red" />
                  <span>{isEn ? 'REAL REPUTATION & REIMBURSEMENT RISK' : 'ECHTES REPUTATIONS- & ERSTATTUNGSRISIKO'}</span>
                </span>
                <span className="text-[9px] font-mono px-2 py-0.5 bg-red-100 text-sbb-red font-bold">
                  {data.surface_nlp_vs_forensic_reality.statistical_proof_anchor}
                </span>
              </div>
              <div className="text-lg font-black text-sbb-red">
                {data.surface_nlp_vs_forensic_reality.forensic_reality_verdict}
              </div>
              <p className="text-xs text-zinc-800 leading-relaxed font-sans">
                {data.surface_nlp_vs_forensic_reality.forensic_reality_subtext}
              </p>
            </div>
          </div>

          {/* Direct CTA bridge to Geo Audit & Way 2 (Top-Down Enablement) */}
          <div className="mt-6 pt-5 border-t border-zinc-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="text-xs font-mono text-sbb-stone">
              <span className="font-bold text-sbb-black">{isEn ? 'Next Step: ' : 'Nächster Schritt: '}</span>
              <span>{isEn ? 'Inspect AI Search distortions in Module 02 or deploy Regional Playbook in Module 03.' : 'KI-Verzerrungen in Modul 02 prüfen oder Regional-Playbook in Modul 03 ausrollen.'}</span>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => onNavigateTab('geo')}
                className="px-4 py-2 bg-sbb-cloud hover:bg-zinc-200 border border-sbb-aluminum font-mono text-xs font-bold uppercase tracking-wider text-sbb-black transition-all cursor-pointer flex items-center gap-1.5"
              >
                <Search className="w-3.5 h-3.5 text-sbb-red" />
                <span>{isEn ? 'Inspect Raw Sources (Mod 02)' : 'Quellen prüfen (Mod 02)'}</span>
              </button>

              <button
                onClick={() => onNavigateTab('trending')}
                className="px-4 py-2 bg-sbb-black hover:bg-zinc-800 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5"
              >
                <span>{isEn ? 'Open Regional Playbook (Mod 03)' : 'Regional-Playbook öffnen (Mod 03)'}</span>
                <ArrowRight className="w-3.5 h-3.5 text-sbb-red" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ═══ BLOCK 02: WORLD REGION SYNTHESIS MATRIX ═══ */}
      <div className="space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="w-7 h-7 bg-sbb-black text-white font-mono text-xs font-bold flex items-center justify-center">
              02
            </span>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-sbb-stone">
              {isEn ? 'WORLD REGION SYNTHESIS: STATISTICAL & CHANNEL DIVERGENCE' : 'REGIONALE SYNTHESE: STATISTISCHE & KANAL-DIVERGENZ'}
            </span>
          </div>

          <div className="flex items-center gap-2 font-mono text-[10px] text-sbb-stone uppercase bg-white border border-sbb-aluminum px-3 py-1">
            <Filter className="w-3 h-3 text-sbb-red" />
            <span>{isEn ? 'Header Region Scope:' : 'Regionsfilter (Header):'}</span>
            <span className="font-bold text-sbb-black">{selectedRegion.toUpperCase()}</span>
          </div>
        </div>

        {/* Dense Industrial Brutalist Matrix Table */}
        <div className="bg-white border border-sbb-aluminum overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-sbb-cloud/80 border-b border-sbb-aluminum text-[10px] font-mono uppercase text-sbb-stone">
                <th className="p-4 font-bold">{isEn ? 'WORLD REGION & CONTEXT' : 'WELTREGION & REGULIERUNG'}</th>
                <th className="p-4 font-bold">{isEn ? 'STATISTICAL METRICS' : 'STATISTISCHE KENNZAHLEN'}</th>
                <th className="p-4 font-bold">{isEn ? 'LEGACY MEDIA FRAME' : 'LEIT- & FACHMEDIEN'}</th>
                <th className="p-4 font-bold">{isEn ? 'SOCIAL & FORUMS' : 'SOCIAL MEDIA & FOREN'}</th>
                <th className="p-4 font-bold">{isEn ? 'LLM ANSWER SYNTHESIS' : 'KI-ANTWORTMASCHINEN'}</th>
                <th className="p-4 font-bold text-right">{isEn ? 'ACTIONS' : 'AKTION'}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200">
              {displayedRows.map((row) => (
                <tr 
                  key={row.region_id}
                  className="hover:bg-zinc-50/80 transition-colors group text-xs font-sans"
                >
                  {/* Col 1: Region */}
                  <td className="p-4 align-top w-[220px]">
                    <div className="font-bold text-sm text-sbb-black">{row.region_name}</div>
                    <div className="text-[10px] font-mono text-sbb-stone mt-0.5">{row.regulatory_context}</div>
                    <div className="mt-2">
                      <span className={`inline-block px-2 py-0.5 text-[9px] font-mono uppercase border ${getStatusBadge(row.pull_through_status)}`}>
                        {row.status_label}
                      </span>
                    </div>
                  </td>

                  {/* Col 2: Statistical Metrics + Visual Corporate Alignment Bar */}
                  <td className="p-4 align-top w-[220px] font-mono">
                    <div className="space-y-1.5 text-[11px]">
                      <div className="flex justify-between">
                        <span className="text-sbb-stone">Volume:</span>
                        <span className="font-bold text-sbb-black">{row.deduped_volume.toLocaleString()} <span className="text-[9px] text-zinc-400">({row.raw_volume.toLocaleString()} raw)</span></span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sbb-stone">Velocity:</span>
                        <span className={`font-bold ${row.velocity_z_score >= 3.0 ? 'text-sbb-red' : 'text-zinc-800'}`}>
                          z = +{row.velocity_z_score}σ
                        </span>
                      </div>
                      <div className="pt-1 space-y-1">
                        <div className="flex justify-between text-[10px]">
                          <span className="text-sbb-stone">{isEn ? 'HQ Narrative Fit:' : 'HQ-Narrativ-Fit:'}</span>
                          <span className={`font-bold ${row.cosine_alignment < 0.45 ? 'text-sbb-red' : row.cosine_alignment > 0.7 ? 'text-emerald-700' : 'text-amber-800'}`}>
                            {Math.round(row.cosine_alignment * 100)}% ({row.cosine_alignment.toFixed(2)})
                          </span>
                        </div>
                        <div className="w-full h-2 bg-zinc-200 flex overflow-hidden" title={isEn ? 'Cosine alignment with HQ corporate narrative benchmark (1.00)' : 'Cosinus-Übereinstimmung mit HQ-Soll-Narrativ (1.00)'}>
                          <div
                            className={`h-full ${
                              row.cosine_alignment < 0.45
                                ? 'bg-sbb-red'
                                : row.cosine_alignment > 0.7
                                ? 'bg-emerald-600'
                                : 'bg-amber-500'
                            }`}
                            style={{ width: `${Math.round(row.cosine_alignment * 100)}%` }}
                          />
                        </div>
                        <div className="text-[9px] text-zinc-400 flex justify-between">
                          <span>0%</span>
                          <span>{isEn ? 'Target: 100%' : 'Soll: 100%'}</span>
                        </div>
                      </div>
                    </div>
                  </td>

                  {/* Col 3: Legacy Media */}
                  <td className="p-4 align-top max-w-[260px]">
                    <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold text-sbb-stone uppercase mb-1">
                      <Newspaper className="w-3.5 h-3.5 text-zinc-600" />
                      <span>{isEn ? 'DOMINANT FRAME' : 'DOMINANTER FRAME'}</span>
                    </div>
                    <p className="text-zinc-800 leading-snug">
                      {row.legacy_media_frame}
                    </p>
                  </td>

                  {/* Col 4: Social Forums */}
                  <td className="p-4 align-top max-w-[240px]">
                    <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold text-sbb-stone uppercase mb-1">
                      <MessageSquare className="w-3.5 h-3.5 text-zinc-600" />
                      <span>{isEn ? 'COMMUNITY CHATTER' : 'COMMUNITY-DISKUSSION'}</span>
                    </div>
                    <p className="text-zinc-800 leading-snug">
                      {row.social_forum_frame}
                    </p>
                  </td>

                  {/* Col 5: LLM Synthesis + Visual Distortion Gap Bar */}
                  <td className="p-4 align-top max-w-[290px]">
                    <div className="flex items-center justify-between text-[10px] font-mono font-bold uppercase mb-1">
                      <span className="flex items-center gap-1 text-zinc-700">
                        <Bot className="w-3.5 h-3.5 text-sbb-red" />
                        <span>AI SEARCH SYNTHESIS</span>
                      </span>
                      <span className={`px-1.5 py-0.2 border text-[9px] ${
                        row.llm_hallucination_rate > 35 ? 'bg-red-50 text-sbb-red border-red-200' : 'bg-emerald-50 text-emerald-800 border-emerald-200'
                      }`}>
                        {row.llm_hallucination_rate}% {isEn ? 'Distorted' : 'Verzerrt'}
                      </span>
                    </div>
                    {/* Visual Split Bar: Aligned Corporate Facts vs. LLM Distortion */}
                    <div className="mb-2 space-y-0.5 font-mono">
                      <div className="w-full h-1.5 bg-zinc-200 flex overflow-hidden">
                        <div
                          className="h-full bg-emerald-600"
                          style={{ width: `${Math.max(0, 100 - row.llm_hallucination_rate)}%` }}
                          title={isEn ? 'Aligned with Corporate Facts' : 'Faktentreu zum Unternehmens-Narrativ'}
                        />
                        <div
                          className="h-full bg-sbb-red"
                          style={{ width: `${Math.min(100, row.llm_hallucination_rate)}%` }}
                          title={isEn ? 'LLM Distortion / Hallucination Share' : 'Anteil KI-Faktenverzerrung'}
                        />
                      </div>
                      <div className="flex justify-between text-[9px] text-zinc-500">
                        <span className="text-emerald-700 font-bold">
                          {100 - row.llm_hallucination_rate}% {isEn ? 'Fact-Aligned' : 'Faktentreu'}
                        </span>
                        <span className="text-sbb-red font-bold">
                          {row.llm_hallucination_rate}% {isEn ? 'Gap' : 'Abweichung'}
                        </span>
                      </div>
                    </div>
                    <p className="text-zinc-800 leading-snug">
                      {row.llm_synthesis_frame}
                    </p>
                  </td>

                  {/* Col 6: Action */}
                  <td className="p-4 align-top text-right whitespace-nowrap">
                    <button
                      onClick={() => {
                        onSelectRegion(row.region_id);
                        onNavigateTab('geo');
                      }}
                      className="px-3 py-1.5 bg-sbb-cloud hover:bg-zinc-200 border border-sbb-aluminum font-mono text-[10px] font-bold uppercase text-sbb-black transition-colors flex items-center gap-1 ml-auto cursor-pointer"
                    >
                      <span>{isEn ? 'Inspect Cluster' : 'Cluster prüfen'}</span>
                      <ArrowRight className="w-3 h-3 text-sbb-red" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ═══ BLOCK 03: METHODOLOGY & BENCHMARK (DATA FUNNEL + TARGET NARRATIVE PILLARS) ═══ */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-7 h-7 bg-sbb-black text-white font-mono text-xs font-bold flex items-center justify-center">
              03
            </span>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-sbb-stone">
              {isEn ? 'METHODOLOGY & BENCHMARK: STATISTICAL FUNNEL & HQ NARRATIVE PILLARS' : 'METHODIK & MASSSTAB: DATENTRICHTER & UNTERNEHMENS-NARRATIVE'}
            </span>
          </div>
          <span className="text-[10px] font-mono text-sbb-stone hidden sm:inline">
            {isEn ? 'Ground Truth Vector Anchors' : 'Referenz-Vektoren für Cosinus-Abgleich'}
          </span>
        </div>

        {/* 4-Stage Statistical + LLM Filtering Pipeline Funnel */}
        <div className="bg-white border border-sbb-aluminum p-6 space-y-3">
          <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-sbb-stone font-bold">
            <span>{isEn ? 'MULTI-STAGE DATA FUNNEL (COPING WITH TENS OF THOUSANDS OF EXTERNAL ITEMS)' : 'MEHRSTUFIGE STATISTISCHE DATENPIPELINE (BEWÄLTIGUNG VON ZEHNTAUSENDEN MELDUNGEN)'}</span>
            <span>{data.timeframe}</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {/* Step 1 */}
            <div className="p-4 bg-sbb-cloud/60 border border-sbb-aluminum">
              <div className="flex items-center justify-between text-[10px] font-mono text-sbb-stone mb-1 font-bold">
                <span>01 // INGEST & DEDUP</span>
                <span className="text-zinc-500">MinHash LSH</span>
              </div>
              <div className="text-2xl font-black text-sbb-black tracking-tight tabular-nums">
                {data.pipeline.raw_ingested_72h.toLocaleString()}
              </div>
              <p className="text-[11px] text-zinc-600 mt-1">
                {isEn 
                  ? `Collapsed ${data.pipeline.syndicated_reprints_collapsed.toLocaleString()} syndicated wire reprints into ${data.pipeline.minhash_deduped_unique.toLocaleString()} unique items.` 
                  : `${data.pipeline.syndicated_reprints_collapsed.toLocaleString()} Agentur-Dubletten auf ${data.pipeline.minhash_deduped_unique.toLocaleString()} Unikate verdichtet.`}
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-4 bg-sbb-cloud/60 border border-sbb-aluminum">
              <div className="flex items-center justify-between text-[10px] font-mono text-sbb-stone mb-1 font-bold">
                <span>02 // VECTOR CLUSTER</span>
                <span className="text-zinc-500">HDBSCAN + UMAP</span>
              </div>
              <div className="text-2xl font-black text-sbb-black tracking-tight tabular-nums">
                {data.pipeline.hdbscan_clusters_identified} <span className="text-xs font-normal text-sbb-stone">{isEn ? 'Clusters' : 'Cluster'}</span>
              </div>
              <p className="text-[11px] text-zinc-600 mt-1">
                {isEn 
                  ? `Filtered out ${data.pipeline.off_topic_noise_filtered_pct}% irrelevant ambient chatter; grouped remainder into distinct narrative vectors.` 
                  : `${data.pipeline.off_topic_noise_filtered_pct}% themenfremdes Rauschen gefiltert; Rest in distinkte Narrativ-Vektoren gruppiert.`}
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-4 bg-sbb-cloud/60 border border-sbb-aluminum">
              <div className="flex items-center justify-between text-[10px] font-mono text-sbb-stone mb-1 font-bold">
                <span>03 // STATISTICAL SCORE</span>
                <span className="text-sbb-red font-bold">z-Score + Cosine</span>
              </div>
              <div className="text-2xl font-black text-sbb-red tracking-tight tabular-nums">
                {data.pipeline.peak_z_score} <span className="text-xs font-normal text-sbb-stone">{isEn ? 'Anomaly' : 'Spike'}</span>
              </div>
              <p className="text-[11px] text-zinc-600 mt-1">
                {data.pipeline.peak_anomaly_summary}
              </p>
            </div>

            {/* Step 4 */}
            <div className="p-4 bg-sbb-cloud/60 border border-sbb-aluminum">
              <div className="flex items-center justify-between text-[10px] font-mono text-sbb-stone mb-1 font-bold">
                <span>04 // TARGETED LLM PASS</span>
                <span className="text-zinc-700 font-bold">Deep Forensics</span>
              </div>
              <div className="text-2xl font-black text-sbb-black tracking-tight tabular-nums">
                {data.pipeline.centroid_texts_analyzed_by_llm} <span className="text-xs font-normal text-sbb-stone">{isEn ? 'Centroids' : 'Centroids'}</span>
              </div>
              <p className="text-[11px] text-zinc-600 mt-1">
                {isEn 
                  ? `LLMs read only the ${data.pipeline.centroid_texts_analyzed_by_llm} cluster centroid texts for nuance, irony, and hallucination audits.` 
                  : `Große Sprachmodelle analysieren gezielt nur die ${data.pipeline.centroid_texts_analyzed_by_llm} repräsentativen Centroid-Texte.`}
              </p>
            </div>
          </div>
        </div>

        {/* Target Corporate Narrative Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.target_narratives.map((pillar) => (
            <div key={pillar.id} className="bg-white border border-sbb-aluminum p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-2 mb-3 border-b border-zinc-100">
                  <span className="text-xs font-mono font-bold text-sbb-red">
                    {isEn ? `PILLAR ${pillar.pillar_number}` : `SÄULE ${pillar.pillar_number}`}
                  </span>
                  <span className="text-[10px] font-mono text-zinc-500 truncate max-w-[200px]" title={pillar.target_vector_anchor}>
                    {pillar.target_vector_anchor}
                  </span>
                </div>
                <h3 className="font-bold text-base text-sbb-black mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs text-zinc-700 leading-relaxed mb-4">
                  {pillar.core_thesis}
                </p>
              </div>

              <div className="pt-3 border-t border-zinc-100">
                <div className="text-[10px] font-mono uppercase text-sbb-stone mb-1 font-bold">
                  {isEn ? 'Mandatory Proof Points:' : 'Verbindliche Belege:'}
                </div>
                <ul className="space-y-1 text-[11px] text-zinc-600">
                  {pillar.mandatory_proof_points.map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-sbb-red font-bold">›</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NarrativeCockpitView;
