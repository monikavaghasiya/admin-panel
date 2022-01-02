import {FETCH_LOGIN_REQ, FETCH_LOGIN_SUCCESS, FETCH_LOGIN_FAILURE, SET_LOGOUT} from "./loginTypes";

const initialState = {
    loading: false,
    user: [],
    token: '',
    errorMessage: '',
    isLogin: false
};

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
        case SET_LOGOUT:
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