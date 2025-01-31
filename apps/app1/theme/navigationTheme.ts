import { colors } from "./colors";
import { navigationTheme as defaultNavigationTheme } from "../../../theme";

const navigationTheme = {
  ...defaultNavigationTheme,
  light: {
    ...defaultNavigationTheme.light,
    colors: {
      ...defaultNavigationTheme.light.colors,
      text: colors.black,
    },
  },
  dark: {
    ...defaultNavigationTheme.dark,
    colors: {
      ...defaultNavigationTheme.dark.colors,
      text: colors.white,
    },
  },
};

export { navigationTheme };
