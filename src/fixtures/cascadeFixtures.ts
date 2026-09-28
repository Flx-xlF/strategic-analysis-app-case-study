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

export interface CascadeData {
  communication: string;
  headline_from_hell: string;
  risk_score: number;
  vulnerabilities: Array<{ topic: string; explanation: string }>;
  stakeholder_reactions: StakeholderNode[];
  second_order_effects: SecondOrderEffect[];
  management_summary: {
    diagnosis: string;
    impact: string;
    verdict: string;
  };
}

export const CASCADE_FIXTURES: Record<string, CascadeData> = {
  alpine_transit_crisis: {
    communication: "Laufende Diagnose einer Stellwerkstörung im Alpen-Basistunnel. Experten arbeiten an der Behebung. Keine Hinweise auf externe Manipulation.",
    headline_from_hell: "HACKER-ANGRIFF AUF ALPEN-TUNNEL: WAREN PASSAGIERE IN LEBENSGEFAHR?",
    risk_score: 9.4,
    vulnerabilities: [
      {
        topic: "Informationsvakuum",
        explanation: "Die ersten 45 Minuten ohne offizielle Diagnose liessen Raum für Spekulationen auf Social Media."
      },
      {
        topic: "Fehlende 'Proof of Life' Kommunikation",
        explanation: "Bilder von evakuierten Zügen fehlen, was Gerüchte über eingeschlossene Personen befeuert."
      },
      {
        topic: "Geopolitischer Kontext",
        explanation: "Aktuelle Spannungen verstärken die Glaubhaftigkeit von Cyber-Gerüchten."
      }
    ],
    stakeholder_reactions: [
      {
        stakeholder: "Sicherheitskommission des Parlaments",
        likely_reaction: "Forderung nach Sondersitzung",
        reasoning: "Angst vor Verletzlichkeit kritischer Infrastrukturen.",
        dossier_citation: "Interpellation 'Schutz kritischer Knotenpunkte'",
        sentiment: "negative"
      },
      {
        stakeholder: "Kantonale Rettungskräfte",
        likely_reaction: "Bereitschaft & Frustration",
        reasoning: "Unklare Informationslage erschwert die Dispositionsplanung.",
        dossier_citation: "Einsatzprotokoll Pikettdienst",
        sentiment: "mixed"
      },
      {
        stakeholder: "Logistik- & Speditionsverbände",
        likely_reaction: "Forderung nach Umleitungsplänen",
        reasoning: "Hohe wirtschaftliche Ausfälle pro Stunde Stillstand.",
        dossier_citation: "Notfallplan Güterverkehr 2026",
        sentiment: "negative"
      }
    ],
    second_order_effects: [
      {
        effect: "Politische Vorstösse zur Aufstockung des Cybersicherheits-Budgets.",
        probability: "high",
        timeframe: "Innerhalb 48h"
      },
      {
        effect: "Internationale Berichterstattung über Vulnerabilität der Nord-Süd-Achse.",
        probability: "high",
        timeframe: "Sofort"
      }
    ],
    management_summary: {
      diagnosis: "Ein technischer Defekt transformiert sich durch Social Media Dynamik in eine nationale Sicherheitskrise.",
      impact: "Massiver Reputationsschaden, wenn das Narrativ 'Cyberangriff' nicht sofort durch transparente technische Fakten dekonstruiert wird.",
      verdict: "Empfehlung: Sofortige Pressekonferenz mit Chef-Ingenieur. Fokus auf triviale Fehlerursache (z.B. Hardwaredefekt) um Verschwörungstheorien zu ersticken."
    }
  },
  esg_investigation: {
    communication: "Wir nehmen die Hinweise ernst und haben eine externe Sonderprüfung des Zulieferers angeordnet.",
    headline_from_hell: "MENSCHENRECHTSVERLETZUNGEN: STAATSBETRIEB BAUT STAUDAMM MIT ZWANGSARBEIT",
    risk_score: 8.8,
    vulnerabilities: [
      {
        topic: "Prüfungs-Versagen",
        explanation: "Wie konnte der Zulieferer das interne Zertifizierungsaudit bestehen?"
      },
      {
        topic: "Sub-Contracting Ketten",
        explanation: "Fehlende Sichtbarkeit in Tier-2 und Tier-3 Lieferanten."
      }
    ],
    stakeholder_reactions: [
      {
        stakeholder: "NGOs (Amnesty, Public Eye)",
        likely_reaction: "Kampagnen-Eskalation",
        reasoning: "Forderung nach generellem Ausschluss des Zulieferers.",
        dossier_citation: "NGO-Watchlist 2026",
        sentiment: "negative"
      }
    ],
    second_order_effects: [
      {
        effect: "Ausschluss von nachhaltigen Investmentfonds (ESG-Downgrade).",
        probability: "medium",
        timeframe: "1-2 Monate"
      }
    ],
    management_summary: {
      diagnosis: "Klassisches 'Say-Do' Gap zwischen internen Richtlinien und Realität auf der Baustelle.",
      impact: "Gefährdung von 'Green Bonds' und nachhaltigen Finanzierungen.",
      verdict: "Empfehlung: Radikale Transparenz. Offenlegung der Audit-Prozesse und sofortige Sistierung des Vertrags."
    }
  },
  health_data_breach: {
    communication: "Sichere Verschlüsselung garantiert, dass Patientendaten in der Cloud absolut geschützt bleiben.",
    headline_from_hell: "PATIENTENDATEN AN DIE USA VERKAUFT: DATENSCHÜTZER SCHLAGEN ALARM",
    risk_score: 7.2,
    vulnerabilities: [
      {
        topic: "Technische Komplexität",
        explanation: "'Bring Your Own Key' (BYOK) ist für Laien schwer verständlich."
      }
    ],
    stakeholder_reactions: [
      {
        stakeholder: "Konsumentenschutz",
        likely_reaction: "Warnung an Patienten",
        reasoning: "Angst vor 'Gläsernen Patienten'.",
        dossier_citation: "Konsumenten-Info Q3",
        sentiment: "negative"
      }
    ],
    second_order_effects: [
      {
        effect: "Rückgang bei der Eröffnung neuer Patientendossiers.",
        probability: "high",
        timeframe: "Quartal 4"
      }
    ],
    management_summary: {
      diagnosis: "Hoch emotionale Debatte, bei der technische Argumente ungehört verhallen.",
      impact: "Verlangsamung der Digitalisierungsstrategie im Gesundheitswesen.",
      verdict: "Empfehlung: Fokusgruppen mit Ärzten bilden, die als vertrauenswürdige Botschafter die Sicherheit bestätigen."
    }
  }
};
