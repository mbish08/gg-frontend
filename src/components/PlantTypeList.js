import React from 'react';
import { connect } from 'react-redux'
import { deletePlantType } from '../actions/deletePlantType'

const PlantTypeList = (props) => {

// debugger;
    const handleDelete = (plantType) => {
        // debugger;
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

// t.string "name"
// t.text "fert_type"
// t.text "fert_sched"
// t.text "water"
// t.float "soil_ph"
// t.text "soil_type"
// t.text "misc_info"
// t.integer "plant_group_id", null: false
