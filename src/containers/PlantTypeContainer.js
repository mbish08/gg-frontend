import React, { Component } from 'react';
import PlantTypeForm from '../components/PlantTypeForm';
import PlantTypeList from '../components/PlantTypeList';

class PlantTypeContainer extends Component {
 
    render() {

        return (
            <div>
                <PlantTypeForm plantGroup={this.props.group} />
                <PlantTypeList plantTypes={this.props.group && this.props.group.plant_types} />
            </div>
        );
    }
}

export default PlantTypeContainer;
