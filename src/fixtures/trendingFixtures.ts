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
  health_data_breach: {
    cards: [
      {
        id: "trend-h1",
        topic: "Datenschutz & Souveränität",
        headline: "Patientendaten in den USA: Ärzteverband warnt vor 'Gläsernen Patienten'",
        outlets_involved: ["NZZ", "Tages-Anzeiger", "MedInside"],
        velocity_change: "+420% (12h)",
        tipping_point_score: 89,
        sentiment_split: { positive: 5, neutral: 15, negative: 80 },
        summary: "Massive Beschleunigung der Debatte nach Stellungnahme der Ärzteverbindung. Fokus verlagert sich von Technologie-Foren in die politische Hauptarena."
      },
      {
        id: "trend-h2",
        topic: "Politischer Vorstoss",
        headline: "Dringliche Interpellation: Moratorium für e-Dossier-Migration",
        outlets_involved: ["Blick", "Radio SRF 1"],
        velocity_change: "+150% (4h)",
        tipping_point_score: 65,
        sentiment_split: { positive: 10, neutral: 30, negative: 60 },
        summary: "Parlamentarier kündigen Vorstösse für die Herbstsession an, um die Migration auf Eis zu legen."
      }
    ],
    blueprints: {
      hintergrund: {
        id: "hintergrund",
        label: "Hintergrundartikel",
        target_audience: "IT- & Gesundheitsredaktionen",
        psychological_objective: "Technische Realität (BYOK) gegen emotionale Angstszenarien positionieren.",
        blueprint_content: `### BRIEFING: HINTERGRUNDARTIKEL\nFokus auf die kryptographische Trennung von Daten und Schlüsseln (Bring Your Own Key). Klarstellen, dass das 'Hosting' keine 'Einsicht' bedeutet.`
      },
      social: {
        id: "social",
        label: "Social Media",
        target_audience: "Besorgte Bürger & Patienten",
        psychological_objective: "Beruhigung durch einfache, absolute Aussagen.",
        blueprint_content: `### LEITFADEN: SOCIAL MEDIA\n«Ihre Gesundheitsdaten bleiben privat. Niemand – auch nicht der Betreiber der Server – kann ohne den Schweizer Schlüssel darauf zugreifen.»`
      },
      talking_points: {
        id: "talking_points",
        label: "Talking Points",
        target_audience: "Direktion",
        psychological_objective: "Souveränität ausstrahlen und Vertrauen in Schweizer Institutionen stärken.",
        blueprint_content: `### TALKING POINTS\n«Wir haben die strengsten Datenschutzrichtlinien der Welt angewendet. Ein Zugriff US-amerikanischer Behörden auf Patientendaten ist technisch ausgeschlossen.»`
      },
      qa_brief: {
        id: "qa_brief",
        label: "Q&A Leitfaden",
        target_audience: "Medienstelle",
        psychological_objective: "Triage von technischen und politischen Rückfragen.",
        blueprint_content: `### Q&A LEITFADEN\nDetaillierte Antworten zu CLOUD Act, Verschlüsselungsalgorithmen und den Standorten der Schlüsselverwaltung.`
      }
    }
  },
  alpine_transit_crisis: {
    cards: [
      {
        id: "trend-a1",
        topic: "Krisenmanagement",
        headline: "Gerüchte über Cyberangriff auf Schweizer Verkehrsinfrastruktur",
        outlets_involved: ["X (Trending)", "20 Minuten (Ticker)"],
        velocity_change: "+850% (2h)",
        tipping_point_score: 95,
        sentiment_split: { positive: 2, neutral: 8, negative: 90 },
        summary: "Rasante Verbreitung von Spekulationen auf Social Media mangels offizieller technischer Diagnose."
      }
    ],
    blueprints: {
      hintergrund: { id: "hintergrund", label: "Hintergrund", target_audience: "Alle", psychological_objective: "Faktenbasierte Diagnose", blueprint_content: "Fokus auf die tatsächliche technische Ursache (Stellwerk)." },
      social: { id: "social", label: "Social", target_audience: "Pendler", psychological_objective: "Transparenz", blueprint_content: "Laufende Updates zum Status der Fehlerbehebung." },
      talking_points: { id: "talking_points", label: "Talking Points", target_audience: "Mediensprecher", psychological_objective: "De-Eskalation", blueprint_content: "«Es handelt sich um einen lokalen Hardware-Defekt, nicht um einen Hackerangriff.»" },
      qa_brief: { id: "qa_brief", label: "Q&A", target_audience: "Medienstelle", psychological_objective: "Klarheit", blueprint_content: "Antworten zu Ausfallzeiten und Backup-Systemen." }
    }
  },
  esg_investigation: {
    cards: [
      {
        id: "trend-e1",
        topic: "Reputation & Finanzen",
        headline: "Greenwashing-Vorwürfe belasten Mega-Projekt",
        outlets_involved: ["Finanz und Wirtschaft", "NZZ"],
        velocity_change: "+210% (24h)",
        tipping_point_score: 75,
        sentiment_split: { positive: 10, neutral: 20, negative: 70 },
        summary: "Investoren zeigen sich besorgt über mögliche ESG-Downgrades aufgrund der Lieferketten-Vorwürfe."
      }
    ],
    blueprints: {
      hintergrund: { id: "hintergrund", label: "Hintergrund", target_audience: "Wirtschaftspresse", psychological_objective: "Handlungsfähigkeit beweisen", blueprint_content: "Detaillierte Darlegung des Audit-Prozesses." },
      social: { id: "social", label: "Social", target_audience: "NGOs/Aktivisten", psychological_objective: "Dialogbereitschaft", blueprint_content: "«Wir tolerieren keine Menschenrechtsverletzungen und klären die Vorwürfe schonungslos auf.»" },
      talking_points: { id: "talking_points", label: "Talking Points", target_audience: "Management", psychological_objective: "Verantwortung übernehmen", blueprint_content: "«Wir haben sofort eine unabhängige Untersuchung eingeleitet.»" },
      qa_brief: { id: "qa_brief", label: "Q&A", target_audience: "Medienstelle", psychological_objective: "Transparenz", blueprint_content: "Umgang mit den Zertifikaten und zukünftige Lieferantenauswahl." }
    }
  }
};
