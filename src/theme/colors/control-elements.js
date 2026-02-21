export default function getControlElements(scheme, term) {
  return {
    "button.background": scheme.primary,
    "button.foreground": scheme.onPrimary,
    "button.border": `${scheme.background}00`,
    "button.separator": `${scheme.background}00`,
    "button.hoverBackground": `${scheme.primary}E6`, // 90% opacity
    "button.secondaryForeground": scheme.onPrimaryContainer,
    "button.secondaryBackground": scheme.primaryContainer,
    "button.secondaryHoverBackground": `${scheme.primaryContainer}E6`,

    "checkbox.background": scheme.surfaceContainerLowest,
    "checkbox.border": `${scheme.background}00`,
    "checkbox.foreground": scheme.onSurface,
    "checkbox.selectBackground": scheme.primary,
    "checkbox.selectBorder": `${scheme.background}00`,
    "checkbox.disabled.background": scheme.surfaceContainer,
    "checkbox.disabled.foreground": scheme.onSurfaceVariant,

    "radio.activeForeground": scheme.onPrimary,
    "radio.activeBackground": scheme.primary,
    "radio.activeBorder": `${scheme.background}00`,
    "radio.inactiveForeground": scheme.onSurface,
    "radio.inactiveBackground": scheme.surfaceContainerLowest,
    "radio.inactiveBorder": `${scheme.background}00`,
    "radio.inactiveHoverBackground": scheme.primary,

    "dropdown.background": scheme.surfaceContainerLowest,
    "dropdown.listBackground": scheme.surfaceContainer,
    "dropdown.border": `${scheme.background}00`,
    "dropdown.foreground": scheme.onSurface,

    "input.background": scheme.surfaceContainerLowest,
    "input.border": `${scheme.background}00`,
    "input.foreground": scheme.onSurface,
    "input.placeholderForeground": scheme.onSurfaceVariant,
    "inputOption.activeBackground": scheme.primaryContainer,
    "inputOption.activeBorder": `${scheme.background}00`,
    "inputOption.activeForeground": scheme.primary,
    "inputOption.hoverBackground": scheme.primaryContainer,

    "inputValidation.errorBackground": scheme.errorContainer,
    "inputValidation.errorForeground": scheme.error,
    "inputValidation.errorBorder": `${scheme.background}00`,
    "inputValidation.infoBackground": scheme.primaryContainer,
    "inputValidation.infoForeground": scheme.primary,
    "inputValidation.infoBorder": `${scheme.background}00`,
    "inputValidation.warningBackground": scheme.tertiaryContainer,
    "inputValidation.warningForeground": scheme.tertiary,
    "inputValidation.warningBorder": `${scheme.background}00`,

    "scrollbar.shadow": `${scheme.shadow}66`,
    "scrollbarSlider.activeBackground": scheme.primaryContainer,
    "scrollbarSlider.background": scheme.surfaceVariant,
    "scrollbarSlider.hoverBackground": scheme.primaryContainer,
  };
}
