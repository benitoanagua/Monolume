export default function getMenusAndCommandCenter(scheme, term) {
  return {
    "titleBar.activeBackground": scheme.primaryContainer,
    "titleBar.activeForeground": scheme.onPrimaryContainer,
    "titleBar.inactiveBackground": `${scheme.primaryContainer}66`,
    "titleBar.inactiveForeground": `${scheme.onPrimaryContainer}99`,
    "titleBar.border": scheme.surfaceVariant,

    "menubar.selectionForeground": scheme.onPrimary,
    "menubar.selectionBackground": scheme.primary,
    "menubar.selectionBorder": scheme.primary,
    "menu.foreground": scheme.onSurface,
    "menu.background": scheme.surfaceContainerHighest,
    "menu.selectionForeground": scheme.onPrimary,
    "menu.selectionBackground": scheme.primary,
    "menu.selectionBorder": scheme.primary,
    "menu.separatorBackground": scheme.surfaceVariant,
    "menu.border": scheme.surfaceVariant,

    "commandCenter.foreground": scheme.onSurface,
    "commandCenter.activeForeground": scheme.onPrimary,
    "commandCenter.background": `${scheme.primaryContainer}33`,
    "commandCenter.activeBackground": scheme.primary,
    "commandCenter.border": scheme.surfaceVariant,
    "commandCenter.inactiveForeground": scheme.onSurfaceVariant,
    "commandCenter.inactiveBorder": scheme.surfaceVariant,
    "commandCenter.activeBorder": scheme.primary,
    "commandCenter.debuggingBackground": `${scheme.errorContainer}66`,
  };
}