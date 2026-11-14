import React, { useState } from 'react';
import { Language } from '../../fixtures/scenarios';
import { NarrativeCascadeView } from './NarrativeCascadeView';
import { MediaInquiryView } from '../inquiry/MediaInquiryView';
import { 
  ShieldCheck, 
  Layers, 
  ShieldAlert, 
  FileCheck2,
  AlertTriangle
} from 'lucide-react';

interface Props {
  scenarioId: string;
  lang: Language;
  isStreaming: boolean;
  streamProgress: number;
}

export type SubModuleMode = 'stress_test' | 'inquiry_defense';

export const StressTestAndInquiryView: React.FC<Props> = ({
  scenarioId,
  lang,
  isStreaming,
  streamProgress
}) => {
  const [subMode, setSubMode] = useState<SubModuleMode>('stress_test');
  const isEn = lang === 'en';

  return (
    <div className="space-y-6">
      {/* ═══ TOP TWO-PART SUB-NAVIGATOR ═══ */}
      <div className="bg-white border border-sbb-aluminum p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-sbb-stone uppercase tracking-wider">
          <ShieldCheck className="w-4 h-4 text-sbb-red" />
          <span>{isEn ? 'DIRECTION 2: TOP-DOWN // MODULE 04: GEO FRAMEWORK STRESS-TEST & INQUIRY DEFENSE' : 'RICHTUNG 2: TOP-DOWN // MODUL 04: GEO-FRAMEWORK-STRESSTEST & ANFRAGE-PRÜFUNG'}</span>
        </div>

        <div className="flex items-center gap-2 bg-sbb-cloud p-1 border border-sbb-aluminum">
          <button
            onClick={() => setSubMode('stress_test')}
            className={`px-4 py-1.5 font-mono text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
              subMode === 'stress_test'
                ? 'bg-sbb-black text-white'
                : 'text-sbb-stone hover:text-sbb-black'
            }`}
          >
            <Layers className="w-3.5 h-3.5 text-sbb-red" />
            <span>{isEn ? 'A. Draft & GEO Stress-Test (Before vs After)' : 'A. Entwurf- & GEO-Stresstest (Vorher vs Nachher)'}</span>
          </button>

          <button
            onClick={() => setSubMode('inquiry_defense')}
            className={`px-4 py-1.5 font-mono text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
              subMode === 'inquiry_defense'
                ? 'bg-sbb-black text-white'
                : 'text-sbb-stone hover:text-sbb-black'
            }`}
          >
            <ShieldAlert className="w-3.5 h-3.5 text-sbb-red" />
            <span>{isEn ? 'B. Journalist Inquiry & GEO Narrative Pivot' : 'B. Medienanfrage & GEO-Narrativ-Brücke'}</span>
          </button>
        </div>
      </div>

      {/* Sub-view rendering */}
      {subMode === 'stress_test' ? (
        <>
          <NarrativeCascadeView
            scenarioId={scenarioId}
            lang={lang}
            isStreaming={isStreaming}
            streamProgress={streamProgress}
          />

          {/* Sub-module Hand-off Bridge (04A → 04B) */}
          <div className="bg-sbb-black text-white border-l-4 border-sbb-red p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-6">
            <div className="space-y-1">
              <div className="text-[10px] font-mono text-sbb-red uppercase tracking-widest font-bold">
                {isEn ? 'MODULE 04 SUB-WORKFLOW // 04A (DRAFT STRESS-TEST) → 04B (MEDIA INQUIRY CHECK)' : 'MODUL 04 TEILPROZESS // 04A (STRESSTEST) → 04B (MEDIENANFRAGE-PRÜFUNG)'}
              </div>
              <p className="text-xs sm:text-sm text-zinc-200">
                {isEn
                  ? 'Draft stress-test complete. Now test how tough, hostile press inquiries are audited against the GEO framework to avoid repeating critic traps.'
                  : 'Entwurf-Stresstest abgeschlossen. Prüfen Sie nun, wie kritische Medienanfragen dekonstruiert werden, ohne in Vorwurfsfallen zu tappen.'}
              </p>
            </div>
            <button
              onClick={() => {
                setSubMode('inquiry_defense');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-4 py-2.5 bg-sbb-red hover:bg-red-700 text-white font-mono text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-2 cursor-pointer shrink-0 self-start sm:self-auto"
            >
              <span>{isEn ? 'Switch to 04B: Journalist Inquiry Check' : 'Zu 04B: Medienanfrage-Check wechseln'}</span>
              <ShieldAlert className="w-4 h-4" />
            </button>
          </div>
        </>
      ) : (
        <>
          <MediaInquiryView
            scenarioId={scenarioId}
            lang={lang}
            isStreaming={isStreaming}
            streamProgress={streamProgress}
          />

          {/* Sub-module Hand-off Bridge (04B → 04A) */}
          <div className="bg-sbb-black text-white border-l-4 border-sbb-red p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-6">
            <div className="space-y-1">
              <div className="text-[10px] font-mono text-sbb-red uppercase tracking-widest font-bold">
                {isEn ? 'MODULE 04 SUB-WORKFLOW // 04B (MEDIA INQUIRY CHECK) → 04A (DRAFT STRESS-TEST)' : 'MODUL 04 TEILPROZESS // 04B (MEDIENANFRAGE) → 04A (STRESSTEST)'}
              </div>
              <p className="text-xs sm:text-sm text-zinc-200">
                {isEn
                  ? 'Inquiry check complete. Return to the Press Release & Statement Stress-Test to inspect 48-hour stakeholder reactions.'
                  : 'Medienanfrage geprüft. Zurück zum Medienmitteilungs- & Statement-Stresstest für 48h-Stakeholder-Reaktionen.'}
              </p>
            </div>
            <button
              onClick={() => {
                setSubMode('stress_test');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-4 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-white font-mono text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-2 cursor-pointer shrink-0 self-start sm:self-auto border border-zinc-700"
            >
              <Layers className="w-4 h-4 text-sbb-red" />
              <span>{isEn ? 'Return to 04A: Draft Stress-Test' : 'Zurück zu 04A: Entwurf-Stresstest'}</span>
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default StressTestAndInquiryView;
