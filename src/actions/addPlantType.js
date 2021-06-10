
const addPlantGroup = (plantType, groupId) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/plant_groups/${groupId}/plant_types`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(plantType)
        })
        .then(res => res.json())
        .then(plant_group => dispatch({
            type: 'ADD_TYPE',
            payload: plant_group
        }))
        
    }
}