import { signUpConst, loginConst } from '../constants';

const initialState = {
  emailLogin: '',
  passwordLogin: ''
};

export function authorizationReducer(state = initialState, action) {
  switch (action.type) {
    case loginConst.ACTION_CHANGE_EMAIL_LOGIN:
      return { ...state, emailLogin: action.payload };
    case loginConst.ACTION_CHANGE_PASSWORD_LOGIN:
      return { ...state, passwordLogin: action.payload };

    case signUpConst.ACTION_CHANGE_EMAIL:
      return { ...state, email: action.payload };
    case signUpConst.ACTION_CHANGE_PASSWORD:
      return { ...state, password: action.payload };
    case signUpConst.ACTION_CHANGE_PASSWORD_CONFIRM:
      return { ...state, passwordConfirmation: action.payload };
    case signUpConst.ACTION_CHANGE_FIRST_NAME:
      return { ...state, firstName: action.payload };
    case signUpConst.ACTION_CHANGE_LAST_NAME:
      return { ...state, lastName: action.payload };
    default:
      return state ;
  }
}