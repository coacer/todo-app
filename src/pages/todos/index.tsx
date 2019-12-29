import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import { RootState } from "interfaces";
import { fetchTodos, delTodo, checkTodo } from "store/actions/todos";
import { Todo } from "interfaces";

const todosSelector = (state: RootState) => state.todos;

const TodosIndex: React.FC = () => {
  const todos = useSelector(todosSelector);
  const dispatch = useDispatch();

  // dom生成/更新時にtodosがゼロだったらフェッチ
  useEffect((): void => {
    if (todos.length > 0) return;
    dispatch(fetchTodos());
  });

  // deleteボタンクリックハンドラ
  const handleClickDelete = useCallback((id: number) => (): void => {
    dispatch(delTodo(id));
  }, [dispatch]);

  // checkboxハンドラ
  const handleChangeCheckbox = useCallback((id: number) => (): void => {
    dispatch(checkTodo(id));
  }, [dispatch]);

  const todosElements: React.ReactElement[] = todos.map((todo: Todo) => (
    <li key={todo.id}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleChangeCheckbox(todo.id)}
      />
      {todo.id} / {todo.title} / {todo.completed ? "true" : "false"}
      <button onClick={handleClickDelete(todo.id)}>Delete</button>
    </li>
  ));

  return (
    <ul>
      {todosElements}
    </ul>
  );
};

export default TodosIndex;
