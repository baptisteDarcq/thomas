import {
  colors as commonColors,
  abstractColors as commonAbstractColors,
  abstractDarkColors as commonAbstractDarkColors,
} from "../../../theme";

export const colors = commonColors;

export const abstractDarkColors = {
  ...commonAbstractDarkColors,
  primary: colors.orange[500],
};

export const abstractColors = {
  ...commonAbstractColors,
  ...Object.fromEntries(
    Object.entries(abstractDarkColors).map(([key, value]) => [
      `${key}-dark`,
      value,
    ])
  ),
  primary: colors.orange[200],
};

export const colorsByScheme = {
  light: abstractColors,
  dark: abstractDarkColors,
};
