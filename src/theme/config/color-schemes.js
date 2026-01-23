// Monolumé Color Schemes - Material Design 3 tokens
// Light: Quiet Light essence with Brackets Light Pro accents
// Dark: Monokai vibrancy with Kanagawa harmony

export const monolumeLight = {
  primary: "#8431C5", // Brackets Purple
  onPrimary: "#FFFFFF",
  primaryContainer: "#F2E8FF",
  onPrimaryContainer: "#32004E",

  secondary: "#E88501", // Swapped to Orange as per latest snippet
  onSecondary: "#FEFEFE", // Distinct from #FFFFFF
  secondaryContainer: "#FFDCC2",
  onSecondaryContainer: "#341B00",

  tertiary: "#4F7E00", // Swapped to Green
  onTertiary: "#FDFCFC", // Distinct
  tertiaryContainer: "#D9FCA6",
  onTertiaryContainer: "#1A2C00",

  error: "#D02000",
  onError: "#FCFCFC", // Distinct
  errorContainer: "#FFDAD6",
  onErrorContainer: "#410002",

  background: "#F8F8F8",
  onBackground: "#353535",

  surface: "#F8F8F8",
  onSurface: "#353535",
  surfaceDim: "#EBEDEF",
  surfaceBright: "#FFFFFF",
  surfaceContainerLowest: "#FFFEFE", // Distinct
  surfaceContainerLow: "#FCFCFC",
  surfaceContainer: "#F4F4F4", // Distinct from background
  surfaceContainerHigh: "#F2F2F2",
  surfaceContainerHighest: "#EAECEF", // Distinct from Dim

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
  primary: "#A6E22E", // Monokai Green
  onPrimary: "#1E2810",
  primaryContainer: "#344815",
  onPrimaryContainer: "#D9FFB8",

  secondary: "#E88501", // Variant of #E88501 (Orange)
  onSecondary: "#341B00",
  secondaryContainer: "#542C00",
  onSecondaryContainer: "#FFDCC2",

  tertiary: "#957FB8", // Kanagawa Purple
  onTertiary: "#2D203D",
  tertiaryContainer: "#48385C",
  onTertiaryContainer: "#EADDFF",

  error: "#F92672",
  onError: "#370617",
  errorContainer: "#93000A",
  onErrorContainer: "#FFD6E0",

  background: "#1F1F28",
  onBackground: "#DCD7BA",

  surface: "#1F1F28",
  onSurface: "#DCD7BA",
  surfaceDim: "#16161D",
  surfaceBright: "#2A2A37",
  surfaceContainerLowest: "#14141B", // Distinct from Dim
  surfaceContainerLow: "#1D1D26", // Distinct from Surface
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
      blue: "#386AC3", // Restored Brackets Blue for uniqueness
      magenta: "#8431C5",
      cyan: "#0798BC",
      white: "#A4A9B2",
    },
    bright: {
      black: "#535353",
      red: "#D02000",
      green: "#10A567",
      yellow: "#E88501",
      blue: "#386AC3",
      magenta: "#8431C5",
      cyan: "#0798BC",
      white: "#C3C7CD",
    },
    dim: {
      black: "#353535",
      red: "#AA3731",
      green: "#0C8552",
      yellow: "#B39D3C",
      blue: "#2D5A9E",
      magenta: "#6A28A0",
      cyan: "#067A9C",
      white: "#555555",
    },
  },
  "monolume-dark": {
    normal: {
      black: "#1F1F28",
      red: "#F92672",
      green: "#A6E22E",
      yellow: "#E6DB74",
      blue: "#7E9CD8", // Kanagawa Blue
      magenta: "#AE81FF",
      cyan: "#66D9EF", // Monokai Cyan
      white: "#DCD7BA",
    },
    bright: {
      black: "#75715E",
      red: "#FF3D85",
      green: "#BBFD41",
      yellow: "#FFF08A",
      blue: "#9CDCFE", // Distinct bright blue
      magenta: "#C99DFF",
      cyan: "#8AEAFF",
      white: "#F5F5F0",
    },
    dim: {
      black: "#16161D",
      red: "#D11556",
      green: "#8BC123",
      yellow: "#C9BC5D",
      blue: "#5E81AC", // Nord-like dim blue, distinct
      magenta: "#9368D9",
      cyan: "#4FB5CA",
      white: "#CCCCC7",
    },
  },
};

export const themeSchemes = {
  "monolume-light": monolumeLight,
  "monolume-dark": monolumeDark,
};
