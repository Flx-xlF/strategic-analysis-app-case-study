import React, { useEffect } from 'react';
import {
  Database,
  Layers,
  BrainCircuit,
  Server,
  X
} from 'lucide-react';
import { Language } from '../../fixtures/scenarios';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onOpenFlowView?: () => void;
  lang: Language;
}

export const ConceptMethodModal: React.FC<Props> = ({ isOpen, onClose, onOpenFlowView, lang }) => {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const isEn = lang === 'en';

  return (
    <div
      className="fixed inset-0 z-[60] bg-black/60 flex items-start justify-center p-3 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-[#FAF9F5] border-2 border-sbb-black shadow-[8px_8px_0px_0px_rgba(0,0,0,0.8)] max-w-5xl w-full my-6 p-6 sm:p-8 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 border-b border-zinc-200">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-sbb-red" />
            <span className="font-mono text-xs sm:text-sm font-bold uppercase tracking-widest text-sbb-black">
              {isEn ? 'IT & METHODOLOGY' : 'IT & METHODIK'}
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-zinc-600 hover:text-sbb-red p-1 transition-colors cursor-pointer border border-zinc-300 bg-white"
            title={isEn ? 'Close' : 'Schliessen'}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Core Premise Banner */}
        <div className="p-4 bg-white border-l-4 border-sbb-red border border-zinc-200 text-xs sm:text-sm text-sbb-black leading-relaxed">
          {isEn ? (
            <>
              <strong>THE SHIFT:</strong> Zero-click AI search decomposes a single question into 5–11 parallel sub-queries, pulling passages from press coverage, forums, owned pages, and legacy files into one context window at once. Discrepancies across central, regional, or cantonal teams dilute the company’s voice when AI models cross-reference them.
            </>
          ) : (
            <>
              <strong>DER WANDEL:</strong> Zero-Click-KI-Suche zerlegt eine einzelne Frage in 5 bis 11 parallele Teilabfragen und zieht Passagen aus Presseberichten, Foren, eigenen Seiten und Altdateien gleichzeitig in ein einziges Kontextfenster. Abweichungen zwischen zentralen, regionalen oder kantonalen Teams verwässern die Stimme des Unternehmens, sobald KI-Modelle sie abgleichen.
            </>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-xs text-zinc-700 leading-relaxed">
          {/* Column 1 */}
          <div className="space-y-2 border-r border-zinc-200 pr-4 last:border-r-0">
            <div className="font-mono font-bold text-sbb-black uppercase tracking-wider flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-sbb-red" />
              <span>{isEn ? '1. TWO-WAY APPROACH & GEO' : '1. ZWEI-WEGE-ANSATZ & GEO'}</span>
            </div>
            <p>
              {isEn ? (
                <>
                  <strong>Outside-In &amp; Top-Down:</strong> Audits where narratives lose pull-through in media and AI search (<strong>Outside-In</strong>), and enforces centrally defined and administered narratives plus channel-adapted <strong>GEO</strong> standards across earned media and owned Corporate Stories (<strong>Top-Down</strong>).
                </>
              ) : (
                <>
                  <strong>Outside-In &amp; Top-Down:</strong> Prüft, wo Botschaften in Medien und KI-Suche nicht durchdringen (<strong>Outside-In</strong>), und verankert zentral definierte und verwaltete Narrative sowie kanalangepasste <strong>GEO</strong>-Standards über Earned Media und eigene Corporate Stories hinweg (<strong>Top-Down</strong>).
                </>
              )}
            </p>
            <p>
              {isEn ? (
                <>
                  <strong>Context tailoring, not copy-paste:</strong> Avoiding discrepancies does not mean robotically copy-pasting key messages. AI analyzes the given context and tailors the narrative organically to that context.
                </>
              ) : (
                <>
                  <strong>Kontext-Anpassung statt Copy-Paste:</strong> Widersprüche zu vermeiden heisst nicht, Kernbotschaften stur zu kopieren. KI analysiert den jeweiligen Kontext und schneidet das Narrativ passgenau darauf zu.
                </>
              )}
            </p>
          </div>

          {/* Column 2 */}
          <div className="space-y-2 border-r border-zinc-200 pr-4 last:border-r-0">
            <div className="font-mono font-bold text-sbb-black uppercase tracking-wider flex items-center gap-1.5">
              <Database className="w-3.5 h-3.5 text-sbb-red" />
              <span>{isEn ? '2. OUTSIDE-IN IT LAYER' : '2. OUTSIDE-IN IT-EBENE'}</span>
            </div>
            <p>
              {isEn ? (
                <>
                  <strong>External feeds &amp; APIs:</strong> Connects to licensed media and social aggregators (<strong>Factiva, Meltwater, Talkwalker</strong>) plus public LLM APIs to ingest ongoing article streams.
                </>
              ) : (
                <>
                  <strong>Externe Feeds &amp; APIs:</strong> Anbindung an lizenzierte Medien- und Social-Aggregatoren (<strong>Factiva, Meltwater, Talkwalker</strong>) sowie öffentliche LLM-APIs zur Erfassung laufender Artikelströme.
                </>
              )}
            </p>
            <p>
              {isEn ? (
                <>
                  <strong>Digestion &amp; analysis:</strong> Because these feeds produce huge amounts of data, streams are digested and transformed into structured data, then processed statistically and by LLMs to identify where messages come through and where work needs to be done.
                </>
              ) : (
                <>
                  <strong>Aufbereitung &amp; Analyse:</strong> Da diese Ströme enorme Datenmengen erzeugen, werden sie in strukturierte Daten überführt und anschliessend statistisch sowie per LLM ausgewertet, um zu erkennen, wo Botschaften durchdringen und wo Handlungsbedarf besteht.
                </>
              )}
            </p>
          </div>

          {/* Column 3 */}
          <div className="space-y-2 border-r border-zinc-200 pr-4 last:border-r-0">
            <div className="font-mono font-bold text-sbb-black uppercase tracking-wider flex items-center gap-1.5">
              <Server className="w-3.5 h-3.5 text-sbb-red" />
              <span>{isEn ? '3. TOP-DOWN IT LAYER' : '3. TOP-DOWN IT-EBENE'}</span>
            </div>
            <p>
              {isEn ? (
                <>
                  <strong>No unread rulebook files:</strong> Establishing coherent narratives and frameworks top-down cannot rely on lingering rulebook documents—in a busy environment, teams overlook them in a hurry.
                </>
              ) : (
                <>
                  <strong>Keine ungelesenen Regel-Dokumente:</strong> Kohärente Narrative und Frameworks lassen sich nicht über abgelegte Dokumente durchsetzen, da diese im hektischen Alltag leicht übersehen werden.
                </>
              )}
            </p>
            <p>
              {isEn ? (
                <>
                  <strong>In-workflow prompt recipes:</strong> Central Comms administers key narratives and GEO frameworks, translates them into prompt recipes, and streams them through existing company systems right where work is done: inside <strong>Word, Excel, and Outlook</strong>—reducing friction so teams benefit immediately and actually use them.
                </>
              ) : (
                <>
                  <strong>Prompt-Rezepte direkt im Workflow:</strong> Die zentrale Kommunikation übersetzt Kern-Narrative und GEO-Frameworks in Prompt-Rezepte und verteilt sie über bestehende Systeme direkt in <strong>Word, Excel und Outlook</strong> – mit minimaler Reibung und sofortigem Nutzen.
                </>
              )}
            </p>
          </div>

          {/* Column 4 */}
          <div className="space-y-2">
            <div className="font-mono font-bold text-sbb-black uppercase tracking-wider flex items-center gap-1.5">
              <BrainCircuit className="w-3.5 h-3.5 text-sbb-red" />
              <span>{isEn ? '4. LIMITATIONS & HUMANS' : '4. GRENZEN & MENSCH'}</span>
            </div>
            <p>
              {isEn ? (
                <>
                  <strong>No &ldquo;one-shot, ready-to-send&rdquo; output:</strong> An LLM will never produce a finished, ready-to-send statement or corporate story in a single pass (at least for the time being). AI enforces the GEO framework and tailors the narratives; humans iterate.
                </>
              ) : (
                <>
                  <strong>Kein «One-Shot, versandfertiger» Output:</strong> Ein LLM liefert in einem einzelnen Durchgang kein fertiges, versandbereites Statement oder eine fertige Corporate Story. Die KI sichert das GEO-Framework und passt Narrative an; der Mensch iteriert.
                </>
              )}
            </p>
            <p>
              {isEn ? (
                <>
                  <strong>Full context for iteration:</strong> The system’s real value is giving teams tailored versions of the company’s key narrative, a structured GEO framework, and the most important communication risks derived from the Outside-In branch, so human communicators can iterate the final text with full context.
                </>
              ) : (
                <>
                  <strong>Voller Kontext für die Ausarbeitung:</strong> Der eigentliche Wert liegt darin, den Teams zugeschnittene Versionen des Kern-Narrativs, ein strukturiertes GEO-Framework und die wichtigsten Kommunikationsrisiken aus dem Outside-In-Zweig zu liefern, damit Kommunikatoren den finalen Text fundiert iterieren können.
                </>
              )}
            </p>
          </div>
        </div>

        <div className="pt-3 border-t border-zinc-200 flex flex-wrap items-center justify-between gap-2">
          {onOpenFlowView ? (
            <button
              type="button"
              onClick={onOpenFlowView}
              className="px-4 py-1.5 bg-[#FFCC00] hover:bg-amber-300 text-sbb-black border border-sbb-black font-mono text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
            >
              {isEn ? '← Back to Visual Overview' : '← Zurück zur Übersicht'}
            </button>
          ) : (
            <span />
          )}
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-sbb-black text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-zinc-800 transition-colors cursor-pointer"
          >
            {isEn ? 'Close' : 'Schliessen'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConceptMethodModal;
