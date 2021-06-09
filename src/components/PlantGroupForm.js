import React, { Component } from 'react';

class PlantGroupForm extends Component {

    state = {
        name: ''
    }

    handleChange = (event) => {
        
    }

    render() {
        return (
            <div>
                <form>
                    <input type="text" value={this.state.name} onChange={this.handleChange} placeholder="New Plant Group Name" /><br/>
                    <input type="submit" />
                </form>
            </div>
        );
    }
}

export default PlantGroupForm;
