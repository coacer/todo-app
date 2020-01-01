import React from "react";
import { shallow } from "enzyme";

import TodoItem, { TodoItemProps } from "../";

const mockDispatch = jest.fn()

jest.mock('react-redux', () => ({
    useSelector: jest.fn(fn => fn()),
    useDispatch: () => mockDispatch,
}));

describe('<TodoItem />', () => {

  afterEach(() => {
    jest.restoreAllMocks()
  });

  it('display a todo information', () => {
    const props: TodoItemProps = {
      todo: {
        id: 1,
        title: "Jestとenzymeを勉強する",
        completed: false
      }
    };

    const wrapper = shallow(<TodoItem {...props} />);

    expect(wrapper.find(".todo-id").text()).toBe("1");
    expect(wrapper.find(".todo-title").text()).toBe("Jestとenzymeを勉強する");
  });
});
