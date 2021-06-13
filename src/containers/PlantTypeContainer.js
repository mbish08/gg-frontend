import React, { Component } from 'react';
import PlantTypeForm from '../components/PlantTypeForm';
import PlantTypeList from '../components/PlantTypeList';

class PlantTypeContainer extends Component {
    render() {
        return (
            <div>
                <h3>Here are your {this.props.group.name}:</h3>
                <PlantTypeList plantTypes={this.props.group && this.props.group.plant_types} />
                <h3>Add a new Type of {this.props.group.name}</h3>
                <PlantTypeForm plantGroup={this.props.group} />
            </div>
        );
    }
}

export default PlantTypeContainer;
