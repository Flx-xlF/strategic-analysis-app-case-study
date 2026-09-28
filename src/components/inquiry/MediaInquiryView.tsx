import React, { useState } from 'react';
import { INQUIRY_FIXTURES } from '../../fixtures/inquiryFixtures';
import { 
  AlertOctagon, 
  AlertTriangle, 
  Check, 
  Clock, 
  Copy, 
  FileText, 
  HelpCircle, 
  Lock, 
  MessageSquare, 
  Newspaper, 
  ShieldAlert, 
  Sparkles 
} from 'lucide-react';

interface Props {
  scenarioId: string;
  isStreaming: boolean;
  streamProgress: number;
}

export const MediaInquiryView: React.FC<Props> = ({
  scenarioId,
  isStreaming,
  streamProgress
}) => {
  const data = INQUIRY_FIXTURES[scenarioId] || INQUIRY_FIXTURES.esg_investigation;
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(data.recommended_statement);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const highContradictions = data.contradictions.filter(c => c.severity === 'HOCH');
  const midContradictions = data.contradictions.filter(c => c.severity === 'MITTEL');

  return (
    <div className="space-y-8">
      {/* ═══ WAYFINDING HEADER & EXECUTIVE TELEMETRY RIBBON ═══ */}
      <div className="bg-white border border-sbb-aluminum p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-6 border-b border-zinc-100 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-sbb-red uppercase mb-1.5">
              <ShieldAlert className="w-4 h-4" />
              <span>MODUL 02 // WIDERSPRUCHS-AUDIT</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-sbb-black tracking-tight">
              Medienanfrage-Audit & Diskrepanzanalyse
            </h1>
            <p className="text-sm text-sbb-stone mt-1 max-w-3xl leading-relaxed">
              Vergleicht eingehende Recherchefragen von Investigativjournalisten automatisch mit den bestehenden Unternehmensdoktrinen und identifiziert Schwachstellen sowie Widersprüche.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-red-50 border border-red-200 font-mono text-xs text-sbb-red font-bold">
              <Clock className="w-3.5 h-3.5" />
              <span>FRIST: {data.deadline}</span>
            </span>
          </div>
        </div>

        {/* Telemetry Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-2">
          <div className="p-4 bg-sbb-cloud/50 border-l-2 border-sbb-red">
            <div className="text-[10px] font-mono text-sbb-stone uppercase tracking-wider mb-1">
              RECHERCHIERENDES MEDIUM
            </div>
            <div className="text-base font-bold text-sbb-black truncate">
              {data.outlet}
            </div>
            <div className="text-[10px] font-mono text-sbb-stone mt-1">
              Journalist: {data.journalist}
            </div>
          </div>

          <div className="p-4 bg-sbb-cloud/50 border-l-2 border-zinc-800">
            <div className="text-[10px] font-mono text-sbb-stone uppercase tracking-wider mb-1">
              REDAKTIONSSCHLUSS
            </div>
            <div className="text-base font-bold text-sbb-black">
              {data.deadline}
            </div>
            <div className="text-[10px] font-mono text-sbb-red font-bold mt-1">Dringlichkeitsstufe 1</div>
          </div>

          <div className="p-4 bg-sbb-cloud/50 border-l-2 border-sbb-red">
            <div className="text-[10px] font-mono text-sbb-stone uppercase tracking-wider mb-1">
              IDENTIFIZIERTE WIDERSPRÜCHE
            </div>
            <div className="text-2xl font-black text-sbb-red tracking-tight">
              {data.contradictions.length} <span className="text-xs font-normal text-sbb-stone font-mono">Befunde</span>
            </div>
            <div className="text-[10px] font-mono text-sbb-stone mt-1">
              {highContradictions.length}x Kritisch • {midContradictions.length}x Moderat
            </div>
          </div>

          <div className="p-4 bg-sbb-cloud/50 border-l-2 border-emerald-600">
            <div className="text-[10px] font-mono text-sbb-stone uppercase tracking-wider mb-1">
              ANTWORT-STATUS
            </div>
            <div className="text-base font-bold text-emerald-700">
              ENTWURF BEREIT
            </div>
            <div className="text-[10px] font-mono text-sbb-stone mt-1">Freigabe durch Medienstelle</div>
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
            GEGENÜBERSTELLUNG // ANFRAGE VS. UNTERNEHMENS-DOKTRIN
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
                    EINGEHENDE MEDIENANFRAGE
                  </span>
                </div>
                <span className="text-[10px] font-mono text-sbb-stone uppercase px-2 py-0.5 bg-sbb-cloud border border-sbb-aluminum">
                  {data.outlet}
                </span>
              </div>

              <div className="text-xs font-mono text-sbb-stone mb-4">
                Absender: <span className="font-bold text-sbb-black">{data.journalist}</span>
              </div>

              <div className="bg-sbb-cloud/60 p-5 border-l-4 border-sbb-red text-sm text-sbb-black leading-relaxed whitespace-pre-line font-mono">
                {data.inquiry_text}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center justify-between text-xs font-mono text-sbb-stone">
              <span>DEADLINE: {data.deadline}</span>
              <span className="text-sbb-red font-bold">STATUS: UNBEANTWORTET</span>
            </div>
          </div>

          {/* Right: Official Wording Doctrine */}
          <div className="bg-white border border-sbb-aluminum p-6 sm:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-zinc-100">
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-sbb-black" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-sbb-black">
                    GELTENDE UNTERNEHMENS-DOKTRIN
                  </span>
                </div>
                <span className="text-[10px] font-mono text-emerald-700 uppercase px-2 py-0.5 bg-emerald-50 border border-emerald-200 font-bold">
                  VERIFIZIERTE SPRACHREGELUNG
                </span>
              </div>

              <div className="text-xs font-mono font-bold text-sbb-stone mb-3">
                REFERENZDOKUMENT: {data.official_wording_title}
              </div>

              <div className="bg-sbb-cloud/60 p-5 border-l-4 border-sbb-black text-sm text-sbb-black leading-relaxed italic">
                {data.official_wording_quote}
              </div>

              <div className="mt-4 p-3 bg-zinc-50 border border-zinc-200 text-xs text-sbb-stone">
                <div className="font-bold text-sbb-black text-[10px] font-mono uppercase mb-1">
                  BINDUNGSWIRKUNG DER DOKTRIN:
                </div>
                <p>
                  Aussagen gegenüber Medienvertretern dürfen nicht von den festgelegten Grundsätzen abweichen. Jegliche Nuancierung bedarf der Freigabe der Unternehmensleitung.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-100 text-xs font-mono text-sbb-stone">
              QUELLE: ZENTRALES DOSSIER-ARCHIV (GOVERNANCE & COMPLIANCE)
            </div>
          </div>
        </div>
      </div>

      {/* ═══ STEP 02: WIDERSPRUCHS-MATRIX ═══ */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-7 h-7 bg-sbb-red text-white font-mono text-xs font-bold flex items-center justify-center">
              02
            </span>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-sbb-red">
              WIDERSPRUCHS-BEFUNDE // STRATEGISCHE DISKREPANZ-MATRIX
            </span>
          </div>
          <span className="text-xs font-mono text-sbb-stone">
            {data.contradictions.length} RISIKEN ERKANNT
          </span>
        </div>

        <div className="space-y-4">
          {data.contradictions.map((c, i) => (
            <div 
              key={i} 
              className={`bg-white border p-6 sm:p-8 shadow-sm transition-all ${
                c.severity === 'HOCH' 
                  ? 'border-sbb-red/80' 
                  : c.severity === 'MITTEL' 
                  ? 'border-amber-400' 
                  : 'border-sbb-aluminum'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 mb-4 border-b border-zinc-100 gap-2">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-sbb-stone">
                    BEFUND 0{i + 1} //
                  </span>
                  <h3 className="font-bold text-base text-sbb-black tracking-tight">
                    {c.title}
                  </h3>
                </div>

                <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono font-bold uppercase border shrink-0 ${
                  c.severity === 'HOCH'
                    ? 'bg-red-50 text-sbb-red border-red-200'
                    : c.severity === 'MITTEL'
                    ? 'bg-amber-50 text-amber-800 border-amber-200'
                    : 'bg-zinc-50 text-zinc-700 border-zinc-200'
                }`}>
                  <AlertOctagon className="w-3.5 h-3.5" />
                  <span>SCHWEREGRAD: {c.severity}</span>
                </span>
              </div>

              {/* Side by Side Claim vs Doctrine */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div className="p-3 bg-red-50/50 border-l-2 border-sbb-red">
                  <div className="text-[10px] font-mono text-sbb-red uppercase font-bold mb-1">
                    BEHAUPTUNG / VORWURF DES JOURNALISTEN:
                  </div>
                  <p className="text-xs font-medium text-sbb-black">
                    «{c.quote_journalist}»
                  </p>
                </div>

                <div className="p-3 bg-zinc-50 border-l-2 border-sbb-black">
                  <div className="text-[10px] font-mono text-sbb-stone uppercase font-bold mb-1">
                    DOKTRINÄRE POSITIONIERUNG:
                  </div>
                  <p className="text-xs font-medium text-sbb-black">
                    «{c.quote_doctrine}»
                  </p>
                </div>
              </div>

              {/* Tactical Assessment */}
              <div className="mt-4 pt-3 border-t border-zinc-100">
                <div className="text-[10px] font-mono text-sbb-stone uppercase tracking-wider mb-1 font-bold">
                  STRATEGISCHE EINSCHÄTZUNG & EMPFOHLENE POSITIONIERUNG:
                </div>
                <p className="text-sm text-zinc-800 leading-relaxed font-sans">
                  {c.assessment}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ═══ STEP 03: RECOMMENDED STATEMENT STUDIO ═══ */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <span className="w-7 h-7 bg-sbb-black text-white font-mono text-xs font-bold flex items-center justify-center">
            03
          </span>
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-sbb-stone">
            FREIGABEFÄHIGER ANTWORTENTWURF // EMPFOHLENE STELLUNGNAHME
          </span>
        </div>

        <div className="bg-white border-2 border-sbb-black p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-6 border-b border-zinc-200 gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-sbb-red uppercase tracking-wider mb-1">
                <Sparkles className="w-4 h-4" />
                <span>KI-GENERIERTE DEFENSIVE SPRACHREGELUNG</span>
              </div>
              <h3 className="text-lg font-bold text-sbb-black">
                Autorisierter Entwurf für schriftliche Rückmeldung
              </h3>
            </div>

            <button
              onClick={handleCopy}
              className="px-5 py-2.5 bg-sbb-black hover:bg-zinc-800 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-sm self-start sm:self-auto shrink-0"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>In Zwischenablage kopiert</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-zinc-400" />
                  <span>Stellungnahme kopieren</span>
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
                HINWEIS FÜR MEDIENSPRECHER / BRIEFING VOR DEM TELEFONAT
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
