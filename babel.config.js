module.exports = function (api) {
  console.log(process.env.EXPO_APP);
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
    plugins: [
      "react-native-reanimated/plugin",
      [
        "module-resolver",
        {
          root: ["."],
          alias: {
            "@theme": process.env.EXPO_APP
              ? `./apps/${process.env.EXPO_APP}/theme/index.ts`
              : "./theme/index.ts",
            "@assets": process.env.EXPO_APP
              ? `./apps/${process.env.EXPO_APP}/assets`
              : "./assets",
          },
        },
      ],
    ],
  };
};
