import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom'


class PlantGroupList extends Component {
    
    handleClick = (event) => {
        // debugger;
        parseInt(event.target.value) === 0 ? event.target.value = 1 : event.target.value = 0
        console.log(event.target.value)
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick} value={0} >Sort</button>
                
                {this.props.plantGroups.map(plantGroup => 
                    <div key={plantGroup.id}>
                        <Link to={`/plant_groups/${plantGroup.id}`}>{plantGroup.name}: {plantGroup.plant_types.length} types</Link>
                    </div> )}
            </div>
        );
    }
    
}

export default PlantGroupList;