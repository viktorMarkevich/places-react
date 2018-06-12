import React, {Component} from 'react';
import {CardBody, Row, Col, Button, Form, FormGroup} from 'reactstrap';
import TextInput from './inputs';
import classnames from 'classnames';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {signUpConst} from "../../../constants/userConst";

const initialState = {
  firstName: '43',
  lastName: '34'
};

const actionChangeFirstName = {
  type: signUpConst.ACTION_CHANGE_FIRST_NAME,
  payload: null
};

const actionChangeLastName = {
  type: signUpConst.ACTION_CHANGE_LAST_NAME,
  payload: null
};

export const rootReducer = (state = initialState, action) => {
  return state;
};

class SignUpForm extends Component {

  constructor(props) {
    super(props);

    this.state = {};
    this.state['credentials'] = { email: '', password: '' };
    this.onChange = this.onChange.bind(this);
    this.onSave = this.onSave.bind(this);
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
    // console.log(this.props.firstName);
    return <CardBody>
      <Form>
        {/*<TextInput name="first_name" label="First name"*/}
                   {/*placeholder='Some name' onChange={this.onChange}/>*/}

        {/*<TextInput name="last_name" label="Last name"*/}
                   {/*placeholder='Some name' onChange={this.onChange}/>*/}

        {/*<TextInput name="email" label="Email" type="email"*/}
                   {/*value={this.state.credentials.email} onChange={this.onChange}/>*/}

        {/*<TextInput name="password" label="Password" type="password" placeholder="some password"*/}
                   {/*value={this.state.credentials.password} onChange={this.onChange}/>*/}

        {/*<TextInput name="password_confirmation" label="Password confirmation" type="password"*/}
                   {/*placeholder="please repeat password"*/}
                   {/*value={this.state.credentials.password} onChange={this.onChange}/>*/}

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
  }
}

const mapStateToProps = (state) => {
  return {
    firstName: state.firstName,
    lastName: state.lastName
  };
};

export default SignUpForm;