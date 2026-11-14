# Terrain: Two-Way Strategic Communications & GEO Prototype

> **The Core Premise:** Classic corporate communications was built around the press release—informing journalists and media outlets so their reporting would reach the public. In the age of zero-click AI search, where stakeholders synthesize answers before ever visiting a corporate website, that model alone is no longer enough to gain traction. Because search-grounded AI engines decompose each user prompt into **5–11 parallel sub-queries** (*query fan-out*) across media coverage, forums, and corporate pages simultaneously, **incoherence** becomes the central vulnerability: even well-intentioned variations in framing across central, regional, or cantonal teams and lingering legacy files dilute the power of corporate communications when AI models aggregate them. **This prototype explores how corporate communications can operate differently during this shift—auditing where narratives lose traction in media and AI search (Outside-In), and building tight coherence around verified Golden Sources and empirical, channel-adapted GEO standards across both earned and owned channels (Top-Down) so the company’s position is accurately absorbed and carries its full weight.**

[![Live Demo](https://img.shields.io/badge/Live_Demo-GitHub_Pages-EB0000?style=flat-square&logo=github)](https://flx-xlf.github.io/strategic-analysis-app-case-study/)
[![Stack](https://img.shields.io/badge/Stack-React_19_%7C_TypeScript_5.9_%7C_Tailwind-black?style=flat-square)](https://react.dev/)

👉 **Live Interactive Prototype:** [https://flx-xlf.github.io/strategic-analysis-app-case-study/](https://flx-xlf.github.io/strategic-analysis-app-case-study/)

---

## Why This Prototype Exists

With nearly 70% of searches ending without a click and standalone AI assistants driving less than 1% of direct web referral traffic, the strategic value of **Generative Engine Optimization (GEO)** for corporate communications is not click acquisition—it is **upstream reputation defense, citation absorption, and factual fidelity**. To gain real traction during this shift—and prevent cross-regional incoherence from diminishing the power of corporate communications—teams need two connected capabilities:

1. **Gaining Visibility & Measuring Absorption Across Media and AI Search (Direction 1: Outside-In):**
   Issuing a press release to media outlets is only the starting point when tens of thousands of news articles, forum threads, and AI-generated answers shape public perception every week. You cannot paste 50,000 articles into an LLM without it making things up, and you cannot trust standard sentiment scores (*"76% Neutral"*), because polite trade coverage often hides serious market-access, regional, or pricing risks. Instead, this system uses statistical filtering (`MinHash` deduplication, `HDBSCAN` topic clustering, and $z$-score spike detection) to narrow the noise down to the few topics gaining real momentum. It then conducts **multi-run LLM representation audits** to measure whether the company’s core arguments are actually **absorbed** into AI search answers or distorted by upstream media and forum framing—so leadership knows exactly where to step in.
2. **Overcoming Incoherence Through Dual-Path (Earned + Owned) GEO Governance (Direction 2: Top-Down):**
   In a large enterprise with hundreds of thousands of files across different systems, incoherence rarely comes from teams ignoring the rules—it builds up naturally as central, regional, cantonal, or divisional teams adapt messaging to their respective stakeholder landscapes and regulatory bodies. Yet when AI query fan-out pulls sources together across boundaries, those discrepancies weaken the organization's overall signal. Furthermore, empirical GEO research shows that AI search engines draw **82%–89% of their citations from earned and third-party sources** while relying on **owned corporate domains (`~15%–45%`)** for primary facts and definitions. Owned pages alone cannot fix third-party distortions, and traditional PR prose gets dropped by AI rerankers. This system filters internal document repositories down to verified, topic-specific **"Golden Sources"**, flags outdated regional files and superseded PDFs, and equips teams with a mandatory, **channel-adapted GEO framework** across both paths:
   * **Owned Corporate Stories & Fact Hubs (Answer-First Primary Sources):** Publishes server-side rendered (SSR) HTML narratives engineered for passage retrieval and reranking—placing the core conclusion in the opening 30% of text and pairing claims with self-contained quantitative proof points (`+61.5%` absorption lift) so AI engines retrieve and absorb them directly.
   * **Press Releases & Official Statements (Earned-Media & Newsroom GEO):** Because ~84% of AI citations come from third-party/earned media, official releases are structured with quotable statistics and authoritative citations (`+31%–41%` visibility lift) while stripping accusation echoes before reaching journalists and newsroom archives.
   * **Media Inquiry Answers & Executive Q&As (Quote-Safe Earned-Media GEO):** Prevents spokespeople from repeating hostile reporter frames or negative keywords—ensuring that journalist quotes in third-party press articles act as positive retrieval sources for search-grounded AI engines rather than reinforcing critics' framing.

---

## How the Two-Way System Works

```text
┌──────────────────────────────────────────────────────────────────────────────────────┐
│                         DIRECTION 1: OUTSIDE-IN (ANALYZE & MEASURE)                  │
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
│                         DIRECTION 2: TOP-DOWN (DEFINE & ENABLE)                      │
│                                                                                      │
│  Internal Vault Files ──► Status Filter ──► Golden Sources + Shared GEO Framework    │
│                                                                      │               │
│                                                                      ▼               │
│         [03 Regional GEO Playbooks] ◄────────► [04 GEO Stress-Test & Inquiry Check]  │
└──────────────────────────────────────────────────────────────────────────────────────┘
```

### Direction 1: Outside-In (Modules 01 & 02)

> [!TIP]
> **90-Second Recruiting & Executive Quick Tour:** When you open the live demo, an interactive **90-Second Guided Tour** (`01 Core Premise` → `02 Outside-In Measurement` → `03 GEO & AI Search Audit` → `04 Regional GEO Playbooks` → `05 Stress-Test & IT Fit`) is active at the top of the workspace. Clicking `Next Step →` automatically switches the tabs, regional filters, and scenario comparisons hands-free. You can dismiss or re-open it at any time via the `[ ▶ 90s Quick Tour ]` button in the header.

* **Statistical filtering before LLMs:** Instead of feeding raw noise into an AI model, a 4-stage pipeline first collapses wire reprints (`MinHash`), groups articles into topic clusters (`HDBSCAN`), and measures volume spikes ($z$-score) and alignment with company messaging (cosine similarity). LLMs are only used at the end to read the ~340 representative cluster texts.
* **Regional Cockpit (`01`):** Compares how a topic is framed across key regions, cantons, and international markets across traditional media, social forums, and AI search engines—giving leadership decision-ready context at the push of a button.
* **Cluster & AI Answer Audit (`02`):** Shows the actual articles driving a cluster and audits what AI answer engines (ChatGPT, Perplexity, Gemini) tell doctors, investors, citizens, or journalists across multi-run prompt portfolios ($n=20$). Clickable red highlights show where the AI distorts facts—and how replacing fluffy PR preambles with **answer-first GEO passage blocks** (pairing claims with quantitative proof points in the opening 30% of text) drives accurate answer absorption.

### Direction 2: Top-Down (Modules 03 & 04)
* **Core Narrative Definition & Multi-Region GEO Playbook (`03`):** Filters hundreds of thousands of internal vault documents down to a small set of approved, topic-specific "Golden Sources" and flags outdated files and superseded PDFs in regional folders that contradict current data. Equips central and regional teams with a mandatory **4-Rule Corporate GEO Framework** (*1. Answer-First & Quantitative Fact-Claim Pairing, 2. Cross-Regional Terminology Lock, 3. Zero Negative-Frame Co-Occurrence, 4. Affirmative Narrative Bridging*) across **GEO-engineered Corporate Stories** (answer-first SSR HTML articles that AI search engines crawl directly), press releases, media answers, social posts, executive talking points, and Q&As.
* **Draft Stress-Test & Inquiry Check (`04A` & `04B`):**
  * **04A (Press Release & Statement Stress-Test / GEO Compliance):** Compares an uncalibrated draft (`Iteration 1`) against a GEO-aligned version (`Iteration 2`) to preview likely critical headlines, 48-hour reactions from payers, regulators, and regional stakeholder groups, and whether the draft accidentally feeds negative keyword associations into earned media and AI search indices.
  * **04B (Journalist Inquiry Check & Narrative Pivot):** Breaks down tough investigative press questions into the underlying trap, the legal/regulatory boundary, and a **GEO-safe response scaffold** that refuses to repeat hostile accusations and instead bridges directly to the company's own narrative.

---

## Realistic Boundaries of AI & Empirical GEO Realities

* **No "one-shot, ready-to-send" answers—LLMs enforce the GEO framework and run multi-angle challenges; humans iterate:** An LLM will never produce a finished, ready-to-send executive statement in a single pass. Its real value is giving teams a structured **GEO framework** and a simultaneous **multi-angle stress-test** (simulating how regional policymakers, regulatory/HTA bodies, local stakeholders, and journalists will react at once) so human communicators can iterate the final text with full context.
* **Why never repeating accusations or negative frames is critical for GEO:** Under deadline pressure, defensive drafts often repeat a critic's accusation to deny it (e.g., *"We are not boycotting European patients"*). From a **GEO** perspective, this is self-sabotage: hybrid retrieval pipelines (BM25 + dense vector) weight official corporate domains and earned press quotes heavily. Repeating an accusation in a corporate statement, press release, or media inquiry answer anchors that negative frame directly to the company's entity in AI search indices and wastes the retrieval chunk on the critic's words. Instead, the workflow strips negative frames and proposes disciplined bridges so AI search engines index and synthesize the **company's own narrative**.
* **No `Schema.org` or `llms.txt` shortcuts—Answer-First Passage Engineering & Multi-Run Auditing ($n=20$):** Empirical late-2026 research confirms that `Schema.org` markup and `llms.txt` files provide no standalone causal lift in AI citations, and single-run "AI ranking positions" repeat less than 0.1% of the time. Instead, surviving the retrieval reranker cutoff and reducing distorted AI summaries (from ~45% to ~5% across $n=20$ distributional evaluation runs) requires **answer-first SSR HTML passage blocks** (placing core conclusions and quantitative proof points in the opening 30% of text), **decommissioning superseded PDFs**, and **earned-media corroboration**.
* **LLMs provide decision-ready context at the push of a button; human leadership makes the call:** In addition to spotting statistical volume spikes and checking drafts against approved wording, LLMs **assist leadership in taking fast, informed decisions by synthesizing the relevant cross-regional context, regulatory trade-offs, and stakeholder angles at the push of a button**—compressing days of manual briefing preparation into seconds. Weighing legal risk, regulatory timing, and public trust then remains a human leadership decision.

---

## How This Integrates Into an Existing Enterprise IT Environment (Realistic Outlook)

This repository is a **client-side prototype** (running entirely in the browser with pre-built scenarios for fast review). In a real regulated enterprise or institution operating across central and regional hubs, this system would not be built as a standalone "shadow IT" silo. While exact internal configurations vary, a production deployment realistically connects to four existing enterprise layers:

| Layer | Existing Corporate Systems | How This System Connects |
|---|---|---|
| **1. External Feeds (Outside-In)** | Licensed media & social aggregators (*Factiva, Meltwater, Talkwalker*) + public LLM APIs | Ingests article streams via standard REST webhooks; runs scheduled multi-run ($n=20$) regional prompt portfolios against search-grounded LLMs to audit citation absorption and factual fidelity. |
| **2. Document & Web Governance (Top-Down)** | **Veeva Vault** (*PromoMats / MedComms*), **SharePoint / M365** & Corporate CMS | Connects read-only via Veeva/Graph APIs (inheriting **RBAC** and indexing only `Approved` / `Effective` records). Flags superseded public PDFs for decommissioning and publishes answer-first, server-side rendered (SSR) HTML for non-JS AI search crawlers (`OAI-SearchBot`, `PerplexityBot`, `Claude-SearchBot`). |
| **3. Cloud Compute & Private AI** | Corporate Cloud VPC (*Azure / AWS*) + Data Platform (*Databricks / Snowflake*) | Statistical clustering (MinHash, HDBSCAN) runs as scheduled Python jobs. All LLM calls route through the internal **Enterprise AI Gateway** (zero data retention, no training on company data, GDPR/FADP/GxP compliant). |
| **4. Identity & Compliance Audit** | Corporate SSO (*Entra ID / Okta*) & MLR Review Workflows | Authenticates users via SSO and logs an immutable audit trail (which Golden Source document ID and version backed each generated draft). |
| **3. Cloud Compute & Private AI** | Corporate Cloud VPC (*Azure / AWS*) + Data Platform (*Databricks / Snowflake*) | Statistical clustering (MinHash, HDBSCAN) runs as scheduled Python jobs. All LLM calls route through the internal **Enterprise AI Gateway** (zero data retention, no training on company data, GDPR/FADP/GxP compliant). |
| **4. Identity & Compliance Audit** | Corporate SSO (*Entra ID / Okta*) & MLR Review Workflows | Authenticates users via SSO and logs an immutable audit trail (which Golden Source document ID and version backed each generated draft). |

---

## Pre-Loaded Scenarios (EN / DE)

Switch between **English (`EN`)** and **German (`DE`)** and filter by geographic and organizational hub (`ALL`, `US`, `EU`, `CH`, `APAC`, cantons, or federal units) across five generic enterprise scenarios:
1. **Biopharma Corporate Narrative: Reference Pricing, $23B Capex & Regional Access (Primary Default):** Reconciling reference pricing mechanisms and a major manufacturing expansion with regional access needs—preventing negative headlines and cross-regional headquarters rumors.
2. **Oncology Radioligand Therapy (Lu-177 RLT): Health Authority Approval vs. Regional HTA & Reimbursement:** Communicating a clinically proven progression-free survival doubling (Phase III RLT-01) while navigating regional comparator disputes and cost-per-QALY rejections.
3. **Alpine Base Tunnel Disruption:** Communicating hardware diagnostics and passenger safety while countering cross-border cyber-sabotage rumors.
4. **Supply Chain Labor Standards Inquiry:** Aligning Comms, Legal, and Procurement under due diligence rules (e.g. CSDDD) after NGO allegations.
5. **Cloud Infrastructure for Health Records:** Explaining cryptographic key custody (BYOK) in plain language to skeptical physicians and citizens.

---

## Running Locally

```bash
git clone https://github.com/Flx-xlF/strategic-analysis-app-case-study.git
cd strategic-analysis-app-case-study
npm install
npm run dev
```

*Note: Built as a conceptual and functional case study demonstrating practical AI enablement, statistical filtering, and cross-functional governance for corporate communications.*
