import React from 'react';
import PlantGroupShow from './PlantGroupShow';

const PlantGroupList = (props) => {

    // look at destructuring argument vs props
    return (
        <div>
            <PlantGroupShow />
            {props.plantGroups.map(plantGroup => <li key={plantGroup.id}>{plantGroup.name}</li> )}
        </div>
    );
}

export default PlantGroupList;