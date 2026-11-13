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
          <span>{isEn ? 'DIRECTION 2: TOP-DOWN // MODULE 04: PRE-RELEASE GOVERNANCE & DEFENSE' : 'RICHTUNG 2: TOP-DOWN // MODUL 04: PRE-RELEASE PRÜFUNG & DEFENSIVE'}</span>
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
            <span>{isEn ? 'A. Draft Stress-Test (Before vs After)' : 'A. Botschafts-Stresstest (Vorher vs Nachher)'}</span>
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
            <span>{isEn ? 'B. Journalist Inquiry & Legal Audit' : 'B. Medienanfrage- & Rechts-Audit'}</span>
          </button>
        </div>
      </div>

      {/* Sub-view rendering */}
      {subMode === 'stress_test' ? (
        <NarrativeCascadeView
          scenarioId={scenarioId}
          lang={lang}
          isStreaming={isStreaming}
          streamProgress={streamProgress}
        />
      ) : (
        <MediaInquiryView
          scenarioId={scenarioId}
          lang={lang}
          isStreaming={isStreaming}
          streamProgress={streamProgress}
        />
      )}
    </div>
  );
};

export default StressTestAndInquiryView;
