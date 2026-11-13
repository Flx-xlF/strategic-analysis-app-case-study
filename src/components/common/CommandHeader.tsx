import React from 'react';
import { ScenarioMeta, Language } from '../../fixtures/scenarios';
import { WorldRegionId } from '../../fixtures/cockpitFixtures';
import { 
  ChevronDown, 
  Globe,
  BarChart3,
  BrainCircuit,
  Sparkles,
  ShieldCheck,
  HelpCircle,
  X,
  FileCheck2,
  Database,
  Layers,
  ArrowRight,
  Server,
  Compass
} from 'lucide-react';

export type ActiveTab = 'cockpit' | 'geo' | 'trending' | 'cascade';

interface Props {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  selectedScenario: ScenarioMeta;
  scenariosList: ScenarioMeta[];
  onSelectScenario: (scenario: ScenarioMeta) => void;
  selectedRegion: WorldRegionId;
  onSelectRegion: (reg: WorldRegionId) => void;
  showConceptGuide: boolean;
  onToggleConceptGuide: () => void;
  showQuickTour?: boolean;
  onToggleQuickTour?: () => void;
  lang: Language;
  setLang: (lang: Language) => void;
  // Optional legacy props for backwards compatibility
  onSimulate?: () => void;
  isStreaming?: boolean;
  onAbort?: () => void;
}

