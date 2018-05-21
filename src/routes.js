import React from 'react';
import { Route, IndexRoute } from 'react-router-dom';

/**
 * Import all page components here
 */
import App from './App';
import authorization from './components/authorization';
import dashboard from './components/dashboard';
// import SomeOtherPage from './components/SomeOtherPage';

/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */
export default (
  <Route path="/" component={App}>
    <Route path="/authorization" component={authorization} />
    <Route path="/dashboard" component={dashboard} />
  </Route>
);