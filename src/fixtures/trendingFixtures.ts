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
  velocity_change: string; // e.g. "+340%"
  tipping_point_score: number; // 0-100
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
        topic: "DIGITALE AUSGRENZUNG / SENIOREN",
        headline: "Petition 'Rettet den Schalter' überschreitet 25'000 Unterschriften – Druck auf UVEK steigt",
        outlets_involved: ["Blick", "Tages-Anzeiger", "Radio SRF 1", "Le Nouvelliste"],
        velocity_change: "+340% (24h)",
        tipping_point_score: 88,
        sentiment_split: { positive: 8, neutral: 14, negative: 78 },
        summary: "Die Kampagne verlässt die lokale Nische. Durch die Unterstützung nationaler Behinderten- und Seniorenverbände droht ein Imageschaden für die gesamte digitale Vertriebsstrategie."
      },
      {
        id: "trend-2",
        topic: "GEMEINDEAUTONOMIE / REGIONEN",
        headline: "42 Gemeindepräsidenten fordern Moratorium für Schalterschliessungen",
        outlets_involved: ["Aargauer Zeitung", "St. Galler Tagblatt", "La Liberté"],
        velocity_change: "+125% (48h)",
        tipping_point_score: 64,
        sentiment_split: { positive: 12, neutral: 28, negative: 60 },
        summary: "Gemeinden koppeln die Schalterfrage an ihre Beiträge für regionale Bahnhofsaufwertungen. Politische Hebelwirkung entsteht."
      },
      {
        id: "trend-3",
        topic: "APP-BARRIEREFREIHEIT / UX",
        headline: "Verbraucherschutz testet Billettautomaten: 'Zu kompliziert für Gelegenheitskunden'",
        outlets_involved: ["K-Tipp", "Saldo"],
        velocity_change: "+85% (3 Tage)",
        tipping_point_score: 52,
        sentiment_split: { positive: 5, neutral: 35, negative: 60 },
        summary: "Technische Mängel bei der Benutzerführung am Automaten werden als Beweis für verfrühte Schliessungen angeführt."
      }
    ],
    blueprints: {
      hintergrund: {
        id: "hintergrund",
        label: "Hintergrund-Artikel",
        target_audience: "Wirtschaftsredaktoren & Leitartikler (NZZ, Tamedia, Le Temps)",
        psychological_objective: "Entemotionalisierung des Themas durch Verschiebung von 'Kostenreduktion' zu 'Erhöhung der Kundeninteraktions-Qualität'.",
        blueprint_content: `### STRATEGISCHER BRIEFING-BLUEPRINT: HINTERGRUND-DOSSIER

**Kernthese (Der rote Faden):**
Der physische Bahnhof wird nicht verlassen, sondern vom transaktionalen Druck entlastet. Glasschalter waren Barrieren – die Zukunft gehört dem menschlichen Mobilitätsberater auf der Fläche.

**Narrative Architektur & Gliederung:**
1. **Der Realitätscheck (Zahlen-Dossier):**
   - Transaktionsvolumen an Glasschaltern ist seit 2019 um 68% eingebrochen. 88% aller Tickets werden digital gelöst.
   - Ein starres Festhalten an Schaltern bindet Personal hinter Panzerglas, statt Reisenden mit eingeschränkter Mobilität am Bahnsteig zu helfen.
2. **Das neue Betreuungsmodell («Begleitetes Reisen 2026»):**
   - Präsentation der mobilen Stations-Stewards mit Tablet-Ausrüstung.
   - Kooperation mit Dorfläden und Poststellen in Randregionen (Gemeinde-Partnerschaften).
3. **Schutzschild für vulnerable Gruppen:**
   - 0800-Gratis-Bestelltelefon mit kostenloser Ticketzusendung per Post ohne Aufpreis.
   - 500 kostenlose Schulungsworkshops in Kooperation mit Pro Senectute Schweiz.

**Zitate für Mediensprecher:**
> «Wir sparen nicht am Service Public – wir holen unsere Mitarbeitenden hinter dem Schalterglas hervor, damit sie dort unterstützen können, wo Hilfe gebraucht wird.»`
      },
      social: {
        id: "social",
        label: "Social Media Briefing",
        target_audience: "Aufgebrachte Nutzer auf LinkedIn, X (Twitter) und Instagram-Kommentarspalten",
        psychological_objective: "De-Eskalation, Vermeidung von herablassender Technokratensprache, sofortiges Anbieten konkreter Alternativen.",
        blueprint_content: `### STRATEGISCHER BRIEFING-BLUEPRINT: RAPID-RESPONSE SOCIAL

**Leitlinie für Community Management:**
Keine Debatten über 'technischen Fortschritt' führen. Verständnis für Sorgen äussern und sofort die konkreten Hilfsangebote verlinken.

**Genehmigte Reaktionsbausteine:**

*Baustein A (Empathie & Hilfsangebot):*
«Wir verstehen vollkommen, dass die Umstellung für viele Reisende eine Hürde darstellt. Niemand soll am Bahnhof ratlos stehen bleiben. Deshalb gibt es ab sofort unseren kostenlosen Telefon-Service: Anrufen unter 0800 000 000 – wir buchen das Billet und senden es per Post nach Hause. Kostenlos.»

*Baustein B (Gegen den Vorwurf des 'Geisterbahnhofs'):*
«Bahnhöfe werden nicht menschenleer. Unsere Kundenbegleiter sind weiterhin vor Ort im Einsatz – mobil auf dem Perron statt hinter starrem Schalterglas. Sprecht uns jederzeit an!»`
      },
      talking_points: {
        id: "talking_points",
        label: "Talking Points (Spokespersons)",
        target_audience: "Mediensprecher bei TV-Interviews (SRF Rundschau) & Radio-Debatten",
        psychological_objective: "Framing-Hoheit halten. Die gegnerische Framing-Falle ('Schalterschliessung') niemals wiederholen.",
        blueprint_content: `### STRATEGISCHER BRIEFING-BLUEPRINT: SPOKESPERSON TALKING POINTS

**Absolute TABU-Wörter (Framing-Fallen):**
- ❌ «Schalterschliessungen» (Immer ersetzen durch: «Transformation unserer persönlichen Beratung»)
- ❌ «Nicht mehr rentabel» (Gefahr: Belegt den Vorwurf der Gewinnmaximierung)
- ❌ «Digital Natives / Zeitgeist» (Zynisch gegenüber älteren Generationen)

**Die 3 Goldenen Kernbotschaften:**
1. **«Service Public heisst: Niemanden zurücklassen.»** Wir garantieren den persönlichen Ticketkauf für jede Generation – telefonisch, mobil vor Ort und über Partnerschaften.
2. **«Mitarbeitende auf der Fläche statt hinter Glas.»** An den stark frequentierten Bahnhöfen verdoppeln wir die Präsenz sichtbarer Kundenlenker am Gleis.
3. **«Gemeinsam mit den Verbänden.»** Alle Begleitmassnahmen wurden mit Senioren- und Behindertenorganisationen erarbeitet und werden laufend optimiert.`
      },
      qa_brief: {
        id: "qa_brief",
        label: "Q&A Defensiv-Brief",
        target_audience: "Krisenstab & Vorbereitung auf Bundeshaus-Journalisten",
        psychological_objective: "Wasserdichte Antworten auf aggressive Nachfragen mit sofortiger Rückkehr auf sicheres Terrain.",
        blueprint_content: `### STRATEGISCHER BRIEFING-BLUEPRINT: DEFENSIV-Q&A

**F1: 25'000 Bürger unterschreiben eine Petition – ignorieren Sie den Volkswillen?**
*Antwort:* Wir nehmen die Bedenken sehr ernst. Die Petition zeigt, wie wichtig persönliche Nähe ist. Genau deshalb streichen wir den Service nicht, sondern verlagern ihn von starren Schaltern auf barrierefreie, mobile Beratungsformen und die kostenlose Telefonbestellung.

**F2: Spart das Unternehmen hier auf dem Buckel der schwächsten Kunden?**
*Antwort:* Nein. Die Investitionen in Schulungsprogramme, mobile Beratungsgeräte und die kostenlose Telefon-Infrastruktur übersteigen die Einsparungen der ersten zwei Jahre. Es handelt sich um eine Qualitätsinvestition in zukunftsfähige Beratung.`
      }
    }
  },
  gotthard_freight: {
    cards: [
      {
        id: "trend-g1",
        topic: "VERSORGUNGSSICHERHEIT / LOGISTIK",
        headline: "Nord-Süd-Transit stockt: Industrie schlägt Alarm wegen Lieferengpässen",
        outlets_involved: ["NZZ", "Handelszeitung", "Corriere del Ticino"],
        velocity_change: "+280%",
        tipping_point_score: 82,
        sentiment_split: { positive: 20, neutral: 40, negative: 40 },
        summary: "Stauungen auf der Gotthard-Achse gefährden die chemische Industrie und den Detailhandel."
      }
    ],
    blueprints: {
      hintergrund: {
        id: "hintergrund",
        label: "Hintergrund-Artikel",
        target_audience: "Wirtschaftsmedien",
        psychological_objective: "Darstellung als alternativlose Massnahme zur Abwendung eines nationalen Versorgungsnotstands.",
        blueprint_content: `### STRATEGISCHER BLUEPRINT: VERSORGUNGSSICHERHEIT SCHWEIZ
Fokus auf Systemrelevanz der Gütertrassen bei gleichzeitigem Ausbau der Schnellbus-Shuttles über die Autobahn.`
      },
      social: {
        id: "social",
        label: "Social Media Briefing",
        target_audience: "Pendler Süd-Nord",
        psychological_objective: "Transparenz über Baufortschritte und sofortige Bereitstellung von Reisealternativen.",
        blueprint_content: `### SOCIAL MEDIA RESPONSE: GOTTHARD-UPDATE
Echtzeit-Fahrplan-Updates und Direktlinks zu Entlastungszügen via Gotthard-Panoramastrecke.`
      },
      talking_points: {
        id: "talking_points",
        label: "Talking Points",
        target_audience: "Mediensprecher",
        psychological_objective: "Gleichbehandlung von Wirtschaft und Personenverkehr betonen.",
        blueprint_content: `### SPOKESPERSON TALKING POINTS: GOTTHARD
«Wir sichern die Schweizer Lebensmittel- und Güterversorgung und halten das Tessin mit zusätzlichen Direktbussen und Panoramazügen zuverlässig angebunden.»`
      },
      qa_brief: {
        id: "qa_brief",
        label: "Q&A Defensiv-Brief",
        target_audience: "Medienkonferenz",
        psychological_objective: "Faktenbasierte Entgegnung cantonaler Vorwürfe.",
        blueprint_content: `### DEFENSIV-Q&A: TRASSENVERGABE
Darlegung der gesetzlichen Trassenvergabekriterien nach Gütertransportgesetz.`
      }
    }
  },
  cloud_sovereignty: {
    cards: [
      {
        id: "trend-c1",
        topic: "CYBERSICHERHEIT / BUNDESRECHT",
        headline: "Debatte um Souveränität: Experten hinterfragen US-Cloud-Abhängigkeit",
        outlets_involved: ["Republik", "Inside IT", "SRF Digital"],
        velocity_change: "+190%",
        tipping_point_score: 75,
        sentiment_split: { positive: 10, neutral: 30, negative: 60 },
        summary: "Die IT-Sicherheitsbranche fordert Schweizer Datenspeicher für kritische Infrastrukturen."
      }
    ],
    blueprints: {
      hintergrund: {
        id: "hintergrund",
        label: "Hintergrund-Artikel",
        target_audience: "Tech- und Politikjournalisten",
        psychological_objective: "Positionierung als technologischer Vorreiter bei Zero-Trust- und Enclave-Architekturen.",
        blueprint_content: `### STRATEGISCHER BLUEPRINT: CLOUD-SOUVERÄNITÄT 2026
Detaillierte Darlegung des Schweizer Verschlüsselungs-Shields (BYOK) und Unabhängigkeit von Provider-Jurisdiktionen.`
      },
      social: {
        id: "social",
        label: "Social Media Briefing",
        target_audience: "Tech-Community",
        psychological_objective: "Sachliche Klarstellung von Fakten gegen Panikmache.",
        blueprint_content: `### SOCIAL RESPONSE: DATENSCHUTZ GARANTIE
«Ihre Reisedaten sind und bleiben nach Schweizer Recht verschlüsselt. Kein ausländischer Staat hat Zugriff auf Schweizer Kundenkonten.»`
      },
      talking_points: {
        id: "talking_points",
        label: "Talking Points",
        target_audience: "Management",
        psychological_objective: "Vertrauen von Bundeskunden und Großunternehmen sichern.",
        blueprint_content: `### MANAGEMENT TALKING POINTS
«Souveränität wird durch modernste Kryptographie in Schweizer Hand garantiert, nicht durch veraltete Server-Hardware.»`
      },
      qa_brief: {
        id: "qa_brief",
        label: "Q&A Defensiv-Brief",
        target_audience: "Parlamentarische Anfragen",
        psychological_objective: "Juristische Präzision zum DSG und US CLOUD Act.",
        blueprint_content: `### DEFENSIV-Q&A: DATENSICHERHEIT
Konkrete Nachweise zur Erfüllung aller Auflagen des EDÖB und Bundesratsentscheids Cloud 2025.`
      }
    }
  }
};
