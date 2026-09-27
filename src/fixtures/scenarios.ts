export interface ScenarioMeta {
  id: string;
  title: string;
  category: string;
  date: string;
  urgency: 'HIGH' | 'CRITICAL' | 'ELEVATED';
  summary: string;
  organization: string;
}

export const SCENARIOS: ScenarioMeta[] = [
  {
    id: 'gotthard_freight',
    title: 'Gotthard-Basistunnel: Güterverkehr-Priorisierung vor Regionalzügen',
    category: 'INFRASTRUKTUR / KRISEN-STRESSTEST',
    date: '2026-09-28',
    urgency: 'CRITICAL',
    summary: 'Nach Sanierungsverzögerung stehen nur 60% Trassenkapazität bereit. Die GL plant, internationale Güterzüge vorzuziehen; Direktverbindungen ins Tessin werden um 35% gekappt.',
    organization: 'Bundesbahnen / BAV'
  },
  {
    id: 'cloud_sovereignty',
    title: 'Investigativ-Leak: Cloud-Egress & US-Hyperscaler ("Projekt Nimbostratus")',
    category: 'MEDIENANFRAGE / DOKTRIN-AUDIT',
    date: '2026-09-27',
    urgency: 'HIGH',
    summary: 'SonntagsZeitung konfrontiert das Unternehmen mit internen RFP-Folien zur Verlegung der Kundenstammdaten auf Azure – im offenen Widerspruch zur Doktrin "100% Swiss Sovereign".',
    organization: 'Konzernleitung / IT-Governance'
  },
  {
    id: 'counter_closure',
    title: 'Ablösung des Schalterverkaufs: Petition gegen digitale Diskriminierung',
    category: 'TRENDING / META-STRATEGIE',
    date: '2026-09-26',
    urgency: 'ELEVATED',
    summary: 'Pro Senectute, Behindertenorganisationen und 42 Gemeindepräsidenten mobilisieren gegen die Schliessung von 24 Regional-Schaltern. Die Petition erreicht viralen Kipp-Punkt.',
    organization: 'Vertrieb & Personenverkehr'
  }
];
