import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import ptBRJSON from "./locale/ptBR.json";
import enJSON from "./locale/en.json";

i18n.use(initReactI18next).init({
  resources: {
    "pt-BR": ptBRJSON,
    en: enJSON,
  },
  lng: "pt-BR",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
