import { Language } from './scenarios';

export interface Contradiction {
  severity: 'HIGH' | 'MEDIUM' | 'LOW' | 'HOCH' | 'MITTEL' | 'GERING';
  title: string;
  quote_journalist: string;
  quote_doctrine: string;
  inquiry_trap: string;
  legal_boundary: string;
  clear_translation: string;
  assessment: string;
}

export interface InquiryData {
  outlet: string;
  journalist: string;
  deadline: string;
  inquiry_text: string;
  official_wording_title: string;
  official_wording_quote: string;
  compliance_authority: string;
  contradictions: Contradiction[];
  recommended_statement: string;
  strategic_advisory: string;
}

export const INQUIRY_FIXTURES: Record<Language, Record<string, InquiryData>> = {
  en: {
    oncology_trial_update: {
      outlet: "Financial Times & Neue Zürcher Zeitung (Joint Desk)",
      journalist: "Hannah Kuchler & Swiss Economics Desk",
      deadline: "Today, 16:30 CET",
      inquiry_text: `Dear Corporate Media Relations,

We are reporting on the CEO's recent statements in London and Swiss HQ calling for a 'complete rethink' of European and Swiss drug pricing policies.

We request your official response on the record to the following questions by 16:30 CET:
1. Does your pledge to align U.S. launch prices with wealthy nations (MFN) mean the company will deliberately delay or withhold launches of upcoming therapies (such as next-generation biologics) in Switzerland and the EU if authorities refuse higher price demands?
2. Following your $15 billion U.S. manufacturing commitment, is the company gradually shifting its corporate center of gravity and executive leadership away from Switzerland?
3. How do you respond to Swiss and European healthcare payers who argue the company is using U.S. trade pressure to force public healthcare funds to subsidize American margins?`,
      official_wording_title: "Global Pricing, Launch Governance & Footprint Policy (GS-01 / GS-02)",
      official_wording_quote: "«The Company advocates pricing frameworks that fairly reflect therapeutic value across OECD economies to support continuous innovation. Capital expenditure across localized U.S. production facilities serves domestic supply resilience. Swiss HQ remains the permanent corporate headquarters, executive governance seat, and global scientific nerve center. Spokespersons shall strictly reject characterizations of launch sequencing as patient boycotts.»",
      compliance_authority: "Executive Committee & Corporate Legal Governance",
      contradictions: [
        {
          severity: "HIGH",
          title: "Extortion / Patient Boycott Trap vs. Value Assessment Policy",
          quote_journalist: "Will the company deliberately delay or withhold launches in Switzerland and the EU to protect US prices?",
          quote_doctrine: "Zero patient boycott; the company collaborates on value-based access models without compromising patient care.",
          inquiry_trap: "Trying to provoke an executive quote conceding that the company will 'punish' European or Swiss patients to protect U.S. commercial revenues.",
          legal_boundary: "Antitrust regulations prohibit anti-competitive collective withholding threats; public affairs must ground sequencing strictly in evidence-based health economics.",
          clear_translation: "Explain clearly that innovative therapies cannot launch under arbitrary reference caps that distort international access, and reiterate ongoing compassionate and regulatory submissions.",
          assessment: "Unequivocally dismantle the premise of 'withholding care'. Frame launch sequencing as an evidence-driven, country-by-country value dialogue."
        },
        {
          severity: "HIGH",
          title: "Swiss HQ Headquarters Exodus Rumor vs. Capital Allocation Reality",
          quote_journalist: "Is the company gradually shifting its corporate center of gravity away from Switzerland following the $15B US capex?",
          quote_doctrine: "Swiss HQ remains the permanent corporate headquarters, executive seat, and scientific nerve center.",
          inquiry_trap: "Establishing a narrative of corporate desertion of Switzerland (Standort Schweiz) to spark political backlash in Bern.",
          legal_boundary: "Corporate governance and Swiss stock exchange (SIX) disclosure rules govern statements on corporate domicile and headquarters.",
          clear_translation: "Reaffirm without ambiguity that the $15B investment expands manufacturing capacity for American patients in America, while Switzerland's corporate and R&D role is unchanged and growing.",
          assessment: "Deliver a crisp, unequivocal statement on Switzerland's permanent status as global headquarters."
        }
      ],
      recommended_statement: "The Company is committed to ensuring patients worldwide benefit from breakthrough medical innovation. Under U.S. Most-Favored-Nation reference rules, healthcare systems in high-income nations must modernize pricing frameworks to reflect the genuine therapeutic and economic value of innovation, rather than imposing blunt price cuts that export distortions globally. Our $15 billion U.S. investment expands domestic manufacturing across 10 sites to secure tariff-resilient supply for American patients. Swiss HQ remains our undisputed corporate headquarters and scientific core as we partner constructively with Swiss (BAG) and European authorities to ensure rapid, sustainable patient access.",
      strategic_advisory: "Decouple the $15B U.S. manufacturing expansion from HQ identity. Reaffirm Swiss HQ unambiguously, and reject any framing of launch sequencing as a 'patient boycott'."
    },
    alpine_transit_crisis: {
      outlet: "Keystone-SDA News Agency",
      journalist: "National Desk",
      deadline: "Within 30 minutes",
      inquiry_text: "We are receiving unconfirmed reports that the signalling shutdown in the Alpine Base Tunnel was caused by an overseas cyber intrusion. Can you officially rule out an attack on national infrastructure?",
      official_wording_title: "Critical Infrastructure Incident Response Protocol (Ref. SEC-2026)",
      official_wording_quote: "«During operational disruptions, spokespersons communicate verified technical causes only. Premature speculation regarding foreign hostile actions is strictly prohibited prior to joint assessment with the National Cyber Security Centre (NCSC).»",
      compliance_authority: "National Centre for Cyber Security & Corporate Legal",
      contradictions: [
        {
          severity: "HIGH",
          title: "Pressure for Instant Denial vs. Verified Investigation",
          quote_journalist: "Can you officially rule out a cyberattack?",
          quote_doctrine: "Speculation regarding hostile actions is strictly prohibited prior to NCSC assessment.",
          inquiry_trap: "Pushing for an absolute denial ('we guarantee it is not cyber') that could backfire if forensic telemetry turns up anomalies later.",
          legal_boundary: "Critical infrastructure security mandates require certified forensic logs before releasing definitive external attribution statements.",
          clear_translation: "Explain that live network telemetry shows zero unauthorized traffic, while physical engineers have already pinpointed the mechanical relay defect.",
          assessment: "Keep the narrative focused on physical engineering diagnostics. Refuse sensationalist speculation without sounding evasive."
        }
      ],
      recommended_statement: "Traffic in the Alpine Base Tunnel is temporarily paused due to a localized hardware component fault in the relay interlocking system. Technical maintenance teams are on site and repairs are underway. Real-time network telemetry shows zero unauthorized digital access, and all safety fail-safes engaged normally. We will provide verified updates as maintenance advances.",
      strategic_advisory: "Ground the response in physical engineering reality: name the relay component, state that passenger safety was maintained, and avoid repeating the word 'cyberattack'."
    },
    esg_investigation: {
      outlet: "Investigative Sunday Desk",
      journalist: "L. Meyer & S. Baumann",
      deadline: "Today, 16:00 CET",
      inquiry_text: `We have obtained documentation alleging labor rights violations and forced overtime at 'SteelCorp Asia', a subcontractor supplying structural components for your major infrastructure build.

We request your responses:
1. Was executive leadership aware that this supplier was flagged on human rights watchlists?
2. Why was procurement extended in January 2026 despite updated ESG supplier codes?
3. Will you immediately publish the independent audit reports for this facility?`,
      official_wording_title: "Supplier Code of Conduct & Human Rights Due Diligence (ESG-2025-V2)",
      official_wording_quote: "«All suppliers are bound to international labor standards. Upon credible allegations, immediate independent investigations are initiated and contracts suspended. Disclosure of proprietary audit materials is subject to legal confidentiality covenants.»",
      compliance_authority: "Corporate Governance & Ethics Committee",
      contradictions: [
        {
          severity: "HIGH",
          title: "Contract Renewal vs. Due Diligence Protocol",
          quote_journalist: "Why was procurement extended despite updated ESG codes?",
          quote_doctrine: "All tier-1 partners undergo certified audits prior to renewal.",
          inquiry_trap: "Establishing executive negligence by contrasting public ethical commitments with supplier renewal dates.",
          legal_boundary: "Breach of contract risk if terminating suppliers without formal investigative findings, balanced against supply chain liability laws.",
          clear_translation: "State that the renewal was predicated on a certified December 2025 audit, but that new allegations have prompted an immediate freeze on all pending orders.",
          assessment: "Do not defend the subcontractor. Emphasize that the certified audit was passed, but immediate contract suspension proves zero tolerance."
        },
        {
          severity: "MEDIUM",
          title: "Audit Report Disclosure Request",
          quote_journalist: "Will you immediately publish the independent audit reports?",
          quote_doctrine: "Audit materials are subject to proprietary review and legal covenants.",
          inquiry_trap: "Forcing immediate publication of unredacted operational files.",
          legal_boundary: "Commercial confidentiality laws and third-party worker privacy rights protect raw audit sheets.",
          clear_translation: "Commit to publishing a comprehensive summary of the forensic investigation upon conclusion, without breaching confidentiality statutes.",
          assessment: "Demonstrate transparency by committing to a published summary while respecting statutory confidentiality bounds."
        }
      ],
      recommended_statement: "Upholding human rights and labor standards is non-negotiable across our organization. The supplier in question passed an independent third-party audit in December 2025. In light of the new allegations presented, we have immediately suspended all active purchase orders and commissioned an independent forensic investigation on the ground. We will act decisively based on the findings.",
      strategic_advisory: "Demonstrate swift institutional action. Avoid defensive arguments about Tier-2 vs Tier-3 designations; focus on the immediate contract freeze."
    },
    rlt_access_debate: {
      outlet: "The Guardian & Health Policy Watch",
      journalist: "Sarah Boseley & Health Team",
      deadline: "Today, 18:00 CET",
      inquiry_text: `Dear Corporate Media Relations,

Following the UK NICE final guidance refusing routine NHS funding for ONCO-104 in advanced solid-tumor oncology, and reports that the company withdrew its European regulatory submission:

1. Does the company accept the NICE appraisal finding that ONCO-104 is not cost-effective at £20,000 per dose?
2. Why is ONCO-104 approved in the US prior to chemotherapy while European health authorities claim the data is insufficient?
3. Will the company offer a meaningful price discount so NHS patients do not miss out on this therapy?`,
      official_wording_title: "Targeted Oncology Clinical Data & Value-Based Access Policy (GS-01 / GS-03)",
      official_wording_quote: "«ONCO-104 is clinically proven in the Phase III ONCO-01 trial to double radiographic progression-free survival (HR 0.41). Appraisals by NICE reflect cost-per-QALY threshold methodologies rather than biological efficacy. The company actively offers flexible managed-access models that account for total acute care cost offsets.»",
      compliance_authority: "Global Oncology Affairs & Legal Counsel",
      contradictions: [
        {
          severity: "HIGH",
          title: "Economic Threshold vs. Biological Efficacy Trap",
          quote_journalist: "Does the company accept that ONCO-104 is not cost-effective and insufficient for approval?",
          quote_doctrine: "ONCO-01 proved a statistically significant doubling of rPFS; NICE appraisal is purely economic.",
          inquiry_trap: "Conflating statutory cost-effectiveness thresholds with clinical drug failure.",
          legal_boundary: "Securities and regulatory compliance prohibit accepting inaccurate claims of clinical failure.",
          clear_translation: "Distinguish firmly between proven clinical survival benefits and economic budget calculations.",
          assessment: "Reiterate the HR 0.41 rPFS doubling first, then address ongoing commercial pricing dialogues."
        }
      ],
      recommended_statement: "The clinical benefit of ONCO-104 is proven: the Phase III ONCO-01 study demonstrated a statistically significant doubling of radiographic progression-free survival (HR 0.41, p<0.001) in men with solid-tumor oncology prior to chemotherapy. While health technology assessment methodologies differ by country—leading to FDA approval in the U.S.—we are actively working with UK NICE and European health authorities to find sustainable, value-based reimbursement solutions that recognize the therapy's ability to offset downstream acute hospitalizations.",
      strategic_advisory: "Ground the response in the HR 0.41 statistic and patient quality of life. Do not engage in speculative price concession percentages."
    },
    health_data_breach: {
      outlet: "National Daily News Desk",
      journalist: "F. Müller",
      deadline: "Tomorrow, 10:00 CET",
      inquiry_text: "Privacy advocacy groups are criticizing the decision to host electronic patient dossiers with an international cloud provider. How can you legally guarantee that foreign authorities cannot access domestic citizen medical data under foreign extraterritorial statutes?",
      official_wording_title: "Cloud Sovereignty & Patient Data Custody Standard",
      official_wording_quote: "«All medical records remain end-to-end encrypted ('Bring Your Own Key'). The cryptographic keys remain exclusively within sovereign jurisdiction under national authority oversight. Cloud infrastructure providers possess no technical capability to decrypt stored records.»",
      compliance_authority: "Federal Data Protection & Information Commissioner",
      contradictions: [
        {
          severity: "LOW",
          title: "Legal Jurisdiction vs. Technical Encryption Reality",
          quote_journalist: "How can you legally guarantee foreign authorities cannot access data?",
          quote_doctrine: "Cryptographic keys remain exclusively in domestic sovereign custody.",
          inquiry_trap: "Trapping the spokesperson in conflicting international legal treaties (e.g. CLOUD Act debates).",
          legal_boundary: "International legal debates cannot be resolved in PR statements; technical safeguards must be the core argument.",
          clear_translation: "Shift the argument from legal debate to mathematical reality: even if foreign courts request data, the cloud host holds only encrypted gibberish.",
          assessment: "Do not debate foreign court powers. Ground the defense in mathematical cryptography: the foreign provider physically lacks the keys."
        }
      ],
      recommended_statement: "Patient privacy is protected by sovereign cryptographic architecture. Under our 'Bring Your Own Key' framework, all health records stored on cloud infrastructure are encrypted, and the cryptographic keys remain permanently in domestic custody under sovereign public oversight. Neither cloud hosts nor foreign authorities hold the technical capability to decrypt or access patient files.",
      strategic_advisory: "Focus entirely on technical key separation. Use the safe deposit box analogy to reassure the public."
    }
  },
  de: {
    oncology_trial_update: {
      outlet: "Neue Zürcher Zeitung & Financial Times (Gemeinsames Desk)",
      journalist: "Wirtschaftsredaktion Inland & European Healthcare",
      deadline: "Heute, 16:30 Uhr",
      inquiry_text: `Sehr geehrte Damen und Herren,

wir recherchieren zu den Äusserungen von the CEO, der ein 'grundlegendes Umdenken' bei europäischen und Schweizer Medikamentenpreisen fordert.

Wir bitten um Beantwortung folgender Fragen bis 16:30 Uhr:
1. Bedeutet Ihre US-Referenzpreis-Vereinbarung (MFN), dass das Unternehmen künftige Medikamente (wie neue Biologika) in der Schweiz und der EU bewusst verzögert oder gar nicht einführt, falls Preisnachlässe gefordert werden?
2. Verlagert das Unternehmen mit der 23-Milliarden-Investition in US-Werke schrittweise sein unternehmerisches Schwergewicht und die Führung weg von Swiss HQ?
3. Wie reagieren Sie auf Vorwürfe Schweizer Kassen, das Unternehmen nutze US-Handelsdrohungen, um europäische Beitragszahler unter Druck zu setzen?`,
      official_wording_title: "Konzern-Governance zu Preisgestaltung & Standort Schweiz (GS-01 / GS-02)",
      official_wording_quote: "«Das Unternehmen setzt sich für faire, wertbasierte Erstattungsmodelle in allen OECD-Staaten ein. Die 15-Mrd.-$-Investition in den USA stärkt die lokale Versorgungssicherheit. Die Schweiz bleibt der weltweite Hauptsitz, Sitz der Geschäftsleitung und zentrales Forschungszentrum. Spekulationen über Patientenboykotte sind entschieden zurückzuweisen.»",
      compliance_authority: "Konzernleitung & Rechtsdienst",
      contradictions: [
        {
          severity: "HOCH",
          title: "Boykott-Falle vs. Partnerschaftlicher Erstattungsdialog",
          quote_journalist: "Wird das Unternehmen die Einführung in der Schweiz und der EU verzögern, um US-Preise zu schützen?",
          quote_doctrine: "Null Boykott; partnerschaftlicher Dialog mit dem BAG und HTA-Stellen für wertbasierte Erstattung.",
          inquiry_trap: "Der Journalist will ein Zitat provozieren, wonach das Unternehmen europäische oder Schweizer Patienten erpresst.",
          legal_boundary: "Kartell- und wettbewerbsrechtliche Grenzen verbieten konditionierte Boykott-Drohungen.",
          clear_translation: "Klarstellen, dass künstlich gedrückte Preise internationale Verzerrungen erzeugen, und belegen, dass klinische Studien und Härtefallprogramme unverändert weiterlaufen.",
          assessment: "Den Vorwurf eines Boykotts kategorisch entkräften. Markteinführungen als evidenzbasierten Dialog darstellen."
        },
        {
          severity: "HOCH",
          title: "Abwanderungs-Gerücht vs. Investitionswirklichkeit",
          quote_journalist: "Verlagert das Unternehmen das Schwergewicht schrittweise weg von Swiss HQ in die USA?",
          quote_doctrine: "Die Schweiz bleibt der dauerhafte Hauptsitz, Sitz der Geschäftsleitung und Forschungszentrale.",
          inquiry_trap: "Konstruktion einer Schwächung des Standorts Schweiz zur Auslösung politischer Vorstösse in Bern.",
          legal_boundary: "Börsenrechtliche Vorgaben (SIX) regeln Mitteilungen zum Konzernsitz und Governance-Strukturen.",
          clear_translation: "Unmissverständlich bekräftigen: 15 Mrd. $ bauen Produktion in den USA für US-Patienten aus, während Swiss HQ das weltweite Herz des Konzerns bleibt.",
          assessment: "Ein klares, unerschütterliches Bekenntnis zu Swiss HQ als weltweitem Hauptsitz abgeben."
        }
      ],
      recommended_statement: "Das Unternehmen setzt sich dafür ein, dass Patientinnen und Patienten weltweit von medizinischem Fortschritt profitieren. Unter den neuen US-Referenzpreisregeln (MFN) müssen wohlhabende Industriestaaten ihre Erstattungssysteme so weiterentwickeln, dass echter therapeutischer Mehrwert anerkannt wird, anstatt durch starre Preisdeckel weltweite Verzerrungen zu erzeugen. Unsere 23-Milliarden-Dollar-Investition in den USA baut an 10 Standorten eine zollresistente Produktion für US-Patienten auf. Die Schweiz bleibt unser unbestrittener weltweiter Hauptsitz und das wissenschaftliche Herz des Unternehmens; mit dem Schweizer BAG und europäischen Behörden führen wir einen konstruktiven Dialog für zukunftsfähige Erstattungsmodelle.",
      strategic_advisory: "Die 15-Mrd.-$-US-Investition strikt von der Standortfrage trennen. Klares Bekenntnis zu Swiss HQ abgeben und jegliche Boykott-Rhetorik zurückweisen."
    },
    alpine_transit_crisis: {
      outlet: "Nachrichtenagentur Keystone-SDA",
      journalist: "Redaktion Inland",
      deadline: "Heute, 30 Minuten",
      inquiry_text: "Uns liegen Berichte vor, wonach der Ausfall der Signalsteuerung im Alpen-Basistunnel auf einen gezielten Cyberangriff zurückgeht. Können Sie eine Sabotage der Infrastruktur definitiv ausschliessen?",
      official_wording_title: "Notfallprotokoll Kritische Infrastruktur (Ref. SEC-2026)",
      official_wording_quote: "«Bei Störungen kommunizieren wir ausschliesslich gesicherte Ursachen. Spekulationen über Sabotageakte sind vor Abschluss der gemeinsamen Lagebeurteilung mit dem Bundesamt für Cybersicherheit untersagt.»",
      compliance_authority: "Bundesamt für Cybersicherheit & Rechtsdienst",
      contradictions: [
        {
          severity: "HOCH",
          title: "Druck zum Pauschaldementi vs. Technische Abklärung",
          quote_journalist: "Können Sie eine Sabotage definitiv ausschliessen?",
          quote_doctrine: "Spekulationen über Sabotageakte sind vor Abschluss der Lagebeurteilung untersagt.",
          inquiry_trap: "Forderung nach einer absoluten Garantie, die bei unvollständiger Datenlage riskant wäre.",
          legal_boundary: "Sicherheitszertifizierungen verlangen verifizierte Protokolle, bevor finale Entwarnung erteilt wird.",
          clear_translation: "Festhalten, dass die Netzwerkprotokolle keinerlei Anomalien zeigen, während Techniker den mechanischen Bauteildefekt bereits isoliert haben.",
          assessment: "Auf die physische Fehlerquelle fokussieren. Keine juristischen Absolutheitsgarantien abgeben, sondern Fakten sprechen lassen."
        }
      ],
      recommended_statement: "Der Verkehr im Alpen-Basistunnel ist wegen eines lokalen Hardwaredefekts am Relaisbauteil der Stellwerkanlage unterbrochen. Die Sicherheitssysteme haben wie vorgesehen gegriffen. Die technische Netzwerküberwachung zeigt keinerlei unbefugte Datenzugriffe. Unsere Fachteams sind vor Ort mit der Reparatur beschäftigt. Wir informieren fortlaufend über den Wiederanlauf.",
      strategic_advisory: "Fokus strikt auf den Relaisdefekt und den reibungslosen Ablauf des Notfallkonzepts legen. Das Wort 'Cyberangriff' nicht wiederholen."
    },
    esg_investigation: {
      outlet: "Sonntags-Recherche Desk",
      journalist: "L. Meyer & S. Baumann",
      deadline: "Heute, 16:00 Uhr",
      inquiry_text: `Uns liegen Dokumente vor, wonach Ihr Zulieferer 'SteelCorp Asia' für den Ausbau des Projekts Zwangsarbeit und gravierende Arbeitsrechtsverletzungen duldet.

Wir bitten um Stellungnahme:
1. War der Direktion bekannt, dass 'SteelCorp' auf internationalen Warnlisten steht?
2. Warum wurde der Vertrag trotz neuer ESG-Vorgaben verlängert?
3. Werden Sie die Revisionsberichte des Subunternehmers vollumfänglich veröffentlichen?`,
      official_wording_title: "Lieferantenkodex & Sorgfaltspflichten (Ref. ESG-2025-V2)",
      official_wording_quote: "«Alle Tier-1 Lieferanten unterliegen regelmässigen Audits. Bei Verdacht auf Menschenrechtsverletzungen wird sofort eine unabhängige Untersuchung eingeleitet. Verträge werden bei erhärteten Vorwürfen sistiert.»",
      compliance_authority: "Unternehmensleitung & Governance Committee",
      contradictions: [
        {
          severity: "HOCH",
          title: "Vertragsverlängerung vs. Sorgfaltspflicht",
          quote_journalist: "Warum wurde der Vertrag trotz neuer ESG-Vorgaben verlängert?",
          quote_doctrine: "Alle Tier-1 Partner müssen vor Vertragsabschluss gültige Audits vorweisen.",
          inquiry_trap: "Nachweis von Führungsmängeln durch Gegenüberstellung von Kodex und Vertragsdaten.",
          legal_boundary: "Vertragsrechtliche Haftung bei vorschnellen Kündigungen versus Lieferkettengesetzgebung.",
          clear_translation: "Erklären, dass die Verlängerung auf einem bestandenen Audit von Dezember 2025 basierte, die neuen Vorwürfe jedoch zum sofortigen Vergabestopp führen.",
          assessment: "Keine Abwehrhaltung einnehmen. Die bestandene Vorjahresprüfung erwähnen, aber den sofortigen Vergabestopp betonen."
        },
        {
          severity: "MITTEL",
          title: "Forderung nach Offenlegung der Revisionsberichte",
          quote_journalist: "Werden Sie die Berichte vollumfänglich veröffentlichen?",
          quote_doctrine: "Revisionsunterlagen unterliegen dem Geschäftsgeheimnis und Datenschutz.",
          inquiry_trap: "Druck zur ungeschwärzten Herausgabe interner Betriebsdaten.",
          legal_boundary: "Schutz von Geschäftsgeheimnissen und Persönlichkeitsrechten Dritter.",
          clear_translation: "Zusichern, dass eine fundierte Zusammenfassung der Untersuchungsergebnisse nach Abschluss öffentlich zugänglich gemacht wird.",
          assessment: "Transparenz über die Ergebnisse zusichern, ohne Geschäftsgeheimnisse oder Persönlichkeitsrechte zu verletzen."
        }
      ],
      recommended_statement: "Die Einhaltung von Menschenrechten und Arbeitsstandards ist für uns nicht verhandelbar. Der erwähnte Lieferant hat im Dezember 2025 ein unabhängiges Zertifizierungsaudit bestanden. Aufgrund der neuen Hinweise haben wir sämtliche weiteren Vergaben an das Unternehmen per sofort sistiert und eine unabhängige Vor-Ort-Untersuchung beauftragt. Wir werden die Ergebnisse transparent kommunizieren.",
      strategic_advisory: "Handlungsstärke belegen (sofortiger Vergabestopp). Nicht in bürokratische Ausflüchte zu Tier-2/Tier-3 flüchten."
    },
    rlt_access_debate: {
      outlet: "The Guardian & Europäischer Gesundheitsdienst",
      journalist: "Rechercheteam Gesundheitspolitik",
      deadline: "Heute, 18:00 Uhr",
      inquiry_text: `Sehr geehrte Damen und Herren,

nach der Entscheidung des britischen NICE, ONCO-104 nicht für den Routineeinsatz im NHS zu empfehlen, und dem Rückzug des europäischen Zulassungsantrags bitten wir um Stellungnahme:

1. Akzeptiert das Unternehmen die Einschätzung von NICE, dass ONCO-104 bei 20.000 Pfund pro Dosis unwirtschaftlich ist?
2. Warum ist ONCO-104 in den USA vor Chemotherapie zugelassen, während europäische Behörden die Datenlage als unzureichend ansehen?
3. Wird das Unternehmen Preisnachlässe gewähren, damit Patienten in Europa und Grossbritannien nicht leer ausgehen?`,
      official_wording_title: "Präzisionsonkologie-Evidenz & Nutzenbewertungs-Richtlinie (GS-01 / GS-03)",
      official_wording_quote: "«ONCO-104 belegt in der Phase-III-Studie ONCO-01 eine signifikante Verdopplung des progressionsfreien Überlebens (HR 0.41). Die NICE-Bewertung reflektiert gesundheitsökonomische Kostenschwellen, nicht die klinische Wirksamkeit. Das Unternehmen bietet flexible Erstattungsmodelle an, die Spitalentlastungen berücksichtigen.»",
      compliance_authority: "Onkologie-Leitung & Legal",
      contradictions: [
        {
          severity: "HOCH",
          title: "Wirtschaftliche HTA-Schwelle vs. Biologische Wirksamkeit",
          quote_journalist: "Akzeptiert das Unternehmen, dass ONCO-104 unzureichend und unwirtschaftlich ist?",
          quote_doctrine: "ONCO-01 belegt signifikante Verdopplung des rPFS; NICE-Verfahren ist rein ökonomisch.",
          inquiry_trap: "Verwechslung von Wirtschaftlichkeitsgrenzen mit klinischem Studienversagen.",
          legal_boundary: "Regulatorische Pflicht zur korrekten Darstellung klinischer Studienergebnisse.",
          clear_translation: "Klar zwischen der belegten Wirksamkeit und methodischen HTA-Budgetmodellen unterscheiden.",
          assessment: "Zuerst die signifikante rPFS-Verdopplung (HR 0.41) herausstellen, dann auf flexible Erstattungsdialoge verweisen."
        }
      ],
      recommended_statement: "Der klinische Nutzen von ONCO-104 ist wissenschaftlich belegt: Die Phase-III-Studie ONCO-01 zeigte eine statistisch signifikante Verdopplung des progressionsfreien Überlebens (HR 0.41, p<0.001) vor Chemotherapie. Während die Zulassungssysteme international divergieren – was zur US-Zulassung durch die FDA führte –, arbeiten wir aktiv mit dem britischen NICE und europäischen Behörden an wertbasierten Modellen, die Entlastungen im Spitalbereich berücksichtigen.",
      strategic_advisory: "Immer mit den rPFS-Studiendaten eröffnen. Keine öffentlichen Spekulationen über prozentuale Rabatte anstellen."
    },
    health_data_breach: {
      outlet: "Tageszeitung Inland",
      journalist: "F. Müller",
      deadline: "Morgen, 10:00 Uhr",
      inquiry_text: "Datenschützer kritisieren den Entscheid, die neuen Patientendossiers bei einem US-Hyperscaler zu speichern. Wie können Sie garantieren, dass US-Behörden über den CLOUD Act keinen Zugriff auf Schweizer Gesundheitsdaten erhalten?",
      official_wording_title: "Cloud-Souveränitäts-Standard Patientendaten",
      official_wording_quote: "«Alle sensiblen Gesundheitsdaten werden verschlüsselt ('Bring Your Own Key'). Die kryptografischen Schlüssel verbleiben ausschliesslich in der Schweiz unter staatlicher Kontrolle.»",
      compliance_authority: "Eidgenössischer Datenschutzbeauftragter",
      contradictions: [
        {
          severity: "GERING",
          title: "Juristische Debatte vs. Mathematische Schlüsselkontrolle",
          quote_journalist: "Wie können Sie garantieren, dass US-Behörden keinen Zugriff erhalten?",
          quote_doctrine: "Schlüssel verbleiben ausschliesslich in der Schweiz.",
          inquiry_trap: "Verstrickung in endlose juristische Debatten über ausländisches Recht.",
          legal_boundary: "Rechtliche Verträge bieten keinen absoluten Schutz vor ausländischen Gerichten; die technische Verschlüsselung schon.",
          clear_translation: "Fokus auf die mathematische Unmöglichkeit legen: Der Cloud-Anbieter speichert nur unlesbaren Ciphertext ohne Schlüssel.",
          assessment: "Souverän und ruhig kommunizieren. Nicht auf juristische Spitzfindigkeiten einlassen, sondern die 'Bring Your Own Key' Architektur erklären."
        }
      ],
      recommended_statement: "Ihre Gesundheitsdaten sind durch ein souveränes Sicherheitskonzept geschützt: Dank der 'Bring Your Own Key' Architektur liegen die Daten in der Cloud ausschliesslich verschlüsselt vor. Die Schlüssel zur Entschlüsselung verbleiben zu 100% in der Schweiz unter staatlicher Aufsicht. Ausländische Behörden oder Betreiber haben weder die rechtliche noch die technische Möglichkeit, diese Daten einzusehen.",
      strategic_advisory: "Fokus auf die technische Unmöglichkeit des Zugriffs legen. Bildhaft erklären: Der Tresor steht in der Cloud, der einzige Schlüssel liegt bei uns."
    }
  }
};

export const getInquiryData = (lang: Language, scenarioId: string): InquiryData => {
  const langData = INQUIRY_FIXTURES[lang] || INQUIRY_FIXTURES.en;
  return langData[scenarioId] || langData.oncology_trial_update || langData.alpine_transit_crisis;
};
