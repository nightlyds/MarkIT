import initialState from '../initialState.js';

export const emailErrorReducer = (state = initialState.emailError, action) => {
    switch (action.type) {
        case 'EmailError':
            return action.emailError
        default:
            return state
    }
}