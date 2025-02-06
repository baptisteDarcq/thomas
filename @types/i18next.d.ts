import "i18next";
import test from "src/core/translations/test.json";

import { AppTranslations } from "src/core/translations/types";

declare module "i18next" {
  interface CustomTypeOptions {
    resources: {
      translation: AppTranslations
    }
  }
}
