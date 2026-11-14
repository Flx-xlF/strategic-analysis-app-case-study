import { Language } from './scenarios';
import { WorldRegionId } from './cockpitFixtures';

export type ContentFormatId = 'hintergrund' | 'social' | 'talking_points' | 'qa_brief';

export interface FormatBlueprint {
  id: ContentFormatId;
  label: string;
  target_audience: string;
  psychological_objective: string;
  blueprint_content: string;
}

export interface InternalCorpusGate {
  raw_enterprise_files: number;
  active_governed_records: number;
  canonical_golden_sources: number;
  legacy_conflicts_flagged: number;
  conflict_details: Array<{
    vault_location: string;
    document_title: string;
    conflict_reason: string;
    action_required: string;
  }>;
}

export interface RegionalAdaptation {
  region_id: WorldRegionId;
  region_label: string;
  regulatory_anchor: string;
  regional_lead_frame: string;
  blueprints: Record<ContentFormatId, FormatBlueprint>;
}

export interface TrendingScenarioData {
  scenario_id: string;
  corpus_gate: InternalCorpusGate;
  global_core_thesis: string;
  global_proof_points: string[];
  global_guardrails: string[];
  regional_adaptations: Record<WorldRegionId, RegionalAdaptation>;
  // Backwards compatibility legacy cards
  cards: Array<{
    id: string;
    topic: string;
    headline: string;
    outlets_involved: string[];
    velocity_change: string;
    tipping_point_score: number;
    sentiment_split: { positive: number; neutral: number; negative: number };
    summary: string;
  }>;
  blueprints: Record<ContentFormatId, FormatBlueprint>;
}

