import React, { Component } from 'react';
import PlantGroupForm from '../components/PlantGroupForm'
import PlantGroupList from '../components/PlantGroupList'
import { fetchPlantGroups } from '../actions/fetchPlantGroups'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import PlantGroupShow from '../components/PlantGroupShow';

class PlantGroupContainer extends Component {

    componentDidMount() {
        this.props.fetchPlantGroups()
    }

    render() {
        return (
            <div>
                <Route path='/plant_groups/new' component={PlantGroupForm} />
                {/* <PlantGroupForm /><br/> */}
                <Route path='/plant_groups/:id' render={(routerProps) => <PlantGroupShow {...routerProps} plantGroups={this.props.plantGroups}/>} />
                <Route exact path='/plant_groups' render={() => <PlantGroupList plantGroups={this.props.plantGroups} />} />
                {/* <PlantGroupList plantGroups={this.props.plantGroups} /> */}
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
