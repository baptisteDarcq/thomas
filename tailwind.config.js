const nativewindConfigColors = require("./theme/export");

/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./routes/**/*.{ts,tsx}", "./libs/**/*.{ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    colors: {
      ...nativewindConfigColors,
      ...(process.env.EXPO_APP
        ? require(`./apps/${process.env.EXPO_APP}/theme/export.ts`)
        : {}),
    },
    extend: {},
  },
  plugins: [],
};
