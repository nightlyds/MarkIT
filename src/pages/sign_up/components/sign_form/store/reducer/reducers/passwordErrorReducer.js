import initialStore from '../../initialStore.js'

export const passwordErrorReducer = (state = initialStore.passwordError, action) => {
    switch (action.type) {
        case 'PasswordError':
            return action.passwordError
        default:
            return state
    }
}