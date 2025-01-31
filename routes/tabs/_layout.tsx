import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import Constants from "expo-constants";

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
      screenOptions={{ tabBarActiveTintColor: "blue" }}
      initialRouteName="account"
    >
      {screens}
    </Tabs>
  );
}
