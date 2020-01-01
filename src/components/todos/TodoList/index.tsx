import React from "react";

import { Todo } from "interfaces";
import TodoItem from "components/todos/TodoItem";

interface Props {
  todos: Todo[];
}

const TodoList: React.FC<Props> = ({ todos }) => {
  return (
    <>
      {todos.map((todo: Todo) => (
        <TodoItem
        todo={todo}
        />
      ))}
    </>
  );
};

export default TodoList;
