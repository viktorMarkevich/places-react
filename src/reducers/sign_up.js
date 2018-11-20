import { signUpConst } from '../constants';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  passwordConfirmation: ''
};

export function signUpReducer(state = initialState, action) {
  switch (action.type) {
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