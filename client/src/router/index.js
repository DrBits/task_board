import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Main from '../pages/Main';
import Authenticate from '../pages/Authenticate';

const history = createBrowserHistory();

const Routes = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/authenticate" component={Authenticate} />
    </Switch>
  </Router>
);

export default Routes;
