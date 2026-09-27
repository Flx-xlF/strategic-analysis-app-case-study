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
    communication: "Kapazitätsbündelung auf der Gotthard-Achse: Temporäre Trassenpriorisierung internationaler Güterkorridore zur Sicherung der volkswirtschaftlichen Versorgungsketten der Schweiz.",
    headline_from_hell: "BUND OPFERT TESSINER PENDLER FÜR DEUTSCHE GÜTERZÜGE – SÜDEN VOM NETZ ABGEHÄNGT",
    risk_score: 8.7,
    vulnerabilities: [
      {
        topic: "Föderales Ungleichgewicht",
        explanation: "Die Formulierung 'volkswirtschaftliche Gesamteffizienz' wird im Tessin als Zynismus der Deutschschweizer Zentrale interpretiert."
      },
      {
        topic: "Verletzung des Service Public Mandats",
        explanation: "Keine verbindliche Zusage für adäquate Taktfrequenz-Kompensation im regionalen Pendlerverkehr."
      },
      {
        topic: "Mangelnde Transparenz der Trassenvergabekriterien",
        explanation: "Keine Offenlegung, warum Transitgüter (BACI-Korridor) Vorrang vor Binnenpendlern geniessen."
      }
    ],
    stakeholder_reactions: [
      {
        stakeholder: "Regierungsrat Kanton Tessin (Dipartimento delle istituzioni)",
        likely_reaction: "Scharfe Verurteilung & Einberufung der Tessiner Bundeshaus-Deputation",
        reasoning: "Empörung über 'Bürger zweiter Klasse'. Drohung mit staatsrechtlicher Beschwerde wegen Verletzung des verfassungsmässigen Grundversorgungsauftrags.",
        dossier_citation: "Pressemitteilung Staatsrat TI vom 14.04: 'Die Isolation des Südens ist inakzeptabel'",
        sentiment: "negative"
      },
      {
        stakeholder: "Wirtschaftsverbände (economiesuisse, ASTAG)",
        likely_reaction: "Verhalten positiv, Drängen auf vertragliche Verbindlichkeit",
        reasoning: "Begrüssen die Bevorzugung von Just-in-Time-Lieferketten, fordern jedoch absolute Termintreue auf dem Rhein-Alpen-Korridor.",
        dossier_citation: "Positionspapier Logistik 2026: 'Stillstand im Transit gefährdet die Schweizer Binnenwirtschaft'",
        sentiment: "positive"
      },
      {
        stakeholder: "Pendlerallianz & Pro Bahn Schweiz",
        likely_reaction: "Aufruf zu Mahnwachen an Bahnhöfen Lugano und Bellinzona",
        reasoning: "Kritik an der Umwandlung von IC-Zügen in überfüllte RegioExpress-Verbindungen mit 45 Minuten Reisezeitverlängerung.",
        dossier_citation: "Resolution Fahrgastverband: 'Schluss mit der Benachteiligung der Randregionen'",
        sentiment: "negative"
      },
      {
        stakeholder: "Bundesamt für Verkehr (BAV)",
        likely_reaction: "Formelle Neutralität bei gleichzeitigem Prüfauftrag",
        reasoning: "Akzeptiert betriebliche Notwendigkeit, verlangt aber sofortigen Ersatzverkehr mit Schnellbussen via San Bernardino.",
        dossier_citation: "Aufsichtsschreiben BAV: 'Vollständige Prüfung der Zumutbarkeit nach Art. 12 PBG'",
        sentiment: "mixed"
      }
    ],
    second_order_effects: [
      {
        effect: "Dringliche Interpellation in der Bundeshaus-Herbstsession durch Tessiner Fraktionen.",
        probability: "high",
        timeframe: "48-72 Stunden"
      },
      {
        effect: "Signifikanter Umstieg auf den Individualverkehr mit Stau kollabierend am Gotthard-Strassentunnel (A2).",
        probability: "high",
        timeframe: "1-2 Wochen"
      },
      {
        effect: "Reputationsverlust des Bahn-Klimabonus bei Umweltverbänden (VCS / WWF).",
        probability: "medium",
        timeframe: "Mittelfristig"
      }
    ],
    management_summary: {
      diagnosis: "Kommunikative Vollkatastrophe bei Beibehaltung der rein betriebswirtschaftlichen Tonalität. Die 'Versorgungsketten'-Argumentation verfängt bei Pendlern nicht.",
      impact: "Unmittelbare Eskalation auf Regierungs- und Bundesratsebene mit akuter Beschädigung des nationalen Zusammenhalts-Narrativs.",
      verdict: "RED TEAM VETO: Botschaft sofort stoppen. Ankündigung nur zusammen mit massivem Tessin-Kompensationspaket (Gutscheine, Shuttle-Busse, Ticket-Rabatte) veröffentlichen."
    }
  },
  cloud_sovereignty: {
    communication: "Evolution unserer digitalen Plattform: Schrittweise Migration ausgewählter Nicht-Echtzeit-Infrastrukturen in modernste europäische Cloud-Rechenzentren zur Kostenoptimierung.",
    headline_from_hell: "SCHWEIZER PASSAGIERDATEN LANDEN IN US-CLOUD – INTERNES SPARPROGRAMM ENTLARVT",
    risk_score: 8.2,
    vulnerabilities: [
      {
        topic: "Bruch der öffentlichen Souveränitäts-Garantie",
        explanation: "Im Geschäftsbericht 2024 wurde explizit 'Zero US-Cloud Storage für Schweizer Reisedaten' zugesichert."
      },
      {
        topic: "Angriffsfläche CLOUD Act",
        explanation: "US-Behördenzugriff bleibt rechtlich ungelöst trotz Verschlüsselungszusicherungen."
      }
    ],
    stakeholder_reactions: [
      {
        stakeholder: "Eidgenössischer Datenschutz- und Öffentlichkeitsbeauftragter (EDÖB)",
        likely_reaction: "Einleitung einer formellen Sachverhaltsabklärung",
        reasoning: "Prüfung, ob die Risikoanalyse den verschärften DSG-Standards 2024 entspricht.",
        dossier_citation: "EDÖB Leitfaden Cloud-Einsatz Bundesnahe Betriebe",
        sentiment: "negative"
      },
      {
        stakeholder: "Gewerkschaften (SEV / Syndicom)",
        likely_reaction: "Mobilisierung gegen IT-Stellenabbau",
        reasoning: "Kritik an drohendem Verlust Schweizer Fachkompetenz und IT-Arbeitsplätze an Übersee-Provider.",
        dossier_citation: "Gemeinsame Resolution: 'Hände weg von unserer Dateninfrastruktur'",
        sentiment: "negative"
      }
    ],
    second_order_effects: [
      {
        effect: "Gezielte Vertrauenskrise bei B2B-Grosskunden und GA-Business-Abos.",
        probability: "high",
        timeframe: "3-5 Tage"
      }
    ],
    management_summary: {
      diagnosis: "Gefährliche Diskrepanz zwischen politischer Rhetorik und technischer Beschaffungsrealität.",
      impact: "Hohes Risiko eines parlamentarischen Untersuchungsauftrags (GPK-Vorprüfung).",
      verdict: "HOLD: Wording muss zwingend auf 'Schweizer Sovereignty Shield' und Ende-zu-Ende-HSM-Schlüsselkontrolle umgestellt werden."
    }
  },
  counter_closure: {
    communication: "Zukunftsorientierter Service: Fokussierung unserer Präsenz an Bahnhöfen auf persönliche Reisebegleitung und digitale Selbstbedienungsterminals.",
    headline_from_hell: "BAHN SCHLIESST TICKETHALEN FÜR SENIOREN: 'WER KEIN SMARTPHONE HAT, BLEIBT ZUHAUSE'",
    risk_score: 7.4,
    vulnerabilities: [
      {
        topic: "Euphemistische Beschönigung",
        explanation: "Die Umbenennung von Schliessungen in 'zukunftsorientierten Service' erzeugt Wut und Zynismus."
      },
      {
        topic: "Recht auf physische Teilhabe",
        explanation: "Behindertengleichstellungsgesetz (BehiG) wird als Hebel gegen die Massnahme aktiviert."
      }
    ],
    stakeholder_reactions: [
      {
        stakeholder: "Pro Senectute & Schweizerischer Seniorenrat",
        likely_reaction: "Offener Protestbrief an das Departement UVEK",
        reasoning: "Digitaler Ausschluss von über 350'000 Bürgerinnen und Bürgern ohne digitales Banking/Smartphone.",
        dossier_citation: "Seniorenstudie 2025: 'Digitale Hürden im öffentlichen Raum'",
        sentiment: "negative"
      },
      {
        stakeholder: "Schweizerischer Gemeindeverband",
        likely_reaction: "Entzug des Bahnhofs-Zentrumsbeitrags",
        reasoning: "Gemeinden sehen Bahnhofsentwertung und Vereinsamung der Dorfzentren.",
        dossier_citation: "Gemeindepolitische Rundschau 02/26",
        sentiment: "negative"
      }
    ],
    second_order_effects: [
      {
        effect: "Kantonale Standesinitiativen zur gesetzlichen Schalterpflicht an Knotenbahnhöfen.",
        probability: "high",
        timeframe: "Herbstsession"
      }
    ],
    management_summary: {
      diagnosis: "Empathieloses Technokraten-Wording löst Generationenkonflikt aus.",
      impact: "Langfristiger Reputationsschaden bei einer der treuesten Kundengruppen (Generalabonnement Senior).",
      verdict: "REVISION: Nicht die Technologie ins Zentrum stellen, sondern das Modell 'Mobiler Schalter / Gemeinde-Partner'."
    }
  }
};
