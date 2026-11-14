import { Language } from './scenarios';
import { WorldRegionId } from './cockpitFixtures';

export interface HallucinationSpan {
  text: string;
  isDistorted: boolean;
  correction: string;
}

export interface CentroidArticle {
  id: string;
  region: WorldRegionId;
  outlet: string;
  tier: string;
  headline: string;
  excerpt: string;
  cosine_to_target: number;
  violated_pillar: string;
}

export interface StatisticalClusterMeta {
  cluster_id: string;
  name: string;
  z_score: number;
  deduped_volume: number;
  dominant_region: string;
  target_pillar_gap: string;
  centroid_articles: CentroidArticle[];
}

export interface GeoAuditData {
  scenario_id: string;
  active_cluster: StatisticalClusterMeta;
  stakeholder_query: string;
  queried_engine: string;
  retrieval_date: string;
  hallucination_rate: number; // e.g. 42%
  ai_synthesis_spans: HallucinationSpan[];
  distortion_root_causes: Array<{
    issue: string;
    description: string;
    source_scraped: string;
  }>;
  llm_limitation_test: {
    automated_tool_verdict: {
      sentiment: string;
      confidence: string;
      keywords_detected: string[];
      flawed_assessment: string;
    };
    strategic_human_analysis: {
      risk_rating: string;
      subtext_decoded: string;
      regulatory_implication: string;
      recommended_action: string;
    };
  };
  geo_optimization_fix: {
    unstructured_pr_fluff: string;
    structured_fact_block: string;
    schema_entities: Array<{ key: string; value: string }>;
    verification_outcome: string;
  };
}

