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
      title: 'Phase III Oncology Readout: Subgroup Variance & Access Debate',
      category: 'Clinical Comms & Regulatory Alignment',
      date: '08.11.2026',
      urgency: 'High',
      summary: 'Initial subgroup readout in Cohort B shows ambiguous efficacy variance. Critics and patient advocacy groups risk interpreting this as overall trial failure, jeopardizing upcoming reimbursement reviews and regulatory filings.',
      organization: 'Global Innovative Medicines Division'
    },
    {
      id: 'alpine_transit_crisis',
      title: 'Alpine Base Tunnel: Signalling Failure & Cyber Rumors',
      category: 'Crisis Communications & Critical Infrastructure',
      date: '28.09.2026',
      urgency: 'High',
      summary: 'Complete shutdown of signalling systems across a major transit route. Speculation about foreign cyber sabotage spreads on social media. The comms team must de-escalate with plain technical facts.',
      organization: 'National Transport Network (SBB)'
    },
    {
      id: 'esg_investigation',
      title: 'Investigative Inquiry: Subcontractor Labor Standards',
      category: 'Supply Chain & Legal/Compliance Alignment',
      date: '27.09.2026',
      urgency: 'High',
      summary: 'Investigative reporters confront the company with alleged human rights violations at a Tier-3 overseas supplier. Comms and Legal must reconcile public audit claims with supply chain realities.',
      organization: 'Infrastructure & Materials Group'
    },
    {
      id: 'health_data_breach',
      title: 'Public Affairs Debate: Cloud Infrastructure for Health Records',
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
      title: 'Phase-III-Onkologie-Readout: Subgruppen-Varianz & Erstattungsdebatte',
      category: 'Klinische Kommunikation & Zulassung',
      date: '08.11.2026',
      urgency: 'Hoch',
      summary: 'Erste Subgruppen-Ergebnisse in Kohorte B zeigen uneinheitliche Wirksamkeitsdaten. Medien und Patientenorganisationen drohen dies als Studienversagen auszulegen, was Erstattungsverhandlungen gefährdet.',
      organization: 'Globale Onkologie-Sparte'
    },
    {
      id: 'alpine_transit_crisis',
      title: 'Alpen-Basistunnel: Verdacht auf Cyber-Sabotage',
      category: 'Krisenkommunikation & Infrastruktur',
      date: '28.09.2026',
      urgency: 'Hoch',
      summary: 'Totalausfall der Leitsysteme im wichtigsten Alpenübergang. Auf Social Media kursieren unbestätigte Gerüchte über einen ausländischen Cyberangriff. Die Medienstelle muss mit nüchternen Fakten deeskalieren.',
      organization: 'Nationale Transportnetze (SBB)'
    },
    {
      id: 'esg_investigation',
      title: 'Medienanfrage: Arbeitsstandards beim Subunternehmer',
      category: 'Lieferkette & Legal/Compliance-Abgleich',
      date: '27.09.2026',
      urgency: 'Hoch',
      summary: 'Das Recherchedesk einer Sonntagszeitung konfrontiert das Unternehmen mit Vorwürfen bei einem asiatischen Subunternehmer für Baukomponenten. Comms und Legal müssen die Sprachregelung präzisieren.',
      organization: 'Infrastruktur-Konzern'
    },
    {
      id: 'health_data_breach',
      title: 'Öffentliche Debatte: Cloud-Migration von Gesundheitsdaten',
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
