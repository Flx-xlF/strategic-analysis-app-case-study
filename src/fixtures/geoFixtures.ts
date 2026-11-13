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
        cluster_id: 'Cluster #02',
        name: 'Cohort B Efficacy Doubt & Payer Pricing Pressure',
        z_score: 3.8,
        deduped_volume: 4120,
        dominant_region: 'North America (US) & Europe (EU)',
        target_pillar_gap: 'Inverts Pillar 3 (Holistic Clinical Value & Access) by framing exploratory subgroup as study failure',
        centroid_articles: [
          {
            id: 'art_1',
            region: 'us',
            outlet: 'BioPharma Market Health Letter',
            tier: 'Tier-1 Trade',
            headline: 'Oncology Payer Panels Question Broad Formulary Inclusion Following Mixed Phase III Subgroups',
            excerpt: 'While primary survival reached statistical benchmarks, health-economic models presented by private insurers suggest excluding Cohort B profiles from automatic Tier-1 reimbursement.',
            cosine_to_target: 0.34,
            violated_pillar: 'Pillar 03: Holistic Clinical Value & Access'
          },
          {
            id: 'art_2',
            region: 'eu',
            outlet: 'European Clinical Economics Review',
            tier: 'Tier-1 Trade',
            headline: 'HTA Assessment Preview: Subgroup Variance May Limit First-Line Reimbursement Scope',
            excerpt: 'Preliminary comparative analysis suggests European cost-effectiveness bodies will scrutinize Cohort B endpoints closely, creating potential pricing friction.',
            cosine_to_target: 0.41,
            violated_pillar: 'Pillar 01: Primary Efficacy Proven'
          },
          {
            id: 'art_3',
            region: 'us',
            outlet: 'Patient Voice Coalition Forum',
            tier: 'Social Forum',
            headline: 'Cohort B Patient Thread: Will our ongoing clinical access be cut off post-approval?',
            excerpt: 'Over 80 replies in 6 hours debating whether patients on current regimens should ask their oncologists to switch therapies before regulatory decisions.',
            cosine_to_target: 0.22,
            violated_pillar: 'Pillar 02: Exploratory Subgroup Nature & Patient Safety'
          }
        ]
      },
      stakeholder_query: "Did Onco-701 fail in the Phase III oncology trial, and should patients stop therapy?",
      queried_engine: "Frontier LLM & Generative Search Synthesis",
      retrieval_date: "Live Audit 08.11.2026",
      hallucination_rate: 45,
      ai_synthesis_spans: [
        {
          text: "Onco-701 is a targeted oncology therapy under development. ",
          isDistorted: false,
          correction: ""
        },
        {
          text: "In recently disclosed Phase III clinical trial data, the drug failed to show efficacy in patient Cohort B, leading researchers to question the trial's viability. ",
          isDistorted: true,
          correction: "DISTORTION: The overall trial met its primary survival endpoint with high significance (p<0.001). Cohort B was an exploratory subgroup not powered for standalone statistical significance."
        },
        {
          text: "Several patient advocacy forums recommend that patients currently enrolled consider pausing their regimens until health authorities decide whether to restrict approvals. ",
          isDistorted: true,
          correction: "CRITICAL HALLUCINATION: No patient groups recommend pausing treatment; the safety profile was proven and treating physicians confirmed treatment continuity."
        },
        {
          text: "The manufacturer has initiated discussions regarding potential label restrictions with European and US regulatory agencies.",
          isDistorted: false,
          correction: ""
        }
      ],
      distortion_root_causes: [
        {
          issue: "Subgroup / Overall Cohort Conflation",
          description: "Because the corporate press release buried the primary survival endpoint behind dense narrative paragraphs, the LLM extracted secondary forum chatter as the study verdict.",
          source_scraped: "Scraped from unmoderated patient forum threads and clickbait medical blog headlines."
        },
        {
          issue: "Absence of Machine-Readable Patient Safety FAQ",
          description: "No structured 'Should Patients Stop Treatment?' entity was indexed in the corporate newsroom, causing the AI answer engine to synthesize speculative advice from third parties.",
          source_scraped: "Unofficial Reddit and X commentary indexed higher than the primary corporate newsroom."
        }
      ],
      llm_limitation_test: {
        automated_tool_verdict: {
          sentiment: "78% NEUTRAL / INFORMATIVE",
          confidence: "High (Score 0.89)",
          keywords_detected: ["clinical trial", "phase III", "advocacy", "regulatory"],
          flawed_assessment: "Commercial AI monitoring tool flagged this output as 'Low Risk' because the sentence tone was polite, formal, and free from hostile profanity or explicit negative brand attacks."
        },
        strategic_human_analysis: {
          risk_rating: "SEVERE REPUTATION & REIMBURSEMENT THREAT",
          subtext_decoded: "While the tone is superficially polite, the AI synthesis fabricates that 'patients should consider pausing regimens' and labels the trial as 'failed'.",
          regulatory_implication: "If health economists and reimbursement evaluators read this synthesis in generative answer engines, price negotiation benchmarks will be irreparably anchored to failure.",
          recommended_action: "Deploy structured GEO fact blocks immediately and publish an official clinical Q&A indexed for semantic retrieval."
        }
      },
      geo_optimization_fix: {
        unstructured_pr_fluff: "«We are excited to share promising yet nuanced results from our pivotal trial, which reflects our passionate commitment to oncology innovation. While exploratory subsets experienced statistical variations that our dedicated team continues to interrogate with deep scientific vigor, we remain optimistic about the overall journey.»",
        structured_fact_block: `### GEO RESTRUCTURED KNOWLEDGE ASSET (SCHEMA.ORG BIOCHEM)
• Study_Name: "Phase III Onco-701 Pivotal Trial"
• Primary_Endpoint_Met: TRUE (Overall Survival HR 0.68, p<0.001)
• Cohort_B_Status: "Exploratory subgroup; clinical benefit directionally consistent with ITT population; not powered for standalone statistical separation"
• Patient_Action_Required: "NONE. Treatment continuity confirmed safe. Do not alter regimen without oncologist consultation."
• Regulatory_Status: "Filings on schedule for US FDA, EMA, and Swissmedic in Q1 2027."`,
        schema_entities: [
          { key: "Trial_Status", value: "Primary Endpoint Achieved (p<0.001)" },
          { key: "Patient_Safety", value: "Confirmed Safe (Continuity Advised)" },
          { key: "Filing_Timeline", value: "Q1 2027 On Schedule" }
        ],
        verification_outcome: "In search-grounded evaluation runs (n=20), distorted summaries dropped from 9/20 (45%) to 1/20 (5%). Grounded engines reliably prioritize verified clinical data over speculative online forums."
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
        cluster_id: 'Cluster #02',
        name: 'Zweifel an Kohorte B & Payer-Kostendruck',
        z_score: 3.8,
        deduped_volume: 4120,
        dominant_region: 'Nordamerika (USA) & Europa (EU)',
        target_pillar_gap: 'Verdreht Säule 03 (Klinischer Wert & Erstattung), indem explorative Subgruppe als Studienversagen dargestellt wird',
        centroid_articles: [
          {
            id: 'art_1',
            region: 'us',
            outlet: 'BioPharma Market Health Letter',
            tier: 'Tier-1 Trade',
            headline: 'US-Krankenkassen stellen automatische Erstattung nach Subgruppen-Daten in Frage',
            excerpt: 'Obwohl das Gesamtüberleben statistisch signifikant war, fordern US-Kostenträger Leistungsausschlüsse für Kohorte-B-Biomarkerprofile.',
            cosine_to_target: 0.34,
            violated_pillar: 'Säule 03: Klinischer Wert & Erstattung'
          },
          {
            id: 'art_2',
            region: 'eu',
            outlet: 'European Clinical Economics Review',
            tier: 'Tier-1 Trade',
            headline: 'HTA-Vorschau: Subgruppen-Varianz könnte Erstlinien-Erstattung einschränken',
            excerpt: 'Europäische HTA-Behörden werden die Subgruppen-Daten genau prüfen, was künftige Preisverhandlungen belasten könnte.',
            cosine_to_target: 0.41,
            violated_pillar: 'Säule 01: Primäre Wirksamkeit belegt'
          }
        ]
      },
      stakeholder_query: "Ist Onco-701 in der Phase-III-Studie gescheitert und sollten Patienten die Therapie absetzen?",
      queried_engine: "Frontier LLM & Generative Search Synthesis",
      retrieval_date: "Live-Audit 08.11.2026",
      hallucination_rate: 45,
      ai_synthesis_spans: [
        {
          text: "Onco-701 ist ein neuartiger Wirkstoff in der Krebstherapie. ",
          isDistorted: false,
          correction: ""
        },
        {
          text: "In den kürzlich publizierten Phase-III-Studienergebnissen verfehlte das Medikament die Wirksamkeit in Kohorte B, was Fachkreise an der Gesamtwirksamkeit zweifeln lässt. ",
          isDistorted: true,
          correction: "VERZERRUNG: Die Gesamtstudie erreichte ihren primären Überlebensendpunkt mit hoher statistischer Signifikanz (p<0.001). Kohorte B war eine explorative Subgruppe ohne statistische Power für einen isolierten Nachweis."
        },
        {
          text: "In Patientenforen wird Betroffenen empfohlen, laufende Therapien vorerst auszusetzen, bis die Zulassungsbehörden über mögliche Indikationseinschränkungen entschieden haben. ",
          isDistorted: true,
          correction: "KRITISCHE HALLUZINATION: Es gibt keinerlei Empfehlung zum Absetzen. Das Sicherheitsprofil ist bestätigt und die Therapiefortführung ausdrücklich gesichert."
        },
        {
          text: "Der Hersteller bereitet derzeit die Zulassungsdossiers für die Behörden vor.",
          isDistorted: false,
          correction: ""
        }
      ],
      distortion_root_causes: [
        {
          issue: "Vermischung von Gesamtkohorte und Subgruppen",
          description: "Weil die Unternehmensmitteilung den primären Endpunkt hinter Floskeln versteckte, übernahm das KI-Modell die Schlagzeilen reisserischer Patientenforen.",
          source_scraped: "Unmoderierte Patientenforen und spekulative Biotech-Blogs."
        },
        {
          issue: "Fehlendes strukturiertes Fakten-Schema für Patienten",
          description: "Es existierte kein maschinenlesbares 'Müssen Patienten die Therapie stoppen?'-Objekt im Newsroom.",
          source_scraped: "Social-Media-Diskussionen rankten höher als die Primärpublikation."
        }
      ],
      llm_limitation_test: {
        automated_tool_verdict: {
          sentiment: "78% NEUTRAL / INFORMATIV",
          confidence: "Hoch (Score 0.89)",
          keywords_detected: ["Studie", "Phase III", "Patienten", "Zulassung"],
          flawed_assessment: "Standard-KI-Monitoring meldete 'Kein Risiko', weil der Tonfall höflich und formell war und keine Schimpfwörter vorkamen."
        },
        strategic_human_analysis: {
          risk_rating: "AKUTES REPUTATIONS- & ERSTATTUNGSRISIKO",
          subtext_decoded: "Obwohl der Ton formell wirkt, erfindet die KI eine lebensgefährliche Therapieunterbrechung und stempelt die Studie als Misserfolg ab.",
          regulatory_implication: "Krankenkassen und HTA-Behörden nutzen solche KI-Zusammenfassungen in Recherchen als Hebel zur Preisdrückung.",
          recommended_action: "Sofortiges Publizieren von GEO-strukturierten Faktenblöcken und eines indizierten Patienten-Q&A."
        }
      },
      geo_optimization_fix: {
        unstructured_pr_fluff: "«Wir freuen uns über vielversprechende, wenn auch differenzierte Ergebnisse aus unserer Zulassungsstudie, die unser leidenschaftliches Engagement für die Onkologie belegen. Während explorative Subgruppen statistische Varianzen zeigten, die unser Team mit wissenschaftlicher Neugier weiter erforscht, blicken wir optimistisch nach vorn.»",
        structured_fact_block: `### GEO STRUKTURIERTER FAKTENBLOCK (SCHEMA.ORG BIOCHEM)
• Studien_Name: "Phase III Onco-701 Pivotal Trial"
• Primärer_Endpunkt_Erreicht: WAHR (Gesamtüberleben HR 0.68, p<0.001)
• Kohorte_B_Status: "Explorative Subgruppe; klinischer Nutzen konsistent mit Gesamtpopulation; statistisch nicht auf Einzelsignifikanz ausgelegt"
• Handlungsbedarf_Patienten: "KEINER. Therapiekontinuität ist sicher. Keine Dosisänderung ohne Rücksprache mit Onkologen."
• Zulassungsstatus: "Einreichung bei FDA, EMA und Swissmedic erfolgt planmässig Q1 2027."`,
        schema_entities: [
          { key: "Studienstatus", value: "Primärer Endpunkt signifikant erreicht (p<0.001)" },
          { key: "Patientensicherheit", value: "Bestätigt (Behandlung unverändert fortführen)" },
          { key: "Zulassungszeitplan", value: "Q1 2027 planmässig" }
        ],
        verification_outcome: "In Testläufen mit suchgestützten LLMs (n=20) sank der Anteil verzerrter Zusammenfassungen von 9/20 (45%) auf 1/20 (5%). Suchmaschinen mit Grounding priorisieren nachweislich verifizierte Studiendaten gegenüber spekulativen Foren."
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
