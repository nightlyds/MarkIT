import { bindActionCreators } from "redux";
import {
  emailAction,
  emailErrorAction,
  passwordAction,
  passwordErrorAction,
  countryAction,
  countryErrorAction,
  phoneAction,
  phoneErrorAction,
  checkboxAction,
  checkboxErrorAction,
} from "./actionCreators";

const mapDispatchToProps = (component) => {
  switch (component) {
    case "Email":
      return function (dispatch) {
        return {
          emailChange: bindActionCreators(emailAction, dispatch),
          emailErrorChange: bindActionCreators(emailErrorAction, dispatch),
        };
      };
    case "Country":
      return function (dispatch) {
        return {
          countryChange: bindActionCreators(countryAction, dispatch),
          countryErrorChange: bindActionCreators(countryErrorAction, dispatch),
        };
      };
    case "Phone":
      return function (dispatch) {
        return {
          phoneChange: bindActionCreators(phoneAction, dispatch),
          phoneErrorChange: bindActionCreators(phoneErrorAction, dispatch),
        };
      };
    case "Password":
      return function (dispatch) {
        return {
          passwordChange: bindActionCreators(passwordAction, dispatch),
          passwordErrorChange: bindActionCreators(
            passwordErrorAction,
            dispatch
          ),
        };
      };
    case "Checkbox":
      return function (dispatch) {
        return {
          checkboxChange: bindActionCreators(checkboxAction, dispatch),
          checkboxErrorChange: bindActionCreators(checkboxErrorAction, dispatch)
        };
      };
    case "Submit":
      return function (dispatch) {
        return {
          emailErrorChange: bindActionCreators(emailErrorAction, dispatch),
          countryErrorChange: bindActionCreators(countryErrorAction, dispatch),
          phoneErrorChange: bindActionCreators(phoneErrorAction, dispatch),
          passwordErrorChange: bindActionCreators(
            passwordErrorAction,
            dispatch
          ),
          checkboxErrorChange: bindActionCreators(
            checkboxErrorAction,
            dispatch
          ),
        };
      };
    default:
      return undefined;
  }
};

export default mapDispatchToProps;
