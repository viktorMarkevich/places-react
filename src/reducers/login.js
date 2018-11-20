import { loginConst } from '../constants';

const initialState = {
    emailLogin: '',
    passwordLogin: ''
};

export function loginReducer(state = initialState, action) {
    switch (action.type) {
        case loginConst.ACTION_CHANGE_EMAIL_LOGIN:
            return { ...state, emailLogin: action.payload };
        case loginConst.ACTION_CHANGE_PASSWORD_LOGIN:
            return { ...state, passwordLogin: action.payload };
        default:
            return state ;
    }
}