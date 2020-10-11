import initialStore from '../../initialStore.js'

export const emailReducer = (state = initialStore.email, action) => {
    switch (action.type) {
        case 'Email':
            return action.email
        default:
            return state
    }
}