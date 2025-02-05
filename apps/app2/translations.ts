import { AppTranslations } from "src/core/translations/types";

const fr = {
  // Override some translation keys here
  nested: {
    "level-1": "hoy",
  },
  title: "Bonjoir",
} satisfies Partial<AppTranslations>;

export default fr;
