import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PeopleContainer from './Containers/PeopleContainer';


class App extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React-Redux</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <PeopleContainer />
      </div>
    );
  }
}

export default App;
