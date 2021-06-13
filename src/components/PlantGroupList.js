import React from 'react';
import { Link } from 'react-router-dom'


const PlantGroupList = (props) => {
    
    return (
        <div>
            {props.plantGroups.map(plantGroup => 
                <div key={plantGroup.id}>
                    <Link to={`/plant_groups/${plantGroup.id}`}>{plantGroup.name}: {plantGroup.plant_types.length} types</Link>
                </div> )}
        </div>
    );
}

export default PlantGroupList;