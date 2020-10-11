const mapStateToProps = (component) => {
  switch (component) {
    case "Email": {
      return function (state) {
        return {
          emailError: state.emailErrorReducer,
        };
      };
    }
    case "Password": {
      return function (state) {
        return {
          passwordError: state.passwordErrorReducer,
        };
      };
    }
    case "Country": {
      return function (state) {
        return {
          countryError: state.countryErrorReducer,
        };
      };
    }
    case "Phone": {
      return function (state) {
        return {
          phoneError: state.phoneErrorReducer,
        };
      };
    }
    case "Checkbox": {
      return function (state) {
        return {
          checkbox: state.checkboxReducer,
          checkboxError: state.checkboxErrorReducer,
        };
      };
    }
    case "Submit": {
      return function (state) {
        return {
          email: state.emailReducer,
          password: state.passwordReducer,
          country: state.countryReducer,
          phone: state.phoneReducer,
          checkbox: state.checkboxReducer,
        };
      };
    }
    default:
      return undefined;
  }
};

export default mapStateToProps;