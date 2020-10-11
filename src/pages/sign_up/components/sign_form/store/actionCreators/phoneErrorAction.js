export const phoneErrorAction = (value) => {
    return{
        type: "PhoneError",
        phoneError: value
    }
}