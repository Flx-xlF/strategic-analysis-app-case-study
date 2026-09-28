export interface ScenarioMeta {
  id: string;
  title: string;
  category: string;
  date: string;
  urgency: 'Hoch' | 'Mittel';
  summary: string;
  organization: string;
}

export const SCENARIOS: ScenarioMeta[] = [
  {
    id: 'alpine_transit_crisis',
    title: 'Alpen-Basistunnel: Verdacht auf Cyber-Sabotage',
    category: 'Krisenkommunikation & Infrastruktur',
    date: '28.09.2026',
    urgency: 'Hoch',
    summary: 'Totalausfall der Leitsysteme im wichtigsten Alpenübergang. Auf Social Media kursieren unbestätigte Gerüchte über einen ausländischen Cyberangriff. Die Medienintelligenz analysiert die Verbreitung und steuert das Wording.',
    organization: 'Nationale Transportnetze (NTN)'
  },
  {
    id: 'esg_investigation',
    title: 'Medienanfrage: ESG-Verstöße bei Staudamm-Projekt',
    category: 'Investigative Recherche & ESG',
    date: '27.09.2026',
    urgency: 'Hoch',
    summary: 'Das Recherchedesk einer Sonntagszeitung konfrontiert das Unternehmen mit angeblichen Menschenrechtsverletzungen bei einem asiatischen Subunternehmer für Baukomponenten.',
    organization: 'AlpenEnergie Konzern'
  },
  {
    id: 'health_data_breach',
    title: 'Öffentliche Debatte: Cloud-Migration von Gesundheitsdaten',
    category: 'Reputationsmanagement & Public Affairs',
    date: '26.09.2026',
    urgency: 'Mittel',
    summary: 'Eine geplante Migration von e-Patientendossiers auf internationale Server löst eine koordinierte Kampagne von Datenschutz-NGOs aus. Das System misst die Emotionalisierung in Echtzeit.',
    organization: 'Eidgenössisches Gesundheitsportal'
  }
];
