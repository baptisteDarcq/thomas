module.exports = function (api) {
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
            "@theme":`./apps/${process.env.EXPO_APP}/theme.ts`,
            "@assets": `./apps/${process.env.EXPO_APP}/assets/generated.ts`,
            "@translations": `./apps/${process.env.EXPO_APP}/translations.ts`
          },
        },
      ],
    ],
  };
};
