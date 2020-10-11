import initialStore from '../../initialStore.js'

export const phoneReducer = (state = initialStore.phone, action) => {
    switch (action.type) {
        case 'Phone':
            return action.phone
        default:
            return state
    }
}