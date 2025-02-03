import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import { PortalHost } from "@rn-primitives/portal";
import { Router, useColorScheme } from "core-tech";
import { registerRootComponent } from "expo";
import Constants from "expo-constants";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import "./global.css";
import { routerContexts } from "./src/router-context";

// Must be exported or Fast Refresh won't update the context
export function App() {
  return (
    <>
      <StatusBar />
      <ActionSheetProvider>
        <>
          <Router contexts={routerContexts} />
          <PortalHost name="alert" />
          <PortalHost name="select" />
        </>
      </ActionSheetProvider>
    </>
  );
}

function StatusBar() {
  const { isDarkColorScheme } = useColorScheme();
  return (
    <ExpoStatusBar
      key={`root-status-bar-${isDarkColorScheme ? "light" : "dark"}`}
      style={isDarkColorScheme ? "light" : "dark"}
    />
  );
}

let AppEntryPoint = App;

// Render Storybook if storybookEnabled is true
if (Constants.expoConfig.extra.storybookEnabled === "true") {
  AppEntryPoint = require("./.storybook").default;
}

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(AppEntryPoint);
