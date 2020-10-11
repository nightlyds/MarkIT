import initialStore from '../../initialStore.js'

export const checkboxErrorReducer = (state = initialStore.checkboxError, action) => {
    switch (action.type) {
        case 'CheckboxError':
            return action.checkboxError
        default:
            return state
    }
}