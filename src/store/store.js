import { createStore,applyMiddleware } from "redux";
import userReducuer from "./user/userReducer";
import logger from "redux-logger";
const store = createStore(userReducuer,applyMiddleware(logger))

export default store