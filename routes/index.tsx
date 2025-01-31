import { Href, Redirect } from "expo-router";
import Constants from "expo-constants";
export default function Layout() {
  return <Redirect href={Constants.expoConfig.extra.initialRoute as Href} />;
}
