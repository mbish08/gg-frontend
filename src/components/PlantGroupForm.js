import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addPlantGroup } from '../actions/addPlantGroup'

class PlantGroupForm extends Component {

    state = {
        name: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {

        event.preventDefault()
        this.props.addPlantGroup(this.state)
        this.setState({
            name: ''
        })
    }

    render() {
        return (
            <div>
                <h4>Add a new Plant Group</h4>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.name} name="name" onChange={this.handleChange} placeholder="New Plant Group Name" /><br/>
                    <input type="submit" />
                </form>
            </div>
        );
    }
}

export default connect(null, {addPlantGroup})(PlantGroupForm);
