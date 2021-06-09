import React from 'react';
import { Link } from 'react-router-dom'
import PlantGroupShow from './PlantGroupShow';

const PlantGroupList = (props) => {

    // look at destructuring argument vs props
    return (
        <span>
            {props.plantGroups.map(plantGroup => 
                <div key={plantGroup.id}>
                    <Link path={`/plant_groups/${plantGroup.id}`}>{plantGroup.name}</Link>
                </div> )}
        </span>
    );
}

export default PlantGroupList;