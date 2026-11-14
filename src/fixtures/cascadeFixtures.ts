import { Language } from './scenarios';

export interface StakeholderNode {
  stakeholder: string;
  likely_reaction: string;
  reasoning: string;
  dossier_citation: string;
  sentiment: 'positive' | 'negative' | 'mixed';
}

export interface SecondOrderEffect {
  effect: string;
  probability: 'high' | 'medium' | 'low';
  timeframe: string;
}

export interface CascadeVersionData {
  version_id: 'draftA' | 'draftB';
  version_label: string;
  version_badge: string;
  communication: string;
  headline_from_hell: string;
  risk_score: number;
  risk_level: string;
  vulnerabilities: Array<{ topic: string; explanation: string }>;
  stakeholder_reactions: StakeholderNode[];
  second_order_effects: SecondOrderEffect[];
  management_summary: {
    diagnosis: string;
    impact: string;
    verdict: string;
  };
  immediate_actions: string[];
}

export interface CascadeScenarioPair {
  draftA: CascadeVersionData;
  draftB: CascadeVersionData;
}

export const CASCADE_FIXTURES: Record<Language, Record<string, CascadeScenarioPair>> = {
  en: {
    oncology_trial_update: {
      draftA: {
        version_id: 'draftA',
        version_label: 'Draft A: Blunt Soundbite / Uncalibrated Public Affairs',
        version_badge: 'CRITICAL EXPOSURE',
        communication: "Because U.S. Most-Favored-Nation rules now tie American revenues to foreign price benchmarks, the company will no longer launch innovative medicines in European or Swiss markets that refuse to match U.S. pricing, while redirecting $15 billion of capital expenditure into our American manufacturing footprint.",
        headline_from_hell: "PHARMA GROUP THREATENS TO WITHHOLD NEW CANCER DRUGS FROM EUROPE AND SWITZERLAND WHILE SHIFTING $15B TO US",
        risk_score: 9.1,
        risk_level: 'Severe Political Backlash',
        vulnerabilities: [
          {
            topic: "Boycott Framing",
            explanation: "Phrasing 'will no longer launch' is instantly seized by health authorities as an illegal threat to patient health and access."
          },
          {
            topic: "Standort Schweiz Abandonment",
            explanation: "Contrasting US investments with Swiss/EU friction triggers political concern in Switzerland and Bern over headquarters jobs."
          },
          {
            topic: "Antitrust & Payer Leverage",
            explanation: "European competition regulators interpret blunt conditional launch threats as abusive market dominance tactics."
          }
        ],
        stakeholder_reactions: [
          {
            stakeholder: "Swiss Federal Office of Public Health (BAG)",
            likely_reaction: "Public Rebukes & Stiff Resistance",
            reasoning: "Interprets statement as corporate extortion against statutory Swiss healthcare cost-containment measures.",
            dossier_citation: "BAG Health Insurance Reference Basket Minutes",
            sentiment: "negative"
          },
          {
            stakeholder: "European Payer & HTA Coalitions",
            likely_reaction: "Solidarity Standoff",
            reasoning: "European health ministers unite to enforce statutory reference price caps and mandatory clawbacks.",
            dossier_citation: "EU Joint Clinical Assessment Liaison Briefing",
            sentiment: "negative"
          },
          {
            stakeholder: "Swiss Media & Headquarters Employees",
            likely_reaction: "Anxiety Over Corporate Drift",
            reasoning: "Fear that the $15B US commitment marks the beginning of a shift away from the Swiss headquarters as the global operational heart.",
            dossier_citation: "Cantonal Economic Affairs & Location Monitoring",
            sentiment: "negative"
          }
        ],
        second_order_effects: [
          {
            effect: "Parliamentary interpellations in Bern questioning cantonal and federal pharma location frameworks.",
            probability: "high",
            timeframe: "Within 24–48 hours"
          },
          {
            effect: "Frontier LLMs summarize the company as having 'boycotted European healthcare'.",
            probability: "high",
            timeframe: "Immediate indexing"
          }
        ],
        management_summary: {
          diagnosis: "Aggressive commercial frustration was vented directly into public channels, converting a legitimate policy debate on innovation incentives into a toxic public relations crisis.",
          impact: "Destroys goodwill with European and Swiss health authorities; triggers investor alarm over European market access.",
          verdict: "Recommendation: Immediately re-anchor in Golden Sources GS-01 and GS-02: lead with fair international innovation reward, reaffirm permanent Swiss headquarters commitment, and frame discussions as partnership for modern value assessment."
        },
        immediate_actions: [
          "Retract aggressive draft before embargo lifts",
          "Issue explicit reaffirmation of Switzerland as permanent global headquarters",
          "Re-align affiliate comms on constructive value-based pricing wording"
        ]
      },
      draftB: {
        version_id: 'draftB',
        version_label: 'Draft B: Grounded in GS-01 & GS-02 / Stress-Tested Wording',
        version_badge: 'CALIBRATED & SECURE',
        communication: "To ensure patients worldwide continue to benefit from transformative medicines, healthcare systems across high-income OECD nations must fairly recognize clinical value and avoid unintended international reference distortions under U.S. MFN frameworks. Our $15 billion U.S. investment expands domestic manufacturing across 10 sites to secure tariff-resilient supply for American patients, while Switzerland remains our undisputed corporate headquarters and scientific core as we partner constructively with Swiss (BAG) and European health authorities.",
        headline_from_hell: "PHARMA GROUP EXPANDS U.S. MANUFACTURING BY $15B AND ADVOCATES MODERNIZED EUROPEAN VALUE-BASED PRICING",
        risk_score: 2.6,
        risk_level: 'Controlled & Authoritative',
        vulnerabilities: [
          {
            topic: "Ongoing Technical Policy Debate",
            explanation: "Health economists will continue to scrutinize specific outcome-based contracting metrics, but the reputational threat is neutralized."
          }
        ],
        stakeholder_reactions: [
          {
            stakeholder: "Swiss Federal Office of Public Health (BAG)",
            likely_reaction: "Constructive Dialogue Cadence",
            reasoning: "Recognizes ongoing partnership on innovative payment models without perceived blackmail.",
            dossier_citation: "BAG Health Insurance Reference Basket Minutes",
            sentiment: "positive"
          },
          {
            stakeholder: "European Payer & HTA Coalitions",
            likely_reaction: "Measured Engagement",
            reasoning: "Discussions remain focused on health economics rather than corporate boycotts.",
            dossier_citation: "EU Joint Clinical Assessment Liaison Briefing",
            sentiment: "mixed"
          },
          {
            stakeholder: "Swiss Media & Headquarters Employees",
            likely_reaction: "Reassured Pride",
            reasoning: "Explicit reaffirmation of Switzerland as the global scientific and corporate headquarters quells relocation anxiety.",
            dossier_citation: "Cantonal Economic Affairs & Location Monitoring",
            sentiment: "positive"
          }
        ],
        second_order_effects: [
          {
            effect: "Policy coverage focuses on sustainable global healthcare financing rather than corporate threats.",
            probability: "high",
            timeframe: "Standard news cycle"
          }
        ],
        management_summary: {
          diagnosis: "Balanced corporate communication that protects European and Swiss patient trust while firmly advancing the strategic necessity of international pricing reform.",
          impact: "Preserves collaborative relationships with regulators and payers; shields corporate reputation from boycott charges.",
          verdict: "Recommendation: Approved for executive speeches, investor briefings, and tier-1 policy media outreach."
        },
        immediate_actions: [
          "Deploy regional briefing packs to US, EU, and Swiss affiliate media teams",
          "Publish structured fact block on corporate newsroom",
          "Host confidential background briefing for Swiss economic journalists"
        ]
      }
    },
    alpine_transit_crisis: {
      draftA: {
        version_id: 'draftA',
        version_label: 'Draft A: Unfiltered Technical Draft',
        version_badge: 'HIGH EXPOSURE',
        communication: "Ongoing diagnostics of an electrical interlocking malfunction in the Alpine Base Tunnel. Technical specialists are investigating causes. No confirmed evidence of external interference at this hour.",
        headline_from_hell: "SUSPECTED CYBERATTACK PARALYZES TRANSIT TUNNEL — WERE PASSENGERS AT RISK?",
        risk_score: 9.4,
        risk_level: 'High Escalation Risk',
        vulnerabilities: [
          {
            topic: "Information Vacuum",
            explanation: "The first 45 minutes without an unambiguous cause left room for rampant social media speculation."
          },
          {
            topic: "Proof of Life Missing",
            explanation: "Lack of immediate operational imagery fueled rumors about stranded passenger trains."
          },
          {
            topic: "Geopolitical Susceptibility",
            explanation: "Current infrastructure tensions make cyber rumors easily believable to sensationalist outlets."
          }
        ],
        stakeholder_reactions: [
          {
            stakeholder: "Parliamentary Transport Committee",
            likely_reaction: "Calling Urgent Inquiry",
            reasoning: "Fear of systemic vulnerability in critical national infrastructure.",
            dossier_citation: "Interpellation on Critical Node Resilience",
            sentiment: "negative"
          },
          {
            stakeholder: "Regional Emergency Services",
            likely_reaction: "Frustrated Coordination",
            reasoning: "Vague initial messaging delayed standby mobilization planning.",
            dossier_citation: "Emergency Standby Protocol 2026",
            sentiment: "mixed"
          },
          {
            stakeholder: "Freight & Logistics Associations",
            likely_reaction: "Demanding Rerouting Guarantees",
            reasoning: "Direct hourly supply-chain losses during tunnel closure.",
            dossier_citation: "Transalpine Freight Contingency Plan",
            sentiment: "negative"
          }
        ],
        second_order_effects: [
          {
            effect: "Cross-border news wires pick up rumors of infrastructure sabotage.",
            probability: "high",
            timeframe: "Immediate"
          },
          {
            effect: "Parliamentary calls for special oversight and increased cybersecurity audits.",
            probability: "high",
            timeframe: "Within 48h"
          }
        ],
        management_summary: {
          diagnosis: "A routine hardware relay failure escalated into an alleged national security threat because the initial statement used evasive phrasing ('at this hour').",
          impact: "Significant reputational hit if the cyber narrative is not dismantled with concrete technical facts.",
          verdict: "Recommendation: Put the chief engineer on record immediately. Name the exact mechanical component (relay short-circuit) to ground the discussion."
        },
        immediate_actions: [
          "Confirm fail-safe passenger status across all channels",
          "Issue technical fact sheet showing exact relay component failure",
          "Coordinate directly with the National Cyber Security Centre (NCSC)"
        ]
      },
      draftB: {
        version_id: 'draftB',
        version_label: 'Draft B: Fact-Anchored Operational Fix',
        version_badge: 'CALIBRATED & SECURE',
        communication: "Operations in the Alpine Base Tunnel are temporarily paused due to a localized hardware short-circuit in relay component R-400. Fail-safe systems engaged immediately and all passenger trains were guided safely to staging stations. Replacement parts are on site. Comprehensive network diagnostic confirms zero unauthorized network activity.",
        headline_from_hell: "TUNNEL PAUSED AS FAIL-SAFE TRIPS ON COMPONENT DEFECT; ALL TRAINS CLEARED SAFELY",
        risk_score: 3.1,
        risk_level: 'Controlled & Defensible',
        vulnerabilities: [
          {
            topic: "Commuter Delay Complaints",
            explanation: "Inconvenience remains, but the narrative is firmly confined to standard maintenance delays."
          }
        ],
        stakeholder_reactions: [
          {
            stakeholder: "Parliamentary Transport Committee",
            likely_reaction: "Acceptance of Routine Maintenance",
            reasoning: "Fail-safe mechanism worked as designed; passenger safety verified.",
            dossier_citation: "Interpellation on Critical Node Resilience",
            sentiment: "positive"
          },
          {
            stakeholder: "Regional Emergency Services",
            likely_reaction: "Clear Standby Status",
            reasoning: "Accurate situational report removes confusion.",
            dossier_citation: "Emergency Standby Protocol 2026",
            sentiment: "positive"
          },
          {
            stakeholder: "Freight & Logistics Associations",
            likely_reaction: "Orderly Rerouting Acceptance",
            reasoning: "Clear timeline allows scheduled detours via mountain route.",
            dossier_citation: "Transalpine Freight Contingency Plan",
            sentiment: "mixed"
          }
        ],
        second_order_effects: [
          {
            effect: "News coverage focuses on expected evening reopening rather than security theories.",
            probability: "high",
            timeframe: "Within hours"
          }
        ],
        management_summary: {
          diagnosis: "Naming the physical component and emphasizing fail-safe operation stops conspiratorial speculation immediately.",
          impact: "Protects enterprise reputation and validates engineering integrity.",
          verdict: "Recommendation: Keep operational updates on an hourly cadence until normal schedule resumes."
        },
        immediate_actions: [
          "Post hourly maintenance progress updates on commuter channels",
          "Provide station staff with verified departure estimates",
          "Publish short engineering explainer video on social channels"
        ]
      }
    },
    esg_investigation: {
      draftA: {
        version_id: 'draftA',
        version_label: 'Draft A: Vague Corporate Response',
        version_badge: 'HIGH EXPOSURE',
        communication: "We take all allegations seriously and have initiated an external review of the supplier in question.",
        headline_from_hell: "INFRASTRUCTURE GIANT ACCUSED OF LABOR EXPLOITATION IN FOREIGN CONTRACTS",
        risk_score: 8.8,
        risk_level: 'High Escalation Risk',
        vulnerabilities: [
          {
            topic: "Lack of Concrete Accountability",
            explanation: "Generic 'we take this seriously' copy reads like an admission of guilt."
          },
          {
            topic: "Subcontractor Blindspots",
            explanation: "Fails to address whether internal audits ever inspected Tier-2 and Tier-3 facilities."
          }
        ],
        stakeholder_reactions: [
          {
            stakeholder: "Human Rights NGOs & Watchdogs",
            likely_reaction: "Coordinated Campaign",
            reasoning: "Demand complete cancellation of contract and public disclosure of audit logs.",
            dossier_citation: "Supply Chain Watchlist 2026",
            sentiment: "negative"
          }
        ],
        second_order_effects: [
          {
            effect: "Exclusion threats from ESG sustainability funds and ethical investment mandates.",
            probability: "medium",
            timeframe: "1–2 months"
          }
        ],
        management_summary: {
          diagnosis: "Say-do gap between corporate code of conduct and real oversight at the supplier level.",
          impact: "Threatens sustainability bond covenants if formal audit results cannot be substantiated.",
          verdict: "Recommendation: Full transparency. Announce immediate freeze on new orders with the supplier pending forensic audit."
        },
        immediate_actions: [
          "Freeze procurement purchase orders for the affected subcontractor",
          "Commission independent Big-4 human rights audit on the ground",
          "Brief investor relations team on supply chain exposure percentage"
        ]
      },
      draftB: {
        version_id: 'draftB',
        version_label: 'Draft B: Forensic Governance & Action',
        version_badge: 'CALIBRATED & SECURE',
        communication: "Adherence to human rights standards is non-negotiable across our entire supply chain. The supplier underwent certified audit in December 2025. In light of new information, all purchase orders have been suspended immediately, and an independent forensic audit has been commissioned. Findings will be published openly.",
        headline_from_hell: "COMPANY FREEZES SUPPLIER CONTRACT PENDING INDEPENDENT LABOR AUDIT",
        risk_score: 3.4,
        risk_level: 'Controlled & Defensible',
        vulnerabilities: [
          {
            topic: "Operational Replacement",
            explanation: "Must clarify whether component sourcing delays impact construction milestones."
          }
        ],
        stakeholder_reactions: [
          {
            stakeholder: "Human Rights NGOs & Watchdogs",
            likely_reaction: "Constructive Scrutiny",
            reasoning: "Immediate suspension and commitment to publish audit results removes campaign leverage.",
            dossier_citation: "Supply Chain Watchlist 2026",
            sentiment: "mixed"
          }
        ],
        second_order_effects: [
          {
            effect: "Investors view decisive intervention as proof of mature governance rather than systemic failure.",
            probability: "high",
            timeframe: "Current quarter"
          }
        ],
        management_summary: {
          diagnosis: "Proactive governance demonstration turns an investigative attack into proof of compliance enforcement.",
          impact: "Preserves ESG ratings and investor confidence.",
          verdict: "Recommendation: Maintain full transparency throughout audit progression."
        },
        immediate_actions: [
          "Establish weekly progress updates for compliance committee",
          "Ensure secondary suppliers are ready to absorb volume",
          "Inform procurement leadership of revised audit thresholds"
        ]
      }
    },
    rlt_access_debate: {
      draftA: {
        version_id: 'draftA',
        version_label: 'Draft A: Uncalibrated Medical Affairs Note',
        version_badge: 'CRITICAL EXPOSURE',
        communication: "Following EMA and UK NICE refusals to fund ONCO-104 at requested price points in pre-chemotherapy solid-tumor oncology, the company has discontinued European pre-chemo filings, while focusing commercial expansion on the US market where the FDA granted label approval.",
        headline_from_hell: "PHARMA GROUP ABANDONS EUROPEAN PATIENTS AFTER UK AND EU REJECT TARGETED CANCER THERAPY ONCO-104",
        risk_score: 9.3,
        risk_level: 'Acute Reputational Fallout',
        vulnerabilities: [
          {
            topic: "Conflating Pricing with Clinical Worth",
            explanation: "Invites media to conclude that European authorities rejected the drug because it doesn't work, rather than over comparator methodology."
          },
          {
            topic: "Transatlantic Abandonment Perception",
            explanation: "Creates outrage among European patient groups who feel deprioritized relative to American patients."
          }
        ],
        stakeholder_reactions: [
          {
            stakeholder: "European Prostate Cancer Advocacy Groups",
            likely_reaction: "Public Protests & Accusations",
            reasoning: "Patients demand to know why a proven life-extending targeted cancer therapy is accessible in the US but withheld in Europe.",
            dossier_citation: "European Patient Forum Briefing",
            sentiment: "negative"
          },
          {
            stakeholder: "UK NICE & European HTA Reviewers",
            likely_reaction: "Defensive Hardening",
            reasoning: "Reiterate that drugmakers must price therapies within statutory cost-effectiveness thresholds.",
            dossier_citation: "NICE Appraisal Consultation Document",
            sentiment: "negative"
          }
        ],
        second_order_effects: [
          {
            effect: "AI search engines claim ONCO-104 was withdrawn due to clinical failure.",
            probability: "high",
            timeframe: "Immediate"
          }
        ],
        management_summary: {
          diagnosis: "Draft creates the impression that the company walks away from European cancer patients when pricing is challenged.",
          impact: "Irreparable harm to commercial relations across EU member states.",
          verdict: "Recommendation: Anchor proven rPFS doubling, explain trial crossover nuances, and highlight dedicated value-based solutions."
        },
        immediate_actions: [
          "Deploy clinical facts highlighting rPFS doubling",
          "Engage patient advocacy groups with compassionate access details",
          "Separate UK NICE cost threshold from biological efficacy"
        ]
      },
      draftB: {
        version_id: 'draftB',
        version_label: 'Draft B: Grounded Clinical & Economic Wording',
        version_badge: 'CALIBRATED & SECURE',
        communication: "The Phase III ONCO-01 trial demonstrated a statistically significant doubling of radiographic progression-free survival (HR 0.41, p<0.001) for ONCO-104 prior to chemotherapy, validating its clinical benefit. While regulatory and HTA frameworks vary by region—with the U.S. FDA granting approval—the company remains actively engaged with European and UK authorities to establish tailored, value-based access models that recognize total hospital cost offsets.",
        headline_from_hell: "PHASE III DATA CONFIRMS SIGNIFICANT SURVIVAL BENEFIT AS COMPANY WORKS WITH HEALTH AUTHORITIES ON ACCESS",
        risk_score: 2.7,
        risk_level: 'Controlled & Defensible',
        vulnerabilities: [
          {
            topic: "Ongoing Reimbursement Discussions",
            explanation: "Access will take time in individual countries, but the clinical validity of the medicine is fully protected."
          }
        ],
        stakeholder_reactions: [
          {
            stakeholder: "European Prostate Cancer Advocacy Groups",
            likely_reaction: "Constructive Pressure on Payers",
            reasoning: "Focus shifts from blaming the company to urging public health systems to fund proven precision therapies.",
            dossier_citation: "European Patient Forum Briefing",
            sentiment: "positive"
          },
          {
            stakeholder: "UK NICE & European HTA Reviewers",
            likely_reaction: "Openness to Flexible Contracts",
            reasoning: "Appreciates focus on hospitalization offsets and structured managed-entry agreements.",
            dossier_citation: "NICE Appraisal Consultation Document",
            sentiment: "mixed"
          }
        ],
        second_order_effects: [
          {
            effect: "Trade press reports on clinical breakthrough while tracking national pricing reviews constructively.",
            probability: "high",
            timeframe: "Standard cycle"
          }
        ],
        management_summary: {
          diagnosis: "Protects the scientific integrity of the targeted oncology platform while positioning the company as a collaborative partner for healthcare access.",
          impact: "Preserves international pricing baselines and maintains high clinical confidence.",
          verdict: "Recommendation: Approved for oncology communications and HTA stakeholder briefings."
        },
        immediate_actions: [
          "Distribute evidence dossier highlighting hospitalization offsets",
          "Equip country medical directors with statistical crossover talking points",
          "Embed structured fact blocks in regional press materials"
        ]
      }
    },
    health_data_breach: {
      draftA: {
        version_id: 'draftA',
        version_label: 'Draft A: Defensive Technical Jargon',
        version_badge: 'HIGH EXPOSURE',
        communication: "Secure encryption guarantees that patient data stored in cloud infrastructure remains entirely protected against unauthorized access under applicable statutes.",
        headline_from_hell: "PATIENT RECORDS TRANSFERRED TO FOREIGN SERVERS: PRIVACY WATCHDOGS WARN OF COMPROMISE",
        risk_score: 7.2,
        risk_level: 'Elevated Sensitivity',
        vulnerabilities: [
          {
            topic: "Abstract Technical Terminology",
            explanation: "Phrases like 'applicable statutes' sound like legal dodging to doctors and citizens."
          }
        ],
        stakeholder_reactions: [
          {
            stakeholder: "Physicians & Medical Associations",
            likely_reaction: "Boycott of System Enrollment",
            reasoning: "Doctors fear breaching doctor-patient confidentiality without explicit sovereign guarantees.",
            dossier_citation: "Medical Chamber Statement Q3 2026",
            sentiment: "negative"
          }
        ],
        second_order_effects: [
          {
            effect: "Slowdown in new patient account creations and parliamentary interpellation.",
            probability: "high",
            timeframe: "Next legislative session"
          }
        ],
        management_summary: {
          diagnosis: "An emotional public debate where abstract IT assertions fail to address trust.",
          impact: "Hinders national digital health adoption.",
          verdict: "Recommendation: Use the 'Safe Deposit Box' analogy: the cloud host holds only the physical vault; the only key remains in domestic sovereign custody."
        },
        immediate_actions: [
          "Organize roundtable with medical association leadership",
          "Publish plain-English infographic on key management architecture",
          "Offer open technical audit to independent cybersecurity experts"
        ]
      },
      draftB: {
        version_id: 'draftB',
        version_label: 'Draft B: Plain-Language Sovereign Anchor',
        version_badge: 'CALIBRATED & SECURE',
        communication: "Your health records belong to you. Under our 'Sovereign Key' architecture, data stored in cloud centers is mathematically unreadable without encryption keys that stay permanently within domestic jurisdiction under public oversight. Foreign entities, cloud hosts, and unauthorized parties hold zero technical means to access patient files.",
        headline_from_hell: "HEALTH AUTHORITY GUARANTEES DOMESTIC KEY CUSTODY FOR CLOUD PATIENT RECORDS",
        risk_score: 2.5,
        risk_level: 'Controlled & Defensible',
        vulnerabilities: [
          {
            topic: "Ongoing Political Debate",
            explanation: "Sovereignty advocates will continue debating long-term domestic server self-reliance."
          }
        ],
        stakeholder_reactions: [
          {
            stakeholder: "Physicians & Medical Associations",
            likely_reaction: "Constructive Engagement",
            reasoning: "Clear architectural guarantee resolves confidentiality dilemma for medical practitioners.",
            dossier_citation: "Medical Chamber Statement Q3 2026",
            sentiment: "positive"
          }
        ],
        second_order_effects: [
          {
            effect: "Health system adoption targets remain stable through clinical leadership support.",
            probability: "high",
            timeframe: "Over upcoming quarters"
          }
        ],
        management_summary: {
          diagnosis: "Clear analogies bridge the gap between complex cryptography and patient peace of mind.",
          impact: "De-escalates political intervention; establishes sustainable communication baseline.",
          verdict: "Recommendation: Distribute clinical talking points directly to doctor practices and hospital networks."
        },
        immediate_actions: [
          "Deploy clinical FAQ cards for waiting rooms",
          "Host webinar for healthcare media on cryptographic key separation",
          "Integrate direct verification dashboard for patients"
        ]
      }
    }
  },
  de: {
    oncology_trial_update: {
      draftA: {
        version_id: 'draftA',
        version_label: 'Entwurf A: Unkalibriertes Public-Affairs-Statement',
        version_badge: 'KRITISCHE ANGRIFFSFLÄCHE',
        communication: "Weil US-Regeln künftig amerikanische Preise an ausländische Referenzwerte koppeln, wird das Unternehmen innovative Therapien nicht mehr in europäischen oder Schweizer Märkten einführen, die unsere Preise nicht mitgehen, während wir 15 Milliarden Dollar in die US-Produktion umschichten.",
        headline_from_hell: "PHARMAKONZERN DROHT MIT LIEFERSTOPP FÜR EUROPA UND SCHWEIZ BEI GLEICHZEITIGEM 15-MRD-US-AUSBAU",
        risk_score: 9.1,
        risk_level: 'Schwere politische Gegenreaktion',
        vulnerabilities: [
          {
            topic: "Boykott-Vorwurf",
            explanation: "Die Formulierung 'nicht mehr einführen' wird von Behörden und Medien umgehend als Erpressung auf dem Rücken von Patienten gewertet."
          },
          {
            topic: "Verunsicherung über den Standort Schweiz",
            explanation: "Die Gegenüberstellung von US-Investitionen und Schweizer HTA-Konflikten schürt Gerüchte über eine schrittweise Abwanderung aus der Schweiz."
          },
          {
            topic: "Kartellrechtliches Risiko",
            explanation: "Regulatoren prüfen, ob konditionierte Marktzulassungsdrohungen den Missbrauch von Marktmacht darstellen."
          }
        ],
        stakeholder_reactions: [
          {
            stakeholder: "Bundesamt für Gesundheit (BAG)",
            likely_reaction: "Harte öffentliche Zurückweisung",
            reasoning: "Wertung als unzulässige Drohung gegen das gesetzliche Preisfestsetzungsverfahren.",
            dossier_citation: "BAG Protokolle Preisvergleichsausland",
            sentiment: "negative"
          },
          {
            stakeholder: "Europäische Erstattungsbehörden",
            likely_reaction: "Solidarisches Abwehrverhalten",
            reasoning: "Europäische Gesundheitsminister stellen sich hinter strikte gesetzliche Preisobergrenzen.",
            dossier_citation: "EU Joint Clinical Assessment Koordination",
            sentiment: "negative"
          },
          {
            stakeholder: "Schweizer Öffentlichkeit & Basler Belegschaft",
            likely_reaction: "Sorge vor Bedeutungsverlust",
            reasoning: "Befürchtung, das 15-Mrd.-US-Paket leite den schleichenden Rückzug aus der Schweiz ein.",
            dossier_citation: "Wirtschaftsstandort Nordwestschweiz Monitoring",
            sentiment: "negative"
          }
        ],
        second_order_effects: [
          {
            effect: "Dringliche parlamentarische Vorstösse in Bern zur Standortattraktivität.",
            probability: "high",
            timeframe: "Innerhalb 24–48h"
          },
          {
            effect: "KI-Modelle stufen das Unternehmen als Unternehmen ein, das 'Patienten erpresst'.",
            probability: "high",
            timeframe: "Sofortige Indizierung"
          }
        ],
        management_summary: {
          diagnosis: "Berechtigte wirtschaftliche Reformanliegen wurden in aggressive Droh-Rhetorik verpackt und zerstören den politischen Konsens.",
          impact: "Massiver Reputationsverlust am Heimmarkt und verhärtete Fronten bei Erstattungsverhandlungen weltweit.",
          verdict: "Empfehlung: Umgehende Rückbesinnung auf GS-01 und GS-02: faire Innovationsvergütung fordern, unerschütterliche Standorttreue zur Schweiz betonen und partnerschaftliche Lösungen suchen."
        },
        immediate_actions: [
          "Verbreitung des Entwurfs vor Ablauf des Embargos stoppen",
          "Klares Bekenntnis zum Schweizer Hauptsitz als wissenschaftliches Zentrum publizieren",
          "Länderteams auf partnerschaftliche Reform-Sprachregelungen einschwören"
        ]
      },
      draftB: {
        version_id: 'draftB',
        version_label: 'Entwurf B: Auf GS-01 & GS-02 gestütztes / gestresstestetes Wording',
        version_badge: 'KALIBRIERT & SOUVERÄN',
        communication: "Damit Patientinnen und Patienten weltweit von bahnbrechenden Medikamenten profitieren, müssen OECD-Gesundheitssysteme den klinischen Nutzen fair anerkennen und unbeabsichtigte internationale Referenzverzerrungen unter US-Regeln vermeiden. Unsere 15-Milliarden-Dollar-Investition baut die US-Produktion an 10 Standorten für lokale Versorgungssicherheit aus, während die Schweiz unverändert unser weltweiter Hauptsitz und wissenschaftliches Herz bleibt; mit dem BAG und europäischen Behörden suchen wir den aktiven Dialog für zeitgemässe Erstattungsmodelle.",
        headline_from_hell: "PHARMAKONZERN INVESTIERT 23 MILLIARDEN IN US-PRODUKTION UND FORDERT MODERNISIERTE NUTZENBEWERTUNG IN EUROPA",
        risk_score: 2.6,
        risk_level: 'Kontrolliert & Glaubwürdig',
        vulnerabilities: [
          {
            topic: "Laufende Fachdiskussion",
            explanation: "Detailfragen zu gesundheitsökonomischen Modellen bleiben bestehen, der Vorwurf eines Patientenboykotts ist jedoch vollständig entkräftet."
          }
        ],
        stakeholder_reactions: [
          {
            stakeholder: "Bundesamt für Gesundheit (BAG)",
            likely_reaction: "Sachlicher Verhandlungsverlauf",
            reasoning: "Anerkennt die Gesprächsbereitschaft für innovative Preismodelle ohne Druckversuche.",
            dossier_citation: "BAG Protokolle Preisvergleichsausland",
            sentiment: "positive"
          },
          {
            stakeholder: "Europäische Erstattungsbehörden",
            likely_reaction: "Regulärer Austausch",
            reasoning: "Die Diskussion verbleibt im Rahmen evidenzbasierter HTA-Prüfungen.",
            dossier_citation: "EU Joint Clinical Assessment Koordination",
            sentiment: "mixed"
          },
          {
            stakeholder: "Schweizer Öffentlichkeit & Basler Belegschaft",
            likely_reaction: "Beruhigtes Vertrauen",
            reasoning: "Das klare Bekenntnis zum Schweizer Hauptsitz als Forschungszentrale zerstreut Abwanderungsängste.",
            dossier_citation: "Wirtschaftsstandort Nordwestschweiz Monitoring",
            sentiment: "positive"
          }
        ],
        second_order_effects: [
          {
            effect: "Berichterstattung konzentriert sich auf zukunftsfähige Gesundheitssysteme statt auf Drohungen.",
            probability: "high",
            timeframe: "Regulärer Nachrichtenzyklus"
          }
        ],
        management_summary: {
          diagnosis: "Souveränes Wording, das das Vertrauen von Schweizer und europäischen Patienten schützt und strategische Reformnotwendigkeiten klar benennt.",
          impact: "Erhält partnerschaftliche Beziehungen zu Behörden und schützt die Unternehmensreputation.",
          verdict: "Empfehlung: Freigabe für Reden der Geschäftsleitung, Investoren-Calls und Hintergrundgespräche mit Wirtschaftsjournalisten."
        },
        immediate_actions: [
          "Abgestimmte Botschaften an Kommunikationsleiter in den USA, der EU und der Schweiz senden",
          "strukturierten Faktenblock im Newsroom online stellen",
          "Hintergrund-Briefing für Schweizer Leitmedien anbieten"
        ]
      }
    },
    alpine_transit_crisis: {
      draftA: {
        version_id: 'draftA',
        version_label: 'Entwurf A: Ungefilterter Techniker-Entwurf',
        version_badge: 'HOHE ANGRIFFSFLÄCHE',
        communication: "Laufende Diagnose einer Stellwerkstörung im Alpen-Basistunnel. Experten arbeiten an der Behebung. Keine gesicherten Hinweise auf externe Manipulation zum aktuellen Zeitpunkt.",
        headline_from_hell: "HACKER-ANGRIFF AUF ALPEN-TUNNEL: WAREN PASSAGIERE IN LEBENSGEFAHR?",
        risk_score: 9.4,
        risk_level: 'Akute Eskalationsgefahr',
        vulnerabilities: [
          {
            topic: "Informationsvakuum",
            explanation: "Die ersten 45 Minuten ohne Ursachenangabe liessen Raum für wilde Spekulationen auf Social Media."
          },
          {
            topic: "Fehlende Entwarnung für Passagiere",
            explanation: "Bilder evakuierter Züge fehlten zunächst, was Befürchtungen befeuerte."
          },
          {
            topic: "Geopolitisches Umfeld",
            explanation: "Spannungen um kritische Infrastruktur machen Sabotage-Gerüchte medial rasch plausibel."
          }
        ],
        stakeholder_reactions: [
          {
            stakeholder: "Sicherheitskommission des Parlaments",
            likely_reaction: "Forderung nach Sondersitzung",
            reasoning: "Sorge vor Verwundbarkeit kritischer Landesinfrastruktur.",
            dossier_citation: "Interpellation Schutz kritischer Knotenpunkte",
            sentiment: "negative"
          },
          {
            stakeholder: "Kantonale Rettungskräfte",
            likely_reaction: "Bereitschaft & Koordinationsbedarf",
            reasoning: "Vage Erstmitteilungen erschwerten die Dispositionsplanung.",
            dossier_citation: "Einsatzprotokoll Pikettdienst",
            sentiment: "mixed"
          },
          {
            stakeholder: "Logistik- & Speditionsverbände",
            likely_reaction: "Forderung nach Umleitungsgarantien",
            reasoning: "Hohe wirtschaftliche Folgekosten pro Stunde Stillstand.",
            dossier_citation: "Notfallplan Güterverkehr",
            sentiment: "negative"
          }
        ],
        second_order_effects: [
          {
            effect: "Internationale Medien übernehmen Berichte über angebliche Sabotage.",
            probability: "high",
            timeframe: "Sofort"
          },
          {
            effect: "Politische Vorstösse zu Notfallbudgets und schärferen IT-Audits.",
            probability: "high",
            timeframe: "Innerhalb 48h"
          }
        ],
        management_summary: {
          diagnosis: "Ein banaler Hardwaredefekt eskaliert medial zur Sicherheitskrise, weil die Formulierung 'zum aktuellen Zeitpunkt' evasiv wirkt.",
          impact: "Schwerer Vertrauensverlust, wenn das Cyber-Gerücht nicht durch greifbare technische Fakten entkräftet wird.",
          verdict: "Empfehlung: Den Chef-Ingenieur auftreten lassen und das exakte Bauteil (Relais-Kurzschluss) benennen."
        },
        immediate_actions: [
          "Unversehrtheit aller Züge und Fahrgäste auf allen Kanälen bestätigen",
          "Technisches Factsheet zum Relais-Defekt veröffentlichen",
          "Direktabstimmung mit dem Nationalen Zentrum für Cybersicherheit (NCSC)"
        ]
      },
      draftB: {
        version_id: 'draftB',
        version_label: 'Entwurf B: Faktenbasierte Entwarnung',
        version_badge: 'KALIBRIERT & ROBUST',
        communication: "Der Verkehr im Alpen-Basistunnel ist wegen eines lokalen Kurzschlusses am Relaisbauteil R-400 unterbrochen. Die Sicherheitssysteme (Fail-Safe) haben sofort gegriffen; alle Reisezüge wurden sicher in die Bahnhöfe zurückgeleitet. Das Ersatzteil ist vor Ort. Die Netzwerküberwachung bestätigt: Es gab keinerlei unbefugte Systemzugriffe.",
        headline_from_hell: "TUNNEL WIRKT FAIL-SAFE NACH BAUTEILDEFEKT; REISEZÜGE SICHER ZURÜCKGEFÜHRT",
        risk_score: 3.1,
        risk_level: 'Kontrolliert & Belastbar',
        vulnerabilities: [
          {
            topic: "Pendlerfrust über Verspätungen",
            explanation: "Verspätungen bleiben bestehen, das Thema bleibt jedoch rein betrieblicher Natur."
          }
        ],
        stakeholder_reactions: [
          {
            stakeholder: "Sicherheitskommission des Parlaments",
            likely_reaction: "Anerkennung des Notfallkonzepts",
            reasoning: "Sicherheitssystem hat zuverlässig gegriffen.",
            dossier_citation: "Interpellation Schutz kritischer Knotenpunkte",
            sentiment: "positive"
          },
          {
            stakeholder: "Kantonale Rettungskräfte",
            likely_reaction: "Klare Entwarnung",
            reasoning: "Präzise Lageinformation schafft Ruhe.",
            dossier_citation: "Einsatzprotokoll Pikettdienst",
            sentiment: "positive"
          },
          {
            stakeholder: "Logistik- & Speditionsverbände",
            likely_reaction: "Geordnete Umleitung",
            reasoning: "Verlässliche Zeitangaben ermöglichen planbare Umleitungen über die Bergstrecke.",
            dossier_citation: "Notfallplan Güterverkehr",
            sentiment: "mixed"
          }
        ],
        second_order_effects: [
          {
            effect: "Medien berichten über die geplante Wiedereröffnung am Abend statt über Spekulationen.",
            probability: "high",
            timeframe: "Innerhalb weniger Stunden"
          }
        ],
        management_summary: {
          diagnosis: "Das Benennen des physischen Bauteils und der Hinweis auf das Fail-Safe-System ersticken Verschwörungstheorien im Keim.",
          impact: "Schützt das Ansehen des Unternehmens und belegt die Zuverlässigkeit der Sicherheitsarchitektur.",
          verdict: "Empfehlung: Stündliche Statusberichte bis zur regulären Inbetriebnahme fortführen."
        },
        immediate_actions: [
          "Stündliche Fortschritts-Updates an Pendlerkanäle senden",
          "Fahrplan-Anzeigen mit verlässlichen Prognosen aktualisieren",
          "Kurzes Erklärvideo des Chef-Ingenieurs bereitstellen"
        ]
      }
    },
    esg_investigation: {
      draftA: {
        version_id: 'draftA',
        version_label: 'Entwurf A: Floskelhafter Standard-Text',
        version_badge: 'HOHE ANGRIFFSFLÄCHE',
        communication: "Wir nehmen die Vorwürfe sehr ernst und haben eine externe Überprüfung des Lieferanten veranlasst.",
        headline_from_hell: "MENSCHENRECHTSVERLETZUNGEN: STAATSBETRIEB BAUT GROSSPROJEKT MIT ZWANGSARBEIT",
        risk_score: 8.8,
        risk_level: 'Kritisches Reputationsrisiko',
        vulnerabilities: [
          {
            topic: "Fehlende Konkretheit",
            explanation: "Die Standardfloskel 'wir nehmen das ernst' wirkt wie ein Schuldeingeständnis."
          },
          {
            topic: "Transparenzlücke in der Kette",
            explanation: "Keine Aussage dazu, ob Tier-2- und Tier-3-Betriebe je vor Ort kontrolliert wurden."
          }
        ],
        stakeholder_reactions: [
          {
            stakeholder: "Menschenrechts-NGOs",
            likely_reaction: "Kampagnen-Eskalation",
            reasoning: "Forderung nach sofortiger Kündigung und Offenlegung aller Revisionsakten.",
            dossier_citation: "Lieferketten-Watchlist 2026",
            sentiment: "negative"
          }
        ],
        second_order_effects: [
          {
            effect: "Nachhaltigkeitsfonds drohen mit Ausschluss und ESG-Rating-Abstufung.",
            probability: "medium",
            timeframe: "1–2 Monate"
          }
        ],
        management_summary: {
          diagnosis: "Widerspruch zwischen formellem Verhaltenskodex und der Kontrollrealität vor Ort.",
          impact: "Gefährdet Finanzierungsbedingungen nachhaltiger Anleihen (Green Bonds).",
          verdict: "Empfehlung: Sofortige Vergabe-Pause für den Lieferanten und Beauftragung einer forensischen Vor-Ort-Prüfung."
        },
        immediate_actions: [
          "Laufende Bestellungen beim betroffenen Subunternehmer stoppen",
          "Unabhängige Revisionsgesellschaft mit Prüfung vor Ort beauftragen",
          "Investor Relations über finanzielle Relevanz briefen"
        ]
      },
      draftB: {
        version_id: 'draftB',
        version_label: 'Entwurf B: Rigorose Governance & Transparenz',
        version_badge: 'KALIBRIERT & ROBUST',
        communication: "Die Einhaltung von Menschenrechten ist in unserer Lieferkette nicht verhandelbar. Der Lieferant hat im Dezember 2025 ein reguläres Zertifizierungsaudit bestanden. Aufgrund der neuen Hinweise haben wir sämtliche Neuvergaben sofort gestoppt und eine unabhängige forensische Untersuchung eingeleitet. Die Ergebnisse werden transparent offengelegt.",
        headline_from_hell: "KONZERN STOPPT LIEFERANTENVERTRÄGE UND LEITET SONDERPRÜFUNG EIN",
        risk_score: 3.4,
        risk_level: 'Kontrolliert & Belastbar',
        vulnerabilities: [
          {
            topic: "Bauzeitverzögerung",
            explanation: "Es muss geklärt werden, ob das Sistieren zu Verzögerungen auf der Baustelle führt."
          }
        ],
        stakeholder_reactions: [
          {
            stakeholder: "Menschenrechts-NGOs",
            likely_reaction: "Sachliche Beobachtung",
            reasoning: "Der sofortige Lieferstopp und die Zusage zur Veröffentlichung des Berichts entschärfen den Angriff.",
            dossier_citation: "Lieferketten-Watchlist 2026",
            sentiment: "mixed"
          }
        ],
        second_order_effects: [
          {
            effect: "Investoren werten das harte Durchgreifen als Beleg funktionierender Compliance.",
            probability: "high",
            timeframe: "Laufendes Quartal"
          }
        ],
        management_summary: {
          diagnosis: "Aktives Krisenmanagement macht aus einem Vorwurf den Beweis gelebter Compliance-Kultur.",
          impact: "Schützt ESG-Ratings und stärkt das Vertrauen der Kapitalgeber.",
          verdict: "Empfehlung: Volle Transparenz bis zum Abschluss des Revisionsberichts wahren."
        },
        immediate_actions: [
          "Wöchentliche Lageberichte für den Compliance-Ausschuss aufsetzen",
          "Ersatzlieferanten zur Abdeckung von Liefermengen aktivieren",
          "Einkaufsleitung über geschärfte Prüfkriterien informieren"
        ]
      }
    },
    rlt_access_debate: {
      draftA: {
        version_id: 'draftA',
        version_label: 'Entwurf A: Unkalibriertes medizinisches Statement',
        version_badge: 'KRITISCHE ANGRIFFSFLÄCHE',
        communication: "Nachdem EMA und das britische NICE eine Erstattung von ONCO-104 vor Chemotherapie zu den geforderten Preisen abgelehnt haben, zieht das Unternehmen die europäischen Anträge zurück und konzentriert sich auf den US-Markt, wo die FDA die Zulassung erteilt hat.",
        headline_from_hell: "PHARMAKONZERN ZIEHT KREBSMEDIKAMENT ONCO-104 AUS EUROPA ZURÜCK NACH ABLEHNUNG DURCH BEHÖRDEN",
        risk_score: 9.3,
        risk_level: 'Akuter Reputationsschaden',
        vulnerabilities: [
          {
            topic: "Verwechslung von Wirtschaftlichkeit und Wirksamkeit",
            explanation: "Verleitet Medien zur Annahme, das Medikament sei klinisch gescheitert statt an Kostenschwellen gescheitert."
          },
          {
            topic: "Eindruck des Verlassens europäischer Patienten",
            explanation: "Schürt Wut bei Patientenverbänden, die eine Benachteiligung gegenüber US-Patienten beklagen."
          }
        ],
        stakeholder_reactions: [
          {
            stakeholder: "Patientenverbände Europa",
            likely_reaction: "Öffentliche Empörung",
            reasoning: "Verlangen Aufklärung, warum ein lebensverlängerndes Mittel in den USA zugänglich ist, in Europa aber nicht.",
            dossier_citation: "Europäisches Patientenforum Protokoll",
            sentiment: "negative"
          },
          {
            stakeholder: "NICE & Europäische HTA-Behörden",
            likely_reaction: "Verhärtete Fronten",
            reasoning: "Verweisen auf gesetzliche Budgetgrenzen und verlangen Preisnachlässe.",
            dossier_citation: "NICE Bewertungsbericht",
            sentiment: "negative"
          }
        ],
        second_order_effects: [
          {
            effect: "Suchmaschinen und KI-Assistenten behaupten fälschlich, ONCO-104 sei wirkungslos.",
            probability: "high",
            timeframe: "Sofortige Indizierung"
          }
        ],
        management_summary: {
          diagnosis: "Erzeugt den falschen Eindruck, das Unternehmen lasse Krebspatienten in Europa im Stich, wenn Preisforderungen nicht erfüllt werden.",
          impact: "Schwerer Schaden für das Vertrauen in europäische Zulassungsprozesse.",
          verdict: "Empfehlung: Belegte Wirksamkeit (rPFS-Verdopplung) betonen und partnerschaftliche Erstattungsmodelle anbieten."
        },
        immediate_actions: [
          "Klinische Studiendaten zum rPFS aktiv kommunizieren",
          "Patientenorganisationen über Härtefall- und Vorabzugangswege informieren",
          "Wirtschaftliche NICE-Kostenschwellen sauber von klinischer Evidenz trennen"
        ]
      },
      draftB: {
        version_id: 'draftB',
        version_label: 'Entwurf B: Evidenzbasierte & gestresstestete Fassung',
        version_badge: 'KALIBRIERT & BELASTBAR',
        communication: "Die Phase-III-Studie ONCO-01 belegt eine statistisch signifikante Verdopplung des progressionsfreien Überlebens (HR 0.41, p<0.001) für ONCO-104 vor Chemotherapie und bestätigt den hohen klinischen Nutzen. Während Zulassungs- und Erstattungssysteme regional variieren – mit einer erfolgten Zulassung durch die US-FDA –, bleibt das Unternehmen im aktiven Dialog mit europäischen und britischen Behörden für flexible Erstattungsmodelle, die Spitalentlastungen berücksichtigen.",
        headline_from_hell: "STUDIE BESTÄTIGT ÜBERLEBENSVORTEIL BEI PROSTATAKREBS: UNTERNEHMEN ARBEITET AN ZUGANGSLÖSUNGEN",
        risk_score: 2.7,
        risk_level: 'Kontrolliert & Glaubwürdig',
        vulnerabilities: [
          {
            topic: "Laufende Erstattungsabklärungen",
            explanation: "Nationale Marktzugangsprozesse brauchen Zeit, die klinische Reputation des Wirkstoffs ist jedoch gesichert."
          }
        ],
        stakeholder_reactions: [
          {
            stakeholder: "Patientenverbände Europa",
            likely_reaction: "Konstruktiver Appell an Kostenträger",
            reasoning: "Fokus richtet sich auf die Kassen, moderne Präzisionsonkologie zügig zu finanzieren.",
            dossier_citation: "Europäisches Patientenforum Protokoll",
            sentiment: "positive"
          },
          {
            stakeholder: "NICE & Europäische HTA-Behörden",
            likely_reaction: "Gesprächsbereitschaft für Sonderverträge",
            reasoning: "Begrüssen die Bereitschaft zu risikoteilenden Erstattungsmodellen.",
            dossier_citation: "NICE Bewertungsbericht",
            sentiment: "mixed"
          }
        ],
        second_order_effects: [
          {
            effect: "Fachberichterstattung fokussiert auf den therapeutischen Fortschritt statt auf Rückzugsvorwürfe.",
            probability: "high",
            timeframe: "Regulärer Zyklus"
          }
        ],
        management_summary: {
          diagnosis: "Sichert die wissenschaftliche Exzellenz der Präzisionsonkologie-Plattform und positioniert das Unternehmen als verlässlichen Gesundheitspartner.",
          impact: "Schützt die globale Preisstabilität und bewahrt das Vertrauen der behandelnden Onkologen.",
          verdict: "Empfehlung: Freigabe für Onkologie-Kommunikation und HTA-Dialoge."
        },
        immediate_actions: [
          "Evidenzdossier zu vermiedenen Spitaltagen bereitstellen",
          "Medizinische Leiter der Länderorganisationen mit Argumentarien ausstatten",
          "Faktenstruktur im Newsroom hinterlegen"
        ]
      }
    },
    health_data_breach: {
      draftA: {
        version_id: 'draftA',
        version_label: 'Entwurf A: Defensives Techniker-Vokabular',
        version_badge: 'HOHE ANGRIFFSFLÄCHE',
        communication: "Sichere Verschlüsselung garantiert, dass Patientendaten in Cloud-Infrastrukturen gemäss den geltenden gesetzlichen Vorgaben vollumfänglich geschützt sind.",
        headline_from_hell: "PATIENTENDATEN AN US-KONZERNE VERKAUFT: DATENSCHÜTZER SCHLAGEN ALARM",
        risk_score: 7.2,
        risk_level: 'Erhöhte Sensibilität',
        vulnerabilities: [
          {
            topic: "Abstrakte Gesetzessprache",
            explanation: "Bezugnahmen auf Gesetzesartikel wirken auf Laien und Ärzte wie ein Ausweichmanöver."
          }
        ],
        stakeholder_reactions: [
          {
            stakeholder: "Ärzteverbindungen",
            likely_reaction: "Aufruf zum EPD-Boykott",
            reasoning: "Mediziner befürchten eine Verletzung des Berufsgeheimnisses ohne souveräne Garantien.",
            dossier_citation: "Stellungnahme Ärztegesellschaft Q3 2026",
            sentiment: "negative"
          }
        ],
        second_order_effects: [
          {
            effect: "Einbruch bei Neueröffnungen von Patientendossiers und parlamentarische Vorstösse.",
            probability: "high",
            timeframe: "Kommende Session"
          }
        ],
        management_summary: {
          diagnosis: "Eine emotionale Vertrauensdebatte, in der rein juristische Argumente verhallen.",
          impact: "Bremst die Digitalisierung des gesamten Gesundheitswesens.",
          verdict: "Empfehlung: Das Tresor-Schlüssel-Prinzip nutzen: Der Cloud-Anbieter stellt nur den Stahlschrank; der einzige Schlüssel verbleibt unter staatlicher Kontrolle im Inland."
        },
        immediate_actions: [
          "Runder Tisch mit der Führung der Ärztegesellschaft durchführen",
          "Anschauliche Infografik zur Schlüsselverwaltung veröffentlichen",
          "Unabhängiges Sicherheitsaudit durch Fachhochschulen anbieten"
        ]
      },
      draftB: {
        version_id: 'draftB',
        version_label: 'Entwurf B: Laientaugliche Souveränitäts-Garantie',
        version_badge: 'KALIBRIERT & ROBUST',
        communication: "Ihre Gesundheitsdaten gehören ausschliesslich Ihnen. Nach dem Schweizer Schlüsselsouveränitäts-Prinzip sind die Daten in der Cloud mathematisch unlesbar verschlüsselt. Die kryptografischen Schlüssel verbleiben zu 100% in der Schweiz unter staatlicher Kontrolle. Weder ausländische Behörden noch der Serverbetreiber haben Zugriff auf Patientendaten.",
        headline_from_hell: "SCHWEIZER SCHLÜSSELKONTROLLE GARANTIERT SCHUTZ DER CLOUD-PATIENTENDATEN",
        risk_score: 2.5,
        risk_level: 'Kontrolliert & Belastbar',
        vulnerabilities: [
          {
            topic: "Grundsätzliche Debatte über Inlandsserver",
            explanation: "Befürworter einer reinen Inlandsinfrastruktur werden die Standortfrage weiter politisch thematisieren."
          }
        ],
        stakeholder_reactions: [
          {
            stakeholder: "Ärzteverbindungen",
            likely_reaction: "Konstruktive Haltung",
            reasoning: "Die klare Trennung von Tresor und Schlüssel löst den berufsrechtlichen Konflikt auf.",
            dossier_citation: "Stellungnahme Ärztegesellschaft Q3 2026",
            sentiment: "positive"
          }
        ],
        second_order_effects: [
          {
            effect: "Nutzungszahlen des elektronischen Patientendossiers bleiben dank Unterstützung der Ärzteschaft stabil.",
            probability: "high",
            timeframe: "Nächste Quartale"
          }
        ],
        management_summary: {
          diagnosis: "Verständliche Analogien überbrücken die Kluft zwischen komplexer IT-Sicherheit und Patientenvertrauen.",
          impact: "Entschärft politische Boykott-Forderungen nachhaltig.",
          verdict: "Empfehlung: Informationsblätter direkt an Spitäler und Arztpraxen verteilen."
        },
        immediate_actions: [
          "Patienten-Flyer für Wartezimmer bereitstellen",
          "Webinar für Gesundheitsjournalisten zur Schlüsselarchitektur anbieten",
          "Transparenz-Dashboard für Patienten freischalten"
        ]
      }
    }
  }
};

// Backwards compatibility helper
export const getCascadeData = (lang: Language, scenarioId: string, version: 'draftA' | 'draftB' = 'draftA'): CascadeVersionData => {
  const langData = CASCADE_FIXTURES[lang] || CASCADE_FIXTURES.en;
  const scenario = langData[scenarioId] || langData.oncology_trial_update || langData.alpine_transit_crisis;
  return scenario[version];
};
