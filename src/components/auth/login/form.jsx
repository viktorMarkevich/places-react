import React, { Component } from 'react';
import { CardBody, Row, Col, Button, Form, FormGroup } from 'reactstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeEmailLogin, changePasswordLogin } from '../../../actions/login';
import TextInput from '../inputs';

class LoginFormData extends Component {
  render() {
    const { emailLogin, passwordLogin, changeEmailLogin, changePasswordLogin } = this.props;
    return <CardBody>
      <Form>
        <TextInput name="email" label="Email" type="email" placeholder="email"
                   value={emailLogin}
                   onChange={(event) => {
                     changeEmailLogin(event.target.value);
                   }}
                   required={'required'}/>
        <TextInput name="password" label="Password" type="password" placeholder="password"
                   value={passwordLogin}
                   onChange={(event) => {
                     changePasswordLogin(event.target.value);
                   }}
                   required={'required'}/>
        <FormGroup row className={'text-center'}>
          <Col sm={{size: 12}}>
            <Button onClick={this.onSave}>Sign in</Button>
          </Col>
        </FormGroup>
        <div>
          {this.props.emailLogin + ' ' + this.props.passwordLogin}

        </div>
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

const putStateToProps = (state) => {
  state = state.authorizationReducer;
  return {
    emailLogin: state.emailLogin,
    passwordLogin: state.passwordLogin
  };
};

const putActionToProps = (dispatch) => {
  return {
    changeEmailLogin: bindActionCreators(changeEmailLogin, dispatch),
    changePasswordLogin: bindActionCreators(changePasswordLogin, dispatch),
  }
};

const LoginForm = connect(putStateToProps, putActionToProps)(LoginFormData);
export default LoginForm;