import initialStore from '../../initialStore.js'

export const passwordReducer = (state = initialStore.password, action) => {
    switch (action.type) {
        case 'Password':
            return action.password
        default:
            return state
    }
}