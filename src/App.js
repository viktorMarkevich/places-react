import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

import LoginPage from './components/auth/login'
import SignUpPage from './components/auth/sign_up'
import Dashboard from './components/dashboard'
import { Container } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css'

/*
  Layouts, inline define here for demo purpose
  you may want to define in another file instead
 */

const DashboardLayout = ({children, ...rest}) => {
  return (
    <div className="page page-dashboard">
      <div className="sidebar">Sidebar here</div>
      <div className="main">{children}</div>
    </div>
  )
};

const LoginLayout = ({children, ...rest}) => {
  return (
    <Container className={'main'}>{children}</Container>
  )
};

/*
  Route wrapper
 */

const DashboardRoute = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={matchProps => (
      <DashboardLayout>
        <Component {...matchProps} />
      </DashboardLayout>
    )} />
  )
};

const LoginLayoutRoute = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={matchProps => (
      <LoginLayout>
        <Component {...matchProps} />
      </LoginLayout>
    )} />
  )
};

/*
   App
 */

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <LoginLayoutRoute path="/login" component={LoginPage} />

          <DashboardRoute path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    );
  }
}

export default App;