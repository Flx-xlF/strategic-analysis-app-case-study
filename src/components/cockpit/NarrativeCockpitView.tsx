import React, { useState } from 'react';
import { Language } from '../../fixtures/scenarios';
import { ActiveTab } from '../common/CommandHeader';
import {
  AlertTriangle,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  Database,
  Layers,
  MessageSquare,
  Newspaper,
  FileText,
  Search
} from 'lucide-react';

interface Props {
  lang: Language;
  onNavigateTab: (tab: ActiveTab) => void;
}

type ChannelId = 'earned' | 'owned' | 'regional' | 'forums';
type PipelineStage = 1 | 2 | 3;

export const NarrativeCockpitView: React.FC<Props> = ({ lang, onNavigateTab }) => {
  const [selectedChannel, setSelectedChannel] = useState<ChannelId>('earned');
  const [activeStage, setActiveStage] = useState<PipelineStage>(1);
  const isEn = lang === 'en';

  const channels: Record<
    ChannelId,
    {
      shortBadge: string;
      labelEn: string;
      labelDe: string;
      subQueryLabelEn: string;
      subQueryLabelDe: string;
      icon: React.ReactNode;
      roleEn: string;
      roleDe: string;
      matrixReasonEn: string;
      matrixReasonDe: string;
      passageEn: string;
      passageDe: string;
      collisionEn: string;
      collisionDe: string;
      answerClauseEn: string;
      answerClauseDe: string;
      answerRoleEn: string;
      answerRoleDe: string;
      auditStatusEn: string;
      auditStatusDe: string;
      handoffEn: string;
      handoffDe: string;
    }
  > = {
    earned: {
      shortBadge: 'Q1',
      labelEn: 'Earned Media (Newspapers & Wires)',
      labelDe: 'Earned Media (Zeitungen & Agenturen)',
      subQueryLabelEn: 'Sub-Query 1: Newspaper & wire coverage',
      subQueryLabelDe: 'Teilabfrage 1: Zeitungen & Agenturen',
      icon: <Newspaper className="w-3.5 h-3.5 shrink-0" />,
      roleEn: 'Corporate media desk answering questions from daily newspapers, business press, and news agencies.',
      roleDe: 'Medienstelle im Austausch mit Tageszeitungen, Wirtschaftspresse und Nachrichtenagenturen.',
      matrixReasonEn:
        'Journalists ask pointed questions about global investments or restructuring—so press quotes naturally emphasize global capital allocation.',
      matrixReasonDe:
        'Redaktionen stellen zugespitzte Fragen zu globalen Investitionen – Pressezitate betonen daher naturgemäss globale Kapitalallokation.',
      passageEn:
        '«The company confirmed major expansion investments in international manufacturing capacity over the next five years.»',
      passageDe:
        '«Das Unternehmen bestätigte umfangreiche Erweiterungsinvestitionen in internationale Produktionskapazitäten über die nächsten fünf Jahre.»',
      collisionEn:
        'When pulled without context alongside a regional briefing, AI engines often infer a shift away from local operations.',
      collisionDe:
        'Wird dieses Zitat ohne Kontext neben einem regionalen Briefing geladen, folgern KI-Systeme oft eine Verlagerung weg vom Heimatstandort.',
      answerClauseEn: '«The company confirmed major international manufacturing expansion',
      answerClauseDe: '«Das Unternehmen bestätigte einen grossen Ausbau internationaler Produktionskapazitäten,',
      answerRoleEn:
        'Contribution from 1. Earned Media: Anchors the opening sentence with global expansion figures—setting up a contrast if local context is missing.',
      answerRoleDe:
        'Beitrag aus 1. Earned Media: Prägt den Einstiegssatz mit globalen Ausbauzahlen – was ohne lokalen Kontext einen Kontrast erzeugt.',
      auditStatusEn: 'Partial Pull-Through (Missing Local Context)',
      auditStatusDe: 'Teil-Durchdringung (Lokaler Kontext fehlt)',
      handoffEn: '→ Feeds 02 Top-Down: Pair global expansion figures with regional hub anchor in press responses.',
      handoffDe: '→ Speist 02 Top-Down: Globale Ausbauzahlen in Presseantworten fest mit lokalem Standort-Anker verbinden.'
    },
    owned: {
      shortBadge: 'Q2',
      labelEn: 'Owned Stories & Pages',
      labelDe: 'Owned Stories & Seiten',
      subQueryLabelEn: 'Sub-Query 2: Strategy pages',
      subQueryLabelDe: 'Teilabfrage 2: Strategie-Seiten',
      icon: <FileText className="w-3.5 h-3.5 shrink-0" />,
      roleEn: 'Central editorial team publishing corporate strategy pages and executive posts.',
      roleDe: 'Zentrale Redaktion für Corporate Stories, Strategie-Seiten und Executive-Kanäle.',
      matrixReasonEn:
        'Owned stories often open with broad, aspirational framing before mentioning concrete numbers or long-term commitments further down the page.',
      matrixReasonDe:
        'Owned Stories starten oft mit breiter, strategischer Einleitung, bevor konkrete Zahlen und Zusagen weiter unten folgen.',
      passageEn:
        '«Our long-term strategy focuses on building an agile global footprint positioned for future innovation across key markets.»',
      passageDe:
        '«Unsere langfristige Strategie setzt auf eine agile globale Aufstellung für künftige Innovationen in zentralen Märkten.»',
      collisionEn:
        'Because AI sub-queries extract short snippets, vague intros fail to anchor core facts—leaving room for third-party commentary to fill the gap.',
      collisionDe:
        'Da KI-Teilabfragen kurze Passagen ziehen, liefern vage Einleitungen keine harten Fakten – Drittkommentare füllen diese Lücke.',
      answerClauseEn: 'while corporate pages highlight an agile global footprint.',
      answerClauseDe: 'während Unternehmensseiten eine agile globale Aufstellung betonen.',
      answerRoleEn:
        'Contribution from 2. Owned Stories & Pages: Adds only the broad phrase "agile global footprint"—too vague to anchor concrete local commitments.',
      answerRoleDe:
        'Beitrag aus 2. Owned Stories & Pages: Liefert nur die vage Formulierung «agile globale Aufstellung» – zu unkonkret, um lokale Zusagen zu verankern.',
      auditStatusEn: 'Low Snippet Pull-Through (Intro Too Vague)',
      auditStatusDe: 'Schwache Snippet-Wirkung (Einstieg zu vage)',
      handoffEn: '→ Feeds 02 Top-Down: Replace vague intro with Answer-First GEO structure on corporate pages.',
      handoffDe: '→ Speist 02 Top-Down: Vagen Einstieg auf Strategie-Seiten durch Answer-First-GEO-Struktur ersetzen.'
    },
    regional: {
      shortBadge: 'Q3–4',
      labelEn: 'Regional / Cantonal & Legacy Files',
      labelDe: 'Regionale Briefings & Altdateien',
      subQueryLabelEn: 'Sub-Queries 3–4: Regional PDFs',
      subQueryLabelDe: 'Teilabfragen 3–4: Regionale PDFs',
      icon: <Layers className="w-3.5 h-3.5 shrink-0" />,
      roleEn: 'Regional and cantonal teams briefing local authorities, plus older PDFs still indexed online.',
      roleDe: 'Regionale und kantonale Teams im Austausch mit Behörden sowie ältere online abrufbare PDFs.',
      matrixReasonEn:
        'Regional teams tailor briefings to local regulatory or infrastructure priorities, and older PDFs remain public because nobody tracks every archived file across hubs.',
      matrixReasonDe:
        'Regionale Teams richten Briefings auf lokale Anliegen aus, und ältere PDFs bleiben online, weil niemand alle Archive über Standorte hinweg im Blick behält.',
      passageEn:
        '«2022 Regional Footprint Briefing (PDF): Review of European site consolidation options remains ongoing subject to local framework conditions.»',
      passageDe:
        '«Regionales Standort-Briefing 2022 (PDF): Die Prüfung europäischer Standortoptionen läuft abhängig von lokalen Rahmenbedingungen weiter.»',
      collisionEn:
        'An outdated PDF pulled in sub-query #3–4 directly contradicts current central messaging—diluting the company’s voice in the same answer.',
      collisionDe:
        'Ein veraltetes PDF in Teilabfrage Nr. 3–4 widerspricht der aktuellen zentralen Aussage direkt – die Unternehmensstimme wird in derselben Antwort verwässert.',
      answerClauseEn: 'However, an older regional briefing PDF still references ongoing European site consolidation reviews—',
      answerClauseDe: 'Gleichzeitig verweist ein älteres regionales Briefing-PDF noch auf laufende Prüfungen zur Standortkonsolidierung –',
      answerRoleEn:
        'Contribution from 3. Regional / Legacy Files: Injects the "However…" pivot directly from an outdated 2022 PDF still indexed online.',
      answerRoleDe:
        'Beitrag aus 3. Regionale Briefings & Altdateien: Bringt den «Gleichzeitig…»-Widerspruch direkt aus einem veralteten PDF von 2022 in die Antwort.',
      auditStatusEn: 'Active Collision (2022 PDF Contradicts Core)',
      auditStatusDe: 'Aktiver Widerspruch (Alt-PDF 2022 kollidiert)',
      handoffEn: '→ Feeds 02 & 03: Update regional briefing template and flag 2022 PDF in Recipe Input 03.',
      handoffDe: '→ Speist 02 & 03: Regionales Briefing aktualisieren und 2022-PDF als Risiko in Baustein 03 melden.'
    },
    forums: {
      shortBadge: 'Q5–8',
      labelEn: 'Online Forums',
      labelDe: 'Online-Foren',
      subQueryLabelEn: 'Sub-Queries 5–8: Forum threads',
      subQueryLabelDe: 'Teilabfragen 5–8: Foren-Threads',
      icon: <MessageSquare className="w-3.5 h-3.5 shrink-0" />,
      roleEn: 'Open industry, investor, and employee discussion threads.',
      roleDe: 'Öffentliche Branchen-, Investoren- und Community-Diskussionen.',
      matrixReasonEn:
        'Forum users compare press headlines with regional rumours in plain, direct language that AI answer engines frequently surface for nuance.',
      matrixReasonDe:
        'Forumnutzer vergleichen Schlagzeilen mit regionalen Gerüchten in direkter Alltagssprache, die KI-Suchmaschinen oft als Stimmungsbild heranziehen.',
      passageEn:
        '«Thread: Why does the international press release highlight expansion while the local PDF talks about site reviews?»',
      passageDe:
        '«Diskussion: Warum spricht die internationale Mitteilung von Ausbau, während ein lokales PDF Standortprüfungen erwähnt?»',
      collisionEn:
        'When company channels show discrepancies, forums amplify the tension—and AI models pull both the contradiction and the forum speculation into one summary.',
      collisionDe:
        'Zeigen eigene Kanäle Widersprüche, verstärken Foren diese Spannung – und KI-Modelle ziehen beides zusammen in eine Antwort.',
      answerClauseEn: 'fueling online forum questions about whether local commitments are shifting.»',
      answerClauseDe: 'was in Foren Fragen nach der künftigen lokalen Verankerung auslöst.»',
      answerRoleEn:
        'Contribution from 4. Online Forums: Closes the AI summary by surfacing forum speculation triggered by the gap between press and regional files.',
      answerRoleDe:
        'Beitrag aus 4. Online-Foren: Schliesst die KI-Antwort mit Foren-Spekulationen ab, die durch die Lücke zwischen Presse und Alt-PDF entstanden sind.',
      auditStatusEn: 'Spillover Risk (Speculation on Site Reviews)',
      auditStatusDe: 'Spillover-Risiko (Spekulation um Standorte)',
      handoffEn: '→ Feeds 03 Workflow Recipes: Streams directly into Input 03 (Outside-In Comm Risks) for writers.',
      handoffDe: '→ Speist 03 Prompt-Rezepte: Fliesst direkt als Baustein 03 (Outside-In-Risiko) in die Textarbeit ein.'
    }
  };

  const activeChannel = channels[selectedChannel];

  const stages: {
    num: PipelineStage;
    titleEn: string;
    titleDe: string;
    tools: string;
    inputEn: string;
    inputDe: string;
    processEn: string;
    processDe: string;
    outputEn: string;
    outputDe: string;
  }[] = [
    {
      num: 1,
      titleEn: '1. Capture Feeds & Public LLM APIs',
      titleDe: '1. Feeds & öffentliche LLM-APIs erfassen',
      tools: 'Factiva, Meltwater, Talkwalker + Public LLM APIs',
      inputEn:
        'Continuous streams across the exact channels from Part A: daily & business newspapers and wires [Q1], forum threads [Q5–8], plus live multi-query answers from public LLM APIs [Q1–Q8].',
      inputDe:
        'Laufende Ströme genau über die Kanäle aus Teil A: Tages- und Wirtschaftszeitungen sowie Agenturen [Q1], Foren-Threads [Q5–8] plus Live-Antworten öffentlicher LLM-APIs [Q1–Q8].',
      processEn:
        'Connects to existing licensed enterprise media-monitoring feeds and APIs—capturing thousands of articles and AI responses across markets without "shadow IT" scraping.',
      processDe:
        'Nutzt bestehende lizenzierte Medienbeobachtungs-Feeds und APIs – erfasst Tausende Artikel und KI-Antworten über Märkte hinweg ohne «Shadow-IT»-Scraping.',
      outputEn:
        'High-volume, unstructured raw text stream—impossible to audit manually, and too noisy to feed straight into a single LLM prompt.',
      outputDe:
        'Grosse, unstrukturierte Rohtext-Ströme – manuell nicht überblickbar und zu verrauscht für einen einzelnen LLM-Prompt.'
    },
    {
      num: 2,
      titleEn: '2. Digest Into Structured Data',
      titleDe: '2. Aufbereitung in strukturierte Daten',
      tools: isEn ? 'Claim Extraction & Channel Tagging' : 'Aussagen-Extraktion & Kanal-Tagging',
      inputEn:
        'Raw newspaper articles, forum threads, and multi-source AI answers from Stage 1.',
      inputDe:
        'Rohe Zeitungsartikel, Foren-Threads und kombinierte KI-Antworten aus Stufe 1.',
      processEn:
        'Splits combined AI answers and media articles into structured records—tagging each passage by channel ([Q1] Press, [Q2] Owned, [Q3–4] Regional/Legacy PDF, [Q5–8] Forum), date, and region.',
      processDe:
        'Zerlegt KI-Antworten und Medienberichte in strukturierte Datensätze – getaggt nach Kanal ([Q1] Presse, [Q2] Owned, [Q3–4] Alt-PDF, [Q5–8] Forum), Datum und Region.',
      outputEn:
        'Comparable claim dataset: isolates a 2026 newspaper quote [Q1] from a vague strategy snippet [Q2], an outdated 2022 regional PDF [Q3–4], and forum reaction [Q5–8].',
      outputDe:
        'Vergleichbarer Datensatz: trennt ein aktuelles Zeitungszitat 2026 [Q1] sauber von einem vagen Strategie-Snippet [Q2], einem Alt-PDF 2022 [Q3–4] und Foren-Reaktionen [Q5–8].'
    },
    {
      num: 3,
      titleEn: '3. Statistical & LLM Pull-Through Audit',
      titleDe: '3. Statistische & LLM-Durchdringungsanalyse',
      tools: isEn ? 'Pull-Through & Collision Detection' : 'Durchdringung & Kollisions-Prüfung',
      inputEn:
        'Structured, channel-tagged records from Stage 2 compared against the company’s centrally defined core narrative.',
      inputDe:
        'Strukturierte, nach Kanälen getaggte Datensätze aus Stufe 2 im Abgleich mit dem zentral definierten Kern-Narrativ.',
      processEn:
        'Statistical models track volume and regional spread; LLMs evaluate narrative pull-through and flag where channels contradict each other inside AI answers.',
      processDe:
        'Statistische Modelle messen Volumen und regionale Verbreitung; LLMs prüfen die Botschafts-Durchdringung und markieren Widersprüche in KI-Antworten.',
      outputEn:
        'Actionable Outside-In Audit (see 4-channel scorecard below): pinpoints what to fix Top-Down in Module 02 and streams risk alerts into Module 03.',
      outputDe:
        'Konkreter Outside-In-Befund (siehe 4-Kanal-Auswertung unten): zeigt, was in Modul 02 Top-Down geschärft wird, und liefert die Risikohinweise für Modul 03.'
    }
  ];

  const currentStage = stages.find(s => s.num === activeStage) || stages[0];

  return (
    <div className="max-w-6xl mx-auto space-y-6 pb-8">
      {/* Header Banner */}
      <div className="bg-white border border-sbb-black p-5 sm:p-7 space-y-2 shadow-xs">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-sbb-black text-white font-mono text-[11px] font-bold uppercase tracking-wider">
          <span className="text-[#FFCC00]">01 // OUTSIDE-IN</span>
          <span>{isEn ? 'AI SEARCH & FEED PIPELINE' : 'KI-SUCHE & FEED-PIPELINE'}</span>
        </div>
        <h1 className="text-xl sm:text-2xl font-black text-sbb-black tracking-tight">
          {isEn
            ? 'Why zero-click AI search exposes matrix discrepancies—and how external feeds become clear insights'
            : 'Warum Zero-Click-KI-Suche Abweichungen in Matrix-Organisationen offenlegt – und wie Feeds zu klaren Erkenntnissen werden'}
        </h1>
        <p className="text-sm text-zinc-700 max-w-4xl leading-relaxed">
          {isEn
            ? 'In a complex matrixed company, central, commercial, regional, and cantonal teams write for different audiences on different timelines. Explore below how AI search merges those separate channels into one answer—and how the Outside-In IT layer turns massive feed volume into actionable priorities.'
            : 'In einer komplexen Matrix-Organisation schreiben zentrale, kommerzielle, regionale und kantonale Teams für verschiedene Zielgruppen und zu unterschiedlichen Zeitpunkten. Unten sehen Sie, wie KI-Suche diese getrennten Kanäle in einer Antwort zusammenzieht – und wie die Outside-In-Ebene daraus klare Prioritäten ableitet.'}
        </p>
      </div>

      {/* ═══ PART A: INTERACTIVE 5-11 SUB-QUERY CONTEXT WINDOW INSPECTOR ═══ */}
      <div className="bg-white border border-sbb-aluminum p-5 sm:p-7 space-y-5 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-4 border-b border-zinc-200">
          <div>
            <div className="font-mono text-xs font-black uppercase text-sbb-red flex items-center gap-1.5">
              <Search className="w-4 h-4" />
              <span>
                {isEn
                  ? 'PART A // THE PROBLEM: INSIDE ONE 5–11 SUB-QUERY CONTEXT WINDOW'
                  : 'TEIL A // DAS PROBLEM: IN EINEM KONTEXTFENSTER AUS 5–11 TEILABFRAGEN'}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-700 mt-1">
              {isEn
                ? 'Click each channel below to see why teams naturally frame topics differently—and what happens when an AI model pulls them all into one window at once.'
                : 'Klicken Sie auf die einzelnen Kanäle, um zu sehen, warum Teams Themen naturgemäss unterschiedlich formulieren – und was passiert, wenn ein KI-Modell alles gleichzeitig lädt.'}
            </p>
          </div>
        </div>

        {/* Question Strip */}
        <div className="p-4 bg-sbb-cloud border-2 border-sbb-black space-y-2">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <span className="font-mono text-[11px] font-bold uppercase text-sbb-stone">
              {isEn ? '1 STAKEHOLDER QUESTION IN ZERO-CLICK AI SEARCH:' : '1 STAKEHOLDER-FRAGE IN DER ZERO-CLICK-KI-SUCHE:'}
            </span>
            <span className="px-2 py-0.5 bg-sbb-black text-[#FFCC00] font-mono text-[10px] font-bold uppercase self-start">
              {isEn ? 'Decomposed into 5–11 parallel sub-queries' : 'Zerlegt in 5–11 parallele Teilabfragen'}
            </span>
          </div>
          <div className="text-sm sm:text-base font-bold text-sbb-black">
            {isEn
              ? '«How is the company balancing global investment priorities with regional and local operations?»'
              : '«Wie verbindet das Unternehmen globale Investitionsprioritäten mit regionalen und lokalen Standorten?»'}
          </div>
        </div>

        {/* Vertical Connector 1: Question -> 4 Sub-Query Tabs */}
        <div className="flex flex-col items-center">
          <div className="w-0.5 h-3 bg-sbb-black" />
          <div className="px-3 py-1 bg-sbb-black text-white font-mono text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 text-center">
            <ArrowDown className="w-3 h-3 text-[#FFCC00] shrink-0" />
            <span>
              {isEn
                ? 'AI decomposes 1 question into 5–11 parallel sub-queries across 4 channels (click any tab)'
                : 'KI zerlegt 1 Frage in 5–11 parallele Teilabfragen über 4 Kanäle (Tab anklicken)'}
            </span>
          </div>
          <div className="w-0.5 h-3 bg-sbb-black" />
        </div>

        {/* Grounded Folder Tabs + Workbench */}
        <div>
          {/* Flush-Mounted 4-Channel Tabs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-2 border-b-0 border-sbb-black divide-y sm:divide-y-0 sm:divide-x divide-zinc-300">
            {(Object.keys(channels) as ChannelId[]).map(chId => {
              const ch = channels[chId];
              const isActive = selectedChannel === chId;
              return (
                <button
                  key={chId}
                  type="button"
                  onClick={() => setSelectedChannel(chId)}
                  className={`p-3 text-left transition-all cursor-pointer flex flex-col gap-1 border-t-4 ${
                    isActive
                      ? 'bg-sbb-black text-white border-t-[#FFCC00]'
                      : 'bg-white text-zinc-700 border-t-transparent hover:bg-sbb-cloud hover:text-sbb-black'
                  }`}
                >
                  <div className="flex items-center gap-2 font-mono text-xs font-bold">
                    <span
                      className={`px-1.5 py-0.5 text-[10px] font-black shrink-0 ${
                        isActive ? 'bg-[#FFCC00] text-sbb-black' : 'bg-zinc-200 text-sbb-black'
                      }`}
                    >
                      {ch.shortBadge}
                    </span>
                    <span className={isActive ? 'text-[#FFCC00]' : 'text-sbb-red'}>{ch.icon}</span>
                    <span className="leading-snug">{isEn ? ch.labelEn : ch.labelDe}</span>
                  </div>
                  <span className={`font-mono text-[10px] ${isActive ? 'text-zinc-300' : 'text-zinc-500'}`}>
                    {isEn ? ch.subQueryLabelEn : ch.subQueryLabelDe}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Grounded Active-Channel Workbench */}
          <div className="border-2 border-sbb-black bg-[#F4F4F6] p-4 sm:p-5 space-y-4">
            <div className="bg-sbb-black text-white px-3.5 py-2 flex flex-wrap items-center justify-between gap-2 font-mono text-[11px] font-bold uppercase">
              <span className="flex items-center gap-2">
                <span className="px-1.5 py-0.5 bg-[#FFCC00] text-sbb-black text-[10px] font-black">
                  {activeChannel.shortBadge}
                </span>
                <span>
                  {isEn
                    ? `INSPECTING: ${activeChannel.labelEn}`
                    : `IM DETAIL: ${activeChannel.labelDe}`}
                </span>
              </span>
              <span className="text-[#FFCC00] text-[10px]">
                {isEn ? 'STEP A → STEP B → STEP C' : 'SCHRITT A → SCHRITT B → SCHRITT C'}
              </span>
            </div>

            {/* Connected 3-Step Causal Pipeline Inside Active Channel */}
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr_auto_1fr] items-stretch gap-2.5">
              {/* STEP A */}
              <div className="p-4 bg-white border border-zinc-300 space-y-2">
                <div className="font-mono text-[10px] font-black uppercase tracking-wider text-zinc-600">
                  {isEn ? 'STEP A // TEAM & WHY IT DIVERGES' : 'SCHRITT A // ROLLE & ABWEICHUNG'}
                </div>
                <p className="text-xs font-bold text-sbb-black leading-snug">
                  {isEn ? activeChannel.roleEn : activeChannel.roleDe}
                </p>
                <p className="text-xs text-zinc-700 leading-relaxed">
                  {isEn ? activeChannel.matrixReasonEn : activeChannel.matrixReasonDe}
                </p>
              </div>

              {/* Arrow A -> B */}
              <div className="hidden lg:flex items-center justify-center">
                <svg width="26" height="24" viewBox="0 0 26 24" className="shrink-0">
                  <line x1="0" y1="12" x2="20" y2="12" stroke="#18181B" strokeWidth="2" className="terrain-flow-line" />
                  <polygon points="18,7 26,12 18,17" fill="#18181B" />
                </svg>
              </div>

              {/* STEP B */}
              <div className="p-4 bg-white border-2 border-sbb-black space-y-2">
                <div className="font-mono text-[10px] font-black uppercase tracking-wider text-sbb-black">
                  {isEn ? 'STEP B // PASSAGE PULLED BY AI' : 'SCHRITT B // PASSAGE IM KI-FENSTER'}
                </div>
                <p className="text-xs sm:text-sm font-medium text-sbb-black italic leading-relaxed bg-sbb-cloud p-3 border border-zinc-200">
                  {isEn ? activeChannel.passageEn : activeChannel.passageDe}
                </p>
              </div>

              {/* Arrow B -> C */}
              <div className="hidden lg:flex items-center justify-center">
                <svg width="26" height="24" viewBox="0 0 26 24" className="shrink-0">
                  <line x1="0" y1="12" x2="20" y2="12" stroke="#EB0000" strokeWidth="2" className="terrain-flow-line" />
                  <polygon points="18,7 26,12 18,17" fill="#EB0000" />
                </svg>
              </div>

              {/* STEP C */}
              <div className="p-4 bg-red-50/70 border-2 border-sbb-red space-y-2">
                <div className="font-mono text-[10px] font-black uppercase tracking-wider text-sbb-red flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                  <span>{isEn ? 'STEP C // EFFECT IN AI ANSWER' : 'SCHRITT C // EFFEKT IN KI-ANTWORT'}</span>
                </div>
                <p className="text-xs sm:text-sm text-red-950 leading-relaxed font-medium">
                  {isEn ? activeChannel.collisionEn : activeChannel.collisionDe}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Vertical Connector 2: Workbench -> Combined AI Answer */}
        <div className="flex flex-col items-center">
          <div className="w-0.5 h-3 bg-sbb-red" />
          <div className="px-3 py-1 bg-sbb-red text-white font-mono text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 text-center">
            <ArrowDown className="w-3 h-3 shrink-0" />
            <span>
              {isEn
                ? `All 4 channels merge into 1 AI answer — active [${activeChannel.shortBadge}] clause highlighted below`
                : `Alle 4 Kanäle fliessen in 1 KI-Antwort zusammen — aktiver Teil [${activeChannel.shortBadge}] hervorgehoben`}
            </span>
          </div>
          <div className="w-0.5 h-3 bg-sbb-red" />
        </div>

        {/* Combined AI Answer Synthesis Box (Synchronized Black + Gold Highlight) */}
        <div className="border-2 border-sbb-black bg-white overflow-hidden">
          <div className="bg-sbb-black text-white px-4 py-2.5 flex flex-wrap items-center justify-between gap-2">
            <span className="font-mono text-[11px] font-black uppercase flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4 text-[#FFCC00] shrink-0" />
              <span>
                {isEn
                  ? 'COMBINED AI ANSWER ENGINE OUTPUT (ALL 4 SUB-QUERIES MERGED)'
                  : 'KOMBINIERTE KI-ANTWORT (ALLE 4 TEILABFRAGEN ZUSAMMENGEFÜHRT)'}
              </span>
            </span>
            <span className="px-2 py-0.5 bg-[#FFCC00] text-sbb-black font-mono text-[10px] font-black uppercase">
              {isEn ? `HIGHLIGHTING [${activeChannel.shortBadge}]` : `HERVORGEHOBEN: [${activeChannel.shortBadge}]`}
            </span>
          </div>

          <div className="p-4 sm:p-5 space-y-3">
            <p className="text-xs sm:text-sm leading-loose">
              {(['earned', 'owned', 'regional', 'forums'] as ChannelId[]).map((chId, idx) => {
                const ch = channels[chId];
                const isSelected = chId === selectedChannel;
                return (
                  <React.Fragment key={chId}>
                    {idx > 0 && ' '}
                    <button
                      type="button"
                      onClick={() => setSelectedChannel(chId)}
                      className={`inline text-left transition-colors cursor-pointer px-1.5 py-0.5 ${
                        isSelected
                          ? 'bg-sbb-black text-[#FFCC00] font-bold border-b-2 border-sbb-red'
                          : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200 hover:text-sbb-black font-medium'
                      }`}
                    >
                      <span
                        className={`font-mono text-[10px] font-black mr-1.5 px-1 py-0.2 ${
                          isSelected ? 'bg-[#FFCC00] text-sbb-black' : 'bg-zinc-300 text-zinc-800'
                        }`}
                      >
                        {ch.shortBadge}
                      </span>
                      {isEn ? ch.answerClauseEn : ch.answerClauseDe}
                    </button>
                  </React.Fragment>
                );
              })}
            </p>
            <div className="p-3 bg-amber-50/80 border-l-4 border-[#FFCC00] border border-amber-200 font-mono text-[11px] font-bold text-sbb-black">
              [{activeChannel.shortBadge}] {isEn ? activeChannel.answerRoleEn : activeChannel.answerRoleDe}
            </div>
          </div>
        </div>
      </div>

      {/* ═══ CAUSAL BRIDGE: PART A (1 COLLISION) -> PART B (SYSTEMATIC OUTSIDE-IN PIPELINE) ═══ */}
      <div className="flex flex-col items-center -my-2">
        <div className="w-0.5 h-4 bg-sbb-black" />
        <div className="px-4 py-2 bg-sbb-black text-white border-l-4 border-[#FFCC00] font-mono text-[11px] font-bold uppercase tracking-wider flex items-center gap-2 text-center shadow-xs max-w-3xl">
          <ArrowDown className="w-4 h-4 text-[#FFCC00] shrink-0" />
          <span>
            {isEn
              ? 'Part A showed 1 AI answer. How do you catch these collisions across thousands of daily articles, forums & AI queries? → The Outside-In Pipeline (Part B)'
              : 'Teil A zeigte 1 KI-Antwort. Wie erkennt man solche Kollisionen systematisch in Tausenden Artikeln, Foren & KI-Abfragen? → Die Outside-In-Pipeline (Teil B)'}
          </span>
        </div>
        <div className="w-0.5 h-4 bg-sbb-black" />
      </div>

      {/* ═══ PART B: THE OUTSIDE-IN DATA PIPELINE ═══ */}
      <div className="bg-white border border-sbb-aluminum p-5 sm:p-7 space-y-5 shadow-xs">
        <div className="space-y-1 pb-4 border-b border-zinc-200">
          <div className="font-mono text-xs font-black uppercase text-sbb-red flex items-center gap-1.5">
            <Database className="w-4 h-4" />
            <span>
              {isEn
                ? 'PART B // THE OUTSIDE-IN SOLUTION: CATCHING COLLISIONS & PULL-THROUGH AT SCALE'
                : 'TEIL B // DIE OUTSIDE-IN-LÖSUNG: KOLLISIONEN & DURCHDRINGUNG SYSTEMATISCH ERKENNEN'}
            </span>
          </div>
          <p className="text-xs sm:text-sm text-zinc-700">
            {isEn
              ? 'Click any stage below to see how the enterprise Outside-In pipeline tracks [Q1]–[Q8] streams and turns volume into the exact inputs for Modules 02 & 03.'
              : 'Klicken Sie auf eine Stufe, um zu sehen, wie die Outside-In-Pipeline die Kanäle [Q1]–[Q8] auswertet und direkt an Modul 02 & 03 übergibt.'}
          </p>
        </div>

        {/* Flush-Mounted 3 Pipeline Stage Tabs + Dark Workbench */}
        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 border-2 border-b-0 border-sbb-black divide-y md:divide-y-0 md:divide-x divide-zinc-300">
            {stages.map(stage => {
              const isActive = activeStage === stage.num;
              return (
                <button
                  key={stage.num}
                  type="button"
                  onClick={() => setActiveStage(stage.num)}
                  className={`p-3.5 text-left transition-all cursor-pointer flex flex-col justify-center gap-1 border-t-4 ${
                    isActive
                      ? 'bg-sbb-black text-white border-t-[#FFCC00]'
                      : 'bg-white text-sbb-black border-t-transparent hover:bg-sbb-cloud'
                  }`}
                >
                  <div className="flex items-center gap-2 font-mono text-xs font-black uppercase">
                    <span
                      className={`px-1.5 py-0.5 text-[10px] font-black shrink-0 ${
                        isActive ? 'bg-[#FFCC00] text-sbb-black' : 'bg-zinc-200 text-sbb-black'
                      }`}
                    >
                      STAGE 0{stage.num}
                    </span>
                    <span className="leading-snug">
                      {(isEn ? stage.titleEn : stage.titleDe).replace(/^\d+\.\s*/, '')}
                    </span>
                  </div>
                  <div className={`font-mono text-[10px] font-bold ${isActive ? 'text-zinc-300' : 'text-zinc-600'}`}>
                    {stage.tools}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Grounded Dark Stage Workbench with Horizontal Flow Arrows */}
          <div className="p-4 sm:p-5 bg-sbb-black text-white border-2 border-sbb-black space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-2.5 border-b border-zinc-800 font-mono text-[11px] font-bold uppercase">
              <span className="text-[#FFCC00]">
                {isEn
                  ? `INSPECTING STAGE 0${activeStage} // ${(currentStage.titleEn).replace(/^\d+\.\s*/, '')}`
                  : `STUFE 0${activeStage} IM DETAIL // ${(currentStage.titleDe).replace(/^\d+\.\s*/, '')}`}
              </span>
              <span className="text-zinc-400 text-[10px]">
                {isEn ? 'STEP A (INPUT) → STEP B (PROCESS) → STEP C (OUTPUT)' : 'SCHRITT A (INPUT) → SCHRITT B (PROZESS) → SCHRITT C (ERGEBNIS)'}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] items-stretch gap-2.5">
              <div className="p-3.5 bg-zinc-900 border border-zinc-700 space-y-1.5">
                <div className="font-mono text-[10px] font-bold uppercase text-zinc-400">
                  {isEn ? 'STEP A // WHAT ENTERS (INPUT)' : 'SCHRITT A // EINGANG (INPUT)'}
                </div>
                <p className="text-xs text-zinc-100 leading-relaxed">
                  {isEn ? currentStage.inputEn : currentStage.inputDe}
                </p>
              </div>

              <div className="hidden md:flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" className="shrink-0">
                  <line x1="0" y1="12" x2="18" y2="12" stroke="#FFCC00" strokeWidth="2" className="terrain-flow-line" />
                  <polygon points="16,7 24,12 16,17" fill="#FFCC00" />
                </svg>
              </div>

              <div className="p-3.5 bg-zinc-900 border border-zinc-700 space-y-1.5">
                <div className="font-mono text-[10px] font-bold uppercase text-[#FFCC00]">
                  {isEn ? 'STEP B // HOW IT WORKS (PROCESS)' : 'SCHRITT B // VERARBEITUNG (PROZESS)'}
                </div>
                <p className="text-xs text-zinc-100 leading-relaxed">
                  {isEn ? currentStage.processEn : currentStage.processDe}
                </p>
              </div>

              <div className="hidden md:flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" className="shrink-0">
                  <line x1="0" y1="12" x2="18" y2="12" stroke="#34D399" strokeWidth="2" className="terrain-flow-line" />
                  <polygon points="16,7 24,12 16,17" fill="#34D399" />
                </svg>
              </div>

              <div className="p-3.5 bg-zinc-900 border border-emerald-700/70 space-y-1.5">
                <div className="font-mono text-[10px] font-bold uppercase text-emerald-400">
                  {isEn ? 'STEP C // CONCRETE OUTPUT' : 'SCHRITT C // KONKRETES ERGEBNIS'}
                </div>
                <p className="text-xs text-zinc-100 leading-relaxed">
                  {isEn ? currentStage.outputEn : currentStage.outputDe}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Vertical Connector: Stage 03 Output -> Synchronized 4-Channel Audit Scorecard */}
        <div className="flex flex-col items-center">
          <div className="w-0.5 h-3 bg-sbb-black" />
          <div className="px-3 py-1 bg-sbb-black text-white font-mono text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 text-center">
            <ArrowDown className="w-3 h-3 text-[#FFCC00] shrink-0" />
            <span>
              {isEn
                ? 'Stage 03 Output Applied to Part A’s 4 Channels → Handoff to 02 Top-Down & 03 Workflow Recipes'
                : 'Ergebnis aus Stufe 03 für die 4 Kanäle aus Teil A → Übergabe an 02 Top-Down & 03 Prompt-Rezepte'}
            </span>
          </div>
          <div className="w-0.5 h-3 bg-sbb-black" />
        </div>

        {/* Synchronized 4-Channel Audit & Handoff Scorecard */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-2 border-sbb-black divide-y sm:divide-y-0 sm:divide-x divide-zinc-300">
          {(['earned', 'owned', 'regional', 'forums'] as ChannelId[]).map(chId => {
            const ch = channels[chId];
            const isSelected = chId === selectedChannel;
            return (
              <button
                key={chId}
                type="button"
                onClick={() => setSelectedChannel(chId)}
                className={`p-3.5 text-left transition-colors cursor-pointer flex flex-col justify-between gap-2.5 border-t-4 ${
                  isSelected
                    ? 'bg-sbb-black text-white border-t-[#FFCC00]'
                    : 'bg-sbb-cloud text-sbb-black border-t-transparent hover:bg-white'
                }`}
              >
                <div className="space-y-1.5">
                  <div className="flex items-center gap-1.5 font-mono text-[10px] font-black uppercase">
                    <span
                      className={`px-1.5 py-0.5 shrink-0 ${
                        isSelected ? 'bg-[#FFCC00] text-sbb-black' : 'bg-zinc-300 text-sbb-black'
                      }`}
                    >
                      {ch.shortBadge}
                    </span>
                    <span className={isSelected ? 'text-[#FFCC00]' : 'text-sbb-red'}>
                      {isEn ? ch.labelEn : ch.labelDe}
                    </span>
                  </div>
                  <div className={`text-xs font-bold leading-snug ${isSelected ? 'text-white' : 'text-sbb-black'}`}>
                    {isEn ? ch.auditStatusEn : ch.auditStatusDe}
                  </div>
                </div>

                <div
                  className={`pt-2 border-t text-[11px] leading-snug font-mono ${
                    isSelected ? 'border-zinc-700 text-zinc-200' : 'border-zinc-300 text-zinc-700'
                  }`}
                >
                  {isEn ? ch.handoffEn : ch.handoffDe}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2">
        <button
          type="button"
          onClick={() => onNavigateTab('overview')}
          className="px-4 py-2.5 bg-white hover:bg-sbb-cloud border border-sbb-black font-mono text-xs font-bold uppercase tracking-wider text-sbb-black transition-colors flex items-center justify-center gap-2 cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>{isEn ? 'Back to 00 Overview' : 'Zurück zu 00 Überblick'}</span>
        </button>

        <button
          type="button"
          onClick={() => onNavigateTab('geo')}
          className="px-5 py-2.5 bg-sbb-red hover:bg-sbb-red-125 text-white font-mono text-xs font-black uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
        >
          <span>
            {isEn
              ? 'Next: 02 Top-Down GEO & Context Tailoring'
              : 'Weiter: 02 Top-Down GEO & Kontext-Anpassung'}
          </span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};

export default NarrativeCockpitView;
