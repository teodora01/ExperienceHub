import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./translations/en.json";
import me from "./translations/me.json";

const resources = {
    en: {
        translation: en,
    },
    me: {
        translation: me,
    },
};

i18n.use(initReactI18next).init({
    resources,
    lng: "en",
    keySeparator: false,
});

export default i18n;
