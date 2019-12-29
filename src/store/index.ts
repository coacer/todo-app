import { createStore, applyMiddleware, Store } from "redux";
import thunk from "redux-thunk";
import RootReducer from "./reducers/index";
import { RootState } from "interfaces";
import { TodosAction } from "store/actions/todos";

const middleware = applyMiddleware(thunk);
const store: Store<RootState, TodosAction> = createStore(
  RootReducer,
  middleware
);

export default store;
