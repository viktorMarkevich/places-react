import React, {Component} from 'react';
import        {PropTypes} from 'prop-types';
import {
  Card, CardBody,
  Row, Col,
  Button,
  Form, FormGroup, Label, Input,
  Nav, NavItem, NavLink,
  TabContent, TabPane
} from 'reactstrap';
import classnames from 'classnames';
import TextInput from './common/authorizationInputs';


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
                <CardBody>
                  <Form>
                    <TextInput name="email" label="Email" type="email"
                               value={this.state.credentials.email} onChange={this.onChange}/>
                    <TextInput name="password" label="Password" type="password" placeholder="some password"
                               value={this.state.credentials.password} onChange={this.onChange}/>

                    <FormGroup row className={'text-center'}>
                      <Col sm={{size: 12}}>
                        <Button>Sign in</Button>
                      </Col>
                    </FormGroup>

                    <Row className={'text-center'}>
                      <Col sm={{size: 12}}>
                        <a href={'#'}>Forgot password?</a>
                      </Col>
                    </Row>

                    <Row className={'text-center'}>
                      <Col sm={{size: 12}}>
                        Or
                      </Col>
                    </Row>
                    <Row className={'text-center'}>
                      <Col sm={{size: 12}}>
                        <Button>Sign in with Google</Button>
                      </Col>
                    </Row>
                    <br/>
                    <Row className={'text-center'}>
                      <Col sm={{size: 12}}>
                        <Button>Sign in with Facebook</Button>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
              </TabPane>

              <TabPane tabId="2">
                <CardBody>
                  <Form>
                    <TextInput name="first_name" label="First name"
                               placeholder='Some name' onChange={this.onChange}/>

                    <TextInput name="last_name" label="Last name"
                               placeholder='Some name' onChange={this.onChange}/>

                    <TextInput name="email" label="Email" type="email"
                               value={this.state.credentials.email} onChange={this.onChange}/>

                    <TextInput name="password" label="Password" type="password" placeholder="some password"
                               value={this.state.credentials.password} onChange={this.onChange}/>
                    
                    <TextInput name="password_confirmation" label="Password confirmation" type="password"
                               placeholder="please repeat password"
                               value={this.state.credentials.password} onChange={this.onChange}/>

                    <FormGroup row className={'text-center'}>
                      <Col sm={{size: 12}}>
                        <Button>Sign up</Button>
                      </Col>
                    </FormGroup>

                    <Row className={'text-center'}>
                      <Col sm={{size: 12}}>
                        Or
                      </Col>
                    </Row>
                    <Row className={'text-center'}>
                      <Col sm={{size: 12}}>
                        <Button>Sign in with Google</Button>
                      </Col>
                    </Row>
                    <br/>
                    <Row className={'text-center'}>
                      <Col sm={{size: 12}}>
                        <Button>Sign in with Facebook</Button>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
              </TabPane>
            </TabContent>
          </Card>
        </Col>
      </Row>
      // </Container>
    );
  }
}

export default Authorization;