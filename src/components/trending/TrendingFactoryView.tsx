import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Language } from '../../fixtures/scenarios';
import { ActiveTab } from '../common/CommandHeader';
import {
  AlertTriangle,
  ArrowDown,
  ArrowLeft,
  CheckCircle2,
  Globe,
  FileText,
  Mail,
  RefreshCw,
  RotateCcw,
  Users,
  XCircle
} from 'lucide-react';

interface Props {
  lang: Language;
  onNavigateTab: (tab: ActiveTab) => void;
}

type ToolId = 'docs' | 'browser' | 'email';

export const TrendingFactoryView: React.FC<Props> = ({ lang, onNavigateTab }) => {
  const [selectedTool, setSelectedTool] = useState<ToolId>('docs');
  const [animStep, setAnimStep] = useState<0 | 1 | 2>(0);
  const hasTriggeredRef = useRef(false);
  const closingCardRef = useRef<HTMLDivElement | null>(null);
  const timersRef = useRef<number[]>([]);
  const isEn = lang === 'en';

  const runRedlineSequence = useCallback(() => {
    timersRef.current.forEach(t => window.clearTimeout(t));
    timersRef.current = [];
    setAnimStep(0);

    const t1 = window.setTimeout(() => setAnimStep(1), 850);
    const t2 = window.setTimeout(() => setAnimStep(2), 1500);
    timersRef.current = [t1, t2];
  }, []);

  useEffect(() => {
    const el = closingCardRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      entries => {
        if (entries[0]?.isIntersecting && !hasTriggeredRef.current) {
          hasTriggeredRef.current = true;
          runRedlineSequence();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      timersRef.current.forEach(t => window.clearTimeout(t));
    };
  }, [runRedlineSequence]);

  const tools: Record<
    ToolId,
    {
      nameEn: string;
      nameDe: string;
      channelSubEn: string;
      channelSubDe: string;
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
    docs: {
      nameEn: '1. Document Editors (Word / Docs)',
      nameDe: '1. Texteditoren (Word / Docs)',
      channelSubEn: 'e.g. Microsoft Copilot / Workspace Add-in',
      channelSubDe: 'z. B. Microsoft Copilot / Workspace-Add-in',
      icon: <FileText className="w-4 h-4 shrink-0" />,
      taskEn: 'Drafting a corporate story, press release, or regional stakeholder briefing.',
      taskDe: 'Ausarbeiten einer Corporate Story, Medienmitteilung oder eines regionalen Stakeholder-Briefings.',
      whyManualFailsEn:
        'Hunting through folders to find which PDF is the current rulebook, opening a 30-page file, and manually translating abstract rules onto a draft creates too much friction under deadline pressure.',
      whyManualFailsDe:
        'In Ordnern nach der aktuell gültigen PDF-Version zu suchen, ein 30-seitiges Dokument zu öffnen und abstrakte Regeln manuell auf den Entwurf zu übertragen, erzeugt im Alltag zu viel Reibung.',
      recipeActionEn:
        'Central Comms streams the always-current prompt recipe into an editor side-panel (e.g. via Microsoft Copilot or a custom add-in)—applying narrative & GEO structure right beside the draft.',
      recipeActionDe:
        'Die zentrale Kommunikation streamt das stets aktuelle Prompt-Rezept direkt in die Seitenleiste des Editors (z. B. über Microsoft Copilot oder ein Add-in) – Narrativ und GEO-Struktur liegen unmittelbar neben dem Text.',
      input1En:
        '«Expanding our global production network goes hand in hand with our established research hubs: while new international lines scale supply from Q2, regional R&D teams continue on their established schedule.»',
      input1De:
        '«Der Ausbau unseres globalen Produktionsnetzwerks geht Hand in Hand mit unseren etablierten Forschungsstandorten: Während neue Linien ab Q2 skalieren, arbeiten regionale F&E-Teams nach Plan weiter.»',
      input2En:
        '1. Place core scope & Q2 timeline in Paragraph 1 (Answer-First). 2. Make the regional-hub paragraph self-contained without vague pronouns.',
      input2De:
        '1. Kernumfang & Q2-Zeitplan in Absatz 1 (Answer-First). 2. Regional-Absatz eigenständig formulieren ohne vage Verweise.',
      input3En:
        'Outside-In Risk Alert: «Older 2022 regional PDFs still surface in AI search—state current hub continuity explicitly.»',
      input3De:
        'Outside-In-Risikohinweis: «Ältere 2022er PDFs tauchen noch in KI-Antworten auf – Standortkontinuität explizit benennen.»',
      whyNotOneShotEn:
        'AI can analyze reputational sensitivities and structure the draft, but it cannot know unwritten context—such as what leadership just aligned on in a live meeting 10 minutes ago or unpublished local constraints.',
      whyNotOneShotDe:
        'Die KI kann Sensibilitäten analysieren und den Entwurf strukturieren – kennt aber keinen ungeschriebenen Kontext, etwa was vor zehn Minuten im Führungs-Call vereinbart wurde.',
      humanIterationEn:
        'The writer feeds in live organizational context, refines tone and concrete examples in 2–3 iterations with the model, and signs off on the final story.',
      humanIterationDe:
        'Das Team bringt den aktuellen internen Kontext ein, schärft Ton und Beispiele in zwei bis drei Iterationen mit dem Modell und gibt den Text frei.'
    },
    browser: {
      nameEn: '2. Browser & Web CMS (Extension)',
      nameDe: '2. Browser & Web-CMS (Extension)',
      channelSubEn: 'Browser Extension / CMS Plugin',
      channelSubDe: 'Browser-Extension / CMS-Plugin',
      icon: <Globe className="w-4 h-4 shrink-0" />,
      taskEn: 'Publishing or updating owned strategy pages, newsroom articles, and regional hub pages in the browser.',
      taskDe: 'Publizieren und Aktualisieren von Strategie-Seiten, Newsroom-Artikeln und Regional-Seiten direkt im Browser.',
      whyManualFailsEn:
        'When updating a web page in the CMS, switching tabs to locate and open an external guideline PDF—and guessing which archived pages conflict with it—breaks the publishing flow.',
      whyManualFailsDe:
        'Beim Aktualisieren einer Seite im CMS den Tab zu wechseln, das richtige Regel-PDF zu suchen und manuell nach widersprüchlichen Altseiten zu fahnden, unterbricht den Arbeitsfluss.',
      recipeActionEn:
        'A lightweight browser extension overlays the Central Comms prompt recipe directly inside the Web CMS—checking Answer-First structure and flagging conflicting legacy files before publish.',
      recipeActionDe:
        'Eine schlanke Browser-Extension blendet das zentrale Prompt-Rezept direkt im Web-CMS ein – prüft die Answer-First-Struktur und markiert widersprüchliche Altdateien vor dem Publizieren.',
      input1En:
        'Tailored Web Lead: «Global capacity expansion strengthens our international supply network alongside anchored regional R&D commitments and active local partner programs.»',
      input1De:
        'Zugeschnittener Web-Lead: «Der globale Kapazitätsausbau stärkt unser internationales Netzwerk Seite an Seite mit fest verankerten regionalen F&E-Zusagen und lokalen Partnerschaften.»',
      input2En:
        '1. Anchor concrete scope & dates in the opening summary block. 2. Ensure subheadings and lead paragraphs stand alone when excerpted by AI sub-queries.',
      input2De:
        '1. Konkreten Umfang & Zeitplan im obersten Teaser-Block verankern. 2. Zwischenüberschriften und Einstiegsabsätze eigenständig zitierbar machen.',
      input3En:
        'Outside-In Risk Alert: «2022 Regional Footprint PDF still indexed—link the updated page clearly and flag the 2022 PDF for retirement/archiving.»',
      input3De:
        'Outside-In-Risikohinweis: «Regional-PDF von 2022 ist noch indexiert – neue Seite klar verknüpfen und das 2022er PDF zur Archivierung markieren.»',
      whyNotOneShotEn:
        'AI can flag conflicting legacy files and rewrite the web copy for GEO clarity, but it cannot autonomously unpublish archived regulatory PDFs or decide cross-regional governance trade-offs.',
      whyNotOneShotDe:
        'Die KI kann widersprüchliche Altdateien markieren und Webtexte für GEO optimieren, darf aber keine archivierten Dokumente eigenmächtig depublizieren oder Governance-Fragen entscheiden.',
      humanIterationEn:
        'The editorial owner confirms with regional leads that the 2022 policy is superseded, refines the web copy in the browser, and archives the outdated file.',
      humanIterationDe:
        'Die Redaktion klärt mit den Regionen die Ablösung des 2022er Dokuments, feilt im Browser am finalen Webtext und archiviert die Altdatei.'
    },
    email: {
      nameEn: '3. Email & Messaging (Outlook / Teams)',
      nameDe: '3. E-Mail & Messaging (Outlook / Teams)',
      channelSubEn: 'e.g. Microsoft Copilot / Side-Panel Add-in',
      channelSubDe: 'z. B. Microsoft Copilot / Seitenleisten-Add-in',
      icon: <Mail className="w-4 h-4 shrink-0" />,
      taskEn: 'Replying under time pressure to an incoming media or regional stakeholder inquiry.',
      taskDe: 'Schnelle Antwort unter Zeitdruck auf eine eingehende Medien- oder Stakeholder-Anfrage.',
      whyManualFailsEn:
        'When a journalist writes on a 30-minute deadline, tracking down, opening, and cross-reading a static PDF handbook before replying is simply unrealistic.',
      whyManualFailsDe:
        'Wenn eine Redaktion mit 30 Minuten Frist anfragt, ist das Suchen, Öffnen und Durchsuchen eines statischen PDF-Handbuchs vor dem Antworten schlicht unrealistisch.',
      recipeActionEn:
        'The prompt recipe runs right beside the reply window (e.g. via Microsoft Copilot in Outlook/Teams)—analyzing the inquiry’s sensitivity and assembling tailored core facts plus Outside-In risk alerts in seconds.',
      recipeActionDe:
        'Das Prompt-Rezept läuft direkt neben dem Antwortfeld (z. B. via Microsoft Copilot in Outlook/Teams) – analysiert die Anfrage und stellt passende Kernfakten sowie Outside-In-Risiken in Sekunden bereit.',
      input1En:
        '«Global manufacturing investments scale international supply resilience, while central governance and existing regional R&D commitments remain anchored.»',
      input1De:
        '«Globale Produktionsinvestitionen stärken die internationale Versorgung, während zentrale Steuerung und regionale F&E-Zusagen verankert bleiben.»',
      input2En:
        '1. Lead with a direct 2-sentence quotable core answer. 2. Frame facts affirmatively without repeating negative phrasing from the inquiry.',
      input2De:
        '1. Mit einer direkten, zitierfähigen Zweisatz-Antwort beginnen. 2. Fakten positiv formulieren, ohne Vorwurfs-Begriffe aus der Anfrage zu wiederholen.',
      input3En:
        'Outside-In Risk Alert: «Inquiry echoes recent forum & trade speculation—lead affirmatively with concrete local R&D continuity.»',
      input3De:
        'Outside-In-Risikohinweis: «Anfrage greift aktuelle Foren- und Fachmedien-Spekulationen auf – positiv mit konkreter lokaler F&E-Kontinuität führen.»',
      whyNotOneShotEn:
        'AI can flag reputational sensitivity in the journalist’s question and draft a sharp response, but it does not know your unwritten background history with that journalist or hold institutional sign-off accountability.',
      whyNotOneShotDe:
        'Die KI erkennt heikle Punkte in der Medienfrage und entwirft eine präzise Antwort – kennt aber weder die gewachsene Beziehung zum Kontakt noch trägt sie die institutionelle Freigabe-Verantwortung.',
      humanIterationEn:
        'The spokesperson calibrates tone to the specific journalist relationship, verifies last-minute facts with internal owners, and takes accountability before hitting send.',
      humanIterationDe:
        'Die Sprecherin stimmt den Ton auf den persönlichen Kontakt ab, sichert letzte Fakten intern ab und übernimmt mit dem Versand die Verantwortung.'
    }
  };

  const active = tools[selectedTool];
  const activeName = isEn ? active.nameEn : active.nameDe;

  return (
    <div className="max-w-6xl mx-auto space-y-6 pb-8">
      {/* Header Banner */}
      <div className="bg-white border border-sbb-black p-5 sm:p-7 space-y-2 shadow-xs">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-sbb-black text-white font-mono text-[11px] font-bold uppercase tracking-wider">
          <span className="text-[#FFCC00]">03 // ENABLEMENT & LIMITS</span>
          <span>{isEn ? 'WORKFLOW RECIPES & HUMAN ITERATION' : 'WORKFLOW-REZEPTE & MENSCHLICHE ROLLE'}</span>
        </div>
        <h1 className="text-xl sm:text-2xl font-black text-sbb-black tracking-tight">
          {isEn
            ? 'Stream prompt recipes into editors, browser extensions & email—and keep humans in the driver’s seat'
            : 'Prompt-Rezepte direkt in Editoren, Browser-Extensions & E-Mail – und der Mensch behält die Steuerung'}
        </h1>
        <p className="text-sm text-zinc-700 max-w-4xl leading-relaxed">
          {isEn
            ? 'Finding and opening the current version of a static rulebook PDF creates too much friction in a busy workday. Instead, Central Comms streams prompt recipes into day-to-day tools (e.g. Microsoft Copilot or add-ins in Word/Docs and Outlook/Teams, plus Web CMS browser extensions)—delivering tailored context while humans steer the final iteration.'
            : 'Im hektischen Alltag erst die aktuelle Version eines statischen Regel-PDFs zu suchen und zu öffnen, erzeugt zu viel Reibung. Stattdessen bringt die zentrale Kommunikation Prompt-Rezepte direkt in die täglichen Tools (z. B. Microsoft Copilot oder Add-ins in Word/Docs und Outlook/Teams sowie Browser-Extensions fürs Web-CMS) – die KI liefert den strukturierten Kontext, der Mensch iteriert.'}
        </p>
      </div>

      {/* ═══ PART A: DAILY WORKPLACE SURFACE SELECTOR ═══ */}
      <div className="bg-white border border-sbb-aluminum p-5 sm:p-7 space-y-5 shadow-xs">
        <div className="space-y-1 pb-4 border-b border-zinc-200">
          <div className="font-mono text-xs font-black uppercase text-emerald-800">
            {isEn
              ? 'PART A // STREAMED RIGHT WHERE WORK HAPPENS (ADD-INS, BROWSER EXTENSIONS & ASSISTANTS)'
              : 'TEIL A // DIREKT DORT, WO GEARBEITET WIRD (ADD-INS, BROWSER-EXTENSIONS & ASSISTENTEN)'}
          </div>
          <p className="text-xs sm:text-sm text-zinc-700">
            {isEn
              ? 'Select a workplace surface below to see why static PDFs fail and how embedded prompt recipes work:'
              : 'Wählen Sie eine Arbeitsumgebung, um zu sehen, warum statische PDFs scheitern und wie integrierte Prompt-Rezepte helfen:'}
          </p>
        </div>

        {/* Flush-Mounted 3 Surface Tabs + Grounded Workbench */}
        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 border-2 border-b-0 border-sbb-black divide-y md:divide-y-0 md:divide-x divide-zinc-300">
            {(['docs', 'browser', 'email'] as ToolId[]).map((toolId, idx) => {
              const t = tools[toolId];
              const isActive = selectedTool === toolId;
              return (
                <button
                  key={toolId}
                  type="button"
                  onClick={() => setSelectedTool(toolId)}
                  className={`p-3.5 text-left font-mono transition-all cursor-pointer flex flex-col gap-1 border-t-4 ${
                    isActive
                      ? 'bg-sbb-black text-white border-t-[#FFCC00]'
                      : 'bg-white text-sbb-black border-t-transparent hover:bg-sbb-cloud'
                  }`}
                >
                  <div className="flex items-center gap-2 text-xs font-bold">
                    <span
                      className={`px-1.5 py-0.5 text-[10px] font-black shrink-0 ${
                        isActive ? 'bg-[#FFCC00] text-sbb-black' : 'bg-zinc-200 text-sbb-black'
                      }`}
                    >
                      S0{idx + 1}
                    </span>
                    <span className={isActive ? 'text-[#FFCC00]' : 'text-sbb-red'}>{t.icon}</span>
                    <span>{(isEn ? t.nameEn : t.nameDe).replace(/^\d+\.\s*/, '')}</span>
                  </div>
                  <span className={`text-[10px] ${isActive ? 'text-zinc-300' : 'text-zinc-600'}`}>
                    {isEn ? t.channelSubEn : t.channelSubDe}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Grounded Surface Workbench */}
          <div className="border-2 border-sbb-black bg-[#F4F4F6] p-4 sm:p-5 space-y-4">
            <div className="bg-sbb-black text-white px-3.5 py-2 flex flex-wrap items-center justify-between gap-2 font-mono text-[11px] font-bold uppercase">
              <span>
                {isEn
                  ? `INSPECTING WORKPLACE SURFACE // ${activeName.replace(/^\d+\.\s*/, '')}`
                  : `ARBEITSUMGEBUNG IM DETAIL // ${activeName.replace(/^\d+\.\s*/, '')}`}
              </span>
              <span className="text-[#FFCC00] text-[10px]">
                {isEn ? 'STEP A → STEP B → STEP C' : 'SCHRITT A → SCHRITT B → SCHRITT C'}
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr_auto_1fr] items-stretch gap-2.5">
              {/* STEP A */}
              <div className="p-4 bg-white border border-zinc-300 space-y-1.5">
                <div className="font-mono text-[10px] font-black uppercase text-zinc-600">
                  {isEn ? 'STEP A // DAY-TO-DAY TASK' : 'SCHRITT A // TYPISCHE AUFGABE'}
                </div>
                <p className="text-xs sm:text-sm font-bold text-sbb-black leading-snug">
                  {isEn ? active.taskEn : active.taskDe}
                </p>
              </div>

              {/* Arrow A -> B */}
              <div className="hidden lg:flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" className="shrink-0">
                  <line x1="0" y1="12" x2="18" y2="12" stroke="#18181B" strokeWidth="2" className="terrain-flow-line" />
                  <polygon points="16,7 24,12 16,17" fill="#18181B" />
                </svg>
              </div>

              {/* STEP B */}
              <div className="p-4 bg-red-50/70 border border-red-300 space-y-1.5">
                <div className="font-mono text-[10px] font-black uppercase text-sbb-red flex items-center gap-1.5">
                  <XCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{isEn ? 'STEP B // WHY STATIC PDFS FAIL' : 'SCHRITT B // WARUM PDFS SCHEITERN'}</span>
                </div>
                <p className="text-xs sm:text-sm text-red-950 leading-relaxed">
                  {isEn ? active.whyManualFailsEn : active.whyManualFailsDe}
                </p>
              </div>

              {/* Arrow B -> C */}
              <div className="hidden lg:flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" className="shrink-0">
                  <line x1="0" y1="12" x2="18" y2="12" stroke="#047857" strokeWidth="2" className="terrain-flow-line" />
                  <polygon points="16,7 24,12 16,17" fill="#047857" />
                </svg>
              </div>

              {/* STEP C */}
              <div className="p-4 bg-emerald-50/70 border-2 border-emerald-700 space-y-1.5">
                <div className="font-mono text-[10px] font-black uppercase text-emerald-900 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-emerald-700" />
                  <span>{isEn ? 'STEP C // EMBEDDED PROMPT RECIPE' : 'SCHRITT C // PROMPT-REZEPT IM TOOL'}</span>
                </div>
                <p className="text-xs sm:text-sm text-emerald-950 leading-relaxed font-medium">
                  {isEn ? active.recipeActionEn : active.recipeActionDe}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vertical Flow Connector: Part A -> Part B */}
      <div className="flex flex-col items-center -my-3">
        <div className="w-0.5 h-4 bg-sbb-black" />
        <div className="px-3.5 py-1.5 bg-sbb-black text-white font-mono text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 text-center border-l-4 border-[#FFCC00]">
          <ArrowDown className="w-3.5 h-3.5 text-[#FFCC00] shrink-0" />
          <span>
            {isEn
              ? `Inside ${activeName.replace(/^\d+\.\s*/, '')}, the prompt recipe delivers 3 concrete inputs — and hands off to the human`
              : `In ${activeName.replace(/^\d+\.\s*/, '')} liefert das Prompt-Rezept 3 Bausteine – und übergibt an den Menschen`}
          </span>
        </div>
        <div className="w-0.5 h-4 bg-sbb-black" />
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
                ? 'An LLM will never produce a finished, ready-to-send statement or corporate story in a single pass (at least for the time being). AI analyzes sensitivities, enforces the GEO framework, and tailors the narratives; humans bring unwritten context and iterate.'
                : 'Ein LLM wird (zumindest auf absehbare Zeit) niemals in einem einzigen Durchgang ein fertiges, versandbereites Statement oder eine fertige Story schreiben. Die KI analysiert Sensibilitäten, sichert das GEO-Framework und schneidet Narrative zu; Menschen bringen ungeschriebenen Kontext ein und iterieren.'}
            </p>
          </div>
        </div>

        {/* Synchronized Active Surface Bar + 3 Concrete Inputs */}
        <div className="border-2 border-sbb-black bg-[#F4F4F6]">
          <div className="bg-sbb-black text-white px-4 py-2.5 flex flex-wrap items-center justify-between gap-2">
            <span className="font-mono text-[11px] font-bold uppercase text-[#FFCC00]">
              {isEn
                ? `ACTIVE SURFACE: ${activeName.replace(/^\d+\.\s*/, '').toUpperCase()}`
                : `AKTIVE UMGEBUNG: ${activeName.replace(/^\d+\.\s*/, '').toUpperCase()}`}
            </span>
            <div className="flex flex-wrap items-center gap-1.5 font-mono text-[10px]">
              {(['docs', 'browser', 'email'] as ToolId[]).map(toolId => {
                const isActive = selectedTool === toolId;
                const shortLabel =
                  toolId === 'docs' ? 'Word / Docs' : toolId === 'browser' ? 'Browser / CMS' : 'Outlook / Teams';
                return (
                  <button
                    key={toolId}
                    type="button"
                    onClick={() => setSelectedTool(toolId)}
                    className={`px-2 py-0.5 border transition-colors cursor-pointer ${
                      isActive
                        ? 'bg-[#FFCC00] text-sbb-black border-[#FFCC00] font-black'
                        : 'bg-zinc-900 text-zinc-300 border-zinc-700 hover:text-white'
                    }`}
                  >
                    {shortLabel}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="p-4 sm:p-5 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-white border-l-4 border-emerald-700 border border-zinc-300 space-y-1.5">
                <div className="font-mono text-[10px] font-black uppercase text-emerald-800">
                  {isEn ? 'Input 01 // Tailored Key Narrative' : 'Baustein 01 // Zugeschnittenes Kern-Narrativ'}
                </div>
                <p className="text-xs sm:text-sm text-sbb-black leading-relaxed italic">
                  {isEn ? active.input1En : active.input1De}
                </p>
              </div>

              <div className="p-4 bg-white border-l-4 border-[#FFCC00] border border-zinc-300 space-y-1.5">
                <div className="font-mono text-[10px] font-black uppercase text-zinc-700">
                  {isEn ? 'Input 02 // Structured GEO Framework' : 'Baustein 02 // Strukturiertes GEO-Framework'}
                </div>
                <p className="text-xs sm:text-sm text-sbb-black leading-relaxed">
                  {isEn ? active.input2En : active.input2De}
                </p>
              </div>

              <div className="p-4 bg-white border-l-4 border-sbb-red border border-zinc-300 space-y-1.5">
                <div className="font-mono text-[10px] font-black uppercase text-sbb-red">
                  {isEn ? 'Input 03 // Outside-In Comm Risks' : 'Baustein 03 // Outside-In-Risiken'}
                </div>
                <p className="text-xs sm:text-sm text-sbb-black leading-relaxed">
                  {isEn ? active.input3En : active.input3De}
                </p>
              </div>
            </div>

            {/* Convergence Connector: 3 AI Inputs -> Human Iteration */}
            <div className="flex flex-col items-center">
              <div className="w-0.5 h-3 bg-sbb-black" />
              <div className="px-3 py-1 bg-white border border-sbb-black font-mono text-[10px] font-bold uppercase text-sbb-black flex items-center gap-1.5 text-center">
                <ArrowDown className="w-3 h-3 text-sbb-red shrink-0" />
                <span>
                  {isEn
                    ? 'These 3 AI inputs deliver full context — Human communicator iterates the final text'
                    : 'Diese 3 KI-Bausteine liefern den vollen Kontext – der Mensch iteriert den finalen Text'}
                </span>
              </div>
              <div className="w-0.5 h-3 bg-sbb-black" />
            </div>

            {/* Why One-Shot Stops Here -> Human Communicator Iteration */}
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-stretch gap-3">
              <div className="p-4 bg-white border border-zinc-300 space-y-1.5">
                <div className="font-mono text-[11px] font-black uppercase text-sbb-red flex items-center gap-1.5">
                  <XCircle className="w-4 h-4 shrink-0" />
                  <span>
                    {isEn
                      ? 'STEP 1 // Why One-Shot Output Stops Here'
                      : 'SCHRITT 1 // Warum ein KI-Durchgang hier endet'}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-800 leading-relaxed">
                  {isEn ? active.whyNotOneShotEn : active.whyNotOneShotDe}
                </p>
              </div>

              <div className="hidden lg:flex items-center justify-center">
                <svg width="26" height="24" viewBox="0 0 26 24" className="shrink-0">
                  <line x1="0" y1="12" x2="20" y2="12" stroke="#18181B" strokeWidth="2" className="terrain-flow-line" />
                  <polygon points="18,7 26,12 18,17" fill="#18181B" />
                </svg>
              </div>

              <div className="p-4 bg-sbb-black text-white border-l-4 border-[#FFCC00] space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-[11px] font-black uppercase tracking-wider text-[#FFCC00] flex items-center gap-1.5">
                    <Users className="w-4 h-4 shrink-0" />
                    <span>
                      {isEn
                        ? 'STEP 2 // Human Co-Creation & Sign-Off'
                        : 'SCHRITT 2 // Menschliche Iteration & Freigabe'}
                    </span>
                  </span>
                  <span className="inline-flex items-center gap-1 font-mono text-[10px] font-bold text-[#FFCC00]">
                    <RefreshCw className="w-3 h-3" />
                    {isEn ? 'Iterative Loop' : 'Iterative Schleife'}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed">
                  {isEn ? active.humanIterationEn : active.humanIterationDe}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══ PERSONAL CLOSING SIGN-OFF: LIVE HUMAN REDLINE ═══ */}
      <div
        ref={closingCardRef}
        className="bg-white border-2 border-sbb-black shadow-xs overflow-hidden"
      >
        {/* Top Bar: Generic "One-Shot AI" Draft Being Struck Through */}
        <div className="bg-[#F8F8F9] border-b border-zinc-300 px-5 sm:px-7 py-4 space-y-2">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="font-mono text-[10px] font-black uppercase tracking-wider text-zinc-500">
              {isEn ? 'STAGE 01 // GENERIC ONE-SHOT AI DRAFT' : 'STUFE 01 // GENERISCHER ONE-SHOT-KI-ENTWURF'}
            </span>
            <div className="flex items-center gap-2">
              {animStep >= 1 && (
                <span className="px-2 py-0.5 bg-sbb-red text-white font-mono text-[10px] font-black uppercase tracking-wider">
                  {isEn ? '✗ REJECTED BY HUMAN — CLICHÉ DETECTED' : '✗ VOM MENSCHEN VERWORFEN — FLOSKEL'}
                </span>
              )}
              <button
                type="button"
                onClick={runRedlineSequence}
                className="inline-flex items-center gap-1 px-2 py-0.5 bg-white border border-zinc-300 hover:border-sbb-black font-mono text-[10px] font-bold text-zinc-700 hover:text-sbb-black transition-colors cursor-pointer"
                title={isEn ? 'Replay animation' : 'Animation wiederholen'}
              >
                <RotateCcw className="w-3 h-3" />
                <span>{isEn ? 'Replay' : 'Replay'}</span>
              </button>
            </div>
          </div>

          <div className="relative inline-block max-w-full">
            <p
              className={`text-xs sm:text-sm font-mono transition-colors duration-300 ${
                animStep >= 1 ? 'text-zinc-400' : 'text-zinc-700'
              }`}
            >
              {isEn
                ? '«Thank you for reviewing my application. As a passionate storyteller and AI enthusiast, I look forward to driving synergies…»'
                : '«Vielen Dank für Ihr Interesse. Als leidenschaftlicher Storyteller und KI-Enthusiast freue ich mich auf Synergien…»'}
            </p>
            {animStep >= 1 && (
              <span
                aria-hidden="true"
                className="terrain-strike-sweep absolute left-0 right-0 top-1/2 h-[2px] bg-sbb-red pointer-events-none"
              />
            )}
          </div>
        </div>

        {/* Main Human Sign-Off Reveal */}
        <div
          className={`bg-sbb-black text-white border-l-4 border-[#FFCC00] transition-all duration-700 ease-out overflow-hidden ${
            animStep >= 2
              ? 'max-h-[700px] opacity-100 p-6 sm:p-8'
              : 'max-h-0 opacity-0 px-6 sm:px-8 py-0'
          }`}
        >
          <div className="space-y-4 max-w-4xl">
            <div className="font-mono text-[11px] font-black uppercase tracking-widest text-[#FFCC00]">
              {isEn
                ? 'FINAL ITERATION // A PERSONAL NOTE TO THE RECRUITING TEAM'
                : 'FINALE ITERATION // EINE PERSÖNLICHE NACHRICHT AN DAS RECRUITING-TEAM'}
            </div>

            <h2 className="text-lg sm:text-2xl font-black tracking-tight text-white leading-snug">
              {isEn
                ? 'Why build an interactive prototype instead of just describing a mindset in a cover letter?'
                : 'Warum einen interaktiven Prototyp bauen, statt eine Haltung nur im Anschreiben zu beschreiben?'}
            </h2>

            <div className="space-y-3 text-sm sm:text-[15px] text-zinc-200 leading-relaxed">
              <p className="font-bold text-white">
                {isEn
                  ? 'Because a good narrative shouldn’t just be claimed—it should be experienced.'
                  : 'Weil man ein gutes Narrativ nicht nur behaupten, sondern erlebbar machen sollte.'}
              </p>
              <p>
                {isEn ? (
                  <>
                    I care deeply about what makes an argument stick, how a story holds together across channels, and
                    how AI can fundamentally move corporate communications forward when we pair enthusiasm with realism.
                    I love exploring new <em>terrain</em>, testing ideas hands-on, and turning complex shifts into
                    clear, workable systems.
                  </>
                ) : (
                  <>
                    Mich treibt an, was ein Argument wirklich tragfähig macht, wie eine Geschichte über Kanäle hinweg
                    zusammenhält und wie KI die Unternehmenskommunikation grundlegend weiterbringt – wenn man
                    Begeisterung mit Realismus verbindet. Ich erkunde gerne neues <em>Terrain</em>, probiere Ideen
                    praktisch aus und übersetze komplexe Veränderungen in klare, tragfähige Lösungen.
                  </>
                )}
              </p>
              <p className="pt-1 text-[#FFCC00] font-bold text-sm sm:text-base">
                {isEn
                  ? 'If that is the kind of unconventional thinking you want on your team—let’s go down this path together.'
                  : 'Wenn Sie genau dieses unkonventionelle Denken im Team suchen: Lassen Sie uns diesen Weg gemeinsam gehen.'}
                <span className="terrain-cursor-blink inline-block ml-1.5 text-[#FFCC00]" aria-hidden="true">
                  ▋
                </span>
              </p>
            </div>
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
