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
    short: "accountabilityShort",
    long: "accountabilityLong",
    fullContent: "accountabilityFullContent",
    image: "https://placehold.co/600x400",
    sections: [
      {
        title: "accountabilitySection1Title",
        content: "accountabilitySection1Content"
      },
      {
        title: "accountabilitySection2Title",
        items: [
          "accountabilitySection2Item1",
          "accountabilitySection2Item2"
        ],
        content: "accountabilitySection2Content"
      },
      {
        title: "accountabilitySection3Title",
        items: [
          "accountabilitySection3Item1",
          "accountabilitySection3Item2",
          "accountabilitySection3Item3"
        ]
      },
      {
        title: "accountabilitySection4Title",
        content: "accountabilitySection4Content",
        items: [
          "accountabilitySection4Item1",
          "accountabilitySection4Item2"
        ]
      }
    ]
  },
  {
    id: "validation",
    title: "DIRECT Validation",
    short: "validationShort",
    long: "validationLong",
    fullContent: "validationFullContent",
    image: "https://placehold.co/600x400",
    sections: [
      {
        title: "validationSection1Title",
        items: [
          "validationSection1Item1",
          "validationSection1Item2",
          "validationSection1Item3",
          "validationSection1Item4",
          "validationSection1Item5",
          "validationSection1Item6"
        ]
      },
      {
        title: "validationSection2Title",
        content: "validationSection2Content"
      }
    ]
  },
  {
    id: "transparency",
    title: "DIRECT Price Transparency",
    short: "transparencyShort",
    long: "transparencyLong",
    fullContent: "transparencyFullContent",
    image: "https://placehold.co/600x400",
    sections: [
      {
        title: "transparencySection1Title",
        items: [
          "transparencySection1Item1",
          "transparencySection1Item2"
        ]
      },
      {
        title: "transparencySection2Title",
        items: [
          "transparencySection2Item1"
        ]
      },
      {
        title: "transparencySection3Title",
        items: [
          "transparencySection3Item1",
          "transparencySection3Item2",
          "transparencySection3Item3"
        ]
      },
      {
        title: "transparencySection4Title",
        items: [
          "transparencySection4Item1",
          "transparencySection4Item2",
          "transparencySection4Item3"
        ]
      },
      {
        title: "transparencySection5Title",
        items: [
          "transparencySection5Item1",
          "transparencySection5Item2"
        ]
      }
    ],
    links: [
      { text: "transparencyLink1", href: "/info/gebuhrentabelle" },
      { text: "transparencyLink2", href: "/info/kaufgebuhr" },
      { text: "transparencyLink3", href: "/exkurs/lbma-goldpreis" }
    ]
  },
  {
    id: "ownership",
    title: "DIRECT Ownership",
    short: "ownershipShort",
    long: "ownershipLong",
    fullContent: "ownershipFullContent",
    image: "https://placehold.co/600x400",
    links: [
      { text: "ownershipLink1", href: "/info/sammel-einzellagerung" },
      { text: "ownershipLink2", href: "/exkurs/lbma-goldpreis" }
    ]
  },
  {
    id: "origin",
    title: "DIRECT Origin",
    short: "originShort",
    long: "originLong",
    fullContent: "originFullContent",
    image: "https://placehold.co/600x400",
    sections: [
      {
        items: [
          "originSection1Item1",
          "originSection1Item2",
          "originSection1Item3",
          "originSection1Item4",
          "originSection1Item5",
          "originSection1Item6"
        ]
      }
    ],
    links: [
      { text: "originLink1", href: "/exkurs/argor-heraeus" },
      { text: "originLink2", href: "/exkurs/loomis" },
      { text: "originLink3", href: "/exkurs/schweiz-lagerstandort" }
    ]
  },
  {
    id: "integrity",
    title: "DIRECT Integrity",
    short: "integrityShort",
    long: "integrityLong",
    fullContent: "integrityFullContent",
    image: "https://placehold.co/600x400",
    sections: [
      {
        title: "integritySection1Title",
        items: [
          "integritySection1Item1",
          "integritySection1Item2",
          "integritySection1Item3",
          "integritySection1Item4",
          "integritySection1Item5"
        ]
      },
      {
        title: "integritySection2Title",
        items: [
          "integritySection2Item1",
          "integritySection2Item2",
          "integritySection2Item3",
          "integritySection2Item4"
        ]
      }
    ],
    links: [
      { text: "integrityLink1", href: "/exkurs/axedras" }
    ]
  }
];

export function getPrincipleById(id: string): Principle | undefined {
  return principlesData.find(p => p.id === id);
}