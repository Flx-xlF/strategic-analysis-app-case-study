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
  raw_enterprise_files: number; // 1,420,000
  active_governed_records: number; // 18,400
  canonical_golden_sources: number; // 42
  legacy_conflicts_flagged: number; // 14
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
        raw_enterprise_files: 1420000,
        active_governed_records: 18400,
        canonical_golden_sources: 42,
        legacy_conflicts_flagged: 7,
        conflict_details: [
          {
            vault_location: 'Veeva Vault / European Commercial Access Archive',
            document_title: 'EU_Launch_Sequencing_Strategy_Deck_2023_v4.pptx',
            conflict_reason: 'Document still specifies unconditional simultaneous European launches, contradicting the 2026 MFN Launch Sequencing Policy (GS-01) where artificial price suppression in reference baskets can jeopardize global pricing.',
            action_required: 'Locked & deprecated; replaced by Canonical Golden Source GS-01.'
          },
          {
            vault_location: 'SharePoint / Swiss Public Affairs Working Vault',
            document_title: 'Draft_Response_BAG_Cost_Containment_Packages.docx',
            conflict_reason: 'Draft contained aggressive wording ("withholding future medicines from Swiss patients"), which violates Corporate Communications guardrails against soundbites that trigger boycott allegations.',
            action_required: 'Archived; replaced with constructive dialogue framework in GS-02/GS-03.'
          }
        ]
      },
      global_core_thesis: "Sustainable innovation requires health systems across wealthy OECD nations to reward clinical value. Our $23B investment localizes U.S. manufacturing across 10 facilities while Basel remains the company's corporate and research headquarters; we actively engage European and Swiss authorities on modernized access frameworks without compromising patient care.",
      global_proof_points: [
        'GS-01: Reinvestment in breakthrough therapies requires high-income nations to value true clinical benefit fairly.',
        'GS-02: $23B U.S. capex localizes supply against geopolitical tariffs; global corporate headquarters remains permanently in Basel.',
        'GS-03: Active collaboration with Swiss BAG and European HTA bodies on flexible value-based pricing, with zero patient boycotts.',
        'Supply continuity: Compassionate use, clinical trials, and regulatory filings proceed on schedule globally.'
      ],
      global_guardrails: [
        'NEVER use phrasing suggesting the company is "punishing", "boycotting", or "withholding therapies" from European or Swiss patients.',
        'DO NOT allow media to frame the $23B U.S. manufacturing investment as an exit from or downsizing of Basel.',
        'DO NOT debate individual national rebate percentages in press statements before health authority determinations.'
      ],
      regional_adaptations: {
        all: {
          region_id: 'all',
          region_label: 'Global (All Regions)',
          regulatory_anchor: 'Global Core Label & Clinical Trial Protocol CSR-701',
          regional_lead_frame: 'Pivotal Phase III milestone establishing new standard-of-care survival baseline.',
          blueprints: {
            hintergrund: {
              id: 'hintergrund',
              label: 'Global Science Background Dossier',
              target_audience: 'International Life-Science & Business Press',
              psychological_objective: 'Establish definitive primary survival evidence and decouple exploratory subgroups.',
              blueprint_content: `### 01. PRIMARY CLINICAL ENDPOINT
Pivotal Phase III trial data for Onco-701 confirms a statistically significant overall survival improvement (HR 0.68, p<0.001) across the broad patient cohort.

### 02. EXPLORATORY SUBGROUP STATISTICAL CONTEXT
- **Cohort B Design:** Represented 18% of the study cohort. Under the pre-approved Statistical Analysis Plan (SAP), exploratory subgroups were not powered for standalone significance.
- **Directional Trend:** Clinical trajectory remained positive and directionally consistent with the primary study outcome.
- **Patient Safety:** Zero new toxicity signals observed.`
            },
            social: {
              id: 'social',
              label: 'Corporate Social & Patient Continuity',
              target_audience: 'Patient Advocacy & Professional Community',
              psychological_objective: 'Clear reassurance on safe treatment continuity.',
              blueprint_content: `Important milestone in oncology care: Pivotal Phase III data for Onco-701 demonstrates a statistically significant survival advantage for patients. 🔬
To our patient community:
• Overall clinical efficacy and safety confirmed.
• Ongoing patient regimens remain safe and active.
• Regulatory submissions proceed on schedule worldwide.`
            },
            talking_points: {
              id: 'talking_points',
              label: 'Executive & Spokesperson Talking Points',
              target_audience: 'C-Suite & Global Media Spokespersons',
              psychological_objective: 'Lead interviews with primary survival extension and shut down speculative framing.',
              blueprint_content: `### KEY MESSAGES
- "The primary endpoint of this trial is unambiguous: patients lived significantly longer on Onco-701."
- "Subgroup analyses generate hypotheses; they do not alter the proven overall survival benefit."
- "Regulatory filings proceed as planned with FDA, EMA, and health authorities globally."`
            },
            qa_brief: {
              id: 'qa_brief',
              label: 'Global Q&A Field Guide',
              target_audience: 'Affiliate Comms & Media Desk',
              psychological_objective: 'Tactical defensibility during embargoed press briefings.',
              blueprint_content: `**Q: Did the drug fail in Cohort B?**
A: No. The trial met its primary survival endpoint with high significance. Exploratory subgroups are not designed for independent statistical hurdles.`
            }
          }
        },
        us: {
          region_id: 'us',
          region_label: 'North America (US / FDA & Payers)',
          regulatory_anchor: 'US FDA NDA Filing & PBM Formulary Evidence Dossier',
          regional_lead_frame: 'Demonstrating holistic clinical value and overall survival to counter payer subgroup pricing pressure.',
          blueprints: {
            hintergrund: {
              id: 'hintergrund',
              label: 'US Health Economics & Trade Dossier',
              target_audience: 'US Healthcare Policy & Payer Press',
              psychological_objective: 'Rebut private insurer attempts to carve out Cohort B from formulary coverage.',
              blueprint_content: `### 01. CLINICAL VALUE IN US ONCOLOGY CARE
Onco-701 delivers statistically significant overall survival (HR 0.68, p<0.001) in an area of high unmet need. 

### 02. REBUTTING FORMULARY CARVE-OUTS
Restricting reimbursement based on exploratory subgroup analyses would contradict FDA evidence standards and deprive eligible patients of proven survival gains.`
            },
            social: {
              id: 'social',
              label: 'US Patient Advocacy Voice',
              target_audience: 'US Cancer Support Coalitions & Advocacy Leads',
              psychological_objective: 'Prevent patient panic regarding commercial insurance coverage.',
              blueprint_content: `We stand with cancer patients across the United States. Today's Phase III readout proves that Onco-701 significantly extends overall survival. We are committed to working with Medicare and commercial insurers to ensure broad patient access upon approval.`
            },
            talking_points: {
              id: 'talking_points',
              label: 'US Payer & PBM Talking Points',
              target_audience: 'US Commercial Leadership & Health-Policy Spokespersons',
              psychological_objective: 'Keep price discussions anchored to holistic survival data rather than exploratory metrics.',
              blueprint_content: `### KEY MESSAGES FOR US MEDIA
- "Overall survival is the gold standard for clinical value in oncology."
- "The ITT population showed consistent survival benefits across all baseline demographics."
- "We look forward to an evidence-based review with the US FDA and commercial formulary committees."`
            },
            qa_brief: {
              id: 'qa_brief',
              label: 'US Commercial Q&A',
              target_audience: 'US Managed Care Liaisons',
              psychological_objective: 'Direct rebuttal of PBM restriction queries.',
              blueprint_content: `**Q: Will insurers be justified in excluding Cohort B?**
A: Clinical evidence demonstrates that exploratory subgroups mirrored overall survival benefits. Formulary restrictions would arbitrarily limit access to proven therapy.`
            }
          }
        },
        eu: {
          region_id: 'eu',
          region_label: 'Europe (EU / EMA & HTA Bodies)',
          regulatory_anchor: 'EMA MAA Dossier & Joint HTA Assessment',
          regional_lead_frame: 'Ensuring European HTA bodies assess the intention-to-treat evidence holistically.',
          blueprints: {
            hintergrund: {
              id: 'hintergrund',
              label: 'European HTA Scientific Briefing',
              target_audience: 'European Medical Journals & Health Economic Reviewers',
              psychological_objective: 'Establish methodological integrity of the pre-specified Statistical Analysis Plan.',
              blueprint_content: `### 01. STATISTICAL DESIGN & ITT ROBUSTNESS
The study met its primary survival endpoint with high statistical rigor (HR 0.68, p<0.001). Under the pre-specified SAP approved by regulatory agencies, individual subgroups were exploratory.`
            },
            social: {
              id: 'social',
              label: 'European Affiliate Outreach',
              target_audience: 'European Oncologists & National Patient Groups',
              psychological_objective: 'Foster clinical confidence in upcoming EMA filing.',
              blueprint_content: `Advancing oncology care in Europe: Pivotal Phase III data for Onco-701 confirms a significant survival improvement. Centralized submission to the European Medicines Agency (EMA) is on schedule for Q1 2027.`
            },
            talking_points: {
              id: 'talking_points',
              label: 'European Spokesperson Points',
              target_audience: 'Affiliate Comms Directors in EU Member States',
              psychological_objective: 'Align national affiliate messaging with central Basel guidance.',
              blueprint_content: `### KEY MESSAGES FOR EUROPEAN PRESS
- "The primary survival endpoint was achieved with high statistical significance."
- "All national affiliate teams communicate strictly from the centralized canonical evidence pack."
- "We respect the European regulatory and HTA process and submit the full evidence dossier."`
            },
            qa_brief: {
              id: 'qa_brief',
              label: 'European HTA Q&A',
              target_audience: 'National Access Teams',
              psychological_objective: 'Defend against subgroup price discounts.',
              blueprint_content: `**Q: Will European HTA bodies demand price cuts due to Cohort B?**
A: HTA bodies evaluate overall survival gains. The clinical benefit across the intention-to-treat population provides robust justification for broad reimbursement.`
            }
          }
        },
        ch: {
          region_id: 'ch',
          region_label: 'Switzerland (HQ & Swissmedic)',
          regulatory_anchor: 'Swissmedic Authorization & Domestic Healthcare Ecosystem',
          regional_lead_frame: 'Positioning domestic R&D pipeline leadership and sovereign scientific rigor.',
          blueprints: {
            hintergrund: {
              id: 'hintergrund',
              label: 'Schweizer Wirtschafts- & Fachpresse Dossier',
              target_audience: 'NZZ, Le Temps, Finanz und Wirtschaft',
              psychological_objective: 'Verankerung der Innovationsführerschaft am Standort Schweiz.',
              blueprint_content: `### 01. F&E-MEILENSTEIN AM STANDORT SCHWEIZ
Die Phase-III-Studie für Onco-701 belegt einen signifikanten Überlebensvorteil für Krebspatienten weltweit. Die Einreichung bei Swissmedic erfolgt termingerecht.`
            },
            social: {
              id: 'social',
              label: 'Konzernsitz Social Media',
              target_audience: 'Schweizer Fachkreise & Life-Sciences-Community',
              psychological_objective: 'Faktenbasierte Zuversicht am Heimmarkt.',
              blueprint_content: `Erfolg für die Krebsforschung: Unsere weltweite Phase-III-Studie bestätigt einen signifikanten Überlebensvorteil. Die Zulassungsunterlagen für die Schweizer Behörden sind in Vorbereitung.`
            },
            talking_points: {
              id: 'talking_points',
              label: 'Talking Points Konzernsitz',
              target_audience: 'Konzernsprecher & Geschäftsleitung',
              psychological_objective: 'Souveräne und transparente Positionierung.',
              blueprint_content: `### KERNBOTSCHAFTEN FÜR DIE SCHWEIZ
- "Die Studie liefert klare wissenschaftliche Evidenz: Patienten leben länger."
- "Subgruppen-Varianzen sind in explorativen Analysen wissenschaftlicher Standard."
- "Wir reichen die Zulassungsdossiers wie geplant termingerecht ein."`
            },
            qa_brief: {
              id: 'qa_brief',
              label: 'Q&A Medienstelle Basel',
              target_audience: 'Medienteam Schweiz',
              psychological_objective: 'Schnelle Klärung von Rückfragen.',
              blueprint_content: `**Q: Wann ist das Medikament in der Schweiz verfügbar?**
A: Das Zulassungsverfahren bei Swissmedic wird parallel zu den globalen Behörden in Q1 2027 eingeleitet.`
            }
          }
        },
        apac: {
          region_id: 'apac',
          region_label: 'Asia-Pacific (APAC / PMDA & NMPA)',
          regulatory_anchor: 'Asian Bridging Studies & Regional Health Authorities',
          regional_lead_frame: 'Clarifying regional filing roadmaps and ongoing clinical trial accessibility.',
          blueprints: {
            hintergrund: {
              id: 'hintergrund',
              label: 'Asia-Pacific Regional Access Briefing',
              target_audience: 'Asian Healthcare & Medical Media',
              psychological_objective: 'Address information vacuum regarding Asian patient inclusion.',
              blueprint_content: `### 01. GLOBAL PHASE III RESULTS & ASIAN COHORTS
The Phase III study demonstrated consistent overall survival benefits across multi-regional clinical sites, including participating centers across the Asia-Pacific region.`
            },
            social: {
              id: 'social',
              label: 'Regional Patient Information',
              target_audience: 'Regional Patient Advocacy Groups',
              psychological_objective: 'Assurance on localized regulatory progression.',
              blueprint_content: `Advancing innovative oncology options across Asia-Pacific: Onco-701 Phase III results demonstrate verified survival extension. Local health authority submissions are advancing in alignment with regional requirements.`
            },
            talking_points: {
              id: 'talking_points',
              label: 'Regional Spokesperson Points',
              target_audience: 'APAC Regional Communications Directors',
              psychological_objective: 'Prevent proliferation of outdated Phase II data.',
              blueprint_content: `### KEY MESSAGES FOR ASIA-PACIFIC
- "Global trial data confirms survival improvements across diverse patient cohorts."
- "Local regulatory timelines are progressing in close consultation with regional health authorities."
- "We are committed to rapid and equitable patient access across Asia-Pacific."`
            },
            qa_brief: {
              id: 'qa_brief',
              label: 'APAC Access Q&A',
              target_audience: 'Regional Medical Hotlines',
              psychological_objective: 'Direct answers on regional availability.',
              blueprint_content: `**Q: Are regional bridging studies required?**
A: Global study protocols incorporated regional Asian clinical sites. Formal dossiers are being aligned with PMDA and regional agencies as scheduled.`
            }
          }
        }
      },
      cards: [
        {
          id: 'trend-o1',
          topic: 'Clinical Value & Reimbursement',
          headline: 'Health Economists Debate Cost-Effectiveness Following Subgroup Data',
          outlets_involved: ['Endpoints News', 'BioCentury', 'Financial Times'],
          velocity_change: '+340% (8h)',
          tipping_point_score: 86,
          sentiment_split: { positive: 15, neutral: 25, negative: 60 },
          summary: 'Medical trade press and analyst community dissect Cohort B exploratory findings, linking subgroup variance to upcoming health authority pricing reviews.'
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
        'State passenger safety facts before explaining maintenance repair timelines.'
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
              blueprint_content: `Cross-border transit advisory: EuroCity and freight trains between Zurich, Basel, and Milan are operating via the scenic mountain route during technical relay maintenance. Full base tunnel service resumes at 20:00 CET.`
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
          regulatory_anchor: 'BAV & Schweizer Bahnkunden',
          regional_lead_frame: 'Fahrgastinformation und planmässige Wiederinbetriebnahme.',
          blueprints: {
            hintergrund: {
              id: 'hintergrund',
              label: 'Hintergrundbericht',
              target_audience: 'Inlandspresse & Pendler-Medien',
              psychological_objective: 'Faktenbasierte Information über Relaisaustausch.',
              blueprint_content: `### MEDIENMITTEILUNG INFRASTRUKTUR & BETRIEB
- **Ausgangslage:** Ein elektrischer Defekt am Relais R-400 im Stellwerk Faido hat heute früh eine automatische Sicherheitsabschaltung ausgelöst.
- **Evakuation & Sicherheit:** Das Sicherheitskonzept hat planmässig gegriffen. Alle Personenzüge wurden innerhalb von 12 Minuten in Bahnhöfe zurückgeführt.
- **Instandstellung:** Das defekte Bauteil wurde ausgetauscht. Der fahrplanmässige Betrieb durch den Basistunnel wird um 20:00 Uhr wieder aufgenommen.`
            },
            social: {
              id: 'social',
              label: 'Pendler-Ticker',
              target_audience: 'Reisende & Pendler',
              psychological_objective: 'Reisealternativen aufzeigen.',
              blueprint_content: `Bahnverkehr Gotthard-Basistunnel:
• Wegen eines Relaisdefekts im Stellwerk Faido ist der Tunnel bis 20:00 Uhr gesperrt.
• Reisende nutzen die Gotthard-Panoramastrecke (Reisezeitverlängerung ca. 45-60 Min.).
• Alle Züge wurden sicher zurückgeführt. Sicherheit war zu jedem Zeitpunkt gewährleistet.
• Fahrplan in der Rail Mobile App aktualisiert.`
            },
            talking_points: {
              id: 'talking_points',
              label: 'Sprecher-Briefing',
              target_audience: 'Medienteam Schweiz',
              psychological_objective: 'Ruhe und Kompetenz vermitteln.',
              blueprint_content: `- "Die Sicherheit unserer Fahrgäste stand zu jedem Zeitpunkt an erster Stelle; die Sicherheitssysteme funktionierten einwandfrei."
- "Es handelt sich um einen rein mechanischen Relaisdefekt, der behoben ist."
- "Ab 20:00 Uhr rollt der Verkehr wieder normal durch den Basistunnel."`
            },
            qa_brief: {
              id: 'qa_brief',
              label: 'Q&A Medienstelle',
              target_audience: 'Medienstelle Schweiz',
              psychological_objective: 'Klare Fakten liefern.',
              blueprint_content: `**Q: Warum dauerte die Wiederinbetriebnahme mehrere Stunden?**
A: Nach dem physischen Austausch eines sicherheitsrelevanten Stellwerk-Relais schreiben die BAV-Vorschriften obligatorische Mess- und Testfahrten vor der Freigabe für Passagiere vor.`
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
        'Emphasize independent verification over internal company assertions.'
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
- **Prior Baseline:** The supplier had passed a certified SMETA social audit in December 2025. Today's review examines whether local management bypassed certified protocols.

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
          regulatory_anchor: 'VOSUG Sorgfaltspflichten & Schweizer OR Art. 964',
          regional_lead_frame: 'Verantwortung und lückenlose Transparenz.',
          blueprints: {
            hintergrund: {
              id: 'hintergrund',
              label: 'Dossier Lieferkettensorgfalt',
              target_audience: 'Wirtschaftspresse & Inlandredaktionen',
              psychological_objective: 'Sorgfalt lückenlos belegen.',
              blueprint_content: `### DOSSIER LIEFERKETTEN-SORGFALTSPFLICHT (VOSUG)
- **Schweizer Gesetzgebung:** Die eingeleiteten Massnahmen entsprechen den Vorgaben der Verordnung über Sorgfaltspflichten und Transparenz (VOSUG).
- **Vergabestopp:** Sämtliche Lieferbeziehungen mit dem betroffenen Subunternehmer wurden per sofort sistiert.
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
              label: 'Sprecherpunkte',
              target_audience: 'Mediensprecher Schweiz',
              psychological_objective: 'Klarheit und Verlässlichkeit.',
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
    pluvicto_access_debate: {
      scenario_id: 'pluvicto_access_debate',
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
            action_required: 'Superseded by Radioligand HEOR Model GS-03.'
          }
        ]
      },
      global_core_thesis: 'Lu-177 RLT is clinically proven to double radiographic progression-free survival in pre-chemotherapy prostate cancer. We are working constructively with European HTA bodies and UK NICE to align on value-based reimbursement frameworks that reflect acute hospitalization offsets.',
      global_proof_points: [
        'RLT-01 demonstrated a statistically significant doubling of rPFS (HR 0.41, p<0.001).',
        'FDA approval confirms strong clinical benefit-risk balance prior to toxic taxane chemotherapy.',
        'Dedicated radioligand manufacturing hubs in New Jersey and Indiana ensure unbroken global supply.'
      ],
      global_guardrails: [
        'DO NOT allow trade media to conflate UK NICE cost-per-QALY refusal with clinical failure.',
        'Clarify that EMA withdrawal was due to trial comparator design nuances, not clinical safety or efficacy.'
      ],
      regional_adaptations: {
        all: {
          region_id: 'all',
          region_label: 'Global (All Regions)',
          regulatory_anchor: 'RLT-01 Protocol & Radioligand Clinical Overview',
          regional_lead_frame: 'Pivotal precision oncology milestone moving radioligands to pre-chemotherapy patients.',
          blueprints: {
            hintergrund: { id: 'hintergrund', label: 'Global Science Briefing', target_audience: 'Medical Editors', psychological_objective: 'Anchor rPFS doubling.', blueprint_content: 'RLT-01 data confirms doubling of radiographic progression-free survival.' },
            social: { id: 'social', label: 'Patient Channel', target_audience: 'Patients', psychological_objective: 'Reassurance.', blueprint_content: 'Advancing precision radioligand therapy for men with advanced prostate cancer.' },
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
            social: { id: 'social', label: 'US Patient Voice', target_audience: 'Advocacy Groups', psychological_objective: 'Support.', blueprint_content: 'Expanding access to targeted prostate cancer therapy before chemotherapy.' },
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
          regulatory_anchor: 'Swissmedic Authorization & Specialities List (SL)',
          regional_lead_frame: 'Supporting university hospital infrastructure and patient access in Switzerland.',
          blueprints: {
            hintergrund: { id: 'hintergrund', label: 'Schweizer Fachpresse Dossier', target_audience: 'Medizinische Fachpresse', psychological_objective: 'Zentrumsversorgung sichern.', blueprint_content: 'Ausbau nuklearmedizinischer Behandlungskapazitäten an Schweizer Zentren.' },
            social: { id: 'social', label: 'Konzernsitz Social Media', target_audience: 'Fachkreise', psychological_objective: 'Information.', blueprint_content: 'Präzisions-Radioligandentherapie an Schweizer Spitälern verfügbar.' },
            talking_points: { id: 'talking_points', label: 'Talking Points Schweiz', target_audience: 'Sprecher', psychological_objective: 'Klarheit.', blueprint_content: 'Erfolgreiche Zusammenarbeit mit Schweizer Spitälern und Kassen.' },
            qa_brief: { id: 'qa_brief', label: 'Q&A Schweiz', target_audience: 'Medienteam', psychological_objective: 'Präzision.', blueprint_content: 'Vergütung erfolgt über die bewährten Schweizer Spezialitätenlisten-Mechanismen.' }
          }
        },
        apac: {
          region_id: 'apac',
          region_label: 'Asia-Pacific (APAC / PMDA & Regional Access)',
          regulatory_anchor: 'Regional Registration Dossiers',
          regional_lead_frame: 'Expanding radioligand center readiness across key regional markets.',
          blueprints: {
            hintergrund: { id: 'hintergrund', label: 'APAC Access Briefing', target_audience: 'Regional Press', psychological_objective: 'Progress.', blueprint_content: 'Bridging data and regional center readiness advancing as planned.' },
            social: { id: 'social', label: 'Regional Information', target_audience: 'Community', psychological_objective: 'Assurance.', blueprint_content: 'Partnering across Asia-Pacific to advance radioligand clinical infrastructure.' },
            talking_points: { id: 'talking_points', label: 'Regional Points', target_audience: 'Directors', psychological_objective: 'Focus.', blueprint_content: 'Global clinical results confirm meaningful progression-free survival extension.' },
            qa_brief: { id: 'qa_brief', label: 'APAC Q&A', target_audience: 'Hotlines', psychological_objective: 'Support.', blueprint_content: 'Local regulatory reviews are progressing in alignment with agency timelines.' }
          }
        }
      },
      cards: [],
      blueprints: {
        hintergrund: { id: 'hintergrund', label: 'Briefing', target_audience: 'Press', psychological_objective: 'Facts', blueprint_content: 'Radioligand trial results.' },
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
        'Avoid defensive legalese.'
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
          region_label: 'Schweiz (Ärzteschaft & Bürger)',
          regulatory_anchor: 'EDÖB & EPD-Gesetzgebung (Art. 321 StGB Berufsgeheimnis)',
          regional_lead_frame: 'Vertrauen bei Ärzten und Patienten stiften.',
          blueprints: {
            hintergrund: {
              id: 'hintergrund',
              label: 'Technischer Bericht',
              target_audience: 'Schweizerische Ärztezeitung & Fachmedien',
              psychological_objective: 'Berufsgeheimnis garantieren und Ärzte überzeugen.',
              blueprint_content: `### FACHBRIEFING FÜR DIE SCHWEIZER ÄRZTESCHAFT
- **Berufsgeheimnis Art. 321 StGB:** Das ärztliche Berufsgeheimnis wird durch kryptografische Schlüsselsouveränität lückenlos geschützt.
- **Schlüsselgewalt:** Die kryptografischen Schlüssel verbleiben zu 100% in der Schweiz in inländischen Rechenzentren unter direkter Aufsicht.
- **Unabhängige Auditierung:** Schweizer Hochschulen und akkreditierte Sicherheitsexperten haben den Quellcode und die Schlüsselarchitektur unabhängig auditiert und zertifiziert.`
            },
            social: {
              id: 'social',
              label: 'Bürgerinformation',
              target_audience: 'Patienten & Schweizer Bevölkerung',
              psychological_objective: 'Verlässliche Beruhigung.',
              blueprint_content: `Wichtige Information zum elektronischen Patientendossier:
• Ihre Gesundheitsdaten sind in der Cloud wie in einem Panzerschrank verwahrt.
• Die Schlüssel dazu verbleiben zu 100% in der Schweiz.
• Weder ausländische Behörden noch Cloudbetreiber können die Daten entschlüsseln.
• Vertrauen und ärztliche Schweigepflicht bleiben vollständig gewahrt.`
            },
            talking_points: {
              id: 'talking_points',
              label: 'Sprecherpunkte',
              target_audience: 'Medienteam & Direktion',
              psychological_objective: 'Vertrauen durch bildhafte Sprache schaffen.',
              blueprint_content: `- "Für unsere Ärzte und Patientinnen gilt: Das Berufsgeheimnis ist nicht verhandelbar und wird durch modernste Kryptografie garantiert."
- "Ausländische Behörden erhalten selbst mit Herausgabeverlangen nur unlesbaren Buchstabensalat."
- "Die Schweiz behält jederzeit die volle digitale Souveränität über ihre Gesundheitsdaten."`
            },
            qa_brief: {
              id: 'qa_brief',
              label: 'Hotline Q&A',
              target_audience: 'Bürger-Hotline & Medienstelle',
              psychological_objective: 'Klarheit und Sicherheit vermitteln.',
              blueprint_content: `**Q: Warum nutzt man überhaupt Cloud-Server statt lokaler Schweizer Server?**
A: Lokale inländische Server bieten oft nicht die Ausfallsicherheit und den Schutz vor Ransomware, den zertifizierte Rechenzentren garantieren. Durch die BYOK-Schlüsseltrennung kombinieren wir modernste Cyber-Resilienz mit 100% inländischer Datenhoheit.`
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
        raw_enterprise_files: 1420000,
        active_governed_records: 18400,
        canonical_golden_sources: 42,
        legacy_conflicts_flagged: 7,
        conflict_details: [
          {
            vault_location: 'Veeva Vault / Europäisches Marktzugangs-Archiv',
            document_title: 'EU_Launch_Sequencing_Strategy_Deck_2023_v4.pptx',
            conflict_reason: 'Dokument postuliert bedingungslose parallele Markteinführungen in Europa, was der 2026 MFN-Strategie (GS-01) widerspricht, bei der unbedachte Referenzpreise die globale Erstattung gefährden.',
            action_required: 'Gesperrt und archiviert; ersetzt durch Canonical Golden Source GS-01.'
          },
          {
            vault_location: 'SharePoint / Schweizer Public Affairs Arbeitsordner',
            document_title: 'Entwurf_BAG_Kostendaempfung_Stellungnahme.docx',
            conflict_reason: 'Entwurf enthielt konfrontative Drohungen ("Verzicht auf Einreichungen in der Schweiz"), was den Governance-Richtlinien gegen Boykott-Rhetorik widerspricht.',
            action_required: 'Archiviert; ersetzt durch das partnerschaftliche Dialogmodell in GS-02/GS-03.'
          }
        ]
      },
      global_core_thesis: 'Nachhaltige Spitzenforschung erfordert, dass OECD-Staaten den therapeutischen Nutzen fair anerkennen. Unsere 23-Mrd.-$-Investition baut die US-Produktion an 10 Standorten aus, während Basel unverändert der Konzernsitz und Forschungsstandort bleibt; wir suchen den aktiven Dialog mit europäischen Behörden und dem BAG für flexible Zugangsmodelle.',
      global_proof_points: [
        'GS-01: Reinvestitionen in Forschung setzen faire Erstattung in allen wohlhabenden Industriestaaten voraus.',
        'GS-02: 23 Mrd. $ US-Investition sichert Versorgung gegen Zölle; der weltweite Hauptsitz bleibt unerschütterlich in Basel.',
        'GS-03: Konstruktiver Austausch mit dem Schweizer BAG und europäischen HTA-Stellen zu wertbasierten Modellen ohne Boykotte.',
        'Versorgungssicherheit: Härtefallprogramme, Studien und Zulassungsverfahren laufen termingerecht weiter.'
      ],
      global_guardrails: [
        'NIEMALS Formulierungen verwenden, die suggerieren, the company wolle Patienten in Europa oder der Schweiz "bestrafen" oder "Medikamente vorenthalten".',
        'KEINE Berichterstattung unwidersprochen lassen, die den US-Produktionsausbau als Abkehr von Basel deutet.',
        'KEINE Vorwegnahme prozentualer Preisabschläge in Medienstatements vor behördlichen Abschlüssen.'
      ],
      regional_adaptations: {
        all: {
          region_id: 'all',
          region_label: 'Global (Alle Regionen)',
          regulatory_anchor: 'Globales Kern-Label & Studienbericht CSR-701',
          regional_lead_frame: 'Zulassungsrelevanter Phase-III-Meilenstein für neuen Therapiestandard.',
          blueprints: {
            hintergrund: { id: 'hintergrund', label: 'Wissenschaftliches Dossier', target_audience: 'Fachmedien', psychological_objective: 'Primäres Überleben etablieren.', blueprint_content: 'Phase-III-Studie bestätigt Gesamtüberlebensvorteil (HR 0.68, p<0.001).' },
            social: { id: 'social', label: 'Patienten- & Social Media', target_audience: 'Patienten', psychological_objective: 'Therapiekontinuität sichern.', blueprint_content: 'Laufende Therapien werden unverändert und sicher fortgeführt.' },
            talking_points: { id: 'talking_points', label: 'Talking Points', target_audience: 'Sprecher', psychological_objective: 'Führung.', blueprint_content: 'Primärer Endpunkt ist eindeutig erreicht.' },
            qa_brief: { id: 'qa_brief', label: 'Q&A Leitfaden', target_audience: 'Medienstelle', psychological_objective: 'Präzision.', blueprint_content: 'Subgruppen sind explorativ angelegt.' }
          }
        },
        us: {
          region_id: 'us',
          region_label: 'Nordamerika (USA / FDA & Payer)',
          regulatory_anchor: 'FDA NDA-Einreichung & US-Payer-Dossier',
          regional_lead_frame: 'Klinischen Gesamtwert belegen, um Preissenkungsdruck der US-Kassen abzuwehren.',
          blueprints: {
            hintergrund: { id: 'hintergrund', label: 'US-Gesundheitsökonomie Dossier', target_audience: 'US-Wirtschaftspresse', psychological_objective: 'Kostendruck entkräften.', blueprint_content: 'Gesamtüberleben ist der Goldstandard klinischer Evidenz.' },
            social: { id: 'social', label: 'US-Patienteninformation', target_audience: 'Patientenverbände', psychological_objective: 'Versorgungssicherheit belegen.', blueprint_content: 'Wir setzen uns für breiten Patientenzugang bei US-Kassen ein.' },
            talking_points: { id: 'talking_points', label: 'Payer-Talking Points', target_audience: 'US-Führung', psychological_objective: 'Wert verankern.', blueprint_content: 'Einschränkungen würden Patienten wirksame Therapien vorenthalten.' },
            qa_brief: { id: 'qa_brief', label: 'US-Commercial Q&A', target_audience: 'Access-Team', psychological_objective: 'Klarheit.', blueprint_content: 'Studienpopulation zeigte konsistenten Überlebensvorteil.' }
          }
        },
        eu: {
          region_id: 'eu',
          region_label: 'Europa (EU / EMA & HTA)',
          regulatory_anchor: 'EMA MAA-Zulassung & Gemeinsame HTA-Prüfung',
          regional_lead_frame: 'Ganzheitliche HTA-Bewertung des Intention-to-Treat-Kollektivs einfordern.',
          blueprints: {
            hintergrund: { id: 'hintergrund', label: 'Europäisches HTA-Briefing', target_audience: 'Europäische Fachpresse', psychological_objective: 'Methodik verteidigen.', blueprint_content: 'Studienplan entsprach strikt den EMA-Vorgaben.' },
            social: { id: 'social', label: 'EU-Affiliate Kommunikation', target_audience: 'Fachkreise', psychological_objective: 'Vertrauen stärken.', blueprint_content: 'Zulassungsantrag bei der EMA erfolgt termingerecht in Q1 2027.' },
            talking_points: { id: 'talking_points', label: 'Punkte für EU-Sprecher', target_audience: 'Länderteams', psychological_objective: 'Einheitlichkeit.', blueprint_content: 'Alle Affiliates kommunizieren aus dem zentralen Evidence-Paket.' },
            qa_brief: { id: 'qa_brief', label: 'HTA Q&A', target_audience: 'Marktzugangsteams', psychological_objective: 'Preise schützen.', blueprint_content: 'Der belegte Gesamtnutzen rechtfertigt eine breite Erstattung.' }
          }
        },
        ch: {
          region_id: 'ch',
          region_label: 'Schweiz (Konzernsitz & Swissmedic)',
          regulatory_anchor: 'Swissmedic-Zulassung & Schweizer Gesundheitswesen',
          regional_lead_frame: 'Innovationskraft und wissenschaftliche Exzellenz am Standort Schweiz verankern.',
          blueprints: {
            hintergrund: { id: 'hintergrund', label: 'Schweizer Mediendossier', target_audience: 'Inlandspresse', psychological_objective: 'F&E-Erfolg belegen.', blueprint_content: 'Erfolg der Krebsforschung am Standort Schweiz.' },
            social: { id: 'social', label: 'Konzernsitz Social Media', target_audience: 'Community', psychological_objective: 'Fakten vermitteln.', blueprint_content: 'Unterlagen für Swissmedic sind in Vorbereitung.' },
            talking_points: { id: 'talking_points', label: 'Konzernsprecher Talking Points', target_audience: 'Sprecher', psychological_objective: 'Klarheit.', blueprint_content: 'Patienten leben mit Onco-701 signifikant länger.' },
            qa_brief: { id: 'qa_brief', label: 'Q&A Medienstelle Basel', target_audience: 'Medienteam', psychological_objective: 'Verfügbarkeit.', blueprint_content: 'Zulassungsverfahren bei Swissmedic startet parallel zu den USA.' }
          }
        },
        apac: {
          region_id: 'apac',
          region_label: 'Asien-Pazifik (APAC)',
          regulatory_anchor: 'Regionale Zulassungen',
          regional_lead_frame: 'Klarheit über lokale Einreichungstermine schaffen.',
          blueprints: {
            hintergrund: { id: 'hintergrund', label: 'APAC Briefing', target_audience: 'Fachmedien', psychological_objective: 'Präsenz.', blueprint_content: 'Globale Daten schliessen regionale Studienzentren ein.' },
            social: { id: 'social', label: 'Patienteninfo APAC', target_audience: 'Patienten', psychological_objective: 'Orientierung.', blueprint_content: 'Regionale Anträge laufen nach Plan.' },
            talking_points: { id: 'talking_points', label: 'Talking Points', target_audience: 'Sprecher', psychological_objective: 'Ruhe.', blueprint_content: 'Lokale Fristen werden termingerecht eingehalten.' },
            qa_brief: { id: 'qa_brief', label: 'Q&A', target_audience: 'Hotline', psychological_objective: 'Fakten.', blueprint_content: 'Verfügbarkeit folgt behördlichen Freigaben.' }
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
        'Fahrgastsicherheit immer an erster Stelle nennen, bevor über Instandsetzungsdauer informiert wird.'
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
              blueprint_content: `Grenzüberschreitender Bahnverkehr: EuroCity-Züge zwischen Zürich/Basel und Mailand verkehren über die Panoramastrecke. Tunnelinstandstellung schreitet planmässig voran; Normalbetrieb ab 20:00 Uhr.`
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
        'Fokus auf unabhängige Prüfungsergebnisse statt auf interne Beteuerungen legen.'
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
    pluvicto_access_debate: {
      scenario_id: 'pluvicto_access_debate',
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
            action_required: 'Ersetzt durch Radioliganden-Nutzenmodell GS-03.'
          }
        ]
      },
      global_core_thesis: 'Lu-177 RLT verdoppelt nachweislich das progressionsfreie Überleben bei Prostatakrebs vor Chemotherapie. Wir arbeiten eng mit europäischen Behörden und dem britischen NICE an wertbasierten Erstattungsmodellen, die Spitalentlastungen berücksichtigen.',
      global_proof_points: [
        'RLT-01 belegt statistisch signifikante Verdopplung des rPFS (HR 0.41, p<0.001).',
        'US-FDA-Zulassung bestätigt hervorragendes Nutzen-Risiko-Profil vor belastender Chemotherapie.',
        'Spezialisierte Radioliganden-Produktionszentren sichern lückenlose weltweite Versorgung.'
      ],
      global_guardrails: [
        'NICHT zulassen, dass die britische NICE-Kostenablehnung mit klinischem Unvermögen gleichgesetzt wird.',
        'Klarstellen, dass der EMA-Rückzug auf Studiendesignfragen beruhte, nicht auf Sicherheitsmängeln.'
      ],
      regional_adaptations: {
        all: {
          region_id: 'all',
          region_label: 'Gesamtverkehr (Alle Regionen)',
          regulatory_anchor: 'RLT-01-Protokoll & Klinische Radioliganden-Übersicht',
          regional_lead_frame: 'Meilenstein der Präzisionsonkologie für Patienten vor Chemotherapie.',
          blueprints: {
            hintergrund: { id: 'hintergrund', label: 'Wissenschaftliches Dossier', target_audience: 'Fachmedien', psychological_objective: 'rPFS-Verdopplung verankern.', blueprint_content: 'RLT-01 bestätigt Verdopplung des progressionsfreien Überlebens.' },
            social: { id: 'social', label: 'Patientenkanäle', target_audience: 'Patienten', psychological_objective: 'Zuversicht.', blueprint_content: 'Fortschritt bei zielgerichteter Radioligandentherapie gegen Prostatakrebs.' },
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
            hintergrund: { id: 'hintergrund', label: 'Schweizer Fachdossier', target_audience: 'Fachmedien', psychological_objective: 'Zentrumsversorgung stärken.', blueprint_content: 'Ausbau der Spitalinfrastruktur für Radioliganden.' },
            social: { id: 'social', label: 'Konzernsitz Social Media', target_audience: 'Fachpublikum', psychological_objective: 'Fakten.', blueprint_content: 'Präzisions-Radioliganden an Schweizer Unispitälern im Einsatz.' },
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
            social: { id: 'social', label: 'Patienteninfo APAC', target_audience: 'Öffentlichkeit', psychological_objective: 'Orientierung.', blueprint_content: 'Aufbau von Radioliganden-Kapazitäten im asiatisch-pazifischen Raum.' },
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
        'Tresor-Schlüssel-Analogie als Hauptbotschaft nutzen statt juristischer Abhandlungen.',
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
