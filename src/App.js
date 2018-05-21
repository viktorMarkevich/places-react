import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Match, Redirect, Switch } from 'react-router-dom'

import LoginPage from './components/authorization'
import OverviewPage from './components/dashboard'
// import AccountPage from './page/AccountPage'

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
    <div className="page page-login">
      <div className="main">{children}</div>
    </div>
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
          <DashboardRoute path="/overview" component={OverviewPage} />
          {/*<DashboardRoute path="/account" component={AccountPage} />*/}
        </Switch>
      </Router>
    );
  }
}

export default App;