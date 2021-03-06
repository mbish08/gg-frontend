import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addPlantType } from '../actions/addPlantType'

class PlantTypeForm extends Component {

    state = {
        name: '',
        fert_type: '',
        fert_sched: '',
        water: '',
        soil_ph: '',
        soil_type: '',
        misc_info: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSumit = (event) => {
        event.preventDefault()
        this.props.addPlantType(this.state, this.props.plantGroup.id)
        this.setState({
            name: '',
            fert_type: '',
            fert_sched: '',
            water: '',
            soil_ph: '',
            soil_type: '',
            misc_info: ''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSumit}>
                    <label>Name: </label>
                    <input type="text" value={this.state.name} name="name" onChange={this.handleChange} /><br/><br/>
                    <label>Fertilizer Type: </label>
                    <input type="text" value={this.state.fert_type} name="fert_type" onChange={this.handleChange} /><br/><br/>
                    <label>Fertilizer Schedule: </label>
                    <input type="text" value={this.state.fert_sched} name="fert_sched" onChange={this.handleChange} /><br/><br/>
                    <label>Water needs: </label>
                    <input type="text" value={this.state.water} name="water" onChange={this.handleChange} /><br/><br/>
                    <label>Soil pH: </label>
                    <input type="text" value={this.state.soil_ph} name="soil_ph" onChange={this.handleChange} /><br/><br/>
                    <label>Soil Type: </label>
                    <input type="text" value={this.state.soil_type} name="soil_type" onChange={this.handleChange} /><br/><br/>
                    <label>Misc Info: </label>
                    <input type="text" value={this.state.misc_info} name="misc_info" onChange={this.handleChange} /><br/><br/>
                    <input type="submit" />
                </form>
                <br/><hr/><br/>
            </div>
        );
    }
}

export default connect(null, {addPlantType})(PlantTypeForm);