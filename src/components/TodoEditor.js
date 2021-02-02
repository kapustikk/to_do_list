import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import todosActions from '../redux/todos/todos-actions';
import s from './Todolist.module.css';

export default function TodoEditor({ onSave }) {
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    setMessage(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (message === '') {
      return alert('Заполни текст заметки.');
    }

    dispatch(todosActions.addTodo(message));
    onSave();
    setMessage('');
  };

  return (
    <form className={s.TodoEditor} onSubmit={handleSubmit}>
      <textarea value={message} onChange={handleChange}></textarea>
      <button type="submit" className={s.button}>
        Создать
      </button>
    </form>
  );
}
