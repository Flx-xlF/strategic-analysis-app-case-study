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
          title: 'Fair Global Innovation Reward (GS-01)',
          core_thesis: 'Tying U.S. launch prices to foreign reference baskets requires wealthy OECD health systems to value true clinical benefit. Suppressing European and Swiss prices threatens global R&D reinvestment.',
          target_vector_anchor: 'Ref: GS-01 §3.2 (Novartis Global Pricing & Launch Sequencing Framework)',
          mandatory_proof_points: [
            'Global R&D reinvestment depends on sustainable pricing across all high-income markets',
            'Artificial price cuts in reference baskets distort international access and create launch friction',
            'Novartis advocates modernized value-based assessment rather than blunt budget caps'
          ]
        },
        {
          id: 'pillar_2',
          pillar_number: '02',
          title: 'Dual Commitment: $23B US Footprint & Basel Global R&D Heart (GS-02)',
          core_thesis: 'Our $23B 5-year investment expands U.S. manufacturing across 10 facilities so American patients receive locally produced therapies, while Basel remains the corporate headquarters and global scientific nerve center.',
          target_vector_anchor: 'Ref: GS-02 (Corporate Footprint & Capital Allocation Review)',
          mandatory_proof_points: [
            '$23B capex expands U.S. production (e.g. radioligand facilities in IN and NJ; San Diego R&D)',
            'Corporate headquarters, core governance, and primary research remain firmly anchored in Basel',
            'Supply localization insulates critical patient therapies against geopolitical trade tariffs'
          ]
        },
        {
          id: 'pillar_3',
          pillar_number: '03',
          title: 'Constructive Patient Access & Value Modernization (GS-03)',
          core_thesis: 'Novartis does not boycott patients. We actively partner with European HTA bodies and the Swiss BAG on flexible access models, while sequencing launches to preserve international reference integrity.',
          target_vector_anchor: 'Ref: GS-03 (Health Economics & International Access Principles)',
          mandatory_proof_points: [
            'No patient boycott: compassionate use and managed access programs continue actively',
            'Constructive dialogue with Swiss BAG and European authorities to modernize pricing benchmarks',
            'Test cases (such as ianalumab and Pluvicto) showcase value-based contracting alternatives'
          ]
        }
      ],
      regional_synthesis: [
        {
          region_id: 'us',
          region_name: 'North America (US / MFN & Capex)',
          regulatory_context: 'White House MFN Dialogue & FDA Launch Pace',
          raw_volume: 21400,
          deduped_volume: 7850,
          velocity_z_score: 2.4,
          velocity_trend: '+2.4σ Sustained Momentum',
          cosine_alignment: 0.78,
          pull_through_status: 'ALIGNED',
          status_label: 'Supply Localization Welcomed',
          legacy_media_frame: 'Industrial Resilience: "$23B domestic investment and MFN alignment tariff-proofs supply of breakthrough medicines."',
          social_forum_frame: 'Policy Commentators: Praise for building American clinical manufacturing hubs.',
          llm_synthesis_frame: 'Accurate Economic Overview: Correctly captures the multi-billion-dollar domestic manufacturing expansion.',
          llm_hallucination_rate: 14,
          strategic_risk_summary: 'US narrative is strongly aligned; key focus is maintaining disciplined messaging on net pricing commitments.'
        },
        {
          region_id: 'eu',
          region_name: 'Europe (EU / Pricing Reform Pushback)',
          regulatory_context: 'EU Joint Clinical Assessment & National HTA Bodies',
          raw_volume: 16800,
          deduped_volume: 5920,
          velocity_z_score: 3.9,
          velocity_trend: '+3.9σ Narrative Outbreak',
          cosine_alignment: 0.34,
          pull_through_status: 'AT_RISK',
          status_label: 'Launch Delay Backlash',
          legacy_media_frame: 'Pricing Standoff: "Pharma chiefs warn Europe: Raise drug prices or face delayed access to new therapies."',
          social_forum_frame: 'Healthcare Policy Forums: Accusing drugmakers of holding European patients hostage to protect US margins.',
          llm_synthesis_frame: 'Severe Distortion: LLMs falsely report that Novartis announced an official freeze on all European oncology filings.',
          llm_hallucination_rate: 48,
          strategic_risk_summary: 'Critical narrative divergence. Payer commentary weaponizes CEO comments on European competitiveness into allegations of access withholding.'
        },
        {
          region_id: 'ch',
          region_name: 'Switzerland (HQ & BAG Reference Basket)',
          regulatory_context: 'Standort Schweiz, BAG Pricing Packages & Swissmedic',
          raw_volume: 6420,
          deduped_volume: 2240,
          velocity_z_score: 3.5,
          velocity_trend: '+3.5σ Domestic Debate',
          cosine_alignment: 0.41,
          pull_through_status: 'AT_RISK',
          status_label: 'Dual Anxiety: Basel Weight & BAG Access',
          legacy_media_frame: 'National Scrutiny: "23 billion for the US: Is Novartis shifting weight away from Basel while warning Bern on drug prices?"',
          social_forum_frame: 'Domestic Opinion Leaders: Debating whether Swiss cost-containment rules in international baskets will delay patient access.',
          llm_synthesis_frame: 'Corporate Entity Confusion: AI search blends the $23B US capex with rumors of HQ relocation.',
          llm_hallucination_rate: 42,
          strategic_risk_summary: 'High reputational sensitivity. Need immediate reassurance on Basel HQ permanence and collaborative dialogue with the Federal Office of Public Health (BAG).'
        },
        {
          region_id: 'apac',
          region_name: 'Asia-Pacific (APAC / PMDA & Reference Floors)',
          regulatory_context: 'Pricing Approvals & Regional Health Authorities',
          raw_volume: 8900,
          deduped_volume: 3100,
          velocity_z_score: 1.5,
          velocity_trend: '+1.5σ Moderate',
          cosine_alignment: 0.58,
          pull_through_status: 'MIXED',
          status_label: 'Global Reference Floor Monitoring',
          legacy_media_frame: 'Market Access: "How global reference pricing agreements will shape Asian drug listing negotiations."',
          social_forum_frame: 'Clinical Observers: Monitoring availability dates for upcoming frontier therapies.',
          llm_synthesis_frame: 'Mixed Synthesis: General summaries of international trade trends.',
          llm_hallucination_rate: 26,
          strategic_risk_summary: 'Quiet but watching for precedent in European reference price disputes.'
        }
      ],
      surface_nlp_vs_forensic_reality: {
        commercial_nlp_sentiment: '76% NEUTRAL / POLICY ANALYSIS (Score 0.84)',
        commercial_nlp_confidence: 'High statistical confidence across 19,350 deduplicated records',
        commercial_nlp_blindspot: 'Standard NLP sentiment scores formal health-policy coverage and parliamentary inquiries as "Neutral" because they lack emotional profanity or consumer outrage keywords.',
        forensic_reality_verdict: 'ACUTE POLITICAL & REPUTATIONAL BACKLASH IN EU & SWITZERLAND',
        forensic_reality_subtext: 'Cluster #01 ("Launch Delay Fears & Basel Footprint") experienced a +3.9σ breakout across European and Swiss tier-1 outlets. Payer bodies in Brussels and commentators in Bern are framing pricing reform as an ultimatum against patients.',
        statistical_proof_anchor: 'z = +3.9σ velocity outbreak | Cosine alignment 0.34 in EU | 48% AI answer distortion rate'
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
    pluvicto_access_debate: {
      scenario_id: 'pluvicto_access_debate',
      timeframe: 'Last 72 Hours (Transatlantic Health Economics)',
      pipeline: {
        raw_ingested_72h: 31200,
        minhash_deduped_unique: 11400,
        syndicated_reprints_collapsed: 19800,
        hdbscan_clusters_identified: 11,
        off_topic_noise_filtered_pct: 86,
        peak_z_score: '+4.2σ',
        peak_anomaly_summary: 'Major breakout following FDA approval and UK NICE cost-effectiveness rejection.',
        centroid_texts_analyzed_by_llm: 280
      },
      target_narratives: [
        {
          id: 'p_pillar_1',
          pillar_number: '01',
          title: 'Clinically Proven rPFS Doubling (PSMAfore / GS-01)',
          core_thesis: 'PSMAfore demonstrated a clinically meaningful doubling of radiographic progression-free survival (HR 0.41) in pre-taxane mCRPC, supporting the FDA label expansion.',
          target_vector_anchor: 'Ref: PSMAfore §2.1 (Clinical Study Report)',
          mandatory_proof_points: [
            'Radiographic progression-free survival doubled with high statistical significance (HR 0.41)',
            'FDA approved broad pre-chemo indication based on robust rPFS and favorable safety profile',
            'Crossover from control arm explains overall survival confounding in secondary analyses'
          ]
        },
        {
          id: 'p_pillar_2',
          pillar_number: '02',
          title: 'Targeted Radioligand Value & Hospital Offset (GS-03)',
          core_thesis: 'Precision radioligand therapy delivers targeted radiation directly to cancer cells, reducing debilitating chemotherapy toxicities and delaying costly acute inpatient admissions.',
          target_vector_anchor: 'Ref: GS-03 (Radioligand Health Economics & Outcomes Research)',
          mandatory_proof_points: [
            'Targeted precision mechanism preserves patient quality of life vs. cytotoxic chemotherapy',
            'Offsets downstream hospitalizations, emergency visits, and intensive palliative care costs',
            'Dedicated patient assistance and value-based installment programs offered to healthcare systems'
          ]
        }
      ],
      regional_synthesis: [
        {
          region_id: 'us',
          region_name: 'North America (US / FDA Expanded Label)',
          regulatory_context: 'FDA Label Expansion & Commercial Payer Rollout',
          raw_volume: 16200,
          deduped_volume: 5800,
          velocity_z_score: 3.4,
          velocity_trend: '+3.4σ High Velocity',
          cosine_alignment: 0.82,
          pull_through_status: 'ALIGNED',
          status_label: 'Pre-Chemo Standard of Care Established',
          legacy_media_frame: 'Clinical Landmark: "FDA expands Pluvicto label to pre-chemotherapy prostate cancer based on PSMAfore."',
          social_forum_frame: 'Oncology Community: High enthusiasm for avoiding taxane chemotherapy side effects.',
          llm_synthesis_frame: 'Accurate Approval Detail: Correctly cites the expanded FDA indication.',
          llm_hallucination_rate: 12,
          strategic_risk_summary: 'Strong commercial and clinical momentum in the US market.'
        },
        {
          region_id: 'eu',
          region_name: 'Europe (EU / EMA Withdrawal & NICE Rejection)',
          regulatory_context: 'EMA CHMP Objections & UK NICE Cost-Effectiveness',
          raw_volume: 11800,
          deduped_volume: 4200,
          velocity_z_score: 4.2,
          velocity_trend: '+4.2σ Acute Debate',
          cosine_alignment: 0.31,
          pull_through_status: 'AT_RISK',
          status_label: 'Reimbursement Deadlock',
          legacy_media_frame: 'Cost Scrutiny: "NICE rejects £20,000 prostate cancer drug Pluvicto; European access hits brick wall."',
          social_forum_frame: 'UK & EU Patient Advocates: Outrage over lack of public funding for proven therapy.',
          llm_synthesis_frame: 'Severe Hallucination: AI engines report that Pluvicto was withdrawn due to "lack of clinical efficacy in Europeans."',
          llm_hallucination_rate: 54,
          strategic_risk_summary: 'Severe reputational risk. LLMs confuse regulatory comparator debates with clinical failure.'
        },
        {
          region_id: 'ch',
          region_name: 'Switzerland (Swissmedic & Specialized Centers)',
          regulatory_context: 'Swissmedic Authorization & Domestic Nuclear Medicine',
          raw_volume: 3200,
          deduped_volume: 1400,
          velocity_z_score: 1.1,
          velocity_trend: '+1.1σ Moderate',
          cosine_alignment: 0.68,
          pull_through_status: 'MIXED',
          status_label: 'Hospital Infrastructure Readiness',
          legacy_media_frame: 'Precision Medicine: "Swiss university hospitals expand radioligand treatment suites."',
          social_forum_frame: 'Medical Specialists: Discussing isotope supply chain logistics.',
          llm_synthesis_frame: 'Mostly Factual: Covers specialized medical centers.',
          llm_hallucination_rate: 18,
          strategic_risk_summary: 'Domestic focus is on medical center capacity and reimbursement list inclusion.'
        },
        {
          region_id: 'apac',
          region_name: 'Asia-Pacific (PMDA & Regional Rollout)',
          regulatory_context: 'Bridging Studies & Local Approvals',
          raw_volume: 0,
          deduped_volume: 0,
          velocity_z_score: 0,
          velocity_trend: 'Baseline',
          cosine_alignment: 0.70,
          pull_through_status: 'ALIGNED',
          status_label: 'Monitoring Transatlantic Outcome',
          legacy_media_frame: 'Trade press tracking global timelines.',
          social_forum_frame: 'None.',
          llm_synthesis_frame: 'General overview.',
          llm_hallucination_rate: 10,
          strategic_risk_summary: 'Low exposure.'
        }
      ],
      surface_nlp_vs_forensic_reality: {
        commercial_nlp_sentiment: '71% NEUTRAL / MEDICAL ANALYSIS (Score 0.79)',
        commercial_nlp_confidence: 'High',
        commercial_nlp_blindspot: 'Standard NLP misses that the NICE cost-effectiveness rejection is being cited by international payers as proof of unaffordability.',
        forensic_reality_verdict: 'TRANSATLANTIC ACCESS CHASM',
        forensic_reality_subtext: 'While the US embraces the pre-chemo indication, European HTA skepticism and AI hallucinations claim the drug is ineffective, threatening international reimbursement benchmarks.',
        statistical_proof_anchor: 'z = +4.2σ European spike | Cosine alignment 0.31 | 54% LLM distortion rate in EU'
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
          title: 'Faire globale Innovationsvergütung (GS-01)',
          core_thesis: 'Die Koppelung von US-Einführungspreisen an ausländische Referenzkörbe erfordert, dass wohlhabende OECD-Gesundheitssysteme den klinischen Nutzen fair anerkennen. Gedrückte Preise in Europa gefährden weltweite F&E-Investitionen.',
          target_vector_anchor: 'Ref: GS-01 §3.2 (Novartis Globale Preis- & Marktzugangsrichtlinie)',
          mandatory_proof_points: [
            'Weltweite Reinvestitionen in Forschung setzen nachhaltige Erstattung in allen Industriestaaten voraus',
            'Künstliche Preissenkungen in Referenzkörben verzerren den internationalen Zugang und verzögern Launches',
            'Novartis fordert ein modernisiertes, wertbasiertes Modell statt starrer Budgetdeckel'
          ]
        },
        {
          id: 'pillar_2',
          pillar_number: '02',
          title: 'Doppeltes Bekenntnis: 23-Mrd.-$-US-Präsenz & F&E-Kern Basel (GS-02)',
          core_thesis: 'Unsere 5-Jahres-Investition über 23 Mrd. $ erweitert die US-Produktion an 10 Standorten für lokale Versorgungssicherheit. Basel bleibt der globale Konzernsitz und das wissenschaftliche Herz.',
          target_vector_anchor: 'Ref: GS-02 (Konzernstandort- & Kapitalallokationsbericht)',
          mandatory_proof_points: [
            '23 Mrd. $ Investitionen erweitern die US-Produktion (z. B. Radioliganden in IN & NJ; San Diego F&E)',
            'Konzernsitz, Haupt-Governance und Spitzenforschung verbleiben unerschütterlich in Basel',
            'Lokale Produktion schützt versorgungsrelevante Therapien vor geopolitischen Zöllen'
          ]
        },
        {
          id: 'pillar_3',
          pillar_number: '03',
          title: 'Konstruktiver Patientenzugang & Nutzenmodernisierung (GS-03)',
          core_thesis: 'Novartis boykottiert keine Patienten. Wir arbeiten aktiv mit europäischen HTA-Behörden und dem BAG an flexiblen Modellen, während Markteinführungen sorgfältig gestaffelt werden.',
          target_vector_anchor: 'Ref: GS-03 (Gesundheitsökonomie & Internationale Marktzugangsgrundsätze)',
          mandatory_proof_points: [
            'Kein Patientenboykott: Härtefall- und Vorabzugangsprogramme (Compassionate Use) laufen unverändert',
            'Konstruktiver Dialog mit dem BAG und europäischen Kassen zur Modernisierung von Preisreferenzen',
            'Testfälle (wie Ianalumab und Pluvicto) demonstrieren wertbasierte Vergütungsalternativen'
          ]
        }
      ],
      regional_synthesis: [
        {
          region_id: 'us',
          region_name: 'Nordamerika (USA / MFN & Investitionen)',
          regulatory_context: 'US-Regierungsdialog MFN & FDA-Einführungstempo',
          raw_volume: 21400,
          deduped_volume: 7850,
          velocity_z_score: 2.4,
          velocity_trend: '+2.4σ Stabiles Momentum',
          cosine_alignment: 0.78,
          pull_through_status: 'ALIGNED',
          status_label: 'Lokale Produktion begrüsst',
          legacy_media_frame: 'Standortstärkung: "23-Mrd.-$-Investition und MFN-Abkommen sichern US-Versorgung mit innovativen Medikamenten."',
          social_forum_frame: 'Wirtschaftskreise: Lob für den Ausbau amerikanischer F&E- und Produktionszentren.',
          llm_synthesis_frame: 'Präziser Wirtschaftsüberblick: Erfasst die milliardenstarke US-Produktionsexpansion korrekt.',
          llm_hallucination_rate: 14,
          strategic_risk_summary: 'US-Narrativ ist stabil verankert; Fokus liegt auf der Einhaltung von Netto-Preisabsprachen.'
        },
        {
          region_id: 'eu',
          region_name: 'Europa (EU / Gegenwind bei Preisreform)',
          regulatory_context: 'EU Joint Clinical Assessment & Nationale HTA-Stellen',
          raw_volume: 16800,
          deduped_volume: 5920,
          velocity_z_score: 3.9,
          velocity_trend: '+3.9σ Narrativer Ausbruch',
          cosine_alignment: 0.34,
          pull_through_status: 'AT_RISK',
          status_label: 'Gefahr von "Launch-Verzögerungs"-Vorwürfen',
          legacy_media_frame: 'Preiskonflikt: "Pharmabosse fordern Brüssel heraus: Höhere Preise oder verzögerter Zugang zu neuen Therapien."',
          social_forum_frame: 'Gesundheitspolitische Foren: Vorwurf, Patienten als Geiseln für US-Margen einzuspannen.',
          llm_synthesis_frame: 'Schwere Verzerrung: KI-Modelle behaupten fälschlicherweise, Novartis habe einen offiziellen Zulassungsstopp in Europa verhängt.',
          llm_hallucination_rate: 48,
          strategic_risk_summary: 'Kritische Abweichung. Kostenträger instrumentalisieren Narasimhans Warnungen zu Wettbewerbsfähigkeit als vermeintliche Erpressung.'
        },
        {
          region_id: 'ch',
          region_name: 'Schweiz (Konzernsitz & BAG-Referenzkorb)',
          regulatory_context: 'Standort Schweiz, BAG-Kostendämpfungspakete & Swissmedic',
          raw_volume: 6420,
          deduped_volume: 2240,
          velocity_z_score: 3.5,
          velocity_trend: '+3.5σ Inländische Debatte',
          cosine_alignment: 0.41,
          pull_through_status: 'AT_RISK',
          status_label: 'Doppelsorge: Basel-Gewicht & BAG-Zugang',
          legacy_media_frame: 'Standortdebatte: "23 Milliarden für die USA: Verliert Basel an Gewicht und drohen Schweizer Patienten Verzögerungen?"',
          social_forum_frame: 'Meinungsführer: Debatte, ob starre BAG-Preissenkungen in internationalen Referenzkörben den Zugang zu neuen Therapien bremsen.',
          llm_synthesis_frame: 'Verwechslung von Standorten: KI vermischt US-Investitionen mit Gerüchten über eine Verlegung des Konzernsitzes.',
          llm_hallucination_rate: 42,
          strategic_risk_summary: 'Hohe politische Sensibilität. Dringender Bedarf für ein klares Bekenntnis zu Basel und einen konstruktiven Dialog mit dem BAG.'
        },
        {
          region_id: 'apac',
          region_name: 'Asien-Pazifik (APAC / PMDA & Preisreferenzgrenzen)',
          regulatory_context: 'Erstattungsverhandlungen & Lokale Ministerien',
          raw_volume: 8900,
          deduped_volume: 3100,
          velocity_z_score: 1.5,
          velocity_trend: '+1.5σ Moderat',
          cosine_alignment: 0.58,
          pull_through_status: 'MIXED',
          status_label: 'Beobachtung globaler Referenzpreisgrenzen',
          legacy_media_frame: 'Marktzugang: "Wie globale Referenzpreisabkommen die Verhandlungen in Asien beeinflussen."',
          social_forum_frame: 'Medizinische Beobachter: Prüfen Einführungstermine für künftige Onkologie-Therapien.',
          llm_synthesis_frame: 'Allgemeine Zusammenfassung über Handelstrends.',
          llm_hallucination_rate: 26,
          strategic_risk_summary: 'Ruhige Lage; aufmerksame Beobachtung europäischer Präzedenzfälle.'
        }
      ],
      surface_nlp_vs_forensic_reality: {
        commercial_nlp_sentiment: '76% NEUTRAL / FACHPOLITISCH (Score 0.84)',
        commercial_nlp_confidence: 'Hohe statistische Konfidenz über 19.350 deduplizierte Meldungen',
        commercial_nlp_blindspot: 'Standard-NLP stuft die diplomatische Fachsprache der Gesundheitspolitiker als "neutral" ein, weil keine Vulgärsprache oder wütende Verbraucherbegriffe vorkommen.',
        forensic_reality_verdict: 'AKUTER POLITISCHER GEGENWIND IN EUROPA & DER SCHWEIZ',
        forensic_reality_subtext: 'Cluster #01 ("Einführungsverzögerungen & Basel-Gewicht") verzeichnet einen +3.9σ Ausbruch. Europäische Kassen und Bundespolitiker in Bern deuten die Reformforderungen als Ultimatum gegen die Versorgung.',
        statistical_proof_anchor: 'z = +3.9σ Anomalie | Cosinus-Ähnlichkeit 0.34 in EU | 48% KI-Verzerrungsrate'
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
    pluvicto_access_debate: {
      scenario_id: 'pluvicto_access_debate',
      timeframe: 'Letzte 72 Stunden (Transatlantische Nutzenbewertung)',
      pipeline: {
        raw_ingested_72h: 31200,
        minhash_deduped_unique: 11400,
        syndicated_reprints_collapsed: 19800,
        hdbscan_clusters_identified: 11,
        off_topic_noise_filtered_pct: 86,
        peak_z_score: '+4.2σ',
        peak_anomaly_summary: 'Ausbruch nach FDA-Zulassung und NICE-Erstattungsablehnung in Grossbritannien.',
        centroid_texts_analyzed_by_llm: 280
      },
      target_narratives: [
        {
          id: 'p_pillar_1',
          pillar_number: '01',
          title: 'Klinisch belegte Verdopplung des rPFS (PSMAfore / GS-01)',
          core_thesis: 'Die PSMAfore-Studie belegt eine klinisch signifikante Verdopplung des progressionsfreien Überlebens (HR 0.41) vor Chemotherapie und begründet die US-Zulassung.',
          target_vector_anchor: 'Ref: PSMAfore §2.1 (Klinischer Studienbericht)',
          mandatory_proof_points: [
            'Radiografisch progressionsfreies Überleben verdoppelt (HR 0.41, p<0.001)',
            'FDA erteilt breite Vor-Chemo-Zulassung gestützt auf rPFS und Verträglichkeit',
            'Patientenübertritte (Crossover) erklären statistische Einflüsse beim Gesamtüberleben'
          ]
        },
        {
          id: 'p_pillar_2',
          pillar_number: '02',
          title: 'Gezielter Radioliganden-Wert & Spitalentlastung (GS-03)',
          core_thesis: 'Präzisions-Radioligandentherapie schont Patienten vor belastender Chemotoxizität und senkt teure stationäre Akutaufenthalte.',
          target_vector_anchor: 'Ref: GS-03 (Radioliganden Gesundheitsökonomie & Versorgungsforschung)',
          mandatory_proof_points: [
            'Präziser Bestrahlungsmechanismus schont Lebensqualität im Vergleich zur Chemotherapie',
            'Vermeidung von Notfalleinweisungen und kostenintensiven Spitalaufenthalten',
            'Flexible Erstattungs- und Ratenzahlungsmodelle für Gesundheitssysteme'
          ]
        }
      ],
      regional_synthesis: [
        {
          region_id: 'us',
          region_name: 'Nordamerika (USA / Erweiterte FDA-Zulassung)',
          regulatory_context: 'FDA-Label-Erweiterung & Payer-Einführung',
          raw_volume: 16200,
          deduped_volume: 5800,
          velocity_z_score: 3.4,
          velocity_trend: '+3.4σ Hohe Dynamik',
          cosine_alignment: 0.82,
          pull_through_status: 'ALIGNED',
          status_label: 'Standard vor Chemotherapie etabliert',
          legacy_media_frame: 'Klinischer Meilenstein: "FDA erweitert Pluvicto-Zulassung vor Chemotherapie auf Basis von PSMAfore."',
          social_forum_frame: 'Onkologie-Fachkreise: Hohe Zustimmung zur Vermeidung von Chemotherapie-Nebenwirkungen.',
          llm_synthesis_frame: 'Präzise Berichterstattung: Gibt die Indikation korrekt wieder.',
          llm_hallucination_rate: 12,
          strategic_risk_summary: 'Starke Dynamik und breite Akzeptanz im US-Markt.'
        },
        {
          region_id: 'eu',
          region_name: 'Europa (EU / EMA-Rückzug & NICE-Ablehnung)',
          regulatory_context: 'EMA CHMP-Vorbehalte & Britische NICE-Kostenbewertung',
          raw_volume: 11800,
          deduped_volume: 4200,
          velocity_z_score: 4.2,
          velocity_trend: '+4.2σ Akute Kontroverse',
          cosine_alignment: 0.31,
          pull_through_status: 'AT_RISK',
          status_label: 'Erstattungs-Blockade',
          legacy_media_frame: 'Kostendruck: "NICE lehnt 20.000-Pfund-Therapie Pluvicto ab; europäischer Zugang blockiert."',
          social_forum_frame: 'Patientenorganisationen: Empörung über fehlende Kostenübernahme.',
          llm_synthesis_frame: 'Schwere Halluzination: KI behauptet fälschlich, Pluvicto wirke bei Europäern klinisch nicht.',
          llm_hallucination_rate: 54,
          strategic_risk_summary: 'Reputationsgefahr: KI verwechselt methodische Kontrollarm-Fragen mit klinischem Versagen.'
        },
        {
          region_id: 'ch',
          region_name: 'Schweiz (Swissmedic & Nuklearmedizin)',
          regulatory_context: 'Swissmedic-Zulassung & Spezialisierte Zentren',
          raw_volume: 3200,
          deduped_volume: 1400,
          velocity_z_score: 1.1,
          velocity_trend: '+1.1σ Moderat',
          cosine_alignment: 0.68,
          pull_through_status: 'MIXED',
          status_label: 'Spitalkapazitäten im Aufbau',
          legacy_media_frame: 'Spitzenmedizin: "Schweizer Unispitäler rüsten Radioliganden-Suiten auf."',
          social_forum_frame: 'Fachärzte: Diskussion über logistische Isotopen-Lieferketten.',
          llm_synthesis_frame: 'Überwiegend sachlich: Berichtet über spezialisierte Zentren.',
          llm_hallucination_rate: 18,
          strategic_risk_summary: 'Inländischer Fokus liegt auf Zentren-Kapazitäten und Spezialitätenliste.'
        },
        {
          region_id: 'apac',
          region_name: 'Asien-Pazifik (PMDA & Regionale Einführung)',
          regulatory_context: 'Überbrückungsstudien & Lokale Zulassungen',
          raw_volume: 0,
          deduped_volume: 0,
          velocity_z_score: 0,
          velocity_trend: 'Baseline',
          cosine_alignment: 0.70,
          pull_through_status: 'ALIGNED',
          status_label: 'Transatlantische HTA-Beobachtung',
          legacy_media_frame: 'Fachpresse beobachtet globale Zeitpläne.',
          social_forum_frame: 'Keine.',
          llm_synthesis_frame: 'Allgemein.',
          llm_hallucination_rate: 10,
          strategic_risk_summary: 'Geringe Exposition.'
        }
      ],
      surface_nlp_vs_forensic_reality: {
        commercial_nlp_sentiment: '71% NEUTRAL / FACHMEDIZINISCH (Score 0.79)',
        commercial_nlp_confidence: 'Hoch',
        commercial_nlp_blindspot: 'Standard-NLP übersieht, dass die NICE-Ablehnung von Kassen als Beleg für Unwirtschaftlichkeit gewertet wird.',
        forensic_reality_verdict: 'TRANSATLANTISCHE VERSORGUNGSKLUFT',
        forensic_reality_subtext: 'Während die USA die Indikation rasch adaptieren, führen europäische HTA-Zweifel und KI-Halluzinationen zu Reputations- und Preisrisiken.',
        statistical_proof_anchor: 'z = +4.2σ Europa-Spike | Cosinus-Ähnlichkeit 0.31 | 54% KI-Verzerrung in EU'
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
