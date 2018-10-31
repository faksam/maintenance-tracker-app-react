import React from 'react';
import { Provider } from 'react-redux';

import AppRouter from './routers/AppRouter';
import store from './store/index';
import setAuthorizationToken from './utils/authorization';
import setCurrentUserToStore from './utils/setCurrentUserToStore';

setAuthorizationToken();
setCurrentUserToStore(store);
const App = () => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

export default App;
