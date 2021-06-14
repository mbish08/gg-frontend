import React from 'react';
import PlantTypeContainer from '../containers/PlantTypeContainer';

const PlantGroupShow = (props) => {

    let group = props.plantGroups.filter(plantGroup => plantGroup.id === parseInt(props.match.params.id))[0]

    return (
        <div>
            <h2 id="pgtitle">
                {group && group.name}
            </h2>
            <PlantTypeContainer group={group}/>
        </div>
    );
}

export default PlantGroupShow;