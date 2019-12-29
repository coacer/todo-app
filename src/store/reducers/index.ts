import { combineReducers } from "redux";
import todosReducer from "./todos";

const RootReducer = combineReducers({
  todos: todosReducer,
});

export default RootReducer;
