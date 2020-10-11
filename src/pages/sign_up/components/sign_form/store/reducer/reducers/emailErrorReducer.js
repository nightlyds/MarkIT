import initialStore from "../../initialStore.js";

export const emailErrorReducer = (state = initialStore.emailError, action) => {
  switch (action.type) {
    case "EmailError":
      return action.emailError;
    default:
      return state;
  }
};