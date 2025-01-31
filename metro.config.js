const path = require("path");
const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");
const withStorybook = require("@storybook/react-native/metro/withStorybook");

const projectRoot = __dirname;
const config = getDefaultConfig(projectRoot);

module.exports = withStorybook(
  withNativeWind(config, {
    input: "./global.css",
  }),
  { enabled: true, configPath: path.resolve(__dirname, "./.storybook") }
);
