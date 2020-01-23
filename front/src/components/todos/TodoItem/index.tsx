import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { Checkbox, Button } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import styled from 'styled-components';

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
    <Wrapper>
      <li
        style={{ listStyle: "none" }}
      >
        <Checkbox
          checked={todo.completed}
          onChange={handleChangeCheckbox(todo.id)}
          value="primary"
        />
        <span className="todo-title">
          {todo.title}
        </span>
          <IconButton
            onClick={handleClickDelete(todo.id)}
            style={{ float: "right" }}
          >
            <DeleteRoundedIcon/>
          </IconButton>
      </li>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 5px;
  background-color: #fffcfd;
  box-shadow: 1px 1px 5px #ddd;
  margin-bottom: 10px;
  border-radius: 5px;
`;

export default TodoItem;
