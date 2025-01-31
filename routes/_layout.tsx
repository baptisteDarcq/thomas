import { Stack } from "expo-router/stack";

export default function Layout() {
  return (
    <Stack initialRouteName="tabs">
      <Stack.Screen name="tabs" options={{ headerShown: false }} />
    </Stack>
  );
}
