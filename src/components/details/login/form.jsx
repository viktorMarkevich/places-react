import React, {Component} from 'react';
import {CardBody, Row, Col, Button, Form, FormGroup} from 'reactstrap';
import TextInput from './inputs';
import classnames from 'classnames';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {ACTION_CHANGE_FIRST_NAME, ACTION_CHANGE_LAST_NAME} from "../../../constants/inputs_constants";

const initialState = {
  firstName: '',
  lastName: ''
};

const actionChangeFirstName = {
  type: ACTION_CHANGE_FIRST_NAME,
  payload: null
};

const actionChangeLastName = {
  type: ACTION_CHANGE_LAST_NAME,
  payload: null
};

export const rootReducer = (state = initialState, action) => {
  return state;
};

class LoginForm extends Component {

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
    console.log(this.props.firstName);
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

const mapStateToProps = (state) => {
  return {
    firstName: state.firstName,
    lastName: state.lastName
  };
};

export default LoginForm;