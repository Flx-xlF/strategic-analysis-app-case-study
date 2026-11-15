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
    }
  > = {
    earned: {
      labelEn: '1. Earned Media',
      labelDe: '1. Earned Media (Presse)',
      subQueryLabelEn: 'Sub-Query 1: Press coverage',
      subQueryLabelDe: 'Teilabfrage 1: Presseberichte',
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
        'Wird dieses Zitat ohne Kontext neben einem regionalen Briefing geladen, folgern KI-Systeme oft eine Verlagerung weg vom Heimatstandort.',
      answerClauseEn: '«The company confirmed major international manufacturing expansion',
      answerClauseDe: '«Das Unternehmen bestätigte einen grossen Ausbau internationaler Produktionskapazitäten,',
      answerRoleEn:
        'Contribution from 1. Earned Media: Anchors the opening sentence with global expansion figures—setting up a contrast if local context is missing.',
      answerRoleDe:
        'Beitrag aus 1. Earned Media: Prägt den Einstiegssatz mit globalen Ausbauzahlen – was ohne lokalen Kontext einen Kontrast erzeugt.'
    },
    owned: {
      labelEn: '2. Owned Stories & Pages',
      labelDe: '2. Owned Stories & Seiten',
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
        'Beitrag aus 2. Owned Stories & Pages: Liefert nur die vage Formulierung «agile globale Aufstellung» – zu unkonkret, um lokale Zusagen zu verankern.'
    },
    regional: {
      labelEn: '3. Regional / Cantonal & Legacy Files',
      labelDe: '3. Regionale Briefings & Altdateien',
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
        'Beitrag aus 3. Regionale Briefings & Altdateien: Bringt den «Gleichzeitig…»-Widerspruch direkt aus einem veralteten PDF von 2022 in die Antwort.'
    },
    forums: {
      labelEn: '4. Online Forums',
      labelDe: '4. Online-Foren',
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
        'Beitrag aus 4. Online-Foren: Schliesst die KI-Antwort mit Foren-Spekulationen ab, die durch die Lücke zwischen Presse und Alt-PDF entstanden sind.'
    }
  };

  const activeChannel = channels[selectedChannel];

  const stages: {
    num: PipelineStage;
    titleEn: string;
    titleDe: string;
    tools: string;
    summaryEn: string;
    summaryDe: string;
    inputEn: string;
    inputDe: string;
    processEn: string;
    processDe: string;
    outputEn: string;
    outputDe: string;
  }[] = [
    {
      num: 1,
      titleEn: '1. External Feeds & Public LLM APIs',
      titleDe: '1. Externe Feeds & öffentliche LLM-APIs',
      tools: 'Factiva, Meltwater, Talkwalker + Public LLM APIs',
      summaryEn:
        'Ingests continuous article streams across press, trade media, and social discussions, alongside repeated queries to public LLM APIs.',
      summaryDe:
        'Erfasst laufende Artikelströme aus Presse, Fachmedien und Social-Diskussionen sowie wiederholte Abfragen über öffentliche LLM-APIs.',
      inputEn:
        'Continuous licensed news wires, trade articles, social threads (via Factiva, Meltwater, Talkwalker) plus live responses from public LLM APIs.',
      inputDe:
        'Laufende lizenzierte Nachrichtenströme, Fachartikel, Social-Threads (über Factiva, Meltwater, Talkwalker) sowie Antworten öffentlicher LLM-APIs.',
      processEn:
        'Connects directly to enterprise feed agreements already in place—never a standalone "shadow IT" scraper.',
      processDe:
        'Nutzt direkt bestehende lizenzierte Unternehmens-Feeds und API-Zugänge – kein isoliertes «Shadow-IT»-Scraping.',
      outputEn:
        'Huge, unstructured raw text streams covering what media, forums, and AI answer engines are currently saying across regions.',
      outputDe:
        'Grosse, unstrukturierte Rohdatenströme darüber, was Medien, Foren und KI-Suchmaschinen über Regionen hinweg aktuell wiedergeben.'
    },
    {
      num: 2,
      titleEn: '2. Digestion Into Structured Data',
      titleDe: '2. Aufbereitung in strukturierte Daten',
      tools: isEn ? 'Stream Normalization & Tagging' : 'Normalisierung & Strukturierung',
      summaryEn:
        'Transforms huge raw article and answer volumes into clean, structured records by topic, channel, region, and narrative claim.',
      summaryDe:
        'Überführt enorme Rohdatenmengen aus Artikeln und KI-Antworten in strukturierte Datensätze nach Thema, Kanal, Region und Kernaussage.',
      inputEn:
        'Massive daily volumes of raw articles, forum threads, and multi-query LLM responses that are impossible to inspect manually or dump straight into an LLM.',
      inputDe:
        'Riesige tägliche Mengen an Rohartikeln, Forenbeiträgen und LLM-Antworten, die sich weder manuell lesen noch roh in ein LLM geben lassen.',
      processEn:
        'Digests and transforms raw text into clean, structured records—tagging source channel, region/canton, topic, and cited company claims.',
      processDe:
        'Verdichtet Rohtexte in strukturierte Datensätze – mit sauberer Zuordnung nach Quellkanal, Region/Kanton, Thema und zitierten Aussagen.',
      outputEn:
        'Structured dataset ready for both statistical aggregation and targeted LLM inspection (Example record: Region = CH / Source = Legacy PDF / Topic = Footprint).',
      outputDe:
        'Strukturierter Datensatz für Statistik und gezielte LLM-Prüfung (Beispieldatensatz: Region = CH / Quelle = Alt-PDF / Thema = Standort).'
    },
    {
      num: 3,
      titleEn: '3. Statistical & LLM Processing',
      titleDe: '3. Statistische & LLM-Auswertung',
      tools: isEn ? 'Pull-Through & Gap Identification' : 'Durchdringung & Handlungsbedarf',
      summaryEn:
        'Combines statistical filtering with LLM analysis to show where narratives come through and where work needs to be done.',
      summaryDe:
        'Kombiniert statistische Auswertung mit LLM-Analyse, um zu zeigen, wo Botschaften durchdringen und wo Handlungsbedarf besteht.',
      inputEn:
        'Structured records from Stage 2 paired with the company’s centrally defined core narratives.',
      inputDe:
        'Strukturierte Datensätze aus Stufe 2 abgeglichen mit den zentral definierten Kern-Narrativen des Unternehmens.',
      processEn:
        'Statistical processing spots shifts and recurring patterns across the huge volume; LLMs check whether key messages actually come through or get distorted by missing context.',
      processDe:
        'Statistik erkennt Verschiebungen und Häufungen im Gesamtvolumen; LLMs prüfen, ob Kernbotschaften durchdringen oder durch fehlenden Kontext verzerrt werden.',
      outputEn:
        'Clear qualitative map showing teams exactly where narratives hold—and where discrepancies need Top-Down action.',
      outputDe:
        'Klare qualitative Übersicht, wo Narrative tragen – und wo Abweichungen gezielte Top-Down-Arbeit erfordern.'
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

        {/* Question Strip */}
        <div className="p-4 bg-sbb-cloud border border-sbb-black space-y-2">
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

        {/* Unified 4-Channel & Sub-Query Selector Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
          {(Object.keys(channels) as ChannelId[]).map(chId => {
            const ch = channels[chId];
            const isActive = selectedChannel === chId;
            return (
              <button
                key={chId}
                type="button"
                onClick={() => setSelectedChannel(chId)}
                className={`p-3 border text-left transition-all cursor-pointer flex flex-col gap-1 ${
                  isActive
                    ? 'bg-sbb-black text-white border-sbb-black'
                    : 'bg-sbb-cloud text-zinc-800 border-sbb-aluminum hover:bg-white hover:border-sbb-black'
                }`}
              >
                <div className="flex items-center gap-2 font-mono text-xs font-bold">
                  <span className={isActive ? 'text-[#FFCC00]' : 'text-sbb-red'}>{ch.icon}</span>
                  <span className="leading-snug">{isEn ? ch.labelEn : ch.labelDe}</span>
                </div>
                <span className={`font-mono text-[10px] pl-5.5 ${isActive ? 'text-[#FFCC00]' : 'text-zinc-500'}`}>
                  {isEn ? ch.subQueryLabelEn : ch.subQueryLabelDe}
                </span>
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

        {/* Combined AI Answer Synthesis Box (Dynamically Highlights Selected Channel) */}
        <div className="p-4 sm:p-5 bg-red-50/50 border-2 border-sbb-red space-y-2.5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="font-mono text-[11px] font-black uppercase text-sbb-red flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4 shrink-0" />
              <span>
                {isEn
                  ? 'COMBINED AI ANSWER ENGINE OUTPUT (ACTIVE CHANNEL HIGHLIGHTED)'
                  : 'KOMBINIERTE KI-ANTWORT (AKTIVER KANAL HERVORGEHOBEN)'}
              </span>
            </span>
          </div>
          <p className="text-xs sm:text-sm leading-relaxed">
            {(['earned', 'owned', 'regional', 'forums'] as ChannelId[]).map((chId, idx) => {
              const ch = channels[chId];
              const isSelected = chId === selectedChannel;
              return (
                <React.Fragment key={chId}>
                  {idx > 0 && ' '}
                  <button
                    type="button"
                    onClick={() => setSelectedChannel(chId)}
                    className={`inline text-left transition-colors cursor-pointer ${
                      isSelected
                        ? 'bg-sbb-red text-white px-1.5 py-0.5 font-bold'
                        : 'text-zinc-600 hover:text-sbb-black font-medium'
                    }`}
                  >
                    {isEn ? ch.answerClauseEn : ch.answerClauseDe}
                  </button>
                </React.Fragment>
              );
            })}
          </p>
          <p className="text-[11px] font-mono text-red-950 pt-2 border-t border-red-200 font-bold">
            {isEn ? activeChannel.answerRoleEn : activeChannel.answerRoleDe}
          </p>
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
              ? 'Click any stage in the pipeline to inspect its exact input, processing mechanism, and output.'
              : 'Klicken Sie auf eine Stufe, um Eingangsdaten, Verarbeitung und konkretes Ergebnis zu prüfen.'}
          </p>
        </div>

        {/* 3 Crisp Pipeline Stage Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {stages.map(stage => {
            const isActive = activeStage === stage.num;
            return (
              <button
                key={stage.num}
                type="button"
                onClick={() => setActiveStage(stage.num)}
                className={`p-3.5 border-2 text-left transition-all cursor-pointer flex flex-col justify-center gap-1 ${
                  isActive
                    ? 'border-sbb-red bg-red-50/40'
                    : 'border-sbb-aluminum bg-sbb-cloud/60 hover:border-sbb-black hover:bg-white'
                }`}
              >
                <div className={`font-mono text-xs font-black uppercase ${isActive ? 'text-sbb-red' : 'text-sbb-black'}`}>
                  {isEn ? stage.titleEn : stage.titleDe}
                </div>
                <div className="font-mono text-[10px] font-bold text-zinc-600">{stage.tools}</div>
              </button>
            );
          })}
        </div>

        {/* Selected Stage 3-Column Input -> Process -> Output Breakdown */}
        <div className="p-4 sm:p-5 bg-sbb-black text-white border-l-4 border-[#FFCC00]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="p-3 bg-zinc-900 border border-zinc-700 space-y-1">
              <div className="font-mono text-[10px] font-bold uppercase text-zinc-400">
                {isEn ? '1. What Enters (Input)' : '1. Eingang (Input)'}
              </div>
              <p className="text-xs text-zinc-100 leading-relaxed">
                {isEn ? currentStage.inputEn : currentStage.inputDe}
              </p>
            </div>

            <div className="p-3 bg-zinc-900 border border-zinc-700 space-y-1">
              <div className="font-mono text-[10px] font-bold uppercase text-[#FFCC00]">
                {isEn ? '2. How It Works (Process)' : '2. Verarbeitung (Prozess)'}
              </div>
              <p className="text-xs text-zinc-100 leading-relaxed">
                {isEn ? currentStage.processEn : currentStage.processDe}
              </p>
            </div>

            <div className="p-3 bg-zinc-900 border border-zinc-700 space-y-1">
              <div className="font-mono text-[10px] font-bold uppercase text-emerald-400">
                {isEn ? '3. Result (Output)' : '3. Ergebnis (Output)'}
              </div>
              <p className="text-xs text-zinc-100 leading-relaxed">
                {isEn ? currentStage.outputEn : currentStage.outputDe}
              </p>
            </div>
          </div>
        </div>

        {/* Stage-Specific Data Artifact Table */}
        <div className="space-y-2 pt-2">
          <div className="font-mono text-[11px] font-bold uppercase tracking-wider text-zinc-600 flex items-center gap-1.5">
            <BarChart3 className="w-3.5 h-3.5 text-sbb-red" />
            <span>
              {activeStage === 1 &&
                (isEn
                  ? 'SAMPLE STAGE 1 ARTIFACT: RAW UNSTRUCTURED FEED & API STREAM'
                  : 'BEISPIEL-ERGEBNIS STUFE 1: ROHER UNSTRUKTURIERTER FEED- & API-STROM')}
              {activeStage === 2 &&
                (isEn
                  ? 'SAMPLE STAGE 2 ARTIFACT: NORMALIZED & TAGGED STRUCTURED RECORDS'
                  : 'BEISPIEL-ERGEBNIS STUFE 2: NORMALISIERTE & GETAGGTE DATENSÄTZE')}
              {activeStage === 3 &&
                (isEn
                  ? 'SAMPLE STAGE 3 ARTIFACT: QUALITATIVE PULL-THROUGH & ACTION MAP'
                  : 'BEISPIEL-ERGEBNIS STUFE 3: QUALITATIVE DURCHDRINGUNG & HANDLUNGSBEDARF')}
            </span>
          </div>

          <div className="overflow-x-auto border border-sbb-aluminum">
            {activeStage === 1 && (
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-sbb-cloud border-b border-sbb-aluminum font-mono text-[10px] uppercase text-zinc-700">
                    <th className="p-3">{isEn ? 'Source Stream' : 'Quellstrom'}</th>
                    <th className="p-3">{isEn ? 'Raw Unstructured Excerpt' : 'Roher Textauszug'}</th>
                    <th className="p-3">{isEn ? 'Why Raw Streams Need Stage 2' : 'Warum Stufe 2 nötig ist'}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200 bg-white">
                  <tr>
                    <td className="p-3 font-bold text-sbb-black">Factiva / Meltwater Wire</td>
                    <td className="p-3 text-zinc-700 italic">
                      {isEn
                        ? '«...confirmed major expansion investments in international manufacturing capacity over the next five years...»'
                        : '«...bestätigte umfangreiche Erweiterungsinvestitionen in internationale Produktionskapazitäten über die nächsten fünf Jahre...»'}
                    </td>
                    <td className="p-3 text-zinc-700">
                      {isEn
                        ? 'Arrives as thousands of untagged articles mixed with routine market noise.'
                        : 'Trifft als Tausende ungetaggte Artikel im allgemeinen Nachrichtenrauschen ein.'}
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-sbb-black">Public LLM API Response</td>
                    <td className="p-3 text-zinc-700 italic">
                      {isEn
                        ? '«...expansion abroad... while a 2022 regional PDF references ongoing European site consolidation reviews...»'
                        : '«...Ausbau im Ausland... während ein regionales PDF von 2022 laufende Standortprüfungen erwähnt...»'}
                    </td>
                    <td className="p-3 text-zinc-700">
                      {isEn
                        ? 'Combines multiple sources in prose without separating which claim came from which channel.'
                        : 'Mischt mehrere Quellen im Fliesstext, ohne Herkunft und Aktualität sauber zu trennen.'}
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-sbb-black">Talkwalker / Forum Stream</td>
                    <td className="p-3 text-zinc-700 italic">
                      {isEn
                        ? '«Why does the global release highlight expansion while the local PDF talks about site reviews?»'
                        : '«Warum spricht die globale Mitteilung von Ausbau, während ein lokales PDF Standortprüfungen nennt?»'}
                    </td>
                    <td className="p-3 text-zinc-700">
                      {isEn
                        ? 'Raw comments lack regional tagging and claim linkage until normalized.'
                        : 'Rohkommentare haben ohne Aufbereitung weder Regions-Tag noch Bezug zur Kernaussage.'}
                    </td>
                  </tr>
                </tbody>
              </table>
            )}

            {activeStage === 2 && (
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-sbb-cloud border-b border-sbb-aluminum font-mono text-[10px] uppercase text-zinc-700">
                    <th className="p-3">{isEn ? 'Record Source & Date' : 'Quelle & Stand'}</th>
                    <th className="p-3">{isEn ? 'Tagged Topic & Region' : 'Thema & Region'}</th>
                    <th className="p-3">{isEn ? 'Extracted Claim & Status' : 'Extrahierte Aussage & Status'}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200 bg-white">
                  <tr>
                    <td className="p-3 font-bold text-sbb-black">
                      {isEn ? 'Global Press Wire (Current)' : 'Globale Presse-Meldung (Aktuell)'}
                    </td>
                    <td className="p-3 font-mono text-[11px] text-zinc-700">
                      {isEn ? 'Topic: Capacity · Scope: Global' : 'Thema: Kapazität · Raum: Global'}
                    </td>
                    <td className="p-3">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-emerald-50 border border-emerald-300 font-mono text-[10px] font-bold text-emerald-900 mr-2">
                        {isEn ? 'Current Global Narrative' : 'Aktuelles globales Narrativ'}
                      </span>
                      <span className="text-zinc-700">
                        {isEn ? 'International capacity expansion' : 'Internationaler Kapazitätsausbau'}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-sbb-black">
                      {isEn ? 'Regional Briefing PDF (Indexed 2022)' : 'Regionales Briefing-PDF (Stand 2022)'}
                    </td>
                    <td className="p-3 font-mono text-[11px] text-zinc-700">
                      {isEn ? 'Topic: Site Footprint · Region: Europe' : 'Thema: Standort · Region: Europa'}
                    </td>
                    <td className="p-3">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-red-50 border border-red-300 font-mono text-[10px] font-bold text-sbb-red mr-2">
                        {isEn ? 'Outdated Legacy File' : 'Veraltete Altdatei'}
                      </span>
                      <span className="text-zinc-700">
                        {isEn ? 'References ongoing site consolidation review' : 'Nennt laufende Standortkonsolidierung'}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-sbb-black">
                      {isEn ? 'Forum Thread + LLM Answer (Current)' : 'Foren-Thread + KI-Antwort (Aktuell)'}
                    </td>
                    <td className="p-3 font-mono text-[11px] text-zinc-700">
                      {isEn ? 'Topic: Local Hub · Region: Cantonal' : 'Thema: Lokalstandort · Region: Kantonal'}
                    </td>
                    <td className="p-3">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-amber-50 border border-amber-300 font-mono text-[10px] font-bold text-amber-900 mr-2">
                        {isEn ? 'Cross-Channel Contradiction' : 'Kanal-Widerspruch'}
                      </span>
                      <span className="text-zinc-700">
                        {isEn ? 'Questions local commitment continuity' : 'Stellt lokale Verankerung infrage'}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            )}

            {activeStage === 3 && (
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
            )}
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
