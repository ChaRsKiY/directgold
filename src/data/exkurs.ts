export interface ExkursPage {
  id: string;
  title: string;
  content: {
    sections: {
      title?: string;
      paragraphs?: string[];
      items?: string[];
    }[];
  };
}

export const exkursPages: Record<string, ExkursPage> = {
  "argor-heraeus": {
    id: "argor-heraeus",
    title: "Exkurs 2 – Goldbarren von Argor-Heraeus",
    content: {
      sections: [
        {
          paragraphs: [
            "Unternehmensgrose & Hintergrund: Argor-Heraeus ist einer der weltweit fuhrenden Edelmetallverarbeiter, gegrundet 1951 in der Schweiz, seit 2017 Teil der Heraeus Gruppe (Deutschland). Sitz in Mendrisio (Tessin) mit internationalen Tochtergesellschaften.",
            "LBMA & Good Delivery: Seit Jahrzehnten akkreditierte LBMA-\"Good Delivery\"-Raffinerie, erfullt hochste Standards in der Barrenproduktion.",
            "Spezialisierung Edelmetallverarbeitung: Fokus auf Raffination, Recycling, Verarbeitung und Produktion von Gold, Silber, Platin und Palladium. Breites Spektrum an LBMA-zertifizierten Investmentbarren (1g bis 400 Unzen Good Delivery Barren), weltweit anerkannt und handelbar.",
            "Nachhaltigkeit & Transparenz: Argor-Heraeus gilt als Vorreiter bei Responsible Sourcing und Ruckverfolgbarkeit von Edelmetallen.",
            "Kundenkreis: Zu den Kunden zahlen Banken, Finanzinstitute, Schmuck- und Uhrenhersteller, Industrieunternehmen sowie staatliche Institutionen und Notenbanken.",
            "aXedras-Mitgliedschaft: Argor-Heraeus ist Mitglied des aXedras-Netzwerks und unterstutzt die digitale Nachverfolgbarkeit, Authentifizierung und Falschungssicherheit von Edelmetallbarren.",
            "Argor-Heraeus steht fur Qualitat, LBMA-Standards, globale Anerkennung, Nachhaltigkeit und digitale Transparenz.",
            "Relevanz fur DIRECTGOLD: Garantiert hochste Qualitats- und Herkunftsstandards sowie internationale Handelbarkeit der Barren."
          ]
        }
      ]
    }
  },
  "loomis": {
    id: "loomis",
    title: "Exkurs 3 – Goldbarrenlagerung bei LOOMIS",
    content: {
      sections: [
        {
          paragraphs: [
            "Grose & Prasenz: Loomis ist ein weltweit fuhrendes Wertelogistik-Unternehmen mit ca. 24.500 Mitarbeitenden und uber 30 Mrd. SEK Jahresumsatz, borsennotiert an der Nasdaq Stockholm.",
            "LBMA-Mitgliedschaft: Loomis International (UK) Ltd ist LBMA-Transporter-Mitglied und Teil der offiziellen LBMA-Infrastruktur.",
            "Edelmetall-Logistik & Lagerung: Spezialisiert auf sichere Transporte, Zollabwicklung, Vaulting und Inventarverwaltung von Edelmetallen; Betrieb hochgesicherter Lager in wichtigen Finanzzentren wie Zurich, London, Hongkong und New York.",
            "Kundenkreis & Vertrauen: Loomis geniesst das Vertrauen fuhrender Marktteilnehmer – darunter internationale Banken, Finanzdienstleister und Notenbanken.",
            "Versicherungsschutz: Bei Loomis gelagerte Werte sind vollumfanglich versichert.",
            "aXedras-Mitgliedschaft: Loomis ist Teil des aXedras-Netzwerks und unterstutzt die digitale Nachverfolgbarkeit, Authentizitat und Integritat von Edelmetallen.",
            "Relevanz fur DIRECTGOLD: Die GOLDLAGERHAUS AG verwahrt die Goldbarren seiner Kunden bei LOOMIS in der Schweiz (Zurich/Kloten). LOOMIS bringt die entscheidende Kombination aus globaler Reichweite, LBMA-Anerkennung, hochsten Sicherheits- und Versicherungsstandards sowie moderner Technologieintegration in die Partnerschaft mit Goldlagerhaus ein."
          ]
        }
      ]
    }
  },
  "schweiz-lagerstandort": {
    id: "schweiz-lagerstandort",
    title: "Exkurs 4 – Die Schweiz als Lagerstandort fur Gold",
    content: {
      sections: [
        {
          paragraphs: [
            "Keine Enteignungen jemals: Die Schweiz ist das einzige bedeutende westliche Land, das niemals den privaten Goldbesitz eingeschrankt oder enteignet hat – weder in Kriegs- noch in Krisenzeiten. In allen ubrigen fuhrenden westlichen Wirtschaftsnationen (z.B. USA, UK, Frankreich, Deutschland) kam es im 20. Jahrhundert zu staatlichen Zugriffen oder Verboten, teils uber Jahrzehnte hinweg.",
            "Politisch und rechtlich stabil: Seit uber 200 Jahren neutrale, stabile Demokratie mit starkem Eigentumsschutz und hoher Rechtssicherheit.",
            "Weltzentrum des Goldes: Mehr als 60 % des weltweiten Goldes werden in der Schweiz raffiniert und gelagert. Internationale Partner wie Argor-Heraeus und Loomis garantieren hochste Qualitats- und Sicherheitsstandards.",
            "Datenschutz & Diskretion: Strenges Schweizer Datenschutzrecht und Lagerung ausserhalb des Bankensystems sichern Privatsphare und Vermogensschutz.",
            "Steuerlich vorteilhaft: Keine Mehrwertsteuer oder Kapitalertragssteuer auf Anlagegold, keine Meldepflicht bei reiner Lagerung.",
            "Relevanz fur DIRECTGOLD: Die Schweiz bietet fur die Goldlagerung im Rahmen von DIRECTGOLD ideale Voraussetzungen: Sie steht seit Jahrzehnten fur politische Stabilitat, Sicherheit und Verlasslichkeit in der Edelmetallverwahrung. Ein zusatzlicher Vorteil liegt in der Nahe der Produktion der Barren bei Argor-Heraeus zur Lagerung beim schweizerischen Hochsicherheitslager von LOOMIS, beides innerhalb eines Landes, wodurch Transportwege kurz und Sicherheitsrisiken minimal bleiben. Sollte es trotz der hohen Stabilitat der Schweiz erforderlich werden, kann das eingelagerte Gold dank des weltweiten Loomis-Netzwerks problemlos an einen anderen internationalen Lagerort ubertragen werden."
          ]
        }
      ]
    }
  },
  "axedras": {
    id: "axedras",
    title: "Exkurs 5 – Die Rolle von aXedras im Detail",
    content: {
      sections: [
        {
          paragraphs: [
            "aXedras betreibt eine auf Distributed Ledger Technology (DLT) basierende Plattform fur die Edelmetallindustrie.",
            "Ziel ist der Aufbau eines vertrauenswurdigen, digitalen Okosystems, das Raffinerien, Handler, Banken, Transporteure, Lagerhalter und Investoren vernetzt.",
            "Jeder Barren erhalt eine eindeutige digitale Identitat mit allen relevanten Informationen: Produktionsdaten, Seriennummer, Raffinerie, Transportweg, aktueller Lagerort.",
            "Am aXedras-Netzwerk nehmen weltweit fuhrende Stakeholder der Goldwertschopfungskette, wie z.B. Goldminen, fuhrende Raffinerien, die weltweit grossten Wertelogistikunternehmen, Lagerhalter usw. teil.",
            "aXedras ist der von LBMA und World Gold Council ausgewahlte technologische Partner des gemeinsamen Gold Bar Integrity Programmes (GBI) und stellt die Blockchain-basierte Infrastruktur bereit, uber die die Echtheit, Herkunft und Ruckverfolgbarkeit von LBMA-zertifizierten Goldbarren digital verifiziert werden konnen. Ziel des Gold Bar Integrity Programme (GBI) ist es, ein globales, falschungssicheres digitales Register fur alle LBMA-zertifizierten Goldbarren zu schaffen, um deren Echtheit, Herkunft und Lieferkette transparent und nachvollziehbar zu machen."
          ]
        },
        {
          title: "Konsequenz fur Kunden von DIRECTGOLD aus der aXedras-Mitgliedschaft:",
          items: [
            "Durch die direkte Mitgliedschaft der GOLDLAGERHAUS Edelmetallverwahrungs AG am exklusiven aXedras-Netzwerk ermoglichen wir Kunden von DIRECTGOLD die Einsichtnahme in den Datenbestand ihrer Barren uber die aXedras-Plattform, unabhangig und direkt, rund um die Uhr.",
            "Du uberprufst damit selbst die Qualitat, Integritat und den Aufenthaltsort deiner Barren – unabhangig von Handler- oder Lagerhaus-Systemen.",
            "Dies schafft ein bisher unerreichtes Mass an Transparenz, Sicherheit und Nachprufbarkeit."
          ]
        }
      ]
    }
  }
};

export function getExkursById(id: string): ExkursPage | undefined {
  return exkursPages[id];
}
