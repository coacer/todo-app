import React from "react";

import { Todo } from "interfaces";
import TodoItem from "components/todos/TodoItem";

interface Props {
  todos: Todo[];
}

export type TodoListProps = Props;

const TodoList: React.FC<Props> = ({ todos }) => {
  return (
    <>
      {todos.map((todo: Todo) => (
        <TodoItem
          todo={todo}
          key={todo.id}
        />
      ))}
    </>
  );
};

export default TodoList;
