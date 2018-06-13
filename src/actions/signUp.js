import { authorizationConst } from "../constants/userConst";

export const changeFirstName = (newFirstName) => {
  return {
    type: authorizationConst.ACTION_CHANGE_FIRST_NAME,
    payload: newFirstName
  };
};

export const changeLastName = (newLastName) => {
  return {
    type: authorizationConst.ACTION_CHANGE_LAST_NAME,
    payload: newLastName
  };
};

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

export const changePasswordConfirm = (newPasswordConfirm) => {
  return {
    type: authorizationConst.ACTION_CHANGE_PASSWORD_CONFIRM,
    payload: newPasswordConfirm
  }
};