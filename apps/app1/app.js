module.exports = {
  name: "app1-repo",
  slug: "app1-repo",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./apps/app1/assets/images/icon.png",
  scheme: "app1",
  userInterfaceStyle: "automatic",
  newArchEnabled: true,
  plugins: [
    "expo-router",
    [
      "expo-splash-screen",
      {
        image: "./apps/app1/assets/images/splash-icon.png",
        imageWidth: 200,
        resizeMode: "contain",
        backgroundColor: "#ffffff",
      },
    ],
    [
      "expo-asset",
      {
        assets: ["./apps/app1/assets/images/logo.png"],
      },
    ],
  ],
  ios: {
    bundleIdentifier: "com.baptisted-matters.app1",
  },
  android: {
    package: "com.baptistedmatters.app1",
    adaptiveIcon: {
      foregroundImage: "./apps/app1/assets/images/adaptive-icon.png",
      backgroundColor: "#ffffff",
    },
  },
  experiments: {
    typedRoutes: true,
  },
  extra: {
    storybookEnabled: "false",
    modules: ["account"],
    initialRoute: "./tabs",
  },
};
