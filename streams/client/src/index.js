import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from 'redux';

import App from './components/App';
import reducers from './reducers';

const composeEnhencers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhencers(applyMiddleware()));
const root = createRoot(document.querySelector('#root'));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
