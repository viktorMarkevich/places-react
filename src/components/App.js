import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AuthenticatedComponent from "./AuthenticatedComponent";
import Login from "./Login";
import Dashboard from "./Dashboard";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
            <Route path="/login" component={Login} />
            <AuthenticatedComponent>
              <Route path="/dashboard" exact component={Dashboard} />
            </AuthenticatedComponent>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
