import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './Homepage/Homepage';

const ChildRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>
      </Switch>
    </Router>
  );

}
export default ChildRoutes;