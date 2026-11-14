import React, { useEffect, useState } from 'react';
import { Language } from '../../fixtures/scenarios';
import {
  ArrowRight,
  BarChart3,
  BrainCircuit,
  CheckCircle2,
  FileWarning,
  HelpCircle,
  Lock,
  Pause,
  Play,
  RefreshCw,
  RotateCcw,
  ShieldCheck,
  Sparkles,
  Users
} from 'lucide-react';

interface Props {
  lang: Language;
  onEnterWorkspace: (tab?: 'cockpit' | 'geo' | 'trending' | 'cascade') => void;
  onOpenConceptModal: () => void;
}

interface BeatInfo {
  id: number;
  code: string;
  titleEn: string;
  titleDe: string;
  captionEn: string;
  captionDe: string;
}

const BEATS: BeatInfo[] = [
  {
    id: 0,
    code: '01',
    titleEn: 'The Blind Spot',
    titleDe: 'Das Problem',
    captionEn:
      'Teams publish press releases, website stories, local updates, and PDFs separately—but AI search merges all of them into one answer. Conflicting facts or forgotten old PDFs create visible contradictions.',
    captionDe:
      'Teams publizieren Medienmitteilungen, Webtexte, Länder-Posts und PDFs getrennt – doch die KI-Suche zieht alles in einer Antwort zusammen. Widersprüchliche Fakten oder vergessene Alt-PDFs erzeugen Fehler.'
  },
  {
    id: 1,
    code: '02',
    titleEn: 'Filter Noise With Math First',
    titleDe: 'Zuerst mit Statistik filtern',
    captionEn:
      'Instead of dumping 48,420 raw articles into an LLM, statistical filtering strips duplicate reprints (→ 19,110 unique) and catches sudden volume spikes (+3.9σ) even when sentiment tools say "76% Neutral."',
    captionDe:
      'Statt 48.420 Rohmeldungen direkt in eine KI zu geben, entfernt Statistik zuerst Agentur-Dubletten (→ 19.110) und erkennt plötzliche Themen-Spikes (+3.9σ), auch wenn Sentiment-Tools "76% Neutral" melden.'
  },
  {
    id: 2,
    code: '03',
    titleEn: 'Check What AI Search Actually Says',
    titleDe: 'Prüfen, was KI-Suche antwortet',
    captionEn:
      'Inspects the few representative articles behind a spike and tests real AI answers across repeated runs (n=20) to pinpoint exact factual mix-ups (48% distorted) before they spread.',
    captionDe:
      'Prüft die wenigen Kernartikel hinter einem Anstieg und testet echte KI-Antworten in wiederholten Läufen (n=20), um konkrete Faktenfehler (48% verzerrt) gezielt aufzudecken.'
  },
  {
    id: 3,
    code: '04',
    titleEn: 'People Lock Facts — Not Fixed Copy',
    titleDe: 'Menschen setzen Fakten – keine Einheits-Texte',
    captionEn:
      'Stats and AI only flag the gap; Comms and Legal set the position. They lock one shared set of verified facts, numbers, and names (GS-01–GS-03) and retire outdated PDFs—without forcing identical wording everywhere.',
    captionDe:
      'Statistik und KI zeigen nur das Risiko; Kommunikation und Recht entscheiden. Sie sichern zentrale Fakten, Zahlen und Namen (GS-01–GS-03) und schalten Alt-PDFs ab – ohne starre Einheits-Texte vorzuschreiben.'
  },
  {
    id: 4,
    code: '05',
    titleEn: '1-Click Recipes: Same Facts, Organic Local Voice',
    titleDe: '1-Klick-Rezepte: Gleiche Fakten, eigener Ton',
    captionEn:
      'Inside Outlook and Word (no 40-page PDF manuals), recipes anchor approved facts while AI adapts tone, length, and angle naturally per market and channel—protecting study accuracy (HR 0.41) and never hurting AI search.',
    captionDe:
      'Direkt in Outlook und Word (ohne 40-Seiten-PDF) verankern Rezepte geprüfte Fakten, während KI Tonalität, Länge und Blickwinkel natürlich an Markt und Kanal anpasst – ohne GEO-Nachteil.'
  },
  {
    id: 5,
    code: '06',
    titleEn: 'Stress-Test & Close the Loop',
    titleDe: 'Stresstest & Kreislauf schliessen',
    captionEn:
      'Drafts are stress-tested before release (Risk 9.1 → 2.6) so statements never repeat a critic’s accusation. Clear web pages go live—lifting future AI search accuracy to ~95%.',
    captionDe:
      'Entwürfe werden vor Freigabe getestet (Risiko 9.1 → 2.6), damit Zitate keine Vorwürfe wiederholen. Klare Webseiten gehen live – und heben künftige KI-Antworten auf ~95% Genauigkeit.'
  }
];

