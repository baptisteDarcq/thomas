import {
  colors as commonColors,
  abstractColors as commonAbstractColors,
  abstractDarkColors as commonAbstractDarkColors,
} from "../../../theme";

export const colors = commonColors;

export const abstractDarkColors = {
  ...commonAbstractDarkColors,
  primary: colors.sky[500],
};

export const abstractColors = {
  ...commonAbstractColors,
  ...Object.fromEntries(
    Object.entries(abstractDarkColors).map(([key, value]) => [
      `${key}-dark`,
      value,
    ])
  ),
  primary: colors.sky[200],
};

export const colorsByScheme = {
  light: abstractColors,
  dark: abstractDarkColors,
};
