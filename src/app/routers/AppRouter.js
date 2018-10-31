import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from '../constants/routes';
import PrivateRoute from '../utils/PrivateRoute';
import Content from '../views/Content';
import LandingPage from '../views/LandingPage';
import UserDashboard from '../views/UserDashboard';
import AdminDashboard from '../views/AdminDashboard';

const AppRoutes = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path={routes.LANDING} component={LandingPage} />
        <Route exact path={routes.DASHBOARD} component={UserDashboard} />
        <Route exact path={routes.ADMINDASHBOARD} component={AdminDashboard} />
      </Switch>
    </div>
  </Router>
);

export default AppRoutes;
