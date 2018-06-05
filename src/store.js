import { rootReducer } from './components/authorization'
import { createStore } from 'redux';

export const store = createStore(rootReducer);