import React, { Component } from 'react';
import { connect } from 'react-redux'

class App extends Component {

  // initial fetch testing
  // componentDidMount() {
  //   fetch('http://localhost:3000/api/v1/plant_groups')
  //     .then(res => res.json())
  //     .then(groups => console.log(groups))

  //     fetch('http://localhost:3000/api/v1/plant_types')
  //     .then(res => res.json())
  //     .then(types => console.log(types))
  // }

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
