export default function getOperatorSettings(scheme, term) {
  return {
    name: "Operators",
    scope: [
      "keyword.operator.arithmetic",
      "keyword.operator.comparison",
      "keyword.operator.relational",
      "keyword.operator.logical",
      "keyword.operator.assignment",
      "keyword.operator.increment",
      "keyword.operator.decrement",
      "keyword.operator.bitwise",
      "keyword.operator.ternary",
      "keyword.operator.expression.instanceof",
      "keyword.operator.expression.typeof",
      "keyword.operator.expression.in",
      "keyword.operator.expression.of",
      "keyword.operator.expression.delete",
      "keyword.operator.expression.void",
      "keyword.operator.spread",
      "keyword.operator.rest",
      "keyword.operator.nullish-coalescing",
      "keyword.operator.optional-chaining",
      "keyword.operator",
    ],
    settings: {
      foreground: scheme.error,
      fontStyle: "bold",
    },
  };
}