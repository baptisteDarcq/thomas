import FontAwesome from "@expo/vector-icons/FontAwesome";
import { ThemeToggle } from "core-ui";
import Constants from "expo-constants";
import { Tabs } from "expo-router";

export default function TabLayout() {
  const screens = [
    <Tabs.Screen
      key="account"
      name="account"
      options={{
        title: "Account",

        tabBarIcon: ({ color }) => (
          <FontAwesome size={28} name="home" color={color} />
        ),
      }}
    />,
  ];
  if (Constants.expoConfig.extra.modules?.includes("budget")) {
    screens.push(
      <Tabs.Screen
        key="budget"
        name="budget"
        options={{
          title: "Budget",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }}
      />
    );
  }
  return (
    <Tabs
      initialRouteName="account"
      screenOptions={{ headerRight: ThemeToggle }}
    >
      {screens}
    </Tabs>
  );
}
