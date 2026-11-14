# Terrain: Two-Way Strategic Communications & GEO Prototype

> **The Core Premise:** Modern corporate communications operates across earned media, owned stories, executive channels, and regional stakeholder briefings—historically assuming that different audiences consume those channels separately. In the age of zero-click AI search, that separation disappears: answer engines decompose a single question into **5–11 parallel sub-queries** (*query fan-out*), pulling passages from press coverage, forums, owned pages, and legacy files into **one context window** at once. As a result, **incoherence** becomes the central vulnerability—even small framing discrepancies across central, regional, or cantonal teams dilute the company’s voice when AI models cross-reference them. **Terrain explores how corporate communications can gain traction during this shift—auditing where narratives lose pull-through in media and AI search (Outside-In), and enforcing verified Golden Sources and channel-adapted GEO standards across both earned media and owned Corporate Stories (Top-Down).**

[![Live Demo](https://img.shields.io/badge/Live_Demo-GitHub_Pages-EB0000?style=flat-square&logo=github)](https://flx-xlf.github.io/strategic-analysis-app-case-study/)
[![Stack](https://img.shields.io/badge/Stack-React_19_%7C_TypeScript_5.9_%7C_Tailwind-black?style=flat-square)](https://react.dev/)

👉 **Live Interactive Prototype:** [https://flx-xlf.github.io/strategic-analysis-app-case-study/](https://flx-xlf.github.io/strategic-analysis-app-case-study/)

---

## Why This Prototype Exists

With ~70% of searches ending without a click and AI assistants driving `<1%` of web referral traffic, the value of **Generative Engine Optimization (GEO)** for corporate communications is not click acquisition—it is **upstream reputation defense, citation absorption, and factual fidelity**. Gaining traction requires two connected capabilities:

1. **Outside-In: Isolating Real Momentum & Auditing AI Answer Absorption:**
   You cannot paste 50,000 weekly articles into an LLM without hallucination, and standard sentiment scores (*"76% Neutral"*) miss polite trade coverage that hides acute market-access or pricing risks. Terrain filters raw noise statistically first, then runs **multi-run LLM representation audits ($n=20$)** to see where corporate facts are absorbed—or distorted—by AI search engines, giving leadership decision-ready context at the push of a button.
2. **Top-Down: Overcoming Incoherence via Dual-Path (`~84%` Earned + Owned) GEO Governance:**
   Incoherence builds up naturally as central, regional, or cantonal teams adapt messaging to local stakeholders. Because AI engines draw **82%–89% of their citations from earned/third-party media** while relying on **owned corporate domains (`~15%–45%`)** for primary figures, owned pages alone cannot fix third-party distortions—and buried PR prose gets dropped by AI rerankers. Terrain locks onto approved, topic-specific **"Golden Sources"**, flags outdated files and superseded PDFs, and enforces a **channel-adapted GEO framework** across both paths:
   * **Owned Corporate Stories (Answer-First SSR HTML):** Places core conclusions in the opening 30% of text paired with quantitative proof points (`+61.5%` absorption lift) so AI crawlers retrieve and absorb them directly.
   * **Press Releases & Statements (Earned-Media GEO):** Structures official releases with quotable statistics (`+31%–41%` lift) and zero accusation echoes before they reach journalists and newsroom archives.
   * **Media Inquiry Answers & Q&As (Quote-Safe Earned-Media GEO):** Refuses hostile reporter frames and bridges directly to Golden Source facts so journalist quotes in press articles reinforce the company’s narrative in AI search.

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
> **Interactive 5-Step Product Tour (Signal Yellow):** When you open the live demo, an interactive **Product Tour** (`01 Core Premise` → `02 Outside-In Measurement` → `03 GEO & AI Search Audit` → `04 Regional GEO Playbooks` → `05 Stress-Test & IT Fit`) appears as a non-blocking tooltip card with **Signal Yellow (`#FFCC00`) spotlights** highlighting the active UI controls and tabs across the workspace. Clicking `Next Step →` hands-free switches the tabs, regional filters, and scenario comparisons. You can dismiss or re-open it at any time via the `[ Product Tour (5 Steps) ]` button in the header.

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
