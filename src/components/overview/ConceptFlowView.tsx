import React from 'react';
import { Language } from '../../fixtures/scenarios';
import {
  AlertTriangle,
  ArrowDown,
  ArrowRight,
  CheckCircle2,
  Database,
  FileSpreadsheet,
  FileText,
  GitBranch,
  Layers,
  Mail,
  RefreshCw,
  Search,
  Sparkles,
  Users,
  XCircle
} from 'lucide-react';

interface Props {
  lang: Language;
  onEnterWorkspace: (tab?: 'cockpit' | 'geo' | 'trending') => void;
  onOpenConceptModal?: () => void;
}

export const ConceptFlowView: React.FC<Props> = ({
  lang,
  onEnterWorkspace
}) => {
  const isEn = lang === 'en';

  return (
    <div className="max-w-6xl mx-auto pb-16 space-y-0">
      {/* Calm custom keyframes for non-nervous SVG data flows */}
      <style>{`
        @keyframes terrainFlowDash {
          to {
            stroke-dashoffset: -24;
          }
        }
        @keyframes terrainSoftPulse {
          0%, 100% { opacity: 0.55; }
          50% { opacity: 1; }
        }
        .terrain-flow-line {
          stroke-dasharray: 6 6;
          animation: terrainFlowDash 3.5s linear infinite;
        }
        .terrain-soft-pulse {
          animation: terrainSoftPulse 4s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .terrain-flow-line,
          .terrain-soft-pulse {
            animation: none;
          }
        }
      `}</style>

      {/* ═══ TOP ORIENTATION BAR ═══ */}
      <div className="bg-white border border-sbb-aluminum px-5 py-4 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 shadow-xs">
        <div className="text-[11px] font-mono font-bold tracking-widest text-sbb-red uppercase">
          {isEn ? 'TERRAIN // INTRODUCTION & SYSTEM LOGIC' : 'TERRAIN // EINFÜHRUNG & SYSTEMLOGIK'}
        </div>
        <p className="text-xs sm:text-sm text-zinc-700">
          {isEn
            ? 'Four connected steps—scroll down at your own pace or open any deep-dive module.'
            : 'Vier verbundene Schritte – scrollen Sie in Ihrem eigenen Tempo oder öffnen Sie direkt ein Modul.'}
        </p>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════════
          SLIDE 01: ZERO-CLICK AI SEARCH & COLLAPSING CHANNEL SEPARATION
         ═══════════════════════════════════════════════════════════════════════ */}
      <section
        id="slide-01"
        className="scroll-mt-24 bg-white border border-sbb-black grid grid-cols-1 lg:grid-cols-12 shadow-xs"
      >
        {/* Left: Text Box (5 cols) */}
        <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-zinc-200 space-y-5">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-sbb-black text-white font-mono text-[11px] font-bold uppercase tracking-wider">
              <span className="text-[#FFCC00]">01 / 04</span>
              <span>{isEn ? 'THE SHIFT IN SEARCH' : 'DER WANDEL DER SUCHE'}</span>
            </div>

            <h1 className="text-xl sm:text-2xl font-black text-sbb-black tracking-tight leading-snug">
              {isEn
                ? 'One AI question pulls all your channels into one window at once'
                : 'Eine KI-Frage zieht alle Kanäle gleichzeitig in ein einziges Fenster'}
            </h1>

            <p className="text-sm text-zinc-800 leading-relaxed">
              {isEn
                ? 'Modern corporate communications operates across earned media, owned stories, executive channels, and regional stakeholder briefings—historically assuming that different audiences consume those channels separately.'
                : 'Moderne Unternehmenskommunikation bespielt klassische Medien (Earned Media), eigene Corporate Stories, Executive-Kanäle und regionale Stakeholder-Briefings – historisch in der Annahme, dass verschiedene Zielgruppen diese Kanäle getrennt nutzen.'}
            </p>

            <p className="text-sm text-zinc-800 leading-relaxed font-medium">
              {isEn
                ? 'In the age of zero-click AI search, that separation disappears: answer engines decompose a single question into 5–11 parallel sub-queries, pulling passages from press coverage, forums, owned pages, and legacy files into one combined workspace (context window) at once.'
                : 'Im Zeitalter der Zero-Click-KI-Suche verschwindet diese Trennung: Antwortmaschinen zerlegen eine einzige Frage in 5 bis 11 parallele Teilabfragen und ziehen Passagen aus Presseberichten, Foren, eigenen Seiten und Altdateien gleichzeitig in ein einziges Arbeitsfenster (Context Window).'}
            </p>
          </div>

          <div className="pt-3 border-t border-zinc-200 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-zinc-600">
            <span>{isEn ? '1 prompt → 5–11 parallel sub-queries' : '1 Frage → 5–11 parallele Teilabfragen'}</span>
            <button
              type="button"
              onClick={() => onEnterWorkspace('cockpit')}
              className="text-sbb-red font-bold hover:underline flex items-center gap-1 cursor-pointer"
            >
              <span>{isEn ? 'Inspect in 01 Outside-In' : 'In 01 Outside-In ansehen'}</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Right: Animated Illustration 01 (7 cols) */}
        <div className="lg:col-span-7 bg-[#F8F8F9] p-6 sm:p-8 flex flex-col justify-center">
          <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-zinc-500 mb-4 flex items-center justify-between">
            <span>
              {isEn
                ? 'HOW ZERO-CLICK AI SEARCH READS ACROSS SILOS'
                : 'WIE ZERO-CLICK-KI-SUCHE KANALGRENZEN AUFLÖST'}
            </span>
            <span className="text-sbb-red font-bold">
              {isEn ? '5–11 Parallel Queries' : '5–11 Parallele Abfragen'}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[0.95fr_auto_1.35fr_auto_1.2fr] items-center gap-2.5">
            {/* Step A: 1 Question */}
            <div className="bg-white border-2 border-sbb-black p-3.5 space-y-2 shadow-2xs">
              <div className="flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase text-sbb-red">
                <Search className="w-3.5 h-3.5 shrink-0" />
                <span>{isEn ? '1 User Question' : '1 Nutzerfrage'}</span>
              </div>
              <p className="text-xs font-bold text-sbb-black leading-snug">
                {isEn
                  ? 'Single query entered into an AI answer engine'
                  : 'Einzelne Anfrage in einer KI-Antwortmaschine'}
              </p>
              <div className="px-2 py-1 bg-zinc-100 border border-zinc-300 font-mono text-[10px] text-zinc-800">
                {isEn ? 'Decomposes into 5–11 sub-queries' : 'Zerlegt in 5–11 Teilabfragen'}
              </div>
            </div>

            {/* Animated SVG Fan-Out */}
            <div className="hidden md:flex items-center justify-center">
              <svg width="32" height="150" viewBox="0 0 32 150" className="overflow-visible">
                <path d="M 0 75 C 16 75, 16 20, 32 20" fill="none" stroke="#EB0000" strokeWidth="1.75" className="terrain-flow-line" />
                <path d="M 0 75 C 16 75, 16 56, 32 56" fill="none" stroke="#EB0000" strokeWidth="1.75" className="terrain-flow-line" />
                <path d="M 0 75 C 16 75, 16 94, 32 94" fill="none" stroke="#EB0000" strokeWidth="1.75" className="terrain-flow-line" />
                <path d="M 0 75 C 16 75, 16 130, 32 130" fill="none" stroke="#EB0000" strokeWidth="1.75" className="terrain-flow-line" />
                <circle cx="3" cy="75" r="3.5" fill="#EB0000" />
              </svg>
            </div>

            {/* Step B: 4 Historically Separate Channels */}
            <div className="space-y-2">
              <div className="text-[10px] font-mono font-bold uppercase text-zinc-500">
                {isEn ? 'Pulled in parallel from:' : 'Parallel gezogen aus:'}
              </div>
              {[
                {
                  titleEn: 'Earned Media & Press',
                  titleDe: 'Earned Media & Presse',
                  subEn: 'Articles & journalist quotes',
                  subDe: 'Artikel & Medienzitate'
                },
                {
                  titleEn: 'Online Forums',
                  titleDe: 'Online-Foren',
                  subEn: 'Public discussion threads',
                  subDe: 'Öffentliche Diskussionen'
                },
                {
                  titleEn: 'Owned Stories & Pages',
                  titleDe: 'Owned Stories & Websites',
                  subEn: 'Corporate web & exec channels',
                  subDe: 'Unternehmensseiten & Exec-Kanäle'
                },
                {
                  titleEn: 'Regional Briefings & Legacy Files',
                  titleDe: 'Regionale Briefings & Altdateien',
                  subEn: 'Cantonal / regional documents',
                  subDe: 'Kantonale / regionale Dokumente'
                }
              ].map((ch, idx) => (
                <div
                  key={ch.titleEn}
                  className={`p-2.5 bg-white border text-xs flex items-center justify-between gap-2 ${
                    idx === 3 ? 'border-sbb-red bg-red-50/30' : 'border-sbb-aluminum'
                  }`}
                >
                  <div className="min-w-0">
                    <div className="font-bold text-sbb-black leading-snug">
                      {isEn ? ch.titleEn : ch.titleDe}
                    </div>
                    <div className="text-[11px] text-zinc-600 leading-snug">
                      {isEn ? ch.subEn : ch.subDe}
                    </div>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-sbb-red shrink-0 terrain-soft-pulse" />
                </div>
              ))}
            </div>

            {/* Animated SVG Convergence */}
            <div className="hidden md:flex items-center justify-center">
              <svg width="32" height="150" viewBox="0 0 32 150" className="overflow-visible">
                <path d="M 0 20 C 16 20, 16 75, 32 75" fill="none" stroke="#18181B" strokeWidth="1.75" className="terrain-flow-line" />
                <path d="M 0 56 C 16 56, 16 75, 32 75" fill="none" stroke="#18181B" strokeWidth="1.75" className="terrain-flow-line" />
                <path d="M 0 94 C 16 94, 16 75, 32 75" fill="none" stroke="#18181B" strokeWidth="1.75" className="terrain-flow-line" />
                <path d="M 0 130 C 16 130, 16 75, 32 75" fill="none" stroke="#EB0000" strokeWidth="1.75" className="terrain-flow-line" />
                <circle cx="29" cy="75" r="3.5" fill="#18181B" />
              </svg>
            </div>

            {/* Step C: 1 Context Window Collision */}
            <div className="bg-white border-2 border-sbb-red p-3.5 space-y-2.5 shadow-2xs">
              <div className="font-mono text-[10px] font-bold uppercase text-sbb-red flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                <span>{isEn ? '1 AI Context Window' : '1 KI-Kontextfenster'}</span>
              </div>

              <div className="space-y-1.5 text-[11px]">
                <div className="p-2 bg-zinc-100 border border-zinc-300 text-zinc-900">
                  <span className="font-mono font-bold text-[10px] uppercase block text-zinc-600">
                    {isEn ? 'Central Statement:' : 'Zentrale Aussage:'}
                  </span>
                  {isEn
                    ? 'Current central narrative on global strategy page'
                    : 'Aktuelles zentrales Narrativ der globalen Seite'}
                </div>

                <div className="p-2 bg-red-50 border border-red-300 text-red-950">
                  <span className="font-mono font-bold text-[10px] uppercase block text-sbb-red">
                    {isEn ? 'Regional / Legacy Excerpt:' : 'Regionaler / älterer Auszug:'}
                  </span>
                  {isEn
                    ? 'Divergent regional phrasing or outdated file pulled in parallel'
                    : 'Abweichende regionale Formulierung oder Altdatei parallel geladen'}
                </div>
              </div>

              <div className="text-[11px] font-bold text-red-900 leading-snug pt-1 border-t border-red-200">
                {isEn
                  ? 'Models cross-reference both—diluting the company voice.'
                  : 'KI-Modelle gleichen beides ab – die Stimme verwässert.'}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TRANSITION BRIDGE 01 → 02 ─── */}
      <div className="flex flex-col items-center py-3">
        <div className="w-0.5 h-4 bg-sbb-black" />
        <div className="bg-sbb-black text-white px-4 py-2.5 border-l-4 border-[#FFCC00] max-w-2xl w-full flex items-center gap-3 shadow-2xs">
          <span className="font-mono text-[11px] font-black uppercase tracking-widest text-[#FFCC00] shrink-0 flex items-center gap-1">
            <ArrowDown className="w-3.5 h-3.5" />
            <span>{isEn ? 'THE CONSEQUENCE' : 'DIE FOLGE'}</span>
          </span>
          <p className="text-xs sm:text-sm font-medium text-zinc-100 leading-snug">
            {isEn
              ? 'As a result, incoherence becomes the central vulnerability: discrepancies across central, regional, or cantonal teams dilute the company’s voice when AI models cross-reference them.'
              : 'Dadurch wird Inkohärenz zur zentralen Schwachstelle: Abweichungen zwischen zentralen, regionalen oder kantonalen Teams verwässern die Stimme des Unternehmens, sobald KI-Modelle sie abgleichen.'}
          </p>
        </div>
        <div className="w-0.5 h-4 bg-sbb-black" />
      </div>

      {/* ═══════════════════════════════════════════════════════════════════════
          SLIDE 02: OUTSIDE-IN + TOP-DOWN, GEO, AND CONTEXT TAILORING
         ═══════════════════════════════════════════════════════════════════════ */}
      <section
        id="slide-02"
        className="scroll-mt-24 bg-white border border-sbb-black grid grid-cols-1 lg:grid-cols-12 shadow-xs"
      >
        {/* Left: Text Box (5 cols) */}
        <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-zinc-200 space-y-5">
          <div className="space-y-3.5">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-sbb-black text-white font-mono text-[11px] font-bold uppercase tracking-wider">
              <span className="text-[#FFCC00]">02 / 04</span>
              <span>{isEn ? 'TWO-WAY RESPONSE & GEO' : 'ZWEI-WEGE-ANSATZ & GEO'}</span>
            </div>

            <h2 className="text-xl sm:text-2xl font-black text-sbb-black tracking-tight leading-snug">
              {isEn
                ? 'Audit Outside-In. Tailor Top-Down (without robotic copy-pasting)'
                : 'Outside-In prüfen. Top-Down anpassen (ohne stures Copy-Paste)'}
            </h2>

            <p className="text-sm text-zinc-800 leading-relaxed">
              {isEn
                ? 'Terrain explores how corporate communications can gain traction during this shift—auditing where narratives lose pull-through in media and AI search (Outside-In), and enforcing centrally defined and administered narratives plus channel-adapted GEO standards across both earned media and owned Corporate Stories (Top-Down).'
                : 'Terrain zeigt, wie Unternehmenskommunikation in diesem Wandel wirksam bleibt: Es prüft, wo Kernbotschaften in Medien und KI-Suche nicht durchdringen (Outside-In), und verankert zentral definierte und gepflegte Narrative sowie kanalangepasste GEO-Standards über Earned Media und eigene Corporate Stories hinweg (Top-Down).'}
            </p>

            {/* Plain-English GEO explanation box */}
            <div className="p-3.5 bg-amber-50/70 border-l-4 border-[#FFCC00] border border-amber-200 space-y-1">
              <div className="font-mono text-[11px] font-black uppercase tracking-wider text-sbb-black">
                {isEn ? 'What is GEO?' : 'Was bedeutet GEO?'}
              </div>
              <p className="text-xs sm:text-sm text-zinc-800 leading-relaxed">
                {isEn
                  ? 'Traditional SEO helps web pages rank as clickable links. GEO (Generative Engine Optimization) means structuring clear, verifiable facts into your texts so AI answer engines can accurately pick up, trust, and quote your message when generating an answer.'
                  : 'Klassisches SEO bringt Webseiten als Links nach oben. GEO (Generative Engine Optimization) strukturiert klare, überprüfbare Fakten im Text so, dass KI-Antwortmaschinen die Botschaft beim Generieren einer Antwort korrekt erfassen und zitieren.'}
              </p>
            </div>

            <p className="text-sm text-zinc-800 leading-relaxed font-medium">
              {isEn
                ? 'Important: Avoiding discrepancies does not mean robotically copy-pasting key messages. It means using AI to analyze the given context and using AI to tailor the narrative to that context.'
                : 'Wichtig dabei: Widersprüche zu vermeiden heisst nicht, Kernbotschaften stur per Copy-Paste zu kopieren. Es bedeutet, den jeweiligen Kontext per KI zu analysieren und das Narrativ passgenau auf diesen Kontext zuzuschneiden.'}
            </p>
          </div>

          <div className="pt-3 border-t border-zinc-200 flex items-center justify-end text-[11px] font-mono">
            <button
              type="button"
              onClick={() => onEnterWorkspace('geo')}
              className="text-emerald-800 font-bold hover:underline flex items-center gap-1 cursor-pointer"
            >
              <span>{isEn ? 'Explore 02 GEO & Tailoring' : '02 GEO & Anpassung ansehen'}</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Right: Animated Illustration 02 (7 cols) */}
        <div className="lg:col-span-7 bg-[#F8F8F9] p-6 sm:p-8 flex flex-col justify-between gap-5">
          {/* Top Strip: Outside-In Audit */}
          <div className="bg-white border border-sbb-aluminum p-4 space-y-2">
            <div className="flex items-center justify-between gap-2">
              <span className="font-mono text-[11px] font-black uppercase text-sbb-red flex items-center gap-1.5">
                <Search className="w-3.5 h-3.5" />
                <span>
                  {isEn
                    ? '1. OUTSIDE-IN: Audit Media & AI Search Pull-Through'
                    : '1. OUTSIDE-IN: Durchdringung in Medien & KI-Suche prüfen'}
                </span>
              </span>
              <span className="px-2 py-0.5 bg-red-50 border border-red-200 font-mono text-[10px] font-bold text-sbb-red">
                {isEn ? 'Detects where narrative drops off' : 'Erkennt, wo Botschaften abreissen'}
              </span>
            </div>
            <p className="text-xs text-zinc-700">
              {isEn
                ? 'Identifies which regional or thematic channels are missing or distorting the central narrative in coverage and AI answers.'
                : 'Zeigt auf, in welchen regionalen oder thematischen Kanälen das zentrale Narrativ in Medien und KI-Antworten fehlt oder verzerrt wird.'}
            </p>
          </div>

          {/* Bottom Stage: Top-Down Context Tailoring vs Copy-Paste */}
          <div className="bg-white border-2 border-sbb-black p-4 sm:p-5 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-2.5 border-b border-zinc-200">
              <span className="font-mono text-[11px] font-black uppercase text-emerald-800 flex items-center gap-1.5">
                <GitBranch className="w-3.5 h-3.5" />
                <span>
                  {isEn
                    ? '2. TOP-DOWN: Context-Tailored Narrative + GEO (Not Copy-Paste)'
                    : '2. TOP-DOWN: Kontext-angepasstes Narrativ + GEO (Kein Copy-Paste)'}
                </span>
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-zinc-100 border border-zinc-300 font-mono text-[10px] text-zinc-700 line-through">
                <XCircle className="w-3 h-3 text-sbb-red shrink-0" />
                <span>{isEn ? 'Robotic Copy/Paste' : 'Stures Copy/Paste'}</span>
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1.35fr] items-center gap-3">
              {/* Central Narrative + GEO Core */}
              <div className="p-3.5 bg-sbb-cloud border border-sbb-black space-y-2">
                <div className="flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase text-sbb-black">
                  <span className="w-2.5 h-2.5 rounded-full bg-sbb-red inline-block shrink-0" />
                  <span>{isEn ? 'Central Administered Core' : 'Zentral gepflegter Kern'}</span>
                </div>
                <p className="text-xs font-bold text-sbb-black leading-snug">
                  {isEn
                    ? 'Key Narrative + Channel-Adapted GEO Standards'
                    : 'Kern-Narrativ + kanalangepasste GEO-Standards'}
                </p>
                <div className="p-2 bg-white border border-zinc-300 text-[11px] text-zinc-700 font-mono">
                  {isEn ? 'AI analyzes target context & audience' : 'KI analysiert Zielkontext & Publikum'}
                </div>
              </div>

              {/* Animated Branching SVG */}
              <div className="hidden md:flex items-center justify-center">
                <svg width="46" height="126" viewBox="0 0 46 126" className="overflow-visible">
                  <path d="M 0 63 C 23 63, 23 20, 46 20" fill="none" stroke="#047857" strokeWidth="1.75" className="terrain-flow-line" />
                  <path d="M 0 63 L 46 63" fill="none" stroke="#047857" strokeWidth="1.75" className="terrain-flow-line" />
                  <path d="M 0 63 C 23 63, 23 106, 46 106" fill="none" stroke="#047857" strokeWidth="1.75" className="terrain-flow-line" />
                  <circle cx="3" cy="63" r="3.5" fill="#EB0000" />
                </svg>
              </div>

              {/* 3 Context-Tailored Outputs */}
              <div className="space-y-2">
                {[
                  {
                    channelEn: 'Earned Media Response',
                    channelDe: 'Earned Media / Presseantwort',
                    descEn: 'Tailored to journalist inquiry + quotable GEO facts',
                    descDe: 'Auf Medienanfrage + zitierbare GEO-Fakten zugeschnitten'
                  },
                  {
                    channelEn: 'Owned Corporate Story',
                    channelDe: 'Owned Corporate Story',
                    descEn: 'Tailored narrative arc + structured headings for AI search',
                    descDe: 'Angepasster Story-Bogen + klare Struktur für KI-Suche'
                  },
                  {
                    channelEn: 'Regional / Cantonal Briefing',
                    channelDe: 'Regionales / Kantonales Briefing',
                    descEn: 'Tailored to local stakeholder context, zero contradiction',
                    descDe: 'Auf lokalen Stakeholder-Kontext angepasst, null Widerspruch'
                  }
                ].map((out) => (
                  <div
                    key={out.channelEn}
                    className="p-2.5 bg-emerald-50/40 border border-emerald-700/60 flex items-start gap-2"
                  >
                    <span className="w-2.5 h-2.5 rounded-full bg-sbb-red shrink-0 mt-1" title="Consistent Core Narrative" />
                    <div className="min-w-0">
                      <div className="text-xs font-bold text-sbb-black">
                        {isEn ? out.channelEn : out.channelDe}
                      </div>
                      <div className="text-[11px] text-zinc-700">
                        {isEn ? out.descEn : out.descDe}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-[11px] font-mono text-zinc-600 pt-1 border-t border-zinc-200 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sbb-red inline-block shrink-0" />
              <span>
                {isEn
                  ? 'Red dot = consistent core message; outer framing adapts organically to each context.'
                  : 'Roter Punkt = konsistente Kernbotschaft; die Ausformulierung passt sich organisch dem Kontext an.'}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TRANSITION BRIDGE 02 → 03 ─── */}
      <div className="flex flex-col items-center py-3">
        <div className="w-0.5 h-4 bg-sbb-black" />
        <div className="bg-sbb-black text-white px-4 py-2.5 border-l-4 border-[#FFCC00] max-w-2xl w-full flex items-center gap-3 shadow-2xs">
          <span className="font-mono text-[11px] font-black uppercase tracking-widest text-[#FFCC00] shrink-0 flex items-center gap-1">
            <ArrowDown className="w-3.5 h-3.5" />
            <span>{isEn ? 'THE PRACTICAL HURDLE' : 'DIE HÜRDE IM ALLTAG'}</span>
          </span>
          <p className="text-xs sm:text-sm font-medium text-zinc-100 leading-snug">
            {isEn
              ? 'Establishing coherent narratives and frameworks top-down is a challenge: if rules sit in static rulebook documents, busy teams overlook them in a hurry.'
              : 'Kohärente Narrative und Frameworks Top-Down durchzusetzen ist im Alltag schwierig: Liegen Regeln in statischen Dokumenten, werden sie unter Zeitdruck leicht übersehen.'}
          </p>
        </div>
        <div className="w-0.5 h-4 bg-sbb-black" />
      </div>

      {/* ═══════════════════════════════════════════════════════════════════════
          SLIDE 03: ENTERPRISE IT INTEGRATION & IN-WORKFLOW PROMPT RECIPES
         ═══════════════════════════════════════════════════════════════════════ */}
      <section
        id="slide-03"
        className="scroll-mt-24 bg-white border border-sbb-black grid grid-cols-1 lg:grid-cols-12 shadow-xs"
      >
        {/* Left: Text Box (5 cols) */}
        <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-zinc-200 space-y-5">
          <div className="space-y-3.5">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-sbb-black text-white font-mono text-[11px] font-bold uppercase tracking-wider">
              <span className="text-[#FFCC00]">03 / 04</span>
              <span>{isEn ? 'ENTERPRISE IT & DAILY TOOLS' : 'IT-INTEGRATION & ALLTAGSTOOLS'}</span>
            </div>

            <h2 className="text-xl sm:text-2xl font-black text-sbb-black tracking-tight leading-snug">
              {isEn
                ? 'No unread rulebooks, no "shadow IT": plug into existing layers and Office tools'
                : 'Keine ungelesenen Regelwerke, keine «Shadow IT»: Direkt in bestehende Systeme und Office-Tools'}
            </h2>

            <p className="text-sm text-zinc-800 leading-relaxed">
              {isEn
                ? 'In a regulated enterprise or institution operating across central and regional hubs, this system cannot be a standalone "shadow IT" silo or a folder of static rulebook documents. It connects existing enterprise layers across two streams:'
                : 'In einem regulierten Unternehmen mit zentralen und regionalen Standorten wird dieses System nicht als isoliertes «Shadow-IT»-Silo oder als Ordner voller Regel-Dokumente gebaut. Es verbindet bestehende Unternehmenssysteme entlang zweier Ströme:'}
            </p>

            <div className="space-y-2.5 pt-1">
              <div className="p-3 bg-sbb-cloud border-l-4 border-sbb-red text-xs sm:text-sm text-zinc-800 leading-relaxed">
                <strong className="text-sbb-black font-mono uppercase text-xs block mb-0.5">
                  {isEn ? '1. Outside-In Layer:' : '1. Outside-In-Ebene:'}
                </strong>
                {isEn
                  ? 'External feeds, licensed media & social aggregators (Factiva, Meltwater, Talkwalker) + public LLM APIs ingest article streams. Because these produce huge amounts of data, they are digested into structured data and processed statistically and by LLMs to identify where messages come through and where work needs to be done.'
                  : 'Externe Feeds, lizenzierte Medien- & Social-Aggregatoren (Factiva, Meltwater, Talkwalker) sowie öffentliche LLM-APIs erfassen Artikelströme. Da diese enorme Datenmengen erzeugen, werden sie in strukturierte Daten überführt und statistisch sowie per LLM ausgewertet, um zu erkennen, wo Botschaften durchdringen und wo Handlungsbedarf besteht.'}
              </div>

              <div className="p-3 bg-sbb-cloud border-l-4 border-emerald-700 text-xs sm:text-sm text-zinc-800 leading-relaxed">
                <strong className="text-sbb-black font-mono uppercase text-xs block mb-0.5">
                  {isEn ? '2. Top-Down Layer:' : '2. Top-Down-Ebene:'}
                </strong>
                {isEn
                  ? 'Central Comms administers key narratives and GEO frameworks, translates them into prompt recipes, and distributes them through existing enterprise systems right where work is done: inside Word, Excel, and Outlook—minimizing friction so teams benefit immediately and actually use them.'
                  : 'Die zentrale Kommunikation verwaltet Kern-Narrative und GEO-Frameworks, übersetzt sie in Prompt-Rezepte und verteilt sie über bestehende Systeme direkt dorthin, wo gearbeitet wird: in Word, Excel und Outlook – mit minimaler Reibung und sofortigem Nutzen.'}
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-zinc-200 flex items-center justify-end text-[11px] font-mono">
            <button
              type="button"
              onClick={() => onEnterWorkspace('trending')}
              className="text-emerald-800 font-bold hover:underline flex items-center gap-1 cursor-pointer"
            >
              <span>{isEn ? 'Open 03 Office Recipes' : '03 Office-Rezepte öffnen'}</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Right: Animated Illustration 03 (7 cols) */}
        <div className="lg:col-span-7 bg-[#F8F8F9] p-6 sm:p-8 flex flex-col justify-between gap-4">
          {/* Discarded Anti-Patterns Bar */}
          <div className="flex flex-wrap items-center justify-between gap-2 px-3.5 py-2 bg-zinc-200/70 border border-zinc-300 text-xs text-zinc-600">
            <span className="font-mono text-[11px] font-bold uppercase text-zinc-700">
              {isEn ? 'Avoided Failure Modes:' : 'Vermiedene Sackgassen:'}
            </span>
            <div className="flex flex-wrap items-center gap-3 font-mono text-[11px]">
              <span className="inline-flex items-center gap-1 line-through text-zinc-600">
                <XCircle className="w-3.5 h-3.5 text-sbb-red shrink-0" />
                {isEn ? 'Unread rulebook documents' : 'Ungelesene Regel-Dokumente'}
              </span>
              <span className="inline-flex items-center gap-1 line-through text-zinc-600">
                <XCircle className="w-3.5 h-3.5 text-sbb-red shrink-0" />
                {isEn ? 'Standalone "Shadow IT" silo' : 'Isoliertes «Shadow-IT»-Silo'}
              </span>
            </div>
          </div>

          {/* Stream 1: OUTSIDE-IN */}
          <div className="bg-white border border-sbb-black p-4 space-y-3">
            <div className="font-mono text-[11px] font-black uppercase text-sbb-red flex items-center gap-1.5">
              <Database className="w-3.5 h-3.5" />
              <span>
                {isEn
                  ? 'STREAM 1 // OUTSIDE-IN: EXTERNAL FEEDS TO ACTIONABLE GAPS'
                  : 'STREAM 1 // OUTSIDE-IN: VON EXTERNEN FEEDS ZU KLAREM HANDLUNGSBEDARF'}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-2">
              <div className="p-3 bg-sbb-cloud border border-sbb-aluminum space-y-1">
                <div className="font-mono text-[10px] font-bold uppercase text-zinc-600">
                  {isEn ? 'External Feeds' : 'Externe Feeds'}
                </div>
                <div className="text-xs font-bold text-sbb-black">
                  Factiva, Meltwater, Talkwalker + Public LLM APIs
                </div>
                <div className="text-[11px] text-zinc-600">
                  {isEn ? 'Huge raw article streams' : 'Enorme Mengen an Rohartikeln'}
                </div>
              </div>

              <svg width="28" height="24" viewBox="0 0 28 24" className="hidden md:block shrink-0">
                <line x1="0" y1="12" x2="28" y2="12" stroke="#EB0000" strokeWidth="2" className="terrain-flow-line" />
              </svg>

              <div className="p-3 bg-sbb-cloud border border-sbb-aluminum space-y-1">
                <div className="font-mono text-[10px] font-bold uppercase text-zinc-600">
                  {isEn ? 'Digestion' : 'Aufbereitung'}
                </div>
                <div className="text-xs font-bold text-sbb-black">
                  {isEn ? 'Transform Into Structured Data' : 'Transformation in strukturierte Daten'}
                </div>
                <div className="text-[11px] text-zinc-600">
                  {isEn ? 'Makes massive volume computable' : 'Macht grosse Datenmengen auswertbar'}
                </div>
              </div>

              <svg width="28" height="24" viewBox="0 0 28 24" className="hidden md:block shrink-0">
                <line x1="0" y1="12" x2="28" y2="12" stroke="#EB0000" strokeWidth="2" className="terrain-flow-line" />
              </svg>

              <div className="p-3 bg-red-50/50 border border-sbb-red space-y-1">
                <div className="font-mono text-[10px] font-bold uppercase text-sbb-red">
                  {isEn ? 'Statistical + LLM Processing' : 'Statistik + LLM-Analyse'}
                </div>
                <div className="text-xs font-bold text-sbb-black">
                  {isEn ? 'Where Messages Land & Where Work Is Needed' : 'Wo Botschaften durchdringen & wo Arbeit nötig ist'}
                </div>
              </div>
            </div>
          </div>

          {/* Connector Between Outside-In Findings & Top-Down Recipes */}
          <div className="flex items-center justify-center gap-2 text-[11px] font-mono font-bold text-zinc-600">
            <ArrowDown className="w-3.5 h-3.5 text-sbb-red" />
            <span>
              {isEn
                ? 'Risks & findings inform Central Comms narratives and prompt recipes'
                : 'Erkenntnisse & Risiken fliessen in zentrale Narrative und Prompt-Rezepte ein'}
            </span>
          </div>

          {/* Stream 2: TOP-DOWN */}
          <div className="bg-white border-2 border-sbb-black p-4 space-y-3">
            <div className="font-mono text-[11px] font-black uppercase text-emerald-800 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" />
              <span>
                {isEn
                  ? 'STREAM 2 // TOP-DOWN: PROMPT RECIPES STREAMED INTO DAY-TO-DAY TOOLS'
                  : 'STREAM 2 // TOP-DOWN: PROMPT-REZEPTE DIREKT IN DIE TÄGLICHEN TOOLS'}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[1.15fr_auto_1.35fr] items-center gap-3">
              <div className="p-3.5 bg-sbb-cloud border border-sbb-black space-y-1.5">
                <div className="font-mono text-[10px] font-bold uppercase text-emerald-800">
                  {isEn ? 'Central Comms Administration' : 'Zentrale Kommunikations-Steuerung'}
                </div>
                <div className="text-xs font-bold text-sbb-black">
                  {isEn
                    ? 'Key Narratives + GEO Frameworks → Prompt Recipes'
                    : 'Kern-Narrative + GEO-Frameworks → Prompt-Rezepte'}
                </div>
                <div className="text-[11px] text-zinc-600">
                  {isEn
                    ? 'Distributed via existing enterprise system'
                    : 'Verteilt über das bestehende Unternehmenssystem'}
                </div>
              </div>

              <div className="hidden md:flex items-center justify-center">
                <svg width="42" height="104" viewBox="0 0 42 104" className="overflow-visible">
                  <path d="M 0 52 C 20 52, 20 16, 42 16" fill="none" stroke="#047857" strokeWidth="1.75" className="terrain-flow-line" />
                  <path d="M 0 52 L 42 52" fill="none" stroke="#047857" strokeWidth="1.75" className="terrain-flow-line" />
                  <path d="M 0 52 C 20 52, 20 88, 42 88" fill="none" stroke="#047857" strokeWidth="1.75" className="terrain-flow-line" />
                </svg>
              </div>

              {/* Word, Excel, Outlook */}
              <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-1 gap-2">
                <div className="p-2.5 bg-emerald-50/40 border border-emerald-700/60 flex items-center gap-2.5">
                  <FileText className="w-4 h-4 text-emerald-800 shrink-0" />
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-sbb-black">Word</div>
                    <div className="text-[11px] text-zinc-700 leading-snug">
                      {isEn ? 'Stories, statements & briefings' : 'Stories, Statements & Briefings'}
                    </div>
                  </div>
                </div>

                <div className="p-2.5 bg-emerald-50/40 border border-emerald-700/60 flex items-center gap-2.5">
                  <FileSpreadsheet className="w-4 h-4 text-emerald-800 shrink-0" />
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-sbb-black">Excel</div>
                    <div className="text-[11px] text-zinc-700 leading-snug">
                      {isEn ? 'Structured Q&A & message grids' : 'Strukturierte Q&As & Faktenraster'}
                    </div>
                  </div>
                </div>

                <div className="p-2.5 bg-emerald-50/40 border border-emerald-700/60 flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-emerald-800 shrink-0" />
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-sbb-black">Outlook</div>
                    <div className="text-[11px] text-zinc-700 leading-snug">
                      {isEn ? 'Stakeholder & media replies' : 'Stakeholder- & Medienantworten'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TRANSITION BRIDGE 03 → 04 ─── */}
      <div className="flex flex-col items-center py-3">
        <div className="w-0.5 h-4 bg-sbb-black" />
        <div className="bg-sbb-black text-white px-4 py-2.5 border-l-4 border-[#FFCC00] max-w-2xl w-full flex items-center gap-3 shadow-2xs">
          <span className="font-mono text-[11px] font-black uppercase tracking-widest text-[#FFCC00] shrink-0 flex items-center gap-1">
            <ArrowDown className="w-3.5 h-3.5" />
            <span>{isEn ? 'THE REALISTIC BOUNDARY' : 'DIE REALISTISCHE GRENZE'}</span>
          </span>
          <p className="text-xs sm:text-sm font-medium text-zinc-100 leading-snug">
            {isEn
              ? 'When a communicator runs a prompt recipe inside Word or Outlook, what can an LLM realistically deliver—and where do humans take over?'
              : 'Wenn Kommunikatoren ein Prompt-Rezept in Word oder Outlook starten: Was kann ein LLM realistisch liefern – und wo übernimmt der Mensch?'}
          </p>
        </div>
        <div className="w-0.5 h-4 bg-sbb-black" />
      </div>

      {/* ═══════════════════════════════════════════════════════════════════════
          SLIDE 04: LIMITATIONS — NO ONE-SHOT OUTPUT; HUMANS ITERATE
         ═══════════════════════════════════════════════════════════════════════ */}
      <section
        id="slide-04"
        className="scroll-mt-24 bg-white border border-sbb-black grid grid-cols-1 lg:grid-cols-12 shadow-xs"
      >
        {/* Left: Text Box (5 cols) */}
        <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-zinc-200 space-y-5">
          <div className="space-y-3.5">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-sbb-black text-white font-mono text-[11px] font-bold uppercase tracking-wider">
              <span className="text-[#FFCC00]">04 / 04</span>
              <span>{isEn ? 'LIMITATIONS & HUMAN ROLE' : 'GRENZEN & MENSCHLICHE ROLLE'}</span>
            </div>

            <h2 className="text-xl sm:text-2xl font-black text-sbb-black tracking-tight leading-snug">
              {isEn
                ? 'No "one-shot, ready-to-send" output: AI frames the context, humans iterate'
                : 'Kein «One-Shot, versandfertiger» Text: KI liefert den Rahmen, Menschen iterieren'}
            </h2>

            <p className="text-sm text-zinc-800 leading-relaxed font-medium">
              {isEn
                ? 'An LLM will never produce a finished, ready-to-send statement or corporate story in a single pass (at least for the time being).'
                : 'Ein LLM wird (zumindest auf absehbare Zeit) niemals in einem einzigen Durchgang ein fertiges, versandbereites Statement oder eine fertige Corporate Story schreiben.'}
            </p>

            <p className="text-sm text-zinc-800 leading-relaxed">
              {isEn
                ? 'AI enforces the GEO framework and tailors the narratives; humans iterate. Its real value is giving teams three concrete inputs at once:'
                : 'Die KI sichert das GEO-Framework und schneidet die Narrative auf den Kontext zu; der Mensch iteriert. Ihr eigentlicher Wert liegt darin, den Teams drei Bausteine gleichzeitig bereitzustellen:'}
            </p>

            <ul className="space-y-2 text-xs sm:text-sm text-zinc-800">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <span>
                  {isEn
                    ? 'Tailored versions of the company’s key narrative'
                    : 'Auf den Kontext zugeschnittene Versionen des Unternehmens-Kernnarrativs'}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <span>
                  {isEn
                    ? 'A structured GEO framework'
                    : 'Ein strukturiertes GEO-Framework'}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <span>
                  {isEn
                    ? 'The most important communication risks derived from the Outside-In branch'
                    : 'Die wichtigsten Kommunikationsrisiken aus dem Outside-In-Zweig'}
                </span>
              </li>
            </ul>

            <p className="text-sm text-sbb-black font-bold leading-relaxed pt-1">
              {isEn
                ? '…so human communicators can iterate the final text with full context.'
                : '…damit menschliche Kommunikatoren den finalen Text mit vollem Kontext ausarbeiten können.'}
            </p>
          </div>

          <div className="pt-3 border-t border-zinc-200 flex items-center justify-end text-[11px] font-mono">
            <button
              type="button"
              onClick={() => onEnterWorkspace('trending')}
              className="text-sbb-red font-bold hover:underline flex items-center gap-1 cursor-pointer"
            >
              <span>{isEn ? 'See Human Iteration in 03' : 'Menschliche Iteration in 03 ansehen'}</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Right: Animated Illustration 04 (7 cols) */}
        <div className="lg:col-span-7 bg-[#F8F8F9] p-6 sm:p-8 flex flex-col justify-between gap-4">
          {/* Explicit No One-Shot Banner */}
          <div className="p-3 bg-red-50 border border-red-300 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-red-950 uppercase">
              <XCircle className="w-4 h-4 text-sbb-red shrink-0" />
              <span>
                {isEn
                  ? 'Myth: "1-Click Ready-to-Send Statement / Story"'
                  : 'Mythos: «1-Klick-versandfertiges Statement / Story»'}
              </span>
            </div>
            <span className="px-2 py-0.5 bg-white border border-red-300 font-mono text-[10px] font-bold text-sbb-red uppercase">
              {isEn ? 'Not realistic in a single pass' : 'Nicht realistisch in einem Durchgang'}
            </span>
          </div>

          {/* 3 Concrete Inputs -> Human Communicator Iteration */}
          <div className="bg-white border-2 border-sbb-black p-4 sm:p-5 space-y-4">
            <div className="font-mono text-[11px] font-black uppercase text-sbb-black">
              {isEn
                ? 'WHAT THE PROMPT RECIPE ACTUALLY HANDS THE COMMUNICATOR:'
                : 'WAS DAS PROMPT-REZEPT DEN KOMMUNIKATOREN KONKRET BEREITSTELLT:'}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[1.2fr_auto_1.15fr] items-center gap-3">
              {/* 3 Inputs */}
              <div className="space-y-2.5">
                <div className="p-3 bg-sbb-cloud border-l-4 border-emerald-700 border border-zinc-300 space-y-0.5">
                  <div className="font-mono text-[10px] font-bold uppercase text-emerald-800">
                    {isEn ? 'Input 01 // Top-Down' : 'Baustein 01 // Top-Down'}
                  </div>
                  <div className="text-xs font-bold text-sbb-black">
                    {isEn ? 'Tailored Key Narrative' : 'Zugeschnittenes Kern-Narrativ'}
                  </div>
                  <div className="text-[11px] text-zinc-600">
                    {isEn ? 'Adapted to channel & audience context' : 'An Kanal- & Zielgruppenkontext angepasst'}
                  </div>
                </div>

                <div className="p-3 bg-sbb-cloud border-l-4 border-[#FFCC00] border border-zinc-300 space-y-0.5">
                  <div className="font-mono text-[10px] font-bold uppercase text-zinc-700">
                    {isEn ? 'Input 02 // Top-Down' : 'Baustein 02 // Top-Down'}
                  </div>
                  <div className="text-xs font-bold text-sbb-black">
                    {isEn ? 'Structured GEO Framework' : 'Strukturiertes GEO-Framework'}
                  </div>
                  <div className="text-[11px] text-zinc-600">
                    {isEn ? 'Clear fact structure for AI answer engines' : 'Klare Faktenstruktur für KI-Antwortmaschinen'}
                  </div>
                </div>

                <div className="p-3 bg-sbb-cloud border-l-4 border-sbb-red border border-zinc-300 space-y-0.5">
                  <div className="font-mono text-[10px] font-bold uppercase text-sbb-red">
                    {isEn ? 'Input 03 // Outside-In' : 'Baustein 03 // Outside-In'}
                  </div>
                  <div className="text-xs font-bold text-sbb-black">
                    {isEn ? 'Key Communication Risks' : 'Wichtigste Kommunikationsrisiken'}
                  </div>
                  <div className="text-[11px] text-zinc-600">
                    {isEn ? 'Derived from Outside-In monitoring' : 'Abgeleitet aus der Outside-In-Analyse'}
                  </div>
                </div>
              </div>

              {/* Animated Convergence SVG */}
              <div className="hidden md:flex items-center justify-center">
                <svg width="46" height="140" viewBox="0 0 46 140" className="overflow-visible">
                  <path d="M 0 24 C 23 24, 23 70, 46 70" fill="none" stroke="#047857" strokeWidth="1.75" className="terrain-flow-line" />
                  <path d="M 0 70 L 46 70" fill="none" stroke="#18181B" strokeWidth="1.75" className="terrain-flow-line" />
                  <path d="M 0 116 C 23 116, 23 70, 46 70" fill="none" stroke="#EB0000" strokeWidth="1.75" className="terrain-flow-line" />
                  <circle cx="42" cy="70" r="3.5" fill="#18181B" />
                </svg>
              </div>

              {/* Human Iteration Box */}
              <div className="p-4 bg-sbb-black text-white border-l-4 border-[#FFCC00] space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-[10px] font-black uppercase tracking-wider text-[#FFCC00] flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5" />
                    <span>{isEn ? 'Human Communicator' : 'Menschliche Kommunikation'}</span>
                  </span>
                  <RefreshCw className="w-3.5 h-3.5 text-[#FFCC00] terrain-soft-pulse" />
                </div>

                <div className="text-sm font-bold leading-snug">
                  {isEn
                    ? 'Iterates the Final Text with Full Context'
                    : 'Iteriert den finalen Text mit vollem Kontext'}
                </div>

                <p className="text-xs text-zinc-300 leading-relaxed">
                  {isEn
                    ? 'Inside Word, Excel, or Outlook, the communicator reviews the tailored draft, weighs the Outside-In risks, and refines the final wording.'
                    : 'Direkt in Word, Excel oder Outlook prüft das Team den zugeschnittenen Entwurf, wägt die Outside-In-Risiken ab und schärft den finalen Text.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ BOTTOM ACTION BAR: ENTER INTERACTIVE WALKTHROUGH ═══ */}
      <div className="pt-6">
        <div className="bg-white border-2 border-sbb-black p-5 sm:p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-4 shadow-xs">
          <div className="space-y-1">
            <div className="font-mono text-xs font-bold uppercase tracking-wider text-sbb-black flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-sbb-red" />
              <span>
                {isEn
                  ? 'Explore the Interactive Deep-Dive (Modules 01–03)'
                  : 'Die interaktive Vertiefung erkunden (Module 01–03)'}
              </span>
            </div>
            <p className="text-xs text-zinc-600">
              {isEn
                ? 'Start at 01 Outside-In or jump straight to Top-Down GEO (02) and Office Recipes (03).'
                : 'Starten Sie bei 01 Outside-In oder springen Sie direkt zu Top-Down GEO (02) und Office-Rezepten (03).'}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            <button
              type="button"
              onClick={() => onEnterWorkspace('geo')}
              className="px-3 py-2 bg-white hover:bg-sbb-cloud border border-sbb-black font-mono text-xs font-bold uppercase tracking-wider text-sbb-black transition-colors cursor-pointer"
            >
              {isEn ? '02 GEO & Tailoring' : '02 GEO & Anpassung'}
            </button>

            <button
              type="button"
              onClick={() => onEnterWorkspace('trending')}
              className="px-3 py-2 bg-white hover:bg-sbb-cloud border border-sbb-black font-mono text-xs font-bold uppercase tracking-wider text-sbb-black transition-colors cursor-pointer"
            >
              {isEn ? '03 Office Recipes' : '03 Office-Rezepte'}
            </button>

            <button
              type="button"
              onClick={() => onEnterWorkspace('cockpit')}
              className="px-5 py-2.5 bg-sbb-red hover:bg-sbb-red-125 text-white font-mono text-xs font-black uppercase tracking-wider transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <span>{isEn ? 'Start: 01 Outside-In' : 'Start: 01 Outside-In'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConceptFlowView;
