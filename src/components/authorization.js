import React, {Component} from 'react';
import {Card, Row, Col, Nav, NavItem, NavLink, TabContent, TabPane} from 'reactstrap';
import classnames from 'classnames';
import LoginForm from './details/login/form'
import SignUpForm from './details/sign_up/form'

class Authorization extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };

    this.state['credentials'] = { email: '', password: '' };
    this.onChange = this.onChange.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  onChange(event) {
    const field = event.target.name;
    const credentials = this.state.credentials;
    credentials[field] = event.target.value;
    return this.setState({credentials: credentials});
  }

  onSave(event) {
    event.preventDefault();
    this.props.actions.logInUser(this.state.credentials);
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