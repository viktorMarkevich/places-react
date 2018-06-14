import { signUpConst } from "../constants/userConst";

export const changeFirstName = (newFirstName) => {
  return {
    type: signUpConst.ACTION_CHANGE_FIRST_NAME,
    payload: newFirstName
  };
};

export const changeLastName = (newLastName) => {
  return {
    type: signUpConst.ACTION_CHANGE_LAST_NAME,
    payload: newLastName
  };
};

export const changeEmail = (newEmail) => {
  return {
    type: signUpConst.ACTION_CHANGE_EMAIL,
    payload: newEmail
  };
};

export const changePassword = (newPassword) => {
  return {
    type: signUpConst.ACTION_CHANGE_PASSWORD,
    payload: newPassword
  }
};

export const changePasswordConfirm = (newPasswordConfirm) => {
  return {
    type: signUpConst.ACTION_CHANGE_PASSWORD_CONFIRM,
    payload: newPasswordConfirm
  }
};