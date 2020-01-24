import React, { useState, FormEvent, ChangeEvent } from "react";

const TodoForm: React.FC = () => {
  const [title, setTitle] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log(title);
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
