import React from "react";
import counterpart from "counterpart";

import { Header, Footer } from "../../base";
import { Companies } from "./components";

import "./css/partners.css";
import "./css/media_partners.css";

import en from "./lang/en.js";
import ru from "./lang/ru.js";
import es from "./lang/es.js";

counterpart.registerTranslations("en", en);
counterpart.registerTranslations("ru", ru);
counterpart.registerTranslations("es", es);

export const Partners = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="partners">
        <Companies />
      </div>
      <Footer />
    </div>
  );
};
