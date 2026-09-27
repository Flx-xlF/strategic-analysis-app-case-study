import React, { useState } from 'react';
import { INQUIRY_FIXTURES } from '../../fixtures/inquiryFixtures';
import { ShieldAlert, AlertCircle, CheckCircle, Clock, BookOpen, MessageSquare, Copy, Check } from 'lucide-react';

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
  const data = INQUIRY_FIXTURES[scenarioId] || INQUIRY_FIXTURES.cloud_sovereignty;
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(data.recommended_statement);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Top Banner: Incoming Press Inquiry */}
      <div className="bg-white p-5 swiss-border shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3 pb-3 mb-4 border-b border-brand-aluminum">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 bg-brand-red inline-block"></span>
            <div>
              <span className="type-signage text-zinc-500 block">EINGEHENDE MEDIENANFRAGE</span>
              <h2 className="font-bold text-sm text-zinc-900 font-mono">
                {data.outlet} — {data.journalist}
              </h2>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-brand-red/10 border border-brand-red/30 px-3 py-1.5 text-xs text-brand-red font-mono font-bold">
            <Clock className="w-3.5 h-3.5" />
            <span>FRIST: {data.deadline}</span>
          </div>
        </div>

        <div className="bg-brand-cloud/60 p-4 border-l-4 border-brand-red font-sans text-xs sm:text-sm text-zinc-800 leading-relaxed whitespace-pre-line">
          {data.inquiry_text}
        </div>
      </div>

      {/* Side-by-Side: Official Doctrine vs Contradiction Audit */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left: Truth Ledger / Official Doctrine */}
        <div className="bg-white p-5 swiss-border flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 pb-3 mb-3 border-b border-brand-aluminum">
              <BookOpen className="w-4 h-4 text-brand-black" />
              <span className="type-signage text-zinc-700">TRUTH LEDGER: OFFIZIELLES WORDING</span>
            </div>
            <div className="type-mono text-[11px] font-bold text-zinc-600 mb-2">
              {data.official_wording_title}
            </div>
            <div className="bg-zinc-50 p-4 border border-brand-aluminum font-serif text-xs sm:text-sm text-zinc-900 leading-relaxed italic border-l-4 border-l-brand-black">
              {data.official_wording_quote}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-brand-aluminum text-[10px] type-mono text-zinc-500">
            QUELLE: GESTÜTZT DURCH DIE OFFIZIELLE VERTEX AI RAG-DOKTRIN (SSOT)
          </div>
        </div>

        {/* Right: Contradiction Detection */}
        <div className="bg-white p-5 swiss-border">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-brand-aluminum">
            <div className="flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-brand-red" />
              <span className="type-signage text-brand-red font-black">
                WIDERSPRUCHS-DETEKTION ({data.contradictions.length} BEFUNDE)
              </span>
            </div>
            <span className="type-mono text-[10px] bg-brand-red text-white px-2 py-0.5 font-bold">
              HOHE RELEVANZ
            </span>
          </div>

          <div className="space-y-3">
            {data.contradictions.map((c, i) => (
              <div
                key={i}
                className={`p-3.5 border transition-all ${
                  c.severity === 'CRITICAL'
                    ? 'border-brand-red/50 bg-red-50/30'
                    : c.severity === 'WARNING'
                    ? 'border-amber-300 bg-amber-50/30'
                    : 'border-brand-aluminum bg-brand-cloud/40'
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="font-bold text-xs text-zinc-900 font-mono">
                    {c.title}
                  </span>
                  <span
                    className={`type-mono text-[9px] px-1.5 py-0.5 font-black uppercase ${
                      c.severity === 'CRITICAL'
                        ? 'bg-brand-red text-white'
                        : c.severity === 'WARNING'
                        ? 'bg-amber-600 text-white'
                        : 'bg-zinc-300 text-zinc-800'
                    }`}
                  >
                    {c.severity}
                  </span>
                </div>

                <div className="space-y-1.5 text-[11px] mb-2">
                  <div className="text-zinc-600">
                    <strong className="text-zinc-800 font-mono text-[10px] uppercase">Anfrage-These:</strong> "{c.quote_journalist}"
                  </div>
                  <div className="text-zinc-600">
                    <strong className="text-zinc-800 font-mono text-[10px] uppercase">Geltende Doktrin:</strong> "{c.quote_doctrine}"
                  </div>
                </div>

                <p className="text-xs text-zinc-700 italic border-t border-zinc-200/80 pt-2 leading-relaxed">
                  {c.assessment}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recommended Press Statement Output */}
      <div className="bg-white p-5 swiss-border shadow-brutalist">
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-brand-aluminum">
          <div className="flex items-center gap-2">
            <MessageSquare className="w-4 h-4 text-brand-black" />
            <span className="type-signage text-zinc-900 font-black">
              STRATEGISCHER KLÄRUNGSENTWURF (DEFENSIVE STATEMENT)
            </span>
          </div>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 text-xs bg-brand-cloud hover:bg-brand-aluminum text-brand-black px-3 py-1 font-mono font-bold transition-all cursor-pointer border border-brand-aluminum"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>KOPIERT</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>STATEMENT KOPIEREN</span>
              </>
            )}
          </button>
        </div>

        <div className="bg-brand-cloud/40 p-4 border border-brand-aluminum font-sans text-xs sm:text-sm text-zinc-900 leading-relaxed whitespace-pre-line">
          {data.recommended_statement}
        </div>

        <div className="mt-4 p-3 bg-brand-black text-white text-xs font-mono border-l-4 border-brand-red flex items-start gap-2.5">
          <ShieldAlert className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            {data.strategic_advisory}
          </div>
        </div>
      </div>
    </div>
  );
};
