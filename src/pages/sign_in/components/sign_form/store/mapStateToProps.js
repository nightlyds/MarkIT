function mapStateToProps(component) {
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
    case "Submit": {
      return function (state) {
        return {
          email: state.emailReducer,
          password: state.passwordReducer,
        };
      };
    }
    default:
      return undefined;
  }
}

export default mapStateToProps;
