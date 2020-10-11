export const countryErrorAction = (value) => {
    return{
        type: "CountryError",
        countryError: value
    }
}