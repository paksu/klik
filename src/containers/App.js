import React from 'react';
import Overview from './Overview';
import BuildingContainer from './BuildingContainer';
import UpgradeContainer from './UpgradeContainer';
import CheatContainer from './CheatContainer';
import AchievementContainer from './AchievementContainer';

const App = () => (
  <div>
    <Overview />
    <div className="container" style={{marginTop: "55px"}}>
      <AchievementContainer />
      <CheatContainer />
      <div className="row">
        <BuildingContainer />
        <UpgradeContainer />
      </div>
    </div>
  </div>
)

export default App;
