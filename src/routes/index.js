import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Cars from '../pages/Cars';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/cars" />} />

      <Route path="/cars" component={Cars} />
    </Switch>
  );
}
