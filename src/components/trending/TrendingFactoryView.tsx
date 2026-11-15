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
        'Narrative adapted for an owned corporate story—keeping global commitments and regional anchors consistent.',
      input1De:
        'Narrativ zugeschnitten auf eine Corporate Story – mit abgestimmten globalen Zusagen und regionalen Ankern.',
      input2En:
        'Answer-first summary block + self-contained headings so AI sub-queries cite the main point accurately.',
      input2De:
        'Answer-First-Einstieg + eigenständige Absätze, damit KI-Teilabfragen den Kernpunkt exakt erfassen.',
      input3En:
        'Flag from Outside-In: "Older 2022 footprint PDFs still surface in search; make current timeline explicit."',
      input3De:
        'Hinweis aus Outside-In: «Ältere 2022er PDFs tauchen noch in der Suche auf – aktuellen Zeitplan explizit nennen.»',
      humanIterationEn:
        'The writer refines voice, adds real human stories and examples, aligns with regional stakeholders, and signs off.',
      humanIterationDe:
        'Das Team feilt an Tonalität, ergänzt konkrete Beispiele, stimmt sich mit regionalen Stakeholdern ab und gibt frei.'
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
        'Context-tailored Q&A rows tailored per target audience without losing alignment with the central core position.',
      input1De:
        'Auf Zielgruppen zugeschnittene Q&A-Einträge ohne Abweichung von der zentralen Kernposition.',
      input2En:
        'Concise, affirmative answer structure per cell so published FAQ pages don’t repeat rumour wording.',
      input2De:
        'Prägnante, positive Antwortstruktur je Zelle, damit spätere FAQs keine Gerüchte wiederholen.',
      input3En:
        'Flag from Outside-In: "Online forums are comparing Q2 global launch dates against un-updated regional tables."',
      input3De:
        'Hinweis aus Outside-In: «Foren vergleichen globale Q2-Daten mit nicht aktualisierten regionalen Tabellen.»',
      humanIterationEn:
        'Editorial leads decide prioritization across markets, resolve cross-functional dependencies, and approve final Q&As.',
      humanIterationDe:
        'Die Redaktionsleitung priorisiert Märkte, klärt funktionsübergreifende Abhängigkeiten und gibt die Q&As frei.'
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
        'Concise, direct press-ready framing of the company narrative tailored specifically to the journalist’s question.',
      input1De:
        'Knappe, zitierfähige Einordnung des Kern-Narrativs, zugeschnitten auf die konkrete Medienfrage.',
      input2En:
        'Direct, self-contained two-sentence core statement placed first so quotes remain accurate if excerpted.',
      input2De:
        'Klare, eigenständige Zweisatz-Kernaussage am Anfang, damit Zitate auch gekürzt präzise bleiben.',
      input3En:
        'Flag from Outside-In: "Question echoes hostile framing from recent trade coverage—answer positively without repeating the accusation."',
      input3De:
        'Hinweis aus Outside-In: «Frage übernimmt kritisches Framing – positiv antworten, ohne den Vorwurf zu wiederholen.»',
      humanIterationEn:
        'The spokesperson reviews nuance, checks legal/business sensitivities, adapts tone to the journalist relationship, and sends.',
      humanIterationDe:
        'Die Sprecherin prüft Nuancen und rechtliche Grenzen, passt den Ton an den Kontakt an und versendet selbst.'
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
            ? 'Lingering rulebook documents in folders get ignored when teams are in a hurry. Instead, Central Comms distributes prompt recipes through existing systems right into Word, Excel, and Outlook—delivering context without pretending an LLM can write a final statement in one shot.'
            : 'Abgelegte Regel-Dokumente werden im hektischen Alltag übersehen. Stattdessen verteilt die zentrale Kommunikation Prompt-Rezepte über bestehende Systeme direkt in Word, Excel und Outlook – für sofortigen Nutzen, ohne ein fertiges Statement auf Knopfdruck zu versprechen.'}
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
        <div className="space-y-2">
          <div className="font-mono text-[11px] font-bold uppercase tracking-wider text-zinc-600">
            {isEn
              ? `WHAT THE ${active.name.toUpperCase()} PROMPT RECIPE ACTUALLY HANDS THE COMMUNICATOR:`
              : `WAS DAS ${active.name.toUpperCase()}-PROMPT-REZEPT KONKRET BEREITSTELLT:`}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-sbb-cloud border-l-4 border-emerald-700 border border-zinc-300 space-y-1.5">
              <div className="font-mono text-[10px] font-black uppercase text-emerald-800">
                {isEn ? 'Input 01 // Tailored Narrative' : 'Baustein 01 // Zugeschnittenes Narrativ'}
              </div>
              <p className="text-xs sm:text-sm text-sbb-black leading-relaxed">
                {isEn ? active.input1En : active.input1De}
              </p>
            </div>

            <div className="p-4 bg-sbb-cloud border-l-4 border-[#FFCC00] border border-zinc-300 space-y-1.5">
              <div className="font-mono text-[10px] font-black uppercase text-zinc-700">
                {isEn ? 'Input 02 // Structured GEO Frame' : 'Baustein 02 // Strukturiertes GEO-Framework'}
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

        {/* Human Iteration Final Step */}
        <div className="p-5 bg-sbb-black text-white border-l-4 border-[#FFCC00] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="font-mono text-xs font-black uppercase tracking-wider text-[#FFCC00] flex items-center gap-2">
              <Users className="w-4 h-4 shrink-0" />
              <span>
                {isEn
                  ? `HUMAN COMMUNICATOR ITERATION IN ${active.name.toUpperCase()}`
                  : `MENSCHLICHE ITERATION IN ${active.name.toUpperCase()}`}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed max-w-3xl">
              {isEn ? active.humanIterationEn : active.humanIterationDe}
            </p>
          </div>
          <div className="px-3 py-2 bg-zinc-900 border border-zinc-700 font-mono text-[11px] font-bold text-[#FFCC00] flex items-center gap-2 shrink-0 self-start sm:self-center">
            <RefreshCw className="w-3.5 h-3.5" />
            <span>{isEn ? 'Iterated with full context' : 'Mit vollem Kontext iteriert'}</span>
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
