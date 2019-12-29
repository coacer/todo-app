import { combineReducers } from "redux";
import todosReducer from "./todos";
import { Todo } from "interfaces";

const RootReducer = combineReducers({
  todos: todosReducer,
});

export default RootReducer;
