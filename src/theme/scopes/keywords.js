export default function getKeywordSettings(scheme, term) {
  return [
    {
      name: "Control flow keywords",
      scope: [
        "keyword.control",
        "keyword.control.conditional",
        "keyword.control.loop",
        "keyword.control.import",
        "keyword.control.export",
        "keyword.control.trycatch",
        "keyword.control.switch",
      ],
      settings: {
        foreground: scheme.secondary,
        fontStyle: "bold",
      },
    },
    {
      name: "Storage and type keywords",
      scope: [
        "keyword",
        "keyword.other",
        "keyword.declaration",
        "keyword.modifier",
      ],
      settings: {
        foreground: scheme.secondary,
      },
    },
    {
      name: "Language keywords",
      scope: [
        "keyword.operator.assignment",
        "keyword.operator.arithmetic",
        "keyword.operator.logical",
        "keyword.operator.comparison",
      ],
      settings: {
        foreground: scheme.secondary,
      },
    },
  ];
}