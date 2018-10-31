import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from '../constants/routes';
import PrivateRoute from '../utils/PrivateRoute';
import LandingPage from '../views/LandingPage';
import UserDashboard from '../views/UserDashboard';
import AdminDashboard from '../views/AdminDashboard';

const AppRoutes = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path={routes.LANDING} component={LandingPage} />
        <PrivateRoute exact path={routes.DASHBOARD} component={UserDashboard} />
        <PrivateRoute exact path={routes.ADMINDASHBOARD} component={AdminDashboard} />
      </Switch>
    </div>
  </Router>
);

export default AppRoutes;
