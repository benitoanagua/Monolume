export default function getMenusAndCommandCenter(scheme, term) {
  return {
    "titleBar.activeBackground": scheme.primaryContainer,
    "titleBar.activeForeground": scheme.onPrimaryContainer,
    "titleBar.inactiveBackground": `${scheme.primaryContainer}66`,
    "titleBar.inactiveForeground": `${scheme.onPrimaryContainer}99`,
    "titleBar.border": `${scheme.background}00`,

    "menubar.selectionForeground": scheme.onPrimary,
    "menubar.selectionBackground": scheme.primary,
    "menubar.selectionBorder": `${scheme.background}00`,
    "menu.foreground": scheme.onSurface,
    "menu.background": scheme.surfaceContainerHighest,
    "menu.selectionForeground": scheme.onPrimary,
    "menu.selectionBackground": scheme.primary,
    "menu.selectionBorder": `${scheme.background}00`,
    "menu.separatorBackground": `${scheme.background}00`,
    "menu.border": `${scheme.background}00`,

    "commandCenter.foreground": scheme.onSurface,
    "commandCenter.activeForeground": scheme.onPrimary,
    "commandCenter.background": `${scheme.primaryContainer}33`,
    "commandCenter.activeBackground": scheme.primary,
    "commandCenter.border": `${scheme.background}00`,
    "commandCenter.inactiveForeground": scheme.onSurfaceVariant,
    "commandCenter.inactiveBorder": `${scheme.background}00`,
    "commandCenter.activeBorder": `${scheme.background}00`,
    "commandCenter.debuggingBackground": `${scheme.errorContainer}66`,
  };
}