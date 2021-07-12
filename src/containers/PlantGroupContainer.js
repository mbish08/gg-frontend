import React, { Component } from 'react';
import PlantGroupForm from '../components/PlantGroupForm'
import PlantGroupList from '../components/PlantGroupList'
import { fetchPlantGroups } from '../actions/fetchPlantGroups'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import PlantGroupShow from '../components/PlantGroupShow';

class PlantGroupContainer extends Component {

    componentDidMount() {
        this.props.fetchPlantGroups()
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route path='/plant_groups/new' component={PlantGroupForm} />
                    <Route path='/plant_groups/:id' render={(routerProps) => <PlantGroupShow {...routerProps} plantGroups={this.props.plantGroups}/>} />
                    <Route exact path='/plant_groups' render={(routerProps) => <PlantGroupList {...routerProps} plantGroups={this.props.plantGroups} plantGroupsAlpha={this.props.plantGroupsAlpha} count={this.props.count} />} />
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    let alpha = [...state.plantGroups]
    return {
        plantGroups: state.plantGroups,
        plantGroupsAlpha: alpha.sort((type1, type2) => (type1.name > type2.name) ? 1 : -1),
        count: 0 
    }
}

export default connect(mapStateToProps, {fetchPlantGroups})(PlantGroupContainer);