export const TRENDING_FIXTURES: Record<Language, Record<string, TrendingScenarioData>> = {
  en: {
    oncology_trial_update: {
      scenario_id: 'oncology_trial_update',
      corpus_gate: {
        raw_enterprise_files: 1280000,
        active_governed_records: 18400,
        canonical_golden_sources: 34,
        legacy_conflicts_flagged: 7,
        conflict_details: [
          {
            vault_location: 'Veeva Vault / European Commercial Access Archive',
            document_title: 'EU_Launch_Sequencing_Strategy_Deck_2023_v4.pptx',
            conflict_reason: 'Document still specifies unconditional simultaneous European launches, contradicting the 2026 MFN Launch Sequencing Policy (GS-01) where artificial price suppression in reference baskets can jeopardize global pricing.',
            action_required: 'Locked & deprecated; replaced by Approved Golden Source GS-01.'
          },
          {
            vault_location: 'SharePoint / Swiss Public Affairs Working Vault',
            document_title: 'Draft_Response_BAG_Cost_Containment_Packages.docx',
            conflict_reason: 'Draft contained aggressive wording ("withholding future medicines from Swiss patients"), which violates Corporate Communications guardrails against soundbites that trigger boycott allegations.',
            action_required: 'Archived; replaced with constructive dialogue framework in GS-02/GS-03.'
          }
        ]
      },
      global_core_thesis: "Sustainable innovation requires health systems across wealthy OECD nations to reward clinical value. Our $15B investment localizes U.S. manufacturing across 10 facilities while Swiss HQ remains the company's corporate and research headquarters; we actively engage European and Swiss authorities on modernized access frameworks without compromising patient care.",
      global_proof_points: [
        'GS-01: Reinvestment in breakthrough therapies requires high-income nations to value true clinical benefit fairly.',
        'GS-02: $15B U.S. capex localizes supply against geopolitical tariffs; global corporate headquarters remains permanently at the Swiss headquarters.',
        'GS-03: Active collaboration with Swiss BAG and European HTA bodies on flexible value-based pricing, with zero patient boycotts.',
        'Supply continuity: Compassionate use, clinical trials, and regulatory filings proceed on schedule globally.'
      ],
      global_guardrails: [
        'NEVER use phrasing suggesting the company is "punishing", "boycotting", or "withholding therapies" from European or Swiss patients.',
        'DO NOT allow media to frame the $15B U.S. manufacturing investment as an exit from or downsizing of Swiss HQ.',
        'DO NOT debate individual national rebate percentages in press statements before health authority determinations.'
      ],
      regional_adaptations: {
        all: {
          region_id: "all",
          region_label: "Global (All Regions)",
          regulatory_anchor: "2026 MFN & Global Pricing Policy (GS-01)",
          regional_lead_frame: "Aligning global clinical innovation value with U.S. reference pricing realities.",
          blueprints: {
            hintergrund: {
              id: "hintergrund",
              label: "Global Corporate Story (Owned GEO)",
              target_audience: "International Financial & Healthcare Policy Media, Search Engines",
              psychological_objective: "Position U.S. capex and reference pricing as a dual commitment to clinical value and supply security.",
              blueprint_content: `### 01. BALANCING GLOBAL ACCESS AND CLINICAL REINVESTMENT
Following U.S. Most-Favored-Nation (MFN) reference pricing implementation, our capital allocation framework balances sustained R&D with manufacturing resilience. Under Approved Golden Source GS-01, innovation requires high-income OECD nations to recognize true therapeutic value.

### 02. $15 BILLION U.S. MANUFACTURING EXPANSION & SWISS HEADQUARTERS
- **Capex Commitment:** $15 billion invested across 10 state-of-the-art facilities in the United States to safeguard supply chains against geopolitical tariffs and ensure domestic availability.
- **Global Headquarters Unchanged:** Swiss HQ remains the permanent worldwide headquarters, corporate steering center, and flagship scientific research campus. Zero relocation of executive leadership or core research infrastructure.
- **European & Swiss Partnership:** Constructive dialogue continues with the Swiss Federal Office of Public Health (BAG) and European HTA authorities on modernized, value-based reimbursement frameworks without patient boycotts.`
            },
            social: {
              id: "social",
              label: "Corporate Social & Community",
              target_audience: "Professional Community, Investors & Employees",
              psychological_objective: "Reassure global stakeholders on supply continuity and permanent Swiss headquarters.",
              blueprint_content: `Global Operations & Investment Update:
• Investing $15B across 10 U.S. manufacturing facilities to strengthen supply resilience.
• Swiss HQ remains our permanent worldwide corporate and research headquarters.
• Ongoing patient treatments, clinical trials, and regulatory filings continue on schedule globally.
• Dedicated to collaborative dialogue with European and Swiss health authorities for sustainable access.`
            },
            talking_points: {
              id: "talking_points",
              label: "Executive & Spokesperson Talking Points",
              target_audience: "C-Suite & Global Spokespersons",
              psychological_objective: "Lead with supply resilience and clinical value, explicitly shutting down boycott/relocation rumors.",
              blueprint_content: `### KEY MESSAGES (SHARED CORE FACTS)
- "Our $15B U.S. manufacturing investment secures vital medicines for patients against tariff disruptions; it does not diminish our European presence."
- "Swiss HQ is and remains our permanent global corporate headquarters and primary scientific research engine."
- "We reject any notion of a patient boycott: compassionate use and clinical trials proceed uninterrupted while we negotiate fair access frameworks with health authorities."`
            },
            qa_brief: {
              id: "qa_brief",
              label: "Global Q&A Field Guide",
              target_audience: "Affiliate Communications & Media Desk",
              psychological_objective: "Equip local teams with pre-cleared answers that strictly avoid repeating hostile accusations.",
              blueprint_content: `**Q: Is the company withholding innovative therapies from European or Swiss patients?**
A: No. We are committed to patient care. Clinical trials and compassionate use programs proceed without interruption worldwide. We are actively engaged in constructive discussions with European and Swiss authorities to ensure new medicines reach patients under sustainable, value-based models.

**Q: Does the $15B investment signal a relocation of the company headquarters to the United States?**
A: Absolutely not. Swiss HQ is our worldwide corporate and scientific headquarters. The U.S. investment expands local manufacturing capacity to meet domestic patient demand and insulate supply chains from trade volatility.`
            }
          }
        },
        us: {
          region_id: "us",
          region_label: "North America (US / FDA & Payers)",
          regulatory_anchor: "U.S. Manufacturing Commitment & HHS/CMS Framework",
          regional_lead_frame: "Strengthening domestic biomanufacturing and ensuring uninterrupted patient supply.",
          blueprints: {
            hintergrund: {
              id: "hintergrund",
              label: "US Health Economics & Trade Dossier",
              target_audience: "US Financial Press, Healthcare Policy & Payer Media",
              psychological_objective: "Reinforce commitment to domestic manufacturing footprint and patient access.",
              blueprint_content: `### 01. $15B U.S. DOMESTIC CAPEX PROGRAM
Expanding 10 advanced manufacturing facilities across the U.S. ensures reliable domestic supply of life-saving therapeutics, generating thousands of high-skill manufacturing jobs.

### 02. ALIGNING WITH U.S. REFERENCE PRICING POLICY
We support value-driven healthcare models that reward clinical breakthroughs while providing predictability for patients and employers across the American market.`
            },
            social: {
              id: "social",
              label: "US Commercial & Policy Voice",
              target_audience: "US Healthcare Community & Industry Partners",
              psychological_objective: "Highlight domestic investment and workforce creation.",
              blueprint_content: `Strengthening American biomanufacturing: Our $15B investment across 10 U.S. facilities reinforces supply security and delivers advanced therapies directly to American patients.`
            },
            talking_points: {
              id: "talking_points",
              label: "US Leadership Talking Points",
              target_audience: "US Business & Policy Spokespersons",
              psychological_objective: "Highlight job creation and domestic medicine security.",
              blueprint_content: `### KEY MESSAGES FOR US MEDIA
- "We are investing $15 billion in American manufacturing to build a resilient, tariff-insulated biopharma supply chain."
- "This program creates high-wage scientific and technical jobs across 10 states."
- "We partner constructively with Medicare and commercial payers to ensure seamless patient access."`
            },
            qa_brief: {
              id: "qa_brief",
              label: "US Commercial Q&A",
              target_audience: "US Media Desk & Managed Care Teams",
              psychological_objective: "Clear defense of capex deployment.",
              blueprint_content: `**Q: Does the U.S. investment come at the expense of global R&D?**
A: No. Our global research engine remains fully funded, anchored by our Swiss headquarters, while U.S. manufacturing scales to serve American patients locally.`
            }
          }
        },
        eu: {
          region_id: "eu",
          region_label: "Europe (EU / EMA & HTA Bodies)",
          regulatory_anchor: "EMA Joint Clinical Assessment & European HTA Collaboration",
          regional_lead_frame: "Partnering for modernized, value-based reimbursement frameworks.",
          blueprints: {
            hintergrund: {
              id: "hintergrund",
              label: "European HTA Policy Briefing",
              target_audience: "European Medical & Health-Economic Press",
              psychological_objective: "Establish constructive partnership with HTA bodies and counter boycott speculation.",
              blueprint_content: `### 01. EUROPEAN ACCESS MODERNIZATION
In the context of U.S. reference pricing (MFN), rigid historical price caps risk creating unsustainable distortions. We actively partner with European HTA authorities on flexible, outcomes-based reimbursement models that reflect total patient benefit.

### 02. UNBROKEN CARE CONTINUITY
All ongoing European clinical trials, patient access programs, and regulatory submissions proceed strictly on schedule without disruption.`
            },
            social: {
              id: "social",
              label: "European Affiliate Outreach",
              target_audience: "European Healthcare Professionals & Patient Groups",
              psychological_objective: "Reassure on European patient care continuity.",
              blueprint_content: `Advancing sustainable healthcare across Europe: We are actively collaborating with national health authorities to establish flexible access pathways that reward clinical value while ensuring treatment continuity.`
            },
            talking_points: {
              id: "talking_points",
              label: "European Spokesperson Points",
              target_audience: "European Affiliate Communications Directors",
              psychological_objective: "Maintain calm, professional focus on value-based pricing dialogue.",
              blueprint_content: `### KEY MESSAGES FOR EUROPEAN PRESS
- "We are engaged in constructive dialogue with European health authorities to build modern access models."
- "Clinical research and compassionate patient access in Europe proceed on schedule."
- "All affiliate teams communicate from our centralized evidence pack: zero confrontational soundbites."`
            },
            qa_brief: {
              id: "qa_brief",
              label: "European HTA Q&A",
              target_audience: "National Market Access Teams",
              psychological_objective: "De-escalate pricing confrontation.",
              blueprint_content: `**Q: Will European patients be denied new medicines due to U.S. MFN rules?**
A: No. We are dedicated to finding sustainable, value-based access models with national authorities. Patient continuity and compassionate access remain our foremost priority.`
            }
          }
        },
        ch: {
          region_id: "ch",
          region_label: "Switzerland (HQ & Swiss Healthcare Ecosystem)",
          regulatory_anchor: "Swiss BAG Cost-Containment Framework & Swissmedic Authorizations",
          regional_lead_frame: "Reinforcing permanent commitment to Swiss headquarters and domestic dialogue.",
          blueprints: {
            hintergrund: {
              id: "hintergrund",
              label: "Swiss Business & Policy Dossier",
              target_audience: "NZZ, Le Temps, Swiss Financial & National Media",
              psychological_objective: "Firmly debunk HQ relocation rumors and explain constructive dialogue with BAG.",
              blueprint_content: `### 01. PERMANENT COMMITMENT TO SWITZERLAND AS GLOBAL HEADQUARTERS
Swiss HQ is and remains the undisputed global headquarters, executive steering center, and principal research hub of the enterprise. Our $15B U.S. manufacturing commitment expands overseas production to navigate local trade tariffs—it does not alter our Swiss identity or headquarters governance.

### 02. CONSTRUCTIVE DIALOGUE WITH THE SWISS FEDERAL OFFICE OF PUBLIC HEALTH (BAG)
We are actively engaged in constructive discussions with the BAG on sustainable drug pricing mechanisms that safeguard innovation while preserving patient access across Switzerland.`
            },
            social: {
              id: "social",
              label: "Corporate Headquarters Social Media",
              target_audience: "Swiss Stakeholders, Life-Sciences Ecosystem & Public",
              psychological_objective: "Fact-based confidence at corporate headquarters.",
              blueprint_content: `Committed to Switzerland: Swiss HQ remains our permanent global headquarters and research hub. Through constructive dialogue with Swiss authorities (BAG), we advocate fair, sustainable reimbursement that protects patient access.`
            },
            talking_points: {
              id: "talking_points",
              label: "Swiss Headquarters Talking Points",
              target_audience: "Executive Committee & Swiss Spokespersons",
              psychological_objective: "Sovereign and transparent positioning.",
              blueprint_content: `### KEY MESSAGES FOR SWISS MEDIA
- "Swiss HQ remains our permanent global corporate headquarters and scientific heart."
- "Our $15B investment localizes U.S. manufacturing; it is not a relocation or withdrawal from Switzerland."
- "We are in close, constructive dialogue with the BAG to ensure Swiss patients receive innovative medicines sustainably."`
            },
            qa_brief: {
              id: "qa_brief",
              label: "Swiss Media Desk Q&A",
              target_audience: "Media Relations Desk Swiss HQ/Bern",
              psychological_objective: "Rapid, unequivocal clarification.",
              blueprint_content: `**Q: Is the company moving its corporate headquarters or research from Switzerland to the United States?**
A: No. Swiss HQ is and remains our global corporate and scientific headquarters. Our Swiss roots and research presence are permanent.

**Q: Will Swiss patients face delays or exclusions for new medicines?**
A: No. We work collaboratively with the BAG and Swiss authorities on value-based pricing models that ensure Swiss patients have prompt access to innovative therapies.`
            }
          }
        },
        apac: {
          region_id: "apac",
          region_label: "Asia-Pacific (APAC / Regional Access)",
          regulatory_anchor: "APAC Regional Health Authorities & Strategic Supply",
          regional_lead_frame: "Ensuring supply chain diversification and access across Asia-Pacific.",
          blueprints: {
            hintergrund: {
              id: "hintergrund",
              label: "Asia-Pacific Access Briefing",
              target_audience: "Regional Healthcare & Financial Media",
              psychological_objective: "Assure uninterrupted supply continuity and regulatory filings.",
              blueprint_content: `### 01. ASIA-PACIFIC HEALTHCARE COMMITMENT
Global manufacturing diversification, including our U.S. capex and European facilities, strengthens total supply resiliency for Asia-Pacific health systems.

### 02. REGULATORY & TRIAL CONTINUITY
All regional clinical studies, regulatory submissions, and patient access partnerships proceed without disruption.`
            },
            social: {
              id: "social",
              label: "Regional Information Notice",
              target_audience: "Regional Stakeholders & Healthcare Partners",
              psychological_objective: "Assure regional partners on operational stability.",
              blueprint_content: `Asia-Pacific operations update: Global manufacturing expansion strengthens supply chain security for all regional partner markets. Regulatory submissions proceed on schedule.`
            },
            talking_points: {
              id: "talking_points",
              label: "Regional Spokesperson Points",
              target_audience: "APAC Regional Communications Directors",
              psychological_objective: "Focus on operational stability and patient care.",
              blueprint_content: `### KEY MESSAGES FOR ASIA-PACIFIC
- "Global supply diversification ensures consistent delivery of essential therapies to APAC patients."
- "Local regulatory and clinical milestones remain on schedule."`
            },
            qa_brief: {
              id: "qa_brief",
              label: "APAC Q&A",
              target_audience: "Regional Media Desk",
              psychological_objective: "Direct factual response.",
              blueprint_content: `**Q: Does the U.S. reference pricing policy affect APAC supply or launch plans?**
A: No. Our regional regulatory pathways and supply commitments remain completely on track.`
            }
          }
        }
      },
      cards: [
        {
          id: 'trend-o1',
          topic: 'Reference Pricing & Access',
          headline: 'European & Swiss Media Question $15B U.S. Capex Amid MFN Pricing Talks',
          outlets_involved: ['Financial Times', 'NZZ', 'Endpoints News'],
          velocity_change: '+340% (8h)',
          tipping_point_score: 86,
          sentiment_split: { positive: 15, neutral: 25, negative: 60 },
          summary: 'European and Swiss press link U.S. MFN pricing negotiations and $15B manufacturing capex to fears of launch delays and headquarters relocation.'
        }
      ],
      blueprints: {
        hintergrund: {
          id: 'hintergrund',
          label: 'In-Depth Background Briefing',
          target_audience: 'Biotech & Medical Science Editors',
          psychological_objective: 'Establish statistical validity and decouple exploratory subgroups from primary survival outcome.',
          blueprint_content: 'Primary Phase III trial met pre-specified overall survival endpoint (HR 0.68, p<0.001).'
        },
        social: {
          id: 'social',
          label: 'Corporate Social & Patient Channels',
          target_audience: 'Patient Communities & Healthcare Professionals',
          psychological_objective: 'Provide clear, accessible assurance without technical ambiguity.',
          blueprint_content: 'Overall clinical efficacy and safety confirmed; current treatment protocols remain unchanged.'
        },
        talking_points: {
          id: 'talking_points',
          label: 'Executive & Spokesperson Talking Points',
          target_audience: 'Executive Committee & Regional Comms Leads',
          psychological_objective: 'Equip leadership to navigate aggressive journalist interviews and analyst calls.',
          blueprint_content: 'Lead with primary overall survival; explain exploratory subgroup design.'
        },
        qa_brief: {
          id: 'qa_brief',
          label: 'Q&A Field Manual',
          target_audience: 'Affiliate Communications & Media Desk',
          psychological_objective: 'Immediate tactical answers for urgent press calls.',
          blueprint_content: 'Subgroups generate scientific hypotheses; they do not invalidate proven survival extensions.'
        }
      }
    },
    alpine_transit_crisis: {
      scenario_id: 'alpine_transit_crisis',
      corpus_gate: {
        raw_enterprise_files: 840000,
        active_governed_records: 12100,
        canonical_golden_sources: 28,
        legacy_conflicts_flagged: 4,
        conflict_details: [
          {
            vault_location: 'Domestic Rail Operations / Standby Protocol Archive',
            document_title: 'SOP_Interlocking_Failure_Emergency_Response_2022.pdf',
            conflict_reason: 'References legacy manual bypass methods superseded by automatic digital fail-safe locking.',
            action_required: 'Locked for operational update; superseded by SEC-2026.'
          }
        ]
      },
      global_core_thesis: 'Operations were halted due to a mechanical relay short circuit (R-400). Automatic fail-safe systems engaged instantly, ensuring 100% passenger safety. Network telemetry confirms zero unauthorized digital intrusions.',
      global_proof_points: [
        'Hardware relay failure R-400 isolated by physical engineering teams.',
        'Zero digital anomalies on closed SCADA network verified by cybersecurity experts.',
        'All passenger trains evacuated to platforms safely within 12 minutes.'
      ],
      global_guardrails: [
        'DO NOT use the phrase "cyberattack cannot be ruled out at this hour".',
        'DO NOT lead with maintenance repair timelines before confirming passenger safety facts.'
      ],
      regional_adaptations: {
        all: {
          region_id: 'all',
          region_label: 'National & International Coverage',
          regulatory_anchor: 'Federal Transport Office Safety Directive',
          regional_lead_frame: 'De-escalating through engineering facts and verified passenger safety.',
          blueprints: {
            hintergrund: {
              id: 'hintergrund',
              label: 'Technical Incident Report',
              target_audience: 'National & Trade Infrastructure Editors',
              psychological_objective: 'Focus discussion on mechanical engineering diagnostics.',
              blueprint_content: `### 01. TECHNICAL DIAGNOSTIC SUMMARY
At 06:42 CET, an electrical short circuit in interlocking relay R-400 triggered an automatic signal fail-safe closure inside the Gotthard Base Tunnel corridor.

### 02. PASSENGER & INFRASTRUCTURE SAFETY
- **Evacuation:** Fail-safe telemetry guided all active passenger train sets to station platforms within 12 minutes. Zero injuries, zero stranded rolling stock.
- **SCADA Security Telemetry:** Continuous cyber-monitoring on the air-gapped signaling network recorded zero anomalous packets or external intrusion signatures.

### 03. SERVICE RESTORATION
Technicians have replaced the physical relay component. Operational test runs are underway with scheduled resumption of full commercial service at 20:00 CET today.`
            },
            social: {
              id: 'social',
              label: 'Passenger Travel Advisory',
              target_audience: 'Commuters & Travel Public',
              psychological_objective: 'Clear travel alternatives and passenger reassurance.',
              blueprint_content: `Gotthard Base Tunnel Service Update:
• Tunnel operations temporarily paused due to a localized electrical relay defect (R-400).
• All trains were safely rerouted to stations within minutes; passenger safety was guaranteed at all times.
• Maintenance crews have completed the hardware replacement; full service resumes at 20:00 CET.
• Real-time travel schedules and panoramic mountain detours: rail-network.ch/transit-update`
            },
            talking_points: {
              id: 'talking_points',
              label: 'Spokesperson Talking Points',
              target_audience: 'Media Spokespersons',
              psychological_objective: 'Calm and precise communication.',
              blueprint_content: `### KEY SPOKESPERSON MESSAGES
- "Automatic fail-safe systems engaged exactly as designed; all passengers were brought to platforms safely within 12 minutes."
- "Engineering inspections confirmed an isolated physical hardware failure in relay R-400. Network telemetry confirms zero external cyber intrusion."
- "The hardware replacement is completed; regular traffic through the base tunnel resumes tonight at 20:00 CET."`
            },
            qa_brief: {
              id: 'qa_brief',
              label: 'Incident Q&A',
              target_audience: 'Hotline Staff & Media Desk',
              psychological_objective: 'Rebuttal of cyberattack speculation.',
              blueprint_content: `**Q: Could this outage have been triggered by a cyberattack or external sabotage?**
A: No. Signaling and train control networks operate on physically isolated, air-gapped systems. Real-time network telemetry confirms zero unauthorized access or external data packets. The root cause was an isolated mechanical short circuit in relay R-400.

**Q: Were passengers stranded without ventilation in the tunnel?**
A: No. Automatic emergency protocols guided all active trains back to station platforms within 12 minutes.`
            }
          }
        },
        us: {
          region_id: 'us',
          region_label: 'North America (Logistics & Supply Chains)',
          regulatory_anchor: 'Global Freight Corridors & Forwarder SLA Protocols',
          regional_lead_frame: 'Freight supply chain routing continuity.',
          blueprints: {
            hintergrund: {
              id: 'hintergrund',
              label: 'Freight Briefing',
              target_audience: 'Logistics Press & Supply Chain Analysts',
              psychological_objective: 'Confirm routing capacity and cargo security.',
              blueprint_content: `### TRANSALPINE FREIGHT CORRIDOR DISPATCH
- **Incident Scope:** A localized electrical relay defect briefly paused rail traffic through the Gotthard rail artery.
- **Contingency Routing:** International freight cargo is actively routed via the Simplon corridor and Gotthard mountain line, maintaining continuous supply flow.
- **Restoration Timeline:** Base tunnel transit resumes tonight at 20:00 CET with zero backlog risk for transatlantic intermodal transfers.`
            },
            social: {
              id: 'social',
              label: 'Logistics Notice',
              target_audience: 'Supply Chain Operators',
              psychological_objective: 'Schedule updates and delivery assurance.',
              blueprint_content: `Transalpine freight update: Rail cargo through Switzerland is flowing via active detour corridors following a mechanical relay replacement. Normal base tunnel traffic resumes at 20:00 CET today.`
            },
            talking_points: {
              id: 'talking_points',
              label: 'Trade Spokesperson Points',
              target_audience: 'Trade Media',
              psychological_objective: 'Clarify cargo flow.',
              blueprint_content: `- "European supply chains remain fully operational through established contingency routes."
- "The hardware fault was isolated immediately, with zero impact on cargo integrity."
- "Full corridor capacity will be restored by 20:00 CET."`
            },
            qa_brief: {
              id: 'qa_brief',
              label: 'Freight Q&A',
              target_audience: 'Cargo Hotline',
              psychological_objective: 'Delivery guarantees.',
              blueprint_content: `**Q: Does this disruption cause delays for international intermodal freight?**
A: Delays are contained to under 90 minutes via active bypass routes. Corridor capacity returns to 100% this evening.`
            }
          }
        },
        eu: {
          region_id: 'eu',
          region_label: 'Europe (Cross-Border Infrastructure)',
          regulatory_anchor: 'EU Rail Corridor Network & Cross-Border Dispatch Agreements',
          regional_lead_frame: 'Countering international infrastructure sabotage rumors.',
          blueprints: {
            hintergrund: {
              id: 'hintergrund',
              label: 'European Wire Briefing',
              target_audience: 'European Wires & Transport Desks',
              psychological_objective: 'Dismantle cyber narrative with physical diagnostics.',
              blueprint_content: `### EUROPEAN INFRASTRUCTURE RESILIENCE BRIEFING
- **Root Cause Isolation:** Physical component breakdown in relay R-400 at Faido technical station.
- **Cross-Border Coordination:** Swiss and European rail dispatchers activated pre-aligned diversion schedules across the Rhine-Alpine corridor.
- **Independent Telemetry Review:** Cybersecurity teams verified zero network penetration on European interconnected dispatch interfaces.`
            },
            social: {
              id: 'social',
              label: 'Cross-Border Notice',
              target_audience: 'Cross-Border Travelers',
              psychological_objective: 'Travel clarity and reassurance.',
              blueprint_content: `Cross-border transit advisory: EuroCity and freight trains between Zurich, Swiss HQ, and Milan are operating via the scenic mountain route during technical relay maintenance. Full base tunnel service resumes at 20:00 CET.`
            },
            talking_points: {
              id: 'talking_points',
              label: 'European Points',
              target_audience: 'European Media Spokespersons',
              psychological_objective: 'Refuse hybrid speculation.',
              blueprint_content: `- "Cross-border traffic is coordinated closely with German and Italian rail partners."
- "Speculation regarding cyber intrusion is factually incorrect; physical telemetry is fully verified."
- "Standard fail-safe procedures successfully prevented any passenger hazard."`
            },
            qa_brief: {
              id: 'qa_brief',
              label: 'EU Wire Q&A',
              target_audience: 'Press Desk',
              psychological_objective: 'Security clarity.',
              blueprint_content: `**Q: How do we respond to European security wires suggesting hybrid threats?**
A: Point strictly to verified hardware telemetry. State clearly: 'The signaling architecture is completely air-gapped. Independent diagnostic logs confirm a mechanical relay failure.'`
            }
          }
        },
        ch: {
          region_id: 'ch',
          region_label: 'Switzerland (National Infrastructure)',
          regulatory_anchor: 'FOT & Swiss Rail Passengers',
          regional_lead_frame: 'Passenger information and scheduled service resumption.',
          blueprints: {
            hintergrund: {
              id: 'hintergrund',
              label: 'Background Briefing',
              target_audience: 'National Press & Commuter Media',
              psychological_objective: 'Fact-based update on relay replacement.',
              blueprint_content: `### INFRASTRUCTURE & OPERATIONS MEDIA UPDATE
- **Situation:** An electrical fault on relay R-400 in the Faido interlocking triggered an automatic safety shutdown earlier today.
- **Safety & Evacuation:** The fail-safe protocol worked as designed. All passenger trains were safely guided back to stations within 12 minutes.
- **Restoration:** The faulty component has been replaced. Regular scheduled traffic through the base tunnel resumes at 20:00 CET.`
            },
            social: {
              id: 'social',
              label: 'Commuter Ticker',
              target_audience: 'Travelers & Commuters',
              psychological_objective: 'Provide clear travel alternatives.',
              blueprint_content: `Gotthard Base Tunnel Service Update:
• Tunnel closed until 20:00 CET due to a localized relay fault in Faido interlocking.
• Trains rerouted via the Gotthard Panorama Route (+45–60 min travel time).
• All trains were safely cleared; passenger safety was assured at all times.
• Live timetables updated in the Rail Mobile App.`
            },
            talking_points: {
              id: 'talking_points',
              label: 'Spokesperson Briefing',
              target_audience: 'Swiss Media Desk',
              psychological_objective: 'Project calm operational competence.',
              blueprint_content: `- "Passenger safety remained our highest priority at all times; fail-safe interlocking protocols operated flawlessly."
- "This was an isolated electrical relay fault that has already been resolved."
- "Regular high-speed tunnel operations resume at 20:00 CET."`
            },
            qa_brief: {
              id: 'qa_brief',
              label: 'Media Desk Q&A',
              target_audience: 'Swiss Press Office',
              psychological_objective: 'Deliver precise technical facts.',
              blueprint_content: `**Q: Why did service resumption take several hours?**
A: Under Swiss Federal Office of Transport (FOT) regulations, replacing any safety-critical interlocking relay requires mandatory measurement runs and signal certification before passenger trains are cleared.`
            }
          }
        },
        apac: {
          region_id: 'apac',
          region_label: 'Asia-Pacific (Tourism & Travel Desks)',
          regulatory_anchor: 'Swiss Travel System Advisory Guidelines',
          regional_lead_frame: 'Travel notices and international itinerary support.',
          blueprints: {
            hintergrund: {
              id: 'hintergrund',
              label: 'Travel Bulletin',
              target_audience: 'Overseas Travel Operators',
              psychological_objective: 'Itinerary reassurance and scenic alternatives.',
              blueprint_content: `### SWISS TRAVEL SYSTEM TRANSIT BULLETIN
- **Passenger Rail Services:** High-speed rail transit across the Swiss Alps is operating with temporary scenic diversions via the historical mountain pass.
- **Safety Record:** Swiss rail safety systems executed standard protocols; all services remain secure.
- **Normal Operations:** High-speed tunnel transits resume regular schedules from 20:00 CET.`
            },
            social: {
              id: 'social',
              label: 'Advisory',
              target_audience: 'International Travelers',
              psychological_objective: 'Service alert and guidance.',
              blueprint_content: `Travel Advisory for Swiss Rail Pass holders: Panoramic mountain services are operating between Zurich and Ticino/Italy during scheduled technical repairs. High-speed tunnel services resume at 20:00 CET today.`
            },
            talking_points: {
              id: 'talking_points',
              label: 'Travel Desk Points',
              target_audience: 'International Helpdesks',
              psychological_objective: 'Clear travel support.',
              blueprint_content: `- "Swiss travel itineraries are fully protected with scenic alternative routes."
- "Normal high-speed frequencies resume this evening at 20:00 CET."`
            },
            qa_brief: {
              id: 'qa_brief',
              label: 'Travel Q&A',
              target_audience: 'Hotline Staff',
              psychological_objective: 'Schedule assistance.',
              blueprint_content: `**Q: Do international travelers need to cancel their Swiss rail journeys?**
A: No. All destinations remain accessible via the panoramic route with minor travel time additions.`
            }
          }
        }
      },
      cards: [
        {
          id: 'trend-a1',
          topic: 'Crisis & Operational Continuity',
          headline: 'Social Media Speculation on Rail Transit Network Disruption',
          outlets_involved: ['News Wire Service', 'Regional Broadcast'],
          velocity_change: '+620% (3h)',
          tipping_point_score: 94,
          sentiment_split: { positive: 2, neutral: 12, negative: 86 },
          summary: 'Rapid spread of rumors regarding alleged cyber intrusion during electrical relay shutdown.'
        }
      ],
      blueprints: {
        hintergrund: { id: 'hintergrund', label: 'Dossier', target_audience: 'Press', psychological_objective: 'Facts', blueprint_content: 'Technical diagnostics.' },
        social: { id: 'social', label: 'Social', target_audience: 'Commuters', psychological_objective: 'Clarity', blueprint_content: 'Travel updates.' },
        talking_points: { id: 'talking_points', label: 'Points', target_audience: 'Spokespersons', psychological_objective: 'Confidence', blueprint_content: 'Fail-safe operated normally.' },
        qa_brief: { id: 'qa_brief', label: 'Q&A', target_audience: 'Desk', psychological_objective: 'Directness', blueprint_content: 'Relay failure.' }
      }
    },
    esg_investigation: {
      scenario_id: 'esg_investigation',
      corpus_gate: {
        raw_enterprise_files: 680000,
        active_governed_records: 9400,
        canonical_golden_sources: 19,
        legacy_conflicts_flagged: 2,
        conflict_details: []
      },
      global_core_thesis: 'Zero tolerance for labor violations across our entire supply chain. All allocations to the supplier in question have been frozen immediately, and an independent forensic audit is active.',
      global_proof_points: [
        'Immediate commercial suspension of affected supplier purchase orders',
        'Independent Big-4 forensic audit on the ground',
        'Full public disclosure of audit summary upon completion'
      ],
      global_guardrails: [
        'DO NOT defend the subcontractor or hide behind Tier-2/Tier-3 distinctions.',
        'DO NOT rely on internal company assurances alone; mandate independent forensic verification.'
      ],
      regional_adaptations: {
        all: {
          region_id: 'all',
          region_label: 'Global Supply Chain Governance',
          regulatory_anchor: 'Corporate Supplier Code of Conduct (ESG-2025-V2)',
          regional_lead_frame: 'Proactive enforcement of human rights standards.',
          blueprints: {
            hintergrund: {
              id: 'hintergrund',
              label: 'ESG Governance Briefing',
              target_audience: 'Business Media & ESG Analysts',
              psychological_objective: 'Prove compliance rigor and immediate action.',
              blueprint_content: `### 01. IMMEDIATE ENFORCEMENT ACTIONS
Upon receipt of supplier audit irregularities regarding labor accommodation standards, Group Procurement executed an immediate commercial freeze on all active purchase orders with subcontractor Apex Fab.

### 02. INDEPENDENT FORENSIC VERIFICATION
- **Scope:** Big-4 forensic auditors have been deployed on site to conduct confidential, unannounced worker interviews.
- **Prior Swiss HQine:** The supplier had passed a certified SMETA social audit in December 2025. Today's review examines whether local management bypassed certified protocols.

### 03. TRANSPARENCY COMMITMENT
An executive summary of the independent investigation findings will be published openly upon conclusion. Zero tolerance applies across all tiers.`
            },
            social: {
              id: 'social',
              label: 'Corporate Responsibility Post',
              target_audience: 'Stakeholders & Public',
              psychological_objective: 'Clear ethical stance.',
              blueprint_content: `Corporate responsibility update:
• Immediate procurement freeze placed on subcontractor following labor standard concerns.
• Independent forensic review underway on site.
• Full transparency guaranteed upon completion of the inspection.
• Read our supplier governance statement: governance.internal/esg-response`
            },
            talking_points: {
              id: 'talking_points',
              label: 'Leadership Talking Points',
              target_audience: 'C-Suite & Spokespersons',
              psychological_objective: 'Accountability and decisive action.',
              blueprint_content: `### LEADERSHIP & SPOKESPERSON MESSAGES
- "We operate a policy of zero tolerance for labor standard violations anywhere in our supply chain."
- "All purchase orders with the affected subcontractor were suspended immediately upon receiving these allegations."
- "An independent forensic audit is active on site; we will publish the verified findings transparently."`
            },
            qa_brief: {
              id: 'qa_brief',
              label: 'Supply Chain Q&A',
              target_audience: 'Media Desk',
              psychological_objective: 'Factuality and clarity.',
              blueprint_content: `**Q: Did the enterprise know of these labor issues before signing contract renewals?**
A: No. The supplier presented a clean, third-party verified SMETA compliance audit dated December 2025. If that audit was compromised, we will pursue all legal remedies.

**Q: Will this suspension disrupt major ongoing infrastructure milestones?**
A: No. Production volumes have been redirected to certified alternate suppliers within our dual-sourcing network.`
            }
          }
        },
        us: {
          region_id: 'us',
          region_label: 'US (Investors & Bond Covenants)',
          regulatory_anchor: 'SEC ESG Rules & Green Bond Framework Covenants',
          regional_lead_frame: 'Investor assurance and risk containment.',
          blueprints: {
            hintergrund: {
              id: 'hintergrund',
              label: 'Investor Brief',
              target_audience: 'Institutional Investors & Rating Agencies',
              psychological_objective: 'Protect covenants and ESG ratings.',
              blueprint_content: `### INVESTOR GOVERNANCE MEMORANDUM
- **Covenant & Bond Safeguards:** Active procurement freeze eliminates operational compliance risk under US green bond and ESG covenants.
- **Dual-Sourcing Continuity:** Component diversion to pre-qualified secondary manufacturers ensures zero material impact on capital expenditure schedules.
- **Board Oversight:** The Audit & Sustainability Committee receives weekly briefings from external investigators.`
            },
            social: {
              id: 'social',
              label: 'Update',
              target_audience: 'Capital Markets',
              psychological_objective: 'Market stability and clarity.',
              blueprint_content: `Investor notice: Supply chain safeguards triggered immediately on isolated supplier. Zero disruption to infrastructure timeline; independent audit deployed.`
            },
            talking_points: {
              id: 'talking_points',
              label: 'IR Points',
              target_audience: 'Investor Relations & Analysts',
              psychological_objective: 'Transparency and financial stability.',
              blueprint_content: `- "Proactive compliance enforcement protects shareholder value and ensures strict ESG bond covenant adherence."
- "Capital expenditure delivery timelines remain fully protected."`
            },
            qa_brief: {
              id: 'qa_brief',
              label: 'IR Q&A',
              target_audience: 'IR Media Desk',
              psychological_objective: 'Financial clarity.',
              blueprint_content: `**Q: Does this trigger material disclosure obligations under SEC rules?**
A: No material financial exposure exists. The commercial value of the frozen contract represents <0.04% of annual procurement volume.`
            }
          }
        },
        eu: {
          region_id: 'eu',
          region_label: 'Europe (CSDDD & Civil Society)',
          regulatory_anchor: 'EU Corporate Sustainability Due Diligence Directive (CSDDD)',
          regional_lead_frame: 'Demonstrating statutory due diligence in action.',
          blueprints: {
            hintergrund: {
              id: 'hintergrund',
              label: 'CSDDD Brief',
              target_audience: 'European Business Press & NGO Editors',
              psychological_objective: 'Prove statutory adherence and audit rigor.',
              blueprint_content: `### EU CSDDD COMPLIANCE DOSSIER
- **Statutory Due Diligence:** The immediate suspension aligns with European Corporate Sustainability Due Diligence Directive (CSDDD) early-intervention protocols.
- **Civil Society Dialogue:** Corporate ESG leadership has initiated direct consultations with European reporting NGOs to share the forensic investigation terms of reference.
- **Remediation Plan:** Should violations be confirmed, contractual penalties and mandatory worker remedy funds will be enforced immediately.`
            },
            social: {
              id: 'social',
              label: 'NGO Response',
              target_audience: 'Civil Society & Sustainability Community',
              psychological_objective: 'Open and constructive dialog.',
              blueprint_content: `Dialogue with civil society: We take CSDDD due diligence responsibilities seriously. Following NGO inquiries, all orders with the supplier are suspended pending an independent audit. Full summary will be shared publicly.`
            },
            talking_points: {
              id: 'talking_points',
              label: 'Policy Points',
              target_audience: 'European Spokespersons & Policy Team',
              psychological_objective: 'Demonstrate rigorous compliance.',
              blueprint_content: `- "We welcome civil society scrutiny and treat our statutory due diligence obligations as binding."
- "Decisive suspension of commercial relations demonstrates that our human rights standards have real consequences."`
            },
            qa_brief: {
              id: 'qa_brief',
              label: 'EU Desk Q&A',
              target_audience: 'Media Desk Europe',
              psychological_objective: 'Directness and transparency.',
              blueprint_content: `**Q: Will the enterprise publish the full forensic report?**
A: An exhaustive executive summary including corrective action plans will be released publicly to all stakeholders.`
            }
          }
        },
        ch: {
          region_id: 'ch',
          region_label: 'Switzerland (HQ & Regulatory Standards)',
          regulatory_anchor: 'Swiss Due Diligence Ordinance (VOSUG) & CO Art. 964',
          regional_lead_frame: 'Upholding statutory due diligence and seamless supply chain transparency.',
          blueprints: {
            hintergrund: {
              id: 'hintergrund',
              label: 'Swiss Supply Chain Due Diligence Brief',
              target_audience: 'Swiss Financial & National Media (NZZ, Le Temps)',
              psychological_objective: 'Demonstrate compliance with Swiss statutory due diligence.',
              blueprint_content: `### SWISS SUPPLY CHAIN DUE DILIGENCE (VOSUG)
- **Statutory Due Diligence:** The immediate suspension adheres strictly to the Swiss Ordinance on Due Diligence and Transparency (VOSUG).
- **Commercial Procurement Freeze:** All active purchase orders with the affected subcontractor were suspended immediately upon receiving these allegations.
- **Independent Forensic Audit:** A leading external forensic accounting firm is verifying workplace and accommodation standards on the ground.`
            },
            social: {
              id: 'social',
              label: 'Swiss Headquarters Statement',
              target_audience: 'Swiss Public & Partner Ecosystem',
              psychological_objective: 'Demonstrate decisive ethical stance.',
              blueprint_content: `Commitment to human rights standards: Zero tolerance across our supply chain. All purchase orders with the subcontractor have been suspended immediately pending an independent forensic audit.`
            },
            talking_points: {
              id: 'talking_points',
              label: 'Swiss Spokesperson Points',
              target_audience: 'Swiss Spokespersons & Media Desk',
              psychological_objective: 'Clarity, accountability, and reliability.',
              blueprint_content: `- "Integrity and Swiss statutory due diligence standards apply across all international tiers of our procurement network."
- "We acted immediately and decisively the moment substantiated allegations emerged."`
            },
            qa_brief: {
              id: 'qa_brief',
              label: 'Swiss Media Desk Q&A',
              target_audience: 'Media Desk Bern/Zurich',
              psychological_objective: 'Create transparency and address audit questions.',
              blueprint_content: `**Q: Why was this issue not detected during previous supplier audits?**
A: The supplier passed a certified independent SMETA social audit in late 2025. The independent forensic inquiry is investigating whether local factory management intentionally circumvented certified audit standards.`
            }
          }
        },
        apac: {
          region_id: 'apac',
          region_label: 'Asia-Pacific (Manufacturing & Labor Inspectorate)',
          regulatory_anchor: 'Local Labor Inspectorates & Export Licensing Standards',
          regional_lead_frame: 'On-site investigation and worker welfare focus.',
          blueprints: {
            hintergrund: {
              id: 'hintergrund',
              label: 'Audit Notice',
              target_audience: 'Regional Business Media',
              psychological_objective: 'Factuality and cooperation with authorities.',
              blueprint_content: `### REGIONAL MANUFACTURING INSPECTORATE UPDATE
- **On-Site Forensic Teams:** External auditors are conducting unannounced physical inspections at local supplier facilities.
- **Worker Welfare Priority:** Unrestricted access to dormitories and payment records has been mandated as a condition of continued qualification.
- **Secondary Procurement:** Local component manufacturing has been diverted to certified backup partners.`
            },
            social: {
              id: 'social',
              label: 'Regional Notice',
              target_audience: 'Regional Industry Stakeholders',
              psychological_objective: 'Calmness and verified standards.',
              blueprint_content: `Regional supply update: Operations at our primary assembly centers continue normally with certified alternative suppliers.`
            },
            talking_points: {
              id: 'talking_points',
              label: 'Regional Points',
              target_audience: 'Regional Spokespersons',
              psychological_objective: 'Accuracy and partnership.',
              blueprint_content: `- "We work constructively with local labor authorities to maintain highest workplace standards."
- "Supplies are fully diversified across certified partners."`
            },
            qa_brief: {
              id: 'qa_brief',
              label: 'Regional Q&A',
              target_audience: 'Local Media Desk',
              psychological_objective: 'Clear factual response.',
              blueprint_content: `**Q: Are local manufacturing shifts interrupted?**
A: No. Assembly facilities continue on schedule utilizing qualified alternative inventory.`
            }
          }
        }
      },
      cards: [],
      blueprints: {
        hintergrund: { id: 'hintergrund', label: 'Dossier', target_audience: 'Press', psychological_objective: 'Governance', blueprint_content: 'Supplier suspended.' },
        social: { id: 'social', label: 'Social', target_audience: 'Public', psychological_objective: 'Integrity', blueprint_content: 'Zero tolerance.' },
        talking_points: { id: 'talking_points', label: 'Points', target_audience: 'Leadership', psychological_objective: 'Responsibility', blueprint_content: 'Decisive intervention.' },
        qa_brief: { id: 'qa_brief', label: 'Q&A', target_audience: 'Desk', psychological_objective: 'Facts', blueprint_content: 'Supply chain audit.' }
      }
    },
    rlt_access_debate: {
      scenario_id: 'rlt_access_debate',
      corpus_gate: {
        raw_enterprise_files: 920000,
        active_governed_records: 14200,
        canonical_golden_sources: 36,
        legacy_conflicts_flagged: 5,
        conflict_details: [
          {
            vault_location: 'Veeva MedComms / UK Access Vault',
            document_title: 'NICE_Submission_Draft_Historical_2024.docx',
            conflict_reason: 'Draft used legacy QALY comparator models that did not incorporate downstream acute hospital day offsets.',
            action_required: 'Superseded by Targeted Oncology HEOR Model GS-03.'
          }
        ]
      },
      global_core_thesis: 'ONCO-104 is clinically proven to double radiographic progression-free survival in pre-chemotherapy solid-tumor oncology. We are working constructively with European HTA bodies and UK NICE to align on value-based reimbursement frameworks that reflect acute hospitalization offsets.',
      global_proof_points: [
        'ONCO-01 demonstrated a statistically significant doubling of rPFS (HR 0.41, p<0.001).',
        'FDA approval confirms strong clinical benefit-risk balance prior to toxic taxane chemotherapy.',
        'Dedicated targeted oncology manufacturing hubs in New Jersey and Indiana ensure unbroken global supply.'
      ],
      global_guardrails: [
        'DO NOT allow trade media to conflate UK NICE cost-per-QALY refusal with clinical failure.',
        'DO NOT allow media to misrepresent procedural EMA withdrawal as a clinical safety or efficacy failure.'
      ],
      regional_adaptations: {
        all: {
          region_id: 'all',
          region_label: 'Global (All Regions)',
          regulatory_anchor: 'ONCO-01 Protocol & Targeted Oncology Clinical Overview',
          regional_lead_frame: 'Pivotal precision oncology milestone moving targeted oncologys to pre-chemotherapy patients.',
          blueprints: {
            hintergrund: { id: 'hintergrund', label: 'Global Science Briefing', target_audience: 'Medical Editors', psychological_objective: 'Anchor rPFS doubling.', blueprint_content: 'ONCO-01 data confirms doubling of radiographic progression-free survival.' },
            social: { id: 'social', label: 'Patient Channel', target_audience: 'Patients', psychological_objective: 'Reassurance.', blueprint_content: 'Advancing precision targeted cancer therapy for men with advanced solid-tumor oncology.' },
            talking_points: { id: 'talking_points', label: 'Spokesperson Talking Points', target_audience: 'Media Desk', psychological_objective: 'Clinical clarity.', blueprint_content: 'Lead with rPFS doubling and quality-of-life benefits.' },
            qa_brief: { id: 'qa_brief', label: 'Field Q&A', target_audience: 'Comms', psychological_objective: 'Direct facts.', blueprint_content: 'NICE evaluated cost-effectiveness thresholds, not biological efficacy.' }
          }
        },
        us: {
          region_id: 'us',
          region_label: 'North America (US / FDA & Payers)',
          regulatory_anchor: 'US FDA Expanded Prescribing Information',
          regional_lead_frame: 'Commercial availability and reimbursement rollout across comprehensive cancer centers.',
          blueprints: {
            hintergrund: { id: 'hintergrund', label: 'US Clinical & Reimbursement Brief', target_audience: 'US Oncology Media', psychological_objective: 'Formulary inclusion.', blueprint_content: 'FDA approved expanded indication for pre-chemotherapy mCRPC.' },
            social: { id: 'social', label: 'US Patient Voice', target_audience: 'Advocacy Groups', psychological_objective: 'Support.', blueprint_content: 'Expanding access to targeted solid-tumor oncology therapy before chemotherapy.' },
            talking_points: { id: 'talking_points', label: 'Payer Talking Points', target_audience: 'Access Teams', psychological_objective: 'Value justification.', blueprint_content: 'Offsets late-stage acute hospitalizations and emergency visits.' },
            qa_brief: { id: 'qa_brief', label: 'US Access Q&A', target_audience: 'Hotlines', psychological_objective: 'Clarity.', blueprint_content: 'Commercial Medicare and commercial health plans are active.' }
          }
        },
        eu: {
          region_id: 'eu',
          region_label: 'Europe (EU / EMA & HTA)',
          regulatory_anchor: 'EMA Regulatory Framework & Joint Clinical Assessment',
          regional_lead_frame: 'Partnering with national health authorities to overcome health economic hurdles.',
          blueprints: {
            hintergrund: { id: 'hintergrund', label: 'European HTA Briefing', target_audience: 'Health Economists', psychological_objective: 'Separate cost from clinical data.', blueprint_content: 'Clinical efficacy is verified; pricing discussions continue with national bodies.' },
            social: { id: 'social', label: 'EU Affiliate Outreach', target_audience: 'Clinicians', psychological_objective: 'Trust.', blueprint_content: 'Commitment to finding sustainable patient access pathways across Europe.' },
            talking_points: { id: 'talking_points', label: 'European Spokesperson Points', target_audience: 'National Teams', psychological_objective: 'Alignment.', blueprint_content: 'Distinguish between UK NICE economic thresholds and verified clinical benefit.' },
            qa_brief: { id: 'qa_brief', label: 'HTA Negotiation Q&A', target_audience: 'Pricing Teams', psychological_objective: 'Defense.', blueprint_content: 'Flexible managed entry and outcomes-based contracts are offered.' }
          }
        },
        ch: {
          region_id: 'ch',
          region_label: 'Switzerland (Swissmedic & Nuclear Centers)',
          regulatory_anchor: 'Swissmedic Authorization & Specialties List (SL)',
          regional_lead_frame: 'Supporting university hospital infrastructure and patient access in Switzerland.',
          blueprints: {
            hintergrund: { id: 'hintergrund', label: 'Swiss Medical Media Dossier', target_audience: 'Medical Trade Press', psychological_objective: 'Secure comprehensive center care.', blueprint_content: 'Expanding specialized targeted oncology therapeutic capacity across Swiss university medical centers.' },
            social: { id: 'social', label: 'Headquarters Social Media', target_audience: 'Professional Community', psychological_objective: 'Clear clinical information.', blueprint_content: 'Targeted targeted oncology precision oncology is available for eligible patients across Swiss medical centers.' },
            talking_points: { id: 'talking_points', label: 'Swiss Spokesperson Points', target_audience: 'Spokespersons', psychological_objective: 'Clarity and partnership.', blueprint_content: 'Constructive collaboration with Swiss hospitals and health insurers ensures uninterrupted patient access.' },
            qa_brief: { id: 'qa_brief', label: 'Swiss Desk Q&A', target_audience: 'Media Relations', psychological_objective: 'Precision and transparency.', blueprint_content: 'Reimbursement progresses through proven Swiss Specialties List (SL) value assessment mechanisms.' }
          }
        },
        apac: {
          region_id: 'apac',
          region_label: 'Asia-Pacific (APAC / PMDA & Regional Access)',
          regulatory_anchor: 'Regional Registration Dossiers',
          regional_lead_frame: 'Expanding targeted oncology center readiness across key regional markets.',
          blueprints: {
            hintergrund: { id: 'hintergrund', label: 'APAC Access Briefing', target_audience: 'Regional Press', psychological_objective: 'Progress.', blueprint_content: 'Bridging data and regional center readiness advancing as planned.' },
            social: { id: 'social', label: 'Regional Information', target_audience: 'Community', psychological_objective: 'Assurance.', blueprint_content: 'Partnering across Asia-Pacific to advance targeted oncology clinical infrastructure.' },
            talking_points: { id: 'talking_points', label: 'Regional Points', target_audience: 'Directors', psychological_objective: 'Focus.', blueprint_content: 'Global clinical results confirm meaningful progression-free survival extension.' },
            qa_brief: { id: 'qa_brief', label: 'APAC Q&A', target_audience: 'Hotlines', psychological_objective: 'Support.', blueprint_content: 'Local regulatory reviews are progressing in alignment with agency timelines.' }
          }
        }
      },
      cards: [],
      blueprints: {
        hintergrund: { id: 'hintergrund', label: 'Briefing', target_audience: 'Press', psychological_objective: 'Facts', blueprint_content: 'Targeted Oncology trial results.' },
        social: { id: 'social', label: 'Social', target_audience: 'Patients', psychological_objective: 'Reassurance', blueprint_content: 'Therapy access.' },
        talking_points: { id: 'talking_points', label: 'Points', target_audience: 'Spokespersons', psychological_objective: 'Clarity', blueprint_content: 'rPFS doubling.' },
        qa_brief: { id: 'qa_brief', label: 'Q&A', target_audience: 'Media Desk', psychological_objective: 'Answers', blueprint_content: 'NICE appraisal context.' }
      }
    },
    health_data_breach: {
      scenario_id: 'health_data_breach',
      corpus_gate: {
        raw_enterprise_files: 520000,
        active_governed_records: 6200,
        canonical_golden_sources: 14,
        legacy_conflicts_flagged: 1,
        conflict_details: []
      },
      global_core_thesis: 'Patient records stored on cloud infrastructure are mathematically unreadable without encryption keys held permanently in domestic sovereign custody.',
      global_proof_points: [
        'Bring Your Own Key (BYOK) architecture ensures domestic sovereign custody',
        'Zero technical decryption capability by cloud providers or foreign authorities',
        'Doctor-patient confidentiality is preserved through mathematical cryptography'
      ],
      global_guardrails: [
        'Do not engage in endless legal jurisdictional debates; anchor the Safe Deposit Box analogy.',
        'DO NOT resort to defensive legalese or speculative jurisdictional arguments.'
      ],
      regional_adaptations: {
        all: {
          region_id: 'all',
          region_label: 'National Healthcare Sovereignty',
          regulatory_anchor: 'Federal Data Protection Act & Health Strategy',
          regional_lead_frame: 'Cryptographic key sovereignty demystified.',
          blueprints: {
            hintergrund: {
              id: 'hintergrund',
              label: 'Cryptographic Architecture Briefing',
              target_audience: 'Health Tech Press & Medical Media',
              psychological_objective: 'Demystify BYOK and anchor sovereign custody.',
              blueprint_content: `### 01. CRYPTOGRAPHIC DATA PARTITION ARCHITECTURE
Citizen health records stored on cloud infrastructure are mathematically partitioned using AES-256 envelope encryption.

### 02. SOVEREIGN KEY GOVERNANCE (BYOK)
- **Physical Custody:** Encryption keys are generated, stored, and managed exclusively inside domestic, state-supervised hardware security modules (HSMs).
- **Zero Host Decryption Capability:** Cloud hyperscalers host only opaque, mathematical ciphertext. Even under foreign court order or subpoena, the cloud operator possesses zero technical means to decrypt citizen data.

### 03. DOCTOR-PATIENT CONFIDENTIALITY
Medical confidentiality under federal statutes remains unbroken; encryption keys never cross domestic borders.`
            },
            social: {
              id: 'social',
              label: 'Patient Information Post',
              target_audience: 'Citizens & Patient Advocates',
              psychological_objective: 'Reassurance on medical privacy.',
              blueprint_content: `Patient Data Privacy & Sovereign Cloud Security:
• Health records stored in the cloud are encrypted with AES-256; the data is completely unreadable without keys.
• All cryptographic keys remain permanently in domestic sovereign custody.
• Neither cloud providers nor foreign courts have the keys to unlock citizen records.
• Safe Deposit Box principle: The cloud provides the steel vault; the keys stay 100% in our hands.`
            },
            talking_points: {
              id: 'talking_points',
              label: 'Public Health Talking Points',
              target_audience: 'Spokespersons & Health Officials',
              psychological_objective: 'Trust building through plain-language analogies.',
              blueprint_content: `### KEY SPOKESPERSON MESSAGES
- "Health data in the cloud is mathematically unreadable without keys held exclusively under domestic sovereign control."
- "The Safe Deposit Box principle applies: The cloud provider hosts the locked safe, but only domestic authorities hold the key."
- "Foreign court orders or extraterritorial statutes cannot compel decryption of data when the cloud provider does not hold the keys."`
            },
            qa_brief: {
              id: 'qa_brief',
              label: 'Hotline Q&A',
              target_audience: 'Hotline Staff & Patient Desk',
              psychological_objective: 'Directness and authoritative clarity.',
              blueprint_content: `**Q: Can foreign intelligence agencies access health records via the US CLOUD Act?**
A: No. The CLOUD Act can only compel a company to produce data in its possession or control. Because the cloud host possesses only encrypted cipher blocks without the domestic keys, any data produced would be unreadable mathematical noise.

**Q: Does moving to the cloud compromise medical confidentiality?**
A: No. Cryptographic separation ensures that patient records remain strictly protected under domestic statutory confidentiality.`
            }
          }
        },
        us: {
          region_id: 'us',
          region_label: 'US (Tech Standards & Enterprise Security)',
          regulatory_anchor: 'HIPAA Security Rules & FIPS 140-3 HSM Validation',
          regional_lead_frame: 'Standard enterprise BYOK cryptographic validation.',
          blueprints: {
            hintergrund: {
              id: 'hintergrund',
              label: 'Tech Brief',
              target_audience: 'IT Press & Enterprise Security Officers',
              psychological_objective: 'Highlight technical architecture and compliance.',
              blueprint_content: `### TECHNICAL SPECIFICATION: SOVEREIGN BYOK ARCHITECTURE
- **Key Management:** Dual-control KMS architecture utilizing FIPS 140-3 Level 4 Hardware Security Modules.
- **Statutory Boundary:** Cloud host operates strictly as an infrastructure processing layer with zero read access to decrypted payloads.
- **Compliance Alignment:** Architecture fully satisfies HIPAA Security Rules and international ISO 27001 data isolation benchmarks.`
            },
            social: {
              id: 'social',
              label: 'Update',
              target_audience: 'Enterprise Tech Audience',
              psychological_objective: 'Technical credibility.',
              blueprint_content: `Technical update on health cloud architecture: Bring-Your-Own-Key (BYOK) deployment ensures cryptographic isolation for medical records.`
            },
            talking_points: {
              id: 'talking_points',
              label: 'Points',
              target_audience: 'Spokespersons',
              psychological_objective: 'Facts and security standards.',
              blueprint_content: `- "We apply proven enterprise cryptographic standards that mathematically preclude unauthorized payload inspection."
- "Hyperscaler partners provide infrastructure resilience while key ownership remains entirely sovereign."`
            },
            qa_brief: {
              id: 'qa_brief',
              label: 'Q&A',
              target_audience: 'Tech Press Desk',
              psychological_objective: 'Accuracy.',
              blueprint_content: `**Q: Is BYOK standard practice in global health infrastructure?**
A: Yes. It represents the gold standard for public-sector and clinical deployments requiring absolute jurisdictional key isolation.`
            }
          }
        },
        eu: {
          region_id: 'eu',
          region_label: 'Europe (GDPR & EHDS Framework)',
          regulatory_anchor: 'EU Health Data Space & GDPR Article 48 Precedents',
          regional_lead_frame: 'European sovereignty reference architecture.',
          blueprints: {
            hintergrund: {
              id: 'hintergrund',
              label: 'GDPR Briefing',
              target_audience: 'EU Privacy Press & DPOs',
              psychological_objective: 'Position Swiss architecture as best practice.',
              blueprint_content: `### EUROPEAN HEALTH DATA SPACE (EHDS) PRIVACY BRIEFING
- **GDPR Article 48 Safeguards:** Sovereign cryptographic key custody provides a legally defensible technical barrier against extraterritorial data demands.
- **European Sovereign Cloud Model:** European data protection authorities view the Swiss BYOK architecture as a benchmark for health data federation.
- **End-to-End Auditability:** All key access events are immutably logged on domestic audit trails.`
            },
            social: {
              id: 'social',
              label: 'EU Post',
              target_audience: 'Privacy Advocates & European Stakeholders',
              psychological_objective: 'Clarity on GDPR compliance.',
              blueprint_content: `European privacy perspective: Sovereign encryption keys ensure patient files remain protected against cross-border data disclosure.`
            },
            talking_points: {
              id: 'talking_points',
              label: 'Policy Points',
              target_audience: 'European Spokespersons',
              psychological_objective: 'Demonstrate regulatory leadership.',
              blueprint_content: `- "Our cryptographic architecture aligns with the strictest European interpretations of digital data sovereignty."
- "Data protection authorities recognize that mathematical key isolation provides the strongest statutory defense."`
            },
            qa_brief: {
              id: 'qa_brief',
              label: 'EU Desk Q&A',
              target_audience: 'Media Desk Europe',
              psychological_objective: 'Compliance clarity.',
              blueprint_content: `**Q: Does this satisfy GDPR international data transfer requirements?**
A: Yes. By ensuring keys never leave domestic sovereign jurisdiction, the technical safeguards meet the EDPB criteria for supplementary measures.`
            }
          }
        },
        ch: {
          region_id: 'ch',
          region_label: 'Switzerland (Physicians & Citizens)',
          regulatory_anchor: 'Swiss FDPIC & Electronic Patient Record Act (Criminal Code Art. 321)',
          regional_lead_frame: 'Instilling trust across the medical profession and citizen patients.',
          blueprints: {
            hintergrund: {
              id: 'hintergrund',
              label: 'Swiss Technical Architecture Brief',
              target_audience: 'Swiss Medical Journal (SÄZ) & Health IT Press',
              psychological_objective: 'Guarantee medical confidentiality and assure healthcare professionals.',
              blueprint_content: `### BRIEFING FOR THE SWISS MEDICAL PROFESSION
- **Medical Confidentiality (Art. 321 SCC):** Professional medical secrecy remains fully unbroken through domestic cryptographic key sovereignty.
- **Key Custody:** 100% of cryptographic keys remain within Switzerland in sovereign, supervised data centers.
- **Independent Verification:** Swiss universities and accredited cybersecurity auditors have independently certified the key management architecture.`
            },
            social: {
              id: 'social',
              label: 'Citizen Privacy Information',
              target_audience: 'Patients & Swiss Public',
              psychological_objective: 'Authoritative reassurance on health privacy.',
              blueprint_content: `Key update on Electronic Patient Record security:
• Health records stored in the cloud are encrypted with AES-256; data is unreadable without keys.
• All keys remain permanently in Swiss sovereign custody.
• Neither cloud providers nor foreign courts have the keys to unlock citizen records.`
            },
            talking_points: {
              id: 'talking_points',
              label: 'Public Health Spokesperson Points',
              target_audience: 'Hospital Leadership & Spokespersons',
              psychological_objective: 'Deliver clear cryptographic analogies.',
              blueprint_content: `- "Professional medical confidentiality is protected by mathematical cryptography and domestic key sovereignty."
- "Foreign court orders cannot compel decryption when keys remain exclusively under Swiss sovereign control."`
            },
            qa_brief: {
              id: 'qa_brief',
              label: 'Citizen Desk Q&A',
              target_audience: 'Patient Hotline & Desk',
              psychological_objective: 'Plain-language clarity.',
              blueprint_content: `**Q: Can foreign authorities access Swiss health records via the US CLOUD Act?**
A: No. Because cryptographic keys remain exclusively in Switzerland, the cloud provider cannot decrypt or produce readable records.`
            }
          }
        },
        apac: {
          region_id: 'apac',
          region_label: 'Asia-Pacific (Digital Health Systems)',
          regulatory_anchor: 'Regional Cyber Health Data Protection Guidelines',
          regional_lead_frame: 'General architecture and data security info.',
          blueprints: {
            hintergrund: {
              id: 'hintergrund',
              label: 'Briefing',
              target_audience: 'Regional Health Tech Media',
              psychological_objective: 'Data security architecture overview.',
              blueprint_content: `### DIGITAL HEALTH DATA GOVERNANCE OVERVIEW
- **Data Integrity Standards:** Sovereign key management protocols implemented across all digital patient registry touchpoints.
- **Zero Unauthorized Interception:** Continuous cryptographic verification prevents data tampering or overseas discovery access.`
            },
            social: {
              id: 'social',
              label: 'Advisory',
              target_audience: 'Industry Followers',
              psychological_objective: 'Technical clarity.',
              blueprint_content: `Digital health security: Enterprise cryptographic protection ensures citizen healthcare records remain secure and confidential.`
            },
            talking_points: {
              id: 'talking_points',
              label: 'Points',
              target_audience: 'Spokespersons',
              psychological_objective: 'Factual assurance.',
              blueprint_content: `- "Sovereign key custody represents global best practice for digital health ecosystems."
- "Data protection is rooted in mathematics, not declarations."`
            },
            qa_brief: {
              id: 'qa_brief',
              label: 'Q&A',
              target_audience: 'Media Desk',
              psychological_objective: 'Direct answers.',
              blueprint_content: `**Q: How does this protect patient privacy?**
A: By mathematically locking data files before they ever touch cloud storage servers.`
            }
          }
        }
      },
      cards: [],
      blueprints: {
        hintergrund: { id: 'hintergrund', label: 'Dossier', target_audience: 'Press', psychological_objective: 'Security', blueprint_content: 'Sovereign key custody.' },
        social: { id: 'social', label: 'Social', target_audience: 'Public', psychological_objective: 'Privacy', blueprint_content: 'Encrypted health files.' },
        talking_points: { id: 'talking_points', label: 'Points', target_audience: 'Spokespersons', psychological_objective: 'Reassurance', blueprint_content: 'Keys stay domestic.' },
        qa_brief: { id: 'qa_brief', label: 'Q&A', target_audience: 'Desk', psychological_objective: 'Answers', blueprint_content: 'BYOK architecture.' }
      }
    }
  },
  de: {
    // Mirroring German structure
    oncology_trial_update: {
      scenario_id: 'oncology_trial_update',
      corpus_gate: {
        raw_enterprise_files: 1280000,
        active_governed_records: 18400,
        canonical_golden_sources: 34,
        legacy_conflicts_flagged: 7,
        conflict_details: [
          {
            vault_location: 'Veeva Vault / Europäisches Marktzugangs-Archiv',
            document_title: 'EU_Launch_Sequencing_Strategy_Deck_2023_v4.pptx',
            conflict_reason: 'Dokument postuliert bedingungslose parallele Markteinführungen in Europa, was der 2026 MFN-Strategie (GS-01) widerspricht, bei der unbedachte Referenzpreise die globale Erstattung gefährden.',
            action_required: 'Gesperrt und archiviert; ersetzt durch Geprüfte Golden Source GS-01.'
          },
          {
            vault_location: 'SharePoint / Schweizer Public Affairs Arbeitsordner',
            document_title: 'Entwurf_BAG_Kostendaempfung_Stellungnahme.docx',
            conflict_reason: 'Entwurf enthielt konfrontative Drohungen ("Verzicht auf Einreichungen in der Schweiz"), was den Governance-Richtlinien gegen Boykott-Rhetorik widerspricht.',
            action_required: 'Archiviert; ersetzt durch das partnerschaftliche Dialogmodell in GS-02/GS-03.'
          }
        ]
      },
      global_core_thesis: 'Nachhaltige Spitzenforschung erfordert, dass OECD-Staaten den therapeutischen Nutzen fair anerkennen. Unsere 15-Mrd.-$-Investition baut die US-Produktion an 10 Standorten aus, während Swiss HQ unverändert der Konzernsitz und Forschungsstandort bleibt; wir suchen den aktiven Dialog mit europäischen Behörden und dem BAG für flexible Zugangsmodelle.',
      global_proof_points: [
        'GS-01: Reinvestitionen in Forschung setzen faire Erstattung in allen wohlhabenden Industriestaaten voraus.',
        'GS-02: 15 Mrd. $ US-Investition sichert Versorgung gegen Zölle; der weltweite Hauptsitz bleibt unerschütterlich at the Swiss headquarters.',
        'GS-03: Konstruktiver Austausch mit dem Schweizer BAG und europäischen HTA-Stellen zu wertbasierten Modellen ohne Boykotte.',
        'Versorgungssicherheit: Härtefallprogramme, Studien und Zulassungsverfahren laufen termingerecht weiter.'
      ],
      global_guardrails: [
        'NIEMALS Formulierungen verwenden, die suggerieren, das Unternehmen wolle Patienten in Europa oder der Schweiz "bestrafen" oder "Medikamente vorenthalten".',
        'KEINE Berichterstattung unwidersprochen lassen, die den US-Produktionsausbau als Abkehr von Swiss HQ deutet.',
        'KEINE Vorwegnahme prozentualer Preisabschläge in Medienstatements vor behördlichen Abschlüssen.'
      ],
      regional_adaptations: {
        all: {
          region_id: "all",
          region_label: "Global (Alle Regionen)",
          regulatory_anchor: "2026 MFN & Globale Preispolitik (GS-01)",
          regional_lead_frame: "Globale Forschungsinvestitionen und US-Referenzpreise in Einklang bringen.",
          blueprints: {
            hintergrund: {
              id: "hintergrund",
              label: "Globale Corporate Story (Owned GEO)",
              target_audience: "Internationale Wirtschafts- & Fachpresse, KI-Suchmaschinen",
              psychological_objective: "US-Investitionen als Stärkung der Versorgungssicherheit positionieren; Swiss HQ als Hauptsitz bekräftigen.",
              blueprint_content: `### 01. GLOBALE FORSCHUNGSINVESTITIONEN & ERSTATTUNG
Unter den neuen US-Referenzpreisregeln (MFN) setzt nachhaltige Spitzenforschung voraus, dass alle wohlhabenden OECD-Staaten den therapeutischen Mehrwert von Innovationen anerkennen (Geprüfte Golden Source GS-01).

### 02. 15-MRD.-$-PRODUKTIONSINVESTITION & STANDORT SCHWEIZ
- **Investitionsprogramm:** 15 Milliarden US-Dollar fliessen in den Ausbau von 10 hochmodernen Produktionsstandorten in den USA, um Lieferketten gegen Zolldrohungen abzusichern.
- **Konzernsitz Die Schweiz bleibt unberührt:** Die Schweiz bleibt unverändert der weltweite Hauptsitz, Sitz der Konzernleitung und das globale Forschungsherz. Keine Verlagerung von Führungs- oder Forschungsfunktionen.
- **Europäischer & Schweizer Dialog:** Mit dem Bundesamt für Gesundheit (BAG) und europäischen HTA-Behörden führen wir einen konstruktiven Dialog zu flexiblen, wertbasierten Preismodellen – ohne Patientenboykotte.`
            },
            social: {
              id: "social",
              label: "Konzern-Social-Media & Patienten",
              target_audience: "Fachkreise, Anleger & Öffentlichkeit",
              psychological_objective: "Therapiekontinuität und Treue zum Standort Schweiz vermitteln.",
              blueprint_content: `Standort- & Investitions-Update:
• 15 Mrd. $ Investition in 10 US-Werke stärkt weltweite Lieferketten gegen Zollrisiken.
• Die Schweiz bleibt unser weltweiter Hauptsitz und wissenschaftliches Herz.
• Laufende Behandlungen, Studien und Zulassungsverfahren laufen weltweit termingerecht weiter.
• Konstruktiver Dialog mit BAG und europäischen Behörden für faire Erstattungsmodelle.`
            },
            talking_points: {
              id: "talking_points",
              label: "Executive Talking Points",
              target_audience: "Konzernleitung & Mediensprecher",
              psychological_objective: "Klarheit und Standfestigkeit gegenüber Boykott- und Abwanderungsgerüchten.",
              blueprint_content: `### KERNBOTSCHAFTEN FÜR DIE MEDIEN
- "Unsere 15-Mrd.-$-Investition sichert die Versorgung amerikanischer Patienten gegen Zölle ab – sie schwächt unsere europäische Präsenz in keiner Weise."
- "Swiss HQ ist und bleibt unser weltweiter Hauptsitz und zentraler Forschungsstandort."
- "Wir weisen Spekulationen über Patientenboykotte entschieden zurück: Studien und Härtefallprogramme laufen lückenlos weiter."`
            },
            qa_brief: {
              id: "qa_brief",
              label: "Q&A Leitfaden",
              target_audience: "Medienstelle & Länderteams",
              psychological_objective: "Klare Replik ohne Wiederholung von Vorwurfsbegriffen.",
              blueprint_content: `**Q: Vorenthält das Unternehmen europäischen oder Schweizer Patienten neue Medikamente vor?**
A: Nein. Patienten stehen für uns an erster Stelle. Klinische Studien und Härtefallprogramme laufen uneingeschränkt weiter. Wir führen mit dem BAG und europäischen Stellen konstruktive Gespräche über moderne, wertbasierte Erstattungsmodelle.

**Q: Bedeutet die US-Milliardeninvestition eine schleichende Verlagerung des Konzernsitzes weg von Swiss HQ?**
A: Keineswegs. Swiss HQ ist und bleibt unser weltweiter Hauptsitz und das Herz unserer Forschung. Der Ausbau in den USA dient der lokalen Produktion und schützt vor Handelshemmnissen.`
            }
          }
        },
        us: {
          region_id: "us",
          region_label: "Nordamerika (USA / FDA & Payer)",
          regulatory_anchor: "US-Produktionsprogramm & CMS/HHS-Rahmen",
          regional_lead_frame: "Stärkung der heimischen Bioproduktion und Gewährleistung sicherer Versorgung.",
          blueprints: {
            hintergrund: {
              id: "hintergrund",
              label: "US-Wirtschafts- & Versorgungsdossier",
              target_audience: "US-Wirtschaftsmedien & Gesundheitspolitik",
              psychological_objective: "Wert der lokalen Produktion und Arbeitsplatzschaffung hervorheben.",
              blueprint_content: `### 01. 15-MRD.-$-PRODUKTIONSAUSBAU
Der Ausbau von 10 hochmodernen Produktionsstätten in den USA schafft tausende hochqualifizierte Arbeitsplätze und sichert die Versorgung von US-Patienten ab.`
            },
            social: { id: "social", label: "US-Mitteilung", target_audience: "US-Community", psychological_objective: "Vertrauen.", blueprint_content: "Stärkung der lokalen Produktion für US-Patienten." },
            talking_points: { id: "talking_points", label: "US-Talking Points", target_audience: "US-Sprecher", psychological_objective: "Arbeitsplätze und Versorgung.", blueprint_content: "15 Mrd. $ Investition schafft zollsichere Produktionskapazitäten in 10 US-Bundesstaaten." },
            qa_brief: { id: "qa_brief", label: "US-Q&A", target_audience: "US-Desk", psychological_objective: "Fakten.", blueprint_content: "Lokale Fertigung schützt Patientenversorgung vor weltweiten Lieferengpässen." }
          }
        },
        eu: {
          region_id: "eu",
          region_label: "Europa (EU / EMA & HTA)",
          regulatory_anchor: "EMA Joint HTA & Europäische Erstattungsdialoge",
          regional_lead_frame: "Konstruktive Partnerschaft für zukunftsfähige Nutzenbewertungen.",
          blueprints: {
            hintergrund: {
              id: "hintergrund",
              label: "Europäisches HTA-Briefing",
              target_audience: "Europäische Fach- & Wirtschaftspresse",
              psychological_objective: "Boykott-Vorwürfe entkräften und wertebasierte Modelle aufzeigen.",
              blueprint_content: `### 01. DIALOG ZU WERTBASIERTEN MODELLEN
Starre historische Preisdeckel greifen im Zeitalter globaler Referenzpreise zu kurz. Wir arbeiten mit europäischen Partnern an flexiblen Modellen, die echten Nutzen anerkennen.

### 02. SICHERE BEHANDLUNGSKONTINUITÄT
Laufende Studien und Härtefallprogramme in Europa laufen ohne jede Einschränkung weiter.`
            },
            social: { id: "social", label: "EU-Information", target_audience: "Fachkreise", psychological_objective: "Verlässlichkeit.", blueprint_content: "Wir setzen uns für zukunftsfähige Erstattungsmodelle in ganz Europa ein." },
            talking_points: { id: "talking_points", label: "EU-Sprecherpunkte", target_audience: "Länderteams", psychological_objective: "Einheitlichkeit.", blueprint_content: "Konstruktiver Dialog mit HTA-Behörden; alle Studien laufen planmässig weiter." },
            qa_brief: { id: "qa_brief", label: "EU-Q&A", target_audience: "Affiliates", psychological_objective: "Beruhigung.", blueprint_content: "Keine Verzögerung von Studien oder Behandlungen für europäische Patienten." }
          }
        },
        ch: {
          region_id: "ch",
          region_label: "Schweiz (Konzernsitz & Schweizer Gesundheitswesen)",
          regulatory_anchor: "BAG-Kostendämpfungsdialog & Swissmedic",
          regional_lead_frame: "Unverbrüchliches Bekenntnis zum Hauptsitz Swiss HQ und enger Austausch mit dem BAG.",
          blueprints: {
            hintergrund: {
              id: "hintergrund",
              label: "Schweizer Mediendossier",
              target_audience: "NZZ, Le Temps, SRF, Finanz und Wirtschaft",
              psychological_objective: "Abwanderungsgerüchte entschieden ausräumen; Partnerschaft mit dem BAG betonen.",
              blueprint_content: `### 01. DIE SCHWEIZ BLEIBT WELTWEITER HAUPTSITZ & FORSCHUNGSZENTRUM
Swiss HQ ist und bleibt das unerschütterliche wissenschaftliche und unternehmerische Zentrum des Konzerns. Die 15-Mrd.-Investition in den USA erweitert gezielt die lokale Produktion für den amerikanischen Markt – sie berührt die Schweizer Führung und Forschung nicht.

### 02. KONSTRUKTIVER AUSTAUSCH MIT DEM BUNDESAMT FÜR GESUNDHEIT (BAG)
Wir führen einen engen, faktenbasierten Dialog mit dem BAG zu nachhaltigen Preismodellen, die Schweizer Patienten verlässlich den Zugang zu bahnbrechenden Therapien sichern.`
            },
            social: { id: "social", label: "Konzernsitz Social Media", target_audience: "Schweizer Öffentlichkeit & Fachkreise", psychological_objective: "Bekenntnis zur Schweiz.", blueprint_content: "Bekenntnis zum Standort Schweiz: Die Schweiz bleibt der weltweite Hauptsitz und das Forschungsherz des Unternehmens." },
            talking_points: { id: "talking_points", label: "Talking Points Schweiz", target_audience: "Geschäftsleitung & Medienstelle", psychological_objective: "Souveränität.", blueprint_content: "Die Schweiz bleibt unverändert unser weltweiter Hauptsitz; partnerschaftlicher Dialog mit dem BAG." },
            qa_brief: { id: "qa_brief", label: "Q&A Medienstelle Swiss HQ", target_audience: "Medienteam", psychological_objective: "Schnelle Entkräftung.", blueprint_content: "Das Unternehmen zieht weder Forschung noch Führung aus der Schweiz ab; Schweizer Patienten haben uneingeschränkten Zugang zu Studien." }
          }
        },
        apac: {
          region_id: "apac",
          region_label: "Asien-Pazifik (APAC)",
          regulatory_anchor: "APAC-Zulassungsbehörden & Lieferketten",
          regional_lead_frame: "Lieferketten-Diversifikation und Versorgungssicherheit in Asien-Pazifik.",
          blueprints: {
            hintergrund: { id: "hintergrund", label: "APAC-Briefing", target_audience: "Regionale Wirtschaftspresse", psychological_objective: "Stabilität.", blueprint_content: "Globale Produktionsdiversifikation sichert Versorgung für Patienten im asiatisch-pazifischen Raum." },
            social: { id: "social", label: "APAC-Information", target_audience: "Partner", psychological_objective: "Zuverlässigkeit.", blueprint_content: "Regionale Studien und Zulassungsverfahren laufen termingerecht weiter." },
            talking_points: { id: "talking_points", label: "APAC-Sprecherpunkte", target_audience: "Regionaldirektoren", psychological_objective: "Ruhe.", blueprint_content: "US-Investitionen stärken weltweite Produktionsresilienz ohne Auswirkung auf regionale Pläne." },
            qa_brief: { id: "qa_brief", label: "APAC-Q&A", target_audience: "Medienstelle", psychological_objective: "Klarheit.", blueprint_content: "Lokale Zulassungsverfahren und Lieferungen laufen planmässig weiter." }
          }
        }
      },
      cards: [],
      blueprints: {
        hintergrund: { id: 'hintergrund', label: 'Hintergrund', target_audience: 'Presse', psychological_objective: 'Fakten', blueprint_content: 'Phase-III-Ergebnisse.' },
        social: { id: 'social', label: 'Social', target_audience: 'Patienten', psychological_objective: 'Vertrauen', blueprint_content: 'Therapiekontinuität.' },
        talking_points: { id: 'talking_points', label: 'Points', target_audience: 'Sprecher', psychological_objective: 'Führung', blueprint_content: 'Überlebensvorteil.' },
        qa_brief: { id: 'qa_brief', label: 'Q&A', target_audience: 'Medienstelle', psychological_objective: 'Präzision', blueprint_content: 'Subgruppenanalyse.' }
      }
    },
    alpine_transit_crisis: {
      scenario_id: 'alpine_transit_crisis',
      corpus_gate: {
        raw_enterprise_files: 840000,
        active_governed_records: 12100,
        canonical_golden_sources: 28,
        legacy_conflicts_flagged: 4,
        conflict_details: [
          {
            vault_location: 'Infrastruktur Betrieb / Notfallhandbuch Archiv',
            document_title: 'SOP_Stellwerkstoerung_Notfallprotokoll_2022.pdf',
            conflict_reason: 'Enthält veraltete manuelle Überbrückungsvorgaben, die durch digitale Verriegelungslogik ersetzt wurden.',
            action_required: 'Gesperrt für Betriebsleiter; ersetzt durch SEC-2026.'
          }
        ]
      },
      global_core_thesis: 'Der Zugsverkehr wurde wegen eines mechanischen Relaiskurzschlusses (R-400) unterbrochen. Das Fail-Safe-System hat vorschriftsgemäss gegriffen und 100% Personensicherheit garantiert. Die SCADA-Netzwerküberwachung bestätigt null unbefugte externe Zugriffe.',
      global_proof_points: [
        'Hardwaredefekt am Relaisbauteil R-400 durch Techniker vor Ort isoliert.',
        'Null unbefugte Datenpakete im physisch isolierten Zugsicherungsnetzwerk belegt.',
        'Alle Reisezüge wurden innerhalb von 12 Minuten geordnet in Bahnhöfe zurückgeführt.'
      ],
      global_guardrails: [
        'KEINE Spekulationen oder Formulierungen wie "Cyberangriff kann zur Stunde nicht ausgeschlossen werden".',
        'NIEMALS mit Reparaturzeiten beginnen, bevor die Fahrgastsicherheit eindeutig bestätigt wurde.'
      ],
      regional_adaptations: {
        all: {
          region_id: 'all',
          region_label: 'Gesamtverkehr (National & International)',
          regulatory_anchor: 'BAV-Sicherheitsrichtlinie & Zugsicherungs-Protokoll',
          regional_lead_frame: 'Deeskalation durch verifizierte technische Fakten und Passagiersicherheit.',
          blueprints: {
            hintergrund: {
              id: 'hintergrund',
              label: 'Technischer Vorfallsbericht',
              target_audience: 'Inlands- und Fachpresse Infrastruktur',
              psychological_objective: 'Fokus auf elektromechanische Diagnose lenken.',
              blueprint_content: `### 01. TECHNISCHE DIAGNOSE
Um 06:42 Uhr löste ein elektrischer Kurzschluss im Stellwerk-Relais R-400 eine automatische Sicherheitsabschaltung im Gotthard-Basistunnel aus.

### 02. SICHERHEIT VON FAHRGÄSTEN & ROLLMATERIAL
- **Räumung:** Das Sicherheitskonzept führte alle aktiven Züge innerhalb von 12 Minuten in Bahnhöfe zurück. Keine Verletzten, keine blockierten Züge im Tunnel.
- **Netzwerk-Sicherheit:** Die permanente Überwachung des geschlossenen Leitsystems verzeichnete null externe Zugriffsversuche oder Datenanomalien.

### 03. WIEDERINBETRIEBNAHME
Das Bauteil wurde ersetzt; nach obligatorischen Testfahrten wird der Vollbetrieb heute um 20:00 Uhr planmässig wieder aufgenommen.`
            },
            social: {
              id: 'social',
              label: 'Reise- & Kundeninformation',
              target_audience: 'Reisende & Pendler',
              psychological_objective: 'Verlässliche Reisealternativen und Ruhe vermitteln.',
              blueprint_content: `Gotthard-Basistunnel Betriebsinformation:
• Tunnelbetrieb wegen eines Relaisdefekts (R-400) im Stellwerk Faido vorübergehend unterbrochen.
• Alle Passagiere wurden umgehend und sicher an Bahnhöfe geleitet; Sicherheit war zu jedem Zeitpunkt garantiert.
• Instandsetzungsarbeiten sind abgeschlossen; Vollbetrieb ab 20:00 Uhr.
• Züge verkehren über die Panoramastrecke (+45-60 Min.). Aktueller Fahrplan: bahn-netz.ch/betriebslage`
            },
            talking_points: {
              id: 'talking_points',
              label: 'Talking Points Mediensprecher',
              target_audience: 'Medienteam & Unternehmenssprecher',
              psychological_objective: 'Souveräne, faktenbasierte Deeskalation.',
              blueprint_content: `### KERNBOTSCHAFTEN FÜR MEDIEN
- "Unsere Sicherheitssysteme haben genau wie vorgesehen gegriffen; alle Passagiere erreichten innerhalb von 12 Minuten sicher die Bahnhöfe."
- "Die Diagnose belegt einen rein mechanischen Hardwaredefekt am Relais R-400. Die Netzwerküberwachung bestätigt null externe Cyberzugriffe."
- "Das Bauteil ist ausgetauscht; ab 20:00 Uhr rollt der Verkehr wieder regulär durch den Basistunnel."`
            },
            qa_brief: {
              id: 'qa_brief',
              label: 'Q&A Medienstelle',
              target_audience: 'Medienstelle & Hotline',
              psychological_objective: 'Entkräftung von Sabotagespekulationen.',
              blueprint_content: `**Q: Könnte die Störung durch einen Cyberangriff oder Sabotage verursacht worden sein?**
A: Nein. Zugsicherungs- und Leitsysteme laufen in einem physisch getrennten, autarken Netz ohne Internetanbindung. Die Systemprotokolle belegen null unbefugte Zugriffe. Ursache war ein gewöhnlicher elektrischer Kurzschluss in einem Relaisbauteil.

**Q: Sassen Reisende im Tunnel ohne Belüftung fest?**
A: Nein. Die Notfallverriegelung greift automatisch; alle Züge wurden umgehend in Bahnhöfe geführt.`
            }
          }
        },
        us: {
          region_id: 'us',
          region_label: 'Nordamerika (Logistik & Lieferketten)',
          regulatory_anchor: 'Internationale Güterverkehrsabkommen',
          regional_lead_frame: 'Frachtkorridor-Kontinuität belegen.',
          blueprints: {
            hintergrund: {
              id: 'hintergrund',
              label: 'Güterverkehrs-Briefing',
              target_audience: 'Logistik- & Wirtschaftsredaktionen',
              psychological_objective: 'Ausweichkapazitäten und Lieferkettensicherheit aufzeigen.',
              blueprint_content: `### ALPEN-FRACHTKORRIDOR DISPATCH
- **Vorfallsüberblick:** Ein Relaisdefekt führte zu einem temporären Streckenunterbruch im Basistunnel.
- **Ersatzrouten:** Internationale Güterzüge verkehren planmässig über die Simplon-Achse und die Gotthard-Bergstrecke; Güterströme reissen nicht ab.
- **Wiedereröffnung:** Vollständige Basistunnel-Kapazität ab heute 20:00 Uhr gewährleistet.`
            },
            social: {
              id: 'social',
              label: 'Fracht-Update',
              target_audience: 'Verlader & Supply Chain Partner',
              psychological_objective: 'Lieferungssicherheit bestätigen.',
              blueprint_content: `Update Alpentransit: Güterverkehr rollt geordnet über Alternativachsen während laufender technischer Abschlussprüfungen. Basistunnel ab 20:00 Uhr wieder frei.`
            },
            talking_points: {
              id: 'talking_points',
              label: 'Punkte für Wirtschaftssprecher',
              target_audience: 'Fachmedien Güterverkehr',
              psychological_objective: 'Klarheit über Transportketten.',
              blueprint_content: `- "Europäische Transportketten bleiben über bestehende Ausweichrouten voll funktionsfähig."
- "Die Güterkapazität wird heute Abend wieder zu 100% hergestellt."`
            },
            qa_brief: {
              id: 'qa_brief',
              label: 'Q&A Cargo',
              target_audience: 'Kundenbetreuung Güterverkehr',
              psychological_objective: 'Laufzeitsicherheit.',
              blueprint_content: `**Q: Kommt es zu signifikanten Lieferverzögerungen im intermodalen Güterverkehr?**
A: Verspätungen bleiben im Rahmen von 60 bis 90 Minuten. Ab 20:00 Uhr verkehren Güterzüge wieder auf der Stammstrecke.`
            }
          }
        },
        eu: {
          region_id: 'eu',
          region_label: 'Europa (Grenzüberschreitender Korridor)',
          regulatory_anchor: 'EU-Eisenbahnkorridor Rhein-Alpen',
          regional_lead_frame: 'Internationale Gerüchte über Infrastrukturangriffe entkräften.',
          blueprints: {
            hintergrund: {
              id: 'hintergrund',
              label: 'Agenturbriefing Europa',
              target_audience: 'Europäische Nachrichtenagenturen',
              psychological_objective: 'Spekulationen über hybride Angriffe mit Diagnosedaten begegnen.',
              blueprint_content: `### BRIEFING ZUR INFRASTRUKTUR-RESILIENZ
- **Ursachenisolation:** Mechanischer Bauteilausfall am Stellwerk-Relais R-400 im Knoten Faido.
- **Europäische Abstimmung:** Fahrdienstleiter der Schweiz, Deutschlands und Italiens aktivierten unverzüglich koordinierte Umleitungsfahrpläne.
- **Sicherheitsanalyse:** IT-Sicherheitsteams verifizieren null Auffälligkeiten an den europäischen Datenschnittstellen.`
            },
            social: {
              id: 'social',
              label: 'EuroCity Reisehinweis',
              target_audience: 'Grenzüberschreitende Reisende',
              psychological_objective: 'Transparenz für Fernreisende.',
              blueprint_content: `Grenzüberschreitender Bahnverkehr: EuroCity-Züge zwischen Zürich/Swiss HQ und Mailand verkehren über die Panoramastrecke. Tunnelinstandstellung schreitet planmässig voran; Normalbetrieb ab 20:00 Uhr.`
            },
            talking_points: {
              id: 'talking_points',
              label: 'Punkte für Europa-Sprecher',
              target_audience: 'Internationale Korrespondenten',
              psychological_objective: 'Sicherheit und europäische Koordination betonen.',
              blueprint_content: `- "Der grenzüberschreitende Verkehr wird in enger Abstimmung mit den europäischen Partnerbahnen bewältigt."
- "Spekulationen über Cyber-Sabotage entbehren jeder Grundlage; die Telemetrie belegt einen isolierten Relaisschaden."`
            },
            qa_brief: {
              id: 'qa_brief',
              label: 'Q&A Europa-Desk',
              target_audience: 'Medienstelle Ausland',
              psychological_objective: 'Sicherheitsklarheit.',
              blueprint_content: `**Q: Warum meldeten Sicherheitsanalysten einen Cyber-Hintergrund?**
A: Unbestätigte Social-Media-Behauptungen interpretierten die vorsorgliche Sicherheitsabschaltung fälschlich als Sabotage. Die Zugsicherung ist netzwerktechnisch vollständig isoliert.`
            }
          }
        },
        ch: {
          region_id: 'ch',
          region_label: 'Schweiz (Inland & Pendlerverkehr)',
          regulatory_anchor: 'BAV & Schweizer Bahnkunden (PBG Art. 15)',
          regional_lead_frame: 'Fahrgastinformation, Zuverlässigkeit und lückenloser Service.',
          blueprints: {
            hintergrund: {
              id: 'hintergrund',
              label: 'Schweizer Mediendossier',
              target_audience: 'Schweizer Tagesmedien & Regionalpresse',
              psychological_objective: 'Präzise Information über Bauteilaustausch und Messfahrten.',
              blueprint_content: `### MEDIENMITTEILUNG BAHN-INFRASTRUKTUR
- **Ereignis:** Um 06:42 Uhr führte ein Kurzschluss am Relais R-400 im Stellwerk Faido zu einer automatischen Rotausleuchtung der Signale.
- **Evakuation & Betreuung:** Alle Reisezüge wurden innert 12 Minuten kontrolliert in die Bahnhöfe Erstfeld und Biasca zurückgezogen.
- **Instandstellung:** Techniker haben das Relais ausgetauscht. Nach Messfahrten wird die Strecke um 20:00 Uhr freigegeben.`
            },
            social: {
              id: 'social',
              label: 'Pendler-Information',
              target_audience: 'Schweizer Bahnkunden',
              psychological_objective: 'Hilfestellung und kundennahe Orientierung.',
              blueprint_content: `Verkehrsmeldung Gotthard:
• Basistunnel nach Relaisdefekt bis 20:00 Uhr gesperrt.
• Züge verkehren via Gotthard-Panoramastrecke (Reisezeitverlängerung ca. 45-60 Min.).
• Billette behalten ihre Gültigkeit; Kundenbegleiter stehen an den Bahnhöfen im Einsatz.
• Nächstes Update im Online-Fahrplan.`
            },
            talking_points: {
              id: 'talking_points',
              label: 'Sprecherbriefing Schweiz',
              target_audience: 'Mediensprecher Bahnbetrieb',
              psychological_objective: 'Kompetenz und Verlässlichkeit ausstrahlen.',
              blueprint_content: `- "Die Sicherheit unserer Kundinnen und Kunden stand zu jeder Sekunde an erster Stelle; das Sicherheitskonzept hat tadellos funktioniert."
- "Es handelt sich um einen rein mechanischen Defekt, der behoben wurde."
- "Ab 20:00 Uhr rollt der Verkehr wieder fahrplanmässig durch den Basistunnel."`
            },
            qa_brief: {
              id: 'qa_brief',
              label: 'Q&A Medienstelle Bern/Zürich',
              target_audience: 'Medienteam Schweiz',
              psychological_objective: 'Klare, nüchterne Fakten liefern.',
              blueprint_content: `**Q: Weshalb benötigt die Reparatur eines einzelnen Relais mehrere Stunden?**
A: Nach Arbeiten an sicherheitskritischen Stellwerk-Bauteilen schreiben die Vorschriften des Bundesamts für Verkehr (BAV) strenge Mess-, Prüf- und Testfahrten vor, bevor die Strecke für den Personenverkehr freigegeben werden darf.`
            }
          }
        },
        apac: {
          region_id: 'apac',
          region_label: 'Asien-Pazifik (Tourismus & Travel Agents)',
          regulatory_anchor: 'Swiss Travel System Reisehinweise',
          regional_lead_frame: 'Reisehinweise und Routenunterstützung für Touristen.',
          blueprints: {
            hintergrund: {
              id: 'hintergrund',
              label: 'Tourismus-Bulletin',
              target_audience: 'Internationale Reiseveranstalter',
              psychological_objective: 'Reisepläne absichern und Panorama-Erlebnis betonen.',
              blueprint_content: `### REISEHINWEIS SCHWEIZER BAHNREISEN
- **Zugverkehr:** Bahnreisen durch die Schweizer Alpen verkehren über die traditionelle Gotthard-Panoramastrecke.
- **Sicherheitsstandard:** Die Züge verkehren nach höchsten Sicherheitsstandards.
- **Normalbetrieb:** Tunneldurchfahrten erfolgen ab 20:00 Uhr wieder planmässig.`
            },
            social: {
              id: 'social',
              label: 'Reise-Advisory',
              target_audience: 'Internationale Gäste mit Swiss Travel Pass',
              psychological_objective: 'Orientierung bieten.',
              blueprint_content: `Reisehinweis für Swiss Travel Pass Inhaber: Züge zwischen Zürich und dem Tessin verkehren heute über die historische Panoramastrecke. Basistunnel öffnet ab 20:00 Uhr.`
            },
            talking_points: {
              id: 'talking_points',
              label: 'Travel Desk Punkte',
              target_audience: 'Internationale Touristik-Schalter',
              psychological_objective: 'Servicebereitschaft.',
              blueprint_content: `- "Reisen innerhalb der Schweiz sind uneingeschränkt möglich; alle Destinationen werden bedient."
- "Der Basistunnel steht ab heute Abend wieder regulär zur Verfügung."`
            },
            qa_brief: {
              id: 'qa_brief',
              label: 'Tourismus Q&A',
              target_audience: 'Schalterpersonal & Hotline',
              psychological_objective: 'Kundenberuhigung.',
              blueprint_content: `**Q: Müssen gebuchte Rundreisen storniert werden?**
A: Nein. Sämtliche Destinationen bleiben erreichbar; Züge nutzen mit geringer Fahrzeitverlängerung die landschaftlich reizvolle Bergstrecke.`
            }
          }
        }
      },
      cards: [],
      blueprints: {
        hintergrund: { id: 'hintergrund', label: 'Dossier', target_audience: 'Presse', psychological_objective: 'Fakten', blueprint_content: 'Relaisdefekt behoben.' },
        social: { id: 'social', label: 'Social', target_audience: 'Pendler', psychological_objective: 'Transparenz', blueprint_content: 'Störungsmeldung.' },
        talking_points: { id: 'talking_points', label: 'Points', target_audience: 'Sprecher', psychological_objective: 'Ruhe', blueprint_content: 'Sicherheitssystem aktiv.' },
        qa_brief: { id: 'qa_brief', label: 'Q&A', target_audience: 'Medienstelle', psychological_objective: 'Klarheit', blueprint_content: 'Reparatur läuft.' }
      }
    },
    esg_investigation: {
      scenario_id: 'esg_investigation',
      corpus_gate: {
        raw_enterprise_files: 680000,
        active_governed_records: 9400,
        canonical_golden_sources: 19,
        legacy_conflicts_flagged: 2,
        conflict_details: [
          {
            vault_location: 'Konzernbeschaffung / Lieferantenregister',
            document_title: 'Lieferantenkodex_Auditrichtlinie_2023.pdf',
            conflict_reason: 'Enthält überholte Fristen zur Nachbesserung bei schweren Verstössen.',
            action_required: 'Gesperrt; abgelöst durch ESG-2025-V2 mit Sofort-Sistierung.'
          }
        ]
      },
      global_core_thesis: 'Nulltoleranz bei Menschenrechtsverletzungen in unserer Lieferkette. Sämtliche Aufträge an den betroffenen Subunternehmer wurden per sofort eingefroren; eine unabhängige forensische Vor-Ort-Prüfung läuft.',
      global_proof_points: [
        'Sofortiger Vergabestopp für alle Bestellungen beim betroffenen Subunternehmer.',
        'Unabhängige Sonderprüfung durch Big-4 Wirtschaftsprüfer vor Ort im Gang.',
        'Vollständige Offenlegung der Prüfungsergebnisse nach Abschluss garantiert.'
      ],
      global_guardrails: [
        'KEINE Ausflüchte zu Subunternehmer-Stufen (Tier-2/Tier-3); die Verantwortung liegt beim Konzern.',
        'KEINE rein internen Beteuerungen ohne unabhängige forensische Prüfungsergebnisse abgeben.'
      ],
      regional_adaptations: {
        all: {
          region_id: 'all',
          region_label: 'Globale Lieferketten-Governance',
          regulatory_anchor: 'Konzernweiter Lieferantenkodex (ESG-2025-V2)',
          regional_lead_frame: 'Konsequente Durchsetzung von Arbeits- und Menschenrechtsstandards.',
          blueprints: {
            hintergrund: {
              id: 'hintergrund',
              label: 'ESG-Governance Briefing',
              target_audience: 'Wirtschaftspresse & ESG-Analysten',
              psychological_objective: 'Härte und Handlungsbereitschaft belegen.',
              blueprint_content: `### 01. SOFORTIGE DURCHSETZUNGSMASSNAHMEN
Nach Eingang von Hinweisen auf mutmassliche Verstösse bei Unterkünften eines Zulieferers hat die Konzernbeschaffung alle aktiven Bestellungen beim Subunternehmer Apex Fab per sofort sistiert.

### 02. UNABHÄNGIGE FORENSISCHE PRÜFUNG
- **Umfang:** Forensische Ermittler einer Big-4 Revisionsgesellschaft führen vertrauliche Vor-Ort-Interviews mit Mitarbeitenden durch.
- **Bisheriger Status:** Der Lieferant hatte im Dezember 2025 ein zertifiziertes SMETA-Sozialaudit bestanden. Gegenstand der Prüfung ist, ob lokale Stellen Zertifizierungsvorgaben umgangen haben.

### 03. TRANSPARENZVERPFLICHTUNG
Eine Zusammenfassung der Untersuchungsergebnisse wird nach Abschluss der Prüfung veröffentlicht. Nulltoleranz gilt verbindlich über alle Beschaffungsstufen.`
            },
            social: {
              id: 'social',
              label: 'Erklärung zur Unternehmensverantwortung',
              target_audience: 'Öffentlichkeit & Stakeholder',
              psychological_objective: 'Klare ethische Haltung demonstrieren.',
              blueprint_content: `Verantwortung in der Lieferkette:
• Sofortiger Vergabestopp gegen Subunternehmer nach Vorwürfen verhängt.
• Unabhängige forensische Vor-Ort-Prüfung eingeleitet.
• Transparente Veröffentlichung des Untersuchungsberichts zugesagt.
• Zur Stellungnahme: governance.internal/esg-stellungnahme`
            },
            talking_points: {
              id: 'talking_points',
              label: 'Führungs-Talking Points',
              target_audience: 'Geschäftsleitung & Mediensprecher',
              psychological_objective: 'Verantwortung und Handlungsentschlossenheit belegen.',
              blueprint_content: `### KERNBOTSCHAFTEN DER GESCHÄFTSLEITUNG
- "Wir dulden keine Missachtung von Arbeitsstandards in unserer Beschaffungskette; Nulltoleranz ist nicht verhandelbar."
- "Alle Geschäftsbeziehungen mit dem betroffenen Subunternehmer wurden unmittelbar nach Bekanntwerden der Vorwürfe sistiert."
- "Eine unabhängige Sonderprüfung läuft; wir werden die Ergebnisse lückenlos und transparent offenlegen."`
            },
            qa_brief: {
              id: 'qa_brief',
              label: 'Lieferketten Q&A',
              target_audience: 'Medienstelle',
              psychological_objective: 'Faktenorientierte Präzision.',
              blueprint_content: `**Q: Wusste der Konzern vor Vertragsverlängerungen von diesen Vorwürfen?**
A: Nein. Dem Konzern lag ein einwandfreies, von unabhängigen Dritten zertifiziertes Audit aus dem Dezember 2025 vor. Sollten Täuschungen vorliegen, werden rechtliche Schritte eingeleitet.

**Q: Führt der Vergabestopp zu Verzögerungen bei wichtigen Infrastrukturprojekten?**
A: Nein. Die Liefermengen wurden unmittelbar auf zertifizierte Zweitlieferanten innerhalb unseres Beschaffungsnetzwerks umgeleitet.`
            }
          }
        },
        us: {
          region_id: 'us',
          region_label: 'Nordamerika (Investoren & Anleihe-Covenants)',
          regulatory_anchor: 'SEC ESG-Regeln & Green Bond Covenants',
          regional_lead_frame: 'Investorensicherheit und Risikobegrenzung.',
          blueprints: {
            hintergrund: {
              id: 'hintergrund',
              label: 'Investoren-Memorandum',
              target_audience: 'Institutionelle Anleger & Ratingagenturen',
              psychological_objective: 'Einhaltung von ESG-Anleiheklauseln absichern.',
              blueprint_content: `### INVESTOREN-BRIEFING GOVERNANCE
- **Covenant-Schutz:** Der sofortige Vergabestopp bannt operationelle Risiken unter US-Green-Bond-Vorgaben.
- **Beschaffungsstabilität:** Umlenkung von Produktionsvolumina auf vorqualifizierte Ausweichlieferanten sichert Investitionszeitpläne ohne materielle Mehrkosten.
- **Aufsichtsratskontrolle:** Der Prüfungsausschuss wird wöchentlich über den Untersuchungsfortschritt unterrichtet.`
            },
            social: {
              id: 'social',
              label: 'Kapitalmarkt-Update',
              target_audience: 'Finanzmarkt-Follower',
              psychological_objective: 'Marktstabilität wahren.',
              blueprint_content: `Investoren-Update: Governance-Schutzmechanismen bei Lieferant unverzüglich ausgelöst. Keine Auswirkungen auf Projektzeitpläne; unabhängiges Audit beauftragt.`
            },
            talking_points: {
              id: 'talking_points',
              label: 'IR-Punkte',
              target_audience: 'Investor Relations & Analysten',
              psychological_objective: 'Transparenz und Finanzstabilität.',
              blueprint_content: `- "Konsequente Governance schützt den Unternehmenswert und garantiert die Einhaltung unserer ESG-Anleihebedingungen."
- "Die Fertigstellungsfristen grosser Infrastrukturprojekte bleiben vollumfänglich gewahrt."`
            },
            qa_brief: {
              id: 'qa_brief',
              label: 'IR Q&A',
              target_audience: 'IR Desk',
              psychological_objective: 'Finanzielle Klarheit.',
              blueprint_content: `**Q: Löst dieser Fall Ad-hoc-Mitteilungspflichten nach Börsenregeln aus?**
A: Es besteht kein materielles finanzielles Risiko. Das Volumen des sistierten Vertrags macht weniger als 0,04% des jährlichen Einkaufsvolumens aus.`
            }
          }
        },
        eu: {
          region_id: 'eu',
          region_label: 'Europa (CSDDD & Zivilgesellschaft)',
          regulatory_anchor: 'EU Corporate Sustainability Due Diligence Directive (CSDDD)',
          regional_lead_frame: 'Gesetzliche Sorgfaltspflichten in der Praxis belegen.',
          blueprints: {
            hintergrund: {
              id: 'hintergrund',
              label: 'CSDDD-Compliance Dossier',
              target_audience: 'Europäische Wirtschaftsredaktionen & NGOs',
              psychological_objective: 'Gesetzliche Einhaltung und Audit-Rigor beweisen.',
              blueprint_content: `### CSDDD-COMPLIANCE DOSSIER
- **Gesetzliche Sorgfaltspflicht:** Die prompte Sistierung folgt den Frühinterventionsprotokollen der EU-Sorgfaltspflichtenrichtlinie (CSDDD).
- **Dialog mit Zivilgesellschaft:** Das ESG-Leitungsteam hat den direkten Austausch mit berichterstattenden NGOs aufgenommen.
- **Wiedergutmachungsplan:** Sollten sich Verstösse bestätigen, greifen vertragliche Sanktionen und Entschädigungsfonds für betroffene Arbeitskräfte.`
            },
            social: {
              id: 'social',
              label: 'NGO-Antwort',
              target_audience: 'Zivilgesellschaft & Nachhaltigkeitsnetzwerke',
              psychological_objective: 'Konstruktiven Dialog führen.',
              blueprint_content: `Dialog mit der Zivilgesellschaft: Wir nehmen CSDDD-Sorgfaltspflichten ernst. Sämtliche Bestellungen beim Lieferanten sind sistiert; der Bericht der unabhängigen Prüfung wird öffentlich geteilt.`
            },
            talking_points: {
              id: 'talking_points',
              label: 'Punkte für Europa-Sprecher',
              target_audience: 'Medienteam Europa',
              psychological_objective: 'Compliance und Haltung belegen.',
              blueprint_content: `- "Wir begrüssen den kritischen Blick der Zivilgesellschaft und betrachten unsere Sorgfaltspflichten als bindend."
- "Die sofortige Sistierung beweist, dass unsere Standards reale Konsequenzen haben."`
            },
            qa_brief: {
              id: 'qa_brief',
              label: 'EU Desk Q&A',
              target_audience: 'Medienstelle Europa',
              psychological_objective: 'Transparenz zeigen.',
              blueprint_content: `**Q: Wird der vollständige Prüfbericht veröffentlicht?**
A: Eine ausführliche Management-Zusammenfassung inklusive Massnahmenplan wird allen Stakeholdern zugänglich gemacht.`
            }
          }
        },
        ch: {
          region_id: 'ch',
          region_label: 'Schweiz (Konzernsitz & VOSUG-Sorgfalt)',
          regulatory_anchor: 'VOSUG Sorgfaltspflichten & Schweizer OR Art. 964',
          regional_lead_frame: 'Verantwortung und lückenlose Transparenz.',
          blueprints: {
            hintergrund: {
              id: 'hintergrund',
              label: 'Dossier Lieferkettensorgfalt',
              target_audience: 'Schweizer Wirtschaftspresse & Inlandredaktionen',
              psychological_objective: 'Sorgfalt lückenlos nachweisen.',
              blueprint_content: `### DOSSIER LIEFERKETTEN-SORGFALTSPFLICHT (VOSUG)
- **Schweizer Gesetzgebung:** Die getroffenen Massnahmen erfüllen die Vorgaben der Verordnung über Sorgfaltspflichten und Transparenz (VOSUG).
- **Vergabestopp:** Alle Verträge mit dem betroffenen Subunternehmer wurden per sofort sistiert.
- **Unabhängige Begutachtung:** Eine externe Revisionsgesellschaft prüft die Einhaltung der Arbeitsstandards vor Ort.`
            },
            social: {
              id: 'social',
              label: 'Haltungserklärung',
              target_audience: 'Schweizer Öffentlichkeit & Partner',
              psychological_objective: 'Klare Haltung zeigen.',
              blueprint_content: `Haltung zu Arbeitsstandards: Nulltoleranz bei Menschenrechten. Nach Vorwürfen gegen einen Subunternehmer gilt per sofort ein Vergabestopp. Eine unabhängige Sonderprüfung läuft.`
            },
            talking_points: {
              id: 'talking_points',
              label: 'Sprecherpunkte Schweiz',
              target_audience: 'Mediensprecher Schweiz',
              psychological_objective: 'Verlässlichkeit vermitteln.',
              blueprint_content: `- "Integrität und Schweizer Sorgfaltsmassstäbe gelten lückenlos auch für internationale Beschaffungsketten."
- "Wir haben sofort und ohne Zögern reagiert, sobald begründete Zweifel aufkamen."`
            },
            qa_brief: {
              id: 'qa_brief',
              label: 'Q&A Schweiz',
              target_audience: 'Medienstelle Bern/Zürich',
              psychological_objective: 'Transparenz schaffen.',
              blueprint_content: `**Q: Wieso fiel der Vorfall bei früheren Audits nicht auf?**
A: Der Lieferant hatte Ende 2025 ein reguläres, unabhängiges Sozialaudit bestanden. Gegenstand der Sonderprüfung ist, ob vor Ort bewusste Täuschungen stattfanden.`
            }
          }
        },
        apac: {
          region_id: 'apac',
          region_label: 'Asien-Pazifik (Produktionsstandorte & Arbeitsinspektorat)',
          regulatory_anchor: 'Lokale Arbeitsinspektorate & Exportstandards',
          regional_lead_frame: 'Vor-Ort-Prüfung und Schutz von Arbeitsstandards.',
          blueprints: {
            hintergrund: {
              id: 'hintergrund',
              label: 'Mitteilung Produktionsinspektion',
              target_audience: 'Regionale Wirtschaftsmedien',
              psychological_objective: 'Sachlichkeit und behördliche Kooperation betonen.',
              blueprint_content: `### STATUSBERICHT PRODUKTIONSINSPEKTION
- **Forensische Teams vor Ort:** Externe Prüfer führen unangekündigte Betriebsinspektionen an Zulieferstandorten durch.
- **Arbeitnehmerrechte:** Unbeschränkter Zugang zu Unterkünften und Lohnbüchern wurde als Vorbedingung für weitere Kooperationen verlangt.
- **Ausweichproduktion:** Lokale Fertigungskontingente wurden auf vorqualifizierte Ersatzbetriebe übertragen.`
            },
            social: {
              id: 'social',
              label: 'Regionale Mitteilung',
              target_audience: 'Lokale Branchen-Stakeholder',
              psychological_objective: 'Ruhe und Einhaltung von Standards.',
              blueprint_content: `Update Produktionsstandorte: Fertigung an unseren Hauptzentren läuft mit zertifizierten Ersatzlieferanten regulär weiter.`
            },
            talking_points: {
              id: 'talking_points',
              label: 'Regionale Sprecherpunkte',
              target_audience: 'Regionale Sprecher',
              psychological_objective: 'Fakten und Partnerschaft betonen.',
              blueprint_content: `- "Wir arbeiten eng mit lokalen Arbeitsbehörden zusammen, um faire Bedingungen durchzusetzen."
- "Die Fertigung ist über zertifizierte Partnerbetriebe lückenlos abgesichert."`
            },
            qa_brief: {
              id: 'qa_brief',
              label: 'Regionales Q&A',
              target_audience: 'Lokale Medienstelle',
              psychological_objective: 'Klare sachliche Antworten.',
              blueprint_content: `**Q: Werden lokale Schichten unterbrochen?**
A: Nein. Die Montage läuft planmässig mit freigegebenen Alternativkontingenten weiter.`
            }
          }
        }
      },
      cards: [],
      blueprints: {
        hintergrund: { id: 'hintergrund', label: 'Dossier', target_audience: 'Presse', psychological_objective: 'Governance', blueprint_content: 'Vergabestopp verhängt.' },
        social: { id: 'social', label: 'Social', target_audience: 'Öffentlichkeit', psychological_objective: 'Haltung', blueprint_content: 'Nulltoleranz.' },
        talking_points: { id: 'talking_points', label: 'Points', target_audience: 'Führung', psychological_objective: 'Verantwortung', blueprint_content: 'Durchgreifen.' },
        qa_brief: { id: 'qa_brief', label: 'Q&A', target_audience: 'Desk', psychological_objective: 'Fakten', blueprint_content: 'Audit läuft.' }
      }
    },
    rlt_access_debate: {
      scenario_id: 'rlt_access_debate',
      corpus_gate: {
        raw_enterprise_files: 920000,
        active_governed_records: 14200,
        canonical_golden_sources: 36,
        legacy_conflicts_flagged: 5,
        conflict_details: [
          {
            vault_location: 'Veeva MedComms / UK Access Archiv',
            document_title: 'NICE_Einreichung_Entwurf_2024.docx',
            conflict_reason: 'Entwurf nutzte alte Kostenmodelle, die Einsparungen bei Notfalleinweisungen nicht berücksichtigten.',
            action_required: 'Ersetzt durch Präzisionsonkologie-Nutzenmodell GS-03.'
          }
        ]
      },
      global_core_thesis: 'ONCO-104 verdoppelt nachweislich das progressionsfreie Überleben bei Onkologie vor Chemotherapie. Wir arbeiten eng mit europäischen Behörden und dem britischen NICE an wertbasierten Erstattungsmodellen, die Spitalentlastungen berücksichtigen.',
      global_proof_points: [
        'ONCO-01 belegt statistisch signifikante Verdopplung des rPFS (HR 0.41, p<0.001).',
        'US-FDA-Zulassung bestätigt hervorragendes Nutzen-Risiko-Profil vor belastender Chemotherapie.',
        'Spezialisierte Präzisionsonkologie-Produktionszentren sichern lückenlose weltweite Versorgung.'
      ],
      global_guardrails: [
        'NICHT zulassen, dass die britische NICE-Kostenablehnung mit klinischem Unvermögen gleichgesetzt wird.',
        'NICHT zulassen, dass der prozedurale EMA-Rückzug als Sicherheits- oder Wirksamkeitsmangel dargestellt wird.'
      ],
      regional_adaptations: {
        all: {
          region_id: 'all',
          region_label: 'Gesamtverkehr (Alle Regionen)',
          regulatory_anchor: 'ONCO-01-Protokoll & Klinische Präzisionsonkologie-Übersicht',
          regional_lead_frame: 'Meilenstein der Präzisionsonkologie für Patienten vor Chemotherapie.',
          blueprints: {
            hintergrund: { id: 'hintergrund', label: 'Wissenschaftliches Dossier', target_audience: 'Fachmedien', psychological_objective: 'rPFS-Verdopplung verankern.', blueprint_content: 'ONCO-01 bestätigt Verdopplung des progressionsfreien Überlebens.' },
            social: { id: 'social', label: 'Patientenkanäle', target_audience: 'Patienten', psychological_objective: 'Zuversicht.', blueprint_content: 'Fortschritt bei zielgerichteter zielgerichtete Krebstherapie gegen Onkologie.' },
            talking_points: { id: 'talking_points', label: 'Sprecherpunkte', target_audience: 'Medienstelle', psychological_objective: 'Klinische Klarheit.', blueprint_content: 'rPFS-Vorteil und Lebensqualität in den Vordergrund stellen.' },
            qa_brief: { id: 'qa_brief', label: 'Q&A Leitfaden', target_audience: 'Kommunikation', psychological_objective: 'Fakten.', blueprint_content: 'NICE bewertete Kostenschwellen, nicht die biologische Wirksamkeit.' }
          }
        },
        us: {
          region_id: 'us',
          region_label: 'Nordamerika (USA / FDA & Kassen)',
          regulatory_anchor: 'US FDA Fachinformation',
          regional_lead_frame: 'Breite Verfügbarkeit und Kostendeckung an spezialisierten Zentren.',
          blueprints: {
            hintergrund: { id: 'hintergrund', label: 'US Klinisches Dossier', target_audience: 'US-Medien', psychological_objective: 'Erstattung sichern.', blueprint_content: 'FDA erteilt Zulassung vor Chemotherapie.' },
            social: { id: 'social', label: 'US Patienteninformation', target_audience: 'Verbände', psychological_objective: 'Begleitung.', blueprint_content: 'Erweiterter Zugang zu zielgerichteter Krebstherapie.' },
            talking_points: { id: 'talking_points', label: 'Kassen-Talking Points', target_audience: 'Access-Teams', psychological_objective: 'Wertbeleg.', blueprint_content: 'Vermeidet teure Akutaufenthalte und Notfallbehandlungen.' },
            qa_brief: { id: 'qa_brief', label: 'US Q&A', target_audience: 'Hotline', psychological_objective: 'Sicherheit.', blueprint_content: 'Kostenübernahme durch US-Kassen läuft planmässig.' }
          }
        },
        eu: {
          region_id: 'eu',
          region_label: 'Europa (EU / EMA & HTA)',
          regulatory_anchor: 'Europäische HTA-Zusammenarbeit',
          regional_lead_frame: 'Konstruktive Partnerschaft zur Überwindung gesundheitsökonomischer Hürden.',
          blueprints: {
            hintergrund: { id: 'hintergrund', label: 'Europäisches HTA-Briefing', target_audience: 'Ökonomen', psychological_objective: 'Kosten von Evidenz trennen.', blueprint_content: 'Klinische Wirksamkeit ist unbestritten; Preisdialoge laufen.' },
            social: { id: 'social', label: 'EU Affiliate Kommunikation', target_audience: 'Fachkreise', psychological_objective: 'Vertrauen.', blueprint_content: 'Einsatz für nachhaltige Versorgungslösungen in Europa.' },
            talking_points: { id: 'talking_points', label: 'Punkte für EU-Sprecher', target_audience: 'Länderteams', psychological_objective: 'Einheitlichkeit.', blueprint_content: 'Wirtschaftliche HTA-Schwellenwerte klar von Wirksamkeitsdaten trennen.' },
            qa_brief: { id: 'qa_brief', label: 'HTA Q&A', target_audience: 'Verhandlungsteams', psychological_objective: 'Präzision.', blueprint_content: 'Flexible Erstattungsmodelle werden aktiv angeboten.' }
          }
        },
        ch: {
          region_id: 'ch',
          region_label: 'Schweiz (Swissmedic & Nuklearmedizin)',
          regulatory_anchor: 'Swissmedic & Spezialitätenliste',
          regional_lead_frame: 'Stärkung nuklearmedizinischer Zentren und sichere Versorgung in der Schweiz.',
          blueprints: {
            hintergrund: { id: 'hintergrund', label: 'Schweizer Fachdossier', target_audience: 'Fachmedien', psychological_objective: 'Zentrumsversorgung stärken.', blueprint_content: 'Ausbau der Spitalinfrastruktur für Präzisionsonkologie.' },
            social: { id: 'social', label: 'Konzernsitz Social Media', target_audience: 'Fachpublikum', psychological_objective: 'Fakten.', blueprint_content: 'Präzisions-Präzisionsonkologie an Schweizer Unispitälern im Einsatz.' },
            talking_points: { id: 'talking_points', label: 'Sprecherpunkte Schweiz', target_audience: 'Sprecher', psychological_objective: 'Klarheit.', blueprint_content: 'Verlässliche Partnerschaft mit Schweizer Zentren und Spitälern.' },
            qa_brief: { id: 'qa_brief', label: 'Q&A Schweiz', target_audience: 'Medienteam', psychological_objective: 'Vergütung.', blueprint_content: 'Erstattung erfolgt über etablierte Listenmechanismen.' }
          }
        },
        apac: {
          region_id: 'apac',
          region_label: 'Asien-Pazifik (APAC / PMDA)',
          regulatory_anchor: 'Regionale Zulassungen',
          regional_lead_frame: 'Vorbereitung nuklearmedizinischer Zentren in der Region.',
          blueprints: {
            hintergrund: { id: 'hintergrund', label: 'APAC Briefing', target_audience: 'Fachpresse', psychological_objective: 'Fortschritt.', blueprint_content: 'Lokale Zulassungsvorbereitungen schreiten planmässig voran.' },
            social: { id: 'social', label: 'Patienteninfo APAC', target_audience: 'Öffentlichkeit', psychological_objective: 'Orientierung.', blueprint_content: 'Aufbau von Präzisionsonkologie-Kapazitäten im asiatisch-pazifischen Raum.' },
            talking_points: { id: 'talking_points', label: 'Talking Points', target_audience: 'Direktoren', psychological_objective: 'Fokus.', blueprint_content: 'Globale Studiendaten belegen klaren Überlebensvorteil.' },
            qa_brief: { id: 'qa_brief', label: 'Q&A APAC', target_audience: 'Hotlines', psychological_objective: 'Antworten.', blueprint_content: 'Zulassungsprozesse verlaufen in enger Abstimmung mit den Behörden.' }
          }
        }
      },
      cards: [],
      blueprints: {
        hintergrund: { id: 'hintergrund', label: 'Dossier', target_audience: 'Presse', psychological_objective: 'Fakten', blueprint_content: 'Studiendaten.' },
        social: { id: 'social', label: 'Social', target_audience: 'Patienten', psychological_objective: 'Zuversicht', blueprint_content: 'Therapiezugang.' },
        talking_points: { id: 'talking_points', label: 'Points', target_audience: 'Sprecher', psychological_objective: 'Klarheit', blueprint_content: 'rPFS-Vorteil.' },
        qa_brief: { id: 'qa_brief', label: 'Q&A', target_audience: 'Medienteam', psychological_objective: 'Antworten', blueprint_content: 'NICE-Bewertung.' }
      }
    },
    health_data_breach: {
      scenario_id: 'health_data_breach',
      corpus_gate: {
        raw_enterprise_files: 520000,
        active_governed_records: 6200,
        canonical_golden_sources: 14,
        legacy_conflicts_flagged: 1,
        conflict_details: [
          {
            vault_location: 'IT-Sicherheit / Cloud Governance Handbuch',
            document_title: 'Cloud_Architektur_Datenschutz_Briefing_2024.pdf',
            conflict_reason: 'Beschreibt Standardverschlüsselung ohne explizite BYOK-Schlüsselsouveränität.',
            action_required: 'Gesperrt; ersetzt durch SEC-CRYPTO §1.'
          }
        ]
      },
      global_core_thesis: 'Patientendaten in der Cloud sind mathematisch unlesbar; die Schlüssel verbleiben zu 100% in Schweizer Staatsgewalt unter direkter Aufsicht.',
      global_proof_points: [
        'Bring-Your-Own-Key (BYOK) Architektur garantiert inländische Schlüsselgewalt.',
        'Null Entschlüsselungsmöglichkeit für Cloudanbieter oder ausländische Staaten.',
        'Ärztliches Berufsgeheimnis wird durch mathematische Kryptografie lückenlos gewahrt.'
      ],
      global_guardrails: [
        'KEINE endlosen juristischen Zuständigkeitsdebatten führen; stattdessen auf die Tresor-Analogie fokussieren.',
        'Keine defensive Fachsprache verwenden.'
      ],
      regional_adaptations: {
        all: {
          region_id: 'all',
          region_label: 'Nationale Gesundheitssouveränität',
          regulatory_anchor: 'EPD-Gesetz & Bundesdatenschutzgesetz (DSG)',
          regional_lead_frame: 'Kryptografische Schlüsselsouveränität laientauglich erklären.',
          blueprints: {
            hintergrund: {
              id: 'hintergrund',
              label: 'Kryptografie-Briefing',
              target_audience: 'Medizin- & IT-Fachpresse',
              psychological_objective: 'BYOK erklären und Vertrauen stiften.',
              blueprint_content: `### 01. KRYPTOGRAFISCHE DATENTRENNUNG
Gesundheitsdaten in der Cloud werden mit AES-256 Umschlagverschlüsselung mathematisch versiegelt.

### 02. SOUVERÄNE SCHLÜSSELVERWALTUNG (BYOK)
- **Inländische Schlüsselgewalt:** Die Schlüssel werden ausschliesslich in staatlich beaufsichtigten Schweizer Hardware-Sicherheitsmodulen (HSM) verwahrt.
- **Keine Leserechte für Cloudbetreiber:** Cloudanbieter speichern lediglich unlesbaren Ciphertext. Selbst bei ausländischen Herausgabeverlangen besitzt der Betreiber keine technischen Mittel zur Entschlüsselung.

### 03. ÄRZTLICHES BERUFSGEHEIMNIS
Das Berufsgeheimnis nach Art. 321 StGB bleibt unangetastet; Schlüssel verlassen die Schweiz zu keinem Zeitpunkt.`
            },
            social: {
              id: 'social',
              label: 'Bürger- & Patienteninformation',
              target_audience: 'Bürger & Patientenverbände',
              psychological_objective: 'Verlässliche Beruhigung zur Datensicherheit.',
              blueprint_content: `Patientendatenschutz & Souveräne Cloud:
• Gesundheitsdaten in der Cloud sind mit AES-256 verschlüsselt und ohne Schlüssel vollkommen unlesbar.
• Alle kryptografischen Schlüssel verbleiben zu 100% in Schweizer Staatsgewalt.
• Weder Cloudanbieter noch ausländische Behörden können Patientendossiers öffnen.
• Tresor-Schlüssel-Prinzip: Die Cloud stellt den Tresorraum – die Schlüssel liegen ausschliesslich in unserer Hand.`
            },
            talking_points: {
              id: 'talking_points',
              label: 'Talking Points Gesundheitswesen',
              target_audience: 'Mediensprecher & Gesundheitsdirektionen',
              psychological_objective: 'Vertrauen durch bildhafte Sprache festigen.',
              blueprint_content: `### KERNBOTSCHAFTEN FÜR SPRECHER
- "Gesundheitsdaten in der Cloud sind mathematisch unlesbar ohne Schlüssel, die zu 100% in der Schweiz liegen."
- "Das Tresor-Prinzip gilt: Der Cloudbetreiber stellt den Panzerschrank, aber nur Schweizer Stellen halten den Schlüssel."
- "Ausländische Behörden erhalten selbst mit Herausgabeverlangen nur unlesbaren Zahlensalat."`
            },
            qa_brief: {
              id: 'qa_brief',
              label: 'Hotline Q&A',
              target_audience: 'Bürger-Hotline & Medienstelle',
              psychological_objective: 'Präzise und verständliche Auskunft.',
              blueprint_content: `**Q: Können ausländische Geheimdienste über den US CLOUD Act auf Patientendaten zugreifen?**
A: Nein. Der CLOUD Act verpflichtet Unternehmen nur zur Herausgabe von Daten in ihrem Besitz. Da der Cloudbetreiber nur verschlüsselte Datenblöcke ohne die inländischen Schlüssel besitzt, erhielte er lediglich mathematischen Zahlensalat.

**Q: Gefährdet die Cloud das Arztgeheimnis?**
A: Nein. Durch die strikte kryptografische Trennung bleibt das Patientengeheimnis unter Schweizer Recht vollständig gewahrt.`
            }
          }
        },
        us: {
          region_id: 'us',
          region_label: 'Nordamerika (Tech-Standards & Enterprise Security)',
          regulatory_anchor: 'HIPAA Security Rules & FIPS 140-3 Validierung',
          regional_lead_frame: 'Standard-BYOK und kryptografische Validierung.',
          blueprints: {
            hintergrund: {
              id: 'hintergrund',
              label: 'Tech-Briefing',
              target_audience: 'IT-Sicherheitspresse & Cloud-Architekten',
              psychological_objective: 'Sicherheitsarchitektur nachweisen.',
              blueprint_content: `### TECHNISCHE SPEZIFIKATION: SOUVERÄNE BYOK-ARCHITEKTUR
- **Schlüsselverwaltung:** Dual-Control KMS-Architektur mit FIPS 140-3 Level 4 Hardware-Sicherheitsmodulen.
- **Infrastrukturgrenze:** Der Cloudanbieter agiert als reine Speicherschicht ohne Entschlüsselungsbefugnis.
- **Konformität:** Erfüllt sämtliche Kriterien von HIPAA und ISO 27001 bezüglich Datenisolation.`
            },
            social: {
              id: 'social',
              label: 'Tech-Mitteilung',
              target_audience: 'Enterprise IT Fachkreise',
              psychological_objective: 'Glaubwürdigkeit.',
              blueprint_content: `Technisches Update zur Gesundheitscloud: Bring-Your-Own-Key (BYOK) Trennung garantiert kryptografische Isolation aller Patientendossiers.`
            },
            talking_points: {
              id: 'talking_points',
              label: 'Tech-Punkte',
              target_audience: 'IT-Sprecher',
              psychological_objective: 'Faktenbasierte Klarheit.',
              blueprint_content: `- "Wir setzen auf bewährte kryptografische Industriestandards, die jeden unbefugten Einblick ausschliessen."
- "Hyperscaler liefern Ausfallsicherheit, während die Schlüsselhoheit souverän bleibt."`
            },
            qa_brief: {
              id: 'qa_brief',
              label: 'Tech Q&A',
              target_audience: 'IT-Presse Desk',
              psychological_objective: 'Präzision.',
              blueprint_content: `**Q: Ist BYOK im globalen Gesundheitswesen Standard?**
A: Ja, es ist der anerkannte Goldstandard für sensible Anwendungen der öffentlichen Hand mit strikter Datenhoheit.`
            }
          }
        },
        eu: {
          region_id: 'eu',
          region_label: 'Europa (DSGVO & EHDS-Datensouveränität)',
          regulatory_anchor: 'European Health Data Space & DSGVO Art. 48',
          regional_lead_frame: 'Schweizer Souveränitätsmodell als Vorbild.',
          blueprints: {
            hintergrund: {
              id: 'hintergrund',
              label: 'DSGVO-Dossier',
              target_audience: 'Europäische Datenschutzredaktionen & DPOs',
              psychological_objective: 'Modellcharakter herausstellen.',
              blueprint_content: `### EUROPEAN HEALTH DATA SPACE PRIVACY BRIEFING
- **DSGVO Art. 48 Schutzwall:** Inländische Schlüsselgewalt schafft eine unüberwindbare technische Hürde gegen ausländische Datenherausgabe.
- **Europäisches Referenzmodell:** Datenschutzbehörden betrachten die Schweizer BYOK-Architektur als Best Practice für vertrauenswürdige Gesundheitsclouds.
- **Audit-Protokolle:** Sämtliche Schlüsselzugriffe werden unveränderbar in inländischen Audit-Logs protokolliert.`
            },
            social: {
              id: 'social',
              label: 'EU-Privacy Post',
              target_audience: 'Datenschutzexperten & Fachorganisationen',
              psychological_objective: 'Konformität belegen.',
              blueprint_content: `Datensouveränität in der Praxis: Souveräne Schlüsselkontrolle garantiert, dass sensible Gesundheitsdaten vor transnationalem Fremdzugriff geschützt bleiben.`
            },
            talking_points: {
              id: 'talking_points',
              label: 'Punkte für Europa-Sprecher',
              target_audience: 'Medienteam Europa',
              psychological_objective: 'Führungsrolle untermauern.',
              blueprint_content: `- "Unsere Architektur entspricht den strengsten Auslegungen europäischer digitaler Souveränität."
- "Mathematische Schlüsseltrennung ist der wirksamste Schutz vor extraterritorialen Zugriffen."`
            },
            qa_brief: {
              id: 'qa_brief',
              label: 'EU Desk Q&A',
              target_audience: 'Medienstelle Europa',
              psychological_objective: 'DSGVO-Sicherheit vermitteln.',
              blueprint_content: `**Q: Genügt dieses Modell den Vorgaben für internationale Datentransfers?**
A: Ja. Da die Schlüssel die inländische Hoheitsgewalt nie verlassen, erfüllen die technischen Massnahmen die EDPB-Anforderungen vollständig.`
            }
          }
        },
        ch: {
          region_id: 'ch',
          region_label: 'Schweiz (Ärzteschaft & Patientenvertrauen)',
          regulatory_anchor: 'EDÖB & EPD-Gesetzgebung (Art. 321 StGB Berufsgeheimnis)',
          regional_lead_frame: 'Ärztliches Vertrauen und Bürgerakzeptanz sichern.',
          blueprints: {
            hintergrund: {
              id: 'hintergrund',
              label: 'Ärzte-Briefing',
              target_audience: 'Schweizerische Ärztezeitung & FMH',
              psychological_objective: 'Berufsgeheimnis lückenlos belegen.',
              blueprint_content: `### FACHBRIEFING FÜR DIE SCHWEIZER ÄRZTESCHAFT
- **Berufsgeheimnis Art. 321 StGB:** Das ärztliche Berufsgeheimnis wird durch kryptografische Schlüsselsouveränität lückenlos geschützt.
- **Schlüsselgewalt:** Die kryptografischen Schlüssel verbleiben zu 100% in der Schweiz in inländischen Rechenzentren unter staatlicher Aufsicht.
- **Unabhängige Auditierung:** Schweizer Hochschulen und akkreditierte Sicherheitsexperten haben den Quellcode und die Schlüsselarchitektur unabhängig geprüft und zertifiziert.`
            },
            social: {
              id: 'social',
              label: 'Bürgerinformation',
              target_audience: 'Schweizer Bevölkerung & Patienten',
              psychological_objective: 'Beruhigung und Vertrauen.',
              blueprint_content: `Wichtige Information zum elektronischen Patientendossier:
• Ihre Gesundheitsdaten sind in der Cloud wie in einem Panzerschrank verwahrt.
• Die Schlüssel dazu verbleiben zu 100% in der Schweiz.
• Weder ausländische Behörden noch Cloudbetreiber können die Daten entschlüsseln.
• Ärztliche Schweigepflicht bleibt vollumfänglich geschützt.`
            },
            talking_points: {
              id: 'talking_points',
              label: 'Sprecherpunkte Schweiz',
              target_audience: 'Medienteam Bern/Zürich',
              psychological_objective: 'Vertrauen durch bildhafte Sprache schaffen.',
              blueprint_content: `- "Für unsere Ärzteschaft gilt: Das Berufsgeheimnis ist nicht verhandelbar und wird durch modernste Kryptografie garantiert."
- "Ausländische Behörden erhalten selbst mit Herausgabeverlangen nur unlesbaren Zahlensalat."
- "Die Schweiz behält jederzeit die volle digitale Souveränität über ihre Gesundheitsdaten."`
            },
            qa_brief: {
              id: 'qa_brief',
              label: 'Q&A Medienstelle Schweiz',
              target_audience: 'Bürger-Hotline & Medienteam',
              psychological_objective: 'Klarheit vermitteln.',
              blueprint_content: `**Q: Warum nutzt man überhaupt Cloud-Server statt lokaler Schweizer Server?**
A: Lokale Server bieten oft nicht die Ausfallsicherheit und den Schutz vor Ransomware, den zertifizierte Rechenzentren garantieren. Durch die BYOK-Schlüsseltrennung verbinden wir Spitzen-Resilienz mit 100% inländischer Datenhoheit.`
            }
          }
        },
        apac: {
          region_id: 'apac',
          region_label: 'Asien-Pazifik (Digitale Gesundheitssysteme)',
          regulatory_anchor: 'Regionale Cyber-Health Vorgaben',
          regional_lead_frame: 'Allgemeine Architektur- und Datensicherheitsinformation.',
          blueprints: {
            hintergrund: {
              id: 'hintergrund',
              label: 'Briefing Gesundheitssysteme',
              target_audience: 'Regionale Health-Tech Presse',
              psychological_objective: 'Architekturüberblick vermitteln.',
              blueprint_content: `### DIGITALE GESUNDHEITSDATEN-GOVERNANCE
- **Integritätsstandards:** Souveräne Schlüsselverwaltungsprotokolle sichern alle digitalen Patientenregister.
- **Schutz vor Zugriff:** Permanente kryptografische Verifikation verhindert unbefugte Datenmanipulation oder transozeanischen Zugriff.`
            },
            social: {
              id: 'social',
              label: 'Mitteilung',
              target_audience: 'Branchenkreise APAC',
              psychological_objective: 'Sachliche Information.',
              blueprint_content: `Digitale Gesundheitssicherheit: Höchste kryptografische Standards garantieren die Vertraulichkeit von Patientendaten.`
            },
            talking_points: {
              id: 'talking_points',
              label: 'Punkte für Sprecher',
              target_audience: 'Regionale Sprecher',
              psychological_objective: 'Fakten betonen.',
              blueprint_content: `- "Souveräne Schlüsselgewalt ist die internationale Best Practice für digitale Gesundheitssysteme."
- "Datenschutz beruht auf mathematischen Gesetzen, nicht auf Absichtserklärungen."`
            },
            qa_brief: {
              id: 'qa_brief',
              label: 'Q&A APAC',
              target_audience: 'Medienstelle',
              psychological_objective: 'Präzise Antworten.',
              blueprint_content: `**Q: Wie schützt die Architektur Patientendaten?**
A: Indem Datendateien mathematisch versiegelt werden, bevor sie Speicherserver berühren.`
            }
          }
        }
      },
      cards: [],
      blueprints: {
        hintergrund: { id: 'hintergrund', label: 'Dossier', target_audience: 'Presse', psychological_objective: 'Sicherheit', blueprint_content: 'BYOK-Souveränität.' },
        social: { id: 'social', label: 'Social', target_audience: 'Bürger', psychological_objective: 'Datenschutz', blueprint_content: 'Verschlüsselt.' },
        talking_points: { id: 'talking_points', label: 'Points', target_audience: 'Sprecher', psychological_objective: 'Vertrauen', blueprint_content: 'Inländische Schlüssel.' },
        qa_brief: { id: 'qa_brief', label: 'Q&A', target_audience: 'Hotline', psychological_objective: 'Klarheit', blueprint_content: 'Kein Fremdzugriff.' }
      }
    }
  }
};

export const getTrendingData = (lang: Language, scenarioId: string): TrendingScenarioData => {
  const langData = TRENDING_FIXTURES[lang] || TRENDING_FIXTURES.en;
  return langData[scenarioId] || langData.oncology_trial_update || langData.alpine_transit_crisis;
};
