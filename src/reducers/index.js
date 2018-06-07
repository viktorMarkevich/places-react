import { combineReducers } from 'redux';

import { login } from './login';
import { sign_up } from './sign_up';

const rootReducer = combineReducers({
  login,
  sign_up
});

export default rootReducer;