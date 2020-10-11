import initialStore from '../../initialStore.js'

export const checkboxReducer = (state = initialStore.checkbox, action) => {
    switch (action.type) {
        case 'Checkbox':
            return action.checkbox
        default:
            return state
    }
}