import React from 'react';

const PlantTypeList = (props) => {

    const handleDelete = () => {
        
    }

    return (
        <div>
            {props.plantTypes && props.plantTypes.map(plantType => 
            <li key={plantType.id}>{plantType.name} 
                <button onClick={this.handleDelete}>Delete</button></li>
            )}
        </div>
    );
}

export default PlantTypeList;

// t.string "name"
// t.text "fert_type"
// t.text "fert_sched"
// t.text "water"
// t.float "soil_ph"
// t.text "soil_type"
// t.text "misc_info"
// t.integer "plant_group_id", null: false
