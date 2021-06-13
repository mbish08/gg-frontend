import React, { Component } from 'react';
import PlantTypeForm from '../components/PlantTypeForm';
import PlantTypeList from '../components/PlantTypeList';

class PlantTypeContainer extends Component {
 
    render() {

        return (
            <div>
                <PlantTypeList plantTypes={this.props.group && this.props.group.plant_types} />
                <PlantTypeForm plantGroup={this.props.group} />
            </div>
        );
    }
}

export default PlantTypeContainer;
