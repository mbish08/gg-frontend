import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom'

class PlantGroupList extends Component {
    

    state = {
        count: this.props.count
    }
    
    handleClick = () => {
        this.state.count === 0 ? this.setState({count: 1}) : this.setState({count: 0})
    }

    render() {
        let unsorted = 
            this.props.plantGroups.map(plantGroup => 
                <div key={plantGroup.id}>
                    <Link to={`/plant_groups/${plantGroup.id}`}>{plantGroup.name}: {plantGroup.plant_types.length} types</Link>
                </div> 
            )
    
        let sorted = 
            this.props.plantGroupsAlpha.map(plantGroup => 
                <div key={plantGroup.id}>
                    <Link to={`/plant_groups/${plantGroup.id}`}>{plantGroup.name}: {plantGroup.plant_types.length} types</Link>
                </div> 
            )
        
        return (
            <div>
                <button onClick={this.handleClick} >Sort</button>
                {this.state.count === 0 ? unsorted : sorted} 
            </div>
        );
    }
}

export default PlantGroupList;