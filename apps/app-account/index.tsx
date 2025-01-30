import "./global.css";
import { registerRootComponent } from "expo";
import { Router, FeatureFlagProvider } from "core-tech";
import { routerContexts } from "./src/router-context";

// Must be exported or Fast Refresh won't update the context
export function App() {
  return (
    <FeatureFlagProvider features={[]}>
      <Router
        contexts={routerContexts.concat({
          // Ajoute tous les fichiers, et pas seulement ceux présent dans (tabs)
          context: require.context("./app/", true, /^(?!.*\(tabs\)).*$/),
          prefix: ".",
        })}
      />
    </FeatureFlagProvider>
  );
}

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
