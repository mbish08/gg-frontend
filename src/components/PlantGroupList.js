import React from 'react';

const PlantGroupList = (props) => {

    // look at destructuring argument vs props
    return (
        <div>
            {props.plantGroups.map(plantGroup => <li>{plantGroup.name}</li> )}
        </div>
    );
}



export default PlantGroupList;
