import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from '../constants/routes';
import Content from '../views/Content';
import LandingPage from '../views/LandingPage';

const AppRoutes = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path={routes.LANDING} component={LandingPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRoutes;
