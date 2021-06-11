export const deletePlantType = (plantTypeId, groupId) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/plant_groups/${groupId}/plant_types/${plantTypeId}`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'DELETE',
            body: JSON.stringify(plantType)
        })
        .then(res => res.json())
        .then(plant_group => dispatch({
            type: 'DELETE_TYPE',
            payload: plant_group
        }))
        
    }
}