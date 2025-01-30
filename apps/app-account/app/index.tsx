import { Href, Redirect } from "expo-router";

export default () => (
  <Redirect href={process.env.EXPO_PUBLIC_ROUTE_ENTRY as Href} />
);
