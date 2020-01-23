import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CircularProgress } from '@material-ui/core';

import { RootState } from "interfaces";
import { fetchTodos } from "store/actions/todos";
import { Todo } from "interfaces";
import TodoList from "components/todos/TodoList";
import SelectFilterBox from "components/todos/SelectFilterBox";

const todosSelector = (state: RootState) => state.todos;
const loadSelector = (state: RootState) => state.load;

const TodosIndex: React.FC = () => {

  const [isFilterTodos, setIsFilterTodos] = useState(false);

  const allTodos = useSelector(todosSelector);
  const isLoading = useSelector(loadSelector);
  const dispatch = useDispatch();
  const filterTodos = allTodos.filter((todo: Todo) => !todo.completed);
  const todos = isFilterTodos ? filterTodos : allTodos;

  useEffect((): void => {
    dispatch(fetchTodos());
  }, []);

  const handleChangeToggleFilter = useCallback((): void => {
    setIsFilterTodos(!isFilterTodos);
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
