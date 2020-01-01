import React from "react";
import { shallow } from "enzyme";

import TodoItem, { TodoItemProps } from "../";
import { Checkbox, Button } from '@material-ui/core';
import { delTodo, checkTodo } from "store/actions/todos";

// dispatchメソッドのモック作成
const mockDispatch = jest.fn()

// Providerでstoreを渡してないからredux hooksのモックを作成
// モックを作らない場合hooks呼び出しでエラーになる
// モックを作成する以外の対処法として、単純にstoreを作ってProviderでラップする方法もあるが
// Unitテストにならないのでモックを使用
jest.mock('react-redux', () => ({
    useSelector: jest.fn(fn => fn()),
    useDispatch: () => mockDispatch,
}));

describe('<TodoItem />', () => {

  afterEach(() => {
    // それぞれのテスト終了後にモックを初期化
    jest.resetAllMocks()
  });

  // ダミーデータ
  const props: TodoItemProps = {
    todo: {
      id: 1,
      title: "Jestとenzymeを勉強する",
      completed: false
    }
  };

  it('display informations of todo', () => {

    // shallowでコンポーネントをレンダリング
    // shallowは子コンポーネントをレンダリングしない
    // 逆にmountはレンダリングする
    const wrapper = shallow(<TodoItem {...props} />);

    expect(wrapper.find(".todo-id").text()).toBe("1");
    expect(wrapper.find(".todo-title").text()).toBe("Jestとenzymeを勉強する");
  });

  it('display components', () => {
    const wrapper = shallow(<TodoItem {...props} />);
    // shallowでレンダリングしてるためfindで子コンポーネントを直接指定できる
    // mountの場合は再帰的に全てレンダリングされるため, 実際に描画される要素をする('button'とか)
    expect(wrapper.find(Button).length).toBe(1);
    expect(wrapper.find(Checkbox).length).toBe(1);
  });

  it('should dispatch be called when Button is clicked', () => {
    const wrapper = shallow(<TodoItem {...props} />);
    // sinulateでイベント発火
    wrapper.find(Button).simulate('click');
    // モックは何回呼び出されたか、何を引数に渡されたかなどを知っている
    expect(mockDispatch.mock.calls.length).toBe(1);
    expect(mockDispatch).toHaveBeenCalledWith(delTodo(props.todo.id));
  });

  it('should dispatch be called when Checkbox is changed', () => {
    const wrapper = shallow(<TodoItem {...props} />);
    // sinulateでイベント発火
    wrapper.find(Checkbox).simulate('change');
    // モックは何回呼び出されたか、何を引数に渡されたかなどを知っている
    expect(mockDispatch.mock.calls.length).toBe(1);
    expect(mockDispatch).toHaveBeenCalledWith(checkTodo(props.todo.id));
  });

});
