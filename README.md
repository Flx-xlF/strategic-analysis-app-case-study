# Terrain: Two-Way Strategic Communications & GEO Prototype

> **The Core Premise:** Classic corporate communications was built around the press release—informing journalists and media outlets so their reporting would reach the public. In the age of AI search, that model alone is no longer enough to gain traction. Because AI answer engines continuously synthesize media coverage, forums, and corporate channels across regions and cantons, **incoherence** becomes the central vulnerability: even well-intentioned variations in framing across central, regional, or cantonal teams, regional adaptations, and millions of internal files dilute the power of corporate communications when AI models aggregate them. **This prototype explores how corporate communications can operate differently during this shift—auditing where narratives lose traction in media and AI search (Outside-In), and building tight coherence around verified Golden Sources and shared, channel-adapted GEO standards (Top-Down) so the company’s position comes through clearly and carries its full weight.**

[![Live Demo](https://img.shields.io/badge/Live_Demo-GitHub_Pages-EB0000?style=flat-square&logo=github)](https://flx-xlf.github.io/strategic-analysis-app-case-study/)
[![Stack](https://img.shields.io/badge/Stack-React_19_%7C_TypeScript_5.9_%7C_Tailwind-black?style=flat-square)](https://react.dev/)

👉 **Live Interactive Prototype:** [https://flx-xlf.github.io/strategic-analysis-app-case-study/](https://flx-xlf.github.io/strategic-analysis-app-case-study/)

---

## Why This Prototype Exists

To gain real traction during the shift to AI search—and prevent cross-regional incoherence from diminishing the power of corporate communications—teams need two connected capabilities:

1. **Gaining Visibility & Traction Across Media and AI Search (Direction 1: Outside-In):**
   Issuing a press release to media outlets is only the starting point when tens of thousands of news articles, forum threads, and AI-generated answers shape public perception every week. You cannot paste 50,000 articles into an LLM without it making things up, and you cannot trust standard sentiment scores (*"76% Neutral"*), because polite trade coverage often hides serious market-access, regional, or pricing risks. Instead, this system uses statistical filtering (`MinHash` deduplication, `HDBSCAN` topic clustering, and $z$-score spike detection) to narrow the noise down to the few topics gaining real momentum. It then checks how the company’s core arguments are coming across in regional media and AI search engines—pinpointing where incoherence or missing context causes AI answers to distort the facts, so leadership knows where to step in.
2. **Overcoming Incoherence Through Shared Golden Sources, GEO Standards & Multi-Channel Discipline (Direction 2: Top-Down):**
   In a large enterprise with hundreds of thousands of files across different systems, incoherence rarely comes from teams ignoring the rules—it builds up naturally as central, regional, cantonal, or divisional teams adapt messaging to their respective stakeholder landscapes and regulatory bodies. Yet when AI search engines pull sources together across boundaries, those discrepancies weaken the organization's overall signal. To build coherence without slowing teams down, this system filters massive internal document repositories down to a small, verified set of topic-specific **"Golden Sources"** and flags outdated regional files. From there, it equips central and regional teams with a mandatory, **channel-adapted Generative Engine Optimization (GEO) framework** across all communication measures:
   * **Owned Corporate Stories (Direct-to-AI Primary Sources):** Publishes deep, context-rich narratives with embedded structured fact blocks directly on corporate domains—transforming company stories into high-authority primary sources that AI search engines actively retrieve and cite alongside traditional media coverage.
   * **Press Releases & Official Statements (Newsroom & Earned-Media GEO):** Ensures official releases pair every quotable claim with verifiable proof points and strip accusation echoes before reaching journalists and entering online newsroom archives.
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
* **Cluster & AI Answer Audit (`02`):** Shows the actual articles driving a cluster and audits what AI answer engines (ChatGPT, Perplexity, Gemini) tell doctors, investors, citizens, or journalists. Clickable red highlights show where the AI distorts facts—and how providing a structured fact block (**Generative Engine Optimization / GEO**) reduces those errors.

### Direction 2: Top-Down (Modules 03 & 04)
* **Core Narrative Definition & Multi-Region GEO Playbook (`03`):** Filters hundreds of thousands of internal vault documents down to a small set of approved, topic-specific "Golden Sources" and flags outdated files in regional folders that contradict current data. Equips central and regional teams with a mandatory **4-Rule Corporate GEO Framework** (*1. Explicit Entity & Fact Anchors, 2. Cross-Regional Terminology Lock, 3. Zero Negative-Frame Co-Occurrence, 4. Affirmative Narrative Bridging*) across **GEO-engineered Corporate Stories** (owned newsroom articles that AI search engines crawl directly without journalist truncation), press releases, media answers, social posts, executive talking points, and Q&As.
* **Draft Stress-Test & Inquiry Check (`04A` & `04B`):**
  * **04A (Press Release & Statement Stress-Test / GEO Compliance):** Compares an uncalibrated draft (`Iteration 1`) against a GEO-aligned version (`Iteration 2`) to preview likely critical headlines, 48-hour reactions from payers, regulators, and regional stakeholder groups, and whether the draft accidentally feeds negative keyword associations into AI search indices.
  * **04B (Journalist Inquiry Check & Narrative Pivot):** Breaks down tough investigative press questions into the underlying trap, the legal/regulatory boundary, and a **GEO-safe response scaffold** that refuses to repeat hostile accusations and instead bridges directly to the company's own narrative.

---

## Realistic Boundaries of AI (What It Can and Cannot Do)

* **No "one-shot, ready-to-send" answers—LLMs enforce the GEO framework and run multi-angle challenges; humans iterate:** An LLM will never produce a finished, ready-to-send executive statement in a single pass. Its real value is giving teams a structured **GEO framework** and a simultaneous **multi-angle stress-test** (simulating how regional policymakers, regulatory/HTA bodies, local stakeholders, and journalists will react at once) so human communicators can iterate the final text with full context.
* **Why never repeating accusations or negative frames is critical for GEO:** Under deadline pressure, defensive drafts often repeat a critic's accusation to deny it (e.g., *"We are not boycotting European patients"*). From a **GEO** perspective, this is self-sabotage: search-grounded LLMs and retrieval pipelines weight official corporate domains heavily and build associations via keyword co-occurrence. Repeating an accusation in a corporate statement, press release, or media inquiry answer anchors that negative frame directly to the company's entity in AI search indices and wastes the retrieval window on the critic's words. Instead, the workflow strips negative frames and proposes disciplined bridges so AI search engines index and synthesize the **company's own narrative**.
* **GEO reduces errors, but does not control third-party LLMs:** Publishing machine-readable facts (`Schema.org` / structured Q&As) on corporate web pages does *not* guarantee 100% obedience by external AI models. However, in search-grounded evaluation runs ($n=20$), structured fact blocks reduced distorted summaries from ~45% to ~5% compared to traditional PR prose.
* **LLMs provide decision-ready context at the push of a button; human leadership makes the call:** In addition to spotting statistical volume spikes and checking drafts against approved wording, LLMs **assist leadership in taking fast, informed decisions by synthesizing the relevant cross-regional context, regulatory trade-offs, and stakeholder angles at the push of a button**—compressing days of manual briefing preparation into seconds. Weighing legal risk, regulatory timing, and public trust then remains a human leadership decision.

---

## How This Integrates Into an Existing Enterprise IT Environment (Realistic Outlook)

This repository is a **client-side prototype** (running entirely in the browser with pre-built scenarios for fast review). In a real regulated enterprise or institution operating across central and regional hubs, this system would not be built as a standalone "shadow IT" silo. While exact internal configurations vary, a production deployment realistically connects to four existing enterprise layers:

| Layer | Existing Corporate Systems | How This System Connects |
|---|---|---|
| **1. External Feeds (Outside-In)** | Licensed media & social aggregators (*Factiva, Meltwater, Talkwalker*) + public LLM APIs | Ingests article streams via standard REST webhooks; runs scheduled regional prompts against search-grounded LLMs to audit public AI answers. |
| **2. Document Governance (Top-Down)** | **Veeva Vault** (*PromoMats / MedComms*) & **Microsoft SharePoint / M365** | Connects read-only via Veeva API and Microsoft Graph API. Strictly inherits existing **Role-Based Access Control (RBAC)** and only indexes documents marked `Approved` / `Effective`. |
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
