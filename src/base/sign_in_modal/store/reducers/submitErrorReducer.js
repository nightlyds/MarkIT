import initialState from '../initialState.js';

export const submitErrorReducer = (state = initialState.submitError, action) => {
    switch (action.type) {
        case 'SubmitError':
            return action.submitError
        default:
            return state
    }
}