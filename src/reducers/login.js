import { loginConst } from '../constants';

const initialState = {
    email: '',
    password: ''
};

export function loginReducer(state = initialState, action) {
    switch (action.type) {
        case loginConst.ACTION_CHANGE_EMAIL:
            return { ...state, email: action.payload };
        case loginConst.ACTION_CHANGE_PASSWORD:
            return { ...state, password: action.payload };
        default:
            return state ;
    }
}