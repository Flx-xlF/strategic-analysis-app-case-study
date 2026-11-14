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
      className="fixed inset-0 z-40 bg-black/60 flex items-start justify-center p-3 sm:p-6 pb-36 overflow-y-auto animate-fadeIn"
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
              {isEn ? 'SYSTEM ARCHITECTURE, METHODOLOGY & ENTERPRISE IT INTEGRATION' : 'SYSTEMARCHITEKTUR, METHODIK & ENTERPRISE-IT-INTEGRATION'}
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-zinc-600 hover:text-sbb-red p-1 transition-colors cursor-pointer border border-zinc-300 bg-white"
            title={isEn ? 'Close Guide' : 'Schliessen'}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Overarching Strategic Premise Banner */}
        <div className="p-4 bg-white border-l-4 border-sbb-red border border-zinc-200 text-xs sm:text-sm text-sbb-black leading-relaxed">
          {isEn ? (
            <>
              <strong>THE CORE PREMISE:</strong> With <strong>~70% zero-click searches</strong> and <strong>&lt;1% AI referral traffic</strong>, GEO is about upstream reputation defense, citation absorption, and factual fidelity—not clicks. In AI search, <em>query fan-out</em> (<strong>5–11 parallel sub-queries</strong>) pulls press coverage, forums, owned pages, and legacy files into <strong>one context window</strong> at once—making <strong>incoherence</strong> across central, regional, or cantonal teams the central vulnerability. <strong>Terrain audits pull-through in media and AI search (Outside-In) while enforcing Golden Sources and channel-adapted GEO standards across earned and owned media (Top-Down).</strong>
            </>
          ) : (
            <>
              <strong>DIE KERNTHESE:</strong> Bei <strong>~70% Zero-Click-Suchen</strong> und <strong>&lt;1% KI-Referral-Traffic</strong> dient GEO der vorgelagerten Reputationssicherung, Zitat-Absorption und Fakten-Treue – nicht der Klick-Akquise. Im Zeitalter der KI-Suche zieht <em>Query Fan-Out</em> (<strong>5–11 parallele Suchanfragen</strong>) Medienberichte, Foren, eigene Seiten und Alt-PDFs simultan in <strong>ein einziges Kontextfenster</strong> – wodurch <strong>Inkohärenz</strong> zwischen zentralen, regionalen und kantonalen Teams zur Hauptschwachstelle wird. <strong>Terrain prüft Medien und KI-Antworten (Outside-In) und setzt Golden Sources sowie kanal-adaptierte GEO-Standards über Earned und Owned Media hinweg durch (Top-Down).</strong>
            </>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-xs text-zinc-700 leading-relaxed">
          {/* Column 1 */}
          <div className="space-y-2 border-r border-zinc-200 pr-4 last:border-r-0">
            <div className="font-mono font-bold text-sbb-black uppercase tracking-wider flex items-center gap-1.5">
              <Database className="w-3.5 h-3.5 text-sbb-red" />
              <span>{isEn ? '1. DATA SCALE REALITIES' : '1. REALITÄT DER DATENMENGEN'}</span>
            </div>
            <p>
              {isEn ? (
                <>
                  <strong>External data mountain:</strong> Tens of thousands of raw news articles and social posts are ingested weekly. Pure LLMs fail or hallucinate at this scale. A 4-stage statistical funnel (MinHash dedup &rarr; HDBSCAN clustering &rarr; <em>z</em>-score velocity &rarr; targeted LLM centroid pass) isolates the signal without hallucination.
                </>
              ) : (
                <>
                  <strong>Externer Datenberg:</strong> Zehntausende News und Social-Posts fallen wöchentlich an. Reine LLMs scheitern an dieser Menge. Ein 4-stufiger statistischer Trichter (MinHash &rarr; HDBSCAN &rarr; <em>z</em>-Score Dynamik &rarr; gezielter LLM-Pass auf Centroiden) trennt Signal von Rauschen.
                </>
              )}
            </p>
            <p>
              {isEn ? (
                <>
                  <strong>Internal mountain &amp; superseded PDFs:</strong> Hundreds of thousands of files exist across vaults, and superseded public PDFs poison AI search crawlers. Temporal validity gating locks approved Golden Sources and flags outdated files and superseded public PDFs for decommissioning.
                </>
              ) : (
                <>
                  <strong>Interner Dokumentenberg &amp; Alt-PDFs:</strong> Hunderttausende Dateien lagern in Vaults, und veraltete öffentliche PDFs vergiften KI-Suchcrawler. Gültigkeitsfilter sichern aktuelle Golden Sources und markieren veraltete Dateien sowie Alt-PDFs zur Abschaltung.
                </>
              )}
            </p>
          </div>

          {/* Column 2: Process Integration for Management & Teams */}
          <div className="space-y-2 border-r border-zinc-200 pr-4 last:border-r-0">
            <div className="font-mono font-bold text-sbb-black uppercase tracking-wider flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-sbb-red" />
              <span>{isEn ? '2. PROCESS VALUE (MGMT & REGIONAL TEAMS)' : '2. PROZESSNUTZEN (MGMT & TEAMS)'}</span>
            </div>
            <p>
              {isEn ? (
                <>
                  <strong>For Leadership (Decision Context on Demand):</strong> Assists executives in making fast, informed decisions by providing cross-regional reception, regulatory trade-offs, and risk spikes at the push of a button—while final judgment remains human.
                </>
              ) : (
                <>
                  <strong>Für Führungskräfte (Entscheidungskontext auf Knopfdruck):</strong> Unterstützt das Management bei fundierten Entscheidungen, indem regionaler Rezeptionskontext, Zielkonflikte und Risiko-Spikes auf Knopfdruck bereitstehen.
                </>
              )}
            </p>
            <p>
              {isEn ? (
                <>
                  <strong>For Central &amp; Regional Teams (Channel-Adapted GEO):</strong> Teams apply a shared <strong>4-Rule Corporate GEO Framework</strong> anchored in Golden Sources (GS-01–GS-03) across owned <strong>Corporate Stories</strong>, press releases, and media answers—ensuring consistent retrieval across media and AI search while cutting alignment from days to hours.
                </>
              ) : (
                <>
                  <strong>Für zentrale &amp; regionale Teams (Kanal-adaptiertes GEO):</strong> Teams nutzen ein <strong>4-Regel GEO-Framework</strong> und geprüfte Golden Sources (GS-01–GS-03) über <strong>Corporate Stories</strong>, Medienmitteilungen und Q&amp;As hinweg – für konsistentes KI-Retrieval und schnellere Freigaben.
                </>
              )}
            </p>
          </div>

          {/* Column 3 */}
          <div className="space-y-2 border-r border-zinc-200 pr-4 last:border-r-0">
            <div className="font-mono font-bold text-sbb-black uppercase tracking-wider flex items-center gap-1.5">
              <BrainCircuit className="w-3.5 h-3.5 text-sbb-red" />
              <span>{isEn ? '3. HONEST AI BOUNDARIES' : '3. REALE GRENZEN VON KI'}</span>
            </div>
            <p>
              {isEn ? (
                <>
                  <strong>Empirical GEO (No Schema/llms.txt Shortcuts):</strong> Schema.org and llms.txt offer no causal citation lift, and single-run AI rankings repeat <strong>&lt;0.1%</strong> of the time. AI engines pull <strong>82%–89% (~84%)</strong> of citations from earned media and <strong>~15%–45%</strong> from owned domains. Reducing distortion (<strong>~45% → ~5%</strong> across <em>n</em>=20 runs) requires answer-first SSR HTML passages (opening 30% of text, <strong>+61.5% lift</strong>), quotable press stats (<strong>+31%–41% lift</strong>), and <strong>BM25 + dense vector</strong> accusation hygiene.
                </>
              ) : (
                <>
                  <strong>Empirisches GEO (Keine Schema/llms.txt-Shortcuts):</strong> Schema.org und llms.txt bringen keinen Zitier-Lift, und Einzel-Rankings wiederholen sich zu <strong>&lt;0,1%</strong>. KI-Engines beziehen <strong>82%–89% (~84%)</strong> aus Earned Media und <strong>~15%–45%</strong> von Owned Domains. Weniger Verzerrung (<strong>~45% → ~5%</strong> über <em>n</em>=20 Läufe) erfordert Answer-First SSR HTML (erste 30%, <strong>+61,5% Lift</strong>), zitierfähige PR-Zahlen (<strong>+31%–41% Lift</strong>) und <strong>BM25 + Dense-Vector</strong>-Hygiene.
                </>
              )}
            </p>
            <p>
              {isEn ? (
                <>
                  <strong>No one-shot answers — Context on Demand &amp; Human Call:</strong> LLMs provide the <strong>GEO framework</strong>, <strong>multi-angle stress-tests</strong>, and decision context at the push of a button; human leaders iterate and make the final call.
                </>
              ) : (
                <>
                  <strong>Keine One-Shot-Antworten — Kontext auf Knopfdruck &amp; Menschliche Entscheidung:</strong> LLMs liefern das <strong>GEO-Framework</strong>, <strong>Multi-Winkel-Stresstests</strong> und Entscheidungskontext auf Knopfdruck; Führung und Teams iterieren und entscheiden.
                </>
              )}
            </p>
          </div>

          {/* Column 4: Realistic Enterprise IT Integration Outlook */}
          <div className="space-y-2">
            <div className="font-mono font-bold text-sbb-black uppercase tracking-wider flex items-center gap-1.5">
              <Server className="w-3.5 h-3.5 text-sbb-red" />
              <span>{isEn ? '4. ENTERPRISE IT INTEGRATION' : '4. IT-INTEGRATIONSAUSBLICK'}</span>
            </div>
            <p>
              {isEn ? (
                <>
                  <strong>No Shadow IT:</strong> Conceived as a modular workflow layer sitting on top of existing corporate cloud infrastructure (e.g., Azure/AWS, Databricks).
                </>
              ) : (
                <>
                  <strong>Keine Schatten-IT:</strong> Konzipiert als modulare Schicht auf bestehender Konzern-Infrastruktur (z. B. Azure/AWS, Databricks).
                </>
              )}
            </p>
            <p>
              {isEn ? (
                <>
                  <strong>Connectors &amp; SSR Crawlers:</strong> Read-only connectors to <strong>Veeva Vault</strong> (PromoMats/MedComms) and <strong>SharePoint (Graph API)</strong> enforce RBAC and Approved/Effective status. Publishes answer-first SSR HTML for non-JS crawlers (<strong>OAI-SearchBot, PerplexityBot, Claude-SearchBot</strong>); external feeds via Factiva/Meltwater APIs.
                </>
              ) : (
                <>
                  <strong>Schnittstellen &amp; SSR-Crawler:</strong> Lese-Schnittstellen zu <strong>Veeva Vault</strong> &amp; <strong>SharePoint (Graph API)</strong> sichern RBAC und Freigabestatus. Publiziert Answer-First SSR HTML für Non-JS-Crawler (<strong>OAI-SearchBot, PerplexityBot, Claude-SearchBot</strong>); externe Feeds über Factiva/Meltwater-APIs.
                </>
              )}
            </p>
            <p>
              {isEn ? (
                <>
                  <strong>Private AI Gateway:</strong> All LLM requests route through the internal Enterprise AI Gateway with zero data retention, strict tenant isolation, and GxP/GDPR compliance.
                </>
              ) : (
                <>
                  <strong>Privates AI Gateway:</strong> Alle LLM-Aufrufe laufen über das interne Enterprise AI Gateway mit Zero Data Retention, Mandantentrennung und DSGVO/GxP-Konformität.
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
            {isEn ? 'Close Guide' : 'Schliessen'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConceptMethodModal;
