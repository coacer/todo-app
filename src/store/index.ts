import { createStore, applyMiddleware, Store, combineReducers } from "redux";
import thunk from "redux-thunk";

import todosReducer from "./reducers/todos";
import loadReducer from "./reducers/load";
import { RootState } from "interfaces";
import { TodosAction } from "store/actions/todos";
import { LoadAction } from "store/actions/load";

const RootReducer = combineReducers({
  todos: todosReducer,
  load: loadReducer,
});

const middleware = applyMiddleware(thunk);
const store: Store<RootState, TodosAction | LoadAction> = createStore(
  RootReducer,
  middleware
);

export default store;
