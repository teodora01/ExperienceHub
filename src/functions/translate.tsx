import React from "react";
import { useTranslation } from "react-i18next";

export function Translate({ text }: { text: any }) {
    const { t } = useTranslation();

    return <>{t(text)}</>;
}

export default Translate;
