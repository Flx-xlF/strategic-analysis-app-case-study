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
      outlet: "Global Biopharma Intelligence",
      journalist: "E. Vance & M. Thorne",
      deadline: "Today, 17:00 CET",
      inquiry_text: `Dear Corporate Communications Team,

We are preparing an in-depth article on the newly disclosed Phase III readout for Onco-701.

Sources indicate that in Cohort B, the study failed to achieve statistical superiority over existing standard of care. 

We request your prompt response to the following questions:
1. Does the company acknowledge that Onco-701 failed to demonstrate efficacy in Cohort B patients?
2. Will you restrict your upcoming FDA and EMA regulatory filings to exclude this subgroup?
3. How do you respond to health economist assessments calling your projected pricing unsupportable in light of these subgroup findings?`,
      official_wording_title: "Clinical Trial Disclosure & Regulatory Governance Policy (SOP-MED-402)",
      official_wording_quote: "«The company communicates clinical results based on primary pre-specified endpoints approved in formal statistical analysis plans. Subgroup evaluations are inherently exploratory. Spokespersons shall not speculate on final approved labeling or negotiated reimbursement parameters prior to health authority determinations.»",
      compliance_authority: "Global Regulatory Affairs & Legal Compliance",
      contradictions: [
        {
          severity: "HIGH",
          title: "Premature Admission of 'Failure' vs. Protocol Intent",
          quote_journalist: "Does the company acknowledge that Onco-701 failed to demonstrate efficacy in Cohort B?",
          quote_doctrine: "Primary endpoint was met; subgroup evaluations are exploratory and underpowered.",
          inquiry_trap: "Trying to force an on-the-record soundbite conceding 'trial failure' to anchor future price negotiations.",
          legal_boundary: "Securities law and regulatory compliance prohibit misrepresenting pre-specified trial design as an endpoint failure.",
          clear_translation: "Reaffirm that the primary trial goal (overall survival) was met with high significance, and explain plainly why exploratory subsets cannot be declared 'failed'.",
          assessment: "Under no circumstances use the journalist's framing of 'failure'. Re-anchor in the protocol-defined primary endpoint: overall survival benefit for the intention-to-treat population."
        },
        {
          severity: "MEDIUM",
          title: "Speculation on Regulatory Label Scope",
          quote_journalist: "Will you restrict your upcoming FDA and EMA regulatory filings to exclude this subgroup?",
          quote_doctrine: "Spokespersons shall not speculate on final approved labeling prior to agency determination.",
          inquiry_trap: "Pressing the company to concede label narrowing before regulatory dossiers are formally submitted.",
          legal_boundary: "FDA/EMA regulations strictly govern statements regarding pending drug applications and prospective indication scope.",
          clear_translation: "State that full clinical dossiers are being submitted as scheduled, and that regulatory agencies review the holistic totality of evidence.",
          assessment: "Remind the reporter that regulatory filings submit the complete dataset, and final labeling is determined through statutory scientific review by health authorities."
        }
      ],
      recommended_statement: "The Phase III study met its primary endpoint, demonstrating a statistically significant and clinically meaningful overall survival improvement across the intended patient population. Exploratory subgroup analyses showed clinical activity consistent with the broader cohort, and full safety and efficacy data will be presented at an upcoming medical congress. We look forward to advancing our regulatory submissions with health authorities globally.",
      strategic_advisory: "Strictly adhere to the term 'exploratory subgroup analysis'. Do not engage in hypothetical pricing or reimbursement debates while regulatory filings are active."
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
      outlet: "Biopharma Insights International",
      journalist: "E. Vance & M. Thorne",
      deadline: "Heute, 17:00 Uhr",
      inquiry_text: `Sehr geehrte Damen und Herren,

wir recherchieren für einen Schwerpunktartikel zu den neuen Phase-III-Ergebnissen Ihres Wirkstoffs Onco-701.

Aus informierten Kreisen hören wir, dass die Studie in der wichtigen Subgruppe 'Kohorte B' keine statistische Überlegenheit gegenüber dem Behandlungsstandard nachweisen konnte.

Wir bitten um Beantwortung folgender Fragen:
1. Bestätigen Sie, dass Onco-701 in Kohorte B gescheitert ist?
2. Werden Sie bei den Zulassungsanträgen bei FDA und Swissmedic diesen Patientenkreis ausklammern?
3. Wie rechtfertigen Sie Ihre Preisvorstellungen angesichts dieser ernüchternden Subgruppen-Daten?`,
      official_wording_title: "Klinische Publizitäts- & Governance-Richtlinie (SOP-MED-402)",
      official_wording_quote: "«Die Kommunikation klinischer Daten basiert auf den im Studienprotokoll formal definierten primären Endpunkten. Subgruppen-Analysen sind explorativ. Sprecher dürfen vor Abschluss behördlicher Nutzenbewertungen nicht über finale Erstattungspreise oder Indikationsgrenzen spekulieren.»",
      compliance_authority: "Globale Zulassung & Legal Compliance",
      contradictions: [
        {
          severity: "HOCH",
          title: "Vorwurf des Studienversagens vs. Studienprotokoll",
          quote_journalist: "Bestätigen Sie, dass Onco-701 in Kohorte B gescheitert ist?",
          quote_doctrine: "Der primäre Endpunkt Gesamtüberleben wurde signifikant erreicht; Subgruppen sind explorativ.",
          inquiry_trap: "Der Journalist will ein Zitat provozieren, das das Wort 'gescheitert' enthält, um künftige Preisverhandlungen zu schwächen.",
          legal_boundary: "Kapitalmarktrecht und regulatorische Vorgaben verbieten es, ein vorab definiertes Studiendesign fälschlich als Misserfolg darzustellen.",
          clear_translation: "Klarstellen, dass das Studienziel (Gesamtüberleben) mit hoher Signifikanz erreicht wurde und Subgruppen statistisch für explorative Trends angelegt waren.",
          assessment: "Das Wording des Journalisten ('gescheitert') keinesfalls übernehmen. Auf den primären Endpunkt fokussieren: statistisch signifikanter Überlebensvorteil der Gesamtkohorte."
        },
        {
          severity: "MITTEL",
          title: "Spekulation über künftige Zulassungsgrenzen",
          quote_journalist: "Werden Sie Kohorte B beim Zulassungsantrag ausklammern?",
          quote_doctrine: "Keine Spekulation über Indikationseinschränkungen vor behördlicher Begutachtung.",
          inquiry_trap: "Versuch, das Unternehmen zu einem vorzeitigen Rückzug aus einer Sub-Indikation zu drängen.",
          legal_boundary: "Zulassungsgesetze verlangen die Einreichung des Gesamtdossiers; finale Indikationen obliegen den Behörden.",
          clear_translation: "Betonen, dass die Daten termingerecht eingereicht werden und die Zulassungsbehörden die Gesamtheit der klinischen Evidenz beurteilen.",
          assessment: "Erklären, dass die Dossiers vollständig eingereicht werden und die finale Fachinformation im behördlichen Prüfverfahren festgelegt wird."
        }
      ],
      recommended_statement: "Die Phase-III-Studie hat ihren primären Endpunkt erreicht und einen statistisch signifikanten sowie klinisch bedeutsamen Gesamtüberlebensvorteil für die Gesamtpopulation nachgewiesen. Die explorativen Subgruppen-Analysen zeigen ein konsistentes Wirksamkeits- und Sicherheitsprofil. Die vollständigen Daten werden an einem kommenden Fachkongress präsentiert. Wir bereiten die Zulassungsanträge weltweit planmässig vor.",
      strategic_advisory: "Konsequent den Begriff 'explorative Subgruppenanalyse' verwenden. Keine Spekulationen über Erstattungspreise während laufender Verfahren."
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
