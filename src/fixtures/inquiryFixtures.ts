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
  cloud_sovereignty: {
    outlet: "SonntagsZeitung (Wirtschaft)",
    journalist: "Stefan B. & Fabienne M.",
    deadline: "Heute, 17:00 Uhr (Redaktionsschluss)",
    inquiry_text: `Sehr geehrte Damen und Herren,

Uns liegen Ausschreibungsunterlagen zum Projekt «Nimbostratus» vor (Stand August 2026). Darin wird die geplante Nutzung von Microsoft Azure (Region Europe West) für Teile der Kundenstammdaten thematisiert.

Wir bitten bis heute 17:00 Uhr um Stellungnahme:
1. Trifft es zu, dass die Nutzung internationaler Hyperscaler für Kundendaten geprüft oder vorbereitet wird?
2. Wie verhält sich dies zu früheren Aussagen bezüglich ausschliesslicher Datenspeicherung in der Schweiz?
3. Welche wirtschaftlichen oder technischen Gründe sprechen für diesen Schritt?`,
    official_wording_title: "Doktrin Datenspeicherung & Kundeninformation (Beschluss GL 12/2024, Ref. W-2024-884)",
    official_wording_quote: "«Die Speicherung und Verarbeitung identifizierender Reisedaten erfolgt auf gesicherten, in der Schweiz lokalisierten Infrastrukturen. Ein unbefugter Zugriff Dritter oder ausländischer Stellen wird durch organisatorische und kryptographische Vorgaben unterbunden.»",
    contradictions: [
      {
        severity: "HOCH",
        title: "Diskrepanz bei Serverstandort",
        quote_journalist: "Nutzung von Microsoft Azure (Region Europe West)",
        quote_doctrine: "In der Schweiz lokalisierte Infrastrukturen",
        assessment: "Die Ausschreibungsunterlagen weichen vom Wortlaut der bisherigen Doktrin ab. Klärung des tatsächlichen Geltungsbereichs erforderlich."
      },
      {
        severity: "MITTEL",
        title: "Rechtliche Rahmenbedingungen (Zugriff Dritter)",
        quote_journalist: "Nutzung internationaler Hyperscaler für Kundendaten",
        quote_doctrine: "Zugriff ausländischer Stellen wird unterbunden",
        assessment: "Bei Nutzung ausländischer Cloud-Anbieter sind die technischen Schutzmassnahmen (BYOK, Verschlüsselung) präzise darzulegen."
      },
      {
        severity: "GERING",
        title: "Begründung der Massnahme",
        quote_journalist: "Wirtschaftliche oder technische Gründe...",
        quote_doctrine: "Sicherheits- und Qualitätsstandards haben Priorität",
        assessment: "Es empfiehlt sich, technische Resilienz und Verfügbarkeit in den Vordergrund zu stellen."
      }
    ],
    recommended_statement: `Die Sicherheit von Kundendaten hat für uns höchste Priorität.

Im Rahmen laufender Architekturprüfungen werden moderne Betriebsmodelle evaluiert. Massgeblich ist dabei, dass sensible personenbezogene Daten stets nach Schweizer Rechts- und Datenschutzstandards geschützt bleiben und die kryptographische Schlüsselkontrolle in Schweizer Hand liegt.

Zu laufenden Evaluationen nehmen wir im Detail keine Stellung. Eine Weitergabe unverschlüsselter personenbezogener Daten ins Ausland ist ausgeschlossen. Ein Vergabeentscheid liegt noch nicht vor.`,
    strategic_advisory: "Hinweis für Mediensprecher: Keine Projektinterna kommentieren. Auf den Schutz der Daten durch kryptographische Massnahmen und die geltenden Schweizer Datenschutzgesetze verweisen."
  },
  gotthard_freight: {
    outlet: "Tages-Anzeiger & Corriere del Ticino",
    journalist: "Christoph R. / Marco M.",
    deadline: "16:30 Uhr",
    inquiry_text: "Nach unseren Informationen sieht das Betriebskonzept ab November vor, 60% der Gütertrassen im Gotthard-Basistunnel prioritär zu behandeln, während einzelne Direktverbindungen im Personenverkehr reduziert werden. Trifft dies zu?",
    official_wording_title: "Grundsätze Trassenvergabe & Erreichbarkeit Tessin (Stand 06/2026)",
    official_wording_quote: "«Bund und Bahnen gewährleisten eine verlässliche Anbindung des Kantons Tessin an das nationale Schnellbahnnetz im Stundentakt.»",
    contradictions: [
      {
        severity: "HOCH",
        title: "Einschränkung der Direktverbindungen",
        quote_journalist: "Reduktion einzelner Direktverbindungen im Personenverkehr",
        quote_doctrine: "Verlässliche Anbindung im Stundentakt",
        assessment: "Verlängerte Reisezeiten durch Umsteigeverbindungen müssen durch ein schlüssiges Gesamtersatzkonzept begründet werden."
      }
    ],
    recommended_statement: "Der Gotthard-Basistunnel erfüllt eine zentrale Funktion für den Personen- und Güterverkehr. Um die Zuverlässigkeit des Gesamtsystems während der Bauarbeiten sicherzustellen, wird die Trassenkapazität sorgfältig zwischen Versorgungs- und Reisezügen aufgeteilt. Das Tessin bleibt über direkte und getaktete Verbindungen sowie zusätzliche Buskapazitäten angebunden.",
    strategic_advisory: "Hinweis für Mediensprecher: Betonen, dass Trassenentscheide in Abstimmung mit dem BAV erfolgen, um einen stabilen Bahnbetrieb zu sichern."
  },
  counter_closure: {
    outlet: "Blick & Radio SRF",
    journalist: "Sarah K.",
    deadline: "14:00 Uhr",
    inquiry_text: "Verschiedene Organisationen fordern ein Moratorium für die Schliessung bedienter Schalter an 24 Regionalbahnhöfen. Wie reagieren Sie auf die Bedenken bezüglich digitaler Barrierefreiheit?",
    official_wording_title: "Leitlinien Kundenservice & Barrierefreiheit (Stand 01/2026)",
    official_wording_quote: "«Persönliche Beratung und niederschwellige Unterstützung bleiben ein zentraler Bestandteil des Service Public.»",
    contradictions: [
      {
        severity: "MITTEL",
        title: "Verhältnis von Schalterabbau zu Beratungsanspruch",
        quote_journalist: "Schliessung bedienter Schalter an 24 Standorten",
        quote_doctrine: "Persönliche Beratung bleibt zentraler Bestandteil",
        assessment: "Die Verlagerung von Schalterpersonal zu mobilen Beratungsformen muss verständlich erklärt werden."
      }
    ],
    recommended_statement: "Wir passen unsere Präsenz an das veränderte Reise- und Buchungsverhalten an. Wo Schalter wenig genutzt werden, setzen wir vermehrt auf mobile Kundenberatung, Schulungsangebote für Seniorinnen und Senioren sowie eine kostenlose telefonische Ticketbestellung. Ziel ist es, Unterstützung flexibler und barrierefrei anzubieten.",
    strategic_advisory: "Hinweis für Mediensprecher: Den Begriff 'Schliessung' vermeiden; stattdessen die konkreten Beratungsalternativen vor Ort und telefonisch aufzeigen."
  }
};
