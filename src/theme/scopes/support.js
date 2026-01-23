export default function getSupportSettings(scheme, term) {
  return [
    {
      name: "Built-in functions and methods",
      scope: ["support.function"],
      settings: {
        foreground: scheme.secondary,
        fontStyle: "bold",
      },
    },
    {
      name: "Built-in classes and types",
      scope: ["support.class", "support.type"],
      settings: {
        foreground: scheme.primary,
        fontStyle: "",
      },
    },
    {
      name: "Built-in constants and variables",
      scope: ["support.constant", "support.variable"],
      settings: {
        foreground: scheme.tertiary,
      },
    },
  ];
}