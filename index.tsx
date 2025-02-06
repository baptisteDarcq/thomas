import { useFonts } from "expo-font";
import { SplashScreen } from "expo-router";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import { PortalHost } from "@rn-primitives/portal";

import { registerRootComponent } from "expo";
import Constants from "expo-constants";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import "./global.css";
import { routerContexts } from "./src";
import {
  useColorScheme,
  useInitialAndroidBarSync,
} from "src/core/technical/theme/useColorScheme";
import Router from "src/core/technical/navigation/router";
import getAsset from "src/core/technical/asset";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

// Must be exported or Fast Refresh won't update the context
export function App() {
  useInitialAndroidBarSync();
  const [loaded] = useFonts({
    "Primary-Light": getAsset("fonts/Primary-Light"),
    "Primary-Regular": getAsset("fonts/Primary-Regular"),
    "Primary-Bold": getAsset("fonts/Primary-Bold"),
    "Secondary-Light": getAsset("fonts/Secondary-Light"),
    "Secondary-Regular": getAsset("fonts/Secondary-Regular"),
    "Secondary-Bold": getAsset("fonts/Secondary-Bold"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

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
