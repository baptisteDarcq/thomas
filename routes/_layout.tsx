import { ThemeProvider } from "@react-navigation/native";
import { useColorScheme } from "core-tech";
import { Stack } from "expo-router/stack";
import { navigationTheme } from "@theme";

export default function Layout() {
  const { colorScheme } = useColorScheme();
  return (
    // ThemeProvider doit être utilisé dans le composant ExpoRoot pour fonctionner, c'est pourquoi il ne se trouve pas avec les autres providers dans index.tsx
    <ThemeProvider value={navigationTheme[colorScheme]}>
      <Stack initialRouteName="tabs">
        <Stack.Screen name="tabs" options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  );
}
