import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CircularProgress } from '@material-ui/core';

import { RootState } from "interfaces";
import { fetchTodos } from "store/actions/todos";
import { Todo } from "interfaces";
import TodoList from "components/todos/TodoList";
import SelectFilterBox from "components/todos/SelectFilterBox";

const todosSelector = (state: RootState) => state.todos;

const TodosIndex: React.FC = () => {

  const [isFilterTodos, setIsFilterTodos] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const allTodos = useSelector(todosSelector);
  const dispatch = useDispatch();
  const filterTodos = allTodos.filter((todo: Todo) => !todo.completed);
  const todos = isFilterTodos ? filterTodos : allTodos;

  // dom生成/更新時にallTodosがゼロだったらフェッチ
  useEffect((): void => {
    if (allTodos.length > 0) return;
    dispatch(fetchTodos());
  }, []);

  const handleChangeToggleFilter = useCallback((): void => {
    setIsLoading(true);
    setTimeout(() => {
      setIsFilterTodos(!isFilterTodos);
      setIsLoading(false);
    }, 1000);
  }, [isFilterTodos]);

  return (
    <>
      <SelectFilterBox
        isFilter={isFilterTodos}
        onChange={handleChangeToggleFilter}
      />
      <ul>
        {isLoading ? <CircularProgress /> : <TodoList todos={todos} />}
      </ul>
    </>
  );

};

export default TodosIndex;
