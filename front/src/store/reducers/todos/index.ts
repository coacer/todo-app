import { Todo } from "interfaces";
import { TodosAction } from "store/actions/todos";
import { ActionTypes } from "store/actions/todos";

const {
  FETCH_TODOS: FETCH,
  ADD_TODO: ADD,
  DEL_TODO: DEL,
  CHECK_TODO: CHECK,
} = ActionTypes;
const initialState: Todo[] = [];

// stateは上のinitialStateで型推論されるため型指定不要(多分)
const todoReducer = (state = initialState, action: TodosAction): Todo[] => {
  switch(action.type) {
    case FETCH:
      return action.payload;

    // case ADD:
    //   return;

    case DEL:
      const filterTodos: Todo[] = state.filter((todo: Todo) => todo.id !== action.payload);
      return filterTodos;

    case CHECK:
      const checkedTodos: Todo[] = state.map(
        (todo: Todo): Todo => {
          if (todo.id === action.payload) {
            todo.completed = !todo.completed ? true : false;
          }
          return todo;
        });
      return checkedTodos;

    default:
      return state;
  }
}

export default todoReducer;
