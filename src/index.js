import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './containers/App';
import reducers from './reducers';
import { createTick } from './actions';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './fonts/game-icons.css';
import './index.css';

let store = createStore(reducers)

window.setInterval(() => {
  store.dispatch(createTick());
}, 500);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
