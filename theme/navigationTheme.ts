import { DefaultTheme, DarkTheme } from '@react-navigation/native';

import { colors } from './colors';

const navigationTheme = {
  light: {
    ...DefaultTheme,
    colors: {
      background: colors.slate[100],
      border: colors.slate[300],
      card: colors.slate[300],
      notification: colors.slate[500],
      primary: colors.black,
      text: colors.black,
    },
  },
  dark: {
    ...DarkTheme,
    colors: {
      background: colors.slate[500],
      border: colors.slate[300],
      card: colors.slate[800],
      notification: colors.slate[500],
      primary: colors.white,
      text: colors.white,
    },
  },
};

export { navigationTheme };
