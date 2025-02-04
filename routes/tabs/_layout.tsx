import FontAwesome from "@expo/vector-icons/FontAwesome";
import Constants from "expo-constants";
import { Tabs } from "expo-router";
import { ThemeToggle } from "src/core/ui/components/ThemeToggle";
import { Contact } from "src/core/ui/icons/Contact";
import { CreditCard } from "src/core/ui/icons/CreditCard";
import { House } from "src/core/ui/icons/House";

export default function TabLayout() {
  const screens = [
    <Tabs.Screen
      key="home"
      name="home"
      options={{
        title: "Home",

        tabBarIcon: ({ focused }) => (
          <House
            className={focused ? "text-primary dark:text-primary-dark" : ""}
          />
        ),
      }}
    />,
    <Tabs.Screen
      key="account"
      name="account"
      options={{
        title: "Account",

        tabBarIcon: ({ focused }) => (
          <CreditCard
            className={focused ? "text-primary dark:text-primary-dark" : ""}
          />
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
          tabBarIcon: ({ focused }) => (
            <Contact
              className={focused ? "text-primary dark:text-primary-dark" : ""}
            />
          ),
        }}
      />
    );
  }
  return (
    <Tabs initialRouteName="home" screenOptions={{ headerRight: ThemeToggle }}>
      {screens}
    </Tabs>
  );
}
