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
    title: "exkursArgorHeraeusTitle",
    content: {
      sections: [
        {
          paragraphs: [
            "exkursArgorHeraeusParagraph1",
            "exkursArgorHeraeusParagraph2",
            "exkursArgorHeraeusParagraph3",
            "exkursArgorHeraeusParagraph4",
            "exkursArgorHeraeusParagraph5",
            "exkursArgorHeraeusParagraph6",
            "exkursArgorHeraeusParagraph7",
            "exkursArgorHeraeusParagraph8"
          ]
        }
      ]
    }
  },
  "loomis": {
    id: "loomis",
    title: "exkursLoomisTitle",
    content: {
      sections: [
        {
          paragraphs: [
            "exkursLoomisParagraph1",
            "exkursLoomisParagraph2",
            "exkursLoomisParagraph3",
            "exkursLoomisParagraph4",
            "exkursLoomisParagraph5",
            "exkursLoomisParagraph6",
            "exkursLoomisParagraph7"
          ]
        }
      ]
    }
  },
  "schweiz-lagerstandort": {
    id: "schweiz-lagerstandort",
    title: "exkursSchweizLagerstandortTitle",
    content: {
      sections: [
        {
          paragraphs: [
            "exkursSchweizLagerstandortParagraph1",
            "exkursSchweizLagerstandortParagraph2",
            "exkursSchweizLagerstandortParagraph3",
            "exkursSchweizLagerstandortParagraph4",
            "exkursSchweizLagerstandortParagraph5",
            "exkursSchweizLagerstandortParagraph6"
          ]
        }
      ]
    }
  },
  "axedras": {
    id: "axedras",
    title: "exkursAxedrasTitle",
    content: {
      sections: [
        {
          paragraphs: [
            "exkursAxedrasParagraph1",
            "exkursAxedrasParagraph2",
            "exkursAxedrasParagraph3",
            "exkursAxedrasParagraph4",
            "exkursAxedrasParagraph5"
          ]
        },
        {
          title: "exkursAxedrasSection1Title",
          items: [
            "exkursAxedrasSection1Item1",
            "exkursAxedrasSection1Item2",
            "exkursAxedrasSection1Item3"
          ]
        }
      ]
    }
  }
};

export function getExkursById(id: string): ExkursPage | undefined {
  return exkursPages[id];
}
