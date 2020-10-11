import { combineReducers } from "redux";
import { emailReducer } from "./emailReducer.js";
import { emailErrorReducer } from './emailErrorReducer.js';
import { passwordReducer } from "./passwordReducer.js";
import { passwordErrorReducer } from './passwordErrorReducer.js';

const reducers = combineReducers({
  emailReducer,
  emailErrorReducer,
  passwordReducer,
  passwordErrorReducer
});

export default reducers;
