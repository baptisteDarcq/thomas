import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { fr as frDefaults } from "./defaults";
import { fr as frOverrides } from "@translations";
import merge from "lodash.merge";

i18n.use(initReactI18next).init({
  resources: {
    fr: {
      translation: merge(frDefaults, frOverrides),
    },
  },
  lng: "fr",
  fallbackLng: "fr",
});

export default i18n;
