import React, { Component } from 'react';
import { CardBody, Row, Col, Button, Form, FormGroup } from 'reactstrap';
import { changeEmail, changePassword, changePasswordConfirm,
         changeFirstName, changeLastName  } from '../../../actions/signUp';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TextInput from '../inputs';
import {Link} from "react-router-dom";

class SignUpFormData extends Component {
  render() {
    const { email, password, passwordConfirmation, firstName, lastName,
            changeEmail, changePassword, changePasswordConfirm,
            changeFirstName, changeLastName } = this.props;
    console.log('passwordConfirmation: ', passwordConfirmation);
    console.log('this.props: ', this.props);

    return <CardBody>
      <Form>
        <TextInput name="first_name" label="First name"
                   value={firstName}
                   placeholder='Joe' onChange={(event) => {
                     changeFirstName(event.target.value);
                   }} required={'required'}/>

        <TextInput name="last_name" label="Last name"
                   value={lastName}
                   placeholder='Dou' onChange={(event) => {
                     changeLastName(event.target.value);
                   }} required={'required'}/>

        <TextInput name="email" label="Email" type="email" placeholder={'example@some.dns'}
                   value={email} onChange={(event) => {
                     changeEmail(event.target.value);
                   }} required={'required'}/>

        <TextInput name="password" label="Password" type="password" placeholder="password"
                   value={password} onChange={(event) => {
                     changePassword(event.target.value);
                   }} required={'required'}/>

        <TextInput name="passwordConfirmation" label="Password confirmation" type="password" placeholder="confirm password"
                   value={passwordConfirmation} onChange={(event) => {
                     changePasswordConfirm(event.target.value);
                   }} required={'required'}/>

        <div>{this.props.firstName}</div>
        <div>{this.props.lastName}</div>
        <div>{this.props.email}</div>
        <div>{this.props.password}</div>
        <div>{this.props.passwordConfirmation}</div>
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
              <Link to={'/login'}><Button>Login</Button></Link>
          </Col>
        </Row>
        {/*<Row className={'text-center'}>*/}
          {/*<Col sm={{size: 12}}>*/}
            {/*<Button>Sign in with Google</Button>*/}
          {/*</Col>*/}
        {/*</Row>*/}
        {/*<br/>*/}
        {/*<Row className={'text-center'}>*/}
          {/*<Col sm={{size: 12}}>*/}
            {/*<Button>Sign in with Facebook</Button>*/}
          {/*</Col>*/}
        {/*</Row>*/}
      </Form>
    </CardBody>
  }
}

const putStateToProps = (state) => {
  state = state.signUpReducer;
  return {
    email: state.email,
    password: state.password,
    passwordConfirmation: state.passwordConfirmation,
    firstName: state.firstName,
    lastName: state.lastName
  };
};

const putActionToProps = (dispatch) => {
  return {
    changeEmail: bindActionCreators(changeEmail, dispatch),
    changeFirstName: bindActionCreators(changeFirstName, dispatch),
    changeLastName: bindActionCreators(changeLastName, dispatch),
    changePassword: bindActionCreators(changePassword, dispatch),
    changePasswordConfirm: bindActionCreators(changePasswordConfirm, dispatch)
  }
};

const SignUpForm = connect(putStateToProps, putActionToProps)(SignUpFormData);
export default SignUpForm;