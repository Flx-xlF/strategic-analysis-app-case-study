# Terrain: Two-Way Corporate Communications & AI Search Prototype

> **The Problem:** Doctors, journalists, and investors increasingly rely on AI summaries built from press coverage, online forums, company web pages, and archived PDFs. A company cannot control external media or dictate what an AI model says—but it can avoid unforced errors: outdated files left online, key facts buried in vague prose, consistent facts drifting across regions, and defensive quotes that repeat accusations.
>
> **What Terrain Explores:** A browser prototype connecting two loops—spotting where media spikes and AI answers drift from verified facts (**Outside-In**), and anchoring daily drafting in approved core facts inside existing tools without forcing staff through static PDF manuals (**Top-Down**).

[![Live Demo](https://img.shields.io/badge/Live_Demo-GitHub_Pages-EB0000?style=flat-square&logo=github)](https://flx-xlf.github.io/strategic-analysis-app-case-study/)
[![Stack](https://img.shields.io/badge/Stack-React_19_%7C_TypeScript_5.9_%7C_Tailwind-black?style=flat-square)](https://react.dev/)

* **Concept Overview (Default Landing Page):** [https://flx-xlf.github.io/strategic-analysis-app-case-study/](https://flx-xlf.github.io/strategic-analysis-app-case-study/)
* **Full Interactive Prototype (Direct Entry to Modules 01–04):** [https://flx-xlf.github.io/strategic-analysis-app-case-study/?view=demo](https://flx-xlf.github.io/strategic-analysis-app-case-study/?view=demo)

*Note: All companies, figures, clinical study codes, and internal records shown in this client-side prototype are fictional illustrative examples.*

---

## What the Prototype Explores

1. **Separate signal from noise before using AI (Modules `01–02`):**
   Raw weekly media feeds are far too large to read manually, and dumping raw articles into an LLM creates hallucinations. Automated sentiment averages also miss calm, formal trade articles where policy risk quietly builds. Terrain first uses lightweight statistics to group wire reprints and flag sudden regional spikes, then checks AI answers across repeated runs to spot which omitted facts or outdated files skew the summary.
2. **Apply approved core facts inside daily tools (Module `03`):**
   Under deadline pressure, teams skip lengthy static PDF manuals on SharePoint. Terrain filters internal repositories down to approved, topic-specific **"Golden Sources"**, flags outdated public PDFs, and embeds shared writing rules directly inside **1-click Outlook and Word helpers**—adapting tone naturally for public channels while protecting clinical study precision.
3. **Stress-test before human sign-off (Module `04`):**
   Simulates critical headlines, stakeholder reactions, and journalist inquiry traps before release so Comms, Medical, and Legal can iterate and approve with full context.

---

## How the Two-Way Workflow Works

```text
┌──────────────────────────────────────────────────────────────────────────────────────┐
│                         1. MONITOR COVERAGE & AI ANSWERS (OUTSIDE-IN)                │
│                                                                                      │
│  Incoming Media & Forum Feeds ─► Remove Reprints ─► Group by Topic ─► Spot Spikes    │
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
> **Interactive Product Tour:** When you open the live prototype, a docked **Product Tour** (`01 Overview` → `02 Regional Cockpit` → `03 Cluster & AI Audit` → `04 Sources & Recipes` → `05 Stress-Test & Inquiry`) walks through the workspace and switches tabs, region filters, and scenarios automatically. You can dismiss or re-open it anytime via `[ Product Tour (5 Steps) ]` in the header.

* **Regional Cockpit (`01`):** Compares how a topic is framed across regions, cantons, and international markets across press coverage, forums, and AI search—contrasting surface automated sentiment scores (*"Neutral"* ratings on calm trade prose) against statistically unusual volume spikes and narrative alignment checks.
* **Cluster & AI Answer Audit (`02`):** Displays the representative articles driving a cluster alongside the resulting AI search output. Clickable red passages (`[1]` / `[2]`) highlight exact factual distortions, followed by a side-by-side comparison of vague PR prose vs. a front-loaded fact block across repeated test runs.

### Direction 2: Top-Down (Modules 03 & 04)

* **Approved Sources & In-Workflow Recipes (`03`):**
  * **Central Source Maintenance:** Filters internal records down to approved Golden Sources, flags outdated files in regional folders, and defines four shared writing rules: (1) lead with the main point and key numbers, (2) use consistent core facts across regions, (3) don't repeat an accusation to deny it, and (4) answer the question, then state approved facts.
  * **Zero-Friction Daily Execution:** Shows how teams apply those rules in 1 click inside Outlook, Word, and M365 Copilot via a **check-first, draft-second guided flow**: the first pass checks the input against approved Golden Sources and marks unverified details as `[Open / To verify]`; the user selects a **Steering Option** to adjust edit depth; and the second pass generates the draft with a **Before vs. After Diff** showing what changed.
  * **Tailored Across Use Cases (Protecting Scientific Credibility on Studies):** Recipes adjust edit depth depending on the task—applying plain-language structuring to **Owned Website Stories** and **Social Posts**, while using a **light-touch Scientific Mode for Clinical Studies** that leaves trial endpoints and medical precision untouched and only adds a clear opening summary separating clinical efficacy from local reimbursement debates.
* **Stress-Test & Inquiry Check (`04A` & `04B`):**
  * **04A (Draft Stress-Test):** Toggles between an initial draft (`Iteration 1`) and a revised version (`Iteration 2`) to compare simulated reputational risk, likely critical headlines, and stakeholder reactions before release.
  * **04B (Journalist Inquiry Check):** Breaks down tough press questions into the embedded trap, legal/regulatory boundary, and a draft answer that avoids repeating hostile framing.

---

## Design Choices & Realistic Limits of AI

* **External media & probabilistic models limit direct control:** Cleaning up owned web pages and retiring outdated company PDFs reduces *self-inflicted* contradictions and gives retrieval clearer primary facts—it does not silence independent journalism or guarantee identical AI answers across models and runs.
* **Same core facts, natural local voice (no global copy-paste):** Enforcing identical boilerplate across countries and channels is neither practical nor desirable—a Phase III study note, a Swiss authority briefing, and a LinkedIn post need distinct voices. Modern search and AI engines evaluate semantic fact consistency rather than matching verbatim sentences: as long as core figures, product/study names, and policy boundaries stay consistent, AI helps tailor wording organically without hurting visibility.
* **Why lengthy PDF guidelines fail—and why guided recipes work:** Under deadline pressure, communicators rarely open static PDF manuals, nor should an LLM ship a "one-shot" executive statement in a single pass. Baking central Golden Sources and writing rules into a guided sidebar helper inside Outlook and Word removes manual rework while keeping human communicators and legal reviewers in control between source verification and drafting.
* **Protecting scientific credibility on clinical studies:** Running a Phase III clinical readout through a blunt "simplify everything" prompt undermines trust with physicians and regulators. For study communications, the recipe preserves clinical endpoints, statistical precision, and methodology while adding a clear context header separating efficacy from national cost-agency (`HTA / NICE`) pricing debates.
* **Why repeating accusations backfires in search & AI:** Defensive drafts often echo a critic's wording to deny it (e.g., *"We are not boycotting European patients"*). Search systems match both exact words and overall meaning, so official quotes repeating a negative term get linked directly to the company's name. Stripping hostile framing and leading with verified facts avoids reinforcing the accusation.
* **Structure over metadata shortcuts:** Metadata tags (`Schema.org`, `llms.txt`) do not fix vague copy. Placing concrete conclusions and verified figures in the opening paragraph of clean, crawlable web pages, removing superseded public PDFs, and checking AI answers across repeated runs give both journalists and search crawlers clear facts to cite.

---

## Under the Hood (Technical Methods)

* **Reprint deduplication (`MinHash`):** Groups syndicated wire reprints so volume counts reflect distinct stories rather than copies.
* **Topic clustering (`HDBSCAN`):** Separates relevant story clusters from background off-topic chatter.
* **Spike & alignment tracking (`z`-score + `cosine similarity`):** Flags unusual regional volume jumps even when standard sentiment reads neutral, and measures distance from approved company facts.
* **Multi-run AI answer audits:** Queries search-grounded LLMs across repeated runs (rather than trusting one stochastic response) to inspect recurring factual distortions.
* **Clean crawlable web pages (Server-Rendered HTML):** Ensures verified facts and figures load without heavy client-side JavaScript barriers for search crawlers (`OAI-SearchBot`, `PerplexityBot`, `Claude-SearchBot`).

---

## How It Fits Into an Existing Enterprise IT Environment

This repository is a **client-side prototype** running in the browser with pre-built scenarios. In an enterprise setting, it connects to existing systems rather than operating as a separate tool silo:

| Layer | Existing Corporate Systems | Integration Role |
|---|---|---|
| **1. External Feeds (Outside-In)** | Licensed media & social aggregators (*Factiva, Meltwater, Talkwalker*) + LLM APIs | Ingests article streams via REST webhooks; runs scheduled repeated regional prompt checks against search-grounded LLMs. |
| **2. Document & Web Governance (Top-Down)** | **Veeva Vault** (*PromoMats / MedComms*), **SharePoint / M365** & Corporate CMS | Connects read-only via Veeva/Graph APIs (inheriting user permissions and indexing only `Approved` / `Effective` records). Flags superseded public PDFs and publishes server-rendered HTML pages for AI search crawlers (`OAI-SearchBot`, `PerplexityBot`, `Claude-SearchBot`). |
| **3. In-Workflow Recipe Layer (Daily Execution)** | **Microsoft 365 Copilot** (*Outlook, Word, Teams*) & Managed Browser Sidebar | Injects approved Golden Sources and modular writing rules directly into the communicator's active Outlook email or Word document via guided recipes, steering buttons, and before/after diffs. |
| **4. Cloud Compute, Private AI & Audit** | Corporate Cloud VPC (*Azure / AWS*), *Databricks* & **Enterprise AI Gateway** | Runs statistical clustering (`MinHash`, `HDBSCAN`) as scheduled Python jobs. Routes all LLM calls through the internal Enterprise AI Gateway (zero data retention, GDPR/FADP/GxP compliant) with SSO audit logging. |

---

## Pre-Loaded Scenarios (EN / DE)

Switch between **English (`EN`)** and **German (`DE`)** and filter by region (`ALL`, `US`, `EU`, `CH`, `APAC`) across five synthetic scenarios (*all scenarios, figures, and internal records shown in the demo are fictional examples*):

**Biopharma & Healthcare Cases:**
1. **Biopharma Pricing & Investment: $15B U.S. Expansion, Reference Pricing & Regional Access:** Reconciling U.S. reference pricing and manufacturing investments with European/Swiss patient access and Swiss headquarters rumors.
2. **Targeted Cancer Therapy (ONCO-104 / Phase III ONCO-01): Clinical Approval vs. Cost & Reimbursement:** Communicating Phase III progression-free survival data with full scientific rigor while navigating European regulatory and UK cost-agency pushback.
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
