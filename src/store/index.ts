import { createStore, applyMiddleware, Store, combineReducers } from "redux";
import thunk from "redux-thunk";
import todosReducer from "./reducers/todos";
import { RootState } from "interfaces";
import { TodosAction } from "store/actions/todos";

const RootReducer = combineReducers({
  todos: todosReducer,
});

const middleware = applyMiddleware(thunk);
const store: Store<RootState, TodosAction> = createStore(
  RootReducer,
  middleware
);

export default store;
