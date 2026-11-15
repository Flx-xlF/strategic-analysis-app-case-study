import React, { useState } from 'react';
import { Language } from '../../fixtures/scenarios';
import { ActiveTab } from '../common/CommandHeader';
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Database,
  Layers,
  MessageSquare,
  Newspaper,
  FileText,
  Search,
  BarChart3
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
      labelEn: string;
      labelDe: string;
      icon: React.ReactNode;
      roleEn: string;
      roleDe: string;
      matrixReasonEn: string;
      matrixReasonDe: string;
      passageEn: string;
      passageDe: string;
      collisionEn: string;
      collisionDe: string;
    }
  > = {
    earned: {
      labelEn: '1. Earned Media',
      labelDe: '1. Earned Media (Presse)',
      icon: <Newspaper className="w-3.5 h-3.5 shrink-0" />,
      roleEn: 'Corporate media desk answering fast-moving journalist questions.',
      roleDe: 'Medienstelle, die unter Zeitdruck auf journalistische Anfragen reagiert.',
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
        'Wird dieses Zitat ohne Kontext neben einem regionalen Briefing geladen, folgern KI-Systeme oft eine Verlagerung weg vom Heimatstandort.'
    },
    owned: {
      labelEn: '2. Owned Stories & Pages',
      labelDe: '2. Owned Stories & Seiten',
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
        'Da KI-Teilabfragen kurze Passagen ziehen, liefern vage Einleitungen keine harten Fakten – Drittkommentare füllen diese Lücke.'
    },
    regional: {
      labelEn: '3. Regional / Cantonal & Legacy Files',
      labelDe: '3. Regionale Briefings & Altdateien',
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
        'An outdated PDF pulled in sub-query #7 directly contradicts current central messaging—diluting the company’s voice in the same answer.',
      collisionDe:
        'Ein veraltetes PDF in Teilabfrage Nr. 7 widerspricht der aktuellen zentralen Aussage direkt – die Unternehmensstimme wird in derselben Antwort verwässert.'
    },
    forums: {
      labelEn: '4. Online Forums',
      labelDe: '4. Online-Foren',
      icon: <MessageSquare className="w-3.5 h-3.5 shrink-0" />,
      roleEn: 'Open industry, investor, and employee discussion threads.',
      roleDe: 'Öffentliche Branchen-, Investoren- und Community-Diskussionen.',
      matrixReasonEn:
        'Forum users compare press headlines with regional rumours in plain, direct language that AI answer engines frequently surface for nuance.',
      matrixReasonDe:
        'Forumnutzer vergleichen Schlagzeilen mit regionalen Gerüchten in direkter Alltagssprache, die KI-Suchmaschinen oft als Stimmungsbild heranziehen.',
      passageEn:
        '«Thread: Why does the US press release highlight big expansion while the local PDF talks about site reviews?»',
      passageDe:
        '«Diskussion: Warum spricht die US-Mitteilung von Ausbau, während ein lokales PDF Standortprüfungen erwähnt?»',
      collisionEn:
        'When company channels show discrepancies, forums amplify the tension—and AI models pull both the contradiction and the forum speculation into one summary.',
      collisionDe:
        'Zeigen eigene Kanäle Widersprüche, verstärken Foren diese Spannung – und KI-Modelle ziehen beides zusammen in eine Antwort.'
    }
  };

  const activeChannel = channels[selectedChannel];

  const stages = [
    {
      num: 1 as PipelineStage,
      titleEn: '1. External Feeds & Public LLM APIs',
      titleDe: '1. Externe Feeds & öffentliche LLM-APIs',
      tools: 'Factiva, Meltwater, Talkwalker + Public LLM APIs',
      summaryEn:
        'Ingests continuous article streams across press, trade media, and social discussions, alongside repeated queries to public LLM APIs.',
      summaryDe:
        'Erfasst laufende Artikelströme aus Presse, Fachmedien und Social-Diskussionen sowie wiederholte Abfragen über öffentliche LLM-APIs.',
      detailEn:
        'In a global enterprise, you cannot build a standalone "shadow IT" scraper. The Outside-In branch connects to licensed media and social aggregators the company already uses (Factiva, Meltwater, Talkwalker) and public LLM APIs to capture both coverage and how AI search engines currently summarize the company.',
      detailDe:
        'In einem regulierten Unternehmen wird kein isoliertes «Shadow-IT»-Tool gebaut. Der Outside-In-Zweig nutzt bestehende lizenzierte Aggregatoren (Factiva, Meltwater, Talkwalker) und öffentliche LLM-APIs, um Medienströme und aktuelle KI-Antworten parallel zu erfassen.'
    },
    {
      num: 2 as PipelineStage,
      titleEn: '2. Digestion Into Structured Data',
      titleDe: '2. Aufbereitung in strukturierte Daten',
      tools: isEn ? 'Stream Normalization & Tagging' : 'Normalisierung & Strukturierung',
      summaryEn:
        'Transforms huge raw article and answer volumes into clean, structured records by topic, channel, region, and narrative claim.',
      summaryDe:
        'Überführt enorme Rohdatenmengen aus Artikeln und KI-Antworten in strukturierte Datensätze nach Thema, Kanal, Region und Kernaussage.',
      detailEn:
        'Licensed feeds produce huge amounts of raw text every day—far too much to read manually or paste straight into an LLM prompt. Before any analysis happens, the stream must be digested and transformed into structured data so patterns across central, regional, and cantonal markets become comparable.',
      detailDe:
        'Lizenzierte Feeds liefern täglich riesige Textmengen – viel zu viel zum manuellen Lesen oder für direkte LLM-Prompts. Deshalb werden die Ströme zuerst verdichtet und in strukturierte Daten überführt, damit Muster über zentrale, regionale und kantonale Märkte hinweg vergleichbar werden.'
    },
    {
      num: 3 as PipelineStage,
      titleEn: '3. Statistical & LLM Processing',
      titleDe: '3. Statistische & LLM-Auswertung',
      tools: isEn ? 'Pull-Through & Gap Identification' : 'Durchdringung & Handlungsbedarf',
      summaryEn:
        'Combines statistical filtering with LLM analysis to show where narratives come through and where work needs to be done.',
      summaryDe:
        'Kombiniert statistische Auswertung mit LLM-Analyse, um zu zeigen, wo Botschaften durchdringen und wo Handlungsbedarf besteht.',
      detailEn:
        'Statistics narrow the massive volume down to real shifts and recurring themes; LLMs inspect whether the company’s core narrative actually comes through in media and AI answers or gets distorted by missing context or discrepancies across teams. The output is clear priorities—not raw noise.',
      detailDe:
        'Statistik filtert aus dem Gesamtvolumen echte Verschiebungen und Häufungen heraus; LLMs prüfen anschliessend, ob das Kern-Narrativ in Medien und KI-Antworten durchdringt oder durch fehlenden Kontext und Team-Abweichungen verzerrt wird. Ergebnis sind klare Prioritäten statt Datenrauschen.'
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
                  ? 'PART A // INSIDE THE 5–11 SUB-QUERY CONTEXT WINDOW'
                  : 'TEIL A // IM KONTEXTFENSTER DER 5–11 TEILABFRAGEN'}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-700 mt-1">
              {isEn
                ? 'Click each channel below to see why teams naturally frame topics differently—and what happens when an AI model pulls them all into one window at once.'
                : 'Klicken Sie auf die einzelnen Kanäle, um zu sehen, warum Teams Themen naturgemäss unterschiedlich formulieren – und was passiert, wenn ein KI-Modell alles gleichzeitig lädt.'}
            </p>
          </div>
        </div>

        {/* Question + 5-11 Sub-query Strip */}
        <div className="p-4 bg-sbb-cloud border border-sbb-black space-y-3">
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
          <div className="flex flex-wrap gap-1.5 pt-1">
            {(isEn
              ? [
                  'Query 1: global investment press coverage',
                  'Query 2: corporate strategy page',
                  'Query 3: regional & cantonal briefings',
                  'Query 4: archived PDF footprint plans',
                  'Query 5–8: forum & stakeholder reactions'
                ]
              : [
                  'Abfrage 1: Presseberichte zu Investitionen',
                  'Abfrage 2: Corporate-Strategy-Seite',
                  'Abfrage 3: Regionale & kantonale Briefings',
                  'Abfrage 4: Archivierte Standort-PDFs',
                  'Abfrage 5–8: Foren & Reaktionen'
                ]
            ).map(q => (
              <span key={q} className="px-2 py-1 bg-white border border-zinc-300 font-mono text-[10px] text-zinc-700">
                {q}
              </span>
            ))}
          </div>
        </div>

        {/* Channel Switcher Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
          {(Object.keys(channels) as ChannelId[]).map(chId => {
            const ch = channels[chId];
            const isActive = selectedChannel === chId;
            return (
              <button
                key={chId}
                type="button"
                onClick={() => setSelectedChannel(chId)}
                className={`p-3 border text-left font-mono text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                  isActive
                    ? 'bg-sbb-black text-white border-sbb-black'
                    : 'bg-sbb-cloud text-zinc-800 border-sbb-aluminum hover:bg-white hover:border-sbb-black'
                }`}
              >
                <span className={isActive ? 'text-[#FFCC00]' : 'text-sbb-red'}>{ch.icon}</span>
                <span className="truncate">{isEn ? ch.labelEn : ch.labelDe}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Channel Inspection Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="p-4 bg-[#F8F8F9] border border-zinc-300 space-y-2">
            <div className="font-mono text-[10px] font-black uppercase tracking-wider text-zinc-600">
              {isEn ? '1. Matrix Role & Why It Diverges' : '1. Rolle in der Matrix & Abweichungs-Grund'}
            </div>
            <p className="text-xs font-bold text-sbb-black leading-snug">
              {isEn ? activeChannel.roleEn : activeChannel.roleDe}
            </p>
            <p className="text-xs text-zinc-700 leading-relaxed">
              {isEn ? activeChannel.matrixReasonEn : activeChannel.matrixReasonDe}
            </p>
          </div>

          <div className="p-4 bg-white border border-sbb-black space-y-2">
            <div className="font-mono text-[10px] font-black uppercase tracking-wider text-sbb-black">
              {isEn ? '2. Passage Pulled Into AI Context Window' : '2. Passage im KI-Kontextfenster'}
            </div>
            <p className="text-xs sm:text-sm font-medium text-sbb-black italic leading-relaxed bg-sbb-cloud p-3 border border-zinc-200">
              {isEn ? activeChannel.passageEn : activeChannel.passageDe}
            </p>
          </div>

          <div className="p-4 bg-red-50/40 border border-sbb-red space-y-2">
            <div className="font-mono text-[10px] font-black uppercase tracking-wider text-sbb-red flex items-center gap-1.5">
              <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
              <span>{isEn ? '3. Result When Cross-Referenced' : '3. Effekt beim KI-Abgleich'}</span>
            </div>
            <p className="text-xs sm:text-sm text-red-950 leading-relaxed font-medium">
              {isEn ? activeChannel.collisionEn : activeChannel.collisionDe}
            </p>
          </div>
        </div>
      </div>

      {/* ═══ PART B: THE OUTSIDE-IN DATA PIPELINE ═══ */}
      <div className="bg-white border border-sbb-aluminum p-5 sm:p-7 space-y-5 shadow-xs">
        <div className="space-y-1 pb-4 border-b border-zinc-200">
          <div className="font-mono text-xs font-black uppercase text-sbb-red flex items-center gap-1.5">
            <Database className="w-4 h-4" />
            <span>
              {isEn
                ? 'PART B // ENTERPRISE OUTSIDE-IN LAYER: HOW VOLUME BECOMES ACTIONABLE'
                : 'TEIL B // OUTSIDE-IN IT-EBENE: WIE AUS DATENMENGEN HANDLUNGSBEDARF WIRD'}
            </span>
          </div>
          <p className="text-xs sm:text-sm text-zinc-700">
            {isEn
              ? 'Click any stage in the pipeline to see how existing licensed feeds and public LLM APIs are processed before human teams act.'
              : 'Klicken Sie auf eine Stufe, um zu sehen, wie lizenzierte Feeds und öffentliche LLM-APIs verarbeitet werden, bevor Teams handeln.'}
          </p>
        </div>

        {/* 3 Stage Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {stages.map(stage => {
            const isActive = activeStage === stage.num;
            return (
              <button
                key={stage.num}
                type="button"
                onClick={() => setActiveStage(stage.num)}
                className={`p-4 border-2 text-left transition-all cursor-pointer flex flex-col justify-between gap-2 ${
                  isActive
                    ? 'border-sbb-red bg-red-50/30'
                    : 'border-sbb-aluminum bg-sbb-cloud/60 hover:border-sbb-black hover:bg-white'
                }`}
              >
                <div className="space-y-1">
                  <div className={`font-mono text-xs font-black uppercase ${isActive ? 'text-sbb-red' : 'text-sbb-black'}`}>
                    {isEn ? stage.titleEn : stage.titleDe}
                  </div>
                  <div className="font-mono text-[10px] font-bold text-zinc-600">{stage.tools}</div>
                </div>
                <p className="text-xs text-zinc-800 leading-relaxed">
                  {isEn ? stage.summaryEn : stage.summaryDe}
                </p>
              </button>
            );
          })}
        </div>

        {/* Selected Stage Detail */}
        <div className="p-4 sm:p-5 bg-sbb-black text-white border-l-4 border-[#FFCC00] space-y-2">
          <div className="font-mono text-xs font-bold uppercase text-[#FFCC00]">
            {isEn ? currentStage.titleEn : currentStage.titleDe} — {currentStage.tools}
          </div>
          <p className="text-xs sm:text-sm text-zinc-100 leading-relaxed">
            {isEn ? currentStage.detailEn : currentStage.detailDe}
          </p>
        </div>

        {/* Qualitative Pull-Through Output Table (Zero Fake Numbers) */}
        <div className="space-y-2 pt-2">
          <div className="font-mono text-[11px] font-bold uppercase tracking-wider text-zinc-600 flex items-center gap-1.5">
            <BarChart3 className="w-3.5 h-3.5 text-sbb-red" />
            <span>
              {isEn
                ? 'ILLUSTRATIVE OUTPUT FROM STAGE 3 (QUALITATIVE ASSESSMENT — NO INVENTED SCORES)'
                : 'BEISPIEL-ERGEBNIS AUS STUFE 3 (QUALITATIVE EINSCHÄTZUNG – OHNE ERFUNDENE ZAHLEN)'}
            </span>
          </div>

          <div className="overflow-x-auto border border-sbb-aluminum">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-sbb-cloud border-b border-sbb-aluminum font-mono text-[10px] uppercase text-zinc-700">
                  <th className="p-3">{isEn ? 'Channel / Topic Area' : 'Kanal / Themenfeld'}</th>
                  <th className="p-3">{isEn ? 'Message Pull-Through' : 'Botschafts-Durchdringung'}</th>
                  <th className="p-3">{isEn ? 'Where Work Is Needed' : 'Wo Handlungsbedarf besteht'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200 bg-white">
                <tr>
                  <td className="p-3 font-bold text-sbb-black">
                    {isEn ? 'Central Owned Strategy Pages' : 'Zentrale Strategie-Seiten'}
                  </td>
                  <td className="p-3">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-emerald-50 border border-emerald-300 font-mono text-[10px] font-bold text-emerald-900">
                      <CheckCircle2 className="w-3 h-3 shrink-0" />
                      {isEn ? 'Core Facts Present' : 'Kernfakten vorhanden'}
                    </span>
                  </td>
                  <td className="p-3 text-zinc-700">
                    {isEn
                      ? 'Move key facts higher so AI sub-queries don’t grab vague opening paragraphs.'
                      : 'Kernfakten weiter nach oben ziehen, damit KI-Teilabfragen nicht bei vagen Einleitungen stoppen.'}
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-sbb-black">
                    {isEn ? 'Regional & Cantonal Briefings / Archived PDFs' : 'Regionale / Kantonale Briefings & Alt-PDFs'}
                  </td>
                  <td className="p-3">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-red-50 border border-red-300 font-mono text-[10px] font-bold text-sbb-red">
                      <AlertTriangle className="w-3 h-3 shrink-0" />
                      {isEn ? 'Discrepancy Detected' : 'Abweichung erkannt'}
                    </span>
                  </td>
                  <td className="p-3 text-zinc-700">
                    {isEn
                      ? 'Older regional PDF conflicts with current global narrative in AI search answers.'
                      : 'Älteres regionales PDF widerspricht dem aktuellen globalen Narrativ in KI-Antworten.'}
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-sbb-black">
                    {isEn ? 'Earned Media & Trade Coverage' : 'Earned Media & Fachpresse'}
                  </td>
                  <td className="p-3">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-amber-50 border border-amber-300 font-mono text-[10px] font-bold text-amber-900">
                      {isEn ? 'Partial Pull-Through' : 'Teilweise Durchdringung'}
                    </span>
                  </td>
                  <td className="p-3 text-zinc-700">
                    {isEn
                      ? 'Media quotes global investment figures well, but omits regional context—needs tailored briefing inputs.'
                      : 'Medien zitieren globale Investitionen, lassen aber regionalen Kontext weg – braucht zugeschnittene Briefing-Inputs.'}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
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
              ? 'Therefore: 02 Top-Down GEO & Context Tailoring'
              : 'Deshalb: 02 Top-Down GEO & Kontext-Anpassung'}
          </span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};

export default NarrativeCockpitView;
