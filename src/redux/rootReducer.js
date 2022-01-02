import loginReducer from './auth/loginReducer';
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    login: loginReducer
});

export default rootReducer;