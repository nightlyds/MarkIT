import { combineReducers } from "redux";
import {
  emailReducer,
  emailErrorReducer,
  passwordReducer,
  passwordErrorReducer,
  countryReducer,
  countryErrorReducer,
  phoneReducer,
  phoneErrorReducer,
  checkboxReducer,
  checkboxErrorReducer,
} from "./reducers";

const reducer = combineReducers({
  emailReducer,
  emailErrorReducer,
  passwordReducer,
  passwordErrorReducer,
  countryReducer,
  countryErrorReducer,
  phoneReducer,
  phoneErrorReducer,
  checkboxReducer,
  checkboxErrorReducer,
});

export default reducer;
