import React, {Component} from 'react';
import {
  Card, CardBody,
  Container, Row, Col,
  Button,
  Form, FormGroup, Label, Input,
  Nav, NavItem, NavLink,
  TabContent, TabPane, CardTitle, CardText
} from 'reactstrap';
import classnames from 'classnames';


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
      <Container>
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
                      <FormGroup row>
                        <Label for="exampleEmail" sm={2}>Email</Label>
                        <Col sm={10}>
                          <Input type="email" name="email" id="exampleEmail" placeholder="email@example.com"/>
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label for="examplePassword" sm={2}>Password</Label>
                        <Col sm={10}>
                          <Input type="password" name="password" id="examplePassword" placeholder="some password"/>
                        </Col>
                      </FormGroup>
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
                      <FormGroup row>
                        <Label for="exampleFirstName" sm={3}>First name</Label>
                        <Col sm={9}>
                          <Input type="text" name="first_name" id="exampleFirstName" placeholder="Joe"/>
                        </Col>
                      </FormGroup>

                      <FormGroup row>
                        <Label for="exampleLastName" sm={3}>Last name</Label>
                        <Col sm={9}>
                          <Input type="text" name="last_name" id="exampleLastName" placeholder="Dou"/>
                        </Col>
                      </FormGroup>
                      
                      <FormGroup row>
                        <Label for="exampleEmail" sm={3}>Email</Label>
                        <Col sm={9}>
                          <Input type="email" name="email" id="exampleEmail" placeholder="email@example.com"/>
                        </Col>
                      </FormGroup>

                      <FormGroup row>
                        <Label for="examplePassword" sm={3}>Password</Label>
                        <Col sm={9}>
                          <Input type="password" name="password" id="examplePassword" placeholder="some password"/>
                        </Col>
                      </FormGroup>

                      <FormGroup row>
                        <Label for="examplePasswordConfirmation" sm={3}>Password Confirmation</Label>
                        <Col sm={9}>
                          <Input type="password" name="password_confirmation" id="examplePasswordConfirmation" placeholder="please repeat password"/>
                        </Col>
                      </FormGroup>

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
      </Container>
    );
  }
}

export default Authorization;