import React, { useState } from 'react';
import { Language } from '../../fixtures/scenarios';
import { getCascadeData, CascadeVersionData } from '../../fixtures/cascadeFixtures';
import { CascadeNode } from './CascadeNode';
import {
  AlertTriangle,
  Clock,
  Flame,
  Layers,
  Lightbulb,
  CheckCircle2,
  RefreshCw,
  Users
} from 'lucide-react';

interface Props {
  scenarioId: string;
  lang: Language;
}

export const NarrativeCascadeView: React.FC<Props> = ({ scenarioId, lang }) => {
  const [selectedVersion, setSelectedVersion] = useState<'draftA' | 'draftB'>('draftA');
  const isEn = lang === 'en';

  const draftAData: CascadeVersionData = getCascadeData(lang, scenarioId, 'draftA');
  const draftBData: CascadeVersionData = getCascadeData(lang, scenarioId, 'draftB');
  const data: CascadeVersionData = selectedVersion === 'draftA' ? draftAData : draftBData;
  const isDraftA = selectedVersion === 'draftA';

  return (
    <div className="space-y-8">
      {/* ═══ WAYFINDING HEADER ═══ */}
      <div className="bg-white border border-sbb-aluminum p-6 sm:p-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-sbb-red uppercase mb-1.5">
              <Layers className="w-4 h-4" />
              <span>{isEn ? 'STEP 4A // DRAFT STRESS-TEST' : 'SCHRITT 4A // ENTWURF-STRESSTEST'}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-sbb-black tracking-tight">
              {isEn
                ? 'Press Release & Statement Stress-Test (Before vs. After)'
                : 'Medienmitteilungen- & Statement-Stresstest (Vorher vs. Nachher)'}
            </h1>
            <p className="text-sm text-sbb-stone mt-1 max-w-3xl leading-relaxed">
              {isEn
                ? 'Compares an initial draft (Iteration 1) against a revised draft (Iteration 2) to spot self-inflicted headline traps and stakeholder pushback—while showing what policy friction still remains.'
                : 'Vergleicht einen Rohentwurf (Iteration 1) mit einer überarbeiteten Fassung (Iteration 2), um selbstgemachte Schlagzeilen-Fallen zu erkennen – und zeigt, welche Konflikte dennoch bleiben.'}
            </p>
          </div>

          <span
            className={`inline-flex items-center gap-2 px-3 py-1.5 border font-mono text-xs font-bold shrink-0 self-start md:self-auto ${
              isDraftA
                ? 'bg-red-50 text-sbb-red border-red-200'
                : 'bg-emerald-50 text-emerald-800 border-emerald-200'
            }`}
          >
            <span className={`w-2 h-2 ${isDraftA ? 'bg-sbb-red' : 'bg-emerald-600'}`} />
            <span>{data.version_badge}</span>
          </span>
        </div>
      </div>

      {/* ═══ STAGE 01: COMPARE DRAFTS (ITERATION 1 VS. ITERATION 2) ═══ */}
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
                  : 'bg-emerald-50 text-emerald-900 border border-emerald-300 hover:bg-emerald-100'
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>
                {isEn
                  ? 'Iteration 2: Revised (No Accusation Echo)'
                  : 'Iteration 2: Überarbeitet (Ohne Vorwurfs-Echo)'}
              </span>
            </button>
          </div>
        </div>

        <div
          className={`bg-white border p-6 sm:p-8 shadow-sm transition-all ${
            isDraftA ? 'border-sbb-aluminum' : 'border-emerald-600 ring-1 ring-emerald-200'
          }`}
        >
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-zinc-100">
            <span className="text-xs font-mono font-bold text-sbb-stone uppercase tracking-wider">
              {data.version_label}
            </span>
            <span
              className={`text-[10px] font-mono px-2 py-0.5 border ${
                isDraftA
                  ? 'bg-zinc-100 text-zinc-600 border-zinc-300'
                  : 'bg-emerald-50 text-emerald-800 border-emerald-300 font-bold'
              }`}
            >
              {isDraftA
                ? isEn
                  ? 'EXPOSURE: SELF-INFLICTED TRAP TRIGGERED'
                  : 'RISIKO: SELBSTGEMACHTE FALLE'
                : isEn
                ? 'EXPOSURE: TRAPS AVOIDED — DEBATE REMAINS'
                : 'RISIKO: FALLEN VERMIEDEN — DEBATTE BLEIBT'}
            </span>
          </div>

          <p className="text-base sm:text-lg font-medium text-sbb-black leading-relaxed italic border-l-4 border-sbb-black pl-5 py-1">
            «{data.communication}»
          </p>

          <div className="mt-4 pt-3 border-t border-zinc-100 flex items-center justify-between text-xs font-mono text-sbb-stone">
            <span>
              {isDraftA
                ? isEn
                  ? 'Switch to Iteration 2 to see how leading with approved facts avoids hostile headline traps.'
                  : 'Wechseln Sie zu Iteration 2, um zu sehen, wie geprüfte Fakten Schlagzeilen-Fallen vermeiden.'
                : isEn
                ? 'Avoids repeating accusations; external policy debate still requires Comms & Legal review.'
                : 'Vermeidet Vorwurfs-Wiederholung; politische Debatte erfordert weiter Kommunikation & Recht.'}
            </span>
            <button
              onClick={() => setSelectedVersion(isDraftA ? 'draftB' : 'draftA')}
              className="text-sbb-red hover:underline flex items-center gap-1 font-bold cursor-pointer shrink-0 ml-3"
            >
              <RefreshCw className="w-3 h-3" />
              <span>
                {isDraftA
                  ? isEn
                    ? 'Switch to Iteration 2 →'
                    : 'Zu Iteration 2 →'
                  : isEn
                  ? '← Back to Iteration 1'
                  : '← Zurück zu Iteration 1'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* ═══ STAGE 02: HEADLINE, STAKEHOLDER PUSHBACK & KNOCK-ON EFFECTS ═══ */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <span
            className={`w-7 h-7 text-white font-mono text-xs font-bold flex items-center justify-center ${
              isDraftA ? 'bg-sbb-red' : 'bg-emerald-700'
            }`}
          >
            02
          </span>
          <span
            className={`font-mono text-xs font-bold uppercase tracking-widest ${
              isDraftA ? 'text-sbb-red' : 'text-emerald-800'
            }`}
          >
            {isDraftA
              ? isEn
                ? 'PROJECTED HEADLINE, STAKEHOLDER PUSHBACK & KNOCK-ON EFFECTS'
                : 'ERWARTETE SCHLAGZEILE, REAKTIONEN & FOLGEWIRKUNGEN'
              : isEn
              ? 'REVISED HEADLINE, STAKEHOLDER RESPONSE & REMAINING DEBATE'
              : 'SACHLICHERE SCHLAGZEILE, REAKTIONEN & VERBLEIBENDE DEBATTE'}
          </span>
        </div>

        {/* Projected Headline + Vulnerabilities */}
        <div className={`bg-white border-2 p-6 sm:p-8 relative overflow-hidden ${isDraftA ? 'border-sbb-red' : 'border-zinc-800'}`}>
          <div
            className={`absolute top-0 right-0 font-mono text-[10px] font-bold px-3 py-1 uppercase tracking-widest flex items-center gap-1.5 ${
              isDraftA ? 'bg-sbb-red text-white' : 'bg-zinc-800 text-white'
            }`}
          >
            <Flame className="w-3 h-3" />
            <span>
              {isDraftA
                ? isEn
                  ? 'CRITICAL HEADLINE RISK'
                  : 'KRITISCHE SCHLAGZEILE'
                : isEn
                ? 'FACTUAL HEADLINE'
                : 'SACHLICHE SCHLAGZEILE'}
            </span>
          </div>

          <div className="text-[11px] font-mono text-sbb-stone uppercase tracking-wider font-bold mb-2 flex items-center gap-2">
            <AlertTriangle className={`w-4 h-4 ${isDraftA ? 'text-red-700' : 'text-zinc-600'}`} />
            <span>
              {isEn
                ? isDraftA
                  ? 'LIKELY HEADLINE IF PUBLISHED AS-IS'
                  : 'LIKELY HEADLINE AFTER REVISION'
                : isDraftA
                ? 'ERWARTETE TITELZEILE OHNE ÄNDERUNG'
                : 'ERWARTETE TITELZEILE NACH ÜBERARBEITUNG'}
            </span>
          </div>

          <h2
            className={`text-xl sm:text-2xl font-black tracking-tight leading-tight uppercase my-3 ${
              isDraftA ? 'text-sbb-red' : 'text-sbb-black'
            }`}
          >
            {data.headline_from_hell}
          </h2>

          <div className="mt-5 pt-4 border-t border-zinc-100 grid grid-cols-1 md:grid-cols-3 gap-4">
            {data.vulnerabilities.map((v, i) => (
              <div
                key={i}
                className={`p-3 border ${
                  isDraftA ? 'bg-red-50/60 border-red-200' : 'bg-zinc-50 border-zinc-200'
                }`}
              >
                <div className={`font-bold text-xs font-mono uppercase mb-1 ${isDraftA ? 'text-sbb-red' : 'text-zinc-800'}`}>
                  0{i + 1} // {v.topic}
                </div>
                <p className="text-xs text-zinc-700 leading-snug">{v.explanation}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stakeholder Reactions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.stakeholder_reactions.map((node, i) => (
            <CascadeNode key={i} node={node} index={i} lang={lang} />
          ))}
        </div>

        {/* Knock-On Effects */}
        {data.second_order_effects && data.second_order_effects.length > 0 && (
          <div className="bg-white border border-sbb-aluminum p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.second_order_effects.map((effect, i) => (
              <div key={i} className="p-3.5 bg-sbb-cloud/50 border border-sbb-aluminum flex flex-col justify-between gap-2">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-mono font-bold uppercase text-sbb-stone">
                      {isEn ? `DOWNSTREAM IMPACT 0${i + 1}` : `FOLGEWIRKUNG 0${i + 1}`}
                    </span>
                    <span
                      className={`text-[9px] font-mono font-bold px-2 py-0.5 uppercase ${
                        effect.probability === 'high' ? 'bg-red-100 text-sbb-red' : 'bg-zinc-200 text-zinc-700'
                      }`}
                    >
                      {effect.probability === 'high' ? (isEn ? 'HIGH' : 'HOCH') : isEn ? 'MEDIUM' : 'MITTEL'}
                    </span>
                  </div>
                  <p className="text-xs font-bold text-sbb-black leading-snug">{effect.effect}</p>
                </div>
                <div className="pt-2 border-t border-zinc-200 flex items-center gap-1.5 text-[10px] font-mono text-sbb-stone">
                  <Clock className="w-3 h-3 text-sbb-red" />
                  <span>{effect.timeframe}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ═══ STAGE 03: UNRESOLVED TRADEOFFS & MANDATORY HUMAN CHECKLIST ═══ */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <span className="w-7 h-7 bg-sbb-black text-white font-mono text-xs font-bold flex items-center justify-center">
            03
          </span>
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-sbb-stone">
            {isEn
              ? 'UNRESOLVED TRADEOFFS & HUMAN SIGN-OFF CHECKLIST'
              : 'VERBLEIBENDE KONFLIKTE & MENSCHLICHE FREIGABE'}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Diagnosis & Residual Reality */}
          <div className="lg:col-span-2 bg-white border border-sbb-aluminum p-6 sm:p-8 shadow-sm space-y-5">
            <div>
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-sbb-stone mb-1.5">
                {isEn ? 'SITUATIONAL DIAGNOSIS' : 'DIAGNOSE DER AUSGANGSLAGE'}
              </div>
              <p className="text-base text-sbb-black leading-relaxed font-medium">
                {data.management_summary.diagnosis}
              </p>
            </div>

            <div className="border-t border-zinc-100 pt-4">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-sbb-stone mb-1.5">
                {isEn ? 'EXPECTED IMPACT & REMAINING TENSION' : 'ERWARTETE WIRKUNG & VERBLEIBENDE SPANNUNG'}
              </div>
              <p className="text-sm text-zinc-700 leading-relaxed">{data.management_summary.impact}</p>
            </div>

            <div className="border-t-2 border-sbb-black pt-4 bg-sbb-cloud/40 -mx-6 -mb-6 sm:-mx-8 sm:-mb-8 p-6 sm:p-8">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-sbb-red uppercase tracking-wider mb-1.5">
                <Lightbulb className="w-4 h-4" />
                <span>{isEn ? 'RECOMMENDED NEXT STEP' : 'EMPFOHLENES VORGEHEN'}</span>
              </div>
              <p className="text-sm sm:text-base font-bold text-sbb-black leading-relaxed">
                {data.management_summary.verdict}
              </p>
            </div>
          </div>

          {/* Qualitative Exposure Tradeoff & Human Gate */}
          <div className="bg-white border border-sbb-aluminum p-6 sm:p-8 shadow-sm flex flex-col justify-between space-y-5">
            <div className="space-y-3">
              <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-sbb-black">
                <Users className="w-4 h-4 text-sbb-red" />
                <span>{isEn ? 'PRE-RELEASE EXPOSURE CHECK' : 'VORAB-RISIKOEINSCHÄTZUNG'}</span>
              </div>
              <div
                className={`p-3 border text-xs font-mono font-bold ${
                  isDraftA
                    ? 'bg-red-50 border-red-200 text-sbb-red'
                    : 'bg-emerald-50 border-emerald-300 text-emerald-900'
                }`}
              >
                {data.risk_level}
              </div>
              <p className="text-xs text-zinc-700 leading-relaxed">
                {isDraftA
                  ? isEn
                    ? 'Self-inflicted wording traps dominate coverage and invite hostile headlines.'
                    : 'Selbstgemachte Formulierungsfallen dominieren die Berichterstattung.'
                  : isEn
                  ? 'Self-inflicted traps are avoided, but underlying pricing, regulatory, or policy criticism still requires human Comms & Legal calibration.'
                  : 'Selbstgemachte Fallen sind vermieden, aber inhaltliche Preis-, Behörden- oder Politikkritik erfordert weiter menschliche Abwägung.'}
              </p>
            </div>

            <div className="pt-4 border-t border-zinc-100">
              <div className="text-[10px] font-mono text-sbb-stone uppercase tracking-wider mb-2.5 font-bold">
                {isEn ? 'MANDATORY TEAM SIGN-OFF STEPS' : 'PFLICHTSCHRITTE VOR FREIGABE'}
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
