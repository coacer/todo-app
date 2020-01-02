import axios from "axios";
// storeのモックを作るプラグイン
import createMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import { ActionTypes as LoadActionTypes, LoadAction } from "../../load";
import {
  ActionTypes as TodosActionTypes,
  fetchTodos,
  FetchTodosAction,
  delTodo,
  DelTodoAction,
  checkTodo,
  CheckTodoAction
} from "../";

const middlewares = [thunk];
const mockStore = createMockStore(middlewares);

// fetchTodosを呼び出す際に使うaxiosをモック化
jest.mock('axios');
// mockResolvedValueを呼び出す際にtype errorになるからアノテーション
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Todos Action Creator', () => {

  it('should delTodo creates correct action', async () => {
    const dammyTodos = [
      {
        id: 1,
        title: "hogehoge",
        completed: false,
      },
      {
        id: 2,
        title: "hogehoge",
        completed: true,
      },
      {
        id: 2,
        title: "hogehoge",
        completed: false,
      },
    ];
    // axios.getの返り値を設定
    mockedAxios.get.mockResolvedValue({ data: dammyTodos });

    const expectedActions: (LoadAction | FetchTodosAction)[] = [
      { type:  LoadActionTypes.REQUEST },
      { type: TodosActionTypes.FETCH_TODOS, payload: dammyTodos },
      { type:  LoadActionTypes.SUCCESS },
    ];

    const store = mockStore({ todos: [] });

    await store.dispatch(fetchTodos());
    // store.getActionsでdispatchで渡された引数のアクション一覧を配列で返す
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should delTodo creates correct action', () => {
    const action: DelTodoAction = delTodo(1);
    expect(action.payload).toBe(1);
  });

  it('should checkTodo creates correct action', () => {
    const action: CheckTodoAction = checkTodo(1);
    expect(action.payload).toBe(1);
  });

})
