import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchPlantGroups } from './actions/fetchPlantGroups'

class App extends Component {

  // initial fetch testing
  componentDidMount() {
    this.props.fetchPlantGroups()

  //     fetch('http://localhost:3000/api/v1/plant_types')
  //     .then(res => res.json())
  //     .then(types => console.log(types))
  }

  render() {
    return (
      <div>
        App
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     plantGroups: state.plantGroups
//   }
// }

export default connect(null, {fetchPlantGroups})(App);
