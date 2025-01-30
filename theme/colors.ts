export const colors = {
  white: "#ffffff",
  black: "#000000",
  slate: {
    100: "#f1f5f9",
    200: "#e2e8f0",
    300: "#cbd5e1",
    400: "#94a3b8",
    500: "#64748b",
    600: "#475569",
    700: "#334155",
    800: "#1e293b",
    900: "#0f172a",
  },
  sky: {
    50: "#f0f9ff",
    100: "#e0f2fe",
    200: "#bae6fd",
    300: "#7dd3fc",
    400: "#38bdf8",
    500: "#0ea5e9",
    600: "#0284c7",
    700: "#0369a1",
    800: "#075985",
    900: "#0c4a6e",
    950: "#082f49",
  },
  cece: {
    400: "#0F6600",
  },
};

export const abstractDarkColors = {
  background: colors.slate[800],
  foreground: colors.slate[200],
  "foreground-active": colors.white,
  primary: colors.sky[500],
};

export const abstractColors = {
  ...Object.fromEntries(
    Object.entries(abstractDarkColors).map(([key, value]) => [
      `${key}-dark`,
      value,
    ])
  ),
  background: colors.slate[200],
  foreground: colors.slate[600],
  "foreground-active": colors.black,
  primary: colors.sky[200],
};

export const colorsByScheme = {
  light: abstractColors,
  dark: abstractDarkColors,
};
