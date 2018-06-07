import { loginConst } from '../constants';


const initialState = {
  email: '',
  password: ''
};

export function loginFormReducer(state = initialState, action) {
  switch (action.type) {
    case loginConst.ACTION_CHANGE_EMAIL:
      return { ...state, email: action.payload };
    case loginConst.ACTION_CHANGE_PASSWORD:
      return { ...state, password: action.payload };
  }
  return state;
}