import initialStore from '../../initialStore.js'

export const countryErrorReducer = (state = initialStore.countryError, action) => {
    switch (action.type) {
        case 'CountryError':
            return action.countryError
        default:
            return state
    }
}