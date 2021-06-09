export function addPlantGroup(data) {
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/plant_groups', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(groups => dispatch({
            type: 'ADD_GROUP',
            payload: groups
        }))
        
    }
}