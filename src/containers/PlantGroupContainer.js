import React, { Component } from 'react';
import PlantGroupForm from '../components/PlantGroupForm'
import PlantGroupList from '../components/PlantGroupList'
import { fetchPlantGroups } from '../actions/fetchPlantGroups'
import { connect } from 'react-redux'

class PlantGroupContainer extends Component {

     componentDidMount() {
        this.props.fetchPlantGroups()
    }

    render() {
        return (
            <div>
                <PlantGroupForm />
                <PlantGroupList />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        plantGroups: state.plantGroups
    }
}

export default connect(mapStateToProps, {fetchPlantGroups})(PlantGroupContainer);
