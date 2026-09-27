import React, { useState } from 'react';
import { INQUIRY_FIXTURES } from '../../fixtures/inquiryFixtures';
import { Clock, Copy, Check } from 'lucide-react';

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
    <div className="space-y-5">
      {/* Top Card: Incoming Inquiry */}
      <div className="bg-white p-4 swiss-border">
        <div className="flex flex-wrap items-center justify-between gap-2 pb-2 mb-3 border-b border-brand-aluminum">
          <div>
            <span className="type-signage text-zinc-500 block">Medienanfrage</span>
            <span className="font-semibold text-xs text-zinc-900 font-mono">
              {data.outlet} — {data.journalist}
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-zinc-600 font-mono">
            <Clock className="w-3.5 h-3.5 text-zinc-400" />
            <span>Frist: {data.deadline}</span>
          </div>
        </div>

        <div className="bg-brand-cloud/60 p-3.5 border-l-2 border-brand-red text-xs text-zinc-800 leading-relaxed whitespace-pre-line font-sans">
          {data.inquiry_text}
        </div>
      </div>

      {/* Side-by-Side: Official Doctrine vs Contradictions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Left: Official Doctrine */}
        <div className="bg-white p-4 swiss-border flex flex-col justify-between">
          <div>
            <div className="pb-2 mb-2 border-b border-brand-aluminum">
              <span className="type-signage text-zinc-600">Geltende Sprachregelung</span>
            </div>
            <div className="type-mono text-[11px] font-medium text-zinc-500 mb-2">
              {data.official_wording_title}
            </div>
            <div className="bg-zinc-50 p-3 border border-brand-aluminum text-xs text-zinc-800 leading-relaxed italic border-l-2 border-l-brand-black">
              {data.official_wording_quote}
            </div>
          </div>
        </div>

        {/* Right: Contradictions */}
        <div className="bg-white p-4 swiss-border">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-brand-aluminum">
            <span className="type-signage text-zinc-600">
              Widersprüche & Abweichungen ({data.contradictions.length})
            </span>
          </div>

          <div className="space-y-2.5">
            {data.contradictions.map((c, i) => (
              <div
                key={i}
                className="p-3 border border-brand-aluminum bg-brand-cloud/30"
              >
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="font-semibold text-xs text-zinc-900 font-sans">
                    {c.title}
                  </span>
                  <span
                    className={`type-mono text-[9px] px-1.5 py-0.2 font-medium ${
                      c.severity === 'HOCH'
                        ? 'bg-brand-red/10 text-brand-red border border-brand-red/30'
                        : c.severity === 'MITTEL'
                        ? 'bg-amber-100 text-amber-900 border border-amber-300'
                        : 'bg-zinc-100 text-zinc-700'
                    }`}
                  >
                    {c.severity}
                  </span>
                </div>

                <div className="space-y-1 text-[11px] mb-2 text-zinc-600">
                  <div>
                    <span className="text-zinc-500 font-medium mr-1">Anfrage:</span>
                    <span>«{c.quote_journalist}»</span>
                  </div>
                  <div>
                    <span className="text-zinc-500 font-medium mr-1">Doktrin:</span>
                    <span>«{c.quote_doctrine}»</span>
                  </div>
                </div>

                <p className="text-xs text-zinc-700 pt-1.5 border-t border-zinc-200 leading-relaxed">
                  {c.assessment}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recommended Response */}
      <div className="bg-white p-4 swiss-border">
        <div className="flex items-center justify-between pb-2 mb-2 border-b border-brand-aluminum">
          <span className="type-signage text-zinc-900">
            Entwurf Stellungnahme
          </span>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 text-xs bg-brand-cloud hover:bg-brand-aluminum text-brand-black px-2.5 py-1 font-mono transition-all cursor-pointer border border-brand-aluminum"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>Kopiert</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-zinc-500" />
                <span>Kopieren</span>
              </>
            )}
          </button>
        </div>

        <div className="bg-brand-cloud/40 p-3.5 border border-brand-aluminum text-xs text-zinc-900 leading-relaxed whitespace-pre-line font-sans">
          {data.recommended_statement}
        </div>

        <div className="mt-3 p-2.5 bg-zinc-100 text-zinc-800 text-xs font-sans border-l-2 border-brand-black">
          {data.strategic_advisory}
        </div>
      </div>
    </div>
  );
};
