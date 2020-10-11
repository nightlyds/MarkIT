import initialStore from '../../initialStore.js';

export const phoneErrorReducer = (state = initialStore.phoneError, action) => {
    switch (action.type) {
        case 'PhoneError':
            return action.phoneError
        default:
            return state
    }
}