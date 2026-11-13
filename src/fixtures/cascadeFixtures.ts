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
        version_label: 'Draft A: Technical / Ambiguous Wording',
        version_badge: 'HIGH EXPOSURE',
        communication: "Phase III trial data for Onco-701 met primary endpoint in overall population; however, pre-specified subgroup analysis in Cohort B demonstrated statistically non-significant separation from standard of care (p=0.12). Further biomarker evaluations are ongoing.",
        headline_from_hell: "BREAKTHROUGH CANCER DRUG FAILS KEY PATIENT SUBGROUP — PAYERS QUESTION REIMBURSEMENT VALUE",
        risk_score: 8.9,
        risk_level: 'High Reputational Risk',
        vulnerabilities: [
          {
            topic: "Ambiguous Statistical Phrasing",
            explanation: "Stating 'non-significant separation' without clinical context leads reporters to write that the drug does not work for that entire demographic."
          },
          {
            topic: "Missing Patient Assurance",
            explanation: "No clear statement on safety or guidance for patients currently enrolled on the therapy."
          },
          {
            topic: "Payer Leverage",
            explanation: "Health technology assessment (HTA) bodies immediately use the headline to push for price cuts or restricted label coverage."
          }
        ],
        stakeholder_reactions: [
          {
            stakeholder: "Patient Advocacy Groups",
            likely_reaction: "Alarm & Urgent Clarification",
            reasoning: "Patients with Cohort B biomarker characteristics fear their treatment will be denied or discontinued.",
            dossier_citation: "Advisory Council Briefing Q3 2026",
            sentiment: "negative"
          },
          {
            stakeholder: "Health Technology Assessment (HTA) Bodies",
            likely_reaction: "Reimbursement Restriction",
            reasoning: "Will argue that reimbursement should only cover Cohorts A and C, cutting addressable patient population by 30%.",
            dossier_citation: "Comparative Effectiveness Dossier Ref-88",
            sentiment: "negative"
          },
          {
            stakeholder: "Clinical Investigators (KOLs)",
            likely_reaction: "Defensive Wait-and-See",
            reasoning: "Physicians need clear subgroup biological rationale before defending the trial in academic commentary.",
            dossier_citation: "Investigator Meeting Notes Oct 2026",
            sentiment: "mixed"
          }
        ],
        second_order_effects: [
          {
            effect: "Competitor communications teams launch 'comparative efficacy' whispering campaigns with medical trade press.",
            probability: "high",
            timeframe: "Within 24–48 hours"
          },
          {
            effect: "Analyst consensus downgrades peak sales expectations due to anticipated label narrowing.",
            probability: "high",
            timeframe: "Next financial call"
          }
        ],
        management_summary: {
          diagnosis: "Clinical researchers wrote for peers, not for public or payer interpretation. The draft invites negative framing by separating overall trial success from subgroup nuances.",
          impact: "Severe risk of narrative lock: once the story is branded as a 'subgroup failure', subsequent regulatory filings face skeptical public scrutiny.",
          verdict: "Recommendation: Anchor the primary endpoint first (statistically significant overall survival benefit), clarify that Cohort B was underpowered for standalone significance, and confirm safety continuity for current patients."
        },
        immediate_actions: [
          "Brief medical science liaisons (MSLs) with clear statistical talking points",
          "Pre-brief patient advocacy leads under embargo",
          "Prepare scientific Q&A addressing biological plausibility of Cohort B"
        ]
      },
      draftB: {
        version_id: 'draftB',
        version_label: 'Draft B: Calibrated / Stress-Tested Wording',
        version_badge: 'CALIBRATED & SECURE',
        communication: "Pivotal Phase III trial confirms statistically significant overall survival benefit (HR 0.68, p<0.001) for Onco-701 across the broad patient population. As expected in exploratory subgroup analyses, Cohort B mirrored the positive clinical trajectory of the overall cohort, with definitive biomarker stratification advancing to regulatory submission as planned. Patient safety profile remains consistent.",
        headline_from_hell: "PHASE III TRIAL CONFIRMS OVERALL SURVIVAL BENEFIT; REGULATORY FILINGS PROCEED ON SCHEDULE",
        risk_score: 2.8,
        risk_level: 'Controlled & Defensible',
        vulnerabilities: [
          {
            topic: "Remaining Technical Scrutiny",
            explanation: "Specialized trade outlets will still request exact forest-plot subgroup data at upcoming medical congress."
          }
        ],
        stakeholder_reactions: [
          {
            stakeholder: "Patient Advocacy Groups",
            likely_reaction: "Reassured Continuity",
            reasoning: "Clear focus on overall survival benefit and safe patient continuity prevents panic.",
            dossier_citation: "Advisory Council Briefing Q3 2026",
            sentiment: "positive"
          },
          {
            stakeholder: "Health Technology Assessment (HTA) Bodies",
            likely_reaction: "Standard Review Cadence",
            reasoning: "Primary outcome is foregrounded; discussions remain focused on holistic clinical value.",
            dossier_citation: "Comparative Effectiveness Dossier Ref-88",
            sentiment: "mixed"
          },
          {
            stakeholder: "Clinical Investigators (KOLs)",
            likely_reaction: "Supportive Positioning",
            reasoning: "Investigator quotes align directly with the primary study design and scientific consensus.",
            dossier_citation: "Investigator Meeting Notes Oct 2026",
            sentiment: "positive"
          }
        ],
        second_order_effects: [
          {
            effect: "Trade press focuses on overall filing timeline rather than speculative subgroup disputes.",
            probability: "high",
            timeframe: "Standard news cycle"
          }
        ],
        management_summary: {
          diagnosis: "Balanced scientific narrative that protects patient confidence while remaining 100% compliant with regulatory reporting standards.",
          impact: "Minimizes commercial and reputation friction; preserves broad label potential.",
          verdict: "Recommendation: Approved for publication alongside investigator slide deck and investor relations readout."
        },
        immediate_actions: [
          "Deploy aligned Q&A deck across global commercial and regional affiliate teams",
          "Publish plain-language summary for patient community on corporate newsroom",
          "Ensure GEO structured schema is embedded in release for search engine indexing"
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
        version_label: 'Entwurf A: Technisch-akademischer Rohentwurf',
        version_badge: 'HOHE ANGRIFFSFLÄCHE',
        communication: "Die Phase-III-Studiendaten für Onco-701 erreichten den primären Endpunkt in der Gesamtpopulation; in der präspezifizierten Subgruppe Kohorte B zeigte sich jedoch eine statistisch nicht signifikante Trennung zum Standard (p=0.12). Weitere Biomarker-Analysen dauern an.",
        headline_from_hell: "HOFFNUNGSTRÄGER IN DER KREBSTHERAPIE SCHEITERT IN WICHTIGER PATIENTENGRUPPE",
        risk_score: 8.9,
        risk_level: 'Kritisches Reputationsrisiko',
        vulnerabilities: [
          {
            topic: "Missverständliche Statistik-Begriffe",
            explanation: "Die Formulierung 'nicht signifikante Trennung' ohne Kontext verleitet Laien und Medien zur Annahme, das Medikament sei wirkungslos."
          },
          {
            topic: "Fehlende Patienten-Beruhigung",
            explanation: "Keine Orientierung für aktuell behandelte Krebspatienten zur Fortführung der Therapie."
          },
          {
            topic: "Angriffsfläche für Kostenträger",
            explanation: "Krankenkassen und Erstattungsbehörden (HTA) nutzen solche Zitate, um Indikationseinschränkungen oder Preisabschläge durchzusetzen."
          }
        ],
        stakeholder_reactions: [
          {
            stakeholder: "Patientenorganisationen",
            likely_reaction: "Verunsicherung & Dringliche Nachfragen",
            reasoning: "Patienten mit Biomarker-Merkmalen aus Kohorte B fürchten den Behandlungsabbruch.",
            dossier_citation: "Patientenbeirat Protokoll Q3 2026",
            sentiment: "negative"
          },
          {
            stakeholder: "Erstattungsbehörden & Kassen",
            likely_reaction: "Forderung nach Indikationseinschränkung",
            reasoning: "Verlangen Ausschluss von Kohorte B aus der Erstattung, was 30% des Patientenpotenzials betrifft.",
            dossier_citation: "Nutzenbewertungs-Dossier Ref-88",
            sentiment: "negative"
          },
          {
            stakeholder: "Prüfärzte & Onkologen (KOLs)",
            likely_reaction: "Abwartende Haltung",
            reasoning: "Mediziner fordern biologische Plausibilität, bevor sie die Daten öffentlich verteidigen.",
            dossier_citation: "Investigator Meeting Basel Okt 2026",
            sentiment: "mixed"
          }
        ],
        second_order_effects: [
          {
            effect: "Mitbewerber streuen Zweifel an der Robustheit der Gesamtdaten in Fachmedien.",
            probability: "high",
            timeframe: "Innerhalb 24–48h"
          },
          {
            effect: "Finanzanalysten korrigieren Umsatzpotenzial aufgrund drohender Indikationseinschränkung nach unten.",
            probability: "high",
            timeframe: "Beim nächsten Earnings Call"
          }
        ],
        management_summary: {
          diagnosis: "Klinische Forscher haben für Fachkollegen formuliert, nicht für Öffentlichkeit und Kostenträger. Die Trennung von Gesamterfolg und Subgruppe lädt zu Falschinterpretationen ein.",
          impact: "Gefahr eines Narrativ-Schadens vor den entscheidenden Zulassungs- und Erstattungsverhandlungen.",
          verdict: "Empfehlung: Primären Endpunkt (Gesamtüberleben) ins Zentrum stellen, Kohorte B als exploratorischen Trend einordnen und Therapiekontinuität zusichern."
        },
        immediate_actions: [
          "Medical Science Liaisons mit statistischen Talking Points ausstatten",
          "Patientenorganisationen unter Embargo vorinformieren",
          "Wissenschaftliches Q&A zur biologischen Plausibilität bereitstellen"
        ]
      },
      draftB: {
        version_id: 'draftB',
        version_label: 'Entwurf B: Kalibrierte & gestresstestete Fassung',
        version_badge: 'KALIBRIERT & ROBUST',
        communication: "Die zulassungsrelevante Phase-III-Studie bestätigt einen statistisch signifikanten Gesamtüberlebensvorteil (HR 0.68, p<0.001) für Onco-701 über die gesamte Patientenpopulation. Wie bei explorativen Subgruppenanalysen üblich, spiegelte Kohorte B den positiven Trend der Gesamtkohorte wider; die Einreichung bei den Behörden erfolgt planmässig. Das Sicherheitsprofil ist unverändert positiv.",
        headline_from_hell: "PHASE-III-STUDIE BESTÄTIGT ÜBERLEBENSVORTEIL; ZULASSUNGSVERFAHREN LÄUFT PLANMÄSSIG",
        risk_score: 2.8,
        risk_level: 'Kontrolliert & Belastbar',
        vulnerabilities: [
          {
            topic: "Restliche Fachfragen am Kongress",
            explanation: "Spezialisierte Fachjournalisten werden die detaillierten Forest Plots am nächsten Onkologie-Kongress analysieren."
          }
        ],
        stakeholder_reactions: [
          {
            stakeholder: "Patientenorganisationen",
            likely_reaction: "Beruhigte Kontinuität",
            reasoning: "Klarer Fokus auf das Gesamtüberleben und die Fortführung laufender Behandlungen.",
            dossier_citation: "Patientenbeirat Protokoll Q3 2026",
            sentiment: "positive"
          },
          {
            stakeholder: "Erstattungsbehörden & Kassen",
            likely_reaction: "Regulärer Prüfungsablauf",
            reasoning: "Der Gesamtnutzen steht im Vordergrund; die Diskussion bleibt sachlich und evidenzbasiert.",
            dossier_citation: "Nutzenbewertungs-Dossier Ref-88",
            sentiment: "mixed"
          },
          {
            stakeholder: "Prüfärzte & Onkologen (KOLs)",
            likely_reaction: "Aktive Unterstützung",
            reasoning: "Die Aussagen decken sich mit dem wissenschaftlichen Studienprotokoll und schaffen Vertrauen.",
            dossier_citation: "Investigator Meeting Basel Okt 2026",
            sentiment: "positive"
          }
        ],
        second_order_effects: [
          {
            effect: "Fachberichterstattung konzentriert sich auf den geplanten Zulassungstermin statt auf Subgruppen-Spekulationen.",
            probability: "high",
            timeframe: "Regulärer Nachrichtenzyklus"
          }
        ],
        management_summary: {
          diagnosis: "Ausgewogenes wissenschaftliches Wording, das Patienten schützt und den regulatorischen Vorgaben zu 100% entspricht.",
          impact: "Minimiert Reibungsverluste bei Marktzugang und Erstattung.",
          verdict: "Empfehlung: Freigabe zur Veröffentlichung gemeinsam mit dem wissenschaftlichen Foliensatz."
        },
        immediate_actions: [
          "Abgestimmtes Q&A-Dossier an globale und regionale Affiliate-Teams verteilen",
          "Laientaugliche Patienten-Information im Newsroom publizieren",
          "GEO-strukturierte Fakten-Schema für Suchmaschinen und KI-Assistenten hinterlegen"
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
