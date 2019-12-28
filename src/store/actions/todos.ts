import { Action, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import axios from "axios";
import { ActionTypes } from "./types";

import { Todo } from "interfaces";


// fetchTodosを呼び出す際に渡すactionの型
interface FetchTodosAction extends Action {
  type: ActionTypes.FETCH_TODOS;
  payload: Todo[];
}

// addTodoを呼び出す際に渡すactionの型


// delTodoを呼び出す際に渡すactionの型


// checkTodoを呼び出す際に渡すactionの型

// fetchTodo, addTodo, delTodo, checkTodoを呼び出す際に渡すactionの型いずれか
export type TodosAction = FetchTodosAction;

export const fetchTodos = (): ThunkAction<
    void, // dispatchの戻り値の型
    Todo[], // stateの型
    undefined, // dispatchとgetStateの他にもう一つ取れる引数の型
    FetchTodosAction // actionの型
  > => async (
    dispatch: Dispatch<FetchTodosAction> // <>にactionの型
  ): Promise<FetchTodosAction> => { // <>promise処理内の返り値
    const { data } = await axios.get('todos');

    // APIに含まれてる不要なデータ(userId)を除去
    const todos = data.map((todo: Todo & { userId: number }): Todo => ({
      id: todo.id,
      title: todo.title,
      completed: todo.completed,
    }));

    return dispatch({
      type: ActionTypes.FETCH_TODOS,
      payload: todos
    });

  };
