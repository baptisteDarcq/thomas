module.exports = {
  name: "app2-repo",
  slug: "app2-repo",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./apps/app2/assets/images/icon.png",
  scheme: "app2",
  userInterfaceStyle: "automatic",
  newArchEnabled: true,
  plugins: [
    "expo-router",
    [
      "expo-splash-screen",
      {
        image: "./apps/app2/assets/images/splash-icon.png",
        imageWidth: 200,
        resizeMode: "contain",
        backgroundColor: "#ffffff",
      },
    ],
    [
      "expo-asset",
      {
        assets: ["./apps/app2/assets/images/logo.png"],
      },
    ],
  ],
  ios: {
    bundleIdentifier: "com.baptisted-matters.app2",
  },
  android: {
    package: "com.baptistedmatters.app2",
    adaptiveIcon: {
      foregroundImage: "./apps/app2/assets/images/adaptive-icon.png",
      backgroundColor: "#ffffff",
    },
  },
  experiments: {
    typedRoutes: true,
  },
  extra: {
    storybookEnabled: "false",
    modules: ["account", "budget"],
    initialRoute: "./tabs",
  },
};
