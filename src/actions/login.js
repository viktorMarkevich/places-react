import { authorizationConst } from "../constants/userConst";

export const changeEmail = (newEmail) => {
  return {
    type: authorizationConst.ACTION_CHANGE_EMAIL,
    payload: newEmail
  };
};

export const changePassword = (newPassword) => {
  return {
    type: authorizationConst.ACTION_CHANGE_PASSWORD,
    payload: newPassword
  }
};