import { Language } from './scenarios';

export type WorldRegionId = 'all' | 'us' | 'eu' | 'ch' | 'apac';

export interface DefinedNarrativePillar {
  id: string;
  pillar_number: string;
  title: string;
  core_thesis: string;
  target_vector_anchor: string;
  mandatory_proof_points: string[];
}

export interface RegionalSynthesisRow {
  region_id: WorldRegionId;
  region_name: string;
  regulatory_context: string;
  raw_volume: number;
  deduped_volume: number;
  velocity_z_score: number; // e.g. +3.8
  velocity_trend: string;
  cosine_alignment: number; // 0.00 to 1.00
  pull_through_status: 'ALIGNED' | 'MIXED' | 'AT_RISK' | 'CRITICAL';
  status_label: string;
  legacy_media_frame: string;
  social_forum_frame: string;
  llm_synthesis_frame: string;
  llm_hallucination_rate: number; // percentage
  strategic_risk_summary: string;
}

export interface StatisticalPipelineStats {
  raw_ingested_72h: number; // e.g. 48420
  minhash_deduped_unique: number; // e.g. 17310
  syndicated_reprints_collapsed: number; // e.g. 31110
  hdbscan_clusters_identified: number; // e.g. 14
  off_topic_noise_filtered_pct: number; // e.g. 88
  peak_z_score: string; // e.g. +3.8σ
  peak_anomaly_summary: string;
  centroid_texts_analyzed_by_llm: number; // e.g. 340
}

export interface CockpitData {
  scenario_id: string;
  timeframe: string;
  pipeline: StatisticalPipelineStats;
  target_narratives: DefinedNarrativePillar[];
  regional_synthesis: RegionalSynthesisRow[];
  surface_nlp_vs_forensic_reality: {
    commercial_nlp_sentiment: string;
    commercial_nlp_confidence: string;
    commercial_nlp_blindspot: string;
    forensic_reality_verdict: string;
    forensic_reality_subtext: string;
    statistical_proof_anchor: string;
  };
}

