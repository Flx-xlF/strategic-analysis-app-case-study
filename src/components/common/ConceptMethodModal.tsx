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
  lang: Language;
}

export const ConceptMethodModal: React.FC<Props> = ({ isOpen, onClose, lang }) => {
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
      className="fixed inset-0 z-[60] bg-black/60 flex items-start justify-center p-3 sm:p-6 overflow-y-auto animate-fadeIn"
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
              {isEn ? 'CONCEPT, METHODOLOGY & IT INTEGRATION' : 'KONZEPT, METHODIK & IT-INTEGRATION'}
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
              <strong>THE PREMISE:</strong> Search and AI assistants pull press coverage, forum threads, company pages, and old PDFs into a single answer. When regional teams use inconsistent framing—or outdated files stay online—models mix them into contradictions. This prototype explores pairing external monitoring (<strong>Outside-In: 01–02</strong>) with source-anchored regional drafting and stress-testing (<strong>Top-Down: 03–04</strong>).
            </>
          ) : (
            <>
              <strong>DER ANSATZ:</strong> Suchmaschinen und KI-Assistenten ziehen Presseberichte, Foren, eigene Seiten und alte PDFs in einer einzigen Antwort zusammen. Wenn regionale Teams uneinheitlich formulieren – oder veraltete Dateien online bleiben –, entstehen Widersprüche. Dieser Prototyp verbindet externes Monitoring (<strong>Outside-In: 01–02</strong>) mit quellengebundenen Entwürfen und Stresstests (<strong>Top-Down: 03–04</strong>).
            </>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-xs text-zinc-700 leading-relaxed">
          {/* Column 1 */}
          <div className="space-y-2 border-r border-zinc-200 pr-4 last:border-r-0">
            <div className="font-mono font-bold text-sbb-black uppercase tracking-wider flex items-center gap-1.5">
              <Database className="w-3.5 h-3.5 text-sbb-red" />
              <span>{isEn ? '1. STATISTICAL FILTERING FIRST' : '1. STATISTIK VOR KI'}</span>
            </div>
            <p>
              {isEn ? (
                <>
                  <strong>External feeds:</strong> Raw weekly article streams are too large to feed straight into an LLM. A 4-stage pipeline (removing duplicate reprints via MinHash &rarr; grouping by topic via HDBSCAN &rarr; spotting volume spikes via <em>z</em>-score &rarr; checking alignment via cosine) narrows noise down to representative articles before an LLM inspects them.
                </>
              ) : (
                <>
                  <strong>Externe Feeds:</strong> Zehntausende wöchentliche Meldungen lassen sich nicht sinnvoll direkt in ein LLM geben. Eine 4-stufige Pipeline (Dubletten entfernen via MinHash &rarr; Themen gruppieren via HDBSCAN &rarr; Volumen-Spikes via <em>z</em>-Score &rarr; Cosinus-Abgleich) filtert zuerst auf repräsentative Artikel.
                </>
              )}
            </p>
            <p>
              {isEn ? (
                <>
                  <strong>Internal files &amp; old PDFs:</strong> Filters repositories to active, approved Golden Sources and flags superseded public PDFs in regional folders so outdated figures don’t surface in search.
                </>
              ) : (
                <>
                  <strong>Interne Dateien &amp; Alt-PDFs:</strong> Filtert Ablagen auf aktive, freigegebene Golden Sources und markiert veraltete öffentliche PDFs, damit keine überholten Zahlen in der Suche landen.
                </>
              )}
            </p>
          </div>

          {/* Column 2 */}
          <div className="space-y-2 border-r border-zinc-200 pr-4 last:border-r-0">
            <div className="font-mono font-bold text-sbb-black uppercase tracking-wider flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-sbb-red" />
              <span>{isEn ? '2. TWO-WAY WORKFLOW' : '2. ZWEI-WEGE-ABLAUF'}</span>
            </div>
            <p>
              {isEn ? (
                <>
                  <strong>Outside-In (01–02):</strong> Spots where trade coverage or regional forums are spiking even when automated sentiment looks neutral, and checks what AI search engines actually synthesize from those sources.
                </>
              ) : (
                <>
                  <strong>Outside-In (01–02):</strong> Zeigt, wo Fachmedien oder Foren eskalieren, obwohl Standard-Sentiment neutral wirkt, und prüft, was KI-Suchmaschinen aus diesen Quellen machen.
                </>
              )}
            </p>
            <p>
              {isEn ? (
                <>
                  <strong>Top-Down (03–04):</strong> Instead of 40-page PDF manuals that teams skip under time pressure, approved Golden Sources (GS-01–GS-03) and four writing rules load directly into 1-click recipes inside Outlook and Word—using full plain language for websites/social, a light touch for clinical studies to protect scientific accuracy, and before/after draft stress-tests.
                </>
              ) : (
                <>
                  <strong>Top-Down (03–04):</strong> Statt 40-seitiger PDF-Leitfäden fliessen geprüfte Golden Sources (GS-01–GS-03) und vier Schreibregeln direkt in 1-Klick-Rezepte für Outlook und Word – mit klarer Alltagssprache für Website/Social, einem schonenden Modus für klinische Studien zum Schutz der wissenschaftlichen Präzision sowie Stresstests vor Freigabe.
                </>
              )}
            </p>
          </div>

          {/* Column 3 */}
          <div className="space-y-2 border-r border-zinc-200 pr-4 last:border-r-0">
            <div className="font-mono font-bold text-sbb-black uppercase tracking-wider flex items-center gap-1.5">
              <BrainCircuit className="w-3.5 h-3.5 text-sbb-red" />
              <span>{isEn ? '3. REALISTIC LIMITS OF AI' : '3. REALISTISCHE GRENZEN'}</span>
            </div>
            <p>
              {isEn ? (
                <>
                  <strong>Structure beats metadata tricks:</strong> Adding <code>Schema.org</code> tags or <code>llms.txt</code> does not fix vague copy. Clear conclusions and concrete numbers in the opening paragraph—plus avoiding repeating critic accusations (which search engines index directly alongside the company name)—hold up across <em>n</em>=20 test runs.
                </>
              ) : (
                <>
                  <strong>Struktur vor Metadaten-Tricks:</strong> <code>Schema.org</code> oder <code>llms.txt</code> retten keine vage Prosa. Klare Kernaussagen und Zahlen im ersten Absatz – sowie der Verzicht auf wiederholte Vorwürfe (die Suchmaschinen sonst direkt mit dem Unternehmensnamen verknüpfen) – bestehen im <em>n</em>=20-Test.
                </>
              )}
            </p>
            <p>
              {isEn ? (
                <>
                  <strong>No one-shot answers:</strong> LLMs organize facts and simulate stakeholder pushback; comms and legal teams still edit, calibrate tone, and sign off.
                </>
              ) : (
                <>
                  <strong>Keine One-Shot-Texte:</strong> LLMs ordnen Fakten und simulieren Gegenwind; Überarbeitung, Tonalität und Freigabe bleiben bei Kommunikation und Recht.
                </>
              )}
            </p>
          </div>

          {/* Column 4 */}
          <div className="space-y-2">
            <div className="font-mono font-bold text-sbb-black uppercase tracking-wider flex items-center gap-1.5">
              <Server className="w-3.5 h-3.5 text-sbb-red" />
              <span>{isEn ? '4. ENTERPRISE IT FIT' : '4. IT-EINBETTUNG'}</span>
            </div>
            <p>
              {isEn ? (
                <>
                  <strong>Existing infrastructure:</strong> Designed to sit on corporate cloud infrastructure (Azure/AWS, Databricks) rather than as a separate tool silo.
                </>
              ) : (
                <>
                  <strong>Bestehende Infrastruktur:</strong> Gedacht als Modul auf bestehender Cloud-Infrastruktur (Azure/AWS, Databricks) statt als separates Tool-Silo.
                </>
              )}
            </p>
            <p>
              {isEn ? (
                <>
                  <strong>Connectors &amp; In-Workflow Recipes:</strong> Read-only links to <strong>Veeva Vault</strong> and <strong>SharePoint</strong> pull approved Golden Sources directly into <strong>M365 Copilot (Outlook / Word)</strong> recipes. Publishes server-rendered HTML for search crawlers (<strong>OAI-SearchBot, PerplexityBot, Claude-SearchBot</strong>); external feeds via Factiva/Meltwater.
                </>
              ) : (
                <>
                  <strong>Schnittstellen &amp; Workflow-Rezepte:</strong> Lese-Anbindung an <strong>Veeva Vault</strong> &amp; <strong>SharePoint</strong> lädt geprüfte Golden Sources direkt in <strong>M365 Copilot (Outlook / Word)</strong>. Publiziert Server-Rendered HTML für Suchcrawler (<strong>OAI-SearchBot, PerplexityBot, Claude-SearchBot</strong>); externe Feeds über Factiva/Meltwater.
                </>
              )}
            </p>
            <p>
              {isEn ? (
                <>
                  <strong>Private AI Gateway:</strong> LLM requests route through the internal Enterprise AI Gateway with zero data retention and GDPR/FADP/GxP compliance.
                </>
              ) : (
                <>
                  <strong>Privates AI Gateway:</strong> Alle LLM-Anfragen laufen über das interne Enterprise AI Gateway ohne Datenspeicherung (DSGVO/DSG/GxP).
                </>
              )}
            </p>
          </div>
        </div>

        <div className="pt-3 border-t border-zinc-200 flex justify-end">
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
