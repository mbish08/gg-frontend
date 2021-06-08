import React, { Component } from 'react';
import PlantGroupForm from '../components/PlantGroupForm'
import PlantGroupList from '../components/PlantGroupList'

class PlantGroupContainer extends Component {
    render() {
        return (
            <div>
                <PlantGroupForm />
                <PlantGroupList />
            </div>
        );
    }
}

export default PlantGroupContainer;
