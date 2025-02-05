import { nativewindThemeConfig } from "./src/core/ui/theme";

/** @type {import('tailwindcss').Config} */
export default {
  // NOTE: Update this to include the paths to all of your component files.
  content: [
    "./routes/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./apps/**/*.{ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    ...nativewindThemeConfig,
    ...require(`./apps/${process.env.EXPO_APP}/theme.ts`).nativewindThemeConfig,
  },
  plugins: [],
}
