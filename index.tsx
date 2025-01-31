import { FeatureFlagProvider, Router } from "core-tech";
import { registerRootComponent } from "expo";
import Constants from "expo-constants";
import "./global.css";
import { routerContexts } from "./src/router-context";

// Must be exported or Fast Refresh won't update the context
function App() {
  return (
    <FeatureFlagProvider features={[]}>
      <Router contexts={routerContexts} />
    </FeatureFlagProvider>
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
