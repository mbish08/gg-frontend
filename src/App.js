import React, { Component } from 'react';
import PlantGroupContainer from './containers/PlantGroupContainer'


class App extends Component {

  //     fetch('http://localhost:3000/api/v1/plant_types')
  //     .then(res => res.json())
  //     .then(types => console.log(types))

  render() {
    return (
      <div>
        <PlantGroupContainer />
      </div>
    );
  }
}

export default App;