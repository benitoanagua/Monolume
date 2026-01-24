export default function getControlElements(scheme, term) {
  return {
    "button.background": scheme.primary,
    "button.foreground": scheme.onPrimary,
    "button.border": scheme.outline,
    "button.separator": scheme.outlineVariant,
    "button.hoverBackground": `${scheme.primary}E6`, // 90% opacity
    "button.secondaryForeground": scheme.onPrimaryContainer,
    "button.secondaryBackground": scheme.primaryContainer,
    "button.secondaryHoverBackground": `${scheme.primaryContainer}E6`,

    "checkbox.background": scheme.surfaceContainerLowest,
    "checkbox.border": scheme.outline,
    "checkbox.foreground": scheme.onSurface,
    "checkbox.selectBackground": scheme.primary,
    "checkbox.selectBorder": scheme.primary,
    "checkbox.disabled.background": scheme.surfaceContainer,
    "checkbox.disabled.foreground": scheme.onSurfaceVariant,

    "radio.activeForeground": scheme.onPrimary,
    "radio.activeBackground": scheme.primary,
    "radio.activeBorder": scheme.primary,
    "radio.inactiveForeground": scheme.onSurface,
    "radio.inactiveBackground": scheme.surfaceContainerLowest,
    "radio.inactiveBorder": scheme.outline,
    "radio.inactiveHoverBackground": scheme.primary,

    "dropdown.background": scheme.surfaceContainerLowest,
    "dropdown.listBackground": scheme.surfaceContainer,
    "dropdown.border": scheme.outline,
    "dropdown.foreground": scheme.onSurface,

    "input.background": scheme.surfaceContainerLowest,
    "input.border": scheme.outline,
    "input.foreground": scheme.onSurface,
    "input.placeholderForeground": scheme.onSurfaceVariant,
    "inputOption.activeBackground": scheme.primaryContainer,
    "inputOption.activeBorder": scheme.primary,
    "inputOption.activeForeground": scheme.primary,
    "inputOption.hoverBackground": scheme.primaryContainer,

    "inputValidation.errorBackground": scheme.errorContainer,
    "inputValidation.errorForeground": scheme.error,
    "inputValidation.errorBorder": scheme.error,
    "inputValidation.infoBackground": scheme.primaryContainer,
    "inputValidation.infoForeground": scheme.primary,
    "inputValidation.infoBorder": scheme.primary,
    "inputValidation.warningBackground": scheme.tertiaryContainer,
    "inputValidation.warningForeground": scheme.tertiary,
    "inputValidation.warningBorder": scheme.tertiary,

    "scrollbar.shadow": `${scheme.shadow}66`,
    "scrollbarSlider.activeBackground": scheme.primaryContainer,
    "scrollbarSlider.background": scheme.surfaceVariant,
    "scrollbarSlider.hoverBackground": scheme.primaryContainer,
  };
}
