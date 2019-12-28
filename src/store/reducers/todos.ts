import { Todo } from "interfaces";
import { TodosAction } from "../actions/todos";
import { ActionTypes } from "../actions/types";

const { FETCH_TODOS, ADD_TODO, DEL_TODO, CHECK_TODO } = ActionTypes;
const initialState: Todo[] = [];

const todoReducer = (state = initialState, action: TodosAction): Todo[] => {
  switch(action.type) {
    case FETCH_TODOS:
      return [...state, ...action.payload];
      // case ADD_TODO:
      //   return;
      // case DEL_TODO:
      //   return;
      // case CHECK_TODO:
      //   return;
    default:
      return state;
  }
}

export default todoReducer;
