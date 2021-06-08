import React from 'react';
import { connect } from 'react-redux'

const PlantGroupList = (props) => {

    // look at destructuring argument vs props
    return (
        <div>
            PlantGroupList test
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        plantGroups: state.plantGroups
    }
}

export default connect(mapStateToProps)(PlantGroupList);
