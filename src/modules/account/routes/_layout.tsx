import { Stack } from 'expo-router/stack';

export default function Layout() {
  return (
    <Stack initialRouteName="index" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="transaction" />
    </Stack>
  );
}
