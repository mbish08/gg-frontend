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
            <span key={plantType.id}>{plantType.name} 
                <button onClick={() => handleDelete(plantType)}>Delete</button>
                <li>Fertilizer Type:  {plantType.fert_type}</li>
                <li>Fertilizer Schedule:  {plantType.fert_sched}</li>
                <li>Water Needs:  {plantType.water}</li>
                <li>Soil pH:  {plantType.soil_ph}</li>
                <li>Soil Type:  {plantType.soil_type}</li>
                <li>Misc Info:  {plantType.misc_info}</li>
                <br/><br/>
            </span>
            )}
        </div>
    );
}

export default connect(null, {deletePlantType})(PlantTypeList)
