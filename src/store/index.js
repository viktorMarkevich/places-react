// import { rootReducer } from '../components/auth/login/form'
// import rootReducer from '../reducers/'
import {rootReducer} from '../components/auth/login/form'
import { createStore } from 'redux';

export const store = createStore(rootReducer);