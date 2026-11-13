import React, { useState } from 'react';
import { Language } from '../../fixtures/scenarios';
import { getInquiryData, InquiryData, Contradiction } from '../../fixtures/inquiryFixtures';
import { 
  AlertOctagon, 
  Check, 
  Clock, 
  Copy, 
  Lock, 
  MessageSquare, 
  Newspaper, 
  ShieldAlert, 
  Sparkles,
  Scale,
  Target,
  FileCheck2
} from 'lucide-react';

interface Props {
  scenarioId: string;
  lang: Language;
  isStreaming: boolean;
  streamProgress: number;
}

export const MediaInquiryView: React.FC<Props> = ({
  scenarioId,
  lang,
  isStreaming,
  streamProgress
}) => {
  const data: InquiryData = getInquiryData(lang, scenarioId);
  const [copied, setCopied] = useState(false);
  const isEn = lang === 'en';

  const handleCopy = () => {
    navigator.clipboard.writeText(data.recommended_statement);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const highContradictions = data.contradictions.filter(c => c.severity === 'HIGH' || c.severity === 'HOCH');
  const midContradictions = data.contradictions.filter(c => c.severity === 'MEDIUM' || c.severity === 'MITTEL');

  return (
    <div className="space-y-8">
      {/* ═══ WAYFINDING HEADER & EXECUTIVE TELEMETRY RIBBON ═══ */}
      <div className="bg-white border border-sbb-aluminum p-6 sm:p-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-6 border-b border-zinc-100 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-sbb-red uppercase mb-1.5">
              <ShieldAlert className="w-4 h-4" />
              <span>{isEn ? 'DIRECTION 2: TOP-DOWN // 04B JOURNALIST INQUIRY & LEGAL CHECK' : 'RICHTUNG 2: TOP-DOWN // 04B MEDIENANFRAGE- & RECHTS-AUDIT'}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-sbb-black tracking-tight">
              {isEn ? 'Journalist Inquiry Check & Cross-Functional Alignment' : 'Medienanfrage-Prüfung & Abgleich mit Fachabteilungen'}
            </h1>
            <p className="text-sm text-sbb-stone mt-1 max-w-3xl leading-relaxed">
              {isEn
                ? 'Checks incoming journalist questions against approved company facts, flags quote traps, and aligns the response across Communications, Legal/Compliance, and technical specialists.'
                : 'Prüft eingehende Journalistenfragen gegen freigegebene Unternehmensfakten, markiert Fangfragen und stimmt die Antwort zwischen Kommunikation, Rechtsdienst und Fachbereich ab.'}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-red-50 border border-red-200 font-mono text-xs text-sbb-red font-bold">
              <Clock className="w-3.5 h-3.5" />
              <span>{isEn ? `DEADLINE: ${data.deadline}` : `FRIST: ${data.deadline}`}</span>
            </span>
          </div>
        </div>

        {/* Telemetry Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-2">
          <div className="p-4 bg-sbb-cloud/50 border-l-2 border-sbb-red">
            <div className="text-[10px] font-mono text-sbb-stone uppercase tracking-wider mb-1">
              {isEn ? 'INQUIRING OUTLET' : 'RECHERCHIERENDES MEDIUM'}
            </div>
            <div className="text-base font-bold text-sbb-black truncate">
              {data.outlet}
            </div>
            <div className="text-[10px] font-mono text-sbb-stone mt-1">
              {isEn ? 'Journalist: ' : 'Journalist: '}{data.journalist}
            </div>
          </div>

          <div className="p-4 bg-sbb-cloud/50 border-l-2 border-zinc-800">
            <div className="text-[10px] font-mono text-sbb-stone uppercase tracking-wider mb-1">
              {isEn ? 'EDITORIAL DEADLINE' : 'REDAKTIONSSCHLUSS'}
            </div>
            <div className="text-base font-bold text-sbb-black">
              {data.deadline}
            </div>
            <div className="text-[10px] font-mono text-sbb-red font-bold mt-1">
              {isEn ? 'Priority Tier 1' : 'Dringlichkeitsstufe 1'}
            </div>
          </div>

          <div className="p-4 bg-sbb-cloud/50 border-l-2 border-sbb-red">
            <div className="text-[10px] font-mono text-sbb-stone uppercase tracking-wider mb-1">
              {isEn ? 'CONTRADICTIONS IDENTIFIED' : 'IDENTIFIZIERTE WIDERSPRÜCHE'}
            </div>
            <div className="text-2xl font-black text-sbb-red tracking-tight">
              {data.contradictions.length} <span className="text-xs font-normal text-sbb-stone font-mono">{isEn ? 'Findings' : 'Befunde'}</span>
            </div>
            <div className="text-[10px] font-mono text-sbb-stone mt-1">
              {highContradictions.length}x {isEn ? 'Critical' : 'Kritisch'} • {midContradictions.length}x {isEn ? 'Moderate' : 'Moderat'}
            </div>
          </div>

          <div className="p-4 bg-sbb-cloud/50 border-l-2 border-emerald-600">
            <div className="text-[10px] font-mono text-sbb-stone uppercase tracking-wider mb-1">
              {isEn ? 'ALIGNMENT STATUS' : 'ANTWORT-STATUS'}
            </div>
            <div className="text-base font-bold text-emerald-700">
              {isEn ? 'DEFENSIBLE DRAFT READY' : 'ENTWURF BEREIT'}
            </div>
            <div className="text-[10px] font-mono text-sbb-stone mt-1">
              {isEn ? 'Legal & Regulatory Cleared' : 'Freigabe durch Medienstelle'}
            </div>
          </div>
        </div>
      </div>

      {/* ═══ STEP 01: SIDE-BY-SIDE INGESTION & COMPARISON ═══ */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <span className="w-7 h-7 bg-sbb-black text-white font-mono text-xs font-bold flex items-center justify-center">
            01
          </span>
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-sbb-stone">
            {isEn ? 'SIDE-BY-SIDE COMPARISON: INCOMING INQUIRY VS. DOCTRINE' : 'GEGENÜBERSTELLUNG: ANFRAGE VS. DOKTRIN'}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left: The Incoming Inquiry */}
          <div className="bg-white border border-sbb-aluminum p-6 sm:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-zinc-100">
                <div className="flex items-center gap-2">
                  <Newspaper className="w-4 h-4 text-sbb-red" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-sbb-black">
                    {isEn ? 'INCOMING JOURNALIST QUESTIONS' : 'EINGEHENDE MEDIENANFRAGE'}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-sbb-stone uppercase px-2 py-0.5 bg-sbb-cloud border border-sbb-aluminum">
                  {data.outlet}
                </span>
              </div>

              <div className="text-xs font-mono text-sbb-stone mb-4">
                {isEn ? 'Correspondents: ' : 'Absender: '}<span className="font-bold text-sbb-black">{data.journalist}</span>
              </div>

              <div className="bg-sbb-cloud/60 p-5 border-l-4 border-sbb-red text-sm text-sbb-black leading-relaxed whitespace-pre-line font-mono">
                {data.inquiry_text}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center justify-between text-xs font-mono text-sbb-stone">
              <span>DEADLINE: {data.deadline}</span>
              <span className="text-sbb-red font-bold">{isEn ? 'STATUS: ACTIVE INVESTIGATION' : 'STATUS: UNBEANTWORTET'}</span>
            </div>
          </div>

          {/* Right: Official Governance Doctrine */}
          <div className="bg-white border border-sbb-aluminum p-6 sm:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-zinc-100">
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-sbb-black" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-sbb-black">
                    {isEn ? 'OFFICIAL CORPORATE DOCTRINE & COMPLIANCE STANDARD' : 'GELTENDE UNTERNEHMENS-DOKTRIN'}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-emerald-700 uppercase px-2 py-0.5 bg-emerald-50 border border-emerald-200 font-bold">
                  {isEn ? 'VERIFIED POLICY' : 'VERIFIZIERTE SPRACHREGELUNG'}
                </span>
              </div>

              <div className="text-xs font-mono font-bold text-sbb-stone mb-3">
                {isEn ? 'REFERENCE DOCUMENT: ' : 'REFERENZDOKUMENT: '}{data.official_wording_title}
              </div>

              <div className="bg-sbb-cloud/60 p-5 border-l-4 border-sbb-black text-sm text-sbb-black leading-relaxed italic">
                {data.official_wording_quote}
              </div>

              <div className="mt-4 p-3 bg-zinc-50 border border-zinc-200 text-xs text-sbb-stone">
                <div className="font-bold text-sbb-black text-[10px] font-mono uppercase mb-1">
                  {isEn ? 'GOVERNANCE AUTHORITY & LEGAL BOUNDARY:' : 'BINDUNGSWIRKUNG DER DOKTRIN:'}
                </div>
                <p>
                  {isEn
                    ? `Statements must remain compliant with ${data.compliance_authority}. Any deviation requires joint executive and legal sign-off.`
                    : 'Aussagen gegenüber Medienvertretern dürfen nicht von den festgelegten Grundsätzen abweichen. Jegliche Nuancierung bedarf der Freigabe.'}
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-100 text-xs font-mono text-sbb-stone">
              {isEn ? `GOVERNANCE CORPUS: ${data.compliance_authority}` : 'QUELLE: ZENTRALES DOSSIER-ARCHIV (GOVERNANCE & COMPLIANCE)'}
            </div>
          </div>
        </div>
      </div>

      {/* ═══ STEP 02: THE COMMS ↔ LEGAL ↔ REGULATORY TRANSLATION MATRIX ═══ */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-7 h-7 bg-sbb-red text-white font-mono text-xs font-bold flex items-center justify-center">
              02
            </span>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-sbb-red">
              {isEn ? 'CONTRADICTION ANALYSIS & CROSS-FUNCTIONAL TRANSLATION' : 'IDENTIFIZIERTE WIDERSPRÜCHE & DISKREPANZEN'}
            </span>
          </div>
          <span className="text-xs font-mono text-sbb-stone">
            {data.contradictions.length} {isEn ? 'FRICTION POINTS AUDITED' : 'RISIKEN ERKANNT'}
          </span>
        </div>

        <div className="space-y-4">
          {data.contradictions.map((c: Contradiction, i: number) => {
            const isHigh = c.severity === 'HIGH' || c.severity === 'HOCH';
            const isMid = c.severity === 'MEDIUM' || c.severity === 'MITTEL';

            return (
              <div 
                key={i} 
                className={`bg-white border p-6 sm:p-8 shadow-sm transition-all ${
                  isHigh 
                    ? 'border-sbb-red/80' 
                    : isMid 
                    ? 'border-amber-400' 
                    : 'border-sbb-aluminum'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 mb-4 border-b border-zinc-100 gap-2">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-sbb-stone">
                      {isEn ? `FINDING 0${i + 1} //` : `BEFUND 0${i + 1} //`}
                    </span>
                    <h3 className="font-bold text-base text-sbb-black tracking-tight">
                      {c.title}
                    </h3>
                  </div>

                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono font-bold uppercase border shrink-0 ${
                    isHigh
                      ? 'bg-red-50 text-sbb-red border-red-200'
                      : isMid
                      ? 'bg-amber-50 text-amber-800 border-amber-200'
                      : 'bg-zinc-50 text-zinc-700 border-zinc-200'
                  }`}>
                    <AlertOctagon className="w-3.5 h-3.5" />
                    <span>{isEn ? `SEVERITY: ${c.severity}` : `SCHWEREGRAD: ${c.severity}`}</span>
                  </span>
                </div>

                {/* Question vs Doctrine */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                  <div className="p-3 bg-red-50/50 border-l-2 border-sbb-red">
                    <div className="text-[10px] font-mono text-sbb-red uppercase font-bold mb-1">
                      {isEn ? 'JOURNALIST CLAIM / QUESTION:' : 'BEHAUPTUNG / VORWURF DES JOURNALISTEN:'}
                    </div>
                    <p className="text-xs font-medium text-sbb-black">
                      «{c.quote_journalist}»
                    </p>
                  </div>

                  <div className="p-3 bg-zinc-50 border-l-2 border-sbb-black">
                    <div className="text-[10px] font-mono text-sbb-stone uppercase font-bold mb-1">
                      {isEn ? 'DOCTRINAL POSTURE:' : 'DOKTRINÄRE POSITIONIERUNG:'}
                    </div>
                    <p className="text-xs font-medium text-sbb-black">
                      «{c.quote_doctrine}»
                    </p>
                  </div>
                </div>

                {/* Cross-functional translation breakdown: The Trap, The Legal Boundary, The Translation */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-4 p-4 bg-sbb-cloud/40 border border-sbb-aluminum">
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase text-sbb-red">
                      <Target className="w-3.5 h-3.5" />
                      <span>{isEn ? 'THE INQUIRY TRAP' : 'DIE INTERVIEW-FALLE'}</span>
                    </div>
                    <p className="text-xs text-zinc-700 leading-snug">
                      {c.inquiry_trap}
                    </p>
                  </div>

                  <div className="space-y-1 border-t md:border-t-0 md:border-l border-zinc-200 pt-3 md:pt-0 md:pl-3">
                    <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase text-zinc-800">
                      <Scale className="w-3.5 h-3.5 text-zinc-600" />
                      <span>{isEn ? 'LEGAL / REGULATORY GUARDRAIL' : 'LEGAL / COMPLIANCE-GRENZE'}</span>
                    </div>
                    <p className="text-xs text-zinc-700 leading-snug">
                      {c.legal_boundary}
                    </p>
                  </div>

                  <div className="space-y-1 border-t md:border-t-0 md:border-l border-zinc-200 pt-3 md:pt-0 md:pl-3">
                    <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase text-emerald-800">
                      <FileCheck2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{isEn ? 'PLAIN-LANGUAGE ANSWER' : 'LAIENTAUGLICHE FORMULIERUNG'}</span>
                    </div>
                    <p className="text-xs text-zinc-800 font-medium leading-snug">
                      {c.clear_translation}
                    </p>
                  </div>
                </div>

                {/* Tactical Assessment */}
                <div className="mt-3 pt-3 border-t border-zinc-100">
                  <div className="text-[10px] font-mono text-sbb-stone uppercase tracking-wider mb-1 font-bold">
                    {isEn ? 'STRATEGIC SPOKESPERSON ADVISORY:' : 'STRATEGISCHE EINSCHÄTZUNG & EMPFOHLENE POSITIONIERUNG:'}
                  </div>
                  <p className="text-sm text-zinc-800 leading-relaxed font-sans">
                    {c.assessment}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ═══ STEP 03: RECOMMENDED STATEMENT STUDIO ═══ */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <span className="w-7 h-7 bg-sbb-black text-white font-mono text-xs font-bold flex items-center justify-center">
            03
          </span>
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-sbb-stone">
            {isEn ? 'ACTIONABLE, LEGALLY SECURE STATEMENT DRAFT' : 'FREIGABEFÄHIGER ANTWORTENTWURF'}
          </span>
        </div>

        <div className="bg-white border-2 border-sbb-black p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-6 border-b border-zinc-200 gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-sbb-red uppercase tracking-wider mb-1">
                <Sparkles className="w-4 h-4" />
                <span>{isEn ? 'AUTHORIZED DEFENSIVE WORDING' : 'EMPFOHLENE DEFENSIVE SPRACHREGELUNG'}</span>
              </div>
              <h3 className="text-lg font-bold text-sbb-black">
                {isEn ? 'Approved Statement for Written Attribution' : 'Autorisierter Entwurf für schriftliche Rückmeldung'}
              </h3>
            </div>

            <button
              onClick={handleCopy}
              className="px-5 py-2.5 bg-sbb-black hover:bg-zinc-800 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-sm self-start sm:self-auto shrink-0"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>{isEn ? 'Copied to Clipboard' : 'In Zwischenablage kopiert'}</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-zinc-400" />
                  <span>{isEn ? 'Copy Statement' : 'Stellungnahme kopieren'}</span>
                </>
              )}
            </button>
          </div>

          {/* Statement Content */}
          <div className="bg-sbb-cloud/40 p-6 border-l-4 border-sbb-black text-base text-sbb-black leading-relaxed whitespace-pre-line max-w-4xl font-sans mb-6">
            {data.recommended_statement}
          </div>

          {/* Strategic Advisory Alert Banner */}
          <div className="p-4 bg-zinc-900 text-white flex items-start gap-3">
            <MessageSquare className="w-4 h-4 text-sbb-red shrink-0 mt-0.5" />
            <div className="space-y-1">
              <div className="font-mono text-[10px] uppercase font-bold tracking-wider text-sbb-red">
                {isEn ? 'SPOKESPERSON BRIEFING / BEFORE CALLING THE JOURNALIST' : 'HINWEIS FÜR MEDIENSPRECHER / BRIEFING VOR DEM TELEFONAT'}
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed font-mono">
                {data.strategic_advisory}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaInquiryView;
