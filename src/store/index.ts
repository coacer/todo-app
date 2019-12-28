import { createStore, applyMiddleware } from "redux";
import RootReducer from "./reducers/index";
import thunk from "redux-thunk";

const middleware = applyMiddleware(thunk);
const store = createStore(
  RootReducer,
  middleware
);

export default store;
