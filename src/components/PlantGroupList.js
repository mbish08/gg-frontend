import React from 'react';
import PlantGroupShow from './PlantGroupShow';

const PlantGroupList = (props) => {

    // look at destructuring argument vs props
    return (
        <span>
            {props.plantGroups.map(plantGroup => 
                <div key={plantGroup.id}><PlantGroupShow plantGroup={plantGroup} /></div> )}
        </span>
    );
}

export default PlantGroupList;