import React, { useState } from 'react';
import { INQUIRY_FIXTURES } from '../../fixtures/inquiryFixtures';
import { DataPlateGrid, DataPlateCell, DataPlateSignage } from '../ui/DataPlate';

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
    <div className="space-y-4">
      <DataPlateSignage
        label="MEDIENANFRAGE // WIDERSPRUCHSAUDIT & STELLUNGNAHME"
        metadata={`REDAKTIONSSCHLUSS: ${data.deadline}`}
      />

      {/* Main Analysis Grid */}
      <DataPlateGrid className="grid-cols-1 lg:grid-cols-2">
        {/* Left Cell: The Inquiry */}
        <DataPlateCell className="flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-2 mb-3 border-b border-sbb-aluminum">
              <span className="type-ui text-sbb-stone">Eingehende Anfrage</span>
              <span className="type-mono text-[10px] text-sbb-stone font-bold uppercase">
                {data.outlet}
              </span>
            </div>
            <div className="type-mono text-[11px] text-sbb-stone mb-2">
              Journalist: {data.journalist}
            </div>
            <div className="type-body bg-sbb-cloud/40 p-4 border-l-2 border-sbb-red whitespace-pre-line text-sbb-black leading-relaxed">
              {data.inquiry_text}
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-sbb-aluminum flex items-center justify-between text-[10px] type-mono text-sbb-stone">
            <span>FRIST: {data.deadline}</span>
            <span className="text-sbb-red font-bold">STATUS: DRINGLICH</span>
          </div>
        </DataPlateCell>

        {/* Right Cell: Official Doctrine & Contradictions */}
        <DataPlateCell>
          <div className="pb-2 mb-3 border-b border-sbb-aluminum">
            <span className="type-ui text-sbb-stone">Geltende Doktrin & Abgleich</span>
          </div>
          
          <div className="mb-4">
            <div className="type-caption text-sbb-stone mb-1 font-bold">
              {data.official_wording_title}
            </div>
            <div className="type-body italic bg-sbb-cloud/40 p-3 border-l-2 border-sbb-black text-sbb-black">
              {data.official_wording_quote}
            </div>
          </div>

          <div className="space-y-2 mt-4">
            <span className="type-ui text-sbb-stone block mb-1">
              Widerspruchs-Befunde ({data.contradictions.length})
            </span>
            {data.contradictions.map((c, i) => (
              <div key={i} className="p-3 bg-sbb-cloud/30 border border-sbb-aluminum">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="type-card-title text-xs text-sbb-black">{c.title}</span>
                  <span className={`type-mono text-[9px] px-1.5 py-0.5 font-bold uppercase ${
                    c.severity === 'HOCH' 
                      ? 'bg-sbb-red text-white' 
                      : c.severity === 'MITTEL'
                      ? 'bg-amber-600 text-white'
                      : 'bg-sbb-cloud text-sbb-stone'
                  }`}>
                    {c.severity}
                  </span>
                </div>
                <p className="type-body text-sbb-stone text-[11px] leading-snug">
                  {c.assessment}
                </p>
              </div>
            ))}
          </div>
        </DataPlateCell>
      </DataPlateGrid>

      {/* Full-Width Bottom Cell: Machined Statement Block */}
      <DataPlateGrid className="grid-cols-1">
        <DataPlateCell className="bg-white">
          <div className="flex items-center justify-between pb-2 mb-3 border-b border-sbb-aluminum">
            <span className="type-ui text-sbb-black font-black">
              Generierter Antwortentwurf
            </span>
            <button
              onClick={handleCopy}
              className="px-4 py-1.5 bg-sbb-cloud hover:bg-sbb-aluminum/50 text-sbb-black type-ui text-[10px] font-bold transition-all border border-sbb-aluminum cursor-pointer"
            >
              {copied ? 'KOPIERT' : 'ENTWURF KOPIEREN'}
            </button>
          </div>

          <div className="type-body text-sbb-black max-w-[65ch] leading-relaxed whitespace-pre-line p-4 bg-sbb-cloud/20 border-l-2 border-sbb-black">
            {data.recommended_statement}
          </div>

          <div className="mt-3 pt-3 border-t border-sbb-aluminum flex items-start gap-2">
            <div className="w-1.5 h-1.5 bg-sbb-red shrink-0 mt-1" />
            <p className="type-caption text-sbb-stone leading-tight">
              {data.strategic_advisory}
            </p>
          </div>
        </DataPlateCell>
      </DataPlateGrid>
    </div>
  );
};

export default MediaInquiryView;
