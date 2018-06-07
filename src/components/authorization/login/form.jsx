import React, { Component } from 'react';
import { CardBody, Row, Col, Button, Form, FormGroup } from 'reactstrap';
import TextInput from './inputs';
import classnames from 'classnames';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { loginConst } from "../../../constants/user_const";

const initialState = {
  email: '',
  password: ''
};

const changeEmail = (newEmail) => {
  return {
    type: loginConst.ACTION_CHANGE_EMAIL,
    payload: newEmail
  };
};

const changePassword = (newPassword) => {
  return {
    type: loginConst.ACTION_CHANGE_PASSWORD,
    payload: newPassword
  }
};

const mapStateToProps = (state) => {
  return {
    email: state.email,
    password: state.password
  };
};


class LoginForm extends Component {

  constructor(props) {
    super(props);

    this.state = {};
    this.state['credentials'] = { email: '', password: '' };
    // this.onChange = this.onChange.bind(this);
    // this.onSave = this.onSave.bind(this);
  }

  // onChange(event) {
  //   console.log('here');
  //   const field = event.target.name;
  //   const credentials = this.state.credentials;
  //   credentials[field] = event.target.value;
  //   return this.setState({credentials: credentials});
  // }

  // onSave(event) {
  //   event.preventDefault();
  //   this.props.actions.logInUser(this.state.credentials);
  // }

  render() {
    const dispatch = this.props.dispatch;
    return <CardBody>
      <Form>
        <TextInput name="email" label="Email" type="email"
                   value={this.props.email}
                   onChange={() => {
                     dispatch(actionChangeEmail);
                   }}/>
        <TextInput name="password" label="Password" type="password" placeholder="some password"
                   value={this.props.password}
                   onChange={() => {
                     dispatch(actionChangeEmail);
                   }}/>

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

const WrappedMainComponent = connect(mapStateToProps)(LoginForm);

export default LoginForm;