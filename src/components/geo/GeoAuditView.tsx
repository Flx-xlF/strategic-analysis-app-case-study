import React, { useState } from 'react';
import { Language } from '../../fixtures/scenarios';
import { ActiveTab } from '../common/CommandHeader';
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  GitBranch,
  Layers,
  XCircle
} from 'lucide-react';

interface Props {
  lang: Language;
  onNavigateTab: (tab: ActiveTab) => void;
}

type TargetContext = 'earned' | 'owned' | 'regional';
type GeoPrincipleIndex = 0 | 1 | 2 | 3;

export const GeoAuditView: React.FC<Props> = ({ lang, onNavigateTab }) => {
  const [selectedContext, setSelectedContext] = useState<TargetContext>('earned');
  const [selectedPrinciple, setSelectedPrinciple] = useState<GeoPrincipleIndex>(0);
  const isEn = lang === 'en';

  const contexts: Record<
    TargetContext,
    {
      labelEn: string;
      labelDe: string;
      resolvesBadgeEn: string;
      resolvesBadgeDe: string;
      audienceEn: string;
      audienceDe: string;
      copyPasteFailEn: string;
      copyPasteFailDe: string;
      tailoredQuoteEn: string;
      tailoredQuoteDe: string;
      whyItWorksEn: string;
      whyItWorksDe: string;
      coreAnchorEn: string;
      coreAnchorDe: string;
    }
  > = {
    earned: {
      labelEn: '1. Earned Media Response',
      labelDe: '1. Earned Media / Presseantwort',
      resolvesBadgeEn: 'Resolves [Q1] Gap',
      resolvesBadgeDe: 'Löst [Q1]-Lücke',
      audienceEn: 'Journalists and editors looking for direct, quotable answers under tight deadlines.',
      audienceDe: 'Journalistinnen und Redaktionen, die unter Zeitdruck direkte, zitierbare Fakten suchen.',
      copyPasteFailEn:
        '«We are committed to driving sustainable value across our integrated global portfolio while staying agile for stakeholders.» (Generic corporate boilerplate—journalists ignore it or paraphrase skeptically.)',
      copyPasteFailDe:
        '«Wir setzen uns für nachhaltige Wertschöpfung in unserem integrierten globalen Portfolio ein und bleiben agil für Stakeholder.» (Klingt nach Standard-Floskel – Redaktionen ignorieren es.)',
      tailoredQuoteEn:
        '«Global capacity investments expand supply resilience across international markets, while core governance, strategic leadership, and long-term commitments at existing regional hubs remain unchanged.»',
      tailoredQuoteDe:
        '«Globale Kapazitätsinvestitionen stärken die Versorgungssicherheit in internationalen Märkten, während zentrale Governance, strategische Führung und bestehende regionale Verpflichtungen unverändert bleiben.»',
      whyItWorksEn: 'Short, quotable, and directly answers the journalist’s question without defensive jargon.',
      whyItWorksDe: 'Kurz, zitierfähig und beantwortet die Medienfrage direkt ohne Abwehrfloskeln.',
      coreAnchorEn: 'Core fact intact, phrased concisely for press citation.',
      coreAnchorDe: 'Kernfakt bleibt identisch, prägnant formuliert als Pressestatement.'
    },
    owned: {
      labelEn: '2. Owned Corporate Story',
      labelDe: '2. Owned Corporate Story',
      resolvesBadgeEn: 'Resolves [Q2] Gap',
      resolvesBadgeDe: 'Löst [Q2]-Lücke',
      audienceEn: 'Stakeholders, candidates, partners, and AI search crawlers reading full corporate web pages.',
      audienceDe: 'Stakeholder, Bewerbende, Partner und KI-Suchsysteme auf eigenen Unternehmensseiten.',
      copyPasteFailEn:
        '«The company confirmed major capacity expansion over the next five years.» (Pasting a bare press quote onto a corporate story page gives no broader narrative or human context.)',
      copyPasteFailDe:
        '«Das Unternehmen bestätigte grössere Kapazitätserweiterungen über fünf Jahre.» (Ein nacktes Pressezitat liefert auf einer Story-Seite keinen erzählerischen Zusammenhang.)',
      tailoredQuoteEn:
        '«Expanding our global production network goes hand in hand with our established research hubs: while new international lines scale supply, our headquarters and core regional R&D teams continue to drive early-stage discovery.»',
      tailoredQuoteDe:
        '«Der Ausbau unseres globalen Produktionsnetzwerks geht Hand in Hand mit unseren etablierten Forschungsstandorten: Während neue internationale Linien die Versorgung skalieren, treiben Hauptsitz und regionale F&E-Teams weiterhin die frühe Forschung voran.»',
      whyItWorksEn: 'Opens with an upfront factual summary for AI search while framing a clear editorial story for readers.',
      whyItWorksDe: 'Beginnt mit einer klaren Fakten-Klammer für die KI-Suche und spannt zugleich den Story-Bogen für Lesende.',
      coreAnchorEn: 'Core fact intact, wrapped in an engaging editorial story with clear structure.',
      coreAnchorDe: 'Kernfakt bleibt identisch, eingebettet in eine gut strukturierte Story.'
    },
    regional: {
      labelEn: '3. Regional / Cantonal Briefing',
      labelDe: '3. Regionales / Kantonales Briefing',
      resolvesBadgeEn: 'Resolves [Q3–4] Collision',
      resolvesBadgeDe: 'Löst [Q3–4]-Widerspruch',
      audienceEn: 'Cantonal authorities, local industry partners, and regional teams addressing local priorities.',
      audienceDe: 'Kantonale Behörden, lokale Partner und regionale Teams mit konkreten Standortfragen.',
      copyPasteFailEn:
        '«Our long-term global strategy focuses on an agile worldwide footprint across priority regions.» (Global boilerplate ignores local workforce, infrastructure, and regulatory commitments.)',
      copyPasteFailDe:
        '«Unsere globale Langfriststrategie setzt auf eine agile weltweite Aufstellung in Schwerpunktregionen.» (Globale Standardformeln ignorieren lokale Arbeitsplätze und Rahmenbedingungen.)',
      tailoredQuoteEn:
        '«For our regional and cantonal partners, global capacity expansion goes hand in hand with strong local operations: headquarters governance, regional R&D teams, and local infrastructure partnerships remain fully anchored here.»',
      tailoredQuoteDe:
        '«Für unsere regionalen und kantonalen Partner gilt: Der globale Kapazitätsausbau geht Hand in Hand mit starken lokalen Aktivitäten – zentrale Steuerung, regionale F&E-Teams und lokale Infrastrukturpartnerschaften bleiben hier fest verankert.»',
      whyItWorksEn: 'Addresses local stakeholder concerns directly while matching global facts word-for-fact.',
      whyItWorksDe: 'Spricht lokale Stakeholder direkt an und deckt sich faktisch zu 100 % mit dem globalen Narrativ.',
      coreAnchorEn: 'Core fact intact, adapted organically to regional and cantonal context.',
      coreAnchorDe: 'Kernfakt bleibt identisch, organisch an den regionalen Kontext angepasst.'
    }
  };

  const activeCtx = contexts[selectedContext];

  const geoPrinciples = [
    {
      titleEn: '1. Answer-First & Heading Hierarchy',
      titleDe: '1. Answer-First & klare Überschriften',
      ruleEn:
        'AI retrieval pipelines match sub-queries against section headings and extract the opening lines of a passage. If a page opens with a long narrative warm-up, the core fact gets cut off before entering the context window.',
      ruleDe:
        'KI-Suchsysteme gleichen Teilabfragen mit Überschriften ab und extrahieren die ersten Sätze eines Abschnitts. Startet ein Text mit langem Vorlauf, wird der Kernfakt vor dem Kontextfenster abgeschnitten.',
      badEn:
        '«In an increasingly dynamic global environment, our organization continuously evaluates long-term opportunities to serve communities better across regions. Against this backdrop, regional operations remain an important pillar...»',
      badDe:
        '«In einem zunehmend dynamischen globalen Umfeld prüft unsere Organisation laufend langfristige Chancen. Vor diesem Hintergrund bleiben regionale Standorte ein wichtiger Pfeiler...»',
      goodEn:
        '«[2026–2030 Footprint Strategy] Global manufacturing investments expand international capacity from Q2 2026, while headquarters governance and regional R&D hubs remain anchored in place.»',
      goodDe:
        '«[Standortstrategie 2026–2030] Globale Investitionen bauen internationale Kapazitäten ab Q2 2026 aus, während Hauptsitz-Governance und regionale F&E-Standorte fest verankert bleiben.»',
      takeawayEn: 'Retrieval Mechanic [Fixes Q2]: Question-aligned headings + upfront conclusions maximize verbatim snippet extraction.',
      takeawayDe: 'KI-Mechanik [Löst Q2]: Klare Überschriften + Kernaussage am Anfang sichern die direkte Snippet-Übernahme.'
    },
    {
      titleEn: '2. Self-Contained Chunks & Entities',
      titleDe: '2. Eigenständige Chunks & Entitäten',
      ruleEn:
        'RAG systems split documents into isolated chunks (paragraphs) and score them by explicit entity and metric density. Vague pronouns ("this program", "there") lose their meaning when a paragraph is retrieved without surrounding text.',
      ruleDe:
        'RAG-Systeme zerlegen Dokumente in isolierte Textblöcke (Chunks) und gewichten explizite Namen, Orte und Zahlen. Vage Verweise («dieses Programm», «dort») verlieren isoliert ihren Sinn.',
      badEn:
        '«As noted above, this will continue over the coming years and supports those local teams in the same way.»',
      badDe:
        '«Wie oben erwähnt, wird dies in den nächsten Jahren fortgeführt und unterstützt diese lokalen Teams auf gleiche Weise.»',
      goodEn:
        '«The 2026–2030 Global Expansion Program adds international production lines while keeping Basel and regional European R&D hubs fully staffed and operational.»',
      goodDe:
        '«Das globale Ausbauprogramm 2026–2030 ergänzt internationale Produktionslinien, während die regionalen europäischen F&E-Standorte voll besetzt und aktiv bleiben.»',
      takeawayEn: 'Retrieval Mechanic: Naming explicit entities, locations, and timeframes in every key paragraph makes each chunk standalone-citable.',
      takeawayDe: 'KI-Mechanik: Explizite Namen, Orte und Zeiträume in jedem Schlüsselabsatz machen jeden Chunk eigenständig zitierbar.'
    },
    {
      titleEn: '3. Temporal Stamping & Archive Hygiene',
      titleDe: '3. Zeitstempel & Archiv-Hygiene',
      ruleEn:
        'AI search crawlers retrieve timelessly across indexed PDFs and sub-sites. If a 2022 regional PDF remains online without superseding metadata, models blend its outdated claims into 2026 answers.',
      ruleDe:
        'KI-Suchmaschinen durchsuchen auch ältere indexierte PDFs. Bleibt ein regionales PDF von 2022 ohne Aktualisierungsvermerk online, mischen Modelle veraltete Aussagen in Antworten von 2026.',
      badEn:
        'Current page: «New lines launch in Q2.» | Still indexed online: «2022 Regional Briefing PDF: European site consolidation review ongoing.» (No temporal hierarchy—AI reports a contradiction.)',
      badDe:
        'Aktuelle Seite: «Neue Linien ab Q2.» | Weiterhin indexiert: «Regional-PDF 2022: Standortprüfung läuft.» (Keine zeitliche Einordnung – KI meldet einen Widerspruch.)',
      goodEn:
        '«[Updated 2026 — Supersedes 2022 Regional Review] With the 2022 review concluded, the 2026–2030 program anchors regional R&D hubs permanently alongside Q2 global line expansions.» (+ Archive/redirect 2022 PDF.)',
      goodDe:
        '«[Update 2026 – Ersetzt Standortprüfung 2022] Nach Abschluss der Prüfung von 2022 verankert das Programm 2026–2030 die regionalen F&E-Standorte dauerhaft neben dem Q2-Ausbau.» (+ 2022-PDF archivieren.)',
      takeawayEn: 'Retrieval Mechanic [Fixes Q3–4]: Explicit dates, "supersedes" markers, and PDF archiving stop legacy files from polluting current answers.',
      takeawayDe: 'KI-Mechanik [Löst Q3–4]: Explizite Jahreszahlen, Ablöse-Vermerke und PDF-Archivierung verhindern Widersprüche durch Altdateien.'
    },
    {
      titleEn: '4. Affirmative Co-Occurrence Discipline',
      titleDe: '4. Affirmative Fakten-Verankerung',
      ruleEn:
        'LLMs build answers from statistical co-occurrence between your company name and nearby terms. Repeating a negative rumour just to deny it ("We are not closing regional hubs") strengthens that association in search indices and syntheses.',
      ruleDe:
        'LLMs gewichten das gemeinsame Auftreten (Co-Occurrence) von Unternehmensnamen und Begriffen. Wer ein Gerücht zur Verneinung wiederholt («Wir schliessen keine Standorte»), verstärkt genau diese Verknüpfung.',
      badEn:
        '«We are not abandoning European operations or cutting regional commitments.» (Search indices and sub-queries still link the company to "abandoning" and "cutting".)',
      badDe:
        '«Wir geben europäische Standorte nicht auf und bauen regionale Zusagen nicht ab.» (Suchindizes verknüpfen das Unternehmen trotzdem mit «aufgeben» und «abbauen».)',
      goodEn:
        '«European R&D hubs and regional operations remain a permanent core of our 2026–2030 strategy alongside international capacity growth.»',
      goodDe:
        '«Europäische F&E-Standorte und regionale Aktivitäten bilden neben dem internationalen Ausbau einen dauerhaften Kern unserer Strategie 2026–2030.»',
      takeawayEn: 'Retrieval Mechanic [Fixes Q1 & Q5–8]: Affirmative entity-fact pairing anchors your position without amplifying false premises.',
      takeawayDe: 'KI-Mechanik [Löst Q1 & Q5–8]: Positive Fakten-Verknüpfung verankert die eigene Position, ohne falsche Prämissen zu verstärken.'
    }
  ];

  const activePrinciple = geoPrinciples[selectedPrinciple];

  return (
    <div className="max-w-6xl mx-auto space-y-6 pb-8">
      {/* Header Banner */}
      <div className="bg-white border border-sbb-black p-5 sm:p-7 space-y-2 shadow-xs">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-sbb-black text-white font-mono text-[11px] font-bold uppercase tracking-wider">
          <span className="text-[#FFCC00]">02 // TOP-DOWN</span>
          <span>{isEn ? 'GEO & CONTEXT TAILORING' : 'GEO & KONTEXT-ANPASSUNG'}</span>
        </div>
        <h1 className="text-xl sm:text-2xl font-black text-sbb-black tracking-tight">
          {isEn
            ? 'Consistent narratives without copy-paste—paired with retrieval-ready GEO structure'
            : 'Konsistente Narrative ohne stures Copy-Paste – kombiniert mit KI-gerechter GEO-Struktur'}
        </h1>
        <p className="text-sm text-zinc-700 max-w-4xl leading-relaxed">
          {isEn
            ? 'In a matrixed organization, forcing every market and channel to paste identical text fails. AI helps analyze each context and tailor the narrative naturally while keeping core facts aligned and structured for AI answer engines (GEO).'
            : 'In einer Matrix-Organisation scheitert der Zwang zu identischen Textbausteinen. KI hilft, den jeweiligen Kontext zu analysieren und das Narrativ natürlich anzupassen – bei konsequent gleichen Kernfakten und klarer Struktur für KI-Suchmaschinen (GEO).'}
        </p>
      </div>

      {/* ═══ PART A: CONTEXT TAILORING VS COPY-PASTE ═══ */}
      <div className="bg-white border border-sbb-aluminum p-5 sm:p-7 space-y-5 shadow-xs">
        <div className="space-y-1 pb-4 border-b border-zinc-200">
          <div className="font-mono text-xs font-black uppercase text-emerald-800 flex items-center gap-1.5">
            <GitBranch className="w-4 h-4" />
            <span>
              {isEn
                ? 'PART A // CONTEXT-AWARE TAILORING VS. ROBOTIC COPY-PASTE'
                : 'TEIL A // KONTEXT-ANPASSUNG STATT STUREM COPY-PASTE'}
            </span>
          </div>
          <p className="text-xs sm:text-sm text-zinc-700">
            {isEn
              ? 'Switch between the 3 target channels below to see actual tailored passages compared against robotic copy-pasting.'
              : 'Wechseln Sie zwischen den 3 Zielkanälen, um echte angepasste Textpassagen direkt mit sturem Copy-Paste zu vergleichen.'}
          </p>
        </div>

        {/* Central Core Anchor */}
        <div className="p-4 bg-sbb-cloud border-2 border-sbb-black border-l-4 border-l-sbb-red flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="space-y-0.5">
            <div className="font-mono text-[10px] font-black uppercase text-sbb-red">
              {isEn ? '● CENTRALLY ADMINISTERED CORE NARRATIVE' : '● ZENTRAL VERWALTETES KERN-NARRATIV'}
            </div>
            <div className="text-xs sm:text-sm font-bold text-sbb-black">
              {isEn
                ? 'Global capacity investments grow supply resilience while headquarters governance and regional hub commitments stay anchored.'
                : 'Globale Kapazitätsinvestitionen stärken die Versorgung, während zentrale Governance und regionale Standortzusagen verankert bleiben.'}
            </div>
          </div>
        </div>

        {/* Vertical Connector: Core Narrative -> 3 Target Channel Tabs */}
        <div className="flex flex-col items-center">
          <div className="w-0.5 h-3 bg-sbb-black" />
          <div className="px-3 py-1 bg-sbb-black text-white font-mono text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 text-center">
            <ArrowDown className="w-3 h-3 text-[#FFCC00] shrink-0" />
            <span>
              {isEn
                ? 'AI analyzes target channel & audience to tailor the core narrative (select a channel)'
                : 'KI analysiert Zielkanal & Publikum, um das Kern-Narrativ anzupassen (Kanal wählen)'}
            </span>
          </div>
          <div className="w-0.5 h-3 bg-sbb-black" />
        </div>

        {/* Flush-Mounted 3 Target Channel Tabs + Grounded Comparison Workbench */}
        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 border-2 border-b-0 border-sbb-black divide-y md:divide-y-0 md:divide-x divide-zinc-300">
            {(Object.keys(contexts) as TargetContext[]).map((ctxId, idx) => {
              const ctx = contexts[ctxId];
              const isActive = selectedContext === ctxId;
              return (
                <button
                  key={ctxId}
                  type="button"
                  onClick={() => setSelectedContext(ctxId)}
                  className={`p-3 text-left font-mono text-xs font-bold transition-all cursor-pointer flex flex-col gap-1 border-t-4 ${
                    isActive
                      ? 'bg-sbb-black text-white border-t-[#FFCC00]'
                      : 'bg-white text-zinc-700 border-t-transparent hover:bg-sbb-cloud hover:text-sbb-black'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span
                      className={`px-1.5 py-0.5 text-[10px] font-black shrink-0 ${
                        isActive ? 'bg-[#FFCC00] text-sbb-black' : 'bg-zinc-200 text-sbb-black'
                      }`}
                    >
                      CH 0{idx + 1}
                    </span>
                    <span>{(isEn ? ctx.labelEn : ctx.labelDe).replace(/^\d+\.\s*/, '')}</span>
                  </div>
                  <span className={`text-[10px] ${isActive ? 'text-[#FFCC00]' : 'text-sbb-red'}`}>
                    {isEn ? ctx.resolvesBadgeEn : ctx.resolvesBadgeDe}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Grounded Comparison Workbench */}
          <div className="border-2 border-sbb-black bg-[#F4F4F6] p-4 sm:p-5 space-y-4">
            <div className="bg-sbb-black text-white px-3.5 py-2 text-xs">
              <strong className="text-[#FFCC00] uppercase font-mono text-[10px] mr-2">
                {isEn ? 'TARGET AUDIENCE & CONTEXT //' : 'ZIELGRUPPE & KONTEXT //'}
              </strong>
              <span>{isEn ? activeCtx.audienceEn : activeCtx.audienceDe}</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-stretch gap-3">
              <div className="p-4 bg-white border border-red-300 space-y-2">
                <div className="font-mono text-[11px] font-bold uppercase text-sbb-red flex items-center gap-1.5">
                  <XCircle className="w-4 h-4 shrink-0" />
                  <span>{isEn ? 'Robotic Copy-Paste (Fails in Context)' : 'Stures Copy-Paste (Scheitert im Kontext)'}</span>
                </div>
                <p className="text-xs sm:text-sm text-red-950 leading-relaxed">
                  {isEn ? activeCtx.copyPasteFailEn : activeCtx.copyPasteFailDe}
                </p>
              </div>

              <div className="hidden lg:flex items-center justify-center">
                <span className="px-2 py-1 bg-sbb-black text-[#FFCC00] font-mono text-[10px] font-black uppercase">
                  VS.
                </span>
              </div>

              <div className="p-4 bg-emerald-50/70 border-2 border-emerald-700 space-y-2.5">
                <div className="font-mono text-[11px] font-bold uppercase text-emerald-900 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-700" />
                  <span>{isEn ? 'AI Context-Tailored Passage (Aligned Core)' : 'KI-Kontext-Anpassung (Konsistenter Kern)'}</span>
                </div>
                <p className="text-xs sm:text-sm text-emerald-950 leading-relaxed font-medium italic bg-white p-3 border border-emerald-200">
                  {isEn ? activeCtx.tailoredQuoteEn : activeCtx.tailoredQuoteDe}
                </p>
                <p className="text-xs text-emerald-950 leading-relaxed">
                  {isEn ? activeCtx.whyItWorksEn : activeCtx.whyItWorksDe}
                </p>
                <div className="pt-2 border-t border-emerald-200 font-mono text-[11px] text-emerald-900 font-bold">
                  ● {isEn ? activeCtx.coreAnchorEn : activeCtx.coreAnchorDe}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══ CAUSAL BRIDGE: PART A (TAILORED NARRATIVE) -> PART B (GEO STRUCTURE) ═══ */}
      <div className="flex flex-col items-center -my-2">
        <div className="w-0.5 h-4 bg-sbb-black" />
        <div className="px-4 py-2 bg-sbb-black text-white border-l-4 border-[#FFCC00] font-mono text-[11px] font-bold uppercase tracking-wider flex items-center gap-2 text-center shadow-xs max-w-3xl">
          <ArrowDown className="w-4 h-4 text-[#FFCC00] shrink-0" />
          <span>
            {isEn
              ? 'Part A tailors the narrative to each audience. How do we ensure AI sub-queries [Q1–Q8] extract and quote those facts accurately? → Apply the 4 GEO Best Practices (Part B)'
              : 'Teil A passt das Narrativ an die Zielgruppe an. Wie stellen wir sicher, dass KI-Teilabfragen [Q1–Q8] diese Fakten korrekt zitieren? → Die 4 GEO-Prinzipien (Teil B)'}
          </span>
        </div>
        <div className="w-0.5 h-4 bg-sbb-black" />
      </div>

      {/* ═══ PART B: 4 PRACTICAL GEO BEST PRACTICES FOR NON-TECHIES ═══ */}
      <div className="bg-white border border-sbb-aluminum p-5 sm:p-7 space-y-5 shadow-xs">
        <div className="space-y-2 pb-4 border-b border-zinc-200">
          <div className="font-mono text-xs font-black uppercase text-sbb-black flex items-center gap-1.5">
            <Layers className="w-4 h-4 text-sbb-red" />
            <span>
              {isEn
                ? 'PART B // 4 STRUCTURAL GEO PRINCIPLES (HOW AI RETRIEVAL ACTUALLY WORKS)'
                : 'TEIL B // 4 STRUKTURELLE GEO-PRINZIPIEN (WIE KI-ABRUF FUNKTIONIERT)'}
            </span>
          </div>
          <p className="text-xs sm:text-sm text-zinc-700">
            {isEn
              ? 'AI answer engines do not read web pages top-to-bottom like humans—they retrieve isolated text chunks across channels and archives, weighting explicit entities, dates, and co-occurring facts. Click each principle to see how GEO addresses those mechanics:'
              : 'KI-Antwortmaschinen lesen Seiten nicht linear wie Menschen – sie ziehen isolierte Textblöcke (Chunks) über Kanäle und Archive hinweg und gewichten explizite Entitäten, Zeitstempel und Fakten. Klicken Sie auf die 4 Prinzipien:'}
          </p>
        </div>

        {/* Flush-Mounted 4 Rule Selector Tabs + Grounded Workbench */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-2 border-b-0 border-sbb-black divide-y sm:divide-y-0 sm:divide-x divide-zinc-300">
            {geoPrinciples.map((p, idx) => {
              const isActive = selectedPrinciple === idx;
              return (
                <button
                  key={p.titleEn}
                  type="button"
                  onClick={() => setSelectedPrinciple(idx as GeoPrincipleIndex)}
                  className={`p-3 text-left font-mono text-xs font-bold transition-all cursor-pointer flex items-center gap-2 border-t-4 ${
                    isActive
                      ? 'bg-sbb-black text-white border-t-[#FFCC00]'
                      : 'bg-white text-zinc-700 border-t-transparent hover:bg-sbb-cloud hover:text-sbb-black'
                  }`}
                >
                  <span
                    className={`px-1.5 py-0.5 text-[10px] font-black shrink-0 ${
                      isActive ? 'bg-[#FFCC00] text-sbb-black' : 'bg-zinc-200 text-sbb-black'
                    }`}
                  >
                    0{idx + 1}
                  </span>
                  <span className="leading-snug">{(isEn ? p.titleEn : p.titleDe).replace(/^\d+\.\s*/, '')}</span>
                </button>
              );
            })}
          </div>

          {/* Grounded Rule Workbench */}
          <div className="border-2 border-sbb-black bg-[#F4F4F6] p-4 sm:p-5 space-y-4">
            <div className="p-3.5 bg-sbb-black text-white border-l-4 border-[#FFCC00] text-xs sm:text-sm leading-relaxed space-y-1.5">
              <div>
                <strong className="text-[#FFCC00]">{isEn ? 'Why this matters: ' : 'Warum das wichtig ist: '}</strong>
                <span className="text-zinc-100">{isEn ? activePrinciple.ruleEn : activePrinciple.ruleDe}</span>
              </div>
              <div className="font-mono text-[11px] font-bold text-[#FFCC00]">
                {isEn ? activePrinciple.takeawayEn : activePrinciple.takeawayDe}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-stretch gap-3">
              <div className="p-4 bg-white border border-red-300 space-y-2">
                <div className="font-mono text-[11px] font-bold uppercase text-sbb-red flex items-center gap-1.5">
                  <XCircle className="w-4 h-4 shrink-0" />
                  <span>{isEn ? 'BEFORE // Unstructured Draft' : 'VORHER // Unstrukturierter Entwurf'}</span>
                </div>
                <p className="text-xs sm:text-sm text-red-950 leading-relaxed">
                  {isEn ? activePrinciple.badEn : activePrinciple.badDe}
                </p>
              </div>

              {/* Transformation Arrow Before -> After */}
              <div className="hidden lg:flex flex-col items-center justify-center gap-1">
                <svg width="32" height="24" viewBox="0 0 32 24" className="shrink-0">
                  <line x1="0" y1="12" x2="24" y2="12" stroke="#047857" strokeWidth="2" className="terrain-flow-line" />
                  <polygon points="22,7 32,12 22,17" fill="#047857" />
                </svg>
                <span className="font-mono text-[9px] font-black uppercase text-emerald-800">GEO</span>
              </div>

              <div className="p-4 bg-emerald-50/70 border-2 border-emerald-700 space-y-2">
                <div className="font-mono text-[11px] font-bold uppercase text-emerald-900 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-700" />
                  <span>{isEn ? 'AFTER // GEO-Structured Draft' : 'NACHHER // GEO-strukturierter Entwurf'}</span>
                </div>
                <p className="text-xs sm:text-sm text-emerald-950 leading-relaxed font-medium">
                  {isEn ? activePrinciple.goodEn : activePrinciple.goodDe}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Handoff Strip: How 02 (Tailored Narratives + GEO Rules) Reaches Busy Teams in 03 */}
        <div className="p-3.5 bg-sbb-cloud border-l-4 border-sbb-black border border-zinc-300 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
          <div>
            <strong className="font-mono uppercase text-sbb-black block sm:inline mr-2">
              {isEn ? 'NEXT HURDLE → MODULE 03:' : 'NÄCHSTE HÜRDE → MODUL 03:'}
            </strong>
            <span className="text-zinc-700">
              {isEn
                ? 'If these tailored narratives (Part A) and 4 GEO rules (Part B) sit in a static PDF rulebook, busy teams overlook them. Module 03 streams them—plus Module 01’s risk alerts—directly into daily tools as Prompt Recipes.'
                : 'Liegen diese angepassten Narrative (Teil A) und 4 GEO-Regeln (Teil B) nur in einem statischen PDF, gehen sie im Alltag unter. Modul 03 bringt sie – zusammen mit den Risiken aus Modul 01 – direkt als Prompt-Rezepte in die täglichen Tools.'}
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2">
        <button
          type="button"
          onClick={() => onNavigateTab('cockpit')}
          className="px-4 py-2.5 bg-white hover:bg-sbb-cloud border border-sbb-black font-mono text-xs font-bold uppercase tracking-wider text-sbb-black transition-colors flex items-center justify-center gap-2 cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>{isEn ? 'Back: 01 Outside-In' : 'Zurück: 01 Outside-In'}</span>
        </button>

        <button
          type="button"
          onClick={() => onNavigateTab('trending')}
          className="px-5 py-2.5 bg-sbb-red hover:bg-sbb-red-125 text-white font-mono text-xs font-black uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
        >
          <span>
            {isEn
              ? 'Next: 03 Workflow Recipes & Human Role'
              : 'Weiter: 03 Workflow-Rezepte & Rolle des Menschen'}
          </span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};

export default GeoAuditView;
