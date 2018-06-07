import { combineReducers } from 'redux';

import { login } from './login';
import { sign_up } from './sign_up';
import { loginFormReducer } from './loginForm';

const rootReducer = combineReducers({
  login,
  sign_up,
  loginFormReducer
});

export default rootReducer;