import {loginConst} from "../constants/user_const";

export const changeEmail = (newEmail) => {
  return {
    type: loginConst.ACTION_CHANGE_EMAIL,
    payload: newEmail
  };
};

export const changePassword = (newPassword) => {
  return {
    type: loginConst.ACTION_CHANGE_PASSWORD,
    payload: newPassword
  }
};