import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './containers/App';
import reducers from './reducers';
import { createTick } from './actions';
import { saveState, loadState } from './local-storage';
import throttle from 'lodash/throttle';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'animate.css/animate.css';

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

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
