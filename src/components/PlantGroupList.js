import React from 'react';
import { Link } from 'react-router-dom'


const PlantGroupList = (props) => {

    return (
        <span>
            {props.plantGroups.map(plantGroup => 
                <div key={plantGroup.id}>
                    <Link to={`/plant_groups/${plantGroup.id}`}>{plantGroup.name}</Link>
                </div> )}
        </span>
    );
}

export default PlantGroupList;