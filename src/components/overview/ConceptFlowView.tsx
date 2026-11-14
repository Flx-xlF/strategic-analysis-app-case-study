import React, { useState } from 'react';
import { Language } from '../../fixtures/scenarios';
import {
  AlertTriangle,
  ArrowRight,
  BarChart3,
  BrainCircuit,
  CheckCircle2,
  HelpCircle,
  Lock,
  ShieldCheck,
  Sparkles,
  Users
} from 'lucide-react';

interface Props {
  lang: Language;
  onEnterWorkspace: (tab?: 'cockpit' | 'geo' | 'trending' | 'cascade') => void;
  onOpenConceptModal: () => void;
}

export const ConceptFlowView: React.FC<Props> = ({
  lang,
  onEnterWorkspace,
  onOpenConceptModal
}) => {
  const [exampleState, setExampleState] = useState<'before' | 'after'>('before');
  const isEn = lang === 'en';
  const isBefore = exampleState === 'before';

  return (
    <div className="max-w-5xl mx-auto space-y-6 pb-12">
      {/* ═══ BLOCK 1: HONEST HOOK ═══ */}
      <div className="bg-white border border-sbb-aluminum p-6 sm:p-8 space-y-3">
        <div className="text-[11px] font-mono font-bold tracking-widest text-sbb-red uppercase">
          {isEn ? 'TERRAIN // PROTOTYPE CONCEPT OVERVIEW' : 'TERRAIN // KONZEPT-ÜBERBLICK'}
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-sbb-black tracking-tight leading-tight">
          {isEn
            ? 'What happens when AI reads all your channels at once?'
            : 'Was passiert, wenn KI alle Kanäle gleichzeitig liest?'}
        </h1>
        <p className="text-sm sm:text-base text-zinc-800 leading-relaxed max-w-4xl">
          {isEn
            ? "Doctors, journalists, and investors increasingly rely on AI summaries built from press coverage, online forums, corporate websites, and archived PDFs. A company cannot control external media or dictate what an AI model says—but it can avoid unforced errors: outdated files left online, key facts buried below vague prose, and defensive quotes that repeat a critic's accusation."
            : 'Ärztinnen, Journalisten und Investoren stützen sich zunehmend auf KI-Zusammenfassungen aus Medienberichten, Foren, Unternehmensseiten und archivierten PDFs. Externe Medien oder KI-Modelle lassen sich nicht steuern – wohl aber vermeidbare Eigentore: veraltete PDFs im Netz, versteckte Fakten hinter vager Prosa und Dementis, die einen Vorwurf erst recht wiederholen.'}
        </p>
      </div>

      {/* ═══ BLOCK 2: INTERACTIVE REALITY CHECK (TOGGLE CARD) ═══ */}
      <div className="bg-white border border-sbb-black p-5 sm:p-6 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-zinc-200">
          <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-sbb-stone">
            {isEn
              ? 'FICTIONAL CASE EXAMPLE // HEADQUARTERS & ACCESS DEBATE'
              : 'FIKTIVES FALLBEISPIEL // STANDORT- & ZUGANGSDEBATTE'}
          </span>

          <div className="flex items-center gap-1 bg-sbb-cloud p-1 border border-sbb-aluminum self-start sm:self-auto">
            <button
              type="button"
              aria-pressed={isBefore}
              onClick={() => setExampleState('before')}
              className={`px-3 py-1.5 font-mono text-xs font-bold transition-colors cursor-pointer ${
                isBefore
                  ? 'bg-sbb-red text-white'
                  : 'text-zinc-700 hover:text-sbb-black hover:bg-white'
              }`}
            >
              {isEn ? 'Uncoordinated Sources' : 'Unabgestimmte Quellen'}
            </button>
            <button
              type="button"
              aria-pressed={!isBefore}
              onClick={() => setExampleState('after')}
              className={`px-3 py-1.5 font-mono text-xs font-bold transition-colors cursor-pointer ${
                !isBefore
                  ? 'bg-emerald-700 text-white'
                  : 'text-zinc-700 hover:text-sbb-black hover:bg-white'
              }`}
            >
              {isEn ? 'Verified & Coordinated Sources' : 'Geprüfte & abgestimmte Quellen'}
            </button>
          </div>
        </div>

        {/* Question Bar */}
        <div className="p-3.5 bg-sbb-cloud/70 border border-sbb-aluminum space-y-1">
          <div className="font-mono text-[10px] font-bold uppercase tracking-wider text-sbb-stone">
            {isEn ? 'Question asked by a journalist or investor:' : 'Frage aus Redaktion oder Investment-Umfeld:'}
          </div>
          <div className="text-sm sm:text-base font-bold text-sbb-black">
            {isEn
              ? '«Is the company gradually shifting its headquarters out of Switzerland?»'
              : '«Verlegt das Unternehmen seinen Hauptsitz schrittweise aus der Schweiz?»'}
          </div>
        </div>

        {/* State Output */}
        <div
          className={`p-4 sm:p-5 border-2 transition-opacity duration-200 space-y-3 ${
            isBefore
              ? 'bg-red-50/40 border-sbb-red'
              : 'bg-emerald-50/40 border-emerald-700'
          }`}
        >
          <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase">
            {isBefore ? (
              <>
                <AlertTriangle className="w-4 h-4 text-sbb-red shrink-0" />
                <span className="text-red-950">
                  {isEn ? 'AI Summary with Uncoordinated Sources' : 'KI-Zusammenfassung bei unabgestimmten Quellen'}
                </span>
              </>
            ) : (
              <>
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span className="text-emerald-950">
                  {isEn ? 'AI Summary with Verified & Coordinated Sources' : 'KI-Zusammenfassung mit geprüften, abgestimmten Quellen'}
                </span>
              </>
            )}
          </div>

          <p className={`text-sm sm:text-base leading-relaxed font-medium ${isBefore ? 'text-red-950' : 'text-emerald-950'}`}>
            {isBefore
              ? isEn
                ? '«Commentary points to major U.S. expansion, while company pages list varying regional launch timelines and older strategy PDFs leave future footprint plans unclear.»'
                : '«Kommentare verweisen auf den starken US-Ausbau, während Unternehmensseiten unterschiedliche Zeitpläne nennen und ältere Strategie-PDFs die künftige Standortstruktur offenlassen.»'
              : isEn
              ? '«Official statements confirm U.S. manufacturing expansion while stating that global headquarters and core research stay in Switzerland. Media coverage continues to debate European pricing and patient-access trade-offs.»'
              : '«Offizielle Angaben bestätigen den Ausbau der US-Produktion und halten fest, dass weltweiter Hauptsitz und Forschung in der Schweiz bleiben. Medien diskutieren weiter über Preisgestaltung und Patientenzugang in Europa.»'}
          </p>

          <div className="pt-2 border-t border-zinc-200/80 space-y-1.5">
            <div className="font-mono text-[10px] font-bold uppercase tracking-wider text-zinc-700">
              {isBefore
                ? isEn
                  ? 'Sources pulled into the answer:'
                  : 'Quellen, die in die Antwort einfliessen:'
                : isEn
                ? 'What changed in company-controlled inputs:'
                : 'Was bei eigenen Quellen angepasst wurde:'}
            </div>
            <div className="flex flex-wrap gap-2">
              {(isBefore
                ? isEn
                  ? [
                      'Outdated strategy PDF left online',
                      'Critical press commentary',
                      'HQ facts buried below vague intro',
                      'Defensive quote repeated "not boycotting"'
                    ]
                  : [
                      'Veraltetes Strategie-PDF im Netz',
                      'Kritischer Medienbericht',
                      'Standortfakten hinter vager Einleitung versteckt',
                      'Dementi wiederholt Reizwort «Boykott»'
                    ]
                : isEn
                ? [
                    'Outdated strategy PDF retired',
                    'Clear HQ & investment facts placed first',
                    'Core facts aligned across regions',
                    'Factual quote without repeating accusation'
                  ]
                : [
                    'Veraltetes Strategie-PDF entfernt',
                    'Klare Standort- & Investitionsfakten zuerst',
                    'Kernfakten über Regionen abgeglichen',
                    'Sachliches Zitat ohne Vorwurfs-Echo'
                  ]
              ).map((tag) => (
                <span
                  key={tag}
                  className={`px-2.5 py-1 font-mono text-[11px] border ${
                    isBefore
                      ? 'bg-white border-red-300 text-red-950'
                      : 'bg-white border-emerald-300 text-emerald-950'
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <p className="text-xs text-zinc-700 leading-relaxed">
          {isEn
            ? 'Illustrative fictional example. Cleaning up owned sources and quote framing reduces self-made contradictions—it does not silence critical debate or guarantee identical answers across probabilistic AI models.'
            : 'Fiktives Fallbeispiel. Bereinigte eigene Quellen und disziplinierte Zitate verringern selbstgemachte Widersprüche – sie verhindern keine kritischen Berichte und garantieren keine identischen Antworten über probabilistische KI-Modelle hinweg.'}
        </p>
      </div>

      {/* ═══ BLOCK 3: 3 WORKFLOW CARDS ═══ */}
      <div className="space-y-3">
        <div className="font-mono text-xs font-bold uppercase tracking-widest text-sbb-stone">
          {isEn
            ? 'HOW TERRAIN WORKS — FROM MONITORING TO HUMAN SIGN-OFF'
            : 'SO HILFT TERRAIN — VOM MONITORING BIS ZUR FREIGABE'}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Card 01 */}
          <div className="bg-white border border-sbb-aluminum p-5 flex flex-col justify-between gap-4 min-w-0">
            <div className="space-y-2.5">
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-xs font-black uppercase text-sbb-red flex items-center gap-1.5">
                  <BarChart3 className="w-4 h-4 shrink-0" />
                  <span>{isEn ? '01 // SPOT REAL SHIFTS' : '01 // VERSCHIEBUNGEN ERKENNEN'}</span>
                </span>
              </div>
              <h2 className="text-base font-bold text-sbb-black leading-snug">
                {isEn ? 'Separate noise from unusual topic spikes' : 'Rauschen von echten Ausschlägen trennen'}
              </h2>
              <p className="text-xs sm:text-sm text-zinc-800 leading-relaxed">
                {isEn
                  ? 'Incoming media and forum feeds are far too large to read manually, and pasting raw feeds into an LLM triggers hallucinations. Automated mood scores also misread calm, formal trade articles where policy risk quietly builds. Terrain uses statistics first to collapse duplicate agency reprints and flag sudden regional surges.'
                  : 'Medien- und Forenströme sind zu gross zum Mitlesen, und Rohdaten direkt in ein LLM zu speisen führt zu Fehlern. Automatische Stimmungswerte übersehen zudem ruhige, sachliche Fachartikel mit echtem Konfliktpotenzial. Terrain bündelt zuerst statistisch Dubletten und meldet plötzliche regionale Anstiege.'}
              </p>
            </div>

            <div className="pt-3 border-t border-zinc-200 space-y-2.5">
              <p className="text-[11px] font-mono text-zinc-700 leading-snug">
                {isEn
                  ? 'Statistics narrow volume; humans judge what a debate means.'
                  : 'Statistik filtert den Umfang; Menschen bewerten die Bedeutung.'}
              </p>
              <button
                type="button"
                onClick={() => onEnterWorkspace('cockpit')}
                className="text-xs font-mono font-bold text-sbb-red hover:underline flex items-center gap-1 cursor-pointer"
              >
                <span>{isEn ? 'Open Module 01: Regional Cockpit' : 'Modul 01 öffnen: Regionales Cockpit'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 02 */}
          <div className="bg-white border border-sbb-aluminum p-5 flex flex-col justify-between gap-4 min-w-0">
            <div className="space-y-2.5">
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-xs font-black uppercase text-sbb-red flex items-center gap-1.5">
                  <BrainCircuit className="w-4 h-4 shrink-0" />
                  <span>{isEn ? '02 // AUDIT AI SUMMARIES' : '02 // KI-ANTWORTEN PRÜFEN'}</span>
                </span>
              </div>
              <h2 className="text-base font-bold text-sbb-black leading-snug">
                {isEn ? 'Test what AI assistants actually say' : 'Prüfen, was KI-Assistenten wirklich ausgeben'}
              </h2>
              <p className="text-xs sm:text-sm text-zinc-800 leading-relaxed">
                {isEn
                  ? 'Because AI outputs vary from run to run, checking a single answer misleads. Terrain pairs key articles driving a spike with repeated prompt runs to pinpoint which omitted facts, vague introductions, or forgotten files distort how the company is represented.'
                  : 'Da KI-Antworten von Abruf zu Abruf schwanken, täuscht ein einzelner Test. Terrain verbindet zentrale Artikel hinter einem Thema mit wiederholten Prüfläufen und zeigt, welche fehlenden Fakten, vagen Anfänge oder Alt-PDFs die Darstellung verzerren.'}
              </p>
            </div>

            <div className="pt-3 border-t border-zinc-200 space-y-2.5">
              <p className="text-[11px] font-mono text-zinc-700 leading-snug">
                {isEn
                  ? 'Reveals missing context—without claiming control over external media.'
                  : 'Zeigt Lücken bei eigenen Quellen – ohne Kontrolle über Fremdmedien vorzutäuschen.'}
              </p>
              <button
                type="button"
                onClick={() => onEnterWorkspace('geo')}
                className="text-xs font-mono font-bold text-sbb-red hover:underline flex items-center gap-1 cursor-pointer"
              >
                <span>{isEn ? 'Open Module 02: Cluster & AI Audit' : 'Modul 02 öffnen: Cluster & KI-Audit'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 03 */}
          <div className="bg-white border border-sbb-aluminum p-5 flex flex-col justify-between gap-4 min-w-0">
            <div className="space-y-2.5">
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-xs font-black uppercase text-emerald-800 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 shrink-0" />
                  <span>{isEn ? '03 // SUPPORT TEAMS & TEST DRAFTS' : '03 // SCHREIBEN & VORAB TESTEN'}</span>
                </span>
              </div>
              <h2 className="text-base font-bold text-sbb-black leading-snug">
                {isEn ? 'Apply approved facts where teams write' : 'Geprüfte Fakten direkt am Arbeitsplatz nutzen'}
              </h2>
              <p className="text-xs sm:text-sm text-zinc-800 leading-relaxed">
                {isEn
                  ? 'Under deadline pressure, teams skip lengthy static PDF manuals. Approved facts sit inside daily tools (Outlook, Word) as guided check-then-draft helpers: adjusting tone naturally while keeping clinical study endpoints untouched, marking unverified gaps, and stress-testing drafts for hostile framing traps before release.'
                  : 'Unter Zeitdruck öffnet niemand lange statische PDF-Handbücher. Geprüfte Fakten stehen direkt in Outlook und Word als geführte Hilfen bereit: Tonalität je Kanal anpassen, klinische Studien-Endpunkte wörtlich schützen, Lücken markieren und Entwürfe vor Versand auf Reizwort-Fallen testen.'}
              </p>
            </div>

            <div className="pt-3 border-t border-zinc-200 space-y-2.5">
              <p className="text-[11px] font-mono text-zinc-700 leading-snug">
                {isEn
                  ? 'Never an auto-publish button: Comms, Medical & Legal edit and approve.'
                  : 'Kein automatischer Versand: Kommunikation, Medizin & Recht geben frei.'}
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => onEnterWorkspace('trending')}
                  className="text-xs font-mono font-bold text-emerald-800 hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span>{isEn ? 'Module 03: Sources & Recipes' : 'Modul 03: Quellen & Rezepte'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => onEnterWorkspace('cascade')}
                  className="text-xs font-mono font-bold text-emerald-800 hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>{isEn ? 'Module 04: Stress-Test' : 'Modul 04: Stresstest'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══ BLOCK 4: HUMAN GATE & PRACTICAL BOUNDARIES ═══ */}
      <div className="space-y-4">
        <div className="bg-sbb-black text-white p-4 sm:p-5 border-l-4 border-[#FFCC00] flex items-start sm:items-center gap-3">
          <Users className="w-5 h-5 text-[#FFCC00] shrink-0 mt-0.5 sm:mt-0" />
          <div className="space-y-0.5">
            <div className="font-mono text-xs font-black uppercase tracking-wider text-[#FFCC00]">
              {isEn ? 'HUMAN JUDGMENT AT EVERY GATE — NEVER AUTOPILOT' : 'MENSCHLICHES URTEIL AN JEDER SCHWELLE — KEIN AUTOPILOT'}
            </div>
            <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed">
              {isEn
                ? 'Automated tools organize volume spikes, check source consistency, and simulate critical reactions—but Communications, Medical, and Legal interpret nuance, refine tone, and own every final approval.'
                : 'Werkzeuge bündeln Ausschläge, finden Quellen-Konflikte und simulieren Gegenwind – Strategie, Tonfall und jede Freigabe bleiben immer bei Kommunikation, Medizin und Recht.'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white border border-sbb-aluminum p-5 space-y-1.5">
            <div className="font-mono text-xs font-bold text-sbb-black uppercase flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
              <span>{isEn ? 'Shared core facts, natural local voices' : 'Gleiche Kernfakten, passender lokaler Ton'}</span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-800 leading-relaxed">
              {isEn
                ? 'Core figures, product names, and policy boundaries must align globally, while wording adapts locally. Clinical trial communications protect exact endpoints and scientific rigor rather than forcing oversimplified rewrites.'
                : 'Zahlen, Produktnamen und Leitplanken gelten global einheitlich; die Sprache passt sich dem Kanal an. Klinische Studien-Mitteilungen wahren präzise Endpunkte, statt sie platt zu vereinfachen.'}
            </p>
          </div>

          <div className="bg-white border border-sbb-aluminum p-5 space-y-1.5">
            <div className="font-mono text-xs font-bold text-sbb-black uppercase flex items-center gap-1.5">
              <AlertTriangle className="w-3.5 h-3.5 text-sbb-red shrink-0" />
              <span>{isEn ? 'Why shortcuts and defensive denials backfire' : 'Warum Abkürzungen und Abwehr-Dementis scheitern'}</span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-800 leading-relaxed">
              {isEn
                ? 'Metadata tags (Schema.org, llms.txt) cannot rescue vague prose, and echoing a critic\'s phrase to deny it ("we are not boycotting...") ties that accusation directly to the company name in search retrieval.'
                : 'Metadaten-Tricks (Schema.org, llms.txt) retten keinen unklaren Text, und wer einen Vorwurf zur Verneinung wiederholt («Wir boykottieren nicht...»), verknüpft den Begriff in Suchsystemen direkt mit dem Unternehmen.'}
            </p>
          </div>
        </div>
      </div>

      {/* ═══ BLOCK 5: SCOPE & PRIMARY CTA ═══ */}
      <div className="bg-white border border-sbb-aluminum p-5 sm:p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2 text-[11px] font-mono text-zinc-700">
          <span className="px-2.5 py-1 bg-sbb-cloud border border-sbb-aluminum">
            {isEn
              ? 'Browser prototype • All scenarios, companies & figures are fictional'
              : 'Browser-Prototyp • Alle Szenarien, Unternehmen & Zahlen sind fiktiv'}
          </span>
          <span className="px-2.5 py-1 bg-sbb-cloud border border-sbb-aluminum">
            {isEn
              ? 'Conceptual IT fit: Outlook, Word, Veeva Vault, SharePoint & Private AI Gateway'
              : 'Konzipiertes IT-Modell: Outlook, Word, Veeva Vault, SharePoint & Private AI Gateway'}
          </span>
          <span className="px-2.5 py-1 bg-sbb-cloud border border-sbb-aluminum">
            {isEn
              ? 'Cases: Pharma Pricing, Oncology Study Data, Health Privacy & Crisis/ESG'
              : 'Fälle: Pharma-Preise, Krebsstudie, Gesundheitsdaten & Krise/ESG'}
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onOpenConceptModal}
            className="px-3.5 py-2 bg-white hover:bg-sbb-cloud border border-sbb-aluminum font-mono text-xs font-bold uppercase tracking-wider text-zinc-700 hover:text-sbb-black transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <HelpCircle className="w-3.5 h-3.5 text-sbb-stone" />
            <span>{isEn ? 'Architecture & Enterprise IT Fit' : 'Architektur & IT-Einbettung'}</span>
          </button>

          <button
            type="button"
            onClick={() => onEnterWorkspace('cockpit')}
            className="px-5 py-2.5 bg-sbb-red hover:bg-sbb-red-125 text-white font-mono text-xs font-black uppercase tracking-wider transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <span>{isEn ? 'Open Interactive Prototype' : 'Interaktiven Prototyp öffnen'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConceptFlowView;
