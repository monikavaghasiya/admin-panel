import {FETCH_LOGIN_FAILURE, FETCH_LOGIN_REQ, FETCH_LOGIN_SUCCESS, SET_LOGOUT, UPDATE_AUTH_USER_DETAIL, FAIL_UPDATE_AUTH_USER_DETAIL} from "./loginTypes";

const accessToken = localStorage.getItem('token')?? '';
const isLogin = accessToken ? true : false;

const initialState = {
    loading: false,
    user: [],
    token: accessToken,
    errorMessage: '',
    isLogin: isLogin
};
console.log("accessToken", accessToken, initialState.user);

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_LOGIN_REQ:
            return {
                ...state,
                loading: true
            }
        case FETCH_LOGIN_SUCCESS:
            const data = action.payload;
            return {
                loading: false,
                user: data.user,
                token: data.access_token,
                errorMessage: '',
                isLogin: true
            }
        case FETCH_LOGIN_FAILURE:
            return {
                loading: false,
                user: [],
                token: '',
                errorMessage: action.payload,
                isLogin: false
            }
        case UPDATE_AUTH_USER_DETAIL:
            return {
                ...state,
                loading: false,
                user: action.payload,
                errorMessage: '',
            }
        case FAIL_UPDATE_AUTH_USER_DETAIL:
            return {
                loading: false,
                user: [],
                token: '',
                errorMessage: action.payload,
                isLogin: false
            }
        case SET_LOGOUT:
            localStorage.removeItem('token');
            return {
                loading: false,
                user: [],
                token: '',
                errorMessage: '',
                isLogin: false
            }
        default: return state
    }
};

export default reducer;