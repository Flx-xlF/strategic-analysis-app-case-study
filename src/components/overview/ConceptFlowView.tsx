import React from 'react';
import { Language } from '../../fixtures/scenarios';
import {
  ArrowRight,
  BarChart3,
  BrainCircuit,
  CheckCircle2,
  FileWarning,
  HelpCircle,
  Lock,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  Users
} from 'lucide-react';

interface Props {
  lang: Language;
  onEnterWorkspace: (tab?: 'cockpit' | 'geo' | 'trending' | 'cascade') => void;
  onOpenConceptModal: () => void;
}

const DownFlowLine: React.FC<{ tone?: 'red' | 'emerald' | 'black' }> = ({ tone = 'black' }) => {
  const color =
    tone === 'red' ? '#EB0000' : tone === 'emerald' ? '#047857' : '#27272A';

  return (
    <div className="flex justify-center py-0.5" aria-hidden="true">
      <svg width="24" height="32" viewBox="0 0 24 32" className="overflow-visible">
        <line
          x1="12"
          y1="0"
          x2="12"
          y2="26"
          stroke={color}
          strokeWidth="2"
          className="animate-flow-dash-slow"
        />
        <polygon points="7,22 17,22 12,30" fill={color} />
      </svg>
    </div>
  );
};

export const ConceptFlowView: React.FC<Props> = ({
  lang,
  onEnterWorkspace,
  onOpenConceptModal
}) => {
  const isEn = lang === 'en';

  return (
    <div className="max-w-3xl mx-auto space-y-2 pb-10">
      {/* ═══ CALM HEADER ═══ */}
      <div className="bg-white border border-sbb-aluminum p-6 sm:p-8 space-y-4">
        <div className="space-y-1.5">
          <div className="text-[11px] font-mono font-bold tracking-widest text-sbb-red uppercase">
            {isEn ? 'OVERVIEW // IN UNDER TWO MINUTES' : 'ÜBERBLICK // IN UNTER ZWEI MINUTEN'}
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-sbb-black tracking-tight">
            {isEn
              ? 'How It Works — In Under Two Minutes'
              : 'Wie es funktioniert — In unter zwei Minuten'}
          </h1>
          <p className="text-sm text-zinc-700 leading-relaxed">
            {isEn
              ? 'Scroll through the five steps at your own pace, or jump straight into the working prototype anytime.'
              : 'Scrollen Sie in Ihrem eigenen Tempo durch die fünf Schritte – oder springen Sie jederzeit direkt in den Prototyp.'}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-1">
          <button
            type="button"
            onClick={() => onEnterWorkspace('cockpit')}
            className="px-4 py-2 bg-sbb-red hover:bg-sbb-red-125 text-white font-mono text-xs font-black uppercase tracking-wider transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <span>{isEn ? 'Open Working Prototype' : 'Zum Live-Prototyp'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <button
            type="button"
            onClick={onOpenConceptModal}
            className="px-3.5 py-2 bg-sbb-cloud hover:bg-zinc-200 border border-sbb-aluminum font-mono text-xs font-bold uppercase tracking-wider text-sbb-black transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <HelpCircle className="w-3.5 h-3.5 text-sbb-red" />
            <span>{isEn ? 'IT & Method' : 'IT & Methodik'}</span>
          </button>
        </div>
      </div>

      <DownFlowLine tone="red" />

      {/* ═══ STEP 01: WHY TODAY BREAKS (CONVERGING INPUTS) ═══ */}
      <div className="bg-white border-2 border-sbb-red p-5 sm:p-6 space-y-4">
        <div className="flex items-center justify-between gap-2">
          <span className="font-mono text-xs font-black uppercase text-sbb-red">
            {isEn ? '01 // WHY TODAY BREAKS' : '01 // DAS PROBLEM HEUTE'}
          </span>
          <span className="text-[11px] font-mono text-zinc-500">
            {isEn ? 'Separate channels merge in search' : 'Getrennte Kanäle verschmelzen'}
          </span>
        </div>

        {/* Converging Inputs Visual */}
        <div className="p-4 bg-sbb-cloud/60 border border-sbb-aluminum space-y-3">
          <div className="grid grid-cols-3 gap-2 text-center font-mono text-[11px]">
            <div className="p-2 bg-white border border-sbb-aluminum text-zinc-800">
              {isEn ? 'Press Release' : 'Medienmitteilung'}
            </div>
            <div className="p-2 bg-white border border-sbb-aluminum text-zinc-800">
              {isEn ? 'Local Country Post' : 'Länder-Beitrag'}
            </div>
            <div className="p-2 bg-red-50 border border-red-300 text-red-900 font-bold flex items-center justify-center gap-1">
              <FileWarning className="w-3.5 h-3.5 text-sbb-red shrink-0" />
              <span>{isEn ? 'Forgotten 2023 PDF' : 'Altes 2023-PDF'}</span>
            </div>
          </div>

          <div className="flex justify-center" aria-hidden="true">
            <svg width="240" height="22" viewBox="0 0 240 22" className="overflow-visible">
              <path d="M 35 0 L 120 18" stroke="#EB0000" strokeWidth="1.5" className="animate-flow-dash-slow" />
              <path d="M 120 0 L 120 18" stroke="#EB0000" strokeWidth="1.5" className="animate-flow-dash-slow" />
              <path d="M 205 0 L 120 18" stroke="#EB0000" strokeWidth="1.5" className="animate-flow-dash-slow" />
              <polygon points="115,15 125,15 120,22" fill="#EB0000" />
            </svg>
          </div>

          <div className="p-2.5 bg-red-50 border border-sbb-red text-center text-xs font-bold text-red-950">
            {isEn
              ? 'AI Search Assistant → One Mixed & Contradictory Answer'
              : 'KI-Suchassistent → Eine vermischte, widersprüchliche Antwort'}
          </div>
        </div>

        <p className="text-sm text-zinc-800 leading-relaxed">
          {isEn
            ? 'Teams write separately, but AI search pulls current web pages, local posts, and forgotten old PDFs into a single answer.'
            : 'Teams schreiben getrennt, doch die KI-Suche zieht aktuelle Webseiten, Länder-Posts und vergessene Alt-PDFs in einer einzigen Antwort zusammen.'}
        </p>
      </div>

      <DownFlowLine tone="black" />

      {/* ═══ STAGE 1: FILTER NOISE WITH MATH FIRST (NARROWING FUNNEL) ═══ */}
      <div className="bg-white border border-sbb-black p-5 sm:p-6 space-y-4">
        <div className="flex items-center justify-between gap-2">
          <span className="font-mono text-xs font-black uppercase text-sbb-black flex items-center gap-2">
            <BarChart3 className="w-4 h-4 text-sbb-red" />
            <span>{isEn ? '02 // FILTER NOISE BEFORE USING AI (OUTSIDE-IN)' : '02 // LÄRM ZUERST MIT STATISTIK FILTERN (OUTSIDE-IN)'}</span>
          </span>
          <span className="text-[11px] font-mono bg-sbb-cloud px-2 py-0.5 border border-sbb-aluminum text-zinc-700">
            {isEn ? 'Module 01' : 'Modul 01'}
          </span>
        </div>

        {/* Narrowing Funnel Visual */}
        <div className="p-4 bg-sbb-cloud/60 border border-sbb-aluminum space-y-2.5">
          <div className="space-y-1.5 font-mono text-[11px]">
            <div className="flex items-center justify-between">
              <span className="text-zinc-600">{isEn ? 'All incoming articles' : 'Alle eingehenden Artikel'}</span>
              <strong className="text-sbb-black">48,420</strong>
            </div>
            <div className="w-full h-2.5 bg-zinc-300">
              <div className="h-full bg-sbb-black w-full" />
            </div>

            <div className="flex items-center justify-between pt-1">
              <span className="text-zinc-600">{isEn ? 'After removing duplicate reprints' : 'Nach Abzug von Agentur-Dubletten'}</span>
              <strong className="text-sbb-black">19,110</strong>
            </div>
            <div className="w-full h-2.5 bg-zinc-200">
              <div className="h-full bg-sbb-black w-[40%]" />
            </div>
          </div>

          <div className="pt-2 border-t border-zinc-200 flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
            <span className="line-through text-zinc-500">
              {isEn ? 'Mood tools say: "76% Neutral"' : 'Stimmungs-Tool: "76% Neutral"'}
            </span>
            <span className="px-2 py-0.5 bg-red-100 border border-red-300 text-sbb-red font-bold">
              {isEn ? 'Topic Volume Jumping Fast' : 'Themen-Volumen steigt sprunghaft'}
            </span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <p className="text-sm text-zinc-800 leading-relaxed">
            {isEn
              ? 'Too many articles to read manually. Math removes duplicate reprints first, then flags topics jumping above normal volume—even when mood scores look calm.'
              : 'Zu viele Artikel zum manuellen Lesen. Statistik entfernt zuerst Dubletten und meldet Themen mit plötzlichem Anstieg – selbst wenn die Stimmung neutral wirkt.'}
          </p>
          <button
            type="button"
            onClick={() => onEnterWorkspace('cockpit')}
            className="text-xs font-mono font-bold text-sbb-red hover:underline flex items-center gap-1 shrink-0 cursor-pointer"
          >
            <span>{isEn ? 'See live in Module 01' : 'Live in Modul 01'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      <DownFlowLine tone="black" />

      {/* ═══ STAGE 2: CHECK WHAT AI SEARCH SAYS ═══ */}
      <div className="bg-white border border-sbb-black p-5 sm:p-6 space-y-4">
        <div className="flex items-center justify-between gap-2">
          <span className="font-mono text-xs font-black uppercase text-sbb-black flex items-center gap-2">
            <BrainCircuit className="w-4 h-4 text-sbb-red" />
            <span>{isEn ? '03 // CHECK WHAT AI SEARCH SAYS (OUTSIDE-IN)' : '03 // PRÜFEN, WAS DIE KI-SUCHE SAGT (OUTSIDE-IN)'}</span>
          </span>
          <span className="text-[11px] font-mono bg-sbb-cloud px-2 py-0.5 border border-sbb-aluminum text-zinc-700">
            {isEn ? 'Module 02' : 'Modul 02'}
          </span>
        </div>

        {/* Diagnostic Snippet Visual */}
        <div className="p-4 bg-sbb-cloud/60 border border-sbb-aluminum space-y-2.5">
          <div className="text-xs text-zinc-800">
            <strong className="font-mono uppercase text-[10px] text-zinc-500 block mb-1">
              {isEn ? 'Tested across repeated checks:' : 'Über wiederholte Tests geprüft:'}
            </strong>
            <span>{isEn ? 'AI answer mixes up: ' : 'KI-Antwort vermischt: '}</span>
            <span className="px-1.5 py-0.5 bg-red-100 border border-red-300 text-red-950 font-mono text-[11px] font-bold">
              [1] {isEn ? 'Old pricing rumor' : 'Altes Preis-Gerücht'}
            </span>{' '}
            <span className="px-1.5 py-0.5 bg-red-100 border border-red-300 text-red-950 font-mono text-[11px] font-bold">
              [2] {isEn ? 'Missed trial context' : 'Fehlender Studienkontext'}
            </span>
          </div>

          <div className="pt-2 border-t border-zinc-200 flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
            <span className="text-sbb-red font-bold">
              {isEn ? 'Before: 48% Distorted' : 'Vorher: 48% Verzerrt'}
            </span>
            <span className="text-emerald-800 font-bold">
              {isEn ? 'With clear facts online: ~95% Accurate' : 'Mit klaren Fakten online: ~95% Korrekt'}
            </span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <p className="text-sm text-zinc-800 leading-relaxed">
            {isEn
              ? 'Inspect the key articles driving that jump and test real AI search answers repeatedly to see exactly which missing facts or old PDFs cause mistakes.'
              : 'Prüft die wichtigsten Artikel hinter dem Anstieg und testet echte KI-Antworten wiederholt – um genau zu sehen, welche fehlenden Fakten oder Alt-PDFs Fehler auslösen.'}
          </p>
          <button
            type="button"
            onClick={() => onEnterWorkspace('geo')}
            className="text-xs font-mono font-bold text-sbb-red hover:underline flex items-center gap-1 shrink-0 cursor-pointer"
          >
            <span>{isEn ? 'See live in Module 02' : 'Live in Modul 02'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      <DownFlowLine tone="black" />

      {/* ═══ HUMAN CHECKPOINT GATE ═══ */}
      <div className="bg-sbb-black text-white p-4 sm:p-5 border-2 border-[#FFCC00] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-start sm:items-center gap-3">
          <Users className="w-5 h-5 text-[#FFCC00] shrink-0 mt-0.5 sm:mt-0" />
          <div className="space-y-0.5">
            <div className="font-mono text-xs font-black uppercase tracking-wider text-[#FFCC00]">
              {isEn ? 'HUMAN DECISION — NEVER AI ALONE' : 'MENSCHLICHE ENTSCHEIDUNG — NIE KI ALLEIN'}
            </div>
            <p className="text-xs sm:text-sm text-zinc-200">
              {isEn
                ? 'Comms and Legal review what surfaced, approve the core facts, numbers, and names, and take old PDFs offline.'
                : 'Kommunikation und Recht prüfen die Befunde, geben Kernfakten, Zahlen und Namen frei und nehmen veraltete PDFs vom Netz.'}
            </p>
          </div>
        </div>
      </div>

      <DownFlowLine tone="emerald" />

      {/* ═══ STAGE 3: 1-CLICK RECIPES WITHOUT PDF MANUALS (BRANCHING FAN-OUT) ═══ */}
      <div className="bg-white border-2 border-emerald-700 p-5 sm:p-6 space-y-4">
        <div className="flex items-center justify-between gap-2">
          <span className="font-mono text-xs font-black uppercase text-emerald-900 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-emerald-700" />
            <span>{isEn ? '04 // HELP TEAMS WRITE WITHOUT PDF MANUALS (TOP-DOWN)' : '04 // SCHREIBEN OHNE PDF-HANDBÜCHER (TOP-DOWN)'}</span>
          </span>
          <span className="text-[11px] font-mono bg-sbb-cloud px-2 py-0.5 border border-sbb-aluminum text-zinc-700">
            {isEn ? 'Module 03' : 'Modul 03'}
          </span>
        </div>

        {/* Branching Fan-Out Visual: 1 Core -> 3 Natural Voices */}
        <div className="p-4 bg-sbb-cloud/60 border border-sbb-aluminum space-y-3">
          <div className="p-2.5 bg-emerald-50 border border-emerald-400 text-center text-xs font-bold text-emerald-950 flex items-center justify-center gap-1.5">
            <Lock className="w-3.5 h-3.5 text-emerald-800 shrink-0" />
            <span>
              {isEn
                ? '1 Approved Core (Verified facts, figures & product names) — inside Outlook & Word'
                : '1 geprüfte Fakten-Basis (Fakten, Zahlen & Produktnamen) — direkt in Outlook & Word'}
            </span>
          </div>

          <div className="flex justify-center" aria-hidden="true">
            <svg width="240" height="22" viewBox="0 0 240 22" className="overflow-visible">
              <path d="M 120 0 L 35 20" stroke="#047857" strokeWidth="1.5" className="animate-flow-dash-slow" />
              <path d="M 120 0 L 120 20" stroke="#047857" strokeWidth="1.5" className="animate-flow-dash-slow" />
              <path d="M 120 0 L 205 20" stroke="#047857" strokeWidth="1.5" className="animate-flow-dash-slow" />
            </svg>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px]">
            <div className="p-2.5 bg-white border border-sbb-aluminum">
              <strong className="block font-mono text-[10px] uppercase text-sbb-black mb-0.5">
                {isEn ? 'Website & Public Pages' : 'Website & Infoseiten'}
              </strong>
              <span className="text-zinc-700">
                {isEn ? 'Clear plain language, main point first.' : 'Klare Alltagssprache, Kernaussage zuerst.'}
              </span>
            </div>
            <div className="p-2.5 bg-white border border-sbb-aluminum">
              <strong className="block font-mono text-[10px] uppercase text-sbb-black mb-0.5">
                {isEn ? 'Clinical & Study Updates' : 'Klinische Studien'}
              </strong>
              <span className="text-zinc-700">
                {isEn ? 'Clinical & study figures stay untouched.' : 'Studiendaten bleiben wörtlich geschützt.'}
              </span>
            </div>
            <div className="p-2.5 bg-white border border-sbb-aluminum">
              <strong className="block font-mono text-[10px] uppercase text-sbb-black mb-0.5">
                {isEn ? 'Social & Press Replies' : 'Social & Medien-Q&A'}
              </strong>
              <span className="text-zinc-700">
                {isEn ? 'Organic local tone, no defensive repeats.' : 'Eigener lokaler Ton, keine Fangfragen.'}
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <p className="text-sm text-zinc-800 leading-relaxed">
            {isEn
              ? 'Nobody opens a 40-page PDF guide under deadline pressure. 1-click helpers save 20–30 minutes—keeping core facts steady while AI adapts tone and length naturally without hurting AI search.'
              : 'Unter Zeitdruck öffnet niemand ein 40-seitiges PDF. 1-Klick-Helfer sparen 20–30 Minuten – Kernfakten bleiben fest, während KI Ton und Länge organisch anpasst, ohne der KI-Suche zu schaden.'}
          </p>
          <button
            type="button"
            onClick={() => onEnterWorkspace('trending')}
            className="text-xs font-mono font-bold text-emerald-800 hover:underline flex items-center gap-1 shrink-0 cursor-pointer"
          >
            <span>{isEn ? 'See live in Module 03' : 'Live in Modul 03'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      <DownFlowLine tone="emerald" />

      {/* ═══ STAGE 4: TEST DRAFTS BEFORE RELEASE ═══ */}
      <div className="bg-white border-2 border-emerald-700 p-5 sm:p-6 space-y-4">
        <div className="flex items-center justify-between gap-2">
          <span className="font-mono text-xs font-black uppercase text-emerald-900 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-700" />
            <span>{isEn ? '05 // TEST DRAFTS BEFORE RELEASE (TOP-DOWN)' : '05 // ENTWÜRFE VOR FREIGABE TESTEN (TOP-DOWN)'}</span>
          </span>
          <span className="text-[11px] font-mono bg-sbb-cloud px-2 py-0.5 border border-sbb-aluminum text-zinc-700">
            {isEn ? 'Module 04' : 'Modul 04'}
          </span>
        </div>

        {/* Before / After Shield Visual */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div className="p-3 bg-red-50/70 border border-red-200 space-y-1">
            <div className="font-mono text-[10px] font-bold text-sbb-red uppercase">
              {isEn ? 'First Draft (High Headline Risk)' : 'Rohentwurf (Hohes Schlagzeilen-Risiko)'}
            </div>
            <p className="text-red-950">
              {isEn
                ? 'Repeats the critic’s claim to deny it — triggering harsh headlines.'
                : 'Wiederholt den Vorwurf zur Verneinung – und löst kritische Schlagzeilen aus.'}
            </p>
          </div>

          <div className="p-3 bg-emerald-50/70 border border-emerald-300 space-y-1">
            <div className="font-mono text-[10px] font-bold text-emerald-900 uppercase flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{isEn ? 'Revised Draft (Calm Factual Tone)' : 'Überarbeitet (Sachlicher Ton)'}</span>
            </div>
            <p className="text-emerald-950">
              {isEn
                ? 'States verified facts directly, avoids traps, and leaves final sign-off to Comms & Legal.'
                : 'Nennt geprüfte Fakten direkt, umgeht Fallen und überlässt die Freigabe Kommunikation & Recht.'}
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <p className="text-sm text-zinc-800 leading-relaxed">
            {isEn
              ? 'Check press statements and journalist replies for hidden traps before they go public.'
              : 'Prüft Medienmitteilungen und Antworten vor der Veröffentlichung auf versteckte Fallen.'}
          </p>
          <button
            type="button"
            onClick={() => onEnterWorkspace('cascade')}
            className="text-xs font-mono font-bold text-emerald-800 hover:underline flex items-center gap-1 shrink-0 cursor-pointer"
          >
            <span>{isEn ? 'See live in Module 04' : 'Live in Modul 04'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* ═══ CLOSED FEEDBACK LOOP ═══ */}
      <div className="pt-2">
        <div className="bg-emerald-50 border-2 border-emerald-700 p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start sm:items-center gap-3">
            <RefreshCw className="w-5 h-5 text-emerald-800 shrink-0 mt-0.5 sm:mt-0" />
            <div className="space-y-0.5">
              <div className="font-mono text-[11px] font-black uppercase text-emerald-900">
                {isEn ? 'CLOSED LOOP' : 'GESCHLOSSENER KREISLAUF'}
              </div>
              <p className="text-xs sm:text-sm text-emerald-950">
                {isEn
                  ? 'Clean public web pages and retired old PDFs mean AI search cites accurate facts automatically next time.'
                  : 'Klare öffentliche Webseiten und entfernte Alt-PDFs sorgen dafür, dass die KI-Suche beim nächsten Mal verlässlich die richtigen Fakten zitiert.'}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => onEnterWorkspace('cockpit')}
            className="px-4 py-2.5 bg-sbb-black hover:bg-zinc-800 text-white font-mono text-xs font-bold uppercase tracking-wider shrink-0 cursor-pointer flex items-center gap-1.5"
          >
            <span>{isEn ? 'Explore Working Prototype' : 'Live-Prototyp öffnen'}</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#FFCC00]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConceptFlowView;
