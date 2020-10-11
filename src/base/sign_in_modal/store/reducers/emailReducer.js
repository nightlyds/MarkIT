import initialState from '../initialState.js';

export const emailReducer = (state = initialState.email, action) => {
    switch (action.type) {
        case 'Email':
            return action.email
        default:
            return state
    }
}