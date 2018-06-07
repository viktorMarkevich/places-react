import { userConst } from '../constants';

export function sign_up(state = {}, action) {
  switch (action.type) {
    case userConst.REGISTER_REQUEST:
      return { registering: true };
    case userConst.REGISTER_SUCCESS:
      return {};
    case userConst.REGISTER_FAILURE:
      return {};
    default:
      return state
  }
}