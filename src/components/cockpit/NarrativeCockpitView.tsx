import React, { useState } from 'react';
import { Language } from '../../fixtures/scenarios';
import { getCockpitData, CockpitData, WorldRegionId, RegionalSynthesisRow } from '../../fixtures/cockpitFixtures';
import { ActiveTab } from '../common/CommandHeader';
import { 
  BarChart3, 
  Filter, 
  ArrowRight, 
  Globe2, 
  Bot, 
  Newspaper, 
  MessageSquare, 
  Flame,
  Search,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

interface Props {
  scenarioId: string;
  lang: Language;
  selectedRegion: WorldRegionId;
  onSelectRegion: (reg: WorldRegionId) => void;
  onNavigateTab: (tab: ActiveTab) => void;
}

export const NarrativeCockpitView: React.FC<Props> = ({
  scenarioId,
  lang,
  selectedRegion,
  onSelectRegion,
  onNavigateTab
}) => {
  const [showBaseline, setShowBaseline] = useState<boolean>(false);
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
              <span>{isEn ? 'STEP 1: MONITOR COVERAGE & AI SEARCH // MODULE 01' : 'SCHRITT 1: MEDIEN & KI-SUCHE PRÜFEN // MODUL 01'}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-sbb-black tracking-tight">
              {isEn ? 'Regional Media & AI Search Cockpit' : 'Regionales Medien- & KI-Such-Cockpit'}
            </h1>
            <p className="text-sm text-sbb-stone mt-1 max-w-3xl leading-relaxed">
              {isEn
                ? 'Compresses incoming press, forum, and AI search streams into the few topics gaining momentum—showing where corporate arguments land and where regional contradictions weaken the signal.'
                : 'Verdichtet eingehende Medien-, Foren- und KI-Suchströme auf die wenigen Themen mit Dynamik – und zeigt, wo Kernargumente ankommen oder wo regionale Widersprüche die Position schwächen.'}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-sbb-cloud border border-sbb-aluminum font-mono text-xs text-sbb-black font-bold">
              <Globe2 className="w-4 h-4 text-sbb-red" />
              <span>{isEn ? 'GRANULARITY: MARKETS / REGIONS / CANTONS' : 'GRANULARITÄT: MÄRKTE / REGIONEN / KANTONE'}</span>
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
              {isEn ? 'WHY SURFACE SENTIMENT SCORES MISS EMERGING RISKS' : 'WARUM OBERFLÄCHLICHES SENTIMENT RISIKEN ÜBERSIEHT'}
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
                  {isEn ? 'STANDARD AUTOMATED SENTIMENT SCORE' : 'AUTOMATISCHER STANDARD-SENTIMENTWERT'}
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
              <div className="flex flex-wrap items-center justify-between pb-2 border-b border-red-200 gap-2">
                <span className="text-[10px] font-mono text-red-700 uppercase font-bold flex items-center gap-1.5">
                  <Flame className="w-3.5 h-3.5 text-red-700 shrink-0" />
                  <span>
                    {(() => {
                      if (scenarioId === 'alpine_transit_crisis') {
                        return isEn ? 'CRITICAL INFRASTRUCTURE & SAFETY SIGNAL' : 'KRITISCHES INFRASTRUKTUR- & SICHERHEITSSIGNAL';
                      } else if (scenarioId === 'esg_investigation') {
                        return isEn ? 'ESG SUPPLY CHAIN & LEGAL EXPOSURE' : 'ESG-LIEFERKETTEN- & REPUTATIONSRISIKO';
                      } else if (scenarioId === 'health_data_breach') {
                        return isEn ? 'DATA PRIVACY & REGULATORY SOVEREIGNTY RISK' : 'DATENSCHUTZ- & SOUVERÄNITÄTSRISIKO';
                      }
                      return isEn ? 'REAL REPUTATION & REIMBURSEMENT RISK' : 'ECHTES REPUTATIONS- & ERSTATTUNGSRISIKO';
                    })()}
                  </span>
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 bg-red-100 text-red-700 font-bold whitespace-nowrap shrink-0">
                  {data.surface_nlp_vs_forensic_reality.statistical_proof_anchor}
                </span>
              </div>
              <div className="text-lg font-black text-red-700">
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
                <span>{isEn ? 'Cluster & AI Audit (Mod 02)' : 'Cluster & KI-Audit (Mod 02)'}</span>
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

      {/* ═══ COMPACT COLLAPSIBLE BASELINE POSITION ANCHOR ═══ */}
      <div className="bg-white border border-sbb-aluminum">
        <button
          type="button"
          onClick={() => setShowBaseline(prev => !prev)}
          className="w-full px-5 py-3 flex items-center justify-between text-left hover:bg-sbb-cloud/50 transition-colors cursor-pointer"
        >
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-sbb-black uppercase tracking-wider">
            <span className="w-2 h-2 bg-sbb-black" />
            <span>
              {isEn
                ? `Approved Baseline Facts (${data.target_narratives.length} Pillars — What Coverage Is Measured Against)`
                : `Freigegebene Grundposition (${data.target_narratives.length} Säulen — Massstab für den Abgleich)`}
            </span>
          </div>
          <span className="text-[10px] font-mono font-bold text-sbb-red flex items-center gap-1">
            {showBaseline ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            <span>{showBaseline ? (isEn ? 'Hide' : 'Ausblenden') : (isEn ? 'Inspect' : 'Anzeigen')}</span>
          </span>
        </button>

        {showBaseline && (
          <div className="p-5 pt-2 border-t border-zinc-200 grid grid-cols-1 md:grid-cols-3 gap-4">
            {data.target_narratives.map((pillar) => (
              <div key={pillar.id} className="p-3.5 bg-sbb-cloud/50 border border-sbb-aluminum space-y-1.5">
                <div className="text-[10px] font-mono font-bold text-sbb-red uppercase">
                  {isEn ? `PILLAR ${pillar.pillar_number}` : `SÄULE ${pillar.pillar_number}`}
                </div>
                <div className="text-xs font-bold text-sbb-black">{pillar.title}</div>
                <p className="text-[11px] text-zinc-700 leading-snug">{pillar.core_thesis}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ═══ BLOCK 02: WORLD REGION SYNTHESIS MATRIX ═══ */}
      <div className="space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="w-7 h-7 bg-sbb-black text-white font-mono text-xs font-bold flex items-center justify-center">
              02
            </span>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-sbb-stone">
              {isEn ? 'REGIONAL BREAKDOWN ACROSS MEDIA, FORUMS & AI SEARCH' : 'REGIONALER VERGLEICH: MEDIEN, FOREN & KI-SUCHE'}
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
                <th className="p-4 font-bold">{isEn ? 'REGION & TOPIC' : 'REGION & THEMA'}</th>
                <th className="p-4 font-bold">{isEn ? 'VOLUME & ALIGNMENT' : 'VOLUMEN & PASSUNG'}</th>
                <th className="p-4 font-bold">{isEn ? 'PRESS & TRADE MEDIA' : 'LEIT- & FACHMEDIEN'}</th>
                <th className="p-4 font-bold">{isEn ? 'FORUMS & SOCIAL MEDIA' : 'SOCIAL MEDIA & FOREN'}</th>
                <th className="p-4 font-bold">{isEn ? 'AI SEARCH ANSWERS' : 'KI-SUCHANTWORTEN'}</th>
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

                  {/* Col 2: Qualitative Signal Indicators */}
                  <td className="p-4 align-top w-[220px] font-mono">
                    <div className="space-y-2 text-[11px]">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-zinc-600">{isEn ? 'Volume:' : 'Volumen:'}</span>
                        <span className={`px-1.5 py-0.5 text-[10px] font-bold border ${
                          row.velocity_z_score >= 3.0
                            ? 'bg-red-50 text-red-700 border-red-200'
                            : row.velocity_z_score >= 2.0
                            ? 'bg-amber-50 text-amber-800 border-amber-200'
                            : 'bg-zinc-100 text-zinc-700 border-zinc-200'
                        }`}>
                          {row.velocity_z_score >= 3.0
                            ? (isEn ? 'Unusual Surge' : 'Starker Anstieg')
                            : row.velocity_z_score >= 2.0
                            ? (isEn ? 'Elevated' : 'Erhöht')
                            : (isEn ? 'Steady' : 'Ruhig')}
                        </span>
                      </div>
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-zinc-600">{isEn ? 'Position Fit:' : 'Passung:'}</span>
                        <span className={`px-1.5 py-0.5 text-[10px] font-bold border ${
                          row.cosine_alignment < 0.45
                            ? 'bg-red-50 text-red-700 border-red-200'
                            : row.cosine_alignment > 0.7
                            ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                            : 'bg-amber-50 text-amber-800 border-amber-200'
                        }`}>
                          {row.cosine_alignment < 0.45
                            ? (isEn ? 'Diverging' : 'Abweichend')
                            : row.cosine_alignment > 0.7
                            ? (isEn ? 'Aligned' : 'Stimmig')
                            : (isEn ? 'Mixed' : 'Gemischt')}
                        </span>
                      </div>
                      <p className="text-[11px] font-sans text-zinc-600 leading-snug pt-1 border-t border-zinc-100">
                        {row.strategic_risk_summary}
                      </p>
                    </div>
                  </td>

                  {/* Col 3: Press & Trade Media */}
                  <td className="p-4 align-top max-w-[260px]">
                    <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold text-zinc-500 uppercase mb-1">
                      <Newspaper className="w-3.5 h-3.5 text-zinc-600" />
                      <span>{isEn ? 'MAIN MEDIA ANGLE' : 'HAUPTTENOR MEDIEN'}</span>
                    </div>
                    <p className="text-zinc-800 leading-snug">
                      {row.legacy_media_frame}
                    </p>
                  </td>

                  {/* Col 4: Social Forums */}
                  <td className="p-4 align-top max-w-[240px]">
                    <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold text-zinc-500 uppercase mb-1">
                      <MessageSquare className="w-3.5 h-3.5 text-zinc-600" />
                      <span>{isEn ? 'ONLINE DISCUSSION' : 'DISKUSSION IN FOREN'}</span>
                    </div>
                    <p className="text-zinc-800 leading-snug">
                      {row.social_forum_frame}
                    </p>
                  </td>

                  {/* Col 5: AI Answer Summary */}
                  <td className="p-4 align-top max-w-[290px]">
                    <div className="flex items-center justify-between text-[10px] font-mono font-bold uppercase mb-1.5">
                      <span className="flex items-center gap-1 text-zinc-700">
                        <Bot className="w-3.5 h-3.5 text-sbb-red" />
                        <span>{isEn ? 'AI ANSWER SUMMARY' : 'KI-ZUSAMMENFASSUNG'}</span>
                      </span>
                      <span className={`px-1.5 py-0.5 border text-[10px] ${
                        row.llm_hallucination_rate > 35 ? 'bg-red-50 text-red-700 border-red-200' : 'bg-emerald-50 text-emerald-800 border-emerald-200'
                      }`}>
                        {row.llm_hallucination_rate > 35
                          ? (isEn ? 'Distortion Risk' : 'Verzerrungsrisiko')
                          : (isEn ? 'Mostly Accurate' : 'Weitgehend korrekt')}
                      </span>
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
              {isEn ? 'FILTERING PIPELINE & CORE NARRATIVE PILLARS' : 'FILTER-PIPELINE & KERNARGUMENTE'}
            </span>
          </div>
          <span className="text-[10px] font-mono text-sbb-stone hidden sm:inline">
            {isEn ? 'Approved Company Position' : 'Freigegebene Grundposition'}
          </span>
        </div>

        {/* 4-Stage Statistical + LLM Filtering Pipeline Funnel */}
        <div className="bg-white border border-sbb-aluminum p-6 space-y-3">
          <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-sbb-stone font-bold">
            <span>{isEn ? '4-STAGE FILTERING PIPELINE (LAST 72 HOURS)' : '4-STUFIGE FILTER-PIPELINE (LETZTE 72 STUNDEN)'}</span>
            <span>{data.timeframe}</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {/* Step 1 */}
            <div className="p-4 bg-sbb-cloud/60 border border-sbb-aluminum">
              <div className="flex items-center justify-between text-[10px] font-mono text-sbb-stone mb-1 font-bold">
                <span>01 // REMOVE DUPLICATES</span>
                <span className="text-zinc-500">MinHash</span>
              </div>
              <div className="text-sm font-black text-sbb-black tracking-tight">
                {isEn ? 'Collapse Wire Reprints' : 'Agentur-Dubletten bündeln'}
              </div>
              <p className="text-[11px] text-zinc-600 mt-1">
                {isEn
                  ? 'Groups syndicated copies so volume reflects distinct stories rather than wire echo.'
                  : 'Fasst identische Agenturmeldungen zusammen, damit echte Themen sichtbar werden.'}
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-4 bg-sbb-cloud/60 border border-sbb-aluminum">
              <div className="flex items-center justify-between text-[10px] font-mono text-sbb-stone mb-1 font-bold">
                <span>02 // GROUP BY TOPIC</span>
                <span className="text-zinc-500">HDBSCAN</span>
              </div>
              <div className="text-sm font-black text-sbb-black tracking-tight">
                {isEn ? 'Isolate Story Clusters' : 'Themen-Cluster trennen'}
              </div>
              <p className="text-[11px] text-zinc-600 mt-1">
                {isEn
                  ? 'Separates relevant policy and clinical debates from background off-topic chatter.'
                  : 'Trennt relevante Fach- und Politikdebatten von themenfremdem Rauschen.'}
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-4 bg-sbb-cloud/60 border border-sbb-aluminum">
              <div className="flex items-center justify-between text-[10px] font-mono text-sbb-stone mb-1 font-bold">
                <span>03 // SPOT VOLUME SPIKES</span>
                <span className="text-sbb-red font-bold">z-Score + Cosine</span>
              </div>
              <div className="text-sm font-black text-sbb-red tracking-tight">
                {isEn ? 'Flag Regional Surges' : 'Regionale Spikes melden'}
              </div>
              <p className="text-[11px] text-zinc-600 mt-1">
                {data.pipeline.peak_anomaly_summary}
              </p>
            </div>

            {/* Step 4 */}
            <div className="p-4 bg-sbb-cloud/60 border border-sbb-aluminum">
              <div className="flex items-center justify-between text-[10px] font-mono text-sbb-stone mb-1 font-bold">
                <span>04 // AI READS KEY ARTICLES</span>
                <span className="text-zinc-700 font-bold">LLM Pass</span>
              </div>
              <div className="text-sm font-black text-sbb-black tracking-tight">
                {isEn ? 'Inspect Representative Texts' : 'Kernartikel prüfen'}
              </div>
              <p className="text-[11px] text-zinc-600 mt-1">
                {isEn
                  ? 'Instead of feeding raw article streams into an LLM, AI inspects only the core representative articles.'
                  : 'Statt rohe Medienströme in ein LLM zu geben, prüft die KI nur die repräsentativsten Kernartikel.'}
              </p>
            </div>
          </div>
        </div>

        {/* Target Corporate Narrative Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.target_narratives.map((pillar) => (
            <div key={pillar.id} className="bg-white border border-sbb-aluminum p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-2 border-b border-zinc-100">
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

      {/* ═══ NEXT-STEP WORKFLOW BRIDGE (01 → 02) ═══ */}
      <div className="bg-sbb-black text-white border-l-4 border-sbb-red px-5 py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="space-y-1">
          <div className="text-[10px] font-mono text-[#FFCC00] uppercase tracking-widest font-bold">
            {isEn ? 'NEXT STEP IN WORKFLOW // MODULE 01 → MODULE 02' : 'NÄCHSTER PROZESSSCHRITT // MODUL 01 → MODUL 02'}
          </div>
          <p className="text-xs sm:text-sm text-zinc-200">
            {isEn
              ? 'Statistical anomaly isolated. Inspect the representative cluster articles and audit how AI search engines synthesize or distort these facts.'
              : 'Statistischer Spike isoliert. Prüfen Sie im nächsten Schritt die repräsentativen Cluster-Artikel und das KI-Antwort-Audit.'}
          </p>
        </div>
        <button
          onClick={() => {
            onNavigateTab('geo');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="px-4 py-2.5 bg-sbb-red hover:bg-red-700 text-white font-mono text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-2 cursor-pointer shrink-0 self-start sm:self-auto"
        >
          <span>{isEn ? 'Proceed to 02: Cluster & AI Audit' : 'Weiter zu 02: Cluster & KI-Audit'}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default NarrativeCockpitView;
