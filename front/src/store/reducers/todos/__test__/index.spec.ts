import sinon from "sinon";
import reducer from "..";
import {
  ActionTypes,
  FetchTodosAction,
  delTodo,
  checkTodo,
  DelTodoAction,
  CheckTodoAction
} from "store/actions/todos";
import { Todo } from "interfaces";

describe('todoReducers', () => {

  // 良い書き方
  it('can fetch todos', () => {
    const initialState: Todo[] = [];
    const expectState: Todo[] = [
      {
        id: 1,
        title: "hoge",
        completed: false
      },
      {
        id: 2,
        title: "foo",
        completed: true
      },
    ];

    // dispatchのように振る舞う関数定義
    const dispatchFake = (action: FetchTodosAction) => reducer(initialState, action);
    const resultState = dispatchFake({ type: ActionTypes.FETCH_TODOS, payload: expectState });
    expect(resultState).toEqual(expectState);
  });

  // あんま良くないテストの書き方だけどスタブを使う練習
  it('can fetch todos(bad test)', () => {
    const initialState: Todo[] = [];
    const expectState: Todo[] = [
      {
        id: 1,
        title: "hoge",
        completed: false
      },
      {
        id: 2,
        title: "foo",
        completed: true
      },
    ];
    // fetchTodos関数のスタブ作成
    const fetchTodosStub = sinon.stub();
    fetchTodosStub
      .onCall(0)
      .returns({
        type: ActionTypes.FETCH_TODOS,
        payload: expectState
      });

    // dispatchのように振る舞う関数定義
    const dispatchFake = (action) => reducer(initialState, action);
    const resultState = dispatchFake(fetchTodosStub());
    expect(resultState).toEqual(expectState);
  });

  it('can delete todo', () => {
    const initialState: Todo[] = [
      {
        id: 1,
        title: "hoge",
        completed: false
      },
      {
        id: 2,
        title: "foo",
        completed: true
      },
    ];
    const dispatchFake = (action: DelTodoAction) => reducer(initialState, action);
    const expectState = [
      {
        id: 2,
        title: "foo",
        completed: true
      },
    ];
    const resultState: Todo[] = dispatchFake(delTodo(1));
    expect(expectState).toEqual(resultState);
  });

  it('can check todo', () => {
    const initialState: Todo[] = [
      {
        id: 1,
        title: "hoge",
        completed: false
      },
      {
        id: 2,
        title: "foo",
        completed: true
      },
    ];

    const dispatchFake = (action: CheckTodoAction) => reducer(initialState, action);
    const expectState: Todo[] = [
      {
        id: 1,
        title: "hoge",
        completed: true
      },
      {
        id: 2,
        title: "foo",
        completed: true
      },
    ];
    const resultState: Todo[] = dispatchFake(checkTodo(1));
    expect(expectState).toEqual(resultState);
  });

});
