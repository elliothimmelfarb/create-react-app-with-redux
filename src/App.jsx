import React, { Component } from 'react';
import './App.css';
import LeafletContainer from './Containers/LeafletContainer';


class App extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="App">
        <LeafletContainer />
      </div>
    );
  }
}

export default App;
