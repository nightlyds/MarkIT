import React from "react";
import Translate from "react-translate-component";

export const Submit = ({ email, password, getSubmitError, giveCheckData }) => {
  return (
    <div className="sign-in-submit-box">
      <Translate
        component="button"
        content="submitSignIn"
        type="submit"
        className="sign-in-modal-submit"
        disabled={!email || !password}
        onClick={() => {
          giveCheckData();
        }}
      />
      {getSubmitError && (
        <div className="sign-in-modal-error-box">
          <Translate
            component="p"
            content="signError"
            className="sign-modal-error"
          />
        </div>
      )}
    </div>
  );
};
