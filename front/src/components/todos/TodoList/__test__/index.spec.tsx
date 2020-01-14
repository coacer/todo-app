import React from "react";
import { shallow, ShallowWrapper } from "enzyme";

import TodoList, { TodoListProps } from "../";
import TodoItem from "../../TodoItem";

describe('<TodoList />', () => {
  const props: TodoListProps = {
    todos: [
      {
        id: 1,
        title: "8時間は必ず寝る",
        completed: false
      },
      {
        id: 2,
        title: "足湯に入る",
        completed: false
      },
      {
        id: 3,
        title: "hogehogeする",
        completed: true
      },
    ]
  };

  it('displays three TodoItem components', () => {
    const wrapper: ShallowWrapper<TodoListProps, undefined> = shallow(<TodoList {...props} />);
    expect(wrapper.find(TodoItem).length).toBe(props.todos.length);
  });

});
