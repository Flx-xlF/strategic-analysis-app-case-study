# Terrain: Two-Way Strategic Communications & AI Search Prototype

> **The Premise:** Corporate communications teams publish across press releases, newsroom stories, clinical updates, social posts, and regional briefings—traditionally assuming different audiences read those channels separately. In search and AI assistants, that separation disappears: a single question pulls press coverage, forum threads, company pages, and old PDFs into one answer. Conflicting facts, mixed numbers, or forgotten old PDFs across teams then surface as contradictions—whereas natural local wording does not. **Terrain is an interactive prototype exploring a two-way workflow: spotting where media coverage and AI answers drift from the facts (Outside-In), and helping teams apply approved core facts while tailoring tone naturally inside their daily tools without reading PDF manuals (Top-Down).**

[![Live Demo](https://img.shields.io/badge/Live_Demo-GitHub_Pages-EB0000?style=flat-square&logo=github)](https://flx-xlf.github.io/strategic-analysis-app-case-study/)
[![Stack](https://img.shields.io/badge/Stack-React_19_%7C_TypeScript_5.9_%7C_Tailwind-black?style=flat-square)](https://react.dev/)

* ▶ **90-Second Animated Concept Overview (Default Landing Page):** [https://flx-xlf.github.io/strategic-analysis-app-case-study/](https://flx-xlf.github.io/strategic-analysis-app-case-study/)
* 🛠 **Full Interactive Prototype (Direct Entry to Modules 01–04):** [https://flx-xlf.github.io/strategic-analysis-app-case-study/?view=demo](https://flx-xlf.github.io/strategic-analysis-app-case-study/?view=demo)

---

## What the Prototype Explores

1. **Outside-In (`01–02`): Statistical Filtering Before AI Analysis**
   You cannot paste tens of thousands of weekly articles into an LLM without losing signal. Terrain first removes duplicate wire reprints (`MinHash`), groups articles by topic (`HDBSCAN`), and measures unusual volume spikes (`z`-score — how far above normal daily volume a topic jumps) and how closely coverage matches the company's position (`cosine similarity`). Only the most representative articles are inspected in the AI answer audit across repeated test runs (`n=20`) to see where search-grounded models mix up or omit facts.
2. **Top-Down (`03–04`): Approved Sources & Zero-Friction Workflow Recipes**
   Defining core narratives and writing rules centrally is only half the job—under deadline pressure, nobody opens a 40-page PDF guideline on SharePoint before answering an email or editing a draft. Terrain filters internal repositories down to approved, topic-specific **"Golden Sources"** (`GS-01–GS-03`), flags outdated public PDFs, and embeds four practical writing rules into **1-click workflow recipes** for Outlook, Word, and M365 Copilot—followed by a before/after draft stress-test and journalist inquiry check.

---

## How the Two-Way Workflow Works

```text
┌──────────────────────────────────────────────────────────────────────────────────────┐
│                         1. MONITOR COVERAGE & AI ANSWERS (OUTSIDE-IN)                │
│                                                                                      │
│  48,000+ Raw Items ──► Remove Reprints ──► Group by Topic ──► Spot Volume Spikes     │
│                                                                      │               │
│                                                                      ▼               │
│               [01 Regional Cockpit] ◄────────► [02 Cluster & AI Answer Audit]        │
└──────────────────────────────────────────┬───────────────────────────────────────────┘
                                           │
                          HUMAN EDITORIAL & LEGAL JUDGMENT
                                           │
┌──────────────────────────────────────────▼───────────────────────────────────────────┐
│                         2. PREPARE & TEST DRAFTS (TOP-DOWN)                          │
│                                                                                      │
│  Internal Vault Files ──► Approved Golden Sources ──► 1-Click Workflow Recipes       │
│                                                                      │               │
│                                                                      ▼               │
│        [03 Sources & Workflow Recipes] ◄──────► [04 Stress-Test & Inquiry Check]     │
└──────────────────────────────────────────────────────────────────────────────────────┘
```

### Direction 1: Outside-In (Modules 01 & 02)

> [!TIP]
> **Interactive 5-Step Product Tour:** When you open the live demo, a docked **Product Tour** (`01 Overview` → `02 Regional Cockpit` → `03 Cluster & AI Audit` → `04 Sources & Recipes` → `05 Stress-Test & Inquiry`) walks through the workspace and automatically switches tabs, region filters, and scenarios. You can dismiss or re-open it anytime via `[ Product Tour (5 Steps) ]` in the header.

* **Regional Cockpit (`01`):** Compares how a topic is framed across regions, cantons, and international markets across press coverage, forums, and AI search—contrasting automated sentiment scores (*"76% Neutral"*) against unusual volume spikes (`+3.9σ` above normal volume).
* **Cluster & AI Answer Audit (`02`):** Displays the representative articles driving a cluster alongside the resulting AI search output. Clickable red passages (`[1]` / `[2]`) highlight exact factual distortions, followed by a side-by-side comparison of vague PR prose vs. a front-loaded fact block across `n=20` test runs.

### Direction 2: Top-Down (Modules 03 & 04)
* **Approved Sources & In-Workflow Recipes (`03`):**
  * **Central Source Maintenance:** Filters internal records down to approved Golden Sources (`GS-01` to `GS-03`), flags outdated files in regional folders, and defines four shared writing rules: (1) lead with the main point and key numbers, (2) use consistent terms across regions, (3) don't repeat an accusation to deny it, and (4) answer the question, then state approved facts.
  * **Zero-Friction Daily Execution:** Shows how teams apply those rules in 1 click inside Outlook, Word, and M365 Copilot via a **2-turn guided flow**: **Turn 1** checks the input against approved Golden Sources and marks unverified details as `[Open / To verify]`; the user clicks a **Steering Option** to adjust how much the recipe edits; and **Turn 2** generates the draft with a **Before vs. After Diff** showing exactly what was fixed.
  * **Tailored Across Use Cases (Protecting Scientific Credibility on Studies):** Recipes adjust how much they edit depending on the task—applying full plain-language structuring to **Owned Website Stories** and **Social Posts**, while using a **light-touch Scientific Mode for Clinical Studies** that leaves trial endpoints (`HR 0.41`, `p<0.001`) and medical precision untouched and only adds a clear opening summary separating clinical efficacy from local reimbursement debates.
* **Stress-Test & Inquiry Check (`04A` & `04B`):**
  * **04A (Draft Stress-Test):** Toggles between an initial draft (`Iteration 1`) and a revised version (`Iteration 2`) to inspect likely critical headlines, 48-hour stakeholder reactions, and reputation risk scores (`9.1/10` → `2.6/10`).
  * **04B (Journalist Inquiry Check):** Breaks down tough press questions into the embedded trap, legal/regulatory boundary, and a draft answer that avoids repeating hostile framing.

---

## Design Choices & Realistic Limits of AI

* **Same Core Facts, Organic Local Voice (No Global Copy-Paste):** Enforcing identical boilerplate across countries and channels is neither practical nor desirable—a Phase III study note, a Swiss BAG briefing, and a LinkedIn post need distinct voices. Modern search and AI engines extract semantic meaning, verified facts, and entity names rather than matching verbatim copy: as long as core numbers, product/study names, and policy boundaries stay consistent, AI helps tailor wording organically to each context without hurting GEO visibility.
* **Why 40-page PDF guidelines fail—and why 2-turn recipes work:** Under deadline pressure, communicators do not read static PDF manuals, nor should an LLM ship a "one-shot" executive statement in a single pass. Baking central Golden Sources and writing rules into a 2-turn sidebar helper inside Outlook/Word saves 30 minutes on daily work while keeping human communicators and legal reviewers in control between Turn 1 (diagnosis & source check) and Turn 2 (drafting).
* **Protecting scientific credibility on clinical studies:** You cannot run a Phase III clinical readout through a blunt "simplify everything" marketing prompt without hurting credibility with physicians and regulators. For study communications, the recipe uses a minimal-invasive mode: clinical endpoints, statistical precision, and methodology stay untouched, while a clear context header separates clinical trial efficacy from national cost-agency (`HTA / NICE`) pricing debates so search engines do not confuse a reimbursement rejection with drug failure.
* **Why repeating accusations backfires in search & AI:** Defensive drafts often echo a critic's wording to deny it (e.g., *"We are not boycotting European patients"*). Search systems match both exact words and overall meaning, so official quotes repeating a negative term get linked directly to the company's name. Stripping hostile framing and leading with verified facts avoids reinforcing the accusation.
* **Structure over metadata shortcuts & `n=20` testing:** Metadata tricks (`Schema.org` tags, `llms.txt`) do not fix vague copy. Placing concrete conclusions and verified figures in the opening paragraph of standard web pages (server-rendered HTML), removing superseded public PDFs, and verifying AI answers across `n=20` test runs give both journalists and AI crawlers clear facts to cite.

---

## How It Fits Into an Existing Enterprise IT Environment

This repository is a **client-side prototype** running in the browser with pre-built scenarios. In an enterprise setting, it connects to existing systems rather than operating as a separate tool silo:

| Layer | Existing Corporate Systems | Integration Role |
|---|---|---|
| **1. External Feeds (Outside-In)** | Licensed media & social aggregators (*Factiva, Meltwater, Talkwalker*) + LLM APIs | Ingests article streams via REST webhooks; runs scheduled `n=20` regional prompt checks against search-grounded LLMs. |
| **2. Document & Web Governance (Top-Down)** | **Veeva Vault** (*PromoMats / MedComms*), **SharePoint / M365** & Corporate CMS | Connects read-only via Veeva/Graph APIs (inheriting user permissions and indexing only `Approved` / `Effective` records). Flags superseded public PDFs and publishes server-rendered HTML pages for AI search crawlers (`OAI-SearchBot`, `PerplexityBot`, `Claude-SearchBot`). |
| **3. In-Workflow Recipe Layer (Daily Execution)** | **Microsoft 365 Copilot** (*Outlook, Word, Teams*) & Managed Browser Sidebar | Injects approved Golden Sources (`GS-01–GS-03`) and modular writing rules directly into the communicator's active Outlook email or Word document via 1-click 2-turn recipes, steering buttons, and before/after diffs. |
| **4. Cloud Compute, Private AI & Audit** | Corporate Cloud VPC (*Azure / AWS*), *Databricks* & **Enterprise AI Gateway** | Runs statistical clustering (`MinHash`, `HDBSCAN`) as scheduled Python jobs. Routes all LLM calls through the internal Enterprise AI Gateway (zero data retention, GDPR/FADP/GxP compliant) with SSO audit logging. |

---

## Pre-Loaded Scenarios (EN / DE)

Switch between **English (`EN`)** and **German (`DE`)** and filter by region (`ALL`, `US`, `EU`, `CH`, `APAC`) across five synthetic scenarios (*all scenarios, figures, and internal records shown in the demo are fictional examples*):

**Biopharma & Healthcare Cases:**
1. **Biopharma Pricing & Investment: $15B U.S. Expansion, Reference Pricing & Regional Access:** Reconciling U.S. reference pricing and manufacturing investments with European/Swiss patient access and Swiss headquarters rumors.
2. **Targeted Cancer Therapy (ONCO-01): Clinical Approval vs. Cost & Reimbursement:** Communicating Phase III progression-free survival data with full scientific rigor while navigating European regulatory and UK cost-agency pushback.
3. **Cloud Infrastructure for Electronic Health Records:** Explaining encryption key control (Bring Your Own Key — keeping keys in domestic hands) in plain language to physicians and citizens.

**Cross-Industry Crisis & ESG Cases:**
4. **Supply Chain Labor Standards Inquiry:** Aligning Comms, Legal, and Procurement under due diligence rules after NGO allegations at a Tier-3 supplier.
5. **Alpine Base Tunnel Disruption:** Communicating hardware diagnostics and passenger safety while countering cyber-sabotage rumors.

---

## Running Locally

```bash
git clone https://github.com/Flx-xlF/strategic-analysis-app-case-study.git
cd strategic-analysis-app-case-study
npm install
npm run dev
```
