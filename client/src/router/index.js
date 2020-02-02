import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Main from '../pages/Main';

const history = createBrowserHistory();

const Routes = () => (
  <Router history={history}>
    <Switch>
      <Route path="/" component={Main} />
    </Switch>
  </Router>
);

export default Routes;
