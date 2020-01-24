import React, { useState, FormEvent, ChangeEvent } from "react";
import { useDispatch } from 'react-redux';
import { addTodo } from 'store/actions/todos';

const TodoForm: React.FC = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(addTodo(title));
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={handleChange}/>
      <input type="submit" />
    </form>
  );
};

export default TodoForm;
