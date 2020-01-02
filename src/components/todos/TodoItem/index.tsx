import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { Checkbox, Button } from '@material-ui/core';

import { Todo } from "interfaces";
import { delTodo, checkTodo } from "store/actions/todos";

interface Props {
  todo: Todo;
}

export type TodoItemProps = Props;

const TodoItem: React.FC<Props> = ({ todo }) => {

  const dispatch = useDispatch();

  // deleteボタンクリックハンドラ
  const handleClickDelete = useCallback((id: number) => (): void => {
    dispatch(delTodo(id));
  }, [dispatch]);

  // checkboxハンドラ
  const handleChangeCheckbox = useCallback((id: number) => (): void => {
    dispatch(checkTodo(id));
  }, [dispatch]);

  return(
    <li
      style={{ listStyle: "none" }}
    >
      <Checkbox
        checked={todo.completed}
        onChange={handleChangeCheckbox(todo.id)}
        value="primary"
      />
      <span className="todo-id">
        {todo.id}
      </span>:
      <span className="todo-title">
        {todo.title}
      </span>
      <Button
        variant="outlined"
        color="secondary"
        onClick={handleClickDelete(todo.id)}
        style={{ marginLeft: "20px" }}
      >
        Delete
      </Button>
    </li>
  );
};

export default TodoItem;
