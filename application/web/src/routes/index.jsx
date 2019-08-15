import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/home';
import Search from '../pages/search';
import Track from '../pages/track';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/search" exact component={Search} />
    <Route path="/track/:id" exact component={Track} />
  </Switch>
);

export default Routes;
