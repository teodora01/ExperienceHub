import "./i18n/i18n";

// import * as serviceWorker from "./serviceWorker";

import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import i18next from "i18next";

let lang = localStorage.getItem("defaultLang");

if (!lang) {
    localStorage.setItem("defaultLang", "me");
    lang = "me";
}

i18next.changeLanguage(lang);

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
