import { authorizationConst } from '../constants';

const initialState = {
  email: '',
  password: ''
};

export function authorizationReducer(state = initialState, action) {
  switch (action.type) {
    case authorizationConst.ACTION_CHANGE_EMAIL:
      return { ...state, email: action.payload };
    case authorizationConst.ACTION_CHANGE_PASSWORD:
      return { ...state, password: action.payload };
    case authorizationConst.ACTION_CHANGE_PASSWORD_CONFIRM:
      return { ...state, passwordConfirmation: action.payload };
    case authorizationConst.ACTION_CHANGE_FIRST_NAME:
      return { ...state, firstName: action.payload };
    case authorizationConst.ACTION_CHANGE_LAST_NAME:
      return { ...state, lastName: action.payload };
    default:
      return state ;
  }
}