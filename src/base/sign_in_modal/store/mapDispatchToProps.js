import { bindActionCreators } from "redux";
import { emailAction } from "./actionCreators/emailAction.js";
import { emailErrorAction } from "./actionCreators/emailErrorAction.js";
import { passwordAction } from "./actionCreators/passwordAction.js";
import { passwordErrorAction } from "./actionCreators/PasswordErrorAction.js";
import { submitErrorAction } from './actionCreators/submitErrorAction.js';

function mapDispatchToProps (component) {
  switch (component) {
    case "Email":
      return function (dispatch) {
        return {
          changeEmail: bindActionCreators(emailAction, dispatch),
          changeEmailError: bindActionCreators(emailErrorAction, dispatch),
        };
      };
    case "Password":
      return function (dispatch) {
        return {
          changePassword: bindActionCreators(passwordAction, dispatch),
          changePasswordError: bindActionCreators(
            passwordErrorAction,
            dispatch
          ),
        };
      };
    case "Submit":
      return function (dispatch) {
        return {
          changeEmailError: bindActionCreators(emailErrorAction, dispatch),
          changePasswordError: bindActionCreators(
            passwordErrorAction,
            dispatch
          ),
          changeSubmitError: bindActionCreators(submitErrorAction, dispatch)
        };
      };
    default:
      return undefined;
  }
};

export default mapDispatchToProps;