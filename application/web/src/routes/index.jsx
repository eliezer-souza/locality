import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/home';
import Track from '../pages/track';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/track" exact component={Track} />
  </Switch>
);

export default Routes;
