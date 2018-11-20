import { combineReducers } from 'redux';
import { loginReducer } from './login';
import { signUpReducer } from './sign_up';

const rootReducer = combineReducers({
    loginReducer,
    signUpReducer
});

export default rootReducer;