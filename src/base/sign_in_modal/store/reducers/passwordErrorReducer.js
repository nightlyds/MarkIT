import initialState from "../initialState.js";

export const passwordErrorReducer = (
  state = initialState.passwordError,
  action
) => {
  switch (action.type) {
    case "PasswordError":
      return action.passwordError;
    default:
      return state;
  }
};
