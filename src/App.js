import React, { Component } from 'react';
import PlantGroupContainer from './containers/PlantGroupContainer'
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home';

class App extends Component {

  render() {
    return (
      <div>
        <br/><hr/>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
        <PlantGroupContainer />
      </div>
    );
  }
}

export default App;