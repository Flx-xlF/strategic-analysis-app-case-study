export type Language = 'en' | 'de';

export interface ScenarioMeta {
  id: string;
  title: string;
  category: string;
  date: string;
  urgency: 'High' | 'Medium' | 'Hoch' | 'Mittel';
  summary: string;
  organization: string;
  group: 'healthcare' | 'cross_industry';
}

export const SCENARIOS_DATA: Record<Language, ScenarioMeta[]> = {
  en: [
    {
      id: 'oncology_trial_update',
      title: 'Biopharma Pricing & Investment: $15B U.S. Expansion, Reference Pricing & Regional Access',
      category: 'Corporate Narrative & International Public Affairs',
      date: '13.11.2026',
      urgency: 'High',
      summary: 'After committing $15B to U.S. manufacturing and agreeing to tie U.S. launch prices to prices in other wealthy countries (reference pricing), a global biopharma company calls for updated European and Swiss pricing models—sparking "patient boycott" and "Swiss headquarters exit" rumors.',
      organization: 'Biopharma Corporate Affairs & Communications',
      group: 'healthcare'
    },
    {
      id: 'rlt_access_debate',
      title: 'Targeted Cancer Therapy (ONCO-104 / Phase III ONCO-01): Clinical Approval vs. Cost & Reimbursement',
      category: 'Clinical Study Value & Reimbursement',
      date: '10.11.2026',
      urgency: 'High',
      summary: 'The U.S. FDA approved a targeted cancer therapy (Phase III ONCO-01) for earlier use based on doubled progression-free survival, but European regulators (EMA) and the UK health cost agency (NICE) pushed back over trial comparators and price—creating a sharp gap in patient access.',
      organization: 'Oncology & Precision Medicine Communications',
      group: 'healthcare'
    },
    {
      id: 'health_data_breach',
      title: 'Cloud Infrastructure for Electronic Health Records',
      category: 'Digital Health & Data Privacy Translation',
      date: '26.09.2026',
      urgency: 'Medium',
      summary: 'A planned migration of electronic patient records to cloud infrastructure triggers opposition from physicians and privacy advocates. The team needs to explain encryption key control (keeping keys in domestic hands) in plain language without defensive legalese.',
      organization: 'Digital Health Directorate',
      group: 'healthcare'
    },
    {
      id: 'esg_investigation',
      title: 'Supply Chain Labor Standards Inquiry',
      category: 'Supply Chain & Legal/Compliance Alignment',
      date: '27.09.2026',
      urgency: 'High',
      summary: 'Investigative reporters confront the company with alleged labor violations at a Tier-3 overseas supplier. Comms and Legal must reconcile public audit claims with supply chain realities under European due diligence rules.',
      organization: 'Global Operations & Procurement Group',
      group: 'cross_industry'
    },
    {
      id: 'alpine_transit_crisis',
      title: 'Alpine Base Tunnel Disruption',
      category: 'Crisis Communications & Critical Infrastructure',
      date: '28.09.2026',
      urgency: 'High',
      summary: 'Complete shutdown of signaling systems across a major transit route. Speculation about foreign cyber sabotage spreads on social media. The comms team must de-escalate with plain technical facts.',
      organization: 'National Rail & Transit Network',
      group: 'cross_industry'
    }
  ],
  de: [
    {
      id: 'oncology_trial_update',
      title: 'Biopharma-Konzernnarrativ: Referenzpreise, 15-Mrd.-$-Investition & Regionaler Zugang',
      category: 'Konzern-Narrativ & Internationale Public Affairs',
      date: '13.11.2026',
      urgency: 'Hoch',
      summary: 'Nach US-Referenzpreis-Vereinbarungen (Koppelung der US-Preise an andere westliche Länder) und einer 15-Mrd.-Dollar-Investition in den USA fordert ein Biopharma-Konzern ein Umdenken bei europäischen und Schweizer Medikamentenpreisen – was "Boykott"- und "Abwanderungs"-Gerüchte am Schweizer Hauptsitz auslöst.',
      organization: 'Biopharma Corporate Affairs & Kommunikation',
      group: 'healthcare'
    },
    {
      id: 'rlt_access_debate',
      title: 'Zielgerichtete Krebstherapie (ONCO-104 / Studie ONCO-01): Klinische Zulassung vs. Kosten & Erstattung',
      category: 'Klinische Studiendaten & Kostenerstattung',
      date: '10.11.2026',
      urgency: 'Hoch',
      summary: 'Die US-Arzneimittelbehörde FDA hat eine zielgerichtete Krebstherapie (Phase-III-Studie ONCO-01) dank verdoppeltem progressionsfreiem Überleben für den früheren Einsatz zugelassen, während die EU-Behörde EMA und die britische Kostenstelle NICE wegen Studiendesign und Preis bremsen.',
      organization: 'Onkologie- & Präzisionsmedizin-Kommunikation',
      group: 'healthcare'
    },
    {
      id: 'health_data_breach',
      title: 'Cloud-Infrastruktur für elektronische Patientendossiers',
      category: 'Digital Health & Technische Übersetzung',
      date: '26.09.2026',
      urgency: 'Mittel',
      summary: 'Eine geplante Migration von Patientendossiers auf Cloud-Server löst Skepsis bei Ärzten und Datenschützern aus. Die eigene Schlüsselkontrolle (Bring Your Own Key) muss ohne Juristendeutsch laientauglich vermittelt werden.',
      organization: 'Direktion Digitale Gesundheit',
      group: 'healthcare'
    },
    {
      id: 'esg_investigation',
      title: 'Lieferketten-Arbeitsstandards-Anfrage',
      category: 'Lieferkette & Legal/Compliance-Abgleich',
      date: '27.09.2026',
      urgency: 'Hoch',
      summary: 'Das Recherchedesk einer Sonntagszeitung konfrontiert das Unternehmen mit Vorwürfen bei einem asiatischen Subunternehmer. Kommunikation und Recht müssen die Sprachregelung unter Sorgfaltspflicht-Regeln präzisieren.',
      organization: 'Konzerneinkauf & Operations',
      group: 'cross_industry'
    },
    {
      id: 'alpine_transit_crisis',
      title: 'Alpen-Basistunnel-Störung',
      category: 'Krisenkommunikation & Kritische Infrastruktur',
      date: '28.09.2026',
      urgency: 'Hoch',
      summary: 'Totalausfall der Leitsysteme im wichtigsten Alpenübergang. Auf Social Media kursieren unbestätigte Gerüchte über einen ausländischen Cyberangriff. Die Medienstelle muss mit nüchternen Fakten deeskalieren.',
      organization: 'Nationale Schienen- & Transportnetze',
      group: 'cross_industry'
    }
  ]
};

export const getScenarios = (lang: Language): ScenarioMeta[] => SCENARIOS_DATA[lang] || SCENARIOS_DATA.en;

// Backwards compatibility export
export const SCENARIOS = SCENARIOS_DATA.en;
