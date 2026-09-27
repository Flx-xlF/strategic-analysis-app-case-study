export type ContentFormatId = 'hintergrund' | 'social' | 'talking_points' | 'qa_brief';

export interface FormatBlueprint {
  id: ContentFormatId;
  label: string;
  target_audience: string;
  psychological_objective: string;
  blueprint_content: string;
}

export interface TrendingCardData {
  id: string;
  topic: string;
  headline: string;
  outlets_involved: string[];
  velocity_change: string;
  tipping_point_score: number;
  sentiment_split: { positive: number; neutral: number; negative: number };
  summary: string;
}

export interface TrendingScenarioData {
  cards: TrendingCardData[];
  blueprints: Record<ContentFormatId, FormatBlueprint>;
}

export const TRENDING_FIXTURES: Record<string, TrendingScenarioData> = {
  counter_closure: {
    cards: [
      {
        id: "trend-1",
        topic: "Barrierefreiheit & Vertrieb",
        headline: "Petition gegen Schalterschliessungen erreicht 25'000 Unterschriften",
        outlets_involved: ["Blick", "Tages-Anzeiger", "Radio SRF 1"],
        velocity_change: "+340% (24h)",
        tipping_point_score: 82,
        sentiment_split: { positive: 10, neutral: 20, negative: 70 },
        summary: "Die Diskussion um Schalterschliessungen an Regionalbahnhöfen gewinnt durch Unterstützung von Verbänden und Gemeinden an Dynamik."
      },
      {
        id: "trend-2",
        topic: "Gemeindeanliegen",
        headline: "Gemeindevertretungen fordern Einbezug bei Standortentscheiden",
        outlets_involved: ["Aargauer Zeitung", "St. Galler Tagblatt"],
        velocity_change: "+125% (48h)",
        tipping_point_score: 60,
        sentiment_split: { positive: 15, neutral: 35, negative: 50 },
        summary: "Gemeinden thematisieren die Erreichbarkeit und den Servicegrad kleinerer Stationen."
      },
      {
        id: "trend-3",
        topic: "Automatenbedienung",
        headline: "Rückmeldungen zur Benutzerführung an Ticketautomaten",
        outlets_involved: ["K-Tipp", "Saldo"],
        velocity_change: "+80% (3 Tage)",
        tipping_point_score: 48,
        sentiment_split: { positive: 10, neutral: 40, negative: 50 },
        summary: "Hinweise auf Bedienungshürden für Gelegenheitskundinnen und -kunden bei Software-Updates."
      }
    ],
    blueprints: {
      hintergrund: {
        id: "hintergrund",
        label: "Hintergrundartikel",
        target_audience: "Fach- und Wirtschaftsredaktionen",
        psychological_objective: "Entwicklung der Kundengewohnheiten faktenbasiert darlegen und alternative Angebote aufzeigen.",
        blueprint_content: `### BRIEFING: HINTERGRUNDARTIKEL

**Hauptaussage:**
Das Nutzungsverhalten hat sich in den vergangenen Jahren stark verlagert: Rund 90% der Billette werden heute digital oder am Automaten bezogen. Die Neuausrichtung sichert persönliche Unterstützung dort, wo gezielter Bedarf besteht.

**Struktur:**
1. **Entwicklung der Nachfrage:**
   - Rückgang der Schaltertransaktionen um rund 65% seit 2019.
   - Bedarf an Beratung konzentriert sich zunehmend auf komplexe Reiseketten und Gruppenreisen.
2. **Begleitangebote:**
   - Einsatz mobiler Kundenberater an zentralen Knotenpunkten.
   - Zusammenarbeit mit lokalen Partnern (z. B. Post, Dorfläden) in kleineren Gemeinden.
3. **Massnahmen für weniger digital-affine Reisende:**
   - Kostenlose telefonische Billetbestellung mit Rechnungsstellung und Postversand.
   - Informations- und Schulungsangebote in Zusammenarbeit mit Seniorenorganisationen.

**Kernzitat:**
> «Wir passen unsere Dienstleistungen an das reale Nutzungsverhalten an und stellen gleichzeitig sicher, dass niemand von der Mobilität ausgeschlossen wird.»`
      },
      social: {
        id: "social",
        label: "Social Media",
        target_audience: "Kundinnen und Kunden auf digitalen Kanälen",
        psychological_objective: "Sachlich informieren und auf bestehende Hilfsangebote verweisen.",
        blueprint_content: `### LEITFADEN: SOCIAL MEDIA RESPONSE

**Empfehlung:**
Auf konkrete Fragen sachlich antworten und direkt die alternativen Bezugswege benennen.

**Antwortbausteine:**

*Baustein A (Persönliche Unterstützung):*
«Wir verstehen die Bedenken bezüglich der Schalteranpassungen. Niemand soll am Bahnhof ohne Hilfe bleiben. Für telefonische Bestellungen steht unsere kostenlose Nummer 0800 000 000 zur Verfügung – Tickets werden auf Wunsch per Post zugestellt.»

*Baustein B (Präsenz vor Ort):*
«Unsere Mitarbeitenden sind weiterhin vor Ort im Einsatz – vermehrt als mobile Kundenberaterinnen und Kundenberater auf den Perrons, um direkt beim Billettkauf oder Umsteigen zu unterstützen.»`
      },
      talking_points: {
        id: "talking_points",
        label: "Talking Points",
        target_audience: "Mediensprecherinnen und Mediensprecher",
        psychological_objective: "Klare und nachvollziehbare Argumentation im Interview.",
        blueprint_content: `### TALKING POINTS

**Kernbotschaften:**
1. **Verändertes Nutzungsverhalten:** Fast 9 von 10 Billetten werden heute selbstständig gelöst. Starre Schalteröffnungszeiten entsprechen oft nicht mehr den Kundenbedürfnissen.
2. **Gezielte Unterstützung:** Persönliche Beratung bleibt bestehen – flexibler organisiert und ergänzt durch telefonische Unterstützung.
3. **Kooperationen mit Gemeinden:** Wir suchen das Gespräch mit den betroffenen Gemeinden, um individuelle Lösungen zu prüfen.`
      },
      qa_brief: {
        id: "qa_brief",
        label: "Q&A Leitfaden",
        target_audience: "Medienstelle & Auskunftspersonen",
        psychological_objective: "Wiederkehrende Fragen präzise und einheitlich beantworten.",
        blueprint_content: `### Q&A LEITFADEN

**Frage 1: Werden ältere Menschen durch diese Massnahme benachteiligt?**
*Antwort:* Nein. Wir bieten bewusst niederschwellige Alternativen an, darunter eine kostenfreie Telefon-Bestelllinie ohne Smartphone-Zwang und persönliche Schulungsangebote für die Nutzung von Automaten.

**Frage 2: Geht es bei den Schliessungen primär um Kosteneinsparungen?**
*Antwort:* Primäres Ziel ist die bedarfsgerechte Verteilung unserer Ressourcen. Mitarbeitende werden dort eingesetzt, wo die persönliche Präsenz den grössten Mehrwert für Reisende stiftet.`
      }
    }
  },
  gotthard_freight: {
    cards: [
      {
        id: "trend-g1",
        topic: "Güterverkehr & Logistik",
        headline: "Diskussion um Kapazitätsaufteilung auf der Nord-Süd-Achse",
        outlets_involved: ["NZZ", "Handelszeitung", "Corriere del Ticino"],
        velocity_change: "+260%",
        tipping_point_score: 78,
        sentiment_split: { positive: 25, neutral: 35, negative: 40 },
        summary: "Logistikverbände und Kantonsvertreter fordern Verlässlichkeit bei der Vergabe von Trassenfenstern."
      }
    ],
    blueprints: {
      hintergrund: {
        id: "hintergrund",
        label: "Hintergrundartikel",
        target_audience: "Wirtschaftsredaktionen",
        psychological_objective: "Zusammenhänge zwischen Güterverkehr und Versorgungsstabilität sachlich aufzeigen.",
        blueprint_content: `### BRIEFING: HINTERGRUNDARTIKEL
Fokus auf die Koordination von Baustellen, Gütertransit und Personenverkehr im alpenquerenden Verkehr.`
      },
      social: {
        id: "social",
        label: "Social Media",
        target_audience: "Reisende Nord-Süd",
        psychological_objective: "Transparente Fahrplaninformationen und Reisehinweise vermitteln.",
        blueprint_content: `### LEITFADEN: SOCIAL MEDIA
Regelmässige Aktualisierungen zum Fahrplanangebot und zu alternativen Reisemöglichkeiten via Panoramastrecke.`
      },
      talking_points: {
        id: "talking_points",
        label: "Talking Points",
        target_audience: "Mediensprecher",
        psychological_objective: "Ausgewogene Berücksichtigung von Personen- und Güterverkehr betonen.",
        blueprint_content: `### TALKING POINTS
«Ziel ist ein stabiler und sicherer Gesamtfahrplan. Personenverkehr und Güterversorgung werden kontinuierlich aufeinander abgestimmt.»`
      },
      qa_brief: {
        id: "qa_brief",
        label: "Q&A Leitfaden",
        target_audience: "Medienstelle",
        psychological_objective: "Betriebliche Entscheide nachvollziehbar begründen.",
        blueprint_content: `### Q&A LEITFADEN
Erläuterung der Trassenvergabekriterien und der getroffenen Massnahmen zur Fahrplanstabilisierung.`
      }
    }
  },
  cloud_sovereignty: {
    cards: [
      {
        id: "trend-c1",
        topic: "IT & Datenschutz",
        headline: "Medienberichte zu Cloud-Ausschreibungen im öffentlichen Sektor",
        outlets_involved: ["Republik", "Inside IT"],
        velocity_change: "+170%",
        tipping_point_score: 70,
        sentiment_split: { positive: 15, neutral: 35, negative: 50 },
        summary: "Branchenmedien diskutieren Rahmenbedingungen für die Nutzung internationaler Cloud-Dienste."
      }
    ],
    blueprints: {
      hintergrund: {
        id: "hintergrund",
        label: "Hintergrundartikel",
        target_audience: "Fach- und IT-Journalisten",
        psychological_objective: "Sicherheitsarchitektur und Datenschutzstandards verständlich darlegen.",
        blueprint_content: `### BRIEFING: HINTERGRUNDARTIKEL
Detaillierte Einordnung der technischen Schutzmassnahmen, Verschlüsselungsmodelle und rechtlichen Grundlagen.`
      },
      social: {
        id: "social",
        label: "Social Media",
        target_audience: "Interessierte Öffentlichkeit",
        psychological_objective: "Sachliche Klarstellung zu Datenschutzfragen.",
        blueprint_content: `### LEITFADEN: SOCIAL MEDIA
«Kundendaten werden nach Schweizer Datenschutzrecht verarbeitet und durch moderne Verschlüsselungsverfahren geschützt.»`
      },
      talking_points: {
        id: "talking_points",
        label: "Talking Points",
        target_audience: "Auskunftspersonen",
        psychological_objective: "Verlässlichkeit und Einhaltung gesetzlicher Vorgaben unterstreichen.",
        blueprint_content: `### TALKING POINTS
«Sicherheit und Verfügbarkeit haben höchste Priorität. Evaluationen erfolgen stets im Einklang mit Schweizer Datenschutzgesetzen.»`
      },
      qa_brief: {
        id: "qa_brief",
        label: "Q&A Leitfaden",
        target_audience: "Medienstelle",
        psychological_objective: "Präzise Antworten zu technischen und regulatorischen Vorgaben.",
        blueprint_content: `### Q&A LEITFADEN
Antworten zur Einhaltung der EDÖB-Vorgaben und zu den Schutzvorkehrungen bei Cloud-Nutzung.`
      }
    }
  }
};
