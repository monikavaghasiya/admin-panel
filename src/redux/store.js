import { createStore, applyMiddleware } from "redux";
import loginReducer from "./auth/loginReducer";
import { composeWithDevTools} from "redux-devtools-extension";
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const store = createStore(loginReducer, composeWithDevTools(applyMiddleware(logger, thunk)));

export default store;