import { combineReducers } from 'redux';
import { sign_up } from './sign_up';
import { loginFormReducer } from './loginForm';

// const rootReducer = combineReducers({
//   sign_up,
//   loginFormReducer
// });
const rootReducer = loginFormReducer;
export default rootReducer;