export const COCKPIT_FIXTURES: Record<Language, Record<string, CockpitData>> = {
  en: {
    oncology_trial_update: {
      scenario_id: 'oncology_trial_update',
      timeframe: 'Last 72 Hours (Global Multi-Channel Ingestion)',
      pipeline: {
        raw_ingested_72h: 48420,
        minhash_deduped_unique: 17310,
        syndicated_reprints_collapsed: 31110,
        hdbscan_clusters_identified: 14,
        off_topic_noise_filtered_pct: 88,
        peak_z_score: '+3.8σ',
        peak_anomaly_summary: 'Statistically significant velocity outbreak in US & EU health policy and payer coverage.',
        centroid_texts_analyzed_by_llm: 340
      },
      target_narratives: [
        {
          id: 'pillar_1',
          pillar_number: '01',
          title: 'Primary Efficacy Proven',
          core_thesis: 'Phase III Onco-701 met its pre-specified primary endpoint, demonstrating statistically significant and clinically meaningful overall survival (HR 0.68, p<0.001) across the broad patient population.',
          target_vector_anchor: 'Ref: CSR-701 §4.2 (Primary OS Endpoint)',
          mandatory_proof_points: [
            'Statistically significant overall survival benefit (p<0.001)',
            'Intention-to-treat (ITT) population design verified',
            'Full primary data submission to FDA, EMA, Swissmedic on schedule'
          ]
        },
        {
          id: 'pillar_2',
          pillar_number: '02',
          title: 'Exploratory Subgroup Nature & Patient Safety',
          core_thesis: 'Cohort B was an exploratory subgroup not statistically powered for standalone significance; its clinical benefit trajectory aligns with the overall study population with verified safety continuity.',
          target_vector_anchor: 'Ref: SAP-701 §3.1 (Exploratory Subgroups)',
          mandatory_proof_points: [
            'Exploratory subgroup per pre-approved Statistical Analysis Plan (SAP)',
            'Zero new safety or toxicity signals across any subgroup',
            'Current patients instructed to maintain regimens without interruption'
          ]
        },
        {
          id: 'pillar_3',
          pillar_number: '03',
          title: 'Holistic Clinical Value & Access',
          core_thesis: 'The proven survival extension supports broad regulatory approval and sustainable patient access across healthcare systems globally.',
          target_vector_anchor: 'Ref: HEOR-701 (Global Clinical Value Dossier)',
          mandatory_proof_points: [
            'Health economics model anchored in primary overall survival',
            'Broad label potential preserved without premature concessions',
            'Global regulatory submissions proceeding as planned in Q1 2027'
          ]
        }
      ],
      regional_synthesis: [
        {
          region_id: 'us',
          region_name: 'North America (US / FDA)',
          regulatory_context: 'Payer PBM Scrutiny & FDA Label Review',
          raw_volume: 19400,
          deduped_volume: 6820,
          velocity_z_score: 3.8,
          velocity_trend: '+3.8σ Anomaly (Breakout)',
          cosine_alignment: 0.38,
          pull_through_status: 'AT_RISK',
          status_label: 'Payer Pushback & Subgroup Conflation',
          legacy_media_frame: 'Payer & Price Scrutiny: "Subgroup variance casts doubt on premium pricing justification."',
          social_forum_frame: 'Patient Anxiety: "Will US commercial insurers refuse coverage for Cohort B biomarker profiles?"',
          llm_synthesis_frame: 'AI Answer Distortion: Frontier LLMs hallucinate that the drug "failed key patients" and advise pausing therapy.',
          llm_hallucination_rate: 52,
          strategic_risk_summary: 'Pillar 1 lands in academic headlines, but Pillar 3 is completely inverted by health-economic commentators anchoring price negotiations to subgroup variance.'
        },
        {
          region_id: 'eu',
          region_name: 'Europe (EU / EMA & HTA)',
          regulatory_context: 'EMA Central Review & HTA Reimbursement Bodies',
          raw_volume: 14200,
          deduped_volume: 5110,
          velocity_z_score: 2.1,
          velocity_trend: '+2.1σ Elevated',
          cosine_alignment: 0.54,
          pull_through_status: 'MIXED',
          status_label: 'HTA Evidence Scrutiny',
          legacy_media_frame: 'Comparative Effectiveness: "Solid survival gain, but European HTA bodies may push for restricted label."',
          social_forum_frame: 'Clinical Community Debate: Oncologists discussing statistical power of exploratory subsets.',
          llm_synthesis_frame: 'Regulatory Conflation: AI answer engines confuse EMA submission timeline with preliminary advisory committee dates.',
          llm_hallucination_rate: 38,
          strategic_risk_summary: 'Media is scientifically balanced, but risk of regional HTA bodies pre-empting label restrictions based on uncalibrated trade press framing.'
        },
        {
          region_id: 'ch',
          region_name: 'Switzerland (HQ / Swissmedic)',
          regulatory_context: 'Corporate Affairs, Investor Community & Swissmedic',
          raw_volume: 4820,
          deduped_volume: 1640,
          velocity_z_score: 0.4,
          velocity_trend: '+0.4σ Baseline Normal',
          cosine_alignment: 0.82,
          pull_through_status: 'ALIGNED',
          status_label: 'Pipeline Success Anchored',
          legacy_media_frame: 'R&D Pipeline Success: "Pivotal Phase III milestone confirms oncology innovation leadership with minor subgroup nuances."',
          social_forum_frame: 'Low Volume / Factual: Investor and life-science community reposting official corporate release.',
          llm_synthesis_frame: 'Accurate Retrieval: AI search engines correctly cite the corporate newsroom release as canonical ground truth.',
          llm_hallucination_rate: 15,
          strategic_risk_summary: 'Domestic and HQ reception is solid; key narrative pillars are intact and well-understood by business media.'
        },
        {
          region_id: 'apac',
          region_name: 'Asia-Pacific (APAC / PMDA & NMPA)',
          regulatory_context: 'Bridging Study Timelines & Regional Health Ministries',
          raw_volume: 10000,
          deduped_volume: 3740,
          velocity_z_score: 1.6,
          velocity_trend: '+1.6σ Moderate Growth',
          cosine_alignment: 0.48,
          pull_through_status: 'MIXED',
          status_label: 'Local Filing Timeline Uncertainty',
          legacy_media_frame: 'Access Timelines: "When will local regulatory filings follow the US and European submissions?"',
          social_forum_frame: 'Patient Access Groups: Inquiries about regional trial inclusion and clinical trial expansion.',
          llm_synthesis_frame: 'Outdated Synthesis: LLMs mix older Phase II Asian subgroup data with current Phase III global results.',
          llm_hallucination_rate: 45,
          strategic_risk_summary: 'Lack of proactive localized Asian filing statements creates an information vacuum filled by outdated Phase II data.'
        }
      ],
      surface_nlp_vs_forensic_reality: {
        commercial_nlp_sentiment: '74% NEUTRAL / INFORMATIVE (Score 0.82)',
        commercial_nlp_confidence: 'High statistical confidence across 17,310 deduplicated records',
        commercial_nlp_blindspot: 'Standard NLP sentiment categorizes polite medical journal prose and formal health-policy commentary as "Neutral" because it lacks hostile profanity or angry consumer keywords.',
        forensic_reality_verdict: 'CRITICAL COMMERCIAL VALUE THREAT IN US & EU',
        forensic_reality_subtext: 'Cluster #02 ("Subgroup Efficacy Doubt") experienced a +3.8σ breakout among Tier-1 US and EU health-policy outlets with a low 0.38 cosine alignment score. Payers are systematically establishing "subgroup failure" as their baseline before reimbursement negotiations open.',
        statistical_proof_anchor: 'z = +3.8σ velocity anomaly | Cosine alignment 0.38 | 52% LLM hallucination rate in North America'
      }
    },
    alpine_transit_crisis: {
      scenario_id: 'alpine_transit_crisis',
      timeframe: 'Last 24 Hours (Real-Time Infrastructure Ingestion)',
      pipeline: {
        raw_ingested_72h: 36200,
        minhash_deduped_unique: 8940,
        syndicated_reprints_collapsed: 27260,
        hdbscan_clusters_identified: 9,
        off_topic_noise_filtered_pct: 91,
        peak_z_score: '+4.6σ',
        peak_anomaly_summary: 'Domestic commuter dynamic in Switzerland; +3.2σ international wire speculation on infrastructure resilience.',
        centroid_texts_analyzed_by_llm: 210
      },
      target_narratives: [
        {
          id: 'pillar_1',
          pillar_number: '01',
          title: 'Physical Component Defect (Zero Cyber Intrusion)',
          core_thesis: 'The tunnel stoppage was caused exclusively by a mechanical interlocking relay short-circuit (R-400); network telemetry confirms zero cyber intrusion.',
          target_vector_anchor: 'Ref: SEC-2026 §2 (Incident Protocol)',
          mandatory_proof_points: [
            'Localized electrical short-circuit identified in relay R-400',
            'SCADA network telemetry confirms zero unauthorized digital packets',
            'Joint technical review with National Cyber Security Centre (NCSC)'
          ]
        },
        {
          id: 'pillar_2',
          pillar_number: '02',
          title: 'Fail-Safe Passenger Protection',
          core_thesis: 'Safety systems engaged instantly as designed, ensuring 100% passenger safety with all trains cleared to staging stations in under 12 minutes.',
          target_vector_anchor: 'Ref: OPS-FAILSAFE §4.1 (Passenger Evacuation)',
          mandatory_proof_points: [
            'Automatic fail-safe red-signal lock engaged immediately',
            'Zero stranded passengers inside danger sectors',
            'Scenic detour route activated for ongoing traveler flow'
          ]
        }
      ],
      regional_synthesis: [
        {
          region_id: 'ch',
          region_name: 'Switzerland (National / Domestic)',
          regulatory_context: 'Federal Transport Office & Commuter Public',
          raw_volume: 18400,
          deduped_volume: 4200,
          velocity_z_score: 4.6,
          velocity_trend: '+4.6σ Breaking Crisis',
          cosine_alignment: 0.62,
          pull_through_status: 'MIXED',
          status_label: 'Operational Delay Focus',
          legacy_media_frame: 'Service Disruption: "Commuters face severe delays via mountain route following relay breakdown."',
          social_forum_frame: 'Commuter Frustration: Sharing platform delays and alternate connection timetables.',
          llm_synthesis_frame: 'Factual Replay: AI engines correctly identify relay R-400 defect after corporate press release.',
          llm_hallucination_rate: 18,
          strategic_risk_summary: 'Domestic narrative is stabilized around maintenance and passenger comfort; cyber speculation was dismantled by engineering facts.'
        },
        {
          region_id: 'eu',
          region_name: 'Europe (Cross-Border / Transit Corridor)',
          regulatory_context: 'EU Freight Corridors & International Wires',
          raw_volume: 12200,
          deduped_volume: 3100,
          velocity_z_score: 3.2,
          velocity_trend: '+3.2σ High Acceleration',
          cosine_alignment: 0.35,
          pull_through_status: 'AT_RISK',
          status_label: 'International Sabotage Rumors',
          legacy_media_frame: 'Geopolitical Vulnerability: "Key European north-south transit axis shut down amid hybrid threat fears."',
          social_forum_frame: 'Speculative Defense Channels: Repeating unverified hacker group claims.',
          llm_synthesis_frame: 'Critical Hallucination: AI search synthesizes old military exercise alerts into the live incident description.',
          llm_hallucination_rate: 55,
          strategic_risk_summary: 'Cross-border wire services amplify "infrastructure vulnerability" without repeating technical relay details.'
        },
        {
          region_id: 'us',
          region_name: 'North America (International Financial)',
          regulatory_context: 'Global Supply Chain & Logistics Coverage',
          raw_volume: 5600,
          deduped_volume: 1640,
          velocity_z_score: 1.1,
          velocity_trend: '+1.1σ Moderate',
          cosine_alignment: 0.45,
          pull_through_status: 'MIXED',
          status_label: 'Supply Chain Bottleneck',
          legacy_media_frame: 'Trade Impact: "European rail freight diverted through mountain passes, delaying cargo."',
          social_forum_frame: 'Minimal Social Volume',
          llm_synthesis_frame: 'Generic infrastructure disruption summary.',
          llm_hallucination_rate: 30,
          strategic_risk_summary: 'Confined to trade and financial wires; focus is on freight delivery timelines rather than security.'
        },
        {
          region_id: 'apac',
          region_name: 'Asia-Pacific (Global Logistics)',
          regulatory_context: 'International Freight Routing',
          raw_volume: 0,
          deduped_volume: 0,
          velocity_z_score: 0,
          velocity_trend: 'Baseline',
          cosine_alignment: 0.70,
          pull_through_status: 'ALIGNED',
          status_label: 'Minimal Exposure',
          legacy_media_frame: 'Routine transport briefs only.',
          social_forum_frame: 'None detected.',
          llm_synthesis_frame: 'Standard travel advisories.',
          llm_hallucination_rate: 10,
          strategic_risk_summary: 'Negligible regional impact.'
        }
      ],
      surface_nlp_vs_forensic_reality: {
        commercial_nlp_sentiment: '68% NEUTRAL / DESCRIPTIVE',
        commercial_nlp_confidence: 'High',
        commercial_nlp_blindspot: 'Misses that foreign media wires conflated domestic rail maintenance with international hybrid warfare threats.',
        forensic_reality_verdict: 'GEOPOLITICAL FRAMING DRIFT IN INTERNATIONAL WIRES',
        forensic_reality_subtext: 'While Swiss media focused on commuter delays, foreign wire services generated +3.2σ spikes framing the incident as proof of Western infrastructure vulnerability.',
        statistical_proof_anchor: 'z = +3.2σ international spike | Cross-border alignment 0.35 | 55% international AI distortion'
      }
    },
    esg_investigation: {
      scenario_id: 'esg_investigation',
      timeframe: 'Last 48 Hours (Supply Chain Audit Ingestion)',
      pipeline: {
        raw_ingested_72h: 24100,
        minhash_deduped_unique: 7200,
        syndicated_reprints_collapsed: 16900,
        hdbscan_clusters_identified: 7,
        off_topic_noise_filtered_pct: 85,
        peak_z_score: '+3.4σ',
        peak_anomaly_summary: 'Escalating coverage in European trade media focused on CSDDD due diligence liability.',
        centroid_texts_analyzed_by_llm: 180
      },
      target_narratives: [
        {
          id: 'pillar_1',
          pillar_number: '01',
          title: 'Decisive Supply Chain Governance',
          core_thesis: 'All purchase allocations to the subcontractor were suspended immediately upon receiving credible allegations, and an independent forensic audit was launched.',
          target_vector_anchor: 'Ref: ESG-2025-V2 (Supplier Audit Standards)',
          mandatory_proof_points: [
            'Immediate freeze on active supplier purchase orders',
            'Independent Big-4 forensic audit on the ground',
            'Transparent publication of audit summary guaranteed'
          ]
        }
      ],
      regional_synthesis: [
        {
          region_id: 'eu',
          region_name: 'Europe (Corporate Due Diligence Regs)',
          regulatory_context: 'EU Corporate Sustainability Due Diligence Directive (CSDDD)',
          raw_volume: 12400,
          deduped_volume: 3800,
          velocity_z_score: 3.4,
          velocity_trend: '+3.4σ Escalating',
          cosine_alignment: 0.42,
          pull_through_status: 'AT_RISK',
          status_label: 'CSDDD Compliance Scrutiny',
          legacy_media_frame: 'Governance Scrutiny: "Did internal audits fail to detect labor violations in Tier-3 suppliers?"',
          social_forum_frame: 'NGO Campaigns: Direct tagging of executive leadership demanding contract cancellation.',
          llm_synthesis_frame: 'AI Bias: Models assume guilt and synthesize NGO claims as verified corporate history.',
          llm_hallucination_rate: 42,
          strategic_risk_summary: 'NGO campaign frames the issue as systemic negligence rather than an isolated subcontractor breach.'
        },
        {
          region_id: 'us',
          region_name: 'North America (ESG Investors)',
          regulatory_context: 'SEC ESG Disclosure & Sustainability Funds',
          raw_volume: 6800,
          deduped_volume: 2100,
          velocity_z_score: 1.8,
          velocity_trend: '+1.8σ Moderate',
          cosine_alignment: 0.58,
          pull_through_status: 'MIXED',
          status_label: 'ESG Rating Watch',
          legacy_media_frame: 'Green Bond Risk: "Sustainability-linked bonds monitored for possible covenant review."',
          social_forum_frame: 'Investor commentary on supply chain transparency.',
          llm_synthesis_frame: 'Moderate hallucination on prior audit dates.',
          llm_hallucination_rate: 32,
          strategic_risk_summary: 'Capital market analysts waiting for formal audit report before adjusting ESG ratings.'
        },
        {
          region_id: 'ch',
          region_name: 'Switzerland (HQ / Due Diligence Law)',
          regulatory_context: 'Swiss Corporate Due Diligence Rules (VOSUG)',
          raw_volume: 3200,
          deduped_volume: 950,
          velocity_z_score: 2.1,
          velocity_trend: '+2.1σ Elevated',
          cosine_alignment: 0.65,
          pull_through_status: 'MIXED',
          status_label: 'Audit Rigor Under Review',
          legacy_media_frame: 'Legal & Compliance: "Enterprise defends verification process while ordering on-site audit."',
          social_forum_frame: 'Consumer commentary on infrastructure supply integrity.',
          llm_synthesis_frame: 'Accurate capture of the purchase order freeze.',
          llm_hallucination_rate: 22,
          strategic_risk_summary: 'Domestic media acknowledges immediate procurement freeze but requests clear audit completion date.'
        },
        {
          region_id: 'apac',
          region_name: 'Asia-Pacific (Manufacturing Base)',
          regulatory_context: 'Local Labor Inspectorates & Supplier Networks',
          raw_volume: 1700,
          deduped_volume: 350,
          velocity_z_score: 0.8,
          velocity_trend: '+0.8σ Stable',
          cosine_alignment: 0.60,
          pull_through_status: 'ALIGNED',
          status_label: 'Operational Investigation',
          legacy_media_frame: 'Regional business press noting supplier audit status.',
          social_forum_frame: 'Low local chatter.',
          llm_synthesis_frame: 'Factual summary of company statement.',
          llm_hallucination_rate: 18,
          strategic_risk_summary: 'Controlled locally; primary reputational exposure is concentrated in European NGO ecosystems.'
        }
      ],
      surface_nlp_vs_forensic_reality: {
        commercial_nlp_sentiment: '56% NEUTRAL / 34% NEGATIVE',
        commercial_nlp_confidence: 'Medium',
        commercial_nlp_blindspot: 'Standard sentiment tools treat NGO campaign posts as general negative chatter without detecting legal CSDDD liability claims.',
        forensic_reality_verdict: 'CSDDD DUE DILIGENCE LITIGATION RISK',
        forensic_reality_subtext: 'European media cluster is linking the subcontractor allegations directly to corporate liability statutes, which could impact upcoming sustainability bond auctions.',
        statistical_proof_anchor: 'z = +3.4σ European velocity | Cosine alignment 0.42 | 42% LLM bias rate'
      }
    },
    health_data_breach: {
      scenario_id: 'health_data_breach',
      timeframe: 'Last 48 Hours (Healthcare & Privacy Ingestion)',
      pipeline: {
        raw_ingested_72h: 21200,
        minhash_deduped_unique: 5800,
        syndicated_reprints_collapsed: 15400,
        hdbscan_clusters_identified: 6,
        off_topic_noise_filtered_pct: 87,
        peak_z_score: '+3.1σ',
        peak_anomaly_summary: 'Intense domestic debate among Swiss physician associations on cryptographic key custody.',
        centroid_texts_analyzed_by_llm: 140
      },
      target_narratives: [
        {
          id: 'pillar_1',
          pillar_number: '01',
          title: 'Sovereign Cryptographic Custody',
          core_thesis: 'Health records stored in cloud centers are mathematically unreadable without keys held permanently in domestic sovereign custody under statutory public oversight.',
          target_vector_anchor: 'Ref: SEC-CRYPTO §1 (Sovereign Key Architecture)',
          mandatory_proof_points: [
            'Bring Your Own Key (BYOK) architecture guarantees domestic key custody',
            'Zero technical decryption capability for cloud hosts or foreign courts',
            'Independent security audits verified by academic cybersecurity centers'
          ]
        }
      ],
      regional_synthesis: [
        {
          region_id: 'ch',
          region_name: 'Switzerland (National Healthcare Domain)',
          regulatory_context: 'Federal Health & Data Protection Authorities',
          raw_volume: 14200,
          deduped_volume: 3800,
          velocity_z_score: 3.1,
          velocity_trend: '+3.1σ Active Debate',
          cosine_alignment: 0.52,
          pull_through_status: 'MIXED',
          status_label: 'Physician Trust Debate',
          legacy_media_frame: 'Medical Confidentiality: "Doctors question whether cloud storage compromises patient secrecy."',
          social_forum_frame: 'Privacy advocates debating the US CLOUD Act.',
          llm_synthesis_frame: 'AI answers overstate foreign government access powers by missing the BYOK key separation.',
          llm_hallucination_rate: 40,
          strategic_risk_summary: 'Public trust hangs on clear cryptographic explanation; doctors threaten enrollment slowdown if key custody is not guaranteed.'
        },
        {
          region_id: 'eu',
          region_name: 'Europe (GDPR & Data Sovereignty)',
          regulatory_context: 'European Data Protection Board & Health Data Space',
          raw_volume: 4800,
          deduped_volume: 1400,
          velocity_z_score: 1.4,
          velocity_trend: '+1.4σ Moderate',
          cosine_alignment: 0.68,
          pull_through_status: 'ALIGNED',
          status_label: 'Sovereignty Blueprint Reference',
          legacy_media_frame: 'Technology Watch: "Swiss BYOK architecture cited as benchmark for sovereign healthcare clouds."',
          social_forum_frame: 'Cybersecurity professional forums praising cryptographic key separation.',
          llm_synthesis_frame: 'Accurate technical explanation of AES-256 encryption.',
          llm_hallucination_rate: 15,
          strategic_risk_summary: 'Positive technical reception across European digital health bodies.'
        },
        {
          region_id: 'us',
          region_name: 'North America (Cloud Infrastructure)',
          regulatory_context: 'Hyperscaler Standards & HIPAA',
          raw_volume: 2200,
          deduped_volume: 600,
          velocity_z_score: 0.4,
          velocity_trend: '+0.4σ Baseline',
          cosine_alignment: 0.75,
          pull_through_status: 'ALIGNED',
          status_label: 'Standard Implementation',
          legacy_media_frame: 'Enterprise IT reporting standard enterprise migration.',
          social_forum_frame: 'Low engagement.',
          llm_synthesis_frame: 'Accurate.',
          llm_hallucination_rate: 12,
          strategic_risk_summary: 'Viewed as routine enterprise cloud adoption.'
        },
        {
          region_id: 'apac',
          region_name: 'Asia-Pacific',
          regulatory_context: 'Digital Health Initiatives',
          raw_volume: 0,
          deduped_volume: 0,
          velocity_z_score: 0,
          velocity_trend: 'Baseline',
          cosine_alignment: 0.70,
          pull_through_status: 'ALIGNED',
          status_label: 'No Exposure',
          legacy_media_frame: 'None.',
          social_forum_frame: 'None.',
          llm_synthesis_frame: 'N/A',
          llm_hallucination_rate: 0,
          strategic_risk_summary: 'No exposure.'
        }
      ],
      surface_nlp_vs_forensic_reality: {
        commercial_nlp_sentiment: '64% NEUTRAL / JURIDICAL',
        commercial_nlp_confidence: 'High',
        commercial_nlp_blindspot: 'Misses that fear of foreign access is causing real-world doctor hesitation despite legal compliance.',
        forensic_reality_verdict: 'CLINICAL ADOPTION RETICENCE',
        forensic_reality_subtext: 'The debate is emotional and trust-driven. Abstract assurances about legal compliance fail to reassure doctors.',
        statistical_proof_anchor: 'z = +3.1σ domestic spike | Cosine alignment 0.52 | 40% AI answer distortion on key ownership'
      }
    }
  },
  de: {
    oncology_trial_update: {
      scenario_id: 'oncology_trial_update',
      timeframe: 'Letzte 72 Stunden (Globale Multi-Kanal-Erfassung)',
      pipeline: {
        raw_ingested_72h: 48420,
        minhash_deduped_unique: 17310,
        syndicated_reprints_collapsed: 31110,
        hdbscan_clusters_identified: 14,
        off_topic_noise_filtered_pct: 88,
        peak_z_score: '+3.8σ',
        peak_anomaly_summary: 'Statistisch signifikante Beschleunigung im US- und EU-Kostenträgerdiskurs.',
        centroid_texts_analyzed_by_llm: 340
      },
      target_narratives: [
        {
          id: 'pillar_1',
          pillar_number: '01',
          title: 'Primäre Wirksamkeit belegt',
          core_thesis: 'Die Phase-III-Studie erreichte ihren primären Endpunkt und belegt einen statistisch signifikanten sowie klinisch bedeutsamen Gesamtüberlebensvorteil (HR 0.68, p<0.001) in der Gesamtpopulation.',
          target_vector_anchor: 'Ref: CSR-701 §4.2 (Primärer OS-Endpunkt)',
          mandatory_proof_points: [
            'Statistisch signifikanter Überlebensvorteil (p<0.001)',
            'Intention-to-Treat (ITT) Studiendesign bestätigt',
            'Planmässige Einreichung bei FDA, EMA und Swissmedic'
          ]
        },
        {
          id: 'pillar_2',
          pillar_number: '02',
          title: 'Explorative Subgruppe & Therapiesicherheit',
          core_thesis: 'Kohorte B war eine explorative Subgruppe ohne statistische Power für einen Einzelsignifikanznachweis; der klinische Trend ist konsistent mit der Gesamtkohorte bei gesicherter Therapiekontinuität.',
          target_vector_anchor: 'Ref: SAP-701 §3.1 (Explorative Subgruppen)',
          mandatory_proof_points: [
            'Explorative Subgruppe gemäss vorab genehmigtem Studienplan (SAP)',
            'Null neue Sicherheitssignale in allen Subgruppen',
            'Patienten führen laufende Therapien unverändert fort'
          ]
        },
        {
          id: 'pillar_3',
          pillar_number: '03',
          title: 'Ganzheitlicher klinischer Wert & Marktzugang',
          core_thesis: 'Der belegte Überlebensvorteil rechtfertigt eine breite Zulassung und eine nachhaltige Erstattung durch Gesundheitssysteme weltweit.',
          target_vector_anchor: 'Ref: HEOR-701 (Nutzenbewertungs-Dossier)',
          mandatory_proof_points: [
            'Gesundheitsökonomisches Modell stützt sich auf das Gesamtüberleben',
            'Breites Indikationspotenzial ohne vorzeitige Abstriche gewahrt',
            'Zulassungsanträge weltweit termingerecht in Q1 2027'
          ]
        }
      ],
      regional_synthesis: [
        {
          region_id: 'us',
          region_name: 'Nordamerika (USA / FDA & Payer)',
          regulatory_context: 'PBM-Kostendruck & FDA-Zulassungsprüfung',
          raw_volume: 19400,
          deduped_volume: 6820,
          velocity_z_score: 3.8,
          velocity_trend: '+3.8σ Anomalie (Ausbruch)',
          cosine_alignment: 0.38,
          pull_through_status: 'AT_RISK',
          status_label: 'Payer-Kostendruck & Subgruppen-Fokus',
          legacy_media_frame: 'Kostendruck: "Subgruppen-Varianz nährt Zweifel an Rechtfertigung des Premiumpreises."',
          social_forum_frame: 'Patientensorge: "Werden US-Kassen die Kostenübernahme für Kohorte-B-Profile verweigern?"',
          llm_synthesis_frame: 'KI-Verzerrung: Sprachmodelle behaupten, das Medikament sei "gescheitert" und raten zum Therapieabbruch.',
          llm_hallucination_rate: 52,
          strategic_risk_summary: 'Säule 1 wird zwar wissenschaftlich zitiert, Säule 3 wird jedoch von Gesundheitsökonomen verdreht, um künftige Preisverhandlungen zu belasten.'
        },
        {
          region_id: 'eu',
          region_name: 'Europa (EU / EMA & HTA-Behörden)',
          regulatory_context: 'EMA-Zulassung & HTA-Nutzenbewertung',
          raw_volume: 14200,
          deduped_volume: 5110,
          velocity_z_score: 2.1,
          velocity_trend: '+2.1σ Erhöht',
          cosine_alignment: 0.54,
          pull_through_status: 'MIXED',
          status_label: 'HTA-Evidenzprüfung',
          legacy_media_frame: 'Nutzenbewertung: "Solider Überlebensvorteil, aber HTA-Stellen könnten engere Indikation fordern."',
          social_forum_frame: 'Onkologen-Debatte über statistische Power von Subgruppen.',
          llm_synthesis_frame: 'Regulatorische Verwechslung von Einreichungsterminen bei der EMA.',
          llm_hallucination_rate: 38,
          strategic_risk_summary: 'Sachliche Fachpresse, aber Risiko, dass europäische Kassen eine Indikationseinschränkung vorwegnehmen.'
        },
        {
          region_id: 'ch',
          region_name: 'Schweiz (HQ / Swissmedic)',
          regulatory_context: 'Konzernsitz, Investoren & Swissmedic',
          raw_volume: 4820,
          deduped_volume: 1640,
          velocity_z_score: 0.4,
          velocity_trend: '+0.4σ Normaler Baseline-Wert',
          cosine_alignment: 0.82,
          pull_through_status: 'ALIGNED',
          status_label: 'Pipeline-Erfolg verankert',
          legacy_media_frame: 'F&E-Erfolg: "Zulassungsstudie bestätigt Onkologie-Führungsposition mit erwarteten Subgruppen-Details."',
          social_forum_frame: 'Geringes Volumen / Faktual: Weiterverbreitung der offiziellen Konzernmitteilung.',
          llm_synthesis_frame: 'Präzise Recherche: KI-Assistenten zitieren die Newsroom-Mitteilung korrekt.',
          llm_hallucination_rate: 15,
          strategic_risk_summary: 'Solide Resonanz im Heimmarkt; Kernbotschaften sind in der Wirtschaftspresse verankert.'
        },
        {
          region_id: 'apac',
          region_name: 'Asien-Pazifik (APAC / PMDA & NMPA)',
          regulatory_context: 'Regionale Zulassungsfristen & Ministerien',
          raw_volume: 10000,
          deduped_volume: 3740,
          velocity_z_score: 1.6,
          velocity_trend: '+1.6σ Moderates Wachstum',
          cosine_alignment: 0.48,
          pull_through_status: 'MIXED',
          status_label: 'Unklare regionale Zeitpläne',
          legacy_media_frame: 'Verfügbarkeit: "Wann folgen lokale Zulassungsanträge nach den USA und Europa?"',
          social_forum_frame: 'Patientengruppen fragen nach lokalen Studienkohorten.',
          llm_synthesis_frame: 'Veraltete Daten: KI vermischt alte Phase-II-Daten mit aktuellen Phase-III-Ergebnissen.',
          llm_hallucination_rate: 45,
          strategic_risk_summary: 'Das Fehlen proaktiver lokaler Mitteilungen erzeugt ein Vakuum, das von veralteten Daten gefüllt wird.'
        }
      ],
      surface_nlp_vs_forensic_reality: {
        commercial_nlp_sentiment: '74% NEUTRAL / INFORMATIV (Score 0.82)',
        commercial_nlp_confidence: 'Hoch (auf Basis von 17.310 deduplizierten Datensätzen)',
        commercial_nlp_blindspot: 'Standard-NLP stuft die formelle Fachsprache der Gesundheitspolitiker als "neutral" ein, weil keine Vulgärsprache oder wütende Verbraucherbegriffe vorkommen.',
        forensic_reality_verdict: 'KRITISCHES KOMMERZIELLES ERSTATTUNGSRISIKO IN USA & EU',
        forensic_reality_subtext: 'Cluster #02 ("Subgruppen-Wirksamkeitszweifel") verzeichnete einen +3.8σ Ausbruch bei Leitmedien mit einem niedrigen Cosinus-Wert von 0.38. Kostenträger etablieren "Subgruppen-Schwäche" als Hebel für künftige Preisabschläge.',
        statistical_proof_anchor: 'z = +3.8σ Anomalie | Cosinus-Ähnlichkeit 0.38 | 52% KI-Synthese-Verzerrung in den USA'
      }
    },
    alpine_transit_crisis: {
      scenario_id: 'alpine_transit_crisis',
      timeframe: 'Letzte 24 Stunden (Infrastruktur-Echtzeiterfassung)',
      pipeline: {
        raw_ingested_72h: 36200,
        minhash_deduped_unique: 8940,
        syndicated_reprints_collapsed: 27260,
        hdbscan_clusters_identified: 9,
        off_topic_noise_filtered_pct: 91,
        peak_z_score: '+4.6σ',
        peak_anomaly_summary: 'Hohe Dynamik im Schweizer Pendlerverkehr; +3.2σ internationale Spekulation über Infrastruktur-Resilienz.',
        centroid_texts_analyzed_by_llm: 210
      },
      target_narratives: [
        {
          id: 'pillar_1',
          pillar_number: '01',
          title: 'Physischer Bauteildefekt (Kein Cyberangriff)',
          core_thesis: 'Der Unterbruch wurde durch einen Kurzschluss am Relais R-400 verursacht; die Netzwerküberwachung bestätigt null Cyber-Anomalien.',
          target_vector_anchor: 'Ref: SEC-2026 §2 (Notfallprotokoll)',
          mandatory_proof_points: [
            'Lokaler Kurzschluss an Stellwerkskomponente R-400',
            'SCADA-Netzwerküberwachung bestätigt null unbefugte Datenpakete',
            'Gemeinsame Prüfung mit Bundesamt für Cybersicherheit (BACS)'
          ]
        }
      ],
      regional_synthesis: [
        {
          region_id: 'ch',
          region_name: 'Schweiz (Inland / Pendler)',
          regulatory_context: 'BAV & Schweizer ÖV-Nutzer',
          raw_volume: 18400,
          deduped_volume: 4200,
          velocity_z_score: 4.6,
          velocity_trend: '+4.6σ Akute Lage',
          cosine_alignment: 0.62,
          pull_through_status: 'MIXED',
          status_label: 'Betriebliche Verspätungen',
          legacy_media_frame: 'Verkehrslage: "Reisende müssen wegen Stellwerkstörung über die Bergstrecke ausweichen."',
          social_forum_frame: 'Pendlerberichte über Ausweichverbindungen.',
          llm_synthesis_frame: 'Faktentreu: KI nennt den Relaisdefekt korrekt nach der Medienmitteilung.',
          llm_hallucination_rate: 18,
          strategic_risk_summary: 'Inländische Debatte ist auf Betriebsfragen konzentriert; Sabotagegerüchte wurden durch Fakten entkräftet.'
        },
        {
          region_id: 'eu',
          region_name: 'Europa (Transitkorridor Nord-Süd)',
          regulatory_context: 'EU-Güterverkehr & Internationale Agenturen',
          raw_volume: 12200,
          deduped_volume: 3100,
          velocity_z_score: 3.2,
          velocity_trend: '+3.2σ Hohe Dynamik',
          cosine_alignment: 0.35,
          pull_through_status: 'AT_RISK',
          status_label: 'Internationale Sabotage-These',
          legacy_media_frame: 'Geopolitik: "Wichtige europäische Transitachse unterbrochen – Sorge vor Infrastruktur-Sabotage."',
          social_forum_frame: 'Verbreitung von Gerüchten über angebliche Hackergruppen.',
          llm_synthesis_frame: 'Halluzination: KI vermischt alte Militärberichte mit der aktuellen Stellwerkstörung.',
          llm_hallucination_rate: 55,
          strategic_risk_summary: 'Ausländische Agenturen spitzen auf "Verwundbarkeit der Infrastruktur" zu.'
        },
        {
          region_id: 'us',
          region_name: 'Nordamerika (Wirtschaft & Logistik)',
          regulatory_context: 'Globale Frachtketten',
          raw_volume: 5600,
          deduped_volume: 1640,
          velocity_z_score: 1.1,
          velocity_trend: '+1.1σ Moderat',
          cosine_alignment: 0.45,
          pull_through_status: 'MIXED',
          status_label: 'Logistik-Engpass',
          legacy_media_frame: 'Frachtausfälle durch Umleitungen.',
          social_forum_frame: 'Geringes Volumen.',
          llm_synthesis_frame: 'Allgemeine Störungsmeldung.',
          llm_hallucination_rate: 30,
          strategic_risk_summary: 'Auf Wirtschaftsnachrichten beschränkt.'
        },
        {
          region_id: 'apac',
          region_name: 'Asien-Pazifik',
          regulatory_context: 'Internationale Frachtketten',
          raw_volume: 0,
          deduped_volume: 0,
          velocity_z_score: 0,
          velocity_trend: 'Baseline',
          cosine_alignment: 0.70,
          pull_through_status: 'ALIGNED',
          status_label: 'Keine Relevanz',
          legacy_media_frame: 'Keine Berichterstattung.',
          social_forum_frame: 'Keine.',
          llm_synthesis_frame: 'N/A',
          llm_hallucination_rate: 0,
          strategic_risk_summary: 'Keine Exposition.'
        }
      ],
      surface_nlp_vs_forensic_reality: {
        commercial_nlp_sentiment: '68% NEUTRAL / BESCHREIBEND',
        commercial_nlp_confidence: 'Hoch',
        commercial_nlp_blindspot: 'Erkennt nicht, dass ausländische Medien die Schweizer Stellwerkstörung mit hybrider Kriegsführung verknüpfen.',
        forensic_reality_verdict: 'GEOPOLITISCHE NARRATIV-VERZERRUNG IM AUSLAND',
        forensic_reality_subtext: 'Während Schweizer Medien sachlich über Umleitungen berichten, erzeugen internationale Agenturen einen +3.2σ Anstieg mit Fokus auf angebliche Sabotage.',
        statistical_proof_anchor: 'z = +3.2σ Auslands-Spike | Cosinus-Ähnlichkeit 0.35 | 55% KI-Verzerrungsrate'
      }
    },
    esg_investigation: {
      scenario_id: 'esg_investigation',
      timeframe: 'Letzte 48 Stunden (Lieferketten-Audit Ingestion)',
      pipeline: {
        raw_ingested_72h: 24100,
        minhash_deduped_unique: 7200,
        syndicated_reprints_collapsed: 16900,
        hdbscan_clusters_identified: 7,
        off_topic_noise_filtered_pct: 85,
        peak_z_score: '+3.4σ',
        peak_anomaly_summary: 'Eskalierende Berichterstattung in europäischen Fachmedien zu CSDDD-Sorgfaltspflichten.',
        centroid_texts_analyzed_by_llm: 180
      },
      target_narratives: [
        {
          id: 'pillar_1',
          pillar_number: '01',
          title: 'Konsequente Lieferketten-Governance',
          core_thesis: 'Sämtliche Vergaben an den Subunternehmer wurden bei Bekanntwerden der Vorwürfe per sofort sistiert und eine unabhängige forensische Prüfung eingeleitet.',
          target_vector_anchor: 'Ref: ESG-2025-V2 (Lieferanten-Auditstandards)',
          mandatory_proof_points: [
            'Sofortiger Stopp aller aktiven Lieferantenbestellungen',
            'Unabhängige Big-4 Vor-Ort-Sonderprüfung',
            'Transparente Offenlegung der Prüfungsergebnisse'
          ]
        }
      ],
      regional_synthesis: [
        {
          region_id: 'eu',
          region_name: 'Europa (EU-Lieferkettengesetz CSDDD)',
          regulatory_context: 'EU Corporate Sustainability Due Diligence Directive',
          raw_volume: 12400,
          deduped_volume: 3800,
          velocity_z_score: 3.4,
          velocity_trend: '+3.4σ Eskalierend',
          cosine_alignment: 0.42,
          pull_through_status: 'AT_RISK',
          status_label: 'CSDDD-Compliance-Fokus',
          legacy_media_frame: 'Governance-Kritik: "Haben interne Audits bei Tier-3-Zulieferern versagt?"',
          social_forum_frame: 'NGO-Kampagne fordert Vertragskündigung.',
          llm_synthesis_frame: 'KI unterstellt Duldung von Zwangsarbeit als erwiesene Tatsache.',
          llm_hallucination_rate: 42,
          strategic_risk_summary: 'NGO-Narrativ versucht, Einzelfall als systemischen Kontrollverlust darzustellen.'
        },
        {
          region_id: 'us',
          region_name: 'Nordamerika (ESG-Investoren)',
          regulatory_context: 'SEC ESG-Regulierung & Nachhaltigkeitsfonds',
          raw_volume: 6800,
          deduped_volume: 2100,
          velocity_z_score: 1.8,
          velocity_trend: '+1.8σ Moderat',
          cosine_alignment: 0.58,
          pull_through_status: 'MIXED',
          status_label: 'ESG-Rating-Überwachung',
          legacy_media_frame: 'Nachhaltigkeitsanleihen unter Beobachtung.',
          social_forum_frame: 'Investoren-Diskussionen über Lieferkettentransparenz.',
          llm_synthesis_frame: 'Verzerrung bei Daten früherer Audits.',
          llm_hallucination_rate: 32,
          strategic_risk_summary: 'Investoren warten auf den formalen Revisionsbericht.'
        },
        {
          region_id: 'ch',
          region_name: 'Schweiz (HQ / VOSUG-Sorgfaltspflicht)',
          regulatory_context: 'Schweizer Sorgfaltspflichtenverordnung',
          raw_volume: 3200,
          deduped_volume: 950,
          velocity_z_score: 2.1,
          velocity_trend: '+2.1σ Erhöht',
          cosine_alignment: 0.65,
          pull_through_status: 'MIXED',
          status_label: 'Auditprozesse auf dem Prüfstand',
          legacy_media_frame: 'Rechtsdienst verteidigt bestehende Kontrollen und verweist auf Sonderprüfung.',
          social_forum_frame: 'Diskussionen über Schweizer Vorbildfunktion.',
          llm_synthesis_frame: 'Korrektes Erfassen des Vergabestopps.',
          llm_hallucination_rate: 22,
          strategic_risk_summary: 'Inländische Medien fordern transparenten Abschlussbericht.'
        },
        {
          region_id: 'apac',
          region_name: 'Asien-Pazifik (Produktionsstandort)',
          regulatory_context: 'Lokale Arbeitsaufsicht & Lieferanten',
          raw_volume: 1700,
          deduped_volume: 350,
          velocity_z_score: 0.8,
          velocity_trend: '+0.8σ Stabil',
          cosine_alignment: 0.60,
          pull_through_status: 'ALIGNED',
          status_label: 'Laufende Überprüfung',
          legacy_media_frame: 'Kurzberichte über laufendes Audit.',
          social_forum_frame: 'Kaum Resonanz.',
          llm_synthesis_frame: 'Faktische Kurzmeldung.',
          llm_hallucination_rate: 18,
          strategic_risk_summary: 'Vor Ort kontrolliert; Hauptrisiko liegt in europäischen NGO-Kreisen.'
        }
      ],
      surface_nlp_vs_forensic_reality: {
        commercial_nlp_sentiment: '56% NEUTRAL / 34% NEGATIV',
        commercial_nlp_confidence: 'Mittel',
        commercial_nlp_blindspot: 'Erkennt nicht, dass NGO-Aussagen juristische Haftungsansprüche unter CSDDD vorbereiten.',
        forensic_reality_verdict: 'CSDDD-HAFTUNGSRISIKO IN EUROPA',
        forensic_reality_subtext: 'Europäische Medien verknüpfen den Einzelfall direkt mit gesetzlichen Sorgfaltspflichten.',
        statistical_proof_anchor: 'z = +3.4σ Europa-Dynamik | Cosinus-Ähnlichkeit 0.42 | 42% KI-Verzerrungsrate'
      }
    },
    health_data_breach: {
      scenario_id: 'health_data_breach',
      timeframe: 'Letzte 48 Stunden (Gesundheitsdaten & Privacy)',
      pipeline: {
        raw_ingested_72h: 21200,
        minhash_deduped_unique: 5800,
        syndicated_reprints_collapsed: 15400,
        hdbscan_clusters_identified: 6,
        off_topic_noise_filtered_pct: 87,
        peak_z_score: '+3.1σ',
        peak_anomaly_summary: 'Intensive Inlandsdebatte bei Schweizer Ärzteorganisationen zur kryptografischen Schlüsselgewalt.',
        centroid_texts_analyzed_by_llm: 140
      },
      target_narratives: [
        {
          id: 'pillar_1',
          pillar_number: '01',
          title: 'Souveräne kryptografische Schlüsselkontrolle',
          core_thesis: 'Gesundheitsdaten in der Cloud sind mathematisch unlesbar; die Schlüssel verbleiben zu 100% in Schweizer Hand unter staatlicher Aufsicht.',
          target_vector_anchor: 'Ref: SEC-CRYPTO §1 (Souveräne Schlüsselarchitektur)',
          mandatory_proof_points: [
            'Bring Your Own Key (BYOK) Architektur garantiert inländische Schlüsselgewalt',
            'Null Entschlüsselungsmöglichkeit für Cloud-Betreiber oder ausländische Staaten',
            'Unabhängige Sicherheitsaudits durch Schweizer Fachhochschulen'
          ]
        }
      ],
      regional_synthesis: [
        {
          region_id: 'ch',
          region_name: 'Schweiz (Gesundheitswesen & Bürger)',
          regulatory_context: 'EDÖB & Bundesamt für Gesundheit',
          raw_volume: 14200,
          deduped_volume: 3800,
          velocity_z_score: 3.1,
          velocity_trend: '+3.1σ Intensive Debatte',
          cosine_alignment: 0.52,
          pull_through_status: 'MIXED',
          status_label: 'Ärztliche Skepsis',
          legacy_media_frame: 'Arztgeheimnis: "Ärzteschaft warnt vor Aushöhlung des Patientengeheimnisses."',
          social_forum_frame: 'Debatte über US CLOUD Act und Souveränität.',
          llm_synthesis_frame: 'KI behauptet fälschlich, US-Behörden könnten die Daten direkt entschlüsseln.',
          llm_hallucination_rate: 40,
          strategic_risk_summary: 'Das Vertrauen der Ärzteschaft entscheidet über den Erfolg des elektronischen Patientendossiers.'
        },
        {
          region_id: 'eu',
          region_name: 'Europa (DSGVO & Datensouveränität)',
          regulatory_context: 'European Health Data Space',
          raw_volume: 4800,
          deduped_volume: 1400,
          velocity_z_score: 1.4,
          velocity_trend: '+1.4σ Moderat',
          cosine_alignment: 0.68,
          pull_through_status: 'ALIGNED',
          status_label: 'Best-Practice-Referenz',
          legacy_media_frame: 'Schweizer Schlüsselarchitektur als Vorbild für souveräne Gesundheitsclouds.',
          social_forum_frame: 'Fachforen loben die strikte kryptografische Trennung.',
          llm_synthesis_frame: 'Präzise technische Erklärung von AES-256.',
          llm_hallucination_rate: 15,
          strategic_risk_summary: 'Positive Aufnahme bei europäischen Datenschutzfachleuten.'
        },
        {
          region_id: 'us',
          region_name: 'Nordamerika (Cloud-Infrastruktur)',
          regulatory_context: 'Hyperscaler & HIPAA',
          raw_volume: 2200,
          deduped_volume: 600,
          velocity_z_score: 0.4,
          velocity_trend: '+0.4σ Normal',
          cosine_alignment: 0.75,
          pull_through_status: 'ALIGNED',
          status_label: 'Regulärer Standard',
          legacy_media_frame: 'Standard-IT-Berichterstattung.',
          social_forum_frame: 'Keine.',
          llm_synthesis_frame: 'Faktentreu.',
          llm_hallucination_rate: 12,
          strategic_risk_summary: 'Wird als gewöhnliche Cloud-Migration eingestuft.'
        },
        {
          region_id: 'apac',
          region_name: 'Asien-Pazifik',
          regulatory_context: 'Digitale Gesundheitsinitiativen',
          raw_volume: 0,
          deduped_volume: 0,
          velocity_z_score: 0,
          velocity_trend: 'Baseline',
          cosine_alignment: 0.70,
          pull_through_status: 'ALIGNED',
          status_label: 'Keine Exposition',
          legacy_media_frame: 'Keine.',
          social_forum_frame: 'Keine.',
          llm_synthesis_frame: 'N/A',
          llm_hallucination_rate: 0,
          strategic_risk_summary: 'Keine Relevanz.'
        }
      ],
      surface_nlp_vs_forensic_reality: {
        commercial_nlp_sentiment: '64% NEUTRAL / JURISTISCH',
        commercial_nlp_confidence: 'Hoch',
        commercial_nlp_blindspot: 'Übersieht, dass emotionale Bedenken der Ärzte die reale Einführung bremsen, obwohl die rechtliche Compliance gewahrt ist.',
        forensic_reality_verdict: 'VERTRAUENSKRISE BEI MEDIZINERN',
        forensic_reality_subtext: 'Reine Gesetzestexte verfehlen ihre Wirkung; Ärzte fordern handfeste Garantien zur Schlüsselgewalt.',
        statistical_proof_anchor: 'z = +3.1σ Inlands-Spike | Cosinus-Ähnlichkeit 0.52 | 40% KI-Verzerrungsrate'
      }
    }
  }
};

export const getCockpitData = (lang: Language, scenarioId: string): CockpitData => {
  const langData = COCKPIT_FIXTURES[lang] || COCKPIT_FIXTURES.en;
  return langData[scenarioId] || langData.oncology_trial_update || langData.alpine_transit_crisis;
};
