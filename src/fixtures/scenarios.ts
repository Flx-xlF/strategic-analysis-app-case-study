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
    id: 'gotthard_freight',
    title: 'Gotthard-Basistunnel: Priorisierung Gütertransit',
    category: 'Infrastruktur & Betrieb',
    date: '28.09.2026',
    urgency: 'Hoch',
    summary: 'Eingeschränkte Trassenkapazität. Geplante Vorrangregelung für Güterverkehr führt zu Reduktion von Direktverbindungen ins Tessin.',
    organization: 'Bundesbahnen / BAV'
  },
  {
    id: 'cloud_sovereignty',
    title: 'Medienanfrage: Cloud-Migration & Rechenzentren',
    category: 'Medienanfrage',
    date: '27.09.2026',
    urgency: 'Hoch',
    summary: 'Recherche der SonntagsZeitung zu Ausschreibungsunterlagen für Cloud-Infrastrukturen und Abgleich mit bestehenden Doktrinen.',
    organization: 'IT-Governance'
  },
  {
    id: 'counter_closure',
    title: 'Schalterabbau: Petition zu digitaler Barrierefreiheit',
    category: 'Öffentliche Debatte',
    date: '26.09.2026',
    urgency: 'Mittel',
    summary: 'Mobilisierung von Seniorenverbänden und Gemeinden bezüglich der Reduktion bedienter Schalter an 24 Standorten.',
    organization: 'Vertrieb'
  }
];
