import { DeepPartial } from "src/core/technical/types";
import { AppTranslations } from "src/core/translations/types";

export const fr = {
    // Override some translation keys here
    account: {
        title: "Ceci est un titre modifié"
    }
} satisfies DeepPartial<AppTranslations>

