import React, { Fragment } from 'react';
import { Provider } from 'react-redux';

import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import initialState from './store/initialState';
const store = configureStore(initialState);

const App = () => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

export default App;
