import React from 'react';

const PlantGroupShow = (props) => {

    let group = props.plantGroups[props.match.params.id - 1]

    return (
        <div>
            {group ? group.name : null}
        </div>
    );
}

export default PlantGroupShow;
