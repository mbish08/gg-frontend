import React, { Component } from 'react';
import PlantTypeForm from '../components/PlantTypeForm';
import PlantTypeList from '../components/PlantTypeList';

class PlantTypeContainer extends Component {
    render() {
        return (
            <div>
                <PlantTypeForm />
                <PlantTypeList />
            </div>
        );
    }
}

export default PlantTypeContainer;
