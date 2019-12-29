import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { RootState } from "interfaces";
import { fetchTodos } from "store/actions/todos";
import { Todo } from "interfaces";

const todosSelector = (state: RootState) => state.todos;

const TodosIndex: React.FC = () => {
  const todos = useSelector(todosSelector);
  const dispatch = useDispatch();

  useEffect((): void => {
    if (todos.length > 0) return;
    dispatch(fetchTodos());
  });

  const todosElements: React.ReactElement[] = todos.map((todo: Todo) => (
    <li key={todo.id}>{todo.id} / {todo.title} / {todo.completed ? "true" : "false"}</li>
  ));

  return (
    <ul>
      {todosElements}
    </ul>
  );
};

export default TodosIndex;
