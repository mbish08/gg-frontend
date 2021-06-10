import React from 'react';
import { Redirect } from 'react-router-dom'
import PlantTypeContainer from '../containers/PlantTypeContainer';

const PlantGroupShow = (props) => {

    let group = props.plantGroups[props.match.params.id - 1]

    return (
        <div>
            <h2>
                {group ? null : <Redirect to='/plant_groups'/>}
                {group ? group.name : null}
            </h2>
            <PlantTypeContainer group={group}/>
        </div>
    );
}

export default PlantGroupShow;
