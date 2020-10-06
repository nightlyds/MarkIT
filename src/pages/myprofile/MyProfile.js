import React, { useState } from "react";
import counterpart from "counterpart";

import { Header, Footer } from "../../base";
import { ProfileMenu, Documents } from "./components/";

import "./css/myprofile.css";
import "./css/media_myprofile.css";

import en from "./lang/en.js";
import ru from "./lang/ru.js";
import es from "./lang/es.js";

counterpart.registerTranslations("en", en);
counterpart.registerTranslations("ru", ru);
counterpart.registerTranslations("es", es);
export const MyProfile = () => {
  let [activeComponent, setActiveComponent] = useState("documents");

  const chooseActiveComponent = (name) => {
    setActiveComponent(name);
  };
  return (
    <div className="wrapper-myprofile">
      <ProfileMenu component={chooseActiveComponent} />
      <div className="myprofile-wrapper">
        <Header profile={true} />
        <div className="myprofile-content">
          {" "}
          {activeComponent === "documents" && <Documents />}
        </div>
        <Footer />
      </div>
    </div>
  );
};
