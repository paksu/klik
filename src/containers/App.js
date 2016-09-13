import React, { Component } from 'react';
import Overview from './Overview';
import BuildingContainer from './BuildingContainer';
import UpgradeContainer from './UpgradeContainer';
import CheatContainer from './CheatContainer';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <h1>IT startup simulator
          </h1>
          <CheatContainer />
          <Overview />
        </div>
        <div className="row">
          <BuildingContainer />
          <UpgradeContainer />
        </div>
      </div>
    );
  }
}

export default App;
