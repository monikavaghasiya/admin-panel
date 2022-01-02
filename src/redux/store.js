import { createStore } from "redux";
import loginReducer from "./auth/loginReducer";

const store = createStore(loginReducer);

export default store;