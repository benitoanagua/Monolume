export default function getKeybindingsAndShortcuts(scheme) {
  return {
    "keybindingLabel.background": scheme.surfaceContainerLowest,
    "keybindingLabel.foreground": scheme.onSurface,
    "keybindingLabel.border": `${scheme.background}00`,
    "keybindingLabel.bottomBorder": `${scheme.background}00`,

    "keybindingTable.headerBackground": scheme.surfaceContainerLow,
    "keybindingTable.rowsBackground": scheme.surfaceContainerLowest,
  };
}