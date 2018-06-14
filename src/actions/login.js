import { loginConst } from "../constants/userConst";

export const changeEmailLogin = (newEmail) => {
  return {
    type: loginConst.ACTION_CHANGE_EMAIL_LOGIN,
    payload: newEmail
  };
};

export const changePasswordLogin = (newPassword) => {
  return {
    type: loginConst.ACTION_CHANGE_PASSWORD_LOGIN,
    payload: newPassword
  }
};