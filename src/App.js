import React, { Component } from 'react';

class App extends Component {

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/plant_groups')
      .then(res => res.json())
      .then(groups => console.log(groups))

      fetch('http://localhost:3000/api/v1/plant_types')
      .then(res => res.json())
      .then(types => console.log(types))
  }

  render() {
    return (
      <div>
        App
      </div>
    );
  }
}

export default App;
