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
  gotthard_freight: {
    communication: "Kapazitätsbündelung auf der Gotthard-Achse: Temporäre Trassenpriorisierung internationaler Güterkorridore zur Sicherung der volkswirtschaftlichen Versorgungsketten.",
    headline_from_hell: "BUND OPFERT TESSINER PENDLER FÜR INTERNATIONALE GÜTERZÜGE",
    risk_score: 8.7,
    vulnerabilities: [
      {
        topic: "Regionales Ungleichgewicht",
        explanation: "Der Begriff 'volkswirtschaftliche Gesamteffizienz' erweckt den Eindruck einer Bevorzugung überregionaler Interessen gegenüber den Randregionen."
      },
      {
        topic: "Grundversorgungsauftrag",
        explanation: "Fehlende Zusagen zu verbindlichen Taktzeiten und Ersatzkonzepten im regionalen Personenverkehr."
      },
      {
        topic: "Priorisierungskriterien",
        explanation: "Die Kriterien der Trassenvergabe zwischen Güter- und Personenverkehr werden nicht transparent dargelegt."
      }
    ],
    stakeholder_reactions: [
      {
        stakeholder: "Regierungsrat Kanton Tessin",
        likely_reaction: "Kritik & Einberufung der Bundeshaus-Deputation",
        reasoning: "Ablehnung der Einschränkungen mit Verweis auf den verfassungsmässigen Grundversorgungsauftrag.",
        dossier_citation: "Medienmitteilung Staatsrat TI: 'Gleichwertige Erreichbarkeit muss gewährleistet bleiben'",
        sentiment: "negative"
      },
      {
        stakeholder: "Wirtschaftsverbände (economiesuisse, ASTAG)",
        likely_reaction: "Zustimmung mit Vorbehalt",
        reasoning: "Unterstützung für den Erhalt von Lieferketten, Forderung nach verlässlichen Zeitfenstern.",
        dossier_citation: "Stellungnahme Güterkorridore 2026",
        sentiment: "positive"
      },
      {
        stakeholder: "Pendlerorganisationen (Pro Bahn)",
        likely_reaction: "Öffentlicher Protest",
        reasoning: "Kritik an verlängerten Fahrzeiten und fehlenden direkten Alternativverbindungen.",
        dossier_citation: "Resolution Fahrgastverband Nord-Süd",
        sentiment: "negative"
      },
      {
        stakeholder: "Bundesamt für Verkehr (BAV)",
        likely_reaction: "Prüfungsauftrag",
        reasoning: "Betriebliche Begründung wird verlangt; Prüfung von Ersatzbussen wird angeordnet.",
        dossier_citation: "Aufsichtsschreiben BAV",
        sentiment: "mixed"
      }
    ],
    second_order_effects: [
      {
        effect: "Parlamentarische Vorstösse in der kommenden Wintersession.",
        probability: "high",
        timeframe: "48-72 Stunden"
      },
      {
        effect: "Verlagerung von Personenverkehr auf die Strasse (A2).",
        probability: "high",
        timeframe: "1-2 Wochen"
      },
      {
        effect: "Kritik an der Zuverlässigkeit des Bahnangebots.",
        probability: "medium",
        timeframe: "Mittelfristig"
      }
    ],
    management_summary: {
      diagnosis: "Die rein betriebswirtschaftliche Begründung stösst bei Pendlern und Kantonsbehörden auf deutlichen Widerstand.",
      impact: "Rasche Ausweitung der Debatte auf die politische Ebene und Belastung der Beziehungen zu den Standortkantonen.",
      verdict: "Empfehlung: Kommunikation erst nach Vorliegen konkreter Ersatz- und Kompensationsmassnahmen für den Kanton Tessin freigeben."
    }
  },
  cloud_sovereignty: {
    communication: "Weiterentwicklung der IT-Infrastruktur: Schrittweise Nutzung europäischer Cloud-Rechenzentren für standardisierte Applikationen.",
    headline_from_hell: "DATENMANAGEMENT: FRAGEN ZUR EINHALTUNG DER SOUVERÄNITÄTSDOKTRIN",
    risk_score: 8.2,
    vulnerabilities: [
      {
        topic: "Abweichung von bisherigen Vorgaben",
        explanation: "Frühere Berichte betonten die ausschliessliche Datenspeicherung in der Schweiz."
      },
      {
        topic: "Rechtliche Rahmenbedingungen",
        explanation: "Zugriffsrechte ausländischer Behörden müssen bei Vergabeentscheiden klar adressiert werden."
      }
    ],
    stakeholder_reactions: [
      {
        stakeholder: "Eidgenössischer Datenschutz- und Öffentlichkeitsbeauftragter (EDÖB)",
        likely_reaction: "Sachverhaltsabklärung",
        reasoning: "Prüfung der Einhaltung geltender Datenschutzbestimmungen.",
        dossier_citation: "EDÖB Leitfaden Cloud-Einsatz",
        sentiment: "negative"
      },
      {
        stakeholder: "Personalverbände",
        likely_reaction: "Forderung nach Transparenz",
        reasoning: "Fragen zu internen Kompetenzen und Auswirkungen auf Arbeitsplätze.",
        dossier_citation: "Mitteilung Personalausschuss",
        sentiment: "negative"
      }
    ],
    second_order_effects: [
      {
        effect: "Rückfragen institutioneller Kunden zu Datensicherheit.",
        probability: "high",
        timeframe: "3-5 Tage"
      }
    ],
    management_summary: {
      diagnosis: "Bestehende Doktrinen und neue Ausschreibungsunterlagen weisen Klärungsbedarf auf.",
      impact: "Mögliche regulatorische Nachfragen und Vertrauensverlust bei sicherheitsbewussten Kunden.",
      verdict: "Empfehlung: Technische Sicherheitsarchitektur (Schlüsselverwaltung, Verschlüsselung) vor Veröffentlichung präzisieren."
    }
  },
  counter_closure: {
    communication: "Anpassung des Vertriebsangebots: Ausbau persönlicher Reisebegleitung vor Ort und moderner Schalterterminals.",
    headline_from_hell: "KRITIK AN SCHALTERREDUKTION: BARRIEREFREIHEIT IM FOKUS",
    risk_score: 7.4,
    vulnerabilities: [
      {
        topic: "Wahrnehmung von Einsparungen",
        explanation: "Anpassungen werden vorwiegend als Leistungsabbau wahrgenommen."
      },
      {
        topic: "Barrierefreiheit",
        explanation: "Vulnerable Gruppen verlangen leicht zugängliche physische Alternativen."
      }
    ],
    stakeholder_reactions: [
      {
        stakeholder: "Senioren- und Behindertenorganisationen",
        likely_reaction: "Stellungnahme an Behörden",
        reasoning: "Forderung nach barrierefreiem Zugang zu Fahrausweisen ohne Smartphone-Pflicht.",
        dossier_citation: "Positionspapier Barrierefreies Reisen",
        sentiment: "negative"
      },
      {
        stakeholder: "Gemeindevertretungen",
        likely_reaction: "Intervention bei Kantonen",
        reasoning: "Bedenken bezüglich der Attraktivität kleinerer Bahnhöfe.",
        dossier_citation: "Gemeindeverband Protokoll",
        sentiment: "negative"
      }
    ],
    second_order_effects: [
      {
        effect: "Kantonale Anfragen zur Grundversorgung im ländlichen Raum.",
        probability: "high",
        timeframe: "Kommende Session"
      }
    ],
    management_summary: {
      diagnosis: "Die Massnahme erfordert ein klares Bekenntnis zu alternativen, niederschwelligen Betreuungsangeboten.",
      impact: "Reputationsrisiko insbesondere in Randregionen und bei älteren Zielgruppen.",
      verdict: "Empfehlung: Begleitmassnahmen (Telefonbestellung, Vor-Ort-Assistenz) gleichwertig kommunizieren."
    }
  }
};
