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
            "@theme": process.env.EXPO_APP
              ? `./apps/${process.env.EXPO_APP}/theme.ts`
              : "./src/core/ui/theme.ts",
            "@assets": process.env.EXPO_APP
              ? `./apps/${process.env.EXPO_APP}/assets/generated.ts`
              : "./assets/generated.ts",
          },
        },
      ],
    ],
  };
};
