export interface Contradiction {
  severity: 'CRITICAL' | 'WARNING' | 'SUBTLE';
  title: string;
  quote_journalist: string;
  quote_doctrine: string;
  assessment: string;
}

export interface InquiryData {
  outlet: string;
  journalist: string;
  deadline: string;
  inquiry_text: string;
  official_wording_title: string;
  official_wording_quote: string;
  contradictions: Contradiction[];
  recommended_statement: string;
  strategic_advisory: string;
}

export const INQUIRY_FIXTURES: Record<string, InquiryData> = {
  cloud_sovereignty: {
    outlet: "SonntagsZeitung (Ressort Investigativ / Wirtschaft)",
    journalist: "Stefan B. & Fabienne M.",
    deadline: "Heute, 17:00 Uhr MEZ (Print-Schluss)",
    inquiry_text: `Sehr geehrte Damen und Herren der Medienstelle,

Uns liegen vertrauliche Ausschreibungsunterlagen zum internen Projekt «Nimbostratus» vor (Stand August 2026). Darin wird die Migration der zentralen Kundenprofile (SwissPass-Stammdaten) auf die Microsoft Azure Cloud (Region Europe West / Amsterdam) detailliert beschrieben.

Wir bitten bis heute 17:00 Uhr um Beantwortung folgender Fragen:
1. Trifft es zu, dass die Konzernleitung die Auslagerung von Reisedaten auf US-amerikanische Hyperscaler autorisiert hat?
2. Wie vereinbaren Sie diese Ausschreibung mit der öffentlichen Aussage Ihres CEO vom Mai 2024: «Schweizer Kundendaten werden ausnahmslos in Schweizer Rechenzentren unter unserer exklusiven Kontrolle gespeichert»?
3. Welche jährlichen Einsparungen werden durch die Umgehung der Schweizer Cloud-Anbieter prognostiziert?`,
    official_wording_title: "Doktrin Digitale Souveränität & Kundendatenhaltung (Verabschiedet GL-Sitzung 12/2024, Dok.-ID: W-2024-884)",
    official_wording_quote: "«Die Speicherung und Verarbeitung sämtlicher identifizierender Reisedaten (SwissPass / Swisspass-Plus) erfolgt ausnahmslos auf physisch getrennten, in der Schweiz lokalisierten Servern (On-Premise & Tier-4 Swiss Cloud). Ein Zugriff ausländischer Jurisdiktionen (inkl. US CLOUD Act) wird architektonisch durch Schweizer Schlüsselverwahrung ausgeschlossen.»",
    contradictions: [
      {
        severity: "CRITICAL",
        title: "Direkter Standort-Widerspruch (Server-Lokalisierung)",
        quote_journalist: "Migration auf Microsoft Azure Cloud (Region Europe West / Amsterdam)",
        quote_doctrine: "Ausnahmslos auf physisch getrennten, in der Schweiz lokalisierten Servern",
        assessment: "Die interne Ausschreibung steht im frontalen Widerspruch zur verabschiedeten Doktrin. Ein simples Dementi ist juristisch und publizistisch nicht haltbar, da die Folien echt sind."
      },
      {
        severity: "WARNING",
        title: "Jurisdiktions-Konflikt & US CLOUD Act",
        quote_journalist: "Auslagerung von Reisedaten auf US-amerikanische Hyperscaler",
        quote_doctrine: "Ein Zugriff ausländischer Jurisdiktionen wird architektonisch ausgeschlossen",
        assessment: "Selbst bei Speicherung in Azure Zürich oder Amsterdam greift für Microsoft Corp. der US CLOUD Act. Der Vorwurf des 'Bruchs der Souveränität' ist faktisch fundiert."
      },
      {
        severity: "SUBTLE",
        title: "Framing: 'Kostenoptimierung' vs. 'Investitionsschutz'",
        quote_journalist: "Welche jährlichen Einsparungen durch Umgehung Schweizer Anbieter...",
        quote_doctrine: "Souveränität geniesst Priorität vor kurzfristigen Lizenzkostenvorteilen",
        assessment: "Der Journalist etabliert das Framing 'Sicherheit geopfert für Einsparungen'. Diesem Spin muss mit der 'Next-Gen Swiss Security Enclave' aktiv widersprochen werden."
      }
    ],
    recommended_statement: `Die Speicherung und der Schutz von Kundendaten unterliegen höchsten Schweizer Sicherheitsanforderungen. 

Im Rahmen des Evaluationsprojekts «Nimbostratus» prüft das Unternehmen ausschliesslich hybride Cloud-Modelle, bei denen die kryptographische Schlüsselkontrolle zu 100% bei Schweizer Instanzen verbleibt (Bring Your Own Key / Confidential Computing). 

Zu laufenden, vertraulichen Evaluationsphasen oder hypothetischen Architekturmodellen nehmen wir keine Stellung. Fest steht: Eine Übertragung unverschlüsselter personenbezogener Daten ins Ausland oder ein Zugriff durch fremde Behörden ist und bleibt vertraglich sowie architektonisch ausgeschlossen. Ein definitiver Vergabeentscheid ist noch nicht gefallen.`,
    strategic_advisory: "ADVISORY AN MEDIENSPRECHER: Keine Bestätigung des Projektnamens «Nimbostratus». Den Begriff 'Kosteneinsparung' aktiv neutralisieren und stattdessen auf 'Cybersicherheits-Resilienz und DDoS-Schutz' verweisen. Bei telefonischem Nachhaken: Auf die noch ausstehende Gesamtbeurteilung durch den EDÖB verweisen."
  },
  gotthard_freight: {
    outlet: "Tages-Anzeiger & Corriere del Ticino",
    journalist: "Christoph R. (Bern) / Marco M. (Lugano)",
    deadline: "16:30 Uhr MEZ",
    inquiry_text: "Uns liegt das interne Betriebskonzept 'Fahrplan 26-B' vor. Demnach werden ab November 60% der Gütertrassen im Gotthard-Basistunnel garantiert, während 8 tägliche IC-Züge Zürich-Lugano gestrichen und durch Busse ab Erstfeld ersetzt werden. Trifft es zu, dass das Tessin zugunsten internationaler Spediteure abgeschnitten wird?",
    official_wording_title: "Wording Grundversorgungsauftrag Nord-Süd (Stand 06/2026)",
    official_wording_quote: "«Der Bund und die Bahn garantieren zu jedem Zeitpunkt die gleichwertige Anbindung des Kantons Tessin an das nationale Schnellbahnnetz im Stundentakt.»",
    contradictions: [
      {
        severity: "CRITICAL",
        title: "Bruch der Stundentakt-Garantie",
        quote_journalist: "8 tägliche IC-Züge gestrichen und durch Busse ersetzt",
        quote_doctrine: "Gleichwertige Anbindung im Stundentakt zu jedem Zeitpunkt",
        assessment: "Der geplante Ersatzverkehr mit Bussen verlängert die Reisezeit um 45 Minuten und bricht die vertragliche Leistungsvereinbarung."
      }
    ],
    recommended_statement: "Die Sicherheit und der Erhalt des Gotthard-Basistunnels haben oberste Priorität. Um sowohl die lebenswichtigen Versorgungsketten der gesamten Schweiz aufrechtzuerhalten als auch verlässliche Reiseketten zu garantieren, werden die verfügbaren Kapazitäten im engsten Einvernehmen mit den Kantonen und dem BAV austariert. Eine temporäre Entflechtung schützt das System vor unkontrollierten Komplettausfällen.",
    strategic_advisory: "Fokus auf 'Systemstabilität': Wenn Güterzüge entgleisen oder stauen, bricht auch der Personenverkehr zusammen. Das Tessin erhält priorisierte Direkt-Busse ohne Zwischenhalt."
  },
  counter_closure: {
    outlet: "Blick & Radio SRF (Rendez-vous)",
    journalist: "Sarah K. / Social Affairs",
    deadline: "14:00 Uhr",
    inquiry_text: "Die Petition 'Rettet unsere Schalter' hat heute Vormittag 25'000 Unterschriften erreicht. Pro Senectute wirft Ihnen 'Altersdiskriminierung und rücksichtslose Gewinnmaximierung' vor. Schliessen Sie die 24 betroffenen Bahnhöfe trotz dieses massiven Volksprotests?",
    official_wording_title: "Strategiepapier Kundenservice & Barrierefreiheit (Stand 01/2026)",
    official_wording_quote: "«Keine Kundin und kein Kunde wird beim Umstieg auf moderne Vertriebskanäle zurückgelassen. Begleitete Mobilität ist Teil unserer Service-Public-DNA.»",
    contradictions: [
      {
        severity: "WARNING",
        title: "Diskrepanz zwischen Begleitungsversprechen und Schalterabbau",
        quote_journalist: "Schliessung von 24 Schaltern ohne Ersatzpersonal",
        quote_doctrine: "Niemand wird zurückgelassen – begleitete Mobilität vor Ort",
        assessment: "Solange mobile Kundenbegleiter nicht vor Ort sichtbar sind, wirkt die Schalterschliessung wie ein Wortbruch."
      }
    ],
    recommended_statement: "Wir schliessen keine Bahnhöfe – wir bringen den Service dorthin, wo Reisende ihn brauchen. An über 20 Standorten ersetzen wir starre Glasschalter durch mobile Beraterinnen und Berater, die beim Ticketkauf direkt am Automaten oder Smartphone assistieren. Für Seniorinnen und Senioren bieten wir zudem kostenlose persönliche Schulungen und eine gebührenfreie Telefon-Bestelllinie.",
    strategic_advisory: "Wording-Regel: Niemals das Wort 'Schalterschliessung' wiederholen. Stets als 'Transformation zum mobilen Begleitservice' framen."
  }
};
