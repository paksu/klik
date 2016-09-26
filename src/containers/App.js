import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import Overview from './Overview';
import BuildingContainer from './BuildingContainer';
import UpgradeContainer from './UpgradeContainer';
import CheatContainer from './CheatContainer';
import AchievementNotifications from './AchievementNotifications';
import AchievementGallery from './AchievementGallery';
import NotFound from '../components/NotFound';


const Layout = ({main}) => (
  <div>
    <Overview />
    <AchievementNotifications />
    <div className="container" style={{marginTop: "55px"}}>
      <CheatContainer />
      {main}
    </div>
  </div>
)

const Game = () => (
  <div className="row">
    <BuildingContainer />
    <UpgradeContainer />
  </div>
)

const Stats = () => (
  <h1>Stats</h1>
)

const Start = () => (
  <h1>Start</h1>
)


const App = () => (
  <Router history={browserHistory}>
    <Route component={Layout}>
      <Route path="/" components={{main: Game}} />
      <Route path="/achievements" components={{main: AchievementGallery}} />
      <Route path="/stats" components={{main: Stats}} />
    </Route>
    <Route path="/start" component={Start} />
    <Route path='*' component={NotFound} />
  </Router>
)

export default App;
