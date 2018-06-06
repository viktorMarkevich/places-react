import { rootReducer } from '../components/details/login/form'
import { createStore } from 'redux';

export const store = createStore(rootReducer);