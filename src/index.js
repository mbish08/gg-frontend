import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux' 
import plantGroupReducer from './reducers/plantGroupReducer'
import { BrowserRouter as Router } from 'react-router-dom'
import Navigation from './components/Navigation';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

let store = createStore(plantGroupReducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <Router>
    <Navigation />
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);