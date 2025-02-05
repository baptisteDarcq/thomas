import { Href, Redirect } from "expo-router";
import Constants from "expo-constants";
import "src/core/translations"

export default function Layout() {
  return <Redirect href={Constants.expoConfig.extra.initialRoute as Href} />;
}
