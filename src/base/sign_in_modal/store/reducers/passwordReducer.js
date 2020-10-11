import initialState from "../initialState.js";

export const passwordReducer = (state = initialState.password, action) => {
  switch (action.type) {
    case "Password":
      return action.password;
    default:
      return state;
  }
};
