import React, {Component} from 'react';
import {Card, Row, Col, Nav, NavItem, NavLink, TabContent, TabPane} from 'reactstrap';
import classnames from 'classnames';
import LoginForm from './login/form'
import SignUpForm from './sign_up/form'

class Authorization extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    return (
      <Row>
        <Col sm="12" md={{size: 8, offset: 2}}>
          <Card>
            <Nav tabs justified>
              <NavItem>
                <NavLink href="#" className={classnames({active: this.state.activeTab === '1'})}
                         onClick={() => {
                           this.toggle('1');
                         }}>
                  Log in
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" className={classnames({active: this.state.activeTab === '2'})}
                         onClick={() => {
                           this.toggle('2');
                         }}>
                  Sign up
                </NavLink>
              </NavItem>
            </Nav>
            <br/>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <LoginForm/>
              </TabPane>

              <TabPane tabId="2">
                <SignUpForm/>
              </TabPane>
            </TabContent>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default Authorization;