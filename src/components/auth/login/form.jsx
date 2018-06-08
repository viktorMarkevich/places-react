import React, { Component } from 'react';
import { CardBody, Row, Col, Button, Form, FormGroup } from 'reactstrap';
import TextInput from './inputs';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeEmail, changePassword } from '../../../actions/login';

class LoginForm extends Component {
  render() {
    console.log(this.props);
    const { email, password, changeEmail, changePassword } = this.props;

    return <CardBody>
      <Form>
        <TextInput name="email" label="Email" type="email" placeholder="email"
                   value={email}
                   onChange={(event) => {
                     changeEmail(event.target.value);
                   }}/>
        <TextInput name="password" label="Password" type="password" placeholder="password"
                   value={password}
                   onChange={(event) => {
                     changePassword(event.target.value);
                   }}/>
        <FormGroup row className={'text-center'}>
          <Col sm={{size: 12}}>
            <Button onClick={this.onSave}>Sign in</Button>
          </Col>
        </FormGroup>
        <div>
          {this.props.email + ' ' + this.props.password}

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
  return {
    email: state.email,
    password: state.password
  };
};

const putActionToProps = (dispatch) => {
  return {
    changeEmail: bindActionCreators(changeEmail, dispatch),
    changePassword: bindActionCreators(changePassword, dispatch),
  }
};

const WrappedMainComponent = connect(putStateToProps, putActionToProps)(LoginForm);
export default WrappedMainComponent;