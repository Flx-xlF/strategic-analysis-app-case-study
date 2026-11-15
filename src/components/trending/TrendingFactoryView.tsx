import React, { useState } from 'react';
import { Language } from '../../fixtures/scenarios';
import { ActiveTab } from '../common/CommandHeader';
import {
  AlertTriangle,
  ArrowLeft,
  CheckCircle2,
  FileSpreadsheet,
  FileText,
  Mail,
  RefreshCw,
  Users,
  XCircle
} from 'lucide-react';

interface Props {
  lang: Language;
  onNavigateTab: (tab: ActiveTab) => void;
}

type ToolId = 'word' | 'excel' | 'outlook';

export const TrendingFactoryView: React.FC<Props> = ({ lang, onNavigateTab }) => {
  const [selectedTool, setSelectedTool] = useState<ToolId>('word');
  const isEn = lang === 'en';

  const tools: Record<
    ToolId,
    {
      name: string;
      icon: React.ReactNode;
      taskEn: string;
      taskDe: string;
      whyManualFailsEn: string;
      whyManualFailsDe: string;
      recipeActionEn: string;
      recipeActionDe: string;
      input1En: string;
      input1De: string;
      input2En: string;
      input2De: string;
      input3En: string;
      input3De: string;
      whyNotOneShotEn: string;
      whyNotOneShotDe: string;
      humanIterationEn: string;
      humanIterationDe: string;
    }
  > = {
    word: {
      name: 'Word',
      icon: <FileText className="w-4 h-4 shrink-0" />,
      taskEn: 'Drafting an owned Corporate Story or regional stakeholder briefing.',
      taskDe: 'Ausarbeiten einer Corporate Story oder eines regionalen Stakeholder-Briefings.',
      whyManualFailsEn:
        'When a story deadline is tight, writers rarely leave Word to search folders for a separate GEO rulebook PDF.',
      whyManualFailsDe:
        'Bei knappen Deadlines verlässt niemand Word, um in Ordnern nach einem separaten GEO-Handbuch-PDF zu suchen.',
      recipeActionEn:
        'Central Comms streams the narrative & GEO prompt recipe straight into a Word side-panel—checking structure and tone right beside the draft.',
      recipeActionDe:
        'Die zentrale Kommunikation streamt das Narrativ- & GEO-Prompt-Rezept direkt in eine Word-Seitenleiste neben dem Entwurf.',
      input1En:
        '«Expanding our global production network goes hand in hand with our established research hubs: while new international lines scale supply from Q2, regional R&D teams continue on their established schedule.»',
      input1De:
        '«Der Ausbau unseres globalen Produktionsnetzwerks geht Hand in Hand mit unseren etablierten Forschungsstandorten: Während neue Linien ab Q2 skalieren, arbeiten regionale F&E-Teams nach Plan weiter.»',
      input2En:
        '1. Place core scope & Q2 timeline in Paragraph 1 (Answer-First). 2. Make the regional-hub paragraph self-contained without vague pronouns.',
      input2De:
        '1. Kernumfang & Q2-Zeitplan in Absatz 1 (Answer-First). 2. Regional-Absatz eigenständig formulieren ohne vage Verweise.',
      input3En:
        'Outside-In Risk Alert: «Older 2022 regional PDFs still surface in AI search—state current hub continuity explicitly and retire superseded files.»',
      input3De:
        'Outside-In-Risikohinweis: «Ältere 2022er PDFs tauchen noch in KI-Antworten auf – Standortkontinuität explizit nennen und Altdateien bereinigen.»',
      whyNotOneShotEn:
        'AI does not know internal leadership quotes, real employee stories, or which regional nuance matters most this week.',
      whyNotOneShotDe:
        'Die KI kennt keine aktuellen internen O-Töne, echten Mitarbeiter-Beispiele oder regionale Prioritäten dieser Woche.',
      humanIterationEn:
        'The writer weaves in concrete leadership voices and examples, verifies accuracy with regional colleagues, and iterates the final story.',
      humanIterationDe:
        'Das Team ergänzt echte O-Töne und Praxisbeispiele, stimmt Fakten mit regionalen Kolleginnen ab und feilt am finalen Text.'
    },
    excel: {
      name: 'Excel',
      icon: <FileSpreadsheet className="w-4 h-4 shrink-0" />,
      taskEn: 'Maintaining integrated editorial plans and multi-market stakeholder Q&A matrices.',
      taskDe: 'Pflege integrierter Redaktionspläne und länderübergreifender Q&A-Matrizen.',
      whyManualFailsEn:
        'In multi-tab spreadsheets shared across corporate, commercial, and regional teams, core facts quietly drift across rows.',
      whyManualFailsDe:
        'In grossen Tabellen über Corporate-, Commercial- und Regionalteams driften Kernaussagen leicht zwischen den Zeilen auseinander.',
      recipeActionEn:
        'Prompt recipes distributed inside Excel help teams structure Q&As for AI clarity and flag inconsistent facts across regional tabs.',
      recipeActionDe:
        'Direkt in Excel bereitgestellte Prompt-Rezepte helfen, Q&As klar für KI-Suche zu strukturieren und Widersprüche zwischen Tabs zu erkennen.',
      input1En:
        'Tailored Q&A row (Regional Tab): «Global capacity expansion strengthens our network alongside anchored regional R&D commitments and active local partner programs.»',
      input1De:
        'Zugeschnittene Q&A-Zeile (Regional-Tab): «Der globale Kapazitätsausbau stärkt unser Netzwerk Seite an Seite mit fest verankerten regionalen F&E-Zusagen und aktiven lokalen Partnerschaften.»',
      input2En:
        '1. Keep each Q&A cell under 3 clear sentences. 2. Align Q2 dates across Global, Commercial, and Regional tabs.',
      input2De:
        '1. Jede Q&A-Zelle unter 3 klaren Sätzen halten. 2. Q2-Termine über Global-, Commercial- und Regional-Tabs abgleichen.',
      input3En:
        'Outside-In Risk Alert: «Online forums are comparing global expansion quotes against outdated regional briefing tables.»',
      input3De:
        'Outside-In-Risikohinweis: «Foren vergleichen globale Ausbau-Zitate mit veralteten regionalen Briefing-Tabellen.»',
      whyNotOneShotEn:
        'AI cannot decide market prioritization, sequencing across teams, or which stakeholder questions carry reputational sensitivity.',
      whyNotOneShotDe:
        'Die KI kann weder Marktprioritäten noch das Timing zwischen Teams oder sensible Stakeholder-Fragen selbst gewichten.',
      humanIterationEn:
        'Editorial leads align market owners, resolve cross-functional dependencies, and sign off on the unified Q&A sheet.',
      humanIterationDe:
        'Die Redaktionsleitung stimmt Marktverantwortliche ab, klärt Abhängigkeiten und gibt das abgestimmte Q&A-Raster frei.'
    },
    outlook: {
      name: 'Outlook',
      icon: <Mail className="w-4 h-4 shrink-0" />,
      taskEn: 'Replying quickly to an incoming media or regional stakeholder inquiry.',
      taskDe: 'Schnelle Antwort auf eine eingehende Medien- oder Stakeholder-Anfrage.',
      whyManualFailsEn:
        'Email replies happen in minutes under high pressure—nobody opens a 30-page guideline document before replying.',
      whyManualFailsDe:
        'E-Mail-Antworten entstehen unter Zeitdruck in Minuten – niemand öffnet davor ein 30-seitiges Regelwerk.',
      recipeActionEn:
        'The prompt recipe appears right inside Outlook, assembling tailored core facts and Outside-In risk alerts next to the reply box.',
      recipeActionDe:
        'Das Prompt-Rezept erscheint direkt in Outlook und legt passende Kernfakten sowie Outside-In-Risiken neben das Antwortfeld.',
      input1En:
        '«Global manufacturing investments scale international supply resilience, while central governance and existing regional R&D commitments remain anchored.»',
      input1De:
        '«Globale Produktionsinvestitionen stärken die internationale Versorgung, während zentrale Steuerung und regionale F&E-Zusagen verankert bleiben.»',
      input2En:
        '1. Lead with a direct 2-sentence quotable core answer. 2. Avoid repeating negative phrasing from the inquiry.',
      input2De:
        '1. Mit einer direkten, zitierfähigen Zweisatz-Antwort beginnen. 2. Kritische Vorwurfs-Begriffe aus der Anfrage nicht wiederholen.',
      input3En:
        'Outside-In Risk Alert: «Journalist’s framing echoes recent trade speculation—answer positively without repeating "site abandonment".»',
      input3De:
        'Outside-In-Risikohinweis: «Anfrage greift Spekulationen aus Fachmedien auf – positiv antworten, ohne ‹Standortaufgabe› zu wiederholen.»',
      whyNotOneShotEn:
        'AI cannot judge the journalist’s intent, calibrate relationship tone, or take legal and reputational accountability for a quote.',
      whyNotOneShotDe:
        'Die KI kennt weder die Beziehung zum Kontakt noch kann sie rechtliche und kommunikative Verantwortung für ein Zitat tragen.',
      humanIterationEn:
        'The spokesperson reviews nuance, checks legal boundaries, adapts tone to the journalist contact, and hits send.',
      humanIterationDe:
        'Die Sprecherin prüft Nuancen und rechtliche Grenzen, passt den Ton an den Kontakt an und sendet selbst.'
    }
  };

  const active = tools[selectedTool];

  return (
    <div className="max-w-6xl mx-auto space-y-6 pb-8">
      {/* Header Banner */}
      <div className="bg-white border border-sbb-black p-5 sm:p-7 space-y-2 shadow-xs">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-sbb-black text-white font-mono text-[11px] font-bold uppercase tracking-wider">
          <span className="text-[#FFCC00]">03 // ENABLEMENT & LIMITS</span>
          <span>{isEn ? 'OFFICE RECIPES & HUMAN ITERATION' : 'OFFICE-REZEPTE & MENSCHLICHE ROLLE'}</span>
        </div>
        <h1 className="text-xl sm:text-2xl font-black text-sbb-black tracking-tight">
          {isEn
            ? 'Put prompt recipes inside Word, Excel & Outlook—and keep humans in the driver’s seat'
            : 'Prompt-Rezepte direkt in Word, Excel & Outlook – und der Mensch behält die Steuerung'}
        </h1>
        <p className="text-sm text-zinc-700 max-w-4xl leading-relaxed">
          {isEn
            ? 'Static rulebook documents in folders get ignored when teams are in a hurry. Instead, Central Comms distributes prompt recipes through existing systems right into Word, Excel, and Outlook—delivering context without pretending an LLM can write a final statement in one shot.'
            : 'Statische Regel-Dokumente werden im hektischen Alltag übersehen. Stattdessen verteilt die zentrale Kommunikation Prompt-Rezepte über bestehende Systeme direkt in Word, Excel und Outlook – für sofortigen Nutzen, ohne ein fertiges Statement auf Knopfdruck zu versprechen.'}
        </p>
      </div>

      {/* ═══ PART A: DAILY WORKPLACE TOOL SELECTOR ═══ */}
      <div className="bg-white border border-sbb-aluminum p-5 sm:p-7 space-y-5 shadow-xs">
        <div className="space-y-1 pb-4 border-b border-zinc-200">
          <div className="font-mono text-xs font-black uppercase text-emerald-800">
            {isEn
              ? 'PART A // STREAMED RIGHT WHERE WORK HAPPENS (LOW FRICTION, IMMEDIATE BENEFIT)'
              : 'TEIL A // DIREKT DORT, WO GEARBEITET WIRD (WENIG REIBUNG, SOFORTIGER NUTZEN)'}
          </div>
          <p className="text-xs sm:text-sm text-zinc-700">
            {isEn
              ? 'Select a daily workplace tool to see what Central Comms prompt recipes deliver inside it:'
              : 'Wählen Sie ein tägliches Arbeitstool, um zu sehen, was die zentralen Prompt-Rezepte dort leisten:'}
          </p>
        </div>

        {/* Tool Tabs: Word, Excel, Outlook */}
        <div className="grid grid-cols-3 gap-2">
          {(['word', 'excel', 'outlook'] as ToolId[]).map(toolId => {
            const t = tools[toolId];
            const isActive = selectedTool === toolId;
            return (
              <button
                key={toolId}
                type="button"
                onClick={() => setSelectedTool(toolId)}
                className={`p-3.5 border-2 font-mono text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center justify-center gap-2 ${
                  isActive
                    ? 'bg-sbb-black text-[#FFCC00] border-sbb-black'
                    : 'bg-sbb-cloud text-sbb-black border-sbb-aluminum hover:bg-white hover:border-sbb-black'
                }`}
              >
                {t.icon}
                <span>{t.name}</span>
              </button>
            );
          })}
        </div>

        {/* Tool Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="p-4 bg-[#F8F8F9] border border-zinc-300 space-y-1.5">
            <div className="font-mono text-[10px] font-black uppercase text-zinc-600">
              {isEn ? `Day-to-Day Task in ${active.name}` : `Typische Aufgabe in ${active.name}`}
            </div>
            <p className="text-xs sm:text-sm font-bold text-sbb-black leading-snug">
              {isEn ? active.taskEn : active.taskDe}
            </p>
          </div>

          <div className="p-4 bg-red-50/40 border border-red-300 space-y-1.5">
            <div className="font-mono text-[10px] font-black uppercase text-sbb-red flex items-center gap-1.5">
              <XCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{isEn ? 'Why Static Rulebooks Fail Here' : 'Warum statische Regelwerke scheitern'}</span>
            </div>
            <p className="text-xs sm:text-sm text-red-950 leading-relaxed">
              {isEn ? active.whyManualFailsEn : active.whyManualFailsDe}
            </p>
          </div>

          <div className="p-4 bg-emerald-50/40 border-2 border-emerald-700 space-y-1.5">
            <div className="font-mono text-[10px] font-black uppercase text-emerald-900 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-emerald-700" />
              <span>{isEn ? `Inside ${active.name} (Prompt Recipe)` : `Direkt in ${active.name} (Prompt-Rezept)`}</span>
            </div>
            <p className="text-xs sm:text-sm text-emerald-950 leading-relaxed font-medium">
              {isEn ? active.recipeActionEn : active.recipeActionDe}
            </p>
          </div>
        </div>
      </div>

      {/* ═══ PART B: REALISTIC LIMITATIONS — 3 INPUTS + HUMAN ITERATION ═══ */}
      <div className="bg-white border border-sbb-aluminum p-5 sm:p-7 space-y-5 shadow-xs">
        {/* Explicit Limitation Banner */}
        <div className="p-4 bg-red-50 border-l-4 border-sbb-red border border-red-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="space-y-1">
            <div className="font-mono text-xs font-black uppercase text-sbb-red flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4 shrink-0" />
              <span>
                {isEn
                  ? 'PART B // HONEST LIMITATION: NO "ONE-SHOT, READY-TO-SEND" OUTPUT'
                  : 'TEIL B // REALISTISCHE GRENZE: KEIN «ONE-SHOT, VERSANDFERTIGER» TEXT'}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-red-950 leading-relaxed">
              {isEn
                ? 'An LLM will never produce a finished, ready-to-send statement or corporate story in a single pass (at least for the time being). AI enforces the GEO framework and tailors the narratives; humans iterate.'
                : 'Ein LLM wird (zumindest auf absehbare Zeit) niemals in einem einzigen Durchgang ein fertiges, versandbereites Statement oder eine fertige Story schreiben. Die KI sichert das GEO-Framework und schneidet Narrative zu; Menschen iterieren.'}
            </p>
          </div>
        </div>

        {/* 3 Concrete Inputs Packed for the Selected Tool */}
        <div className="space-y-2.5">
          <div className="font-mono text-[11px] font-bold uppercase tracking-wider text-zinc-600">
            {isEn
              ? `CONCRETE OUTPUTS FROM THE ${active.name.toUpperCase()} PROMPT RECIPE:`
              : `KONKRETE BAUSTEINE AUS DEM ${active.name.toUpperCase()}-PROMPT-REZEPT:`}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-sbb-cloud border-l-4 border-emerald-700 border border-zinc-300 space-y-1.5">
              <div className="font-mono text-[10px] font-black uppercase text-emerald-800">
                {isEn ? 'Input 01 // Tailored Key Narrative' : 'Baustein 01 // Zugeschnittenes Kern-Narrativ'}
              </div>
              <p className="text-xs sm:text-sm text-sbb-black leading-relaxed italic">
                {isEn ? active.input1En : active.input1De}
              </p>
            </div>

            <div className="p-4 bg-sbb-cloud border-l-4 border-[#FFCC00] border border-zinc-300 space-y-1.5">
              <div className="font-mono text-[10px] font-black uppercase text-zinc-700">
                {isEn ? 'Input 02 // Structured GEO Framework' : 'Baustein 02 // Strukturiertes GEO-Framework'}
              </div>
              <p className="text-xs sm:text-sm text-sbb-black leading-relaxed">
                {isEn ? active.input2En : active.input2De}
              </p>
            </div>

            <div className="p-4 bg-sbb-cloud border-l-4 border-sbb-red border border-zinc-300 space-y-1.5">
              <div className="font-mono text-[10px] font-black uppercase text-sbb-red">
                {isEn ? 'Input 03 // Outside-In Comm Risks' : 'Baustein 03 // Outside-In-Risiken'}
              </div>
              <p className="text-xs sm:text-sm text-sbb-black leading-relaxed">
                {isEn ? active.input3En : active.input3De}
              </p>
            </div>
          </div>
        </div>

        {/* Why One-Shot Stops Here vs. Human Communicator Iteration */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="p-4 bg-[#F8F8F9] border border-zinc-300 space-y-1.5">
            <div className="font-mono text-[11px] font-black uppercase text-sbb-red flex items-center gap-1.5">
              <XCircle className="w-4 h-4 shrink-0" />
              <span>
                {isEn
                  ? `Why Raw AI Stops Here in ${active.name}`
                  : `Warum roher KI-Output in ${active.name} nicht reicht`}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-800 leading-relaxed">
              {isEn ? active.whyNotOneShotEn : active.whyNotOneShotDe}
            </p>
          </div>

          <div className="p-4 bg-sbb-black text-white border-l-4 border-[#FFCC00] space-y-2">
            <div className="flex items-center justify-between gap-2">
              <span className="font-mono text-[11px] font-black uppercase tracking-wider text-[#FFCC00] flex items-center gap-1.5">
                <Users className="w-4 h-4 shrink-0" />
                <span>
                  {isEn
                    ? `Human Iteration in ${active.name}`
                    : `Menschliche Iteration in ${active.name}`}
                </span>
              </span>
              <span className="inline-flex items-center gap-1 font-mono text-[10px] font-bold text-[#FFCC00]">
                <RefreshCw className="w-3 h-3" />
                {isEn ? 'Full Context' : 'Voller Kontext'}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed">
              {isEn ? active.humanIterationEn : active.humanIterationDe}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2">
        <button
          type="button"
          onClick={() => onNavigateTab('geo')}
          className="px-4 py-2.5 bg-white hover:bg-sbb-cloud border border-sbb-black font-mono text-xs font-bold uppercase tracking-wider text-sbb-black transition-colors flex items-center justify-center gap-2 cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>{isEn ? 'Back: 02 GEO & Tailoring' : 'Zurück: 02 GEO & Anpassung'}</span>
        </button>

        <button
          type="button"
          onClick={() => onNavigateTab('overview')}
          className="px-5 py-2.5 bg-sbb-black hover:bg-zinc-800 text-[#FFCC00] font-mono text-xs font-black uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
        >
          <span>{isEn ? 'Return to 00 Overview' : 'Zurück zu 00 Überblick'}</span>
        </button>
      </div>
    </div>
  );
};

export default TrendingFactoryView;
