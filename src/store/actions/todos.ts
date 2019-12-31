import { Action, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import axios from "axios";

import { Todo } from "interfaces";
import { ActionTypes as LoadActionTypes, LoadAction } from "./load";

export enum ActionTypes {
  FETCH_TODOS = "FETCH_TODOS",
  ADD_TODO = "ADD_TODO",
  DEL_TODO = "DEL_TODO",
  CHECK_TODO = "CHECK_TODO",
}

// fetchTodosを呼び出す際に渡すactionの型
interface FetchTodosAction extends Action {
  type: ActionTypes.FETCH_TODOS;
  payload: Todo[];
}

// addTodoを呼び出す際に渡すactionの型
interface AddTodoAction extends Action {
  type: ActionTypes.ADD_TODO;
  payload: Todo;
}

// delTodoを呼び出す際に渡すactionの型
interface DelTodoAction extends Action {
  type: ActionTypes.DEL_TODO;
  payload: number;
}

// checkTodoを呼び出す際に渡すactionの型
interface CheckTodoAction extends Action {
  type: ActionTypes.CHECK_TODO;
  payload: number;
}

// fetchTodo, addTodo, delTodo, checkTodoを呼び出す際に渡すactionの型いずれか
export type TodosAction =
  | FetchTodosAction
  | AddTodoAction
  | DelTodoAction
  | CheckTodoAction;


// ====== Action Creators ======

// todosをフェッチ
export const fetchTodos = (): ThunkAction<
    void, // dispatchの戻り値の型
    Todo[], // stateの型
    undefined, // dispatchとgetStateの他にもう一つ取れる引数の型
    FetchTodosAction // actionの型
  > => async (
    dispatch: Dispatch<FetchTodosAction | LoadAction> // <>にactionの型
  ): Promise<LoadAction> => { // <>promise処理内の返り値
    try {
      dispatch({
        type: LoadActionTypes.REQUEST
      });
      const { data } = await axios.get('todos');

      // APIに含まれてる不要なデータ(userId)を除去
      const todos = data.map((todo: Todo & { userId: number }): Todo => ({
        id: todo.id,
        title: todo.title,
        completed: todo.completed,
      }));

      dispatch({
        type: ActionTypes.FETCH_TODOS,
        payload: todos
      });

      return dispatch({
        type: LoadActionTypes.SUCCESS
      });

    } catch(e) {
      dispatch({
        type: ActionTypes.FETCH_TODOS,
        payload: []
      });

      return dispatch({
        type: LoadActionTypes.SUCCESS
      });
    }
  };

// todoを削除
export const delTodo = (id: number): DelTodoAction => ({
  type: ActionTypes.DEL_TODO,
  payload: id
});

// todoチェック
export const checkTodo = (id: number): CheckTodoAction => ({
  type: ActionTypes.CHECK_TODO,
  payload: id
});
