export interface Principle {
  id: string;
  title: string;
  short: string;
  long: string;
  fullContent: string;
  image: string;
  sections?: {
    title?: string;
    content?: string;
    items?: string[];
  }[];
  links?: {
    text: string;
    href: string;
  }[];
}

export const principlesData: Principle[] = [
  {
    id: "accountability",
    title: "DIRECT Accountability",
    short: "Sicherheit durch klare Verantwortlichkeiten",
    long: "DIRECTGOLD steht fur eine klare Trennung der Verantwortlichkeiten zwischen zwei spezialisierten Gesellschaften: der Goldato Handels GmbH, die ausschliesslich den Handel abwickelt, und der GOLDLAGERHAUS Edelmetallverwahrungs AG, die ausschliesslich fur die sichere Verwahrung des Kundengoldes verantwortlich ist. Diese Struktur gewahrleistet maximale Transparenz und Sicherheit bei Goldkaufen, -verkaufen und Auslieferungen.",
    fullContent: "DIRECTGOLD steht fur eine klare Trennung der Verantwortlichkeiten zwischen zwei spezialisierten Gesellschaften: der Goldato Handels GmbH, die ausschliesslich den Handel abwickelt, und der GOLDLAGERHAUS Edelmetallverwahrungs AG, die ausschliesslich fur die sichere Verwahrung des Kundengoldes verantwortlich ist. Diese Struktur gewahrleistet maximale Transparenz und Sicherheit bei Goldkaufen, -verkaufen und Auslieferungen. Das Vertragsverhaltnis mit dem Kunden bildet eine klare Dreiecksbeziehung zwischen Kaufer, Handler und Verwahrer – mit folgenden Vorteilen:",
    image: "https://placehold.co/600x400",
    sections: [
      {
        title: "Eindeutiger Zeitpunkt des Eigentumsubergangs",
        content: "Der Kaufvertrag wird zwischen Dir und Goldato geschlossen. Sobald die gekaufte Goldmenge auf Deinem personlichen Golddepot bei Goldlagerhaus eingebucht wird, gilt der Kaufvertrag als erfullt und das Eigentum am Gold ist rechtlich eindeutig auf Dich ubergegangen."
      },
      {
        title: "Klare Trennung von Handel und Lagerung",
        items: [
          "Goldato: ausschliesslich Handel, keine Lagerung von Kundengold",
          "Goldlagerhaus: ausschliesslich Verwahrung, kein Handel"
        ],
        content: "Dadurch sind mogliche Risiken aus der Handelstatigkeit von Goldato strikt von den bei Goldlagerhaus gelagerten Bestanden getrennt."
      },
      {
        title: "Transparente Abwicklung von Kaufen und Verkaufen",
        items: [
          "Du kaufst Dein Gold von und verkaufst es an Goldato.",
          "Kaufe und Verkaufe erfolgen jeweils zum nachstmoglichen LBMA Goldpreis PM (Order Execution).",
          "Die Erfullung des Kaufvertrages (Settlement) erfolgt durch Ubergabe der erworbenen Goldmenge in Dein bei der GOLDLAGERHAUS AG gefuhrtes Golddepot."
        ]
      },
      {
        title: "Eine Plattform – zwei Konten",
        content: "Die DIRECTGOLD Plattform wird von beiden Gesellschaften gemeinsam betrieben. Auf der Plattform werden beide Konten parallel, klar getrennt und zugleich in Summe dargestellt. So siehst Du jederzeit, bei welcher Gesellschaft sich Deine Vermogenswerte befinden. Goldmengen und Geldbetrage, die gerade Gegenstand der Abwicklung Deiner Handelsauftrage sind, werden auf dem Handelskonto ausgewiesen, wahrend auf dem Golddepot jederzeit das aus bereits erfullten Kaufvertragen in Deinem Eigentum befindliche Gold ersichtlich ist.",
        items: [
          "Goldato fuhrt Dein Handelskonto.",
          "Goldlagerhaus fuhrt Dein Verwahrungskonto (Golddepot)."
        ]
      }
    ]
  },
  {
    id: "validation",
    title: "DIRECT Validation",
    short: "Deine Identitat. Dein Konto. Digital bestatigt.",
    long: "Bevor Dein personliches Kundenkonto bei DIRECTGOLD eroffnet und aktiviert wird, durchlauft es einen strukturierten Validierungsprozess. Dabei wird Deine Identitat eindeutig bestatigt und Dein Konto verifiziert – ein zentraler Schritt, um sicherzustellen, dass ausschliesslich Du selbst Zugriff auf Dein Golddepot hast und alle Transaktionen rechtssicher erfolgen.",
    fullContent: "Bevor Dein personliches Kundenkonto bei DIRECTGOLD eroffnet und aktiviert wird, durchlauft es einen strukturierten Validierungsprozess. Dabei wird Deine Identitat eindeutig bestatigt und Dein Konto verifiziert – ein zentraler Schritt, um sicherzustellen, dass ausschliesslich Du selbst Zugriff auf Dein Golddepot hast und alle Transaktionen rechtssicher erfolgen. Wenn Du Gold bei DIRECTGOLD kaufst, geht es um echtes Eigentum an physischem Gold – und darum, dass alles absolut sicher, transparent und rechtsverbindlich ablauft. Darum beginnt bei uns alles mit einem Onboarding-Prozess, der hochste Standards erfullt – so wie man es sonst nur von fortschrittlichen Online-Banken kennt - nur noch etwas schneller und komfortabler als bei den meisten Banken – und vollstandig automatisiert innerhalb weniger Minuten abgeschlossen. Wir setzen dabei auf modernste Technologien um den Prozess fur Dich zuverlassig, sicher und unkompliziert zu gestalten.",
    image: "https://placehold.co/600x400",
    sections: [
      {
        title: "Unser Onboarding umfasst:",
        items: [
          "Deine Identifizierung mithilfe Deines amtlichen Lichtbildausweises und die Unterzeichnung der erforderlichen Dokumente mit qualifizierter elektronischer Signatur (QES) – eIDAS-konform und damit rechtlich gleichwertig mit Deiner handschriftlichen Unterschrift, um Dir unsere Dienstleistungen mit hochster Rechtssicherheit anbieten zu konnen",
          "die automatische Verifizierung Deiner personlichen Angaben wie Name, Geburtsdatum, Nationalitat, Tel.-Nr., E-Mail-Adresse, sodass es zu keinen Fehlern bei der Dateneingabe kommen kann",
          "einen digitalen Abgleich mit internationalen PEP- und Sanktionslisten, damit alle regulatorischen Anforderungen erfullt sind",
          "die Bezahlung Deines ersten Kaufes mittels direkter Bank-zu-Bank-Zahlung uber Tink - unserem europaischen Open-Banking-Partner fur sofortige, sichere und gebuhrenfreie Zahlungen direkt von Deinem Konto. Die Zahlung fuhrst Du dabei ganz einfach uber die App oder das Online-Banking Deiner eigenen Bank durch – so, wie Du es gewohnt bist. Tink, Teil der Visa-Gruppe, ist der fuhrende Account-to-Account-Payment-Anbieter Europas und steht fur hochste Sicherheit und Zuverlassigkeit.",
          "Alle Prufschritte laufen nahtlos im Hintergrund – digital ohne Papier, ohne Wartezeiten, ohne manuelle Eingriffe.",
          "Und das Beste: Du durchlauft das DIRECTGOLD-Onboarding nur einmal – in wenigen Minuten – und eroffnest dabei gleichzeitig Deine Konten bei beiden Gesellschaften: bei der GOLDATO Handels GmbH fur den Handel und bei der GOLDLAGERHAUS AG fur die sichere Lagerung Deines Goldes"
        ]
      },
      {
        title: "Warum dieser Aufwand?",
        content: "Ganz einfach: Weil es um Dein Eigentum und Deine Sicherheit geht. Das schutzt nicht nur uns, sondern auch Dich – denn Du kannst sicher sein, dass Du mit einem seriosen, gepruften und regulierungskonformen Partner zusammenarbeitest. Voll automatisierte Kontovalidierung mit maximaler Sicherheit bei hochstem Komfort."
      }
    ]
  },
  {
    id: "transparency",
    title: "DIRECT Price Transparency",
    short: "Kaufen und Verkaufen zum LBMA Goldpreis",
    long: "Das transparente DIRECTGOLD-Pricing richtet sich direkt nach dem LBMA-Goldpreis. Bei jeder Transaktion weisen wir Dir den Deinem Kauf zugrunde liegenden LBMA-Goldpreis sowie die verrechnete Kauf- bzw. Verkaufgebuhr exakt aus.",
    fullContent: "Das transparente DIRECTGOLD-Pricing richtet sich direkt nach dem LBMA-Goldpreis.",
    image: "https://placehold.co/600x400",
    sections: [
      {
        title: "Grundprinzip des Pricings",
        items: [
          "Das transparente DIRECTGOLD-Pricing richtet sich direkt nach dem LBMA-Goldpreis.",
          "Diesen geben wird sowohl fur Kaufe (zzgl. Kaufgebuhr) als auch fur Verkaufe (abzgl. Verkaufgebuhr) 1:1 an Dich weiter."
        ]
      },
      {
        title: "Transparente Ausweisung",
        items: [
          "Bei jeder Transaktion weisen wir Dir den Deinem Kauf zugrunde liegenden LBMA-Goldpreis (inkl. Kurs und Datum) sowie die verrechnete Kauf- bzw. Verkaufgebuhr exakt aus."
        ]
      },
      {
        title: "Welche Vorteile hast Du daraus",
        items: [
          "Der LBMA-Goldpreis ist ein weltweit transparenter Referenzpreis.",
          "Er stellt einen marktgerechten Durchschnittspreis dar und ist damit wirtschaftlich vorteilhafter als individuelle Handlerpreise zu beliebigen Tageszeitpunkten.",
          "Das Modell schutzt Dich vor: intransparenten oder nicht nachvollziehbaren Auf-/Abschlagen, ungunstigen untertagigen Transaktionszeitpunkten."
        ]
      },
      {
        title: "Degressive Staffelung der Kaufgebuhr",
        items: [
          "Anders als andere Anbieter, die jeden Goldkauf ihrer Kunden isoliert betrachten, richtet sich die Hohe der Kaufgebuhr bei DIRECTGOLD danach, fur welchen Betrag Du in den letzten 12 Monaten insgesamt Gold gekauft hast. Die Kaufgebuhr ist degressiv gestaffelt in Abhangigkeit des in den letzten 12 Monaten abgewickelten Kaufvolumens. Dies ermoglicht es Dir einzelne Kaufe im Zeitablauf gunstiger durchzufuhren, als wenn jeder Kauf isoliert betrachtet und abgerechnet wurde.",
          "Wenn Du, anstatt nur einmal Gold zu kaufen, mehrmals und ggf. auch kleinere Betrage investieren willst, profitierst Du von der kumulierten Berucksichtigung Deiner in den letzten 12 Monaten getatigten Kaufe.",
          "Die Kaufgebuhr sinkt stufenweise mit steigendem Gesamtinvestitionsbetrag."
        ]
      },
      {
        title: "Zusatzliche Vergunstigung bei Goldkaufplanen",
        items: [
          "Nicht nur durch die degressive Staffelung der Kaufgebuhr auf Basis der letzten 12 Monate, sondern daruber hinaus durch die Hinzurechnung des Volumens der lt. Goldkaufplan fur die nachsten 12 Monate von Dir geplanten aber noch nicht getatigten Goldkaufe. Basis fur Kaufgebuhr = tatsachliche Kaufe in letzten 12M + fur kommende 12M geplante Kaufe",
          "Keine Anfangszahlung, Abschlussgebuhr oder dergleichen - nur die von Dir gewahlten monatlichen Kaufbetrage, keine Kaufverpflichtung, keine Nachteile bei Ausbleiben Deiner geplanten monatlichen Kaufe oder wenn Du den Goldkaufplan ganz abbrichst."
        ]
      }
    ],
    links: [
      { text: "Gebuhrentabelle", href: "/info/gebuhrentabelle" },
      { text: "Infos Kaufgebuhr", href: "/info/kaufgebuhr" },
      { text: "Exkurs 1 - LBMA GOLDPREIS", href: "/exkurs/lbma-goldpreis" }
    ]
  },
  {
    id: "ownership",
    title: "DIRECT Ownership",
    short: "Direktes Eigentum an eindeutig zugeordneten Goldbarren",
    long: "DIRECTGOLD verwahrt fur Dich ausschliesslich Allocated, Dir direkt zugeordnete, nachweislich physisch vorhandene konkrete Goldbarren. Direktes Eigentum, von Dir personlich jederzeit 24/7 unabhangig uberprufbar, inkl. Barrennummer fur jeden einzelnen Barren.",
    fullContent: "DIRECTGOLD verwahrt fur Dich ausschliesslich Allocated, Dir direkt zugeordnete, nachweislich physisch vorhandene konkrete Goldbarren. Direktes Eigentum, von Dir personlich jederzeit 24/7 unabhangig uberprufbar, inkl. Barrennummer fur jeden einzelnen Barren. Du erwirbst anteiliges Eigentum an einer sammelverwahrten Menge von registrierten Goldbarren zwischen 100 g und 1 kg. So kannst Du auch kleinere oder regelmasige Kaufe tatigen, ohne Dich bei jedem Kauf fur bestimmte Barrengrosen entscheiden oder teure Kleinstbarren kaufen zu mussen. Die von DIRECTGOLD zur Sammellagerung gewahlten Barrengrosen von 100 g und grosser bieten Dir optimale Konditionen, Transparenz und volle Rechtssicherheit. Sobald Du mindestens 100 g besitzt, kannst Du jederzeit einen gesamten Goldbarren auf Dich registrieren und in ungeteilter Einzellagerung ausschliesslich auf Deinen Namen ubertragen lassen – immer inkl. der konkreten Nr. Deines Barrens, jederzeit direkt von Dir uberprufbar.",
    image: "https://placehold.co/600x400",
    links: [
      { text: "Infos Sammel- / Einzellagerung", href: "/info/sammel-einzellagerung" },
      { text: "Exkurs 1 - LBMA GOLDPREIS", href: "/exkurs/lbma-goldpreis" }
    ]
  },
  {
    id: "origin",
    title: "DIRECT Origin",
    short: "Neu produzierte Barren, direkt von der Raffinerie ins Hochsicherheitslager",
    long: "Du kaufst bei DIRECTGOLD ausschliesslich NEU PRODUZIERTE GOLDBARREN, keine Gebrauchtware vom Sekundarmarkt. Die produzierten Barren stammen direkt von LBMA-zertifizierten Raffinerien und werden ohne Umlaufspuren oder unklare Handelsketten ins Hochsicherheitslager transportiert.",
    fullContent: "Du kaufst bei DIRECTGOLD ausschliesslich NEU PRODUZIERTE GOLDBARREN, keine Gebrauchtware vom Sekundarmarkt.",
    image: "https://placehold.co/600x400",
    sections: [
      {
        items: [
          "Die produzierten Barren stammen direkt von LBMA-zertifizierten Raffinerien, i.d.R. von Argor-Heraeus.",
          "Luckenlose Dokumentation vom Guss bis zur Einlagerung – ohne Vorbesitzer, Umlaufspuren oder unklare Handelsketten.",
          "Falschungsrisiken oder Unsicherheiten, die beim Zweitmarkt auftreten konnen, sind ausgeschlossen.",
          "Jeder Barren wird nach der Produktion direkt von der Raffinerie in das Hochsicherheitslager der Goldlagerhaus AG bei LOOMIS in Zurich/Kloten (Schweiz) transportiert, keine Umwege, keine Umlagerungen.",
          "Neuware ist mit den jeweils aktuellsten Sicherheitsstandards versehen (Seriennummern, Lasergravuren, Zertifikate).",
          "Durch die Integration in die aXedras-Plattform erhalt jeder Barren einen digitalen Zwilling. Dieser dokumentiert Herkunft, Echtheit, Integritat der Lieferkette sowie den aktuellen Lagerort – transparent, falschungssicher und von Dir jederzeit abrufbar."
        ]
      }
    ],
    links: [
      { text: "Exkurs 2 - Argor-Heraeus", href: "/exkurs/argor-heraeus" },
      { text: "Exkurs 3 - LOOMIS", href: "/exkurs/loomis" },
      { text: "Exkurs 4 – Schweiz als Lagerstandort", href: "/exkurs/schweiz-lagerstandort" }
    ]
  },
  {
    id: "integrity",
    title: "DIRECT Integrity",
    short: "Garantierte Echtheit und unverfalschliche Nachverfolgbarkeit mittels Blockchain-Technologie",
    long: "Jeder einzelne von DIRECTGOLD fur seine Kunden gelagerte Barren hat einen Digital Twin - digitalen Zwilling – die falschungssichere, standardisierte und mit allen relevanten Daten angereicherte digitale Reprasentation des physischen Goldbarrens auf der aXedras-Plattform.",
    fullContent: "Jeder einzelne von DIRECTGOLD fur seine Kunden gelagerte Barren hat einen \"Digital Twin\" - digitalen Zwilling – die falschungssichere, standardisierte und mit allen relevanten Daten angereicherte digitale Reprasentation des physischen Goldbarrens auf der aXedras-Plattform (\"Bullion Integrity Ledger\").",
    image: "https://placehold.co/600x400",
    sections: [
      {
        title: "Der digitale Zwilling enthalt eine Vielzahl an Informationen, u. a.:",
        items: [
          "Seriennummer und Barrengrose (100 g, 500 g, 1 kg, etc.)",
          "Gewicht und Feinheit (z. B. 999.9)",
          "Herkunft des Rohmaterials (Minen, Recycling als Nachweis des \"Responsible Sourcing\")",
          "Herstellungsdatum und Raffinerie",
          "Eigentumsstatus und Standort (z. B. in Verwahrung bei einem bestimmten Verwahrer, etwa GOLDLAGERHAUS AG und Verwahrungsstandort, etwa LOOMIS CH)"
        ]
      },
      {
        title: "Falschungssichere Absicherung",
        items: [
          "Der digitale Zwilling wird uber die Distributed Ledger Technology gespeichert.",
          "Jede Anderung (z. B. Eigentumswechsel, Umlagerung, Audit-Update) wird als Transaktion vermerkt.",
          "Der digitale Zwilling \"wachst mit dem Barren mit\". Damit entsteht ein unveranderbarer Audit-Trail (digitale Historie).",
          "Uber den Zwilling kann jederzeit nachvollzogen werden: Woher kommt der Barren, wo ist er jetzt, und wem gehort er?"
        ]
      }
    ],
    links: [
      { text: "Exkurs 5 - aXedras", href: "/exkurs/axedras" }
    ]
  }
];

export function getPrincipleById(id: string): Principle | undefined {
  return principlesData.find(p => p.id === id);
} 