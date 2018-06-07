import { userConst } from '../constants';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

export function login(state = initialState, action) {
  switch (action.type) {
    case userConst.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user
      };
    case userConst.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user
      };
    case userConst.LOGIN_FAILURE:
      return {};
    case userConst.LOGOUT:
      return {};
    default:
      return state
  }
}