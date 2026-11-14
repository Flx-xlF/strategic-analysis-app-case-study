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
      summary: 'After committing $23B to U.S. manufacturing and agreeing to tie U.S. launch prices to prices in other wealthy countries (reference pricing), a biopharma company calls for updated European and Swiss pricing models—sparking "patient boycott" and "Basel HQ exit" rumors.',
      organization: 'Biopharma Corporate Affairs & Communications'
    },
    {
      id: 'rlt_access_debate',
      title: 'Targeted Cancer Therapy (Lu-177 RLT): Clinical Approval vs. Cost & Reimbursement',
      category: 'Cancer Medicine Value & Reimbursement',
      date: '10.11.2026',
      urgency: 'High',
      summary: 'The U.S. FDA approved a targeted prostate cancer therapy for earlier use (before chemotherapy), but European regulators (EMA) and the UK health cost agency (NICE) pushed back over trial design and price—creating a sharp gap in patient access.',
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
      summary: 'Nach US-Referenzpreis-Vereinbarungen (Koppelung der US-Preise an andere westliche Länder) und einer 23-Mrd.-Dollar-Investition in den USA fordert ein Biopharma-Konzern ein Umdenken bei europäischen und Schweizer Medikamentenpreisen – was "Boykott"- und "Abwanderungs"-Gerüchte auslöst.',
      organization: 'Biopharma Corporate Affairs & Kommunikation'
    },
    {
      id: 'rlt_access_debate',
      title: 'Gezielte Krebstherapie (Lu-177 RLT): Klinische Zulassung vs. Kosten & Erstattung',
      category: 'Krebstherapie-Nutzen & Kostenerstattung',
      date: '10.11.2026',
      urgency: 'Hoch',
      summary: 'Die US-Arzneimittelbehörde FDA hat eine zielgerichtete Prostatakrebstherapie für den früheren Einsatz (vor Chemotherapie) zugelassen, während die EU-Behörde EMA und die britische Kostenstelle NICE wegen Studiendesign und Preis bremsen.',
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
