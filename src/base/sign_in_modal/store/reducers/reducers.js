import { combineReducers } from "redux";
import { emailReducer } from "./emailReducer.js";
import { emailErrorReducer } from "./emailErrorReducer.js";
import { passwordReducer } from "./passwordReducer.js";
import { passwordErrorReducer } from "./passwordErrorReducer.js";
import { submitErrorReducer } from "./submitErrorReducer.js";

const reducers = combineReducers({
  emailReducer,
  emailErrorReducer,
  passwordReducer,
  passwordErrorReducer,
  submitErrorReducer,
});

export default reducers;
