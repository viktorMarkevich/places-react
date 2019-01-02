import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import AuthenticatedComponent from "./AuthenticatedComponent";
import Login from "./Login";
// import Protected from "./Protected";
import Dashboard from "./Dashboard";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
            <Route path="/login" component={Login} />
            <Route path="/" exact component={Home} />
            <AuthenticatedComponent>
              {/*<Route path="/protected" exact component={Protected} />*/}
              <Route path="/dashboard" exact component={Dashboard} />
            </AuthenticatedComponent>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
