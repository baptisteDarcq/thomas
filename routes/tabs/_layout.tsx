import Constants from "expo-constants";
import { Tabs } from "expo-router";
import Icon from "src/core/technical/icon/Icon";
import { ThemeToggle } from "src/core/ui/components/ThemeToggle";

export default function TabLayout() {
  const screens = [
    <Tabs.Screen
      key="home"
      name="home"
      options={{
        title: "Home",

        tabBarIcon: ({ focused }) => (
          <Icon
            src="icons/house"
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
          <Icon
            src="icons/credit-card"
            className={focused ? "text-primary dark:text-primary-dark" : ""}
          />
        ),
      }}
    />,
  ];
  if (Constants.expoConfig?.extra?.modules?.includes("budget")) {
    screens.push(
      <Tabs.Screen
        key="budget"
        name="budget"
        options={{
          title: "Budget",
          tabBarIcon: ({ focused }) => (
            <Icon
              src="icons/contact"
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
