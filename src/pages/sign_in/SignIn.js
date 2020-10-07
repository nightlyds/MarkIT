import React from "react";
import counterpart from "counterpart";

import { Header, Footer } from "../../base";
import { SignForm } from "./components";

import "./css/sign_in.css";
import "./css/media_sign_in.css";

import en from "./lang/en.js";
import ru from "./lang/ru.js";
import es from "./lang/es.js";

counterpart.registerTranslations("en", en);
counterpart.registerTranslations("ru", ru);
counterpart.registerTranslations("es", es);
export const SignIn = () => {
    return (
        <div className="wrapper">
            <Header />
            <div className="sign_in">
                <SignForm />
            </div>
            <Footer />
        </div>
    )
}
