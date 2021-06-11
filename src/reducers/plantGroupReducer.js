
export default function plantGroupReducer(state = {plantGroups: []}, action) {
    switch (action.type) {
        case 'FETCH_GROUPS':
            return {plantGroups: action.payload}
        case 'ADD_GROUP':
            return {...state, plantGroups: [...state.plantGroups, action.payload]}
        case 'ADD_TYPE':
            let plantGroups = state.plantGroups.map(plantGroup => {
                if (plantGroup.id === action.payload.id) {
                    return action.payload
                } else {
                    return plantGroup
                }
            })
            return {...state, plantGroups: plantGroups}
        case 'DELETE_TYPE':
            let plantGroupsTypeDelete = state.plantGroups.map(plantGroup => {
                if (plantGroup.id === action.payload.id) {
                    return action.payload
                } else {
                    return plantGroup
                }
            })
            return {...state, plantGroups: plantGroupsTypeDelete}
        default:
            return state
    }
}