import Constants from "expo-constants";

export const routerContexts = [
  {
    context: require.context("../routes", true),
    prefix: ".",
  },
  {
    context: require.context("./modules/account/routes", true),
    prefix: "./tabs/account",
  },
  ...(Constants.expoConfig.extra.modules?.includes("budget")
    ? [
        {
          context: require.context("./modules/budget/routes", true),
          prefix: "./tabs/budget",
        },
      ]
    : []),
];
