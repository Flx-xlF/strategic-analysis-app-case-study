import React, { useState } from 'react';
import { Language } from '../../fixtures/scenarios';
import { ActiveTab } from '../common/CommandHeader';
import {
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
      audienceEn: string;
      audienceDe: string;
      copyPasteFailEn: string;
      copyPasteFailDe: string;
      tailoredEn: string;
      tailoredDe: string;
      coreAnchorEn: string;
      coreAnchorDe: string;
    }
  > = {
    earned: {
      labelEn: '1. Earned Media Response',
      labelDe: '1. Earned Media / Presseantwort',
      audienceEn: 'Journalists and editors looking for direct, quotable answers under tight deadlines.',
      audienceDe: 'Journalistinnen und Redaktionen, die unter Zeitdruck direkte, zitierbare Fakten suchen.',
      copyPasteFailEn:
        '«We are committed to driving sustainable value across our integrated global portfolio while staying agile for stakeholders.» (Sounds like generic boilerplate—journalists ignore it or paraphrase skeptically.)',
      copyPasteFailDe:
        '«Wir setzen uns für nachhaltige Wertschöpfung in unserem integrierten globalen Portfolio ein und bleiben agil für Stakeholder.» (Klingt nach Standard-Floskel – Redaktionen ignorieren es.)',
      tailoredEn:
        '«Global capacity investments expand supply resilience, while core governance, strategic leadership, and long-term commitments at existing regional hubs remain unchanged.»',
      tailoredDe:
        '«Globale Kapazitätsinvestitionen stärken die Versorgungssicherheit, während zentrale Governance, strategische Führung und bestehende regionale Verpflichtungen unverändert bleiben.»',
      coreAnchorEn: 'Core fact intact, phrased concisely for press citation.',
      coreAnchorDe: 'Kernfakt bleibt identisch, prägnant formuliert als Pressestatements.'
    },
    owned: {
      labelEn: '2. Owned Corporate Story',
      labelDe: '2. Owned Corporate Story',
      audienceEn: 'Stakeholders, candidates, partners, and AI search crawlers reading full corporate web pages.',
      audienceDe: 'Stakeholder, Bewerbende, Partner und KI-Suchsysteme auf eigenen Unternehmensseiten.',
      copyPasteFailEn:
        'Pasting a short press quote verbatim without narrative context leaves readers wondering how global growth connects to local innovation.',
      copyPasteFailDe:
        'Ein reines Copy-Paste eines kurzen Pressezitats ohne Kontext erklärt nicht, wie globales Wachstum und lokale Innovation zusammenhängen.',
      tailoredEn:
        'Opens with a clear factual summary block (for immediate clarity and AI search extraction), followed by an editorial story showing how global scale and regional hubs reinforce each other.',
      tailoredDe:
        'Startet mit einer klaren Fakten-Zusammenfassung (für Leser und KI-Suche) und entfaltet dann die Geschichte, wie globale Grösse und regionale Standorte zusammenspielen.',
      coreAnchorEn: 'Core fact intact, wrapped in an engaging editorial story with clear structure.',
      coreAnchorDe: 'Kernfakt bleibt identisch, eingebettet in eine gut strukturierte Story.'
    },
    regional: {
      labelEn: '3. Regional / Cantonal Briefing',
      labelDe: '3. Regionales / Kantonales Briefing',
      audienceEn: 'Cantonal authorities, local industry partners, and regional teams addressing local priorities.',
      audienceDe: 'Kantonale Behörden, lokale Partner und regionale Teams mit konkreten Standortfragen.',
      copyPasteFailEn:
        'Pasting global HQ talking points without addressing regional workforce, infrastructure, or regulatory context feels disconnected from local reality.',
      copyPasteFailDe:
        'Globale Standardtextbausteine ohne Bezug zu lokalen Arbeitsplätzen oder Rahmenbedingungen wirken an der Realität vor Ort vorbei.',
      tailoredEn:
        'Translates the global commitment into concrete regional relevance—addressing local collaboration and site continuity directly while matching the exact global facts.',
      tailoredDe:
        'Übersetzt die globale Zusage in konkreten regionalen Bezug – geht direkt auf lokale Zusammenarbeit und Standortkontinuität ein, exakt abgestimmt mit den globalen Fakten.',
      coreAnchorEn: 'Core fact intact, adapted organically to regional and cantonal context.',
      coreAnchorDe: 'Kernfakt bleibt identisch, organisch an den regionalen Kontext angepasst.'
    }
  };

  const activeCtx = contexts[selectedContext];

  const geoPrinciples = [
    {
      titleEn: '1. Answer-First Structure',
      titleDe: '1. Kernaussage zuerst (Answer-First)',
      ruleEn:
        'AI sub-queries often pull only the opening lines of a page. Put the main conclusion and verified facts at the very top instead of hiding them after a long warm-up.',
      ruleDe:
        'KI-Teilabfragen ziehen oft nur die ersten Sätze einer Seite. Stellen Sie Schlussfolgerung und harte Fakten an den Anfang statt nach einer langen Einleitung.',
      badEn:
        '«In an increasingly dynamic global environment, our organization continuously evaluates long-term opportunities to serve communities better across regions. Against this backdrop, regional operations remain an important pillar...»',
      badDe:
        '«In einem zunehmend dynamischen globalen Umfeld prüft unsere Organisation laufend langfristige Chancen. Vor diesem Hintergrund bleiben regionale Standorte ein wichtiger Pfeiler...»',
      goodEn:
        '«Global manufacturing investments expand international capacity while headquarters, core governance, and regional R&D commitments remain anchored in place.»',
      goodDe:
        '«Globale Investitionen bauen internationale Kapazitäten aus, während Hauptsitz, zentrale Steuerung und regionale F&E-Zusagen fest verankert bleiben.»'
    },
    {
      titleEn: '2. Self-Contained Passages',
      titleDe: '2. Eigenständige Textabschnitte',
      ruleEn:
        'An AI engine pulls individual paragraphs into its context window without surrounding context. Avoid vague pronouns ("this", "there") so every key paragraph makes sense on its own.',
      ruleDe:
        'KI-Systeme ziehen einzelne Absätze ohne den umgebenden Text ins Kontextfenster. Vermeiden Sie vage Verweise («dies», «dort»), damit jeder Schlüsselabsatz allein verständlich ist.',
      badEn:
        '«As noted above, this will continue over the coming years and supports those teams in the same way.»',
      badDe:
        '«Wie oben erwähnt, wird dies in den nächsten Jahren fortgeführt und unterstützt diese Teams auf gleiche Weise.»',
      goodEn:
        '«The 2026–2030 Global Expansion Program adds new international production lines while keeping existing regional research hubs fully staffed and operational.»',
      goodDe:
        '«Das globale Ausbauprogramm 2026–2030 ergänzt internationale Produktionslinien, während bestehende regionale Forschungsstandorte voll besetzt und aktiv bleiben.»'
    },
    {
      titleEn: '3. Consistent Facts, Organic Voice',
      titleDe: '3. Konsistente Fakten, natürlicher Ton',
      ruleEn:
        'GEO does not require copying identical wording everywhere. Keep core facts, timelines, and commitments consistent across teams while letting tone match the channel naturally.',
      ruleDe:
        'GEO verlangt kein wortgleiches Copy-Paste. Halten Sie Kernfakten, Zeitpläne und Zusagen über alle Teams konsistent, während der Ton zum Kanal passt.',
      badEn:
        'Global website says "new sites start in Q2", while a regional briefing says "timeline under review", creating an apparent contradiction in AI answers.',
      badDe:
        'Globale Website nennt «Start in Q2», während ein regionales Briefing «Zeitplan in Prüfung» sagt – KI-Antworten melden einen Widerspruch.',
      goodEn:
        'All channels align on the same core timeline and scope, while the press note stays concise, the corporate story explains why it matters, and regional briefings focus on local impact.',
      goodDe:
        'Alle Kanäle nennen denselben Zeitrahmen und Umfang – die Medienmitteilung bleibt knapp, die Corporate Story erklärt den Nutzen, das Regional-Briefing den lokalen Effekt.'
    },
    {
      titleEn: '4. Direct, Affirmative Framing',
      titleDe: '4. Direkt & positiv formulieren',
      ruleEn:
        'When Outside-In monitoring flags a misunderstanding or rumour, lead with clear, affirmative facts about what the company does—instead of repeating the negative claim just to deny it.',
      ruleDe:
        'Wenn Outside-In ein Missverständnis erkennt, beginnen Sie mit klaren, positiven Fakten darüber, was das Unternehmen tut – statt die Unterstellung zur Verneinung zu wiederholen.',
      badEn:
        '«We are not abandoning European operations or cutting regional commitments.» (Search indexing still links the company name closely to "abandoning" and "cutting".)',
      badDe:
        '«Wir geben europäische Standorte nicht auf und bauen regionale Zusagen nicht ab.» (Suchsysteme verknüpfen den Namen trotzdem mit «aufgeben» und «abbauen».)',
      goodEn:
        '«European R&D hubs and regional operations remain a core part of our long-term strategy alongside international capacity growth.»',
      goodDe:
        '«Europäische F&E-Standorte und regionale Aktivitäten bleiben neben dem internationalen Ausbau ein fester Kern unserer Langfriststrategie.»'
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
            ? 'Consistent narratives without copy-paste—plus plain-English GEO standards'
            : 'Konsistente Narrative ohne stures Copy-Paste – plus verständliche GEO-Standards'}
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
              ? 'Switch between the 3 target channels below to see how one centrally administered narrative adapts organically to different audiences.'
              : 'Wechseln Sie zwischen den 3 Zielkanälen, um zu sehen, wie sich ein zentrales Narrativ organisch an unterschiedliche Zielgruppen anpasst.'}
          </p>
        </div>

        {/* Central Core Anchor */}
        <div className="p-3.5 bg-sbb-cloud border-l-4 border-sbb-red border border-zinc-300 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
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

        {/* 3 Target Context Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {(Object.keys(contexts) as TargetContext[]).map(ctxId => {
            const ctx = contexts[ctxId];
            const isActive = selectedContext === ctxId;
            return (
              <button
                key={ctxId}
                type="button"
                onClick={() => setSelectedContext(ctxId)}
                className={`p-3 border text-left font-mono text-xs font-bold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-emerald-800 text-white border-emerald-900'
                    : 'bg-sbb-cloud text-zinc-800 border-sbb-aluminum hover:bg-white hover:border-sbb-black'
                }`}
              >
                {isEn ? ctx.labelEn : ctx.labelDe}
              </button>
            );
          })}
        </div>

        {/* Side-by-side Comparison */}
        <div className="space-y-3">
          <div className="text-xs text-zinc-700 bg-[#F8F8F9] p-3 border border-zinc-200">
            <strong className="text-sbb-black uppercase font-mono text-[10px] mr-2">
              {isEn ? 'Target Audience & Context:' : 'Zielgruppe & Kontext:'}
            </strong>
            {isEn ? activeCtx.audienceEn : activeCtx.audienceDe}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="p-4 bg-red-50/40 border border-red-300 space-y-2">
              <div className="font-mono text-[11px] font-bold uppercase text-sbb-red flex items-center gap-1.5">
                <XCircle className="w-4 h-4 shrink-0" />
                <span>{isEn ? 'Robotic Copy-Paste (Fails in Context)' : 'Stures Copy-Paste (Scheitert im Kontext)'}</span>
              </div>
              <p className="text-xs sm:text-sm text-red-950 leading-relaxed">
                {isEn ? activeCtx.copyPasteFailEn : activeCtx.copyPasteFailDe}
              </p>
            </div>

            <div className="p-4 bg-emerald-50/40 border-2 border-emerald-700 space-y-2">
              <div className="font-mono text-[11px] font-bold uppercase text-emerald-900 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-700" />
                <span>{isEn ? 'AI Context-Tailored Narrative (Aligned Core)' : 'KI-Kontext-Anpassung (Konsistenter Kern)'}</span>
              </div>
              <p className="text-xs sm:text-sm text-emerald-950 leading-relaxed font-medium">
                {isEn ? activeCtx.tailoredEn : activeCtx.tailoredDe}
              </p>
              <div className="pt-2 border-t border-emerald-200 font-mono text-[11px] text-emerald-900 font-bold">
                ● {isEn ? activeCtx.coreAnchorEn : activeCtx.coreAnchorDe}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══ PART B: 4 PRACTICAL GEO BEST PRACTICES FOR NON-TECHIES ═══ */}
      <div className="bg-white border border-sbb-aluminum p-5 sm:p-7 space-y-5 shadow-xs">
        <div className="space-y-2 pb-4 border-b border-zinc-200">
          <div className="font-mono text-xs font-black uppercase text-sbb-black flex items-center gap-1.5">
            <Layers className="w-4 h-4 text-sbb-red" />
            <span>
              {isEn
                ? 'PART B // 4 PRACTICAL GEO BEST PRACTICES (EXPLAINED WITHOUT JARGON)'
                : 'TEIL B // 4 PRAXISNAHE GEO-REGELN (OHNE FACHCHINESISCH)'}
            </span>
          </div>
          <p className="text-xs sm:text-sm text-zinc-700">
            {isEn
              ? 'GEO (Generative Engine Optimization) isn’t about technical tricks—it’s about writing clear, structured facts so AI tools can accurately quote what you meant.'
              : 'Bei GEO (Generative Engine Optimization) geht es nicht um Technik-Tricks, sondern um klar strukturierte Fakten, damit KI-Tools Ihre Aussage korrekt zitieren.'}
          </p>
        </div>

        {/* 4 Rule Selector Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
          {geoPrinciples.map((p, idx) => {
            const isActive = selectedPrinciple === idx;
            return (
              <button
                key={p.titleEn}
                type="button"
                onClick={() => setSelectedPrinciple(idx as GeoPrincipleIndex)}
                className={`p-3 border text-left font-mono text-xs font-bold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-sbb-black text-[#FFCC00] border-sbb-black'
                    : 'bg-sbb-cloud text-zinc-800 border-sbb-aluminum hover:bg-white hover:border-sbb-black'
                }`}
              >
                {isEn ? p.titleEn : p.titleDe}
              </button>
            );
          })}
        </div>

        {/* Rule Explanation + Before / After Passages */}
        <div className="space-y-4">
          <div className="p-3.5 bg-amber-50/70 border-l-4 border-[#FFCC00] border border-amber-200 text-xs sm:text-sm text-zinc-900 leading-relaxed">
            <strong>{isEn ? 'Why this matters: ' : 'Warum das wichtig ist: '}</strong>
            {isEn ? activePrinciple.ruleEn : activePrinciple.ruleDe}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="p-4 bg-red-50/40 border border-red-300 space-y-2">
              <div className="font-mono text-[11px] font-bold uppercase text-sbb-red flex items-center gap-1.5">
                <XCircle className="w-4 h-4 shrink-0" />
                <span>{isEn ? 'Unstructured Draft (Loses Pull-Through)' : 'Unstrukturierter Entwurf (Verliert Wirkung)'}</span>
              </div>
              <p className="text-xs sm:text-sm text-red-950 leading-relaxed">
                {isEn ? activePrinciple.badEn : activePrinciple.badDe}
              </p>
            </div>

            <div className="p-4 bg-emerald-50/40 border-2 border-emerald-700 space-y-2">
              <div className="font-mono text-[11px] font-bold uppercase text-emerald-900 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-700" />
                <span>{isEn ? 'GEO-Structured Draft (Clear for AI Search)' : 'GEO-strukturierter Entwurf (Klar für KI-Suche)'}</span>
              </div>
              <p className="text-xs sm:text-sm text-emerald-950 leading-relaxed font-medium">
                {isEn ? activePrinciple.goodEn : activePrinciple.goodDe}
              </p>
            </div>
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
              ? 'Therefore: 03 Office Recipes & Human Role'
              : 'Deshalb: 03 Office-Rezepte & Rolle des Menschen'}
          </span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};

export default GeoAuditView;
