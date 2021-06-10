import React from 'react';
import { Redirect } from 'react-router-dom'

const PlantGroupShow = (props) => {

    let group = props.plantGroups[props.match.params.id - 1]

    return (
        <div>
            {group ? null : <Redirect to='/plant_groups'/>}
            {group ? group.name : null}
        </div>
    );
}

export default PlantGroupShow;
