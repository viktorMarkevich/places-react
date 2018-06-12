import { combineReducers } from 'redux';
import { authorizationReducer } from './authorization';

const rootReducer = combineReducers({
  authorizationReducer
});

export default rootReducer;