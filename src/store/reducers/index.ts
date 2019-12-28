import { combineReducers } from "redux";
import todosReducer from "./todos";
import { Todo } from "interfaces";

export interface RootState {
  todos: Todo[];
}

const RootReducer = combineReducers({
  todos: todosReducer,
});

export default RootReducer;