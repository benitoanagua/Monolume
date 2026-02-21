export default function getNotificationsAndBanners(scheme, term) {
  return {
    "notificationCenter.border": `${scheme.background}00`,
    "notificationCenterHeader.background": scheme.surfaceContainerLow,
    "notificationCenterHeader.foreground": scheme.onSurfaceVariant,
    "notificationToast.border": `${scheme.background}00`,
    "notifications.background": scheme.surfaceContainer,
    "notifications.border": `${scheme.background}00`,
    "notifications.foreground": scheme.onSurface,
    "notificationLink.foreground": scheme.primary,
    "notificationsErrorIcon.foreground": scheme.error,
    "notificationsWarningIcon.foreground": scheme.tertiary,
    "notificationsInfoIcon.foreground": scheme.primary,

    "banner.background": scheme.surfaceContainerHigh,
    "banner.foreground": scheme.onSurface,
    "banner.iconForeground": scheme.primary,
  };
}