const BEAT_DURATION_MS = 12000;

interface FlowArrowProps {
  direction: 'right' | 'down';
  active: boolean;
  tone?: 'red' | 'emerald' | 'black';
}

const FlowArrow: React.FC<FlowArrowProps> = ({ direction, active, tone = 'black' }) => {
  const strokeColor =
    tone === 'red' ? '#EB0000' : tone === 'emerald' ? '#047857' : '#18181B';
  const mutedColor = '#D4D4D8';
  const color = active ? strokeColor : mutedColor;

  if (direction === 'down') {
    return (
      <div className="flex justify-center py-1">
        <svg width="28" height="34" viewBox="0 0 28 34" className="overflow-visible">
          <line
            x1="14"
            y1="2"
            x2="14"
            y2="28"
            stroke={color}
            strokeWidth={active ? 2.5 : 1.5}
            className={active ? 'animate-flow-dash' : ''}
          />
          <polygon points="9,24 19,24 14,32" fill={color} />
          {active && (
            <circle r="3.5" fill={strokeColor}>
              <animateMotion path="M 14 2 L 14 28" dur="1.1s" repeatCount="indefinite" />
            </circle>
          )}
        </svg>
      </div>
    );
  }

  return (
    <div className="hidden lg:flex items-center justify-center px-1">
      <svg width="56" height="24" viewBox="0 0 56 24" className="overflow-visible">
        <line
          x1="2"
          y1="12"
          x2="48"
          y2="12"
          stroke={color}
          strokeWidth={active ? 2.5 : 1.5}
          className={active ? 'animate-flow-dash' : ''}
        />
        <polygon points="44,7 54,12 44,17" fill={color} />
        {active && (
          <circle r="3.5" fill={strokeColor}>
            <animateMotion path="M 2 12 L 48 12" dur="1.1s" repeatCount="indefinite" />
          </circle>
        )}
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
  const [activeBeat, setActiveBeat] = useState<number | null>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    if (!isPlaying || activeBeat === null) {
      return;
    }

    const tickMs = 100;
    const step = (tickMs / BEAT_DURATION_MS) * 100;
    const timer = window.setInterval(() => {
      setProgress(prev => {
        if (prev + step >= 100) {
          setActiveBeat(curr => {
            if (curr === null) return 0;
            return (curr + 1) % BEATS.length;
          });
          return 0;
        }
        return prev + step;
      });
    }, tickMs);

    return () => window.clearInterval(timer);
  }, [isPlaying, activeBeat]);

  const selectBeat = (beatIndex: number | null) => {
    setIsPlaying(false);
    setProgress(0);
    setActiveBeat(beatIndex);
  };

  const togglePlay = () => {
    if (activeBeat === null) {
      setActiveBeat(0);
    }
    setProgress(0);
    setIsPlaying(prev => !prev);
  };

  const isAll = activeBeat === null;
  const isBeat = (id: number) => isAll || activeBeat === id;
  const currentBeatInfo = activeBeat !== null ? BEATS[activeBeat] : null;

  return (
    <div className="space-y-5">
      {/* ═══ COMPACT HERO HEADER ═══ */}
      <div className="bg-white border border-sbb-aluminum p-5 sm:p-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-[11px] font-mono font-bold tracking-widest text-sbb-red uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>
                {isEn
                  ? 'CONCEPT OVERVIEW // EXPLAINED IN UNDER 2 MINUTES'
                  : 'KONZEPT-ÜBERSICHT // IN UNTER 2 MINUTEN ERKLÄRT'}
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl font-black text-sbb-black tracking-tight">
              {isEn
                ? 'How Monitoring, Approved Facts & 1-Click Recipes Work Together'
                : 'Wie Monitoring, geprüfte Fakten & 1-Klick-Rezepte zusammenspielen'}
            </h1>
            <p className="text-xs sm:text-sm text-zinc-700 max-w-3xl leading-relaxed">
              {isEn
                ? 'Core facts, figures, and names stay consistent globally—while AI adapts tone and length organically for every market and channel.'
                : 'Kernfakten, Zahlen und Namen bleiben global verlässlich – während KI Tonalität und Länge organisch an Markt und Kanal anpasst.'}
            </p>
          </div>

          <div className="flex flex-col items-start lg:items-end gap-1.5 shrink-0">
            <div className="flex flex-wrap items-center gap-2.5">
              <button
                type="button"
                onClick={onOpenConceptModal}
                className="px-3 py-2 bg-sbb-cloud hover:bg-zinc-200 border border-sbb-aluminum font-mono text-xs font-bold uppercase tracking-wider text-sbb-black transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <HelpCircle className="w-3.5 h-3.5 text-sbb-red" />
                <span>{isEn ? 'IT & Method Details' : 'IT- & Methodik-Details'}</span>
              </button>

              <button
                type="button"
                onClick={() => onEnterWorkspace('cockpit')}
                className="px-4 py-2 bg-sbb-red hover:bg-sbb-red-125 text-white font-mono text-xs font-black uppercase tracking-wider transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <span>{isEn ? 'Open Live Prototype (01–04)' : 'Zum Live-Prototyp (01–04)'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
            <span className="text-[11px] text-zinc-500">
              {isEn
                ? 'Click any box below or the button above to test all 5 live scenarios & EN/DE filters.'
                : 'Box unten oder Button oben anklicken, um alle 5 Live-Szenarien & EN/DE-Filter zu testen.'}
            </span>
          </div>
        </div>

        {/* ═══ 75-SECOND WALKTHROUGH PLAYER BAR ═══ */}
        <div className="mt-5 pt-4 border-t border-zinc-200 space-y-3">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={togglePlay}
                className={`px-3 py-1.5 font-mono text-xs font-black uppercase tracking-wider border transition-colors flex items-center gap-1.5 cursor-pointer ${
                  isPlaying && activeBeat !== null
                    ? 'bg-sbb-black text-[#FFCC00] border-sbb-black'
                    : 'bg-[#FFCC00] text-sbb-black border-sbb-black hover:bg-amber-300'
                }`}
              >
                {isPlaying && activeBeat !== null ? (
                  <>
                    <Pause className="w-3.5 h-3.5" />
                    <span>{isEn ? 'Pause Story' : 'Pause'}</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5" />
                    <span>{isEn ? 'Play 75s Story' : '75s-Ablauf starten'}</span>
                  </>
                )}
              </button>

              <div className="flex items-center gap-1">
                {BEATS.map((b, idx) => (
                  <button
                    key={b.id}
                    type="button"
                    onClick={() => selectBeat(idx)}
                    className={`px-2 py-1 font-mono text-[11px] font-bold border transition-colors cursor-pointer ${
                      activeBeat === idx
                        ? 'bg-sbb-red text-white border-sbb-red'
                        : 'bg-sbb-cloud text-zinc-700 border-sbb-aluminum hover:border-sbb-black'
                    }`}
                    title={isEn ? b.titleEn : b.titleDe}
                  >
                    {b.code}
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={() => selectBeat(null)}
                className={`px-2.5 py-1 font-mono text-[10px] font-bold uppercase border transition-colors cursor-pointer flex items-center gap-1 ${
                  isAll
                    ? 'bg-sbb-black text-white border-sbb-black'
                    : 'bg-white text-zinc-700 border-sbb-aluminum hover:border-sbb-black'
                }`}
              >
                <RotateCcw className="w-3 h-3" />
                <span>{isEn ? 'Show Full Loop' : 'Alles zeigen'}</span>
              </button>
            </div>

            <div className="text-[11px] font-mono text-zinc-600">
              {currentBeatInfo
                ? `${isEn ? 'Step' : 'Schritt'} ${currentBeatInfo.code}/06 — ${
                    isEn ? currentBeatInfo.titleEn : currentBeatInfo.titleDe
                  }`
                : isEn
                ? 'Full Two-Way Loop Active (Click any box to zoom in)'
                : 'Gesamter Zwei-Wege-Kreislauf aktiv (Box anklicken für Details)'}
            </div>
          </div>

          {/* Progress Track */}
          {activeBeat !== null && (
            <div className="w-full h-1 bg-zinc-200 overflow-hidden">
              <div
                className="h-full bg-sbb-red transition-all duration-100"
                style={{ width: `${isPlaying ? progress : 100}%` }}
              />
            </div>
          )}

          {/* Active Beat Caption */}
          <div className="p-3 bg-sbb-cloud/70 border-l-4 border-sbb-black text-xs sm:text-sm text-sbb-black leading-relaxed">
            {currentBeatInfo ? (
              <>
                <strong className="font-mono text-xs uppercase text-sbb-red mr-2">
                  {currentBeatInfo.code} //{' '}
                  {isEn ? currentBeatInfo.titleEn : currentBeatInfo.titleDe}:
                </strong>
                <span>{isEn ? currentBeatInfo.captionEn : currentBeatInfo.captionDe}</span>
              </>
            ) : (
              <span>
                {isEn
                  ? 'Outside-In (01–02) catches silent risks early. Human Comms & Legal lock shared core facts. Top-Down (03–04) tailors tone naturally per channel and stress-tests drafts before release.'
                  : 'Outside-In (01–02) erkennt stille Risiken früh. Kommunikation & Recht sichern zentrale Fakten. Top-Down (03–04) passt die Tonalität organisch pro Kanal an und testet Entwürfe vor Freigabe.'}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* ═══ ANIMATED SWIMLANE FLOWCHART ═══ */}
      <div className="space-y-3">
        {/* ROW 1 — BEAT 01: THE BLIND SPOT */}
        <div
          onClick={() => selectBeat(0)}
          className={`bg-white border-2 p-4 transition-all cursor-pointer ${
            isBeat(0)
              ? 'border-sbb-red shadow-sm opacity-100'
              : 'border-sbb-aluminum opacity-55 hover:opacity-90'
          }`}
        >
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-mono">
              <span className="px-2 py-0.5 bg-sbb-red text-white font-bold">01</span>
              <span className="font-bold text-sbb-black uppercase mr-2">
                {isEn ? 'Separate Channels Today:' : 'Heute getrennte Kanäle:'}
              </span>
              <span className="px-2 py-0.5 bg-sbb-cloud border border-sbb-aluminum text-zinc-800">
                {isEn ? 'Press Release' : 'Medienmitteilung'}
              </span>
              <span className="px-2 py-0.5 bg-sbb-cloud border border-sbb-aluminum text-zinc-800">
                {isEn ? 'Local Country Post' : 'Länder-Beitrag'}
              </span>
              <span className="px-2 py-0.5 bg-red-50 border border-red-300 text-red-900 font-bold flex items-center gap-1">
                <FileWarning className="w-3 h-3 text-sbb-red" />
                {isEn ? 'Forgotten 2023 PDF' : 'Veraltetes 2023-PDF'}
              </span>
            </div>

            <FlowArrow direction="right" active={isBeat(0)} tone="red" />

            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="px-2.5 py-1 bg-sbb-black text-white font-mono text-[11px] font-bold">
                {isEn ? 'AI Search Assistant' : 'KI-Suchassistent'}
              </span>
              <span className="text-sbb-red font-mono font-bold">→</span>
              <span className="px-2.5 py-1 bg-red-50 border border-sbb-red text-red-950 font-bold text-xs">
                {isEn
                  ? '48% Mixed / Contradictory Answer'
                  : '48% vermischte / widersprüchliche Antwort'}
              </span>
            </div>
          </div>
        </div>

        {/* ROW 2 — LANE 1: OUTSIDE-IN (01 -> 02) */}
        <div className="space-y-1.5">
          <div className="text-[10px] font-mono font-black uppercase tracking-widest text-sbb-stone px-1">
            {isEn
              ? '◄ DIRECTION 1: OUTSIDE-IN — MEASURE COVERAGE & AI SEARCH FIRST'
              : '◄ RICHTUNG 1: OUTSIDE-IN — MEDIEN & KI-SUCHE ZUERST MESSEN'}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-stretch gap-2">
            {/* NODE 01: STATISTICAL FILTER */}
            <div
              onClick={() => selectBeat(1)}
              className={`bg-white border-2 p-5 flex flex-col justify-between gap-4 transition-all cursor-pointer ${
                isBeat(1)
                  ? 'border-sbb-black ring-2 ring-[#FFCC00]/60 opacity-100'
                  : 'border-sbb-aluminum opacity-55 hover:opacity-90'
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-xs font-black uppercase text-sbb-black flex items-center gap-2">
                    <span className="px-1.5 py-0.5 bg-sbb-black text-white">02</span>
                    <BarChart3 className="w-4 h-4 text-sbb-red" />
                    <span>{isEn ? 'Filter Noise With Math First' : 'Zuerst mit Statistik filtern'}</span>
                  </span>
                  <span className="text-[10px] font-mono bg-sbb-cloud px-2 py-0.5 border border-sbb-aluminum text-zinc-700">
                    {isEn ? 'Module 01' : 'Modul 01'}
                  </span>
                </div>

                {/* Mini Funnel + Spike Visual */}
                <div className="p-3 bg-sbb-cloud/70 border border-sbb-aluminum space-y-2">
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className="text-zinc-600">{isEn ? 'Raw Wire Noise:' : 'Roh-Meldungen:'}</span>
                    <strong className="text-sbb-black">48,420 → 19,110 {isEn ? 'unique' : 'einzigartig'}</strong>
                  </div>
                  <div className="w-full h-2 bg-zinc-200 overflow-hidden">
                    <div className="h-full bg-sbb-black w-[39%]" />
                  </div>
                  <div className="flex items-center justify-between pt-1 text-[11px] font-mono">
                    <span className="line-through text-zinc-500">
                      {isEn ? 'Sentiment tool: 76% Neutral' : 'Sentiment: 76% Neutral'}
                    </span>
                    <span className="px-1.5 py-0.5 bg-red-100 text-sbb-red font-bold border border-red-300">
                      +3.9σ {isEn ? 'Spike' : 'Ausbruch'}
                    </span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onEnterWorkspace('cockpit');
                }}
                className="text-xs font-mono font-bold text-sbb-red hover:underline flex items-center gap-1 self-start cursor-pointer"
              >
                <span>{isEn ? 'Try Live in Module 01' : 'Live testen in Modul 01'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* CONNECTOR 01 -> 02 */}
            <div className="flex items-center justify-center">
              <div className="lg:hidden">
                <FlowArrow direction="down" active={isBeat(1) || isBeat(2)} tone="red" />
              </div>
              <FlowArrow direction="right" active={isBeat(1) || isBeat(2)} tone="red" />
            </div>

            {/* NODE 02: AI SEARCH AUDIT */}
            <div
              onClick={() => selectBeat(2)}
              className={`bg-white border-2 p-5 flex flex-col justify-between gap-4 transition-all cursor-pointer ${
                isBeat(2)
                  ? 'border-sbb-black ring-2 ring-[#FFCC00]/60 opacity-100'
                  : 'border-sbb-aluminum opacity-55 hover:opacity-90'
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-xs font-black uppercase text-sbb-black flex items-center gap-2">
                    <span className="px-1.5 py-0.5 bg-sbb-black text-white">03</span>
                    <BrainCircuit className="w-4 h-4 text-sbb-red" />
                    <span>{isEn ? 'Audit What AI Search Says' : 'KI-Suchantworten prüfen'}</span>
                  </span>
                  <span className="text-[10px] font-mono bg-sbb-cloud px-2 py-0.5 border border-sbb-aluminum text-zinc-700">
                    {isEn ? 'Module 02' : 'Modul 02'}
                  </span>
                </div>

                {/* Mini AI Snippet & Accuracy Bar */}
                <div className="p-3 bg-sbb-cloud/70 border border-sbb-aluminum space-y-2">
                  <div className="text-[11px] text-zinc-800 leading-snug">
                    {isEn ? 'AI Answer Check (n=20): ' : 'KI-Antwort-Test (n=20): '}
                    <span className="bg-red-100 border border-red-300 px-1 font-mono text-[10px] font-bold text-red-900">
                      [1] {isEn ? 'HQ rumor' : 'Sitz-Gerücht'}
                    </span>{' '}
                    <span className="bg-red-100 border border-red-300 px-1 font-mono text-[10px] font-bold text-red-900">
                      [2] {isEn ? 'Cost = failure' : 'Preis = Misserfolg'}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] font-mono pt-1">
                    <span className="text-sbb-red font-bold">
                      {isEn ? 'Before: 48% Distorted' : 'Vorher: 48% Verzerrt'}
                    </span>
                    <span className="text-emerald-800 font-bold">
                      {isEn ? 'After Fact Block: ~95% Accurate' : 'Mit Faktenblock: ~95% Korrekt'}
                    </span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onEnterWorkspace('geo');
                }}
                className="text-xs font-mono font-bold text-sbb-red hover:underline flex items-center gap-1 self-start cursor-pointer"
              >
                <span>{isEn ? 'Try Live in Module 02' : 'Live testen in Modul 02'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* ROW 3 — BEAT 04: HUMAN DECISION GATE */}
        <div
          onClick={() => selectBeat(3)}
          className={`flex flex-col items-center cursor-pointer transition-all ${
            isBeat(3) ? 'opacity-100' : 'opacity-55 hover:opacity-90'
          }`}
        >
          <FlowArrow direction="down" active={isBeat(3)} tone="black" />
          <div
            className={`w-full max-w-4xl bg-sbb-black text-white px-5 py-3 border-2 flex flex-col sm:flex-row sm:items-center justify-between gap-2 ${
              isBeat(3) ? 'border-[#FFCC00] shadow-sm' : 'border-sbb-black'
            }`}
          >
            <div className="flex items-center gap-2.5 text-xs font-mono">
              <span className="px-1.5 py-0.5 bg-[#FFCC00] text-sbb-black font-black">04</span>
              <Users className="w-4 h-4 text-[#FFCC00] shrink-0" />
              <span className="font-bold uppercase tracking-wider">
                {isEn
                  ? 'HUMAN GATE (COMMS & LEGAL): LOCK CORE FACTS, NOT FIXED COPY'
                  : 'MENSCHLICHE FREIGABE (KOMM. & RECHT): FAKTEN SICHERN, KEIN EINHEITS-TEXT'}
              </span>
            </div>
            <span className="text-[11px] font-mono text-zinc-300 shrink-0">
              {isEn ? 'GS-01–GS-03 Approved • Old PDFs Retired' : 'GS-01–GS-03 geprüft • Alt-PDFs gesperrt'}
            </span>
          </div>
          <FlowArrow direction="down" active={isBeat(3) || isBeat(4)} tone="emerald" />
        </div>

        {/* ROW 4 — LANE 2: TOP-DOWN (03 -> 04) */}
        <div className="space-y-1.5">
          <div className="text-[10px] font-mono font-black uppercase tracking-widest text-sbb-stone px-1">
            {isEn
              ? 'DIRECTION 2: TOP-DOWN — EQUIP TEAMS & STRESS-TEST DRAFTS ►'
              : 'RICHTUNG 2: TOP-DOWN — TEAMS BEFÄHIGEN & ENTWÜRFE TESTEN ►'}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-stretch gap-2">
            {/* NODE 03: 1-CLICK RECIPES */}
            <div
              onClick={() => selectBeat(4)}
              className={`bg-white border-2 p-5 flex flex-col justify-between gap-4 transition-all cursor-pointer ${
                isBeat(4)
                  ? 'border-emerald-700 ring-2 ring-[#FFCC00]/60 opacity-100'
                  : 'border-sbb-aluminum opacity-55 hover:opacity-90'
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-xs font-black uppercase text-sbb-black flex items-center gap-2">
                    <span className="px-1.5 py-0.5 bg-emerald-700 text-white">05</span>
                    <Sparkles className="w-4 h-4 text-emerald-700" />
                    <span>{isEn ? '1-Click Recipes in Outlook & Word' : '1-Klick-Rezepte in Outlook & Word'}</span>
                  </span>
                  <span className="text-[10px] font-mono bg-sbb-cloud px-2 py-0.5 border border-sbb-aluminum text-zinc-700">
                    {isEn ? 'Module 03' : 'Modul 03'}
                  </span>
                </div>

                {/* Two-Layer Split Visual: Locked Facts vs Flexible Voice */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
                  <div className="p-2.5 bg-emerald-50/70 border border-emerald-300 space-y-1">
                    <div className="font-mono text-[10px] font-bold text-emerald-900 uppercase flex items-center gap-1">
                      <Lock className="w-3 h-3" />
                      <span>{isEn ? 'Facts Anchored' : 'Fakten gesichert'}</span>
                    </div>
                    <p className="text-emerald-950 leading-snug">
                      {isEn
                        ? 'Numbers, product/study names & legal lines (GS-01–GS-03).'
                        : 'Zahlen, Produkt-/Studiennamen & Rechtsgrenzen (GS-01–GS-03).'}
                    </p>
                  </div>
                  <div className="p-2.5 bg-sbb-cloud/80 border border-sbb-aluminum space-y-1">
                    <div className="font-mono text-[10px] font-bold text-sbb-black uppercase">
                      {isEn ? '✍️ Tailored Local Voice' : '✍️ Eigener lokaler Ton'}
                    </div>
                    <p className="text-zinc-700 leading-snug">
                      {isEn
                        ? 'Organic tone & length per channel (HR 0.41 kept intact for studies) — no GEO penalty.'
                        : 'Organische Sprache pro Kanal (HR 0.41 bei Studien geschützt) – kein GEO-Nachteil.'}
                    </p>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onEnterWorkspace('trending');
                }}
                className="text-xs font-mono font-bold text-emerald-800 hover:underline flex items-center gap-1 self-start cursor-pointer"
              >
                <span>{isEn ? 'Try Live in Module 03' : 'Live testen in Modul 03'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* CONNECTOR 03 -> 04 */}
            <div className="flex items-center justify-center">
              <div className="lg:hidden">
                <FlowArrow direction="down" active={isBeat(4) || isBeat(5)} tone="emerald" />
              </div>
              <FlowArrow direction="right" active={isBeat(4) || isBeat(5)} tone="emerald" />
            </div>

            {/* NODE 04: STRESS-TEST BEFORE RELEASE */}
            <div
              onClick={() => selectBeat(5)}
              className={`bg-white border-2 p-5 flex flex-col justify-between gap-4 transition-all cursor-pointer ${
                isBeat(5)
                  ? 'border-emerald-700 ring-2 ring-[#FFCC00]/60 opacity-100'
                  : 'border-sbb-aluminum opacity-55 hover:opacity-90'
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-xs font-black uppercase text-sbb-black flex items-center gap-2">
                    <span className="px-1.5 py-0.5 bg-emerald-700 text-white">06</span>
                    <ShieldCheck className="w-4 h-4 text-emerald-700" />
                    <span>{isEn ? 'Stress-Test Before Release' : 'Stresstest vor Freigabe'}</span>
                  </span>
                  <span className="text-[10px] font-mono bg-sbb-cloud px-2 py-0.5 border border-sbb-aluminum text-zinc-700">
                    {isEn ? 'Module 04' : 'Modul 04'}
                  </span>
                </div>

                {/* Mini Risk Drop Visual */}
                <div className="p-3 bg-sbb-cloud/70 border border-sbb-aluminum space-y-2">
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className="text-sbb-red font-bold">
                      {isEn ? 'Draft 1: Risk 9.1/10' : 'Entwurf 1: Risiko 9.1/10'}
                    </span>
                    <span className="text-emerald-800 font-bold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      {isEn ? 'Draft 2: Risk 2.6/10' : 'Entwurf 2: Risiko 2.6/10'}
                    </span>
                  </div>
                  <div className="w-full h-2 bg-zinc-200 overflow-hidden flex">
                    <div className="h-full bg-emerald-600 w-[26%]" />
                  </div>
                  <p className="text-[11px] text-zinc-700 leading-snug">
                    {isEn
                      ? 'Spots press traps early and strips repeated accusations before Comms & Legal sign off.'
                      : 'Erkennt Presse-Fallen vorab und streicht wiederholte Vorwürfe vor der Freigabe.'}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onEnterWorkspace('cascade');
                }}
                className="text-xs font-mono font-bold text-emerald-800 hover:underline flex items-center gap-1 self-start cursor-pointer"
              >
                <span>{isEn ? 'Try Live in Module 04' : 'Live testen in Modul 04'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* ROW 5 — CLOSED FEEDBACK LOOP */}
        <div
          onClick={() => selectBeat(5)}
          className={`bg-emerald-50/80 border-2 p-3.5 transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-2 ${
            isBeat(5) ? 'border-emerald-700 opacity-100' : 'border-emerald-200 opacity-60 hover:opacity-90'
          }`}
        >
          <div className="flex items-center gap-2.5 text-xs">
            <RefreshCw className={`w-4 h-4 text-emerald-800 shrink-0 ${isBeat(5) ? 'animate-spin' : ''}`} style={{ animationDuration: '4s' }} />
            <span className="font-mono font-bold uppercase text-emerald-950">
              {isEn ? 'CLOSED LOOP:' : 'GESCHLOSSENER KREISLAUF:'}
            </span>
            <span className="text-emerald-950">
              {isEn
                ? 'Clear approved web pages (SSR HTML) + retired old PDFs → next AI search cycle cites verified primary facts (~95% accurate).'
                : 'Klare Webseiten (SSR HTML) + entfernte Alt-PDFs → nächste KI-Suchabfrage zitiert verlässliche Primärfakten (~95% korrekt).'}
            </span>
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onEnterWorkspace('cockpit');
            }}
            className="px-3 py-1 bg-emerald-800 hover:bg-emerald-900 text-white font-mono text-[10px] font-bold uppercase tracking-wider shrink-0 self-start sm:self-auto cursor-pointer"
          >
            {isEn ? 'Explore Live Demo →' : 'Live-Demo öffnen →'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConceptFlowView;
