import React, {Component} from 'react';
import {CardBody, Row, Col, Button, Form, FormGroup} from 'reactstrap';
import TextInput from './common/authorizationInputs';

class Login extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {};

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
    return <CardBody>
        <Form>
          <TextInput name="email" label="Email" type="email"
                     value={this.state.credentials.email} onChange={this.onChange}/>
          <TextInput name="password" label="Password" type="password" placeholder="some password"
                     value={this.state.credentials.password} onChange={this.onChange}/>

          <FormGroup row className={'text-center'}>
            <Col sm={{size: 12}}>
              <Button onClick={this.onSave}>Sign in</Button>
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
  }
}

export default Login;