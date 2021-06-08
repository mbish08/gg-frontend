
export default function plantGroupReducer(state = {plantGroups: []}, action) {
    switch (action.type) {
        case 'FETCH_GROUPS':
            return {plantGroups: action.payload}
        default:
            return state
    }
}