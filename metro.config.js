const path = require("path");
const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");
const withStorybook = require("@storybook/react-native/metro/withStorybook");

const projectRoot = __dirname;
const config = getDefaultConfig(projectRoot);

config.transformer.babelTransformerPath = require.resolve(
  "react-native-svg-transformer"
);

config.resolver.assetExts = config.resolver.assetExts.filter(
  (ext) => ext !== "svg"
);
config.resolver.sourceExts = [...config.resolver.sourceExts, "svg"];

module.exports = withStorybook(
  withNativeWind(config, {
    input: "./global.css",
    disableTypeScriptGeneration: true,
  }),
  { enabled: true, configPath: path.resolve(__dirname, "./.storybook") }
);
