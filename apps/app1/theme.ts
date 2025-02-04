import {
  colors as commonColors,
  abstractColors as commonAbstractColors,
  abstractDarkColors as commonAbstractDarkColors,
  navigationTheme as commonnavigationTheme,
} from "../../src/core/ui/theme";

export const colors = commonColors;

export const abstractDarkColors = {
  ...commonAbstractDarkColors,
  primary: colors.orange[200],
};

export const abstractColors = {
  ...commonAbstractColors,
  ...Object.fromEntries(
    Object.entries(abstractDarkColors).map(([key, value]) => [
      `${key}-dark`,
      value,
    ])
  ),
  primary: colors.orange[500],
};

export const colorsByScheme = {
  light: abstractColors,
  dark: abstractDarkColors,
};

export const navigationTheme = {
  light: {
    ...commonnavigationTheme.light,
    colors: {
      ...commonnavigationTheme.light.colors,
      background: colors.orange[100],
    },
  },
  dark: {
    ...commonnavigationTheme.dark,
    colors: {
      ...commonnavigationTheme.dark.colors,
      background: colors.orange[300],
    },
  },
};

export const nativewindConfigColors = {
  ...abstractColors,
  ...colors,
};
