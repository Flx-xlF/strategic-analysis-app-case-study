# Terrain: Two-Way Strategic Communications & AI Search Prototype

> **The Premise:** Corporate communications teams publish across press releases, newsroom stories, social posts, and regional briefings—traditionally assuming different audiences read those channels separately. In search and AI assistants, that separation disappears: a single question pulls press coverage, forum threads, company pages, and old PDFs into one answer. Small wording differences between central, regional, or cantonal teams then surface as contradictions. **Terrain is an interactive prototype exploring a two-way workflow: spotting where coverage and AI answers diverge from the facts (Outside-In), and keeping regional drafts anchored to approved source documents (Top-Down).**

[![Live Demo](https://img.shields.io/badge/Live_Demo-GitHub_Pages-EB0000?style=flat-square&logo=github)](https://flx-xlF.github.io/strategic-analysis-app-case-study/)
[![Stack](https://img.shields.io/badge/Stack-React_19_%7C_TypeScript_5.9_%7C_Tailwind-black?style=flat-square)](https://react.dev/)

👉 **Live Interactive Prototype:** [https://flx-xlF.github.io/strategic-analysis-app-case-study/](https://flx-xlF.github.io/strategic-analysis-app-case-study/)

---

## What the Prototype Explores

1. **Outside-In (`01–02`): Statistical Filtering Before AI Analysis**
   You cannot paste tens of thousands of weekly articles into an LLM without losing signal. Terrain first removes duplicate wire reprints (`MinHash`), groups articles by topic (`HDBSCAN`), and measures unusual volume spikes (`z`-score) and how closely coverage matches the company's position (`cosine similarity`). Only the most representative articles are inspected in the AI answer audit across repeated test runs (`n=20`) to see where search-grounded models mix up or omit facts.
2. **Top-Down (`03–04`): Source-Anchored Regional Drafting & Stress-Testing**
   Incoherence builds up naturally when regional teams adapt messaging under deadline pressure. Terrain filters internal repositories down to a small set of approved, topic-specific **"Golden Sources"**, flags outdated files and superseded public PDFs, and applies four practical writing rules across **Corporate Stories** (server-rendered HTML), social posts, talking points, and Q&As—followed by a before/after draft stress-test and journalist inquiry check.

---

## How the Two-Way Workflow Works

```text
┌──────────────────────────────────────────────────────────────────────────────────────┐
│                         1. MONITOR COVERAGE & AI ANSWERS (OUTSIDE-IN)                  │
│                                                                                      │
│  48,000+ Raw Items ──► MinHash Dedup ──► HDBSCAN Clusters ──► z-Score & Cosine Check │
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
│  Internal Vault Files ──► Status Filter ──► Golden Sources + Shared Writing Rules    │
│                                                                      │               │
│                                                                      ▼               │
│         [03 Regional Playbook] ◄─────────────► [04 Stress-Test & Inquiry Check]      │
└──────────────────────────────────────────────────────────────────────────────────────┘
```

### Direction 1: Outside-In (Modules 01 & 02)

> [!TIP]
> **Interactive 5-Step Product Tour:** When you open the live demo, a docked **Product Tour** (`01 Overview` → `02 Regional Overview` → `03 Cluster & AI Audit` → `04 Regional Playbook` → `05 Stress-Test & Inquiry`) walks through the workspace and automatically switches tabs, region filters, and scenarios. You can dismiss or re-open it anytime via `[ Product Tour (5 Steps) ]` in the header.

* **Regional Cockpit (`01`):** Compares how a topic is framed across regions, cantons, and international markets across traditional media, forums, and AI search—contrasting automated sentiment scores (*"76% Neutral"*) against statistical topic velocity (`z = +3.9σ`).
* **Cluster & AI Answer Audit (`02`):** Displays the representative articles driving a cluster alongside the resulting AI search output. Clickable red passages (`[1]` / `[2]`) highlight exact factual distortions, followed by a side-by-side comparison of vague PR prose vs. a front-loaded, structured fact block across `n=20` test runs.

### Direction 2: Top-Down (Modules 03 & 04)
* **Approved Sources & Regional Playbook (`03`):** Filters internal repository records down to approved Golden Sources (`GS-01` to `GS-03`), flags outdated files in regional folders, and provides working drafts across four formats (*Corporate Story*, *Social*, *Talking Points*, *Q&A*) built around four shared rules:
  1. Lead with the main point and key numbers.
  2. Use consistent terms across regions.
  3. Don't repeat an accusation to deny it.
  4. Answer the question, then bridge to approved facts.
* **Stress-Test & Inquiry Check (`04A` & `04B`):**
  * **04A (Draft Stress-Test):** Toggles between an initial draft (`Iteration 1`) and a revised version (`Iteration 2`) to inspect likely critical headlines, 48-hour stakeholder reactions, and reputation risk scores (`9.1/10` → `2.6/10`).
  * **04B (Journalist Inquiry Check):** Breaks down tough press questions into the embedded trap, legal/regulatory boundary, and a draft answer that avoids repeating hostile framing.

---

## Design Choices & Realistic Limits of AI

* **No "one-shot, ready-to-send" press statements:** An LLM should not ship a finished executive statement in a single pass. Its practical role here is organizing approved facts and testing drafts against multiple stakeholder angles so human communicators and legal teams can edit and sign off the final text.
* **Why repeating accusations backfires in search & AI:** Under deadline pressure, defensive drafts often echo a critic's wording to deny it (e.g., *"We are not boycotting European patients"*). Search retrieval pipelines (keyword and meaning-based matching: `BM25` + dense vector) index official quotes and associate that negative term directly with the company's name. Stripping hostile framing and bridging directly to verified facts avoids reinforcing the accusation.
* **Structure over metadata shortcuts:** Metadata tricks (`Schema.org` tags, `llms.txt`) do not fix vague copy. Placing concrete conclusions and verified figures in the opening paragraph of server-rendered HTML pages, decommissioning superseded public PDFs, and backing claims with quotable figures in press materials give both journalists and AI crawlers clear facts to cite.
* **Testing across repeated runs (`n=20`):** Because AI search answers vary from prompt to prompt, single-run spot checks are unreliable. Auditing across `n=20` runs shows whether factual accuracy actually holds.

---

## How It Fits Into an Existing Enterprise IT Environment

This repository is a **client-side prototype** running in the browser with pre-built scenarios. In an enterprise setting, it would connect to existing systems rather than operate as a standalone tool:

| Layer | Existing Corporate Systems | Integration Role |
|---|---|---|
| **1. External Feeds (Outside-In)** | Licensed media & social aggregators (*Factiva, Meltwater, Talkwalker*) + LLM APIs | Ingests article streams via REST webhooks; runs scheduled `n=20` regional prompt checks against search-grounded LLMs. |
| **2. Document & Web Governance (Top-Down)** | **Veeva Vault** (*PromoMats / MedComms*), **SharePoint / M365** & Corporate CMS | Connects read-only via Veeva/Graph APIs (inheriting existing user access permissions and indexing only `Approved` / `Effective` records). Flags superseded public PDFs and publishes server-rendered (SSR) HTML (pages that load without JavaScript) for AI search crawlers (`OAI-SearchBot`, `PerplexityBot`, `Claude-SearchBot`). |
| **3. Cloud Compute & Private AI** | Corporate Cloud VPC (*Azure / AWS*) + Data Platform (*Databricks / Snowflake*) | Runs statistical clustering (`MinHash`, `HDBSCAN`) as scheduled Python jobs. Routes LLM calls through the internal **Enterprise AI Gateway** (zero data retention, GDPR/FADP/GxP compliant). |
| **4. Identity & Audit** | Corporate SSO (*Entra ID / Okta*) & Review Workflows | Authenticates users via SSO and logs which Golden Source ID and version backed each draft. |

---

## Pre-Loaded Scenarios (EN / DE)

Switch between **English (`EN`)** and **German (`DE`)** and filter by region (`ALL`, `US`, `EU`, `CH`, `APAC`) across five scenarios:
1. **Biopharma Corporate Narrative: Reference Pricing, $23B Capex & Regional Access:** Reconciling U.S. reference pricing and manufacturing investments with European/Swiss access and headquarters rumors.
2. **Oncology Radioligand Therapy (Lu-177 RLT): Approval vs. Reimbursement:** Communicating Phase III survival data while navigating regional cost-effectiveness rejections.
3. **Alpine Base Tunnel Disruption:** Communicating hardware diagnostics and passenger safety while countering cyber-sabotage rumors.
4. **Supply Chain Labor Standards Inquiry:** Aligning Comms, Legal, and Procurement under due diligence rules after NGO allegations.
5. **Cloud Infrastructure for Health Records:** Explaining cryptographic key custody (BYOK) in plain language to physicians and citizens.

---

## Running Locally

```bash
git clone https://github.com/Flx-xlF/strategic-analysis-app-case-study.git
cd strategic-analysis-app-case-study
npm install
npm run dev
```
