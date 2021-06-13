import React from 'react';
import { connect } from 'react-redux'
import { deletePlantType } from '../actions/deletePlantType'

const PlantTypeList = (props) => {

    const handleDelete = (plantType) => {
        props.deletePlantType(plantType.id, plantType.plant_group_id)
    }

    return (
        <div>
            {props.plantTypes && props.plantTypes.map(plantType => 
            <li key={plantType.id}>{plantType.name} 
                <button onClick={() => handleDelete(plantType)}>Delete</button></li>
            )}
        </div>
    );
}

export default connect(null, {deletePlantType})(PlantTypeList)
