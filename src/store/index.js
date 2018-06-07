// import { rootReducer } from '../components/authorization/login/form'
import rootReducer from '../reducers/'
import { createStore } from 'redux';

export const store = createStore(rootReducer);