// import "./App.css";
import i18next from "i18next";
import React from "react";
import Form from "./pages/Form/Form";

class App extends React.Component<any, any> {
    state = {
        secondStep: false,
        lang: localStorage.getItem("defaultLang"),
        language: true,
    };
    toggleEnglish = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        const lang = localStorage.getItem("defaultLang");

        i18next.changeLanguage("en");
        localStorage.setItem("defaultLang", "en");
        this.setState({ lang: "en", language: true });
    };

    toggleSerbian = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        const lang = localStorage.getItem("defaultLang");
        i18next.changeLanguage("me");
        localStorage.setItem("defaultLang", "me");
        this.setState({ lang: "me", language: false });
    };

    render() {
        return (
            <div>
                <Form
                    english={this.toggleEnglish}
                    lang={this.state.lang}
                    serbian={this.toggleSerbian}
                />
            </div>
        );
    }
}

export default App;
