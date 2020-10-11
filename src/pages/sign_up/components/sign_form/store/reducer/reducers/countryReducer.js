import initialStore from '../../initialStore.js'

export const countryReducer = (state = initialStore.country, action) => {
    switch (action.type) {
        case 'Country':
            return action.country
        default:
            return state
    }
}