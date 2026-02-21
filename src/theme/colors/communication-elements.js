export default function getCommunicationElements(scheme, term) {
  return {
    "chat.requestBorder": `${scheme.background}00`,
    "chat.requestBackground": scheme.surfaceContainer,
    "chat.slashCommandBackground": scheme.primary,
    "chat.slashCommandForeground": scheme.onPrimary,
    "chat.avatarBackground": scheme.surfaceContainerHigh,
    "chat.avatarForeground": scheme.onSurfaceVariant,
    "chat.editedFileForeground": scheme.primary,
    "chat.linesAddedForeground": `${scheme.secondary}80`,
    "chat.linesRemovedForeground": `${scheme.error}80`,
    "chat.requestCodeBorder": `${scheme.background}00`,
    "chat.requestBubbleBackground": `${scheme.surfaceContainer}80`,
    "chat.requestBubbleHoverBackground": `${scheme.surfaceContainerHigh}80`,
    "chat.checkpointSeparator": `${scheme.background}00`,

    "inlineChat.background": scheme.surfaceContainerLow,
    "inlineChat.foreground": scheme.onSurface,
    "inlineChat.border": `${scheme.background}00`,
    "inlineChat.shadow": `${scheme.shadow}33`,
    "inlineChatInput.border": `${scheme.background}00`,
    "inlineChatInput.focusBorder": `${scheme.background}00`,
    "inlineChatInput.placeholderForeground": scheme.onSurfaceVariant,
    "inlineChatInput.background": scheme.surfaceContainerLowest,
    "inlineChatDiff.inserted": `${scheme.secondaryContainer}33`,
    "inlineChatDiff.removed": `${scheme.errorContainer}33`,

    "interactive.activeCodeBorder": `${scheme.background}00`,
    "interactive.inactiveCodeBorder": `${scheme.background}00`,
  };
}