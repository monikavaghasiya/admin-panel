import {FETCH_LOGIN_REQ, FETCH_LOGIN_SUCCESS, FETCH_LOGIN_FAILURE, SET_LOGOUT} from "./loginTypes";

export const fetchLoginRequest = (email, password) => {
    return {
        type: FETCH_LOGIN_REQ,
        payload: {email, password}
    }
};

export const fetchLoginSuccess = (user) => {
    return {
        type: FETCH_LOGIN_SUCCESS,
        payload: user
    }
};

export const fetchLoginFailure = (message) => {
    return {
        type: FETCH_LOGIN_FAILURE,
        payload: message
    }
};

export const setLogout =() => {
    return {
        type: SET_LOGOUT
    }
};