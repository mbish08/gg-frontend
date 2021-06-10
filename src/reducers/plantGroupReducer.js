
export default function plantGroupReducer(state = {plantGroups: []}, action) {
    switch (action.type) {
        case 'FETCH_GROUPS':
            return {plantGroups: action.payload}
        case 'ADD_GROUP':
            return {...state, plantGroups: [...state.plantGroups, action.payload]}
        case 'ADD_TYPE':
            return {}
        default:
            return state
    }
}