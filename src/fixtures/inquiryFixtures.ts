export interface Contradiction {
  severity: 'HOCH' | 'MITTEL' | 'GERING';
  title: string;
  quote_journalist: string;
  quote_doctrine: string;
  assessment: string;
}

export interface InquiryData {
  outlet: string;
  journalist: string;
  deadline: string;
  inquiry_text: string;
  official_wording_title: string;
  official_wording_quote: string;
  contradictions: Contradiction[];
  recommended_statement: string;
  strategic_advisory: string;
}

export const INQUIRY_FIXTURES: Record<string, InquiryData> = {
  alpine_transit_crisis: {
    outlet: "Nachrichtenagentur Keystone",
    journalist: "Redaktion Inland",
    deadline: "ASAP",
    inquiry_text: "Wir erhalten Meldungen über einen Totalausfall der Signalsteuerung im Alpen-Basistunnel. Auf Plattform X behaupten Hackergruppen, sie hätten die Systeme infiltriert. Können Sie einen Cyberangriff ausschliessen?",
    official_wording_title: "Notfallprotokoll IT-Sicherheit & Kritische Infrastruktur",
    official_wording_quote: "«Bei technischen Störungen äussern wir uns erst nach gesicherter Diagnose. Spekulationen über Cyberangriffe werden nicht kommentiert, bis das Nationale Zentrum für Cybersicherheit (NCSC) einbezogen wurde.»",
    contradictions: [
      {
        severity: "HOCH",
        title: "Druck zur sofortigen Bestätigung/Dementi",
        quote_journalist: "Können Sie einen Cyberangriff ausschliessen?",
        quote_doctrine: "Spekulationen werden nicht kommentiert",
        assessment: "Ein sofortiges Dementi birgt hohe Risiken, falls sich später ein Angriff bestätigt. Striktes Einhalten der Sprachregelung zwingend."
      }
    ],
    recommended_statement: "Aktuell verzeichnen wir eine technische Störung im Leitsystem des Alpen-Basistunnels. Die Sicherheitsteams arbeiten mit Hochdruck an der Diagnose. Zu Ursachen können wir zum jetzigen Zeitpunkt keine Angaben machen. Wir informieren fortlaufend.",
    strategic_advisory: "Fokus auf 'technische Störung' legen. Das Wort 'Cyberangriff' weder bestätigen noch aktiv dementieren."
  },
  esg_investigation: {
    outlet: "Sonntags-Recherche Desk",
    journalist: "L. Meyer & S. Baumann",
    deadline: "Heute, 16:00 Uhr",
    inquiry_text: `Sehr geehrte Damen und Herren,

Uns liegen Dokumente vor, wonach Ihr Hauptzulieferer für den Ausbau des Staudamms 'Lago Bianco' (Firma 'SteelCorp Asia') in seiner Produktionsstätte Zwangsarbeit einsetzt. 

Wir bitten um Stellungnahme:
1. War der Direktion bekannt, dass 'SteelCorp Asia' auf der Warnliste von Amnesty International steht?
2. Warum wurde der Vertrag trotz der neuen ESG-Konzernvorgaben im Januar 2026 verlängert?
3. Werden Sie die Revisionsberichte des Subunternehmers offenlegen?`,
    official_wording_title: "Lieferantenkodex & ESG-Compliance (Ref. ESG-2025-V2)",
    official_wording_quote: "«Alle Tier-1 Lieferanten unterliegen strengen Audits. Bei Verdacht auf Menschenrechtsverletzungen wird sofort eine unabhängige Untersuchung eingeleitet. Verträge werden bei erwiesenen Verstössen sistiert.»",
    contradictions: [
      {
        severity: "HOCH",
        title: "Vertragsverlängerung vs. Warnliste",
        quote_journalist: "Warum wurde der Vertrag trotz ESG-Vorgaben verlängert?",
        quote_doctrine: "Tier-1 Lieferanten unterliegen strengen Audits",
        assessment: "Kritische Diskrepanz. Es muss geklärt werden, ob 'SteelCorp' als Tier-1 oder Tier-2 klassifiziert wurde und welches Audit der Verlängerung zugrunde lag."
      },
      {
        severity: "MITTEL",
        title: "Transparenz der Revisionsberichte",
        quote_journalist: "Werden Sie die Revisionsberichte offenlegen?",
        quote_doctrine: "Unabhängige Untersuchung wird eingeleitet",
        assessment: "Die Doktrin verlangt eine Untersuchung, schweigt aber zur Veröffentlichung. Ein Verweis auf Geschäftsgeheimnisse könnte defensiv wirken."
      }
    ],
    recommended_statement: "Die Einhaltung von Menschenrechten und Arbeitsstandards ist für uns nicht verhandelbar. Wir nehmen die Hinweise sehr ernst. Der erwähnte Zulieferer hat im Dezember 2025 ein unabhängiges Zertifizierungsaudit bestanden. Aufgrund der neuen Vorwürfe haben wir umgehend eine externe Sonderprüfung in Auftrag gegeben. Bis zu deren Abschluss ruhen weitere Vergaben an dieses Unternehmen.",
    strategic_advisory: "Proaktives Handeln demonstrieren (Sonderprüfung). Nicht in eine Abwehrhaltung zu den Amnesty-Listen gehen, sondern auf den eigenen, formalisierten Audit-Prozess verweisen."
  },
  health_data_breach: {
    outlet: "Tageszeitung Inland",
    journalist: "F. Müller",
    deadline: "Morgen, 10:00 Uhr",
    inquiry_text: "Datenschützer kritisieren den Entscheid, die neuen e-Patientendossiers bei einem US-Hyperscaler zu hosten. Wie garantieren Sie, dass keine US-Behörden Zugriff auf die Gesundheitsdaten erhalten?",
    official_wording_title: "Cloud-Strategie Gesundheitsportal",
    official_wording_quote: "«Alle sensiblen Gesundheitsdaten werden verschlüsselt ('Bring Your Own Key'). Die Schlüssel bleiben ausschliesslich in der Schweiz bei einer staatlich kontrollierten Stelle.»",
    contradictions: [
      {
        severity: "GERING",
        title: "Zugriffsdebatte",
        quote_journalist: "Garantieren Sie, dass keine US-Behörden Zugriff erhalten?",
        quote_doctrine: "Schlüssel bleiben ausschliesslich in der Schweiz",
        assessment: "Die Doktrin liefert die perfekte Antwort. Der Fokus muss auf der 'Bring Your Own Key' (BYOK) Architektur liegen."
      }
    ],
    recommended_statement: "Durch die 'Bring Your Own Key' Architektur haben weder der Cloud-Anbieter noch ausländische Behörden Zugriff auf unverschlüsselte Gesundheitsdaten. Der Schlüssel bleibt jederzeit in der Schweiz.",
    strategic_advisory: "Fokus auf die technische Unmöglichkeit des Zugriffs legen. Souverän und ruhig kommunizieren."
  }
};
