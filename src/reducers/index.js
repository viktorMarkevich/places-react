import { combineReducers } from 'redux';
import { sign_up } from './sign_up';
import { loginFormReducer } from './loginForm';

// const rootReducer = combineReducers({
//   sign_up,
//   loginFormReducer
// });
//
// export default rootReducer;

const rootReducer = loginFormReducer;

export default rootReducer;