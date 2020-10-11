export const passwordErrorAction = (value) => {
    return{
        type: "PasswordError",
        passwordError: value
    }
}