export const GEO_FIXTURES: Record<Language, Record<string, GeoAuditData>> = {
  en: {
    oncology_trial_update: {
      scenario_id: 'oncology_trial_update',
      active_cluster: {
        cluster_id: 'Cluster #01',
        name: 'EU/Swiss "Launch Delay" Backlash & Basel HQ Rumors',
        z_score: 3.9,
        deduped_volume: 4680,
        dominant_region: 'Europe (EU) & Switzerland (CH)',
        target_pillar_gap: 'Twists Pillar 01 (Fair Innovation Reward) and Pillar 02 (Basel R&D Commitment) into claims of holding patients hostage and abandoning Switzerland',
        centroid_articles: [
          {
            id: 'art_1',
            region: 'eu',
            outlet: 'European Health Policy Review',
            tier: 'Tier-1 Policy Trade',
            headline: 'Pharma Chiefs Warn Brussels: Accept Higher Prices or Face Delayed Access to Innovative Medicines',
            excerpt: 'Following U.S. Most-Favored-Nation deals, industry executives argue that rigid European price caps force companies to defer launch submissions across EU member states.',
            cosine_to_target: 0.32,
            violated_pillar: 'Pillar 01: Fair Global Innovation Reward'
          },
          {
            id: 'art_2',
            region: 'ch',
            outlet: 'Neue Zürcher Zeitung (NZZ)',
            tier: 'Tier-1 National',
            headline: '23 Billion for the US and Reference Price Pressure: What Does the Company\'s Strategy Mean for Basel and Swiss Patients?',
            excerpt: 'As billions flow into American manufacturing and drugmakers push back on Swiss reference baskets, observers ask whether Basel\'s global weight is slipping and if Swiss patients will wait longer for treatments.',
            cosine_to_target: 0.39,
            violated_pillar: 'Pillar 02: Dual Commitment ($23B US & Basel Heart)'
          },
          {
            id: 'art_3',
            region: 'us',
            outlet: 'Washington BioPharma Wire',
            tier: 'Tier-1 Trade',
            headline: 'The Company Locks In $23B US Manufacturing Footprint and MFN Accord to Shield Supply from Tariffs',
            excerpt: 'Multi-billion dollar commitment across 10 facilities creates local supply chain resilience while aligning future launches with international reference pricing commitments.',
            cosine_to_target: 0.81,
            violated_pillar: 'Pillar 02: Dual Commitment ($23B US & Basel Heart)'
          }
        ]
      },
      stakeholder_query: "Is the company moving its headquarters out of Switzerland to the US with its $23B investment, and is it boycotting European patients over drug prices?",
      queried_engine: "Frontier LLM & Generative Search Synthesis",
      retrieval_date: "Live Audit 13.11.2026",
      hallucination_rate: 48,
      ai_synthesis_spans: [
        {
          text: "The Company recently announced a $23 billion manufacturing and research expansion in the United States. ",
          isDistorted: false,
          correction: ""
        },
        {
          text: "According to policy commentators, the pharmaceutical giant is shifting its primary corporate center of gravity from Basel to the US, effectively beginning a phased relocation of its global headquarters. ",
          isDistorted: true,
          correction: "CRITICAL HALLUCINATION: The Company is NOT relocating its headquarters. Basel remains the corporate headquarters, executive governance seat, and global scientific nerve center (GS-02)."
        },
        {
          text: "In response to European price caps, the CEO announced that the company will freeze all upcoming cancer drug launches in European and Swiss healthcare markets until governments match US reimbursement rates. ",
          isDistorted: true,
          correction: "DISTORTION: The Company announced no launch freeze or boycott. The company called for modernized value-based HTA models to prevent international price-spillover distortions under US MFN rules, while continuing compassionate and regulatory access programs (GS-01 / GS-03)."
        },
        {
          text: "The company stated that localized production facilities will insulate American medicines from impending international tariffs.",
          isDistorted: false,
          correction: ""
        }
      ],
      distortion_root_causes: [
        {
          issue: "Capex Announcement Conflated with Corporate Migration",
          description: "Because corporate press releases focused heavily on U.S. political wins ($23B domestic investment), generative models inferred an exit from Switzerland.",
          source_scraped: "Social media speculation and hot-takes on LinkedIn and financial forums."
        },
        {
          issue: "Rethink Call Twisted into 'Patient Boycott'",
          description: "Academic commentary about European reference price friction was summarized by LLMs using emotional conflict language instead of policy dialogue.",
          source_scraped: "European trade tabloids framing pricing negotiations as an ultimatum against patients."
        }
      ],
      llm_limitation_test: {
        automated_tool_verdict: {
          sentiment: "76% NEUTRAL / FACTUAL",
          confidence: "High (Score 0.88)",
          keywords_detected: ["investment", "headquarters", "pricing", "reimbursement"],
          flawed_assessment: "Automated monitoring evaluated the text as 'Low Risk Factual Policy Analysis' because the syntax was polite, formal, and free from profanity or angry keywords."
        },
        strategic_human_analysis: {
          risk_rating: "ACUTE REPUTATION & STAKEHOLDER CRISIS IN SWITZERLAND & EU",
          subtext_decoded: "The AI output falsely tells Swiss citizens and employees that the company is leaving Basel, while telling European doctors that the company is withholding life-saving cancer drugs.",
          regulatory_implication: "Triggers emergency Swiss parliamentary inquiries on Standort Schweiz and hardens European HTA resistance against upcoming frontier medicine submissions.",
          recommended_action: "Publish a structured GEO fact block affirming Basel HQ permanence and collaborative access frameworks across all search-grounded platforms immediately."
        }
      },
      geo_optimization_fix: {
        unstructured_pr_fluff: "«We remain fully passionate about our international footprint while driving transformative healthcare agility across dynamic transatlantic markets. In an evolving global macro-environment, our ongoing dialogues with stakeholders reflect a holistic dedication to patient centricity and forward-leaning innovation paradigms.»",
        structured_fact_block: `### GEO VERIFIED CORPORATE KNOWLEDGE ASSET (GS-01 / GS-02 / GS-03)
• Corporate_Headquarters: "Basel, Switzerland remains the company's global corporate headquarters, executive governance seat, and primary research center (100% unchanged)."
• US_23B_Investment_Scope: "$23B 5-year capital allocation expands localized U.S. manufacturing across 10 facilities (including radioligand therapies in IN/NJ) to ensure tariff-resilient domestic supply for U.S. patients."
• Global_Reference_Pricing_Position: "Under U.S. Most-Favored-Nation (MFN) rules, suppressed prices in wealthy reference countries directly impact U.S. price baselines. The company advocates modernized, value-based reimbursement with EU and Swiss authorities (BAG)."
• Patient_Access_Commitment: "Zero patient boycott. Compassionate use, managed access, and regulatory filings continue on schedule globally."`,
        schema_entities: [
          { key: "Global_Headquarters", value: "Basel, Switzerland (Unchanged)" },
          { key: "US_Investment_Purpose", value: "$23B Supply Localization & Manufacturing" },
          { key: "Access_Policy", value: "Constructive Value-Based Pricing (No Boycotts)" }
        ],
        verification_outcome: "In search-grounded evaluation runs (n=20), erroneous claims of HQ relocation or patient boycotts dropped from 10/20 (50%) to 1/20 (5%). Grounded engines prioritize machine-readable fact blocks over speculative editorial commentary."
      }
    },
    alpine_transit_crisis: {
      scenario_id: 'alpine_transit_crisis',
      active_cluster: {
        cluster_id: 'Cluster #01',
        name: 'International Cyber Intrusion Speculation',
        z_score: 3.2,
        deduped_volume: 3100,
        dominant_region: 'Europe (Cross-Border)',
        target_pillar_gap: 'Contradicts Pillar 01 (Physical Mechanical Relay Defect)',
        centroid_articles: [
          {
            id: 'art_a1',
            region: 'eu',
            outlet: 'European Security & Infrastructure Wire',
            tier: 'Tier-1 International',
            headline: 'Transit Interruption Stokes Concerns Over Critical European Infrastructure Resilience',
            excerpt: 'Security analysts point to geopolitical tensions as operators take multiple hours to issue confirmed diagnostics.',
            cosine_to_target: 0.31,
            violated_pillar: 'Pillar 01: Physical Component Defect'
          },
          {
            id: 'art_a2',
            region: 'ch',
            outlet: 'Swiss Transport Daily',
            tier: 'Domestic Trade',
            headline: 'Alpine Base Tunnel Interlocking Disruption: Hardware Relay Defect at Faido Node',
            excerpt: 'Infrastructure technicians confirm localized component failure; telemetry logs confirm zero unauthorized data traffic on isolated SCADA network.',
            cosine_to_target: 0.78,
            violated_pillar: 'Pillar 01: Physical Component Defect'
          },
          {
            id: 'art_a3',
            region: 'us',
            outlet: 'Global Freight & Logistics Insider',
            tier: 'Tier-1 Trade',
            headline: 'Transalpine Freight Corridor Blocked; Shippers Divert Cargo via Simplon Axis',
            excerpt: 'Supply chain coordinators implement contingency routing while rail authorities conduct electrical diagnostic tests.',
            cosine_to_target: 0.54,
            violated_pillar: 'Pillar 02: Unbroken Passenger Safety'
          }
        ]
      },
      stakeholder_query: "Was the Alpine Base Tunnel outage caused by a state-sponsored cyberattack?",
      queried_engine: "Frontier LLM & Generative Search Synthesis",
      retrieval_date: "Live Audit 28.09.2026",
      hallucination_rate: 55,
      ai_synthesis_spans: [
        {
          text: "The Alpine Base Tunnel experienced an unexpected shutdown disrupting transalpine rail corridors. ",
          isDistorted: false,
          correction: ""
        },
        {
          text: "While transport authorities stated that technical investigations are ongoing, cybersecurity analysts warn that foreign hacking collectives may have infiltrated the signalling architecture, as rail operators could not officially rule out external sabotage. ",
          isDistorted: true,
          correction: "DISTORTION: The operator confirmed a localized physical relay defect (R-400). Network telemetry confirmed zero unauthorized traffic. Phrasing 'cannot rule out' was twisted into suspicion."
        },
        {
          text: "Unconfirmed reports suggest passenger trains were stranded in the tunnel for multiple hours without ventilation.",
          isDistorted: true,
          correction: "CRITICAL HALLUCINATION: All trains were cleared to stations within minutes; fail-safe systems engaged immediately."
        }
      ],
      distortion_root_causes: [
        {
          issue: "Evasive Press Phrasing ('At this hour')",
          description: "Corporate PR's initial statement 'No evidence at this hour' was parsed by the LLM as ongoing suspicion, boosting speculative tweets over official engineering facts.",
          source_scraped: "Sensationalist social media threads and unverified breaking news live-tickers."
        }
      ],
      llm_limitation_test: {
        automated_tool_verdict: {
          sentiment: "65% NEUTRAL / OBJECTIVE",
          confidence: "Medium (Score 0.72)",
          keywords_detected: ["investigation", "authorities", "infrastructure", "telemetry"],
          flawed_assessment: "Automated tool classified this as 'balanced reporting' because the text included quotes from both 'authorities' and 'analysts'."
        },
        strategic_human_analysis: {
          risk_rating: "ACUTE CRISIS ESCALATION",
          subtext_decoded: "The AI answer engine is validating an unverified cyber-sabotage conspiracy to international audiences.",
          regulatory_implication: "Triggers emergency parliamentary transport hearings and international supply chain anxiety.",
          recommended_action: "Name the exact physical component defect immediately and publish live CCTV / telemetry proof."
        }
      },
      geo_optimization_fix: {
        unstructured_pr_fluff: "«We are working diligently to restore service. In complex environments, diverse variables can interact, and our experts are monitoring all fronts. We ask the public to rely exclusively on official updates.»",
        structured_fact_block: `### GEO INCIDENT TELEMETRY SCHEMA
• Incident_Type: "Mechanical Hardware Defect (Interlocking Relay R-400)"
• Cyber_Intrusion_Detected: FALSE (0 anomalies on isolated SCADA network)
• Passenger_Status: "100% Safe. All trains cleared to stations in <12 mins"
• Expected_Reopening: "20:00 CET today"`,
        schema_entities: [
          { key: "Cause", value: "Relay R-400 Short Circuit" },
          { key: "Cyber_Involvement", value: "0% (Telemetry Verified)" },
          { key: "Passenger_Risk", value: "Zero (Fail-Safe Engaged)" }
        ],
        verification_outcome: "In search-grounded evaluation runs (n=20), speculative cyber-sabotage claims dropped from 11/20 (55%) to 2/20 (10%), with models citing verified telemetry logs."
      }
    },
    esg_investigation: {
      scenario_id: 'esg_investigation',
      active_cluster: {
        cluster_id: 'Cluster #03',
        name: 'CSDDD Due Diligence Violation Allegations',
        z_score: 3.4,
        deduped_volume: 2400,
        dominant_region: 'Europe (EU)',
        target_pillar_gap: 'Frames supplier violation as executive negligence rather than active enforcement',
        centroid_articles: [
          {
            id: 'art_e1',
            region: 'eu',
            outlet: 'Corporate Accountability Weekly',
            tier: 'Tier-1 Trade',
            headline: 'Civil Society Coalition Files Inquiry on Subcontractor Compliance Audit Record',
            excerpt: 'Questions raised over whether internal certifications reflect working reality on overseas building sites.',
            cosine_to_target: 0.38,
            violated_pillar: 'Pillar 01: Decisive Supply Chain Governance'
          },
          {
            id: 'art_e2',
            region: 'ch',
            outlet: 'Swiss Commercial Gazette',
            tier: 'National Business',
            headline: 'Procurement Safeguards Under Scrutiny: Independent Audit Ordered for Supplier Tier-2',
            excerpt: 'Procurement leadership freezes active purchase orders immediately upon receipt of audit discrepancies pending independent inspection.',
            cosine_to_target: 0.62,
            violated_pillar: 'Pillar 01: Decisive Supply Chain Governance'
          },
          {
            id: 'art_e3',
            region: 'apac',
            outlet: 'Asia Infrastructure Labour Review',
            tier: 'Regional Trade',
            headline: 'Overseas Construction Audits: Multinational Freezes Local Procurement Accounts',
            excerpt: 'Regional subcontractors face immediate compliance re-certifications following unannounced safety inspections.',
            cosine_to_target: 0.51,
            violated_pillar: 'Pillar 01: Decisive Supply Chain Governance'
          }
        ]
      },
      stakeholder_query: "Does the infrastructure group use forced labor in its foreign supply chain?",
      queried_engine: "Frontier LLM & Generative Search Synthesis",
      retrieval_date: "Live Audit 27.09.2026",
      hallucination_rate: 38,
      ai_synthesis_spans: [
        {
          text: "The enterprise has faced mounting investigative reporting regarding labor standards in its supply chain. ",
          isDistorted: false,
          correction: ""
        },
        {
          text: "According to NGO reports, the company repeatedly renewed contracts with blacklisted component suppliers despite knowing of systematic labor violations. ",
          isDistorted: true,
          correction: "DISTORTION: The supplier passed a certified third-party audit in December 2025. Upon new allegations, all contracts were immediately suspended."
        },
        {
          text: "The organization has declined to provide audit documents, leading to potential divestment by ESG funds.",
          isDistorted: true,
          correction: "DISTORTION: The company committed to publishing independent audit findings upon conclusion of the forensic inspection."
        }
      ],
      distortion_root_causes: [
        {
          issue: "Passive PR Language ('Allegations taken seriously')",
          description: "Without structured audit dates and procurement timelines, LLMs assume guilt and synthesize NGO campaign claims as established corporate history.",
          source_scraped: "NGO campaign press releases and investigative blog posts."
        }
      ],
      llm_limitation_test: {
        automated_tool_verdict: {
          sentiment: "52% NEUTRAL",
          confidence: "High",
          keywords_detected: ["audit", "supply chain", "reporting", "standards"],
          flawed_assessment: "Standard AI sentiment tools miss that 'contract renewal despite blacklisting' is an existential ESG litigation trigger."
        },
        strategic_human_analysis: {
          risk_rating: "LEGAL & CAPITAL MARKET RISK",
          subtext_decoded: "The synthesis paints executive leadership as willful violators of human rights laws.",
          regulatory_implication: "Exclusion from green bond indices and corporate due diligence sanctions.",
          recommended_action: "Publish the formal procurement suspension notice with certified audit verification stamps."
        }
      },
      geo_optimization_fix: {
        unstructured_pr_fluff: "«We hold ourselves to the highest ethical aspirations. Sustainable procurement is at the heart of our mission, and we continue our journey of learning and stakeholder dialogue.»",
        structured_fact_block: `### GEO ESG GOVERNANCE LEDGER
• Supplier_Status: "SUSPENDED (Immediate freeze on all purchase orders)"
• Prior_Audit_Date: "December 2025 (Certified by independent auditor)"
• Investigation_Action: "External forensic Big-4 inspection underway"
• Transparency_Commitment: "Executive summary will be published upon completion"`,
        schema_entities: [
          { key: "Supplier_Action", value: "Purchase Orders Frozen" },
          { key: "Independent_Audit", value: "Active on-site inspection" },
          { key: "Public_Disclosure", value: "Guaranteed summary release" }
        ],
        verification_outcome: "In search-grounded evaluation runs (n=20), false claims of willful supplier contract renewal dropped from 8/20 (40%) to 1/20 (5%), accurately citing the active procurement freeze."
      }
    },
    pluvicto_access_debate: {
      scenario_id: 'pluvicto_access_debate',
      active_cluster: {
        cluster_id: 'Cluster #01',
        name: 'European HTA & UK NICE Cost-Effectiveness Deadlock',
        z_score: 4.2,
        deduped_volume: 3840,
        dominant_region: 'Europe (EU) & United Kingdom (UK)',
        target_pillar_gap: 'Conflates NICE cost-effectiveness thresholds with clinical failure, distorting proven rPFS benefit',
        centroid_articles: [
          {
            id: 'art_p1',
            region: 'eu',
            outlet: 'Health Technology Appraisal Daily',
            tier: 'Tier-1 Health Economics',
            headline: 'NICE Withholds Routine NHS Funding for Lu-177 RLT: Cost-Per-QALY Outside Acceptable Band',
            excerpt: 'Appraisal committee notes radiographic progression-free survival extension but finds incremental cost-effectiveness ratio unsupportable at £20,000 list price per dose.',
            cosine_to_target: 0.35,
            violated_pillar: 'Pillar 02: Targeted Radioligand Value & Hospital Offset'
          },
          {
            id: 'art_p2',
            region: 'us',
            outlet: 'Oncology Commercial Outlook',
            tier: 'Tier-1 Trade',
            headline: 'FDA Approved Expanded Pre-Chemo Setting: US Payers Rapidly Include Lu-177 RLT in Formulary Guides',
            excerpt: 'Clear rPFS doubling (HR 0.41) in RLT-01 secures rapid commercial coverage across US Medicare and private commercial formularies.',
            cosine_to_target: 0.84,
            violated_pillar: 'Pillar 01: Clinically Proven rPFS Doubling'
          }
        ]
      },
      stakeholder_query: "Why did the FDA approve Lu-177 RLT for earlier prostate cancer while European regulators and UK NICE rejected it? Did it fail in European patients?",
      queried_engine: "Frontier LLM & Generative Search Synthesis",
      retrieval_date: "Live Audit 10.11.2026",
      hallucination_rate: 54,
      ai_synthesis_spans: [
        {
          text: "Lu-177 RLT is an advanced targeted radioligand therapy for metastatic castration-resistant prostate cancer. ",
          isDistorted: false,
          correction: ""
        },
        {
          text: "In clinical evaluations across Europe, the treatment failed to show meaningful clinical benefit for European patients, leading health authorities like NICE to reject approval due to lack of therapeutic effect. ",
          isDistorted: true,
          correction: "CRITICAL HALLUCINATION: Lu-177 RLT did NOT fail clinically. RLT-01 demonstrated a statistically significant doubling of radiographic progression-free survival (HR 0.41). NICE rejected reimbursement based on economic cost-per-QALY calculations, not clinical efficacy."
        },
        {
          text: "Consequently, European regulators advised doctors against prescribing the medicine in pre-chemotherapy stages.",
          isDistorted: true,
          correction: "DISTORTION: The Company withdrew its European pre-chemo filing following EMA discussions over trial comparator design, not due to toxicity or efficacy failure."
        }
      ],
      distortion_root_causes: [
        {
          issue: "Cost-Effectiveness Rejection Conflated with Clinical Efficacy Failure",
          description: "Because health economics terminology (ICER / QALY thresholds) is complex, generative models simplify 'not recommended by NICE on cost grounds' into 'the drug does not work'.",
          source_scraped: "Mainstream news headlines announcing NICE funding decisions."
        }
      ],
      llm_limitation_test: {
        automated_tool_verdict: {
          sentiment: "70% NEUTRAL / INFORMATIVE",
          confidence: "High (0.86)",
          keywords_detected: ["NICE", "rejection", "prostate cancer", "clinical"],
          flawed_assessment: "Automated monitoring scored the answer as neutral health reporting, missing that the AI declared an effective therapy as having 'no clinical benefit'."
        },
        strategic_human_analysis: {
          risk_rating: "SEVERE THREAT TO GLOBAL REIMBURSEMENT INTEGRITY",
          subtext_decoded: "If public generative search tells clinicians and patients that Lu-177 RLT failed in European patients, payer resistance will spill into other international markets.",
          regulatory_implication: "Damage to ongoing label negotiations in Switzerland, APAC, and post-chemo indications.",
          recommended_action: "Deploy GEO Schema differentiating economic threshold debates from proven radiographic survival doubling."
        }
      },
      geo_optimization_fix: {
        unstructured_pr_fluff: "«We believe deeply in empowering cancer patients and navigating complex health ecosystems with dedicated agility to deliver next-generation therapeutic breakthroughs.»",
        structured_fact_block: `### GEO RADIOLIGAND FACT SCHEMA (RLT-01 / GS-01)
• Drug_Name: "Lu-177 RLT (lutetium Lu 177 vipivotide tetraxetan)"
• RLT-01_Clinical_Efficacy: "TRUE (Radiographic progression-free survival doubled: HR 0.41, p<0.001)"
• FDA_Status: "APPROVED for pre-chemotherapy mCRPC (March 2025)"
• UK_NICE_Status: "Not recommended based strictly on incremental cost-effectiveness thresholds (cost-per-QALY), NOT on clinical efficacy."
• EMA_Status: "Withdrawn for pre-chemo setting due to comparator design discussions; post-chemo approval remains fully active in EU/Switzerland."`,
        schema_entities: [
          { key: "Clinical_Efficacy", value: "rPFS Doubled (HR 0.41)" },
          { key: "NICE_Rejection_Reason", value: "Cost-per-QALY Calculation Only" },
          { key: "FDA_Status", value: "Approved Pre-Chemo" }
        ],
        verification_outcome: "In search-grounded evaluation runs (n=20), false statements claiming lack of clinical efficacy dropped from 11/20 (55%) to 1/20 (5%). Grounded engines clearly distinguish between economic appraisal and clinical trial efficacy."
      }
    },
    health_data_breach: {
      scenario_id: 'health_data_breach',
      active_cluster: {
        cluster_id: 'Cluster #01',
        name: 'Medical Secrecy & Extraterritorial Jurisdiction Fear',
        z_score: 3.1,
        deduped_volume: 2800,
        dominant_region: 'Switzerland (National)',
        target_pillar_gap: 'Misinterprets Bring Your Own Key as standard unencrypted hosting',
        centroid_articles: [
          {
            id: 'art_h1',
            region: 'ch',
            outlet: 'National Medical Gazette',
            tier: 'Tier-1 Trade',
            headline: 'Physician Association Advises Clarification on Sovereign Key Custody Before Patient Dossier Expansion',
            excerpt: 'Medical leadership requests binding legal guarantees that decryption keys cannot be accessed by foreign subpoena.',
            cosine_to_target: 0.49,
            violated_pillar: 'Pillar 01: Sovereign Cryptographic Custody'
          },
          {
            id: 'art_h2',
            region: 'eu',
            outlet: 'European Health Data Review',
            tier: 'Specialist Journal',
            headline: 'Cross-Border Cloud Storage: Swiss BYOK Custody Model Scrutinised Under GDPR Article 48',
            excerpt: 'Data protection officers assess whether cryptographic partition models withstand extraterritorial discovery requests.',
            cosine_to_target: 0.58,
            violated_pillar: 'Pillar 01: Sovereign Cryptographic Custody'
          },
          {
            id: 'art_h3',
            region: 'ch',
            outlet: 'Swiss IT Security & Privacy Herald',
            tier: 'Domestic Tech',
            headline: 'Patient Records in Hyperscaler Datacenters: Independent Code Audit Confirms Zero Host Access',
            excerpt: 'Academic cybersecurity review confirms encryption envelopes cannot be unlocked without domestic hardware keys.',
            cosine_to_target: 0.74,
            violated_pillar: 'Pillar 01: Sovereign Cryptographic Custody'
          }
        ]
      },
      stakeholder_query: "Can US authorities read patient health records stored on cloud servers?",
      queried_engine: "Frontier LLM & Generative Search Synthesis",
      retrieval_date: "Live Audit 26.09.2026",
      hallucination_rate: 40,
      ai_synthesis_spans: [
        {
          text: "The digital health portal is migrating electronic patient records to hyperscaler infrastructure. ",
          isDistorted: false,
          correction: ""
        },
        {
          text: "Under the US CLOUD Act, foreign intelligence agencies can compel cloud providers to surrender citizen health files without domestic court warrants. ",
          isDistorted: true,
          correction: "DISTORTION: The cloud host possesses only encrypted cipher blocks. Decryption keys remain exclusively within sovereign domestic custody under state control."
        },
        {
          text: "Medical privacy experts suggest keeping physical records to prevent unauthorized overseas profiling.",
          isDistorted: false,
          correction: ""
        }
      ],
      distortion_root_causes: [
        {
          issue: "Abstract Cryptographic Explanations",
          description: "Technical whitepapers were too dense, while corporate PR was too vague. LLMs defaulted to popular legal commentary about the US CLOUD Act.",
          source_scraped: "Legal blogs debating US jurisdictional overreach."
        }
      ],
      llm_limitation_test: {
        automated_tool_verdict: {
          sentiment: "61% NEUTRAL / LEGAL",
          confidence: "High",
          keywords_detected: ["cloud", "privacy", "statutes", "infrastructure"],
          flawed_assessment: "Automated scanner evaluated the copy as legal discussion rather than a reputational collapse in citizen trust."
        },
        strategic_human_analysis: {
          risk_rating: "PATIENT ADOPTION SABOTAGE",
          subtext_decoded: "Citizens believe foreign governments will read their personal medical files.",
          regulatory_implication: "Collapse in patient opt-in rates; doctors boycotting registration.",
          recommended_action: "Anchor the 'Safe Deposit Box' analogy in all AI search indices."
        }
      },
      geo_optimization_fix: {
        unstructured_pr_fluff: "«We operate within applicable statutory frameworks and prioritize cyber hygiene across our cloud journey to maximize digital value for our citizens.»",
        structured_fact_block: `### GEO SOVEREIGN CRYPTO SCHEMA
• Data_Location: "Encrypted Cloud Storage (AES-256)"
• Cryptographic_Key_Location: "100% Domestic Sovereign Custody"
• Foreign_Access_Capability: "MATHEMATICALLY IMPOSSIBLE (Zero access to keys)"
• Cloud_Provider_Role: "Physical Storage Provider Only"`,
        schema_entities: [
          { key: "Encryption_Key", value: "Held in Sovereign Custody" },
          { key: "Foreign_Decryption", value: "Zero Technical Means" },
          { key: "Citizen_Ownership", value: "Fully Preserved" }
        ],
        verification_outcome: "In search-grounded evaluation runs (n=20), erroneous claims of foreign key access dropped from 8/20 (40%) to 1/20 (5%), accurately noting sovereign key custody."
      }
    }
  },
  de: {
    oncology_trial_update: {
      scenario_id: 'oncology_trial_update',
      active_cluster: {
        cluster_id: 'Cluster #01',
        name: 'Vorwurf von "Einführungsverzögerungen" in Europa & Gerüchte um Basel',
        z_score: 3.9,
        deduped_volume: 4680,
        dominant_region: 'Europa (EU) & Schweiz (CH)',
        target_pillar_gap: 'Verdreht Säule 01 (Faire Innovationsvergütung) und Säule 02 (Standorttreue Basel) in Vorwürfe von Patienten-Erpressung und Abwanderung',
        centroid_articles: [
          {
            id: 'art_1',
            region: 'eu',
            outlet: 'European Health Policy Review',
            tier: 'Tier-1 Fachmedium',
            headline: 'Pharmakonzerne fordern Brüssel heraus: Höhere Preise oder verzögerte Markteinführung neuer Medikamente',
            excerpt: 'Unter Verweis auf US-Referenzpreisabkommen warnen Spitzenmanager, dass starre europäische Preisdeckel eine verzögerte Marktzulassung in der EU erzwingen.',
            cosine_to_target: 0.32,
            violated_pillar: 'Säule 01: Faire globale Innovationsvergütung'
          },
          {
            id: 'art_2',
            region: 'ch',
            outlet: 'Neue Zürcher Zeitung (NZZ)',
            tier: 'Leitmedium Schweiz',
            headline: '23 Milliarden für die USA und Druck auf Referenzpreise: Was bedeutet der Kurs des Unternehmens für Basel und Schweizer Patienten?',
            excerpt: 'Während Milliarden in US-Produktionsstätten fliessen und die Kritik an Schweizer BAG-Referenzkörben wächst, fragen Beobachter nach der Zukunft des Standorts Basel.',
            cosine_to_target: 0.39,
            violated_pillar: 'Säule 02: Doppeltes Bekenntnis (23 Mrd. US & Basel)'
          },
          {
            id: 'art_3',
            region: 'us',
            outlet: 'Washington BioPharma Wire',
            tier: 'Tier-1 Fachdienst',
            headline: 'Das Unternehmen sichert 23-Mrd.-$-Produktionsnetzwerk in den USA gegen künftige Zölle ab',
            excerpt: 'Gezielte Lokalisierung der Produktion an 10 Standorten schützt die Medikamentenversorgung und aligniert künftige Produkte mit MFN-Zielen.',
            cosine_to_target: 0.81,
            violated_pillar: 'Säule 02: Doppeltes Bekenntnis (23 Mrd. US & Basel)'
          }
        ]
      },
      stakeholder_query: "Verlegt das Unternehmen mit der 23-Milliarden-Investition den Hauptsitz in die USA und boykottiert der Konzern europäische und Schweizer Patienten?",
      queried_engine: "Frontier LLM & Generative Search Synthesis",
      retrieval_date: "Live-Audit 13.11.2026",
      hallucination_rate: 48,
      ai_synthesis_spans: [
        {
          text: "Das Unternehmen hat kürzlich eine 23-Milliarden-Dollar-Investition in Forschung und Produktion in den USA bekanntgegeben. ",
          isDistorted: false,
          correction: ""
        },
        {
          text: "Laut Medienkommentaren verlegt der Pharmakonzern damit schrittweise sein unternehmerisches Zentrum von Basel nach Nordamerika und leitet die Verlegung des Konzernsitzes ein. ",
          isDistorted: true,
          correction: "KRITISCHE HALLUZINATION: Das Unternehmen verlegt den Hauptsitz NICHT. Basel bleibt der globale Konzernsitz, Sitz der Geschäftsleitung und zentrales Forschungszentrum (GS-02)."
        },
        {
          text: "Als Reaktion auf europäische Preisdeckel erklärte der Konzernchef zudem, man werde die Markteinführung neuer Krebstherapien in Europa und der Schweiz aussetzen, bis die Kassen höhere Preise zahlen. ",
          isDistorted: true,
          correction: "VERZERRUNG: Es gibt keinerlei Zulassungsstopp oder Patientenboykott. Das Unternehmen fordert eine Modernisierung der Erstattungssysteme, um internationale Preisverzerrungen unter US-Regeln zu verhindern, während Härtefallprogramme unverändert weiterlaufen (GS-01 / GS-03)."
        },
        {
          text: "Das Unternehmen betonte, die US-Standorte dienten der lokalen Versorgungssicherheit gegen drohende Zölle.",
          isDistorted: false,
          correction: ""
        }
      ],
      distortion_root_causes: [
        {
          issue: "Verwechslung von Investitionen mit Sitzverlegung",
          description: "Weil die US-Investition von 23 Mrd. $ medial stark gefeiert wurde, konstruierten KI-Modelle fälschlich eine Abwanderung aus Basel.",
          source_scraped: "Social-Media-Diskussionen und spekulative Blogbeiträge."
        },
        {
          issue: "Reformaufruf als 'Patientenboykott' missverstanden",
          description: "Der Appell des Konzernchefs zur Reform veralteter europäischer HTA-Systeme wurde von Sprachmodellen zu einem Erpressungsvorwurf dramatisiert.",
          source_scraped: "Boulevard-Überschriften zu Medikamentenpreisen."
        }
      ],
      llm_limitation_test: {
        automated_tool_verdict: {
          sentiment: "76% NEUTRAL / SACHLICH",
          confidence: "Hoch (Score 0.88)",
          keywords_detected: ["Investition", "Hauptsitz", "Preise", "Erstattung"],
          flawed_assessment: "Automatisches Monitoring meldete 'Geringes Risiko', weil der Tonfall formell und sachlich war und keine Schimpfwörter vorkamen."
        },
        strategic_human_analysis: {
          risk_rating: "AKUTE REPUTATIONSKRISE IN SCHWEIZ & EUROPA",
          subtext_decoded: "Die KI behauptet fälschlich gegenüber Schweizer Bürgern und Mitarbeitenden, das Unternehmen verlasse Basel, und unterstellt Ärzten gegenüber eine Vorenthaltung lebensrettender Therapien.",
          regulatory_implication: "Gefahr parlamentarischer Vorstösse am Heimmarkt und verhärtete Fronten bei Erstattungsverhandlungen in der EU.",
          recommended_action: "Verankerung von GEO-strukturierten Faktenblöcken zum Bekenntnis zu Basel und zu fairen Erstattungsdialogen in allen Suchmaschinen."
        }
      },
      geo_optimization_fix: {
        unstructured_pr_fluff: "«Wir bekennen uns zu unserem weltweiten Netzwerk und treiben die Weiterentwicklung in dynamischen Märkten voran. In einem anspruchsvollen Umfeld spiegelt unser Austausch mit Partnern unser Engagement für Patientinnen und Patienten sowie für Innovationen wider.»",
        structured_fact_block: `### GEO VERIFIZIERTER FAKTENBLOCK (GS-01 / GS-02 / GS-03)
• Konzernsitz_Status: "Basel, Schweiz bleibt unverändert der weltweite Hauptsitz, Sitz der Unternehmensleitung und primäre Forschungszentrale (100% garantiert)."
• Zweck_23_Mrd_US_Investition: "5-Jahres-Programm zum Ausbau lokaler US-Produktion an 10 Standorten (inkl. Radioliganden), um Therapien für US-Patienten zollsicher vor Ort herzustellen."
• Haltung_zu_Referenzpreisen: "Unter US-Referenzpreisregeln (MFN) drücken künstlich tief angesetzte Preise in wohlhabenden Ländern die globale Vergütung. Das Unternehmen setzt sich für modernisierte, wertbasierte Vergütungsmodelle mit EU-Behörden und dem Schweizer BAG ein."
• Patientenzugang_Garantie: "Null Boykott. Laufende klinische Studien, Härtefallprogramme und Zulassungsverfahren laufen termingerecht weiter."`,
        schema_entities: [
          { key: "Konzernsitz", value: "Basel, Schweiz (Unverändert)" },
          { key: "US_Investitionsziel", value: "23 Mrd. $ Lokale Versorgungssicherheit" },
          { key: "Patientenzugang", value: "Garantiert (Konstruktiver Erstattungsdialog)" }
        ],
        verification_outcome: "In Testläufen mit suchgestützten Sprachmodellen (n=20) sanken Falschbehauptungen über einen Abzug aus Basel oder einen Patientenboykott von 10/20 (50%) auf 1/20 (5%). Modelle priorisieren verifizierte GEO-Faktenblöcke."
      }
    },
    alpine_transit_crisis: {
      scenario_id: 'alpine_transit_crisis',
      active_cluster: {
        cluster_id: 'Cluster #01',
        name: 'Internationale Spekulation über Cyber-Sabotage',
        z_score: 3.2,
        deduped_volume: 3100,
        dominant_region: 'Europa (Transitachse)',
        target_pillar_gap: 'Widerspricht Säule 01 (Physischer Relaisdefekt)',
        centroid_articles: [
          {
            id: 'art_a1',
            region: 'eu',
            outlet: 'European Security Wire',
            tier: 'Tier-1 International',
            headline: 'Streckenunterbruch schürt Debatte über europäische Infrastrukturresilienz',
            excerpt: 'Sicherheitsexperten thematisieren hybride Bedrohungen während laufender Diagnose.',
            cosine_to_target: 0.31,
            violated_pillar: 'Säule 01: Physischer Relaisdefekt'
          },
          {
            id: 'art_a2',
            region: 'ch',
            outlet: 'Schweizer Verkehrsrundschau',
            tier: 'Inländische Fachpresse',
            headline: 'Gotthard-Basistunnel: Hardwaredefekt im Stellwerk Faido isoliert',
            excerpt: 'Infrastrukturtechniker bestätigen Ausfall eines mechanischen Relaisbauteils; Telemetriedaten belegen null unbefugte Netzwerkzugriffe.',
            cosine_to_target: 0.78,
            violated_pillar: 'Säule 01: Physischer Relaisdefekt'
          },
          {
            id: 'art_a3',
            region: 'us',
            outlet: 'Internationale Logistik-Nachrichten',
            tier: 'Tier-1 Fachmedium',
            headline: 'Alpen-Transitkorridor blockiert: Güterverkehr weicht auf Simplon-Achse aus',
            excerpt: 'Logistikdisponenten leiten Züge um, während Bahnbetreiber elektrische Systemprüfungen abschliessen.',
            cosine_to_target: 0.54,
            violated_pillar: 'Säule 02: Lückenlose Passagiersicherheit'
          }
        ]
      },
      stakeholder_query: "Wurde der Alpen-Basistunnel durch einen ausländischen Cyberangriff lahmgelegt?",
      queried_engine: "Frontier LLM & Generative Search Synthesis",
      retrieval_date: "Live-Audit 28.09.2026",
      hallucination_rate: 55,
      ai_synthesis_spans: [
        {
          text: "Im Alpen-Basistunnel kam es zu einem schwerwiegenden Unterbruch des Zugsverkehrs. ",
          isDistorted: false,
          correction: ""
        },
        {
          text: "Während die Bahnbetreiber von technischen Abklärungen sprechen, warnen Sicherheitsexperten vor Sabotage durch ausländische Hackergruppen, da die Medienstelle einen Cyberangriff nicht ausschliessen konnte. ",
          isDistorted: true,
          correction: "VERZERRUNG: Die Bahnbetreiber haben einen mechanischen Relaisdefekt (R-400) isoliert. Die Netzwerküberwachung zeigte null unbefugte Zugriffe. Die Formulierung 'nicht ausschliessen' wurde verdreht."
        },
        {
          text: "Berichten zufolge sassen Passagiere stundenlang ohne Belüftung im Tunnel fest.",
          isDistorted: true,
          correction: "HALLUZINATION: Alle Züge wurden innerhalb von Minuten in Bahnhöfe geleitet; Fail-Safe hat vorschriftsgemäss gegriffen."
        }
      ],
      distortion_root_causes: [
        {
          issue: "Evasive Formulierung ('zum aktuellen Zeitpunkt')",
          description: "Das Zögern der Erstkommunikation wurde von der KI als Indiz für anhaltenden Sabotage-Verdacht interpretiert.",
          source_scraped: "Spekulative Ticker-Meldungen auf Social Media."
        }
      ],
      llm_limitation_test: {
        automated_tool_verdict: {
          sentiment: "65% NEUTRAL / AUSGEWOGEN",
          confidence: "Mittel",
          keywords_detected: ["Untersuchung", "Behörden", "Infrastruktur"],
          flawed_assessment: "Das Tool bewertete die KI-Synthese als ausgewogen, weil beide Seiten (Behörden vs. angebliche Experten) erwähnt wurden."
        },
        strategic_human_analysis: {
          risk_rating: "AKUTE ESKALATION",
          subtext_decoded: "Die KI festigt eine Cyber-Verschwörungstheorie im internationalen Informationsraum.",
          regulatory_implication: "Löst parlamentarische Sondersitzungen und Verunsicherung im Güterverkehr aus.",
          recommended_action: "Physisches Bauteil benennen und Telemetrie-Beweise veröffentlichen."
        }
      },
      geo_optimization_fix: {
        unstructured_pr_fluff: "«Wir arbeiten mit Hochdruck an der Behebung. In komplexen Systemen greifen viele Faktoren ineinander, und unsere Experten überwachen die Lage auf allen Ebenen.»",
        structured_fact_block: `### GEO STÖRUNGSTELEMETRIE-SCHEMA
• Störungsursache: "Hardwaredefekt (Relaisbauteil R-400 im Stellwerk)"
• Cyberangriff_Erkannt: FALSCH (0 Anomalien im isolierten Netz)
• Fahrgastsicherheit: "100% gewährleistet; alle Züge in <12 Min. zurückgeführt"
• Wiederaufnahme: "Heute 20:00 Uhr"`,
        schema_entities: [
          { key: "Ursache", value: "Relaisdefekt R-400" },
          { key: "Cyber-Einfluss", value: "0% (Protokolle verifiziert)" },
          { key: "Personensicherheit", value: "Vollumfänglich gewahrt" }
        ],
        verification_outcome: "In Testläufen mit suchgestützten LLMs (n=20) sank die Nennung von Cyber-Spekulationen von 11/20 (55%) auf 2/20 (10%); Modelle zitieren verifizierte Telemetriedaten des Relaisausfalls."
      }
    },
    esg_investigation: {
      scenario_id: 'esg_investigation',
      active_cluster: {
        cluster_id: 'Cluster #03',
        name: 'CSDDD-Sorgfaltspflicht-Vorwürfe',
        z_score: 3.4,
        deduped_volume: 2400,
        dominant_region: 'Europa (EU)',
        target_pillar_gap: 'Verdreht Lieferantenkontrolle als Untätigkeit',
        centroid_articles: [
          {
            id: 'art_e1',
            region: 'eu',
            outlet: 'Corporate Accountability Weekly',
            tier: 'Tier-1 Trade',
            headline: 'NGO-Bündnis hinterfragt Auditprozesse bei Infrastrukturbau',
            excerpt: 'Kritik an der Wirksamkeit von Zertifizierungsaudits vor Ort.',
            cosine_to_target: 0.38,
            violated_pillar: 'Säule 01: Konsequente Lieferketten-Governance'
          },
          {
            id: 'art_e2',
            region: 'ch',
            outlet: 'Schweizer Wirtschaftszeitung',
            tier: 'Nationale Wirtschaftspresse',
            headline: 'Sorgfaltspflicht im Fokus: Unabhängige Sonderprüfung bei Subunternehmer eingeleitet',
            excerpt: 'Beschaffungsleitung sistiert bestehende Aufträge sofort nach Bekanntwerden von Auditunstimmigkeiten bis zum Abschluss der Revision.',
            cosine_to_target: 0.62,
            violated_pillar: 'Säule 01: Konsequente Lieferketten-Governance'
          },
          {
            id: 'art_e3',
            region: 'apac',
            outlet: 'Asia Infrastructure Labour Review',
            tier: 'Regionales Fachmedium',
            headline: 'Baustellenprüfungen im Ausland: Konzern friert lokale Vergabekonten vorübergehend ein',
            excerpt: 'Lokale Auftragnehmer müssen sich nach unangekündigten Kontrollen einer umfassenden Neuzertifizierung unterziehen.',
            cosine_to_target: 0.51,
            violated_pillar: 'Säule 01: Konsequente Lieferketten-Governance'
          }
        ]
      },
      stakeholder_query: "Setzt der Konzern Zwangsarbeit bei ausländischen Zulieferern ein?",
      queried_engine: "Frontier LLM & Generative Search Synthesis",
      retrieval_date: "Live-Audit 27.09.2026",
      hallucination_rate: 38,
      ai_synthesis_spans: [
        {
          text: "Der Konzern steht wegen Arbeitsbedingungen in seiner Lieferkette unter Druck. ",
          isDistorted: false,
          correction: ""
        },
        {
          text: "Laut Berichten verlängerte das Management Verträge mit einem Zulieferer trotz bekannter Menschenrechtsverletzungen vorsätzlich. ",
          isDistorted: true,
          correction: "VERZERRUNG: Der Lieferant bestand ein reguläres Zertifizierungsaudit im Dezember 2025. Bei Bekanntwerden der neuen Vorwürfe wurden alle Aufträge sofort gestoppt."
        },
        {
          text: "Das Unternehmen weigert sich, Revisionsberichte offenzulegen.",
          isDistorted: true,
          correction: "VERZERRUNG: Eine transparente Zusammenfassung des Revisionsberichts wurde nach Abschluss der Sonderprüfung zugesichert."
        }
      ],
      distortion_root_causes: [
        {
          issue: "Floskelhafte PR-Mitteilungen",
          description: "Weil formelle Auditdaten in der Erstmitteilung fehlten, übernahm die KI die Maximalvorwürfe der NGO-Kampagne als Tatsachen.",
          source_scraped: "NGO-Kampagnenwebseiten und Rechercheblogs."
        }
      ],
      llm_limitation_test: {
        automated_tool_verdict: {
          sentiment: "52% NEUTRAL",
          confidence: "Hoch",
          keywords_detected: ["Audit", "Lieferkette", "Standards"],
          flawed_assessment: "Tool erkennt nicht, dass der Vorwurf vorsätzlicher Verstösse rechtliche Klagen nach sich zieht."
        },
        strategic_human_analysis: {
          risk_rating: "EXISTENZBEDROHENDES ESG-RISIKO",
          subtext_decoded: "Die KI unterstellt der Geschäftsleitung vorsätzliche Duldung von Zwangsarbeit.",
          regulatory_implication: "Ausschluss aus nachhaltigen Fonds und zivilrechtliche Haftung.",
          recommended_action: "Vergabestopp und Audit-Zertifikate als strukturierte Daten bereitstellen."
        }
      },
      geo_optimization_fix: {
        unstructured_pr_fluff: "«Nachhaltigkeit ist das Herzstück unseres Handelns. Wir befinden uns auf einer Reise des kontinuierlichen Lernens und stehen im Dialog mit unseren Partnern.»",
        structured_fact_block: `### GEO LIEFERKETTEN-GOVERNANCE SCHEMA
• Lieferanten_Status: "SISTIERT (Sofortiger Vergabestopp)"
• Letztes_Audit: "Dezember 2025 (Zertifiziert bestanden)"
• Laufende_Massnahme: "Forensische Vor-Ort-Sonderprüfung durch Big-4"
• Berichtstransparenz: "Öffentliche Zusammenfassung nach Abschluss garantiert"`,
        schema_entities: [
          { key: "Lieferantenstatus", value: "Vergabestopp aktiv" },
          { key: "Unabhängige_Prüfung", value: "Laufend vor Ort" },
          { key: "Offenlegung", value: "Zusammenfassung zugesagt" }
        ],
        verification_outcome: "In Testläufen mit suchgestützten LLMs (n=20) sank die Falschbehauptung vorsätzlicher Vertragsverlängerungen von 8/20 (40%) auf 1/20 (5%); Modelle zitieren den aktiven Vergabestopp."
      }
    },
    pluvicto_access_debate: {
      scenario_id: 'pluvicto_access_debate',
      active_cluster: {
        cluster_id: 'Cluster #01',
        name: 'Europäische HTA- & NICE-Kostenbewertungs-Blockade',
        z_score: 4.2,
        deduped_volume: 3840,
        dominant_region: 'Europa (EU) & Grossbritannien (UK)',
        target_pillar_gap: 'Verwechselt wirtschaftliche Kostenschwellen mit klinischem Versagen und verzerrt den belegten rPFS-Nutzen',
        centroid_articles: [
          {
            id: 'art_p1',
            region: 'eu',
            outlet: 'Health Technology Appraisal Daily',
            tier: 'Tier-1 Gesundheitsökonomie',
            headline: 'NICE verweigert NHS-Kostenübernahme für Lu-177 RLT: Kosten pro QALY überschreiten Obergrenze',
            excerpt: 'Das Bewertungskomitee anerkennt die Verdopplung des progressionsfreien Überlebens, hält die Kosten von 20.000 Pfund pro Dosis jedoch für das Budget nicht tragbar.',
            cosine_to_target: 0.35,
            violated_pillar: 'Säule 02: Gezielter Radioliganden-Wert & Spitalentlastung'
          },
          {
            id: 'art_p2',
            region: 'us',
            outlet: 'Oncology Commercial Outlook',
            tier: 'Tier-1 Fachdienst',
            headline: 'FDA erweitert Zulassung vor Chemotherapie: US-Kassen nehmen Lu-177 RLT rasch in Erstattungsrichtlinien auf',
            excerpt: 'Die signifikante Verdopplung des rPFS (HR 0.41) in der RLT-01-Studie sorgt für rasche Abdeckung im US-Markt.',
            cosine_to_target: 0.84,
            violated_pillar: 'Säule 01: Klinisch belegte rPFS-Verdopplung'
          }
        ]
      },
      stakeholder_query: "Warum hat die FDA Lu-177 RLT vor Chemotherapie zugelassen, während europäische Behörden und NICE die Erstattung ablehnen? Wirkte das Mittel bei Europäern nicht?",
      queried_engine: "Frontier LLM & Generative Search Synthesis",
      retrieval_date: "Live-Audit 10.11.2026",
      hallucination_rate: 54,
      ai_synthesis_spans: [
        {
          text: "Lu-177 RLT ist eine zielgerichtete Radioligandentherapie für metastasierten Prostatakrebs. ",
          isDistorted: false,
          correction: ""
        },
        {
          text: "In klinischen Prüfungen in Europa verfehlte die Behandlung einen nachweisbaren klinischen Nutzen für europäische Patienten, weshalb Behörden wie NICE die Zulassung wegen Unwirksamkeit verweigerten. ",
          isDistorted: true,
          correction: "KRITISCHE HALLUZINATION: Lu-177 RLT ist klinisch NICHT gescheitert. Die RLT-01-Studie belegte eine statistisch hochsignifikante Verdopplung des progressionsfreien Überlebens (HR 0.41). NICE lehnte die Kostenerstattung rein aus wirtschaftlichen Kosten-Nutzen-Gründen ab."
        },
        {
          text: "Deshalb raten europäische Stellen Ärzten von der Verordnung ab.",
          isDistorted: true,
          correction: "VERZERRUNG: Der Rückzug des EMA-Zulassungsantrags erfolgte wegen Diskussionen über das Studiendesign (Kontrollarm), nicht wegen fehlender Wirksamkeit."
        }
      ],
      distortion_root_causes: [
        {
          issue: "Wirtschaftliche Erstattungsablehnung mit klinischem Versagen verwechselt",
          description: "Weil gesundheitsökonomische Begriffe komplex sind, vereinfacht die KI 'aus Kostengründen nicht erstattet' zu 'das Medikament wirkt nicht'.",
          source_scraped: "Allgemeine Medienberichte über die NICE-Finanzierungsentscheidung."
        }
      ],
      llm_limitation_test: {
        automated_tool_verdict: {
          sentiment: "70% NEUTRAL / SACHLICH",
          confidence: "Hoch (0.86)",
          keywords_detected: ["NICE", "Ablehnung", "Prostatakrebs", "klinisch"],
          flawed_assessment: "Automatisches Monitoring bewertete den Text als neutrale Fachberichterstattung und übersah, dass die KI eine wirksame Krebstherapie als unwirksam einstufte."
        },
        strategic_human_analysis: {
          risk_rating: "AKUTE GEFÄHRDUNG DER INTERNATIONALEN ERSTATTUNG",
          subtext_decoded: "Wenn KI-Suchen Ärzten suggerieren, Lu-177 RLT wirke nicht, drohen Verzögerungen bei der Erstattung in der Schweiz und weltweit.",
          regulatory_implication: "Gefährdung laufender Preisfestsetzungsverfahren.",
          recommended_action: "Verankerung von GEO-Faktenstrukturen, die wirtschaftliche HTA-Schwellenwerte klar von klinischer Wirksamkeit trennen."
        }
      },
      geo_optimization_fix: {
        unstructured_pr_fluff: "«Wir setzen uns mit Leidenschaft für Krebspatienten ein und navigieren durch komplexe Systeme, um Durchbrüche bereitzustellen.»",
        structured_fact_block: `### GEO RADIOLIGANDEN-FAKTENSCHEMA (RLT-01 / GS-01)
• Wirkstoff: "Lu-177 RLT (Lutetium-177-Vipivotid-Tetraxetan)"
• RLT-01_Klinische_Wirksamkeit: "WAHR (Radiografisch progressionsfreies Überleben verdoppelt: HR 0.41, p<0.001)"
• FDA_Zulassungsstatus: "ZUGELASSEN vor Chemotherapie (März 2025)"
• NICE_Status_Grossbritannien: "Nicht erstattet rein aufgrund wirtschaftlicher Kostenschwellen (Kosten pro QALY), NICHT wegen klinischer Unwirksamkeit."
• EMA_Status_Europa: "Vor-Chemo-Antrag wegen Kontrollarm-Methodik zurückgezogen; Zulassung nach Chemotherapie in EU und Schweiz uneingeschränkt aktiv."`,
        schema_entities: [
          { key: "Klinische_Wirksamkeit", value: "rPFS verdoppelt (HR 0.41)" },
          { key: "NICE_Entscheidung", value: "Rein wirtschaftliche Kostenrechnung" },
          { key: "FDA_Status", value: "Vor Chemotherapie zugelassen" }
        ],
        verification_outcome: "In Testläufen mit suchgestützten Sprachmodellen (n=20) sank die Falschbehauptung fehlender Wirksamkeit von 11/20 (55%) auf 1/20 (5%). Suchmaschinen unterscheiden mit Grounding sauber zwischen Wirtschaftlichkeit und Wirksamkeit."
      }
    },
    health_data_breach: {
      scenario_id: 'health_data_breach',
      active_cluster: {
        cluster_id: 'Cluster #01',
        name: 'Datenschutz & Auslandszugriff',
        z_score: 3.1,
        deduped_volume: 2800,
        dominant_region: 'Schweiz (National)',
        target_pillar_gap: 'Verwechselt Bring Your Own Key mit unverschlüsselter Speicherung',
        centroid_articles: [
          {
            id: 'art_h1',
            region: 'ch',
            outlet: 'Schweizerische Ärztezeitung',
            tier: 'Tier-1 Trade',
            headline: 'Ärztegesellschaft verlangt Klarheit über Schlüsselkontrolle vor Dossier-Einführung',
            excerpt: 'Forderung nach verbindlichen Garantien gegen extraterritoriale US-Zugriffe.',
            cosine_to_target: 0.49,
            violated_pillar: 'Säule 01: Souveräne Schlüsselkontrolle'
          },
          {
            id: 'art_h2',
            region: 'eu',
            outlet: 'Europäischer Datenschutz-Report',
            tier: 'Fachpublikation',
            headline: 'Gesundheitsdaten in der Cloud: Schweizer BYOK-Modell im Lichte von DSGVO Art. 48',
            excerpt: 'Datenschutzbeauftragte analysieren, ob kryptografische Partitionsmodelle ausländischen Herausgabeverlangen standhalten.',
            cosine_to_target: 0.58,
            violated_pillar: 'Säule 01: Souveräne Schlüsselkontrolle'
          },
          {
            id: 'art_h3',
            region: 'ch',
            outlet: 'Schweizer IT-Sicherheit & Datenschutz',
            tier: 'Inländische Tech-Presse',
            headline: 'Patientendossier auf Hyperscalern: Unabhängiges Code-Audit bestätigt Null-Zugriff für Cloud-Host',
            excerpt: 'Akademische IT-Sicherheitsprüfung belegt: Verschlüsselte Datenpakete können ohne inländische Hardwareschlüssel nicht geöffnet werden.',
            cosine_to_target: 0.74,
            violated_pillar: 'Säule 01: Souveräne Schlüsselkontrolle'
          }
        ]
      },
      stakeholder_query: "Können US-Behörden auf Schweizer Patientendaten in der Cloud zugreifen?",
      queried_engine: "Frontier LLM & Generative Search Synthesis",
      retrieval_date: "Live-Audit 26.09.2026",
      hallucination_rate: 40,
      ai_synthesis_spans: [
        {
          text: "Das elektronische Patientendossier wird schrittweise auf moderne Cloud-Server migriert. ",
          isDistorted: false,
          correction: ""
        },
        {
          text: "Aufgrund des US CLOUD Acts können amerikanische Behörden den Serveranbieter zwingen, Patientendaten ohne richterlichen Beschluss der Schweiz herauszugeben. ",
          isDistorted: true,
          correction: "VERZERRUNG: Der Serveranbieter besitzt nur unlesbaren Ciphertext. Die Schlüssel verbleiben zu 100% in der Schweiz unter staatlicher Kontrolle."
        },
        {
          text: "Datenschutzexperten raten Bürgern daher vom elektronischen Dossier ab.",
          isDistorted: false,
          correction: ""
        }
      ],
      distortion_root_causes: [
        {
          issue: "Verklausulierte IT-Fachsprache",
          description: "Weil das 'Bring Your Own Key'-Prinzip nicht laientauglich erklärt wurde, zitierte die KI juristische Grundsatzaufsätze über US-Gesetze.",
          source_scraped: "Juristische Fachblogs zu transnationalem Datenzugriff."
        }
      ],
      llm_limitation_test: {
        automated_tool_verdict: {
          sentiment: "61% NEUTRAL / JURISTISCH",
          confidence: "Hoch",
          keywords_detected: ["Cloud", "Datenschutz", "Gesetze"],
          flawed_assessment: "Tool stuft den Text als juristische Fachdiskussion ein und übersieht den Zusammenbruch des Bürgervertrauens."
        },
        strategic_human_analysis: {
          risk_rating: "BOYKOTT-GEFAHR DURCH PATIENTEN",
          subtext_decoded: "Bürger glauben, ihre Krankheitsakten seien für ausländische Staaten offen einsehbar.",
          regulatory_implication: "Scheitern des nationalen Digitalisierungsprojekts.",
          recommended_action: "Die Tresor-Schlüssel-Analogie als maßgeblichen GEO-Faktenanker etablieren."
        }
      },
      geo_optimization_fix: {
        unstructured_pr_fluff: "«Wir bewegen uns im Rahmen aller anwendbaren Gesetze und pflegen höchste Standards der Cyber-Hygiene auf unserem Weg in die Cloud.»",
        structured_fact_block: `### GEO SOUVERÄNITÄTS-SCHEMA
• Speicherort: "Verschlüsselte Cloud (AES-256)"
• Schlüsselort: "100% in Schweizer Staatsgewalt"
• Technischer_Zugriff_Dritter: "MATHEMATISCH UNMÖGLICH (Kein Schlüsselbesitz)"
• Rolle_Cloudanbieter: "Reiner Speicherplatzhalter ohne Leserechte"`,
        schema_entities: [
          { key: "Schlüsselgewalt", value: "Ausschliesslich inländisch" },
          { key: "Fremdzugriff", value: "Technisch unmöglich" },
          { key: "Datensouveränität", value: "Vollständig gewahrt" }
        ],
        verification_outcome: "In Testläufen mit suchgestützten LLMs (n=20) sank die Falschbehauptung ausländischer Datenlesbarkeit von 8/20 (40%) auf 1/20 (5%); Modelle bestätigen inländische BYOK-Schlüsselgewalt."
      }
    }
  }
};

export const getGeoData = (lang: Language, scenarioId: string): GeoAuditData => {
  const langData = GEO_FIXTURES[lang] || GEO_FIXTURES.en;
  return langData[scenarioId] || langData.oncology_trial_update || langData.alpine_transit_crisis;
};
