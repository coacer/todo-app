import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Checkbox, Radio, Button } from '@material-ui/core';

import { RootState } from "interfaces";
import { fetchTodos, delTodo, checkTodo } from "store/actions/todos";
import { Todo } from "interfaces";

const todosSelector = (state: RootState) => state.todos;

const TodosIndex: React.FC = () => {
  const [isFilterTodos, setIsFilterTodos] = useState(false);

  const allTodos = useSelector(todosSelector);
  const dispatch = useDispatch();
  const filterTodos = allTodos.filter((todo: Todo) => !todo.completed);
  const todos = isFilterTodos ? filterTodos : allTodos;

  // dom生成/更新時にallTodosがゼロだったらフェッチ
  useEffect((): void => {
    if (allTodos.length > 0) return;
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
    <li
      key={todo.id}
      style={{ listStyle: "none" }}
    >
      <Checkbox
        checked={todo.completed}
        onChange={handleChangeCheckbox(todo.id)}
        value="primary"
      />
      {todo.id} / {todo.title}
      {/* <button onClick={handleClickDelete(todo.id)}>Delete</button> */}
        <Button
          variant="outlined"
          color="secondary"
          onClick={handleClickDelete(todo.id)}
          style={{ marginLeft: "20px" }}
        >
          Delete
      </Button>
    </li>
  ));

  return (
    <>
      <Radio
        checked={!isFilterTodos}
        onChange={() => setIsFilterTodos(false)}
      />
      All
      <br />
      <Radio
        checked={isFilterTodos}
        onChange={() => setIsFilterTodos(true)}
      />
      Not Completed
      <ul>
        {todosElements}
      </ul>
    </>
  );

};

export default TodosIndex;
