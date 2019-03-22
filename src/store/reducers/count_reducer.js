export const count_reducer = function count(state = 0, action) {
    switch (action.type) {
        case 'COUNT_ADD':
            return state + 1;
        case 'COUNT_REMOVE':
            return state - 1;
        default:
            return state
    }
}