export const CommandHeader: React.FC<Props> = ({
  activeTab,
  setActiveTab,
  selectedScenario,
  scenariosList,
  onSelectScenario,
  selectedRegion,
  onSelectRegion,
  showConceptGuide,
  onToggleConceptGuide,
  showQuickTour = false,
  onToggleQuickTour,
  lang,
  setLang
}) => {
  const isEn = lang === 'en';

  return (
    <>
    <header className="bg-white border-b border-sbb-aluminum sticky top-0 z-40">
      {/* Level 1: System Telemetry Bar */}
      <div className="bg-sbb-black text-white px-6 sm:px-8 py-2.5 flex items-center justify-between border-b border-zinc-800">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 bg-sbb-red shrink-0" />
          <span className="type-ui font-black text-white tracking-[0.2em] text-[11px]">
            TERRAIN // TWO-WAY STRATEGIC COMMS COCKPIT & ENABLEMENT
          </span>
        </div>

        <div className="flex items-center gap-4 text-[10px] font-mono">
          {/* Honest methodology badge */}
          <div className="hidden md:flex items-center gap-2 text-zinc-300">
            <span className="w-1.5 h-1.5 bg-zinc-400" />
            <span className="tracking-widest">
              {isEn ? 'STATISTICAL & LLM HYBRID ARCHITECTURE' : 'STATISTISCHE & LLM HYBRID-ARCHITEKTUR'}
            </span>
          </div>

          <div className="hidden md:block h-3 w-px bg-zinc-700" />

          {/* 90-Second Recruiting & Executive Quick Tour Toggle */}
          {onToggleQuickTour && (
            <button
              onClick={onToggleQuickTour}
              className={`px-2.5 py-1 font-mono text-[10px] font-bold tracking-wider uppercase transition-colors cursor-pointer border flex items-center gap-1.5 ${
                showQuickTour
                  ? 'bg-sbb-red text-white border-sbb-red'
                  : 'bg-zinc-900 text-white border-sbb-red/80 hover:bg-sbb-red hover:border-sbb-red'
              }`}
            >
              <Compass className="w-3 h-3" />
              <span>{isEn ? '90s Quick Tour' : '90s Kurz-Tour'}</span>
            </button>
          )}

          {/* Concept, Method & IT Integration Toggle */}
          <button
            onClick={onToggleConceptGuide}
            className={`px-2.5 py-1 font-mono text-[10px] font-bold tracking-wider uppercase transition-colors cursor-pointer border flex items-center gap-1.5 ${
              showConceptGuide
                ? 'bg-sbb-red text-white border-sbb-red'
                : 'bg-zinc-900 text-zinc-300 border-zinc-700 hover:text-white hover:border-zinc-500'
            }`}
          >
            <HelpCircle className="w-3 h-3" />
            <span>{isEn ? 'Concept, Method & IT Fit' : 'Konzept, Methodik & IT-Integration'}</span>
          </button>

          <div className="h-3 w-px bg-zinc-700" />

          {/* Language Switcher */}
          <div className="flex items-center gap-1.5 bg-zinc-900 border border-zinc-700 px-2 py-0.5">
            <Globe className="w-3 h-3 text-zinc-400" />
            <button
              onClick={() => setLang('en')}
              className={`px-1.5 py-0.5 transition-colors cursor-pointer ${
                lang === 'en' ? 'text-white font-bold bg-zinc-800' : 'text-zinc-400 hover:text-white'
              }`}
            >
              EN
            </button>
            <span className="text-zinc-600">|</span>
            <button
              onClick={() => setLang('de')}
              className={`px-1.5 py-0.5 transition-colors cursor-pointer ${
                lang === 'de' ? 'text-white font-bold bg-zinc-800' : 'text-zinc-400 hover:text-white'
              }`}
            >
              DE
            </button>
          </div>

          <div className="h-3 w-px bg-zinc-700" />

          <a
            href="https://github.com/Flx-xlF/strategic-analysis-app-case-study"
            target="_blank"
            rel="noreferrer"
            className="text-zinc-400 hover:text-white transition-colors underline underline-offset-2"
          >
            GITHUB REPO
          </a>
        </div>
      </div>

      {/* Collapsible Concept, Method & Enterprise IT Guide */}
      {showConceptGuide && (
        <div className="bg-[#FAF9F5] border-b border-sbb-aluminum px-6 sm:px-8 py-6 transition-all">
          <div className="max-w-[1600px] mx-auto">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-zinc-200">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-sbb-red" />
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-sbb-black">
                  {isEn ? 'SYSTEM ARCHITECTURE, METHODOLOGY & ENTERPRISE IT INTEGRATION' : 'SYSTEMARCHITEKTUR, METHODIK & ENTERPRISE-IT-INTEGRATION'}
                </span>
              </div>
              <button
                onClick={onToggleConceptGuide}
                className="text-zinc-500 hover:text-sbb-black p-1 transition-colors cursor-pointer"
                title={isEn ? 'Close Guide' : 'Schliessen'}
              >
                <X className="w-4 h-4" />
              </button>
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
                      <strong>Internal corporate mountain:</strong> 1.42M enterprise files exist across vaults. Simple RAG pulls outdated drafts. Temporal validity gating locks 42 canonical Golden Sources.
                    </>
                  ) : (
                    <>
                      <strong>Interner Dokumentenberg:</strong> 1.42 Mio. Dateien lagern in SharePoint/Vaults. Einfaches RAG zieht veraltete Entwürfe. Gültigkeitsfilter sperren Altbestände und sichern 42 verbindliche Golden Sources.
                    </>
                  )}
                </p>
              </div>

              {/* Column 2: Process Integration for Management & Teams */}
              <div className="space-y-2 border-r border-zinc-200 pr-4 last:border-r-0">
                <div className="font-mono font-bold text-sbb-black uppercase tracking-wider flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-sbb-red" />
                  <span>{isEn ? '2. PROCESS VALUE (MGMT & TEAMS)' : '2. PROZESSNUTZEN (MGMT & TEAMS)'}</span>
                </div>
                <p>
                  {isEn ? (
                    <>
                      <strong>For Management (Steering):</strong> Replaces clipping binders with a 5-minute weekly decision radar—connecting external narrative pull-through (`Cosine`) and anomaly spikes (`z-score`) directly to market-access and reputation priorities.
                    </>
                  ) : (
                    <>
                      <strong>Für das Management (Steuerung):</strong> Ersetzt Pressespiegel durch ein 5-Minuten-Entscheidungsradar, das Narrativ-Durchdringung (`Cosine`) und Risiko-Spikes (`z-Score`) direkt mit Market-Access-Prioritäten verknüpft.
                    </>
                  )}
                </p>
                <p>
                  {isEn ? (
                    <>
                      <strong>For Comms Teams (Execution):</strong> Eliminates SharePoint hunting and blank-page prompt guesswork. Teams adapt pre-cleared Golden Sources (`GS-01`–`GS-03`) with human-in-the-loop Legal/MLR gates, cutting alignment from days to hours.
                    </>
                  ) : (
                    <>
                      <strong>Für Teams (Umsetzung):</strong> Beseitigt Dokumentensuche und Prompt-Raten. Länderteams nutzen vorab geprüfte Golden Sources (`GS-01`–`GS-03`) mit klaren Legal/MLR-Freigabepunkten und sparen Tage in der Abstimmung.
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
                      <strong>Generative engines remain stochastic:</strong> Publishing structured fact schemas (GEO) does <em>not</em> guarantee 100% obedience by third-party LLMs. However, empirical tests show it drastically cuts distortion rates (from ~45% to ~5%) compared to narrative PR prose.
                    </>
                  ) : (
                    <>
                      <strong>KI-Suchmaschinen bleiben stochastisch:</strong> Strukturierte Fakten (GEO) garantieren <em>keine</em> 100%ige Beherrschung fremder LLMs. Empirische Tests belegen jedoch eine drastische Senkung der Fehlerraten (von ~45% auf ~5%) gegenüber PR-Fliessprosa.
                    </>
                  )}
                </p>
                <p>
                  {isEn ? (
                    <>
                      <strong>Editorial judgment over automation:</strong> AI highlights anomalies; human counsel decodes the underlying regulatory, legal, and capital market stakes.
                    </>
                  ) : (
                    <>
                      <strong>Urteilskraft vor Automatisierung:</strong> KI isoliert statistische Auffälligkeiten; die strategische Einordnung der juristischen und regulatorischen Tragweite bleibt menschliche Führungsaufgabe.
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
                      <strong>Connectors & Governance:</strong> Read-only connectors to <strong>Veeva Vault</strong> (PromoMats/MedComms) and <strong>SharePoint (Graph API)</strong> enforcing existing RBAC and approval status (`Approved` vs `Draft`). External feeds via standard Factiva/Meltwater APIs.
                    </>
                  ) : (
                    <>
                      <strong>Schnittstellen & Berechtigungen:</strong> Lese-Schnittstellen zu <strong>Veeva Vault</strong> & <strong>SharePoint (Graph API)</strong> unter strikter Einhaltung bestehender Zugriffsrechte (RBAC) und Status-Filter (`Approved` vs `Draft`).
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
          </div>
        </div>
      )}

      {/* Level 2: Primary Control Deck (Scenario Switcher + Shared Regional Filter) */}
      <div className="px-6 sm:px-8 py-3.5 bg-white border-b border-sbb-aluminum flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
        {/* Scenario Selection Control */}
        <div className="flex flex-1 items-center gap-3">
          <label htmlFor="scenario-select" className="type-ui text-sbb-stone shrink-0 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-sbb-red" />
            <span>{isEn ? 'Scenario:' : 'Szenario:'}</span>
          </label>
          <div className="relative flex-1 max-w-md">
            <select
              id="scenario-select"
              value={selectedScenario.id}
              onChange={(e) => {
                const found = scenariosList.find(s => s.id === e.target.value);
                if (found) onSelectScenario(found);
              }}
              className="w-full appearance-none bg-sbb-cloud hover:bg-zinc-100 transition-colors border border-sbb-aluminum px-4 py-2 pr-10 text-sm font-bold text-sbb-black cursor-pointer focus:outline-none focus:border-sbb-black"
            >
              {scenariosList.map(s => (
                <option key={s.id} value={s.id}>
                  {s.title}
                </option>
              ))}
            </select>
            <ChevronDown className="w-4 h-4 text-sbb-stone absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>

          {/* Shared World Region Filter */}
          <div className="hidden sm:flex items-center gap-1.5 ml-2">
            <span className="type-ui text-sbb-stone shrink-0 flex items-center gap-1">
              <Globe className="w-3 h-3 text-zinc-500" />
              <span>{isEn ? 'Filter Region:' : 'Region filtern:'}</span>
            </span>
            <div className="flex items-center gap-0.5 bg-sbb-cloud p-0.5 border border-sbb-aluminum text-xs font-mono">
              <button
                onClick={() => onSelectRegion('all')}
                className={`px-2.5 py-1 font-bold transition-all cursor-pointer ${
                  selectedRegion === 'all' ? 'bg-sbb-black text-white' : 'text-sbb-stone hover:text-sbb-black'
                }`}
              >
                ALL
              </button>
              <button
                onClick={() => onSelectRegion('us')}
                className={`px-2.5 py-1 font-bold transition-all cursor-pointer ${
                  selectedRegion === 'us' ? 'bg-sbb-black text-white' : 'text-sbb-stone hover:text-sbb-black'
                }`}
              >
                US
              </button>
              <button
                onClick={() => onSelectRegion('eu')}
                className={`px-2.5 py-1 font-bold transition-all cursor-pointer ${
                  selectedRegion === 'eu' ? 'bg-sbb-black text-white' : 'text-sbb-stone hover:text-sbb-black'
                }`}
              >
                EU
              </button>
              <button
                onClick={() => onSelectRegion('ch')}
                className={`px-2.5 py-1 font-bold transition-all cursor-pointer ${
                  selectedRegion === 'ch' ? 'bg-sbb-black text-white' : 'text-sbb-stone hover:text-sbb-black'
                }`}
              >
                CH
              </button>
              <button
                onClick={() => onSelectRegion('apac')}
                className={`px-2.5 py-1 font-bold transition-all cursor-pointer ${
                  selectedRegion === 'apac' ? 'bg-sbb-black text-white' : 'text-sbb-stone hover:text-sbb-black'
                }`}
              >
                APAC
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Level 3: Two-Way Strategic Operating Model Navigation (2 Columns) */}
      <div className="px-6 sm:px-8 bg-[#F8F8F9] border-b border-sbb-aluminum py-1">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-[1600px] mx-auto">
          {/* Column 1: Direction 1 - Outside-In (Analyze & Measure) */}
          <div className="flex items-center gap-1.5 border border-zinc-200 bg-white p-1">
            <span className="text-[10px] font-mono font-black text-sbb-black uppercase tracking-wider px-2 py-1 bg-zinc-100 border-r border-zinc-200 shrink-0">
              {isEn ? '◄ DIRECTION 1: OUTSIDE-IN (MEASURE)' : '◄ RICHTUNG 1: OUTSIDE-IN (MESSEN)'}
            </span>

            <button
              onClick={() => setActiveTab('cockpit')}
              className={`flex-1 px-3 py-2 font-mono text-xs font-bold tracking-wider uppercase transition-all flex items-center justify-center gap-2 cursor-pointer border ${
                activeTab === 'cockpit'
                  ? 'border-sbb-red bg-sbb-red text-white'
                  : 'border-transparent text-sbb-stone hover:text-sbb-black hover:bg-zinc-50'
              }`}
            >
              <span className={`text-[10px] font-black ${activeTab === 'cockpit' ? 'text-white/80' : 'opacity-60'}`}>01</span>
              <BarChart3 className={`w-3.5 h-3.5 ${activeTab === 'cockpit' ? 'text-white' : 'text-sbb-red'}`} />
              <span className="truncate">{isEn ? 'Regional Cockpit' : 'Regionales Cockpit'}</span>
            </button>

            <button
              onClick={() => setActiveTab('geo')}
              className={`flex-1 px-3 py-2 font-mono text-xs font-bold tracking-wider uppercase transition-all flex items-center justify-center gap-2 cursor-pointer border ${
                activeTab === 'geo'
                  ? 'border-sbb-red bg-sbb-red text-white'
                  : 'border-transparent text-sbb-stone hover:text-sbb-black hover:bg-zinc-50'
              }`}
            >
              <span className={`text-[10px] font-black ${activeTab === 'geo' ? 'text-white/80' : 'opacity-60'}`}>02</span>
              <BrainCircuit className={`w-3.5 h-3.5 ${activeTab === 'geo' ? 'text-white' : 'text-sbb-red'}`} />
              <span className="truncate">{isEn ? 'Cluster & AI Audit' : 'Cluster & KI-Audit'}</span>
            </button>
          </div>

          {/* Column 2: Direction 2 - Top-Down (Define & Enable) */}
          <div className="flex items-center gap-1.5 border border-zinc-200 bg-white p-1">
            <span className="text-[10px] font-mono font-black text-sbb-black uppercase tracking-wider px-2 py-1 bg-zinc-100 border-r border-zinc-200 shrink-0">
              {isEn ? 'DIRECTION 2: TOP-DOWN (ENABLE) ►' : 'RICHTUNG 2: TOP-DOWN (BEFÄHIGEN) ►'}
            </span>

            <button
              onClick={() => setActiveTab('trending')}
              className={`flex-1 px-3 py-2 font-mono text-xs font-bold tracking-wider uppercase transition-all flex items-center justify-center gap-2 cursor-pointer border ${
                activeTab === 'trending'
                  ? 'border-sbb-red bg-sbb-red text-white'
                  : 'border-transparent text-sbb-stone hover:text-sbb-black hover:bg-zinc-50'
              }`}
            >
              <span className={`text-[10px] font-black ${activeTab === 'trending' ? 'text-white/80' : 'opacity-60'}`}>03</span>
              <Sparkles className={`w-3.5 h-3.5 ${activeTab === 'trending' ? 'text-white' : 'text-sbb-red'}`} />
              <span className="truncate">{isEn ? 'Regional Playbook' : 'Regionales Playbook'}</span>
            </button>

            <button
              onClick={() => setActiveTab('cascade')}
              className={`flex-1 px-3 py-2 font-mono text-xs font-bold tracking-wider uppercase transition-all flex items-center justify-center gap-2 cursor-pointer border ${
                activeTab === 'cascade'
                  ? 'border-sbb-red bg-sbb-red text-white'
                  : 'border-transparent text-sbb-stone hover:text-sbb-black hover:bg-zinc-50'
              }`}
            >
              <span className={`text-[10px] font-black ${activeTab === 'cascade' ? 'text-white/80' : 'opacity-60'}`}>04</span>
              <ShieldCheck className={`w-3.5 h-3.5 ${activeTab === 'cascade' ? 'text-white' : 'text-sbb-red'}`} />
              <span className="truncate">{isEn ? 'Stress-Test & Inquiry' : 'Stresstest & Anfrage'}</span>
            </button>
          </div>
        </div>
      </div>
    </header>

      {/* Level 4: Non-Sticky Executive Scenario Context Banner */}
      <div className="px-6 sm:px-8 py-3 bg-white border-b border-sbb-aluminum">
        <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row lg:items-center justify-between gap-3">
          <div className="space-y-0.5">
            <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-sbb-stone">
              <span className="font-bold text-sbb-black">{selectedScenario.organization}</span>
              <span>//</span>
              <span>{selectedScenario.category}</span>
              <span>//</span>
              <span>{isEn ? 'AS OF: ' : 'STAND: '}{selectedScenario.date}</span>
            </div>
            <h2 className="text-base font-bold text-sbb-black tracking-tight">
              {selectedScenario.title}
            </h2>
          </div>

          <div className="text-xs text-sbb-stone max-w-2xl leading-relaxed hidden md:block">
            {selectedScenario.summary}
          </div>
        </div>
      </div>
    </>
  );
};

export default CommandHeader;
