import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Router, Route, browserHistory } from 'react-router';

import reducers from './reducers';
import { createTick } from './actions';
import { saveState, loadState } from './local-storage';
import throttle from 'lodash/throttle';

import Overview from './containers/Overview';
import BuildingContainer from './containers/BuildingContainer';
import UpgradeContainer from './containers/UpgradeContainer';
import CheatContainer from './containers/CheatContainer';
import AchievementNotifications from './containers/AchievementNotifications';
import AchievementGallery from './containers/AchievementGallery';
import NotFound from './components/NotFound';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'animate.css/animate.css';
import 'font-awesome/css/font-awesome.css';

import './fonts/game-icons.css';
import './index.css';

const persistedState = loadState();

let store = createStore(reducers, persistedState)

store.subscribe(throttle(() => {
  saveState(store.getState());
}), 1000);

window.setInterval(() => {
  store.dispatch(createTick());
}, 500);

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

const requireInitialData = (nextState, replace) => {
  return (nextState, replace) => {
    let state = store.getState();
    if (!store.name) {
      replace({ pathname: "/start" });
    };
  };
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route component={Layout} onEnter={requireInitialData(store)}>
        <Route path="/" components={{main: Game}} />
        <Route path="/achievements" components={{main: AchievementGallery}} />
        <Route path="/stats" components={{main: Stats}} />
      </Route>
      <Route path="/start" component={Start} />
      <Route path='*' component={NotFound} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
