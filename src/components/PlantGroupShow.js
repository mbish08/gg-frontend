import React from 'react';
import { Redirect } from 'react-router-dom'
import PlantTypeContainer from '../containers/PlantTypeContainer';

const PlantGroupShow = (props) => {

    let group = props.plantGroups.filter(plantGroup => plantGroup.id == props.match.params.id)[0]
    // debugger
    // props.plantGroups[props.match.params.id - 1]
    // console.log(props)

    return (
        <div>
            <h2>
                {/* {group ? null : <Redirect to='/plant_groups'/>} */}
                {group ? group.name : null}
                {/* {group ? group.name: <Redirect to='/plant_groups' />} */}
            </h2>
            <PlantTypeContainer group={group}/>
        </div>
    );
}

export default PlantGroupShow;
