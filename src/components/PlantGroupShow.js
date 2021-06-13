import React from 'react';
import { Redirect } from 'react-router-dom'
import PlantTypeContainer from '../containers/PlantTypeContainer';

const PlantGroupShow = (props) => {

    let group = props.plantGroups.filter(plantGroup => plantGroup.id === parseInt(props.match.params.id))[0]

    return (
        <div>
            <h2>
                {group && group.name}
                {/* {group ? null : <Redirect to='/plant_groups'/>} */}
            </h2>
            <PlantTypeContainer group={group}/>
        </div>
    );
}

export default PlantGroupShow;
