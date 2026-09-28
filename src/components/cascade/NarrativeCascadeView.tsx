import React from 'react';
import { CASCADE_FIXTURES } from '../../fixtures/cascadeFixtures';
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
  TrendingUp, 
  Users 
} from 'lucide-react';

interface Props {
  scenarioId: string;
  isStreaming: boolean;
  streamProgress: number;
}

export const NarrativeCascadeView: React.FC<Props> = ({
  scenarioId,
  isStreaming,
  streamProgress
}) => {
  const data = CASCADE_FIXTURES[scenarioId] || CASCADE_FIXTURES.alpine_transit_crisis;

  return (
    <div className="space-y-8">
      {/* ═══ WAYFINDING HEADER & EXECUTIVE TELEMETRY RIBBON ═══ */}
      <div className="bg-white border border-sbb-aluminum p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-6 border-b border-zinc-100 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-sbb-red uppercase mb-1.5">
              <Layers className="w-4 h-4" />
              <span>MODUL 01 // BOTSCHAFTS-STRESSTEST</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-sbb-black tracking-tight">
              Kaskadensimulation & Stakeholder-Resonanz
            </h1>
            <p className="text-sm text-sbb-stone mt-1 max-w-3xl leading-relaxed">
              Prüft, wie ein interner Kommunikationsentwurf in den Medien zugespitzt wird und welche Gegenreaktionen bei Schlüsselakteuren innerhalb von 48 Stunden ausgelöst werden.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-sbb-cloud border border-sbb-aluminum font-mono text-xs text-sbb-black font-bold">
              <span className="w-2 h-2 rounded-full bg-sbb-red animate-pulse" />
              <span>STRESSTEST BEREIT</span>
            </span>
          </div>
        </div>

        {/* Executive KPI Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-2">
          <div className="p-4 bg-sbb-cloud/50 border-l-2 border-sbb-red">
            <div className="text-[10px] font-mono text-sbb-stone uppercase tracking-wider mb-1">
              RISIKO-SCORE
            </div>
            <div className="text-2xl font-black text-sbb-red tracking-tight">
              {data.risk_score} <span className="text-xs font-normal text-sbb-stone">/ 10</span>
            </div>
            <div className="text-[10px] font-mono text-sbb-stone mt-1">Erhöhtes Reputationsrisiko</div>
          </div>

          <div className="p-4 bg-sbb-cloud/50 border-l-2 border-zinc-800">
            <div className="text-[10px] font-mono text-sbb-stone uppercase tracking-wider mb-1">
              STAKEHOLDER-NODES
            </div>
            <div className="text-2xl font-black text-sbb-black tracking-tight">
              {data.stakeholder_reactions.length}
            </div>
            <div className="text-[10px] font-mono text-sbb-stone mt-1">Überwachte Akteure</div>
          </div>

          <div className="p-4 bg-sbb-cloud/50 border-l-2 border-zinc-800">
            <div className="text-[10px] font-mono text-sbb-stone uppercase tracking-wider mb-1">
              SCHWACHSTELLEN
            </div>
            <div className="text-2xl font-black text-sbb-black tracking-tight">
              {data.vulnerabilities.length}
            </div>
            <div className="text-[10px] font-mono text-sbb-stone mt-1">Kritische Angriffsflächen</div>
          </div>

          <div className="p-4 bg-sbb-cloud/50 border-l-2 border-zinc-800">
            <div className="text-[10px] font-mono text-sbb-stone uppercase tracking-wider mb-1">
              ZEITLICHE DYNAMIK
            </div>
            <div className="text-2xl font-black text-sbb-black tracking-tight">
              &lt; 2h
            </div>
            <div className="text-[10px] font-mono text-sbb-stone mt-1">Bis Boulevard-Zuspitzung</div>
          </div>
        </div>
      </div>

      {/* ═══ STEP 01: INPUT STRATEGY ═══ */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <span className="w-7 h-7 bg-sbb-black text-white font-mono text-xs font-bold flex items-center justify-center">
            01
          </span>
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-sbb-stone">
            GEPLANTE BOTSCHAFT // AUSGANGSLAGE
          </span>
        </div>

        <div className="bg-white border border-sbb-aluminum p-6 sm:p-8 shadow-sm">
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-zinc-100">
            <span className="text-xs font-mono font-bold text-sbb-stone uppercase tracking-wider">
              INTERNER ENTWURF DER MEDIENMITTEILUNG (TEXTVORLAGE)
            </span>
            <span className="text-[10px] font-mono text-zinc-400">STATUS: IN PRÜFUNG</span>
          </div>
          <p className="text-lg sm:text-xl font-medium text-sbb-black leading-relaxed italic border-l-4 border-sbb-black pl-5 py-1">
            «{data.communication}»
          </p>
        </div>
      </div>

      {/* Flow Indicator */}
      <div className="flex justify-center -my-3">
        <div className="flex items-center gap-2 px-3 py-1 bg-white border border-sbb-aluminum shadow-xs font-mono text-[10px] text-sbb-stone">
          <ArrowDown className="w-3.5 h-3.5 text-sbb-red" />
          <span>ALGORITHMISCHE SIMULATION DES MEDIALEN ECHO-EFFEKTS</span>
        </div>
      </div>

      {/* ═══ STEP 02: MEDIALE ZUSPITZUNG (HEADLINE FROM HELL) ═══ */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <span className="w-7 h-7 bg-sbb-red text-white font-mono text-xs font-bold flex items-center justify-center">
            02
          </span>
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-sbb-red">
            MEDIALE ZUSPITZUNG // HEADLINE FROM HELL
          </span>
        </div>

        <div className="bg-white border-2 border-sbb-red p-6 sm:p-8 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-sbb-red text-white font-mono text-[10px] font-bold px-3 py-1 uppercase tracking-widest flex items-center gap-1.5">
            <Flame className="w-3 h-3" />
            <span>WORST-CASE BOULEVARD-TITEL</span>
          </div>

          <div className="text-[11px] font-mono text-sbb-red uppercase tracking-wider font-bold mb-2 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4" />
            <span>ERWARTETE TITELZEILE (LEITMEDIEN / BOULEVARD)</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-sbb-red tracking-tight leading-tight uppercase my-4">
            {data.headline_from_hell}
          </h2>

          {/* Vulnerability Tags */}
          <div className="mt-6 pt-5 border-t border-red-100">
            <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider mb-3">
              IDENTIFIZIERTE SCHWACHSTELLEN IM NARRATIV:
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {data.vulnerabilities.map((v, i) => (
                <div key={i} className="p-3 bg-red-50/60 border border-red-200">
                  <div className="font-bold text-xs text-sbb-red font-mono uppercase mb-1">
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
          <span>DIREKTE AUSWIRKUNGEN AUF STAKEHOLDER & MEINUNGSBILDNER</span>
        </div>
      </div>

      {/* ═══ STEP 03: STAKEHOLDER-DYNAMIK ═══ */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-7 h-7 bg-sbb-black text-white font-mono text-xs font-bold flex items-center justify-center">
              03
            </span>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-sbb-stone">
              STAKEHOLDER-REAKTIONEN // ERSTREAKTION INNERHALB 24H
            </span>
          </div>
          <span className="text-[10px] font-mono text-sbb-stone hidden sm:inline-block">
            {data.stakeholder_reactions.length} AKTEURE SIMULIERT
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.stakeholder_reactions.map((node, i) => (
            <CascadeNode key={i} node={node} index={i} />
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
              FOLGEWIRKUNGEN ZWEITER ORDNUNG // POLITISCHE & FINANZIELLE KASKADE
            </span>
          </div>

          <div className="bg-white border border-sbb-aluminum p-6 sm:p-8 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.second_order_effects.map((effect, i) => (
                <div key={i} className="p-4 bg-sbb-cloud/50 border border-sbb-aluminum flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono font-bold uppercase text-sbb-stone">
                        FOLGEEFFEKT 0{i + 1}
                      </span>
                      <span className={`text-[9px] font-mono font-bold px-2 py-0.5 uppercase ${
                        effect.probability === 'high' 
                          ? 'bg-red-100 text-sbb-red' 
                          : 'bg-zinc-200 text-zinc-700'
                      }`}>
                        WAHRSCHEINLICHKEIT: {effect.probability === 'high' ? 'HOCH' : 'MITTEL'}
                      </span>
                    </div>
                    <p className="text-sm font-bold text-sbb-black mb-3">
                      {effect.effect}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-zinc-200 flex items-center gap-1.5 text-[10px] font-mono text-sbb-stone">
                    <Clock className="w-3 h-3 text-sbb-red" />
                    <span>ERWARTETES ZEITFENSTER: {effect.timeframe}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ═══ STEP 05: MANAGEMENT SUMMARY & VERDICT ═══ */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <span className="w-7 h-7 bg-sbb-black text-white font-mono text-xs font-bold flex items-center justify-center">
            05
          </span>
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-sbb-stone">
            STRATEGISCHE WEICHENSTELLUNG // MANAGEMENT-DIAGNOSE
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Detailed Diagnosis & Recommendation */}
          <div className="lg:col-span-2 bg-white border border-sbb-aluminum p-6 sm:p-8 shadow-sm space-y-6">
            <div>
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-sbb-stone mb-2">
                DIAGNOSE DER AUSGANGSLAGE
              </div>
              <p className="text-base text-sbb-black leading-relaxed font-medium">
                {data.management_summary?.diagnosis}
              </p>
            </div>

            <div className="border-t border-zinc-100 pt-5">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-sbb-stone mb-2">
                REPUTATIVE AUSWIRKUNG BEI UNVERÄNDERTER KOMMUNIKATION
              </div>
              <p className="text-sm text-zinc-700 leading-relaxed">
                {data.management_summary?.impact}
              </p>
            </div>

            <div className="border-t-2 border-sbb-black pt-5 bg-sbb-cloud/40 -mx-6 -mb-6 sm:-mx-8 sm:-mb-8 p-6 sm:p-8">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-sbb-red uppercase tracking-wider mb-2">
                <Lightbulb className="w-4 h-4" />
                <span>KONKRETE HANDLUNGSEMPFEHLUNG DER STRATEGIEABTEILUNG</span>
              </div>
              <p className="text-base font-bold text-sbb-black leading-relaxed">
                {data.management_summary?.verdict}
              </p>
            </div>
          </div>

          {/* Risk Gauge & Action Checklist */}
          <div className="bg-white border border-sbb-aluminum p-6 sm:p-8 shadow-sm flex flex-col justify-between">
            <RiskGauge score={data.risk_score} />

            <div className="mt-6 pt-5 border-t border-zinc-100">
              <div className="text-[10px] font-mono text-sbb-stone uppercase tracking-wider mb-3">
                SOFORT-MASSNAHMEN FÜR DIE MEDIENSTELLE
              </div>
              <ul className="space-y-2 text-xs text-zinc-700 font-mono">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-sbb-red shrink-0" />
                  <span>Sprachregelung angleichen</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-sbb-red shrink-0" />
                  <span>Standortkantone vorinformieren</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-sbb-red shrink-0" />
                  <span>Q&A für Hintergrundgespräche</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NarrativeCascadeView;
