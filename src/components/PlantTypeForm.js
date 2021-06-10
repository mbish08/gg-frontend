import React, { Component } from 'react';
import { connect } from 'react-redux'

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

// t.integer "plant_group_id", null: false

    handleChange = () => {

    }

    render() {
        return (
            <div>
                <h3>Add a new Type of Plant Type</h3>
                <form>
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
            </div>
        );
    }
}

export default connect()(PlantTypeForm);