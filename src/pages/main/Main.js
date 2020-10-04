import React, {useState} from "react";
import counterpart from "counterpart";

import { Header, Footer } from "../../base";
import { About, FirstScreen, HowWorks, Links, Support } from "./components";
import SignUpModal from "../../base/sign_up_modal/SignUpModal.jsx";

import "./css/main.css";
import "./css/media_main.css";

import BackgroundFirst from "./images/bk_1.svg";
import BackgroundSecond from "./images/bk_2.svg";
import BackgoundThird from "./images/bk_3.svg";

import en from "./lang/en.js";
import ru from "./lang/ru.js";
import es from "./lang/es.js";

import WowConfig from "../../base/wow_config.js";

counterpart.registerTranslations("en", en);
counterpart.registerTranslations("ru", ru);
counterpart.registerTranslations("es", es);

export const Main = () => {
  let [signUpModal, setSignUpModalOpen] = useState(false);

  const openSignUpModal = () => {
    setSignUpModalOpen(true);
  };
  const closeSignUpModal = () => {
    setSignUpModalOpen(false);
  };
  return (
    <div className="wrapper">
      <WowConfig />
      <Header />
      <div className="main">
        <div className="main-backgrounds">
          <div className="main-background-first-box">
            <img
              src={BackgroundFirst}
              className="main-background-first"
              alt="Backgound First"
            />
          </div>
          <div className="main-background-second-box">
            <img
              src={BackgroundSecond}
              className="main-background-second"
              alt="Backgound Second"
            />
          </div>
          <div className="main-background-third-box">
            <img
              src={BackgoundThird}
              className="main-background-third"
              alt="Backgound Third"
            />
          </div>
        </div>
        <div className="main-content">
          {signUpModal && <SignUpModal closeSignUpModal={closeSignUpModal} />}
          <FirstScreen openSignUpModal={openSignUpModal} />
          <About />
          <HowWorks openSignUpModal={openSignUpModal} />
          <Support openSignUpModal={openSignUpModal} />
          <Links />
        </div>
      </div>
      <Footer />
    </div>
  );
};
