import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import Overview from './Overview';
import BuildingContainer from './BuildingContainer';
import UpgradeContainer from './UpgradeContainer';
import CheatContainer from './CheatContainer';
import AchievementNotifications from './AchievementNotifications';
import AchievementGallery from './AchievementGallery';


const Layout = ({main}) =>
  <div>
    <Overview />
    <AchievementNotifications />
    <div className="container" style={{marginTop: "55px"}}>
      <CheatContainer />
      {main}
    </div>
  </div>

const Game = () =>
  <div className="row">
    <BuildingContainer />
    <UpgradeContainer />
  </div>

const App = () => (
  <Router history={browserHistory}>
    <Route component={Layout}>
      <Route path="/game" components={{main: Game}} />
      <Route path="/achievements" components={{main: AchievementGallery}} />
    </Route>
  </Router>
)

export default App;
