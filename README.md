# Terrain: Two-Way Strategic Communications & GEO Prototype

> **The Core Premise:** Classic corporate communications was built around the press release—informing journalists and media outlets so their reporting would reach the public. In the age of AI search, that model alone is no longer enough to gain traction. Because AI answer engines continuously synthesize media coverage, forums, and corporate channels across borders, **incoherence** becomes the central vulnerability: even well-intentioned variations in framing across regional teams, local adaptations, and millions of internal files dilute the power of corporate communications when AI models aggregate them. **This prototype explores how global communications can operate differently during this shift—auditing where narratives lose traction in media and AI search (Outside-In), and building tight coherence around verified Golden Sources and shared GEO standards (Top-Down) so the company’s position comes through clearly and carries its full weight.**

[![Live Demo](https://img.shields.io/badge/Live_Demo-GitHub_Pages-EB0000?style=flat-square&logo=github)](https://flx-xlf.github.io/strategic-analysis-app-case-study/)
[![Stack](https://img.shields.io/badge/Stack-React_19_%7C_TypeScript_5.9_%7C_Tailwind-black?style=flat-square)](https://react.dev/)

👉 **Live Interactive Prototype:** [https://flx-xlf.github.io/strategic-analysis-app-case-study/](https://flx-xlf.github.io/strategic-analysis-app-case-study/)

---

## Why This Prototype Exists

To gain real traction during the shift to AI search—and prevent cross-regional incoherence from diminishing the power of corporate communications—teams need two connected capabilities:

1. **Gaining Visibility & Traction Across Media and AI Search (Direction 1: Outside-In):**
   Issuing a press release to media outlets is only the starting point when tens of thousands of news articles, forum threads, and AI-generated answers shape public perception every week. You cannot paste 50,000 articles into an LLM without it making things up, and you cannot trust standard sentiment scores (*"76% Neutral"*), because polite trade coverage often hides serious market-access or pricing risks. Instead, this system uses statistical filtering (`MinHash` deduplication, `HDBSCAN` topic clustering, and $z$-score spike detection) to narrow the noise down to the few topics gaining real momentum. It then checks how the company’s core arguments are coming across in regional media and AI search engines—pinpointing where incoherence or missing context causes AI answers to distort the facts, so leadership knows where to step in.
2. **Overcoming Incoherence Through Shared Golden Sources & GEO Standards (Direction 2: Top-Down):**
   In a large enterprise with millions of files across SharePoint and Veeva Vault, incoherence rarely comes from teams ignoring the rules—it builds up naturally as regions adapt messaging to local markets, timelines, and regulatory bodies. Yet when AI search engines pull sources together globally, those regional discrepancies weaken the company's overall signal. To build coherence without slowing teams down, this system locks onto 42 approved **"Golden Sources"** and flags outdated regional files. From there, it gives global and country teams a shared **Generative Engine Optimization (GEO) framework** to follow: structuring verified facts so AI search engines and journalists can cite them accurately, and stress-testing sensitive drafts from multiple stakeholder angles before release.

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
│  1.42M Internal Files ──► Status Filter ──► 42 Golden Sources ──► Conflict Alerts    │
│                                                                      │               │
│                                                                      ▼               │
│             [03 Regional Playbooks] ◄────────► [04 Draft Stress-Test & Inquiry Check]│
└──────────────────────────────────────────────────────────────────────────────────────┘
```

### Direction 1: Outside-In (Modules 01 & 02)

> [!TIP]
> **90-Second Recruiting & Executive Quick Tour:** When you open the live demo, an interactive **90-Second Guided Tour** (`01 Mandate & Scope` → `02 Outside-In Measurement` → `03 GEO & AI Search Audit` → `04 Regional Playbooks` → `05 Stress-Test & IT Fit`) is active at the top of the workspace. Clicking `Next Step →` automatically switches the tabs, regional filters, and scenario comparisons hands-free. You can dismiss or re-open it at any time via the `[ ▶ 90s Quick Tour ]` button in the header.

* **Statistical filtering before LLMs:** Instead of feeding raw noise into an AI model, a 4-stage pipeline first collapses wire reprints (`MinHash`), groups articles into topic clusters (`HDBSCAN`), and measures volume spikes ($z$-score) and alignment with company messaging (cosine similarity). LLMs are only used at the end to read the ~340 representative cluster texts.
* **Regional Cockpit (`01`):** Compares how a topic is framed across **North America (US)**, **Europe (EU)**, **Switzerland (CH)**, and **Asia-Pacific (APAC)** across traditional media, social forums, and AI search engines.
* **Cluster & AI Answer Audit (`02`):** Shows the actual articles driving a cluster and audits what AI answer engines (ChatGPT, Perplexity, Gemini) tell doctors, investors, or journalists. Clickable red highlights show where the AI distorts facts—and how providing a structured fact block (**Generative Engine Optimization / GEO**) reduces those errors.

### Direction 2: Top-Down (Modules 03 & 04)
* **Global-to-Regional Playbook (`03`):** Filters 1.42M internal documents down to 42 approved "Golden Sources" and flags outdated files in regional folders that contradict new data. Cascades global core messages into regional templates (`FDA`, `EMA`, `Swissmedic`, `APAC`) across background briefings, social posts, executive talking points, and Q&As.
* **Draft Stress-Test & Inquiry Check (`04A` & `04B`):**
  * **04A (Draft Stress-Test):** Compares an uncalibrated draft (`Draft A`) against a corrected version (`Draft B`) to preview likely critical headlines and 48-hour reactions from payers, regulators, and patient groups.
  * **04B (Journalist Inquiry Check):** Breaks down tough investigative press questions into the underlying trap, the legal/regulatory boundary, and a clear, plain-language response.

---

## Realistic Boundaries of AI (What It Can and Cannot Do)

* **No "one-shot, ready-to-send" answers—LLMs provide the GEO framework and multi-angle challenge; humans iterate:** An LLM will never produce a finished, ready-to-send executive statement in a single pass. Its real value is giving teams a structured **GEO framework** and a fast **multi-angle stress-test**—simulating how US policymakers, European HTA bodies, Swiss stakeholders, and journalists will react at the same time, and flagging if a draft accidentally repeats a critic's accusation—so human communicators can refine the final text with full context.
* **GEO reduces errors, but does not control third-party LLMs:** Publishing machine-readable facts (`Schema.org` / structured Q&As) on corporate web pages does *not* guarantee 100% obedience by external AI models. However, in search-grounded evaluation runs ($n=20$), structured fact blocks reduced distorted summaries from ~45% to ~5% compared to traditional PR prose.
* **AI flags patterns; humans make the call:** Statistical models and LLMs are good at spotting volume spikes, clustering texts, and checking drafts against approved wording. Deciding how to weigh legal risk, regulatory timing, and public trust remains a human leadership task.

---

## How This Integrates Into an Existing Enterprise IT Environment (Realistic Outlook)

This repository is a **client-side prototype** (running entirely in the browser with pre-built scenarios for fast review). In a real global pharmaceutical environment such as Novartis, this system would not be built as a standalone "shadow IT" silo. While exact internal configurations vary, a production deployment realistically connects to four existing enterprise layers:

| Layer | Existing Corporate Systems | How This System Connects |
|---|---|---|
| **1. External Feeds (Outside-In)** | Licensed media & social aggregators (*Factiva, Meltwater, Talkwalker*) + public LLM APIs | Ingests article streams via standard REST webhooks; runs scheduled regional prompts against search-grounded LLMs to audit public AI answers. |
| **2. Document Governance (Top-Down)** | **Veeva Vault** (*PromoMats / MedComms*) & **Microsoft SharePoint / M365** | Connects read-only via Veeva API and Microsoft Graph API. Strictly inherits existing **Role-Based Access Control (RBAC)** and only indexes documents marked `Approved` / `Effective`. |
| **3. Cloud Compute & Private AI** | Corporate Cloud VPC (*Azure / AWS*) + Data Platform (*Databricks / Snowflake*) | Statistical clustering (MinHash, HDBSCAN) runs as scheduled Python jobs. All LLM calls route through the internal **Enterprise AI Gateway** (zero data retention, no training on company data, GDPR/FADP/GxP compliant). |
| **4. Identity & Compliance Audit** | Corporate SSO (*Entra ID / Okta*) & MLR Review Workflows | Authenticates users via SSO and logs an immutable audit trail (which Golden Source document ID and version backed each generated draft). |

---

## Pre-Loaded Scenarios (EN / DE)

Switch between **English (`EN`)** and **German (`DE`)** and filter by world region (`ALL`, `US`, `EU`, `CH`, `APAC`) across five realistic scenarios:
1. **Novartis Corporate Narrative: U.S. Reference Pricing (MFN), $23B Capex & EU/Swiss Access (Primary Default):** Reconciling the White House MFN agreement and a $23B U.S. localized manufacturing expansion with Vas Narasimhan's call for European/Swiss pricing reform—preventing "patient boycott" headlines in Brussels and "headquarter exodus" rumors in Basel.
2. **Novartis Pluvicto: FDA Approval vs. European HTA & UK NICE Reimbursement (Frontier Medicine):** Communicating a clinically proven progression-free survival doubling (PSMAfore) while navigating European comparator disputes and UK cost-per-QALY rejections.
3. **Alpine Base Tunnel Disruption:** Communicating hardware diagnostics and passenger safety while countering cross-border cyber-sabotage rumors.
4. **Supply Chain Labor Standards Inquiry:** Aligning Comms, Legal, and Procurement under EU due diligence rules (CSDDD) after NGO allegations.
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
