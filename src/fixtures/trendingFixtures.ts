export type ContentFormatId = 'hintergrund' | 'social' | 'talking_points' | 'qa_brief';

export interface FormatBlueprint {
  id: ContentFormatId;
  label: string;
  target_audience: string;
  psychological_objective: string;
  blueprint_content: string;
}

export interface TrendingCardData {
  id: string;
  topic: string;
  headline: string;
  outlets_involved: string[];
  velocity_change: string;
  tipping_point_score: number;
  sentiment_split: { positive: number; neutral: number; negative: number };
  summary: string;
}

export interface TrendingScenarioData {
  cards: TrendingCardData[];
  blueprints: Record<ContentFormatId, FormatBlueprint>;
}

export const TRENDING_FIXTURES: Record<string, TrendingScenarioData> = {
  health_data_breach: {
    cards: [
      {
        id: "trend-h1",
        topic: "Datenschutz & Souveränität",
        headline: "Patientendaten in den USA: Ärzteverband warnt vor 'Gläsernen Patienten'",
        outlets_involved: ["NZZ", "Tages-Anzeiger", "MedInside"],
        velocity_change: "+420% (12h)",
        tipping_point_score: 89,
        sentiment_split: { positive: 5, neutral: 15, negative: 80 },
        summary: "Massive Beschleunigung der Debatte nach Stellungnahme der Ärzteverbindung. Fokus verlagert sich von Technologie-Foren in die politische Hauptarena."
      },
      {
        id: "trend-h2",
        topic: "Politischer Vorstoss",
        headline: "Dringliche Interpellation: Moratorium für e-Dossier-Migration",
        outlets_involved: ["Blick", "Radio SRF 1"],
        velocity_change: "+150% (4h)",
        tipping_point_score: 65,
        sentiment_split: { positive: 10, neutral: 30, negative: 60 },
        summary: "Parlamentarier kündigen Vorstösse für die Herbstsession an, um die Migration auf Eis zu legen."
      }
    ],
    blueprints: {
      hintergrund: {
        id: "hintergrund",
        label: "Hintergrundartikel",
        target_audience: "IT- & Gesundheitsredaktionen",
        psychological_objective: "Technische Realität (BYOK) gegen emotionale Angstszenarien positionieren.",
        blueprint_content: `### 01. KERNBOTSCHAFT
Das elektronische Patientendossier (EPD) nutzt die modernsten kryptografischen Standards der Welt. Durch das 'Bring Your Own Key' (BYOK) Konzept ist ein externer Zugriff – selbst durch staatliche Akteure am Serverstandort – mathematisch und physisch ausgeschlossen.

### 02. TECHNISCHE FAKTEN (SPERRFRIST 14:00 UHR)
- **Kryptografische Trennung:** Die Daten liegen verschlüsselt auf den Servern im Ausland. Der Schlüssel dazu liegt ausschliesslich auf Hardware-Security-Modulen (HSM) innerhalb der Hochsicherheitsrechenzentren der Eidgenossenschaft.
- **CLOUD Act Relevanz:** Selbst wenn ausländische Behörden die Herausgabe der Serverdaten erzwingen, erhalten sie lediglich unlesbaren Ciphertext (AES-256). Ohne die Schweizer Schlüssel sind diese Daten wertlos.
- **Auditierung:** Das System wird quartalsweise vom Nationalen Zentrum für Cybersicherheit (NCSC) penetration-getestet.

### 03. OFFIZIELLES ZITAT (CISO)
> «Die Souveränität unserer Gesundheitsdaten wird nicht durch den physischen Serverstandort definiert, sondern durch die alleinige Kontrolle über die kryptografischen Schlüssel. Diese Kontrolle liegt zu 100% in der Schweiz. Es gibt kein Hintertürchen.»`
      },
      social: {
        id: "social",
        label: "Social Media",
        target_audience: "Besorgte Bürger & Patienten",
        psychological_objective: "Beruhigung durch einfache, absolute Aussagen.",
        blueprint_content: `### 01. PROAKTIVE BERUHIGUNG (LINKEDIN)
Ihre Gesundheitsdaten im EPD sind sicher. 🇨🇭🔒
Die aktuelle Debatte um Serverstandorte lässt ein zentrales technisches Detail ausser Acht: Die Entschlüsselung der Daten ist nur mit Schlüsseln möglich, die physisch in der Schweiz liegen. Kein ausländischer Staat, kein Cloud-Provider und keine unbefugte Person kann diese Verschlüsselung umgehen. 
[Link zum Detail-Factsheet: "Wie Bring Your Own Key funktioniert"]

### 02. KURZ & PRÄGNANT (X / TWITTER)
Falschmeldungen zum #EPD: Ausländische Behörden haben KEINEN Zugriff auf Schweizer Gesundheitsdaten. Alle Daten sind kryptografisch gesichert; die Schlüssel verlassen die Schweiz niemals. 🛡️ #Datenschutz #CyberSecurity

### 03. COMMUNITY MANAGEMENT TEXT-BAUSTEIN
«Guten Tag [Name], wir verstehen Ihre Sorge. Wichtig zu wissen: Der Cloud-Anbieter speichert nur einen unlesbaren Zahlensalat. Der Schlüssel, um daraus wieder Ihre Gesundheitsdaten zu machen, liegt auf Servern in der Schweiz und wird vom Bund kontrolliert.»`
      },
      talking_points: {
        id: "talking_points",
        label: "Talking Points",
        target_audience: "Direktion",
        psychological_objective: "Souveränität ausstrahlen und Vertrauen in Schweizer Institutionen stärken.",
        blueprint_content: `### 01. WICHTIGSTE ARGUMENTATIONSLINIEN
- **De-Eskalation:** "Wir nehmen die Sorgen der Bevölkerung und der Ärzteschaft ernst. Datenschutz hat oberste Priorität."
- **Faktenklärung:** "Die Behauptung vom 'Gläsernen Patienten' ist technisch falsch. Wir trennen den Tresorraum vom Schlüssel."
- **Vertrauensanker:** "Die Souveränität liegt beim Schlüsselinhaber – der Schweizerischen Eidgenossenschaft."

### 02. RED FLAGS (VERBOTENE BEGRIFFE)
- ❌ *"Absolute Sicherheit"* (Besser: "Nach aktuellstem Stand der Technik")
- ❌ *"Die US-Cloud"* (Besser: "Globale Hyperscaler-Infrastruktur")
- ❌ *"Wir garantieren"* (Besser: "Die technische Architektur stellt sicher")

### 03. BRÜCKENSÄTZE
- "Ich verstehe die emotionale Reaktion, aber lassen Sie uns auf die technischen Fakten schauen..."
- "Das ist eine berechtigte Frage. Die Antwort darauf liefert unser 'Bring Your Own Key' Konzept..."`
      },
      qa_brief: {
        id: "qa_brief",
        label: "Q&A Leitfaden",
        target_audience: "Medienstelle",
        psychological_objective: "Triage von technischen und politischen Rückfragen.",
        blueprint_content: `### 01. CLOUD ACT & BEHÖRDENZUGRIFF
**Q: Der CLOUD Act zwingt US-Firmen zur Datenherausgabe. Sind wir betroffen?**
A: Die Betreiberfirma untersteht dem CLOUD Act. Würde sie zur Herausgabe gezwungen, könnte sie aber nur verschlüsselte Datenfragmente (Ciphertext) aushändigen. Ohne die in der Schweiz liegenden Schlüssel sind diese Daten für niemanden lesbar.

### 02. STANDORTFRAGE
**Q: Warum wurden die Server nicht in der Schweiz gebaut?**
A: Die Skalierbarkeit, Ausfallsicherheit (Geo-Redundanz) und die Abwehr von massiven DDoS-Angriffen erfordern Infrastrukturen, die nur globale Anbieter in dieser Qualität bereitstellen können. Wir nutzen deren "Blech", behalten aber die volle Kontrolle über die Daten.

### 03. POLITISCHE FORDERUNGEN
**Q: Werden Sie die Migration, wie von Parlamentariern gefordert, nun stoppen?**
A: Ein Moratorium würde die IT-Sicherheit gefährden, da wir länger auf veralteten, dezentralen On-Premise-Systemen verbleiben müssten. Die Migration ist ein entscheidender Schritt vorwärts in Sachen Sicherheit.`
      }
    }
  },
  alpine_transit_crisis: {
    cards: [
      {
        id: "trend-a1",
        topic: "Krisenmanagement",
        headline: "Gerüchte über Cyberangriff auf Schweizer Verkehrsinfrastruktur",
        outlets_involved: ["X (Trending)", "20 Minuten (Ticker)"],
        velocity_change: "+850% (2h)",
        tipping_point_score: 95,
        sentiment_split: { positive: 2, neutral: 8, negative: 90 },
        summary: "Rasante Verbreitung von Spekulationen auf Social Media mangels offizieller technischer Diagnose."
      }
    ],
    blueprints: {
      hintergrund: {
        id: "hintergrund",
        label: "Hintergrund",
        target_audience: "Alle",
        psychological_objective: "Faktenbasierte Diagnose",
        blueprint_content: `### 01. KERNBOTSCHAFT (URSACHE)
Der aktuelle Unterbruch im Alpen-Basistunnel ist auf einen isolierten Hardwaredefekt in einem lokalen Stellwerk zurückzuführen. Es gibt **keinerlei Hinweise** auf einen Cyberangriff oder eine externe Manipulation.

### 02. TECHNISCHE DETAILS
- **Systemausfall:** Ein Relais-Modul (Typ R-400) im Sektor Süd hat um 06:14 Uhr einen Kurzschluss erlitten.
- **Sicherheitsmechanismus:** Das System fiel sofort in den 'Fail-Safe'-Modus (alle Signale auf Rot). Dies ist das vorgesehene Verhalten, um maximale Sicherheit für Passagiere zu garantieren.
- **Behebung:** Techniker sind vor Ort. Ein Ersatzteil wird per Helikopter eingeflogen.

### 03. OFFIZIELLES ZITAT
> «Das Wichtigste zuerst: Alle Passagiere sind sicher. Die Sicherheitssysteme haben genau so funktioniert, wie sie sollen. Die kursierenden Gerüchte über einen Cyberangriff entbehren jeder Grundlage.»`
      },
      social: {
        id: "social",
        label: "Social",
        target_audience: "Pendler",
        psychological_objective: "Transparenz",
        blueprint_content: `### 01. LIVE-TICKER UPDATE (X/TWITTER)
⚠️ UPDATE STÖRUNG ALPEN-TUNNEL ⚠️
Ursache identifiziert: Lokaler Hardwaredefekt in einem Stellwerk (Kurzschluss). Es handelt sich NICHT um einen Cyberangriff. Die Sicherheitssysteme (Fail-Safe) haben korrekt funktioniert. Züge werden aktuell evakuiert bzw. umgeleitet. #Bahnverkehr #Störung

### 02. PENDLER-INFO (APP PUSH)
Störung im Nord-Süd-Verkehr: Ein defektes Stellwerk führt zu Zugausfällen. Techniker sind vor Ort. Bitte prüfen Sie Ihre Verbindung im Online-Fahrplan. Keine Hinweise auf externe Einwirkung.`
      },
      talking_points: {
        id: "talking_points",
        label: "Talking Points",
        target_audience: "Mediensprecher",
        psychological_objective: "De-Eskalation",
        blueprint_content: `### 01. KEY MESSAGES FÜR INTERVIEWS
- "Wir haben es mit einem banalen, wenn auch ärgerlichen Hardwaredefekt zu tun."
- "Die Systeme haben sofort reagiert und den Verkehr sicher gestoppt (Fail-Safe)."
- "Wir bitten darum, Spekulationen auf Social Media keinen Glauben zu schenken."

### 02. UMGANG MIT 'HACKER'-GERÜCHTEN
- **Falls direkt angesprochen:** "Wir überwachen unsere Netzwerke 24/7. Es gab keine Anomalien im Netzwerkverkehr. Es ist ein Kurzschluss an einer physischen Komponente."`
      },
      qa_brief: {
        id: "qa_brief",
        label: "Q&A",
        target_audience: "Medienstelle",
        psychological_objective: "Klarheit",
        blueprint_content: `### 01. EVAKUIERUNG
**Q: Sind Passagiere im Tunnel eingeschlossen?**
A: Alle betroffenen Züge wurden sicher zum Stehen gebracht. Zwei Züge befinden sich im Tunnel; die klimatisierten Wagen werden mit Notstrom versorgt. Ein Evakuierungszug ist bereits unterwegs. Es besteht keine Gefahr.

### 02. DAUER DER STÖRUNG
**Q: Wie lange dauert der Unterbruch?**
A: Wir gehen von Reparaturarbeiten bis in die späten Abendstunden aus. Wir kommunizieren das nächste Update um 14:00 Uhr.

### 03. VORWURF 'VERALTETE INFRASTRUKTUR'
**Q: Zeigt das nicht, dass das System veraltet ist?**
A: Hardwarekomponenten können trotz engmaschiger Wartung ausfallen. Entscheidend ist, dass das System den Fehler sofort erkennt und den Verkehr sicher stoppt. Genau das ist hier passiert.`
      }
    }
  },
  esg_investigation: {
    cards: [
      {
        id: "trend-e1",
        topic: "Reputation & Finanzen",
        headline: "Greenwashing-Vorwürfe belasten Mega-Projekt",
        outlets_involved: ["Finanz und Wirtschaft", "NZZ"],
        velocity_change: "+210% (24h)",
        tipping_point_score: 75,
        sentiment_split: { positive: 10, neutral: 20, negative: 70 },
        summary: "Investoren zeigen sich besorgt über mögliche ESG-Downgrades aufgrund der Lieferketten-Vorwürfe."
      }
    ],
    blueprints: {
      hintergrund: {
        id: "hintergrund",
        label: "Hintergrund",
        target_audience: "Wirtschaftspresse",
        psychological_objective: "Handlungsfähigkeit beweisen",
        blueprint_content: `### 01. AUSGANGSLAGE & SOFORTMASSNAHMEN
Wir wurden heute Morgen durch Medienberichte auf angebliche Arbeitsrechtsverletzungen bei einem Tier-3-Subunternehmer in Südostasien aufmerksam gemacht.
- **Sofortige Sistierung:** Alle laufenden Aufträge mit dem betroffenen Lieferanten wurden bis auf Weiteres eingefroren.
- **Sonderuntersuchung:** Eine unabhängige, internationale Revisionsgesellschaft (Big 4) wurde mit einer forensischen Untersuchung vor Ort beauftragt.

### 02. AUDIT-PROZESSE & ZERTIFIZIERUNG
- Der Hauptlieferant (Tier-1) weist gültige und erst vor drei Monaten erneuerte SA8000- und ISO45001-Zertifikate auf.
- Wir untersuchen aktuell, wie und ob Aufträge entgegen unserer Compliance-Vorgaben an unzertifizierte Subunternehmer (Tier-3) weitergegeben wurden.

### 03. OFFIZIELLES ZITAT (CEO)
> «Wir tolerieren in unserer Lieferkette keinerlei Abstriche bei den Menschenrechten. Sollten sich die Vorwürfe bewahrheiten, werden wir juristische Schritte gegen den Hauptlieferanten einleiten. Wir setzen auf radikale Transparenz bei der Aufklärung.»`
      },
      social: {
        id: "social",
        label: "Social",
        target_audience: "NGOs/Aktivisten",
        psychological_objective: "Dialogbereitschaft",
        blueprint_content: `### 01. STATEMENT (LINKEDIN CORPORATE)
Die Medienberichte zu unserem Lieferanten haben uns alarmiert. Wir nehmen diese Vorwürfe extrem ernst. Unsere ESG-Richtlinien sind nicht verhandelbar. Wir haben soeben eine unabhängige Untersuchung eingeleitet und die Zusammenarbeit mit dem betroffenen Subunternehmer sofort eingefroren. Wir werden die Ergebnisse der Untersuchung transparent veröffentlichen. #CorporateResponsibility #Compliance

### 02. DIREKTANTWORT AUF NGO-TWEETS
«Guten Tag, wir danken für den Hinweis. Wir tolerieren keine Menschenrechtsverletzungen. Eine unabhängige Taskforce prüft die Vorwürfe derzeit vor Ort. Bis zur Klärung sind alle Aufträge an den Lieferanten sistiert.»`
      },
      talking_points: {
        id: "talking_points",
        label: "Talking Points",
        target_audience: "Management",
        psychological_objective: "Verantwortung übernehmen",
        blueprint_content: `### 01. KEY MESSAGES
- **Verantwortung:** "Wir verstecken uns nicht hinter Subunternehmern. Die Letztverantwortung für die Integrität unserer Produkte liegt bei uns."
- **Handlungsorientierung:** "Wir haben sofort reagiert: Untersuchung läuft, Verträge eingefroren."
- **Systemik:** "Wenn Zertifizierungen umgangen wurden, liegt ein systemischer Betrug vor, den wir juristisch verfolgen werden."

### 02. VERHALTEN BEI INVESTOREN-FRAGEN
- Betonen Sie die Stabilität der "Green Bonds". 
- Erklären Sie, dass gerade die rasche, schonungslose Aufklärung die Resilienz unserer Governance beweist.`
      },
      qa_brief: {
        id: "qa_brief",
        label: "Q&A",
        target_audience: "Medienstelle",
        psychological_objective: "Transparenz",
        blueprint_content: `### 01. VORWURF 'GREENWASHING'
**Q: Ist Ihr ganzes Nachhaltigkeitsversprechen nur PR?**
A: Nein. Wir investieren jährlich Millionen in Audits. Dass wir jetzt betrogen worden sein könnten, zeigt, wie komplex globale Lieferketten sind. Unser sofortiges, rigoroses Eingreifen beweist jedoch, dass wir es ernst meinen.

### 02. KONSEQUENZEN
**Q: Werden Sie den Hauptlieferanten feuern?**
A: Wenn die Untersuchung zeigt, dass der Hauptlieferant vorsätzlich Audits umgangen hat, werden wir die Geschäftsbeziehung fristlos beenden und Schadenersatz fordern.

### 03. AUSWIRKUNG AUF PROJEKT
**Q: Verzögert sich das Mega-Projekt nun?**
A: Die Sistierung betrifft 4% der Liefermengen. Wir haben redundante Lieferanten (Dual Sourcing) für diese Komponenten. Wir rechnen aktuell nicht mit signifikanten Verzögerungen.`
      }
    }
  }
};
