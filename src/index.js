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
import MainContainer from './containers/MainContainer';
import CheatContainer from './containers/CheatContainer';
import AchievementNotifications from './containers/AchievementNotifications';
import AchievementGallery from './containers/AchievementGallery';
import Stats from './containers/Stats';
import StartScreen from './containers/StartScreen';
import NotFound from './components/NotFound';
import ReactTooltip from 'react-tooltip'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'animate.css/animate.css';
import 'font-awesome/css/font-awesome.css';

import './fonts/game-icons.css';
import './index.css';

const persistedState = loadState();

let store = createStore(
  reducers,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.subscribe(throttle(() => {
  saveState(store.getState());
}), 1000);

window.setInterval(() => {
  const swaggerAmount = Math.random() < 0.1 ? 1 : 0;
  const innovationAmount = Math.random() < 0.1 ? 1 : 0;
  store.dispatch(createTick(swaggerAmount, innovationAmount));
}, 1000);

const Layout = ({main}) => (
  <div>
    <ReactTooltip />
    <Overview />
    <AchievementNotifications />
    <div style={{marginTop: "55px", marginLeft: "15px", marginRight: "15px"}}>
      <CheatContainer />
      {main}
    </div>
  </div>
)

const Game = () => (
  <div className="row">
    <BuildingContainer />
    <MainContainer />
    <UpgradeContainer />
  </div>
)

const startScreenRequired = (nextState, replace) => {
  // redirect the user to start screen if they have not given company name
  return (nextState, replace) => {
    let state = store.getState();
    if (!state.companyName) replace({ pathname: "/start" });
  };
}
const startScreenNotRequired = (nextState, replace) => {
  // redirect the user to game screen if they have given company name
  return (nextState, replace) => {
    let state = store.getState();
    if (state.companyName) replace({ pathname: "/" });
  };
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route component={Layout} onEnter={startScreenRequired(store)}>
        <Route path="/" components={{main: Game}} />
        <Route path="/achievements" components={{main: AchievementGallery}} />
        <Route path="/stats" components={{main: Stats}} />
      </Route>
      <Route path="/start" component={StartScreen} onEnter={startScreenNotRequired(store)} />
      <Route path='*' component={NotFound} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
