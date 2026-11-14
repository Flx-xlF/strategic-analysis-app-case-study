import React, { useState } from 'react';
import { Language } from '../../fixtures/scenarios';
import { getCascadeData, CascadeVersionData } from '../../fixtures/cascadeFixtures';
import { CascadeNode } from './CascadeNode';
import { RiskGauge } from './RiskGauge';
import { 
  AlertTriangle, 
  ArrowDown, 
  Clock, 
  Flame, 
  Layers, 
  Lightbulb, 
  ShieldAlert, 
  CheckCircle2, 
  Sparkles,
  RefreshCw
} from 'lucide-react';

interface Props {
  scenarioId: string;
  lang: Language;
  isStreaming: boolean;
  streamProgress: number;
}

export const NarrativeCascadeView: React.FC<Props> = ({
  scenarioId,
  lang,
  isStreaming,
  streamProgress
}) => {
  const [selectedVersion, setSelectedVersion] = useState<'draftA' | 'draftB'>('draftA');
  const isEn = lang === 'en';

  const data: CascadeVersionData = getCascadeData(lang, scenarioId, selectedVersion);
  const isDraftA = selectedVersion === 'draftA';

  return (
    <div className="space-y-8">
      {/* ═══ WAYFINDING HEADER & EXECUTIVE TELEMETRY RIBBON ═══ */}
      <div className="bg-white border border-sbb-aluminum p-6 sm:p-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-6 border-b border-zinc-100 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-sbb-red uppercase mb-1.5">
              <Layers className="w-4 h-4" />
              <span>{isEn ? 'STEP 4A // DRAFT STRESS-TEST' : 'SCHRITT 4A // ENTWURF-STRESSTEST'}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-sbb-black tracking-tight">
              {isEn ? 'Press Release & Statement Stress-Test (Before vs. After)' : 'Medienmitteilungen- & Statement-Stresstest (Vorher vs. Nachher)'}
            </h1>
            <p className="text-sm text-sbb-stone mt-1 max-w-3xl leading-relaxed">
              {isEn
                ? 'Compares a defensive first draft (Iteration 1) against a revised draft (Iteration 2)—simulating critical headlines, 48-hour stakeholder reactions, and reputation risk before release.'
                : 'Vergleicht einen defensiven Rohentwurf (Iteration 1) mit einer überarbeiteten Fassung (Iteration 2) – und simuliert kritische Schlagzeilen, 48-Stunden-Reaktionen und das Reputationsrisiko vor der Freigabe.'}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <span className={`inline-flex items-center gap-2 px-3 py-1.5 border font-mono text-xs font-bold ${
              isDraftA 
                ? 'bg-red-50 text-sbb-red border-red-200' 
                : 'bg-emerald-50 text-emerald-800 border-emerald-200'
            }`}>
              <span className={`w-2 h-2 ${isDraftA ? 'bg-sbb-red' : 'bg-emerald-600'}`} />
              <span>{data.version_badge}</span>
            </span>
          </div>
        </div>

        {/* Executive KPI Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-2">
          <div className={`p-4 bg-sbb-cloud/50 border-l-2 ${data.risk_score >= 7 ? 'border-sbb-red' : 'border-emerald-600'}`}>
            <div className="text-[10px] font-mono text-sbb-stone uppercase tracking-wider mb-1">
              {isEn ? 'REPUTATION RISK SCORE' : 'RISIKO-SCORE'}
            </div>
            <div className={`text-2xl font-black tracking-tight ${data.risk_score >= 7 ? 'text-sbb-red' : 'text-emerald-700'}`}>
              {data.risk_score} <span className="text-xs font-normal text-sbb-stone font-mono">/ 10</span>
            </div>
            <div className="text-[10px] font-mono text-sbb-stone mt-1">{data.risk_level}</div>
          </div>

          <div className="p-4 bg-sbb-cloud/50 border-l-2 border-zinc-800">
            <div className="text-[10px] font-mono text-sbb-stone uppercase tracking-wider mb-1">
              {isEn ? 'KEY GROUPS TESTED' : 'GEPRÜFTE GRUPPEN'}
            </div>
            <div className="text-2xl font-black text-sbb-black tracking-tight">
              {data.stakeholder_reactions.length}
            </div>
            <div className="text-[10px] font-mono text-sbb-stone mt-1">{isEn ? 'Simulated Actors' : 'Überwachte Akteure'}</div>
          </div>

          <div className="p-4 bg-sbb-cloud/50 border-l-2 border-zinc-800">
            <div className="text-[10px] font-mono text-sbb-stone uppercase tracking-wider mb-1">
              {isEn ? 'VULNERABILITIES' : 'SCHWACHSTELLEN'}
            </div>
            <div className="text-2xl font-black text-sbb-black tracking-tight">
              {data.vulnerabilities.length}
            </div>
            <div className="text-[10px] font-mono text-sbb-stone mt-1">{isEn ? 'Identified Weak Spots' : 'Kritische Angriffsflächen'}</div>
          </div>

          <div className="p-4 bg-sbb-cloud/50 border-l-2 border-zinc-800">
            <div className="text-[10px] font-mono text-sbb-stone uppercase tracking-wider mb-1">
              {isEn ? 'ESCALATION WINDOW' : 'ZEITLICHE DYNAMIK'}
            </div>
            <div className="text-2xl font-black text-sbb-black tracking-tight">
              {isDraftA ? '< 2h' : (isEn ? 'Stable' : 'Stabil')}
            </div>
            <div className="text-[10px] font-mono text-sbb-stone mt-1">
              {isDraftA 
                ? (isEn ? 'Until Media Sensationalism' : 'Bis Boulevard-Zuspitzung') 
                : (isEn ? 'Calm Coverage' : 'Sachliche Berichterstattung')}
            </div>
          </div>
        </div>
      </div>

      {/* ═══ STEP 01: MULTI-ANGLE CHALLENGE, BRIDGING & HUMAN ITERATION LOOP ═══ */}
      <div className="space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="w-7 h-7 bg-sbb-black text-white font-mono text-xs font-bold flex items-center justify-center">
              01
            </span>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-sbb-stone">
              {isEn
                ? 'COMPARE DRAFTS: INITIAL VERSION VS. REVISED VERSION'
                : 'ENTWÜRFE VERGLEICHEN: ROHENTWURF VS. ÜBERARBEITETE VERSION'}
            </span>
          </div>

          {/* Interactive Iteration Switcher */}
          <div className="flex items-center gap-1 bg-sbb-cloud p-1 border border-sbb-aluminum">
            <button
              onClick={() => setSelectedVersion('draftA')}
              className={`px-3 py-1 font-mono text-xs font-bold transition-all cursor-pointer ${
                selectedVersion === 'draftA'
                  ? 'bg-sbb-black text-white shadow-xs'
                  : 'text-sbb-stone hover:text-sbb-black'
              }`}
            >
              {isEn ? 'Iteration 1: Initial Draft' : 'Iteration 1: Rohentwurf'}
            </button>
            <button
              onClick={() => setSelectedVersion('draftB')}
              className={`px-3 py-1 font-mono text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                selectedVersion === 'draftB'
                  ? 'bg-emerald-700 text-white shadow-xs'
                  : 'text-sbb-stone hover:text-sbb-black'
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{isEn ? 'Iteration 2: Revised Draft' : 'Iteration 2: Überarbeiteter Entwurf'}</span>
            </button>
          </div>
        </div>

        <div className={`bg-white border p-6 sm:p-8 shadow-sm transition-all ${
          isDraftA ? 'border-sbb-aluminum' : 'border-emerald-600 ring-1 ring-emerald-200'
        }`}>
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-zinc-100">
            <span className="text-xs font-mono font-bold text-sbb-stone uppercase tracking-wider flex items-center gap-2">
              <span>{data.version_label}</span>
            </span>
            <span className={`text-[10px] font-mono px-2 py-0.5 border ${
              isDraftA ? 'bg-zinc-100 text-zinc-600 border-zinc-300' : 'bg-emerald-50 text-emerald-800 border-emerald-300 font-bold'
            }`}>
              {isDraftA
                ? isEn
                  ? 'STATUS: FIRST DRAFT (REPEATS CRITIC’S ACCUSATION)'
                  : 'STATUS: ROHENTWURF (WIEDERHOLT VORWURF)'
                : isEn
                ? 'STATUS: REVISED DRAFT (CLEAR FACTS, NO ACCUSATIONS)'
                : 'STATUS: ÜBERARBEITET (KLARE FAKTEN OHNE VORWURF)'}
            </span>
          </div>

          <p className="text-base sm:text-lg font-medium text-sbb-black leading-relaxed italic border-l-4 border-sbb-black pl-5 py-1">
            «{data.communication}»
          </p>

          <div className="mt-4 pt-3 border-t border-zinc-100 flex items-center justify-between text-xs font-mono text-sbb-stone">
            <span>
              {isDraftA 
                ? (isEn ? '💡 Click "Iteration 2: Revised Draft" to see how leading with our own facts lowers risk.' : '💡 Klicken Sie auf "Iteration 2", um zu sehen, wie klare eigene Fakten das Risiko senken.')
                : (isEn ? '✓ No repetition of critic accusations; leads directly with approved company facts.' : '✓ Keine Wiederholung von Vorwürfen; führt direkt zu den freigegebenen Fakten.')}
            </span>
            <button
              onClick={() => setSelectedVersion(isDraftA ? 'draftB' : 'draftA')}
              className="text-sbb-red hover:underline flex items-center gap-1 font-bold cursor-pointer"
            >
              <RefreshCw className="w-3 h-3" />
              <span>
                {isDraftA 
                  ? (isEn ? 'Switch to Iteration 2 (Revised Draft) →' : 'Zu Iteration 2 (Überarbeiteter Entwurf) wechseln →')
                  : (isEn ? '← Back to Iteration 1 (Initial Draft)' : '← Zurück zu Iteration 1 (Rohentwurf)')}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Flow Indicator */}
      <div className="flex justify-center -my-3">
        <div className="flex items-center gap-2 px-3 py-1 bg-white border border-sbb-aluminum font-mono text-[10px] text-sbb-stone">
          <ArrowDown className={`w-3.5 h-3.5 ${isDraftA ? 'text-sbb-red' : 'text-emerald-600'}`} />
          <span>{isEn ? 'PROJECTED MEDIA & STAKEHOLDER REACTION (48H)' : 'ERWARTETE MEDIEN- & STAKEHOLDER-REAKTION (48H)'}</span>
        </div>
      </div>

      {/* ═══ STEP 02: MEDIALE ZUSPITZUNG (PROJECTED CRITICAL HEADLINE) ═══ */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <span className={`w-7 h-7 text-white font-mono text-xs font-bold flex items-center justify-center ${
            isDraftA ? 'bg-sbb-red' : 'bg-emerald-700'
          }`}>
            02
          </span>
          <span className={`font-mono text-xs font-bold uppercase tracking-widest ${
            isDraftA ? 'text-sbb-red' : 'text-emerald-800'
          }`}>
            {isDraftA 
              ? (isEn ? 'MEDIA ECHO SIMULATION: PROJECTED CRITICAL HEADLINE' : 'MEDIALE ECHO-SIMULATION: ERWARTETE KRITISCHE SCHLAGZEILE')
              : (isEn ? 'MEDIA ECHO SIMULATION: CALIBRATED COVERAGE OUTCOME' : 'MEDIALE ECHO-SIMULATION: SACHLICHE BERICHTERSTATTUNG')}
          </span>
        </div>

        <div className={`bg-white border-2 p-6 sm:p-8 relative overflow-hidden ${
          isDraftA ? 'border-sbb-red' : 'border-zinc-800'
        }`}>
          <div className={`absolute top-0 right-0 font-mono text-[10px] font-bold px-3 py-1 uppercase tracking-widest flex items-center gap-1.5 ${
            isDraftA ? 'bg-sbb-red text-white' : 'bg-zinc-800 text-white'
          }`}>
            <Flame className="w-3 h-3" />
            <span>{isDraftA ? (isEn ? 'PROJECTED CRITICAL HEADLINE' : 'KRITISCHE SCHLAGZEILE') : (isEn ? 'CALIBRATED COVERAGE HEADLINE' : 'SACHLICHE BERICHTERSTATTUNG')}</span>
          </div>

          <div className="text-[11px] font-mono text-sbb-stone uppercase tracking-wider font-bold mb-2 flex items-center gap-2">
            <AlertTriangle className={`w-4 h-4 ${isDraftA ? 'text-red-700' : 'text-zinc-600'}`} />
            <span>
              {isEn
                ? (isDraftA ? 'PROJECTED CRITICAL RECEPTION' : 'CALIBRATED MEDIA RECEPTION')
                : (isDraftA ? 'ERWARTETE TITELZEILE (LEITMEDIEN / BOULEVARD)' : 'ERWARTETE SACHLICHE MEDIENRESONANZ')}
            </span>
          </div>

          <h2 className={`text-xl sm:text-3xl font-black tracking-tight leading-tight uppercase my-4 ${
            isDraftA ? 'text-sbb-red' : 'text-sbb-black'
          }`}>
            {data.headline_from_hell}
          </h2>

          {/* Vulnerability Tags */}
          <div className="mt-6 pt-5 border-t border-zinc-100">
            <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider mb-3">
              {isEn ? 'IDENTIFIED NARRATIVE VULNERABILITIES:' : 'IDENTIFIZIERTE SCHWACHSTELLEN IM NARRATIV:'}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {data.vulnerabilities.map((v, i) => (
                <div key={i} className={`p-3 border ${
                  isDraftA ? 'bg-red-50/60 border-red-200' : 'bg-zinc-50 border-zinc-200'
                }`}>
                  <div className={`font-bold text-xs font-mono uppercase mb-1 ${
                    isDraftA ? 'text-sbb-red' : 'text-zinc-800'
                  }`}>
                    0{i + 1} // {v.topic}
                  </div>
                  <p className="text-xs text-zinc-700 leading-snug">
                    {v.explanation}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Flow Indicator */}
      <div className="flex justify-center -my-3">
        <div className="flex items-center gap-2 px-3 py-1 bg-white border border-sbb-aluminum shadow-xs font-mono text-[10px] text-sbb-stone">
          <ArrowDown className="w-3.5 h-3.5 text-zinc-600" />
          <span>{isEn ? 'KEY STAKEHOLDER & INFLUENCER REACTIONS (24-48H)' : 'DIREKTE AUSWIRKUNGEN AUF STAKEHOLDER & MEINUNGSBILDNER'}</span>
        </div>
      </div>

      {/* ═══ STEP 03: STAKEHOLDER DYNAMICS ═══ */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-7 h-7 bg-sbb-black text-white font-mono text-xs font-bold flex items-center justify-center">
              03
            </span>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-sbb-stone">
              {isEn ? 'STAKEHOLDER COUNTER-REACTIONS' : 'STAKEHOLDER-REAKTIONEN (INNERHALB 24H)'}
            </span>
          </div>
          <span className="text-[10px] font-mono text-sbb-stone hidden sm:inline-block">
            {data.stakeholder_reactions.length} {isEn ? 'ACTORS SIMULATED' : 'AKTEURE SIMULIERT'}
          </span>
        </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.stakeholder_reactions.map((node, i) => (
              <CascadeNode key={i} node={node} index={i} lang={lang} />
            ))}
          </div>
      </div>

      {/* ═══ STEP 04: SECOND ORDER EFFECTS ═══ */}
      {data.second_order_effects && data.second_order_effects.length > 0 && (
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="w-7 h-7 bg-sbb-black text-white font-mono text-xs font-bold flex items-center justify-center">
              04
            </span>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-sbb-stone">
              {isEn ? 'KNOCK-ON EFFECTS (NEXT 2–14 DAYS)' : 'FOLGEWIRKUNGEN (NÄCHSTE 2–14 TAGE)'}
            </span>
          </div>

          <div className="bg-white border border-sbb-aluminum p-6 sm:p-8 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.second_order_effects.map((effect, i) => (
                <div key={i} className="p-4 bg-sbb-cloud/50 border border-sbb-aluminum flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono font-bold uppercase text-sbb-stone">
                        {isEn ? `IMPACT 0${i + 1}` : `FOLGEEFFEKT 0${i + 1}`}
                      </span>
                      <span className={`text-[9px] font-mono font-bold px-2 py-0.5 uppercase ${
                        effect.probability === 'high' 
                          ? 'bg-red-100 text-sbb-red' 
                          : 'bg-zinc-200 text-zinc-700'
                      }`}>
                        {isEn ? `PROBABILITY: ${effect.probability.toUpperCase()}` : `WAHRSCHEINLICHKEIT: ${effect.probability === 'high' ? 'HOCH' : 'MITTEL'}`}
                      </span>
                    </div>
                    <p className="text-sm font-bold text-sbb-black mb-3">
                      {effect.effect}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-zinc-200 flex items-center gap-1.5 text-[10px] font-mono text-sbb-stone">
                    <Clock className="w-3 h-3 text-sbb-red" />
                    <span>{isEn ? `TIMEFRAME: ${effect.timeframe}` : `ERWARTETES ZEITFENSTER: ${effect.timeframe}`}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ═══ STEP 05: STRATEGIC WEICHENSTELLUNG / MANAGEMENT SUMMARY ═══ */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <span className="w-7 h-7 bg-sbb-black text-white font-mono text-xs font-bold flex items-center justify-center">
            05
          </span>
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-sbb-stone">
            {isEn ? 'SUMMARY & RECOMMENDED NEXT STEPS' : 'ZUSAMMENFASSUNG & NÄCHSTE SCHRITTE'}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Detailed Diagnosis & Recommendation */}
          <div className="lg:col-span-2 bg-white border border-sbb-aluminum p-6 sm:p-8 shadow-sm space-y-6">
            <div>
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-sbb-stone mb-2">
                {isEn ? 'SITUATIONAL DIAGNOSIS' : 'DIAGNOSE DER AUSGANGSLAGE'}
              </div>
              <p className="text-base text-sbb-black leading-relaxed font-medium">
                {data.management_summary.diagnosis}
              </p>
            </div>

            <div className="border-t border-zinc-100 pt-5">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-sbb-stone mb-2">
                {isEn ? 'REPUTATIONAL IMPACT IF UNMODIFIED' : 'REPUTATIVE AUSWIRKUNG BEI UNVERÄNDERTER KOMMUNIKATION'}
              </div>
              <p className="text-sm text-zinc-700 leading-relaxed">
                {data.management_summary.impact}
              </p>
            </div>

            <div className="border-t-2 border-sbb-black pt-5 bg-sbb-cloud/40 -mx-6 -mb-6 sm:-mx-8 sm:-mb-8 p-6 sm:p-8">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-sbb-red uppercase tracking-wider mb-2">
                <Lightbulb className="w-4 h-4" />
                <span>{isEn ? 'STRATEGIC ACTION RECOMMENDATION' : 'KONKRETE HANDLUNGSEMPFEHLUNG'}</span>
              </div>
              <p className="text-base font-bold text-sbb-black leading-relaxed">
                {data.management_summary.verdict}
              </p>
            </div>
          </div>

          {/* Risk Gauge & Immediate Actions */}
          <div className="bg-white border border-sbb-aluminum p-6 sm:p-8 shadow-sm flex flex-col justify-between">
            <RiskGauge score={data.risk_score} lang={lang} />

            <div className="mt-6 pt-5 border-t border-zinc-100">
              <div className="text-[10px] font-mono text-sbb-stone uppercase tracking-wider mb-3">
                {isEn ? 'NEXT STEPS FOR THE TEAM' : 'NÄCHSTE SCHRITTE FÜR DAS TEAM'}
              </div>
              <ul className="space-y-2 text-xs text-zinc-700 font-mono">
                {data.immediate_actions?.map((act, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-sbb-red shrink-0 mt-1" />
                    <span>{act}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NarrativeCascadeView;
