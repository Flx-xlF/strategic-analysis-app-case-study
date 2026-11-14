export type Language = 'en' | 'de';

export interface ScenarioMeta {
  id: string;
  title: string;
  category: string;
  date: string;
  urgency: 'High' | 'Medium' | 'Hoch' | 'Mittel';
  summary: string;
  organization: string;
}

export const SCENARIOS_DATA: Record<Language, ScenarioMeta[]> = {
  en: [
    {
      id: 'oncology_trial_update',
      title: 'Biopharma Pricing & Investment: $23B U.S. Expansion, Reference Pricing & Regional Access',
      category: 'Corporate Narrative & International Public Affairs',
      date: '13.11.2026',
      urgency: 'High',
      summary: 'After committing $23B to U.S. manufacturing and agreeing to link U.S. launch prices to other wealthy countries (MFN reference pricing), a biopharma company calls for updated European and Swiss pricing models—sparking "patient boycott" and "Basel HQ exit" rumors.',
      organization: 'Biopharma Corporate Affairs & Communications'
    },
    {
      id: 'pluvicto_access_debate',
      title: 'Targeted Cancer Therapy (Lu-177 RLT): Clinical Approval vs. Cost & Reimbursement',
      category: 'Frontier Medicine Value & Health Technology Assessment',
      date: '10.11.2026',
      urgency: 'High',
      summary: 'While the FDA greenlit pre-chemotherapy prostate cancer radioligand therapy (Phase III RLT-01), EMA regulatory pushback and UK NICE cost-effectiveness hurdles create an acute transatlantic access gap.',
      organization: 'Oncology & Precision Medicine Division'
    },
    {
      id: 'alpine_transit_crisis',
      title: 'Alpine Base Tunnel Disruption',
      category: 'Crisis Communications & Critical Infrastructure',
      date: '28.09.2026',
      urgency: 'High',
      summary: 'Complete shutdown of signalling systems across a major transit route. Speculation about foreign cyber sabotage spreads on social media. The comms team must de-escalate with plain technical facts.',
      organization: 'National Rail & Transit Network'
    },
    {
      id: 'esg_investigation',
      title: 'Supply Chain Labor Standards Inquiry',
      category: 'Supply Chain & Legal/Compliance Alignment',
      date: '27.09.2026',
      urgency: 'High',
      summary: 'Investigative reporters confront the company with alleged human rights violations at a Tier-3 overseas supplier. Comms and Legal must reconcile public audit claims with supply chain realities.',
      organization: 'Infrastructure & Materials Group'
    },
    {
      id: 'health_data_breach',
      title: 'Cloud Infrastructure for Health Records',
      category: 'Public Affairs & Technical Translation',
      date: '26.09.2026',
      urgency: 'Medium',
      summary: 'A planned migration of electronic patient dossiers to hyperscaler infrastructure triggers opposition from data privacy groups. The team needs to explain cryptographic key ownership without defensive legalese.',
      organization: 'Digital Health Directorate'
    }
  ],
  de: [
    {
      id: 'oncology_trial_update',
      title: 'Biopharma-Konzernnarrativ: Referenzpreise, 23-Mrd.-$-Investition & Regionaler Zugang',
      category: 'Konzern-Narrativ & Internationale Public Affairs',
      date: '13.11.2026',
      urgency: 'Hoch',
      summary: 'Nach US-Referenzpreis-Vereinbarungen (Most Favored Nation) und einer 23-Mrd.-Dollar-Investition in den USA fordert ein Biopharma-Konzern ein Umdenken bei europäischen und Schweizer Medikamentenpreisen. Die Kommunikation muss USA, EU und den Heimmarkt Schweiz ohne "Boykott"- oder "Abwanderungs"-Schlagzeilen ausbalancieren.',
      organization: 'Biopharma Corporate Affairs & Kommunikation'
    },
    {
      id: 'pluvicto_access_debate',
      title: 'Gezielte Krebstherapie (Lu-177 RLT): Klinische Zulassung vs. Kosten & Erstattung',
      category: 'Frontier-Medizin Nutzenbewertung & HTA',
      date: '10.11.2026',
      urgency: 'Hoch',
      summary: 'Während die US-FDA die Radioligandentherapie vor Chemotherapie (Phase-III-Studie RLT-01) zulässt, führen EMA-Bedenken und eine NICE-Ablehnung in Grossbritannien zu einer transatlantischen Versorgungslücke.',
      organization: 'Onkologie- & Präzisionsmedizin-Sparte'
    },
    {
      id: 'alpine_transit_crisis',
      title: 'Alpen-Basistunnel-Störung',
      category: 'Krisenkommunikation & Infrastruktur',
      date: '28.09.2026',
      urgency: 'Hoch',
      summary: 'Totalausfall der Leitsysteme im wichtigsten Alpenübergang. Auf Social Media kursieren unbestätigte Gerüchte über einen ausländischen Cyberangriff. Die Medienstelle muss mit nüchternen Fakten deeskalieren.',
      organization: 'Nationale Schienen- & Transportnetze'
    },
    {
      id: 'esg_investigation',
      title: 'Lieferketten-Arbeitsstandards-Anfrage',
      category: 'Lieferkette & Legal/Compliance-Abgleich',
      date: '27.09.2026',
      urgency: 'Hoch',
      summary: 'Das Recherchedesk einer Sonntagszeitung konfrontiert das Unternehmen mit Vorwürfen bei einem asiatischen Subunternehmer für Baukomponenten. Comms und Legal müssen die Sprachregelung präzisieren.',
      organization: 'Infrastruktur-Konzern'
    },
    {
      id: 'health_data_breach',
      title: 'Cloud-Infrastruktur für elektronische Patientendossiers',
      category: 'Public Affairs & Technische Übersetzung',
      date: '26.09.2026',
      urgency: 'Mittel',
      summary: 'Eine geplante Migration von Patientendossiers auf Cloud-Server löst Skepsis bei Ärzten und Datenschützern aus. Die Schlüsselkontrolle (Bring Your Own Key) muss laientauglich vermittelt werden.',
      organization: 'Eidgenössisches Gesundheitsportal'
    }
  ]
};

export const getScenarios = (lang: Language): ScenarioMeta[] => SCENARIOS_DATA[lang] || SCENARIOS_DATA.en;

// Backwards compatibility export
export const SCENARIOS = SCENARIOS_DATA.en;
