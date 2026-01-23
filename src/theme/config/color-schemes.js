// Monolumé Color Schemes - Material Design 3 tokens
// Light: Quiet Light essence with Brackets Light Pro accents
// Dark: Monokai vibrancy with Kanagawa harmony

export const monolumeLight = {
  primary: "#7A3E9D",
  onPrimary: "#FFFFFF",
  primaryContainer: "#F2E8FF",
  onPrimaryContainer: "#32004E",

  secondary: "#E88501",
  onSecondary: "#FEFEFE",
  secondaryContainer: "#FFDCC2",
  onSecondaryContainer: "#341B00",

  tertiary: "#4F7E00",
  onTertiary: "#FDFCFC",
  tertiaryContainer: "#D9FCA6",
  onTertiaryContainer: "#1A2C00",

  error: "#D02000",
  onError: "#FCFCFC",
  errorContainer: "#FFDAD6",
  onErrorContainer: "#410002",

  background: "#F5F5F5",
  onBackground: "#353535",

  surface: "#F5F5F5",
  onSurface: "#353535",
  surfaceDim: "#EBEBEB",
  surfaceBright: "#FFFFFF",
  surfaceContainerLowest: "#FFFEFE",
  surfaceContainerLow: "#FAFAFA",
  surfaceContainer: "#F0F0F0",
  surfaceContainerHigh: "#EAEAEA",
  surfaceContainerHighest: "#E5E5E5",

  surfaceVariant: "#E0E0E0",
  onSurfaceVariant: "#535353",

  outline: "#A4A9B2",
  outlineVariant: "#C3C7CD",

  shadow: "#000000",
  scrim: "#000000",

  inverseSurface: "#353535",
  inverseOnSurface: "#F8F8F8",
  inversePrimary: "#D0BCFF",
};

export const monolumeDark = {
  primary: "#A6E22E",
  onPrimary: "#1E2810",
  primaryContainer: "#344815",
  onPrimaryContainer: "#D9FFB8",

  secondary: "#FD971F",
  onSecondary: "#3E1F00",
  secondaryContainer: "#663600",
  onSecondaryContainer: "#FFDCC2",

  tertiary: "#AE81FF",
  onTertiary: "#32004E",
  tertiaryContainer: "#4F378B",
  onTertiaryContainer: "#EADDFF",

  error: "#F92672",
  onError: "#370617",
  errorContainer: "#93000A",
  onErrorContainer: "#FFD6E0",

  background: "#1F1F28",
  onBackground: "#DCD7BA",

  surface: "#1F1F28",
  onSurface: "#DCD7BA",
  surfaceDim: "#181820",
  surfaceBright: "#2A2A37",
  surfaceContainerLowest: "#14141B",
  surfaceContainerLow: "#1D1D26",
  surfaceContainer: "#22222A",
  surfaceContainerHigh: "#2A2A35",
  surfaceContainerHighest: "#363646",

  surfaceVariant: "#494955",
  onSurfaceVariant: "#C8C093",

  outline: "#727169",
  outlineVariant: "#49443C",

  shadow: "#000000",
  scrim: "#000000",

  inverseSurface: "#E6E1E5",
  inverseOnSurface: "#313033",
  inversePrimary: "#5A7539",
};

export const terminalColors = {
  "monolume-light": {
    normal: {
      black: "#353535",
      red: "#D02000",
      green: "#10A567",
      yellow: "#E88501",
      blue: "#386AC3",
      magenta: "#7A3E9D",
      cyan: "#0798BC",
      white: "#A4A9B2",
    },
    bright: {
      black: "#535353",
      red: "#FF4D22",
      green: "#25D988",
      yellow: "#FF9D33",
      blue: "#5C8CFF",
      magenta: "#9D5EFF",
      cyan: "#23D0FA",
      white: "#C3C7CD",
    },
    dim: {
      black: "#888888",
      red: "#AA3731",
      green: "#3A8564",
      yellow: "#B39D3C",
      blue: "#2D5A9E",
      magenta: "#582A72",
      cyan: "#067A9C",
      white: "#999999",
    },
  },
  "monolume-dark": {
    normal: {
      black: "#1F1F28",
      red: "#F92672",
      green: "#A6E22E",
      yellow: "#E6DB74",
      blue: "#7E9CD8",
      magenta: "#AE81FF",
      cyan: "#66D9EF",
      white: "#DCD7BA",
    },
    bright: {
      black: "#75715E",
      red: "#FF4F90",
      green: "#BBFD41",
      yellow: "#FFF08A",
      blue: "#9CDCFE",
      magenta: "#C99DFF",
      cyan: "#8AEAFF",
      white: "#F5F5F0",
    },
    dim: {
      black: "#16161D",
      red: "#D11556",
      green: "#8BC123",
      yellow: "#C9BC5D",
      blue: "#5E81AC",
      magenta: "#7B59B3",
      cyan: "#4FB5CA",
      white: "#CCCCC7",
    },
  },
};

export const themeSchemes = {
  "monolume-light": monolumeLight,
  "monolume-dark": monolumeDark,
};
