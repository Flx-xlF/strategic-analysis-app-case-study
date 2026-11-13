# Terrain: Two-Way Strategic Communications & GEO Prototype

> **The Core Premise:** In the age of capable LLMs and AI search, traditional PR tools have lost their grip. Internally, global communications easily fragment across regional silos, millions of vault files, and ad-hoc AI prompting; externally, AI answer engines synthesize global coverage before stakeholders ever read a press release. **The key challenge today is finding effective ways to align corporate communications *again*—and to actively shape public and AI reception *again*.**

[![Live Demo](https://img.shields.io/badge/Live_Demo-GitHub_Pages-EB0000?style=flat-square&logo=github)](https://flx-xlf.github.io/strategic-analysis-app-case-study/)
[![Stack](https://img.shields.io/badge/Stack-React_19_%7C_TypeScript_5.9_%7C_Tailwind-black?style=flat-square)](https://react.dev/)

👉 **Live Interactive Prototype:** [https://flx-xlf.github.io/strategic-analysis-app-case-study/](https://flx-xlf.github.io/strategic-analysis-app-case-study/)

---

## Why This Prototype Exists

To regain narrative consistency inside a complex enterprise and influence public reception outside, communications teams must solve two connected problems:

1. **Shaping Public & AI Reception Again (Direction 1: Outside-In):**
   Every week brings tens of thousands of news articles, forum threads, and AI-generated answers. You cannot paste 50,000 articles into an LLM without it making things up, and you cannot trust standard automated sentiment scores (*"76% Neutral"*), because formal trade coverage often hides serious market-access or pricing risks. By combining statistical filtering (`MinHash` + `HDBSCAN` + $z$-score velocity) with targeted LLM audits and **Generative Engine Optimization (GEO)** fact blocks, teams can spot narrative drift early and correct distorted AI search answers.
2. **Aligning Corporate Communications Again (Direction 2: Top-Down):**
   Large enterprises hold millions of internal files across SharePoint and Veeva Vault. Pointing a standard chatbot at all of them pulls outdated slides or unapproved drafts. This system locks onto 42 approved **"Golden Sources"**, flags conflicting regional files, strips negative framings (so corporate statements never repeat an accusation into headlines or AI search indices), and proposes **bridging tactics** that reconnect every regional response to the company's main narrative.

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

* **No "one-shot, ready-to-send" answers—LLMs provide the multi-angle challenge and bridging scaffold; humans iterate:** An LLM will never produce a finished, ready-to-send executive statement in a single pass. Its time-saving value lies in building the **GEO framework**, **strategic scaffold**, and **multi-angle challenge** (simulating how US policymakers, European HTA bodies, Swiss stakeholders, and journalists will react simultaneously)—which human communicators then iterate.
* **Negative-frame hygiene & bridging to the main corporate narrative:** Under deadline pressure, defensive drafts often repeat a journalist's accusation to deny it (e.g., *"We are not boycotting EU patients"*). Repeating negative framing is damaging both in traditional media and in **GEO** (where search-grounded LLMs index the co-occurring negative keywords on the company's own domain). The workflow uses LLMs to strip hostile framing and propose disciplined **bridging tactics** (*Acknowledge → Bridge → Core Pillar*) that actively reinforce the company's main narrative.
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
