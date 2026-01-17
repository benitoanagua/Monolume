// Monolumé Color Schemes - Material Design 3 tokens
// Light: Quiet Light base with Brackets Light Pro terminal colors
// Dark: Monokai base with Kanagawa enhancements

export const monolumeLight = {
  primary: "#7A3E9D",
  onPrimary: "#FFFFFF",
  primaryContainer: "#F3E5FF",
  onPrimaryContainer: "#2D0051",

  secondary: "#4B69C6",
  onSecondary: "#FFFFFF",
  secondaryContainer: "#DCE7FF",
  onSecondaryContainer: "#001D36",

  tertiary: "#448C27",
  onTertiary: "#FFFFFF",
  tertiaryContainer: "#D5F7D6",
  onTertiaryContainer: "#0A2F0B",

  error: "#AA3731",
  onError: "#FFFFFF",
  errorContainer: "#FFDAD6",
  onErrorContainer: "#410002",

  background: "#F5F5F5",
  onBackground: "#333333",

  surface: "#F3F3F3",
  onSurface: "#333333",
  surfaceDim: "#EBEDEF",
  surfaceBright: "#FCFCFC",
  surfaceContainerLowest: "#FFFFFF",
  surfaceContainerLow: "#FAFAFA",
  surfaceContainer: "#F5F5F5",
  surfaceContainerHigh: "#F0F0F0",
  surfaceContainerHighest: "#E8E8E8",

  surfaceVariant: "#E7E0EC",
  onSurfaceVariant: "#6D705B",

  outline: "#C4C4C4",
  outlineVariant: "#DBDDE0",

  shadow: "#000000",
  scrim: "#000000",

  inverseSurface: "#2D0051",
  inverseOnSurface: "#F3E5FF",
  inversePrimary: "#D0BCFF",
};

export const monolumeDark = {
  primary: "#A6E22E",
  onPrimary: "#1A2810",
  primaryContainer: "#2B3D1A",
  onPrimaryContainer: "#C7F1D4",

  secondary: "#66D9EF",
  onSecondary: "#0C2E39",
  secondaryContainer: "#1A4450",
  onSecondaryContainer: "#C7F0FF",

  tertiary: "#AE81FF",
  onTertiary: "#2E1A3B",
  tertiaryContainer: "#4A2D60",
  onTertiaryContainer: "#E6D5FF",

  error: "#F92672",
  onError: "#3C0916",
  errorContainer: "#5C1A28",
  onErrorContainer: "#FFD6E0",

  background: "#272822",
  onBackground: "#F8F8F2",

  surface: "#1E1F1C",
  onSurface: "#F8F8F2",
  surfaceDim: "#141318",
  surfaceBright: "#3E3D32",
  surfaceContainerLowest: "#0F100D",
  surfaceContainerLow: "#1E1F1C",
  surfaceContainer: "#272822",
  surfaceContainerHigh: "#34352F",
  surfaceContainerHighest: "#414339",

  surfaceVariant: "#49483E",
  onSurfaceVariant: "#CCCCC7",

  outline: "#75715E",
  outlineVariant: "#49483E",

  shadow: "#000000",
  scrim: "#000000",

  inverseSurface: "#2B3D1A",
  inverseOnSurface: "#C7F1D4",
  inversePrimary: "#76C759",
};

export const terminalColors = {
  "monolume-light": {
    normal: {
      black: "#000000",
      red: "#D02000",
      green: "#10A567",
      yellow: "#DDB700",
      blue: "#386AC3",
      magenta: "#8431C5",
      cyan: "#0798BC",
      white: "#6D705B",
    },
    bright: {
      black: "#535353",
      red: "#F92672",
      green: "#12CE14",
      yellow: "#E88501",
      blue: "#4B69C6",
      magenta: "#967EFB",
      cyan: "#0BC5E0",
      white: "#A5A5A5",
    },
    dim: {
      black: "#000000",
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
      black: "#272822",
      red: "#F92672",
      green: "#A6E22E",
      yellow: "#E6DB74",
      blue: "#66D9EF",
      magenta: "#AE81FF",
      cyan: "#66D9EF",
      white: "#F8F8F2",
    },
    bright: {
      black: "#75715E",
      red: "#FF3D85",
      green: "#BBFD41",
      yellow: "#FFF08A",
      blue: "#8AEAFF",
      magenta: "#C99DFF",
      cyan: "#8AEAFF",
      white: "#FFFFFF",
    },
    dim: {
      black: "#1E1F1C",
      red: "#D11556",
      green: "#8BC123",
      yellow: "#C9BC5D",
      blue: "#4FB5CA",
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
